var e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/helpers/typeof"));

!function(n, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : (0, e.default)(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (void 0).Ald = t();
}(0, function() {
    function n() {
        "function" == typeof re && "" === H && re().then(function(e) {
            28 === e.length && (H = e, wx.setStorageSync("aldstat_op", e));
        });
    }
    function t(e) {
        this.app = e;
    }
    function o(e) {
        k = v(), j = e, ee = e.scene, this.aldstat = new t(this);
    }
    function a(e) {
        var t;
        n(), t = e.scene != ee, ee = e.scene, E = 0, j = e, N = e.query.ald_share_src, Q = e.query.aldsrc || "", 
        e.query.ald_share_src, Y || Z || ae || (T = !1), Y = !1, (0 !== L && Date.now() - L > 3e4 || t) && (Z || (b = v(), 
        R = Date.now(), oe = 0)), 0 !== L && Date.now() - L < 3e4 && ($ = !0), e.query.ald_share_src && "1044" == e.scene && e.shareTicket ? wx.getShareInfo({
            shareTicket: e.shareTicket,
            success: function(e) {
                K = e, y("event", "ald_share_click", JSON.stringify(e));
            }
        }) : e.query.ald_share_src && y("event", "ald_share_click", 1), "" === G && wx.getSetting({
            withCredentials: !0,
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(e) {
                        var n = w();
                        G = e, n.ufo = _(e), U = g(e.userInfo.avatarUrl.split("/")), d(n);
                    }
                });
            }
        }), m("app", "show");
    }
    function r() {
        n(), L = Date.now(), "" === G && wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(e) {
                        G = e, U = g(e.userInfo.avatarUrl.split("/"));
                        var n = w();
                        n.ufo = _(e), d(n);
                    }
                });
            }
        }), m("app", "hide");
    }
    function s(e) {
        J++, y("event", "ald_error_message", e);
    }
    function i(e) {
        X = e;
    }
    function c() {
        te = Date.now(), z = P ? this.$mp.page.route : this.route, function(e, n) {
            var t = w();
            t.ev = e, t.life = n, t.pp = z, t.pc = F, t.dr = Date.now() - R, (Z || ae) && (t.so = 1), 
            ae = !1, Z = !1, X && "{}" != JSON.stringify(X) && (t.ag = X), Q && (t.qr = Q, t.sr = Q), 
            N && (t.usr = N), $ && (t.ps = 1), W ? t.pdr = oe : (z, W = !0, t.ifp = W, t.fp = z, 
            t.pdr = 0), d(t);
        }("page", "show"), $ = !1;
    }
    function u() {
        F = z, oe = Date.now() - te;
    }
    function h() {
        F = z, oe = Date.now() - te;
    }
    function l() {
        y("event", "ald_pulldownrefresh", 1);
    }
    function f() {
        y("event", "ald_reachbottom", 1);
    }
    function p(e) {
        Z = !0;
        var n = function(e) {
            if (-1 == e.indexOf("?")) return "";
            var n = {};
            return e.split("?")[1].split("&").forEach(function(e) {
                var t = e.split("=")[1];
                n[e.split("=")[0]] = t;
            }), n;
        }(e.path), t = {};
        for (var o in j.query) "ald_share_src" !== o && "ald_share_op" !== o || (t[o] = j.query[o]);
        var a = "";
        if (a = -1 == e.path.indexOf("?") ? e.path + "?" : e.path.substr(0, e.path.indexOf("?")) + "?", 
        "" !== n) for (var o in n) t[o] = n[o];
        for (var r in t.ald_share_src ? -1 == t.ald_share_src.indexOf(B) && t.ald_share_src.length < 200 && (t.ald_share_src = t.ald_share_src + "," + B) : t.ald_share_src = B, 
        q.useOpen && (t.ald_share_op ? -1 == t.ald_share_op.indexOf(H) && t.ald_share_op.length < 200 && (t.ald_share_op = t.ald_share_op + "," + H) : t.ald_share_op = H), 
        t) -1 == r.indexOf("ald") && (a += r + "=" + t[r] + "&");
        return e.path = a + (q.useOpen ? "ald_share_op=" + t.ald_share_op + "&" : "") + "ald_share_src=" + t.ald_share_src, 
        y("event", "ald_share_status", e), e;
    }
    function d(e) {
        function n() {
            return new Promise(function(n, t) {
                var o = {
                    AldStat: "MiniApp-Stat",
                    se: C || "",
                    op: H || "",
                    img: U
                };
                "" === M || (o.ai = M);
            });
        }
        E++, e.at = b, e.uu = B, e.v = A, e.ak = q.app_key.replace(/(\t)|(\s)/g, ""), e.wsr = j, 
        e.ifo = T, e.rq_c = E, e.ls = k, e.te = I, e.et = Date.now(), e.st = Date.now(), 
        q.useOpen ? "" === H ? ne.push(n) : (wx.Queue.push(n), ne.concat()) : wx.Queue.push(n);
    }
    function w() {
        var e = {};
        for (var n in V) e[n] = V[n];
        return e;
    }
    function g(e) {
        for (var n = "", t = 0; t < e.length; t++) e[t].length > n.length && (n = e[t]);
        return n;
    }
    function v() {
        return "" + Date.now() + Math.floor(1e7 * Math.random());
    }
    function _(e) {
        var n = {};
        for (var t in e) "rawData" != t && "errMsg" != t && (n[t] = e[t]);
        return n;
    }
    function m(e, n) {
        var t = w();
        t.ev = e, t.life = n, t.ec = J, t.dr = Date.now() - R, "show" == n && (t.uo = q.useOpen), 
        Q && (t.qr = Q, t.sr = Q), N && (t.usr = N), d(t);
    }
    function y(e, n, t) {
        var o = w();
        o.ev = e, o.tp = n, o.dr = Date.now() - R, t && (o.ct = t), d(o);
    }
    function S(e, n, t) {
        if (e[n]) {
            var o = e[n];
            e[n] = function(e) {
                t.call(this, e, n), o.call(this, e);
            };
        } else e[n] = function(e) {
            t.call(this, e, n);
        };
    }
    function x(e) {
        var n = {};
        for (var t in e) "onLaunch" !== t && "onShow" !== t && "onHide" !== t && "onError" !== t && (n[t] = e[t]);
        return n.onLaunch = function(n) {
            o.call(this, n), "function" == typeof e.onLaunch && e.onLaunch.call(this, n);
        }, n.onShow = function(n) {
            a.call(this, n), e.onShow && "function" == typeof e.onShow && e.onShow.call(this, n);
        }, n.onHide = function() {
            r.call(this), e.onHide && "function" == typeof e.onHide && e.onHide.call(this);
        }, n.onError = function(n) {
            s.call(this, n), e.onError && "function" == typeof e.onError && e.onError.call(this, n);
        }, n;
    }
    function D(e) {
        var n = {};
        for (var t in e) "onLoad" !== t && "onShow" !== t && "onHide" !== t && "onUnload" !== t && "onPullDownRefresh" !== t && "onReachBottom" !== t && "onShareAppMessage" !== t && (n[t] = e[t]);
        return n.onLoad = function(n) {
            i.call(this, n), "function" == typeof e.onLoad && e.onLoad.call(this, n);
        }, n.onShow = function(n) {
            c.call(this), "function" == typeof e.onShow && e.onShow.call(this, n);
        }, n.onHide = function(n) {
            u.call(this), "function" == typeof e.onHide && e.onHide.call(this, n);
        }, n.onUnload = function(n) {
            h.call(this), "function" == typeof e.onUnload && e.onUnload.call(this, n);
        }, n.onReachBottom = function(n) {
            f(), e.onReachBottom && "function" == typeof e.onReachBottom && e.onReachBottom.call(this, n);
        }, n.onPullDownRefresh = function(n) {
            l(), e.onPullDownRefresh && "function" == typeof e.onPullDownRefresh && e.onPullDownRefresh.call(this, n);
        }, e.onShareAppMessage && "function" == typeof e.onShareAppMessage && (n.onShareAppMessage = function(n) {
            var t = e.onShareAppMessage.call(this, n);
            return void 0 === t ? (t = {}).path = this.route : void 0 === t.path && (t.path = this.route), 
            p.call(this, t);
        }), n;
    }
    var q = require("./ald-stat-conf");
    void 0 === wx.Queue && (wx.Queue = new function() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var e = this;
        this.push = function(n) {
            this.tasks.push(new Promise(function(t, o) {
                var a = function() {
                    e.activeCount++, n().then(function(e) {
                        t(e);
                    }).then(function() {
                        e.next();
                    });
                };
                e.activeCount < e.concurrency ? a() : e.queue.push(a);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            e.activeCount--, e.queue.length > 0 && e.queue.shift()();
        };
    }(), wx.Queue.all()), "" === q.app_key && console.error("请在ald-stat-conf.js文件中填写小程序统计/广告监测平台创建小程序后生成的app_key，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南！"), 
    q.useOpen && console.warn("提示：开启了useOpen配置后，如果不上传用户OpendID则不会上报数据，上传方式：http://doc.aldwx.com 小程序统计/广告监测平台-快速接入指南-上传OpenID！");
    var A = "7.3.6", O = "log", I = "wx", M = void 0 === wx.getAccountInfoSync ? "" : wx.getAccountInfoSync().miniProgram.appId.split("").map(function(e) {
        return e.charCodeAt(0) + 9;
    }).join("-"), P = !1, b = v(), k = "", R = Date.now(), L = 0, C = "", H = function() {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_op");
        } catch (e) {}
        return e;
    }(), U = "", E = 0, j = "", T = "", B = function() {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_uuid");
        } catch (n) {
            e = "uuid_getstoragesync";
        }
        if (e) T = !1; else {
            e = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                }
                return e() + e() + e() + e() + e() + e() + e() + e();
            }();
            try {
                wx.setStorageSync("aldstat_uuid", e), T = !0;
            } catch (e) {
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return e;
    }(), N = "", Q = "", J = 0, K = "", G = "", V = {}, W = !1, $ = !1, z = "", F = "", X = "", Y = !0, Z = !1, ee = "", ne = new function() {
        this.request = [], this.updata = !1, this.push = function(e) {
            this.request.length >= 8 && !this.updata && (this.updata = !0, n()), this.request.length >= 10 ? (this.request.shift(), 
            this.request.push(e)) : this.request.push(e);
        }, this.concat = function() {
            this.request.map(function(e) {
                wx.Queue.push(e);
            }), this.request = [];
        };
    }(), te = 0, oe = 0, ae = !1;
    [ {
        name: "scanCode"
    }, {
        name: "chooseAddress"
    }, {
        name: "chooseImage"
    }, {
        name: "previewImage"
    }, {
        name: "chooseInvoiceTitle"
    }, {
        name: "chooseInvoice"
    } ].forEach(function(e) {
        e.fn = wx[e.name];
        var n = e.name;
        Object.defineProperty(wx, n, {
            get: function() {
                return ae = !0, e.fn;
            }
        });
    });
    var re = "";
    wx.aldstat = new t("");
    try {
        var se = wx.getSystemInfoSync();
        V.br = se.brand, V.pm = se.model, V.pr = se.pixelRatio, V.ww = se.windowWidth, V.wh = se.windowHeight, 
        V.lang = se.language, V.wv = se.version, V.wvv = se.platform, V.wsdk = se.SDKVersion, 
        V.sv = se.system;
    } catch (e) {}
    return wx.getNetworkType({
        success: function(e) {
            V.nt = e.networkType;
        }
    }), wx.getSetting({
        success: function(e) {
            (e.authSetting["scope.userLocation"] || q.getLocation) && wx.getLocation({
                type: "wgs84",
                success: function(e) {
                    V.lat = e.latitude, V.lng = e.longitude, V.spd = e.speed;
                }
            });
        }
    }), t.prototype.sendEvent = function(n, t) {
        if ("" !== n && "string" == typeof n && n.length <= 255) if ("string" == typeof t && t.length <= 255) y("event", n, t); else if ("object" == (0, 
        e.default)(t)) {
            if (JSON.stringify(t).length >= 255) return void console.error("自定义事件参数不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");
            if (function(n) {
                for (var t in n) if ("object" == (0, e.default)(n[t]) && null !== n[t]) return !0;
                return !1;
            }(t)) return void console.error("事件参数内部只支持Number、String等类型，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");
            for (var o in t) "number" == typeof t[o] && (t[o] = t[o] + "s##");
            y("event", n, JSON.stringify(t));
        } else void 0 === t ? y("event", n, !1) : console.error("事件参数必须为String、Object类型，且参数长度不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！"); else console.error("事件名称必须为String类型且不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小程序统计平台-快速接入指南-自定义事件！");
    }, t.prototype.sendSession = function(e) {
        if ("" !== e && e) {
            C = e;
            var n = w();
            n.tp = "session", n.ct = "session", n.ev = "event", "" === G ? wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function(e) {
                            n.ufo = _(e), U = g(e.userInfo.avatarUrl.split("/")), "" !== K && (n.gid = K), d(n);
                        }
                    }) : "" !== K && (n.gid = K, d(n));
                }
            }) : (n.ufo = G, "" !== K && (n.gid = K), d(n));
        } else console.error("请传入从后台获取的session_key");
    }, t.prototype.sendOpenid = function(e) {
        if ("" !== e && e && 28 === e.length) {
            H = e, wx.setStorageSync("aldstat_op", e);
            var n = w();
            n.tp = "openid", n.ev = "event", n.ct = "openid", d(n);
        } else console.error("OpenID不符合规则，请参考接入文档 http://doc.aldwx.com 小程序统计/广告监测平台-快速接入指南！");
    }, t.prototype.setOpenid = function(e) {
        "function" == typeof e && (re = e, n());
    }, q.plugin ? {
        App: function(e) {
            return App(x(e));
        },
        Page: function(e) {
            return Page(D(e));
        },
        MpvueApp: function(e) {
            return P = !0, x(e);
        },
        MpvuePage: function(e) {
            return D(e);
        }
    } : void function() {
        var e = App, n = Page, t = Component;
        App = function(n) {
            S(n, "onLaunch", o), S(n, "onShow", a), S(n, "onHide", r), S(n, "onError", s), e(n);
        }, Page = function(e) {
            var t = e.onShareAppMessage;
            S(e, "onLoad", i), S(e, "onUnload", h), S(e, "onShow", c), S(e, "onHide", u), S(e, "onReachBottom", f), 
            S(e, "onPullDownRefresh", l), null != t && (e.onShareAppMessage = function(e) {
                if (void 0 !== t) {
                    var n = t.call(this, e);
                    return void 0 === n ? (n = {}).path = z : void 0 === n.path && (n.path = z), p(n);
                }
            }), n(e);
        }, Component = function(e) {
            try {
                var n = e.methods.onShareAppMessage;
                S(e.methods, "onLoad", i), S(e.methods, "onUnload", h), S(e.methods, "onShow", c), 
                S(e.methods, "onHide", u), S(e.methods, "onReachBottom", f), S(e.methods, "onPullDownRefresh", l), 
                null != n && (e.methods.onShareAppMessage = function(e) {
                    if (void 0 !== n) {
                        var t = n.call(this, e);
                        return void 0 === t ? (t = {}).path = z : void 0 === t.path && (t.path = z), p(t);
                    }
                }), t(e);
            } catch (n) {
                t(e);
            }
        };
    }();
});