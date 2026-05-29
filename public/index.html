<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title id="page-title">13</title>
<link href="https://fonts.googleapis.com/css2?family=Schoolbell&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
 --bg:#050508;--bg2:#0c0c12;--bg3:#141420;
 --glass:rgba(255,255,255,0.05);--glass-border:rgba(255,255,255,0.1);
 --accent:#c4c4d4;--accent2:#9090a8;--accent-glow:rgba(200,200,220,0.12);
 --text:#f8f8fc;--muted:#606070;--muted2:#1c1c24;--card:#0a0a10;--radius:12px;
}
html,body{height:100%;overflow:hidden}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text)}
canvas#bg{position:fixed;inset:0;z-index:0;pointer-events:none}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--glass-border);border-radius:9px}
body::before{content:'';position:fixed;inset:0;z-index:-2;background:radial-gradient(ellipse at 60% 30%,rgba(80,80,120,0.08) 0%,transparent 60%),linear-gradient(180deg,#0d0d18 0%,#05050a 100%);}

#gate{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:var(--bg);}
#gate-box{display:flex;flex-direction:column;align-items:center;gap:20px;padding:40px 32px;background:rgba(255,255,255,0.03);border:1px solid var(--glass-border);border-radius:20px;backdrop-filter:blur(20px);box-shadow:0 24px 60px rgba(0,0,0,.6),0 0 40px var(--accent-glow);width:min(360px,90vw);}
#gate-logo{font-family:'Schoolbell',cursive;font-size:4rem;color:var(--accent);text-shadow:0 0 40px var(--accent-glow);line-height:1;}
#gate-label{font-size:.72rem;color:var(--muted);letter-spacing:.12em;text-transform:uppercase}
#gate-input{width:100%;padding:12px 16px;border-radius:10px;border:1px solid var(--glass-border);background:rgba(255,255,255,0.05);color:var(--text);font-size:.9rem;font-family:'DM Mono',monospace;outline:none;text-align:center;letter-spacing:.06em;transition:border .2s,box-shadow .2s;}
#gate-input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(200,200,220,0.1);}
#gate-input.shake{animation:shake .35s ease;}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}
#gate-btn{width:100%;padding:12px;border-radius:10px;border:none;background:var(--accent);color:#000;font-size:.85rem;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;transition:opacity .2s,transform .1s;letter-spacing:.03em;}
#gate-btn:hover{opacity:.88}#gate-btn:active{transform:scale(.97)}
#gate-err{font-size:.7rem;color:#f87171;min-height:16px;text-align:center;}

#tag-overlay{position:fixed;inset:0;z-index:8000;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.7);backdrop-filter:blur(10px);}
#tag-overlay.open{display:flex}
#tag-modal{width:min(340px,92vw);background:var(--bg2);border:1px solid var(--glass-border);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.7),0 0 40px var(--accent-glow);animation:modalIn .28s cubic-bezier(.34,1.56,.64,1);}
@keyframes modalIn{from{opacity:0;transform:scale(.9) translateY(16px)}to{opacity:1;transform:scale(1) translateY(0)}}
.tag-header{padding:20px 20px 14px;background:linear-gradient(135deg,rgba(200,200,220,.08),transparent);border-bottom:1px solid var(--glass-border);display:flex;align-items:center;justify-content:space-between;}
.tag-title{font-family:'Schoolbell',cursive;font-size:1.5rem;color:var(--accent);text-shadow:0 0 20px var(--accent-glow)}
.tag-close{width:28px;height:28px;border-radius:7px;border:1px solid var(--glass-border);background:transparent;color:var(--muted);font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;}
.tag-close:hover{border-color:var(--accent);color:var(--accent)}
.tag-body{padding:20px;display:flex;flex-direction:column;gap:14px}
.tag-avatar-row{display:flex;flex-direction:column;align-items:center;gap:8px}
.tag-avatar-big{width:64px;height:64px;border-radius:16px;background:var(--accent-glow);border:2px solid var(--accent);display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:700;font-family:'DM Mono',monospace;color:var(--accent);}
.tag-name-display{font-size:1rem;font-weight:700;color:var(--text)}
.tag-sub{font-size:.65rem;color:var(--muted);letter-spacing:.06em;text-transform:uppercase}
.tag-input{width:100%;padding:10px 13px;border-radius:9px;border:1px solid var(--glass-border);background:rgba(255,255,255,0.04);color:var(--text);font-size:.85rem;font-family:'DM Mono',monospace;outline:none;transition:border .2s;text-align:center;}
.tag-input:focus{border-color:var(--accent)}.tag-input::placeholder{color:var(--muted2)}
.tag-btn{width:100%;padding:11px;border-radius:9px;border:none;background:var(--accent);color:#000;font-size:.8rem;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;transition:opacity .2s,transform .1s;}
.tag-btn:hover{opacity:.88}.tag-btn:active{transform:scale(.98)}
.tag-err{font-size:.7rem;color:#f87171;text-align:center;min-height:16px}

body[data-nav="bottom"] #topnav{position:fixed;bottom:16px;left:16px;right:auto;top:auto;flex-direction:row;width:auto;padding:8px 14px;gap:6px;border-radius:22px;}
body[data-nav="bottom"] #status-bar{bottom:16px;right:16px;}
body[data-nav="bottom"] .section{left:0;right:0;top:0;bottom:0;}
body[data-nav="bottom"] .nav-btn{width:52px;height:52px;}
body[data-nav="left"] #topnav{position:fixed;left:10px;top:50%;transform:translateY(-50%);right:auto;bottom:auto;flex-direction:column;width:54px;height:auto;padding:16px 6px;gap:6px;border-radius:28px;border:1px solid var(--glass-border);justify-content:center;align-items:center;}
body[data-nav="left"] #topnav .nav-logo{display:flex;}
body[data-nav="left"] #topnav .nav-divider{display:block;}
body[data-nav="left"] #status-bar{position:fixed;bottom:10px;left:10px;width:54px;height:54px;border-radius:14px;border:1px solid var(--glass-border);justify-content:center;align-items:center;padding:0;gap:0;flex-direction:column;}
body[data-nav="left"] .status-username{font-size:.42rem;text-align:center;max-width:44px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
body[data-nav="left"] #status-username-text{display:none;}
body[data-nav="left"] #status-bar::after{content:'13';font-size:.42rem;font-family:'DM Mono',monospace;color:var(--muted);text-align:center;display:block;line-height:1;margin-top:2px;}
body[data-nav="left"] .status-avatar{width:28px;height:28px;font-size:.75rem;}
body[data-nav="left"] .section{left:76px;right:0;top:0;bottom:0;}
body[data-nav="left"] .nav-btn{width:40px;height:40px;border-radius:10px;}
#topnav{z-index:1000;display:flex;align-items:center;background:rgba(5,5,8,0.92);border:1px solid var(--glass-border);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);box-shadow:0 10px 40px rgba(0,0,0,.8),0 0 24px var(--accent-glow);transition:border-color .3s,background .3s;}
.nav-logo{font-family:'Schoolbell',cursive;font-size:1.2rem;color:var(--accent);text-shadow:0 0 20px var(--accent-glow);display:none;padding:4px 0 8px;text-align:center;width:100%;}
.nav-divider{display:none;width:32px;height:1px;background:var(--glass-border);margin:4px auto;}
.nav-spacer{flex:1}
.nav-btn{display:flex;align-items:center;justify-content:center;border-radius:14px;border:none;background:transparent;color:var(--muted);font-size:0;cursor:pointer;transition:all .18s;flex-shrink:0;}
.nav-btn svg{width:20px;height:20px;flex-shrink:0}
.nav-btn:hover{background:var(--glass);color:var(--text)}
.nav-btn.active{background:rgba(200,200,220,0.1);color:var(--accent);box-shadow:0 0 14px var(--accent-glow);}

.section{position:fixed;z-index:10;display:none;flex-direction:column}
.section.active{display:flex}

#home-inner{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:20px;position:relative;z-index:1;}
.home-eyebrow{font-size:.68rem;color:var(--muted);letter-spacing:.2em;text-transform:uppercase;font-weight:500;}
.home-title{font-family:'Schoolbell',cursive;font-size:7rem;font-weight:400;line-height:1;color:var(--text);text-shadow:0 0 80px var(--accent-glow),0 0 30px var(--accent-glow);animation:titlePop .6s cubic-bezier(.34,1.56,.64,1) both;}
@keyframes titlePop{from{opacity:0;transform:scale(.88) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}
.home-slogan{color:var(--muted);font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;margin-top:-8px}
.home-search{display:flex;align-items:center;width:min(460px,90vw);background:rgba(255,255,255,0.04);border:1px solid var(--glass-border);border-radius:999px;overflow:hidden;backdrop-filter:blur(12px);transition:border-color .2s,box-shadow .2s;box-shadow:0 4px 24px rgba(0,0,0,0.3);}
.home-search:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px rgba(200,200,220,0.08),0 4px 24px rgba(0,0,0,0.3);}
.home-search input{flex:1;padding:11px 20px;background:transparent;border:none;color:var(--text);font-size:.85rem;font-family:'DM Sans',sans-serif;outline:none;}
.home-search input::placeholder{color:var(--muted2)}
.home-search button{padding:9px 20px;border:none;background:var(--accent);color:#000;font-size:.76rem;font-family:'DM Sans',sans-serif;cursor:pointer;font-weight:600;border-radius:0 999px 999px 0;transition:opacity .2s,transform .1s;flex-shrink:0;letter-spacing:.02em;}
.home-search button:hover{opacity:.88}.home-search button:active{transform:scale(.97)}
.clock-wrap{display:flex;flex-direction:column;align-items:center;gap:2px;margin-top:6px}
.clock-time{font-size:1rem;font-weight:600;letter-spacing:.03em;color:var(--text);font-family:'DM Mono',monospace}
.clock-date{font-size:.65rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase}

#apps-inner{flex:1;display:flex;flex-direction:column;overflow:hidden}
#apps-header{padding:24px 20px 8px;flex-shrink:0}
#apps-header-title{font-family:'Schoolbell',cursive;font-size:2.4rem;color:var(--accent);text-shadow:0 0 24px var(--accent-glow);line-height:1}
#apps-header-sub{font-size:.65rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-top:4px}
#apps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:20px 18px;overflow-y:auto;flex:1;scrollbar-width:none;align-content:start;}
#apps-grid::-webkit-scrollbar{display:none}
.app-icon-btn{display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;background:none;border:none;padding:0;transition:transform .22s cubic-bezier(.34,1.4,.64,1);}
.app-icon-btn:hover{transform:scale(1.08)}.app-icon-btn:active{transform:scale(.93)}
.app-icon-wrap{width:58px;height:58px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:1.55rem;backdrop-filter:blur(14px);position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.35);}
.app-icon-wrap::after{content:'';position:absolute;inset:0;border-radius:16px;box-shadow:inset 0 1px 0 rgba(255,255,255,.18),inset 0 -1px 0 rgba(0,0,0,.2);}
.app-icon-label{font-size:.62rem;font-weight:600;color:var(--text);letter-spacing:.01em;text-align:center;line-height:1.2}

#app-panel-bd{position:fixed;inset:0;z-index:4000;background:rgba(0,0,0,0);backdrop-filter:blur(0px);pointer-events:none;transition:background .28s,backdrop-filter .28s;}
#app-panel-bd.on{background:rgba(0,0,0,.6);backdrop-filter:blur(18px);pointer-events:all}
#app-panel{position:fixed;bottom:-100%;left:50%;transform:translateX(-50%);z-index:4001;width:min(520px,98vw);background:rgba(8,7,16,.92);backdrop-filter:blur(36px);border-radius:22px 22px 0 0;transition:bottom .34s cubic-bezier(.34,1.1,.64,1);display:flex;flex-direction:column;max-height:88vh;overflow:hidden;}
#app-panel.on{bottom:0}
#app-panel-handle{width:32px;height:3px;border-radius:2px;background:rgba(255,255,255,.14);margin:11px auto 0;flex-shrink:0}
#app-panel-header{display:flex;align-items:center;justify-content:space-between;padding:12px 18px 10px;flex-shrink:0}
#app-panel-title{font-size:.95rem;font-weight:700;color:var(--text)}
#app-panel-close{width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.08);border:none;color:var(--muted);font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .14s;}
#app-panel-close:hover{background:rgba(255,255,255,.15);color:var(--text)}
#app-panel-body{flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;min-height:200px}

.dict-bar{display:flex;gap:6px;padding:10px;border-bottom:1px solid var(--glass-border)}
#dict-input{flex:1;padding:7px 10px;border-radius:8px;border:1px solid var(--glass-border);background:rgba(255,255,255,0.04);color:var(--text);font-size:.75rem;font-family:'DM Sans',sans-serif;outline:none;}
#dict-input:focus{border-color:var(--accent)}#dict-input::placeholder{color:var(--muted2)}
#dict-go{padding:7px 13px;border-radius:8px;border:none;background:var(--accent);color:#000;font-size:.7rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;}
#dict-result{flex:1;padding:10px 12px;overflow-y:auto;font-size:.76rem;line-height:1.65;color:var(--text)}
#dict-result strong{color:var(--accent);display:block;margin-bottom:3px;font-size:.8rem}
#dict-result em{color:var(--muted);display:block;font-size:.7rem;margin-bottom:5px}
#dict-result .def{margin:3px 0;padding-left:10px;border-left:2px solid var(--glass-border)}
.music-picker{display:flex;flex-direction:column;gap:7px;padding:10px}
.music-opt{display:flex;align-items:center;gap:12px;padding:10px 13px;border-radius:9px;border:1px solid var(--glass-border);background:var(--glass);cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;color:var(--text);width:100%;text-align:left;}
.music-opt:hover{border-color:var(--accent);transform:translateX(2px)}
.music-opt-icon{font-size:1.15rem;flex-shrink:0}.music-opt-name{font-size:.8rem;font-weight:600}
.music-opt-desc{font-size:.64rem;color:var(--muted);margin-top:1px}
#music-frame-wrap{display:none;flex-direction:column;flex:1;min-height:0}
#music-frame{width:100%;flex:1;border:none;background:var(--bg);display:block;min-height:240px}
.music-back-btn-wrap{padding:8px 10px 4px;border-bottom:1px solid var(--glass-border)}
#music-back-btn{padding:5px 12px;border-radius:7px;border:1px solid var(--glass-border);background:var(--glass);color:var(--muted);font-size:.68rem;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s;}
#music-back-btn:hover{border-color:var(--accent);color:var(--accent)}
#weather-display{flex:1;font-size:.8rem;line-height:1.9;color:var(--text);padding:12px}
@media(max-width:500px){#apps-grid{grid-template-columns:repeat(3,1fr)}}

#partners-inner{flex:1;display:flex;flex-direction:column;align-items:center;gap:18px;padding:30px 20px;overflow-y:auto;}
.partners-title{font-family:'Schoolbell',cursive;font-size:2.6rem;color:var(--accent);text-shadow:0 0 30px var(--accent-glow)}
.partners-sub{color:var(--muted);font-size:.82rem;letter-spacing:.08em;margin-top:-10px}
.partner-cards{display:flex;flex-direction:column;gap:10px;width:100%;max-width:500px}
.partner-card{display:flex;align-items:center;gap:14px;background:rgba(255,255,255,0.03);border:1px solid var(--glass-border);border-radius:var(--radius);padding:14px 16px;transition:border-color .2s,transform .18s;backdrop-filter:blur(8px);}
.partner-card:hover{border-color:var(--accent);transform:translateY(-1px)}
.partner-card-avatar{width:44px;height:44px;border-radius:10px;flex-shrink:0;background:var(--accent-glow);border:1px solid var(--glass-border);display:flex;align-items:center;justify-content:center;font-size:1.3rem;font-weight:700;color:var(--accent);font-family:'Schoolbell',cursive;}
.partner-card-info{flex:1;min-width:0}.partner-card-name{font-size:.86rem;font-weight:600;color:var(--text)}
.partner-card-desc{font-size:.68rem;color:var(--muted);margin-top:2px}
.partner-card-btn{padding:7px 16px;border-radius:8px;border:1px solid var(--accent);background:transparent;color:var(--accent);font-size:.72rem;font-family:'DM Sans',sans-serif;cursor:pointer;transition:all .15s;text-decoration:none;font-weight:600;flex-shrink:0;}
.partner-card-btn:hover{background:var(--accent);color:#000}
.partners-ad-slot{width:100%;max-width:500px;min-height:70px;border-radius:10px;border:1px dashed var(--glass-border);display:flex;align-items:center;justify-content:center;color:var(--muted2);font-size:.65rem;letter-spacing:.06em;}

#settings-inner{flex:1;overflow-y:auto;padding:18px;scrollbar-width:thin}
.settings-wrap{max-width:500px;margin:0 auto;display:flex;flex-direction:column;gap:18px}
.settings-section-head{font-size:.64rem;font-weight:700;color:var(--muted);letter-spacing:.14em;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid var(--glass-border);}
.settings-group{display:flex;flex-direction:column;gap:8px}
.settings-row{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.03);border:1px solid var(--glass-border);border-radius:var(--radius);padding:13px 15px;gap:10px;backdrop-filter:blur(6px);transition:border-color .2s;}
.settings-row:hover{border-color:rgba(200,200,220,0.2)}
.settings-row-label{font-size:.8rem;font-weight:600;color:var(--text)}.settings-row-sub{font-size:.65rem;color:var(--muted);margin-top:2px}
.theme-card{border-radius:var(--radius);overflow:hidden;border:1px solid var(--glass-border)}
.theme-card-header{padding:14px 16px 10px;background:linear-gradient(135deg,#0d0d1a 0%,#141420 50%,#0d0d1a 100%);}
.theme-card-title{font-size:.8rem;font-weight:700;color:#fff}.theme-card-sub{font-size:.64rem;color:rgba(200,200,220,.5);margin-top:3px;font-style:italic}
.theme-card-body{padding:10px;background:rgba(255,255,255,0.02)}
.theme-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.theme-swatch{padding:10px 4px;border-radius:9px;border:2px solid transparent;cursor:pointer;text-align:center;font-size:.64rem;font-weight:700;transition:all .2s;color:#fff;letter-spacing:.02em;position:relative;overflow:hidden;}
.theme-swatch:hover{transform:scale(1.03)}.theme-swatch.active{border-color:rgba(255,255,255,0.5);box-shadow:0 0 12px rgba(255,255,255,.1)}
.theme-swatch.disabled{opacity:.4;cursor:not-allowed;}.theme-swatch.disabled:hover{transform:none}
.name-pills{display:flex;gap:6px;flex-wrap:wrap}
.name-pill{padding:6px 14px;border-radius:999px;border:1px solid var(--glass-border);background:var(--glass);color:var(--muted);font-size:.72rem;font-family:'DM Sans',sans-serif;cursor:pointer;transition:all .15s;}
.name-pill.active{border-color:var(--accent);color:var(--accent);background:rgba(200,200,220,0.08)}
.proxy-opts{display:flex;flex-direction:column;gap:5px}
.proxy-opt{display:flex;align-items:center;gap:9px;padding:10px 13px;border-radius:9px;border:1px solid var(--glass-border);background:var(--glass);cursor:pointer;transition:all .15s;}
.proxy-opt.active{border-color:var(--accent);background:rgba(200,200,220,0.08)}
.proxy-dot{width:6px;height:6px;border-radius:50%;background:var(--muted2);flex-shrink:0;transition:background .2s}
.proxy-opt.active .proxy-dot{background:var(--accent)}
.proxy-label{font-size:.74rem;font-weight:600;color:var(--text)}.proxy-desc{font-size:.62rem;color:var(--muted);margin-left:auto}
.cloak-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
@media(max-width:500px){.cloak-grid{grid-template-columns:repeat(2,1fr)}}
.cloak-opt{display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:1px solid var(--glass-border);background:var(--glass);cursor:pointer;transition:all .16s;}
.cloak-opt:hover{border-color:var(--accent)}
.cloak-opt.active{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent),inset 0 0 12px var(--accent-glow)}
.cloak-icon{font-size:1.2rem;line-height:1}
.cloak-label{font-size:.6rem;font-weight:600;color:var(--muted);text-align:center;line-height:1.3}
.cloak-opt.active .cloak-label{color:var(--accent)}
.placement-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.placement-opt{display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px 10px;border-radius:10px;border:1px solid var(--glass-border);background:var(--glass);cursor:pointer;transition:all .18s;}
.placement-opt:hover{border-color:var(--accent)}
.placement-opt.active{border-color:var(--accent);background:rgba(200,200,220,0.08);box-shadow:0 0 0 1px var(--accent)}
.placement-preview{width:60px;height:44px;border-radius:6px;border:1px solid var(--glass-border);background:var(--bg3);position:relative;overflow:hidden;}
.placement-bar-bottom{position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:36px;height:8px;border-radius:4px;background:var(--accent);opacity:.7;}
.placement-bar-left{position:absolute;left:4px;top:50%;transform:translateY(-50%);width:8px;height:30px;border-radius:4px;background:var(--accent);opacity:.7;}
.placement-label{font-size:.66rem;font-weight:700;color:var(--text);letter-spacing:.04em}
.placement-opt.active .placement-label{color:var(--accent)}
.settings-version{text-align:center;font-size:.58rem;color:var(--muted2);margin-top:4px;font-family:'DM Mono',monospace}

#status-bar{position:fixed;z-index:1001;display:flex;align-items:center;gap:8px;padding:8px 10px 8px 14px;border-radius:18px;border:1px solid var(--glass-border);background:rgba(5,5,8,0.92);backdrop-filter:blur(20px);box-shadow:0 10px 40px rgba(0,0,0,.8),0 0 24px var(--accent-glow);cursor:pointer;transition:border-color .2s;}
#status-bar:hover{border-color:var(--accent)}
.status-username{font-size:.72rem;font-family:'DM Mono',monospace;color:var(--text);font-weight:600;white-space:nowrap;max-width:120px;overflow:hidden;text-overflow:ellipsis;}
.status-username.guest{color:var(--muted);font-weight:400}
.status-avatar{width:30px;height:30px;border-radius:8px;border:1px solid var(--glass-border);background:var(--accent-glow);display:flex;align-items:center;justify-content:center;color:var(--accent);font-size:.8rem;font-weight:700;font-family:'DM Mono',monospace;flex-shrink:0;}

#toast{position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(14px);z-index:9999;padding:8px 18px;border-radius:999px;background:var(--accent);color:#000;font-size:.72rem;font-weight:700;opacity:0;transition:all .32s cubic-bezier(.34,1.56,.64,1);pointer-events:none;white-space:nowrap;box-shadow:0 4px 20px var(--accent-glow);}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}

#game-overlay{position:fixed;inset:0;z-index:2000;background:var(--bg);display:none;flex-direction:column;pointer-events:all;}
#game-overlay.open{display:flex}
#proxy-bar{display:flex;align-items:center;gap:8px;padding:7px 12px;flex-shrink:0;background:rgba(5,5,8,0.95);border-bottom:1px solid var(--glass-border);backdrop-filter:blur(20px);}
.proxy-nav-btn{width:30px;height:30px;border-radius:7px;border:1px solid var(--glass-border);background:var(--glass);color:var(--muted);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;flex-shrink:0;font-size:14px;}
.proxy-nav-btn:hover{border-color:var(--accent);color:var(--accent)}.proxy-nav-btn:disabled{opacity:.3;cursor:not-allowed}
#proxy-url-bar{flex:1;padding:7px 12px;border-radius:8px;border:1px solid var(--glass-border);background:rgba(255,255,255,0.05);color:var(--text);font-size:.74rem;font-family:'DM Mono',monospace;outline:none;transition:border .2s;}
#proxy-url-bar:focus{border-color:var(--accent)}
#game-overlay-iframe{flex:1;width:100%;border:none;background:var(--bg);display:block;pointer-events:all;}
#game-exit-btn{width:30px;height:30px;border-radius:7px;background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.4);color:#f87171;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;font-family:'DM Sans',sans-serif;flex-shrink:0;}
#game-exit-btn:hover{background:rgba(239,68,68,.4);color:#fff;border-color:#ef4444}

#movies-inner{height:100%;position:relative}
#movies-frame{width:100%;height:100%;border:none;background:var(--bg);display:block}

.clock-popup{background:rgba(10,10,18,.9);border:1px solid var(--glass-border);border-radius:12px;padding:10px 14px;backdrop-filter:blur(16px);box-shadow:0 10px 28px rgba(0,0,0,.35);margin-bottom:16px;display:inline-block;}
.clock-popup-time{font-size:1.1rem;font-weight:700;color:var(--text);font-family:'DM Mono',monospace}
.clock-popup-date{font-size:.7rem;color:var(--muted);margin-top:2px}

.spinner{width:22px;height:22px;border:2px solid var(--glass-border);border-top-color:var(--accent);border-radius:50%;animation:spin .8s linear infinite;}
@keyframes spin{to{transform:rotate(360deg)}}

#games-section{position:fixed;z-index:10;display:none;flex-direction:column;overflow:hidden}
#games-section.active{display:flex}

#g-canvas{position:absolute;inset:0;z-index:0;width:100%;height:100%;pointer-events:none}
#g-grain{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.2;
 background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
 background-size:180px}
#g-vig{position:absolute;inset:0;z-index:2;pointer-events:none;background:radial-gradient(ellipse at center,transparent 25%,rgba(4,2,14,.7) 100%)}

#g-ui{position:relative;z-index:3;display:flex;flex-direction:column;height:100%;overflow:hidden}
#g-top{display:flex;align-items:flex-end;justify-content:space-between;padding:20px 18px 0;flex-shrink:0}
#g-title{font-family:'Schoolbell',cursive;font-size:clamp(2rem,5.5vw,3.4rem);line-height:.95;background:linear-gradient(140deg,rgba(255,255,255,.95),rgba(255,255,255,.38));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
#g-lib-badge{font-family:'DM Mono',monospace;font-size:.58rem;color:rgba(255,255,255,.4);background:rgba(255,255,255,.06);padding:4px 11px;border-radius:20px;backdrop-filter:blur(10px);white-space:nowrap;}

#g-tabs{display:flex;padding:12px 18px 0;gap:14px;flex-shrink:0}
.gtab{background:none;border:none;color:rgba(255,255,255,.36);font-family:'DM Sans',sans-serif;font-size:.84rem;font-weight:600;padding:6px 0;cursor:pointer;position:relative;transition:color .2s;}
.gtab:hover{color:rgba(255,255,255,.75)}
.gtab.active{color:var(--text)}
.gtab.active::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--accent);border-radius:2px;box-shadow:0 0 8px var(--accent-glow);}

#g-search-wrap{margin:14px 18px 8px;display:flex;align-items:center;background:rgba(255,255,255,.04);border:1px solid var(--glass-border);border-radius:10px;padding:0 12px;gap:10px;flex-shrink:0;backdrop-filter:blur(10px);transition:border-color .2s;}
#g-search-wrap:focus-within{border-color:rgba(255,255,255,.24)}
#g-search-wrap svg{width:14px;height:14px;color:rgba(255,255,255,.23);flex-shrink:0}
#g-search{flex:1;background:transparent;border:none;padding:10px 0;color:var(--text);font-size:.78rem;font-family:'DM Sans',sans-serif;outline:none;}
#g-search::placeholder{color:rgba(255,255,255,.16)}
#g-count{font-family:'DM Mono',monospace;font-size:.62rem;color:rgba(255,255,255,.25)}

#g-sr{display:none;flex:1;flex-direction:column;min-height:0;overflow:hidden}
#g-sr.on{display:flex}
.gsl{font-size:.66rem;font-weight:700;color:rgba(255,255,255,.25);letter-spacing:.11em;text-transform:uppercase;padding:0 20px 8px}
#g-sr-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:12px;padding:4px 18px 24px;overflow-y:auto;align-content:start;}

#g-scroll{flex:1;overflow-y:auto;scrollbar-width:none;min-height:0}
#g-scroll::-webkit-scrollbar{display:none}
.gtp{display:none;flex-direction:column}
.gtp.active{display:flex}

#g-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;text-align:center}
.gem-ico{font-size:2rem;color:rgba(255,255,255,.1);margin-bottom:8px}
.gem-ttl{font-size:.82rem;font-weight:600;color:rgba(255,255,255,.6);margin-bottom:2px}
.gem-sub{font-size:.68rem;color:rgba(255,255,255,.3);margin-bottom:14px}
.gem-btn{padding:8px 16px;border-radius:8px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.03);color:rgba(255,255,255,.5);font-family:'DM Sans',sans-serif;font-size:.72rem;font-weight:600;cursor:pointer;transition:all .15s;}
.gem-btn:hover{background:rgba(255,255,255,.07);color:var(--text);border-color:rgba(255,255,255,.25)}

.ghrow{margin-bottom:20px;display:flex;flex-direction:column}
.ghscroll{display:flex;gap:11px;overflow-x:auto;padding:0 18px 6px;scrollbar-width:none;}
.ghscroll::-webkit-scrollbar{display:none}

.gcard{width:114px;display:flex;flex-direction:column;gap:6px;cursor:pointer;flex-shrink:0;background:none;border:none;text-align:left;padding:0;}
.gc-art-wrap{width:114px;height:114px;border-radius:14px;overflow:hidden;background:rgba(255,255,255,.03);border:1px solid var(--glass-border);position:relative;box-shadow:0 6px 16px rgba(0,0,0,.35);transition:transform .25s cubic-bezier(.34,1.5,.64,1),border-color .2s;}
.gcard:hover .gc-art-wrap{transform:translateY(-4px);border-color:rgba(255,255,255,.25)}
.gc-art-wrap img{width:100%;height:100%;object-fit:cover;display:block}
.gc-art-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Schoolbell',cursive;font-size:2.2rem;color:rgba(255,255,255,.14);text-shadow:0 0 12px rgba(255,255,255,.04);}
.gc-info{display:flex;flex-direction:column;padding:0 2px}
.gc-name{font-size:.72rem;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.gc-src{font-family:'DM Mono',monospace;font-size:.54rem;color:rgba(255,255,255,.3);margin-top:1px}

#gs-bd{position:fixed;inset:0;z-index:4500;background:rgba(0,0,0,0);backdrop-filter:blur(0px);pointer-events:none;transition:all .26s;}
#gs-bd.on{background:rgba(0,0,0,.65);backdrop-filter:blur(14px);pointer-events:all}
#gs{position:fixed;bottom:-100%;left:50%;transform:translateX(-50%);width:min(440px,96vw);background:rgba(10,8,22,.95);border-radius:24px 24px 0 0;backdrop-filter:blur(36px);z-index:4501;transition:bottom .32s cubic-bezier(.34,1.1,.64,1);display:flex;flex-direction:column;max-height:92vh;overflow:hidden;box-shadow:0 -10px 40px rgba(0,0,0,.5);}
#gs.on{bottom:0}
#gs-handle{width:28px;height:3px;border-radius:2px;background:rgba(255,255,255,.12);margin:10px auto 0;flex-shrink:0}
#gs-art-wrap{width:100%;height:155px;position:relative;background:rgba(0,0,0,.2);flex-shrink:0}
#gs-art-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Schoolbell',cursive;font-size:4rem;color:rgba(255,255,255,.05);}
#gs-art-over{position:absolute;inset:0;background:linear-gradient(to bottom,transparent 40%,rgba(10,8,22,1) 100%)}
#gs-close{position:absolute;top:12px;right:12px;width:26px;height:26px;border-radius:50%;background:rgba(0,0,0,.4);border:none;color:rgba(255,255,255,.4);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;z-index:5;}
#gs-close:hover{background:rgba(255,255,255,.1);color:#fff}
#gs-body{padding:0 20px 24px;position:relative;z-index:2}
#gs-title{font-size:1.3rem;font-weight:700;letter-spacing:-.01em;margin-bottom:2px;color:#fff}
#gs-meta{font-family:'DM Mono',monospace;font-size:.58rem;color:rgba(255,255,255,.3);margin-bottom:10px}
#gs-desc{font-size:.74rem;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:18px;min-height:36px}
#gs-acts{display:flex;gap:8px}
#gs-play{flex:1;padding:11px;border-radius:11px;border:none;background:var(--accent);color:#000;font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:700;cursor:pointer;transition:opacity .18s,transform .1s;letter-spacing:.01em;}
#gs-play:hover{opacity:.88}#gs-play:active{transform:scale(.97)}
#gs-add2{padding:11px 16px;border-radius:11px;border:1px solid var(--glass-border);background:var(--glass);color:rgba(255,255,255,.6);font-family:'DM Sans',sans-serif;font-size:.74rem;font-weight:600;cursor:pointer;transition:all .15s;}
#gs-add2:hover{border-color:rgba(255,255,255,.2);color:#fff}
#gs-add2.owned{border-color:rgba(200,200,220,0.3);color:var(--accent);background:rgba(200,200,220,0.06)}
#gs-dl{width:40px;height:40px;border-radius:11px;border:1px solid var(--glass-border);background:var(--glass);color:rgba(255,255,255,.4);font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;}
#gs-dl:hover{border-color:rgba(255,255,255,.2);color:#fff}

#topnav{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);flex-direction:row;width:auto;padding:6px;gap:6px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.6),0 0 20px var(--accent-glow);}
.nav-btn{width:46px;height:46px;border-radius:14px;}
.section{inset:0;padding-bottom:84px}
#status-bar{position:fixed;top:16px;right:16px;box-shadow:0 6px 24px rgba(0,0,0,.4);}
#toast{bottom:92px}
</style>
</head>
<body>
<canvas id="bg"></canvas>

<div id="gate">
 <div id="gate-box">
 <div id="gate-logo">13</div>
 <div id="gate-label">Enter Security Code</div>
 <input type="password" id="gate-input" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" autocomplete="off"/>
 <div id="gate-err"></div>
 <button id="gate-btn" onclick="checkGate()">Unlock</button>
 </div>
</div>

<div id="tag-overlay">
 <div id="tag-modal">
 <div class="tag-header">
 <div class="tag-title">Profile</div>
 <button class="tag-close" onclick="closeTag()">&#x2715;</button>
 </div>
 <div class="tag-body">
 <div class="tag-avatar-row">
 <div class="tag-avatar-big" id="tag-avatar-letter">M</div>
 <div class="tag-name-display" id="tag-name-display">Guest</div>
 <div class="tag-sub">Active Identity</div>
 </div>
 <input type="text" class="tag-input" id="tag-input-field" placeholder="Enter new username..." maxlength="18" autocomplete="off"/>
 <div class="tag-err" id="tag-err-msg"></div>
 <button class="tag-btn" onclick="saveTag()">Save Changes</button> 
 </div>
 </div>
</div>

<div id="topnav">
 <div class="nav-logo">13</div>
 <div class="nav-divider"></div>
 <button class="nav-btn active" id="btn-home" onclick="showSec('home')" title="Home">
 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
 </button>
 <button class="nav-btn" id="btn-games" onclick="showSec('games')" title="Games">
 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 002 2h3a1 1 0 011 1v1a2 2 0 110 4v1a2 2 0 00-2 2v3a1 1 0 01-1 1h-1a2 2 0 11-4 0v-1a2 2 0 00-2-2H7a1 1 0 01-1-1v-1a2 2 0 110-4v-1a2 2 0 002-2V4a1 1 0 011-1h1a2 2 0 012 1v1z"/></svg>
 </button>
 <button class="nav-btn" id="btn-apps" onclick="showSec('apps')" title="Apps">
 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
 </button>
 <button class="nav-btn" id="btn-movies" onclick="showSec('movies')" title="Movies">
 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg>
 </button>
 <button class="nav-btn" id="btn-partners" onclick="showSec('partners')" title="Partners">
 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
 </button>
 <div class="nav-spacer"></div>
 <button class="nav-btn" id="btn-settings" onclick="showSec('settings')" title="Settings">
 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
 </button>
</div>

<div id="status-bar" onclick="openTag()">
 <div class="status-avatar" id="status-avatar-text">G</div>
 <div class="status-username" id="status-username-text">Guest</div>
</div>

<div id="toast"></div>

<div class="section active" id="home-section">
 <div id="home-inner">
 <div class="home-eyebrow" id="home-greeting">good morning</div>
 <div class="home-title" id="home-title-text">13</div>
 <div class="home-search">
 <input type="text" id="home-search-input" placeholder="Search the web&hellip;" autocomplete="off"/>
 <button id="home-search-btn">Search</button>
 </div>
 <div class="clock-wrap"><div class="clock-time" id="clock-time"></div><div class="clock-date" id="clock-date"></div></div>
 <div class="home-slogan">set your heart ablaze</div>
 </div>
</div>

<div class="section" id="games-section">
 <canvas id="g-canvas"></canvas>
 <div id="g-grain"></div>
 <div id="g-vig"></div>
 <div id="g-ui">
 <div id="g-top">
 <div id="g-title">Game<br>Library</div>
 <div id="g-lib-badge">0 saved</div>
 </div>
 <div id="g-tabs">
 <button class="gtab active" data-t="library">Library</button>
 <button class="gtab" data-t="store">Store</button>
 <button class="gtab" data-t="discover">Discover</button>
 </div>
 <div id="g-search-wrap">
 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
 <input id="g-search" type="text" placeholder="Search all games&#x2026;" autocomplete="off"/>
 <span id="g-count"></span>
 </div>
 <div id="g-sr">
 <div style="height:12px"></div>
 <div class="gsl">Results <span id="g-sr-n" style="color:var(--accent);margin-left:6px"></span></div>
 <div id="g-sr-grid"></div>
 </div>
 <div id="g-scroll">
 <div class="gtp active" id="gtp-library">
 <div id="g-empty">
 <div class="gem-ico">&#9711;</div>
 <div class="gem-ttl">Your library is empty</div>
 <div class="gem-sub">Find games in the Store</div>
 <button class="gem-btn" id="g-go-store">Browse Store &rarr;</button>
 </div>
 <div id="g-lib-sec" style="display:none">
 <div class="gsl">Your Games</div>
 <div class="ghscroll" id="g-lib-row"></div>
 </div>
 </div>
 <div class="gtp" id="gtp-store">
 <div id="g-loading" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:48px 0;color:rgba(255,255,255,.3);font-size:.75rem">
 <div class="spinner"></div><span>Loading games&#x2026;</span> </div>
 <div id="g-store-inner" style="display:none">
 <div class="ghrow"><div class="gsl">&#127381; genizy / UGS-Assets</div><div class="ghscroll" id="row-genizy"></div></div>
 <div class="ghrow"><div class="gsl">&#128161; coolmathgames</div><div class="ghscroll" id="row-cmg"></div></div>
 <div class="ghrow"><div class="gsl">&#128640; general collection</div><div class="ghscroll" id="row-general"></div></div>
 </div>
 </div>
 <div class="gtp" id="gtp-discover">
 <div style="padding:40px 20px;text-align:center;color:var(--accent2);font-size:.78rem">Checking server feeds...</div>
 </div>
 </div>
 </div>
</div>

<div id="gs-bd" onclick="closeGS()"></div>
<div id="gs">
 <div id="gs-handle"></div>
 <button id="gs-close" onclick="closeGS()">&#x2715;</button>
 <div id="gs-art-wrap">
 <div id="gs-art-ph"></div>
 <div id="gs-art-over"></div>
 </div>
 <div id="gs-body">
 <div id="gs-title">Game</div>
 <div id="gs-meta"></div>
 <div id="gs-desc"></div>
 <div id="gs-acts">
 <button id="gs-play" onclick="gsPlay()">&#9654; Play Now</button>
 <button id="gs-add2" onclick="gsToggleLib()">+ Library</button>
 <button id="gs-dl" onclick="gsDownload()" title="Download as offline file">&#8595;</button>
 </div>
 </div>
</div>

<div id="game-overlay">
 <div id="proxy-bar">
 <button class="proxy-nav-btn" id="proxy-back-btn">&#8592;</button>
 <button class="proxy-nav-btn" id="proxy-fwd-btn">&#8594;</button>
 <button class="proxy-nav-btn" id="proxy-refresh-btn">&#8635;</button>
 <input type="text" id="proxy-url-bar" placeholder="Enter URL or search&hellip;"/>
 <button id="game-exit-btn">&#x2715;</button>
 </div>
 <iframe id="game-overlay-iframe" allow="fullscreen;autoplay;gamepad;encrypted-media;clipboard-write" referrerpolicy="no-referrer"></iframe>
</div>

<div class="section" id="apps-section">
 <div id="apps-inner">
 <div id="apps-header">
 <div id="apps-header-title">Apps</div>
 <div id="apps-header-sub">your tools</div>
 </div>
 <div id="apps-grid">
 <button class="app-icon-btn" onclick="openApp('dictionary')">
 <div class="app-icon-wrap" style="background:linear-gradient(145deg,#e05c1a,#b33d00)">&#128218;</div>
 <div class="app-icon-label">Dictionary</div>
 </button>
 <button class="app-icon-btn" onclick="openApp('music')">
 <div class="app-icon-wrap" style="background:linear-gradient(145deg,#e0308a,#9b1560)">&#127911;</div>
 <div class="app-icon-label">Music</div>
 </button>
 <button class="app-icon-btn" onclick="openApp('weather')">
 <div class="app-icon-wrap" style="background:linear-gradient(145deg,#0ea5e9,#0369a1)">&#127780;</div>
 <div class="app-icon-label">Weather</div>
 </button>
 <button class="app-icon-btn" onclick="openApp('calculator')">
 <div class="app-icon-wrap" style="background:linear-gradient(145deg,#10b981,#047857)">&#128290;</div>
 <div class="app-icon-label">Calculator</div>
 </button>
 <button class="app-icon-btn" onclick="openApp('timer')">
 <div class="app-icon-wrap" style="background:linear-gradient(145deg,#6366f1,#4338ca)">&#9201;</div>
 <div class="app-icon-label">Timer</div>
 </button>
 </div>
 </div>
</div>

<div id="app-panel-bd" onclick="closeApp()"></div>
<div id="app-panel">
 <div id="app-panel-handle"></div>
 <div id="app-panel-header">
 <div id="app-panel-title">Tool</div>
 <button id="app-panel-close" onclick="closeApp()">&#x2715;</button>
 </div>
 <div id="app-panel-body">
 <div class="ap" id="ap-dictionary" style="display:none;height:100%;display:flex;flex-direction:column">
 <div class="dict-bar">
 <input id="dict-input" type="text" placeholder="Look up a word..." autocomplete="off"/>
 <button id="dict-go" onclick="runDict()">Define</button>
 </div>
 <div id="dict-result"></div>
 </div>
 <div class="ap" id="ap-music" style="display:none">
 <div class="music-picker" id="music-picker">
 <button class="music-opt" onclick="playMusic('https://www.youtube.com/embed/jfKfPfyJRdk')">
 <div class="music-opt-icon">&#127911;</div>
 <div><div class="music-opt-name">Lofi Hip Hop</div><div class="music-opt-desc">Beats to study/relax to</div></div>
 </button>
 <button class="music-opt" onclick="playMusic('https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn')">
 <div class="music-opt-icon">&#127772;</div>
 <div><div class="music-opt-name">Ambient Focus</div><div class="music-opt-desc">Deep soundscapes for immersion</div></div>
 </button>
 </div>
 <div id="music-frame-wrap">
 <div class="music-back-btn-wrap"><button id="music-back-btn" onclick="backMusic()">&larr; Change Station</button></div>
 <iframe id="music-frame" src="about:blank"></iframe>
 </div>
 </div>
 <div class="ap" id="ap-weather" style="display:none"><div id="weather-display"></div></div>
 <div class="ap" id="ap-calculator" style="display:none">
 <div style="padding:14px;max-width:280px;margin:0 auto">
 <input id="calc-screen" type="text" readonly style="width:100%;padding:14px;background:rgba(0,0,0,.3);border:1px solid var(--glass-border);color:#fff;font-family:'DM Mono',monospace;text-align:right;font-size:1.4rem;border-radius:10px;margin-bottom:10px;outline:none"/>
 <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px" id="calc-btns"></div>
 </div>
 </div>
 <div class="ap" id="ap-timer" style="display:none">
 <div style="padding:20px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px">
 <div id="timer-label" style="font-size:.65rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em">stopwatch</div>
 <div id="timer-display" style="font-size:2.8rem;font-family:'DM Mono',monospace;font-weight:500;color:#fff">00:00:00</div>
 <div style="display:flex;gap:6px;justify-content:center">
 <button onclick="swToggle()" id="sw-btn" style="padding:8px 16px;border-radius:8px;border:none;background:var(--accent);color:#000;font-family:'DM Sans',sans-serif;font-size:.76rem;font-weight:700;cursor:pointer">Start</button>
 <button onclick="swReset()" style="padding:8px 16px;border-radius:8px;border:none;background:rgba(255,255,255,.06);color:var(--text);font-family:'DM Sans',sans-serif;font-size:.76rem;font-weight:600;cursor:pointer">Reset</button>
 </div>
 <div style="width:100%;height:1px;background:var(--glass-border);margin:8px 0"></div>
 <div style="font-size:.65rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em">Countdown</div>
 <div style="display:flex;align-items:center;gap:6px;justify-content:center">
 <input id="cd-min" type="number" min="0" max="99" value="5" style="width:60px;padding:8px;border-radius:9px;border:1px solid var(--glass-border);background:rgba(255,255,255,.05);color:var(--text);font-family:'DM Mono',monospace;font-size:.9rem;text-align:center;outline:none"/>
 <span style="color:var(--muted);font-size:1.2rem">:</span>
 <input id="cd-sec" type="number" min="0" max="59" value="0" style="width:60px;padding:8px;border-radius:9px;border:1px solid var(--glass-border);background:rgba(255,255,255,.05);color:var(--text);font-family:'DM Mono',monospace;font-size:.9rem;text-align:center;outline:none"/>
 <button onclick="cdStart()" style="padding:9px 18px;border-radius:9px;border:none;background:rgba(196,196,212,.13);color:var(--accent);font-family:'DM Sans',sans-serif;font-size:.76rem;font-weight:700;cursor:pointer">Go</button>
 </div>
 </div>
 </div>
 </div>
</div>

<div class="section" id="movies-section">
 <div id="movies-inner">
 <iframe id="movies-frame" src="about:blank" style="width:100%;height:100%;border:none;background:var(--bg);display:block" allow="autoplay;fullscreen;encrypted-media;picture-in-picture;clipboard-write" referrerpolicy="no-referrer"></iframe>
 </div>
</div>

<div class="section" id="partners-section">
 <div id="partners-inner">
 <div class="partners-title">Partners</div>
 <div class="partners-sub">Recommended links & web resources</div>
 <div class="partner-cards">
 <div class="partner-card">
 <div class="partner-card-avatar">M</div>
 <div class="partner-card-info">
 <div class="partner-card-name">Mizu Network</div>
 <div class="partner-card-desc">Advanced educational portals and utility sets.</div>
 </div>
 <a href="https://github.com" target="_blank" class="partner-card-btn">Visit</a>
 </div>
 </div>
 <div class="partners-ad-slot">PARTNER AD SLOT AVAILABLE</div>
 </div>
</div>

<div class="section" id="settings-section">
 <div id="settings-inner">
 <div class="settings-wrap">
 <div class="settings-section-head">Interface Layout</div>
 <div class="settings-group">
 <div class="settings-row" style="flex-direction:column;align-items:flex-start;gap:8px">
 <div><div class="settings-row-label">Navigation Placement</div><div class="settings-row-sub">Choose where to dock the primary app bar</div></div>
 <div class="placement-opts" style="width:100%">
 <div class="placement-opt" id="place-bottom" onclick="setNavPlacement('bottom')">
 <div class="placement-preview"><div class="placement-bar-bottom"></div></div><div class="placement-label">Bottom</div>
 </div>
 <div class="placement-opt" id="place-left" onclick="setNavPlacement('left')">
 <div class="placement-preview"><div class="placement-bar-left"></div></div><div class="placement-label">Left</div>
 </div>
 </div>
 </div>
 </div>
 
 <div class="settings-section-head">Proxy</div>
 <div class="settings-group">
 <div class="settings-row" style="flex-direction:column;align-items:flex-start;gap:8px">
 <div><div class="settings-row-label">Proxy Engine</div><div class="settings-row-sub">Engine used for routing requests</div></div>
 <div class="proxy-opts" style="width:100%">
 <div class="proxy-opt active" id="proxy-uv"><div class="proxy-dot"></div><div class="proxy-label">Ultraviolet (UV-Static 2.0)</div><div class="proxy-desc">WISP-powered</div></div>
 <div class="proxy-opt" id="proxy-scramjet"><div class="proxy-dot"></div><div class="proxy-label">Scramjet</div><div class="proxy-desc">Bypasses most filters</div></div>
 <div class="proxy-opt" id="proxy-standard"><div class="proxy-dot"></div><div class="proxy-label">Standard</div><div class="proxy-desc">Basic proxy</div></div>
 </div>
 </div>
 </div>
 
 <div class="settings-section-head">Tab Cloak</div>
 <div class="settings-group">
 <div class="settings-row" style="flex-direction:column;align-items:flex-start;gap:8px">
 <div><div class="settings-row-label">Disguise this tab</div><div class="settings-row-sub">Changes what teachers see in your browser tabs</div></div>
 <div class="cloak-grid" id="cloak-grid">
 <div class="cloak-opt active" data-cloak="none"><span class="cloak-icon">&#128275;</span><span class="cloak-label">None</span></div>
 <div class="cloak-opt" data-cloak="classroom"><span class="cloak-icon">&#128218;</span><span class="cloak-label">Google Classroom</span></div>
 <div class="cloak-opt" data-cloak="docs"><span class="cloak-icon">&#128196;</span><span class="cloak-label">Google Docs</span></div>
 <div class="cloak-opt" data-cloak="khan"><span class="cloak-icon">&#127891;</span><span class="cloak-label">Khan Academy</span></div>
 <div class="cloak-opt" data-cloak="duolingo"><span class="cloak-icon">&#129415;</span><span class="cloak-label">Duolingo</span></div>
 <div class="cloak-opt" data-cloak="desmos"><span class="cloak-icon">&#128202;</span><span class="cloak-label">Desmos</span></div>
 </div>
 </div>
 </div>
 <div class="settings-version" id="settings-version">v3.5 &middot; 13</div>
 </div>
 </div>
</div>

<script>
/* ── helpers ── */
function buildProxyUrl(url){
 if(!url||url==='about:blank')return url;
 return url;
}

/* ── constants ── */
var CORRECT_CODE='idontknowhowtocode';
var CLOAK_MAP={
 none:{title:null,favicon:null},
 classroom:{title:'Stream - Google Classroom',favicon:'https://ssl.gstatic.com/classroom/favicon.png'},
 docs:{title:'Document - Google Docs',favicon:'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico'},
 khan:{title:'Math | Khan Academy',favicon:'https://cdn.kastatic.org/images/favicon.ico'},
 duolingo:{title:'Duolingo',favicon:'https://d35aaqx5ub95lt.cloudfront.net/favicon.ico'},
 desmos:{title:'Desmos | Graphing Calculator',favicon:'https://www.desmos.com/assets/img/favicon.ico'}
};
var S={
 theme:'black',
 name:localStorage.getItem('s_name')||'mizumath copy',
 proxy:localStorage.getItem('s_proxy')||'uv',
 cloak:localStorage.getItem('s_cloak')||'none',
 navPlace:localStorage.getItem('s_navplace')||'bottom'
};
var G_FEEDS=[
 {id:'genizy',name:'genizy / UGS-Assets',url:'https://api.github.com/repos/genizy/UGS-Assets/contents/'},
 {id:'cmg',name:'coolmathgames',url:'https://api.github.com/repos/skysthelimit-a/cmg/contents/'},
 {id:'general',name:'general collection',url:'https://api.github.com/repos/3kh0/3kh0-assets/contents/games'}
];
var ALL_GAMES=[];
var GLIB=JSON.parse(localStorage.getItem('g_lib')||'[]');
var curGame=null;

/* ── gate ── */
function checkGate(){
 var inp=document.getElementById('gate-input'),err=document.getElementById('gate-err');
 if(inp.value===CORRECT_CODE){
 document.getElementById('gate').style.display='none';
 localStorage.setItem('gate_unlocked','1');
 initApp();
 } else {
 inp.classList.add('shake');err.textContent='Invalid security credential.';
 setTimeout(function(){inp.classList.remove('shake');},350);
 }
}
if(localStorage.getItem('gate_unlocked')==='1'){
 document.getElementById('gate').style.display='none';
 window.addEventListener('DOMContentLoaded',initApp);
}

function initApp(){
 applyName(S.name);setProxy(S.proxy);applyCloak(S.cloak);applyNavPlacement(S.navPlace);
 setupGTabs();initGBg();loadGames();
 var frame=document.getElementById('movies-frame');
 if(frame) frame.src="https://m-zone.org";
}

/* ── nav & layout ── */
function showSec(id){
 document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active');});
 document.querySelectorAll('.section').forEach(function(s){s.classList.remove('active');});
 var btn=document.getElementById('btn-'+id),sec=document.getElementById('home-section');
 if(id==='games')sec=document.getElementById('games-section');
 if(id==='apps')sec=document.getElementById('apps-section');
 if(id==='movies')sec=document.getElementById('movies-section');
 if(id==='partners')sec=document.getElementById('partners-section');
 if(id==='settings')sec=document.getElementById('settings-section');
 if(btn)btn.classList.add('active');if(sec)sec.classList.add('active');
 if(id==='games'){setTimeout(resizeGCanvas,40);window.requestAnimationFrame(stepGCanvas);}
}

/* ── profile overlay ── */
function openTag(){
 document.getElementById('tag-input-field').value=S.name;
 document.getElementById('tag-avatar-letter').textContent=(S.name||'G')[0].toUpperCase();
 document.getElementById('tag-name-display').textContent=S.name||'Guest';
 document.getElementById('tag-err-msg').textContent='';
 document.getElementById('tag-overlay').classList.add('open');
}
function closeTag(){document.getElementById('tag-overlay').classList.remove('open');}
function saveTag(){
 var val=document.getElementById('tag-input-field').value.trim();
 if(!val){document.getElementById('tag-err-msg').textContent='Name cannot be blank';return;}
 setCloak(S.cloak);applyName(val);closeTag();showToast('Identity updated');
}
function applyName(n){
 S.name=n;localStorage.setItem('s_name',n);
 document.getElementById('status-username-text').textContent=n||'Guest';
 var av=document.getElementById('status-avatar-text');if(av)av.textContent=(n||'G')[0].toUpperCase();
 if(S.cloak==='none')document.getElementById('page-title').textContent=n||'mizumath copy';
}

/* ── toast ── */
function showToast(msg){
 var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
 clearTimeout(window._tT);window._tT=setTimeout(function(){t.classList.remove('show');},2400);
}

/* ── settings: nav ── */
function applyNavPlacement(p){
 document.body.setAttribute('data-nav',p);
 document.querySelectorAll('.placement-opt').forEach(function(o){o.classList.toggle('active',o.id==='place-'+p);});
}
function setNavPlacement(p){S.navPlace=p;localStorage.setItem('s_navplace',p);applyNavPlacement(p);showToast('Bar: '+p);}

/* ── settings: proxy ── */
document.querySelectorAll('.proxy-opt').forEach(function(o){
 o.addEventListener('click',function(){setProxy(this.id.replace('proxy-',''));});
});
function setProxy(p){
 S.proxy=p;localStorage.setItem('s_proxy',p);
 document.querySelectorAll('.proxy-opt').forEach(function(o){o.classList.remove('active');});
 var el=document.getElementById('proxy-'+p);if(el)el.classList.add('active');
}

/* ── settings: cloak ── */
document.querySelectorAll('.cloak-opt').forEach(function(o){
 o.addEventListener('click',function(){setCloak(this.dataset.cloak);});
});
function applyCloak(c){
 var cfg=CLOAK_MAP[c]||CLOAK_MAP.none;
 document.getElementById('page-title').textContent=cfg.title||S.name||'mizumath copy';
 var lk=document.querySelector("link[rel~='icon']");
 if(!lk){lk=document.createElement('link');lk.rel='icon';document.head.appendChild(lk);}
 lk.href=cfg.favicon||'/favicon.ico';
 document.querySelectorAll('.cloak-opt').forEach(function(el){el.classList.toggle('active',el.dataset.cloak===c);});
}
function setCloak(c){S.cloak=c;localStorage.setItem('s_cloak',c);applyCloak(c);showToast(c==='none'?'Cloak off':'Tab cloaked!');}

/* ── greeting ── */
(function(){
 var h=new Date().getHours();
 document.getElementById('home-greeting').textContent=h>=5&&h<12?'good morning':h>=12&&h<17?'good afternoon':h>=17&&h<21?'good evening':'good night';
})();

/* ── bg canvas (particles) ── */
var bgC=document.getElementById('bg'),bgX=bgC.getContext('2d'),pts=[];
function seedParticles(){
 pts=[];
 for(var i=0;i<90;i++)pts.push({x:Math.random()*bgC.width,y:Math.random()*bgC.height,r:.3+Math.random()*1.3,dx:(Math.random()-.5)*.07,dy:(Math.random()-.5)*.07,o:.04+Math.random()*.2,hue:240+Math.random()*40-20});
}
function resizeBg(){bgC.width=innerWidth;bgC.height=innerHeight;seedParticles();}
resizeBg();window.addEventListener('resize',resizeBg);

/* ── games bg canvas ── */
var gCvs=document.getElementById('g-canvas'),gCtx=gCvs&&gCvs.getContext('2d'),gOrbs=[];
function initGBg(){
 if(!gCvs)return;
 gCvs.width=gCvs.offsetWidth||innerWidth;gCvs.height=gCvs.offsetHeight||innerHeight;
 gOrbs=[
 {ox:.12,oy:.18,r:.52,h:255,s:.0004,a:.17},{ox:.8,oy:.12,r:.42,h:305,s:.00028,a:.13},
 {ox:.48,oy:.72,r:.58,h:195,s:.00022,a:.11},{ox:.88,oy:.62,r:.36,h:162,s:.00042,a:.12},
 {ox:.08,oy:.82,r:.3,h:345,s:.00033,a:.09}
 ];
}
function drawGBg(t){
 if(!gCtx)return;
 var sec=document.getElementById('games-section');
 if(!sec||!sec.classList.contains('active'))return;
 var w=gCvs.width,h=gCvs.height;
 gCtx.fillStyle='#030110';gCtx.fillRect(0,0,w,h);
 gOrbs.forEach(function(o){
 var x=(o.ox+Math.sin(t*o.s*1.7+o.h)*.1)*w,y=(o.oy+Math.cos(t*o.s+o.h*.5)*.08)*h;
 var r=o.r*Math.min(w,h),hue=(o.h+t*o.s*25)%360;
 var g2=gCtx.createRadialGradient(x,y,0,x,y,r);
 g2.addColorStop(0,'hsla('+hue+',55%,40%,'+o.a+')');
 g2.addColorStop(.5,'hsla('+((hue+40)%360)+',45%,25%,'+(o.a*.35)+')');
 g2.addColorStop(1,'transparent');
 gCtx.beginPath();gCtx.arc(x,y,r,0,Math.PI*2);gCtx.fillStyle=g2;gCtx.fill();
 });
}
function resizeGCanvas(){if(gCvs){gCvs.width=gCvs.parentNode.offsetWidth;gCvs.height=gCvs.parentNode.offsetHeight;}}
window.addEventListener('resize',function(){if(document.getElementById('games-section').classList.contains('active'))resizeGCanvas();});
function stepGCanvas(t){drawGBg(t);if(document.getElementById('games-section').classList.contains('active'))window.requestAnimationFrame(stepGCanvas);}

/* ── games core engine ── */
function setupGTabs(){
 document.querySelectorAll('.gtab').forEach(function(btn){
 btn.addEventListener('click',function(){
 document.querySelectorAll('.gtab').forEach(function(b){b.classList.remove('active');});
 document.querySelectorAll('.gtp').forEach(function(p){p.classList.remove('active');});
 this.classList.add('active');
 var p=document.getElementById('gtp-'+this.dataset.t);if(p)p.classList.add('active');
 document.getElementById('g-sr').classList.remove('on');
 document.getElementById('g-scroll').style.display='flex';
 });
 });
 var sBox=document.getElementById('g-search');
 sBox.addEventListener('input',function(){
 var q=this.value.trim().toLowerCase(),sr=document.getElementById('g-sr'),panels=document.getElementById('g-scroll');
 if(!q){sr.classList.remove('on');panels.style.display='flex';return;}
 panels.style.display='none';
 var res=ALL_GAMES.filter(function(g){return g.name.toLowerCase().indexOf(q)>=0;});
 sr.classList.add('on');
 document.getElementById('g-sr-n').textContent=res.length+' results';
 var grid=document.getElementById('g-sr-grid');grid.innerHTML='';
 res.forEach(function(g){grid.appendChild(mkCard(g));});
 });
}

function openGS(game){
 curGame=game;
 var inLib=GLIB.indexOf(game.url)>=0;
 document.getElementById('gs-title').textContent=game.name;
 document.getElementById('gs-meta').textContent=srcLabel(game.src)+' \u00b7 Free';
 var isCDN=game.url&&game.url.startsWith('https://cdn.jsdelivr.net/');
 document.getElementById('gs-desc').textContent='Tap Play to launch '+game.name+(isCDN?' \u2014 loads instantly from CDN.':', routed safely inside the workspace environment.');
 var wrap=document.getElementById('gs-art-wrap'),ph=document.getElementById('gs-art-ph'),oldImg=wrap.querySelector('img');
 if(oldImg)oldImg.remove();
 if(game.thumb){
 ph.style.display='none';
 var img=document.createElement('img');img.id='gs-art';img.style.cssText='width:100%;height:155px;object-fit:cover;display:block';
 img.src=game.thumb;img.alt=game.name;img.onerror=function(){this.remove();ph.style.display='flex';ph.textContent=game.name[0].toUpperCase();};
 wrap.insertBefore(img,ph);
 } else {ph.style.display='flex';ph.textContent=game.name[0].toUpperCase();}
 var a2=document.getElementById('gs-add2');a2.textContent=inLib?'\u2713 In Library':'+ Library';a2.className=inLib?'owned':'';
 document.getElementById('gs-bd').classList.add('on');
 document.getElementById('gs').classList.add('on');
}
function closeGS(){document.getElementById('gs-bd').classList.remove('on');document.getElementById('gs').classList.remove('on');curGame=null;}

function gsDownload(){
 if(!curGame)return;
 var name=curGame.name,url=curGame.url;
 var html='<!DOCTYPE html><html><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>'+name+'</title><style>*{margin:0;padding:0;box-sizing:border-box}html,body{width:100%;height:100%;overflow:hidden;background:#000}iframe{position:fixed;inset:0;width:100%;height:100%;border:none}</style></head><body><iframe src="'+url+'" allow="fullscreen autoplay gamepad encrypted-media" allowfullscreen></iframe></body></html>';
 var blob=new Blob([html],{type:'text/html'});
 var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name.replace(/[^a-z0-9]/gi,'-').toLowerCase()+'.html';
 document.body.appendChild(a);a.click();
 setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},1000);
 showToast(name+' downloaded');
}

function gsPlay(){
 if(!curGame)return;
 if(GLIB.indexOf(curGame.url)<0)addGL(curGame,null);
 openGameOverlay(curGame.url,curGame.name);closeGS();
}
function gsToggleLib(){
 if(!curGame)return;
 var inLib=GLIB.indexOf(curGame.url)>=0;
 if(inLib){remGL(curGame.url);document.getElementById('gs-add2').textContent='+ Library';document.getElementById('gs-add2').className='';}
 else{addGL(curGame,null);document.getElementById('gs-add2').textContent='\u2713 In Library';document.getElementById('gs-add2').className='owned';}
}

async function loadGames(){
 try{
 var gr=await fetch('https://data.jsdelivr.com/v1/stats/packages/gh/genizy/UGS-Assets/all');
 }catch(e){}
 var cached=localStorage.getItem('g_cache_data_v2');
 if(cached){renderAllG(JSON.parse(cached));fetchFeedsBackground();return;}
 var fallback=[];
 G_FEEDS.forEach(function(f){
 for(var i=1;i<=6;i++)fallback.push({name:'Game '+f.id.toUpperCase()+' '+i,url:'about:blank',src:f.id,thumb:''});
 });
 renderAllG(fallback);fetchFeedsBackground();
}

async function fetchFeedsBackground(){
 var bundled=[];
 for(var i=0;i<G_FEEDS.length;i++){
 var f=G_FEEDS[i];
 try{
 var r=await fetch(f.url);if(!r.ok)continue;
 var arr=await r.json();
 if(Array.isArray(arr)){
 arr.forEach(function(item){
 if(item.type==='dir'||item.name.endsWith('.html')||f.id==='general'){
 var name=item.name.replace('.html','').replace(/-/g,' ');
 name=name.split(' ').map(function(w){return w.charAt(0).toUpperCase()+w.slice(1);}).join(' ');
 var gUrl='https://cdn.jsdelivr.net/gh/genizy/UGS-Assets@main/'+item.path;
 if(f.id==='cmg')gUrl='https://cdn.jsdelivr.net/gh/skysthelimit-a/cmg@main/'+item.path;
 if(f.id==='general')gUrl='https://cdn.jsdelivr.net/gh/3kh0/3kh0-assets@main/games/'+item.name+'/';
 if(!item.name.endsWith('.png')&&!item.name.endsWith('.json')&&!item.name.endsWith('.md')){
 bundled.push({name:name,url:gUrl,src:f.id,thumb:''});
 }
 }
 });
 }
 }catch(err){console.log(err);}
 }
 if(bundled.length>0){
 localStorage.setItem('g_cache_data_v2',JSON.stringify(bundled));
 renderAllG(bundled);
 }
}

function renderAllG(list){
 ALL_GAMES=list;
 document.getElementById('g-loading').style.display='none';
 document.getElementById('g-store-inner').style.display='block';
 document.getElementById('g-count').textContent=list.length+' items';
 var rows={genizy:document.getElementById('row-genizy'),cmg:document.getElementById('row-cmg'),general:document.getElementById('row-general')};
 Object.keys(rows).forEach(function(k){if(rows[k])rows[k].innerHTML='';});
 list.forEach(function(g){
 var el=mkCard(g);if(rows[g.src])rows[g.src].appendChild(el);
 });
 rebuildLibUI();
}

function mkCard(g){
 var btn=document.createElement('button');btn.className='gcard';
 btn.onclick=function(){openGS(g);};
 var art=document.createElement('div');art.className='gc-art-wrap';
 if(g.thumb){var img=document.createElement('img');img.src=g.thumb;img.loading='lazy';art.appendChild(img);}
 else{var ph=document.createElement('div');ph.className='gc-art-ph';ph.textContent=g.name[0].toUpperCase();art.appendChild(ph);}
 var info=document.createElement('div');info.className='gc-info';
 var nm=document.createElement('div');nm.className='gc-name';nm.textContent=g.name;
 var sc=document.createElement('div');sc.className='gc-src';sc.textContent=srcLabel(g.src);
 info.appendChild(nm);info.appendChild(sc);btn.appendChild(art);btn.appendChild(info);
 return btn;
}
function srcLabel(s){return s==='genizy'?'Genizy':s==='cmg'?'CoolMath':'AssetFeed';}

function rebuildLibUI(){
 var badge=document.getElementById('g-lib-badge'),empty=document.getElementById('g-empty'),sec=document.getElementById('g-lib-sec'),row=document.getElementById('g-lib-row');
 badge.textContent=GLIB.length+' saved';
 row.innerHTML='';
 if(GLIB.length===0){empty.style.display='flex';sec.style.display='none';return;}
 empty.style.display='none';sec.style.display='block';
 GLIB.forEach(function(url){
 var found=ALL_GAMES.find(function(g){return g.url===url;})||{name:'Saved Asset',url:url,src:'general',thumb:''};
 row.appendChild(mkCard(found));
 });
}
function addGL(g,e){
 if(e){e.stopPropagation();e.preventDefault();}
 if(GLIB.indexOf(g.url)<0){GLIB.push(g.url);localStorage.setItem('g_lib',JSON.stringify(GLIB));rebuildLibUI();showToast('Saved to library');}
}
function remGL(url){
 var idx=GLIB.indexOf(url);
 if(idx>=0){GLIB.splice(idx,1);localStorage.setItem('g_lib',JSON.stringify(GLIB));rebuildLibUI();showToast('Removed asset');}
}

document.getElementById('g-go-store').onclick=function(){
 document.querySelectorAll('.gtab').forEach(function(b){b.classList.remove('active');});
 document.querySelectorAll('.gtp').forEach(function(p){p.classList.remove('active');});
 var sBtn=document.querySelector('.gtab[data-t="store"]');if(sBtn)sBtn.classList.add('active');
 var sPan=document.getElementById('gtp-store');if(sPan)sPan.classList.add('active');
};

/* ── game overlay & client proxy navigations ── */
var ovHistory=[],ovHistIdx=-1;
function openGameOverlay(url,title){
 var target=buildProxyUrl(url);
 var overlay=document.getElementById('game-overlay'),iframe=document.getElementById('game-overlay-iframe'),bar=document.getElementById('proxy-url-bar');
 overlay.classList.add('open');
 iframe.src=target;
 bar.value=url;
 ovHistory=[url];ovHistIdx=0;updateProxyNav();
}
document.getElementById('game-exit-btn').onclick=function(){
 var overlay=document.getElementById('game-overlay'),iframe=document.getElementById('game-overlay-iframe');
 overlay.classList.remove('open');iframe.src='about:blank';
};
function updateProxyNav(){
 document.getElementById('proxy-back-btn').disabled=(ovHistIdx<=0);
 document.getElementById('proxy-fwd-btn').disabled=(ovHistIdx>=ovHistory.length-1);
}
document.getElementById('proxy-back-btn').onclick=function(){
 if(ovHistIdx>0){ovHistIdx--;var url=ovHistory[ovHistIdx];document.getElementById('game-overlay-iframe').src=buildProxyUrl(url);document.getElementById('proxy-url-bar').value=url;updateProxyNav();}
};
document.getElementById('proxy-fwd-btn').onclick=function(){
 if(ovHistIdx<ovHistory.length-1){ovHistIdx++;var url=ovHistory[ovHistIdx];document.getElementById('game-overlay-iframe').src=buildProxyUrl(url);document.getElementById('proxy-url-bar').value=url;updateProxyNav();}
};
document.getElementById('proxy-refresh-btn').onclick=function(){
 document.getElementById('game-overlay-iframe').contentWindow.location.reload();
};
document.getElementById('proxy-url-bar').onkeydown=function(e){
 if(e.key==='Enter'){
 var val=this.value.trim();if(!val)return;
 if(!val.startsWith('http://')&&!val.startsWith('https://'))val='https://'+val;
 ovHistory=ovHistory.slice(0,ovHistIdx+1);ovHistory.push(val);ovHistIdx++;
 document.getElementById('game-overlay-iframe').src=buildProxyUrl(val);
 updateProxyNav();
 }
};

/* ── web app searches ── */
document.getElementById('home-search-btn').onclick=runHomeSearch;
document.getElementById('home-search-input').onkeydown=function(e){if(e.key==='Enter')runHomeSearch();};
function runHomeSearch(){
 var q=document.getElementById('home-search-input').value.trim();if(!q)return;
 var url='https://www.google.com/search?q='+encodeURIComponent(q);
 openGameOverlay(url,q);
}

/* ── app feature scripts ── */
async function runDict(){
 var w=document.getElementById('dict-input').value.trim(),res=document.getElementById('dict-result');
 if(!w){res.innerHTML='<em>Please enter a term.</em>';return;}
 res.innerHTML='<div class="spinner" style="margin:20px auto"></div>';
 try{
 var r=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(w));
 if(!r.ok){res.innerHTML='<em>No definitions found. Check spelling.</em>';return;}
 var arr=await r.json(),data=arr[0],html='<strong>'+data.word+'</strong>';
 if(data.phonetic)html+='<span style="color:var(--muted);font-family:\'DM Mono\';font-size:.65rem;margin-left:8px">'+data.phonetic+'</span>';
 data.meanings.forEach(function(m){
 html+='<em style="margin-top:6px">'+m.partOfSpeech+'</em>';
 m.definitions.slice(0,3).forEach(function(d){html+='<div class="def">'+d.definition+'</div>';});
 });
 res.innerHTML=html;
 }catch(err){res.innerHTML='<em>Lookup system offline.</em>';}
}
function playMusic(url){
 document.getElementById('music-picker').style.display='none';
 document.getElementById('music-frame-wrap').style.display='flex';
 document.getElementById('music-frame').src=url;
}
function backMusic(){
 document.getElementById('music-frame').src='about:blank';
 document.getElementById('music-frame-wrap').style.display='none';
 document.getElementById('music-picker').style.display='flex';
}
async function loadWeather(){
 var el=document.getElementById('weather-display');el.innerHTML='<div class="spinner" style="margin:20px auto"></div>';
 try{
 var r=await fetch('https://wttr.in/New+York?format=j1');if(!r.ok)throw new Error();
 var d=await r.json(),cc=d.current_condition[0],temp=cc.temp_F,desc=cc.weatherDesc[0].value,humidity=cc.humidity,wind=cc.windspeedMiles;
 el.innerHTML='<div style="font-weight:700;font-size:1.4rem;color:var(--accent);line-height:1.2;margin-bottom:6px">'+temp+'&deg;F</div><div style="text-transform:capitalize;font-weight:600;margin-bottom:12px">'+desc+'</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:.68rem;color:var(--muted)"><div style="background:rgba(255,255,255,.02);padding:6px;border-radius:6px">Humidity: <span style="color:#fff;font-weight:600">'+humidity+'%</span></div><div style="background:rgba(255,255,255,.02);padding:6px;border-radius:6px">Wind: <span style="color:#fff;font-weight:600">'+wind+' mph</span></div></div>';
 }catch(e){el.innerHTML='<span style="color:var(--muted2)">Weather unavailable.</span>';}
}

/* ── apps ── */
var _curApp=null,_timerInt=null,_timerMs=0,_timerRunning=false,_cdInt=null;
function openApp(id){
 document.querySelectorAll('.ap').forEach(function(p){p.style.display='none';});
 var panel=document.getElementById('ap-'+id);if(!panel)return;
 panel.style.display='block';_curApp=id;
 var titles={dictionary:'Dictionary',music:'Music',weather:'Weather',calculator:'Calculator',timer:'Timer'};
 document.getElementById('app-panel-title').textContent=titles[id]||id;
 document.getElementById('app-panel-bd').classList.add('on');
 document.getElementById('app-panel').classList.add('on');
 if(id==='weather')loadWeather();
 if(id==='calculator')initCalc();
}
function closeApp(){
 document.getElementById('app-panel-bd').classList.remove('on');
 document.getElementById('app-panel').classList.remove('on');
 if(_curApp==='music'){
 document.getElementById('music-frame').src='about:blank';
 document.getElementById('music-frame-wrap').style.display='none';
 document.getElementById('music-picker').style.display='flex';
 }
 _curApp=null;
}
function initCalc(){
 var wrap=document.getElementById('calc-btns');if(wrap.children.length>0)return;
 var keys=['C','&larr;','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','&plusmn;','='];
 keys.forEach(function(k){
 var b=document.createElement('button');b.innerHTML=k;
 b.style.cssText='padding:11px;border-radius:8px;border:1px solid var(--glass-border);background:rgba(255,255,255,.03);color:#fff;font-family:\'DM Mono\';font-size:.8rem;font-weight:600;cursor:pointer;transition:all .12s;';
 if(k==='=')b.style.background='var(--accent)',b.style.color='#000',b.style.borderColor='transparent';
 b.onmouseover=function(){if(k!=='=')this.style.borderColor='rgba(255,255,255,.2)',this.style.background='rgba(255,255,255,.06)';};
 b.onmouseout=function(){if(k!=='=')this.style.borderColor='var(--glass-border)',this.style.background='rgba(255,255,255,.03)';};
 b.onclick=function(){clickCalc(k);};
 wrap.appendChild(b);
 });
}
function clickCalc(k){
 var scr=document.getElementById('calc-screen');
 if(k==='C')scr.value='';
 else if(k==='&larr;')scr.value=scr.value.slice(0,-1);
 else if(k==='='){try{scr.value=eval(scr.value.replace(/%/g,'/100'));}catch(e){scr.value='Error';}}
 else if(k==='&plusmn;'){if(scr.value.startsWith('-'))scr.value=scr.value.slice(1);else scr.value='-'+scr.value;}
 else{if(scr.value==='Error')scr.value='';scr.value+=k;}
}

/* ── stopwatch ── */
function swToggle(){
 var btn=document.getElementById('sw-btn');
 if(_timerRunning){
 _timerRunning=false;clearInterval(_timerInt);btn.textContent='Start';btn.style.background='var(--accent)';btn.style.color='#000';
 } else {
 _timerRunning=true;var start=Date.now()-_timerMs;
 document.getElementById('timer-label').textContent='stopwatch running';
 _timerInt=setInterval(function(){_timerMs=Date.now()-start;var t=_timerMs,ms=Math.floor((t%1000)/10),s=Math.floor((t/1000)%60),m=Math.floor((t/60000)%60);document.getElementById('timer-display').textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')+':'+String(ms).padStart(2,'0');},33);
 btn.textContent='Stop';btn.style.background='rgba(239,68,68,.2)';btn.style.color='#f87171';
 }
}
function swReset(){
 _timerRunning=false;clearInterval(_timerInt);_timerMs=0;
 document.getElementById('timer-label').textContent='stopwatch';
 document.getElementById('timer-display').textContent='00:00:00';
 var btn=document.getElementById('sw-btn');btn.textContent='Start';btn.style.background='var(--accent)';btn.style.color='#000';
}
function cdStart(){
 clearInterval(_cdInt);
 var m=parseInt(document.getElementById('cd-min').value)||0;
 var s=parseInt(document.getElementById('cd-sec').value)||0;
 var total=(m*60+s)*1000;if(total<=0)return;
 var end=Date.now()+total;
 document.getElementById('timer-label').textContent='countdown';
 _cdInt=setInterval(function(){
 var left=end-Date.now();
 if(left<=0){clearInterval(_cdInt);left=0;showToast('Timer done!');}
 var rm=Math.floor(left/60000),rs=Math.floor((left%60000)/1000);
 document.getElementById('timer-display').textContent=String(rm).padStart(2,'0')+':'+String(rs).padStart(2,'0');
 },250);
}

/* ── clock ── */
function updateClock(){
 var n=new Date(),t=n.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
 document.getElementById('clock-time').textContent=t;
 document.getElementById('clock-date').textContent=n.toLocaleDateString([],{month:'numeric',day:'numeric',year:'2-digit'});
}
updateClock();setInterval(updateClock,1000);
</script>
</body>
</html>
