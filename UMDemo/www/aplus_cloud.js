/*! 2021-04-09 16:05:26 */
!function(t) {
    function e(a) {
        if (n[a]) return n[a].exports;
        var o = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return t[a].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0);
}([ function(t, e, n) {
    t.exports = n(1);
}, function(t, e, n) {
    "use strict";
    n(2).initGlobal(window), function() {
        var t = n(4);
        n(127)(t);
    }();
}, function(t, e, n) {
    "use strict";
    var a, o = n(3), r = o.APLUS, i = o.APLUS_QUEUE, s = o.GOLDLOG, u = o.GOLDLOG_QUEUE, c = !1;
    try {
        a = window, c = !0;
    } catch (t) {}
    e.getContext = function() {
        return a;
    }, e.initGlobal = function(t) {
        a = t ? t : {
            v: 1,
            aplus: {},
            aplus_queue: []
        };
        var e, n;
        if (c) try {
            e = a.aplus || (a.aplus = {});
            var o = a.goldlog_queue || (a.goldlog_queue = []);
            n = a.aplus_queue || (a.aplus_queue = []), n = o.concat(n);
        } catch (t) {} else e = a.aplus, n = a.aplus_queue;
        return a.aplus = a.goldlog = e, a.aplus_queue = a.goldlog_queue = n, a;
    };
    var l = function(t) {
        if (t === r || t === s) {
            var e = a[r] || a[s];
            return e || (e = a[r] = a[s] = {}), e;
        }
        var n = u, o = i;
        if (t === o || t === n) {
            var c = a[o] || a[n];
            return c || (c = a[o] = a[n] = []), c;
        }
    };
    e.getGlobalValue = l, e.setGlobalValue = function(t, e) {
        a[t] = e;
    };
    var p = function(t) {
        var e;
        try {
            var n = l(r);
            e = n[t];
        } catch (t) {
            e = "";
        } finally {
            return e;
        }
    };
    e.getGoldlogVal = p;
    var f = function(t, e) {
        var n = !1;
        try {
            var a = l(r);
            t && (a[t] = e, n = !0);
        } catch (t) {
            n = !1;
        } finally {
            return n;
        }
    };
    e.setGoldlogVal = f, e.getClientInfo = function() {
        return p("_aplus_client") || {};
    };
}, function(t, e) {
    var n = "aplus", a = "goldlog", o = n + "_queue", r = a + "_queue", i = "mw_change", s = "MetaInfo", u = "append" + s, c = "set" + s, l = "http", p = "_pubsub", f = "other", g = "2101", d = "2201", h = "2202", _ = "19999", v = "1023", m = "1010", y = 3e4, b = "ekvs", w = 1e4, E = 1, S = 3e3, A = "$$_page_start", T = "$$_app_start", x = "$$_app_end";
    t.exports = {
        PAGE_ENTER: "PAGE_ENTER",
        CURRENT_PAGE_CONFIG: "CURRENT_PAGE_CONFIG",
        _ANONY_ID: "_anony_id",
        _USER_ID: "_user_id",
        DEFAULT_CODE: f,
        OTHER: _,
        EVENT_MAP: {
            "2101": "click",
            "2201": "exposure",
            "2202": "exposure",
            "19999": f,
            "1023": "app_show",
            "1010": "app_hide_or_unload"
        },
        EVENT_ID_MAP: {
            EXP: d,
            IMPEXP: h,
            CLK: g,
            OTHER: _,
            SHOW: v,
            H_OR_U: m
        },
        APLUS: n,
        GOLDLOG: a,
        SUBSCRIBE: n + "." + n + p + ".subscribe",
        PUBLISH: n + "." + n + p + ".publish",
        CACHE_PUBS: n + "." + n + p + ".cachePubs",
        APLUS_UNIVERSAL: n + "_universal",
        APLUS_QUEUE: o,
        GOLDLOG_QUEUE: r,
        COMPLETE: "complete",
        PV_CODE: "2001",
        EXP_CODE: d,
        CLK_CODE: g,
        OTHER_CODE: _,
        CLK: "CLK",
        EXP: "EXP",
        SPM_CNT: "spm-cnt",
        SPM_URL: "spm-url",
        SPM_PRE: "spm-pre",
        MW_CHANGE_PV: i + "_pv",
        MW_CHANGE_HJLJ: i + "_hjlj",
        HTTP: l + ":",
        HTTPS: "https:",
        APPEND_META_INFO: u,
        SET_META_INFO: c,
        APLUS_APPEND_META_INFO: n + "." + u,
        APLUS_SET_META_INFO: n + "." + c,
        PVID: "pvid",
        APLUS_LOG_PIPE: "aplus-log-pipe",
        openAPIs: [ "send", "enter", "sendPV", "record", "combineRecord", "recordUdata", "setPageSPM", "setMetaInfo", "appendMetaInfo", "updatePageProperties", "updateNextPageProperties", "updatePageUtparam", "updateNextPageUtparam", "pageAppear", "pageDisappear", "skipPage", "updateSessionProperties", "getPageSpmUrl", "getPageSpmPre" ],
        SESSION_INTERVAL: y,
        SESSION_PAUSE_TIME: "session_pause_time",
        IMPRINT: "imprint",
        CURRENT_SESSION: "current_session",
        MAX_EVENTID_LENGTH: 128,
        MAX_PROPERTY_KEY_LENGTH: 256,
        MAX_PROPERTY_KEYS_COUNT: 100,
        REQUESTS: "requests",
        SHARES: "shares",
        APLUS_SSRC: "_aplus_ssrc",
        EKVS: b,
        EVENT_MAX_COUNT: w,
        MEMORY_MAX_COUNT: E,
        EVENT_SEND_DEFAULT_INTERVAL: S,
        PAGE_START: A,
        APP_START: T,
        APP_END: x
    };
}, function(t, e, n) {
    t.exports = {
        metaInfo: {
            "aplus-ifr-pv": "1",
            "aplus-rhost-v": "",
            "aplus-rhost-g": "",
            "aplus-channel": "",
            appId: "",
            sdkId: "aplus_cloud",
            "aplus-cpvdata": {},
            "aplus-exdata": {},
            "aplus-mmstat-timeout": "10000",
            "aplus-toUT": ""
        },
        globalConfig: {
            isAli: !1,
            APLUS_QUEUE: "aplus_queue",
            ETAG_STORAGE_KEY: "__ETAG__CNA__ID__",
            script_name: "aplus.js",
            lver: "1.2.0",
            NAME_STORAGE_KEYS: {
                REFERRER: "wm_referrer",
                REFERRER_PV_ID: "refer_pv_id",
                LOST_PV_PAGE_DURATION: "lost_pv_page_duration",
                LOST_PV_PAGE_SPMAB: "lost_pv_page_spmab",
                LOST_PV_PAGE: "lost_pv_page",
                LOST_PV_PAGE_MSG: "lost_pv_page_msg"
            }
        },
        plugins: [ {
            name: "aplus_track_debug",
            path: n(5)
        }, {
            name: "aplus_body_ready",
            path: n(6)
        }, {
            name: "pubsub",
            path: n(7)
        }, {
            name: "aplus_client",
            path: n(12)
        }, {
            name: "aplus_meta_inject",
            path: n(14)
        }, {
            name: "aplus_ac",
            path: n(31)
        }, {
            name: "aplus_ae",
            path: n(45)
        }, {
            name: "name_storage",
            path: n(54)
        }, {
            name: "aplus_web_http_um",
            path: n(57)
        }, {
            name: "aplus_web_ws",
            path: n(71)
        }, {
            name: "aplus_log_inject",
            path: n(78),
            deps: [ "aplus_meta_inject" ],
            config: {
                plugins: {
                    pv: [ {
                        name: "etag",
                        path: n(79)
                    }, {
                        name: "when_to_sendpv",
                        path: n(81),
                        config: {
                            aplusWaiting: ""
                        }
                    }, {
                        name: "where_to_send",
                        path: n(82)
                    }, {
                        name: "what_to_send",
                        path: n(84),
                        config: {
                            pvdataToUt: {}
                        }
                    }, {
                        name: "cookie_data",
                        path: n(87)
                    }, {
                        name: "what_to_sendpv_userdata",
                        path: n(88),
                        deps: [ "what_to_send" ]
                    }, {
                        name: "what_to_sendpv_userdata_web",
                        path: n(90),
                        deps: [ "what_to_send", "what_to_sendpv_userdata" ]
                    }, {
                        name: "what_to_sendpv_ut2",
                        path: n(94),
                        deps: [ "what_to_send" ]
                    }, {
                        name: "what_to_sendpv_um2native",
                        path: n(96),
                        deps: [ "what_to_send" ]
                    }, {
                        name: "can_to_sendpv",
                        path: n(97),
                        config: {
                            flag: "NO"
                        }
                    }, {
                        name: "after_pv",
                        path: n(98)
                    } ],
                    hjlj: [ {
                        name: "etag",
                        path: n(79)
                    }, {
                        name: "where_to_send",
                        path: n(82),
                        deps: []
                    }, {
                        name: "what_to_send",
                        path: n(84),
                        deps: []
                    }, {
                        name: "cookie_data",
                        path: n(87)
                    }, {
                        name: "what_to_hjlj_userdata",
                        path: n(100),
                        deps: [ "what_to_send" ]
                    }, {
                        name: "what_to_hjlj_userdata_web",
                        path: n(101),
                        deps: [ "what_to_send", "what_to_hjlj_userdata" ]
                    }, {
                        name: "what_to_hjlj_ut2",
                        path: n(102),
                        deps: [ "what_to_send" ]
                    }, {
                        name: "what_to_hjlj_um2native",
                        path: n(103),
                        deps: [ "what_to_send" ]
                    } ]
                }
            }
        }, {
            name: "aplus_spm_inject",
            path: n(104)
        }, {
            name: "aplus_api",
            path: n(107)
        }, {
            name: "meta_queue",
            path: n(115)
        }, {
            name: "etag",
            path: n(79)
        }, {
            name: "etag_web_sync",
            path: n(117)
        }, {
            name: "aplusUmBridge",
            path: n(118)
        }, {
            name: "aplus_web_pageconfig",
            path: n(119)
        }, {
            name: "aplus_queue",
            path: n(121)
        }, {
            name: "hot_loader",
            path: n(122),
            config: {
                urlRules: [ {
                    rule: "aplus_webvt_messager",
                    cdnPath: [ "https://d.alicdn.com/alilog/mlog/aplus_webvt_messager.js" ]
                } ]
            }
        }, {
            name: "aplus_analytics",
            path: n(123),
            config: {
                sessionKey: "__aplus__analytics__",
                JSPATH: "https://g.alicdn.com/alilog/aplus-design/1.4.4/analytics_index.bundle.js",
                CSSPATH: "https://g.alicdn.com/alilog/aplus-design/1.4.4/analytics_index.bundle.css"
            }
        }, {
            name: "aplus_apv",
            path: n(125),
            deps: [ "aplus_log_inject", "aplus_api" ]
        } ]
    };
}, function(t, e) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                var t = document, e = window.aplus || (window.aplus = {});
                if (!e._aplus_cplugin_track_deb) {
                    e._aplus_cplugin_track_deb = {
                        status: "init"
                    };
                    var n = window, a = function() {
                        try {
                            var e = n.localStorage, a = "aplus_track_debug_id", o = new RegExp("[?|&]" + a + "=(\\w*)"), r = location.href.match(o);
                            if (r && r.length > 0) e.setItem(a, r[1]); else {
                                var i = t.referrer || "", s = i.match(o);
                                if (s && s.length > 0) e.setItem(a, s[1]); else {
                                    var u = n.name || "", c = u.match(o);
                                    c && c.length > 0 && e.setItem(a, c[1]);
                                }
                            }
                            var l = e.getItem(a) || "";
                            if (!(l && l.length > 50)) return !1;
                            var p, f = l.split("_");
                            if (f && f.length > 0) {
                                p = f[f.length - 1].replace(/log/, "");
                                var g = new Date(), d = g.getTime(), h = new Date(), _ = h.getTime();
                                g.setFullYear(parseInt(p.substr(0, 4))), g.setMonth(parseInt(p.substr(4, 2) - 1)),
                                g.setDate(parseInt(p.substr(6, 2))), g.setHours(parseInt(p.substr(8, 2))), g.setMinutes(parseInt(p.substr(10, 2))),
                                g.setSeconds(parseInt(p.substr(12, 2))), g.setMilliseconds(0), d = g.getTime(),
                                _ = h.getTime();
                                var v = _ - d;
                                return v <= 36e5 && (l || r[1]);
                            }
                        } catch (t) {
                            return !1;
                        }
                    }, o = a();
                    if (o) {
                        e._aplus_cplugin_track_deb.status = "start";
                        var r = {
                            aplus_track_debug_id: o
                        }, i = window.aplus_queue || (window.aplus_queue = []);
                        i.push({
                            action: "aplus.appendMetaInfo",
                            arguments: [ "aplus-exdata", r ]
                        }), i.push({
                            action: "aplus.appendMetaInfo",
                            arguments: [ "aplus-cpvdata", r ]
                        }), e._aplus_cplugin_track_deb.status = "complete";
                    }
                }
            }
        };
    };
}, function(t, e) {
    "use strict";
    t.exports = function() {
        return {
            run: function(t, e) {
                var n = setInterval(function() {
                    document.getElementsByTagName("body").length && (clearInterval(n), n = null, e());
                }, 50);
                return setTimeout(function() {
                    n && clearInterval(n);
                }, 1e3), 1e3;
            }
        };
    };
}, function(t, e, n) {
    var a = n(8), o = n(2);
    t.exports = function() {
        return {
            run: function() {
                var t = o.getGlobalValue("aplus");
                t.aplus_pubsub || (t.aplus_pubsub = a.create());
            }
        };
    };
}, function(t, e, n) {
    var a = n(9);
    t.exports = a.extend({
        subscribeOnce: function(t, e) {
            this.callable(e);
            var n, a = this;
            return this.subscribe.call(this, t, n = function() {
                a.unsubscribe.call(a, t, n);
                var o = Array.prototype.slice.call(arguments);
                e.apply(a, o);
            }), this;
        },
        unsubscribe: function(t, e) {
            this.callable(e);
            var n = this.handlers[t];
            if (!n) return this;
            if ("object" == typeof n && n.length > 0) {
                for (var a = 0; a < n.length; a++) {
                    var o = e.toString(), r = n[a].toString();
                    o === r && n.splice(a, 1);
                }
                this.handlers[t] = n;
            } else delete this.handlers[t];
            return this;
        }
    });
}, function(t, e, n) {
    "use strict";
    var a = n(10), o = n(11), r = function(t) {
        for (var e = t.length, n = new Array(e - 1), a = 1; a < e; a++) n[a - 1] = t[a];
        return n;
    }, i = o.extend({
        callable: function(t) {
            if (!a(t)) throw new TypeError(t + " is not a function");
            return t;
        },
        create: function(t) {
            var e = new this();
            for (var n in t) e[n] = t[n];
            return e.handlers = [], e.pubs = {}, e;
        },
        setHandlers: function(t) {
            this.handlers = t;
        },
        subscribe: function(t, e) {
            this.callable(e);
            var n = this, a = n.pubs || {}, o = a[t] || [];
            if (o) for (var r = 0; r < o.length; r++) {
                var i = o[r]();
                e.apply(n, i);
            }
            var s = n.handlers || [];
            return t in s || (s[t] = []), s[t].push(e), n.setHandlers(s), n;
        },
        publish: function(t) {
            var e = r(arguments), n = this.handlers || [], o = n[t] ? n[t].length : 0;
            if (o > 0) for (var i = 0; i < o; i++) {
                var s = n[t][i];
                a(s) && s.apply(this, e);
            }
            return this;
        },
        cachePubs: function(t) {
            var e = this.pubs || {}, n = r(arguments);
            e[t] || (e[t] = []), e[t].push(function() {
                return n;
            });
        }
    });
    t.exports = i;
}, function(t, e) {
    "use strict";
    t.exports = function(t) {
        return "function" == typeof t;
    };
}, function(t, e, n) {
    "use strict";
    function a() {}
    var o = n(10);
    a.prototype.extend = function() {}, a.prototype.create = function() {}, a.extend = function(t) {
        return this.prototype.extend.call(this, t);
    }, a.prototype.create = function(t) {
        var e = new this();
        for (var n in t) e[n] = t[n];
        return e;
    }, a.prototype.extend = function(t) {
        var e = function() {};
        try {
            o(Object.create) || (Object.create = function(t) {
                function e() {}
                return e.prototype = t, new e();
            }), e.prototype = Object.create(this.prototype);
            for (var n in t) e.prototype[n] = t[n];
            e.prototype.constructor = e, e.extend = e.prototype.extend, e.create = e.prototype.create;
        } catch (t) {
            console && console.log(t);
        } finally {
            return e;
        }
    }, t.exports = a;
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                var t = window.aplus || (window.aplus = {});
                t._aplus_client = n(13)();
            }
        };
    };
}, function(t, e) {
    "use strict";
    function n(t) {
        for (var e = [ [ "Windows NT 5.1", "winXP" ], [ "Windows NT 6.1", "win7" ], [ "Windows NT 6.0", "winVista" ], [ "Windows NT 6.2", "win8" ], [ "Windows NT 6.3", "win8.1" ], [ "Windows NT 10.0", "win10" ], [ "Ubuntu", "ubuntu" ], [ "Linux", "linux" ], [ "Windows NT 5.2", "win2003" ], [ "Windows NT 5.0", "win2000" ], [ "Windows", "winOther" ], [ "rhino", "rhino" ] ], n = 0, a = e.length; n < a; ++n) {
            var o = e[n][0];
            if (t.indexOf(o) !== -1) {
                var r = o.split(" ")[0];
                return {
                    device_model: r,
                    os: r,
                    os_version: e[n][1]
                };
            }
        }
        var i = "other";
        return {
            os: i,
            os_version: i
        };
    }
    function a(t, e) {
        var n = t.substring(t.indexOf("(") + 1, t.indexOf(")")), a = {}, o = e.toLowerCase();
        switch (o) {
          case "ipad":
          case "iphone":
          case "ipod":
          case "macintosh":
            "macintosh" === o ? /Mac OS X/.test(n) ? a.os = "Mac OS X" : a.os = "Mac OS" : a.os = "IOS",
            a.os_version = n.match(/[0-9_.]+/)[0];
            break;

          case "android":
            a.os = "Android", a.os_version = n.match(/[0-9.]+/)[0];
        }
        return a.os_version = a.os_version.replace(/_/g, "."), a;
    }
    t.exports = function() {
        var t = navigator.userAgent, e = {}, o = t.match(/iphone|ipad|android|macintosh/i), r = t.match(/Darwin/i);
        if (o) e = a(t, o[0]); else if (r) {
            var i = t.split(" ")[2];
            e = {
                os: "Darwin",
                os_version: i.match(/[0-9.]+/)[0]
            };
        } else e = n(t);
        var s = screen || {};
        return e.screenWidth = s.width, e.screenHeight = s.height, navigator && (e.userAgent = navigator.userAgent || "-",
        e.language = navigator.language || navigator.userLanguage || "-"), e;
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                n(15)(this.options.context.aplus_config);
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    function a() {
        var t = document, e = "//g.alicdn.com";
        if (t) {
            var n = t.getElementById("beacon-aplus") || t.getElementById("tb-beacon-aplus"), a = [ "//assets.alicdn.com/g", "//g-assets.daily.taobao.net", "//alidt.oss-cn-hangzhou.aliyuncs.com" ];
            if (n) for (var o = 0; o < a.length; o++) {
                var r = new RegExp(a[o]);
                if (r.test(n.src)) {
                    e = a[o];
                    break;
                }
            }
        }
        return e;
    }
    function o() {
        s || (s = a());
        var t = "//assets.alicdn.com/g" === s || "//laz-g-cdn.alicdn.com" === s;
        return t || "int" === f.getMetaInfo("aplus-env");
    }
    function r() {
        if (navigator && navigator.userAgent) {
            var t = /iphone|android/i.test(navigator.userAgent), e = t || /TB\-PD/i.test(navigator.userAgent);
            return e;
        }
        return !0;
    }
    function i() {
        var t, e = c.getParamFromUrl("utparamcnt", location.href);
        if (e) try {
            t = e = JSON.parse(decodeURIComponent(e));
        } catch (t) {}
        return t;
    }
    var s, u = n(2), c = n(16), l = n(17), p = n(18), f = n(19);
    t.exports = function(t) {
        var e = u.getGlobalValue("aplus"), s = t.globalConfig.NAME_STORAGE_KEYS, c = n(30).getRefer(s);
        e.nameStorage = p.nameStorage, l.haveNativeFlagInUA();
        var g = e._$ = e._$ || {};
        g.is_terminal = r(), g.send_pv_count = 0, g.page_referrer = c, g.spm = {
            data: {},
            page_referrer: c
        }, e.globalConfig = t.globalConfig;
        var d = i();
        g.meta_info = f.qGet() || {};
        for (var h in t.metaInfo) if (!g.meta_info.hasOwnProperty(h)) {
            var _ = t.metaInfo[h];
            "aplus-utparam" === h ? (d && f.appendMetaInfo(h, d), f.appendMetaInfo(h, _)) : f.setMetaInfo(h, _);
        }
        e._$ = g, e.isInternational = o, e.getCdnPath = a;
    };
}, function(t, e) {
    "use strict";
    function n(t, e) {
        if (!t || !e) return "";
        var n, a = "";
        try {
            var o = new RegExp(t + "=([^&|#|?|/]+)");
            if ("spm" === t || "scm" === t) {
                var r = new RegExp("\\?.*" + t + "=([\\w\\.\\-\\*/]+)"), i = e.match(o), s = e.match(r), u = i && 2 === i.length ? i[1] : "", c = s && 2 === s.length ? s[1] : "";
                a = u > c ? u : c, a = decodeURIComponent(a);
            } else n = e.match(o), a = n && 2 === n.length ? n[1] : "";
        } catch (t) {} finally {
            return a;
        }
    }
    e.getParamFromUrl = n, e.getSPMFromUrl = function(t) {
        return n("spm", t);
    };
}, function(t, e, n) {
    "use strict";
    var a = n(2), o = "UT4Aplus", r = "Umeng4Aplus";
    e.isNative4Aplus = function() {
        var t = a.getGlobalValue("aplus"), e = t.getMetaInfo("aplus-toUT"), n = t.aplusBridgeName;
        return n === o && e === o || n === r;
    }, e.haveNativeFlagInUA = function() {
        var t = a.getGlobalValue("aplus"), e = t.aplusBridgeName;
        if (!e && "boolean" != typeof e && navigator && navigator.userAgent) {
            var n = new RegExp([ o, r ].join("|"), "i"), i = navigator.userAgent.match(n);
            e = !!i && i[0], t.aplusBridgeName = e;
        }
        return !!e;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(2), o = function() {
        function t() {
            var t, e = [], n = !0;
            for (var a in f) f.hasOwnProperty(a) && (n = !1, t = f[a] || "", e.push(l(a) + u + l(t)));
            window.name = n ? o : r + l(o) + s + e.join(c);
        }
        function e(t, e, n) {
            t && (t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, function(e) {
                n.call(t, e);
            }));
        }
        var n = a.getGlobalValue("nameStorage");
        if (n) return n;
        var o, r = "nameStorage:", i = /^([^=]+)(?:=(.*))?$/, s = "?", u = "=", c = "&", l = encodeURIComponent, p = decodeURIComponent, f = {}, g = {};
        return function(t) {
            if (t && 0 === t.indexOf(r)) {
                var e = t.split(/[:?]/);
                e.shift(), o = p(e.shift()) || "";
                for (var n, a, s, u = e.join(""), l = u.split(c), g = 0, d = l.length; g < d; g++) n = l[g].match(i),
                n && n[1] && (a = p(n[1]), s = p(n[2]) || "", f[a] = s);
            } else o = t || "";
        }(window.name), g.setItem = function(e, n) {
            e && "undefined" != typeof n && (f[e] = String(n), t());
        }, g.getItem = function(t) {
            return f.hasOwnProperty(t) ? f[t] : null;
        }, g.removeItem = function(e) {
            f.hasOwnProperty(e) && (f[e] = null, delete f[e], t());
        }, g.clear = function() {
            f = {}, t();
        }, g.valueOf = function() {
            return f;
        }, g.toString = function() {
            var t = window.name;
            return 0 === t.indexOf(r) ? t : r + t;
        }, e(window, "beforeunload", function() {
            t();
        }), g;
    }();
    e.nameStorage = o;
}, function(t, e, n) {
    "use strict";
    function a(t) {
        var e, n, a, o = t.length, r = {};
        for (v._microscope_data = r, e = 0; e < o; e++) n = t[e], "microscope-data" === h.tryToGetAttribute(n, "name") && (a = h.tryToGetAttribute(n, "content"),
        f.parseSemicolonContent(a, r), v.is_head_has_meta_microscope_data = !0);
        v._microscope_data_params = l.obj2param(r), v.ms_data_page_id = r.pageId, v.ms_data_shop_id = r.shopId,
        v.ms_data_instance_id = r.siteInstanceId, v.ms_data_siteCategoryId = r.siteCategory,
        v.ms_prototype_id = r.prototypeId, v.site_instance_id_or_shop_id = v.ms_data_instance_id || v.ms_data_shop_id,
        v._atp_beacon_data = {}, v._atp_beacon_data_params = "";
    }
    function o(t) {
        var e, n = function() {
            var e;
            return document.querySelector && (e = document.querySelector("meta[name=data-spm]")),
            d(t, function(t) {
                "data-spm" === h.tryToGetAttribute(t, "name") && (e = t);
            }), e;
        }, a = n();
        return a && (e = h.tryToGetAttribute(a, "data-spm-protocol")), e;
    }
    function r(t) {
        var e = t.isonepage || "-1", n = e.split("|"), a = n[0], o = n[1] ? n[1] : "";
        t.isonepage_data = {
            isonepage: a,
            urlpagename: o
        };
    }
    function i() {
        if (document) {
            var t = _.getMetaTags();
            a(t), d(t, function(t) {
                var e = h.tryToGetAttribute(t, "name");
                if (/^aplus/.test(e) && (v[e] = _.getMetaCnt(e), e === m)) try {
                    u = v[e] = JSON.parse(_.getMetaCnt(e));
                } catch (t) {}
            }), d(y, function(t) {
                v[t] = _.getMetaCnt(t);
            }), v.spm_protocol = o(t), u && (v = p.assign(v, u));
            var e, n, i = [ "aplus-rate-ahot" ], s = i.length;
            for (e = 0; e < s; e++) n = i[e], v[n] = parseFloat(v[n]);
            r(v);
        }
        return c = v || {}, v;
    }
    function s(t) {
        g.logger({
            msg: "please do not repeat setPriorityMetaInfo " + t
        });
    }
    var u, c, l = n(20), p = n(21), f = n(23), g = n(26), d = n(27), h = n(28), _ = n(29), v = {}, m = "aplus-x-settings", y = [ "ahot-aplus", "isonepage", "spm-id", "data-spm", "microscope-data" ];
    e.getInfo = i, e.qGet = function() {
        return c || i();
    }, e.setMetaInfo = function(t, e) {
        if (c || (c = {}), "object" == typeof u && u[t]) return s(t), !0;
        if (t === m) {
            if (u) s(t); else try {
                u = "object" == typeof e ? e : JSON.parse(e), c = p.assign(c, u);
            } catch (t) {
                console && console.log(t);
            }
            return !0;
        }
        return "aplus-exinfo" === t ? c[t] = "object" == typeof e ? e : l.param2obj(e) : c[t] = e,
        !0;
    };
    var b = function(t) {
        return c || (c = {}), c[t] || "";
    };
    e.getMetaInfo = b, e.appendMetaInfo = function(t, e) {
        if (t && e) {
            var n, a = function(n) {
                try {
                    var a = "string" == typeof e ? JSON.parse(e) : e;
                    i(t, p.assign(n, a));
                } catch (t) {}
            }, o = function(n) {
                try {
                    var a = "string" == typeof e ? JSON.parse(e) : e;
                    i(t, n.concat(a));
                } catch (t) {}
            }, r = function(t) {
                t.constructor === Array ? o(t) : a(t);
            }, i = function(t, e) {
                aplus.setMetaInfo(t, e, {
                    from: "appendMetaInfo"
                });
            }, s = function(n) {
                var a = l.param2obj(e);
                i(t, p.assign(n, a));
            }, u = aplus.getMetaInfo(t);
            if ("aplus-exinfo" === t && (s(u), n = !0), u) if ("object" == typeof u) r(u), n = !0; else try {
                var c = JSON.parse(u);
                "object" == typeof c && (r(c), n = !0);
            } catch (t) {}
            n || i(t, e);
        }
    };
}, function(t, e) {
    "use strict";
    function n(t, e) {
        var n, o, r, i = [], s = t.length;
        for (r = 0; r < s; r++) {
            n = t[r][0], o = t[r][1];
            var u = 0 === n.indexOf(a), c = u || e ? o : encodeURIComponent(o);
            i.push(u ? c : n + "=" + c);
        }
        return i.join("&");
    }
    e.arr2obj = function(t) {
        var e, n, a, o = {}, r = t.length;
        for (a = 0; a < r; a++) e = t[a][0], n = t[a][1], o[e] = n;
        return o;
    }, e.param2obj = function(t) {
        if ("object" == typeof t) return t;
        t || (t = "");
        for (var e = {}, n = t.split("&"), a = 0; a < n.length; a++) {
            var o = n[a], r = o.indexOf("="), i = o.split("="), s = o.length;
            if (2 === i.length) e[i[0]] = i[1] || ""; else if (r > 0) {
                var u = o.slice(0, r), c = o.slice(r + 1, s) || "";
                e[u] = c;
            } else e[i[0]] = "";
        }
        return e;
    };
    var a = "::-plain-::";
    e.s_plain_obj = a, e.arr2param = n, e.obj2param = function(t, e) {
        var n, o, r, i = [];
        for (n in t) n && t.hasOwnProperty(n) && (o = "" + t[n], r = n + "=" + o, e ? i.push(r) : i.push(0 === n.indexOf(a) ? o : r));
        return i.join("&");
    }, e.encodeGokeyValue = function(t) {
        return t;
    };
}, function(t, e, n) {
    "use strict";
    e.assign = n(22), e.makeCacheNum = function() {
        return Math.floor(268435456 * Math.random()).toString(16);
    }, e.isStartWith = function(t, e) {
        return 0 === t.indexOf(e);
    }, e.isEndWith = function(t, e) {
        var n = t.length, a = e.length;
        return n >= a && t.indexOf(e) == n - a;
    }, e.any = function(t, e) {
        var n, a = t.length;
        for (n = 0; n < a; n++) if (e(t[n])) return !0;
        return !1;
    }, e.isNumber = function(t) {
        return "number" == typeof t;
    }, e.isContain = function(t, e) {
        return t.indexOf(e) > -1;
    };
    var a = function(t) {
        var e, n = t.constructor === Array ? [] : {};
        if ("object" == typeof t) {
            if (JSON && JSON.parse) e = JSON.stringify(t), n = JSON.parse(e); else for (var o in t) n[o] = "object" == typeof t[o] ? a(t[o]) : t[o];
            return n;
        }
    };
    e.cloneDeep = a;
}, function(t, e) {
    t.exports = function(t, e) {
        return "function" != typeof Object.assign ? function(t) {
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var a = arguments[n];
                if (null !== a) for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
            }
            return e;
        }(t, e) : Object.assign({}, t, e);
    };
}, function(t, e, n) {
    "use strict";
    var a = n(24), o = n(25);
    t.exports = {
        tryToDecodeURIComponent: function(t, e) {
            var n = e || "";
            if (t) try {
                n = decodeURIComponent(t);
            } catch (t) {}
            return n;
        },
        parseSemicolonContent: function(t, e, n) {
            e = e || {};
            var o, r, i = t.split(";"), s = i.length;
            for (o = 0; o < s; o++) {
                r = i[o].split("=");
                var u = a.trim(r.slice(1).join("="));
                e[a.trim(r[0]) || ""] = n ? u : this.tryToDecodeURIComponent(u);
            }
            return e;
        },
        nodeListToArray: function(t) {
            var e, n;
            try {
                return e = [].slice.call(t);
            } catch (o) {
                e = [], n = t.length;
                for (var a = 0; a < n; a++) e.push(t[a]);
                return e;
            }
        },
        getLsCna: function(t, e) {
            if (o.set && o.test()) {
                var n = "", a = o.get(t);
                if (a) {
                    var r = a.split("_") || [];
                    n = e ? r.length > 1 && e === r[0] ? r[1] : "" : r.length > 1 ? r[1] : "";
                }
                return decodeURIComponent(n);
            }
            return "";
        },
        setLsCna: function(t, e, n) {
            n && o.set && o.test() && o.set(t, e + "_" + encodeURIComponent(n));
        },
        getUrl: function(t) {
            var e = t || "//log.mmstat.com/eg.js";
            try {
                var n = aplus.getMetaInfo("aplus-rhost-v"), a = /[[a-z|\-|\_|0-9\.]+[a-z|\-|\_|0-9]/, o = n.match(a);
                o && o[0] && (e = "//" + o[0] + "/eg.js");
            } catch (t) {}
            return e;
        }
    };
}, function(t, e) {
    "use strict";
    function n(t) {
        return "string" == typeof t ? t.replace(/^\s+|\s+$/g, "") : "";
    }
    e.trim = n;
}, function(t, e) {
    "use strict";
    t.exports = {
        set: function(t, e) {
            try {
                return localStorage.setItem(t, e), !0;
            } catch (t) {
                return !1;
            }
        },
        get: function(t) {
            try {
                return localStorage.getItem(t);
            } catch (t) {
                return "";
            }
        },
        test: function() {
            var t = "grey_test_key";
            try {
                return localStorage.setItem(t, 1), localStorage.removeItem(t), !0;
            } catch (t) {
                return !1;
            }
        },
        remove: function(t) {
            localStorage.removeItem(t);
        }
    };
}, function(t, e) {
    "use strict";
    var n = "[aplus日志]: ";
    e.logger = function(t) {
        t || (t = {});
        var e = t.level || "warn";
        console && console[e] && console[e](n + t.msg);
    };
}, function(t, e) {
    "use strict";
    t.exports = function(t, e) {
        var n, a = t.length;
        for (n = 0; n < a; n++) {
            var o = e(t[n], n);
            if ("break" === o) break;
        }
    };
}, function(t, e) {
    "use strict";
    e.tryToGetAttribute = function(t, e) {
        return t && t.getAttribute ? t.getAttribute(e) || "" : "";
    };
    var n = function(t, e, n) {
        if (t && t.setAttribute) try {
            t.setAttribute(e, n);
        } catch (t) {}
    };
    e.tryToSetAttribute = n, e.tryToRemoveAttribute = function(t, e) {
        if (t && t.removeAttribute) try {
            t.removeAttribute(e);
        } catch (a) {
            n(t, e, "");
        }
    };
}, function(t, e, n) {
    "use strict";
    function a(t) {
        return i = i || document.getElementsByTagName("head")[0], s && !t ? s : i ? s = i.getElementsByTagName("meta") : [];
    }
    function o(t, e) {
        var n, o, r, i = a(), s = i.length;
        for (n = 0; n < s; n++) o = i[n], u.tryToGetAttribute(o, "name") === t && (r = u.tryToGetAttribute(o, e || "content"));
        return r || "";
    }
    function r(t) {
        var e = {
            isonepage: "-1",
            urlpagename: ""
        }, n = t.qGet();
        if (n && n.hasOwnProperty("isonepage_data")) e.isonepage = n.isonepage_data.isonepage,
        e.urlpagename = n.isonepage_data.urlpagename; else {
            var a = o("isonepage") || "-1", r = a.split("|");
            e.isonepage = r[0], e.urlpagename = r[1] ? r[1] : "";
        }
        return e;
    }
    var i, s, u = n(28);
    e.getMetaTags = a, e.getMetaCnt = o, e.getOnePageInfo = r;
}, function(t, e, n) {
    "use strict";
    var a = n(18).nameStorage;
    e.getRefer = function(t) {
        return document.referrer || a.getItem(t.REFERRER) || "";
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                n(32)();
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    function a(t) {
        var e, n = window.aplus || (window.aplus = {}), a = !1, l = function() {
            a || (o.wrap(function() {
                e = c.getAutoClkConfig();
                var t;
                e && e.length > 0 && (t = u.create({
                    autoClkConfig: e
                }), t.init(), s.watch_clk()), n.aplus_pubsub.subscribe("setMetaInfo", function(n, a, o) {
                    if ("aplus-auto-clk" === n) {
                        var r = c.getAutoClkConfig(a);
                        if (JSON.stringify(r) === JSON.stringify(e)) return;
                        e = r, s.clear(), o || (o = {
                            from: "setMetaInfo"
                        }), t && t.clear(o), t && t.clearDom({
                            autoClkConfig: e
                        }, o), a && (t ? t.reset({
                            autoClkConfig: e
                        }, o) : (t = u.create({
                            autoClkConfig: e
                        }), t.init()), s.watch_clk());
                    }
                });
            }, "do_init"), a = !0);
        };
        setTimeout(function() {
            a || i.logger({
                msg: "aplus_ac_init failed! please check whether aplusJs is loaded correctly!"
            });
        }, 5e3);
        var p = n._$ || {}, f = window.g_SPM || {};
        "complete" === p.status && f.spm && l();
        var g = window.aplus_queue || (window.aplus_queue = []);
        g.push({
            action: r.SUBSCRIBE,
            arguments: [ "aplusReady", function(t) {
                "complete" === t && l("aplusReady");
            } ]
        }), "function" == typeof t && t();
    }
    var o = n(33), r = n(3), i = n(26), s = n(34), u = n(44), c = n(43);
    t.exports = function() {
        var t = window.aplus || (window.aplus = {});
        t._aplus_ac || (t._aplus_ac = {
            status: "init",
            elementSelectorSizeMap: {}
        }, a(function() {
            t._aplus_ac.status = "complete";
        }));
    };
}, function(t, e, n) {
    "use strict";
    var a = n(2), o = function(t, e) {
        var n = a.getGlobalValue("aplus_queue", []);
        n.push({
            action: "aplus._aplus_cplugin_track_deb.monitor",
            arguments: [ {
                key: "APLUS_PLUGIN_DEBUG",
                title: "aplus_core",
                msg: [ "_error_:methodName=" + e + ",params=" + JSON.stringify(t) ],
                type: "updateMsg",
                description: e || "aplus_core"
            } ]
        });
    }, r = function(t, e, n) {
        var o = a.getGlobalValue("aplus_queue", []);
        o.push({
            action: [ "aplus", "_aplus_cplugin_m", e ].join("."),
            arguments: [ t, n ]
        });
    };
    e.do_tracker_jserror = function(t, e) {
        var n = "do_tracker_jserror";
        r(t, n, e), o(t, n);
        var i = a.getGlobalValue("aplus");
        i && i.aplusDebug && console && console.warn(t);
    }, e.wrap = function(t) {
        if ("function" == typeof t) try {
            t();
        } catch (t) {
            o({
                msg: t.message || t
            }, "exception");
        } finally {}
    };
}, function(t, e, n) {
    "use strict";
    var a = n(35), o = n(28), r = n(36), i = n(2), s = n(21), u = n(37), c = n(27), l = n(38), p = n(40), f = n(43), g = window, d = [ "iframe", "html", "body", "head" ], h = f.DATA_APLUS_AC_KEY, _ = function(t) {
        var e = [], n = t ? o.tryToGetAttribute(t, h) : "";
        if (n) {
            var a = i.getGoldlogVal("_aplus_ac") || {}, r = a._acHashMap || {};
            u(r, function(t, a) {
                c(a, function(t) {
                    t.hash_value === n && e.push(t.clkConfig);
                });
            });
        }
        return {
            clkConfigs: e,
            el: t
        };
    }, v = function(t) {
        var e = _(t);
        if (e && e.clkConfigs && e.clkConfigs.length > 0) return e;
        for (;(t = t.parentNode) && a.indexof(d, t.tagName ? t.tagName.toLowerCase() : "html") === -1; ) if (e = _(t),
        e && e.clkConfigs && e.clkConfigs.length > 0) return e;
    }, m = function(t) {
        t = t || g.event;
        var e = t.target || t.srcElement, n = v(e) || {}, a = n.clkConfigs;
        n && a && n.el && c(a, function(a) {
            var o = a;
            e = n.el;
            var r = aplus.spm_ab ? aplus.spm_ab.join(".") : "0.0", i = r + ".0.0", u = "";
            g.g_SPM && "function" == typeof g.g_SPM.spm && (i = g.g_SPM.spm(e));
            var c = [], l = {}, d = p.fillPropsData(o, e, l);
            d = p.fillFilterData(o, e, l);
            var h = f.getAutoClkUserFn();
            if (h) {
                var _ = p.autoUserFnHandler(h, e, o.elementSelector, t);
                if ("object" == typeof _) "object" == typeof _.userdata && (d = s.assign(d, _.userdata)),
                _.spm && (i = _.spm), _.scm && (u = _.scm); else if (_ === !1) return;
            }
            if (aplus.globalConfig.isAli) c.push("clkdata=" + JSON.stringify([ {
                exargs: d,
                scm: u,
                spm: i,
                aplusContentId: ""
            } ])); else for (var v in d) c.push(v + "=" + d[v]);
            c.push("_is_auto_clk=1");
            var m = o.method || "POST";
            aplus.globalConfig.isAli || (m = "GET"), "$$_APLUS" !== o.logkey && aplus_queue.push({
                action: "aplus.record",
                arguments: [ o.logkey, "CLK", c.join("&"), m ]
            });
        });
    };
    e.watch_clk = function() {
        r.isTouch() ? l.on(document, "tap", m) : l.on(document, "mousedown", m);
    }, e.clear = function() {
        r.isTouch() ? l.un(document, "tap", m) : l.un(document, "mousedown", m);
    };
}, function(t, e) {
    "use strict";
    e.indexof = function(t, e) {
        var n = -1;
        try {
            n = t.indexOf(e);
        } catch (o) {
            for (var a = 0; a < t.length; a++) t[a] === e && (n = a);
        } finally {
            return n;
        }
    }, e.isArray = function(t) {
        return Array.isArray ? Array.isArray(t) : /Array/.test(Object.prototype.toString.call(t));
    };
}, function(t, e, n) {
    "use strict";
    function a() {
        return i || (i = document.getElementById("beacon-aplus") || document.getElementById("tb-beacon-aplus")),
        i;
    }
    function o(t) {
        var e = a(), n = s.tryToGetAttribute(e, "cspx");
        t && n && (t.nonce = n);
    }
    var r, i, s = n(28), u = n(3);
    e.getCurrentNode = a, e.addScript = function(t, e, n) {
        var i = "script", s = document.createElement(i);
        s.type = "text/javascript", s.async = !0;
        var c = a(), l = c && c.hasAttribute("crossorigin");
        l && (s.crossOrigin = "anonymous");
        var p = u.HTTPS === location.protocol ? e || t : t;
        0 === p.indexOf("//") && (p = u.HTTPS + p), s.src = p, n && (s.id = n), o(s);
        var f = document.getElementsByTagName(i)[0];
        r = r || document.getElementsByTagName("head")[0], f ? f.parentNode.insertBefore(s, f) : r && r.appendChild(s);
    }, e.loadScript = function(t, e) {
        function n(t) {
            a.onreadystatechange = a.onload = a.onerror = null, a = null, e(t);
        }
        var a = document.createElement("script");
        if (r = r || document.getElementsByTagName("head")[0], a.async = !0, "onload" in a) a.onload = n; else {
            var i = function() {
                /loaded|complete/.test(a.readyState) && n();
            };
            a.onreadystatechange = i, i();
        }
        a.onerror = function(t) {
            n(t);
        }, a.src = t, o(a), r.appendChild(a);
    }, e.isTouch = function() {
        return "ontouchend" in document.createElement("div");
    };
}, function(t, e) {
    "use strict";
    t.exports = function(t, e) {
        if (Object && Object.keys) for (var n = Object.keys(t), a = n.length, o = 0; o < a; o++) {
            var r = n[o];
            e(r, t[r]);
        } else for (var i in t) e(i, t[i]);
    };
}, function(t, e, n) {
    "use strict";
    function a() {
        var t = aplus._$ || {}, e = t.meta_info || {}, n = e.aplus_ctap || {};
        return n && "function" == typeof n.on ? n : null;
    }
    function o(t, e) {
        var n = a();
        n ? n.on(t, e) : s.on(t, e);
    }
    function r(t, e) {
        var n = a();
        n ? n.un(t, e) : s.un(t, e);
    }
    var i = !!document.attachEvent, s = n(39);
    e.on = function(t, e, n) {
        return "tap" === e ? void o(t, n) : void (i ? t.attachEvent(e, n) : t.addEventListener(e, n));
    }, e.un = function(t, e, n) {
        return "tap" === e ? void r(t, n) : void (i ? t.detachEvent(e, n) : t.removeEventListener(e, n));
    };
}, function(t, e) {
    "use strict";
    function n(t, e) {
        return t + Math.floor(Math.random() * (e - t + 1));
    }
    function a(t, e, n) {
        var a = document.createEvent("HTMLEvents");
        if (a.initEvent(e, !0, !0), "object" == typeof n) for (var o in n) a[o] = n[o];
        t.dispatchEvent(a);
    }
    function o(t) {
        var e = document.documentElement;
        0 === Object.keys(l).length && (e.addEventListener(g, r, !1), e.addEventListener(f, i, !1),
        e.addEventListener(h, i, !1));
        for (var n = 0; n < t.changedTouches.length; n++) {
            var a = t.changedTouches[n], o = {};
            for (var s in a) o[s] = a[s];
            var u = {
                startTouch: o,
                startTime: Date.now(),
                status: d,
                element: t.srcElement || t.target
            };
            l[a.identifier] = u;
        }
    }
    function r(t) {
        for (var e = 0; e < t.changedTouches.length; e++) {
            var n = t.changedTouches[e], a = l[n.identifier];
            if (!a) return;
            var o = n.clientX - a.startTouch.clientX, r = n.clientY - a.startTouch.clientY, i = Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
            (a.status === d || "pressing" === a.status) && i > 10 && (a.status = "panning");
        }
    }
    function i(t) {
        for (var e = 0; e < t.changedTouches.length; e++) {
            var n = t.changedTouches[e], o = n.identifier, s = l[o];
            s && (s.status === d && t.type === f && (s.timestamp = Date.now(), a(s.element, _, {
                touch: n,
                touchEvent: t
            })), delete l[o]);
        }
        var u = document.documentElement;
        0 === Object.keys(l).length && (u.removeEventListener(g, r, !1), u.removeEventListener(f, i, !1),
        u.removeEventListener(h, i, !1));
    }
    function s(t) {
        t.__fixTouchEvent || (t.addEventListener(p, function() {}, !1), t.__fixTouchEvent = !0);
    }
    function u() {
        if (!c) {
            var t = document.documentElement;
            t.addEventListener(p, o, !1), c = !0;
        }
    }
    var c = !1, l = {}, p = "touchstart", f = "touchend", g = "touchmove", d = "tapping", h = "touchcancel", _ = "aplus_tap" + n(1, 1e5);
    t.exports = {
        on: function(t, e) {
            u(), t && t.addEventListener && e && (s(t), t.addEventListener(_, e._aplus_tap_callback = function(t) {
                e(t, t.target);
            }, !1));
        },
        un: function(t, e) {
            t && t.removeEventListener && e && e._aplus_tap_callback && t.removeEventListener(_, e._aplus_tap_callback, !1);
        }
    };
}, function(t, e, n) {
    "use strict";
    function a(t, e, n) {
        var a = e.hash_value, o = i.getGoldlogVal(n) || {};
        if (o.hash_value || (o.hash_value = {}), o.hash_value[t] || (o.hash_value[t] = r.Map ? new r.Map() : {}),
        r.Map) {
            var s = o.hash_value[t].get(a);
            s ? ++s : s = 1, o.hash_value[t].set(a, s);
        } else o.hash_value[t][a] ? ++o.hash_value[t][a] : o.hash_value[t][a] = 1;
        i.setGoldlogVal(n, o);
    }
    var o = document, r = window, i = n(2), s = n(26), u = n(41), c = n(27), l = n(37), p = n(42), f = n(43), g = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    };
    e.isArray = g, e.getXPath = function(t) {
        var e, n, a, r, i, s, u = o.getElementsByTagName("*");
        for (e = []; t && 1 == t.nodeType; t = t.parentNode) if (t.id) {
            for (s = t.id, r = 0, n = 0; n < u.length; n++) if (i = u[n], i.id && i.id == s) {
                r++;
                break;
            }
            if (e.unshift(t.tagName.toLowerCase() + '[@id="' + s + '"]'), 1 == r) return e.unshift("/"),
            e.join("/");
        } else {
            for (n = 1, a = t.previousSibling; a; a = a.previousSibling) a.tagName == t.tagName && n++;
            e.unshift(t.tagName.toLowerCase() + "[" + n + "]");
        }
        return e.length ? "/" + e.join("/") : null;
    };
    var d = function(t, e) {
        if (e && 0 !== e.length || (e = []), t && t.length > 0) for (var n = 0; n < t.length; n++) e.push(t[n]);
        return e;
    };
    e.nodelistToArray = d, e.getElements = function(t, e) {
        var n = e || o, a = [];
        if (n.querySelectorAll) a = d(n.querySelectorAll(t.elementSelector) || []); else for (var r = document.getElementsByTagName(t.tag), i = t.filter.split("="), s = i.length > 0 ? i[0].trim() : "", u = i.length > 1 ? i[1].trim() : "", c = 0; c < r.length; c++) {
            var l = r[c], p = l.getAttribute(s), f = l.hasAttribute(s);
            !f || u && u !== p || a.push(l);
        }
        return a;
    };
    var h = function() {
        return /aplusDebug=true/.test(location.search);
    }, _ = h();
    e.IS_DEBUG = _, e.fillPropsData = function(t, e, n) {
        n || (n = {});
        try {
            var a = t.props || [];
            if (a && g(a) && a.length > 0) for (var o = 0; o < a.length; o++) if (e && e.getAttribute) {
                var r = a[o], i = e.getAttribute(r);
                void 0 !== typeof i && null !== i && "" !== i && (n[r] = encodeURIComponent(i));
            }
        } catch (t) {
            s.logger({
                msg: t && t.message
            });
        }
        return n;
    }, e.fillFilterData = function(t, e, n) {
        n || (n = {});
        try {
            var a = t.filter || "", o = a.split("=");
            if (g(o) && o[1]) n[o[0]] = o[1]; else if (o[0] && e && e.getAttribute) {
                var r = e.getAttribute(o[0]) || "";
                void 0 !== typeof r && null !== r && "" !== r && (n[o[0]] = r);
            }
        } catch (t) {
            s.logger({
                msg: t && t.message
            });
        }
        return n;
    };
    var v = function(t) {
        return !!/^POST|GET$/i.test(t);
    };
    e.isMethod = v;
    var m = function(t) {
        var e = !!/^\d+$/.test(t);
        return !!(e && parseInt(t) > 0);
    };
    e.isPkgSize = m, e.filterExpConfigRequestCfg = function(t) {
        var e = f.getDefaultRequestCfg() || {};
        try {
            var n = t || {};
            v(n.method) && (e.method = n.method), m(n.pkgSize) && (e.pkgSize = parseInt(n.pkgSize));
        } catch (t) {
            s.logger({
                msg: t && t.message
            });
        }
        return e;
    };
    var y = function(t) {
        var e = t.split("&"), n = {};
        return e.length > 0 && c(e, function(t) {
            var e = t.split("=");
            2 === e.length && (n[e[0]] = p.tryToEncodeURIComponent(e[1]));
        }), n;
    };
    e.autoUserFnHandler = function(t, e, n, a) {
        var o = {
            userdata: {},
            spm: "",
            scm: ""
        };
        try {
            var r = t(e, n, a);
            r && ("string" == typeof r ? o.userdata = y(r) : "object" == typeof r && "object" == typeof r.userdata && (l(r.userdata, function(t, e) {
                o.userdata[t] = p.tryToEncodeURIComponent(e);
            }), o.spm = r.spm, o.scm = r.scm));
        } catch (t) {
            console.log(t);
        }
        return o;
    };
    var b = function(t, e) {
        var n = "";
        if (t && e) {
            var a = [ t.getAttribute(e.filter) ], o = e.props || [];
            if (o) for (var r = 0; r < o.length; r++) a.push(t.getAttribute(o[r]));
            n = a.join("_");
        }
        return n;
    }, w = function(t) {
        var e = t.getAttribute("data-spm-anchor-id");
        if (e) {
            var n = e.split(".");
            return {
                a: n[0],
                b: n[1],
                c: n[2],
                d: n[3],
                e: n[4]
            };
        }
    };
    e.getSpmObj = w, e.getElementHash = function(t, e) {
        var n = {};
        "aplus_webvt" !== t.source && (n = w(e.ele) || (window.g_SPM ? window.g_SPM.getParam(e.ele) : {}));
        var a = "", o = "x" + e.index;
        if (n.a && n.b && n.c && n.d) {
            var r = /^i/.test(n.d) ? o : n.d;
            a = n.a + "_" + n.b + "_" + n.c + "_" + r, n.e && (a += "_" + n.e);
        } else a = o, aplus.pvid && (a += aplus.pvid);
        e.ignore_attr || (a += t.logkey + "_", a += t.elementSelector + "_", a += b(e.ele, t));
        var i = o + "_" + u.hash(a);
        return i;
    }, e.filterUnloadAttr = function(t) {
        return t && (t = t.replace(/(href|style|data-spm-anchor-id)=[\'|\"][\w|\W|\.]+[\'|\"]/, ""),
        t = t.replace(/\s\>/g, ">"), t = t.replace(new RegExp(f.DATA_APLUS_AE_KEY + "=[\\'|\\\"]\\w+[\\'|\\\"]"), ""),
        t = t.replace(new RegExp(f.DATA_APLUS_AC_KEY + "=[\\'|\\\"]\\w+[\\'|\\\"]"), "")),
        t;
    };
    var E = function(t, e) {
        for (var n, a = 0, o = t.length; a < o; ) {
            var r = t[a] || {};
            if (r.hash_value === e.hash_value) return t[a] = e, n = !0, t;
            a++;
        }
        return n || t.push(e), t;
    }, S = function(t, e, n, o) {
        if (n || (n = "ADD"), t && "object" == typeof e) {
            var r = i.getGoldlogVal(o) || {}, s = r._acHashMap || {}, u = s[t] || [], c = function() {
                for (var t = 0, n = u.length; t < n; ) {
                    var a = u[t] || {};
                    if (a.hash_value === e.hash_value) return t;
                    t++;
                }
                return -1;
            }, l = c();
            "ADD" === n && l === -1 ? (u.push(e), a(t, e, o)) : "CLEAR" === n && l > -1 ? u.splice(l, 1) : "UPDATE" === n && (u = E(u, e)),
            s[t] = u, r._acHashMap = s, i.setGoldlogVal(o, r);
        }
    };
    e.updateExpHashMap = function(t, e, n) {
        S(t, e, n, "_aplus_auto_exp");
    }, e.updateClkHashMap = function(t, e, n) {
        S(t, e, n, "_aplus_ac");
    };
    var A = function() {
        return new Date().getTime();
    };
    e.throttle = function(t, e, n) {
        var a, o, r, i, s = 0;
        n || (n = {});
        var u = function() {
            s = n.leading === !1 ? 0 : A(), a = null, i = t.apply(o, r), a || (o = r = null);
        }, c = function() {
            var c = A();
            s || n.leading !== !1 || (s = c);
            var l = e - (c - s);
            return o = this, r = arguments, l <= 0 || l > e ? (a && (clearTimeout(a), a = null),
            s = c, i = t.apply(o, r), a || (o = r = null)) : a || n.trailing === !1 || (a = setTimeout(u, l)),
            i;
        };
        return c.cancel = function() {
            clearTimeout(a), s = 0, a = o = r = null;
        }, c;
    }, e.checkIsInHashMap = function(t) {
        var e = i.getGoldlogVal(t.aplusKey) || {}, n = e.hash_value || {}, a = n[t.logkey] || (r.Map ? new r.Map() : {}), o = a && a.get ? a.get(t.hash_value) : a[t.hash_value];
        if (o > 1) return !0;
        for (var s = e._acHashMap || {}, u = s[t.logkey] || [], c = u.length, l = 0; l < c; l++) if (u[l].hash_value === t.hash_value) return !0;
        return !1;
    }, e.setRecordSuccess = function(t, e) {
        try {
            var n = t ? t.element : {}, a = t.hash_value || "";
            n && n.setAttribute && n.setAttribute(e, a);
        } catch (t) {}
    };
}, function(t, e) {
    "use strict";
    e.hash = function(t, e) {
        var n, a, o = 1315423911, r = e || o;
        for (n = t.length - 1; n >= 0; n--) a = t.charCodeAt(n), r ^= (r << 5) + a + (r >> 2);
        var i = (2147483647 & r).toString(16);
        return i;
    };
}, function(t, e) {
    "use strict";
    e.tryToEncodeURIComponent = function(t) {
        var e = t || "";
        if (t) try {
            e = encodeURIComponent(decodeURIComponent(t));
        } catch (t) {}
        return e;
    };
}, function(t, e, n) {
    "use strict";
    function a(t) {
        return aplus && aplus.getMetaInfo ? aplus.getMetaInfo(t) : r.getMetaCnt(t);
    }
    var o = n(35), r = n(29), i = n(26);
    e.DATA_APLUS_AE_KEY = "data-aplus-ae", e.DATA_APLUS_AC_KEY = "data-aplus-clk", e.LOOP_TIME = 1e3,
    e.getDefaultRequestCfg = function() {
        return {
            method: "POST",
            pkgSize: 10
        };
    };
    var s = function(t) {
        var e = t;
        try {
            var n = a("aplus-auto-exp-visible");
            n && (e = parseFloat(n)), e <= 0 && (e = t);
        } catch (n) {
            e = t;
        } finally {
            return e;
        }
    };
    e.AUTO_AT_VIEW_RATE = s(.3);
    var u = function(t) {
        var e = t;
        try {
            var n = a("aplus-auto-exp-duration"), o = parseInt(n);
            o + "" != "NaN" && (e = o);
        } catch (t) {} finally {
            return e;
        }
    };
    e.EXP_DURATION = u(300);
    var c = function(t, e) {
        var n, r = [], s = [];
        try {
            n = e || a(t);
            var u = [];
            if (n && "string" == typeof n) try {
                u = JSON.parse(n);
            } catch (t) {
                u = JSON.parse(n.replace(/'/g, '"'));
            } else "object" == typeof n && n.constructor === Array && (u = n);
            if (u && u.constructor === Array) for (var c = 0; c < u.length; c++) {
                var l = u[c] || {}, p = l.logkey || "", f = l.tag ? l.tag : "", g = l.filter, d = l.cssSelector, h = d || f && g;
                if (!p || !h) throw new Error("meta " + t + " config error, " + JSON.stringify(l));
                g = "string" == typeof g ? g.split("=") : [];
                var _ = f;
                if (g.length >= 2 ? _ += "[" + g.shift() + '="' + decodeURIComponent(g.join("")) + '"]' : 1 == g.length && g[0] && (_ += "[" + decodeURIComponent(g[0]) + "]"),
                d && (_ += d), l.elementSelector = _, o.indexof(s, _) > -1) throw new Error("meta " + t + " config error, tag_filter_cssSelector " + _ + " repeated");
                s.push(_), r.push(l);
            }
        } catch (t) {
            i.logger({
                msg: t
            });
        } finally {
            return r;
        }
    };
    e.getAutoExpConfig = function(t) {
        return c("aplus-auto-exp", t) || [];
    }, e.getAutoExpUserFn = function() {
        var t = a("aplus-auto-exp-userfn");
        if (t) {
            var e = window[t] || t;
            if ("function" == typeof e) return e;
        }
        return null;
    }, e.isThrottleWatchDom = function() {
        var t = !1;
        try {
            t = "throttle" === a("aplus-auto-exp-watchdom");
        } catch (t) {}
        return t;
    }, e.getAutoClkConfig = function(t) {
        return c("aplus-auto-clk", t) || [];
    }, e.getAutoClkUserFn = function() {
        var t = a("aplus-auto-clk-userfn");
        if (t) {
            var e = window[t] || t;
            if ("function" == typeof e) return e;
        }
        return null;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(11), o = n(33), r = n(26), i = n(38), s = n(40), u = n(43), c = window, l = document, p = a.extend({
        eachElements: function(t, e) {
            for (var n = e.logkey || "", a = 0; a < t.length; a++) {
                var o = t[a];
                e._pos_id && !o.getAttribute("data-aplus-pos-id") && o.setAttribute("data-aplus-pos-id", e._pos_id);
                var r = o.getAttribute(u.DATA_APLUS_AC_KEY);
                if (!(r && r.indexOf("_") > 0)) {
                    isNaN(parseInt(r)) && (r = aplus._aplus_ac.elementSelectorSizeMap[e.elementSelector]++,
                    o.setAttribute(u.DATA_APLUS_AC_KEY, r));
                    var i = s.getElementHash(e, {
                        ignore_attr: !1,
                        index: r,
                        ele: o
                    });
                    if (!s.checkIsInHashMap({
                        logkey: n,
                        hash_value: i,
                        aplusKey: "_aplus_ac"
                    })) {
                        var c = {
                            clkConfig: e,
                            hash_value: i,
                            element: o,
                            status: 0,
                            elementSelector: e.elementSelector
                        };
                        s.updateClkHashMap(n, c, "ADD"), s.setRecordSuccess(c, u.DATA_APLUS_AC_KEY);
                    }
                }
            }
        },
        handler_dom_change: function() {
            for (var t = this, e = t.autoClkConfig || [], n = 0; n < e.length; n++) {
                var a = e[n];
                aplus._aplus_ac.elementSelectorSizeMap[a.elementSelector] || (aplus._aplus_ac.elementSelectorSizeMap[a.elementSelector] = 1);
                var o = s.getElements(a, l);
                t.eachElements(o, a);
            }
        },
        throttle_handler_dom_change: s.throttle(function() {
            this.handler_dom_change();
        }, 200),
        init_observer: function(t, e) {
            var n = new t(function() {
                o.wrap(function() {
                    var t = aplus._aplus_ac || {};
                    ++t.observer_times, e();
                }, "init_observer_init_elements");
            }), a = {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            };
            n.observe(l.body, a), s.IS_DEBUG && r.logger({
                msg: "aplus_ac init MutationObserver success!"
            }), this._observer = n;
        },
        init_watch_dom: function() {
            var t = this, e = aplus._aplus_ac || {};
            t._loop_observer = setTimeout(function() {
                "blur" !== e.current_win_status ? (s.IS_DEBUG && r.logger({
                    msg: "watch_dom in ac LOOP_TIME is " + u.LOOP_TIME + "ms total: " + ++e.watch_times
                }), t.throttle_handler_dom_change(), t.init_watch_dom()) : e.watch_dom_running = !1;
            }, u.LOOP_TIME);
        },
        onFocusHandler: function() {
            var t = this, e = aplus._aplus_ac || {};
            e.current_win_status = "focus", e.watch_dom_running || t.init_watch_dom();
        },
        onBlurHandler: function() {
            var t = aplus._aplus_ac || {};
            t.current_win_status = "blur";
        },
        onVisibilityChange: function() {
            var t = this;
            "visible" === l.visibilityState ? t.onFocusHandler() : "hidden" === l.visibilityState && t.onBlurHandler();
        },
        addAllListener: function() {
            var t = this, e = aplus._aplus_ac || {};
            e.watch_times = 0, e.watch_dom_running = !0, t.init_watch_dom(), c.WindVane && l.addEventListener && (i.on(l, "WV.Event.APP.Active", t.onFocusHandler, !1),
            i.on(l, "WV.Event.APP.Background", t.onBlurHandler, !1)), "hidden" in l ? i.on(c, "visibilitychange", t.onVisibilityChange) : (i.on(c, "blur", t.onBlurHandler),
            i.on(c, "focus", t.onFocusHandler));
        },
        removeAllListener: function() {
            var t = this;
            c.WindVane && l.removeEventListener && (i.un(l, "WV.Event.APP.Active", t.onFocusHandler, !1),
            i.un(l, "WV.Event.APP.Background", t.onBlurHandler, !1)), "hidden" in l ? i.un(c, "visibilitychange", t.onVisibilityChange) : (i.un(c, "blur", t.onBlurHandler),
            i.un(c, "focus", t.onFocusHandler));
        },
        init: function() {
            var t = this, e = aplus._aplus_ac || {};
            t.throttle_handler_dom_change();
            var n = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver;
            n ? (e.observer_times = 0, t.init_observer(n, function() {
                t.throttle_handler_dom_change();
            })) : t.addAllListener();
        },
        clearDom: function(t, e) {
            var n = this.autoClkConfig || [];
            if (e && "appendMetaInfo" !== e.from) for (var a = 0; a < n.length; a++) try {
                for (var o = n[a].elementSelector, r = l.querySelectorAll(o), i = 0; i < r.length; i++) r[i].setAttribute(u.DATA_APLUS_AC_KEY, "");
            } catch (t) {}
            this.autoClkConfig = t && t.autoClkConfig;
        },
        clear: function(t) {
            if (!t || "appendMetaInfo" !== t.from) {
                var e = aplus._aplus_ac || {};
                e._acHashMap && (e._acHashMap = {}), e.hash_value && (e.hash_value = {}), aplus._aplus_ac = e,
                this._loop_observer && (clearTimeout(this._loop_observer), this._loop_observer = null),
                this._observer ? this._observer.disconnect() : this.removeAllListener();
            }
        },
        reset: function(t, e) {
            this.clearDom(t, e), this.init();
        }
    });
    t.exports = p;
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                n(46)();
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    function a() {
        r = n(48), i = n(window.IntersectionObserver ? 50 : 52), s = n(53), u = n(43);
    }
    function o(t) {
        var e, n = window.aplus || (window.aplus = {}), a = !1, o = !1, g = function(t) {
            o || (o = t, a || (c.wrap(function() {
                e = u.getAutoExpConfig() || [], p.isDebugAplus() && f.logger({
                    msg: "aplus-auto-exp metaVaue init: " + JSON.stringify(e)
                });
                var t;
                e && e.length > 0 && (s.watch_data_change(), i.watch_exposure_change(e), t = r.create({
                    isThrottleWatch: u.isThrottleWatchDom(),
                    autoExpConfig: e
                }), t.init({
                    type: "init"
                })), n.aplus_pubsub.subscribe("setMetaInfo", function(n, a, o) {
                    if ("aplus-auto-exp" === n) {
                        p.isDebugAplus() && f.logger({
                            msg: "aplus-auto-exp metaVaue change: " + JSON.stringify(a)
                        });
                        var c = u.getAutoExpConfig(a);
                        if (JSON.stringify(c) === JSON.stringify(e)) return;
                        if (e = c, s.clear(), o || (o = {
                            from: "setMetaInfo"
                        }), i.clear(e, o), t && t.clear(o), a && e && e.length > 0) {
                            s.watch_data_change(), i.watch_exposure_change(e);
                            var l = {
                                isThrottleWatch: u.isThrottleWatchDom(),
                                autoExpConfig: e
                            };
                            t ? t.reset(l, o) : (t = r.create(l), t.init({
                                type: "init"
                            }));
                        }
                    }
                });
            }, "do_init"), a = !0));
        };
        setTimeout(function() {
            a || f.logger({
                msg: "aplus_auto_exp_init failed! please check whether aplusJs is loaded correctly!"
            });
        }, 5e3);
        var d = n._$ || {}, h = window.g_SPM || {};
        "complete" === d.status && h.spm && g();
        var _ = window.aplus_queue || (window.aplus_queue = []);
        _.push({
            action: l.SUBSCRIBE,
            arguments: [ "aplusReady", function(t) {
                "complete" === t && g("aplusReady");
            } ]
        }), "function" == typeof t && t();
    }
    var r, i, s, u, c = n(33), l = n(3), p = n(47), f = n(26);
    t.exports = function() {
        var t = window.aplus || (window.aplus = {});
        t._aplus_auto_exp || (t._aplus_auto_exp = {
            tags: {},
            status: "init",
            exp_times: 0,
            elementSelectorSizeMap: {}
        }, a(), o(function() {
            t._aplus_auto_exp.status = "complete";
        }));
    };
}, function(t, e, n) {
    "use strict";
    var a, o = n(2);
    e.isDebugAplus = function(t) {
        if ("boolean" == typeof a) return a;
        if ("boolean" == typeof t && (a = t), localStorage && location) {
            var e = location.href.match(/aplusDebug=(true|false)/);
            e && e.length > 0 && localStorage.setItem("aplusDebug", e[1]), a = "true" === localStorage.getItem("aplusDebug");
        } else a = !1;
        return o.setGoldlogVal("aplusDebug", a), a;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(11), o = n(33), r = n(26), i = n(38), s = n(49), u = n(40), c = n(43), l = window, p = document, f = a.extend({
        eachElements: function(t, e) {
            for (var n = e.logkey || "", a = 0; a < t.length; a++) {
                var o = t[a], r = o.getAttribute(c.DATA_APLUS_AE_KEY);
                if (!(r && r.indexOf("_") > 0)) {
                    isNaN(parseInt(r)) && (r = aplus._aplus_auto_exp.elementSelectorSizeMap[e.elementSelector]++,
                    o.setAttribute(c.DATA_APLUS_AE_KEY, r));
                    var i = u.getElementHash(e, {
                        ignore_attr: !1,
                        index: r,
                        ele: o
                    }), l = s.checkIsRecord(o, i, c.DATA_APLUS_AE_KEY), p = u.checkIsInHashMap({
                        logkey: n,
                        hash_value: i,
                        aplusKey: "_aplus_auto_exp"
                    });
                    if (!l && !p) {
                        var f = {
                            expConfig: e,
                            hash_value: i,
                            element: o,
                            status: 0,
                            elementSelector: e.elementSelector
                        };
                        u.updateExpHashMap(n, f, "ADD");
                    }
                }
            }
        },
        handler_dom_change: function(t, e) {
            try {
                for (var n = this.autoExpConfig || [], a = 0; a < n.length; a++) {
                    var o = n[a], i = u.getElements(o, p);
                    aplus._aplus_auto_exp.elementSelectorSizeMap[o.elementSelector] || (aplus._aplus_auto_exp.elementSelectorSizeMap[o.elementSelector] = 1),
                    this.eachElements(i, o);
                }
                aplus.aplus_pubsub.publish("APLUS_AE_DOM_CHANGE", e || {});
            } catch (t) {
                r.logger({
                    msg: t && t.message
                });
            }
        },
        throttle_handler_dom_change: u.throttle(function(t, e) {
            this.handler_dom_change(t, e);
        }, 200),
        init_watch_dom: function() {
            var t = this, e = aplus._aplus_auto_exp || {};
            t._loop_observer = setTimeout(function() {
                "blur" !== e.current_win_status ? (aplus.aplusDebug && r.logger({
                    msg: "watch_dom in ae LOOP_TIME is " + c.LOOP_TIME + "ms total: " + ++e.watch_times
                }), t.handler_dom_change(null, {
                    type: "polling"
                }), t.init_watch_dom()) : e.watch_dom_running = !1;
            }, c.LOOP_TIME);
        },
        onFocusHandler: function() {
            var t = this, e = aplus._aplus_auto_exp || {};
            e.current_win_status = "focus", e.watch_dom_running || t.init_watch_dom();
        },
        onBlurHandler: function() {
            var t = aplus._aplus_auto_exp || {};
            t.current_win_status = "blur";
        },
        onVisibilityChange: function() {
            var t = this;
            "visible" === p.visibilityState ? t.onFocusHandler() : "hidden" === p.visibilityState && t.onBlurHandler();
        },
        addAllListener: function() {
            var t = this, e = aplus._aplus_auto_exp || {};
            e.watch_times = 0, e.watch_dom_running = !0, t.init_watch_dom(), l.WindVane && p.addEventListener && (i.on(p, "WV.Event.APP.Active", t.onFocusHandler, !1),
            i.on(p, "WV.Event.APP.Background", t.onBlurHandler, !1)), "hidden" in p ? i.on(l, "visibilitychange", t.onVisibilityChange) : (i.on(l, "blur", t.onBlurHandler),
            i.on(l, "focus", t.onFocusHandler));
        },
        removeAllListener: function() {
            var t = this;
            l.WindVane && p.removeEventListener && (i.un(p, "WV.Event.APP.Active", t.onFocusHandler, !1),
            i.un(p, "WV.Event.APP.Background", t.onBlurHandler, !1)), "hidden" in p ? i.un(l, "visibilitychange", t.onVisibilityChange) : (i.un(l, "blur", t.onBlurHandler),
            i.un(l, "focus", t.onFocusHandler));
        },
        init_observer: function(t, e) {
            var n = [ "IFRAME", "BODY", "OBJECT", "SCRIPT", "NOSCRIPT", "LINK", "STYLE" ], a = [ "class", "style" ], i = function(t) {
                return "characterData" === t.type ? [ t.target ] : "attributes" === t.type && a.indexOf(t.attributeName) > -1 ? [ t.target ] : "childList" !== t.type ? [] : void 0;
            }, s = function(t, a) {
                if (t && t.length > 0) for (var r = 0; r < t.length; r++) {
                    var i = t[r] || {}, s = i.nodeName, u = aplus._aplus_auto_exp.tags || {};
                    u[s] || (u[s] = 0), u[s]++, aplus._aplus_auto_exp.tags = u, n.indexOf(s) === -1 && o.wrap(function() {
                        var t = aplus._aplus_auto_exp || {};
                        ++t.observer_times;
                        var n = a.attributeName;
                        e(i, {
                            type: a.type + (n ? "_" + n : "")
                        });
                    }, "init_observer_init_elements");
                }
            };
            this._observer || (this._observer = new t(function(t) {
                if (t && t.length > 0) for (var e = 0; e < t.length; e++) {
                    var n = t[e] || {}, a = u.nodelistToArray(n.addedNodes || []);
                    a = u.nodelistToArray(i(n), a), s(a, n);
                }
            }));
            var c = {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            };
            this._observer.observe(p.body, c), u.IS_DEBUG && r.logger({
                msg: "aplus_auto_exp init MutationObserver success!"
            });
        },
        init: function(t) {
            var e = this, n = aplus._aplus_auto_exp || {};
            t && "reset" !== t.type && !n.hash_value && (n.hash_value = {}), e.handler_dom_change(null, {
                type: "aplus_init"
            });
            var a = l.MutationObserver || l.WebKitMutationObserver || l.MozMutationObserver;
            a ? (n.observer_times = 0, e.init_observer(a, function(t, n) {
                var a = t && t.parentElement ? t.parentElement : t;
                e.throttle_handler_dom_change(a, n);
            })) : e.addAllListener();
        },
        clear: function(t) {
            if (!t || "appendMetaInfo" !== t.from) {
                var e = aplus._aplus_auto_exp || {};
                e._acHashMap && (e._acHashMap = {}), e.hash_value && (e.hash_value = {}), aplus._aplus_auto_exp = e,
                this._loop_observer && (clearTimeout(this._loop_observer), this._loop_observer = null),
                this._observer ? (this._observer.takeRecords(), this._observer.disconnect()) : this.removeAllListener();
            }
        },
        clearDom: function(t, e) {
            var n = this.autoExpConfig || [];
            if (e && "appendMetaInfo" !== e.from) for (var a = 0; a < n.length; a++) try {
                for (var o = n[a].elementSelector, r = p.querySelectorAll(o), i = 0; i < r.length; i++) r[i].setAttribute(c.DATA_APLUS_AE_KEY, "");
            } catch (t) {}
            this.autoExpConfig = t && t.autoExpConfig ? t.autoExpConfig : [];
        },
        reset: function(t, e) {
            this.clearDom(t, e), this.init({
                type: "reset"
            });
        }
    });
    t.exports = f;
}, function(t, e) {
    "use strict";
    var n = document, a = function(t, e) {
        return e.x >= t.pLeftTop[0] && e.x <= t.pRightBottom[0] && e.y >= t.pLeftTop[1] && e.y <= t.pRightBottom[1];
    }, o = function(t, e) {
        var n = 0, o = a(t, e), r = a(t, {
            x: e.x + e.width,
            y: e.y
        }), i = a(t, {
            x: e.x,
            y: e.y + e.height
        }), s = a(t, {
            x: e.x + e.width,
            y: e.y + e.height
        }), u = function() {
            var t = 0;
            return o && s && (t = e.size / e.size), t;
        }, c = function() {
            var n = 0, a = 0;
            return o && r && !i && !s ? (n = e.width, a = t.pLeftBottom[1] - e.y) : !o && r && !i && s ? (n = t.pLeftTop[0] - e.x,
            a = e.y) : !o && !r && i && s ? (n = e.width, a = e.height - Math.abs(t.pLeftTop[1] - e.y)) : o && !r && i && !s && (n = t.pRightTop[0] - e.x,
            a = e.height), e.size > 0 ? Math.abs(n * a) / e.size : 0;
        }, l = function() {
            var n = 0, a = 0;
            return !o || r || i || s ? o || !r || i || s ? o || r || !i || s ? o || r || i || !s || (n = t.pLeftTop[0] - e.x,
            a = t.pLeftTop[1] - e.y) : (n = t.pRightTop[0] - e.x, a = t.pRightTop[1] - e.y) : (n = t.pLeftBottom[0] - e.x,
            a = t.pLeftBottom[1] - e.y) : (n = t.pRightBottom[0] - e.x, a = t.pRightBottom[1] - e.y),
            e.size > 0 ? Math.abs(n * a) / e.size : 0;
        };
        return n = u(), n > 0 ? n : (n = c(), n > 0 ? n : (n = l(), n > 0 ? n : n));
    };
    e.wrapViewabilityRate = function(t, e, n) {
        var a = 0;
        if (t) for (var r = 0; r < t.length; r++) if (a = o(t[r], e), a < n) return !1;
        return a;
    };
    var r = function(t) {
        return "number" == typeof t && NaN !== t;
    }, i = function(t) {
        var e = {};
        return t && ("function" == typeof t.getBoundingClientRect && (e = t.getBoundingClientRect() || {}),
        r(e.x) || r(e.left) && (e.x = e.left), r(e.y) || r(e.top) && (e.y = e.top), r(e.width) || (e.width = t.offsetWidth),
        r(e.height) || (e.height = t.offsetHeight)), e;
    };
    e.getElementPosition = i, e.getWinPositions = function(t) {
        var e = [];
        if (t && "function" == typeof document.querySelector) {
            var a = document.querySelector(t);
            if (a) {
                var o = i(a) || {};
                r(o.x) && r(o.y) && r(o.width) && r(o.height) && e.push({
                    pLeftTop: [ o.x, o.y ],
                    pRightTop: [ o.x + o.width, o.y ],
                    pLeftBottom: [ o.x, o.y + o.height ],
                    pRightBottom: [ o.x + o.width, o.y + o.height ]
                });
            }
        }
        var s = n.documentElement, u = n.body, c = s.clientWidth || u.offsetWidth || 0, l = s.clientHeight || u.offsetHeight || 0;
        return e.push({
            pLeftTop: [ 0, 0 ],
            pRightTop: [ c, 0 ],
            pLeftBottom: [ 0, l ],
            pRightBottom: [ c, l ]
        }), e;
    }, e.checkIsRecord = function(t, e, n) {
        var a;
        try {
            if (t && t.getAttribute) {
                var o = t.getAttribute(n) || "";
                a = e ? o === e : !!o;
            }
        } catch (t) {}
        return a;
    }, e.getViewabilityRateInWindow = function(t, e, n) {
        var a = 0;
        if (t) for (var o = 0; o < t.length; o++) if (a = e / t[o].size, a >= n) return a;
        return a;
    };
}, function(t, e, n) {
    "use strict";
    function a(t, e, n) {
        var a = p.getWinPositions(), o = 0, r = u.getGoldlogVal("_aplus_auto_exp") || {}, i = r._acHashMap || {};
        for (var c in i) for (var l = i[c] || [], _ = 0; _ < l.length; _++) {
            var v = l[_] || {};
            v.eventType = "IObserver";
            var m = !!n || v.element === e.target;
            if (0 === v.status && v.expConfig && m) {
                var y = e.boundingClientRect || {};
                if (y.width || y.height || (y = e.target.getBoundingClientRect() || {}), y.width && y.height) {
                    v = s.assign(v, y), v.x = y.x || y.left, v.y = y.y || y.top, v.width = y.width,
                    v.height = y.height, v.size = y.width * y.height;
                    var b = p.checkIsRecord(v.element, v.hash_value, "_aplus_auto_exp"), w = v.width * v.height * e.intersectionRatio, E = p.getViewabilityRateInWindow(a, w, h);
                    if (!b) {
                        var S = e.intersectionRatio >= d;
                        if (S || E >= h) {
                            v.exposureTime = t, v.status = 1;
                            var A = f.getAutoExpUserFn();
                            A && (v.userParams = g.autoUserFnHandler(A, v.element, v.elementSelector)), v.viewabilityRate = S ? e.intersectionRatio : E,
                            v.viewability = S ? "intersection" : "fillwindow", f.EXP_DURATION || (v.status = 2),
                            g.updateExpHashMap(c, v, "UPDATE"), ++o;
                        } else E && g.updateExpHashMap(c, Object.assign({}, l[_], {
                            lastEventType: v.eventType
                        }), "UPDATE");
                    }
                }
            }
        }
        return o;
    }
    function o(t, e) {
        var n = "APLUS_AE_EXPOSURE_CHANGE", o = t && t.type ? t.type : "IObserver", r = new Date().getTime(), i = 0;
        i = e ? l.filterStartExposureSize(r, t) : a(r, t), i > 0 && (f.EXP_DURATION ? setTimeout(function() {
            i = l.filterEndExposureSize(r, o), i > 0 && aplus.aplus_pubsub.publish(n, {
                size: i,
                eventType: o
            });
        }, f.EXP_DURATION) : aplus.aplus_pubsub.publish(n, {
            size: i,
            eventType: o
        }));
    }
    function r(t) {
        var e = {
            root: null,
            rootMargin: "0px",
            threshold: d
        };
        return new v(function(t) {
            c(t, function(t) {
                t.intersectionRatio > 0 && o(t);
            });
        }, s.assign(e, t));
    }
    function i(t) {
        if (v) {
            m.io_base || (m.io_base = r());
            var e = u.getGoldlogVal("_aplus_auto_exp") || {}, n = e._acHashMap || {};
            for (var a in n) for (var o = n[a] || [], i = 0; i < o.length; i++) {
                var s = o[i] || {};
                if (!s.inObserver) {
                    var c, l = "io_v_" + encodeURIComponent(s.positionSelector);
                    s.positionSelector && !m[l] && (c = r({
                        root: document.querySelector(s.positionSelector),
                        expConfig: t
                    }), m[l] = c), c ? c.observe(s.element) : m.io_base.observe(s.element), s.inObserver = !0;
                }
            }
        }
        return !0;
    }
    var s = n(21), u = n(2), c = n(27), l = n(51), p = n(49), f = n(43), g = n(40), d = f.AUTO_AT_VIEW_RATE, h = f.AUTO_AT_VIEW_RATE_IN_WINDOW, _ = window, v = _.IntersectionObserver, m = {};
    aplus._aplus_auto_exp.iobserverMap = m, e.watch_exposure_change = function(t) {
        aplus.aplus_pubsub.subscribe("APLUS_AE_DOM_CHANGE", function() {
            i(t);
        }), i(t);
    }, e.clear = function(t, e) {
        if (e && "appendMetaInfo" !== e.from) for (var n in m) {
            var a = m[n];
            a.disconnect();
        }
    };
}, function(t, e, n) {
    "use strict";
    var a, o = n(2), r = n(49), i = n(43), s = n(40), u = i.AUTO_AT_VIEW_RATE, c = i.AUTO_AT_VIEW_RATE_IN_WINDOW, l = function(t) {
        for (var e; t && "HTML" !== t.tagName; ) {
            e = t.style.display;
            {
                if ("none" === e) break;
                t = t.parentNode;
            }
        }
        return "none" === e;
    };
    e.filterStartExposureSize = function(t, e) {
        var n = 0, a = r.getWinPositions(), p = o.getGoldlogVal("_aplus_auto_exp") || {}, f = p._acHashMap || {};
        for (var g in f) for (var d = f[g] || [], h = 0; h < d.length; h++) {
            var _ = d[h] || {};
            if (0 === _.status && _.expConfig && !l(_.element)) {
                var v = r.getElementPosition(_.element);
                if (v.width && v.height) {
                    _.x = v.x, _.y = v.y, _.eventType = e, _.width = v.width, _.height = v.height, _.size = v.width * v.height;
                    var m;
                    _.expConfig.positionSelector && (m = r.getWinPositions(_.expConfig.positionSelector));
                    var y = r.wrapViewabilityRate(m || a, _, u), b = y >= u, w = y;
                    m && (w = r.wrapViewabilityRate(a, _, u));
                    var E = _.width * _.height * w, S = r.getViewabilityRateInWindow(a, E, c), A = r.checkIsRecord(_.element, _.hash_value, "_aplus_auto_exp");
                    if ((b || S >= c) && !A) {
                        _.exposureTime = t, _.status = 1;
                        var T = i.getAutoExpUserFn();
                        T && (_.userParams = s.autoUserFnHandler(T, _.element, _.elementSelector)), i.EXP_DURATION || (_.viewabilityRate = b ? y : S,
                        _.viewability = b ? "intersection" : "fillwindow", _.status = 2), s.updateExpHashMap(g, _, "UPDATE"),
                        ++n;
                    }
                }
            }
        }
        return n;
    }, e.filterEndExposureSize = function(t, e) {
        var n = 0;
        a || (a = r.getWinPositions());
        var i = o.getGoldlogVal("_aplus_auto_exp") || {}, c = i._acHashMap || {};
        for (var l in c) for (var p = c[l] || [], f = 0; f < p.length; f++) {
            var g = p[f] || {};
            if (1 === g.status && g.exposureTime === t && g.expConfig) {
                g.eventType = e, g.expConfig.positionSelector && (a = r.getWinPositions(g.expConfig.positionSelector));
                var d = r.wrapViewabilityRate(a, g, u), h = r.checkIsRecord(g.element, g.hash_value, "_aplus_auto_exp");
                d && !h ? (g.viewabilityRate = d, g.status = 2, s.updateExpHashMap(l, g, "UPDATE"),
                ++n) : (g.status = 0, g.exposureTime = "", s.updateExpHashMap(l, g, "UPDATE"));
            }
        }
        return n;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(38), o = n(51), r = n(40), i = n(43), s = function(t) {
        var e = "APLUS_AE_EXPOSURE_CHANGE", n = t && t.type ? t.type : "init", a = new Date().getTime(), r = o.filterStartExposureSize(a, n);
        r > 0 && (i.EXP_DURATION ? setTimeout(function() {
            r = o.filterEndExposureSize(a, n), r > 0 && aplus.aplus_pubsub.publish(e, {
                size: r,
                eventType: n
            });
        }, i.EXP_DURATION) : aplus.aplus_pubsub.publish(e, {
            size: r,
            eventType: n
        }));
    }, u = r.throttle(function(t) {
        s(t);
    }, 100), c = {}, l = function(t, e) {
        if (t && t.forEach && Object.keys && document.querySelector) {
            t.forEach(function(t) {
                t.positionSelector && document.querySelector(t.positionSelector) && (c[t.positionSelector] = !0);
            });
            var n = Object.keys(c);
            n.forEach(function(t) {
                a[e] && a[e](document.querySelector(t), "scroll", function(t) {
                    u(t);
                });
            });
        }
    };
    e.watch_exposure_change = function(t) {
        aplus.aplus_pubsub.subscribe("APLUS_AE_DOM_CHANGE", s), a.on(window, "touchmove", u),
        a.on(window, "scroll", u), a.on(window, "resize", s), l(t, "on");
    }, e.clear = function(t) {
        a.un(window, "touchmove", u), a.un(window, "scroll", u), a.un(window, "resize", s),
        l(t, "un");
    };
}, function(t, e, n) {
    "use strict";
    function a(t, e, n) {
        var a = "0";
        if (n) {
            if ("spmc" === t) {
                var o = n.split(".");
                a = o[2] ? o[2] : o[3], /^(\i|\d)[0-9]+$/.test(a) && (a = "0"), n = [ o[0], o[1], a ].join(".");
            }
        } else {
            n = "";
            var r = window.g_SPM || {};
            if ("function" == typeof r.getParam) {
                var i = r.getParam(e);
                "spmc" === t ? (a = e.getAttribute("data-spm") || "0", n = [ i.a, i.b, a ].join(".")) : n = [ i.a, i.b, i.c, i.d ].join(".");
            }
        }
        return n;
    }
    function o() {
        i || (i = !0, aplus.on(window, "beforeunload", function() {
            clearInterval(r);
            for (var t = 0; t < v.length; t++) aplus_queue.push(v[t]);
        }));
    }
    var r, i, s = n(33), u = n(21), c = n(2), l = n(26), p = n(37), f = n(40), g = n(43), d = function() {
        var t = aplus.aplusDebug, e = {}, n = g.getDefaultRequestCfg(), o = c.getGoldlogVal("_aplus_auto_exp") || {}, r = o._acHashMap || {};
        return p(r, function(r, i) {
            for (var s = i || [], c = 0, p = s.length; c < p; c++) {
                var g = s[c] || {};
                if (2 === g.status) {
                    g.status = 3, f.updateExpHashMap(r, g, "UPDATE"), o.exp_times++;
                    var d, h = g.expConfig || {}, _ = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "0.0.0.0", v = a(h.eltype, g.element) || _, m = "";
                    try {
                        var y = new Number(g.viewabilityRate);
                        d = y.toFixed(2);
                    } catch (t) {
                        d = g.viewabilityRate;
                    }
                    var b = {
                        _w: g.width,
                        _h: g.height,
                        _x: g.x,
                        _y: g.y,
                        _rate: d,
                        _viewability: g.viewability
                    };
                    "object" == typeof g.userParams && ("object" == typeof g.userParams.userdata && (b = u.assign(b, g.userParams.userdata)),
                    g.userParams.spm && (v = a(h.eltype, "", g.userParams.spm)), g.userParams.scm && (m = g.userParams.scm)),
                    (f.isMethod(h.method) || f.isPkgSize(h.pkgSize)) && (n = f.filterExpConfigRequestCfg(h));
                    var w = {
                        scm: m,
                        spm: v,
                        aplusContentId: ""
                    }, E = f.fillPropsData(h, g.element, b);
                    E = f.fillFilterData(h, g.element, b), aplus.globalConfig.isAli ? w.exargs = E : w = E,
                    e[r] || (e[r] = []), e[r].push(w), t && l.logger({
                        msg: "logkey = " + r + ", params = " + decodeURIComponent(JSON.stringify(w))
                    });
                }
            }
        }), {
            logkeyContainer: e,
            request_cfg: n
        };
    }, h = function(t) {
        for (var e = [], n = 0, a = t.length; n < a; n++) {
            var o = t[n] || {}, r = {};
            p(o, function(t, e) {
                "element" !== t && (r[t] = e);
            });
            var i = u.cloneDeep(r);
            i.element = o.element, e.push(i);
        }
        return e;
    }, _ = function(t) {
        var e = c.getGoldlogVal("_aplus_auto_exp") || {}, n = e._acHashMap || {}, a = [];
        p(n, function(e, n) {
            for (var o = h(n) || [], r = 0, i = o.length; r < i; r++) {
                var s = o[r] || {}, u = n[r] || {};
                if (3 === s.status) try {
                    f.setRecordSuccess(u, g.DATA_APLUS_AE_KEY), aplus.aplus_pubsub.publish("APLUS_ELEMENT_EXPOSURE", {
                        logkey: e,
                        v_origin: u,
                        options: t
                    }), a.push(u);
                } catch (t) {
                    l.logger({
                        msg: t && t.message
                    });
                }
            }
            for (;a.length > 0; ) f.updateExpHashMap(e, a.pop(), "CLEAR");
        });
    }, v = [], m = function() {
        r = setInterval(function() {
            v.length > 0 ? aplus_queue.push(v.pop()) : (clearInterval(r), r = null);
        }, 200);
    }, y = function(t, e, n) {
        var a = t.logkeyContainer || [], o = t.request_cfg || {};
        s.wrap(function() {
            p(a, function(t, a) {
                if (a && a.length > 0) {
                    for (var r = 0; r < a.length; ) {
                        var i = [], s = JSON.stringify(a.slice(r, r + o.pkgSize));
                        i.push("expdata=" + s), i.push("_is_auto_exp=1"), i.push("_eventType=" + e.eventType),
                        i.push("_method=" + o.method), i.push("_pkgSize=" + o.pkgSize);
                        var u = o.method || "POST";
                        aplus.globalConfig.isAli && "POST" === u && navigator && navigator.sendBeacon && v.length < 10 ? v.push({
                            action: "aplus.record",
                            arguments: [ t, "EXP", i.join("&"), u ]
                        }) : aplus_queue.push({
                            action: "aplus.record",
                            arguments: [ t, "EXP", i.join("&"), "GET" ]
                        }), r += o.pkgSize;
                    }
                    n(e);
                }
            });
        }, "recordAplusAt");
    }, b = function(t, e, n) {
        var a = t.logkeyContainer || [], o = t.request_cfg || {};
        s.wrap(function() {
            p(a, function(t, a) {
                if (a && a.length > 0) {
                    for (var r = 0; r < a.length; ) {
                        var i = [], s = a[r];
                        for (var u in s) i.push(u + "=" + s[u]);
                        i.push("_is_auto_exp=1"), i.push("_eventType=" + e.eventType), i.push("_method=" + o.method);
                        var c = o.method || "POST";
                        aplus.globalConfig.isAli && "POST" === c && navigator && navigator.sendBeacon && v.length < 10 ? v.push({
                            action: "aplus.record",
                            arguments: [ t, "EXP", i.join("&"), c ]
                        }) : aplus_queue.push({
                            action: "aplus.record",
                            arguments: [ t, "EXP", i.join("&"), "GET" ]
                        }), r += 1;
                    }
                    n(e);
                }
            });
        }, "recordAplusAt");
    }, w = function(t) {
        if (t.size > 0) {
            r || m();
            var e = d() || {};
            aplus.globalConfig.isAli ? y(e, t, _) : b(e, t, _);
        }
    };
    e.watch_data_change = function() {
        aplus.aplus_pubsub.subscribe("APLUS_AE_EXPOSURE_CHANGE", w), o();
    }, e.clear = function() {
        aplus.aplus_pubsub.unsubscribe("APLUS_AE_EXPOSURE_CHANGE", w);
    };
}, function(t, e, n) {
    "use strict";
    var a = n(55), o = n(3), r = n(18).nameStorage, i = n(30);
    t.exports = function() {
        return {
            recordValInWindowName: function() {
                var t, e, n = o.HTTPS == location.protocol, a = aplus.globalConfig.NAMESTORAGE_KEYS || {}, s = parent !== self;
                if (!s && n) {
                    var u = location.href, c = n && (u.indexOf("login.taobao.com") >= 0 || u.indexOf("login.tmall.com") >= 0), l = i.getRefer(a);
                    c && l ? (t = l, e = r.getItem(a.REFERRER_PV_ID)) : (t = u, e = aplus.pvid), r.setItem(a.REFERRER, t),
                    r.setItem(a.REFERRER_PV_ID, e);
                }
            },
            run: function() {
                var t = this;
                a.on(window, "beforeunload", function() {
                    t.recordValInWindowName();
                });
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    function a(t, e, n) {
        var a = aplus._$ || {}, o = a.meta_info || {}, r = o.aplus_ctap || {}, i = o["aplus-touch"];
        if (r && "function" == typeof r.on) r.on(t, e); else {
            var u = "ontouchend" in document.createElement("div");
            !u || "tap" !== i && "tapSpm" !== n && "tap" !== n ? s(t, u ? "touchstart" : "mousedown", e) : c.on(t, e);
        }
    }
    function o(t) {
        try {
            document.documentElement.doScroll("left");
        } catch (e) {
            return void setTimeout(function() {
                o(t);
            }, 1);
        }
        t();
    }
    function r(t) {
        var e = 0, n = function() {
            0 === e && t(), e++;
        };
        "complete" === document.readyState && n();
        var a;
        if (document.addEventListener) a = function() {
            document.removeEventListener("DOMContentLoaded", a, !1), n();
        }, document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", n, !1); else if (document.attachEvent) {
            a = function() {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", a),
                n());
            }, document.attachEvent("onreadystatechange", a), window.attachEvent("onload", n);
            var r = !1;
            try {
                r = null === window.frameElement;
            } catch (t) {}
            document.documentElement.doScroll && r && o(n);
        }
    }
    function i(t) {
        "complete" === document.readyState ? t() : s(window, "load", t);
    }
    function s() {
        var t = window, e = arguments;
        if (2 === e.length) "DOMReady" === e[0] && r(e[1]), "onload" === e[0] && i(e[1]); else if (3 === e.length) {
            var n = e[0], o = e[1], s = e[2];
            if ("tap" === o || "tapSpm" === o) a(n, s, o); else {
                var c = document.attachEvent ? "attachEvent" : "addEventListener", l = !!document.attachEvent;
                n[c]((l ? "on" : "") + o, function(e) {
                    e = e || t.event;
                    var n = e.target || e.srcElement;
                    "function" == typeof s && s(e, n);
                }, !!u(o) && {
                    passive: !0
                });
            }
        }
    }
    var u = n(56), c = n(39);
    e.DOMReady = r, e.onload = i, e.on = s;
}, function(t, e) {
    var n;
    t.exports = function(t) {
        if ("boolean" == typeof n) return n;
        if (!/touch|mouse|scroll|wheel/i.test(t)) return !1;
        n = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    n = !0;
                }
            });
            window.addEventListener("test", null, e);
        } catch (t) {}
        return n;
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                var t = n(58), e = t.create({
                    WS: null,
                    CTX: window,
                    CTX_TYPE: "WEB"
                });
                e.run(this.options);
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(59), o = n(2), r = o.getGlobalValue("aplus"), i = n(60), s = n(62);
    t.exports = i.extend({
        handlerMiddleware: function(t) {
            var e = a.changeToObj(t.what_to_send.logdata), n = t.where_to_send.method, o = s(e, t.userdata);
            "POST" === n && navigator && navigator.sendBeacon || (o = "d=" + encodeURIComponent(o)),
            r.send(t.where_to_send.url, o, n, function() {}, function() {});
        }
    });
}, function(t, e, n) {
    "use strict";
    var a = n(2), o = a.getGlobalValue("aplus");
    e.getKeyIndex = function(t) {
        var e = {
            protocol: 1,
            event_args: 25
        };
        return e[t];
    };
    var r = "-";
    e.changeToArray = function(t, e) {
        var n = e.event_timestamp.getTime().toString(), a = e.client || {}, i = a.screenWidth || "", s = a.screenHeight || "", u = i + "*" + s, c = i && s ? u : r, l = a.userAgent || r, p = a.language || r, f = e.gokey || {}, g = JSON.stringify(f), d = JSON.stringify({
            customSdkId: e.sdk_info.customSdkId || "",
            platform_type: e.sdk_info.platformType || ""
        }), h = e.appKey || e.appId || r, _ = JSON.stringify({
            appId: a.appId || o.getMetaInfo("miniAppId") || ""
        }), v = JSON.stringify(e.sessionArgs || {}), m = JSON.stringify(e.globalArgs || {}), y = e.arg1 || e.logkey || r;
        0 === y.indexOf("/$$_") && (y = y.substring(1, y.length)), "2001" === e.event_code && e.trackerEventCode && (y = e.trackerEventCode);
        var b = [ e.cache, e.method || "GET", l, c, h, _, e._dev_id || r, "{}", e._user_nick || r, e._user_id || r, e._anony_id || r, "{}", p, e.timeZone || r, a.os || r, a.os_version || r, d, e._session_id || r, e.cna || r, n, encodeURIComponent(e.url) || r, e.event_code || r, encodeURIComponent(e.pre) || r, m, v, g, y, e.sdk_info.jsver, e.sdk_info.lver, a.appVersion || "devtools" || r, a.brand || r, r, a.networkType || r ];
        return b;
    }, e.changeToObj = function(t) {
        var e = t.event_timestamp.getTime().toString(), n = t.client || {}, a = n.userAgent || r, i = n.language || r, s = t.gokey || {}, u = JSON.stringify(s), c = JSON.stringify({
            customSdkId: t.sdk_info.customSdkId || "",
            platform_type: t.sdk_info.platformType || ""
        }), l = t.appKey || t.appId || r, p = JSON.stringify({
            appId: n.appId || o.getMetaInfo("miniAppId") || ""
        }), f = JSON.stringify(t.sessionArgs || {}), g = JSON.stringify(t.globalArgs || {}), d = t.arg1 || t.logkey || r;
        0 === d.indexOf("/$$_") && (d = d.substring(1, d.length)), "2001" === t.event_code && t.trackerEventCode && (d = t.trackerEventCode);
        var h = {};
        h.platform = t.sdk_info.platformType || "", h.sdk_type = h.platform ? h.platform + "mp" : "",
        h.appkey = l, h.sdk_version = t.sdk_info.lver;
        var _ = a.match(/iphone|ipad|android|macintosh/i);
        h.device_type = _[0] || "", h.os = n.os || "", h.os_version = n.os_version || "",
        h.jsver = t.sdk_info.jsver, h.pixel_ratio = window.devicePixelRatio || "";
        var v = Math.round(n.screenWidth * (window.devicePixelRatio || 1)), m = Math.round(n.screenHeight * (window.devicePixelRatio || 1));
        h.resolution = v > m ? v + "*" + m : m + "*" + v, h.language = i, h.app_version = o.getMetaInfo("appVersion") || "devtools",
        h.arg1 = d, h.event_args = u, h.event_code = t.event_code || "", h.sessionArgs = f,
        h.global_args = g, h.app_ext_info = p, h.time = e, h.cna = t.cna || "", h.url = t.url || "",
        h.pre = t.pre || "", h.method = t.method || "GET", h.log_id = t.cache || "", h.sdk_info = c;
        var y = o.getMetaInfo("aplus-exdata");
        return y && y.aplus_track_debug_id && (h.track_debug_id = y.aplus_track_debug_id),
        h;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(11), o = n(61), r = n(3);
    t.exports = a.extend({
        subscribeLogs: function(t, e) {
            o.pushIntoGoldlogQueue(r.SUBSCRIBE, [ t, function(t) {
                t.status === r.COMPLETE && e(t);
            } ]);
        },
        getLogicSymbol: function() {
            return "ALI" === this.format ? "&" : "||";
        },
        handlerMiddleware: function() {},
        watchLOG: function() {
            var t = this;
            t.subscribeLogs(r.MW_CHANGE_PV, function(e) {
                t.handlerMiddleware(e, "pv");
            }), t.subscribeLogs(r.MW_CHANGE_HJLJ, function(e) {
                t.handlerMiddleware(e, r.APLUS);
            });
        },
        run: function() {
            this.watchLOG();
        }
    });
}, function(t, e, n) {
    "use strict";
    var a = n(2);
    e.pushIntoGoldlogQueue = function(t, e) {
        var n = a.getGlobalValue("aplus_queue"), o = a.getGlobalValue("aplus"), r = t.split("."), i = o[r[1]], s = i ? i[r[2]] : null;
        o && 2 === r.length && i ? i.apply(o, e) : 3 === r.length && s ? s.apply(i, e) : n.push({
            action: t,
            arguments: e
        });
    };
}, function(t, e, n) {
    function a(t, e) {
        try {
            var n = {}, a = f.getMetaInfo("globalproperty");
            if (a && (n.gp = a), t.url && t.url.length > 0) {
                var o = t.url.split("?");
                n.page_name = o[0] || "-", n.url_p = o[1] || "-";
            }
            if (t.pre && t.pre.length > 0) {
                var r = t.pre.split("?");
                n.ref_page_name = r[0] || "-", n.refer_p = r[1] || "-";
            }
            n.is_auto = t.is_auto ? 1 : 0;
            var i, s = e.gokey;
            i = "string" == typeof s ? JSON.parse('{"' + s.replace(/\&/g, '","').replace(/\=/g, '":"') + '"}', function(t, e) {
                return "" === t ? e : decodeURIComponent(e);
            }) : "object" == typeof s ? s : {};
            var u = d(e.logkey, Object.assign({}, n, {
                cusp: i
            }));
            return u;
        } catch (t) {
            return console.warn("JSON parse failed", t), {};
        }
    }
    function o(t, e) {
        var n = f.getMetaInfo("globalproperty"), a = {};
        if (a.r = t.arg1, n && (a.gp = n), t.url && t.url.length > 0) {
            var o = t.url.split("?");
            a.page_name = o[0] || "-", a.url_p = o[1] || "-";
        }
        if (t.pre && t.pre.length > 0) {
            var r = t.pre.split("?");
            a.ref_page_name = r[0] || "-", a.refer_p = r[1] || "-";
        }
        a.is_auto = t.is_auto ? 1 : 0;
        var i = e, s = u.deleteInfo(i, [ "_anony_id", "_dev_id", "_session_id", "_user_id", "_user_nick", "_src_pos_id" ]);
        return d(p.PAGE_START, Object.assign({}, a, {
            cusp: s
        }));
    }
    var r = n(63), i = n(64), s = n(2), u = n(65), c = n(67), l = n(68), p = n(3), f = s.getGlobalValue("aplus"), g = n(69), d = n(70);
    t.exports = function(t, e) {
        if (!t || !e || u.checkEmptyObj(t) || u.checkEmptyObj(e)) return {};
        var n = {}, s = r(i(t)), d = f.getMetaInfo(p._ANONY_ID) || t.cna;
        d && (s.anony_id = d, s.id_tracking.anony_id = d);
        var h = f.getMetaInfo("_dev_id") || t.cna;
        h && (s.dev_id = h, s.id_tracking.dev_id = h);
        var _ = null;
        _ = "2001" === t.event_code ? o(t, e) : a(t, e), _ && (n = {
            analytics: {
                ekvs: {
                    sessionid: [ r(_) ]
                }
            }
        });
        var v = f.getMetaInfo(p._USER_ID);
        v && n.analytics && (n.analytics.active_user = {
            puid: v,
            provider: f.getMetaInfo("_user_nick")
        }), n.header = u.assign(s, n.header, {
            ts: Date.now(),
            traceId: u.getRandomStr(10) + Date.now() + u.getRandomStr(9)
        });
        var m = c(n), y = g.stringfy(m);
        return l.encode(y);
    };
}, function(t, e) {
    function n(t) {
        var e, a = Array.isArray(t) ? [] : {};
        if ("object" == typeof t) {
            if (JSON && JSON.parse) e = JSON.stringify(t), a = JSON.parse(e); else for (var o in t) a[o] = "object" == typeof t[o] ? n(t[o]) : t[o];
            return a;
        }
    }
    t.exports = n;
}, function(t, e) {
    t.exports = function(t) {
        var e = {};
        return e.sdk_type = t.sdk_type, e.appkey = t.appkey, e.sdk_version = t.sdk_version,
        e.device_type = t.device_type, e.os = t.os, e.os_version = t.os_version, e.platform = t.platform,
        e.pixel_ratio = t.pixel_ratio, e.resolution = t.resolution, e.language = t.language,
        e.app_version = t.app_version, e.jsver = t.jsver, e.pre = t.pre, e.url = t.url,
        e.debugId = t.track_debug_id, e.id_tracking = {}, e;
    };
}, function(t, e, n) {
    e.getRandomStr = function(t) {
        for (var e = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], a = 0; a < Number(t); a++) {
            var o = Math.round(Math.random() * (n.length - 1));
            e += n[o];
        }
        return e;
    }, e.startsWith = function(t, e) {
        return !(!t || !e || 0 === e.length || e.length > t.length) && t.substr(0, e.length) === e;
    }, e.assign = function(t) {
        if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            if (a) for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
        }
        return e;
    }, e.shouldSendEvents = function(t, e, n) {
        return "number" != typeof n || "number" != typeof e || (n <= 0 || t - n > e);
    }, e.checkEvent = function(t, e) {
        var a = n(3), o = n(66);
        if (!t || "string" != typeof t) return o().e('please check trackEvent id. id should be "string" and not null'),
        !1;
        var r = [ "id", "du" ], i = {};
        if (r.forEach(function(t) {
            i[t] = 1;
        }), i[t]) return o().e("eventId不能与以下保留字冲突: " + r.join(",")), !1;
        if (t.length > a.MAX_EVENTID_LENGTH) return o().e("The maximum length of event id shall not exceed " + a.MAX_EVENTID_LENGTH),
        !1;
        if (e && ("object" != typeof e || Array.isArray(e)) && "string" != typeof e) return o().e("please check trackEvent properties. properties should be string or object(not include Array)"),
        !1;
        if ("object" == typeof e) {
            var s = 0;
            for (var u in e) if ({}.hasOwnProperty.call(e, u)) {
                if (u.length > a.MAX_PROPERTY_KEY_LENGTH) return o().e("The maximum length of property key shall not exceed " + a.MAX_PROPERTY_KEY_LENGTH),
                !1;
                if (s >= a.MAX_PROPERTY_KEYS_COUNT) return o().e("The maximum count of properties shall not exceed " + a.MAX_PROPERTY_KEYS_COUNT),
                !1;
                if (i[u]) return o().e("属性中的key不能与以下保留字冲突: " + r.join(",")), !1;
                s += 1;
            }
        }
        return !0;
    };
    var a = n(27);
    e.deleteInfo = function(t, e) {
        return a(e, function(e) {
            delete t[e];
        }), t;
    }, e.checkEmptyObj = function(t) {
        return "object" != typeof t || 0 === Object.keys(t).length;
    }, e.DataType = {
        HALF_SESSION: "half_session",
        CLOSE_SESSION: "close_session",
        EKV: "ekv",
        ENTER_PAGE: "enter_page",
        LEAVE_PAGE: "leave_page"
    }, e.AccessType = {
        MOBILE_NETWORK_2G: "2g",
        MOBILE_NETWORK_3G: "3g",
        MOBILE_NETWORK_4G: "4g",
        MOBILE_NETWORK_NONE: "none"
    };
}, function(t, e) {
    var n = "[APLUS] -- ";
    t.exports = function() {
        function t() {
            this.setDebug = function(t) {
                a = t;
            }, this.d = function() {
                if (a) try {
                    "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.debug.apply(console, arguments);
                } catch (t) {}
            }, this.i = function() {
                try {
                    if (a) try {
                        "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.info.apply(console, arguments);
                    } catch (t) {}
                } catch (t) {}
            }, this.e = function() {
                if (a) try {
                    "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.error.apply(console, arguments);
                } catch (t) {}
            }, this.w = function() {
                if (a) try {
                    "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.warn.apply(console, arguments);
                } catch (t) {}
            }, this.v = function() {
                if (a) try {
                    "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.log.apply(console, arguments);
                } catch (t) {}
            }, this.t = function() {
                if (a) try {
                    console.table.apply(console, arguments);
                } catch (t) {}
            }, this.tip = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.log.apply(console, arguments);
                } catch (t) {}
            }, this.tip_w = function(t) {
                try {
                    console.log("%c " + n + t, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
                } catch (t) {}
            }, this.err = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.error.apply(console, arguments);
                } catch (t) {}
            }, this.repeat = function(t) {
                for (var e = t; e.length < 86; ) e += t;
                return e;
            };
        }
        var e = null, a = !1;
        return function() {
            return null === e && (e = new t()), e;
        };
    }();
}, function(t, e) {
    function n(t, e) {
        var n = a(t, e);
        return t && t.id_tracking && (n[e.id_tracking || "id_tracking"] = a(t.id_tracking, s)),
        n;
    }
    function a(t, e) {
        var n = {};
        for (var a in t) e[a] ? n[e[a]] = t[a] : n[a] = t[a];
        return n;
    }
    function o(t, e) {
        var n = {};
        if (t) for (var a in t) t[a] && (n[e[a]] = t[a]);
        return n;
    }
    var r = {
        ekvs: "e",
        active_user: "active_user"
    }, i = {
        sdk_type: "sdt",
        device_model: "dm",
        language: "lang",
        device_type: "dt",
        os_version: "ov",
        appkey: "ak",
        sdk_version: "sv",
        resolution: "rl",
        testToken: "ttn",
        pixel_ratio: "pr",
        _id: "id",
        id_type: "it",
        id_tracking: "itr",
        imprint: "imp",
        debugId: "dk"
    }, s = {
        uuid: "ud",
        unionid: "und",
        openid: "od",
        anonymousid: "nd",
        alipay_id: "ad",
        device_id: "dd",
        userid: "puid"
    };
    t.exports = function(t) {
        return {
            h: n(t.header, i),
            a: o(t.analytics, r)
        };
    };
}, function(t, e) {
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = function(t) {
        for (var e = {}, n = 0, a = t.length; n < a; n++) e[t.charAt(n)] = n;
        return e;
    }(n), o = String.fromCharCode, r = function(t) {
        var e;
        return t.length < 2 ? (e = t.charCodeAt(0), e < 128 ? t : e < 2048 ? o(192 | e >>> 6) + o(128 | 63 & e) : o(224 | e >>> 12 & 15) + o(128 | e >>> 6 & 63) + o(128 | 63 & e)) : (e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320),
        o(240 | e >>> 18 & 7) + o(128 | e >>> 12 & 63) + o(128 | e >>> 6 & 63) + o(128 | 63 & e));
    }, i = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, s = function(t) {
        return t.replace(i, r);
    }, u = function(t) {
        var e = [ 0, 2, 1 ][t.length % 3], a = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0), o = [ n.charAt(a >>> 18), n.charAt(a >>> 12 & 63), e >= 2 ? "=" : n.charAt(a >>> 6 & 63), e >= 1 ? "=" : n.charAt(63 & a) ];
        return o.join("");
    }, c = function(t) {
        return t.replace(/[\s\S]{1,3}/g, u);
    }, l = function(t) {
        return c(s(t));
    }, p = function(t, e) {
        return e ? l(String(t)).replace(/[+\/]/g, function(t) {
            return "+" == t ? "-" : "_";
        }).replace(/\=/g, "") : l(String(t));
    }, f = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), g = function(t) {
        switch (t.length) {
          case 4:
            var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3), n = e - 65536;
            return o((n >>> 10) + 55296) + o((1023 & n) + 56320);

          case 3:
            return o((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

          default:
            return o((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
        }
    }, d = function(t) {
        return t.replace(f, g);
    }, h = function(t) {
        var e = t.length, n = e % 4, r = (e > 0 ? a[t.charAt(0)] << 18 : 0) | (e > 1 ? a[t.charAt(1)] << 12 : 0) | (e > 2 ? a[t.charAt(2)] << 6 : 0) | (e > 3 ? a[t.charAt(3)] : 0), i = [ o(r >>> 16), o(r >>> 8 & 255), o(255 & r) ];
        return i.length -= [ 0, 0, 2, 1 ][n], i.join("");
    }, _ = function(t) {
        return t.replace(/[\s\S]{1,4}/g, h);
    }, v = function(t) {
        return d(_(t));
    }, m = function(t) {
        return v(String(t).replace(/[-_]/g, function(t) {
            return "-" == t ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
    };
    e.encode = p, e.decode = m;
}, function(t, e) {
    e.stringfy = function(t) {
        if (t) try {
            return JSON.stringify(t);
        } catch (t) {}
        return "";
    }, e.parse = function(t) {
        if (t) try {
            return JSON.parse(t);
        } catch (t) {}
        return null;
    }, e.parseToArray = function(t) {
        if (t) try {
            return JSON.parse(t);
        } catch (t) {}
        return [];
    };
}, function(t, e, n) {
    var a = n(2);
    t.exports = function(t, e) {
        if ("string" != typeof t) return null;
        var n = Object.create(null);
        n.id = t, e.ts || (n.ts = Date.now());
        var o = typeof e;
        if ("string" === o && e) n[t] = e; else if ("object" === o) for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
        var i = a.getGlobalValue("aplus"), s = i.getMetaInfo("globalproperty");
        return s && (n.gp = s), n;
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                var t, e = window;
                try {
                    var a = "function";
                    t = typeof e.WebSocket === a && typeof e.WebSocket.prototype.send === a;
                } catch (t) {}
                var o = n(2), r = o.getGlobalValue("aplus");
                if (!r._aplus_cplugin_ws) {
                    r._aplus_cplugin_ws = !0;
                    var i = n(72), s = i.create({
                        WS: n(76),
                        CTX: window,
                        CTX_TYPE: "WEB"
                    });
                    s.run(this.options, t);
                }
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = window, o = n(11), r = n(3), i = n(55), s = n(37), u = n(23), c = n(25), l = n(73), p = n(74), f = n(61), g = n(59), d = [ "WS", "WS-ONLY" ];
    t.exports = o.extend({
        wsHandler: "",
        lsCnaKey: "APLUS_CNA",
        timeoutToHttp: 3e3,
        domain: "log.mmstat.com",
        retryTimesKey: "aplusx_retry_times",
        maxRetryTimesPerHour: 0,
        retryTimes: 0,
        pageLoadDateHour: "",
        getDateHour: function() {
            return l.getFormatDate() + new Date().getHours();
        },
        getRandom: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1));
        },
        getRetryTimes: function() {
            var t = 0, e = c.get(this.retryTimesKey);
            if (e) {
                var n = e.split("-");
                2 === n.length && n[0] === this.getDateHour() && (t = parseInt(n[1]));
            }
            return t;
        },
        setRetryTimes: function(t) {
            c.set(this.retryTimesKey, this.getDateHour() + "-" + t);
        },
        doSetRetryTimes: function() {
            this.retryTimes < this.maxRetryTimesPerHour ? this.setRetryTimes(++this.retryTimes) : this.retryTimes >= this.maxRetryTimesPerHour && this.pageLoadDateHour !== this.getDateHour() && (this.retryTimes = 0,
            this.setRetryTimes(++this.retryTimes));
        },
        cheatCallback: function(t, e) {
            c.set(t.toUpperCase(), e);
        },
        newSend: function(t, e, n, a) {
            var o = this;
            s(t, function(e, n) {
                "number" != typeof n && "boolean" != typeof n || (t[e] = n + "");
            });
            var r = c.get("APLUS_SN"), i = c.get("APLUS_SY");
            try {
                r && (t.aplus_sn = r), i && (t.aplus_sy = i), t.ua = navigator.userAgent, t.lang = navigator.language;
            } catch (t) {}
            this.wsHandler.send({
                id: "id" + o.getRandom(1, 1e8),
                startTime: new Date().getTime(),
                type: e,
                msg: {
                    postData: t,
                    url: n
                },
                method: a
            });
        },
        getPvPostData: function(t) {
            var e = t.what_to_send.logdata, n = t.where_to_send.url;
            return {
                postData: e,
                mmurl: n
            };
        },
        getPostData: function(t) {
            var e = t.what_to_send.url, n = t.what_to_send.logdata;
            return n.gokey && (n.gokey.aws = 1), {
                postData: n,
                mmurl: e
            };
        },
        log_callback: function(t, e) {
            var n = this.getPostData(t);
            n && this.newSend(g.changeToArray(this.format, n.postData).join(this.getLogicSymbol()), e, n.mmurl, t.method);
        },
        getCnaData: function() {
            var t = u.getLsCna(this.lsCnaKey), e = p.getCookieCna("cna"), n = {
                cna: t || e,
                params: []
            };
            return t && !e && n.params.push("lstag=1"), n;
        },
        cnaCallback: function(t, e) {
            var n = u.getLsCna(this.lsCnaKey), a = p.getCookieCna("cna");
            n === a && n === e && a === e || (u.setLsCna(this.lsCnaKey, l.getFormatDate(), e),
            p.setCookieCna(t, e, {
                SameSite: "none"
            }));
        },
        watchWSStatus: function(t) {
            var e = this;
            this.wsHandler.subscribe("APLUS_WS_OPEN", function() {
                t === e.maxRetryTimesPerHour && (e.retryTimes = 0, e.setRetryTimes(e.retryTimes));
            }), this.wsHandler.subscribe("APLUS_WS_ERROR", function() {
                e.doSetRetryTimes(), e.msgQueueToHttpRequest();
            }), this.wsHandler.subscribe("APLUS_WS_EXCEPTION", function() {
                e.doSetRetryTimes(), e.msgQueueToHttpRequest();
            }), this.wsHandler.subscribe("APLUS_WS_CLOSE", function() {
                e.msgQueueToHttpRequest();
            });
        },
        startWebSocket: function() {
            var t = this, e = this.getCnaData();
            this.wsHandler = this.WS.create({
                cna: e.cna,
                params: e.params,
                createTime: new Date().getTime(),
                ctx: this.CTX
            }), this.wsHandler.startWS(), this.watchWSStatus(this.getRetryTimes()), this.wsHandler.subscribe("APLUS_WS_SERVER_MSG", function(e) {
                if (e) {
                    var n = e.indexOf(":"), a = e.substr(0, n), o = e.substr(n + 1);
                    switch (a) {
                      case "cna":
                        t.cnaCallback(a, o);
                        break;

                      case "aplus_sn":
                      case "aplus_sy":
                        t.cheatCallback(a, o);
                        break;

                      default:
                        var r = {};
                        r[a] = o, aplus.send(t.domain + "/s", r);
                    }
                }
            });
        },
        subscribeLogs: function(t, e) {
            f.pushIntoGoldlogQueue(r.SUBSCRIBE, [ t, function(t) {
                t.status === r.COMPLETE && e(t);
            } ]);
        },
        getLogicSymbol: function() {
            return "ALI" === this.format ? "&" : "||";
        },
        httpRequestBeacon: function(t, e, n, a) {
            var o = g.getKeyIndex("protocol"), r = g.getKeyIndex("event_args"), i = JSON.parse(t[r]);
            a && (i._j = 1), delete i.aplus_sn, delete i.aplus_sy, delete i.ua, delete i.lang,
            delete i.aws, t[r] = JSON.stringify(i), this.isPersistentLink(n) && (n = navigator && navigator.sendBeacon ? "POST" : "GET"),
            t[o] = n, aplus.send(e, t.join(this.getLogicSymbol()), n);
        },
        watchLOG: function(t) {
            var e = this, n = function(n, a) {
                var o = n.where_to_send.method, r = g.changeToArray(e.format, n.what_to_send.logdata);
                t && e.isPersistentLink(o) ? e.retryTimes >= e.maxRetryTimesPerHour ? e.httpRequestBeacon(r, n.where_to_send.url, o, !0) : e.log_callback(n, a) : e.httpRequestBeacon(r, n.where_to_send.url, o);
            };
            e.subscribeLogs("mw_change_pv", function(t) {
                n(t, "pv");
            }), e.subscribeLogs("mw_change_hjlj", function(t) {
                n(t, "aplus");
            });
        },
        changeToHttpRequest: function(t) {
            var e = this;
            if (t && t.length > 0) for (var n = 0; n < t.length; n++) {
                var a = t[n], o = a.msg, r = o.postData.split("||"), i = navigator && navigator.sendBeacon ? "POST" : "GET";
                e.httpRequestBeacon(r, o.url, i, !0);
            }
        },
        dataInArray: function(t, e) {
            for (var n, a = 0; a < t.length; a++) t[a].id === e.id && (n = !0);
            return n;
        },
        reduceDataInArray: function(t, e) {
            for (var n = [], a = 0; a < t.length; a++) t[a].id !== e.id && n.push(t[a]);
            return n;
        },
        msgQueueToHttpRequest: function() {
            var t = this.wsHandler.getMsgQueue();
            this.changeToHttpRequest(t), this.wsHandler.clearMsgQueue();
        },
        watchQueue: function() {
            var t = this;
            i.on(a, "beforeunload", function() {
                t.msgQueueToHttpRequest();
            }), this.wsHandler.subscribe("APLUS_WS_MSG_QUEUE_CHANGE", function(e) {
                a.setTimeout(function() {
                    var n = t.wsHandler.getMsgQueue();
                    if (t.dataInArray(n, e)) {
                        t.doSetRetryTimes(), t.changeToHttpRequest([ e ]);
                        var a = t.reduceDataInArray(n, e);
                        t.wsHandler.setMsgQueue(a);
                    }
                }, t.timeoutToHttp);
            });
        },
        watchDomain: function() {
            var t = this;
            f.pushIntoGoldlogQueue(r.SUBSCRIBE, [ "aplusInitContext", function(e) {
                var n = e ? e.where_to_send : {}, a = n.url.match(/(\w|-)+\.(\w|-)+\.(\w|-)+/);
                a && a.length > 0 && (t.domain = a[0]);
            } ]);
        },
        isPersistentLink: function(t) {
            return d.indexOf(t) > -1;
        },
        run: function(t, e) {
            var n = {
                aws: 1
            };
            e || (n._j = 1), f.pushIntoGoldlogQueue("aplus.appendMetaInfo", [ "aplus-exdata", n ]),
            f.pushIntoGoldlogQueue("aplus.appendMetaInfo", [ "aplus-cpvdata", n ]), this.retryTimes = this.getRetryTimes(),
            this.pageLoadDateHour = this.getDateHour(), e && this.isPersistentLink(t.context.where_to_send.method) ? (this.startWebSocket(),
            this.watchLOG(e), this.watchQueue(), this.watchDomain()) : this.watchLOG(e);
        }
    });
}, function(t, e) {
    "use strict";
    function n(t, e, n) {
        var a = "" + Math.abs(t), o = e - a.length, r = t >= 0;
        return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + a;
    }
    e.getFormatDate = function(t) {
        var e = new Date();
        try {
            return [ e.getFullYear(), n(e.getMonth() + 1, 2, 0), n(e.getDate(), 2, 0) ].join(t || "");
        } catch (t) {
            return "";
        }
    };
}, function(t, e, n) {
    "use strict";
    function a(t) {
        if (!document) return "";
        var e = document.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
        return e ? e[1] : "";
    }
    function o(t) {
        var e = new Date(), n = "";
        return "session" === t.expires || (t.expires && ("number" == typeof t.expires || t.expires.toUTCString) ? ("number" == typeof t.expires ? e.setTime(e.getTime() + 24 * t.expires * 60 * 60 * 1e3) : e = t.expires,
        n = "expires=" + e.toUTCString()) : (e.setTime(e.getTime() + 63072e7), n = "expires=" + e.toUTCString())),
        n;
    }
    function r(t, e, n) {
        if (document) return n || (n = {}), e += ";" + (n.expires || o(n)), e += "; path=" + (n.path ? n.path : "/"),
        e += "; domain=" + n.domain, document.cookie = t + "=" + e, n.SameSite && /Chrome\/8\d+/.test(navigator.userAgent) && (e += "; SameSite=" + n.SameSite,
        e += "; Secure", document.cookie = t + "=" + e), a(t);
    }
    function i(t, e, n) {
        try {
            if (!document) return "";
            if (n || (n = {}), n.domain) r(t, e, n); else for (var a = u.getDomains(), o = 0; o < a.length; ) n.domain = a[o],
            r(t, e, n) ? o = a.length : o++;
        } catch (t) {}
    }
    var s = n(27), u = n(75);
    e.getCookie = a, e.trySetCookie = r, e.setCookie = i;
    var c = [ "tracknick", "thw", "cna" ];
    e.getData = function() {
        var t = {};
        if (s(c, function(e) {
            t[e] = a(e);
        }), location) {
            var e = location.hostname;
            t.cnaui = /\btanx\.com$/.test(e) ? a("cnaui") : "";
        }
        return t;
    }, e.getHng = function() {
        return encodeURIComponent(a("hng") || "");
    }, e.getCookieCna = function(t) {
        return a(t) || a("_" + t);
    }, e.setCookieCna = function(t, e, n) {
        for (var a = u.getDomains(), i = 0; i < a.length; ) if (n.domain = a[i], r(t, e, n)) i = a.length; else {
            if (i === a.length - 1) {
                var s = e + ";" + o(n);
                s += "; path=/", document.cookie = "_" + t + "=" + s;
            }
            i++;
        }
    };
}, function(t, e) {
    "use strict";
    e.getDomains = function() {
        var t = [];
        try {
            for (var e = location.hostname, n = e.split("."), a = 2; a <= n.length; ) t.push(n.slice(n.length - a).join(".")),
            a++;
        } catch (t) {}
        return t;
    };
}, function(t, e, n) {
    "use strict";
    var a = "ws.mmstat.com", o = n(3), r = n(8), i = n(61), s = n(77);
    t.exports = r.extend({
        status: "inactive",
        websocket: {},
        wsindexPre: "wss",
        wsindex: 0,
        msg_queue: [],
        setWsHandler: function(t) {
            return this.websocket[this.wsindexPre + ++this.wsindex] = new this.ctx.WebSocket(t);
        },
        getWsHandler: function() {
            return this.websocket[this.wsindexPre + this.wsindex];
        },
        getMsgQueue: function() {
            return this.msg_queue;
        },
        clearMsgQueue: function() {
            this.msg_queue = [];
        },
        setMsgQueue: function(t) {
            this.msg_queue = t;
        },
        proessMsgQueue: function(t) {
            var e, n = this, a = 0;
            if (t && t.length > 0) for (e = t.length; a < e; ) n.send(t.shift()), a++; else for (e = n.msg_queue.length; a < e; ) n.send(n.msg_queue.shift()),
            a++;
        },
        initWebSocket: function(t) {
            var e = this, n = location.protocol === o.HTTPS ? "wss://" : "ws://", a = n + t + "/ws", r = "initWebSocket";
            try {
                e.cna && (a += "/" + e.cna), e.params && e.params.length > 0 && (a += "?" + e.params.join("&"));
                var i = e.setWsHandler(a), u = new Date().getTime();
                i.onopen = function() {
                    e.status = "active";
                    var t = e.getMsgQueue();
                    t.length > 0 && e.proessMsgQueue(t);
                    var n = "connTime=" + (new Date().getTime() - u);
                    s.catchException(r + "_onopen", {
                        message: n
                    }), e.publish("APLUS_WS_OPEN");
                }, i.onerror = function(t) {
                    e.status = "inactive";
                    var n = t ? t.target : {}, a = t ? t.timeStamp : "";
                    s.catchException(r + "_onerror", {
                        message: "targetUrl=" + n.url + "&readyState=" + n.readyState + "&timeStamp=" + a
                    }), e.publish("APLUS_WS_ERROR");
                }, i.onclose = function() {
                    e.status = "inactive", e.publish("APLUS_WS_CLOSE");
                }, i.onmessage = function(t) {
                    e.publish("APLUS_WS_SERVER_MSG", t.data);
                };
            } catch (t) {
                console.log(t), s.catchException(r + "_exception", t), e.publish("APLUS_WS_EXCEPTION");
            }
        },
        readyInitWebSocket: function() {
            var t = this;
            i.pushIntoGoldlogQueue(o.SUBSCRIBE, [ "aplusInitContext", function() {
                var e = t.getWsHandler();
                (!e || e && e.readyState > 1) && t.initWebSocket(a);
            } ]);
        },
        start: function() {
            var t = this.getWsHandler();
            (!t || t && t.readyState > 1) && (this.status = "active", this.readyInitWebSocket());
        },
        stop: function() {
            var t = this.getWsHandler();
            t && t.readyState <= 1 && (this.status = "inactive", t.close());
        },
        sendMsg: function(t) {
            var e = this.getWsHandler();
            return !(!e || 1 !== e.readyState) && (e.send(t), !0);
        },
        processSysEvent: function(t) {
            "active" === t.msg ? this.start() : "inactive" === t.msg && this.stop();
        },
        processLogEvent: function(t) {
            if ("active" === this.status) {
                var e = this.sendMsg(t.msg.postData);
                e || (this.msg_queue.push(t), this.publish("APLUS_WS_MSG_QUEUE_CHANGE", t));
            } else this.msg_queue.push(t), this.publish("APLUS_WS_MSG_QUEUE_CHANGE", t);
        },
        send: function(t) {
            var e = this.getWsHandler();
            switch ((!e || e.readyState > 1) && this.start(), t.type) {
              case "sys":
                this.processSysEvent(t);
                break;

              case "pv":
              case "aplus":
                this.processLogEvent(t);
            }
        },
        startWS: function() {
            var t = this;
            t.start();
        }
    });
}, function(t, e, n) {
    "use strict";
    var a = n(61);
    e.catchException = function(t, e) {
        var n = t;
        "object" == typeof e && e.message && (n = n + "_" + e.message), a.pushIntoGoldlogQueue("aplus._aplus_cplugin_m.do_tracker_jserror", [ {
            message: n,
            error: JSON.stringify(e),
            filename: t
        } ]);
    };
}, function(t, e, n) {
    "use strict";
    var a = n(27);
    t.exports = function() {
        return {
            getLogConfig: function() {
                var t = {}, e = this.options.config.plugins;
                for (var n in e) t[n] = {
                    plugins: e[n],
                    context: {}
                }, a(e[n], function(e) {
                    t[n].context[e.name] = e.config || {};
                });
                return t;
            },
            run: function() {
                this.options.context.logConfig = this.getLogConfig(), this.options.context.logConfig.pageLoadTime = this.options.context.PAGE_LOAD_TIME;
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(74), o = n(36), r = n(23), i = n(73), s = n(80), u = n(2);
    t.exports = function() {
        return {
            init: function(t) {
                this.options = t;
                var e = this.options.context.etag || {};
                this.cna = e.cna || a.getCookieCna("cna"), this.setTag(0), this.setStag(-1), this.setLsTag("-1"),
                this.setEtag(this.cna || ""), this.requesting = !1, this.today = i.getFormatDate();
            },
            setLsTag: function(t) {
                this.lstag = t, this.options.context.etag.lstag = t;
            },
            setTag: function(t) {
                this.tag = t, this.options.context.etag.tag = t;
            },
            setStag: function(t) {
                this.stag = t, this.options.context.etag.stag = t;
            },
            setEtag: function(t) {
                this.etag = t, this.options.context.etag.cna = t, a.getCookieCna("cna") !== t && a.setCookieCna("cna", t, {
                    SameSite: "none"
                });
            },
            setLscnaStatus: function(t) {
                this.options.context.etag.lscnastatus = t;
            },
            run: function(t, e) {
                var n = this;
                if (n.cna) return void n.setTag(1);
                var a = null, i = aplus._$.meta_info["aplus-rhost-v"];
                if (i) {
                    this.options.context.etag.egUrl = i + "/eg.js";
                    var c = s.getUrl(this.options.context.etag || {});
                    n.requesting = !0;
                    var l = function() {
                        setTimeout(function() {
                            e();
                        }, 20), clearTimeout(a);
                    };
                    return o.loadScript(c, function(t) {
                        var e, a;
                        if (t && "error" === t.type ? n.setStag(-3) : (e = u.getGoldlogVal("Etag"), e && n.setEtag(e),
                        a = u.getGoldlogVal("stag"), "undefined" != typeof a && n.setStag(a)), n.requesting) {
                            var o = aplus.globalConfig || {};
                            if (2 === a || 4 === a) {
                                var i = r.getLsCna(o.ETAG_STORAGE_KEY);
                                i ? (n.setLsTag(1), n.setEtag(i)) : (n.setLsTag(0), r.setLsCna(o.ETAG_STORAGE_KEY, n.today, e));
                            }
                            l();
                        }
                    }), a = setTimeout(function() {
                        n.requesting = !1, n.setStag(-2), e();
                    }, 1500), 200;
                }
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(23);
    e.getUrl = function(t) {
        var e = a.getUrl(t && t.egUrl);
        if (0 !== e.indexOf("http")) {
            var n = "https:";
            /(\d+\.){3,}\d+/.test(e) && (n = "http:"), e = n + e;
        }
        return e;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(2), o = n(3);
    t.exports = function() {
        return {
            getMetaInfo: function() {
                var t = a.getGoldlogVal("_$") || {}, e = t.meta_info;
                return e;
            },
            getAplusWaiting: function() {
                var t = this.getMetaInfo() || {};
                return t["aplus-waiting"];
            },
            run: function(t, e) {
                var n = this.options.config || {}, a = this.getAplusWaiting();
                if (a && n.is_auto) switch (a = this.getAplusWaiting() + "", this.options.context.when_to_sendpv = {
                    aplusWaiting: a
                }, a) {
                  case o._USER_ID:
                  case o._ANONY_ID:
                  case "MAN":
                    return "done";

                  case "1":
                    return this.options.context.when_to_sendpv.isWait = !0, setTimeout(function() {
                        e();
                    }, 6e3), 6e3;

                  default:
                    var r = 1 * a;
                    if (r + "" != "NaN") return this.options.context.when_to_sendpv.isWait = !0, setTimeout(function() {
                        e();
                    }, r), r;
                }
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(83), o = n(2), r = n(26), i = "POST", s = "GET";
    t.exports = function() {
        return {
            getMetaInfo: function() {
                var t = o.getGoldlogVal("_$") || {}, e = t.meta_info;
                return e;
            },
            getAplusMetaByKey: function(t) {
                var e = this.getMetaInfo() || {};
                return e[t];
            },
            getRhost: function() {
                var t = this.getAplusMetaByKey("aplus-rhost-v");
                return t;
            },
            getHjljHostUrl: function(t) {
                var e = /^\/\//.test(t) ? "" : "//", n = "/web_logs", a = e + t + n;
                return a;
            },
            getPvHostUrl: function(t) {
                var e = /^\/\//.test(t) ? "" : "//", n = /\/$/.test(t) ? "" : "/", o = "v.gif";
                return a.isMobile() && (o = "m.gif"), e + t + n + o;
            },
            getHostUrl: function(t) {
                var e = /^\/\//.test(t) ? "" : "//", n = "/web_logs", a = e + t + n;
                return a;
            },
            getChannel: function(t) {
                var e, n = this.getAplusMetaByKey("aplus-channel"), a = [ "WS", "WS-ONLY", s, i ];
                return a.indexOf(t) > -1 && (e = t), !e && a.indexOf(n) > -1 && (e = n), e;
            },
            run: function() {
                var t = !!this.options.context.is_single;
                if (!t) {
                    var e = this.options.config.recordType, n = this.getRhost(e);
                    if (!n) return r.logger({
                        msg: "current request domain invalid, please check your aplus-rhost-v value inside metainfo!"
                    }), "done";
                    var a;
                    a = "PV" === e ? this.getPvHostUrl(n) : this.getHjljHostUrl(n);
                    var o = this.options.config || {}, u = this.getChannel(o.method) || i;
                    u !== i || navigator && navigator.sendBeacon || (u = s), this.options.context.where_to_send.method = o.method,
                    this.options.context.where_to_send.url = a;
                }
            }
        };
    };
}, function(t, e) {
    "use strict";
    e.isMobile = function() {
        var t = navigator ? navigator.userAgent : "", e = /AliApp|Yunos|cyclone/i.test(t), n = /iPhone|iPad|iPod/i.test(t), a = /Android/i.test(t), o = /Windows Phone/i.test(t) || /IEMobile/i.test(t) || /WPDesktop/i.test(t), r = /BlackBerry/i.test(t), i = /Opera Mini/i.test(t);
        return e || n || a || o || r || i;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(74), o = n(85), r = n(21), i = n(83), s = n(2), u = n(3), c = s.getGlobalValue("aplus"), l = n(86);
    t.exports = function() {
        return {
            getCommonParams: function() {
                var t = this.options.context || {}, e = t.etag || {}, n = t.userdata || {}, p = s.getGoldlogVal("_$") || {}, f = this.options.config || {}, g = i.isMobile() ? "WAP" : "PC", d = {
                    _dev_id: c.getMetaInfo("_dev_id"),
                    _anony_id: c.getMetaInfo(u._ANONY_ID),
                    _user_id: c.getMetaInfo(u._USER_ID),
                    _user_nick: c.getMetaInfo("_user_nick") || a.getCookie("tracknick"),
                    _session_id: c.getMetaInfo("_session_id")
                }, h = f.pageUrl || (location ? location.href : "-"), _ = f.title || document && document.title, v = r.assign({
                    appId: c.getMetaInfo("appKey") || c.getMetaInfo("appId"),
                    cache: o.getLogId(h, _),
                    cna: e.cna,
                    etag: e,
                    pre: p.page_referrer || "-",
                    sdk_info: {
                        jsver: c.globalConfig.script_name,
                        lver: c.globalConfig.lver,
                        customSdkId: c.getMetaInfo("customSdkId") || "",
                        platformType: g.toLowerCase()
                    },
                    trackerEventCode: f.trackerEventCode,
                    title: _,
                    url: h,
                    client: c._aplus_client || {},
                    timeZone: l.getTimeZone(),
                    gokey: d,
                    gmkey: n.gmkey || "",
                    method: this.options.context.where_to_send.method
                }, d);
                return v;
            },
            getPvParams: function() {
                var t = this.getCommonParams();
                return this.options.config.is_auto || (t.sdk_info.mansndlog = 1), r.assign(t, {
                    event_code: "2001",
                    logtype: "1",
                    logkey: i.isMobile() ? "/m.gif" : "/v.gif",
                    event_timestamp: c._$.send_pv_count > 0 ? new Date() : c.logConfig.pageLoadTime
                });
            },
            getHjljParams: function() {
                var t = this.options.context || {}, e = t.userdata || {}, n = {
                    event_code: u.EVENT_ID_MAP[e.gmkey] || u.OTHER,
                    logtype: "2",
                    logkey: e.logkey,
                    event_timestamp: new Date()
                };
                return r.assign(this.getCommonParams(), n);
            },
            run: function() {
                var t = {};
                t = "PV" === this.options.config.recordType ? this.getPvParams() : this.getHjljParams(),
                this.options.context.what_to_send.logdata = t;
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    function a(t, e, n) {
        return t ? o.hash(encodeURIComponent(t)).substr(0, e) : n;
    }
    var o = n(41), r = function(t) {
        function e(t) {
            var e = "0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ", n = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";
            return 1 == t ? e.substr(Math.floor(60 * Math.random()), 1) : 2 == t ? n.substr(Math.floor(60 * Math.random()), 1) : "0";
        }
        for (var n, a = "", o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r = !1; a.length < t; ) n = o.substr(Math.floor(62 * Math.random()), 1),
        !r && a.length <= 2 && ("g" == n.toLowerCase() || "l" == n.toLowerCase()) && (0 === a.length && "g" == n.toLowerCase() ? Math.random() < .5 && (n = e(1),
        r = !0) : 1 == a.length && "l" == n.toLowerCase() && "g" == a.charAt(0).toLowerCase() && (n = e(2),
        r = !0)), a += n;
        return a;
    };
    e.getLogId = function(t, e) {
        var n = r(8), o = n.substr(0, 4), i = n.substr(0, 6);
        return [ a(t, 4, o), a(e, 4, o), i ].join("");
    };
}, function(t, e) {
    e.getTimeZone = function() {
        var t = -new Date().getTimezoneOffset() / 60, e = "+";
        t < 0 && (e = "-");
        var n = Math.abs(parseInt(t)), a = Math.abs(parseInt(t) - t), o = "00";
        return a > 0 && (o = 60 * a), "GMT" + e + (n > 9 ? n : "0" + n) + ":" + o;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(21), o = n(74);
    t.exports = function() {
        return {
            run: function() {
                var t = {}, e = o.getCookie("workno") || o.getCookie("emplId");
                e && (t.workno = e);
                var n = o.getHng();
                n && (t._hng = o.getHng());
                var r;
                r = this.options.context.what_to_send.logdata, r.gokey = a.assign(r.gokey, t);
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(20), o = n(89), r = n(21), i = n(2), s = i.getGlobalValue("aplus");
    t.exports = function() {
        return {
            getUserdata: function() {
                var t = this.options.config || {}, e = {};
                t && !t.is_auto && t.gokey && ("string" == typeof t.gokey ? e = a.param2obj(t.gokey) : "object" == typeof t.gokey && (e = t.gokey));
                var n = function(t) {
                    o(t) ? t.forEach(function(t) {
                        e = r.assign(e, t);
                    }) : e = r.assign(e, t);
                };
                n(s.getMetaInfo("aplus-cpvdata"));
                var i = this.options.context || {}, u = i.userdata || {};
                return n(u), e;
            },
            processLodashDollar: function() {
                var t = this.options.config || {}, e = i.getGoldlogVal("_$") || {};
                t && t.referrer && (e.page_referrer = t.referrer), i.setGoldlogVal("_$", e);
            },
            updatePre: function(t) {
                var e = i.getGoldlogVal("_$") || {};
                return e.page_referrer && (t.pre = e.page_referrer), t;
            },
            run: function() {
                var t = this.options.context.what_to_send.logdata, e = r.assign(this.getUserdata(), t.userdata || {});
                this.processLodashDollar(), t.gokey = r.assign(t.gokey, e), t = this.updatePre(t),
                this.options.context.what_to_send.logdata = t, this.options.context.userdata = t.gokey;
            }
        };
    };
}, function(t, e) {
    "use strict";
    t.exports = function(t) {
        return Array.isArray ? Array.isArray(t) : /Array/.test(Object.prototype.toString.call(t));
    };
}, function(t, e, n) {
    "use strict";
    var a = n(91), o = n(92), r = n(93), i = n(2), s = n(22);
    t.exports = function() {
        return {
            getPageId: function() {
                var t = this.options.config || {}, e = this.options.context || {}, n = e.userdata || {};
                return t.page_id || t.pageid || t.pageId || n.page_id;
            },
            resetSpmB: function() {
                if (aplus.spmAPI) {
                    var t = i.getGoldlogVal("_$") || {}, e = t.spm || {}, n = e.data.b;
                    if (n) {
                        var a = this.getPageId();
                        n = a ? n.split("/")[0] + "/" + a : n.split("/")[0], aplus.spmAPI && aplus.spmAPI.setB(n);
                        var o = e.spm_cnt.split(".");
                        o && o.length > 2 && (o[1] = n, e.spm_cnt = o.join("."));
                    }
                }
            },
            getExParamsInfo: function() {
                var t = a.getExParams();
                return this.options.context.what_to_send.logdata.exparams = t, o(t);
            },
            run: function() {
                this.resetSpmB();
                var t = this.options.context.what_to_send.logdata.gokey;
                t = s(t, r()), t = s(this.getExParamsInfo(), t), this.options.context.what_to_send.logdata.gokey = t;
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    function a(t) {
        for (var e, n = t.split("&"), a = 0, o = n.length, r = []; a < o; a++) e = n[a].split("="),
        r.push([ e.shift(), e.join("=") ]);
        return r;
    }
    function o(t, e) {
        var n = "aplus&sidx=aplusSidex&ckx=aplusCkx", a = t || n;
        try {
            if (e) {
                var o = u.param2obj(e), r = [ d.APLUS, "cna", d.SPM_CNT, d.SPM_URL, d.SPM_PRE, "logtype", "pre", "uidaplus", "asid", "sidx", "trid", "gokey" ];
                s(r, function(t) {
                    o.hasOwnProperty(t) && (g.logger({
                        msg: "Can not inject keywords: " + t
                    }), delete o[t]);
                }), delete o[""];
                var i = "";
                if (t) {
                    var l = t.match(/aplus&/).index, p = l > 0 ? u.param2obj(t.substring(0, l)) : {};
                    delete p[""], i = u.obj2param(c.assign(p, o)) + "&" + t.substring(l, t.length);
                } else i = u.obj2param(o) + "&" + n;
                return i;
            }
            return a;
        } catch (t) {
            return a;
        }
    }
    function r() {
        var t = aplus && aplus._$ ? aplus._$ : {}, e = t.meta_info || {};
        return e["aplus-exparams"] || "";
    }
    function i() {
        var t = l.getCurrentNode(), e = p.tryToGetAttribute(t, "exparams"), n = o(e, r()) || "";
        return n && n.replace(/&amp;/g, "&").replace(/\buser(i|I)d=/, "uidaplus=");
    }
    var s = n(27), u = n(20), c = n(21), l = n(36), p = n(28), f = n(35), g = n(26), d = n(3);
    e.mergeExparams = o, e.getExParams = i, e.getExparamsInfos = function(t, e) {
        var n = {}, o = t || [ "uidaplus", "pc_i", "pu_i" ], r = i() || "";
        r = r.replace(/&aplus&/, "&");
        for (var s = a(r) || [], u = function(t) {
            return f.indexof(o, t) > -1;
        }, c = 0; c < s.length; c++) {
            var l = s[c], p = l[0] || "", g = l[1] || "";
            p && g && ("EXPARAMS" === e || u(p)) && (n[p] = g);
        }
        return n;
    };
}, function(t, e, n) {
    var a = n(20);
    t.exports = function(t) {
        var e = {};
        try {
            var n = a.param2obj(t.replace(/&amp;/g, "&").replace(/\buser(i|I)d=/, "uidaplus=").replace(/&aplus&/, "&"));
            n.uidaplus && (e.uidaplus = n.uidaplus), e.pc_i = n.pc_i, e.pu_i = n.pu_i;
        } catch (t) {
            console && console.log(t);
        }
        return e;
    };
}, function(t, e, n) {
    var a = n(74);
    t.exports = function() {
        var t = {}, e = a.getCookie("workno") || a.getCookie("emplId");
        e && (t.workno = e);
        var n = a.getHng();
        return n && (t._hng = a.getHng()), t;
    };
}, function(t, e, n) {
    "use strict";
    function a(t) {
        var e, n, a, o, i = [], s = {};
        for (e = t.length - 1; e >= 0; e--) n = t[e], a = n[0], a && a.indexOf(r.s_plain_obj) == -1 && s.hasOwnProperty(a) || (o = n[1],
        ("aplus" == a || o) && (i.unshift([ a, o ]), s[a] = 1));
        return i;
    }
    function o(t) {
        var e, n, a, o, i = [], u = {
            logtype: !0,
            cache: !0,
            scr: !0,
            "spm-cnt": !0
        };
        for (e = t.length - 1; e >= 0; e--) if (n = t[e], a = n[0], o = n[1], !(s.isStartWith(a, r.s_plain_obj) && !s.isStartWith(a, r.mkPlainKeyForExparams()) || u[a])) if (s.isStartWith(a, r.mkPlainKeyForExparams())) {
            var c = r.param2arr(o);
            if ("object" == typeof c && c.length > 0) for (var l = c.length - 1; l >= 0; l--) {
                var p = c[l];
                p && p[1] && i.unshift([ p[0], p[1] ]);
            }
        } else i.unshift([ a, o ]);
        return i;
    }
    var r = n(95), i = n(35), s = n(21), u = n(2), c = n(74), l = n(16), p = n(3);
    t.exports = function() {
        return {
            keyIsAvailable: function(t) {
                var e = [ "functype", "funcId", "spm-cnt", "spm-url", "spm-pre", "_ish5", "_is_g2u", "_h5url", "cna", "isonepage", "lver", "jsver" ];
                return i.indexof(e, t) === -1;
            },
            valIsAvailable: function(t) {
                return "object" != typeof t && "function" != typeof t;
            },
            upUtData: function(t, e) {
                var n = this;
                if (t = t ? t : {}, e && "object" == typeof e) for (var a in e) {
                    var o = e[a];
                    a && n.valIsAvailable(o) && n.keyIsAvailable(a) && (t[a] = o);
                }
                return t;
            },
            getToUtData: function() {
                var t = u.getGoldlogVal("_$") || {}, e = t.spm || {}, n = this.options.context || {}, i = n.what_to_send || {}, s = i.logdata || {}, f = s.sdk_info || {}, g = this.options.context.etag || {}, d = o(a(s.exparams || []));
                d = r.arr2obj(d);
                var h = n.userdata, _ = location.href, v = {}, m = l.getParamFromUrl("scm", _) || "";
                m && (v.scm = m);
                var y = l.getParamFromUrl("pg1stepk", _) || "";
                y && (v.pg1stepk = y);
                var b = l.getParamFromUrl("point", _) || "";
                b && (v.issb = 1), f && f.mansndlog && (v.mansndlog = f.mansndlog), v = this.upUtData(v, d),
                v = this.upUtData(v, s.gokey), v = this.upUtData(v, h), v.functype = "page", v.funcId = "2001",
                v.url = (location.protocol || "https:") + "//" + location.host + location.pathname,
                v._ish5 = "1", v._h5url = _, v._toUT = 2, v._bridgeName = "WindVane", v._bridgeVersion = "3.0.4",
                e.spm_cnt && (v[p.SPM_CNT] = e.spm_cnt || ""), e.spm_url && (v[p.SPM_URL] = e.spm_url || ""),
                e.spm_pre && (v[p.SPM_PRE] = e.spm_pre || ""), v.cna = g.cna || c.getCookieCna("cna"),
                v.lver = f.lver, v.jsver = f.jsver, v.pver = "1.0.0", v.isonepage = -1;
                var w = aplus.getMetaInfo("aplus-utparam");
                return w && (v["utparam-cnt"] = JSON.stringify(w)), v._is_g2u_ = 1, v._slog = 1,
                v;
            },
            run: function() {
                var t = this.options.context || {}, e = t.what_to_send || {};
                e.pvdataToUt = this.getToUtData(), this.options.context.what_to_send = e;
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    function a(t) {
        var e, n, a, o = [], r = t.length;
        for (a = 0; a < r; a++) e = t[a][0], n = t[a][1], o.push(0 === e.indexOf(i) ? n : e + "=" + encodeURIComponent(n));
        return o.join("&");
    }
    var o = n(35), r = n(20), i = "::-plain-::";
    e.mkPlainKey = function() {
        return i + Math.random();
    }, e.s_plain_obj = i, e.mkPlainKeyForExparams = function(t) {
        var e = t || i;
        return e + "exparams";
    }, e.arr2param = a, e.param2arr = function(t) {
        for (var e, n = t.split("&"), a = 0, o = n.length, r = []; a < o; a++) e = n[a].split("="),
        r.push([ e.shift(), e.join("=") ]);
        return r;
    }, e.arr2obj = function(t) {
        var e, n, a, o = {}, r = t.length;
        for (a = 0; a < r; a++) e = t[a][0], n = t[a][1], o[e] = n;
        return o;
    }, e.makeUrl = function(t, e) {
        var n = t.indexOf("?") == -1 ? "?" : "&", i = e ? o.isArray(e) ? a(e) : r.obj2param(e) : "";
        return i ? t + n + i : t;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(21), o = n(65), r = n(3);
    t.exports = function() {
        return {
            getToNativeData: function() {
                var t = this.options.context || {}, e = a.cloneDeep(t.userdata) || {}, n = t.what_to_send || {}, i = n.logdata || {}, s = i.sdk_info || {}, u = this.options.context.etag || {}, c = {}, l = {};
                if (l.cna = u.cna, l.lver = s.lver, l.jsver = s.jsver, l.id = r.PAGE_START, l.ts = Date.now(),
                l.r = i.arg1 || i.logkey || "-", l.is_h5 = "1", i.url && i.url.length > 0) {
                    var p = i.url.split("?");
                    l.page_name = p[0] || "-", l.url_p = p[1] || "-";
                }
                if (i.pre && i.pre.length > 0) {
                    var f = i.pre.split("?");
                    l.ref_page_name = f[0] || "-", l.refer_p = f[1] || "-";
                }
                return e.hasOwnProperty("autosend") ? l.is_auto = 1 : l.is_auto = 0, c.sdkArgs = a.cloneDeep(l),
                c.cusp = o.deleteInfo(e, [ "_anony_id", "_dev_id", "_session_id", "_src_pos_id", "_user_id", "_user_nick" ]),
                c;
            },
            run: function() {
                var t = this.options.context || {}, e = t.what_to_send || {};
                e.pvdataToUmNative = this.getToNativeData(), this.options.context.what_to_send = e;
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(2);
    t.exports = function() {
        return {
            run: function() {
                var t = a.getGoldlogVal("_$") || {}, e = this.options.context.can_to_sendpv || {}, n = t.send_pv_count || 0, o = this.options.config || {};
                return o.is_auto && n > 0 ? "done" : (e.flag = "YES", this.options.context.can_to_sendpv = e,
                t.send_pv_count = ++n, void a.setGoldlogVal("_$", t));
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(99), o = n(2);
    t.exports = function() {
        return {
            run: function() {
                var t = aplus._$ || {}, e = this.options.context || {};
                o.setGoldlogVal("pv_context", e);
                var n = aplus.spm_ab || [], r = n.join("."), i = t.send_pv_count, s = {
                    cna: e.etag.cna,
                    count: i,
                    spmab_pre: aplus.spmab_pre
                };
                a.doPubMsg([ "sendPV", "complete", r, s ]), a.doCachePubs([ "sendPV", "complete", r, s ]);
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(2), o = "function", r = function() {
        var t = a.getGlobalValue("aplus"), e = t.aplus_pubsub || {}, n = typeof e.publish === o;
        return n ? e : "";
    };
    e.doPubMsg = function(t) {
        var e = r();
        e && typeof e.publish === o && e.publish.apply(e, t);
    }, e.doCachePubs = function(t) {
        var e = r();
        e && typeof e.cachePubs === o && e.cachePubs.apply(e, t);
    }, e.doSubMsg = function(t, e) {
        var n = r();
        n && typeof n.subscribe === o && n.subscribe(t, e);
    };
}, function(t, e, n) {
    "use strict";
    var a = n(20), o = n(89), r = n(21), i = n(2), s = i.getGlobalValue("aplus");
    t.exports = function() {
        return {
            getUserData: function() {
                var t = this.options.context || {}, e = t.userdata || {}, n = t.what_to_send.logdata.gokey;
                n = r.assign(n, a.param2obj(e.gokey));
                var i = s.getMetaInfo("aplus-exinfo");
                i && (n = r.assign(n, a.param2obj(i)));
                var u = s.getMetaInfo("aplus-exdata");
                return o(u) ? u.forEach(function(t) {
                    n = r.assign(n, t);
                }) : n = r.assign(n, s.getMetaInfo("aplus-exdata")), n;
            },
            run: function() {
                this.options.context.what_to_send.logdata.gokey = this.getUserData();
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(91), o = n(92), r = n(93), i = n(21);
    t.exports = function() {
        return {
            getExParamsInfo: function() {
                var t = a.getExParams();
                return this.options.context.what_to_send.logdata.exparams = t, o(t);
            },
            run: function() {
                var t = this.options.context.what_to_send.logdata.gokey;
                t = i.assign(t, r()), t = i.assign(this.getExParamsInfo(), t), this.options.context.what_to_send.logdata.gokey = t;
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(2), o = n(3);
    t.exports = function() {
        return {
            getToUtData: function() {
                var t = a.getGoldlogVal("_$") || {}, e = t.spm || {}, n = this.options.context || {}, r = n.userdata || {}, i = n.etag || {}, s = n.what_to_send || {}, u = s.logdata || {}, c = u.sdk_info || {}, l = u.gokey || {}, p = [], f = "";
                for (var g in l) if ([ o.SPM_CNT, o.SPM_URL, o.SPM_PRE ].indexOf(g) === -1) {
                    var d = l[g];
                    "undefined" !== l[g] && void 0 !== l[g] || (d = ""), p.push(g + "=" + d);
                }
                p.length > 0 && (f = p.join("&"));
                var h = location.href, _ = {};
                _.functype = "ctrl", _.funcId = u.event_code, _.url = (location.protocol || "https:") + "//" + location.host + location.pathname,
                _.logkey = u.logkey, _.gokey = encodeURIComponent(f), _.gmkey = u.gmkey, _._ish5 = "1",
                _._h5url = h, _._is_g2u_ = 1, _._slog = 1, _._toUT = 2, _._bridgeName = "WindVane",
                _._bridgeVersion = "3.0.4", e.spm_cnt && (_[o.SPM_CNT] = e.spm_cnt || ""), e.spm_url && (_[o.SPM_URL] = e.spm_url || ""),
                e.spm_pre && (_[o.SPM_PRE] = e.spm_pre || ""), _.cna = i.cna, _.lver = c.lver, _.jsver = c.jsver,
                r.hasOwnProperty("autosend") && (_.autosend = r.autosend);
                var v = aplus.getMetaInfo("aplus-utparam");
                return v && (_["utparam-cnt"] = JSON.stringify(v)), _;
            },
            run: function() {
                var t = this.options.context || {}, e = t.what_to_send || {};
                e.pvdataToUt = this.getToUtData(), this.options.context.what_to_send = e;
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(21), o = n(65);
    t.exports = function() {
        return {
            getToNativeData: function() {
                var t = this.options.context || {}, e = t.userdata || {}, n = t.etag || {}, r = t.what_to_send || {}, i = r.logdata || {}, s = i.sdk_info || {}, u = {}, c = {};
                if (c.cna = n.cna, c.lver = s.lver, c.jsver = s.jsver, c.id = e.logkey || "-", c.ts = Date.now(),
                c.is_h5 = "1", i.url && i.url.length > 0) {
                    var l = i.url.split("?");
                    c.page_name = l[0] || "-", c.url_p = l[1] || "-";
                }
                if (i.pre && i.pre.length > 0) {
                    var p = i.pre.split("?");
                    c.ref_page_name = p[0] || "-", c.refer_p = p[1] || "-";
                }
                return c.funcId = i.event_code, e.hasOwnProperty("autosend") ? c.is_auto = 1 : c.is_auto = 0,
                u.sdkArgs = a.cloneDeep(c), u.cusp = o.deleteInfo(e.gokey, [ "_anony_id", "_dev_id", "_session_id", "_src_pos_id", "_user_id", "_user_nick" ]),
                u;
            },
            run: function() {
                var t = this.options.context || {}, e = t.what_to_send || {};
                e.hjljdataToUmNative = this.getToNativeData(), this.options.context.what_to_send = e;
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                n(105)();
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(36), o = n(106);
    t.exports = function() {
        var t = {
            isTouchEnabled: a.isTouch()
        };
        o.run(t);
    };
}, function(t, e, n) {
    "use strict";
    function a(t, e) {
        for (var n, a; t && (n = t.tagName); ) {
            if ("A" === n) {
                a = !0;
                break;
            }
            if ("BODY" == n || "HTML" == n) break;
            t = t.parentNode;
        }
        e(a ? t : "");
    }
    function o(t, e, n) {
        try {
            for (var a; t && (a = t.tagName); ) {
                var o = t && t.getAttribute ? t.getAttribute("data-aplus-pos-id") : "";
                if (o) {
                    m(e) && e(t, o);
                    break;
                }
                if ("BODY" == a || "HTML" == a) {
                    m(e) && e(t, "PAGE");
                    break;
                }
                t = t.parentNode;
            }
        } catch (t) {
            m(n) && n();
        }
    }
    function r(t) {
        var e = aplus.getMetaInfo("aplus-auto-clk") || [], n = {};
        return "PAGE" === t ? e[0] || {} : (f(e, function(e) {
            if (e._pos_id === t) return n = e, "break";
        }), n);
    }
    function i(t, e) {
        if (t && /&?\b_src_pos_id=[^&#]*/.test(t) && (t = t.replace(/&?\b_src_pos_id=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")),
        !e) return t;
        var n, a, o, r, i, s, u, c = "&";
        t.indexOf("#") !== -1 && (o = t.split("#"), t = o.shift(), a = o.join("#")), r = t.split("?"),
        i = r.length - 1, o = r[0].split("//"), o = o[o.length - 1].split("/"), s = o.length > 1 ? o.pop() : "",
        i > 0 && (n = r.pop(), t = r.join("?")), n && i > 1 && n.indexOf("&") == -1 && n.indexOf("%") !== -1 && (c = "%26");
        var l = "";
        if (t = t + "?_src_pos_id=" + l + e + (n ? c + n : "") + (a ? "#" + a : ""), u = d.isContain(s, ".") ? s.split(".").pop().toLowerCase() : "") {
            if ({
                png: 1,
                jpg: 1,
                jpeg: 1,
                gif: 1,
                bmp: 1,
                swf: 1
            }.hasOwnProperty(u)) return 0;
            !n && i <= 1 && (a || {
                htm: 1,
                html: 1,
                php: 1,
                aspx: 1,
                shtml: 1,
                xhtml: 1
            }.hasOwnProperty(u) || (t += "&file=" + s));
        }
        return t;
    }
    function s(t, e) {
        var n = t.getElementsByTagName("a"), a = r(e) || {}, s = y.page || {}, u = a.spmB || s.spmB;
        if (u) {
            var c = 1;
            f(n, function(t) {
                o(t, function(n, a) {
                    if (e === a) {
                        var o = "PAGE" === e ? [ u, c++ ].join(".") : [ u, e, c++ ].join(".");
                        aplus._current_spm = o;
                        var r = window.aplus_queue || (window.aplus_queue = []);
                        r.push({
                            action: "aplus.appendMetaInfo",
                            arguments: [ "aplus-cpvdata", {
                                _src_pos_id: o
                            } ]
                        });
                        try {
                            t && t.setAttribute && (t.getAttribute("aplus-anchor-id") || (t.setAttribute("aplus-anchor-id", o),
                            t.href && "#" !== t.href && t.setAttribute("href", i(t.href, o))));
                        } catch (t) {
                            console.log(t);
                        }
                    }
                });
            });
        }
    }
    function u(t, e) {
        a(e, function(t) {
            t && !t.getAttribute("aplus-anchor-id") && o(t, s, function() {
                console.log("findAplusAnchorByAlinkEl failure...");
            });
        });
    }
    function c(t) {
        var e = window.aplus_queue || (window.aplus_queue = []), n = t || h.getParamFromUrl("_src_pos_id", location.href);
        e.push({
            action: "aplus.appendMetaInfo",
            arguments: [ "aplus-cpvdata", {
                _src_pos_id: n
            } ]
        }), e.push({
            action: "aplus.appendMetaInfo",
            arguments: [ "aplus-exdata", {
                _src_pos_id: n
            } ]
        }), e.push({
            action: "aplus.aplus_pubsub.subscribe",
            arguments: [ v.MW_CHANGE_PV, function(t) {
                "complete" === t.status && aplus.appendMetaInfo("aplus-cpvdata", {
                    _src_pos_id: ""
                });
            } ]
        });
    }
    function l() {
        _.pushIntoGoldlogQueue(v.SUBSCRIBE, [ v.CURRENT_PAGE_CONFIG, function(t) {
            y = t || {};
        } ]);
    }
    function p() {
        var t = window.aplus_queue || (window.aplus_queue = []);
        t.push({
            action: "aplus.setMetaInfo",
            arguments: [ "aplus-auto-clk-userfn", function(t) {
                var e = t ? t.getAttribute("aplus-anchor-id") : "";
                if (e) return "_pos_id=" + e;
                var n = t ? t.getAttribute("data-aplus-pos-id") : "", a = n ? r(n) : {};
                if (a.spmB && a._pos_id) {
                    var o = [ a.spmB, n ].join(".");
                    return "_pos_id=" + o;
                }
                return "";
            } ]
        });
    }
    var f = n(27), g = n(55), d = n(21), h = n(16), _ = n(61), v = n(3), m = n(10), y = {};
    e.run = function(t) {
        var e = document;
        c(), l(), p(), window.aplus.doTrace = u, t && t.isTouchEnabled ? g.on(e, "tapSpm", u) : (g.on(e, "mousedown", u),
        g.on(e, "keydown", u));
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            run: function() {
                n(108)(this.options.context.logConfig);
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(99), o = n(2);
    t.exports = function(t) {
        var e = o.getGlobalValue("aplus");
        if (!e._aplus_api) {
            e._aplus_api = {
                status: "complete"
            };
            var r = n(109).run.create({
                logConfig: t
            });
            for (var i in r) e[i] = r[i];
            n(114).makePVId();
            var s = [ "aplusReady", "complete" ];
            a.doPubMsg(s), a.doCachePubs(s);
        }
    };
}, function(t, e, n) {
    "use strict";
    function a() {
        var t = 5e3;
        try {
            var e = w.getMetaInfo("aplus-mmstat-timeout");
            if (e) {
                var n = parseInt(e);
                n >= 1e3 && n <= 1e4 && (t = n);
            }
        } catch (t) {}
        return t;
    }
    var o = n(11), r = n(74), i = n(55), s = n(26), u = n(99), c = n(21), l = n(2), p = n(10), f = n(3), g = n(61), d = n(110), h = n(19), _ = n(113), v = [], m = [], y = [], b = [], w = l.getGlobalValue("aplus"), E = function() {};
    e.run = o.extend({
        beforeSendPV: function(t) {
            v.push(t);
        },
        afterSendPV: function(t) {
            m.push(t);
        },
        send: function(t, e, n) {
            var o;
            if (0 === t.indexOf("//")) {
                var r = f.HTTPS;
                /(\d+\.){3,}\d+/.test(t) && (r = "http:"), t = r + t;
            }
            return o = "POST" === n && navigator && navigator.sendBeacon ? _.postData(t, e) : _.sendImg(t + "?" + e, a()),
            w.req = o, o;
        },
        sendPV: function(t, e) {
            if (t = t || {}, c.any(v, function(e) {
                return e(w, t) === !1;
            })) return !1;
            var n = new d();
            t.recordType = "PV";
            var a = w.logConfig.pv;
            return n.run({
                plugins: a.plugins,
                context: c.cloneDeep(a.context)
            }, {
                config: t,
                userdata: e,
                pubsubType: "pv",
                messageFnQueue: m,
                middlewareMessageKey: "mw_change_pv"
            }), !0;
        },
        pageEnter: function(t) {
            g.pushIntoGoldlogQueue(f.PUBLISH, [ f.PAGE_ENTER, t ]), g.pushIntoGoldlogQueue(f.CACHE_PUBS, [ f.PAGE_ENTER, t ]);
        },
        getParam: function(t) {
            var e = window.WindVane || {}, n = e && "function" == typeof e.getParam ? e.getParam(t) : "";
            return n;
        },
        beforeRecord: function(t) {
            y.push(t);
        },
        afterRecord: function(t) {
            b.push(t);
        },
        record: function(t, e, n, a, o) {
            if (t && 0 !== t.indexOf("/") && w.globalConfig.isAli && (t = "/" + t), !c.any(y, function(t) {
                return t(w) === !1;
            })) {
                var r = new d(), i = w.logConfig.hjlj;
                return r.run({
                    plugins: i.plugins,
                    context: c.cloneDeep(i.context)
                }, {
                    config: {
                        recordType: "COMMON_HJLJ",
                        method: a
                    },
                    userdata: {
                        logkey: t,
                        gmkey: e,
                        gokey: n
                    },
                    pubsubType: "hjlj",
                    messageFnQueue: b,
                    middlewareMessageKey: "mw_change_hjlj"
                }, function() {
                    p(o) && o();
                }), !0;
            }
        },
        recordUdata: function(t, e, n, a, o) {
            var r = new d(), i = w.logConfig.hjlj;
            r.run({
                plugins: i.plugins,
                context: c.cloneDeep(i.context)
            }, {
                config: {
                    recordType: "DATACLICK_HJLJ",
                    method: a
                },
                userdata: {
                    logkey: t,
                    gmkey: e,
                    gokey: n
                },
                pubsubType: "hjlj",
                messageFnQueue: b,
                middlewareMessageKey: "mw_change_hjlj"
            }, function() {
                p(o) && o();
            });
        },
        setPageSPM: function(t, e, n) {
            var a = w.getMetaInfo("aplus-spm-fixed"), o = "function" == typeof n ? n : function() {};
            w.spm_ab = w.spm_ab || [];
            var r = c.cloneDeep(w.spm_ab);
            t && (w.spm_ab[0] = "" + t, w._$.spm.data.a = "" + t), e && (w.spm_ab[1] = "" + e,
            w._$.spm.data.b = "" + e);
            var i = h.qGet();
            if (w.spmAPI && w.spmAPI.spaInit(w, i, r), "1" !== a) {
                var s = r.join(".");
                w.spmab_pre = s;
            }
            var l = [ "setPageSPM", {
                spmab_pre: w.spmab_pre,
                spmab: w.spm_ab.join(".")
            } ];
            u.doPubMsg(l), u.doCachePubs(l), o();
        },
        setMetaInfo: function(t, e, n) {
            var a, o, r = "OVERWRITE", i = r;
            if ("object" == typeof t ? (a = t.metaName, o = t.metaValue, i = t.mode || r) : (a = t,
            o = e), i !== r) return this.appendMetaInfo(a, o);
            if (h.setMetaInfo(a, o, n)) {
                var s = l.getGoldlogVal("_$") || {};
                s.meta_info = h.qGet();
                var c = l.setGoldlogVal("_$", s), p = [ "setMetaInfo", a, o, n ];
                return u.doPubMsg(p), u.doCachePubs(p), c;
            }
        },
        appendMetaInfo: h.appendMetaInfo,
        updatePageProperties: function(t) {
            t && "object" == typeof t ? (t._page && (t.pageName = t._page, w.setMetaInfo("aplus-pagename", t.pageName),
            delete t._page), w.appendMetaInfo("aplus-cpvdata", t)) : s.logger({
                msg: "warning: typeof updatePageProperties's params must be object"
            });
        },
        updateNextPageProperties: function(t) {
            "object" == typeof t ? w.appendMetaInfo("aplus-nextpage-properties", t) : s.logger({
                msg: "warning: typeof updateNextPageProperties's params must be object"
            });
        },
        getMetaInfo: function(t) {
            return h.getMetaInfo(t);
        },
        on: i.on,
        cloneDeep: c.cloneDeep,
        setCookie: r.setCookie,
        getCookie: r.getCookie,
        pageAppear: E,
        pageDisappear: E,
        updatePageUtparam: E,
        updateNextPageUtparam: E,
        updateSessionProperties: function(t) {
            "object" == typeof t && w.setMetaInfo("_session_args", t);
        }
    });
}, function(t, e, n) {
    "use strict";
    var a = n(27), o = n(2), r = n(10), i = n(99), s = n(26), u = n(3), c = n(111), l = n(112), p = function() {};
    p.prototype.run = function(t, e, n) {
        var p = new l();
        p.init({
            middleware: [],
            config: e.config,
            plugins: t.plugins
        });
        var f = p.run(), g = r(t.context) ? new t.context() : t.context;
        g.userdata = e.userdata, g.logger = s.logger;
        var d = {
            context: g,
            pubsub: o.getGoldlogVal("aplus_pubsub"),
            pubsubType: e && e.pubsubType
        }, h = new c();
        h.create(d), h.wrap(f, function() {
            d.context.status = u.COMPLETE, e && (e.middlewareMessageKey && i.doPubMsg([ e.middlewareMessageKey, d.context ]),
            e.messageFnQueue && a(e.messageFnQueue, function(e) {
                e(o.getGlobalValue(u.APLUS), t);
            })), r(n) && n(d.context);
        })();
    }, t.exports = p;
}, function(t, e, n) {
    "use strict";
    function a() {}
    var o = n(10), r = n(35), i = n(26);
    a.prototype.create = function(t) {
        for (var e in t) "undefined" == typeof this[e] && (this[e] = t[e]);
        return this;
    }, a.prototype.calledList = [], a.prototype.setCalledList = function(t) {
        r.indexof(this.calledList, t) === -1 && this.calledList.push(t);
    }, a.prototype.resetCalledList = function() {
        this.calledList = [];
    }, a.prototype.wrap = function(t, e) {
        var n = this, a = this.context || {}, s = a.compose || {}, u = s.maxTimeout || 1e4;
        return function(a) {
            var s, c = t.length, l = 0, p = 0, f = function(g, d) {
                if (l === c) return a = "done", n.resetCalledList(), o(e) && d !== a && e.call(n, a),
                void clearTimeout(s);
                if (r.indexof(n.calledList, l) === -1) {
                    if (n.setCalledList(l), !t[l] || !o(t[l][0])) return;
                    try {
                        a = t[l][0].call(n, a, function() {
                            l++, p = 1, f(l);
                        });
                    } catch (t) {
                        i.logger({
                            msg: t
                        });
                    }
                }
                var h = "number" == typeof a;
                if ("pause" === a || h) {
                    p = 0;
                    var _ = h ? a : u, v = t[l] ? t[l][1] : "";
                    s = setTimeout(function() {
                        0 === p && (i.logger({
                            msg: "jump the middleware about " + v + ", because waiting timeout maxTimeout = " + _
                        }), a = null, l++, f(l));
                    }, _);
                } else "done" === a ? (l = c, f(l, a)) : (l++, f(l));
            };
            return n.calledList && n.calledList.length > 0 && n.resetCalledList(), f(l);
        };
    }, t.exports = a;
}, function(t, e, n) {
    "use strict";
    var a = n(22), o = n(26);
    t.exports = function() {
        return {
            init: function(t) {
                this.opts = t, t && "object" == typeof t.middleware && t.middleware.length > 0 ? this.middleware = t.middleware : this.middleware = [],
                this.plugins_name = [];
            },
            pubsubInfo: function(t, e) {
                try {
                    var n = t.pubsub;
                    n && n.publish("plugins_change_" + t.pubsubType, e);
                } catch (t) {
                    o.logger({
                        msg: t
                    });
                }
            },
            run: function(t) {
                t || (t = 0);
                var e = this, n = this.middleware, o = this.opts || {}, r = o.plugins;
                if (r && "object" == typeof r && r.length > 0) {
                    var i = r[t];
                    if (this.plugins_name.push(i.name), n.push([ function(t, n) {
                        e.pubsubInfo(this, i);
                        var r = new i.path();
                        return r.init || (r.init = function(t) {
                            this.options = t;
                        }), r.init({
                            context: this.context,
                            config: a(i.config || {}, o.config)
                        }), r.run(t, function(t) {
                            setTimeout(function() {
                                n(i, t);
                            }, 1);
                        });
                    }, i.name ]), t++, r[t]) return this.run(t);
                }
                return n;
            }
        };
    };
}, function(t, e) {
    "use strict";
    e.sendImg = function(t, e) {
        var n = window || {}, a = new Image(), o = "_img_" + Math.random();
        n[o] = a;
        var r = function() {
            if (n[o]) try {
                delete n[o];
            } catch (t) {
                n[o] = void 0;
            }
        };
        return a.onload = function() {
            r();
        }, a.onerror = function() {
            r();
        }, setTimeout(function() {
            window[o] && (window[o].src = "", r());
        }, e || 5e3), a.src = t, a = null, t;
    }, e.postData = function(t, e) {
        return navigator.sendBeacon(t, e), t;
    };
}, function(t, e, n) {
    "use strict";
    function a() {
        var t, e = r.getGlobalValue("aplus");
        try {
            var n = e.getMetaInfo("aplus-disable-pvid") + "";
            "true" === n ? t = !0 : "false" === n && (t = !1);
        } catch (t) {}
        return t;
    }
    var o = n(99), r = n(2), i = n(85);
    e.isDisablePvid = a, e.makePVId = function() {
        var t = r.getGlobalValue("aplus"), e = t.pvid, n = location && location.href, s = document && document.title;
        t.pvid = i.getLogId(n, s);
        var u = [ "pvidChange", {
            pre_pvid: e,
            pvid: t.pvid
        } ];
        return o.doPubMsg(u), o.doCachePubs(u), a() ? "" : t.pvid;
    }, e.getPvId = function() {
        var t = r.getGlobalValue("aplus");
        return a() ? "" : t.pvid;
    };
}, function(t, e, n) {
    "use strict";
    var a = n(116), o = n(2);
    t.exports = function() {
        return {
            run: function() {
                var t = this.options.context.aplus_config, e = t.globalConfig.APLUS_QUEUE, n = o.getContext(), r = n[e] || [], i = a.getFormatQueue(r, "metaQueue");
                n[e] = i.queue, a.processGoldlogQueue(i.formatQueue, this.options.config);
            }
        };
    };
}, function(t, e, n) {
    function a() {
        var t = u.getGoldlogVal("_$") || {}, e = t.meta_info;
        return e;
    }
    function o() {
        var t = a() || {}, e = t.uaid;
        return e && !t._anony_id ? "BLOCK" : t._hold || t["aplus-waiting"];
    }
    function r(t) {
        var e = o(), n = a() || {}, r = !0, i = t.arguments || [], s = i[0], u = i[1], c = "START";
        if ("_hold" === s && u === c) return c;
        if ("_anony_id" === s && u) return c;
        if (t && /sendPV|record|setPageSPM|setMetaInfo|appendMetaInfo$/.test(t.action)) switch (e) {
          case "BLOCK":
            n[e] || (_.push(t), r = !1);
        }
        return r;
    }
    function i(t) {
        g(d, t), g(h, t), g(_, t);
    }
    function s(t, e) {
        return e && f.openAPIs.indexOf(t) > -1 && (t = "_" + t), t;
    }
    var u = n(2), c = n(35), l = n(10), p = n(26), f = n(3), g = function(t, e) {
        function n() {
            if (t && c.isArray(t) && t.length) {
                for (var n = m(t).queue, a = {}, o = []; a = n.shift(); ) v(a, e, function(t) {
                    o.push(t);
                });
                o.length > 0 && setTimeout(function() {
                    for (;a = o.shift(); ) v(a, e);
                }, 100);
            }
        }
        try {
            n();
        } catch (t) {
            p.logger({
                msg: t
            });
        }
    };
    e.processGoldlogQueue = g;
    var d = [], h = [], _ = [];
    e.subscribeAndProcessQueue = function(t, e) {
        var n = u.getGlobalValue(t);
        n.push({
            action: f.SUBSCRIBE,
            arguments: [ f.SET_META_INFO, function(t, n) {
                t === f._USER_ID && n ? g(d, e) : t === f._ANONY_ID && n ? g(h, e) : "_hold" === t && "START" === n && i(e);
            } ]
        });
    };
    var v = function(t, e, n) {
        var a = !!e.isOpenApi, o = t ? t.action : "", f = t ? t.arguments : "", g = r(t);
        if (g) {
            var d = u.getContext();
            try {
                if (o && f && c.isArray(f)) {
                    var h, _ = o.split("."), v = d, m = d;
                    if (3 === _.length) v = d[_[0]][_[1]] || {}, h = s(_[2], a), m = v[h] ? v[h] : ""; else for (;_.length; ) if (h = s(_.shift(), a),
                    m = v = v[h], !v) return void (l(n) && n(t));
                    l(m) && m.apply(v, f), "START" === g && i(e);
                }
            } catch (t) {
                p.logger({
                    msg: t
                });
            }
        }
    };
    e.processTask = v;
    var m = function(t, e) {
        for (var n = {
            subscribeMwChangeQueue: [],
            subscribeMetaQueue: [],
            subscribeQueue: [],
            metaQueue: [],
            othersQueue: []
        }, a = [], o = {}; o = t.shift(); ) try {
            var r = o.action, i = o.arguments[0];
            /subscribe/.test(r) ? "setMetaInfo" === i ? n.subscribeMetaQueue.push(o) : i === f.MW_CHANGE_PV || i === f.MW_CHANGE_HJLJ ? n.subscribeMwChangeQueue.push(o) : n.subscribeQueue.push(o) : /MetaInfo/.test(r) ? n.metaQueue.push(o) : n.othersQueue.push(o);
        } catch (t) {
            p.logger({
                msg: t
            }), n.othersQueue.push(o);
        }
        var s;
        return e && n[e] && (s = n[e], n[e] = []), a = n.subscribeMwChangeQueue.concat(n.metaQueue),
        a = a.concat(n.subscribeQueue), a = a.concat(n.subscribeMetaQueue, n.othersQueue),
        {
            queue: a,
            formatQueue: s
        };
    };
    e.getFormatQueue = m;
}, function(t, e, n) {
    "use strict";
    var a = n(23), o = n(36), r = n(80), i = n(25);
    t.exports = function() {
        return {
            run: function() {
                var t = this, e = this.options.context.aplus_config;
                if (i.test()) {
                    var n = a.getLsCna(e.globalConfig.ETAG_STORAGE_KEY, t.today);
                    n || setTimeout(function() {
                        var n = aplus._$.meta_info["aplus-rhost-v"];
                        if (n) {
                            t.options.context.etag.egUrl = n + "/eg.js";
                            var i = r.getUrl(t.options.context.etag || {});
                            o.loadScript(i, function(n) {
                                n && "error" !== n.type && a.setLsCna(e.globalConfig.ETAG_STORAGE_KEY, t.today, aplus.Etag);
                            });
                        }
                    }, 1e3);
                }
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    function a(t) {
        var e = t.Promise, n = t.document, a = t.navigator.userAgent, o = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(a) || /Windows\sNT\s[\d\.]+/i.test(a), r = /iPhone|iPad|iPod/i.test(a), i = /Android/i.test(a), s = Math.floor(65536 * Math.random()), u = 1, c = [], l = 3, p = "iframe_", f = "param_", g = 6e5, d = 6e4, h = {
            trace: function(t, e, n, a, o) {
                return h.call(t, e, n, a, o);
            },
            call: function(t, n, a, o, r) {
                var i, s;
                "number" == typeof arguments[arguments.length - 1] && (r = arguments[arguments.length - 1]),
                "function" != typeof a && (a = null), !e || a || o || (s = new e(function(t, e) {
                    a = t, o = e;
                })), i = _.getSid();
                var u = {
                    success: a,
                    failure: o
                };
                return r > 0 && (u.timeout = setTimeout(function() {
                    h.onFailure(i, {
                        ret: "HY_TIMEOUT"
                    });
                }, r)), _.registerCall(i, u), _.registerGC(i, r), _.evokeNative(t, n, i), s;
            },
            fireEvent: function(t, e) {
                var a = n.createElement("HTMLEvents");
                a.initEvent(t, !1, !0), a.param = _.parseData(e), n.dispatchEvent(a);
            },
            getParam: function(t) {
                return _.getParam(t);
            },
            setData: function() {},
            find: function(t, e) {
                e || _.unregisterCall(t, !1);
            },
            onSuccess: function(t, e, n) {
                _.onComplete(t, e, "success", n);
            },
            onFailure: function(t, e) {
                _.onComplete(t, e, "failure");
            }
        }, _ = {
            params: {},
            calls: {},
            getSid: function() {
                return (s + u++) % 65536 + "";
            },
            buildParam: function(t) {
                return t && "object" == typeof t ? JSON.stringify(t) : t || "";
            },
            getParam: function(t) {
                return this.params[f + t] || "";
            },
            setParam: function(t, e) {
                this.params[f + t] = e;
            },
            parseData: function(t) {
                var e;
                if (t && "string" == typeof t) try {
                    e = JSON.parse(t);
                } catch (n) {
                    e = {
                        ret: "HY_RESULT_PARSE_ERROR",
                        originValue: t
                    };
                } else e = t || {};
                return e;
            },
            registerCall: function(t, e) {
                this.calls[t] = e;
            },
            unregisterCall: function(t, e) {
                var n = this.calls[t] || {}, a = n.timeout;
                return a && clearTimeout(a), e || delete this.calls[t], n;
            },
            useIframe: function(t, e) {
                var a = p + t, o = c.pop();
                o || (o = n.createElement("iframe"), o.setAttribute("frameborder", "0"), o.style.cssText = "width:0;height:0;border:0;display:none;"),
                o.setAttribute("id", a), o.setAttribute("src", e), o.parentNode || setTimeout(function() {
                    n.body.appendChild(o);
                }, 5);
            },
            retrieveIframe: function(t) {
                var e = p + t, a = n.querySelector("#" + e);
                if (a) if (c.length >= l) try {
                    n.body.removeChild(a);
                } catch (t) {} else c.indexOf(a) < 0 && c.push(a);
            },
            evokeNative: function(t, e, n) {
                var a = {
                    className: "Umeng4Aplus",
                    methodName: t,
                    sid: n,
                    callback: "",
                    params: e
                }, s = JSON.stringify(a);
                console.log("yz-----method: ", t, s), o ? this.onComplete(n, {
                    ret: "HY_NO_HANDLER_ON_WP"
                }, "failure") : r ? window.webkit.messageHandlers.Umeng4Aplus.postMessage(s) : i ? window.Umeng4Aplus.CALL(s) : this.onComplete(n, {
                    ret: "HY_NOT_SUPPORT_DEVICE"
                }, "failure");
            },
            registerGC: function(t, e) {
                var n = this, a = Math.max(e || 0, g), o = Math.max(e || 0, d);
                setTimeout(function() {
                    n.unregisterCall(t);
                }, a), r && setTimeout(function() {
                    n.params[f + t] && delete n.params[f + t];
                }, o);
            },
            onComplete: function(t, e, n, a) {
                var o = this.unregisterCall(t, a), i = o.success, s = o.failure;
                e = this.parseData(e);
                var u = e.ret;
                "string" == typeof u && (e = e.value || e, e.ret || (e.ret = [ u ])), "success" === n ? i && i(e) : "failure" === n && s && s(e),
                r && (this.retrieveIframe(t), this.params[f + t] && delete this.params[f + t]);
            }
        };
        return h;
    }
    var o = n(26);
    t.exports = function() {
        return {
            subscribeLogs: function(t, e) {
                aplus.aplus_pubsub.subscribe(t, function(t) {
                    "complete" === t.status && e(t);
                });
            },
            callUT: function(t, e) {
                e._bridgeName = this.options.bridgeName || "AtmBridge", e._bridgeVersion = this.options.bridgeVersion || "1.0.0",
                console.log("yz----params", t, JSON.stringify(e)), aplus && aplus.aplusDebug && console && o.logger({
                    msg: "当前透传消息体: " + JSON.stringify(e)
                });
                try {
                    window.AtmBridge.trace(t, e, function(t) {
                        console.log("SUCCESS:", t);
                    }, function(t) {
                        console.log("FAILURE:", t);
                    });
                } catch (t) {
                    console.log(t);
                }
            },
            callMergeToNativeGP: function(t, e) {
                aplus && aplus.aplusDebug && console && o.logger({
                    msg: "当前透传全局属性: " + JSON.stringify(e)
                });
                try {
                    window.AtmBridge.trace(t, e, function(t) {
                        console.log("SUCCESS: ", t);
                    }, function(t) {
                        console.log("FAILURE:", t);
                    });
                } catch (t) {
                    console.log(t);
                }
            },
            watchLOG: function() {
                var t = this;
                t.subscribeLogs("mw_change_pv", function(e) {
                    var n = e.what_to_send || {}, a = n.pvdataToUmNative || {};
                    t.callUT("sendPV", a);
                }), t.subscribeLogs("mw_change_hjlj", function(e) {
                    var n = e.what_to_send || {}, a = n.hjljdataToUmNative || {};
                    t.callUT("sendEvent", a);
                });
            },
            watchMetaInfo: function() {
                var t = this;
                aplus.aplus_pubsub.subscribe("setMetaInfo", function(e, n) {
                    "globalProperty" === e && "object" == typeof n && t.callMergeToNativeGP("registerGlobalProperties", /Android/.test(navigator.userAgent) ? JSON.stringify(n) : n);
                });
            },
            run: function() {
                var t = window.navigator.userAgent, e = /Umeng4Aplus/i.test(t);
                if (e && !window.AtmBridge) {
                    var n = a(window);
                    window.AtmBridge = n;
                }
                window.AtmBridge && (this.watchLOG(), this.watchMetaInfo());
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(11), o = n(25), r = n(61), i = n(27), s = n(3), u = n(120);
    t.exports = a.extend({
        init: function(t) {
            this.options = t, this.PAGE_CONFIG_KEY = "APLUS_PAGE_CONFIG", this.cdnpath, this.isStartTracker = !1,
            this.latestComponentId, this.latestPageId, this.aplus_web_pageconfig;
        },
        getCdnPath: function(t) {
            if (!this.cdnpath) {
                var e = aplus && aplus.aplusDebug ? "/daily" : "";
                this.cdnpath = t.cdnPath + e + "/" + t.componentId + ".json";
            }
            return this.cdnpath;
        },
        fetchFromLS: function(t) {
            try {
                return JSON.parse(decodeURIComponent(o.get(this.PAGE_CONFIG_KEY + "-" + this.getCdnPath(t))) || {});
            } catch (t) {
                return null;
            }
        },
        setConfigIntoLS: function(t) {
            o.set(this.PAGE_CONFIG_KEY + "-" + this.getCdnPath(t), encodeURIComponent(JSON.stringify(t)));
        },
        fetchFromCdn: function(t, e) {
            var n = aplus && aplus.aplusDebug ? "/daily" : "", a = t.cdnPath + n + "/" + t.componentId + ".json";
            u.request(a, function(t) {
                e(t);
            }, function(t) {
                aplus && aplus.aplusDebug && window.console.log(t), e(null);
            }, {
                timeout: 5e3
            });
        },
        getCurrentPageConfig: function(t) {
            var e = this, n = {};
            return e.aplus_web_pageconfig && e.aplus_web_pageconfig.pages && i(e.aplus_web_pageconfig.pages, function(a) {
                if (a.spmB === t.pageId + "") {
                    n.page = a;
                    var o = [];
                    return i(e.aplus_web_pageconfig.points, function(t) {
                        t.spmB === a.spmB && o.push(t);
                    }), n.points = o, "break";
                }
            }), n;
        },
        getPageConfig: function(t, e) {
            var n = this, a = this.fetchFromLS(t);
            a && (n.latestComponentId = t.componentId, n.aplus_web_pageconfig = a, e("LS")),
            n.fetchFromCdn(t, function(a) {
                a && (n.setConfigIntoLS(a), n.latestComponentId = t.componentId, n.isStartTracker || (n.aplus_web_pageconfig = a,
                e("CNA")));
            });
        },
        trackerPageViewEvent: function(t) {
            aplus.sendPV({
                isAuto: !1,
                trackerEventCode: t.eventCode
            }, {
                _pos_id: t.spmB
            });
        },
        trackerCommonEvent: function(t) {
            var e = [];
            i(t, function(t) {
                var n;
                switch (t.selectorType) {
                  case "ID":
                    n = "#" + t.selector;
                    break;

                  case "CLASS":
                    n = "." + t.selector;
                    break;

                  case "DATA_TRACKER":
                    n = '[data-tracker="' + t.selector + '"]';
                }
                n && e.push({
                    cssSelector: n,
                    logkey: t.logkey || "$$_APLUS",
                    spmB: t.spmB,
                    _pos_id: t.spmC,
                    props: []
                });
            }), e.length > 0 && aplus.setMetaInfo("aplus-auto-clk", e);
        },
        startTracker: function(t, e) {
            aplus.aplusDebug && console.log("options === ", e), t.componentId = this.latestComponentId,
            r.pushIntoGoldlogQueue(s.PUBLISH, [ s.CURRENT_PAGE_CONFIG, t ]), r.pushIntoGoldlogQueue(s.CACHE_PUBS, [ s.CURRENT_PAGE_CONFIG, t ]);
            var n = t.page || {};
            n.spmB && this.latestPageId !== n.spmB && (this.latestPageId = n.spmB, this.isStartTracker = !0,
            this.trackerPageViewEvent(n), this.trackerCommonEvent(t.points || []));
        },
        run: function() {
            var t = this;
            r.pushIntoGoldlogQueue(s.SUBSCRIBE, [ s.PAGE_ENTER, function(e) {
                t.latestComponentId === e.componentId && t.aplus_web_pageconfig ? t.startTracker(t.getCurrentPageConfig(e), {
                    source: "LOCAL"
                }) : t.getPageConfig(e, function(n) {
                    t.startTracker(t.getCurrentPageConfig(e), {
                        source: n
                    });
                });
            } ]);
        }
    });
}, function(t, e, n) {
    "use strict";
    var a = n(3), o = {
        base: 1e4,
        timeout: 1e4
    }, r = function(t, e, n, r) {
        /^\/\//.test(t) && (t = a.HTTPS + t);
        var i = !0, s = r && r.timeout ? r.timeout : o.timeout;
        setTimeout(function() {
            i && (i = !1, n({
                timeout: s
            }));
        }, s), window.fetch(t).then(function(t) {
            return /application\/json/.test(t.headers.get("content-type")) ? t.json() : t.text();
        }).then(function(t) {
            i && (e(t), i = !1);
        }).catch(function(t) {
            i && n(t);
        });
    }, i = function(t, e, n, a) {
        var r, i = "GET", s = function() {
            r.responseText ? e(r.responseText) : n();
        }, u = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
        u ? (r = new XMLHttpRequest(), r.open(i, t, !0)) : (r = new window.XDomainRequest(),
        r.open(i, t));
        var c = a && a.timeout ? a.timeout : o.timeout;
        r.timeout = c, r.onload = s, r.onerror = n, r.ontimeout = n, r.send();
    }, s = function(t, e, n, a) {
        window.fetch ? r(t, e, n, a) : i(t, e, n, a);
    };
    e.request = s;
}, function(t, e, n) {
    "use strict";
    var a = n(11), o = n(2), r = n(116), i = a.extend({
        push: function(t) {
            this.length++, r.processTask(t, this.opts);
        }
    });
    t.exports = function() {
        return {
            processAplusQueue: function(t) {
                var e = this.options.config || {}, n = o.getGlobalValue(t);
                r.processGoldlogQueue(n, e), o.setGlobalValue(t, i.create({
                    opts: e,
                    startLength: n.length,
                    length: 0
                }));
            },
            run: function() {
                var t = this.options.context.aplus_config, e = t.globalConfig.APLUS_QUEUE;
                this.processAplusQueue(e), "aplus_queue" === e && this.processAplusQueue("goldlog_queue"),
                r.subscribeAndProcessQueue(e, this.options.config);
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(27), o = n(36), r = n(35);
    t.exports = function() {
        return {
            init: function(t) {
                this.options = t;
            },
            addStyle: function(t, e) {
                var n = t + "_style", a = document.getElementById(n);
                a || (a = document.createElement("link"), a.id = n, a.href = e, a.rel = "stylesheet",
                a.type = "text/css", document.getElementsByTagName("head").item(0).appendChild(a));
            },
            run: function() {
                var t = this, e = parent !== self, n = this.options.config || {};
                !e && n.urlRules && a(n.urlRules, function(e) {
                    var n, i = new RegExp(e.rule);
                    try {
                        n = e.id ? window.sessionStorage.getItem(e.id) : "";
                    } catch (t) {}
                    if (i.test(location.href) || n) {
                        try {
                            window.sessionStorage.setItem(e.id, !0);
                        } catch (t) {}
                        r.isArray(e.cdnPath) ? a(e.cdnPath, function(n) {
                            /\.css$/.test(n) ? t.addStyle(e.id, n) : /\.js/.test(n) && o.addScript(n);
                        }) : o.addScript(e.cdnPath);
                    }
                });
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(36), o = n(16), r = n(124);
    t.exports = function() {
        return {
            init: function(t) {
                this.options = t;
            },
            run: function() {
                var t = parent !== self, e = this.options.config || {}, n = e.sessionKey, i = o.getParamFromUrl(n, location.href);
                if (!t && ("pre" === i || "true" === i)) {
                    var s = e.JSPATH, u = e.CSSPATH;
                    if ("pre" === i) {
                        var c = "dev.g.alicdn.com";
                        s = s.replace(/g\.alicdn\.com/, c), u = u.replace(/g\.alicdn\.com/, c);
                    }
                    var l, p = n + "JS";
                    try {
                        l = window.sessionStorage.getItem(p);
                    } catch (t) {}
                    if (l || s) {
                        try {
                            window.sessionStorage.setItem(p, !0);
                        } catch (t) {}
                        if (a.addScript(s), u) {
                            var f = n + "CSS";
                            r.addStyle(f, u);
                        }
                    }
                }
            }
        };
    };
}, function(t, e) {
    e.addStyle = function(t, e) {
        var n = t + "_style", a = document.getElementById(n);
        a || (a = document.createElement("link"), a.id = n, a.href = e, a.rel = "stylesheet",
        a.type = "text/css", document.getElementsByTagName("head").item(0).appendChild(a));
    };
}, function(t, e, n) {
    "use strict";
    var a = n(26);
    t.exports = function() {
        return {
            run: function() {
                return aplus._aplus_cplugin_webvt ? void a.logger({
                    msg: "当前集成了可视化埋点分析插件，需要您做可视化埋点配置，才会有自动pv功能"
                }) : void n(126)();
            }
        };
    };
}, function(t, e, n) {
    "use strict";
    var a = n(2);
    t.exports = function() {
        var t = a.getGlobalValue("aplus"), e = a.getGlobalValue("aplus_queue");
        t._aplus_apv || (t._aplus_apv = {
            status: "complete"
        }, e.push({
            action: "aplus.sendPV",
            arguments: [ {
                is_auto: !0
            } ]
        }));
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = window, a = "g_tb_aplus_loaded";
        if (!e[a]) {
            e[a] = 1, n(47).isDebugAplus();
            var o = n(26), r = n(99), i = n(21), s = n(27), u = n(128), c = "running", l = [ "aplusReady", c ];
            r.doPubMsg(l), u.run({
                plugins: t.plugins,
                context: function() {
                    var e = {
                        PAGE_LOAD_TIME: new Date()
                    }, n = [];
                    return s(t.plugins, function(t) {
                        e[t.name] = t.config || {}, "aplus_log_inject" === t.name && t.config && t.config.plugins && (n = t.config.plugins.pv,
                        s(n, function(t) {
                            e[t.name] = t.config;
                        }));
                    }), i.assign(e, {
                        aplus_config: t
                    });
                }
            }, function() {
                o.logger({
                    msg: "APLUS初始化完成"
                });
            });
        }
    };
}, function(t, e, n) {
    "use strict";
    var a = n(110), o = n(10), r = n(99);
    e.run = function(t, e) {
        var n = new a();
        n.run({
            plugins: t.plugins,
            context: t.context
        }, {
            config: {},
            userdata: {},
            pubsubType: "aplusinit",
            messageFnQueue: [],
            middlewareMessageKey: "mw_change_aplusinit"
        }, function(t) {
            var n = [ "aplusInitContext", t ];
            r.doPubMsg(n), r.doCachePubs(n), o(e) && e();
        });
    };
} ]);