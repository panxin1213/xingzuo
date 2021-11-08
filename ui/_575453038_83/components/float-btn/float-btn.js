var e = require("../../config.js");

Component({
    properties: {
        w: {
            type: String,
            value: "90vw"
        },
        h: {
            type: String,
            value: "100vh"
        },
        x: {
            type: Number,
            value: 0
        },
        y: {
            type: Number,
            value: 0
        },
        t: {
            type: String,
            value: "0px"
        },
        type: {
            type: String,
            value: ""
        },
        l: {
            type: String,
            value: "10vw"
        },
        r: {
            type: String,
            value: "0"
        },
        shareType: {
            type: String,
            value: ""
        },
        luckyBtn: {
            type: Boolean,
            value: !1
        },
        hide: {
            type: Boolean,
            val: !1,
            observer: function(e, t) {
                this.setData({
                    o_hide: e
                });
            }
        },
        reddot: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.setData({
                    showReddot: e
                });
            }
        },
        icon: {
            type: String,
            value: ""
        }
    },
    data: {
        init_x: 0,
        init_y: 0,
        img_api: e.img_api,
        _hide: !1,
        showReddot: !1
    },
    attached: function() {
        var e = wx.getSystemInfoSync(), t = e.windowWidth - e.windowWidth / 750 * 133, i = e.windowHeight - e.windowHeight / 1334 * 350;
        this.setData({
            init_x: t,
            init_y: i
        });
    },
    methods: {
        pubHandle: function(e) {
            this.triggerEvent("click");
        },
        luckyHandle: function(e) {
            console.log("进来这里"), this.triggerEvent("luckyservice");
        }
    }
});