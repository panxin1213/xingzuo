var t = require("mobx-miniprogram-bindings"), n = require("./utils/store.js"), e = require("./utils/util.js"), o = require("./config.js"), i = require("./api/index"), a = (require("./utils/ald-stat.js"), 
!0);

App({
    onLaunch: function() {
        (0, e.initee)(), this.storeBindings = (0, t.createStoreBindings)(this, {
            store: n.store,
            actions: [ "updateToken", "updateUnion", "setGroupEncryptedData", "updateUnionId", "updateSignCount", "updateSign7dFlag" ]
        });
        try {
            var o = wx.getStorageSync("token"), i = wx.getStorageSync("unionid"), s = wx.getStorageSync("authed"), c = wx.getStorageSync("uuid"), u = wx.getStorageSync("sessionkey");
            o && s && c && u && Date.now() - u < 2592e5 ? (this.token = o, this.unionid = i, 
            this.uuid = c, wx.aldstat.sendOpenid(c)) : (a = !1, this.userLogin(1).then(function(t) {
                wx.aldstat.sendOpenid(t);
            }));
        } catch (t) {
            a = !1, this.userLogin(2).then(function(t) {
                wx.aldstat.sendOpenid(t);
            });
        }
        wx.removeStorageSync("tag2"), this.checkRedDot(), this.updateTips();
    },
    onShow: function(t) {
        wx.setStorageSync("scene", t.scene, wx.getStorageSync("unionid"), this.unionid), 
        this.globalData.shareTicket = t.shareTicket || -1, "1007" != t.scene && "1008" != t.scene || "pages/index/index" != t.path || (0, 
        i.reportAnalytics)("index_source_chat_stats", {
            chat_scene: "1007" == t.scene ? "chat" : "groupchat"
        });
    },
    onPageNotFound: function(t) {
        t.path && -1 !== t.path.indexOf("news") ? wx.switchTab({
            url: "/pages/index/index"
        }) : t.path && -1 !== t.path.indexOf("friendsradar") ? wx.switchTab({
            url: "/pages/friendsradar/friendsradar"
        }) : wx.switchTab({
            url: "/pages/index/index"
        });
    },
    globalData: {
        constellation_map: e.constellation_map,
        guide_flag: wx.getStorageSync("pub"),
        userEvent: null,
        subscribe: "",
        shareTicket: "",
        gid_fn: null,
        userInfo: {},
        lucky_pop: !1,
        gc: !1,
        sc: !1,
        join_code: "",
        hasSelectTarot: 0,
        tarotCardNum: "",
        cardPosition: ""
    },
    userLogin: function(t) {
        console.log("哪里进来的", t);
        var n = this;
        return new Promise(function(t, e) {
            wx.login({
                success: function(i) {
                    console.log(i.code), i.code && "error" !== i.code ? wx.request({
                        url: o.host_api + "/authorize",
                        data: {
                            code: i.code
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            e.data = {"token":"724109116fcb9c928f166c6f907376fe","expire":1635945577,"uuid":"oUGPY5RNCHscIvlG9_-bCyHtNFY8","unionid":"ozerVv5Qvq5IQNulAN0mDRi-wkoI"};
                            debugger;
                            e.data.token && (n.token = e.data.token, n.updateToken({
                                token: e.data.token,
                                unionid: e.data.unionid ? 1 : "",
                                uuid: e.data.uuid,
                                sessionkey: Date.now()
                            }), n.storeBindings.updateStoreBindings(), wx.ee.emit("token_updated", e.data.token), 
                            n.globalData.gid_fn && n.getGid(n.globalData.gid_fn), a = !0, t(e.data.uuid));
                        },
                        fail: function(t) {
                            wx.showToast({
                                title: "网络异常",
                                icon: "none"
                            }), e(t);
                        }
                    }) : (wx.showToast({
                        title: "登陆失败",
                        icon: "none"
                    }), e(err));
                }
            });
        });
    },
    updateTips: function() {
        if (wx.getUpdateManager) {
            var t = wx.getUpdateManager();
            t.onCheckForUpdate(function(n) {
                n.hasUpdate && (t.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(n) {
                            n.confirm && t.applyUpdate();
                        }
                    });
                }), t.onUpdateFailed(function() {
                    wx.showModal({
                        title: "新版本更新失败！",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        }
    },
    logout: function(t) {
        a && (this.token = "", this.updateToken({
            token: ""
        }), wx.ee.emit("token_updated", ""), this.userLogin(3)), a = !1, "function" == typeof t && t();
    },
    checkRedDot: function(t) {
        try {
            var n = wx.getStorageSync("b_tag") || 0;
            Date.now() - n >= 864e5 || Date.now() - n < 0 ? wx.showTabBarRedDot({
                index: 2
            }) : wx.hideTabBarRedDot({
                index: 2
            });
        } catch (t) {
            wx.hideTabBarRedDot({
                index: 2
            });
        }
    },
    clipboard: function(t) {
        wx.setClipboardData({
            data: t,
            success: function(t) {
                wx.showToast({
                    title: "已复制,搜公众号名称即可关注",
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "在微信搜索【二狗星座运势】，即可关注公众号~",
                    icon: "none"
                });
            }
        });
    },
    checkGzh: function(t) {
        var n = this;
        return new Promise(function(e, o) {
            (0, i.getSub)({
                token: n.token,
                type: t || 0
            }, function(o) {
                "0" == o.data.code && (t || (n.globalData.subscribe = o.data.subscribe), e(o.data.subscribe));
            });
        });
    },
    getGid: function(t) {
        var n = this;
        this.globalData.shareTicket && this.token ? wx.getShareInfo({
            shareTicket: this.globalData.shareTicket,
            success: function(e) {
                wx.checkSession({
                    success: function() {
                        (0, i.getGroup)({
                            encryptedData: e.encryptedData,
                            iv: e.iv,
                            token: n.token
                        }, function(o) {
                            "0" == o.data.code && (n.globalData.gid_fn = null, n.setGroupEncryptedData({
                                iv: e.iv,
                                encryptedData: e.encryptedData
                            }).then(function() {
                                t(o);
                            }));
                        }, function() {}, function() {
                            n.globalData.gid_fn = t, n.getGid(t);
                        });
                    },
                    fail: function() {
                        n.globalData.gid_fn = t, n.logout();
                    }
                });
            },
            fail: function(e) {
                n.globalData.gid_fn = t;
            }
        }) : this.globalData.gid_fn = t;
    },
    updateUnionId: function(t) {
        this.updateUnionId(t);
    },
    submitTask: function(t) {
        var n = this;
        return new Promise(function(e, o) {
            (0, i.submitTaskEvent)({
                tag: t,
                token: n.token
            }, function(t) {
                e();
            }, function() {}, function() {});
        });
    },
    getUserConfig: function(t) {
        var n = this;
        return new Promise(function(e, o) {
            (0, i.getUserConfig)({
                token: n.token,
                key: t
            }, function(t) {
                var n = t.data;
                "0" == n.code && e(n.data.item);
            }, function() {}, function() {});
        });
    },
    setUserConfig: function(t, n) {
        var e = this;
        return new Promise(function(o, a) {
            (0, i.setUserConfig)({
                token: e.token,
                key: t,
                value: n
            }, function(t) {
                o();
            }, function() {}, function() {});
        });
    },
    getUnionId: function(t) {
        var n = this, e = t.rawData, o = t.signature, a = t.iv, s = t.encryptedData;
        return new Promise(function(t, c) {
            wx.checkSession({
                success: function() {
                    (0, i.userInfo)({
                        rowdata: e,
                        signature: o,
                        iv: a,
                        encrypteddate: s,
                        token: n.token
                    }, function(e) {
                        "0" != e.data.code && c(), n.updateUnionId(1), t();
                    }, function() {}, function() {});
                },
                fail: function() {
                    c();
                }
            });
        });
    },
    getAdStatus: function() {
        var t = this;
        return new Promise(function(n, e) {
            (0, i.getAdStatus)({
                token: t.token
            }, function(t) {
                "0" == t.data.code && n(t.data.status), e();
            }, function() {}, function() {});
        });
    }
});