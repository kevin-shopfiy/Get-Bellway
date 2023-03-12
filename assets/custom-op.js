var _0x5349 = [
    "platform",
    "classList",
    "createElement",
    "attributes",
    "No-optimization",
    "removeChild",
    "getElementById",
    "srcset",
    "readyState",
    "8233rrwTlW",
    "checkout",
    "mousemove",
    "top",
    "srcset",
    "dataset",
    "location",
    ".myshopify.com",
    "dispatchEvent",
    "Test Board",
    "width",
    "querySelectorAll",
    ".opt_bg_lazy",
    "appendChild",
    "src",
    "insertBefore",
    "rel",
    "opt_bg_lazy",
    "stylesheet",
    "1897690eBdiuW",
    "opt_lazy",
    "setAttribute",
    "scroll",
    "wnw_load",
    "link[data-href]",
    "img.opt_lazy",
    "body",
    "onload",
    "Yes-optimization",
    "nextSibling",
    "innerHTML",
    "572171GEjXnu",
    "mobsrc",
    "innerHeight",
    "getAttribute",
    "script[type=noscript-s]",
    "forEach",
    "805408pNJrvU",
    "9995jWVcqK",
    "log",
    "script",
    "remove",
    "DOMContentLoaded",
    "src",
    "data-href",
    "onreadystatechange",
    "iframe",
    "touchstart",
    "1165575NTzyQw",
    "nodeName",
    "mobstyle",
    "1004847ImCLpH",
    "cart",
    "indexOf",
    "open",
    "type",
    "length",
    "initEvent",
    "11FWFliM",
    "parentNode",
    "1gIAEGT",
    "style[type=lazyload2]",
    "value",
    "addEventListener",
    "onerror",
    "href",
    "nodeValue",
    "style",
    "createEvent",
    "name",
],
_0x4e3b0e = _0x1e4d;
!(function (e, t) {
for (var n = _0x1e4d; ; )
    try {
        if (600271 === parseInt(n(351)) + parseInt(n(284)) * -parseInt(n(354)) + -parseInt(n(340)) + -parseInt(n(334)) + -parseInt(n(282)) * parseInt(n(303)) + parseInt(n(341)) + parseInt(n(322))) break;
        e.push(e.shift());
    } catch (t) {
        e.push(e.shift());
    }
})(_0x5349);
var src,
srcset,
windowWidth,
critical2,
lazyBackground,
lazyIframe,
lazybg,
xmlhttp,
s,
i,
flag = 1,
lazy_load_by_px = 200,
external_single_loaded = 1;
function critical_resources() {
let e = document.querySelectorAll("[critical-css]");
e.length > 0 &&
    e.forEach((e) => {
        (e.href = e.dataset.href), document.querySelector("head").appendChild(e);
    });
let t = document.querySelectorAll("script[type=noscript-p]");
t.length > 0 &&
    t.forEach((e) => {
        e.dataset.src && (e.src = e.dataset.src), (e.type = "text/javascript"), document.querySelector("head").append(e), console.log(e), loadScripts(), document.querySelector("head").appendChild(e);
    });
}
function wnw_init() {
flag && ((flag = 0), critical_resources(), lazyLoadImg(), lazyLoadBackground(), lazyLoadStyle(), lazyLoadCss(), load_all_js(), lazyLoadIframe());
}
function insertAfter(e, t) {
var n = _0x1e4d;
t.parentNode[n(318)](e, t[n(332)]);
}
function lazyLoadImg() {
var e = _0x1e4d,
    t = document.querySelectorAll(e(328)),
    n = window[e(336)];
for (i = 0; i < t[e(359)]; i++) {
    var o = t[i].getBoundingClientRect();
    0 != o[e(306)] &&
        o[e(306)] - n < lazy_load_by_px &&
        ((src = windowWidth < 600 ? (void 0 === t[i].dataset[e(335)] ? t[i][e(308)][e(346)] : t[i][e(308)].mobsrc) : void 0 === t[i][e(308)].src ? t[i][e(346)] : t[i].dataset[e(346)]),
        (srcset = t[i].getAttribute(e(301)) ? t[i][e(337)](e(301)) : ""),
        null != src && "" != src && (t[i][e(346)] = src),
        null != srcset && "" != srcset && (t[i][e(307)] = srcset),
        t[i][e(295)].remove(e(323)));
}
}
function lazyLoadBackground() {
var e = _0x1e4d;
(lazyBackground = document[e(314)](e(315))).forEach(function (t) {
    var n = e;
    null != (lazybg = windowWidth < 600 ? (void 0 === t[n(308)][n(353)] ? t.dataset[n(291)] : t[n(308)][n(353)]) : void 0 === t.dataset[n(291)] ? t[n(291)] : t[n(308)][n(291)]) && "" != lazybg && (t[n(291)] = lazybg),
        t[n(295)][n(344)](n(320));
});
}
function _0x1e4d(e, t) {
return (_0x1e4d = function (e, t) {
    return _0x5349[(e -= 282)];
})(e, t);
}
function lazyLoadCss() {
var e = _0x1e4d,
    t = document.querySelectorAll(e(327));
for (i = 0; i < t[e(359)]; i++) {
    var n = document[e(296)]("link");
    (n[e(289)] = t[i][e(337)](e(347))), (n[e(319)] = e(321)), delete t[i][e(308)][e(289)], t[i][e(283)][e(318)](n, t[i]), t[i][e(283)][e(299)](t[i]);
}
}
function lazyLoadStyle() {
var e = _0x1e4d,
    t = document[e(314)](e(285));
for (i = 0; i < t.length; i++) {
    var n = document[e(296)]("style");
    (n[e(333)] = t[i].innerHTML), t[i].parentNode[e(318)](n, t[i]), t[i][e(283)][e(299)](t[i]);
}
}
function lazyLoadIframe() {
var e = _0x1e4d;
(lazyIframe = document.querySelectorAll(e(349))).forEach(function (t) {
    var n = e;
    null != t[n(308)][n(346)] && "" != t[n(308)].src && (t[n(346)] = t[n(308)].src);
});
}
function w3_load_js_uri(e) {
var t = _0x1e4d,
    n = document[t(296)]("script");
if (void 0 !== e[t(297)]) for (var o, a = 0, r = e[t(297)], i = r.length; a < i; a++) t(317) != (o = r[a])[t(352)] && t(358) != o.nodeName && n[t(324)](o[t(352)], o[t(290)]);
return (n[t(346)] = e[t(337)]("src")), insertAfter(n, e), delete e[t(308)][t(346)], delete e[t(358)], e[t(283)].removeChild(e), n;
}
function w3_load_inline_js_single(e) {
var t = _0x1e4d;
if (!external_single_loaded)
    return (
        setTimeout(function () {
            w3_load_inline_js_single(e);
        }, 200),
        !1
    );
for (var n = document[t(296)](t(343)), o = 0; o < e[t(297)][t(359)]; o++) {
    var a = e.attributes[o];
    "type" != a[t(293)] && n[t(324)](a[t(293)], a[t(286)]);
}
(n[t(333)] = e[t(333)]), insertAfter(n, e), e[t(283)][t(299)](e);
}
function lazyLoadScripts() {
var e = _0x1e4d,
    t = document.querySelectorAll(e(338));
if (!(t[e(359)] < 1))
    if (null !== t[0][e(337)]("src")) {
        var n = w3_load_js_uri(t[0]);
        (n.onload = function () {
            lazyLoadScripts();
        }),
            (n[e(288)] = function () {
                lazyLoadScripts();
            });
    } else w3_load_inline_js_single(t[0]), lazyLoadScripts();
}
function lazyLoadCss2(e, t) {
var n = _0x1e4d;
((xmlhttp = new XMLHttpRequest())[n(348)] = function () {
    var e = n;
    4 == this[e(302)] && 200 == this.status && (document[e(300)](t)[e(333)] = this.responseText);
}),
    xmlhttp[n(357)]("GET", e, !0),
    xmlhttp.send();
}
function lazyLoadJS(e) {
var t = _0x1e4d;
((s = document[t(296)](t(343)))[t(346)] = e),
    (s[t(330)] = function () {
        var e = t;
        document[e(329)][e(316)](s);
    });
}
function load_all_js() {
var e = _0x1e4d;
window[e(309)][e(289)][e(356)](e(310)) > -1 || window[e(309)][e(289)][e(356)](e(355)) > -1 || window[e(309)][e(289)][e(356)](e(304)) > -1
    ? console[e(342)](e(298))
    : (console.log(e(331)),
      setTimeout(function () {
          var t = e,
              n = new Event(t(326));
          window[t(311)](n);
      }, 200)),
    lazyLoadScripts(),
    setTimeout(function () {
        var t = e,
            n = document[t(292)]("Event");
        n[t(360)]("DOMContentLoaded2", !0, !0),
            window.document[t(311)](n),
            (critical2 = document[t(314)](".critical2"))[t(339)](function (e) {
                e[t(333)] = "";
            });
    }, 3e3);
}
function loadScripts() {
if (navigator.userAgent.search("Firefox") > -1) {
    (window.theme_scripts = []),
        document.querySelectorAll("script[type=noscript-p]").forEach((e) => {
            e.dataset.src && window.theme_scripts.push({ url: e.dataset.src, type: "script" });
        }),
        document.querySelectorAll("script[type=noscript-s]").forEach((e) => {
            e.dataset.src && window.theme_scripts.push({ url: e.dataset.src, type: "script" });
        });
    const e = new Date().getDate();
    sessionStorage.getItem("cacheDate") != e && (sessionStorage.clear(), sessionStorage.setItem("cacheDate", e)),
        (Array.prototype.forEachAsync = function (e, t) {
            var n = this;
            setTimeout(function () {
                var o = 0,
                    a = function () {
                        this.burned || ((this.burned = !0), ++o >= n.length ? t && t() : e(n[o], a.bind({})));
                    };
                0 == n.length ? t && t() : e(n[0], a.bind({}));
            }, 0);
        });
    const t = function (e, t) {
            let n = document.createElement("script");
            (n.innerHTML = n.innerHTML + e), console.log(t + " was added: JS"), document.getElementsByTagName("head")[0].appendChild(n);
        },
        n = function (e, t) {
            let n = document.createElement("style");
            (n.type = "text/css"),
                n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)),
                document.getElementsByTagName("head")[0].appendChild(n),
                console.log(t + " was added: CSS"),
                window.scrollTo(0, 0),
                document.body.classList.contains("hidden_load") && document.body.classList.remove("hidden_load");
        };
    window.theme_scripts.forEachAsync(
        function (e, o) {
            if (null == sessionStorage.getItem(e.url))
                fetch(e.url)
                    .then((e) => e.text())
                    .then((a) => {
                        sessionStorage.setItem(e.url, a), "CSS" == e.type ? n(a, e.url) : t(a, e.url), o();
                    });
            else {
                let a = sessionStorage.getItem(e.url);
                "CSS" == e.type ? n(a, e.url) : t(a, e.url), o();
            }
        },
        function () {
            console.log("All done!"), emitEvent("allReady", window, {});
        }
    );
}
}
document[_0x4e3b0e(287)](_0x4e3b0e(345), function () {
var e = _0x4e3b0e;
(windowWidth = screen[e(313)]),
    window.addEventListener(e(325), function () {
        lazyLoadImg(), wnw_init();
    }),
    window[e(287)](e(305), function () {
        lazyLoadImg(), wnw_init();
    }),
    lazyLoadImg(),
    window[e(287)](e(350), function () {
        lazyLoadImg(), wnw_init();
    });
});

window.addEventListener('load', function(){

    console.log('Load FIRE');  
    setTimeout(()=>{
               loadScripts();
               wnw_init();
               }, 15000);
  
})
  
  
  
  function loadScripts()
  {
      let f = navigator.userAgent.search("Firefox");
      if(f > -1){
  
  
        window.theme_scripts = [];
         document.querySelectorAll('script[type=lazyload]').forEach((script)=>{
          if(script.dataset.src){
            window.theme_scripts.push({ url : script.dataset.src, type: "script"});
          }
  
        });
        document.querySelectorAll('script[type=lazyload2]').forEach((script)=>{
          if(script.dataset.src){
            window.theme_scripts.push({ url : script.dataset.src, type: "script"});
          }
  
        });
        document.querySelectorAll('script[type=noscript-p]').forEach((script)=>{
          if(script.dataset.src){
            window.theme_scripts.push({ url : script.dataset.src, type: "script"});
          }
  
        });
        document.querySelectorAll('script[type=noscript-s]').forEach((script)=>{
          if(script.dataset.src){
            window.theme_scripts.push({ url : script.dataset.src, type: "script"});
          }
  
        });
  
        const e = new Date().getDate();
        sessionStorage.getItem("cacheDate") != e && (sessionStorage.clear(), sessionStorage.setItem("cacheDate", e)),
          (Array.prototype.forEachAsync = function (e, t) {
          var n = this;
          setTimeout(function () {
            var o = 0,
                s = function () {
                  this.burned || ((this.burned = !0), ++o >= n.length ? t && t() : e(n[o], s.bind({})));
                };
            0 == n.length ? t && t() : e(n[0], s.bind({}));
          }, 0);
        });
        const t = function (e, t) {
          let n = document.createElement("script");
          (n.innerHTML = n.innerHTML + e), console.log(t + " was added: JS"), document.getElementsByTagName("head")[0].appendChild(n);
        },
              n = function (e, t) {
                let n = document.createElement("style");
                (n.type = "text/css"),
                  n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)),
                  document.getElementsByTagName("head")[0].appendChild(n),
                  console.log(t + " was added: CSS"),
                  window.scrollTo(0, 0),
                  document.body.classList.contains("hidden_load") && document.body.classList.remove("hidden_load");
              };
        window.theme_scripts.forEachAsync(
          function (e, o) {
            if (null == sessionStorage.getItem(e.url))
              fetch(e.url)
              .then((e) => e.text())
              .then((s) => {
                sessionStorage.setItem(e.url, s), "CSS" == e.type ? n(s, e.url) : t(s, e.url), o();
              });
            else {
              let s = sessionStorage.getItem(e.url);
              "CSS" == e.type ? n(s, e.url) : t(s, e.url), o();
            }
          },
          function () {
            console.log("All done!"), emitEvent("allReady", window, {});
          }
        );
        
        
        document.querySelectorAll('script[type=noscript-p]').forEach((script)=>{
          if(!script.dataset.src){
            //window.theme_scripts.push({ url : script.dataset.src, type: "script"});
            
            let scr = document.createElement('script');
            scr.type = "text/javascript";
            scr.innerHTML = script.innerHTML;
  
            document.querySelector('head').appendChild(scr);
            
            
          }
  
        });
        document.querySelectorAll('script[type=noscript-s]').forEach((script)=>{
          if(!script.dataset.src){
            //window.theme_scripts.push({ url : script.dataset.src, type: "script"});
  
            let scr = document.createElement('script');
            scr.type = "text/javascript";
            scr.innerHTML = script.innerHTML;
  
            document.querySelector('head').appendChild(scr);
          }
  
        });
        document.querySelectorAll('script[type=lazyload]').forEach((script)=>{
          if(!script.dataset.src){
            //window.theme_scripts.push({ url : script.dataset.src, type: "script"});
  
            let scr = document.createElement('script');
            scr.type = "text/javascript";
            scr.innerHTML = script.innerHTML;
  
            document.querySelector('head').appendChild(scr);
          }
  
        });
        document.querySelectorAll('script[type=lazyload2]').forEach((script)=>{
          if(!script.dataset.src){
            //window.theme_scripts.push({ url : script.dataset.src, type: "script"});
  
            let scr = document.createElement('script');
            scr.type = "text/javascript";
            scr.innerHTML = script.innerHTML;
  
            document.querySelector('head').appendChild(scr);
          }
  
        });
        
        
      }
  
  
}


