var SydneyFullScreenConv;
(function(n) {
    function tr(i) {
        var d, g, nt, rt, ut, et, st, ct, lt, wt, dt, gt, fi, tr, rr, lr, ar, vr, yr, wr, br, kr, nu, iu, ru, uu, fu, eu, ou, su, hu, cu, lu, yu, wu, ku, du, gu, nf, tf, rf, uf, ff, ef, sf, hf, cf, lf, af, vf, yf, pf, wf, p, bf, ie, re, ue, fe, ee, kf, oe, df, f, w, y, gf, ne, se, k, he;
        if (i === void 0 && (i = null),
        p = _ge(pr),
        !p.querySelector("cib-serp")) {
            at = (d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.usePill;
            vt = (g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.enableScrollOut;
            yt = (nt = _w._sydConvConfig) === null || nt === void 0 ? void 0 : nt.enableSydContext;
            e = (rt = _w._sydConvConfig) === null || rt === void 0 ? void 0 : rt.convBackBtn;
            tt = (ut = _w._sydConvConfig) === null || ut === void 0 ? void 0 : ut.enableSetConvQueryFlag;
            dr = (et = _w._sydConvConfig) === null || et === void 0 ? void 0 : et.enableSydTigerAns;
            ni = (st = _w._sydConvConfig) === null || st === void 0 ? void 0 : st.enableSydAjax;
            ft = (ct = _w._sydConvConfig) === null || ct === void 0 ? void 0 : ct.enableSydCarousel;
            n.moveOnlySydXAnswers = (lt = _w._sydConvConfig) === null || lt === void 0 ? void 0 : lt.moveOnlySydXAnswers;
            o = (wt = _w._sydConvConfig) === null || wt === void 0 ? void 0 : wt.hideSydFSC;
            s = (dt = _w._sydConvConfig) === null || dt === void 0 ? void 0 : dt.enableSydOverlay;
            pt = (gt = _w._sydConvConfig) === null || gt === void 0 ? void 0 : gt.enable1TCibSlot;
            b = (fi = _w._sydConvConfig) === null || fi === void 0 ? void 0 : fi.enableSydX1T;
            ti = (tr = _w._sydConvConfig) === null || tr === void 0 ? void 0 : tr.hideSydMic;
            ii = (rr = _w._sydConvConfig) === null || rr === void 0 ? void 0 : rr.fromNoResults;
            ai = (lr = _w._sydConvConfig) === null || lr === void 0 ? void 0 : lr.codexWinEnableCustomGreeting;
            vi = (ar = _w._sydConvConfig) === null || ar === void 0 ? void 0 : ar.codexWinGreetingCustomString;
            ei = (vr = _w._sydConvConfig) === null || vr === void 0 ? void 0 : vr.checkCreatorAnsFor1T;
            ri = SydFSCHelper.getConfigOrDefault((yr = _w._sydConvConfig) === null || yr === void 0 ? void 0 : yr.enableSydCarouselHistory, !1);
            gr = SydFSCHelper.getConfigOrDefault((wr = _w._sydConvConfig) === null || wr === void 0 ? void 0 : wr.enableSQMsg, !1);
            ui = SydFSCHelper.getConfigOrDefault((br = _w._sydConvConfig) === null || br === void 0 ? void 0 : br.enableSemSerpNoCache, !1);
            oi = SydFSCHelper.getConfigOrDefault((kr = _w._sydConvConfig) === null || kr === void 0 ? void 0 : kr.enableSydStaticAdsLink, !1);
            var ce = SydFSCHelper.getConfigOrDefault((nu = _w._sydConvConfig) === null || nu === void 0 ? void 0 : nu.hideSydReconnect, !1)
              , le = (iu = _w._sydConvConfig) === null || iu === void 0 ? void 0 : iu.enableDlBing
              , ae = (ru = _w._sydConvConfig) === null || ru === void 0 ? void 0 : ru.disableSydGhosting
              , ve = SydFSCHelper.getConfigOrDefault((uu = _w._sydConvConfig) === null || uu === void 0 ? void 0 : uu.disableCibNotificationStyleUpdate, !1)
              , ye = _w._sydCachedString
              , te = _w._sydAddOptionsSet;
            if (_G[SydFSCHelper.SYD_MODE] = "serp",
            _G[SydFSCHelper.SYD_PREV_MODE] = "",
            si = SydFSCHelper.getConfigOrDefault((fu = _w._sydConvConfig) === null || fu === void 0 ? void 0 : fu.disableTabletScroll, !1),
            hi = SydFSCHelper.getConfigOrDefault((eu = _w._sydConvConfig) === null || eu === void 0 ? void 0 : eu.disableTabletScrollOut, !1),
            l = SydFSCHelper.getConfigOrDefault((ou = _w._sydConvConfig) === null || ou === void 0 ? void 0 : ou.disableFocusedTabletScrollOut, !1),
            ci = SydFSCHelper.getConfigOrDefault((su = _w._sydConvConfig) === null || su === void 0 ? void 0 : su.disableTouchDesktopScroll, !1),
            ot = SydFSCHelper.getConfigOrDefault((hu = _w._sydConvConfig) === null || hu === void 0 ? void 0 : hu.disableDesktopScroll, !1),
            li = SydFSCHelper.getConfigOrDefault((cu = _w._sydConvConfig) === null || cu === void 0 ? void 0 : cu.enableChatScrollFix, !1),
            ht = SydFSCHelper.getConfigOrDefault((lu = _w._sydConvConfig) === null || lu === void 0 ? void 0 : lu.enableConvModeSwitchAjax, !1),
            wi = SydFSCHelper.getConfigOrDefault((yu = _w._sydConvConfig) === null || yu === void 0 ? void 0 : yu.enableCssSplitConvModeOnClick, 0),
            bt = SydFSCHelper.getConfigOrDefault((wu = _w._sydConvConfig) === null || wu === void 0 ? void 0 : wu.enableWelcomeScreenV2, !1),
            kt = SydFSCHelper.getConfigOrDefault((ku = _w._sydConvConfig) === null || ku === void 0 ? void 0 : ku.enableChatFRE, !1),
            bi = SydFSCHelper.getConfigOrDefault((du = _w._sydConvConfig) === null || du === void 0 ? void 0 : du.enable2TQueryConfigsOnSerpLoad, !1),
            ki = SydFSCHelper.getConfigOrDefault((gu = _w._sydConvConfig) === null || gu === void 0 ? void 0 : gu.enableBackgroundFix, !1),
            di = SydFSCHelper.getConfigOrDefault((nf = _w._sydConvConfig) === null || nf === void 0 ? void 0 : nf.hideMuidUpsell, !1),
            gi = SydFSCHelper.getConfigOrDefault((tf = _w._sydConvConfig) === null || tf === void 0 ? void 0 : tf.enableSERPHideShowConv, !1),
            nr = SydFSCHelper.getConfigOrDefault((rf = _w._sydConvConfig) === null || rf === void 0 ? void 0 : rf.enableBceBcbToggle, !1),
            a = _d.createElement("slot"),
            a.setAttribute("name", "firstAnswer"),
            a.setAttribute("slot", "firstAns"),
            v = _d.createElement("slot"),
            v.setAttribute("name", "firstAns"),
            r = ((uf = _d.getElementsByClassName("b_top")) === null || uf === void 0 ? void 0 : uf.length) > 0 ? _d.getElementsByClassName("b_top")[0] : null,
            it = !r ? !1 : r.getElementsByClassName("b_wpt_ch").length > 0 || r.getElementsByClassName("qna-sydney").length > 0,
            bf = _ge("b_header"),
            p && bf && sj_b.insertBefore(p, bf),
            t = _d.createElement("div"),
            t === null || t === void 0 ? void 0 : t.setAttribute("slot", "firstAnswer"),
            t === null || t === void 0 ? void 0 : t.setAttribute("id", "sydFirstAnswer"),
            t.style.maxWidth = "648px",
            SydFSCHelper.setConfigs(i),
            SydFSCHelper.setEventListeners(),
            SydFSCHelper.setSydFSCEligibleState(!0),
            u = CIB.insertAt(p),
            SydFSCHelper.setColorScheme(),
            ie = SydFSCHelper.getConfigOrDefault((ff = _w._sydConvConfig) === null || ff === void 0 ? void 0 : ff.isBingChatForEnterprise, !1),
            re = ie && typeof BceSydneyHelper != "undefined" ? BceSydneyHelper.getSydneyWelcomeCards : undefined,
            bt ? sj_evt.bind("sydWelcomeScreen", function() {
                SydWelcomeScreen === null || SydWelcomeScreen === void 0 ? void 0 : SydWelcomeScreen.setContent(u, re)
            }, !0) : kt && (SydneyChatFRE === null || SydneyChatFRE === void 0 ? void 0 : SydneyChatFRE.setContent(u)),
            ue = SydFSCHelper.getConfigOrDefault((ef = _w._sydConvConfig) === null || ef === void 0 ? void 0 : ef.isCompliantSydneyEndpointEnabled, !1),
            ue && MsbSydneyHelper.addTenantLogoToHeader(),
            fe = SydFSCHelper.getConfigOrDefault((sf = _w._sydConvConfig) === null || sf === void 0 ? void 0 : sf.useAccountLinkingForConversationLimitUpsell, !1),
            fe && (CIB.config.bing.signIn.query.action = "acclink",
            CIB.config.bing.signIn.query.crea = "MY04B",
            CIB.config.bing.signIn.query.pn = "AccountLinking_Chat",
            CIB.config.bing.signIn.query.publ = "BingIP"),
            u.setAttribute("alignment", "left"),
            le && CIB.config.sydney.request.optionsSets.push("dlbing"),
            te && CIB.config.sydney.request.optionsSets.push(te),
            ii)
                SydFSCHelper.lastQuery = SydFSCHelper.getQuery().toLowerCase().trim();
            else {
                CIB.config.greeting.shouldSendBotGreeting = SydFSCHelper.shouldForceSendBotGreeting;
                ht || (sj_evt.bind("ajax.unload", function() {
                    SydFSCHelper.shouldResetBotGreeting = !1
                }),
                sj_evt.bind("ajax.load", function() {
                    SydFSCHelper.shouldResetBotGreeting = !0
                }));
                CIB.onConversationRequestStateChange(function(n) {
                    n || CIB.config.greeting.shouldSendBotGreeting || !SydFSCHelper.shouldResetBotGreeting || (CIB.config.greeting.shouldSendBotGreeting = !0)
                })
            }
            ht && sj_evt.bind("ajax.load", function() {
                _G[SydFSCHelper.SYD_MODE] = "serp"
            });
            ee = SydFSCHelper.getConfigOrDefault((hf = _w._sydConvConfig) === null || hf === void 0 ? void 0 : hf.disResetTT, !1);
            ee && (kf = (lf = (cf = u === null || u === void 0 ? void 0 : u.shadowRoot) === null || cf === void 0 ? void 0 : cf.querySelector("cib-action-bar")) === null || lf === void 0 ? void 0 : lf.shadowRoot,
            kf && (y = sj_ce("style"),
            y.textContent = "\n                    cib-tooltip {\n                        display: none !important;\n                    }\n                ",
            kf.appendChild(y)));
            SydFSCHelper.setTestMocks();
            ri && (oe = new URLSearchParams(_w.location.search),
            df = oe.get("convid"),
            df && bu(df));
            f = (af = _d.querySelector("cib-serp")) === null || af === void 0 ? void 0 : af.shadowRoot;
            w = f === null || f === void 0 ? void 0 : f.querySelector("cib-conversation");
            w && w.shadowRoot && (h = w.shadowRoot.querySelector(".scroller"),
            y = sj_ce("style"),
            ce && (y.textContent = "\n                cib-notification-container {\n                    display: none;\n                }\n            "),
            w.shadowRoot.appendChild(y));
            ae && (gf = (yf = (vf = f === null || f === void 0 ? void 0 : f.querySelector("cib-action-bar")) === null || vf === void 0 ? void 0 : vf.shadowRoot) === null || yf === void 0 ? void 0 : yf.querySelector(".autosuggest-text"),
            gf && (gf.style.display = "none"));
            ne = "ontouchstart"in window || !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
            se = l && (yi || pi || ClientObserver.getBrowserWidth() < 780);
            ne && Log.Log("ClientInst", "Codex", "TouchD");
            s || si || se || ne && ci || (sj_be(_w, "mousewheel", fr),
            sj_be(_w, "touchstart", er),
            sj_be(_w, "touchmove", or),
            sj_be(_w, "touchend", sr),
            li && (k = (pf = _d.querySelector("cib-serp")) === null || pf === void 0 ? void 0 : pf.shadowRoot.querySelector("cib-side-panel"),
            k && sj_be(k, "mouseenter", au),
            k && sj_be(k, "mouseleave", vu)),
            l && (sj_be(_w, "keydown", hr),
            sj_be(_w, "resize", cr)));
            SydFSCHelper.triggerShareFlow();
            ir();
            sj_evt.bind("ajax.load", ir);
            e && (SydFSCHelper.setupHistory(),
            SydFSCHelper.checkInitialState());
            tu();
            s && pu();
            SydFSCHelper.triggerClarity();
            CIB.onResetConversation(function() {
                SydFSCHelper.shouldMove1TAnswers(b, c) && ur()
            });
            CIB.onModeChanged(function() {
                sj_evt.fire("onModeChanged")
            });
            if (CIB.onMobileUpsellPopupShown)
                CIB.onMobileUpsellPopupShown(function() {
                    var n = {
                        convId: CIB.manager.conversation.id,
                        responseTone: CIB.responseTone
                    };
                    SydFSCHelper.SydLog("SystemEvent", "MobileUpsell", "MobileUpsellPopupShown", n);
                    SydFSCHelper.createRequest("sydchat/writeConvInfo", JSON.stringify(n))
                });
            he = ((wf = _w.BingChatCustomGreetingString) === null || wf === void 0 ? void 0 : wf.length) > 0;
            ai && !he && SydFSCHelper.processCachedResponseUsingCIB(JSON.parse(vi));
            ki && SydFSCHelper.updateChatBackgroundWidth();
            di && SydFSCHelper.hideSignInUpsellFor3P()
        }
    }
    function nu() {
        var n = _ge("b_content");
        sb_st(function() {
            n && Lib.CssClass.contains(n, "b_showconv") && Lib.CssClass.remove(n, "b_showconv")
        }, 0)
    }
    function ir() {
        sj_evt.bind("hideSydFSC", function(n) {
            var l, i, r, a, w, u, f, t, h, p;
            if (!ut) {
                if (ut = !0,
                Log.Log("ClientInst", "Codex", "LeaveConversationMode"),
                o || Lib.CssClass.remove(sj_b, d),
                l = _ge("sb_form"),
                l && Lib.CssClass.contains(l, "hassbi") && Lib.CssClass.remove(l, "hassbi"),
                CIB.hideConversation(),
                o || s || (Lib.CssClass.add(_d.documentElement, "b_delayOvflw"),
                SydFSCHelper.shouldMove1TAnswers(b, c) && ur(),
                i = _ge("b-scopeListItem-web"),
                i && i.children.length > 0 && (i.children[0].setAttribute("aria-current", "page"),
                Lib.CssClass.add(i, "b_active"),
                _ge("b_skip_to_content").setAttribute("tabindex", "0")),
                r = _ge("b-scopeListItem-conv"),
                r && r.children.length > 0 && (r.children[0].setAttribute("aria-current", "false"),
                Lib.CssClass.remove(r, "b_active")),
                a = _ge("b_phead_chat"),
                a && Lib.CssClass.contains(a, "b_active") && Lib.CssClass.remove(a, "b_active")),
                _G[SydFSCHelper.SYD_PREV_MODE] != _G[SydFSCHelper.SYD_MODE] && (_G[SydFSCHelper.SYD_PREV_MODE] = _G[SydFSCHelper.SYD_MODE],
                e && (w = n && n.length > 1 ? n[1] : !1,
                w || SydFSCHelper.pushSydHistory(!1))),
                !e && tt && SydFSCHelper.updateConvFlagInURL(!1),
                SydFSCHelper.updateConvPageTitle(!1),
                _G[SydFSCHelper.SYD_MODE] = "serp",
                ft) {
                    if (u = _ge("b_pole"),
                    !u) {
                        for (u = sj_ce("div", "b_pole"),
                        f = _d.querySelector("main"),
                        t = _ge("b_results"); t && f && t.parentElement != f; )
                            t = t.parentElement;
                        f && t && f.insertBefore(u, t)
                    }
                    SydFSCHelper.addCarousel(u)
                } else if (ni && (h = CIB.vm.conversation.model.messages.filter(function(n) {
                    return n.type === "meta" && n.text != "Generating answers for you..." || n.type === "text" && n.author === "user"
                }),
                h && h.length > 0)) {
                    var v = h[h.length - 1].text.split("`")
                      , y = v.length == 1 ? v[0] : v.length == 3 ? v[1] : ""
                      , k = _ge("sb_form_go")
                      , g = _ge("sb_form_q");
                    _w.sj_isAjax && y && g.value.toLowerCase() != y.toLowerCase() && k && (g.value = y,
                    SydFSCHelper.lastQuery = y,
                    k.click())
                }
                sj_ue(_w, "beforeprint", ar);
                sj_ue(_w, "afterprint", vr);
                p = _ge("b_content");
                p && Lib.CssClass.contains(p, "b_hide") && Lib.CssClass.remove(p, "b_hide");
                ut = !1
            }
        });
        sb_st(function() {
            sj_evt.bind("showSydFSC", cu, !0)
        }, 0);
        gi && sj_evt.bind("sydFSCLoaded", nu, !0);
        sj_evt.bind("onModeChanged", function() {});
        sj_evt.fire("convInit:done")
    }
    function rr() {
        var t;
        r = ((t = _d.getElementsByClassName("b_top")) === null || t === void 0 ? void 0 : t.length) > 0 ? _d.getElementsByClassName("b_top")[0] : null;
        wt = sj_b.querySelector("#b_sydTigerCont") != null;
        it = !!r && r.querySelector("#sydwrap_wrapper") != null;
        n.moveOnlySydXAnswers && (i = sj_b.querySelector("#sydwrap_wrapper #b_syd_sm_chat .b_wpt_chat"),
        i && (Lib.CssClass.add(i, dt),
        fi = i.querySelector(".b_wpt_creator_content") != null))
    }
    function tu() {
        var n = _ge("id_hbfo");
        sj_be(n, "click", function(n) {
            var r = n.target, t, i;
            _G[SydFSCHelper.SYD_MODE] == "conversation" && r && (t = iu(r),
            t && t.target != "_blank" && (i = "",
            t.href.indexOf("/profile/") >= 0 ? i = "profile" : t.href.indexOf("/account/") >= 0 && (i = "account"),
            SydFSCHelper.LogIntEvent("ConversationViewExit", "Conversation", {
                source: "ClickMenu",
                target: i
            })))
        })
    }
    function iu(n) {
        while (n != null) {
            if (n.tagName == "A" && Lib.CssClass.contains(n, "hb_section"))
                return n;
            n = n.parentElement
        }
        return null
    }
    function ct(n, t, i) {
        i === void 0 && (i = !1);
        t && n && (i ? n.prepend(t) : n.appendChild(t))
    }
    function ru(n) {
        var u, f, e, o, s, h;
        if (!at) {
            ct(_ge("b_sydtoporpole"), n);
            return
        }
        var l = _d.querySelector("cib-serp")
          , i = (f = (u = _d.querySelector("cib-serp")) === null || u === void 0 ? void 0 : u.shadowRoot) === null || f === void 0 ? void 0 : f.querySelector("cib-conversation")
          , r = (o = (e = i === null || i === void 0 ? void 0 : i.shadowRoot) === null || e === void 0 ? void 0 : e.querySelector(".scroller")) === null || o === void 0 ? void 0 : o.querySelector(".main cib-welcome-container")
          , c = (h = (s = i === null || i === void 0 ? void 0 : i.shadowRoot) === null || s === void 0 ? void 0 : s.querySelector(".scroller")) === null || h === void 0 ? void 0 : h.querySelector(".main");
        i === null || i === void 0 ? void 0 : i.appendChild(a);
        r ? r === null || r === void 0 ? void 0 : r.after(v) : c === null || c === void 0 ? void 0 : c.prepend(v);
        t === null || t === void 0 ? void 0 : t.appendChild(n);
        pt;
        ct(l, t);
        uu()
    }
    function uu() {
        fu();
        eu()
    }
    function fu() {
        var t = _d.querySelector("#sydFirstAnswer .b_wpt_chat")
          , n = _d.querySelector("#sydFirstAnswer .b_wpt_chat .b_wpt_chat_inner");
        t && n && (t.querySelector("b_wpt_chat_inner > .b_sideBleed") && (n.style.padding = "0 20px 5px 20px"),
        t.querySelector(".b_wpt_chat_inner > .wtr_core.b_sideBleed, .b_wpt_chat_inner > .b_sideBleed #lMapContainer, .b_wpt_chat_inner > .ji_container, .b_wpt_chat_inner > .b_sideBleed #placeAnswer, .b_wpt_chat_inner > .b_sideBleed .ckt_main, .b_wpt_chat_inner > .b_sideBleed .mit_ans, .b_wpt_chat_inner > .jobsAnswerContainer, .b_wpt_chat_inner > div .sa_main") && (n.style.padding = "unset"),
        n.querySelector(".b_wpt_creator") && (n.style.padding = "0px"),
        n.querySelector(".b_wpt_insights") && (n.style.paddingTop = "0px",
        n.style.paddingBottom = "0px"))
    }
    function eu() {
        var n = _d.querySelector("#sydFirstAnswer .b_wpt_chat");
        n && n.querySelector(".b_wpt_creator") && (n.style.boxShadow = "unset")
    }
    function ou() {
        if (rr(),
        n.moveOnlySydXAnswers) {
            if (!i || ei && fi)
                return;
            (c || it && !wt) && sb_st(function() {
                ru(i)
            }, kr)
        }
    }
    function ur() {
        if (n.moveOnlySydXAnswers) {
            if (!i)
                return;
            var t = sj_b.querySelector("#sydwrap_wrapper #b_syd_sm_chat");
            t && !t.contains(i) && i && (Lib.CssClass.remove(i, dt),
            ct(t, i, !0))
        }
    }
    function su() {
        var n = new URLSearchParams(_w.location.search)
          , t = n.get("sendquery");
        return t === "1"
    }
    function hu() {
        var n = _ge("conv-css-link");
        n && !n.classList.contains("css-conv-added") && (n.setAttribute("rel", "stylesheet"),
        n.setAttribute("class", "css-conv-added"))
    }
    function cu(n) {
        var v, y, p, w, k, t, l, a, u, r, f, i, h, et;
        if (!rt) {
            rt = !0;
            SydFSCHelper.updateResponseToneAfterSerp();
            CIB.config.features.enableAds = !0;
            ui && (k = CIB.config.sydney.request.optionsSets.indexOf("nocacheread"),
            k >= 0 && CIB.config.sydney.request.optionsSets.splice(k, 1));
            wi && hu();
            t = _ge("b_header");
            t && g && Lib.CssClass.contains(t, g) && (Lib.CssClass.remove(t, g),
            SydFSCHelper.LogIntEvent("ConversationViewEnter", "Scope", {
                source: "ShowConv"
            }));
            t && !Lib.CssClass.contains(t, "b_bcbSwitch") && nr && Lib.CssClass.add(t, "b_bcbSwitch");
            ft && SydFSCHelper.removeQueries();
            l = n && n.length > 1 ? n[1] : null;
            a = n && n.length > 2 ? n[2] : null;
            c = n && n.length > 3 ? n[3] == br : !1;
            var nt = n && n.length > 5 ? n[5] : null
              , ot = n && n.length > 6 ? n[6] : !1
              , it = n && n.length > 7 ? n[7] : !1;
            if (o || s || (_w.scrollY > 0 && _w.scrollTo(0, 0),
            _d.documentElement && (Lib.CssClass.add(_d.documentElement, "b_disOvflw"),
            Lib.CssClass.remove(_d.documentElement, "b_delayOvflw"))),
            o || Lib.CssClass.add(sj_b, d),
            SydFSCHelper.shouldMove1TAnswers(b, c, l) && ou(),
            l && SydFSCHelper.sendFirstQuery(l.toLowerCase().trim(), a, nt, it || su()),
            CIB.showConversation(),
            ot && (u = [],
            nt && u.push({
                author: "user",
                text: nt
            }),
            a && u.push({
                author: "bot",
                text: a
            }),
            yt && u.length != 0 && CIB.registerContext(u),
            CIB.toggleSpeechEnabled(),
            CIB.triggerMic()),
            !o && !s && (r = _ge("b-scopeListItem-web"),
            r && r.children.length > 0 && r.parentElement && (r.children[0].setAttribute("aria-current", "false"),
            Lib.CssClass.remove(r, "b_active")),
            f = _ge("b-scopeListItem-conv"),
            f && f.children.length > 0 && (f.children[0].setAttribute("aria-current", "page"),
            Lib.CssClass.add(f, "b_active"),
            _ge("b_skip_to_content").setAttribute("tabindex", "-1")),
            i = _d.querySelector(".b_sydConvMode"),
            h = (w = (p = (y = (v = i === null || i === void 0 ? void 0 : i.querySelector("cib-serp")) === null || v === void 0 ? void 0 : v.shadowRoot) === null || y === void 0 ? void 0 : y.querySelector("cib-action-bar")) === null || p === void 0 ? void 0 : p.shadowRoot) === null || w === void 0 ? void 0 : w.querySelector(".input-container .text-input textarea"),
            h && !it && h.focus(),
            i && h && it)) {
                sj_be(i, "keyup", ut);
                function ut(n) {
                    (n.code == "Tab" || n.keyCode == 9 || n.key == "Tab") && h.focus();
                    i.removeEventListener("keyup", ut)
                }
            }
            _G[SydFSCHelper.SYD_PREV_MODE] != _G[SydFSCHelper.SYD_MODE] && (_G[SydFSCHelper.SYD_PREV_MODE] = _G[SydFSCHelper.SYD_MODE],
            e && (et = n && n.length > 4 ? n[4] : !1,
            et || SydFSCHelper.pushSydHistory(!0)));
            !e && tt && SydFSCHelper.updateConvFlagInURL(!0);
            SydFSCHelper.updateConvPageTitle(!0);
            bi || lu();
            _G[SydFSCHelper.SYD_MODE] = "conversation";
            sj_be(_w, "beforeprint", ar);
            sj_be(_w, "afterprint", vr);
            rt = !1
        }
    }
    function lu() {
        var n = ClientObserver.getBrowserWidth()
          , t = ClientObserver.getBrowserHeight();
        SydFSCHelper.set2TQueryConfigs(n, t, oi)
    }
    function au() {
        st = !0
    }
    function vu() {
        st = !1
    }
    function fr(n) {
        var t = 0;
        n || (n = window.event);
        n.wheelDelta ? t = n.wheelDelta / 60 : n.detail && (t = -n.detail / 2);
        yr(t, nt)
    }
    function er(n) {
        et = n.changedTouches[0].clientY;
        k = n.touches && n.touches.length > 1 ? !0 : !1
    }
    function or(n) {
        var t = n.changedTouches[0].clientY - et;
        yr(t, wr, !0)
    }
    function sr(n) {
        f = 0;
        y = !1;
        p = !1;
        et = 0;
        k = n.touches && n.touches.length !== 0
    }
    function hr() {
        yi = !0;
        l && (lr(),
        sj_ue(_w, "keydown", hr))
    }
    function cr() {
        pi = !0;
        l && (lr(),
        sj_ue(_w, "resize", cr))
    }
    function lr() {
        sj_ue(_w, "mousewheel", fr);
        sj_ue(_w, "touchstart", er);
        sj_ue(_w, "touchmove", or);
        sj_ue(_w, "touchend", sr)
    }
    function ar() {
        var n = _ge("b_content");
        n && Lib.CssClass.add(_ge("b_content"), "b_hide")
    }
    function vr() {
        var n = _ge("b_content");
        n && Lib.CssClass.remove(n, "b_hide")
    }
    function yr(n, t, i) {
        if (i === void 0 && (i = !1),
        !st) {
            sb_ct(gt);
            y || (w = Lib.CssClass.contains(sj_b, d),
            p = w ? yu() : _w.scrollY == 0);
            y = !0;
            p && (f += n);
            i || (gt = sb_st(function() {
                f = 0;
                y = !1;
                p = !1
            }, 150));
            var r = !w && f > lt && _G[SydFSCHelper.SYD_MODE] != "conversation" && !k
              , u = vt && w && f < -1 * lt && _G[SydFSCHelper.SYD_MODE] == "conversation" && !hi && !k;
            r ? (Log.Log("ClientInst", "Codex", "ScrollToChat"),
            !ot && f > t && (SydFSCHelper.LogIntEvent("ConversationViewEnter", "Scope", {
                source: "ScrollUp"
            }),
            SydFSCHelper.triggerSydFSCQueryWithContext())) : u && (Log.Log("ClientInst", "Codex", "ScrollOutChat"),
            !ot && f < -1 * t && (SydFSCHelper.LogIntEvent("ConversationViewExit", "Scope", {
                source: "ScrollDown",
                target: _G[SydFSCHelper.SYD_PREV_MODE]
            }),
            sj_evt.fire("hideSydFSC"),
            sb_st(function() {
                _w.scrollTo(0, 0)
            }, 1)))
        }
    }
    function yu() {
        return !h ? !1 : Math.abs(h.scrollTop - (h.scrollHeight - h.offsetHeight)) < 1
    }
    function pu() {
        var t, i, r, e = _ge("b_sydOvrClose"), n, u, f;
        e && sj_be(e, "click", function() {
            sj_evt.fire("hideSydFSC")
        });
        n = (r = (i = (t = _d.querySelector("#b_sydConvCont cib-serp")) === null || t === void 0 ? void 0 : t.shadowRoot) === null || i === void 0 ? void 0 : i.querySelector("cib-action-bar")) === null || r === void 0 ? void 0 : r.shadowRoot;
        u = n === null || n === void 0 ? void 0 : n.querySelector(".outside-left-container");
        u && (u.style.display = "none");
        ti && n && (f = sj_ce("style"),
        f.textContent = "\n                .control.microphone {\n                    display: none;\n                }\n            ",
        n.appendChild(f))
    }
    function wu(n, t) {
        var i, r;
        n === void 0 && (n = null);
        t === void 0 && (t = nt);
        r = (i = _w._sydPayWallConfig) === null || i === void 0 ? void 0 : i.loadSydneyConvResWithPayWall;
        r ? sj_evt.bind("waitlistUpdate:eligible", tr, !0) : tr(n);
        nt = t
    }
    function bu(n) {
        CIB.loadConversation(n);
        SydFSCHelper.lastQuery = SydFSCHelper.getQuery().toLowerCase().trim()
    }
    var d = "b_sydConvMode", g = "b_sydShowConv", pr = "b_sydConvCont", nt = 10, lt = 10, wr = 100, at, vt, yt, e, tt, pt = !1, r, it, i = null, wt = !1, u, bt, kt, h, t, a, v, br = "SYDX_WRAPPER", c = !1, dt = "b_sydxwrappedanswer", kr = 1e3, rt = !1, ut = !1, f = 0, gt, y = !1, p = !1, w = !1, dr = !1, b = !1, ni = !1, ft = !1, o = !1, s = !1, et;
    n.moveOnlySydXAnswers = !1;
    var ti = !1, ii = !1, ri = !1, gr = !1, ui = !1, fi = !1, ei = !1, oi = !1, si = !1, hi = !1, l = !1, ci = !1, ot = !1, li = !1, st = !1, ht = !1, ai = !1, vi = "", yi = !1, pi = !1, k = !1, wi, bi = !1, ki = !1, di = !1, gi = !1, nr = !1;
    (typeof sj_b == "undefined" || sj_b == null) && (window.sj_b = document.body);
    n.init1TAnswerContents = rr;
    n.initWithWaitlistUpdate = wu;
    sj_evt.fire("sydFSC.init")
}
)(SydneyFullScreenConv || (SydneyFullScreenConv = {}))
