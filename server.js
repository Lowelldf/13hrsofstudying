const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));
const cheerio = require('cheerio');
const { URL } = require('url');
const path = require('path');

const app = express();
const PORT = 5000;

// ─── SOURCES ──────────────────────────────────────────────────
const FYINX_BASE    = 'https://fyinx.wtf';
const TRUFFLED_BASE = 'https://truffled.lol';
const RADON_BASE    = 'https://raw.githubusercontent.com/Radon-Games/Radon-Games-Assets/main/html';
const INTERCEPT_DOMAINS = ['truffled.lol', 'fyinx.wtf', 'indica.bond'];

// ─── RADON GAMES LIST ─────────────────────────────────────────
const RADON_SLUGS = [
  '2048','a-dark-room','agario-minigame','align-4','astray','basket-random',
  'basketball-stars','bike-mania','boxing-random','breaklock','celeste','chroma',
  'colorun','cookie','cubefield','dinosaur','donut-boy','doodle-jump',
  'fire-truck-dash','fireboy-and-watergirl-forest-temple','flakboy','flappy-2048',
  'flappybird','friday-night-funkin--vs-ex','friday-night-funkin--week-6',
  'friendlyfire','geometry-dash-remastered','geometry','google-snake',
  'google-solitaire','gopher-kart','gun-knight','hacker-typer','hexgl','hextris',
  'hill-racing','mc-classic','microsoft-flight-simulator','minesweeper',
  'moto-x3m-pool-party','moto-x3m-spooky-land','moto-x3m-winter','moto-x3m',
  'muffin-knight','pacman','radius-raid','retro-bowl','ritz','run-3',
  'running-bot-xmas-gifts','sans-fight','sm64','soccer-random','spaceinvaders',
  'super-smash-flash-2a','super-smash-flash-2b','tanktrouble','there-is-no-game',
  'unfair-dyne','uno','vex3','vex4','vex5','volley-random','webgl-rollingsky',
  'wordle','zombotron-2-time-machine','zombotron-2','zombotron','zombsroyale'
];

const RADON_NAME_OVERRIDES = {
  '2048': '2048', 'mc-classic': 'Minecraft Classic', 'sm64': 'Super Mario 64',
  'friday-night-funkin--vs-ex': 'FNF: Vs Ex',
  'friday-night-funkin--week-6': 'FNF: Week 6',
  'super-smash-flash-2a': 'Super Smash Flash 2 (A)',
  'super-smash-flash-2b': 'Super Smash Flash 2 (B)',
  'moto-x3m': 'Moto X3M', 'moto-x3m-pool-party': 'Moto X3M Pool Party',
  'moto-x3m-spooky-land': 'Moto X3M Spooky Land', 'moto-x3m-winter': 'Moto X3M Winter',
  'vex3': 'Vex 3', 'vex4': 'Vex 4', 'vex5': 'Vex 5',
  'zombsroyale': 'Zombs Royale', 'hexgl': 'HexGL', 'hextris': 'Hextris',
  'flappybird': 'Flappy Bird', 'flappy-2048': 'Flappy 2048',
  'pacman': 'Pac-Man', 'spaceinvaders': 'Space Invaders',
  'run-3': 'Run 3', 'colorun': 'Color Run',
  'webgl-rollingsky': 'Rolling Sky', 'agario-minigame': 'Agar.io',
  'fireboy-and-watergirl-forest-temple': 'Fireboy & Watergirl',
  'google-snake': 'Google Snake', 'google-solitaire': 'Google Solitaire',
  'a-dark-room': 'A Dark Room', 'align-4': 'Align 4',
  'geometry-dash-remastered': 'Geometry Dash', 'there-is-no-game': 'There Is No Game',
  'zombotron-2-time-machine': 'Zombotron 2: Time Machine',
  'microsoft-flight-simulator': 'Flight Simulator', 'hill-racing': 'Hill Racing',
  'retro-bowl': 'Retro Bowl', 'sans-fight': 'Sans Fight',
  'basket-random': 'Basket Random', 'basketball-stars': 'Basketball Stars',
  'boxing-random': 'Boxing Random', 'soccer-random': 'Soccer Random',
  'volley-random': 'Volley Random', 'running-bot-xmas-gifts': 'Running Bot',
};

function prettifyRadonName(slug) {
  if (RADON_NAME_OVERRIDES[slug]) return RADON_NAME_OVERRIDES[slug];
  return slug.replace(/-+/g,' ').replace(/\b\w/g, c => c.toUpperCase());
}

function fetchRadon() {
  return RADON_SLUGS.map(slug => ({
    name:  prettifyRadonName(slug),
    url:   RADON_BASE + '/' + slug + '/index.html',
    thumb: '',
    src:   'radon',
  }));
}

// ─── GAME CACHE ────────────────────────────────────────────────
const cache = { original: null, truffled: null, ts: {} };
const CACHE_TTL = 30 * 60 * 1000;

async function fetchFyinx() {
  if (cache.original && Date.now() - cache.ts.original < CACHE_TTL) return cache.original;
  const r = await fetch(FYINX_BASE + '/', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0 Safari/537.36' },
    signal: AbortSignal.timeout(12000),
  });
  const text = await r.text();

  const arrayStart = text.indexOf('gamesData=[');
  if (arrayStart === -1) {
    console.warn('Fyinx: gamesData not found in page');
    cache.original = [];
    cache.ts.original = Date.now();
    return [];
  }

  const entries = [];
  const re = /\{id:"([^"]+)",name:"([^"]+)",url:"([^"]+)"\}/g;
  const chunk = text.slice(arrayStart);
  let m;
  while ((m = re.exec(chunk)) !== null) {
    const [, id, name, relUrl] = m;
    const gameUrl = relUrl.startsWith('http') ? relUrl : FYINX_BASE + '/' + relUrl;
    entries.push({ id, name, url: gameUrl, thumb: FYINX_BASE + '/img/games/' + id + '.webp', src: 'original' });
  }

  cache.original = entries;
  cache.ts.original = Date.now();
  console.log('Fetched', entries.length, 'Fyinx games');
  return entries;
}

async function fetchTruffled() {
  if (cache.truffled && Date.now() - cache.ts.truffled < CACHE_TTL) return cache.truffled;
  const r = await fetch(TRUFFLED_BASE + '/js/json/g.json', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0 Safari/537.36' },
    signal: AbortSignal.timeout(12000),
  });
  const data = await r.json();
  const raw = data.games || [];
  const entries = raw
    .filter(g => g.name && g.url)
    .map(g => {
      const relUrl   = g.url.startsWith('/')       ? g.url       : '/' + g.url;
      const relThumb = g.thumbnail ? (g.thumbnail.startsWith('/') ? g.thumbnail : '/' + g.thumbnail) : '';
      return {
        name:  g.name,
        url:   TRUFFLED_BASE + relUrl,
        thumb: relThumb ? TRUFFLED_BASE + relThumb : '',
        src:   'truffled',
      };
    });

  cache.truffled = entries;
  cache.ts.truffled = Date.now();
  console.log('Fetched', entries.length, 'Truffled games');
  return entries;
}

// Pre-warm cache
fetchFyinx().catch(e => console.error('Fyinx prefetch:', e.message));
fetchTruffled().catch(e => console.error('Truffled prefetch:', e.message));

// ─── MIDDLEWARE ────────────────────────────────────────────────
app.use((req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1h' }));

// ─── GAME APIS ─────────────────────────────────────────────────
app.get('/api/games/original', async (req, res) => {
  try { res.json(await fetchFyinx()); }
  catch (e) { res.status(502).json({ error: e.message }); }
});
app.get('/api/games/truffled', async (req, res) => {
  try { res.json(await fetchTruffled()); }
  catch (e) { res.status(502).json({ error: e.message }); }
});
app.get('/api/games/radon', (req, res) => {
  res.json(fetchRadon());
});
// ─── THUMBNAIL PROXY ─────────────────────────────────────────
app.get('/thumb', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).end();
  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      signal: AbortSignal.timeout(6000),
    });
    const type = r.headers.get('content-type') || 'image/webp';
    res.set('Content-Type', type);
    res.set('Cache-Control', 'public, max-age=7200');
    res.send(Buffer.from(await r.arrayBuffer()));
  } catch { res.status(404).end(); }
});

// ─── INTERCEPT INJECTION SCRIPT ───────────────────────────────
function buildInterceptScript(origin, targetUrl) {
  let targetOrigin = '';
  try { targetOrigin = new URL(targetUrl).origin; } catch {}
  const safeTarget = targetUrl.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `<script>(function(){
try{
  Object.defineProperty(window,'top',{get:function(){return window;},configurable:true});
  Object.defineProperty(window,'parent',{get:function(){return window;},configurable:true});
  Object.defineProperty(window,'frameElement',{get:function(){return null;},configurable:true});
}catch(e){}
var _d=${JSON.stringify(INTERCEPT_DOMAINS)};
var _p='${origin}/proxy?url=';
var _to='${targetOrigin}';
var _tu='${safeTarget}';
function _abs(u){
  if(!u||u.startsWith('javascript:')||u.startsWith('data:')||u.startsWith('blob:'))return u;
  if(u.startsWith('http'))return u;
  try{return new URL(u,_tu).href;}catch(e){return u;}
}
function _shouldProxy(u){
  if(!u)return false;
  var a=_abs(u);
  return a&&a.startsWith('http');
}
var _of=window.fetch;
window.fetch=function(u,opts){
  var s=typeof u==='string'?u:(u&&u.url?u.url:String(u));
  s=_abs(s);
  if(s&&_d.some(function(d){return s.indexOf(d)>-1;}))return _of(_p+encodeURIComponent(s),opts);
  return _of.apply(this,arguments);
};
var _xo=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(m,u){
  if(typeof u==='string'){var s=_abs(u);if(s&&_d.some(function(d){return s.indexOf(d)>-1;}))arguments[1]=_p+encodeURIComponent(s);}
  return _xo.apply(this,arguments);
};
try{
  var _ps=history.pushState.bind(history);
  history.pushState=function(st,t,u){
    if(u){var a=_abs(String(u));if(a&&!a.startsWith(_p))return _ps(st,t,_p+encodeURIComponent(a));}
    return _ps(st,t,u);
  };
  var _rs=history.replaceState.bind(history);
  history.replaceState=function(st,t,u){
    if(u){var a=_abs(String(u));if(a&&!a.startsWith(_p))return _rs(st,t,_p+encodeURIComponent(a));}
    return _rs(st,t,u);
  };
}catch(e){}
try{
  var _la=Location.prototype.assign;
  Location.prototype.assign=function(u){
    var a=_abs(String(u));
    return _la.call(this,a.startsWith('http')?_p+encodeURIComponent(a):a);
  };
  var _lr=Location.prototype.replace;
  Location.prototype.replace=function(u){
    var a=_abs(String(u));
    return _lr.call(this,a.startsWith('http')?_p+encodeURIComponent(a):a);
  };
  var _lhDesc=Object.getOwnPropertyDescriptor(Location.prototype,'href');
  if(_lhDesc&&_lhDesc.set){
    Object.defineProperty(Location.prototype,'href',{
      get:_lhDesc.get,
      set:function(u){
        var a=_abs(String(u));
        _lhDesc.set.call(this,a.startsWith('http')?_p+encodeURIComponent(a):a);
      },
      configurable:true
    });
  }
}catch(e){}
try{
  var _wo=window.open;
  window.open=function(u,t,f){
    if(u){var a=_abs(String(u));if(a.startsWith('http'))return _wo.call(window,_p+encodeURIComponent(a),t,f);}
    return _wo.apply(window,arguments);
  };
}catch(e){}
})();<\/script>`;
}

// ─── PROXY ────────────────────────────────────────────────────
app.get('/go', (req, res) => {
  let target = req.query.url || '';
  if (!target) return res.redirect('/');
  if (!target.startsWith('http://') && !target.startsWith('https://')) {
    target = target.includes('.') && !target.includes(' ')
      ? 'https://' + target
      : 'https://' + encodeURIComponent(target);
  }
  res.redirect('/proxy?url=' + encodeURIComponent(target));
});

app.get('/proxy', async (req, res) => {
  const target = req.query.url;
  if (!target) return res.redirect('/');
  let targetUrl;
  try { targetUrl = new URL(target); } catch {
    return res.status(400).send('Invalid URL');
  }
  if (targetUrl.protocol !== 'http:' && targetUrl.protocol !== 'https:')
    return res.status(400).send('Unsupported scheme');

  const MAX = 15 * 1024 * 1024;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'identity',
        'Referer': targetUrl.origin,
        'Origin': targetUrl.origin,
      },
      redirect: 'follow',
      signal: controller.signal,
    });

    const location = response.headers.get('location');
    if ((response.status >= 300 && response.status < 400 && location) || response.headers.get('x-redirect-to')) {
      const redirectTo = location || response.headers.get('x-redirect-to');
      try {
        const abs = new URL(redirectTo, target).href;
        clearTimeout(timeout);
        return res.redirect('/proxy?url=' + encodeURIComponent(abs));
      } catch {}
    }

    const ct = response.headers.get('content-type') || '';

    if (ct.includes('text/html')) {
      const html = await response.text();
      if (Buffer.byteLength(html) > MAX) { clearTimeout(timeout); return res.status(502).send('Page too large'); }

      const $ = cheerio.load(html);
      const rewrite = attr => $('[' + attr + ']').each((_, el) => {
        const val = $(el).attr(attr);
        if (!val || val.startsWith('data:') || val.startsWith('javascript:') || val.startsWith('#') || val.startsWith('mailto:') || val.startsWith('blob:')) return;
        try {
          const abs = new URL(val, target).href;
          if (abs.startsWith('http')) $(el).attr(attr, '/proxy?url=' + encodeURIComponent(abs));
        } catch {}
      });
      rewrite('href'); rewrite('src'); rewrite('action');
      $('base').remove();

      // Rewrite inline onclick and similar to catch JS navigation
      $('a[href]').each((_, el) => {
        const cur = $(el).attr('href');
        if (cur && !cur.startsWith('/proxy?url=') && !cur.startsWith('javascript:') && !cur.startsWith('#') && !cur.startsWith('data:')) {
          try {
            const abs = new URL(cur, target).href;
            if (abs.startsWith('http')) $(el).attr('href', '/proxy?url=' + encodeURIComponent(abs));
          } catch {}
        }
      });

      const origin = req.protocol + '://' + req.get('host');
      $('head').prepend(buildInterceptScript(origin, target));

      clearTimeout(timeout);
      res.set('Content-Type', 'text/html; charset=utf-8');
      res.set('X-Frame-Options', 'ALLOWALL');
      res.set('Content-Security-Policy', '');
      res.send($.html());

    } else if (ct.includes('javascript') || ct.includes('text/plain')) {
      let js = await response.text();
      const origin = req.protocol + '://' + req.get('host');
      for (const domain of INTERCEPT_DOMAINS) {
        const re = new RegExp('https?://' + domain.replace('.', '\\.'), 'g');
        js = js.replace(re, origin + '/proxy?url=' + encodeURIComponent('https://' + domain));
      }
      clearTimeout(timeout);
      res.set('Content-Type', ct);
      res.set('Cache-Control', 'public, max-age=300');
      res.send(js);

    } else {
      const ab = await response.arrayBuffer();
      if (ab.byteLength > MAX) { clearTimeout(timeout); return res.status(502).send('Too large'); }
      clearTimeout(timeout);
      res.set('Content-Type', ct);
      res.set('X-Frame-Options', 'ALLOWALL');
      res.set('Cache-Control', 'public, max-age=300');
      res.send(Buffer.from(ab));
    }
  } catch (err) {
    clearTimeout(timeout);
    if (!res.headersSent) res.status(502).send(
      err.name === 'AbortError' ? 'Request timed out' : 'Could not load: ' + err.message
    );
  }
});

// ─── MAIN ─────────────────────────────────────────────────────
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

process.on('uncaughtException', err => console.error('Uncaught:', err));
process.on('unhandledRejection', r => console.error('Rejection:', r));

app.listen(PORT, '0.0.0.0', () => console.log('13 running on port ' + PORT));
