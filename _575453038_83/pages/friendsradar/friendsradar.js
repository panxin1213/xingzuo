var t = require("../../api/index.js"), e = require("../../utils/util"), a = require("../../config"), n = getApp(), o = null, s = null, i = null, r = 0;

Page({
    data: {
        updateFr: [],
        info: 0,
        edit_type: 1,
        msg: "",
        auth2: !1,
        usex: "",
        fast: [],
        star: "",
        top: 0,
        ustatus: -1,
        btnTop: "248rpx",
        canIUseGetUserProfile: !1
    },
    globalData: {
        userInfo: Object.create ? Object.create(null) : {},
        notice_list: [],
        u_t: "1",
        refresh: !1,
        load: !1,
        new: ""
    },
    onLoad: function(t) {
        var e = this;
        wx.ee.on("token_updated", this.eehandle), wx.getUserProfile && this.setData({
            canIUseGetUserProfile: !0
        }), this.globalData.new = wx.getStorageSync("new"), this.initData(), this.initDom(), 
        this.getAdTime().then(function(t) {
            t && e.createInterstitialAd();
        });
    },
    onReady: function() {
        this.globalData.dialog = this.selectComponent("#dialog");
    },
    onShow: function() {
        var t = this;
        n.checkRedDot(), this.globalData.load && this.getFriendList(), this.getAdTime().then(function(e) {
            e && t.wxAdShow();
        });
    },
    onHide: function() {
        clearInterval(o), o = null;
    },
    onUnload: function() {
        wx.ee.off("token_updated", this.eehandle), clearInterval(o), o = null, clearTimeout(s), 
        s = null;
    },
    onPullDownRefresh: function() {
        clearInterval(o), o = null, wx.stopPullDownRefresh(), this.globalData.refresh || this.getFriendList();
    },
    onShareAppMessage: function(t) {
        var e = "/pages/friendsradar/friendsradar", n = "我";
        return t.from, this.data.auth2 && (e = "/friendsradar/pages/share/share?id=" + this.globalData.id), 
        this.globalData.userInfo && this.globalData.userInfo.nickname && (n = this.globalData.userInfo.nickname), 
        {
            title: "你与" + n + "的星座是最佳搭配吗?",
            path: e,
            imageUrl: a.img_api + "/xz_match_share.png",
            success: function(t) {
                wx.showToast({
                    title: "转发成功",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(t) {}
        };
    },
    initDom: function() {
        var t = wx.getSystemInfoSync(), e = t.windowWidth ? Number(t.windowWidth) : 375, a = t.windowHeight ? Number(t.windowHeight) : 667, n = 248;
        .6058 / (e / a) > 1 && (n = .6058 / (e / a) * 248), console.log(n, e, a), this.setData({
            btnTop: n + "rpx"
        });
    },
    getAdTime: function() {
        return new Promise(function(t, e) {
            r ? r < Date.now() - 864e5 ? t(!0) : t(!1) : n.getUserConfig("adMarkFR").then(function(e) {
                (r = e = e || 1) && r < Date.now() - 864e5 ? t(!0) : t(!1);
            });
        });
    },
    editInfo: function(t) {
        this.setData({
            editData: this.globalData.userInfo,
            edit_type: 1
        });
    },
    modifyInfo: function(t) {
        this.setData({
            editData: this.globalData.userInfo,
            edit_type: 2
        });
    },
    getUserProfile: function() {
        var t = this;
        wx.getUserProfile({
            desc: "用于开启星座匹配服务",
            success: function(e) {
                t.setUserWeChatInfo(e.userInfo);
            },
            fail: function() {
                t.rejectAuth();
            }
        });
    },
    getUserInfo: function(t) {
        t.detail.userInfo ? this.setUserWeChatInfo(t.detail.userInfo) : this.rejectAuth();
    },
    inviteMatch: function(t) {},
    gotAuth: function(t) {
        this.setUserWeChatInfo(t.detail);
    },
    rejectAuth: function(t) {
        this.setData({
            msg: JSON.stringify({
                msg: "授权后才可以与好友匹配哦~",
                type: 0,
                time: Date.now()
            })
        });
    },
    submitInfo: function(t) {
        var e = t.detail;
        "1" == this.data.edit_type ? this.setUserBaseInfo(e) : this.updateUserBaseInfo(e);
    },
    initData: function() {
        this.globalData.userInfo.sex = "", this.globalData.userInfo.birth = "", this.getUserBaseInfo();
    },
    getUserBaseInfo: function(a) {
        var o = this;
        a = a || n.token, (0, t.getUserBaseInfo)({
            token: a
        }, function(t) {
            var a = t.data;
            if ("0" == a.code) {
                var s = a.data || {}, i = (0, e.getRectInfo)().menuButtonInfo.top - 16, r = {
                    info: s.birth ? 1 : 0,
                    auth2: Boolean(s.avatarUrl) && Boolean(s.nickname),
                    usex: "1" == s.sex ? "b" : "",
                    edit_type: s.birth ? 2 : 1,
                    top: i > 0 ? i : 0
                };
                if (s.birth = s.birth ? String(s.birth).substr(0, 4) + "-" + String(s.birth).substr(4, 2) + "-" + String(s.birth).substr(6) : "", 
                o.globalData.userInfo = s, o.globalData.id = s.id, n.globalData.headimg = s.avatarUrl || "", 
                !s.birth || !Boolean(s.avatarUrl) || !Boolean(s.nickname)) return r.ustatus = 0, 
                void o.setData(r);
                o.setData(r), o.getFriendList(function(t) {
                    o.globalData.load = !0, 0 == t.code && (console.log("constellation_map====data===", t), 
                    o.setData({
                        star: e.constellation_map[t.star] && e.constellation_map[t.star].name
                    }));
                });
            }
        }, function() {});
    },
    updateData: function(t, e) {
        var a = this;
        return new Promise(function(n, o) {
            "0" == t.data.code && (a.setData({
                info: 1,
                usex: "1" == e.sex ? "b" : ""
            }), e.birth = e.birth ? String(e.birth).substr(0, 4) + "-" + String(e.birth).substr(4, 2) + "-" + String(e.birth).substr(6) : "", 
            a.globalData.userInfo = e, a.globalData.dialog.close()), n();
        });
    },
    updateUserBaseInfo: function(a) {
        var s = this;
        (0, t.updateUserBaseInfo)({
            token: n.token,
            sex: a.sex,
            birth: a.birth
        }, function(t) {
            s.updateData(t, a).then(function() {
                clearInterval(o), o = null, s.getFriendList(function(t) {
                    s.globalData.load = !0, "0" == t.code && (console.log("constellation_map====data===", t), 
                    s.setData({
                        star: e.constellation_map[t.star] && e.constellation_map[t.star].name
                    }));
                });
            });
        });
    },
    setUserBaseInfo: function(a) {
        var s = this;
        (0, t.setUserBaseInfo)({
            token: n.token,
            sex: a.sex,
            birth: a.birth
        }, function(t) {
            s.updateData(t, a).then(function() {
                clearInterval(o), o = null, s.getFriendList(function(t) {
                    s.globalData.load = !0, 0 == t.code && (console.log("constellation_map====data===", t), 
                    s.setData({
                        star: e.constellation_map[t.star] && e.constellation_map[t.star].name
                    }));
                });
            });
        });
    },
    setUserWeChatInfo: function(e) {
        var a = this;
        e.token = n.token, (0, t.setUserWeChatInfo)(e, function(t) {
            "0" == t.data.code && a.setData({
                auth2: !0
            });
        }, function() {});
    },
    showMatchDetail: function(t) {
        var e = t.currentTarget.dataset.id || t.detail.id;
        wx.navigateTo({
            url: "/friendsradar/pages/match/match?id=" + e
        });
    },
    getFriendList: function(e) {
        var a = this;
        this.globalData.refresh = !0, (0, t.getFriendList)({
            token: n.token
        }, function(t) {
            var n = t.data;
            if (e && e(n), "0" == n.code) {
                if (0 === n.list.length) return 0 !== a.data.ustatus && a.setData({
                    ustatus: 0
                }), void a.scanData();
                if (1 === n.list.length) {
                    if (console.log("进来1"), "0" != a.globalData.new && "1" != a.globalData.new) return console.log("进来2"), 
                    void a.getUserConfig().then(function(t) {
                        a.globalData.new = t ? 0 : 1, wx.setStorageSync("new", a.globalData.new), a.globalData.new ? (n.list[0].type = a.switchType(n.list[0].score), 
                        n.list[0].ustatus = 1, clearInterval(o), o = null, a.setData({
                            ustatus: 1,
                            updateFr: n.list,
                            fast: n.fast
                        })) : (n.list.forEach(function(t) {
                            t.type = a.switchType(t.score);
                        }), a.setData({
                            updateFr: n.list,
                            fast: n.fast,
                            ustatus: 2
                        }, function() {
                            a.scanData();
                        }));
                    });
                    if ("1" == a.globalData.new) return console.log("进来3"), n.list[0].type = a.switchType(n.list[0].score), 
                    n.list[0].ustatus = 1, clearInterval(o), o = null, void a.setData({
                        ustatus: 1,
                        updateFr: n.list,
                        fast: n.fast
                    });
                }
                n.list.forEach(function(t) {
                    t.type = a.switchType(t.score);
                }), a.setData({
                    updateFr: n.list,
                    fast: n.fast,
                    ustatus: 2
                }, function() {
                    a.scanData();
                });
            }
        });
    },
    switchType: function(t) {
        switch (!0) {
          case t <= 50:
            return 5;

          case t > 50 && t <= 70:
            return 4;

          case t > 70 && t <= 80:
            return 3;

          case t > 80 && t <= 90:
            return 2;

          case t > 90 && t <= 100:
            return 1;

          default:
            return 5;
        }
    },
    scanData: function() {
        var t = this;
        clearInterval(o), o = setInterval(function() {
            t.getFriendList();
        }, 1e4);
    },
    radarRender: function() {
        this.globalData.refresh = !1;
    },
    eehandle: function(t) {
        t && this.getUserBaseInfo(t);
    },
    generateShareCode: function(t) {
        var e = this.globalData.userInfo && this.globalData.userInfo.nickname || "我";
        wx.navigateTo({
            url: "/pages/sharecode/sharecode?name=" + e + "&id=" + this.globalData.id
        });
    },
    nofrGuideHandle: function() {
        this.setData({
            editData: {
                onlyshow: !0
            }
        });
    },
    onefrGuideHandle: function() {
        this.setUserConfig(1), wx.setStorageSync("new", 0), this.globalData.new = 0, this.getFriendList();
    },
    getUserConfig: function() {
        return new Promise(function(e, a) {
            (0, t.getUserConfig)({
                key: "friendsradar_guided",
                token: n.token
            }, function(t) {
                var a = t.data;
                e(a.data.item);
            }, function() {
                return function() {};
            });
        });
    },
    setUserConfig: function(e) {
        (0, t.setUserConfig)({
            key: "friendsradar_guided",
            value: e,
            token: n.token
        }, function(t) {}, function() {}, function() {});
    },
    toWelfare: function() {
        wx.navigateTo({
            url: "/pages/welfare/welfare"
        });
    },
    subscribe: function() {
        console.log("subscribejinlai", wx.requestSubscribeMessage), wx.requestSubscribeMessage && wx.requestSubscribeMessage({
            tmplIds: [ "wKHs09JNbOocXlsmKvh_nL_aekvdFSSdL3maBx9k2Dg" ],
            success: function(e) {
                console.log(e), e.wKHs09JNbOocXlsmKvh_nL_aekvdFSSdL3maBx9k2Dg && "accept" == e.wKHs09JNbOocXlsmKvh_nL_aekvdFSSdL3maBx9k2Dg && (0, 
                t.increaseSub)({
                    tid: "wKHs09JNbOocXlsmKvh_nL_aekvdFSSdL3maBx9k2Dg",
                    token: n.token
                }, function(t) {
                    console.log(t);
                });
            },
            fail: function(t) {
                console.log("订阅失败", t);
            }
        });
    },
    createInterstitialAd: function() {
        return new Promise(function(t, a) {
            wx.createInterstitialAd ? ((i = wx.createInterstitialAd({
                adUnitId: "adunit-94254e234da9f75f"
            })).onLoad(function() {
                console.log("onLoad event emit");
            }), i.onError(function(t) {
                console.log("onError event emit", t);
            }), i.onClose(function(t) {
                console.log("onClose event emit", t), n.setUserConfig("adMarkFR", (0, e.getDate)("t6")), 
                r = (0, e.getDate)("t6");
            }), t()) : a();
        });
    },
    wxAdShow: function() {
        clearTimeout(s), s = setTimeout(function() {
            i && i.show().catch(function(t) {
                console.error(t);
            }), clearTimeout(s), s = null;
        }, 0);
    }
});