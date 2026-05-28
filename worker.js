// ─── worker.js — fixed & cleaned ──────────────────────────────────────────

// ─── USER AGENTS ──────────────────────────────────────────────────────────
const UAS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/123.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/122.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15 Safari/605.1.15',
];
const ua = () => UAS[Math.floor(Math.random() * UAS.length)];

// ─── SAFE REQUEST HEADERS ─────────────────────────────────────────────────
function safeReqHeaders(targetUrl) {
  const h = new Headers();
  h.set('User-Agent', ua());
  h.set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
  h.set('Accept-Language', 'en-US,en;q=0.9');
  h.set('Accept-Encoding', 'identity');
  h.set('DNT', '1');
  h.set('Upgrade-Insecure-Requests', '1');
  h.set('Cache-Control', 'no-cache');
  try {
    const u = new URL(targetUrl);
    h.set('Referer', u.origin + '/');
    h.set('Origin', u.origin);
  } catch {}
  return h;
}

// ─── RESPONSE HEADER CLEANUP ──────────────────────────────────────────────
function cleanResHeaders(src, extra = {}) {
  const out = new Headers();
  // Copy safe headers
  for (const [k, v] of src.entries()) {
    const kl = k.toLowerCase();
    if ([
      'content-type','content-language','content-length',
      'cache-control','last-modified','etag','vary',
      'transfer-encoding','date',
    ].includes(kl)) {
      out.set(k, v);
    }
  }
  // Always allow framing and cross-origin access
  out.set('Access-Control-Allow-Origin', '*');
  out.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  out.set('Access-Control-Allow-Headers', '*');
  out.set('X-Frame-Options', 'ALLOWALL');
  // Apply extras
  for (const [k, v] of Object.entries(extra)) out.set(k, v);
  return out;
}

// ─── TIMEOUT FETCH (CF-compatible, no AbortSignal.timeout) ────────────────
function fetchWithTimeout(url, opts = {}, ms = 14000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { ...opts, signal: ctrl.signal }).finally(() => clearTimeout(timer));
}

// ─── INTERCEPT INJECTION SCRIPT ───────────────────────────────────────────
// Injected into every proxied HTML page so that clicks, XHR, fetch,
// history, window.open, and form submissions all stay within the proxy.
function buildIntercept(origin, targetUrl) {
  // We build the script as a string and return it ready to inject.
  // IMPORTANT: we avoid </script> literally so the surrounding template literal
  // doesn't accidentally close the outer script tag.
  const proxyBase = origin + '/proxy?url=';
  const script = `(function(){
var _pb=${JSON.stringify(proxyBase)};
var _base=${JSON.stringify(targetUrl)};
var _o=${JSON.stringify(origin)};

function _abs(u){
  if(!u)return u;
  var s=String(u);
  // already proxied
  if(s.startsWith(_pb))return s;
  // protocol-relative
  if(s.startsWith('//')){s='https:'+s;}
  // skip special schemes
  if(/^(javascript|data|blob|mailto|tel):/i.test(s))return s;
  // fragment only
  if(s.startsWith('#'))return s;
  try{return new URL(s,_base).href;}catch(e){return s;}
}
function _prx(u){
  var a=_abs(u);
  return(a&&/^https?:/.test(a))?_pb+encodeURIComponent(a):a;
}

// Sandbox escape prevention
try{Object.defineProperty(window,'top',{get:function(){return window;},configurable:true});}catch(e){}
try{Object.defineProperty(window,'parent',{get:function(){return window;},configurable:true});}catch(e){}
try{Object.defineProperty(window,'frameElement',{get:function(){return null;},configurable:true});}catch(e){}

// Click interception
document.addEventListener('click',function(e){
  var el=e.target;
  for(var i=0;i<5&&el;i++){if(el.tagName==='A')break;el=el.parentElement;}
  if(!el||el.tagName!=='A')return;
  var href=el.getAttribute('href');
  if(!href||/^(javascript|#)/i.test(href))return;
  var abs=_abs(el.href||href);
  if(abs&&/^https?:/.test(abs)&&!abs.startsWith(_pb)){
    e.preventDefault();e.stopPropagation();
    window.location.href=_pb+encodeURIComponent(abs);
  }
},true);

// Form interception
document.addEventListener('submit',function(e){
  var f=e.target;if(!f)return;
  e.preventDefault();e.stopPropagation();
  var method=(f.method||'get').toLowerCase();
  var raw=f.getAttribute('action')||window.location.href;
  var real=raw.startsWith(_pb)?decodeURIComponent(raw.slice(_pb.length)):_abs(raw);
  if(method==='post'){
    window.location.href=_pb+encodeURIComponent(real);
  } else {
    var data=new URLSearchParams();
    Array.from(f.elements).forEach(function(el){
      if(!el.name||el.disabled)return;
      if((el.type==='checkbox'||el.type==='radio')&&!el.checked)return;
      data.append(el.name,el.value);
    });
    var qs=data.toString();
    window.location.href=_pb+encodeURIComponent(real.split('?')[0]+(qs?'?'+qs:''));
  }
},true);

// fetch override
var _of=window.fetch;
window.fetch=function(u,opts){
  var s=typeof u==='string'?u:(u&&u.url?u.url:'');
  var a=_abs(s);
  if(a&&/^https?:/.test(a)&&!a.startsWith(_o))
    return _of(_pb+encodeURIComponent(a),opts);
  return _of.apply(this,arguments);
};

// XMLHttpRequest override
var _xo=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(m,u){
  if(typeof u==='string'){
    var a=_abs(u);
    if(a&&/^https?:/.test(a)&&!a.startsWith(_o))
      arguments[1]=_pb+encodeURIComponent(a);
  }
  return _xo.apply(this,arguments);
};

// history overrides
try{
  ['pushState','replaceState'].forEach(function(fn){
    var orig=history[fn].bind(history);
    history[fn]=function(st,t,u){
      return u?orig(st,t,_prx(String(u))):orig(st,t,u);
    };
  });
}catch(e){}

// location.href setter
try{
  var _ld=Object.getOwnPropertyDescriptor(Location.prototype,'href');
  if(_ld&&_ld.set){
    Object.defineProperty(Location.prototype,'href',{
      get:_ld.get,
      set:function(u){_ld.set.call(this,_prx(String(u)));},
      configurable:true
    });
  }
  Location.prototype.assign=function(u){window.location.href=_prx(String(u));};
  Location.prototype.replace=function(u){window.location.replace(_prx(String(u)));};
}catch(e){}

// window.open override
try{
  var _wo=window.open;
  window.open=function(u,t,f){
    if(u){var a=_abs(String(u));if(a&&/^https?:/.test(a))return _wo(_pb+encodeURIComponent(a),t,f);}
    return _wo.apply(this,arguments);
  };
}catch(e){}

})();`;

  // Return as an inline <script> tag, avoiding literal </script> in the source
  return '<scr'+'ipt>' + script + '<\/scr'+'ipt>';
}

// ─── HTML REWRITER ─────────────────────────────────────────────────────────
function rewriteHtml(html, targetUrl, origin) {
  const pb = origin + '/proxy?url=';

  function abs(val) {
    if (!val) return val;
    val = val.trim();
    if (/^(data:|javascript:|blob:|mailto:|tel:|#)/i.test(val)) return val;
    if (val.startsWith(pb)) return val;
    if (val.startsWith('//')) val = 'https:' + val;
    try {
      const a = new URL(val, targetUrl).href;
      if (/^https?:/.test(a)) return pb + encodeURIComponent(a);
    } catch {}
    return val;
  }

  // Remove base tags
  html = html.replace(/<base[^>]*>/gi, '');

  // Rewrite src, href, action, poster, data attributes
  html = html.replace(
    /(<[^>]+?\s)(src|href|action|poster|data)(\s*=\s*)(["'])([^"']*)\4/gi,
    (_, pre, attr, eq, q, val) => pre + attr + eq + q + abs(val) + q
  );

  // Rewrite srcset
  html = html.replace(
    /(<[^>]+?\s)srcset(\s*=\s*)(["'])([^"']*)\3/gi,
    (_, pre, eq, q, val) => {
      const rw = val.split(',').map(e => {
        const p = e.trim().split(/\s+/);
        if (p[0]) p[0] = abs(p[0]);
        return p.join(' ');
      }).join(', ');
      return pre + 'srcset' + eq + q + rw + q;
    }
  );

  // Rewrite CSS url() inside <style> blocks
  html = html.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/gi, (_, open, css, close) => {
    css = css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (m, q, u) => {
      if (/^(data:|#)/i.test(u)) return m;
      return 'url(' + q + abs(u) + q + ')';
    });
    return open + css + close;
  });

  // Inject intercept script right after <head> (or at top if no head)
  const inject = buildIntercept(origin, targetUrl);
  if (/<head[\s>]/i.test(html)) {
    html = html.replace(/(<head[^>]*>)/i, '$1' + inject);
  } else if (/<body[\s>]/i.test(html)) {
    html = html.replace(/(<body[^>]*>)/i, '$1' + inject);
  } else {
    html = inject + html;
  }

  return html;
}

// ─── CSS REWRITER ─────────────────────────────────────────────────────────
function rewriteCss(css, targetUrl, origin) {
  const pb = origin + '/proxy?url=';
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (m, q, val) => {
    if (/^(data:|#)/i.test(val)) return m;
    if (val.startsWith('//')) val = 'https:' + val;
    try {
      const a = new URL(val, targetUrl).href;
      if (/^https?:/.test(a)) return 'url(' + q + pb + encodeURIComponent(a) + q + ')';
    } catch {}
    return m;
  });
}

// ─── CORS PREFLIGHT ───────────────────────────────────────────────────────
function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': '86400',
    },
  });
}

// ─── JSON RESPONSE HELPER ─────────────────────────────────────────────────
function jsonRes(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store',
    },
  });
}

// ─── MAIN HANDLER ─────────────────────────────────────────────────────────
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname: path, origin } = url;
    const method = request.method.toUpperCase();

    // CORS preflight
    if (method === 'OPTIONS') return handleOptions();

    // ── /thumb — image proxy ─────────────────────────────────────────────
    if (path === '/thumb') {
      const thumbUrl = url.searchParams.get('url');
      if (!thumbUrl) return new Response('Missing url', { status: 400 });
      try {
        const r = await fetchWithTimeout(thumbUrl, { headers: safeReqHeaders(thumbUrl) }, 8000);
        const ct = r.headers.get('content-type') || 'image/webp';
        const h = cleanResHeaders(r.headers, {
          'Content-Type': ct,
          'Cache-Control': 'public, max-age=86400',
        });
        return new Response(r.body, { status: r.status, headers: h });
      } catch (e) {
        return new Response('', { status: 404 });
      }
    }

    // ── /go — redirect helper ────────────────────────────────────────────
    if (path === '/go') {
      let target = url.searchParams.get('url') || '';
      if (!target) return Response.redirect(origin + '/', 302);
      if (!/^https?:\/\//i.test(target)) {
        target = target.includes('.') && !target.includes(' ')
          ? 'https://' + target
          : 'https://www.google.com/search?q=' + encodeURIComponent(target);
      }
      return Response.redirect(origin + '/proxy?url=' + encodeURIComponent(target), 302);
    }

    // ── /proxy — the main proxy ──────────────────────────────────────────
    if (path === '/proxy') {
      const raw = url.searchParams.get('url');
      if (!raw) return Response.redirect(origin + '/', 302);

      // Decode and validate URL
      let targetUrl;
      try {
        // Handle double-encoding gracefully
        const decoded = raw.startsWith('http') ? raw : decodeURIComponent(raw);
        targetUrl = new URL(decoded);
      } catch {
        return new Response('Invalid URL: ' + raw, { status: 400 });
      }
      if (!['http:', 'https:'].includes(targetUrl.protocol)) {
        return new Response('Unsupported protocol', { status: 400 });
      }

      const target = targetUrl.href;
      const MAX = 20 * 1024 * 1024; // 20 MB limit

      try {
        const response = await fetchWithTimeout(target, {
          method: method === 'POST' ? 'POST' : 'GET',
          headers: safeReqHeaders(target),
          body: method === 'POST' ? request.body : undefined,
          redirect: 'manual',
        }, 15000);

        // Follow redirects through proxy
        if (response.status >= 300 && response.status < 400) {
          const loc = response.headers.get('location');
          if (loc) {
            try {
              const abs = new URL(loc, target).href;
              return Response.redirect(origin + '/proxy?url=' + encodeURIComponent(abs), 302);
            } catch {}
          }
          return new Response('Redirect loop', { status: 502 });
        }

        const ct = (response.headers.get('content-type') || '').toLowerCase();
        const isHtml = ct.includes('text/html');
        const isCss  = ct.includes('text/css');
        const isJs   = ct.includes('javascript') || ct.includes('text/plain');

        const h = cleanResHeaders(response.headers);

        if (isHtml) {
          let body = await response.text();
          if (new TextEncoder().encode(body).length > MAX) {
            return new Response('Page too large', { status: 502 });
          }
          body = rewriteHtml(body, target, origin);
          h.set('Content-Type', 'text/html; charset=utf-8');
          // Remove content-length since we modified the body
          h.delete('content-length');
          return new Response(body, { status: response.status, headers: h });

        } else if (isCss) {
          let body = await response.text();
          body = rewriteCss(body, target, origin);
          h.set('Content-Type', ct || 'text/css');
          h.delete('content-length');
          h.set('Cache-Control', 'public, max-age=300');
          return new Response(body, { status: response.status, headers: h });

        } else if (isJs) {
          const body = await response.text();
          h.set('Content-Type', ct || 'text/javascript');
          h.set('Cache-Control', 'public, max-age=300');
          return new Response(body, { status: response.status, headers: h });

        } else {
          // Binary: images, fonts, wasm, etc.
          const buf = await response.arrayBuffer();
          if (buf.byteLength > MAX) return new Response('Too large', { status: 502 });
          h.set('Content-Type', ct || 'application/octet-stream');
          h.set('Cache-Control', 'public, max-age=86400');
          return new Response(buf, { status: response.status, headers: h });
        }

      } catch (err) {
        const msg = err.name === 'AbortError'
          ? 'Proxy timed out fetching: ' + target
          : 'Proxy error: ' + err.message;
        return new Response(msg, { status: 502, headers: { 'Access-Control-Allow-Origin': '*' } });
      }
    }

    // ── Static assets (Cloudflare Pages / Workers Sites) ─────────────────
    // Falls through to your static files (index.html, etc.)
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      return new Response('Not found', { status: 404 });
    }
  },
};
