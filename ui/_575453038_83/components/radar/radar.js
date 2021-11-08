var t = {
    p1: [],
    p2: [],
    p3: [],
    p4: [],
    p5: []
}, e = [ 0, 0, 0, 0, 0 ];

Component({
    properties: {
        updatedata: {
            type: Array,
            value: {},
            observer: function(t, e) {
                t && 1 === t.length && "1" == t[0].ustatus ? this._render1(t) : this._render(t);
            }
        },
        usex: {
            type: String,
            value: ""
        },
        ustatus: {
            type: Number,
            value: -1,
            observer: function(t, e) {
                0 === t ? this._render0() : 2 === t && this.setData({
                    g0: !1
                });
            }
        }
    },
    data: {
        list1: [],
        list2: [],
        list3: [],
        list4: [],
        list5: [],
        g1: !1,
        g0: !1,
        one: {}
    },
    attached: function() {},
    detached: function() {
        this.clearData();
    },
    ready: function() {},
    methods: {
        _render: function(t) {
            var e = this;
            0 != t.length ? this.resetData().then(function() {
                var n = e.generateData(e.genrateDetail(t));
                e.setData(n, function() {
                    e.triggerEvent("rendered");
                });
            }) : this.triggerEvent("rendered");
        },
        _render0: function() {
            this.setData({
                g0: !0
            });
        },
        _render1: function(t) {
            var e = this, n = t[0];
            n && this.resetData().then(function() {
                var r, i = [ "", 110, 166, 222, 277, 333 ];
                r = e._getPoint(i[n.type], 0, 0, n.type, 230), n.r = "r" + n.type, n.x = r.x + i[n.type], 
                n.y = r.y + i[n.type], n.r = "r" + t[0].type, e.setData({
                    one: n,
                    g1: !0,
                    g0: !1
                }, function() {});
            });
        },
        _getPoint: function(e, n, r, i, a) {
            var s = t["p" + i], o = (a = a || this._getRandomPoint(s), n + Math.sin(Math.PI / 180 * a) * e), u = r + Math.cos(Math.PI / 180 * a) * e, h = Object.create ? Object.create(null) : {};
            return h.x = o, h.y = u, h;
        },
        _getRandomPoint: function(t) {
            var e = 359 * Math.random();
            if (!(t.length < 359 && t.indexOf(e) > -1)) return e;
            this._getRandomPoint(t);
        },
        editInfo: function() {
            this.triggerEvent("edit");
        },
        generateRadians: function(e) {
            for (var n = [ 3, 5, 7, 9, 11, 14 ], r = 360 / n[e], i = 0; i <= n[e]; i++) t["p" + e].push(r * i);
        },
        showDetail: function(t) {
            this.triggerEvent("showdetail", t.currentTarget.dataset.item);
        },
        genrateDetail: function(t) {
            if (0 == t.length) return [];
            for (var e = [], n = [ "", 110, 166, 222, 277, 333 ], r = 0; r < t.length; r++) e[r] = this._getPoint(n[t[r].type], 0, 0, t[r].type), 
            e[r].id = t[r].id, e[r].sex = t[r].sex, e[r].head = t[r].head, e[r].type = t[r].type, 
            e[r].x += n[t[r].type], e[r].y += n[t[r].type];
            return e;
        },
        generateData: function(t) {
            if (0 != t.length) {
                for (var n = Object.create ? Object.create(null) : {}, r = 0; r < t.length; r++) {
                    var i = t[r].type;
                    n["list" + i + "[" + e[i - 1] + "]"] = t[r], e[i - 1] += 1;
                }
                return n;
            }
        },
        resetData: function() {
            var n = this;
            return t = {
                p1: [],
                p2: [],
                p3: [],
                p4: [],
                p5: []
            }, e = [ 0, 0, 0, 0, 0 ], new Promise(function(r, i) {
                Object.keys(t).forEach(function(e) {
                    t[e] = [];
                }), e = [ 0, 0, 0, 0, 0 ], n.setData({
                    list1: [],
                    list2: [],
                    list3: [],
                    list4: [],
                    list5: []
                }, function() {
                    r();
                });
            });
        },
        clearData: function(n) {
            t = null, e = null;
        },
        showFrGuide: function() {
            this.triggerEvent("shownofrguide");
        },
        oneFrGuide: function(t) {
            this.setData({
                g1: !1
            }), this.triggerEvent("onefrguide");
        }
    }
});