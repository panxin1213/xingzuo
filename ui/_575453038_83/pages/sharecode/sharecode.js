var t = require("../../config"), a = require("../../api/index"), e = require("../../utils/util.js"), o = getApp();

Page({
    data: {
        src: "",
        nav: !1
    },
    globalData: {
        download_err: !1,
        temp_share_img: ""
    },
    onLoad: function(t) {
        var a = this;
        wx.showLoading({
            title: "生成专属海报中..."
        }), wx.getSetting({
            success: function(t) {
                null == t.authSetting["scope.writePhotosAlbum"] || null == t.authSetting["scope.writePhotosAlbum"] ? a.setData({
                    auth: -1
                }) : 0 == t.authSetting["scope.writePhotosAlbum"] ? a.setData({
                    auth: 0
                }) : a.setData({
                    auth: 1
                });
            }
        }), this.globalData.name = t.name, this.globalData.id = t.id, this.getData();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        return {
            title: "你与".concat(this.globalData.name || "我", "的星座是最佳搭配吗?"),
            path: "/friendsradar/pages/share/share?id=" + this.globalData.id,
            imageUrl: t.img_api + "/xz_match_share.png",
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
        var t = wx.getSystemInfoSync().version;
        console.log("version====", t, (0, e.compareVersion)(t, "7.0.0") >= 0), t && (0, 
        e.compareVersion)(t, "7.0.0") < 0 && this.setData({
            nav: !0
        });
    },
    generateData: function() {
        return {
            wxml: '<view class="box"><image class="box-bg" src="'.concat(this.globalData.bg, '"></image><image class="head-img" src="').concat(this.globalData.src, '"></image><image class="mini-code" src="').concat(this.globalData.minicode, '"></image></view>'),
            style: {
                box: {
                    width: 352,
                    height: 352,
                    position: "relative"
                },
                boxBg: {
                    width: 352,
                    height: 352,
                    position: "absolute",
                    top: 0,
                    left: 0
                },
                headImg: {
                    width: 47,
                    height: 47,
                    position: "absolute",
                    top: 71,
                    left: 116,
                    borderRadius: "50%"
                },
                miniCode: {
                    width: 155,
                    height: 155,
                    position: "absolute",
                    top: 154,
                    left: 98
                }
            }
        };
    },
    downImg: function(t) {
        var a = this;
        return new Promise(function(e, o) {
            wx.downloadFile({
                url: t || a.data.src,
                success: function(t) {
                    200 === t.statusCode && (a.globalData.temp_share_img = t.tempFilePath, e());
                },
                fail: function() {
                    a.globalData.download_err = !0, o();
                }
            });
        });
    },
    extraImage: function() {
        var t = this;
        wx.showLoading({
            title: "正在保存图片..."
        }), this.sharebox.canvasToTempFilePath({
            fileType: "jpg",
            quality: 1
        }).then(function(a) {
            a.tempFilePath ? (wx.hideLoading(), t.saveImg(a.tempFilePath)) : (wx.hideLoading(), 
            wx.showToast({
                title: "保存失败，请手动截图保存噢~",
                icon: "none"
            }));
        });
    },
    save: function() {
        var t = this;
        console.log(this.globalData.temp_share_img, "hhhhhh"), "1" == this.data.auth ? (this.globalData.download_err = !1, 
        this.saveImg(), this.subscribe()) : "-1" == this.data.auth && wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function(a) {
                t.globalData.download_err = !1, t.setData({
                    auth: 1
                }), t.saveImg();
            },
            fail: function(a) {
                wx.showToast({
                    title: "未授权无法保存海报噢~",
                    icon: "none"
                }), t.setData({
                    auth: 0
                });
            }
        });
    },
    canvasLoaded: function() {
        var t = this, a = this.generateData(), e = a.wxml, o = a.style;
        this.sharebox.renderToCanvas({
            wxml: e,
            style: o
        }).then(function(a) {
            t.shareImg = a, wx.hideLoading();
        });
    },
    saveImg: function() {
        var t = this;
        if (this.globalData.download_err) wx.showToast({
            title: "保存失败，再试一次~",
            icon: "none"
        }); else {
            var a = this.globalData.temp_share_img;
            a ? wx.saveImageToPhotosAlbum({
                filePath: a,
                success: function(t) {
                    wx.showToast({
                        title: "保存成功！可以发朋友圈或好友噢~",
                        icon: "none"
                    });
                },
                fail: function(t) {
                    wx.showToast({
                        title: "保存失败,请手动截图保存~",
                        icon: "none"
                    });
                }
            }) : this.downImg().then(function() {
                t.saveImg();
            });
        }
    },
    openSetting: function(t) {
        console.log("打开设置列表", t), t.detail.authSetting && t.detail.authSetting["scope.writePhotosAlbum"] ? (this.globalData.download_err = !1, 
        this.setData({
            auth: 1
        }), this.saveImg()) : (this.setData({
            auth: 0
        }), wx.showToast({
            title: "您未授权无法保存海报噢~",
            icon: "none"
        }));
    },
    getData: function() {
        var t = this;
        (0, a.getSharePic)({
            token: o.token
        }, function(a) {
            wx.hideLoading();
            var e = a.data;
            "0" == e.code && (t.setData({
                src: e.url
            }), t.downImg(e.url));
        }, function() {}, function() {});
    },
    subscribe: function() {
        wx.requestSubscribeMessage && wx.requestSubscribeMessage({
            tmplIds: [ "wKHs09JNbOocXlsmKvh_nL_aekvdFSSdL3maBx9k2Dg" ],
            success: function(t) {
                console.log(t), t.wKHs09JNbOocXlsmKvh_nL_aekvdFSSdL3maBx9k2Dg && "accept" == t.wKHs09JNbOocXlsmKvh_nL_aekvdFSSdL3maBx9k2Dg && (0, 
                a.increaseSub)({
                    tid: "wKHs09JNbOocXlsmKvh_nL_aekvdFSSdL3maBx9k2Dg",
                    token: o.token
                }, function(t) {
                    console.log(t);
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});