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
, SydWelcomeScreenBase;
(function(n) {
    function p(n, t, i, r) {
        return t === void 0 && (t = !1),
        i === void 0 && (i = undefined),
        r === void 0 && (r = null),
        __awaiter(this, void 0, void 0, function() {
            var u;
            return __generator(this, function() {
                return CIB ? (n && (u = n.querySelector(l),
                _w.swtc = function() {
                    d(u, t, i, r);
                    sj_evt.unbind("showSydFSC", _w.swtc)
                }
                ,
                sj_evt.bind("showSydFSC", _w.swtc, !0)),
                [2]) : [2]
            })
        })
    }
    function w(n, t) {
        var i;
        return (t === void 0 && (t = c),
        i = _d.getElementById(t),
        i) ? i.cloneNode(!0) : null
    }
    function b(n, t) {
        var i;
        (i = n === null || n === void 0 ? void 0 : n.parentNode) === null || i === void 0 ? void 0 : i.insertBefore(t, n.nextSibling)
    }
    function k(n, t) {
        if (n) {
            var i = _d.createElement("slot");
            return i.setAttribute("name", n),
            t && i.setAttribute("slot", t.getAttribute("name")),
            i
        }
    }
    function d(n, t, i, r) {
        if (i === void 0 && (i = undefined),
        r === void 0 && (r = null),
        n) {
            var u = i ? i : h;
            u().then(function(i) {
                var u = ((i === null || i === void 0 ? void 0 : i.length) ? i : s(t)).map(function(n, i) {
                    return g(n, i, t)
                });
                n.append.apply(n, u);
                r && r(u)
            })
        }
    }
    function s(n) {
        var i = [{
            text: t.zeroInputSuggestionFallback4,
            title: t.zeroInputSuggestionCategory4,
            category: "chat",
            size: "small"
        }, {
            text: t.zeroInputSuggestionFallback6,
            title: t.zeroInputSuggestionCategory6,
            category: "organize",
            size: "small"
        }, {
            text: t.zeroInputSuggestionFallback2,
            title: t.zeroInputSuggestionCategory2,
            category: "compare",
            size: "medium"
        }, ];
        return n ? i : __spreadArray(__spreadArray([], i, !0), [{
            text: t.zeroInputSuggestionFallback7,
            title: t.zeroInputSuggestionCategory7,
            category: "create",
            size: "medium"
        }, {
            text: t.zeroInputSuggestionFallback1,
            title: t.zeroInputSuggestionCategory1,
            category: "shop",
            size: "medium"
        }, {
            text: t.zeroInputSuggestionFallback3,
            title: t.zeroInputSuggestionCategory3,
            category: "laugh",
            size: "small"
        }, {
            text: t.zeroInputSuggestionFallback5,
            title: t.zeroInputSuggestionCategory5,
            category: "write",
            size: "medium"
        }, ], !1)
    }
    function h(n) {
        var t, i, r, u, f;
        return __awaiter(this, void 0, void 0, function() {
            var s, h, c, e;
            return __generator(this, function() {
                return (s = (t = _w._sydConvConfig) === null || t === void 0 ? void 0 : t.enableUpdateWelcomeScreenApiUrl,
                h = (i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableSydneySapphireSuggestions,
                c = s && n ? n : "turing/api/suggestions/v1/zeroinputstarter",
                e = new URL(c,window.location.origin),
                e.searchParams.append("lang", (u = (r = _G.Lang) === null || r === void 0 ? void 0 : r.split("-")[0]) !== null && u !== void 0 ? u : "en"),
                e.searchParams.append("region", "*"),
                e.searchParams.append("tone", (f = CIB === null || CIB === void 0 ? void 0 : CIB.responseTone) !== null && f !== void 0 ? f : "balanced"),
                e.searchParams.append("enablePersonalizedSuggestions", String(h)),
                o) ? [2, new Promise(function(n) {
                    n(null)
                }
                )] : [2, fetch(e.href).then(function(n) {
                    return n.json()
                }).then(function(n) {
                    if (n !== null && n !== void 0)
                        return n.data
                })["catch"](function(n) {
                    return console.log("Failed to get WelcomeScreen Suggestion:", n),
                    []
                })]
            })
        })
    }
    function g(n, t, i) {
        var r = sj_ce("div", null, "b_wlcmTileWrap"), u, f, e;
        return r.setAttribute("size", n.size != "medium" ? n.size : (o ? !1 : Math.random() < .33) ? "small" : "medium"),
        r.setAttribute("data-priority", "2"),
        r.setAttribute("idx", t.toString()),
        u = sj_ce("button", null, "b_wlcmTile"),
        u.setAttribute("type", "button"),
        i && (!v || y) || (f = sj_ce("h1"),
        f.innerText = n.title,
        u.append(f)),
        e = sj_ce("p"),
        e.innerText = n.text,
        u.append(e),
        n.category && Lib.CssClass.add(u, n.category),
        r.append(u),
        r.addEventListener("click", function() {
            nt(n.text, r, n.category)
        }),
        r
    }
    function nt(n, t, i) {
        var r, u;
        CIB && (r = t.offsetTop < 400 ? "1" : "2",
        SydFSCHelper.LogIntEvent("ZeroInput", "Tile", {
            source: a,
            category: i,
            size: t.getAttribute("size"),
            tileindex: t.getAttribute("idx"),
            row: r
        }),
        CIB.manager.chat.isRequestPending || (u = !0,
        CIB.addMessage && CIB.addMessage(n, "Chat", u),
        CIB.focusChatInputElement && CIB.focusChatInputElement()))
    }
    var i, r, u, f, e, c = "b_sydWelcomeTemplate", l = ".b_wlcmTileCont", a = "welcomeScreen", v = (r = (i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableChatFRE) !== null && r !== void 0 ? r : !1, y = (f = (u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableChatFRE2) !== null && f !== void 0 ? f : !1, t = _w._sydConvTranslation, o = (e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.sydTuringSuggestionsMocked;
    n.SHOW_WELCOME_SCREEN_V2_EVENT = "SydShowWelcomeScreen";
    n.setTileContainer = p;
    n.getWelcomeContainer = w;
    n.insertAfter = b;
    n.createSlot = k;
    n.getFallbackTiles = s;
    n.fetchContent = h
}
)(SydWelcomeScreenBase || (SydWelcomeScreenBase = {}))
