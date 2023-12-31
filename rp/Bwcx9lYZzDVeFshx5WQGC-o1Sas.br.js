var customEvents, __spreadArray, fallbackReplay, CoreUtilities, DataSourceLayoutManager, EventLoggingModule;
_w.EventsToDuplicate = [];
_w.useSharedLocalStorage = !1;
define("shared", ["require", "exports"], function(n, t) {
    function s(n, t) {
        for (var r = n.length, i = 0; i < r; i++)
            t(n[i])
    }
    function r(n) {
        for (var i = [], t = 1; t < arguments.length; t++)
            i[t - 1] = arguments[t];
        return function() {
            n.apply(null, i)
        }
    }
    function u(n) {
        i && event && (event.returnValue = !1);
        n && typeof n.preventDefault == "function" && n.preventDefault()
    }
    function f(n) {
        i && event && (event.cancelBubble = !0);
        n && typeof n.stopPropagation == "function" && n.stopPropagation()
    }
    function e(n, t, i) {
        for (var r = 0; n && n.offsetParent && n != (i || document.body); )
            r += n["offset" + t],
            n = n.offsetParent;
        return r
    }
    function o() {
        return (new Date).getTime()
    }
    function h(n) {
        return i ? event : n
    }
    function c(n) {
        return i ? event ? event.srcElement : null : n.target
    }
    function l(n) {
        return i ? event ? event.fromElement : null : n.relatedTarget
    }
    function a(n) {
        return i ? event ? event.toElement : null : n.relatedTarget
    }
    function v(n, t, i) {
        while (n && n != (i || document.body)) {
            if (n == t)
                return !0;
            n = n.parentNode
        }
        return !1
    }
    function y(n) {
        window.location.href = n
    }
    function p(n, t) {
        n && (n.style.filter = t >= 100 ? "" : "alpha(opacity=" + t + ")",
        n.style.opacity = t / 100)
    }
    t.__esModule = !0;
    t.getTime = t.getOffset = t.stopPropagation = t.preventDefault = t.wrap = t.forEach = void 0;
    var i = sb_ie;
    t.forEach = s;
    t.wrap = r;
    t.preventDefault = u;
    t.stopPropagation = f;
    t.getOffset = e;
    t.getTime = o;
    window.sj_b = document.body;
    window.sb_de = document.documentElement;
    window.sj_wf = r;
    window.sj_pd = u;
    window.sj_sp = f;
    window.sj_go = e;
    window.sj_ev = h;
    window.sj_et = c;
    window.sj_mi = l;
    window.sj_mo = a;
    window.sj_we = v;
    window.sb_gt = o;
    window.sj_so = p;
    window.sj_lc = y
});
define("env", ["require", "exports", "shared"], function(n, t, i) {
    function v(n, t) {
        return t.length && typeof n == "function" ? function() {
            return n.apply(null, t)
        }
        : n
    }
    function y(n, t) {
        var e = [].slice.apply(arguments).slice(2), i = v(n, e), u;
        return typeof i == "function" && (u = window.setImmediate && !window.setImmediate.Override && (!t || t <= 16) ? "i" + setImmediate(i) : o(i, t),
        f[r] = u,
        r = (r + 1) % a),
        u
    }
    function p(n, t) {
        var r = [].slice.apply(arguments).slice(2)
          , i = l(v(n, r), t);
        return e[u] = i,
        u = (u + 1) % a,
        i
    }
    function w() {
        h.forEach(f, s);
        h.forEach(e, window.clearInterval);
        r = u = e.length = f.length = 0
    }
    function s(n) {
        n != null && (typeof n == "string" && n.indexOf("i") === 0 ? window.clearImmediate(parseInt(n.substr(1), 10)) : c(n))
    }
    var h = i, f = [], e = [], o, c, l, a = 1024, r = 0, u = 0;
    o = window.setTimeout;
    t.setTimeout = y;
    l = window.setInterval;
    t.setInterval = p;
    t.clear = w;
    c = window.clearTimeout;
    t.clearTimeout = s;
    window.sb_rst = o;
    window.setTimeout = window.sb_st = y;
    window.setInterval = window.sb_si = p;
    window.clearTimeout = window.sb_ct = s
});
define("event.custom", ["require", "exports"], function(n, t) {
    function o(n) {
        return i[n] || (i[n] = [])
    }
    function s(n, t) {
        n.d ? setTimeout(function() {
            n.apply(null, t)
        }, n.d) : n(t)
    }
    function l() {
        for (var t, n = 0; n < u.length; n++)
            try {
                f.apply(null, u[n])
            } catch (i) {
                t || (t = i)
            }
        return u = [],
        t
    }
    function a(n, t, r) {
        var u, f;
        for (u in i)
            f = r ? t && u.indexOf(t) === 0 : !(u.indexOf(c) === 0) && !(t && u.indexOf(t) === 0) && !(n != null && n[u] != null),
            f && delete i[u]
    }
    function f(n) {
        for (var f, h, v = [], e = 1; e < arguments.length; e++)
            v[e - 1] = arguments[e];
        if (n) {
            n === "onPP" ? r = !0 : r || window.fb_is != null || (r = !0);
            var t = o(n), y = t.e = arguments, c = !1, i;
            for (f = 0; f < t.length; f++)
                if (t[f].alive)
                    if (t[f].beforeOnPP || r)
                        try {
                            s(t[f].func, y)
                        } catch (a) {
                            i || (i = a)
                        }
                    else
                        c || (u.push(arguments),
                        c = !0);
            if (n === "onPP" && (h = l(),
            h && !i && (i = h)),
            i)
                throw i;
        }
    }
    function e(n, t, i, u, f) {
        if (n) {
            var e = o(n);
            t && (t.d = u,
            e.push({
                func: t,
                alive: !0,
                beforeOnPP: f
            }),
            i && e.e && (f || r) && s(t, e.e))
        }
    }
    function h(n, t) {
        for (var r = i[n], u = 0; r && u < r.length; u++)
            if (r[u].func == t && r[u].alive) {
                r[u].alive = !1;
                break
            }
    }
    t.__esModule = !0;
    t.unbind = t.bind = t.fire = t.reset = void 0;
    var i = {}
      , r = !1
      , u = []
      , c = "ajax.";
    t.reset = a;
    t.fire = f;
    t.bind = e;
    t.unbind = h;
    window.sj_evt = {
        bind: e,
        unbind: h,
        fire: f
    };
    e("onPP", function() {
        window.fb_is && window.fb_is()
    }, !0)
});
define("event.native", ["require", "exports"], function(n, t) {
    function r(n, t, r, u) {
        var f = n === window || n === document || n === document.body;
        n && (f && t == "load" ? i.bind("onP1", r, !0) : f && t == "unload" ? i.bind("unload", r, !0) : n.addEventListener ? n.addEventListener(t, r, u) : n.attachEvent ? n.attachEvent("on" + t, r) : n["on" + t] = r)
    }
    function u(n, t, r, u) {
        var f = n === window || n === document || n === document.body;
        n && (f && t == "load" ? i.unbind("onP1", r) : f && t == "unload" ? i.unbind("unload", r) : n.removeEventListener ? n.removeEventListener(t, r, u) : n.detachEvent ? n.detachEvent("on" + t, r) : n["on" + t] = null)
    }
    t.__esModule = !0;
    t.unbind = t.bind = void 0;
    var i = n("event.custom");
    t.bind = r;
    t.unbind = u;
    window.sj_be = r;
    window.sj_ue = u
});
customEvents = require("event.custom");
customEvents.fire("onHTML");
define("dom", ["require", "exports"], function(n, t) {
    function f(n, t) {
        function s(n, t, r, f) {
            r && u.unbind(r, f, s);
            c.bind("onP1", function() {
                if (!n.l) {
                    n.l = 1;
                    var r = i("script");
                    r.setAttribute("data-rms", "1");
                    r.src = (t ? "/fd/sa/" + _G.Ver : "/sa/" + _G.AppVer) + "/" + n.n + ".js";
                    _d.body.appendChild(r)
                }
            }, !0, 5)
        }
        for (var f = arguments, e, o, r = 2, l = {
            n: n
        }; r < f.length; r += 2)
            e = f[r],
            o = f[r + 1],
            u.bind(e, o, h.wrap(s, l, t, e, o));
        r < 3 && s(l, t)
    }
    function e() {
        var n = _d.getElementById("ajaxStyles");
        return n || (n = _d.createElement("div"),
        n.id = "ajaxStyles",
        _d.body.insertBefore(n, _d.body.firstChild)),
        n
    }
    function l(n) {
        var t = i("script");
        t.type = "text/javascript";
        t.text = n;
        t.setAttribute("data-bing-script", "1");
        document.body.appendChild(t);
        r.setTimeout(function() {
            t.parentNode.removeChild(t)
        }, 0)
    }
    function a(n) {
        var t = i("script");
        t.type = "text/javascript";
        t.src = n;
        t.setAttribute("crossorigin", "anonymous");
        t.onload = r.setTimeout(function() {
            t.parentNode.removeChild(t)
        }, 0);
        document.body.appendChild(t)
    }
    function o(n) {
        var t = s("ajaxStyle");
        t || (t = i("style"),
        t.setAttribute("data-rms", "1"),
        t.id = "ajaxStyle",
        e().appendChild(t));
        t.textContent !== undefined ? t.textContent += n : t.styleSheet.cssText += n
    }
    function v(n, t) {
        for (var i = Element.prototype, r = i.matches || i.msMatchesSelector; n != null; ) {
            if (r.call(n, t))
                return n;
            n = n.parentElement
        }
        return null
    }
    function s(n) {
        return _d.getElementById(n)
    }
    function i(n, t, i) {
        var r = _d.createElement(n);
        return t && (r.id = t),
        i && (r.className = i),
        r
    }
    t.__esModule = !0;
    t.includeCss = t.includeScriptReference = t.includeScript = t.getCssHolder = t.loadJS = void 0;
    var r = n("env")
      , h = n("shared")
      , u = n("event.native")
      , c = n("event.custom");
    t.loadJS = f;
    t.getCssHolder = e;
    t.includeScript = l;
    t.includeScriptReference = a;
    t.includeCss = o;
    _w._ge = s;
    _w.sj_ce = i;
    _w.sj_jb = f;
    _w.sj_ic = o;
    _w.sj_fa = v
});
define("cookies", ["require", "exports"], function(n, t) {
    function a() {
        var n = location.protocol === "https:";
        return n ? ";secure" : ""
    }
    function v() {
        return typeof _G != "undefined" && _G.EF !== undefined && _G.EF.cookss !== undefined && _G.EF.cookss === 1
    }
    function f() {
        var n = location.hostname.match(/([^.]+\.[^.]*)$/);
        return n ? ";domain=" + n[0] : ""
    }
    function e(n, t, i, r, u) {
        var s = f(), h = r && r > 0 ? r * 6e4 : 63072e6, c = new Date((new Date).getTime() + Math.min(h, 63072e6)), e = "", o;
        v() && (o = a(),
        e = o + (u ? ";SameSite=" + u : ";SameSite=None"));
        document.cookie = n + s + (t ? ";expires=" + c.toGMTString() : "") + (i ? ";path=" + i : "") + e
    }
    function o(n, t, r, u, f) {
        if (!i) {
            var o = n + "=" + t;
            e(o, r, u, f)
        }
    }
    function s() {
        return !i
    }
    function r(n, t) {
        var r, u;
        return i ? null : (r = document.cookie.match(new RegExp("\\b" + n + "=[^;]+")),
        t && r) ? (u = r[0].match(new RegExp("\\b" + t + "=([^&]*)")),
        u ? u[1] : null) : r ? r[0] : null
    }
    function h(n, t, u, f, o, s) {
        var l, h, c, a;
        i || (h = t + "=" + u,
        c = r(n),
        c ? (a = r(n, t),
        l = a ? c.replace(t + "=" + a, h) : c + "&" + h) : l = n + "=" + h,
        e(l, f, o, s))
    }
    function c(n, t) {
        if (!i) {
            var r = n + "="
              , e = f();
            document.cookie = r + e + ";expires=" + u + (t ? ";path=" + t : "")
        }
    }
    var i, u, l;
    t.__esModule = !0;
    t.clear = t.set = t.get = t.areCookiesAccessible = t.setNoCrumbs = void 0;
    i = !1;
    u = new Date(0).toGMTString();
    try {
        l = document.cookie
    } catch (y) {
        i = !0
    }
    t.setNoCrumbs = o;
    t.areCookiesAccessible = s;
    t.get = r;
    t.set = h;
    t.clear = c;
    window.sj_cook = {
        get: r,
        set: h,
        setNoCrumbs: o,
        clear: c,
        areCookiesAccessible: s
    }
});
define("rmsajax", ["require", "exports"], function(n, t) {
    function l() {
        for (var i, n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        if (n.length != 0) {
            if (i = n[n.length - 1],
            n.length == 1)
                ct(i) && f.push(i);
            else if (n.length == 3) {
                var o = n[0]
                  , s = n[1]
                  , u = n[2];
                lt(o) && lt(s) && ct(u) && (at(r, o, u),
                at(e, s, u))
            }
            return window.rms
        }
    }
    function rt() {
        var i = arguments, t, n;
        for (o.push(i),
        t = 0; t < i.length; t++)
            n = i[t],
            vt(n, r, n.ct),
            n.d && ut.call(null, n);
        return window.rms
    }
    function ii() {
        var t = arguments, n;
        for (s.push(t),
        n = 0; n < t.length; n++)
            vt(t[n], e);
        return window.rms
    }
    function a() {
        var t, i, n;
        for (si(),
        t = !1,
        n = 0; n < o.length; n++)
            t = ut.apply(null, w.call(o[n], 0)) || t;
        for (i = 0; i < s.length; i++)
            t = ei.apply(null, w.call(s[i], 0)) || t;
        if (!t)
            for (n = 0; n < f.length; n++)
                f[n]()
    }
    function ut() {
        var n = arguments, t, i, f, e;
        if (n.length === 0)
            return !1;
        if (t = r[ot(n[0])],
        n.length > 1)
            for (i = hi.apply(null, n),
            f = 0; f < i.length; f++)
                e = i[f],
                e.run = u,
                ri(e, function(n) {
                    return function() {
                        ui(n, i)
                    }
                }(e));
        else
            t.run = u,
            st(t, function() {
                ft(t)
            });
        return !0
    }
    function ri(n, t) {
        var f, r, u;
        if (!n.state) {
            if (n.state = dt,
            pt(n)) {
                t();
                return
            }
            window.ActiveXObject !== undefined || ti.test(navigator.userAgent) ? (f = new Image,
            f.onload = t,
            f.onerror = t,
            f.src = n.url) : typeof XMLHttpRequest != "undefined" && XMLHttpRequest ? (r = new XMLHttpRequest,
            r.open("GET", n.url, !0),
            r.onreadystatechange = function() {
                r.readyState == 4 && (!it && (r.status < 200 || r.status >= 400) && (bt(n.url, "2", {
                    resourceUrl: n.url,
                    pageUrl: window.location.href,
                    status: r.status,
                    response: r.responseText
                }),
                it = !0),
                t())
            }
            ,
            r.send()) : (u = i.createElement("object"),
            u.setAttribute("width", "0"),
            u.setAttribute("height", "0"),
            u.setAttribute("tabindex", "-1"),
            u.setAttribute("aria-hidden", "true"),
            u.onload = t,
            u.onerror = t,
            u.setAttribute("data", n.url),
            i.body.appendChild(u))
        }
    }
    function ui(n, t) {
        n.run == u && (n.state = b,
        et(t))
    }
    function fi(n, t) {
        n.run == u && st(n, function(n) {
            return function() {
                ft(n, t)
            }
        }(n))
    }
    function ft(n, t) {
        n.run == u && (n.state = c,
        oi(n),
        t) && et(t)
    }
    function et(n) {
        for (var i, t = 0; t < n.length; t++) {
            i = n[t];
            switch (i.state) {
            case b:
                fi(i, n);
                return;
            case c:
                continue
            }
            return
        }
    }
    function ot(n) {
        for (var t in n)
            return t
    }
    function ei() {
        return !1
    }
    function oi(n) {
        for (var t = 0; t < n.callbacks.length; t++)
            n.callbacks[t].dec()
    }
    function st(n, t) {
        var r, s, f, h, l, e, u;
        if (n.state != k && n.state != c)
            if (n.state = k,
            r = i.createElement("SCRIPT"),
            s = n.ct !== undefined ? n.ct : "text/javascript",
            r.type = s,
            r.setAttribute("data-rms", "1"),
            n.key !== undefined && n.key === "rms:answers:AutoSuggest:AutoSug" && (r.onerror = function() {
                n.state = gt
            }
            ),
            r.onreadystatechange = r.onload = function() {
                var i = r.readyState;
                if (!i || /loaded|complete/.test(i))
                    try {
                        ht(t)
                    } catch (u) {
                        throw new TypeError("processCallback threw error for script:" + n.key + " script Url:" + n.url + " error stack:" + (u ? u.stack : ""));
                    }
            }
            ,
            pt(n)) {
                if (f = _w.jsDefer,
                f)
                    f.length > n.pos && (r.text = f[n.pos],
                    i.body.appendChild(r));
                else if (h = n.app ? g : d,
                (l = i.getElementById(h)) && (e = l.childNodes) && e[n.pos] && (u = e[n.pos].innerHTML,
                u && (u === null || u === void 0 ? void 0 : u.length))) {
                    var a = 4
                      , v = 3
                      , o = u.length
                      , y = u.substring(0, a)
                      , p = u.substring(o - v, o);
                    y == "<!--" && p == "-->" && (u = u.substring(a, o - v));
                    r.text = typeof DefaultTrustedTypesPolicy != "undefined" && DefaultTrustedTypesPolicy.getOpaqueScript ? DefaultTrustedTypesPolicy.getOpaqueScript(u) : u;
                    i.body.appendChild(r)
                }
                ht(t)
            } else
                r.src = n.url,
                (!wt() || wt() && ci(r.src)) && r.setAttribute("crossorigin", "anonymous"),
                tt || (bt(r.src, "1", {
                    resourceUrl: r.src
                }),
                tt = !0),
                i.body.appendChild(r)
    }
    function ht(n) {
        n.done || (n.done = !0,
        n())
    }
    function ct(n) {
        return nt.call(n) == "[object Function]"
    }
    function lt(n) {
        return nt.call(n) == "[object Array]"
    }
    function at(n, t, i) {
        for (var u, f = new v(i), r = 0; r < t.length; r++)
            u = n[t[r]],
            u || (u = yt(n, t[r])),
            y(u, f)
    }
    function si() {
        for (var t, i, u, n = 0; n < f.length; n++) {
            t = new v(f[n]);
            for (i in r)
                y(r[i], t);
            for (u in e)
                y(e[u], t)
        }
    }
    function y(n, t) {
        n.callbacks.push(t);
        t.inc()
    }
    function vt(n, t, i) {
        for (var r in n)
            if (typeof n[r] != undefined)
                return yt(t, r, n[r], i)
    }
    function yt(n, t, i, r) {
        return n[t] || (n[t] = {
            callbacks: [],
            onPrefetch: []
        },
        n[t].key = t),
        t.indexOf(ni) == 0 && (n[t].app = !0),
        isNaN(i) ? n[t].url = i : n[t].pos = i,
        r && (n[t].ct = r),
        n[t]
    }
    function hi() {
        for (var i, t = [], n = 0; n < arguments.length; n++)
            i = ot(arguments[n]),
            t.push(r[i]);
        return t
    }
    function pt(n) {
        return !n.url
    }
    function ci(n) {
        var t = "https://" + i.location.host
          , r = "http://" + i.location.host;
        return !(n.indexOf(t) === 0 || n.indexOf(r) === 0)
    }
    function wt() {
        return _G !== undefined && _G.EF !== undefined && _G.EF.crossdomainfix === 1
    }
    function li(n) {
        return _G !== undefined && _G.EF !== undefined && _G.EF.crossoriginlogging === 1 && n.indexOf("/rp/") >= 0
    }
    function ai(n) {
        if (h && h.length > 0)
            for (var t = 0; t < h.length; t++)
                if (n.indexOf(h[t]) === 0)
                    return !0;
        return !1
    }
    function bt(n, t, i) {
        if (typeof sj_log2 == "function" && li(n)) {
            var r = ai(n) ? "rms_co" : "rms_noco";
            sj_log2("Request", r, t, "rmsajax_xhrprefetch", null, null, i)
        }
    }
    function vi(n) {
        var t, i;
        r = {};
        e = {};
        f = [];
        o = [];
        s = [];
        u += 1;
        t = document.getElementById(d);
        t && t.parentNode.removeChild(t);
        i = document.getElementById(g);
        i && i.parentNode.removeChild(i);
        n || kt()
    }
    function kt() {
        p.bind("onP1Lazy", function() {
            l(function() {
                p.fire("onP1")
            });
            a()
        }, !0)
    }
    var v;
    t.__esModule = !0;
    t.reset = t.start = t.css = t.js = t.onload = void 0;
    var p = n("event.custom")
      , w = [].slice
      , dt = 1
      , b = 2
      , k = 3
      , c = 4
      , gt = 5
      , u = 0
      , ni = "A:"
      , d = "fRmsDefer"
      , g = "aRmsDefer"
      , r = {}
      , e = {}
      , f = []
      , o = []
      , s = []
      , nt = Object.prototype.toString
      , i = document
      , ti = /edge/i
      , tt = !1
      , it = !1
      , h = ["https://raka.", "https://rafd.", "https://r.", "https://rcf."];
    t.onload = l;
    t.js = rt;
    t.css = ii;
    t.start = a;
    v = function(n) {
        var t = 0
          , i = !1;
        this.inc = function() {
            i || t++
        }
        ;
        this.dec = function() {
            i || (t--,
            t == 0 && (i = !0,
            n()))
        }
    }
    ;
    t.reset = vi;
    kt();
    window.rms = {
        onload: l,
        js: rt,
        start: a
    }
});
_w.LogUploadCapFeatureEnabled = !1;
_w.InstLogQueueKeyFetcher = {
    Get: function(n) {
        var t = "eventLogQueue";
        return n.indexOf("proactive") == 1 || n.indexOf("search") == 1 || n.indexOf("zinc") == 1 ? t + "_Online" : t + "_Offline"
    },
    GetSharedLocation: function() {
        return "eventLogQueue_Shared"
    },
    CanUploadSharedMessages: function(n) {
        return _w.useSharedLocalStorage && n.indexOf("AS/API") === 1 ? !0 : !1
    }
};
__spreadArray = this && this.__spreadArray || function(n, t, i) {
    if (i || arguments.length === 2)
        for (var r = 0, f = t.length, u; r < f; r++)
            !u && r in t || (u || (u = Array.prototype.slice.call(t, 0, r)),
            u[r] = t[r]);
    return n.concat(u || Array.prototype.slice.call(t))
}
;
define("clientinst_xls", ["require", "exports"], function(n, t) {
    function si() {
        function n(n, t) {
            typeof i[n] == "undefined" && (i[n] = t)
        }
        _w.ClientInstConfig || (_w.ClientInstConfig = {});
        i = ClientInstConfig;
        n("flushInterval", 5e3);
        n("retryInterval", 1e3);
        n("maxStorageUse", 5e5);
        n("maxBatchSize", 1e5);
        n("queueDumpInterval", 500);
        n("waitForPageInfo", !1);
        n("pageInfoTimeout", 5e3);
        n("logUploadCapSizeInChar", 15728640 * .5);
        n("logUploadCapIntervalInDays", 30);
        n("isInstrumentationEnabled", !0);
        n("maxDirectErrors", 3);
        n("enableBatSizeError", !1)
    }
    function wt() {
        rt = 0;
        ut = _G.ST ? _G.ST.getTime() : 0
    }
    function u(n, t, r, u) {
        var f, h, e, o;
        if (i.isInstrumentationEnabled)
            if (f = {
                errorType: n,
                failCount: t
            },
            k(f),
            u) {
                pt++;
                pt > i.maxDirectErrors && (f.errorType = "Overloaded",
                i.isInstrumentationEnabled = !1);
                h = {
                    impressionGuid: r,
                    previousImpressionGuid: null,
                    timestamp: (new Date).getTime(),
                    type: s.EVENT,
                    data: {
                        eventType: it,
                        eventData: f
                    }
                };
                e = et([h], []);
                try {
                    lt(e) || (o = sj_gx(),
                    o.open("POST", _G.XLS, !0),
                    o.send(e))
                } catch (c) {
                    throw c;
                }
            } else
                ct(it, f, null, null, null, r, null, null)
    }
    function hi() {
        function t() {
            o || (o = function() {}
            );
            bt();
            u("PageInfoTimedOut", 0, _G.IG)
        }
        si();
        wt();
        typeof h != "undefined" && h.bind && h.bind("ajax.unload", wt);
        try {
            f = _w.localStorage;
            r.initialize()
        } catch (e) {}
        var n = null;
        i.waitForPageInfo && (n = sb_st(t, i.pageInfoTimeout));
        sj_evt.bind("ClientInst.PageInstInfo", function(t) {
            n && (sb_ct(n),
            n = null);
            o = t[1];
            o && bt()
        })
    }
    function bt() {
        for (var n = 0, t, i; ft.length > 0; ) {
            try {
                i = ft.shift();
                t = JSON.parse(i)
            } catch (r) {
                n++;
                continue
            }
            o && o(t.data);
            w(t)
        }
        n > 0 && u("InvalidIncompleteImpressions", n, _G.IG)
    }
    function w(n) {
        r.append(n);
        l()
    }
    function a(n) {
        return JSON.stringify(n).replace(/]]>/g, "]]]\]><![CDATA[>")
    }
    function ci(n, t, i) {
        var e, r, u, f;
        t.push("<E>", "<T>Event.", n.data.eventType, "<\/T>", "<IG>", n.impressionGuid, "<\/IG>");
        n.previousImpressionGuid && t.push("<PrevIG>", n.previousImpressionGuid, "<\/PrevIG>");
        n.dominantImpressionGuid && n.previousImpressionGuid && t.push("<DominantIG>", n.dominantImpressionGuid, "<\/DominantIG>");
        e = n.data.dataSources;
        e && t.push("<DS><![CDATA[", a(e), "]\]><\/DS>");
        r = n.data.pageLayout;
        r && y(r) && (t.push("<Page>"),
        u = !1,
        "Name"in r && (t.push("<Name>", r.Name, "<\/Name>"),
        u = !0),
        "Number"in r && (t.push("<Num>", r.Number, "<\/Num>"),
        u = !0),
        "IID"in r && (t.push("<IID>", r.IID, "<\/IID>"),
        u = !0),
        "SFX"in r && (t.push("<SFX>", r.SFX, "<\/SFX>"),
        u = !0),
        u && (r = r.L),
        t.push("<L><![CDATA[", a(r), "]\]><\/L>", "<\/Page>"));
        f = n.data.eventData;
        f || (f = n.data.eventData = {});
        f.UTS = i;
        t.push("<D><![CDATA[", a(f), "]\]><\/D>", "<TS>", n.timestamp, "<\/TS>", "<\/E>")
    }
    function y(n) {
        var t = !1, i;
        try {
            if (n instanceof Array)
                t = n.every(y);
            else {
                if (i = n.L,
                n.Name || n.Number || n.InsertId || n.SFX)
                    return y(i);
                t = !!n.T;
                t && i && (t = y(i))
            }
        } catch (r) {
            return SharedLogHelper.LogWarning("PageLayoutValidationException", null, r),
            !1
        }
        return t || SharedLogHelper.LogWarning("PageLayoutValidationException", JSON ? JSON.stringify(n) : n, null),
        t
    }
    function b(n, t, i) {
        n.push('<requestInfo key="', t, '" value="', i, '"/>')
    }
    function li(n, t, i) {
        function f(n) {
            return n ? n.replace(/&/g, "&amp;").replace(/"/g, "&quot;") : ""
        }
        var r = n.data, e, u, c, o, s, h;
        t.push("<Group>", "<M>", "<IG>", n.impressionGuid, "<\/IG>", "<DS><![CDATA[", a(r.dataSources), "]\]><\/DS>");
        e = r.enrichedClientInfo;
        e || (e = {});
        e.ImpressionUrl = r.impressionUrl;
        _G.AppVer && (e.ResourcesVersion = _G.AppVer);
        u = n.data.eventData;
        u || (u = n.data.eventData = {});
        u.EnrichedClientInfo = e;
        u.TS = r.clientTimestamp;
        u.UTS = i;
        c = r.uxClassification;
        c && (u.UxClassification = c);
        _w.sj_cook && sj_cook.parse && (u.Cookies = sj_cook.parse());
        t.push("<D><![CDATA[", a(u), "]\]><\/D>");
        t.push("<Page>", "<Name>", r.pageName, "<\/Name>");
        o = r.layoutNodes;
        o && y(o) && t.push("<L><![CDATA[", a(o), "]\]><\/L>");
        t.push("<\/Page>", "<TS>", n.timestamp, "<\/TS>", "<Ovr>");
        b(t, "RawQuery", f(r.rawQuery));
        b(t, "IsQuery", f(r.isQuery.toString()));
        b(t, "Form", f(r.form));
        s = r.userInfoOverrides;
        for (h in s)
            s.hasOwnProperty(h) && b(t, f(h), f(s[h]));
        t.push('<userInfo key="AppName" value="', f(r.appName), '"/>', "<\/Ovr>", "<\/M>", "<\/Group>")
    }
    function k(n) {
        var t = window.location.href, i, r, u;
        return v && t.indexOf(v) === 0 || (i = t.indexOf("?"),
        i < 0 && (i = t.indexOf("#")),
        v = i < 0 ? t : t.substring(0, i),
        r = _w.ThresholdUtilities,
        r && (u = r.getUrlParameter(t, "FORM"),
        u && (v += "?FORM=" + u))),
        n.CurUrl = v,
        n.Pivot = _G.PN,
        typeof ThresholdUtilities != "undefined" && _w.SearchAppWrapper && _w.SearchAppWrapper.CortanaApp && ThresholdUtilities.getCortanaHeaders(function(t) {
            if (t) {
                var i;
                (i = t["X-BM-ClientFeatures"]) && (n.CF = i);
                (i = t["X-BM-FlightedFeatures"]) && (n.FF = i)
            }
        }),
        n
    }
    function et(n, t, i) {
        var f, s, h, u, c;
        i === void 0 && (i = !1);
        var r = ["<ClientInstRequest>"]
          , e = (new Date).getTime()
          , o = _G.CID || sj_cook.get(vt, vt);
        if (o && r.push("<CID>", o, "<\/CID>"),
        n.length > 0) {
            for (i && (f = n[0],
            f.data && f.data.pageLayout && f.data.pageLayout.IID && f.data.pageLayout.SFX && (s = f.data.pageLayout.IID + "_" + f.data.pageLayout.SFX,
            r.push("<AppNS>", s, "<\/AppNS>"))),
            r.push("<Events>"),
            u = 0; u < n.length; u++)
                h = n[u],
                ci(h, r, e);
            r.push("<\/Events>")
        }
        if (t.length > 0)
            for (u = 0; u < t.length; u++)
                c = t[u],
                li(c, r, e);
        return r.push("<\/ClientInstRequest>"),
        r.join("")
    }
    function l(n, t) {
        if (n === void 0 && (n = !1),
        t === void 0 && (t = !0),
        i.isInstrumentationEnabled) {
            var r = n ? c.retryQueue : c.mainQueue;
            !r.flushTimeoutHandle && typeof nt != "undefined" && nt.setTimeout && (r.flushTimeoutHandle = nt.setTimeout(function() {
                return kt(n, r, !1, t)
            }, r.getInterval()))
        }
    }
    function kt(n, t, f, o, s) {
        var it, v, h, p, g, w, b, nt, k, y, d, rt, a, tt;
        if ((o === void 0 && (o = !0),
        i.isInstrumentationEnabled) && (sb_ct(t.flushTimeoutHandle),
        t.flushTimeoutHandle = null,
        !n || !c.mainQueue.inProgressUpload)) {
            if (!n && c.retryQueue.inProgressUpload && c.retryQueue.inProgressUpload.abort(),
            t.inProgressUpload)
                if (it = (new Date).getTime() - t.requestSentTimestamp,
                f || it > i.flushInterval)
                    t.inProgressUpload.abort(),
                    f ? u("SendAbortedForceFlush", 1, _G.IG) : u("SendTimedOut", 1, _G.IG);
                else
                    return;
            if (v = r.getBatch(n),
            v.length != 0) {
                for (h = {},
                p = 0; p < v.events.length; p++)
                    g = v.events[p],
                    w = g.flights,
                    h[w] || (h[w] = {
                        events: [],
                        mpis: []
                    }),
                    h[w].events.push(g.log);
                for (b = 0; b < v.masterPageImpressions.length; b++)
                    nt = v.masterPageImpressions[b],
                    k = nt.flights,
                    h[k] || (h[k] = {
                        events: [],
                        mpis: []
                    }),
                    h[k].mpis.push(nt.log);
                for (y in h) {
                    if (d = et(h[y].events, h[y].mpis),
                    rt = s && s.useSendBeacon || !1,
                    (rt || ii()) && ri(_G.XLS, d)) {
                        r.clearSentItems(n) && !n && l(!1, s);
                        l(!0, s);
                        continue
                    }
                    a = sj_gx();
                    a.open("POST", _G.XLS, o);
                    tt = sj_df(ai, a, t, n);
                    o && (i.flushInterval >= 1e3 && (a.timeout = i.flushInterval),
                    a.onload = tt);
                    a.setRequestHeader("Content-type", "text/xml");
                    y !== "" && (a.setRequestHeader("X-MSEdge-ExternalExpType", "JointCoord"),
                    a.setRequestHeader("X-MSEdge-ExternalExp", y));
                    t.inProgressUpload = a;
                    t.requestSentTimestamp = (new Date).getTime();
                    a.send(d);
                    o || tt(null)
                }
            }
        }
    }
    function ai(n, t, i, u) {
        if (t.readyState === 4) {
            i.inProgressUpload = null;
            var f = Math.floor(t.status / 100);
            f === 2 ? (r.clearSentItems(u) && !u && l(!1),
            l(!0)) : f === 4 ? (r.markFailedItems(!0, u),
            l(!0)) : r.markFailedItems(!1, u);
            u && r.recordRetryAttempt()
        }
    }
    function ot(n, t, i) {
        n === void 0 && (n = !1);
        t === void 0 && (t = !0);
        kt(!1, c.mainQueue, n, t, i)
    }
    function st(n, t, i, r, u, f, e, o, h) {
        var c = {}, l, a;
        if (k(c),
        t)
            if (typeof t == "string")
                c.Text = t;
            else
                for (l in t)
                    t.hasOwnProperty(l) && (c[l] = t[l]);
        return i && (c.T = "CI." + i),
        a = h || (new Date).getTime(),
        c.TS = a,
        c.RTS = a - ut,
        c.SEQ = rt++,
        {
            type: s.EVENT,
            impressionGuid: f != null ? f : _G.IG,
            previousImpressionGuid: e,
            timestamp: a,
            data: {
                eventType: n,
                eventData: c,
                dataSources: r,
                pageLayout: u
            },
            dominantImpressionGuid: o
        }
    }
    function ht(n, t) {
        var r, i;
        t === void 0 && (t = !1);
        r = et(n, [], t);
        lt(r) || (i = sj_gx(),
        i.open("POST", _G.XLS),
        i.setRequestHeader("Content-type", "text/xml"),
        i.send(r))
    }
    function ct(n, t, r, u, f, e, o, s, h) {
        var c, l, a;
        if (typeof EventsToDuplicate != "undefined" && EventsToDuplicate && n === "Click" && EventsToDuplicate.indexOf("duplicateClickOnLs") >= 0 && (c = _G.gpUrl + "IG=" + _G.IG + "&ID=" + t.AppNS + "," + t.K,
        lt("", c) || (_G.GPImg = new Image,
        _G.GPImg.src = c),
        n = "XlsDelayedClick"),
        !_G.XLS)
            throw new Error("_G.XLS is necessary for clientinst_xls, but it is not defined");
        if (i.isInstrumentationEnabled) {
            if (l = st(n, t, r, u, f, e, o, s, h),
            n === "PartialDynamicContent.FrontDoor") {
                ht([l], !0);
                return
            }
            typeof EventsToDuplicate != "undefined" && EventsToDuplicate && (EventsToDuplicate.indexOf("ALL") >= 0 || EventsToDuplicate.indexOf(n) >= 0) && (a = st("Immediate" + n, t, r, u, f, e, o, s, h),
            ht([a]));
            w(l)
        }
    }
    function dt(n) {
        var t, r, u;
        i.isInstrumentationEnabled && (o && o(n),
        n.clientTimestamp || (n.clientTimestamp = (new Date).getTime()),
        t = n.eventData,
        t || (t = n.eventData = {}),
        k(t),
        r = {
            type: s.MASTER_PAGE_IMPRESSION,
            impressionGuid: n.impressionGuid ? n.impressionGuid : _G.IG,
            previousImpressionGuid: null,
            timestamp: n.clientTimestamp,
            data: n
        },
        typeof EventsToDuplicate != "undefined" && EventsToDuplicate && (EventsToDuplicate.indexOf("ALL") >= 0 || EventsToDuplicate.indexOf("masterPageImpression") >= 0) && (u = st("ImmediateMaster", t, n.impressionUrl, n.dataSources, n.layoutNodes, n.impressionGuid, null, null),
        ht([u])),
        o || !i.waitForPageInfo ? w(r) : ft.push(JSON.stringify(r)))
    }
    function ii() {
        return _G !== undefined && _G.EF !== undefined && _G.EF.logsb !== undefined && _G.EF.logsb === 1
    }
    function lt(n, t) {
        return (t === void 0 && (t = _G.XLS),
        !ii()) ? !1 : ri(t, n)
    }
    function ri(n, t) {
        var i = "sendBeacon"
          , r = !1;
        if (navigator && navigator[i])
            try {
                r = navigator[i](n, t)
            } catch (u) {}
        return r
    }
    function ui(n, t) {
        n === void 0 && (n = !0);
        r.dumpToStorage();
        ot(!0, n, t)
    }
    function g() {
        r.dumpToStorage();
        ot(!1)
    }
    function fi() {
        r.dumpToStorage(!0)
    }
    function at() {
        r.dumpToStorage()
    }
    function ei() {
        p = null;
        _CachedFlights = undefined
    }
    var r, c, gt, ni, ti, d;
    t.__esModule = !0;
    t.ResetState = t.SaveLogsToLocalStorage = t.SaveLogsToSharedStorage = t.FlushMainQueueDontForce = t.ForceFlush = t.Log2 = t.LogInstrumented = t.Log = t.LogMasterPageImpression = t.LogEvent = void 0;
    var nt = n("env"), tt = n("event.native"), h = n("event.custom"), e = "Shared", s;
    (function(n) {
        n[n.EVENT = 0] = "EVENT";
        n[n.MASTER_PAGE_IMPRESSION = 1] = "MASTER_PAGE_IMPRESSION"
    }
    )(s || (s = {}));
    var vt = "MUID", p = null, it = "CIQueueError", i, oi = 864e5, rt, ut, f, ft = [], o, v, yt, pt = 0;
    (function(n) {
        function k() {
            return c && i.isInstrumentationEnabled
        }
        function d(n) {
            var i, t;
            if (n === void 0 && (n = !1),
            k()) {
                i = lt(n);
                try {
                    t = n ? v : h;
                    f[t] = i;
                    f[t + "_logUploadIntervalStartDate"] = o;
                    f[t + "_uploadedLogSizeInInterval"] = r
                } catch (u) {
                    if (u.name.toLowerCase().indexOf("quota") >= 0)
                        c = !1;
                    else
                        throw u;
                }
            }
        }
        function y() {
            k() && (a && sb_ct(a),
            a = sb_st(d, i.queueDumpInterval))
        }
        function tt(n, t) {
            var i = JSON.stringify(n)
              , r = i.length + 3;
            return n.size = r,
            t ? i.replace('"size":0', '"size":' + r) : i
        }
        function rt(n) {
            return p === null && typeof _CachedFlights != "undefined" && _CachedFlights.sort && (p = _CachedFlights.sort().join(",")),
            {
                log: n,
                lastSendErrorTimeStamp: 0,
                inProgress: !1,
                size: 0,
                flights: p
            }
        }
        function ut() {
            var n, e, r;
            if (f) {
                if (vt(),
                n = f[h],
                t = [],
                typeof n == "string" || n && n.length !== 0)
                    try {
                        if (t = JSON.parse(n),
                        t.some(function(n) {
                            return !n.log
                        }))
                            u("PrimaryQueueRestoreInvalidItems", t.length, _G.IG),
                            t = [];
                        else if (e = t.length,
                        e > 0) {
                            for (r = 0; r < e; r++)
                                t[r].inProgress = !1;
                            i.wsbOptimizeFlush ? ot(!0) : l()
                        }
                    } catch (o) {
                        u("PrimaryQueueRestoreFailed", 0, _G.IG)
                    }
                f[h] = "[]";
                c = !0
            }
        }
        function ft(n) {
            var a = [], y = [], o = n ? e[0] : t, c, h, p, w, l, r, b;
            if (nt) {
                if (c = f[v],
                typeof c == "string" && c.length !== 0)
                    try {
                        h = JSON.parse(c);
                        h.some(function(n) {
                            return !n.log
                        }) ? u("SharedQueueRestoreInvalidItems", h.length, _G.IG) : o ? Array.prototype.push.apply(o, h) : o = h
                    } catch (k) {
                        u("SharedQueueRestoreFailed", 0, _G.IG)
                    }
                f[v] = "[]"
            }
            if (o)
                for (p = 0,
                w = o.length,
                l = 0; l < w; l++)
                    if (r = o[l],
                    n || !r.lastSendErrorTimeStamp)
                        if (ClientInstConfig.enableBatSizeError && r.size > i.maxBatchSize && u("ElemBatchSizeLimitReached", r.size, _G.IG),
                        p += r.size,
                        p <= i.maxBatchSize)
                            r.inProgress = !0,
                            b = r.log,
                            b.type == s.MASTER_PAGE_IMPRESSION ? y.push(r) : a.push(r);
                        else
                            break;
            return {
                events: a,
                masterPageImpressions: y,
                length: a.length + y.length,
                isRetryBatch: n
            }
        }
        function et(n) {
            return t = t.filter(function(t) {
                return !t.inProgress && (!n || !!t.lastSendErrorTimeStamp)
            }),
            y(),
            t.length > 0
        }
        function st(n) {
            return n.log.type === s.EVENT && n.log.data && n.log.data.eventType === it
        }
        function ht(n, i) {
            for (var f = [], h = i ? e[0] : t, o = 0, r, s, c; o < h.length; )
                r = h[o],
                r.inProgress ? n ? (h.splice(o, 1),
                st(r) || (r.lastSendErrorTimeStamp = (new Date).getTime(),
                f.push(r))) : (r.inProgress = !1,
                o++) : o++;
            s = f.length;
            s == 1 ? u("InvalidLogMessage", 1, f[0].log.impressionGuid) : s > 0 && (c = s / 2,
            e.push(f.slice(0, c)),
            e.push(f.slice(c)));
            y()
        }
        function ct() {
            var n, t, i;
            if (e.length > 0) {
                for (n = e[0],
                t = 0; t < n.length; )
                    i = n[t],
                    i.inProgress ? n.splice(t, 1) : t++;
                n.length == 0 && e.shift()
            }
        }
        function lt(n) {
            var c = JSON.stringify(t), e = c.length - i.maxStorageUse, o = t.length, f, r, s, h;
            if (e > 0)
                for (f = 0,
                r = 0; r < o; r++)
                    if (s = t[r].size,
                    f += s + 1,
                    f >= e) {
                        t.splice(0, r + 1);
                        u("QueueOverflow", r + 1, _G.IG, !0);
                        break
                    }
            return h = JSON.stringify(t),
            n && t.splice(0, o),
            h
        }
        function at(n) {
            var r = rt(n);
            tt(r, !1);
            ClientInstConfig.enableBatSizeError && r.size > i.maxBatchSize && u("EnvelopeBatchSizeLimitReached", r.size, _G.IG);
            i.wsbOptimizeFlush && r.size > i.maxBatchSize || yt(r.size) && t.push(r);
            y()
        }
        function vt() {
            var t = h + "_logUploadIntervalStartDate", u = h + "_uploadedLogSizeInInterval", n;
            o = f[t];
            r = f[u];
            n = sb_gt();
            o == undefined || r == undefined ? w(n) : g(o, n) >= i.logUploadCapIntervalInDays && w(n)
        }
        function w(n) {
            o = n;
            r = 0
        }
        function g(n, t) {
            var i = t - n;
            return i / oi
        }
        function yt(n) {
            var t, f;
            return i.isInstrumentationEnabled ? LogUploadCapFeatureEnabled ? (t = sb_gt(),
            g(o, t) >= i.logUploadCapIntervalInDays && w(t),
            r >= i.logUploadCapSizeInChar) ? !1 : (f = r + n,
            f >= i.logUploadCapSizeInChar) ? (u("LogUploadSizeLimitReached", 1, _G.IG, !0),
            r = i.logUploadCapSizeInChar,
            !1) : (r = f,
            !0) : !0 : !1
        }
        var t = [], o, r, c = !1, a = null, e = [], b = _w.location.pathname, h = InstLogQueueKeyFetcher.Get(b), v = InstLogQueueKeyFetcher.GetSharedLocation(), nt = InstLogQueueKeyFetcher.CanUploadSharedMessages(b);
        n.dumpToStorage = d;
        n.initialize = ut;
        n.getBatch = ft;
        n.clearSentItems = et;
        n.markFailedItems = ht;
        n.recordRetryAttempt = ct;
        n.append = at
    }
    )(r || (r = {}));
    c = {
        mainQueue: {
            getInterval: function() {
                return i.flushInterval
            }
        },
        retryQueue: {
            getInterval: function() {
                return i.retryInterval
            }
        }
    };
    t.LogEvent = ct;
    t.LogMasterPageImpression = dt;
    gt = function(n, t, r, u) {
        for (var e = [], f = 4; f < arguments.length; f++)
            e[f - 4] = arguments[f];
        i.isInstrumentationEnabled && (yt || (d("Init", "CI", "Base"),
        yt = !0),
        d(n, t, r, u, e))
    }
    ;
    t.Log = gt;
    ni = function(n, i, r, u, f, e, o) {
        t.Log2(n, i !== null && i !== void 0 ? i : r, null, null, u, f, o)
    }
    ;
    t.LogInstrumented = ni;
    ti = function(n, t, i, r, u, f, e) {
        var o = Object.keys(e).reduce(function(n, t) {
            return __spreadArray(__spreadArray([], n, !0), [t, e[t]], !1)
        }, []);
        i && o.push("service", i);
        r && o.push("scenario", r);
        u && o.push("appNS", u);
        f && o.push("kValue", f);
        d(n, null, t, !1, o)
    }
    ;
    t.Log2 = ti;
    d = function(n, t, r, u, f) {
        var v, e, c, l, o, h, a;
        if (i.isInstrumentationEnabled) {
            if (v = _G.IG,
            e = {},
            f && f.length > 0 && f.length % 2 == 0)
                for (c = 0; c < f.length; c += 2)
                    (l = f[c],
                    l) && (o = l.toLowerCase(),
                    h = f[c + 1],
                    o === "impressionguid" ? v = h : o === "service" ? e.Service = h : o === "scenario" ? e.Scenario = h : o === "appns" ? e.AppNS = h : o === "k" || o === "kvalue" ? e.K = h : o === "pos" ? e.Pos = h : e[l] = h);
            a = (new Date).getTime();
            e.T = "CI.".concat(n);
            e.TS = a;
            e.RTS = a - ut;
            e.SEQ = rt++;
            e.Name = r !== null && r !== void 0 ? r : "";
            e.FID = typeof t != "number" ? t !== null && t !== void 0 ? t : "" : "";
            e.hasOwnProperty("K") || typeof t != "number" || (e.K = t);
            k(e);
            w({
                type: s.EVENT,
                impressionGuid: v,
                previousImpressionGuid: null,
                timestamp: a,
                data: {
                    eventType: "ClientInst",
                    eventData: e
                }
            })
        }
    }
    ;
    t.ForceFlush = ui;
    hi();
    t.FlushMainQueueDontForce = g;
    t.SaveLogsToSharedStorage = fi;
    t.SaveLogsToLocalStorage = at;
    t.ResetState = ei;
    typeof h != "undefined" && h.bind && (h.bind("onP1", g, !0),
    h.bind("ajax.postload", g, !0));
    typeof tt != "undefined" && tt.bind && tt.bind(_w, "beforeunload", at, !1);
    _w.Log = {
        Log: t.Log
    };
    _w.Log2 = {
        LogEvent: ct,
        LogMasterPageImpression: dt,
        ForceFlush: ui,
        FlushMainQueueDontForce: g,
        SaveLogsToSharedStorage: fi,
        ResetState: ei,
        SaveLogsToLocalStorage: at
    };
    _w.Shared2 = _w.Shared2 || {};
    _w.Shared2.Log = {
        Log: t.Log,
        LogInstrumented: t.LogInstrumented
    };
    _w.sj_log2 = t.Log2
});
fallbackReplay = require("fallback");
fallbackReplay.replay(),
function(n) {
    function i(n) {
        for (var r = [], i = 1; i < arguments.length; i++)
            r[i - 1] = arguments[i];
        return t.apply(null, [null, n].concat(r))
    }
    function t(n, t) {
        for (var i = [], r = 2; r < arguments.length; r++)
            i[r - 2] = arguments[r];
        return function() {
            for (var f, r = [], u = 0; u < arguments.length; u++)
                r[u] = arguments[u];
            if (r && r.length !== 0)
                for (f in i)
                    i.hasOwnProperty(f) && r.push(i[f]);
            else
                r = i;
            return t.apply(n, r)
        }
    }
    function r() {
        for (var n, r, t = [], i = 0; i < arguments.length; i++)
            t[i] = arguments[i];
        for (n = t[0],
        r = 1; r < t.length; r++)
            if (n)
                n = n[t[r]];
            else
                return null;
        return n
    }
    n.deferFunction = i;
    n.deferMethod = t;
    n.getProperty = r;
    window.sj_df = i;
    window.sj_dm = t;
    window.sj_gp = r
}(CoreUtilities || (CoreUtilities = {}));
var sj_anim = function(n) {
    var s = 25, t = this, c, u, h, f, e, o, l, i, r;
    t.init = function(n, s, a, v, y) {
        if (c = n,
        e = s,
        o = a,
        l = v,
        r = y,
        v == 0) {
            f = h;
            r && r();
            return
        }
        i || (i = e);
        u || t.start()
    }
    ;
    t.start = function() {
        h = sb_gt();
        f = Math.abs(o - i) / l * s;
        u = setInterval(t.next, s)
    }
    ;
    t.stop = function() {
        clearInterval(u);
        u = 0
    }
    ;
    t.next = function() {
        var u = sb_gt() - h
          , s = u >= f;
        i = e + (o - e) * u / f;
        s && (t.stop(),
        i = o);
        n(c, i);
        s && r && r()
    }
    ;
    t.getInterval = function() {
        return s
    }
}
  , sj_fader = function() {
    return new sj_anim(function(n, t) {
        sj_so(n, t)
    }
    )
}
  , customEvents = require("event.custom");
customEvents.bind("onPP", function() {
    customEvents.fire("onP1Lazy")
}, !0),
function(n) {
    function b() {
        return st++
    }
    function wt(n, i, r, f) {
        var h = g(n, i, !0, f, !1), v = [], c, l, y, s, a, w, o, nt;
        if (h && h.length > 0)
            for (c = 0; c < h.length; c++)
                l = h[c],
                v.push({
                    T: "L.MI",
                    Action: "Update",
                    AppNS: l.AppNS,
                    K: l.K,
                    L: l.L
                });
        if (y = _G.IG,
        r && (y = r),
        s = [],
        a = t[y],
        a)
            for (w in a)
                if (o = a[w].tree,
                o.IsInstrumented())
                    d(o, s);
                else {
                    var b = o.GetValue()
                      , p = o.GetChildren()
                      , k = [];
                    if (p.length > 0) {
                        for (nt in p)
                            k.push(e(p[nt]));
                        b.DS = k
                    }
                    s.push(b);
                    u(o)
                }
        return v.length > 0 || s.length > 0 ? (Log2.LogEvent("ClientInst", null, null, s, v, null, null, null),
        !0) : !1
    }
    function r(n, i, u, f, e, o, s) {
        var a = _G.IG, c, y, l, h, v;
        if (o && (a = o),
        t[a] || (t[a] = []),
        c = {
            AppNS: n,
            K: b(),
            T: "D.Item"
        },
        Object.defineProperty(c, "RefCount", {
            writable: !0,
            value: 1
        }),
        i && (c.Url = i,
        c.T = "D.Url"),
        u && (c.N = u),
        s && (c.T = s),
        e ? y = gt(c, e, a) : t[a].push(new ot(new ft(c))),
        f)
            for (l in f)
                if (f.hasOwnProperty(l))
                    if (h = f[l],
                    h === null || h === undefined || h.length === 0 || ct.test(h))
                        console.warn("Skipping logging datasource field key: " + l + " because it has no value.");
                    else if (ht[l] === !0)
                        if (typeof h != "string" && h.length)
                            for (v in h)
                                h.hasOwnProperty(v) && r(n, null, l, {
                                    childElementIndex: v,
                                    childElementValue: h[v]
                                }, c, null, "constructedChildNode");
                        else
                            c[l] = h;
                    else
                        console.warn("Unknown datasource field key: " + l + ". skipping logging value: " + h);
        return c
    }
    function bt(n, t, i, u, f, e) {
        var o = {}, s;
        u && (o.Service = u);
        o.Scenario = i;
        for (s in e)
            o[s] = e[s];
        return r(n, null, null, o, null, f, t)
    }
    function kt(n, t, i, u) {
        return k(r(n, t, i, null, u))
    }
    function k(n) {
        return new et(n)
    }
    function gt(n, i, r) {
        var u = [], e = t[r], o, f, s, h, c;
        for (o in e)
            for (u.push(e[o].tree); u.length > 0; ) {
                if (f = u.pop(),
                s = f.GetValue(),
                s.K === i.K && s.AppNS === i.AppNS)
                    return f.AddChild(n),
                    e[o].addKValue(n.K.toString()),
                    !0;
                h = f.GetChildren();
                for (c in h)
                    u.push(h[c])
            }
        return !1
    }
    function e(n) {
        var u = n.GetValue(), i = n.GetChildren(), r, t;
        if (i.length > 0) {
            for (r = [],
            t = 0; t < i.length; t++)
                r.push(e(i[t]));
            u.DS = r
        }
        return u
    }
    function d(n, t) {
        var i = n.GetChildren(), o = n.GetValue(), r, c;
        for (r in i)
            if (i[r].IsInstrumented())
                d(i[r], t);
            else {
                var s = i[r].GetValue()
                  , f = i[r].GetChildren()
                  , h = [];
                if (f.length > 0) {
                    for (c in f)
                        h.push(e(f[c]));
                    s.DS = h
                }
                t.push({
                    T: "D.MI",
                    Action: "Append",
                    AppNS: o.AppNS,
                    K: o.K,
                    DS: [s]
                });
                u(i[r])
            }
    }
    function u(n) {
        var i, t;
        for (n.SetIsInstrumented(),
        i = n.GetChildren(),
        t = 0; t < i.length; t++)
            u(i[t])
    }
    function ni(n) {
        var f, r, h, i, a;
        if (_w.logInstPerf && _w.ThresholdUtilities && ThresholdUtilities.recordApiTime("DSL" + o + "S"),
        f = [],
        r = t[n],
        r)
            for (h in r)
                if (i = r[h].tree,
                !i.IsInstrumented()) {
                    var c = i.GetValue()
                      , s = i.GetChildren()
                      , l = [];
                    if (s.length > 0) {
                        for (a in s)
                            l.push(e(s[a]));
                        c.DS = l
                    }
                    f.push(c);
                    u(i)
                }
        return _w.logInstPerf && _w.ThresholdUtilities && (ThresholdUtilities.recordApiTime("DSL" + o + "C"),
        o++),
        f
    }
    function g(n, t, r, u, f, e) {
        var a, l, h, c, v, y, o;
        if (_w.logInstPerf && _w.ThresholdUtilities && ThresholdUtilities.recordApiTime("LL" + i + "S"),
        n.parentElement && (n = n.parentElement),
        a = n.querySelectorAll(lt),
        l = a.length,
        l == 0)
            return _w.logInstPerf && _w.ThresholdUtilities && (ThresholdUtilities.recordApiTime("LL" + i + "A"),
            i++),
            [];
        for (h = [],
        o = 0; o < l; o++)
            if (c = tt(a, o, l, null, t, u, f),
            c) {
                if (o = c.lastProcessedIndex,
                e && c.isHidden)
                    continue;
                h.push(c)
            }
        if (r) {
            for (y = [],
            o = 0; o < h.length; ++o)
                ut(y, nt(h[o]));
            v = y.map(s)
        } else
            v = h.map(s);
        return _w.logInstPerf && _w.ThresholdUtilities && (ThresholdUtilities.recordApiTime("LL" + i + "C"),
        i++),
        v
    }
    function nt(n) {
        var i = [], u = n.layout.AppNS, r, t;
        for (r in n.children)
            if (t = n.children[r],
            t.isLogged)
                t.layout.AppNS || (t.layout.AppNS = u),
                ut(i, nt(t));
            else {
                i.push(n);
                break
            }
        return i
    }
    function tt(n, t, i, r, u, e, o) {
        var g, b = [], a = n[t], it = a.hasAttribute(v) || a.hasAttribute(f), rt = a.getAttribute(y) === "1", ft = ((g = a.className) === null || g === void 0 ? void 0 : g.indexOf(pt)) > -1, k, w, nt, p, ut, d;
        if (o && rt && !it)
            return null;
        if (k = ti(a, r, u, null),
        w = {
            isContainer: it,
            lastProcessedIndex: t,
            layout: k,
            isLogged: rt,
            children: b,
            isHidden: ft
        },
        (a.hasAttribute(c) || a.hasAttribute(h) || a.hasAttribute(l)) && a.setAttribute(y, "1"),
        !w.isContainer)
            return w;
        for (nt = k.AppNS,
        p = t + 1; p < i; p++)
            if (ut = n[p],
            a.contains(ut))
                d = tt(n, p, i, nt ? nt : r, u, e, o),
                d && (p = d.lastProcessedIndex,
                b.push(d));
            else
                break;
        if (b.length > 0)
            k.L = b.map(s);
        else if (e)
            return null;
        return w.lastProcessedIndex = p - 1,
        w
    }
    function s(n) {
        return n.layout
    }
    function ti(n, i, r, u) {
        var s = null, y = null, k = !n.hasAttribute(v) && !n.hasAttribute(f), d = n.getAttribute(h), b, o, g, e, tt;
        if (d && (o = rt(d),
        o && (s = o.K,
        y = o.AppNS)),
        b = n.getAttribute(c),
        b && (o = rt(b),
        o && (s = o.K,
        y = o.AppNS)),
        s || (s = n.getAttribute(l)),
        g = k ? yt : at,
        e = {
            T: g
        },
        s) {
            var it = s.split(".", 1)[0]
              , nt = u ? u : _G.IG
              , ut = !1;
            for (tt in t[nt])
                if (t[nt][tt].kValueExists(it)) {
                    ut = !0;
                    break
                }
            e.K = s
        }
        return y && y !== i ? e.AppNS = y : y || i || (e.AppNS = r),
        k || (n.hasAttribute(f) && (e.Region = n.getAttribute(f)),
        n.hasAttribute(a) && (e.Results = n.getAttribute(a)),
        n.hasAttribute(p) && (e.Role = n.getAttribute(p)),
        n.hasAttribute(w) && (e.T = vt,
        e.InsertId = n.getAttribute(w)),
        e.L = []),
        e
    }
    function rt(n) {
        if (!n)
            return null;
        var t = it.exec(n);
        return t && t.length == 3 ? {
            AppNS: t[1],
            K: t[2]
        } : null
    }
    function ut(n, t) {
        if (n && t)
            for (var i in t)
                n.push(t[i])
    }
    var ft = function() {
        function n(n) {
            this.children = [];
            this.instrumented = !1;
            this.value = n
        }
        return n.prototype.AddChild = function(t) {
            this.children.push(new n(t))
        }
        ,
        n.prototype.GetValue = function() {
            return this.value
        }
        ,
        n.prototype.GetChildren = function() {
            return this.children
        }
        ,
        n.prototype.IsInstrumented = function() {
            return this.instrumented
        }
        ,
        n.prototype.SetIsInstrumented = function() {
            this.instrumented = !0
        }
        ,
        n
    }(), et = function() {
        function n(n) {
            this.hValue = "ID=" + n.AppNS + "," + n.K;
            this.dsItem = n;
            this.dsRefCount = n.RefCount++
        }
        return n.prototype.GetNamespacedKValue = function() {
            return this.hValue + "." + this.dsRefCount
        }
        ,
        n.prototype.GetKValue = function() {
            return this.dsItem.K.toString() + "." + this.dsRefCount
        }
        ,
        n.prototype.GetDataSource = function() {
            return this.dsItem
        }
        ,
        n.prototype.GetUrlWithFormCode = function() {
            return this.dsItem ? this.dsItem.Url : null
        }
        ,
        n
    }(), ot = function() {
        function n(n) {
            this.kValuesContained = {};
            this.tree = n;
            this.kValuesContained[n.GetValue().K.toString()] = !0
        }
        return n.prototype.addKValue = function(n) {
            this.kValuesContained[n] = !0
        }
        ,
        n.prototype.kValueExists = function(n) {
            return this.kValuesContained[n]
        }
        ,
        n
    }(), st = 1, o = 0, i = 0, ht = {
        T: !0,
        Service: !0,
        Scenario: !0,
        AppNS: !0,
        K: !0,
        AppID: !0,
        AppName: !0,
        Url: !0,
        CDT: !0,
        LMD: !0,
        EXT: !0,
        PHits: !0,
        Rank: !0,
        SettingID: !0,
        DS: !0,
        SPDisplay: !0,
        PPMiss: !0,
        order: !0,
        indexed: !0,
        count: !0,
        alterationState: !0,
        childElementIndex: !0,
        childElementValue: !0,
        added: !0,
        promoted: !0,
        suppresssedBy: !0
    }, ct = new RegExp("/^s*$/"), t = {}, h = "h", c = "data-h", l = "data-k", f = "data-region", a = "data-results", v = "data-isregion", y = "data-logged", p = "data-role", w = "data-insertionpoint", lt = "[data-k], [data-isregion], [h], [data-h], [data-region]", at = "L.Box", vt = "L.Box.Dynamic", yt = "L.Url", pt = "b_hide", it;
    n.CreateKValue = b;
    n.LogUpdatedLayoutCentralizedDataSources = wt;
    n.CreateDataSourceItem = r;
    n.CreateDataSourcesRoot = bt;
    n.CreateInstrumentedItem = kt;
    n.CreateInstrumentedItemFromDs = k;
    n.GetNewDataSources = ni;
    n.CreateLayoutNode = g;
    it = /ID=(\w+),(\d+(?:\.\d+)*)/i
}(DataSourceLayoutManager || (DataSourceLayoutManager = {}));
_w.DsLManager = DataSourceLayoutManager;
_w.ClientInstConfig || (_w.ClientInstConfig = {});
ClientInstConfig.flushInterval = 2e3,
function(n) {
    function i(n, t) {
        return typeof n[t] != "undefined"
    }
    function t() {
        _d.addEventListener("visibilitychange", function() {
            _d.visibilityState === "visible" && (i(window, "Log2") && Log2.LogEvent ? Log2.LogEvent("TabFocusChanged", "TabFocused", _d.visibilityState, !1) : Log && Log.LogCustomEvent ? Log.LogCustomEvent("TabFocusChanged", "TabFocused", _d.visibilityState, !0) : Log && Log.Log && Log.Log("TabFocusChanged", "Failed", "TabFocusChanged Event not logged"))
        })
    }
    n.LogEventOnTabVisibilityChange = t;
    sj_evt.bind("onP1", function() {
        t()
    }, 1)
}(EventLoggingModule || (EventLoggingModule = {}))
