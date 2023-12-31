var SydWelcomeScreen;
(function(n) {
    function v(n, i) {
        var e, o, h, r, c;
        (i === void 0 && (i = undefined),
        n && CIB) && (r = (e = n.shadowRoot) === null || e === void 0 ? void 0 : e.querySelector("cib-conversation"),
        r) && (c = (o = r.shadowRoot) === null || o === void 0 ? void 0 : o.querySelector(a),
        c) && (t || (t = (h = SydWelcomeScreenBase.getWelcomeContainer(f)) !== null && h !== void 0 ? h : y(),
        SydWelcomeScreenBase.setTileContainer(t, !1, i)),
        t && (p(n),
        w(c, r, u, s)))
    }
    function y() {
        var r = sj_ce(i, e, o), u, n, t, f;
        return r.setAttribute(h, "2"),
        u = sj_ce(i, null, "b_wlcmHdr"),
        n = sj_ce(i, null, "b_wlcmLogo"),
        n.setAttribute("role", "img"),
        n.setAttribute("aria-label", "Bing Logo"),
        n.setAttribute("tab-index", "0"),
        t = sj_ce(i, null, "b_wlcmDesc"),
        t.innerHTML = c.zeroInputDescription,
        t.setAttribute("role", "heading"),
        t.setAttribute("aria-level", "2"),
        u.appendChild(n),
        u.appendChild(t),
        f = sj_ce(i, null, "b_wlcmTileCont"),
        r.appendChild(u),
        r.appendChild(f),
        r
    }
    function p(n) {
        t.setAttribute("slot", u);
        t.id = t.getAttribute("id") + "_";
        n.appendChild(t)
    }
    function w(n, t, i, r) {
        var u = SydWelcomeScreenBase.createSlot(r)
          , f = SydWelcomeScreenBase.createSlot(i, u);
        n.prepend(u);
        t.append(f);
        t.removeAttribute("empty")
    }
    var r, f = "#b_sydWelcomeTemplate", e = "b_sydWelcomeTemplate", o = "b_wlcmCont", i = "div", u = "wlcmCntnr", s = "wlcmCntnrChld", h = "data-priority", c = _w._sydConvTranslation, l = SydFSCHelper.getConfigOrDefault((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.isBingChatForEnterprise, !1), a = l ? "cib-welcome-container" : "#cib-chat-main", t;
    n.setContent = v;
    sj_evt.fire("sydWelcomeScreen")
}
)(SydWelcomeScreen || (SydWelcomeScreen = {}))
