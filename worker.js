// ─── SOURCES ──────────────────────────────────────────────────
const FYINX_BASE    = 'https://fyinx.wtf';
const TRUFFLED_BASE = 'https://truffled.lol';
const RADON_BASE    = 'https://radon.games';
const INTERCEPT_DOMAINS = ['truffled.lol', 'fyinx.wtf', 'indica.bond'];

// ─── USER AGENTS FOR ROTATION ─────────────────────────────────
const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/121.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/605.1.15',
];

function getRandomUserAgent() {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

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

// ─── IN-MEMORY CACHE ──────────────────────────────────────────
const cache = { original: null, truffled: null, ts: {} };
const CACHE_TTL = 30 * 60 * 1000;

async function fetchFyinx() {
  if (cache.original && Date.now() - cache.ts.original < CACHE_TTL) return cache.original;
  const r = await fetch(FYINX_BASE + '/', {
    headers: { 'User-Agent': getRandomUserAgent() },
    signal: AbortSignal.timeout(12000),
  });
  const text = await r.text();
  const arrayStart = text.indexOf('gamesData=[');
  if (arrayStart === -1) { cache.original = []; cache.ts.original = Date.now(); return []; }
  const entries = [];
  const re = /\{id:"([^"]+)",name:"([^"]+)",url:"([^"]+)"\}/g;
  const chunk = text.slice(arrayStart);
  let m;
  while ((m = re.exec(chunk)) !== null) {
    const [, id, name, relUrl] = m;
    const gameUrl = relUrl.startsWith('http') ? relUrl : FYINX_BASE + '/' + relUrl;
    entries.push({ id, name, url: gameUrl, thumb: FYINX_BASE + '/img/games/' + id + '.webp', src: 'original' });
  }
  cache.original = entries; cache.ts.original = Date.now();
  return entries;
}

async function fetchTruffled() {
  if (cache.truffled && Date.now() - cache.ts.truffled < CACHE_TTL) return cache.truffled;
  const r = await fetch(TRUFFLED_BASE + '/', {
    headers: { 'User-Agent': getRandomUserAgent() },
    signal: AbortSignal.timeout(12000),
  });
  const text = await r.text();
  const entries = [];
  const jsonMatch = text.match(/(?:gamesData|games|data)\s*[=:]\s*(\[[\s\S]{10,}\])/);
  if (jsonMatch) {
    try {
      const arr = JSON.parse(jsonMatch[1]);
      arr.filter(g => g.name && (g.url || g.path || g.slug)).forEach(g => {
        const rel = g.url || g.path || ('/' + g.slug);
        const absUrl = rel.startsWith('http') ? rel : TRUFFLED_BASE + (rel.startsWith('/') ? rel : '/' + rel);
        const t = g.thumbnail || g.thumb || g.image || '';
        entries.push({ name: g.name, url: absUrl, thumb: t ? (t.startsWith('http') ? t : TRUFFLED_BASE + (t.startsWith('/') ? t : '/' + t)) : '', src: 'truffled' });
      });
    } catch {}
  }
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
  cache.truffled = entries; cache.ts.truffled = Date.now();
  return entries;
}

// ─── INTERCEPT INJECTION SCRIPT ───────────────────────────────
function buildInterceptScript(origin, targetUrl) {
  let targetOrigin = '';
  try { targetOrigin = new URL(targetUrl).origin; } catch {}
  return `<script>(function(){
var _o=${JSON.stringify(origin)};
var _p=_o+'/proxy?url=';
var _b=${JSON.stringify(targetUrl)};

// Resolve any URL relative to the current proxied page
function _abs(u){
  if(!u||u.startsWith('javascript:')||u.startsWith('data:')||u.startsWith('blob:')||u.startsWith('#'))return u;
  if(u.startsWith(_p))return u; // already proxied
  try{return new URL(u,_b).href;}catch(e){return u;}
}
function _wrap(u){
  var a=_abs(u);
  return(a&&a.startsWith('http'))?_p+encodeURIComponent(a):a;
}

// Override window.location
try{
  Object.defineProperty(window,'top',{get:function(){return window;},configurable:true});
  Object.defineProperty(window,'parent',{get:function(){return window;},configurable:true});
  Object.defineProperty(window,'frameElement',{get:function(){return null;},configurable:true});
}catch(e){}

// Intercept ALL link clicks — catches JS-driven navigation too
document.addEventListener('click',function(e){
  var el=e.target;
  while(el&&el.tagName!=='A')el=el.parentElement;
  if(!el||!el.href)return;
  var h=el.getAttribute('href');
  if(!h||h.startsWith('javascript:')||h.startsWith('#'))return;
  var abs=_abs(el.href);
  if(abs&&abs.startsWith('http')&&!abs.startsWith(_p)){
    e.preventDefault();
    e.stopPropagation();
    window.location.href=_p+encodeURIComponent(abs);
  }
},true);

// Intercept form submits
document.addEventListener('submit',function(e){
  var f=e.target;
  if(!f||!f.action)return;
  var abs=_abs(f.action);
  if(abs&&abs.startsWith('http')&&!abs.startsWith(_p)){
    e.preventDefault();
    var data=new FormData(f);
    var params=new URLSearchParams(data).toString();
    var sep=abs.indexOf('?')===-1?'?':'&';
    window.location.href=_p+encodeURIComponent(abs+(params?sep+params:''));
  }
},true);

// fetch override
var _of=window.fetch;
window.fetch=function(u,opts){
  var s=typeof u==='string'?u:(u&&u.url?u.url:String(u));
  s=_abs(s);
  if(s&&s.startsWith('http')&&!s.startsWith(_o))
    return _of(_p+encodeURIComponent(s),opts);
  return _of.apply(this,arguments);
};

// XHR override
var _xo=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(m,u){
  if(typeof u==='string'){
    var s=_abs(u);
    if(s&&s.startsWith('http')&&!s.startsWith(_o))
      arguments[1]=_p+encodeURIComponent(s);
  }
  return _xo.apply(this,arguments);
};

// history.pushState / replaceState
try{
  var _ps=history.pushState.bind(history);
  history.pushState=function(st,t,u){
    if(u){var a=_wrap(String(u));return _ps(st,t,a);}
    return _ps(st,t,u);
  };
  var _rs=history.replaceState.bind(history);
  history.replaceState=function(st,t,u){
    if(u){var a=_wrap(String(u));return _rs(st,t,a);}
    return _rs(st,t,u);
  };
}catch(e){}

// location.href, assign, replace
try{
  var _lhDesc=Object.getOwnPropertyDescriptor(Location.prototype,'href');
  if(_lhDesc&&_lhDesc.set){
    Object.defineProperty(Location.prototype,'href',{
      get:_lhDesc.get,
      set:function(u){_lhDesc.set.call(this,_wrap(String(u)));},
      configurable:true
    });
  }
  Location.prototype.assign=function(u){window.location.href=_wrap(String(u));};
  Location.prototype.replace=function(u){window.location.replace(_wrap(String(u)));};
}catch(e){}

// window.open
try{
  var _wo=window.open;
  window.open=function(u,t,f){
    if(u){var a=_abs(String(u));if(a&&a.startsWith('http'))return _wo.call(window,_p+encodeURIComponent(a),t,f);}
    return _wo.apply(window,arguments);
  };
}catch(e){}

})();<\/script>`;
}

// ─── HTML REWRITER ─────────────────────────────────────────────
function rewriteHtml(html, target, origin) {
  const proxyBase = origin + '/proxy?url=';

  function absUrl(val) {
    if (!val) return val;
    val = val.trim();
    if (val.startsWith('data:') || val.startsWith('javascript:') ||
        val.startsWith('#') || val.startsWith('mailto:') || val.startsWith('blob:')) return val;
    // already proxied
    if (val.startsWith(proxyBase)) return val;
    try {
      const abs = new URL(val, target).href;
      if (abs.startsWith('http')) return proxyBase + encodeURIComponent(abs);
    } catch {}
    return val;
  }

  // Remove existing base tags (they break relative URL resolution)
  html = html.replace(/<base[^>]*>/gi, '');

  // Rewrite src, href, action, srcset attributes
  html = html.replace(/(<[^>]+?\s)(src|href|action|poster|data)(\s*=\s*)(["'])([^"']*)\4/gi, (match, pre, attr, eq, quote, val) => {
    return pre + attr + eq + quote + absUrl(val) + quote;
  });

  // Rewrite srcset (comma-separated list of url [descriptor])
  html = html.replace(/(<[^>]+?\s)srcset(\s*=\s*)(["'])([^"']*)\3/gi, (match, pre, eq, quote, val) => {
    const rewritten = val.split(',').map(entry => {
      const parts = entry.trim().split(/\s+/);
      if (parts[0]) parts[0] = absUrl(parts[0]);
      return parts.join(' ');
    }).join(', ');
    return pre + 'srcset' + eq + quote + rewritten + quote;
  });

  // Inject intercept script as first thing in <head>
  const script = buildInterceptScript(origin, target);
  if (/<head[\s>]/i.test(html)) {
    html = html.replace(/(<head[^>]*>)/i, '$1' + script);
  } else {
    html = script + html;
  }

  // Inject a <base> pointing to proxy so any missed relative URLs still resolve
  const baseTag = `<base href="${proxyBase}${encodeURIComponent(target)}">`;
  html = html.replace(/(<head[^>]*>)/i, '$1' + baseTag);

  return html;
}

// ─── HEADER HELPERS ───────────────────────────────────────────
function buildSafeHeaders(targetUrl) {
  return {
    'User-Agent': getRandomUserAgent(),
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'identity',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
  };
}

function stripSensitiveHeaders(headers) {
  const stripped = new Headers(headers);
  ['X-Powered-By','X-Aspnet-Version','Server','X-AspNetMvc-Version',
   'X-Runtime','X-Rack-Cache','CF-Ray','CF-Cache-Status','CF-ASN',
   'Content-Security-Policy','Content-Security-Policy-Report-Only',
   'X-Frame-Options','X-Content-Type-Options'].forEach(h => stripped.delete(h));
  return stripped;
}

// ─── MAIN FETCH HANDLER ────────────────────────────────────────
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const origin = url.origin;

    if (path === '/api/games/radon') {
      return new Response(JSON.stringify(fetchRadon()), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      });
    }

    if (path === '/api/games/original') {
      try {
        return new Response(JSON.stringify(await fetchFyinx()), {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: { 'Content-Type': 'application/json' } });
      }
    }

    if (path === '/api/games/truffled') {
      try {
        return new Response(JSON.stringify(await fetchTruffled()), {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: { 'Content-Type': 'application/json' } });
      }
    }

    if (path === '/thumb') {
      const thumbUrl = url.searchParams.get('url');
      if (!thumbUrl) return new Response('', { status: 400 });
      try {
        const r = await fetch(thumbUrl, { headers: buildSafeHeaders(thumbUrl), signal: AbortSignal.timeout(6000) });
        const type = r.headers.get('content-type') || 'image/webp';
        const respHeaders = stripSensitiveHeaders(r.headers);
        respHeaders.set('Content-Type', type);
        respHeaders.set('Cache-Control', 'public, max-age=7200');
        return new Response(r.body, { headers: respHeaders });
      } catch {
        return new Response('', { status: 404 });
      }
    }

    if (path === '/go') {
      let target = url.searchParams.get('url') || '';
      if (!target) return Response.redirect(origin + '/', 302);
      if (!target.startsWith('http://') && !target.startsWith('https://'))
        target = target.includes('.') && !target.includes(' ') ? 'https://' + target : 'https://www.google.com/search?q=' + encodeURIComponent(target);
      return Response.redirect(origin + '/proxy?url=' + encodeURIComponent(target), 302);
    }

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
          headers: buildSafeHeaders(target),
          redirect: 'manual',
          signal: AbortSignal.timeout(12000),
        });

        // Follow redirects through proxy
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
        const respHeaders = stripSensitiveHeaders(response.headers);
        // Always allow framing
        respHeaders.set('X-Frame-Options', 'ALLOWALL');
        respHeaders.set('Access-Control-Allow-Origin', '*');

        if (ct.includes('text/html')) {
          const html = await response.text();
          if (new TextEncoder().encode(html).length > MAX)
            return new Response('Page too large', { status: 502 });
          const rewritten = rewriteHtml(html, target, origin);
          respHeaders.set('Content-Type', 'text/html; charset=utf-8');
          return new Response(rewritten, { headers: respHeaders });

        } else if (ct.includes('javascript') || ct.includes('text/plain')) {
          const js = await response.text();
          respHeaders.set('Content-Type', ct);
          respHeaders.set('Cache-Control', 'public, max-age=300');
          return new Response(js, { headers: respHeaders });

        } else if (ct.includes('text/css')) {
          let css = await response.text();
          // Rewrite url() in CSS
          css = css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (match, quote, val) => {
            if (val.startsWith('data:') || val.startsWith('#')) return match;
            try {
              const abs = new URL(val, target).href;
              return 'url(' + quote + origin + '/proxy?url=' + encodeURIComponent(abs) + quote + ')';
            } catch { return match; }
          });
          respHeaders.set('Content-Type', ct);
          respHeaders.set('Cache-Control', 'public, max-age=300');
          return new Response(css, { headers: respHeaders });

        } else {
          const ab = await response.arrayBuffer();
          if (ab.byteLength > MAX) return new Response('Too large', { status: 502 });
          respHeaders.set('Content-Type', ct);
          respHeaders.set('Cache-Control', 'public, max-age=300');
          return new Response(ab, { headers: respHeaders });
        }

      } catch (err) {
        const msg = err.name === 'AbortError' ? 'Request timed out' : 'Could not load: ' + err.message;
        return new Response(msg, { status: 502 });
      }
    }

    return env.ASSETS.fetch(request);
  }
};
