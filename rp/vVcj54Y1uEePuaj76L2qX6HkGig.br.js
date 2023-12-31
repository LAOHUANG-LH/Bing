var __awaiter = this && this.__awaiter || function(n, t, i, r) {
    function u(n) {
        return n instanceof i ? n : new i(function(t) {
            t(n)
        }
        )
    }
    return new (i || (i = Promise))(function(i, f) {
        function o(n) {
            try {
                e(r.next(n))
            } catch (t) {
                f(t)
            }
        }
        function s(n) {
            try {
                e(r["throw"](n))
            } catch (t) {
                f(t)
            }
        }
        function e(n) {
            n.done ? i(n.value) : u(n.value).then(o, s)
        }
        e((r = r.apply(n, t || [])).next())
    }
    )
}
, __generator = this && this.__generator || function(n, t) {
    function o(n) {
        return function(t) {
            return s([n, t])
        }
    }
    function s(o) {
        if (e)
            throw new TypeError("Generator is already executing.");
        while (f && (f = 0,
        o[0] && (r = 0)),
        r)
            try {
                if (e = 1,
                u && (i = o[0] & 2 ? u["return"] : o[0] ? u["throw"] || ((i = u["return"]) && i.call(u),
                0) : u.next) && !(i = i.call(u, o[1])).done)
                    return i;
                (u = 0,
                i) && (o = [o[0] & 2, i.value]);
                switch (o[0]) {
                case 0:
                case 1:
                    i = o;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: o[1],
                        done: !1
                    };
                case 5:
                    r.label++;
                    u = o[1];
                    o = [0];
                    continue;
                case 7:
                    o = r.ops.pop();
                    r.trys.pop();
                    continue;
                default:
                    if (!(i = r.trys,
                    i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                        r.label = o[1];
                        break
                    }
                    if (o[0] === 6 && r.label < i[1]) {
                        r.label = i[1];
                        i = o;
                        break
                    }
                    if (i && r.label < i[2]) {
                        r.label = i[2];
                        r.ops.push(o);
                        break
                    }
                    i[2] && r.ops.pop();
                    r.trys.pop();
                    continue
                }
                o = t.call(n, r)
            } catch (s) {
                o = [6, s];
                u = 0
            } finally {
                e = i = 0
            }
        if (o[0] & 5)
            throw o[1];
        return {
            value: o[0] ? o[1] : void 0,
            done: !0
        }
    }
    var r = {
        label: 0,
        sent: function() {
            if (i[0] & 1)
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, e, u, i, f;
    return f = {
        next: o(0),
        "throw": o(1),
        "return": o(2)
    },
    typeof Symbol == "function" && (f[Symbol.iterator] = function() {
        return this
    }
    ),
    f
}
, __spreadArray = this && this.__spreadArray || function(n, t, i) {
    if (i || arguments.length === 2)
        for (var r = 0, f = t.length, u; r < f; r++)
            !u && r in t || (u || (u = Array.prototype.slice.call(t, 0, r)),
            u[r] = t[r]);
    return n.concat(u || Array.prototype.slice.call(t))
}
, SydFSCHelper;
(function(n) {
    function kr(i) {
        function aw() {
            return vd && ad ? iw || gp : vd ? iw : ad ? gp : !1
        }
        var ktt = this, tt, it, ut, et, ot, st, ct, lt, vt, yt, pt, wt, kt, dt, ni, ti, ii, si, hi, ci, li, ai, vi, yi, pi, wi, bi, ki, di, rr, ur, fr, er, sr, hr, cr, lr, ar, vr, yr, wr, br, kr, dr, nu, iu, ru, uu, lu, au, yu, wu, bu, ku, du, gu, nf, tf, rf, ff, ef, sf, hf, cf, lf, af, vf, yf, pf, wf, bf, kf, df, gf, ne, te, ie, re, ue, fe, ee, oe, se, he, ce, le, ae, ve, ye, pe, we, be, ke, de, ge, no, to, io, ro, uo, fo, eo, oo, so, ho, co, lo, ao, vo, yo, po, wo, bo, ko, go, ns, ts, is, rs, us, fs, es, os, ss, hs, cs, ls, as, vs, ys, ps, ws, bs, ks, ds, gs, nh, th, ih, rh, uh, fh, eh, oh, sh, hh, ch, lh, ah, vh, yh, ph, wh, bh, kh, dh, gh, nc, tc, ic, rc, uc, fc, ec, oc, sc, hc, cc, lc, ac, vc, yc, pc, wc, bc, kc, dc, gc, nl, tl, il, rl, ul, fl, el, ol, sl, hl, cl, ll, al, vl, yl, pl, wl, bl, kl, dl, gl, na, ta, ia, ra, ua, fa, ea, oa, sa, ha, ca, la, aa, va, ya, pa, wa, ba, ka, da, ga, nv, tv, iv, rv, uv, fv, ev, ov, sv, hv, cv, lv, av, vv, yv, pv, wv, bv, kv, dv, gv, ny, ty, iy, ry, uy, fy, ey, oy, sy, hy, cy, ly, ay, vy, yy, py, wy, by, ky, dy, gy, np, tp, ip, rp, up, fp, ep, op, sp, hp, cp, lp, ap, vp, yp, pp, wp, bp, kp, ytt, r, rw, e, s, v, y, f, uw, fw, o, ew, w, ow, sw, p, b, hw, h, k, ptt, wtt, l, d, cw, lw;
        i === void 0 && (i = null);
        n.isConfigSet = !0;
        var vw = t((tt = _w._sydConvConfig) === null || tt === void 0 ? void 0 : tt.country, !1)
          , yw = t((it = _w._sydConvConfig) === null || it === void 0 ? void 0 : it.countryConfidence, !1)
          , pw = t((ut = _w._sydConvConfig) === null || ut === void 0 ? void 0 : ut.state, !1)
          , ww = t((et = _w._sydConvConfig) === null || et === void 0 ? void 0 : et.city, !1)
          , bw = t((ot = _w._sydConvConfig) === null || ot === void 0 ? void 0 : ot.cityConfidence, !1)
          , kw = t((st = _w._sydConvConfig) === null || st === void 0 ? void 0 : st.zip, !1)
          , dw = t((ct = _w._sydConvConfig) === null || ct === void 0 ? void 0 : ct.timezoneoffset, !1)
          , dtt = t((lt = _w._sydConvConfig) === null || lt === void 0 ? void 0 : lt.enableTimezoneOffsetFromJS, !1)
          , gw = t((vt = _w._sydConvConfig) === null || vt === void 0 ? void 0 : vt.dma, !1)
          , nb = t((yt = _w._sydConvConfig) === null || yt === void 0 ? void 0 : yt.lat, !1)
          , tb = t((pt = _w._sydConvConfig) === null || pt === void 0 ? void 0 : pt.long, !1)
          , gtt = t((wt = _w._sydConvConfig) === null || wt === void 0 ? void 0 : wt.userIpAddress, "")
          , nit = t((kt = _w._sydConvConfig) === null || kt === void 0 ? void 0 : kt.overrideSydOptions, !1)
          , ib = t((dt = _w._sydConvConfig) === null || dt === void 0 ? void 0 : dt.sydOptionSets, !1)
          , rb = t((ni = _w._sydConvConfig) === null || ni === void 0 ? void 0 : ni.voiceSrOptions, "")
          , ub = t((ti = _w._sydConvConfig) === null || ti === void 0 ? void 0 : ti.sydUrlPart, !1)
          , dp = t((ii = _w._sydConvConfig) === null || ii === void 0 ? void 0 : ii.isSydCorpnet, !1)
          , tit = t((si = _w._sydConvConfig) === null || si === void 0 ? void 0 : si.enableSydOverlay, !1)
          , iit = t((hi = _w._sydConvConfig) === null || hi === void 0 ? void 0 : hi.enableEdgeMobileNativeTTS, !1)
          , rit = t((ci = _w._sydConvConfig) === null || ci === void 0 ? void 0 : ci.isVisualParityRun, !1)
          , gp = t((li = _w._sydConvConfig) === null || li === void 0 ? void 0 : li.isMSAAuthenticated, !1)
          , uit = t((ai = _w._sydConvConfig) === null || ai === void 0 ? void 0 : ai.userMailId, "")
          , fit = t((vi = _w._sydConvConfig) === null || vi === void 0 ? void 0 : vi.username, "")
          , fb = t((yi = _w._sydConvConfig) === null || yi === void 0 ? void 0 : yi.sydBaseUrl, !1)
          , a = t((pi = _w._sydConvConfig) === null || pi === void 0 ? void 0 : pi.isCompliantSydneyEndpointEnabled, !1)
          , nw = t((wi = _w._sydConvConfig) === null || wi === void 0 ? void 0 : wi.isBingChatForEnterprise, !1)
          , eit = t((bi = _w._sydConvConfig) === null || bi === void 0 ? void 0 : bi.isBingChatForSchools, !1)
          , eb = t((ki = _w._sydConvConfig) === null || ki === void 0 ? void 0 : ki.sydIDs, "")
          , ob = t((di = _w._sydConvConfig) === null || di === void 0 ? void 0 : di.traceId, "")
          , oit = t(_w._sydConvTranslation, {})
          , sit = t((rr = _w._sydConvConfig) === null || rr === void 0 ? void 0 : rr.enableSydMic, !1)
          , hit = t((ur = _w._sydConvConfig) === null || ur === void 0 ? void 0 : ur.enableSydShare, !1)
          , cit = t((fr = _w._sydConvConfig) === null || fr === void 0 ? void 0 : fr.enableMessageShareableSignal, !1)
          , lit = t((er = _w._sydConvConfig) === null || er === void 0 ? void 0 : er.addDv3Opt, !1)
          , ait = t((sr = _w._sydConvConfig) === null || sr === void 0 ? void 0 : sr.addGenContentv3Opt, !1)
          , vit = t((hr = _w._sydConvConfig) === null || hr === void 0 ? void 0 : hr.enable161Feats, !0)
          , yit = t((cr = _w._sydConvConfig) === null || cr === void 0 ? void 0 : cr.enableAnsCardSuffix, !1)
          , pit = t((lr = _w._sydConvConfig) === null || lr === void 0 ? void 0 : lr.isAdultUser, !0)
          , wit = t((ar = _w._sydConvConfig) === null || ar === void 0 ? void 0 : ar.isMissingDob, !0)
          , bit = t((vr = _w._sydConvConfig) === null || vr === void 0 ? void 0 : vr.removeDSAT, !0)
          , sb = t((yr = _w._sydConvConfig) === null || yr === void 0 ? void 0 : yr.enableErrorTelemetry, !1)
          , hb = t((wr = _w._sydConvConfig) === null || wr === void 0 ? void 0 : wr.enableSpeechExperimentalFeatures, !1)
          , cb = t((br = _w._sydConvConfig) === null || br === void 0 ? void 0 : br.enableSpeechChatDataAfterPhrase, !1)
          , tw = t((kr = _w._sydConvConfig) === null || kr === void 0 ? void 0 : kr.enableSpeechEarconOnInput, !1)
          , lb = t((dr = _w._sydConvConfig) === null || dr === void 0 ? void 0 : dr.enableTTSOnSuggestionAfterVoice, !1)
          , ab = t((nu = _w._sydConvConfig) === null || nu === void 0 ? void 0 : nu.enableSimpleVoiceInput, !1)
          , vb = t((iu = _w._sydConvConfig) === null || iu === void 0 ? void 0 : iu.enableSpeechDictationMode, !1)
          , yb = t((ru = _w._sydConvConfig) === null || ru === void 0 ? void 0 : ru.enableAudioPreloadLimit, !1)
          , pb = t((uu = _w._sydConvConfig) === null || uu === void 0 ? void 0 : uu.enableSpeechFateTTSStop, !1)
          , wb = t((lu = _w._sydConvConfig) === null || lu === void 0 ? void 0 : lu.enableSpeechGetUserMedia, !1)
          , kit = t((au = _w._sydConvConfig) === null || au === void 0 ? void 0 : au.enableSydCLOC, !1)
          , dit = t((yu = _w._sydConvConfig) === null || yu === void 0 ? void 0 : yu.enableCdxFeats, !1)
          , bb = t((wu = _w._sydConvConfig) === null || wu === void 0 ? void 0 : wu.cdxFeats, "")
          , git = t((bu = _w._sydConvConfig) === null || bu === void 0 ? void 0 : bu.disableSecureUpdateConversation, !1)
          , nrt = t((ku = _w._sydConvConfig) === null || ku === void 0 ? void 0 : ku.disableSecureSendFeedback, !1)
          , trt = t((du = _w._sydConvConfig) === null || du === void 0 ? void 0 : du.enableFdbkFinalized, !1)
          , irt = t((gu = _w._sydConvConfig) === null || gu === void 0 ? void 0 : gu.enableFileUpload, !1)
          , rrt = t((nf = _w._sydConvConfig) === null || nf === void 0 ? void 0 : nf.enableFileUploadPrivacyMessage, !1)
          , urt = t((tf = _w._sydConvConfig) === null || tf === void 0 ? void 0 : tf.enableMobileFileUpload, !1)
          , frt = t((rf = _w._sydConvConfig) === null || rf === void 0 ? void 0 : rf.enableFileUploadWebPageUrlInput, !1)
          , ert = t((ff = _w._sydConvConfig) === null || ff === void 0 ? void 0 : ff.enableFileUploadContextInThreads, !1)
          , ort = t((ef = _w._sydConvConfig) === null || ef === void 0 ? void 0 : ef.enableSemSerpShare, !1)
          , srt = t((sf = _w._sydConvConfig) === null || sf === void 0 ? void 0 : sf.enableCreatorShare, !1)
          , hrt = t((hf = _w._sydConvConfig) === null || hf === void 0 ? void 0 : hf.enableShareModalDialog, !1)
          , kb = t((cf = _w._sydConvConfig) === null || cf === void 0 ? void 0 : cf.enableSydImageCreate, !1)
          , crt = t((lf = _w._sydConvConfig) === null || lf === void 0 ? void 0 : lf.enableSecureConnect, !0)
          , db = t((af = _w._sydConvConfig) === null || af === void 0 ? void 0 : af.enableInstanceAffinity, !1)
          , lrt = t((vf = _w._sydConvConfig) === null || vf === void 0 ? void 0 : vf.enableShortOpt, !1)
          , art = t((yf = _w._sydConvConfig) === null || yf === void 0 ? void 0 : yf.enablePuidOvr, !1)
          , gb = t((pf = _w._sydConvConfig) === null || pf === void 0 ? void 0 : pf.enablePerfTrk, !1)
          , vrt = t((wf = _w._sydConvConfig) === null || wf === void 0 ? void 0 : wf.enableEmbeddedPerf, !1)
          , nk = t((bf = _w._sydConvConfig) === null || bf === void 0 ? void 0 : bf.enableSinglePerfEventPerMessage, !1)
          , yrt = t((kf = _w._sydConvConfig) === null || kf === void 0 ? void 0 : kf.enableE2EPerf, !1)
          , tk = t((df = _w._sydConvConfig) === null || df === void 0 ? void 0 : df.enableUnauthRedir, !1)
          , ik = t((gf = _w._sydConvConfig) === null || gf === void 0 ? void 0 : gf.enableActionBarV2, !1)
          , rk = t((ne = _w._sydConvConfig) === null || ne === void 0 ? void 0 : ne.enableSpeechDictationBridgeMode, !1)
          , uk = t((te = _w._sydConvConfig) === null || te === void 0 ? void 0 : te.enableSpeculativeMode, !1)
          , prt = t((ie = _w._sydConvConfig) === null || ie === void 0 ? void 0 : ie.bypassMicPermissionsQuery, !1)
          , fk = t((re = _w._sydConvConfig) === null || re === void 0 ? void 0 : re.enableSpeechErrorHandling, !1)
          , ek = t((ue = _w._sydConvConfig) === null || ue === void 0 ? void 0 : ue.enableSpeechAriaLabel, !1)
          , ok = t((fe = _w._sydConvConfig) === null || fe === void 0 ? void 0 : fe.enableSpeechReopenMic, !1)
          , sk = t((ee = _w._sydConvConfig) === null || ee === void 0 ? void 0 : ee.enableSpeechTTSLatencyLogging, !1)
          , hk = t((oe = _w._sydConvConfig) === null || oe === void 0 ? void 0 : oe.enableSpeechInputWhileRequestIsPending, !1)
          , ck = t((se = _w._sydConvConfig) === null || se === void 0 ? void 0 : se.enableSpeechIconDarkTheme, !1)
          , wrt = t((he = _w._sydConvConfig) === null || he === void 0 ? void 0 : he.enableNewTopicAutoExpand, !1)
          , brt = t((ce = _w._sydConvConfig) === null || ce === void 0 ? void 0 : ce.enableMaxTurnsPerConversation, !1)
          , krt = t((le = _w._sydConvConfig) === null || le === void 0 ? void 0 : le.enableAmberTurnPerConversation, !1)
          , drt = t((ae = _w._sydConvConfig) === null || ae === void 0 ? void 0 : ae.maxMessageLength, ir)
          , iw = t((ve = _w._sydConvConfig) === null || ve === void 0 ? void 0 : ve.isAccountLinkedWithActiveAAD, !1)
          , grt = t((ye = _w._sydConvConfig) === null || ye === void 0 ? void 0 : ye.enableThreadsAADMSASwitch, !1)
          , lk = t((pe = _w._sydConvConfig) === null || pe === void 0 ? void 0 : pe.enableTelemetryPrivacy, !1)
          , nut = t((we = _w._sydConvConfig) === null || we === void 0 ? void 0 : we.enableSydSafeSearch, !1)
          , tut = t((be = _w._sydConvConfig) === null || be === void 0 ? void 0 : be.enableFeedbackClientSideScreenshot, !1)
          , iut = t((ke = _w._sydConvConfig) === null || ke === void 0 ? void 0 : ke.syntheticStreamSpeed, or)
          , rut = t((de = _w._sydConvConfig) === null || de === void 0 ? void 0 : de.disableShareWithNoMargin, !1)
          , uut = t((ge = _w._sydConvConfig) === null || ge === void 0 ? void 0 : ge.enableMobileShareAnchorBottom, !1)
          , fut = t((no = _w._sydConvConfig) === null || no === void 0 ? void 0 : no.enableCreativeLandingPage, !1)
          , eut = t((to = _w._sydConvConfig) === null || to === void 0 ? void 0 : to.enableServerLogMerging, !1)
          , ak = t((io = _w._sydConvConfig) === null || io === void 0 ? void 0 : io.enableOneClickCopy, !1)
          , vk = t((ro = _w._sydConvConfig) === null || ro === void 0 ? void 0 : ro.enableReorderCopiedTextReferences, !1)
          , yk = t((uo = _w._sydConvConfig) === null || uo === void 0 ? void 0 : uo.enableCodeCopy, !1)
          , pk = t((fo = _w._sydConvConfig) === null || fo === void 0 ? void 0 : fo.enableCodeBar, !1)
          , wk = t((eo = _w._sydConvConfig) === null || eo === void 0 ? void 0 : eo.enableUserMessageCopy, !1)
          , bk = t((oo = _w._sydConvConfig) === null || oo === void 0 ? void 0 : oo.enableRichTextPaste, !1)
          , kk = t((so = _w._sydConvConfig) === null || so === void 0 ? void 0 : so.enablePasteMarkdownTable, !1)
          , dk = t((ho = _w._sydConvConfig) === null || ho === void 0 ? void 0 : ho.enablePasteMath, !1)
          , out = t((co = _w._sydConvConfig) === null || co === void 0 ? void 0 : co.enableSkipContentOriginCheck, !1)
          , sut = t((lo = _w._sydConvConfig) === null || lo === void 0 ? void 0 : lo.enableMobileOneClickShare, !1)
          , hut = t((ao = _w._sydConvConfig) === null || ao === void 0 ? void 0 : ao.enableMobileOneClickShareV2, !1)
          , cut = t((vo = _w._sydConvConfig) === null || vo === void 0 ? void 0 : vo.enableFeedbackInstrumentation, !1)
          , lut = t((yo = _w._sydConvConfig) === null || yo === void 0 ? void 0 : yo.enableSuggEndFix, !1)
          , aut = t((po = _w._sydConvConfig) === null || po === void 0 ? void 0 : po.enableAutoRecoverFromInvalidSession, !1)
          , vut = t((wo = _w._sydConvConfig) === null || wo === void 0 ? void 0 : wo.enableAutoRecoverFromInvalidSessionForFirstTurn, !1)
          , yut = t((bo = _w._sydConvConfig) === null || bo === void 0 ? void 0 : bo.enableActionBarIMEFix, !1)
          , put = t((ko = _w._sydConvConfig) === null || ko === void 0 ? void 0 : ko.enableGhostTrailingSpaceByLanguage, !1)
          , gk = t((go = _w._sydConvConfig) === null || go === void 0 ? void 0 : go.enableInlineFeedback, !1)
          , nd = t((ns = _w._sydConvConfig) === null || ns === void 0 ? void 0 : ns.enableInlineFeedbackV2, !1)
          , td = t((ts = _w._sydConvConfig) === null || ts === void 0 ? void 0 : ts.enableInlineFeedbackV21, !1)
          , id = t((is = _w._sydConvConfig) === null || is === void 0 ? void 0 : is.enableSerpFeedback, !1)
          , rd = t((rs = _w._sydConvConfig) === null || rs === void 0 ? void 0 : rs.enableMessageExport, !1)
          , ud = t((us = _w._sydConvConfig) === null || us === void 0 ? void 0 : us.enableMessageExportWithPlainText, !1)
          , wut = t((fs = _w._sydConvConfig) === null || fs === void 0 ? void 0 : fs.enableMessageExportOnlineWord, !1)
          , but = t((es = _w._sydConvConfig) === null || es === void 0 ? void 0 : es.enableMessageExportOnlineExcel, !1)
          , fd = t((os = _w._sydConvConfig) === null || os === void 0 ? void 0 : os.enableMessageExportLocalExcel, !1)
          , ed = t((ss = _w._sydConvConfig) === null || ss === void 0 ? void 0 : ss.enableTableBarFlatActions, !1)
          , kut = t((hs = _w._sydConvConfig) === null || hs === void 0 ? void 0 : hs.enableThreadExportOnlineWord, !1)
          , od = t((cs = _w._sydConvConfig) === null || cs === void 0 ? void 0 : cs.enableMessageExportV2, !1)
          , sd = t((ls = _w._sydConvConfig) === null || ls === void 0 ? void 0 : ls.enableBotMessageActionsBar, !1)
          , hd = t((as = _w._sydConvConfig) === null || as === void 0 ? void 0 : as.enableShorterToastDuration, !1)
          , cd = t((vs = _w._sydConvConfig) === null || vs === void 0 ? void 0 : vs.enableDirectlyOpenExportOnlineLink, !1)
          , ld = t((ys = _w._sydConvConfig) === null || ys === void 0 ? void 0 : ys.enableLoginHintForSSO, !1)
          , ad = t((ps = _w._sydConvConfig) === null || ps === void 0 ? void 0 : ps.enableLimitToMsaOnlineExport, !1)
          , vd = t((ws = _w._sydConvConfig) === null || ws === void 0 ? void 0 : ws.enableLimitToAadOnlineExport, !1)
          , yd = t((bs = _w._sydConvConfig) === null || bs === void 0 ? void 0 : bs.enableTonePreview, !1)
          , pd = t((ks = _w._sydConvConfig) === null || ks === void 0 ? void 0 : ks.enableMSAuth1stPartyApp, !1)
          , wd = t((ds = _w._sydConvConfig) === null || ds === void 0 ? void 0 : ds.enableAdsRedirectLinkForTextMessage, !1)
          , bd = t((gs = _w._sydConvConfig) === null || gs === void 0 ? void 0 : gs.enableCopyHtml, !1)
          , kd = t((nh = _w._sydConvConfig) === null || nh === void 0 ? void 0 : nh.enableCopyHtmlWithHighlightedCode, !1)
          , dd = t((th = _w._sydConvConfig) === null || th === void 0 ? void 0 : th.enableExportPdfWithAnswerScreenshot, !1)
          , gd = t((ih = _w._sydConvConfig) === null || ih === void 0 ? void 0 : ih.enableExportDocxWithAnswerScreenshot, !1)
          , ng = t((rh = _w._sydConvConfig) === null || rh === void 0 ? void 0 : rh.enableLibrariesSplitImport, !1)
          , tg = t((uh = _w._sydConvConfig) === null || uh === void 0 ? void 0 : uh.enableFlatActionBar, !1)
          , ig = t((fh = _w._sydConvConfig) === null || fh === void 0 ? void 0 : fh.codexMUIDUser, !1)
          , rg = t((eh = _w._sydConvConfig) === null || eh === void 0 ? void 0 : eh.enableFixCodeXAsBug, !1)
          , ug = t((oh = _w._sydConvConfig) === null || oh === void 0 ? void 0 : oh.enableChatIconClickable, !1)
          , fg = t((sh = _w._sydConvConfig) === null || sh === void 0 ? void 0 : sh.enableChatQueryClickable, !1)
          , eg = t((hh = _w._sydConvConfig) === null || hh === void 0 ? void 0 : hh.enableChatQueryClickableV2, !1)
          , og = t((ch = _w._sydConvConfig) === null || ch === void 0 ? void 0 : ch.enableChatQueryClickableV3, !1)
          , sg = t((lh = _w._sydConvConfig) === null || lh === void 0 ? void 0 : lh.enableChatQueryClickableV4, !1)
          , hg = t((ah = _w._sydConvConfig) === null || ah === void 0 ? void 0 : ah.enableShareQuestionWithResponse, !1)
          , cg = t((vh = _w._sydConvConfig) === null || vh === void 0 ? void 0 : vh.enableShareQuestionTitlePrefix, !1)
          , lg = t((yh = _w._sydConvConfig) === null || yh === void 0 ? void 0 : yh.enableShareInlineAdsIframe, !1)
          , ag = t((ph = _w._sydConvConfig) === null || ph === void 0 ? void 0 : ph.enableSharePreview, !1)
          , vg = t((wh = _w._sydConvConfig) === null || wh === void 0 ? void 0 : wh.enableSharedHoverCitations, !1)
          , yg = t((bh = _w._sydConvConfig) === null || bh === void 0 ? void 0 : bh.enableShowShareButtonWithSecurityCheck, !1)
          , pg = t((kh = _w._sydConvConfig) === null || kh === void 0 ? void 0 : kh.enableScreenshotIgnoreOnCibSerp, !1)
          , wg = t((dh = _w._sydConvConfig) === null || dh === void 0 ? void 0 : dh.enableStandaloneUtility, !1);
        n.enableCreatorSendQueryWhenShowConvQuery = t((gh = _w._sydConvConfig) === null || gh === void 0 ? void 0 : gh.enableCreatorSendQueryWhenShowConvQuery, !0);
        n.padding2TMobile = t((nc = _w._sydConvConfig) === null || nc === void 0 ? void 0 : nc.padding2TMobile, !0);
        gt = t((tc = _w._sydConvConfig) === null || tc === void 0 ? void 0 : tc.enableSetConvQueryFlag, !1);
        g = t((ic = _w._sydConvTranslation) === null || ic === void 0 ? void 0 : ic.pageTitleText, "");
        nt = document.title || "";
        ft = nw ? pr : bt;
        n.enableConvModeSwitchAjax = t((rc = _w._sydConvConfig) === null || rc === void 0 ? void 0 : rc.enableConvModeSwitchAjax, !1);
        var fst = t((uc = _w._sydConvConfig) === null || uc === void 0 ? void 0 : uc.enableCodexWin, !1)
          , est = t((fc = _w._sydConvConfig) === null || fc === void 0 ? void 0 : fc.enableCodexWinBotMessage, !1)
          , ost = t((ec = _w._sydConvConfig) === null || ec === void 0 ? void 0 : ec.codexWinCurrentTurn, 0)
          , dut = t((oc = _w._sydConvConfig) === null || oc === void 0 ? void 0 : oc.enableGetChats, !1)
          , bg = t((sc = _w._sydConvConfig) === null || sc === void 0 ? void 0 : sc.enableNewTables, !1)
          , gut = t((hc = _w._sydConvConfig) === null || hc === void 0 ? void 0 : hc.codexTableVersion, 1)
          , kg = t((cc = _w._sydConvConfig) === null || cc === void 0 ? void 0 : cc.enableBufferMessage, !1)
          , dg = t((lc = _w._sydConvConfig) === null || lc === void 0 ? void 0 : lc.enableBufferDots, !1)
          , gg = t((ac = _w._sydConvConfig) === null || ac === void 0 ? void 0 : ac.enableOptimizedStreaming, !1)
          , nft = t((vc = _w._sydConvConfig) === null || vc === void 0 ? void 0 : vc.enableExportDocxWithFormat, !1)
          , tft = t((yc = _w._sydConvConfig) === null || yc === void 0 ? void 0 : yc.enableDisposeOrphanedHosts, !1)
          , ift = t((pc = _w._sydConvConfig) === null || pc === void 0 ? void 0 : pc.enablePreserveTextFormat, !1)
          , rft = t((wc = _w._sydConvConfig) === null || wc === void 0 ? void 0 : wc.enableHoverCardOnLearnMorePills, !1)
          , uft = t((bc = _w._sydConvConfig) === null || bc === void 0 ? void 0 : bc.enableWowCDSSurvey, !1)
          , nn = t((kc = _w._sydConvConfig) === null || kc === void 0 ? void 0 : kc.enableSydBeacon, !1)
          , fft = t((dc = _w._sydConvConfig) === null || dc === void 0 ? void 0 : dc.enableShareOnHostMessage, !1)
          , eft = t((gc = _w._sydConvConfig) === null || gc === void 0 ? void 0 : gc.disablePassBotGreetingInContext, !1)
          , tn = t((nl = _w._sydConvConfig) === null || nl === void 0 ? void 0 : nl.enableThreadContextMenu, !1)
          , oft = t((tl = _w._sydConvConfig) === null || tl === void 0 ? void 0 : tl.enableCloudflareCaptcha, !1)
          , sft = t((il = _w._sydConvConfig) === null || il === void 0 ? void 0 : il.enableInvisibleCaptchaChallenge, !1)
          , hft = t((rl = _w._sydConvConfig) === null || rl === void 0 ? void 0 : rl.enableResizeObserverWithAnimationFrame, !1)
          , cft = t((ul = _w._sydConvConfig) === null || ul === void 0 ? void 0 : ul.enableKnowledgeCardImage, !1)
          , rn = t((fl = _w._sydConvConfig) === null || fl === void 0 ? void 0 : fl.enableStartPromotion, !1)
          , lft = t((el = _w._sydConvConfig) === null || el === void 0 ? void 0 : el.enableCopyButtonInstrumented, !1)
          , aft = t((ol = _w._sydConvConfig) === null || ol === void 0 ? void 0 : ol.enableThreadSync, !1)
          , vft = t((sl = _w._sydConvConfig) === null || sl === void 0 ? void 0 : sl.enableMobileKnowledgeCardOverlay, !1)
          , yft = t((hl = _w._sydConvConfig) === null || hl === void 0 ? void 0 : hl.enableCibOverlayForKnowledgeCard, !1)
          , pft = t((cl = _w._sydConvConfig) === null || cl === void 0 ? void 0 : cl.enableFlux3P, !1)
          , wft = t((ll = _w._sydConvConfig) === null || ll === void 0 ? void 0 : ll.enablePluginsByTone, !1)
          , bft = t((al = _w._sydConvConfig) === null || al === void 0 ? void 0 : al.enableCodexTesthooks, !1)
          , un = t((vl = _w._sydConvConfig) === null || vl === void 0 ? void 0 : vl.enableTestTurnLimit, !1)
          , kft = t((yl = _w._sydConvConfig) === null || yl === void 0 ? void 0 : yl.enableTestDailyLimit, !1)
          , sst = t((pl = _w._sydConvConfig) === null || pl === void 0 ? void 0 : pl.flux3PPluginList, "")
          , hst = t((wl = _w._sydConvConfig) === null || wl === void 0 ? void 0 : wl.enableTestCodexTurnLimit, !1)
          , cst = t((bl = _w._sydConvConfig) === null || bl === void 0 ? void 0 : bl.enableTestCodexDailylimit, !1)
          , fn = t((kl = _w._sydConvConfig) === null || kl === void 0 ? void 0 : kl.disableWelcomeScreen, !1)
          , dft = t((dl = _w._sydConvConfig) === null || dl === void 0 ? void 0 : dl.enableWelcomeScreenV2, !1)
          , gft = t((gl = _w._sydConvConfig) === null || gl === void 0 ? void 0 : gl.enableChatFRE, !1)
          , en = t((na = _w._sydConvConfig) === null || na === void 0 ? void 0 : na.enableWebPageContextMessages, !1)
          , net = t((ta = _w._sydConvConfig) === null || ta === void 0 ? void 0 : ta.enableCodexPluginb, !1)
          , tet = t((ia = _w._sydConvConfig) === null || ia === void 0 ? void 0 : ia.enableNewAutoSuggestEndPoint, !1)
          , iet = t((ra = _w._sydConvConfig) === null || ra === void 0 ? void 0 : ra.enable2TQueryConfigsOnSerpLoad, !1)
          , on = t((ua = _w._sydConvConfig) === null || ua === void 0 ? void 0 : ua.enableSydStaticAdsLink, !1)
          , ret = t((fa = _w._sydConvConfig) === null || fa === void 0 ? void 0 : fa.isMobileHost, !1)
          , uet = t((ea = _w._sydConvConfig) === null || ea === void 0 ? void 0 : ea.enableRenderCardRequestIMSearchParams, !1)
          , sn = t((oa = _w._sydConvConfig) === null || oa === void 0 ? void 0 : oa.enableMessagePrivacy, !1)
          , hn = t((sa = _w._sydConvConfig) === null || sa === void 0 ? void 0 : sa.enableCloseShareOnClickOutside, !1)
          , fet = t((ha = _w._sydConvConfig) === null || ha === void 0 ? void 0 : ha.enableTypingIndicatorForSerpSlotCreator, !1)
          , eet = t((ca = _w._sydConvConfig) === null || ca === void 0 ? void 0 : ca.enableOnProcessingStartEvent, !1)
          , oet = t((la = _w._sydConvConfig) === null || la === void 0 ? void 0 : la.enableOnProcessingCompleteEvent, !1)
          , cn = t((aa = _w._sydConvConfig) === null || aa === void 0 ? void 0 : aa.enableUpdateProfile, !1)
          , set = t((va = _w._sydConvConfig) === null || va === void 0 ? void 0 : va.enableTypewriter, !1)
          , het = t((ya = _w._sydConvConfig) === null || ya === void 0 ? void 0 : ya.enableConfirmPromptSingleDeleteThread, !1)
          , cet = !t((pa = _w._sydConvConfig) === null || pa === void 0 ? void 0 : pa.disableTooltip, !1)
          , aet = t((wa = _w._sydConvConfig) === null || wa === void 0 ? void 0 : wa.enableNewlineTooltip, !1)
          , vet = t((ba = _w._sydConvConfig) === null || ba === void 0 ? void 0 : ba.enableDeferredImageCreatorCard, !1)
          , yet = t((ka = _w._sydConvConfig) === null || ka === void 0 ? void 0 : ka.enableSaharaStream, !1)
          , pet = t((da = _w._sydConvConfig) === null || da === void 0 ? void 0 : da.enableFaviconsV2, !1)
          , wet = t((ga = _w._sydConvConfig) === null || ga === void 0 ? void 0 : ga.enableFaviconsAutoRefresh, !1)
          , bet = t((nv = _w._sydConvConfig) === null || nv === void 0 ? void 0 : nv.enableUserIpAddress, !1)
          , ket = t((tv = _w._sydConvConfig) === null || tv === void 0 ? void 0 : tv.enableLooseMessageDensity, !1)
          , ln = t((iv = _w._sydConvConfig) === null || iv === void 0 ? void 0 : iv.enableSuggestionItemEnterAnimation, !1)
          , an = t((rv = _w._sydConvConfig) === null || rv === void 0 ? void 0 : rv.enableKatexScroll, !1)
          , det = t((uv = _w._sydConvConfig) === null || uv === void 0 ? void 0 : uv.enableLinkPreviewCarousel, !1)
          , get = t((fv = _w._sydConvConfig) === null || fv === void 0 ? void 0 : fv.useFakeDataForLinkPreviewCarousel, !1)
          , vn = t((ev = _w._sydConvConfig) === null || ev === void 0 ? void 0 : ev.enablePageHeaderOverlapClamping, !1)
          , not = t((ov = _w._sydConvConfig) === null || ov === void 0 ? void 0 : ov.enableThreadShowPlugins, !1)
          , tot = t((sv = _w._sydConvConfig) === null || sv === void 0 ? void 0 : sv.enableThreadsTestData, !1)
          , iot = t((hv = _w._sydConvConfig) === null || hv === void 0 ? void 0 : hv.enableUpdateUserMessageId, !1)
          , rot = t((cv = _w._sydConvConfig) === null || cv === void 0 ? void 0 : cv.enableUserMessageIdConsistency, !1)
          , uot = t((lv = _w._sydConvConfig) === null || lv === void 0 ? void 0 : lv.enablePluginPanelFre, !1)
          , fot = t((av = _w._sydConvConfig) === null || av === void 0 ? void 0 : av.enablePersistentInputText, !1)
          , yn = t((vv = _w._sydConvConfig) === null || vv === void 0 ? void 0 : vv.enableEmptyThreadTime, !1)
          , eot = t((yv = _w._sydConvConfig) === null || yv === void 0 ? void 0 : yv.enableStagingCreateTesting, !1)
          , oot = t((pv = _w._sydConvConfig) === null || pv === void 0 ? void 0 : pv.enableRenderIframeCardRequest, !1)
          , pn = t((wv = _w._sydConvConfig) === null || wv === void 0 ? void 0 : wv.enableBackendExportService, !1)
          , sot = t((bv = _w._sydConvConfig) === null || bv === void 0 ? void 0 : bv.enableFastChatLoadAnimation, !1)
          , hot = t((kv = _w._sydConvConfig) === null || kv === void 0 ? void 0 : kv.enableShareInThreadsHeader, !0)
          , lst = t((dv = _w._sydConvConfig) === null || dv === void 0 ? void 0 : dv.enableExternalSpeechIconAnimation, !1)
          , cot = t((gv = _w._sydConvConfig) === null || gv === void 0 ? void 0 : gv.enableNewConversationActivate, !1)
          , wn = t((ny = _w._sydConvConfig) === null || ny === void 0 ? void 0 : ny.enableInPrivateUserMode, !1)
          , lot = t((ty = _w._sydConvConfig) === null || ty === void 0 ? void 0 : ty.enableMobileFirstClickShare, !1)
          , bn = t((iy = _w._sydConvConfig) === null || iy === void 0 ? void 0 : iy.enableSydneyGetMessagesHub, !1)
          , aot = t((ry = _w._sydConvConfig) === null || ry === void 0 ? void 0 : ry.enableInlinePersonalizationConsent, !1)
          , vot = t((uy = _w._sydConvConfig) === null || uy === void 0 ? void 0 : uy.personalizationInlineConsentTurn, tr)
          , yot = t((fy = _w._sydConvConfig) === null || fy === void 0 ? void 0 : fy.enableEduStarterMessage, !1)
          , pot = t((ey = _w._sydConvConfig) === null || ey === void 0 ? void 0 : ey.enableEduStarterMessageAnimation, !1)
          , kn = t((oy = _w._sydConvConfig) === null || oy === void 0 ? void 0 : oy.enableVersionedApiCalls, !1)
          , wot = t((sy = _w._sydConvConfig) === null || sy === void 0 ? void 0 : sy.enablePaywallTelemetryFix, !1)
          , bot = t((hy = _w._sydConvConfig) === null || hy === void 0 ? void 0 : hy.enableNoBingSearchResponseBackground, !1)
          , kot = t((cy = _w._sydConvConfig) === null || cy === void 0 ? void 0 : cy.enableNoSearchPluginMetaMessage, !1)
          , dn = t((ly = _w._sydConvConfig) === null || ly === void 0 ? void 0 : ly.enableOpenEdgeNotification, !1)
          , gn = t((ay = _w._sydConvConfig) === null || ay === void 0 ? void 0 : ay.enableSuppressSigninMessage, !1)
          , ntt = t((vy = _w._sydConvConfig) === null || vy === void 0 ? void 0 : vy.enableExportPdfWithRichFormat, !1)
          , ttt = t((yy = _w._sydConvConfig) === null || yy === void 0 ? void 0 : yy.enableAttributionImages, !1)
          , itt = t((py = _w._sydConvConfig) === null || py === void 0 ? void 0 : py.enableAttributionImagesWhenAdsPresent, !1)
          , rtt = t((wy = _w._sydConvConfig) === null || wy === void 0 ? void 0 : wy.enableAttributionImagesCarousel, !1)
          , utt = t((by = _w._sydConvConfig) === null || by === void 0 ? void 0 : by.enableAttributionImagesClickthrough, !1)
          , dot = t((ky = _w._sydConvConfig) === null || ky === void 0 ? void 0 : ky.enableThreadsConsent, !1)
          , ftt = t((dy = _w._sydConvConfig) === null || dy === void 0 ? void 0 : dy.enableDeleteSingleConversationMemory, !1)
          , got = t((gy = _w._sydConvConfig) === null || gy === void 0 ? void 0 : gy.enableThreadsTopRightButton, !1)
          , nst = t((np = _w._sydConvConfig) === null || np === void 0 ? void 0 : np.enablePluginsTopRightButton, !1)
          , ett = t((tp = _w._sydConvConfig) === null || tp === void 0 ? void 0 : tp.enableOneDs, !1)
          , ott = t((ip = _w._sydConvConfig) === null || ip === void 0 ? void 0 : ip.enableStableAutosuggestion, !1)
          , tst = t((rp = _w._sydConvConfig) === null || rp === void 0 ? void 0 : rp.enableSydneyFSCTranslationSrc, !1)
          , ist = t(_w._sydConvConfig.enableBceMuidConsent, !1)
          , stt = t((up = _w._sydConvConfig) === null || up === void 0 ? void 0 : up.enableThreadContextMenuV2, !1)
          , htt = t((fp = _w._sydConvConfig) === null || fp === void 0 ? void 0 : fp.enableSearchBoxAutoFocus, !1)
          , ctt = t((ep = _w._sydConvConfig) === null || ep === void 0 ? void 0 : ep.enableUserMessageRewriteInsteadOfCopy, !1)
          , ltt = t((op = _w._sydConvConfig) === null || op === void 0 ? void 0 : op.enableUserMessageRewriteAndCopy, !1)
          , att = t((sp = _w._sydConvConfig) === null || sp === void 0 ? void 0 : sp.enablePrivateThreadDefaultTitle, !1)
          , vtt = t((hp = _w._sydConvConfig) === null || hp === void 0 ? void 0 : hp.enablePromptHandling, !1)
          , rst = t((cp = _w._sydConvConfig) === null || cp === void 0 ? void 0 : cp.enablePluginDevTools, !1);
        if (wn && (CIB.config.features.enableInPrivateUserMode = wn),
        sj_evt.bind("showSydFSC", ri),
        uft && (CIB.config.features.enableWowCDSSurvey = !0),
        ket && (CIB.config.messaging.messageDensity = "loose"),
        ln && (CIB.config.features.enableSuggestionItemEnterAnimation = ln),
        an && (CIB.config.features.enableKatexScroll = an),
        ytt = _ge("cib-design-tokens"),
        ytt || CIB.activateDesignTokens(),
        r = {},
        vw && (r.country = vw),
        pw && (r.state = pw),
        ww && (r.city = ww),
        kw && (r.zipcode = kw),
        dtt || a ? r.timezoneoffset = -((new Date).getTimezoneOffset() / 60) : dw && (r.timezoneoffset = parseFloat(dw)),
        gw && (r.dma = gw),
        nb && (r.latitude = parseFloat(nb)),
        tb && (r.longitude = parseFloat(tb)),
        yw && (r.countryConfidence = yw),
        bw && (r.cityConfidence = bw),
        a ? (rw = Intl.DateTimeFormat().resolvedOptions().timeZone,
        rw && (r.timezone = rw),
        CIB.config.sydney.message.locationInfo = r) : i && typeof i.locations != "undefined" && typeof i.locations.locationsList != "undefined" ? typeof SydneyFSCLocationHelper != "undefined" && typeof SydneyFSCLocationHelper.writeToLocationHints != "undefined" && SydneyFSCLocationHelper.writeToLocationHints(i) : i && typeof i.cookLoc != "undefined" ? (e = [],
        i.cookLoc.userLoc && (s = ht(i.cookLoc.userLoc, !1),
        s.RegionType = 1,
        s.SourceType = 2,
        s.FDConfidence = 1,
        e.push(s)),
        i.cookLoc.deviceLoc && (v = ht(i.cookLoc.deviceLoc, !1),
        v.RegionType = 2,
        v.SourceType = 5,
        e.push(v)),
        kit && i.cookLoc.coarseLoc && (y = ht(i.cookLoc.coarseLoc, !1),
        y.RegionType = 2,
        y.SourceType = 11,
        e.push(y)),
        f = r,
        f.Center = {
            Latitude: f.latitude,
            Longitude: f.longitude
        },
        delete f.latitude,
        delete f.longitude,
        f.RegionType = 2,
        f.SourceType = 1,
        e.push(f),
        CIB.config.sydney.message.locationHints = e) : CIB.config.sydney.message.locationinfo = r,
        bet && (CIB.config.sydney.message.userIpAddress = gtt),
        CIB.config.sydney.message.timestamp = uf(),
        tst ? sj_evt.bind("sydConvTranslationLoaded", ei, !0) : oi(oit),
        kn && (CIB.config.features.enableVersionedApiCalls = kn),
        dut && (CIB.config.features.enableGetChats = !0),
        aft && (CIB.config.features.enableThreadSync = !0),
        tot && (CIB.config.features.enableThreadsTestData = !0),
        set && (CIB.config.features.enableTypewriterEffectForThreadName = !0),
        yet && (CIB.config.features.enableSaharaSyntheticStreaming = !0),
        pet && (CIB.config.features.enableFaviconV2 = !0),
        wet && (CIB.config.features.enableFaviconAutoRefresh = !0),
        irt && (CIB.config.features.enableFileUpload = !0),
        rrt && (CIB.config.features.enableFileUploadPrivacyMessage = !0),
        urt && (CIB.config.features.enableMobileFileUpload = !0),
        frt && (CIB.config.features.enableFileUploadWebPageUrlInput = !0),
        ert && (CIB.config.features.enableFileUploadContextInThreads = !0),
        pft && (CIB.config.features.enableFlux3P = !0,
        typeof CIB.config.plugin == "undefined" && (CIB.config.plugin = {})),
        aot && (CIB.config.features.enableInlinePersonalizationConsent = !0,
        CIB.config.messaging.personalizationInlineConsentTurn = vot),
        eot && (CIB.config.sydney.hostnamesToBypassSecureConnection = [],
        CIB.manager.chat.api.bing._endpoint = "https://www.staging-bing-int.com"),
        wft && (CIB.config.features.enablePluginsByTone = !0),
        rst && (CIB.config.features.enablePluginDevTools = !0),
        het && (CIB.config.features.enableConfirmPromptForDeleteSingleThread = !0),
        vet && (CIB.config.features.enableDeferredImageCreatorCard = !0),
        net && (CIB.config.features.enableOpenTableBookBlueLink = !0),
        uet && (CIB.config.features.enableRenderCardRequestIMSearchParams = !0),
        det && (CIB.config.features.enableLinkPreviewCarousel = !0),
        get && (CIB.config.features.useFakeDataForLinkPreviewCarousel = !0),
        not && (CIB.config.features.enableThreadShowPlugins = !0),
        iot && (CIB.config.features.enableUpdateUserMessageId = !0),
        rot && (CIB.config.features.enableUserMessageIdConsistency = !0),
        uot && (CIB.config.features.enablePluginPanelFre = !0),
        oot && (CIB.config.features.enableRenderIframeCardRequest = !0),
        yot && (CIB.config.features.enableFreEducationalStarter = !0),
        pot && (CIB.config.features.enableFreEducationalStarterAnimation = !0),
        bot && (CIB.config.features.enableNoBingSearchResponseBackground = !0),
        kot && (CIB.config.features.enableNoSearchPluginMetaMessage = !0),
        uw = new URLSearchParams(_w.location.search),
        fw = uw.get(nr.toLowerCase()),
        (rb != "" || dp && fw) && (o = CIB.config.speech.srOptions ? CIB.config.speech.srOptions : [],
        o = c(o, rb),
        dp && (o = c(o, fw)),
        CIB.config.speech.srOptions = o),
        tw && (CIB.config.speech.srOptions || (CIB.config.speech.srOptions = []),
        CIB.config.speech.srOptions.push("earcon")),
        CIB.config.sydney.isAdultUser = wit ? null : pit,
        bit && (ew = CIB.config.sydney.request.optionsSets.indexOf("enable_debug_commands"),
        ew >= 0 && CIB.config.sydney.request.optionsSets.splice(ew, 1)),
        lit && u(CIB.config.sydney.request.optionsSets, "dv3sugg"),
        ait && u(CIB.config.sydney.request.optionsSets, "gencontentv3"),
        lrt && u(CIB.config.sydney.request.optionsSets, "prodshortv4"),
        nit && ib != "" && (CIB.config.sydney.request.optionsSets = c([], ib)),
        dit) {
            if (bb)
                for (p = bb.split(","),
                w = 0,
                ow = p; w < ow.length; w++)
                    h = ow[w],
                    CIB.config.features[h] = !0;
            if (sw = uw.get(gi.toLowerCase()),
            dp && sw)
                for (p = sw.split(","),
                b = 0,
                hw = p; b < hw.length; b++)
                    h = hw[b],
                    h.indexOf(":") >= 0 && (k = h.split(":"),
                    k.length == 2 && (CIB.config.features[k[0]] = k[1]))
        }
        if (eb && (ptt = eb.split(","),
        CIB.config.sydney.request.sliceIds = ptt),
        CIB.config.bing.isVisualParityRun = rit,
        CIB.config.bing.isMSAAuthenticated = gp,
        CIB.config.bing.userMailId = uit,
        CIB.config.bing.username = fit,
        fb && (CIB.config.sydney.baseUrl = fb),
        ub != "" && (CIB.config.sydney.pathBase = ub),
        hb && (CIB.config.features.enableSpeechExperimental = hb),
        cb && (CIB.config.features.enableSpeechChatDataAfterPhrase = cb),
        tw && (CIB.config.features.enableSpeechEarconOnInput = tw),
        lb && (CIB.config.features.enableTTSOnSuggestionAfterVoice = lb),
        ab && (CIB.config.features.enableSimpleVoiceInput = ab),
        vb && (CIB.config.features.enableSpeechDictationMode = vb),
        yb && (CIB.config.features.enableAudioPreloadLimit = yb),
        pb && (CIB.config.features.enableSpeechFateTTSStop = pb),
        wb && (CIB.config.features.enableSpeechGetUserMedia = wb),
        fk && (CIB.config.features.enableSpeechErrorHandling = fk),
        sk && (CIB.config.features.enableSpeechTTSLatencyLogging = sk),
        hk && (CIB.config.features.enableSpeechInputWhileRequestIsPending = hk),
        ck && (CIB.config.features.enableSpeechIconDarkTheme = ck),
        ek && (CIB.config.features.enableSpeechAriaLabel = ek),
        ok && (CIB.config.features.enableSpeechReopenMic = ok),
        iit && (CIB.config.speech.textToSpeechProvider = SydneySuperAppConnector.getTextToSpeechProvider),
        rg && (CIB.config.features.enableFixCodeXAsBug = rg),
        ott && (CIB.config.features.enableStableAutosuggestion = ott),
        ug && (CIB.config.features.enableChatIconClickable = ug),
        fg && (CIB.config.features.enableChatQueryClickable = fg),
        eg && (CIB.config.features.enableChatQueryClickableV2 = eg),
        og && (CIB.config.features.enableChatQueryClickableV3 = og),
        sg && (CIB.config.features.enableChatQueryClickableV4 = sg),
        hg && (CIB.config.features.enableShareQuestionWithResponse = hg),
        cg && (CIB.config.features.enableShareQuestionTitlePrefix = cg),
        lg && (CIB.config.features.enableShareInlineAdsIframe = lg),
        ag && (CIB.config.features.enableSharePreview = ag),
        vg && (CIB.config.features.enableSharedHoverCitations = vg),
        pg && (CIB.config.features.enableScreenshotIgnoreOnCibSerp = pg),
        wg && (CIB.config.features.enableStandaloneUtility = wg),
        CIB.config.speech.animationProvider = function() {
            var n = location.origin + "/CodexAnimations/animations.json";
            return ktt.getJsonData(n)
        }
        ,
        tit && (CIB.config.features.enableMetaMessages = !1,
        CIB.config.features.enableLearnMore = !1,
        CIB.config.features.enableCitations = !1,
        CIB.config.features.enableWelcomeScreen = !1,
        CIB.config.features.enableShare = !1,
        CIB.config.features.enableStopButton = !1,
        CIB.config.features.enableAnswerCards = !1,
        CIB.config.features.enableAds = !1),
        ob && (CIB.config.sydney.request.traceId = ob),
        CIB.config.features.enableSpeechInput = sit,
        CIB.config.features.enableShare = hit,
        CIB.config.features.enableMessageShareableSignal = cit,
        CIB.config.features.enableAutosuggestMetrics = t((lp = _w._sydConvConfig) === null || lp === void 0 ? void 0 : lp.enableAutosuggestMetrics, !1),
        vit && (CIB.config.features.enableErrorStateNotification = !0,
        CIB.config.features.enableErrorStateToastNotificationResetButton = !0,
        CIB.config.features.enableGhostedAutoSuggest = !0,
        CIB.config.features.enableHoverCardAttributionFavicons = !0),
        aut && (CIB.config.features.enableAutoRecoverFromInvalidSession = !0),
        vut && (CIB.config.features.enableAutoRecoverFromInvalidSessionForFirstTurn = !0),
        yut && (CIB.config.features.enableActionBarIMEFix = !0),
        put && (CIB.config.features.enableGhostTrailingSpaceByLanguage = !0),
        sb && (CIB.config.features.enableErrorInstrumentaton = sb),
        kb && (CIB.config.features.enableSydImageCreate = kb),
        tu(),
        yit && (CIB.config.features.enableAnsCardSfx = !0),
        tut && (CIB.config.features.enableFeedbackClientSideScreenshot = !0),
        (ig || nw && ist) && gr(),
        tft && (CIB.config.features.enableDisposeOrphanedHosts = !0),
        ift && (CIB.config.features.enablePreserveTextFormat = !0),
        rft && (CIB.config.features.enableHoverCardOnLearnMorePills = !0),
        oft && (CIB.config.features.enableCloudflareCaptcha = !0),
        sft && (CIB.config.features.enableInvisibleCaptchaChallenge = !0),
        hft && (CIB.config.features.enableResizeObserverWithAnimationFrame = !0),
        nft && (CIB.config.features.enableExportDocxWithFormat = !0),
        wot && (CIB.config.features.enablePaywallTelemetryFix = !0),
        CIB.config.features.enableSecureUpdateConversation = !git,
        CIB.config.features.enableSecureSendFeedback = !nrt,
        CIB.config.features.enableShareSemSerp = ort,
        CIB.config.features.enableShareCreator = srt,
        CIB.config.features.enableFeedbackOnFinalized = trt,
        CIB.config.features.enableShareWithNoMargin = !rut,
        CIB.config.features.enableMobileShareAnchorBottom = uut,
        CIB.config.features.enableCreativeLandingPage = fut,
        CIB.config.features.enableServerLogMerging = eut,
        CIB.config.features.enableSkipContentOriginValidation = out,
        CIB.config.features.enableMobileOneClickShare = sut,
        CIB.config.features.enableMobileOneClickShareV2 = hut,
        CIB.config.features.enableFeedbackInstrumentation = cut,
        CIB.config.features.enableCopyButtonInstrumented = lft,
        CIB.config.features.enableShareModalDialog = hrt,
        CIB.config.features.enableShareOnHostMessage = fft,
        CIB.config.features.enablePassBotGreetingInContext = !eft,
        CIB.config.features.enableMobileKnowledgeCardOverlay = vft,
        CIB.config.features.enableCibOverlayForKnowledgeCard = yft,
        CIB.config.features.enableNewAutoSuggestEndPoint = tet,
        CIB.config.features.enableNewTopicTooltip = cet,
        CIB.config.features.enableNewlineTooltip = aet,
        CIB.config.features.enableTypingIndicatorForSerpSlotCreator = fet,
        CIB.config.features.enableOnProcessingStartEvent = eet,
        CIB.config.features.enableOnProcessingCompleteEvent = oet,
        CIB.config.messaging.maxMessageLength = drt,
        bft && (CIB.config.testhooks.enableTestTurnLimit = un,
        CIB.config.testhooks.enableTestDailyLimit = kft),
        wtt = t((ap = _w._sydConvConfig) === null || ap === void 0 ? void 0 : ap.enableSydTestCache, !1),
        wtt && (CIB.config.debug.testhook = !0,
        CIB.config.features.enableUserMessageCopy = !1,
        un && ((vp = _w.CIB) === null || vp === void 0 ? void 0 : vp.manager.chat.errorState.onChatErrorStateChange(function(n) {
            n === "conversation-limit" ? sj_evt.fire("ConversationLimit") : n === "conversation-limit-muid-users" && sj_evt.fire("ConversationLimitForMuidUsers")
        }))),
        CIB.config.features.enableThreadsAadMsaSwitch = grt,
        CIB.config.messaging.isAccountLinkedAadUser = iw,
        CIB.config.features.enableFastChatLoadAnimation = sot,
        CIB.config.features.enableShareInThreadsHeader = hot,
        CIB.config.features.enableNewConversationActivate = cot,
        CIB.config.features.enableMobileFirstClickShare = lot,
        CIB.config.features.enableThreadsTopRightButton = got,
        CIB.config.features.enablePluginsTopRightButton = nst,
        (dft || gft) && (CIB.config.features.enableWelcomeScreen = fn,
        CIB.config.features.enableWelcomeScreenItem = !fn),
        cft && (CIB.config.features.enableKnowledgeCardImage = !0,
        CIB.config.features.enableImagesInTextMessages = !0),
        CIB.config.features.secureConversation = crt,
        db && (CIB.config.features.enableAffinityInstance = db,
        u(CIB.config.sydney.request.optionsSets, "machine_affinity")),
        wrt && (CIB.config.features.enableNewTopicAutoExpand = !0),
        krt && (CIB.config.features.enableAmberTurnPerConversation = !0,
        CIB.config.messaging.amberTurnPerConversation = t((yp = _w._sydConvConfig) === null || yp === void 0 ? void 0 : yp.amberTurnPerConversation, 0)),
        brt && (CIB.config.features.enableMaxTurnsPerConversation = !0,
        CIB.config.features.enableMaxTurnsFromBackend = t((pp = _w._sydConvConfig) === null || pp === void 0 ? void 0 : pp.enableMaxTurnsFromBackend, !1),
        CIB.config.messaging.maxTurnsPerConversation = ig ? t((wp = _w._sydConvConfig) === null || wp === void 0 ? void 0 : wp.maxTurnsPerConversationMuidUser, rt) : t((bp = _w._sydConvConfig) === null || bp === void 0 ? void 0 : bp.maxTurnsPerConversation, rt)),
        art && (CIB.config.sydney.request.Participant = {
            Id: "1"
        }),
        gb && (CIB.config.features.enablePerfTracker = gb),
        vrt && (CIB.config.features.enableEmbeddedPerf = !0),
        nk && (CIB.config.features.enableSinglePerfEventPerMessage = nk),
        yrt && (CIB.config.features.enableE2EPerf = !0),
        tk && (CIB.config.features.enableRedirectToLoginUrl = tk),
        ik && (CIB.config.features.enableActionBarV2 = ik),
        rk && (CIB.config.features.enableSpeechDictationBridgeMode = rk),
        uk && (CIB.config.features.enableSpeculativeMode = uk),
        prt && (CIB.config.speech.micPermissionProvider = function() {
            return {}
        }
        ),
        nut && (CIB.config.features.enableSafeSearchSetting = !0,
        vu()),
        CIB.config.messaging.messageBufferWorkerStreamDelayMS = iut,
        lut && (CIB.config.suggestions.baseUrl = "https://laogou717-bing.hf.space"),
        ak && (CIB.config.features.enableOneClickCopy = ak),
        vk && (CIB.config.features.enableReorderCopiedTextReferences = vk),
        yk && (CIB.config.features.enableCodeCopy = yk),
        pk && (CIB.config.features.enableCodeBar = pk),
        wk && (CIB.config.features.enableUserMessageCopy = wk),
        bk && (CIB.config.features.enableRichTextPaste = bk),
        kk && (CIB.config.features.enablePasteMarkdownTable = kk),
        dk && (CIB.config.features.enablePasteMath = dk),
        gk && (CIB.config.features.enableInlineFeedback = gk),
        nd && (CIB.config.features.enableInlineFeedbackV2 = nd),
        td && (CIB.config.features.enableInlineFeedbackV21 = td),
        id && (CIB.config.features.enableSerpFeedback = id),
        rd && (CIB.config.features.enableMessageExport = rd),
        ud && (CIB.config.features.enableMessageExportWithPlainText = ud),
        wut && (CIB.config.features.enableMessageExportOnlineWord = aw()),
        but && (CIB.config.features.enableMessageExportOnlineExcel = aw()),
        yd && (CIB.config.features.enableTonePreview = yd),
        fd && (CIB.config.features.enableMessageExportLocalExcel = fd),
        ed && (CIB.config.features.enableTableBarFlatActions = ed),
        kut && (CIB.config.features.enableThreadExportOnlineWord = aw()),
        od && (CIB.config.features.enableMessageExportV2 = od),
        sd && (CIB.config.features.enableBotMessageActionsBar = sd),
        hd && (CIB.config.features.enableShorterToastDuration = hd),
        cd && (CIB.config.features.enableDirectlyOpenExportOnlineLink = cd),
        ld && (CIB.config.features.enableLoginHintForSSO = ld),
        pd && (CIB.config.features.enableMSAuth1stPartyApp = pd),
        wd && (CIB.config.features.enableAdsRedirectLinkForTextMessage = wd),
        bd && (CIB.config.features.enableCopyHtml = bd),
        kd && (CIB.config.features.enableCopyHtmlWithHighlightedCode = kd),
        dd && (CIB.config.features.enableExportPdfWithAnswerScreenshot = dd),
        gd && (CIB.config.features.enableExportDocxWithAnswerScreenshot = gd),
        ng && (CIB.config.features.enableLibrariesSplitImport = ng),
        tg && (CIB.config.features.enableFlatActionBar = tg),
        nn && (CIB.config.features.enableSydBeacon = nn),
        rn && (CIB.config.features.enableStartPromotion = rn),
        tn && (CIB.config.features.enableThreadContextMenu = tn),
        bg && (CIB.config.features.enableNewTables = bg,
        CIB.config.messaging.tableVersion = gut),
        kg && (CIB.config.features.enableBufferMessage = kg),
        dg && (CIB.config.features.enableBufferDots = dg),
        sn && (CIB.config.features.enableMessagePrivacy = sn),
        hn && (CIB.config.features.enableCloseShareOnClickOutside = hn),
        yg && (CIB.config.features.enableShowShareButtonWithSecurityCheck = yg),
        gg && (CIB.config.features.enableOptimizedStreaming = gg),
        bn && (CIB.config.features.enableSydneyGetMessagesHub = bn),
        cn && (CIB.config.features.enableUpdateProfile = cn),
        gn && (CIB.config.features.enableSuppressSigninMessage = gn),
        dn && (CIB.config.features.enableOpenEdgeNotification = dn),
        ntt && (CIB.config.features.enableExportPdfWithRichFormat = ntt),
        ttt && (CIB.config.features.enableAttributionImages = ttt),
        itt && (CIB.config.features.enableAttributionImagesWhenAdsPresent = itt),
        rtt && (CIB.config.features.enableAttributionImagesCarousel = rtt),
        utt && (CIB.config.features.enableAttributionImagesClickthrough = utt),
        stt && (CIB.config.features.enableThreadContextMenuV2 = stt),
        htt && (CIB.config.features.enableSearchBoxAutoFocus = htt),
        ctt && (CIB.config.features.enableUserMessageRewriteInsteadOfCopy = ctt),
        ltt && (CIB.config.features.enableUserMessageRewriteAndCopy = ltt),
        eu(),
        ou(),
        pn && (CIB.config.features.enableBackendExportService = pn),
        fu(),
        en && (CIB.config.features.enableContextMessage = en),
        l = t((kp = _w._sydConvConfig) === null || kp === void 0 ? void 0 : kp.codexOptionsSetsList, null),
        l && l.length > 0)
            for (d = 0; d < l.length; d++)
                u(CIB.config.sydney.request.optionsSets, l[d].value);
        if (su(),
        iet)
            if (ret)
                try {
                    var btt = ClientObserver ? ClientObserver.getBrowserWidth() : ui()
                      , ust = ClientObserver ? ClientObserver.getBrowserHeight() : fi()
                      , cw = btt - n.padding2TMobile < n.MIN_WIDTH_MOBILE ? n.MIN_WIDTH_MOBILE : btt - n.padding2TMobile
                      , lw = ust;
                    at(cw, lw, on)
                } catch (ast) {
                    Log.Log("CI.Error", "SydneyMobile", "ClientObserver not loaded")
                }
            else
                cw = ClientObserver.getBrowserWidth(),
                lw = ClientObserver.getBrowserHeight(),
                at(cw, lw, on);
        lk && (CIB.config.features.enableTelemetryPrivacy = lk);
        a && typeof MsbSydneyHelper != "undefined" ? MsbSydneyHelper.initCompliantSydneyConfigs() : eit && typeof BcsSydneyHelper != "undefined" ? BcsSydneyHelper.initBingChatForSchoolsSydneyConfigs() : nw && typeof BceSydneyHelper != "undefined" && BceSydneyHelper.initBingChatForEnterpriseSydneyConfigs();
        a || (cu(),
        hu());
        vn && (CIB.config.features.enablePageHeaderOverlapClamping = vn);
        fot && (CIB.config.features.enablePersistentInputText = !0);
        yn && (CIB.config.features.enableEmptyThreadTime = yn);
        CIB.config.features.enableThreadsConsent = dot;
        ftt && (CIB.config.features.enableDeleteSingleConversationMemory = ftt,
        CIB.config.sydney.request.conversationHistoryOptionsSets = ["autosave", "savemem", "uprofupd", "uprofgen"]);
        ett && (CIB.config.features.enable1DSTelemetry = ett);
        att && (CIB.config.features.enablePrivateThreadDefaultTitle = att);
        vtt && (CIB.config.features.enablePromptHandling = vtt);
        pu()
    }
    function ri() {
        var i, r, u, f = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableCodexWin, !1), e = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.codexWinCurrentTurn, 0), o = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableCodexWinBotMessage, !1);
        f && (sj_cook.set(n.userCook, vr, String(e + 1), !0, "/", null),
        o && (n.shouldForceSendBotGreeting = !0));
        sj_evt.unbind("showSydFSC", ri)
    }
    function dr() {
        var n, i = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableDM, !1);
        i && CIB.changeColorScheme && CIB.changeColorScheme(1)
    }
    function ui() {
        var n = Math.round(_d.documentElement.clientWidth || _w.innerWidth);
        return n < 100 && (n = 360),
        n
    }
    function fi() {
        var n = Math.round(_d.documentElement.clientHeight || _w.innerHeight);
        return n < 100 && (n = 636),
        n
    }
    function ei() {
        oi(_w._sydConvTranslation);
        sj_evt.unbind("sydConvTranslationLoaded", ei)
    }
    function oi(n) {
        for (var r, t = 0, i = Object.keys(n); t < i.length; t++)
            r = i[t],
            CIB.config.strings[r] = n[r]
    }
    function gr() {
        var n, i, r;
        CIB.config.features.enableMUIDUserMode = !0;
        CIB.config.features.enableSignInUpsellforMuidUser = !0;
        var u = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableCodexMuidConsentTop, !1)
          , f = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableCodexMuidConsentExplicit, !1)
          , e = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableCodexMuidConsentImplicit, !1)
          , o = u || f || e;
        o && (CIB.config.features.enableCodexMuidConsentTop = u,
        CIB.config.features.enableCodexMuidConsentInlineExplicit = f,
        CIB.config.features.enableCodexMuidConsentInlineImplicit = e,
        CIB.config.sydney.muidUserConsentGiven = si(),
        CIB.onConsentGiven && CIB.onConsentGiven(function() {
            yu()
        }))
    }
    function nu() {
        var i, r, f;
        return __awaiter(this, void 0, void 0, function() {
            var e, h, c, v, y, p, l, o, s, w = this;
            return __generator(this, function(b) {
                switch (b.label) {
                case 0:
                    if (e = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableThreadsConsent, !1),
                    h = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableInlinePersonalizationConsent, !1),
                    c = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.threadsAutoSaveOptionset, "autosave"),
                    CIB.config.features.enableThreadsConsent = e,
                    e && CIB.onAutosaveConsentChanged)
                        CIB.onAutosaveConsentChanged(function(t) {
                            switch (t) {
                            case "Allowed":
                                u(CIB.config.sydney.request.optionsSets, c);
                                sj_cook.set(n.userCook, d, "1", !0, "/", null);
                                break;
                            default:
                                tf(CIB.config.sydney.request.optionsSets, c);
                                sj_cook.set(n.userCook, d, "0", !0, "/", null)
                            }
                            h && !CIB.onPersonalizationConsentChanged && CIB.getConsent && setTimeout(function() {
                                return __awaiter(w, void 0, void 0, function() {
                                    var t;
                                    return __generator(this, function(i) {
                                        switch (i.label) {
                                        case 0:
                                            return [4, CIB.getConsent()];
                                        case 1:
                                            return t = i.sent(),
                                            t.consentSettings.personalization && sj_cook.set(n.userCook, a, t.consentSettings.personalization === "Allowed" ? "1" : "0", !0, "/", null),
                                            [2]
                                        }
                                    })
                                })
                            }, 100)
                        });
                    if (h && CIB.onPersonalizationConsentChanged)
                        CIB.onPersonalizationConsentChanged(function(t) {
                            switch (t) {
                            case "Allowed":
                                sj_cook.set(n.userCook, a, "1", !0, "/", null);
                                break;
                            default:
                                sj_cook.set(n.userCook, a, "0", !0, "/", null)
                            }
                        });
                    return (e && CIB.getConsent && CIB.updateConsent) ? (v = sj_cook.get(n.userCook, kt) === "1",
                    !v) ? [3, 2] : (y = sj_cook.get(n.userCook, d) === "1",
                    p = sj_cook.get(n.userCook, a) === "1",
                    [4, CIB.updateConsent(y ? "Allowed" : "Denied", p ? "Allowed" : "Denied")]) : [3, 5];
                case 1:
                    return b.sent(),
                    sj_cook.set(n.userCook, kt, "0", !0, "/", null),
                    [3, 5];
                case 2:
                    return [4, CIB.getConsent()];
                case 3:
                    return (l = b.sent(),
                    o = l.consentSettings.autoSave,
                    s = l.consentSettings.personalization,
                    !(o && s)) ? [3, 5] : (sj_cook.set(n.userCook, d, o === "Allowed" ? "1" : "0", !0, "/", null),
                    sj_cook.set(n.userCook, a, s === "Allowed" ? "1" : "0", !0, "/", null),
                    [4, CIB.updateConsent(o, s)]);
                case 4:
                    b.sent();
                    b.label = 5;
                case 5:
                    return [2]
                }
            })
        })
    }
    function tu() {
        var n, i, r, u, f, e, o, s, h = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableVisualSearch, !1);
        if (h) {
            var l = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.removeCameraInputForVisualSearch, !1)
              , a = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.dVSOC, !1)
              , v = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.aimgut, !1)
              , c = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.visualSearchSubscriptionId, "")
              , y = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.eifpiab, !1)
              , p = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.emwc, !1)
              , w = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.eufte, !1);
            l && (CIB.config.features.enableCameraInputForVisualSearch = !1);
            a && (CIB.config.features.enableVisualSearchOrientationCheck = !1);
            CIB.config.features.enableVisualSearch = h;
            CIB.config.features.enableImageFilePasteInActionBar = y;
            CIB.config.features.enableUnsupportedFileTypeError = w;
            CIB.config.visualSearch.allowImageOnlyUserTurn = v;
            CIB.config.visualSearch.enableMobileWebCamera = p;
            CIB.config.visualSearch.includeCredentialInXHRRequest = !0;
            !c || (CIB.config.visualSearch.subscriptionId = c);
            iu();
            ru();
            uu()
        }
    }
    function iu() {
        var i, n = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.visualSearchRestrictedTonesList, null);
        (n === null || n === void 0 ? void 0 : n.length) > 0 && CIB.config.visualSearch && (CIB.config.visualSearch.restrictedTones = [],
        n.forEach(function(n) {
            CIB.config.visualSearch.restrictedTones.push(n.value)
        }))
    }
    function ru() {
        var i, n = CIB.config.visualSearch, t;
        ((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.evssid) && n && (t = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get("_SS", "SID"),
        t && (n.query ? n.query.SID = t : n.query = {
            SID: t
        }))
    }
    function uu() {
        var n, i, r, f = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.evscamprd, !1), u = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.vscamprdname, "");
        f && u && ((r = _w.SydneyCameraProviderFactory) === null || r === void 0 ? void 0 : r.create(u))
    }
    function fu() {
        var r, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, rt = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableShareWholeThreadMockUp, !1), ut = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableThreadShareLandingPage, !1), ft = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableShareConversation, !1), et = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableShareThreadWithNoCache, !1), ot = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableWholeThreadPerformanceFix, !1), st = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableShareCurrentThreadMessagesfromAPI, !1), ht = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableThreadShareWithoutRenderCardRequest, !1), ct = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableGetConversationAPIWithSNRProxy, !1), lt = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableGetSharedMessagesAPIWithSNRProxy, !1), at = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableBICHistory, !1), vt = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enable2TScreenshot, !1), yt = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.enable2TScreenshotSnR, !1), it = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.enableThreads, !1), wt = t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.enableThreadsCF, !1), bt = t((g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.enableFlux3P, !1), n, i, pt;
        if (rt && (CIB.config.features.enableShareWholeThreadMockUp = rt),
        ut && (CIB.config.features.enableThreadShareLandingPage = ut),
        ft && (CIB.config.features.enableShareConversation = ft),
        et && (CIB.config.features.enableShareThreadWithNoCache = et),
        ot && (CIB.config.features.enableWholeThreadPerformanceFix = ot),
        st && (CIB.config.features.enableShareCurrentThreadMessagesfromAPI = st),
        ht && (CIB.config.features.enableThreadShareWithoutRenderCardRequest = ht),
        ct && (CIB.config.features.enableGetConversationAPIWithSNRProxy = ct),
        lt && (CIB.config.features.enableGetSharedMessagesAPIWithSNRProxy = lt),
        at && (CIB.config.features.enableBICHistory = at),
        vt && (CIB.config.features.enableAnswerScreenshot = vt),
        yt && (CIB.config.features.enableAnswerScreenshotSnR = yt),
        it) {
            if (CIB.config.features.enableThreads = it,
            n = t((nt = _w._sydThreads) === null || nt === void 0 ? void 0 : nt.threads, null),
            n && n.length > 0)
                for (i = 0; i < n.length; i++)
                    CIB.addThread(n[i]);
            pt = t((tt = _w._sydConvConfig) === null || tt === void 0 ? void 0 : tt.threadsAutoSaveOptionset, "autosave");
            u(CIB.config.sydney.request.optionsSets, pt)
        }
        (it || wt) && e(f.System, "THREADS", "1", "1");
        nu()
    }
    function eu() {
        var n, i, r, u = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableTypingIndicatorAnimation, !1), f = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableTypingIndicatorDemoteStyle, !1), e = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.typingIndicatorAnimationDuration, sr);
        u && (CIB.config.features.enableTypingIndicatorAnimation = !0,
        CIB.config.messaging.typingIndicatorAnimationDuration = e);
        f && (CIB.config.features.enableTypingIndicatorDemoteStyle = !0)
    }
    function ou() {
        var n, i, r, u, f, e, o, h = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableAdSlugsDesktop, !1), c = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableAdSlugsMobile, !1), l = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableSearchQueryForInlineAds, !1), a = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableDevFormOverrideForAds, !1), v = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableFixForInlineAdsSQ, !1), s = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.codexPartnerScenario, ""), y = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableInlineAdsDynamicWidth, !1);
        h && (CIB.config.features.enableAdSlugsDesktop = !0);
        c && (CIB.config.features.enableAdSlugsMobile = !0);
        l && (CIB.config.features.enableSearchQueryForInlineAds = !0);
        a && (CIB.config.features.enableDevFormOverrideForAds = !0);
        v && (CIB.config.features.enableFixForInlineAdsSQ = !0);
        s !== "" && (CIB.config.sydney.request.scenario = s);
        y && (CIB.config.features.enableInlineAdsDynamicWidth = !0)
    }
    function su() {
        var n, i, r, u, f, e, o = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableSydneySapphireUpsellMessageActions, !1), s = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableSydneySapphireUpsellEndOfChat, !1), h = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableSydneySapphireUpsellVisualSearch, !1), c = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.sydneySapphireUpsellTreatment, 0), l = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.isAccountLinkedWithActiveAAD, !1), a = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.sydneyContinueOnPhoneShortenQRCodeUrl, "https://bingapp.microsoft.com/bing?style=newbing");
        o && !l && (CIB.config.features.enableSydSapphireUpsellOnMessageActions = o,
        CIB.config.mobileUpsell.sydSapphireUpsellTreatment = c,
        CIB.config.mobileUpsell.qrCodeBaseUrl = a);
        s && (CIB.config.features.enableSydSapphireUpsellOnEndOfChat = s,
        CIB.config.mobileUpsell.sydSapphireUpsellTreatment = c);
        h && (CIB.config.features.enableSydSapphireUpsellVisualSearch = h)
    }
    function hu() {
        var i, r, u, f, e, o, s, l = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.sydOptionSets, !1), a = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.isSydCorpnet, !1), v = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.noInitOpts, !1), y = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.extraSappOptions, ""), p = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.extraEdgeOptions, ""), w = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.extraBceOptions, ""), k = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.removeDeepleo, !1), d = new URLSearchParams(_w.location.search.toLowerCase()), b = d.get(di.toLowerCase()), n, h;
        (v || l != "" || a && b || y || p || w) && (n = v ? [] : CIB.config.sydney.request.optionsSets,
        n = c(n, l),
        a && (n = c(n, b)),
        n = c(n, y),
        n = c(n, p),
        n = c(n, w),
        k && (h = n.indexOf("deepleo"),
        h >= 0 && n.splice(h, 1)),
        CIB.config.sydney.request.optionsSets = n)
    }
    function cu() {
        var h, c, a, y, p, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, ii = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.toneDefault, r), ri = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableToneCook, !1), ui = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableBalDefault, !1), fi = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.userPriorityLevel, 999), ei = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableUserPriorityLevel, !1), yt = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.enableTonePerf, !1), oi = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.enableCreativeToneIgnoreAndDefaultToBalanced, !1), si = t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.enablePreciseToneIgnoreAndDefaultToBalanced, !1), vt, ni, ti;
        ((g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.shareLoadingUI) && (CIB.config.features.enableShareLoadingUI = !0);
        var n = !ei || fi > 0
          , pt = n ? t((nt = _w._sydConvConfig) === null || nt === void 0 ? void 0 : nt.balTone, "") : "harmonyv3"
          , wt = t((tt = _w._sydConvConfig) === null || tt === void 0 ? void 0 : tt.crtTone, "")
          , bt = t((it = _w._sydConvConfig) === null || it === void 0 ? void 0 : it.prcTone, "")
          , kt = t((rt = _w._sydConvConfig) === null || rt === void 0 ? void 0 : rt.sydBalOpts, "")
          , dt = t((ut = _w._sydConvConfig) === null || ut === void 0 ? void 0 : ut.sydCrtOpts, "")
          , gt = t((ft = _w._sydConvConfig) === null || ft === void 0 ? void 0 : ft.sydPrcOpts, "")
          , f = n ? t((et = _w._sydConvConfig) === null || et === void 0 ? void 0 : et.sydBalExtraOpts, "") : ""
          , e = n ? t((ot = _w._sydConvConfig) === null || ot === void 0 ? void 0 : ot.sydCrtExtraOpts, "") : ""
          , o = n ? t((st = _w._sydConvConfig) === null || st === void 0 ? void 0 : st.sydPrcExtraOpts, "") : "";
        kt && (f += (f !== "" ? "," : "") + kt);
        dt && (e += (e !== "" ? "," : "") + dt);
        gt && (o += (o !== "" ? "," : "") + gt);
        f && (s.Balanced = f.split(","));
        e && (s.Creative = e.split(","));
        o && (s.Precise = o.split(","));
        pt && (i[r] = pt);
        wt && (i[l] = wt);
        bt && (i[w] = bt);
        yt && (CIB.config.features.enableTonePerf = yt);
        CIB.config.features.enableResponseToneSelector = !0;
        CIB.config.features.enablePersistentResponseToneSelector = t((ht = _w._sydConvConfig) === null || ht === void 0 ? void 0 : ht.enablePersistentToneSelector, !1);
        CIB.config.features.enableResponseToneObjects = (lt = (ct = _w._sydConvConfig) === null || ct === void 0 ? void 0 : ct.enableSuppressTones) !== null && lt !== void 0 ? lt : !1;
        CIB.config.features.enableResponseToneColorThemes = !0;
        vt = Object.keys(i);
        ((at = _w._sydConvConfig) === null || at === void 0 ? void 0 : at.enableSuppressTones) ? CIB.config.sydney.responseTones = vt.map(function(n) {
            var t, i, r = (i = (t = _w._sydConvConfig) === null || t === void 0 ? void 0 : t["suppressKnob".concat(n)]) !== null && i !== void 0 ? i : 0;
            return {
                tone: n,
                disabled: r
            }
        }) : CIB.config.sydney.responseToneOptions = vt;
        ni = oi && l === v();
        ti = si && w === v();
        ni || ti ? lu() : ri ? wu(ii) : ui && u(CIB.config.sydney.request.optionsSets, i[r]);
        ku()
    }
    function lu() {
        CIB.config.sydney.request.optionsSets = y(CIB.config.sydney.request.optionsSets, r, CIB.responseTone);
        u(CIB.config.sydney.request.optionsSets, i[r]);
        CIB.responseTone = r;
        h = CIB.responseTone
    }
    function et(n) {
        var u, f, o = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableStreamSyntheticTextResponses, !1), e;
        o && (e = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableStreamSyntheticTextResponsesForAllTones, !1),
        e ? (n === r && i[r] === "galileo" && (CIB.config.messaging.streamSyntheticTextResponses = !0),
        n === l && i[l] === "h3imaginative" && (CIB.config.messaging.streamSyntheticTextResponses = !0),
        n === w && i[w] === "h3precise" && (CIB.config.messaging.streamSyntheticTextResponses = !0)) : CIB.config.messaging.streamSyntheticTextResponses = n === r && i[r] === "galileo" ? !0 : !1)
    }
    function au(n) {
        if (!n)
            return it.Demote;
        for (var t in it)
            if (t.toLowerCase().trim() === n.toLowerCase().trim())
                return it[t];
        return it.Demote
    }
    function vu() {
        var t = sj_cook.get(n.userCook, yr)
          , i = au(t);
        CIB.config.sydney.bingFirstPageAdultFilter = i
    }
    function si() {
        var t = sj_cook.get(n.userCook, ft)
          , i = sj_cook.get(k, k);
        return t === i
    }
    function yu() {
        var t = sj_cook.get(k, k);
        sj_cook.set(n.userCook, ft, t, !0, "/", null);
        e(f.System, "MuidConsentProvided", "MuidUser", "1");
        CIB.config.sydney.muidUserConsentGiven = !0
    }
    function pu() {
        typeof CIB.version != "undefined" && CIB.version && e(f.System, "CIB", "CIBInfo", {
            version: CIB.version.version
        })
    }
    function v() {
        var i, r = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableToneCookExpiry, !1), u = r ? n.toneCook : n.userCook;
        return sj_cook.get(u, n.toneCrumb)
    }
    function wu(o) {
        var c, a, p, w, k, nt = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableToneCookExpiry, !1), d = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableBalancedSerp, !1), rt = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableAlwaysCreativeSerp, !1), ut = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enableSuperOptionsSets, !1), ft = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.enableBalancedSerpLog, !1), s = v(), g, it;
        if (ft && s != r && e(f.System, "BalSerpOverride", "Tone", {
            tone: s
        }),
        du()) {
            g = ot(pt).toLowerCase().trim();
            CIB.responseTone = tt[g];
            st(CIB.responseTone, !1, nt);
            e(f.System, "SET_TONE_FROM_URL", g, "");
            e(f.System, b, "Tone", {
                tone: CIB.responseTone
            });
            return
        }
        rt ? (s = l,
        CIB.responseTone = s) : !d && s != null && i.hasOwnProperty(s) ? (CIB.responseTone = s,
        e(f.System, b, "Tone", {
            tone: s
        })) : (nt && (it = sj_cook.get(n.userCook, n.hasSetToneCrumb),
        it == "1" && (sj_cook.set(n.userCook, n.hasSetToneCrumb, "0", !0, "/", null),
        e(f.System, "ResetTone", "Tone", {}))),
        CIB.responseTone = o,
        s = o,
        e(f.System, "DefaultTone", "Tone", {
            tone: s
        }));
        ut && u(CIB.config.sydney.request.optionsSets, hr);
        !d && i.hasOwnProperty(s) ? (u(CIB.config.sydney.request.optionsSets, i[s]),
        CIB.config.sydney.request.optionsSets = y(CIB.config.sydney.request.optionsSets, s),
        h = s,
        et(h)) : d && i.hasOwnProperty(r) && (u(CIB.config.sydney.request.optionsSets, i[r]),
        CIB.config.sydney.request.optionsSets = y(CIB.config.sydney.request.optionsSets, r),
        h = r,
        et(r))
    }
    function bu(n) {
        var i, r = n && n.length > 1 ? n[1] : null, u = r ? r.toLowerCase().trim() : "", o, s;
        r && tt.hasOwnProperty(u) && (o = n && n.length > 2 ? n[2] : !1,
        s = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableToneCookExpiry, !1),
        CIB.responseTone = tt[u],
        st(CIB.responseTone, o, s),
        e(f.System, b, "Tone", {
            tone: CIB.responseTone
        }))
    }
    function ku() {
        var n, i, r, u;
        if (sj_evt.bind(ar, bu, !0),
        r = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableToneCookExpiry, !1),
        u = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.isCompliantSydneyEndpointEnabled, !1),
        !u && CIB.onResponseToneChanged)
            CIB.onResponseToneChanged(function(n) {
                st(n, !0, r)
            })
    }
    function ot(n) {
        var i = _w.location.search
          , r = new URLSearchParams(i)
          , t = r.get(n);
        return t ? t : ""
    }
    function du() {
        var n, r = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableSetToneFromUrl, !1), i;
        return r ? (i = ot(pt),
        i && tt.hasOwnProperty(i.toLowerCase().trim())) : !1
    }
    function st(t, r, f) {
        var c = [i[t]].concat(s[t]).toString(), e, o;
        t !== v() && ci("ChangedTone", "Tone", {
            newTone: t
        });
        r && (f ? (e = nf(),
        sj_cook.set(n.toneCook, n.toneCrumb, t, !0, "/", e),
        sj_cook.set(n.toneCook, n.toneOptsCrumb, c, !0, "/", e),
        sj_cook.set(n.userCook, n.hasSetToneCrumb, "1", !0, "/", null)) : (sj_cook.set(n.userCook, n.toneCrumb, t, !0, "/", null),
        sj_cook.set(n.userCook, n.toneOptsCrumb, c, !0, "/", null)));
        i.hasOwnProperty(t) && (o = hi(CIB.config.sydney.request.optionsSets, Object.keys(i)),
        o !== -1 ? CIB.config.sydney.request.optionsSets[o] = i[t] : u(CIB.config.sydney.request.optionsSets, i[t]),
        CIB.config.sydney.request.optionsSets = y(CIB.config.sydney.request.optionsSets, t, h),
        h = t,
        et(h))
    }
    function gu() {
        var u, e, o, s = n.getConfigOrDefault((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableBalancedSerp, !1), t, i, h;
        s && !ii && (ii = !0,
        s && (t = n.getCookieTone(),
        t != null && t != r && (i = CIB.manager.conversation._lastMessage,
        h = (o = (e = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || e === void 0 ? void 0 : e.greeting) === null || o === void 0 ? void 0 : o.shouldSendBotGreeting,
        CIB.config.greeting.shouldSendBotGreeting = !1,
        n.shouldResetBotGreeting = !1,
        CIB.responseTone = t,
        n.lastQuery = "",
        i && i.text && CIB.registerContext([{
            author: "bot",
            source: "serpBalResp",
            text: i.text
        }]),
        n.shouldResetBotGreeting = !0,
        CIB.config.greeting.shouldSendBotGreeting = h,
        n.SydLog(f.System, "SetCookToneAfterSERP", "Tone", {
            tone: t
        }))))
    }
    function nf() {
        var n = new Date;
        return n.setDate(n.getDate() + (n.getHours() < 2 ? 1 : 2)),
        n.setHours(2),
        n.setMinutes(0),
        n.setSeconds(0),
        n.setMilliseconds(0),
        (n.getTime() - (new Date).getTime()) / 6e4
    }
    function y(n, t, i) {
        return i === void 0 && (i = ""),
        i != "" && s.hasOwnProperty(i) && (n = rf(n, s[i])),
        t != "" && s.hasOwnProperty(t) && s[t].forEach(function(t) {
            u(n, t)
        }),
        n
    }
    function u(n, t) {
        t && n.indexOf(t) < 0 && n.push(t)
    }
    function tf(n, t) {
        var i = n.indexOf(t);
        i >= 0 && n.splice(i, 1)
    }
    function rf(n, t) {
        return t.forEach(function(t) {
            var i = n.indexOf(t);
            i >= 0 && n.splice(i, 1)
        }),
        n
    }
    function hi(n, t) {
        for (var f, u, r = 0; r < t.length; r++)
            if (f = t[r],
            u = n.indexOf(i[f]),
            u >= 0)
                return u;
        return -1
    }
    function ht(n, t) {
        var i = {};
        return t ? n.locType && (i.LocationType = n.locType) : n.accuracy && (i.Accuracy = n.accuracy),
        n.state && (i.State = decodeURI(n.state)),
        n.city && (i.City = decodeURI(n.city)),
        n.lat && n.long && (i.Center = {
            Latitude: parseFloat(n.lat),
            Longitude: parseFloat(n.long)
        }),
        n.source && (i.LocationSource = n.source),
        n.altitude && (i.Altitude = n.altitude),
        n.altitudeAcc && (i.AltitudeAccuracy = n.altitudeAcc),
        n.displayName && (i.DisplayName = n.displayName),
        n.name && (i.Name = n.name),
        n.heading && (i.Heading = n.heading),
        n.isValidLocation && (i.IsValidLocation = n.isValidLocation),
        n.range && (i.Radius = n.range),
        n.speed && (i.Speed = n.speed),
        n.ts && (i.Timestamp = n.ts),
        n.ets && (i.ExpiryTimestamp = n.ets),
        i
    }
    function uf() {
        var t = (new Date).getTimezoneOffset(), r = Math.floor(Math.abs(t / 60)), u = Math.abs(t % 60), i;
        t < 0 ? i = "+" + o(r) + ":" + o(u) : t > 0 ? i = "-" + o(r) + ":" + o(u) : t == 0 && (i = "Z");
        var n = new Date
          , f = n.getDate()
          , e = n.getMonth() + 1
          , s = n.getFullYear()
          , h = n.getHours()
          , c = n.getMinutes()
          , l = n.getSeconds();
        return o(s) + "-" + o(e) + "-" + o(f) + "T" + o(h) + ":" + o(c) + ":" + o(l) + i
    }
    function o(n) {
        return n < 10 ? "0" + n : n
    }
    function c(n, t) {
        if (t) {
            var i = t.split(",");
            return n.concat(i)
        }
        return n
    }
    function t(n, t) {
        return typeof n != "undefined" ? n : t
    }
    function ff(n) {
        var t = __spreadArray([], CIB.config.sydney.request.optionsSets, !0), r;
        return i.hasOwnProperty(n) && (r = hi(t, Object.keys(i)),
        r !== -1 && (t[r] = i[n]),
        t = y(t, n, h)),
        t
    }
    function e(n, i, r, u) {
        var e, o, s, h, f = [], l = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.isCompliantSydneyEndpointEnabled, !1), c, a, v;
        l && f.push("IsBizChat", l.toString());
        c = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.isBingChatForEnterprise, !1);
        c && f.push("IsBCE", c.toString());
        a = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.isBingChatForFaculty, !1);
        a && f.push("IsBCSFaculty", "true");
        v = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableTelemetryPrivacy, !1);
        v && (u = ef(u));
        Log.Log.apply(Log, __spreadArray([n, "Codex", i, !1, "Namespace", r, "CustomData", JSON.stringify(u)], f, !1))
    }
    function ef(n) {
        return wr.forEach(function(t) {
            var i, r;
            n[t] !== undefined && (n[t] = ut);
            ((i = n.CustomData) === null || i === void 0 ? void 0 : i[t]) !== undefined && (n.CustomData[t] = ut);
            ((r = n.EncryptedData) === null || r === void 0 ? void 0 : r[t]) !== undefined && (n.EncryptedData[t] = ut)
        }),
        n
    }
    function ci(n, t, i) {
        e(f.Interaction, n, t, i)
    }
    function sf() {
        if (history && (n.enableConvModeSwitchAjax && (_w._currentRoute = {
            state: _w.history.state,
            href: _w.location.href,
            search: _w.location.search
        }),
        sj_be(_w, "popstate", function(i) {
            var u, f, e, o, s, h, r;
            if (n.enableConvModeSwitchAjax = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableConvModeSwitchAjax, !1),
            n.enableConvModeSwitchAjax && (r = _w._currentRoute,
            _w._currentRoute = {
                state: _w.history.state,
                href: _w.location.href,
                search: _w.location.search
            },
            lt(r === null || r === void 0 ? void 0 : r.search) != lt((f = _w._currentRoute) === null || f === void 0 ? void 0 : f.search) && (_w._isConvAjaxUpdated || ((o = (e = _w._currentRoute) === null || e === void 0 ? void 0 : e.state) === null || o === void 0 ? void 0 : o.ajaxserp) === !0))) {
                var c = _w.location
                  , l = c.href
                  , a = l.indexOf("/search");
                if (a >= 0) {
                    window.location.reload();
                    return
                }
            }
            ((s = i === null || i === void 0 ? void 0 : i.state) === null || s === void 0 ? void 0 : s.inConvMode) && _G[n.SYD_MODE] == "serp" ? sj_evt.fire("showSydFSC", null, null, !1, !0) : ((h = i === null || i === void 0 ? void 0 : i.state) === null || h === void 0 ? void 0 : h.inConvMode) || _G[n.SYD_MODE] != "conversation" || (sj_evt.fire("preHideSydFSCByHistory"),
            sj_evt.fire("hideSydFSC", !0))
        }),
        URLSearchParams)) {
            var i = new URLSearchParams(window.location.search);
            ni = i.get("showconv") === "1"
        }
    }
    function hf(i) {
        var r, u;
        if (history) {
            if (ni && ti && i) {
                ti = !1;
                history.replaceState({
                    inConvMode: i
                }, document.title || "");
                n.enableConvModeSwitchAjax = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableConvModeSwitchAjax, !1);
                n.enableConvModeSwitchAjax && (_w._currentRoute = {
                    state: _w.history.state,
                    href: _w.location.href,
                    search: _w.location.search
                });
                return
            }
            gt ? li(i) : (history.pushState({
                inConvMode: i
            }, document.title || ""),
            n.enableConvModeSwitchAjax = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableConvModeSwitchAjax, !1),
            n.enableConvModeSwitchAjax && (_w._currentRoute = {
                state: _w.history.state,
                href: _w.location.href,
                search: _w.location.search
            }))
        }
    }
    function li(i) {
        var r, u = new URL(window.location.href);
        u.searchParams.set("showconv", i ? "1" : "0");
        history.pushState({
            inConvMode: i
        }, ai(i), u);
        n.enableConvModeSwitchAjax = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableConvModeSwitchAjax, !1);
        n.enableConvModeSwitchAjax && (_w._currentRoute = {
            state: _w.history.state,
            href: _w.location.href,
            search: _w.location.search
        })
    }
    function ai(n) {
        return g && nt ? n ? g : nt : document.title
    }
    function cf(n) {
        g && nt && (document.title = ai(n))
    }
    function lf() {
        var t, n;
        ((t = history === null || history === void 0 ? void 0 : history.state) === null || t === void 0 ? void 0 : t.inConvMode) && (n = _ge("sb_form_q"),
        n && n.value ? sj_evt.fire("showSydFSC", n.value) : sj_evt.fire("showSydFSC"))
    }
    function af() {
        function w(n) {
            if (n && n.length >= 2) {
                var t = n[1].waitlist;
                t && t == "2" && (CIB.config.features.enableMUIDUserMode = !1,
                CIB.config.messaging.maxTurnsPerConversation = it,
                sj_evt.unbind("rewready", w))
            }
        }
        var i, r, u, f, e, o, s, h, c, l, d = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableSydTigerAns, !1), g = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableSydAjaxReset, !1), y, p, a, b, k, v;
        CIB.onModeChanged(function(t) {
            switch (t) {
            case "conversation":
                sj_evt.fire("showSydFSC");
                break;
            case "off-stage":
                if (n.ignoreFirstOffStage) {
                    n.ignoreFirstOffStage = !1;
                    CIB.showConversation();
                    break
                }
                sj_evt.fire("hideSydFSC");
                break;
            default:
                Log.Log("ClientInst", "Codex", "ModeChangeError", !1, "CustomData", JSON.stringify({
                    mode: t
                }))
            }
        });
        if (d && (y = _ge("b_sydTigerCont"),
        y)) {
            p = _d.querySelector("#b_pole #b_sydTigerCont") != null;
            CIB.onSerpSlotSuggestionInvoked(function() {
                _G[n.SYD_MODE] != "conversation" && (n.LogIntEvent("ConversationViewEnter", p ? "Pole" : "RightRail", {
                    source: "ChatBubble"
                }),
                sj_evt.fire("showSydFSC"))
            });
            a = _ge("sb_form_q");
            a && (CIB.config.sydney.slottedModeTurnIndex = ki() && ((e = (f = (u = CIB === null || CIB === void 0 ? void 0 : CIB.vm) === null || u === void 0 ? void 0 : u.conversation) === null || f === void 0 ? void 0 : f.turns) === null || e === void 0 ? void 0 : e.length) ? Math.max(CIB.vm.conversation.turns.length - 1, 0) : 0,
            n.lastQuery = a.value.toLowerCase().trim())
        }
        g && sj_evt.bind("ajax.unload", function() {
            var n, t, i, r, u, f, e, o, s, h, c;
            CIB && (c = (t = (n = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || n === void 0 ? void 0 : n.greeting) === null || t === void 0 ? void 0 : t.shouldSendBotGreeting,
            CIB.config.greeting.shouldSendBotGreeting = !1,
            (u = (r = (i = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || i === void 0 ? void 0 : i.stream) === null || r === void 0 ? void 0 : r.subscription) === null || u === void 0 ? void 0 : u.dispose(),
            (e = (f = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || f === void 0 ? void 0 : f.stream) === null || e === void 0 ? void 0 : e.complete(),
            (s = (o = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || o === void 0 ? void 0 : o.stream) === null || s === void 0 ? void 0 : s.finalizeStreamSubscription(),
            (h = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || h === void 0 ? void 0 : h.resetConversation(),
            CIB.config.greeting.shouldSendBotGreeting = c)
        });
        var nt = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.codexMUIDUser, !1)
          , tt = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableSigninTurnFix, !0)
          , it = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.maxTurnsPerConversation, rt);
        if (nt && tt && sj_evt.bind("rewready", w, !0),
        CIB.onModalVisibilityChanged)
            CIB.onModalVisibilityChanged(function(n) {
                var t = _ge("b_header");
                t && (n ? Lib.CssClass.add(t, dt) : Lib.CssClass.remove(t, dt))
            });
        b = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableThreads, !1);
        k = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.isAccountLinkedWithActiveAAD, !1);
        !b && k && (v = _qs("body"),
        v && Lib.CssClass.add(v, br))
    }
    function vf() {
        var t, i, r, u, f, e, o, s, h, l = (r = (i = (t = CIB === null || CIB === void 0 ? void 0 : CIB.vm) === null || t === void 0 ? void 0 : t.conversation) === null || i === void 0 ? void 0 : i.model) === null || r === void 0 ? void 0 : r.suggestions, n = document.activeElement, c;
        return !l || !n || n.nodeName !== "CIB-SERP" ? "" : (n = (s = (o = (e = (f = (u = n === null || n === void 0 ? void 0 : n.shadowRoot) === null || u === void 0 ? void 0 : u.activeElement) === null || f === void 0 ? void 0 : f.shadowRoot) === null || e === void 0 ? void 0 : e.activeElement) === null || o === void 0 ? void 0 : o.shadowRoot) === null || s === void 0 ? void 0 : s.activeElement,
        !n || n.nodeName !== "CIB-SUGGESTION-ITEM") ? "" : (n = (h = n === null || n === void 0 ? void 0 : n.shadowRoot) === null || h === void 0 ? void 0 : h.activeElement,
        !n || n.nodeName !== "BUTTON" || !n.textContent) ? "" : (c = n.textContent.trim(),
        l.find(function(n) {
            return n.text === c
        })) ? c : ""
    }
    function yf(n) {
        var i, u = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableTigerCachedAttr, !1), r;
        n && (u && (this.config.messaging.streamCachedResponses = !1,
        r = _d.querySelector("#b_sydTigerCont cib-serp"),
        r && r.setAttribute("cached", "")),
        this.processCachedResponse(n))
    }
    function ct(n) {
        var t = _ge(n);
        t && t.parentElement && t.parentElement.removeChild(t)
    }
    function pf(n) {
        CIB.processCachedResponse(n)
    }
    function wf() {
        var u, f, e, o, s, a = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableSydTestCache, !1), c, l, r, i, h;
        a && (c = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableTestTurnLimit, !1),
        c && (CIB.config.features.enableMaxTurnsFromBackend = !1,
        CIB.config.messaging.maxTurnsPerConversation = 1),
        l = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.enableTurnlimitNonSignedIn, !1),
        l && (CIB.config.features.enableMUIDUserMode = !0),
        r = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.sydTestCacheMsg, ""),
        i = null,
        r && r.indexOf('{"messages":') == 0 && (i = JSON.parse(r)),
        CIB.config.share && (CIB.config.share.testShareId = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.sydTestMockShareId, "")),
        h = yf.bind(CIB),
        CIB.sendSearchQuery = function() {
            h(i)
        }
        ,
        CIB.addMessage = function() {
            h(i)
        }
        ,
        n.processCachedResponseUsingCIB = function() {
            CIB.processCachedResponse(i)
        }
        )
    }
    function vi(n, t, i, r, u, f, e) {
        n === void 0 && (n = "");
        t === void 0 && (t = "");
        i === void 0 && (i = "");
        r === void 0 && (r = "");
        u === void 0 && (u = !1);
        f === void 0 && (f = !1);
        e === void 0 && (e = !1);
        sj_evt.fire("showSydFSC", n, t, r, u, i, f, e)
    }
    function lt(n) {
        var r = new RegExp("[?&]{1}q=([^&]+)")
          , t = n.match(r)
          , i = t ? t[1] : null;
        return i ? decodeURIComponent(i.replace("+", " ")) : ""
    }
    function p() {
        var i, r, u, e = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.isSapphireClient, !1), f, n;
        return e ? lt(_w.location.search) : (f = typeof sj_b != "undefined" && sj_b != null ? sj_b : _d.body,
        n = f.querySelectorAll("textarea.b_searchbox, input.b_searchbox:not(#uaseabox)"),
        !n || n.length <= 0) ? "" : (u = (r = n[0]) === null || r === void 0 ? void 0 : r.getAttribute("value")) !== null && u !== void 0 ? u : ""
    }
    function bf() {
        var t = new URLSearchParams(_w.location.search)
          , i = t.get(wt);
        i && (n.lastQuery = p().toLowerCase().trim())
    }
    function yi(n, t, i, r, u, f) {
        var o, e, s;
        t === void 0 && (t = !1);
        i === void 0 && (i = "");
        r === void 0 && (r = "");
        u === void 0 && (u = !1);
        f === void 0 && (f = !1);
        o = "";
        t && (o = p());
        e = i;
        e || (s = _d.querySelector(".b_ans #b_wpt_data"),
        s && (e = s.getAttribute("data-sydctx")));
        vi(n, e, o, r, !1, u, f)
    }
    function kf(n, t) {
        n === void 0 && (n = "");
        t === void 0 && (t = "");
        var i = p();
        yi(i, !1, n, t, !1, !0)
    }
    function df(t) {
        n.isSydFSCEligible = t
    }
    function gf(n) {
        for (var i = [], t = 1; t < arguments.length; t++)
            i[t - 1] = arguments[t]
    }
    function ne() {
        sj_evt.fire("clarity.trigger", "cibChat")
    }
    function te(n, t, i) {
        return !n || t && (!i || i.toLowerCase().trim() !== p().toLowerCase().trim())
    }
    function ie(t, i) {
        var l, a, v, y, p, w, b, k, rt, o, d, u, e, it, lt, h, at, r, c, pt, wt, bt, kt;
        i === void 0 && (i = !1);
        rt = n.getConfigOrDefault((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableSydCarouselHistory, !1);
        pi();
        var f = sj_ce("div", "b_metaCont")
          , ut = sj_ce("div", "b_metaCont_Title")
          , dt = n.getConfigOrDefault((a = _w._sydConvTranslation) === null || a === void 0 ? void 0 : a.sydneyCarouselTitle, "");
        ut.textContent = dt;
        f.appendChild(ut);
        o = sj_ce("div", "b_meta_bot");
        f.appendChild(o);
        d = sj_ce("div", "b_metaChat");
        u = sj_ce("div", "b_metaCont_PillCont", "b_meta_hideEx");
        i ? u.appendChild(d) : o.appendChild(d);
        o.appendChild(u);
        var ft = n.getConfigOrDefault((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.carouselQueries, "")
          , gt = n.getConfigOrDefault((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.sydCarPropQuery, !1)
          , et = ft ? ft.split(",") : null
          , g = et ? et : CIB.vm.conversation.model.messages.filter(function(n) {
            return n.type === "meta" && n.text != "Generating answers for you..."
        }).map(function(n) {
            return n.text
        })
          , ot = 0
          , ni = i ? _w.innerWidth - vt - ur : rr
          , ti = _w.innerWidth - vt - yt
          , st = !i
          , ht = ni - yt
          , ii = CIB.vm.conversation.model._id
          , nt = !0;
        for (e = g.length - 1; e >= 0; e--) {
            var ri = g[e]
              , s = ri.split("`")
              , tt = s.length == 1 ? s[0] : s.length == 3 ? s[1] : "";
            nt && (it = re(tt) + 2 * fr + er,
            ot + it < ht ? ot += it : st ? (nt = !1,
            lt = e + 1,
            h = sj_ce("div", "b_meta_exp", "b_metaCont_Pill"),
            h.innerText = "+" + lt.toString(),
            sj_be(h, "click", function() {
                Lib.CssClass.add(u, "b_metaExpanded")
            }),
            u.append(h)) : (ht = ti,
            st = !0));
            at = "cdxche";
            r = sj_ce("a", null, "b_metaCont_Pill" + (nt ? "" : " b_hide"));
            r.href = _w.location.origin + _w.location.pathname + "?q=" + tt + "&form=" + at;
            rt && (r.href = r.href + "&convid=" + ii);
            gt && (r.href = r.href + "&features=sydcarousel,sydcpropq");
            r.textContent = tt;
            r.target = "_blank";
            sj_be(r, "click", function(t) {
                var r = _ge("CodexCarouselInstLink"), i;
                _w.si_ct && _w.si_ct(r);
                i = t === null || t === void 0 ? void 0 : t.target;
                n.LogIntEvent("QueryCarouselClick", "QueryCarousel", {
                    query: i === null || i === void 0 ? void 0 : i.textContent
                })
            });
            u.appendChild(r)
        }
        c = sj_ce("div", "b_meta_col", "b_metaCont_Pill b_hide");
        c.innerText = n.getConfigOrDefault((p = _w._sydConvTranslation) === null || p === void 0 ? void 0 : p.sydneyCarouselCollapse, "Collapse");
        sj_be(c, "click", function() {
            Lib.CssClass.remove(u, "b_metaExpanded")
        });
        u.append(c);
        g.length > 0 && (pt = n.getConfigOrDefault((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.suppressAlsoTryWhenEnableSydCarousel, !1),
        pt && ct("b_alsotry"),
        wt = n.getConfigOrDefault((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.suppressPoleRSWhenEnableSydCarousel, !1),
        wt && ct("brspole"),
        bt = n.getConfigOrDefault((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.suppressPoleRecommendedSearchWhenEnableSydCarousel, !1),
        bt && ct("polerecommendedsearch"),
        t.children.length > 0 ? (kt = _w.getComputedStyle(t, null),
        kt.paddingLeft == "0px" && Lib.CssClass.add(f, "b_metaPadding"),
        t.insertBefore(f, t.children[0])) : t.appendChild(f),
        sj_evt.fire(lr))
    }
    function re(n) {
        var i = sj_ce("canvas")
          , t = i.getContext("2d");
        return t.font = "14px Roboto",
        t.measureText(n).width
    }
    function pi() {
        var n = _ge("b_metaCont");
        n && n.parentElement && n.parentElement.removeChild(n)
    }
    function wi() {
        var n = ot(cr);
        return n !== null && n !== void 0 ? n : ""
    }
    function at(n, i, r) {
        var u, f, e, o, s, h, c, l, a, v = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.disable2TSearchHistory, !1), y = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enable2TTest, !1);
        ((o = (e = CIB.config) === null || e === void 0 ? void 0 : e.answers) === null || o === void 0 ? void 0 : o.query) && (CIB.config.answers.query.IG = _G.IG,
        CIB.config.answers.query.IID = (s = _ge("b_sydConvCont")) === null || s === void 0 ? void 0 : s.getAttribute("_iid"),
        CIB.config.answers.query.cw = n,
        CIB.config.answers.query.ch = i,
        y && (CIB.config.answers.query.features = wi()),
        v && (CIB.config.answers.query.dissrchswrite = "1"));
        ((c = (h = CIB.config) === null || h === void 0 ? void 0 : h.ads) === null || c === void 0 ? void 0 : c.query) && (CIB.config.ads.query.IG = _G.IG,
        CIB.config.ads.query.IID = r ? (l = _ge("CodexAdsInstLink")) === null || l === void 0 ? void 0 : l.getAttribute("_iid") : (a = _ge("b_sydConvCont")) === null || a === void 0 ? void 0 : a.getAttribute("_iid"),
        CIB.config.ads.query.cw = n,
        CIB.config.ads.query.ch = i,
        y && (CIB.config.ads.query.features = wi()),
        CIB.config.ads.query.form = "codexx",
        v && (CIB.config.ads.query.dissrchswrite = "1"))
    }
    function ue() {
        var n = new URLSearchParams(_w.location.search)
          , t = n.get("showconv")
          , i = n.get("sendquery");
        return i === "1" || t !== "1"
    }
    function fe(i, r, u, f) {
        var h, c, l, a, v, y, p, b = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableSydContext, !1), k = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableSQMsg, !1), e, o, w, s;
        n.enableConvModeSwitchAjax = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableConvModeSwitchAjax, !1);
        var d = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableCodexMuidConsentTop, !1)
          , g = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableCodexMuidConsentExplicit, !1)
          , nt = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableCodexMuidConsentImplicit, !1)
          , tt = d || g || nt
          , it = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.bypassConsentCheck, !1)
          , rt = CIB.vm.conversation.model.messages.filter(function(n) {
            return n.author == "user"
        }).length;
        if (i && i != n.lastQuery && ue() && i != n.firstQuery && (!tt || si() || it || rt < 1)) {
            if (f && n.enableConvModeSwitchAjax) {
                if (n.isSmoothConvSwitchUpdatedPage())
                    return;
                try {
                    if (e = CIB.vm.conversation.model.messages.filter(function(n) {
                        return n.type === "meta" && n.text != "Generating answers for you..." || n.type === "text" && n.author === "user"
                    }),
                    e && e.length > 0 && (o = e[e.length - 1].text.split("`"),
                    w = o.length == 1 ? o[0] : o.length == 3 ? o[1] : "",
                    w.toLowerCase() == i.toLowerCase()))
                        return
                } catch (ut) {}
            }
            s = [];
            u && s.push({
                author: "user",
                text: u
            });
            r && s.push({
                author: "bot",
                text: r
            });
            b && s.length != 0 && CIB.registerContext(s);
            k && f && !CIB.manager.conversation._lastMessage && !CIB.manager.conversation.messages.length ? CIB.sendSearchQuery(i) : CIB.addMessage(i);
            n.lastQuery = i;
            n.firstQuery.length == 0 && (n.firstQuery = i)
        }
    }
    function bi(n, t, i) {
        return i === void 0 && (i = "POST"),
        new Promise(function(r, u) {
            var f = sj_gx();
            f.onreadystatechange = function() {
                f.readyState === 4 && (f.status === 200 ? r(f) : u(f))
            }
            ;
            f.onerror = function() {
                u(f)
            }
            ;
            f.open(i, n, !0);
            f.setRequestHeader("content-type", "application/json");
            f.send(t)
        }
        )
    }
    function ee(n) {
        return bi(n, "", "GET").then(function(n) {
            return Promise.resolve(JSON.parse(n.response))
        })["catch"](function(n) {
            return Promise.reject(n)
        })
    }
    function oe(n) {
        var u, f, i, r;
        return n ? (i = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.tigerEnhancedPromptTemplate, ""),
        !i) ? n : (i = i.replace("{0}", n),
        r = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.language, ""),
        r && r.indexOf("English") < 0 && (i += " Respond in language " + r),
        i) : n
    }
    function ki() {
        var n, t = new URLSearchParams(_w === null || _w === void 0 ? void 0 : _w.location.search);
        return t.has("form") && ((n = t.get("form")) === null || n === void 0 ? void 0 : n.toLowerCase()) === "convaj" && _w._isConvAjaxUpdated
    }
    function se() {
        var n, t, i = (t = (n = _d.querySelector("cib-serp")) === null || n === void 0 ? void 0 : n.shadowRoot) === null || t === void 0 ? void 0 : t.querySelector("cib-background");
        i && (i.style.height = "100%",
        i.style.width = "100%")
    }
    function he() {
        var n, t, i, r, u, f, e = (f = (u = (r = (i = (t = (n = _d.querySelector("cib-serp")) === null || n === void 0 ? void 0 : n.shadowRoot) === null || t === void 0 ? void 0 : t.querySelector("cib-conversation")) === null || i === void 0 ? void 0 : i.shadowRoot) === null || r === void 0 ? void 0 : r.querySelector("cib-welcome-container")) === null || u === void 0 ? void 0 : u.shadowRoot) === null || f === void 0 ? void 0 : f.querySelector(".muid-upsell");
        e && (e.style.display = "none")
    }
    var di = "sydneyOptionsSets", gi = "codexFeatures", nr = "speechSrOptions", l = "Creative", r = "Balanced", w = "Precise", rt = 5, tr = 2, ir = 2e3, rr = 750, vt = 48, ur = 42, fr = 16, er = 6, yt = 60, or = 66, sr = 1e3, hr = "so_bing_chat", pt = "seltone", cr = "twoTFeatures", lr = "SydAddCarousel", wt, b;
    n.SYD_MODE = "SydMode";
    n.SYD_PREV_MODE = "SydPrevMode";
    n.lastQuery = (n === null || n === void 0 ? void 0 : n.lastQuery) ? n === null || n === void 0 ? void 0 : n.lastQuery : "";
    n.firstQuery = "";
    n.ignoreFirstOffStage = !1;
    n.shouldResetBotGreeting = !0;
    n.shouldForceSendBotGreeting = !1;
    wt = "shareId";
    n.userCook = "SRCHHPGUSR";
    n.toneCook = "CDXTC";
    n.toneCrumb = "cdxtone";
    n.toneOptsCrumb = "cdxtoneopts";
    b = "InitialTone";
    n.hasSetToneCrumb = "cdxts";
    var ar = "crtone"
      , vr = "cdxwinturn"
      , yr = "ADLT"
      , k = "MUID"
      , bt = "CMUID"
      , a = "CHTPSNCST"
      , d = "CHTTRDCST"
      , kt = "CHTCSTUPDATE"
      , pr = "CMUIDBCE"
      , wr = ["chips", "query", "searchQuery", "text"]
      , ut = "<stripped/>"
      , dt = "cdxModalVisible"
      , br = "aad"
      , g = ""
      , nt = ""
      , gt = !1
      , ni = !1
      , ti = !0
      , ft = bt
      , f = {
        System: "SystemEvent",
        Interaction: "InteractionEvent"
    }
      , i = {
        Creative: "h3imaginative",
        Balanced: "harmonyv3",
        Precise: "h3precise"
    }
      , tt = {
        c: "Creative",
        b: "Balanced",
        p: "Precise"
    }
      , s = {
        Creative: [],
        Balanced: [],
        Precise: []
    }
      , h = ""
      , ii = !1
      , it = {
        Off: "1",
        Demote: "2",
        Strict: "4",
        KidSafe: "8",
        Stricter: "16",
        AdultOnly: "32"
    };
    n.isSydFSCEligible = n.isSydFSCEligible ? n.isSydFSCEligible : !1;
    n.isConfigSet = !1;
    n.enableCreatorSendQueryWhenShowConvQuery = !0;
    n.padding2TMobile = 92;
    n.MIN_WIDTH_MOBILE = 288;
    n.enableConvModeSwitchAjax = !1;
    n.setConfigs = kr;
    n.setColorScheme = dr;
    n.getMobileBrowserWidth = ui;
    n.getMobileBrowserHeight = fi;
    n.getCookieTone = v;
    n.updateResponseToneAfterSerp = gu;
    n.getConfigOrDefault = t;
    n.getAllowedToneOptionsSets = ff;
    n.SydLog = e;
    n.LogIntEvent = ci;
    n.setupHistory = sf;
    n.pushSydHistory = hf;
    n.updateConvFlagInURL = li;
    n.updateConvPageTitle = cf;
    n.checkInitialState = lf;
    n.setEventListeners = af;
    n.getActiveSuggestionChipText = vf;
    n.processCachedResponseUsingCIB = pf;
    n.setTestMocks = wf;
    n.triggerSydFSC = vi;
    n.getQuery = p;
    n.triggerShareFlow = bf;
    n.triggerSydFSCWithContext = yi;
    n.triggerSydFSCQueryWithContext = kf;
    n.setSydFSCEligibleState = df;
    n.sydPayWallTrace = gf;
    n.triggerClarity = ne;
    n.shouldMove1TAnswers = te;
    n.addCarousel = ie;
    n.removeQueries = pi;
    n.set2TQueryConfigs = at;
    n.sendFirstQuery = fe;
    n.createRequest = bi;
    n.getJsonData = ee;
    n.createIntelligentQuery = oe;
    n.isSmoothConvSwitchUpdatedPage = ki;
    n.updateChatBackgroundWidth = se;
    n.hideSignInUpsellFor3P = he;
    sj_evt.fire("SydFSCHelperLoaded")
}
)(SydFSCHelper || (SydFSCHelper = {}))
