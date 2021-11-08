var t = require("../../api/index"), a = getApp();

Page({
    data: {
        cur: 0,
        posterList: [],
        new: !1,
        auth: -1
    },
    globalData: {
        theme: "",
        download_err: !1,
        temp_src_arr: [ "", "", "", "", "", "", "", "", "", "", "", "" ]
    },
    onLoad: function(t) {
        var a = this;
        wx.ee.on("token_updated", this.eehandle), t && (this.globalData.theme = t.theme || "", 
        this.globalData.cur = t.idx || 0), wx.getStorageSync("posterNew") || this.setData({
            new: !0
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
        }), this.getData();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        wx.ee.off("token_updated", this.eehandle);
    },
    onShareAppMessage: function() {
        return {
            title: "20200523" == this.globalData.theme ? "12星座好色排名，你敢承认吗？" : "20200524" == this.globalData.theme ? "看了12星座渣男渣女交流群，我生气了！" : "20200525" == this.globalData.theme ? "十二星座关系对照表，你中了吗？" : "今日话题| 十二星座那些不为人知的小秘密",
            path: "/pages/constellationPoster/poster?theme=" + this.globalData.theme + "&idx=" + this.globalData.cur,
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
    getData: function(e) {
        var o = this;
        e = e || a.token;
        var s = this.globalData.theme || "";
        (0, t.getTopic)({
            token: e,
            id: s
        }, function(t) {
            var a = t.data;
            if ("0" == a.code) {
                var e = [];
                a.data.forEach(function(t) {
                    e.push(t.topic_image);
                }), o.setData({
                    posterList: e,
                    cur: o.globalData.cur
                });
            }
        });
    },
    eehandle: function(t) {
        t && this.getData(t);
    },
    hideMask: function(t) {
        console.log("oooooo"), this.setData({
            new: !1
        }), wx.setStorageSync("posterNew", 1);
    },
    save: function() {
        var t = this;
        "1" == this.data.auth ? (this.globalData.download_err = !1, this.saveImg()) : "-1" == this.data.auth && wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function(a) {
                t.globalData.download_err = !1, t.saveImg();
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
    downImg: function(t) {
        var a = this;
        return new Promise(function(e, o) {
            wx.downloadFile({
                url: t,
                success: function(t) {
                    200 === t.statusCode && (a.globalData.temp_src_arr[a.globalData.cur] = t.tempFilePath, 
                    e());
                },
                fail: function() {
                    a.globalData.download_err = !0, o();
                }
            });
        });
    },
    saveImg: function() {
        var t = this;
        if (this.globalData.download_err) wx.showToast({
            title: "保存失败，再试一次~",
            icon: "none"
        }); else {
            var a = this.globalData.temp_src_arr[this.globalData.cur];
            console.log("====图片", a), a ? wx.saveImageToPhotosAlbum({
                filePath: a,
                success: function(t) {
                    wx.showToast({
                        title: "保存成功！可以发朋友圈或好友噢~",
                        icon: "none"
                    });
                },
                fail: function(t) {
                    console.log(t), wx.showToast({
                        title: "保存失败,请手动截图保存~",
                        icon: "none"
                    });
                }
            }) : this.downImg(this.data.posterList[this.globalData.cur]).then(function() {
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
    toPre: function(t) {
        var a = 0 === this.globalData.cur ? 11 : Number(this.globalData.cur) - 1;
        this.setData({
            cur: a
        });
    },
    toNext: function(t) {
        var a = 11 === this.globalData.cur ? 0 : Number(this.globalData.cur) + 1;
        this.setData({
            cur: a
        });
    },
    handleChange: function(t) {
        this.globalData.cur = t.detail.current;
    }
});