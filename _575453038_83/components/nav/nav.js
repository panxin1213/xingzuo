var t = require("../../utils/util.js");

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        title: {
            type: String,
            value: ""
        },
        position: {
            type: String,
            value: "fixed"
        },
        p_b: {
            type: Number,
            value: 34
        },
        titStyle: {
            type: String,
            value: ""
        },
        bg: {
            type: String,
            value: ""
        }
    },
    data: {
        box_h: 0
    },
    attached: function() {
        var e = (0, t.getRectInfo)(), i = wx.getSystemInfoSync(), n = (0, t.compareVersion)(i.version, "6.6.0") >= 0, o = n ? "0" == e.menuButtonInfo.top ? Math.abs(e.menuBotton) : e.menuButtonInfo.top : 0, s = n ? e.menuHeight : e.menuHeight / 2;
        console.log("顶部导航栏======", o, e, i.version), this.setData({
            m_t: o,
            m_h: s
        });
    },
    ready: function() {
        "fixed" == this.data.position ? this.setFixTop() : this.triggerEvent("setfixtop", {
            h: 0
        });
    },
    methods: {
        setFixTop: function() {
            var t = this;
            wx.createSelectorQuery().in(this).select("#fix-top").boundingClientRect(function(t) {
                t && t.height;
            }).exec(function(e) {
                e[0] && e[0].height && t.triggerEvent("setfixtop", {
                    h: e[0].height
                });
            });
        }
    }
});