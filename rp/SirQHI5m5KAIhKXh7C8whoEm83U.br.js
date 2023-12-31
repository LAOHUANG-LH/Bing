(function() {
    function rt(u) {
        var s = SydFSCHelper.isSydFSCEligible, e;
        SydFSCHelper.sydPayWallTrace("handleClickForWebScope", s);
        e = f != 1 ? _ge(o) : n;
        s && (e && Lib.CssClass.contains(e, t) || r && Lib.CssClass.contains(r, t)) && (SydFSCHelper.LogIntEvent("ConversationViewExit", "Scope", {
            source: "ClickTab",
            target: _G[SydFSCHelper.SYD_PREV_MODE]
        }),
        sj_evt.fire("hideSydFSC"));
        e && Lib.CssClass.remove(e, t);
        r && Lib.CssClass.remove(r, t);
        i && Lib.CssClass.add(i, t);
        sj_pd(u);
        sj_sp(u)
    }
    function h(r) {
        var f, u;
        p && sj_cook && (f = sj_cook.get("SRCHHPGUSR", "ADLT"),
        f == "STRICT" && (_w.location.href = "/chat",
        sj_pd(r),
        sj_sp(r)));
        u = SydFSCHelper.isSydFSCEligible;
        SydFSCHelper.sydPayWallTrace("handleClickForWebScope", u);
        u ? n && !Lib.CssClass.contains(n, t) && (i && Lib.CssClass.remove(i, t),
        Lib.CssClass.add(n, t),
        SydFSCHelper.triggerSydFSCQueryWithContext(),
        SydFSCHelper.LogIntEvent("ConversationViewEnter", "Scope", {
            source: "ClickTab"
        })) : (SydFSCHelper.LogIntEvent("ConvesationPayWallEnter", "Scope", {
            source: "ClickTab",
            tab: "conv"
        }),
        sj_evt.fire("showSydFSC"));
        sj_pd(r);
        sj_sp(r)
    }
    function ut(n) {
        k && ot();
        b && et(n);
        w && ft(n)
    }
    function ft(n) {
        var u = _ge("sb_form_q"), i = "WRK2MN", t, r;
        e && (t = u.value,
        r = t ? "/search?FORM=".concat(i, "&q=") + t : "?FORM=".concat(i),
        window.open(r, "_blank"),
        sj_pd(n),
        sj_sp(n))
    }
    function et(n) {
        e && (sj_evt.fire("hideSydFSC"),
        sj_pd(n),
        sj_sp(n))
    }
    function ot() {
        e ? SydFSCHelper.LogIntEvent("ClickLogoConvMode", "Scope", {
            source: "ClickLogo",
            target: _G[SydFSCHelper.SYD_PREV_MODE]
        }) : SydFSCHelper.LogIntEvent("ClickLogoSerpMode", "Scope", {
            source: "ClickLogo"
        })
    }
    function st(n) {
        var f, u;
        p && sj_cook && (f = sj_cook.get("SRCHHPGUSR", "ADLT"),
        f == "STRICT" && (_w.location.href = "/chat",
        sj_pd(n),
        sj_sp(n)));
        u = SydFSCHelper.isSydFSCEligible;
        SydFSCHelper.sydPayWallTrace("handleClickForWebScope", u);
        u ? r && !Lib.CssClass.contains(r, t) && (i && Lib.CssClass.remove(i, t),
        Lib.CssClass.add(r, t),
        SydFSCHelper.triggerSydFSCQueryWithContext(),
        SydFSCHelper.LogIntEvent("ConversationViewEnter", "PinnedHeader", {
            source: "ChatButton"
        })) : (SydFSCHelper.LogIntEvent("ConvesationPayWallEnter", "Scope", {
            source: "ChatButton",
            tab: "conv"
        }),
        sj_evt.fire("showSydFSC"));
        sj_pd(n);
        sj_sp(n)
    }
    function ht() {
        var u = _d.querySelector("#b-scopeListItem-web a")
          , t = _d.querySelector("#b-scopeListItem-conv a")
          , f = _d.querySelectorAll(".b_scopebar >ul >li");
        if (u && t && i && n) {
            var e = f[1]
              , o = e.querySelector(" a")
              , s = o.offsetLeft - i.offsetLeft
              , h = t.offsetWidth
              , r = sj_ce("style");
            r.textContent = "\n               .b_sydConvMode .b_scopebar #b-scopeListItem-web::after {\n                   width: ".concat(h, "px;\n                   transform: translateX(").concat(s, "px);\n               }\n            ");
            sj_b.appendChild(r)
        }
    }
    function g() {
        sj_ue(u ? u : n, "click", h);
        n = _ge(o);
        u = n && n.querySelector("a");
        sj_be(u ? u : n, "click", h)
    }
    function nt() {
        e || (e = !0,
        y = !1,
        it(!1))
    }
    function tt() {
        y || (y = !0,
        e = !1,
        it(!0))
    }
    function it(n) {
        var i, r, u;
        if (f !== 1 && (i = _d.querySelectorAll(".b_scopebar >ul >li"),
        i && i.length > 2)) {
            if (f === -1 && lt(i),
            f === -1 || f === 1)
                return;
            r = i[1];
            u = i[f];
            u && Lib.CssClass.remove(u, t);
            n && r && Lib.CssClass.remove(r, t);
            ct(u, r)
        }
    }
    function ct(n, t) {
        at(n, t);
        var i = _d.querySelector("#b-scopeListItem-conv a");
        sj_be(i, "click", h)
    }
    function lt(n) {
        for (var t = 0; t < n.length; t++)
            if (n[t].id === o) {
                f = t;
                break
            }
    }
    function at(n, t) {
        var i = n.innerHTML
          , r = n.id;
        n.innerHTML = t.innerHTML;
        n.id = t.id;
        t.innerHTML = i;
        t.id = r
    }
    var c, l, a, v, o = "b-scopeListItem-conv", t = "b_active", i = _ge("b-scopeListItem-web"), n = _ge(o), u = n && n.querySelector("a"), r = _ge("b_phead_chat"), p = SydFSCHelper.getConfigOrDefault((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableSydStrictRedirect, !1), f = -1, e = !1, y = !1, w = ((l = _G === null || _G === void 0 ? void 0 : _G.EF) === null || l === void 0 ? void 0 : l.newtabserpforchat) === 1, b = ((a = _G === null || _G === void 0 ? void 0 : _G.EF) === null || a === void 0 ? void 0 : a.backserpforchat) === 1, k = ((v = _G === null || _G === void 0 ? void 0 : _G.EF) === null || v === void 0 ? void 0 : v.logforctl) === 1, s, d;
    n && i && (ht(),
    sj_be(i, "click", rt),
    sj_be(u ? u : n, "click", h),
    sj_be(r, "click", st),
    (w || b || k) && (s = _ge("b_header"),
    d = s === null || s === void 0 ? void 0 : s.querySelector(".b_logoArea"),
    sj_be(d, "click", ut)),
    sj_evt.unbind("showSydFSC", nt),
    sj_evt.bind("showSydFSC", nt, 1),
    sj_evt.unbind("hideSydFSC", tt),
    sj_evt.bind("hideSydFSC", tt, 1),
    sj_evt.unbind("dynamicchatscoperelocate", g),
    sj_evt.bind("dynamicchatscoperelocate", g, 1))
}
)()
