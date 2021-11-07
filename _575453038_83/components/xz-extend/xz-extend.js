var e = {
    personality: {
        name: "个性",
        en_name: "character",
        bg: "details_title_bg_orange"
    },
    lucky: {
        name: "幸运物",
        en_name: "mascot",
        bg: "details_title_bg_lucky"
    },
    love: {
        name: "爱情",
        en_name: "love",
        bg: "details_title_bg_love"
    },
    boy: {
        name: "男生",
        en_name: "boy",
        bg: "details_title_bg_bule"
    },
    girl: {
        name: "女生",
        en_name: "girl",
        bg: "details_title_bg_red"
    },
    child: {
        name: "孩子",
        en_name: "child",
        bg: "details_title_bg_child"
    },
    legend: {
        name: "传说",
        en_name: "legend",
        bg: "details_title_bg_purple"
    }
};

Component({
    properties: {
        xzInfo: {
            type: Object,
            value: {},
            observer: function(e) {
                e && "xz" in e && this.initData(e.xz, e.extend || {}, e.xz_name);
            }
        },
        preMargin: {
            type: String,
            value: "74rpx"
        },
        nextMargin: {
            type: String,
            value: "74rpx"
        },
        tabActColor: {
            type: String,
            value: ""
        },
        tabColor: {
            type: String,
            value: ""
        },
        bgStyle: {
            type: Boolean,
            value: !1
        },
        tabItemStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        typeList: [],
        contentList: [],
        current: 0,
        xz: "",
        xz_name: "",
        act: 0,
        autoplay: !0,
        tab_active_color: "",
        tab_color: ""
    },
    methods: {
        initData: function(t, a, n) {
            var i = Object.keys(a), l = [], r = [];
            (i = 0 === i.length ? [ "personality", "legend", "love", "boy", "girl", "child", "lucky" ] : i).forEach(function(t) {
                l.push({
                    id: t,
                    content: a[t],
                    name: e[t].name,
                    en_name: e[t].en_name,
                    bg: e[t].bg
                }), r.push({
                    id: t,
                    name: e[t].name
                });
            }), this.setData({
                typeList: r,
                contentList: l,
                current: 7 == Object.keys(a).length ? 1 : 2,
                act: 7 == Object.keys(a).length ? 1 : 2,
                xz: t,
                xz_name: n
            });
        },
        essayDetail: function(e) {
            this.triggerEvent("essayDetail", {
                xz: this.data.xz,
                type: e.currentTarget.dataset.id
            });
        },
        chooesExtend: function(e) {
            this.setData({
                current: e.currentTarget.dataset.idx || 0,
                autoplay: !1
            });
        },
        change: function(e) {
            this.setData({
                act: e.detail.current
            });
        },
        finished: function() {
            this.setData({
                autoplay: !0
            });
        }
    }
});