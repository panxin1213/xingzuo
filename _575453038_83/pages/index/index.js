var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../@babel/runtime/helpers/typeof")), e = t(require("../../@babel/runtime/helpers/defineProperty")), i = require("../../config"), o = require("../../utils/util"), n = require("../../api/index"), s = getApp(), l = null, c = null;

Page({
    data: {
        isShow: -1,
        tab_item: [ "今日", "明日", "本周", "本月", "今年" ],
        info: {},
        act: 0,
        act_select: 0,
        detail: [ "", "", "", "", "" ],
        msg: "",
        date_arr: [],
        xz_extend: {},
        h: [ "100vh", "100vh", "100vh", "100vh", "100vh" ],
        link: !0,
        pub_data: "",
        navShow: !1,
        bannerTop: "48rpx",
        xzTop: "106rpx",
        img_api: i.img_api,
        gzhShow: !1,
        floatBtnShow: !1,
        floatBtnHide: !0,
        tarotList: [],
        auth: -1,
        luckyList: [],
        userAuth: -1,
        img_host: i.img_host,
        extendTypeList: [],
        extendContentList: [],
        floatGzh: 0,
        btnReddot: !1,
        goods: [],
        adshow: !1,
        waimaiList: []
    },
    globalData: {
        constellation: "aries",
        act: 0,
        data_flag: !1,
        subscribe: "",
        downloadSrc: "",
        luckyImageSrc: "",
        shareLuckyTitle: [ "👉点击接收好运", "转发分享，接收好运", "这6个星座儿，今天很顺噢👇（点击查看）", "快！来！蹭！好！运！👇", "来看看，今天运势起飞了吗？", "接收好运吧，今天的好运星座儿！", "分享好运给你，我的朋友们~" ],
        luckydrawPop: !0,
        subscribeDeadline: "",
        subscribeLink: "",
        gotAdtype3: !1,
        gotAdtype8: !1,
        loveGoods: {}
    },
    onLoad: function(t) {
        var a, e, i = this, o = wx.getStorageSync("xz"), n = t && (t.type && "1" != t.type || t.name);
        console.log("获取到的参数", t), wx.ee.on("token_updated", this.eehandle), this.reportSourceMini(t), 
        n || o ? (this.setData({
            isShow: 2
        }, function() {
            i.observerDom();
        }), e = n ? t.id : 0, a = n ? t.name : o, this.globalData.constellation = a, this.globalData.act = e, 
        this.globalData.ch = "index", this.getData("", this.globalData.act)) : (wx.hideLoading(), 
        this.setData({
            isShow: 1
        }), this.getLuckyStar()), t.lucky && "1" == t.lucky && this.luckyPopShow(), this.initDom(e), 
        wx.getSetting({
            success: function(t) {
                null == t.authSetting["scope.writePhotosAlbum"] || null == t.authSetting["scope.writePhotosAlbum"] ? i.setData({
                    auth: -1
                }) : 0 == t.authSetting["scope.writePhotosAlbum"] ? i.setData({
                    auth: 0
                }) : i.setData({
                    auth: 1
                });
            }
        }), wx.showShareMenu && wx.showShareMenu({
            withShareTicket: !0
        }), s.getUserConfig("gzhbanner").then(function(t) {
            t = t || 0;
            var a = setTimeout(function() {
                i.setData({
                    floatGzh: Date.now() - Number(t) >= 6048e5
                }), clearTimeout(a), a = null;
            }, 3e3);
        }), this.setData({
            day: new Date().getDay()
        }), this.getWeekLucky(), this.setUserEventData(), this.getWaimaiList();
        var l = wx.getStorageSync("adMark") || 1;
        l && l < Date.now() - 864e5 && this.createInterstitialAd();
    },
    onShow: function(t) {
        s.checkRedDot(), s.globalData.lucky_pop && this.luckyPopShow();
        var a = wx.getStorageSync("adMark") || 1;
        a && a < Date.now() - 864e5 && this.wxAdShow();
    },
    onReady: function(t) {},
    onShareAppMessage: function(t) {
        var a = "『二狗星座』十二星座每日运势", e = "/pages/index/index?type=1&ch=ergouXz&ch_type=menu", s = i.img_api + "/share.png", l = "2" == this.data.isShow ? 2 : 1, c = function() {
            wx.showToast({
                title: "转发成功！快去看看~",
                icon: "success",
                duration: 2e3
            });
        };
        switch ("button" == t.from && (l = t.target.dataset.type, (0, n.reportAnalytics)("btn_share_event", {
            type: l
        })), String(l)) {
          case "1":
            break;

          case "2":
            var r = (0, o.getDate)("t5");
            a = "『二狗星座』" + o.constellation_map[this.globalData.constellation].name + "每日运势", 
            e = "/pages/index/index?id=0&name=" + this.globalData.constellation + "&ch=ergouXz&type=2&ch_type=xz", 
            s = i.img_host + "/uploads/star/".concat(r, "/").concat(this.globalData.constellation, "_today.jpg"), 
            c = function() {
                wx.showToast({
                    title: "转发成功！去群里看看~",
                    icon: "success",
                    duration: 2e3
                });
            };
            break;

          case "3":
            a = this.globalData.shareLuckyTitle[this.data.day], e = "/pages/index/index?id=0&name=" + this.globalData.constellation + "&ch=ergouXz&type=2&lucky=1&ch_type=lucky", 
            s = i.img_api + "/share/lucky_share/".concat(this.data.day, ".png");
            break;

          case "4":
            a = "群友星座统计，看看大家都是什么星座？", e = "/groupStatistics/share/share", s = i.img_api + "/share/share_group_stats.png";
        }
        return {
            title: a,
            path: e,
            imageUrl: s,
            success: c,
            fail: function(t) {}
        };
    },
    onUnload: function() {
        wx.ee.off("token_updated", this.eehandle), s.globalData.userEvent = null, l && (clearTimeout(l), 
        l = null), this.globalData.isShowLucky = !1;
    },
    eehandle: function(t) {
        t && (2 == this.data.isShow ? this.getData(t, this.globalData.act) : this.getLuckyStar(t), 
        this.getWeekLucky(t));
    },
    observerDom: function() {
        var t = this;
        this._observer = wx.createIntersectionObserver(), this._observer.relativeToViewport({
            bottom: -120
        }).observe(".extendWrap", function(a) {
            t.setData({
                link: !t.data.link
            });
        });
    },
    createInterstitialAd: function() {
        return new Promise(function(t, a) {
            wx.createInterstitialAd ? ((c = wx.createInterstitialAd({
                adUnitId: "adunit-c7c925fd6eb10c23"
            })).onLoad(function() {
                console.log("onLoad event emit");
            }), c.onError(function(t) {
                console.log("onError event emit", t);
            }), c.onClose(function(t) {
                console.log("onClose event emit", t), wx.setStorageSync("adMark", (0, o.getDate)("t6"));
            }), t()) : a();
        });
    },
    showAdv: function() {
        var t = this;
        console.log("展示广告~~~~"), clearTimeout(l), l = setTimeout(function() {
            t.setData({
                adshow: !0
            });
        }, 15e3);
    },
    wxAdShow: function() {
        clearTimeout(l), l = setTimeout(function() {
            c && c.show().catch(function(t) {
                console.error(t);
            }), clearTimeout(l), l = null;
        }, 0);
    },
    reportSourceMini: function(t) {
        if (console.log("options", t), (t.ald_media_id || t.ald_link_key) && (this.setData({
            fromThirdMini: 1
        }), (0, n.reportAnalytics)("other_minipro_stats", {
            ch_media_id: t.ald_media_id,
            ch_link_key: t.ald_link_key,
            ch_type: "ald"
        })), t.ch) switch (t.ch) {
          case "ergou":
            (0, n.reportAnalytics)("source_ergou_stats", {
                xz: t.name
            });
            break;

          case "ergouXz":
            wx.reportAnalytics("source_ergouxz_stats", {
                xz: t.name
            });
            break;

          default:
            (0, n.reportAnalytics)("other_minipro_stats", {
                ch_media_id: "",
                ch_link_key: "",
                ch_type: t.ch
            });
        }
    },
    setUserEventData: function(t) {
        var a = {};
        o.xzUserEvent[this.globalData.constellation] && (a.extend = o.xzUserEvent[this.globalData.constellation]), 
        a.xz = this.globalData.constellation, a.xz_name = o.constellation_map[this.globalData.constellation].name, 
        this.setData({
            xzInfo: a
        });
    },
    swiperchange: function(t) {
        var a = t.detail.current || 0;
        this.changeHandle(a);
    },
    changetab: function(t) {
        var a = t.detail.currentTarget.dataset.index;
        a = a ? Number(a) : 0, this.setData({
            act: a
        });
    },
    changeHandle: function(t) {
        var a = Object.create ? Object.create(null) : {};
        a.act = t, a.act_select = t, this.data.detail[t] ? a["detail[".concat(t, "]")] = this.data.detail[t] : this.getData("", t), 
        this.setData(a);
    },
    getData: function(t) {
        var a = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        t = t || s.token, this.globalData.token = t, t && (0, n.getXzData)({
            token: t,
            tab: i,
            constellation: this.globalData.constellation
        }, function(t) {
            var o;
            wx.hideLoading();
            var n = t.data;
            4 != n.code && (0 == n.code ? (0 === a.data.goods.length && a.getAdList(6), a.globalData.gotAdtype8 || a.getAdList(8), 
            a.setData((o = {}, (0, e.default)(o, "detail[" + i + "]", n.data), (0, e.default)(o, "sourceType", n.type), 
            o), function() {
                "2" == a.data.isShow && a.getHeight(i), "" === a.globalData.subscribe && a.checkGzh().then(function() {
                    a.getHeight(i);
                });
            }), a.globalData.gotAdtype3 || ("android" === wx.getSystemInfoSync().platform ? a.getAdList(3) : s.getAdStatus().then(function(t) {
                a.globalData.gotAdtype3 = !0, "0" != t && a.getAdList(3);
            })), 0 == a.data.luckyList.length && a.getLuckyStar()) : wx.showToast({
                title: "获取不到数据",
                icon: "none"
            }));
        }, function() {
            a.globalData.act = i, a.globalData.luckydrawPop = !0, wx.hideLoading({
                complete: function(t) {
                    wx.showToast({
                        title: "网络异常",
                        icon: "none"
                    });
                }
            });
        }, function() {
            a.globalData.luckydrawPop = !0, a.globalData.act = i;
        });
    },
    getUserEvent: function(t) {
        var a = this;
        t = t || s.token, this.globalData.token = t, t && (0, n.getUserEvent)({
            token: t,
            constellation: this.globalData.constellation
        }, function(t) {
            var e = t.data;
            a.globalData.data_flag = !0, "0" == e.code && a.setUserEventData(e);
        }, function() {});
    },
    serviceHandle: function(t) {
        wx.navigateTo({
            url: "/pages/exchange/exchange?type=gzh"
        });
    },
    showPub: function(t) {
        var a = t.currentTarget.dataset.item;
        this.setData({
            pub_data: JSON.stringify({
                type: 2,
                t: Date.now(),
                item: {
                    title: a.title,
                    linkthumb: a.link_thumb,
                    id: a.id,
                    gif: a.guide_gif
                }
            })
        });
    },
    luckyPopShow: function(t) {
        this.setData({
            lucky_data: JSON.stringify({
                t: Date.now()
            })
        }), s.globalData.lucky_pop = !1;
    },
    toSubscribeText: function() {
        wx.setStorageSync("flreddot", this.globalData.subscribeDeadline), this.setData({
            btnReddot: !1
        }), wx.navigateTo({
            url: "/pages/exchange/exchange?type=subscribe&link=" + this.globalData.subscribeLink
        });
    },
    toDownload: function() {
        wx.navigateTo({
            url: "/pages/exchange/exchange?type=download"
        });
    },
    essayDetail: function(t) {
        var a = t.detail.type || null;
        a ? Object.keys(o.xzUserEvent).indexOf(this.globalData.constellation) > -1 ? wx.navigateTo({
            url: "/pages/exchange/exchange?type=xz&id=" + a + "&name=" + this.globalData.constellation
        }) : wx.navigateTo({
            url: "/fortune/essay/essay?name=" + this.globalData.constellation + "&type=" + a
        }) : wx.showToast({
            title: "再试一下~",
            icon: "none"
        });
    },
    getHeight: function(t) {
        var a = this;
        wx.createSelectorQuery().select("#tabcon" + t).boundingClientRect(function(t) {
            t && t.height;
        }).exec(function(i) {
            i[0] && a.setData((0, e.default)({}, "h[".concat(t, "]"), i[0].height + "px"));
        });
    },
    onPageScroll: function(t) {
        if ("2" == this.data.isShow) {
            var a = wx.getSystemInfoSync().windowWidth / 750 * 380, e = wx.getSystemInfoSync().windowWidth / 750 * 700, i = (this.data.h[this.data.act].indexOf("vh") > 0 ? wx.getSystemInfoSync().windowHeight : parseInt(this.data.h[this.data.act]), 
            Object.create ? Object.create(null) : {});
            t.scrollTop <= a ? (this.data.navShow && (i.navShow = !1), this.data.floatBtnShow && (i.floatBtnShow = !1)) : t.scrollTop > a && t.scrollTop <= e ? (!this.data.navShow && (i.navShow = !0), 
            this.data.floatBtnShow && (i.floatBtnShow = !1)) : (t.scrollTop > e && t.scrollTop, 
            !this.data.navShow && (i.navShow = !0), !this.data.floatBtnShow && (i.floatBtnShow = !0)), 
            Object.keys(i).length > 0 && this.setData(i);
        }
    },
    showShare: function(t) {},
    toResult: function(t) {
        var a = this;
        this.globalData.constellation = t.detail.currentTarget.id;
        var e = this.getXzInfo(this.globalData.constellation);
        wx.setStorageSync("xz", t.detail.currentTarget.id), this.setData({
            info: e,
            act_select: 0,
            act: 0,
            pub_data: "",
            isShow: 2,
            msg: "",
            navShow: !1,
            link: !0
        }, function() {
            a.observerDom();
        }), this.globalData.data_flag = !1, this.globalData.act = 0, this.globalData.ch = "index", 
        this.getData("", 0), wx.pageScrollTo({
            scrollTop: 0
        }), this.setUserEventData();
    },
    back: function(t) {
        this.globalData.data_flag = !1, this.globalData.isShowLucky = !1, this.setData({
            isShow: 1,
            detail: [ "", "", "", "", "" ]
        }), this._observer && (this._observer.disconnect(), this._observer = null);
    },
    initDom: function(t) {
        var a = (0, o.getRectInfo)(), e = wx.getSystemInfoSync(), i = this.getXzInfo(this.globalData.constellation), n = e.windowHeight - a.navBarHeight, s = e.windowHeight - e.windowHeight / 1334 * 750;
        this.setData({
            info: i,
            act_select: t,
            act: t,
            move_h: n + "px",
            move_t: "136px",
            date_arr: [ (0, o.getDate)("t0-1"), (0, o.getDate)("t1-1"), (0, o.getDate)("t2"), (0, 
            o.getDate)("t3"), (0, o.getDate)("t4") ],
            bannerTop: a.menuButtonInfo.top + "px",
            xzTop: a.menuButtonInfo.top + a.menuButtonInfo.height + "px",
            float_y: s
        });
    },
    getXzInfo: function(t) {
        var a = o.constellation_map[t];
        return a.img = i.img_api + "/banner/" + a.id + "_" + new Date().getDay() + ".png", 
        a.default_img = i.img_api + "/banner/" + a.id + "_0.png", a;
    },
    toRadar: function(t) {
        (0, n.reportAnalytics)("banner_click", {
            id: t.currentTarget.dataset.id
        }), wx.switchTab({
            url: "/pages/friendsradar/friendsradar"
        });
    },
    checkGzh: function() {
        var t = this;
        return new Promise(function(a, e) {
            s.checkGzh(1).then(function(e) {
                t.globalData.subscribe = e, "1" == e ? t.setData({
                    gzhShow: !1
                }, function() {
                    a();
                }) : t.setData({
                    gzhShow: !0
                }, function() {
                    a();
                });
            });
        });
    },
    tarotService: function(t) {
        this.setData({
            pub_data: JSON.stringify({
                type: "0" == t.detail.currentTarget.dataset.id ? 3 : 2,
                t: Date.now(),
                item: t.detail.currentTarget.dataset
            })
        });
    },
    getAdList: function(t) {
        var a = this;
        (0, n.getAdList)({
            token: s.token,
            type: t
        }, function(e) {
            var i = e.data.data || [];
            if (console.log(e), "0" == e.data.code) switch (t) {
              case 3:
                a.globalData.gotAdtype3 = !0;
                for (var o = [], n = 0; n < i.length; n++) o.push({
                    guide_gif: i[n].guide_gif,
                    id: i[n].id,
                    image_url: i[n].image_url,
                    link_thumb: i[n].link_thumb,
                    title: i[n].title
                });
                a.setData({
                    tarotList: o
                });
                break;

              case 6:
                for (var s = [], l = 0; l < i.length; l++) {
                    for (var c = [], r = i[l].redirect_url.split("|"), h = 0; h < r.length; h++) c.push({
                        name: r[h].split("-")[0],
                        cls: r[h].split("-")[1]
                    });
                    s.push({
                        image_url: i[l].image_url,
                        price: i[l].viewers,
                        id: i[l].id,
                        title: i[l].title,
                        tag: c,
                        guide_gif: i[l].guide_gif,
                        link_thumb: i[l].link_thumb,
                        link_title: i[l].link_title
                    });
                }
                a.setData({
                    goods: s
                });
                break;

              case 8:
                a.globalData.gotAdtype8 = !0, a.globalData.loveGoods = i[0];
            }
        }, function() {});
    },
    getWaimaiList: function() {
        var t = this;
        (0, n.xzSpread)({}, function(e) {
            var i = e.data;
            if (console.log(i, (0, a.default)(i.data)), 0 === i.code && i.data && "object" == (0, 
            a.default)(i.data)) {
                var o = [];
                for (var n in i.data) i.data[n] && o.push(i.data[n]);
                t.setData({
                    waimaiList: o
                });
            }
        }, function() {});
    },
    toMiniPro: function(t) {
        if (wx.navigateToMiniProgram) {
            var a = t.currentTarget.dataset && t.currentTarget.dataset.idx, e = this.data.waimaiList[Number(a)];
            e.appid && wx.navigateToMiniProgram({
                appId: e.appid,
                path: e.path,
                envVersion: "release",
                success: function(t) {
                    e.report && (0, n.reportAnalytics)(e.report, {});
                },
                fail: function(t) {}
            });
        }
    },
    getLuckyStar: function(t) {
        var a = this;
        (0, n.getLuckyStar)({
            token: t || s.token
        }, function(t) {
            var e = t.data;
            if ("0" == e.code) {
                var i = [];
                e.star_name.forEach(function(t) {
                    i.push({
                        head_url: o.constellation_map[t.star_name].url,
                        c_name: o.constellation_map[t.star_name].name
                    });
                }), a.globalData.luckyImageSrc = e.luck_image, a.setData({
                    secTitle: e.luck_text,
                    luckyList: i
                });
            }
        }, function() {
            a.globalData.luckydrawPop = !0;
        }, function() {
            a.globalData.luckydrawPop = !0;
        });
    },
    downloadTmpImg: function() {
        var t = this;
        return new Promise(function(a, e) {
            var i = t.globalData.luckyImageSrc;
            wx.downloadFile({
                url: i,
                success: function(e) {
                    200 === e.statusCode && (t.globalData.downloadSrc = e.tempFilePath, a());
                },
                fail: function(t) {
                    wx.showToast({
                        title: "保存失败，再试一次",
                        icon: "none"
                    }), e();
                }
            });
        });
    },
    saveImg: function() {
        var t = this;
        "" !== this.globalData.downloadSrc ? wx.saveImageToPhotosAlbum({
            filePath: this.globalData.downloadSrc,
            success: function(t) {
                wx.showToast({
                    title: "保存成功，可以转发好友或分享朋友圈咯~",
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "保存失败！请重新操作",
                    icon: "none"
                });
            }
        }) : this.downloadTmpImg().then(function(a) {
            t.saveImg();
        });
    },
    saveHandle: function() {
        var t = this;
        "-1" == this.data.auth ? wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function(a) {
                t.saveImg(), (0, n.reportAnalytics)("save_lucky_poster", {
                    status: "authed"
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "未授权无法保存图片噢~",
                    icon: "none"
                }), t.setData({
                    auth: 0
                }), (0, n.reportAnalytics)("save_lucky_poster", {
                    status: "reject"
                });
            }
        }) : (this.saveImg(), (0, n.reportAnalytics)("save_lucky_poster", {
            status: "authed"
        }));
    },
    settingHandle: function(t) {
        t.detail.detail.authSetting && t.detail.detail.authSetting["scope.writePhotosAlbum"] ? (this.setData({
            auth: 1
        }), this.saveImg(), (0, n.reportAnalytics)("save_lucky_poster", {
            status: "setting-authed"
        })) : (this.setData({
            auth: 0
        }), wx.showToast({
            title: "未授权无法保存图片噢~",
            icon: "none"
        }), (0, n.reportAnalytics)("save_lucky_poster", {
            status: "setting-reject"
        }));
    },
    toTarot: function() {
        (0, n.reportAnalytics)("index_tarot_click", {}), wx.navigateTo({
            url: "/tarot/index/index"
        });
    },
    toTest: function(t) {
        var a = t.currentTarget.id;
        console.log(a), "toLCTest" == a || "toQXTest" == a ? wx.navigateTo({
            url: "/test/questions/questions?id=".concat(a)
        }) : wx.navigateTo({
            url: "/test/test/test?id=" + a
        });
    },
    getWeekLucky: function(t) {
        var a = this;
        (0, n.getWeekLucky)({
            token: t || s.token
        }, function(t) {
            var e = t.data, i = e.data, o = e.code;
            e.msg;
            if ("0" == o) {
                a.globalData.subscribeLink = i.wechat_url, a.globalData.subscribeDeadline = i.expire_time;
                var n = wx.getStorageSync("flreddot") || "";
                a.setData({
                    btnReddot: !(n && n === i.expire_time),
                    weekLuckyIcon: i.image_url,
                    floatBtnHide: !(i.wechat_url && Date.now() <= 1e3 * Number(i.expire_time))
                });
            }
        }, function(t) {}, function(t) {});
    },
    buyGoods: function(t) {
        if (console.log(t), "love-goods" == t.currentTarget.id) this.setData({
            pub_data: JSON.stringify({
                type: 6,
                t: Date.now(),
                item: {
                    id: this.globalData.loveGoods.id,
                    name: this.globalData.loveGoods.title,
                    gif: this.globalData.loveGoods.guide_gif,
                    linkthumb: this.globalData.loveGoods.link_thumb,
                    title: this.globalData.loveGoods.link_title
                }
            })
        }); else {
            var a = t.detail.dataset.item;
            this.setData({
                pub_data: JSON.stringify({
                    type: 6,
                    t: Date.now(),
                    item: {
                        id: a.id,
                        name: a.title,
                        gif: a.guide_gif,
                        linkthumb: a.link_thumb,
                        title: a.link_title
                    }
                })
            });
        }
    }
});