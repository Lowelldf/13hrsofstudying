// ─── SOURCES ──────────────────────────────────────────────────
const FYINX_BASE    = 'https://fyinx.wtf';
const TRUFFLED_BASE = 'https://truffled.lol';
const RADON_BASE    = 'https://radon.games';
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
    url:   RADON_BASE + '/games/' + slug,
    thumb: RADON_BASE + '/cdn/thumbnails/' + slug + '.webp',
    src:   'radon',
  }));
}

// ─── IN-MEMORY CACHE (resets per Worker instance) ─────────────
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
  return entries;
}

async function fetchTruffled() {
  if (cache.truffled && Date.now() - cache.ts.truffled < CACHE_TTL) return cache.truffled;
  const r = await fetch(TRUFFLED_BASE + '/', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0 Safari/537.36' },
    signal: AbortSignal.timeout(12000),
  });
  const text = await r.text();
  const entries = [];

  // Try embedded JSON array first (games=[...] or data=[...])
  const jsonMatch = text.match(/(?:gamesData|games|data)\s*[=:]\s*(\[[\s\S]{10,}\])/);
  if (jsonMatch) {
    try {
      const arr = JSON.parse(jsonMatch[1]);
      arr.filter(g => g.name && (g.url || g.path || g.slug)).forEach(g => {
        const rel = g.url || g.path || ('/' + g.slug);
        const absUrl = rel.startsWith('http') ? rel : TRUFFLED_BASE + (rel.startsWith('/') ? rel : '/' + rel);
        const t = g.thumbnail || g.thumb || g.image || '';
        entries.push({
          name: g.name,
          url: absUrl,
          thumb: t ? (t.startsWith('http') ? t : TRUFFLED_BASE + (t.startsWith('/') ? t : '/' + t)) : '',
          src: 'truffled',
        });
      });
    } catch {}
  }

  // Fallback: scrape anchor + img combos from HTML
  if (entries.length === 0) {
    const re = /<a[^>]+href=["']([^"'#?]+)["'][^>]*>[\s\S]{0,600}?<img[^>]+(?:src=["']([^"']+)["'][^>]*alt=["']([^"']+)["']|alt=["']([^"']+)["'][^>]*src=["']([^"']+)["'])/gi;
    let m;
    while ((m = re.exec(text)) !== null) {
      const href = m[1], imgSrc = m[2] || m[5] || '', alt = m[3] || m[4] || '';
      if (!alt || alt.length < 2) continue;
      const absUrl   = href.startsWith('http') ? href : TRUFFLED_BASE + (href.startsWith('/') ? href : '/' + href);
      const absThumb = imgSrc ? (imgSrc.startsWith('http') ? imgSrc : TRUFFLED_BASE + (imgSrc.startsWith('/') ? imgSrc : '/' + imgSrc)) : '';
      entries.push({ name: alt, url: absUrl, thumb: absThumb, src: 'truffled' });
    }
  }

  cache.truffled = entries;
  cache.ts.truffled = Date.now();
  console.log('Fetched', entries.length, 'Truffled games via scrape');
  return entries;
}

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

// ─── HTML REWRITER (replaces cheerio) ─────────────────────────
// Uses Cloudflare's built-in HTMLRewriter — no npm deps needed
function rewriteHtml(html, target, origin) {
  // We'll do simple regex-based rewriting since HTMLRewriter needs streaming
  // and we already have the full string. This matches what cheerio did.
  const base = target;

  function absUrl(val) {
    if (!val) return val;
    if (val.startsWith('data:') || val.startsWith('javascript:') ||
        val.startsWith('#') || val.startsWith('mailto:') || val.startsWith('blob:')) return val;
    try {
      const abs = new URL(val, base).href;
      if (abs.startsWith('http')) return '/proxy?url=' + encodeURIComponent(abs);
    } catch {}
    return val;
  }

  // Rewrite src, href, action attributes
  html = html.replace(/(<[^>]+\s)(src|href|action)=["']([^"']+)["']/gi, (match, pre, attr, val) => {
    return pre + attr + '="' + absUrl(val) + '"';
  });

  // Remove base tags
  html = html.replace(/<base[^>]*>/gi, '');

  // Inject intercept script right after <head>
  const script = buildInterceptScript(origin, target);
  html = html.replace(/(<head[^>]*>)/i, '$1' + script);

  return html;
}

// ─── MAIN FETCH HANDLER ────────────────────────────────────────
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const origin = url.origin;

    // ── API: Radon games ──────────────────────────────────────
    if (path === '/api/games/radon') {
      return new Response(JSON.stringify(fetchRadon()), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      });
    }

    // ── API: Fyinx games ─────────────────────────────────────
    if (path === '/api/games/original') {
      try {
        const games = await fetchFyinx();
        return new Response(JSON.stringify(games), {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: { 'Content-Type': 'application/json' } });
      }
    }

    // ── API: Truffled games ───────────────────────────────────
    if (path === '/api/games/truffled') {
      try {
        const games = await fetchTruffled();
        return new Response(JSON.stringify(games), {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: { 'Content-Type': 'application/json' } });
      }
    }

    // ── Thumbnail proxy ───────────────────────────────────────
    if (path === '/thumb') {
      const thumbUrl = url.searchParams.get('url');
      if (!thumbUrl) return new Response('', { status: 400 });
      try {
        const r = await fetch(thumbUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          signal: AbortSignal.timeout(6000),
        });
        const type = r.headers.get('content-type') || 'image/webp';
        return new Response(r.body, {
          headers: {
            'Content-Type': type,
            'Cache-Control': 'public, max-age=7200',
          },
        });
      } catch {
        return new Response('', { status: 404 });
      }
    }

    // ── /go redirect ──────────────────────────────────────────
    if (path === '/go') {
      let target = url.searchParams.get('url') || '';
      if (!target) return Response.redirect(origin + '/', 302);
      if (!target.startsWith('http://') && !target.startsWith('https://')) {
        target = target.includes('.') && !target.includes(' ')
          ? 'https://' + target
          : 'https://' + encodeURIComponent(target);
      }
      return Response.redirect(origin + '/proxy?url=' + encodeURIComponent(target), 302);
    }

    // ── Proxy ─────────────────────────────────────────────────
    if (path === '/proxy') {
      const target = url.searchParams.get('url');
      if (!target) return Response.redirect(origin + '/', 302);

      let targetUrl;
      try { targetUrl = new URL(target); } catch {
        return new Response('Invalid URL', { status: 400 });
      }
      if (targetUrl.protocol !== 'http:' && targetUrl.protocol !== 'https:')
        return new Response('Unsupported scheme', { status: 400 });

      const MAX = 15 * 1024 * 1024;

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
          redirect: 'manual',
          signal: AbortSignal.timeout(12000),
        });

        // Handle redirects manually so we can rewrite through proxy
        if (response.status >= 300 && response.status < 400) {
          const location = response.headers.get('location');
          if (location) {
            try {
              const abs = new URL(location, target).href;
              return Response.redirect(origin + '/proxy?url=' + encodeURIComponent(abs), 302);
            } catch {}
          }
        }

        const ct = response.headers.get('content-type') || '';

        if (ct.includes('text/html')) {
          const html = await response.text();
          if (new TextEncoder().encode(html).length > MAX)
            return new Response('Page too large', { status: 502 });

          const rewritten = rewriteHtml(html, target, origin);
          return new Response(rewritten, {
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'X-Frame-Options': 'ALLOWALL',
              'Content-Security-Policy': '',
            },
          });

        } else if (ct.includes('javascript') || ct.includes('text/plain')) {
          let js = await response.text();
          for (const domain of INTERCEPT_DOMAINS) {
            const re = new RegExp('https?://' + domain.replace('.', '\\.'), 'g');
            js = js.replace(re, origin + '/proxy?url=' + encodeURIComponent('https://' + domain));
          }
          return new Response(js, {
            headers: {
              'Content-Type': ct,
              'Cache-Control': 'public, max-age=300',
            },
          });

        } else {
          const ab = await response.arrayBuffer();
          if (ab.byteLength > MAX) return new Response('Too large', { status: 502 });
          return new Response(ab, {
            headers: {
              'Content-Type': ct,
              'X-Frame-Options': 'ALLOWALL',
              'Cache-Control': 'public, max-age=300',
            },
          });
        }

      } catch (err) {
        const msg = err.name === 'AbortError' ? 'Request timed out' : 'Could not load: ' + err.message;
        return new Response(msg, { status: 502 });
      }
    }

    // ── Static files / index.html (served via Cloudflare Assets) 
    // All other routes fall through to the static assets configured in wrangler.toml
    return env.ASSETS.fetch(request);
  }
};
