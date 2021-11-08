var n = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/typeof"));

module.exports = function(i) {
    var r = {};
    function e(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return i[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }
    return e.m = i, e.c = r, e.d = function(n, i, r) {
        e.o(n, i) || Object.defineProperty(n, i, {
            enumerable: !0,
            get: r
        });
    }, e.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        });
    }, e.t = function(i, r) {
        if (1 & r && (i = e(i)), 8 & r) return i;
        if (4 & r && "object" === (0, n.default)(i) && i && i.__esModule) return i;
        var o = Object.create(null);
        if (e.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: i
        }), 2 & r && "string" != typeof i) for (var t in i) e.d(o, t, function(n) {
            return i[n];
        }.bind(null, t));
        return o;
    }, e.n = function(n) {
        var i = n && n.__esModule ? function() {
            return n.default;
        } : function() {
            return n;
        };
        return e.d(i, "a", i), i;
    }, e.o = function(n, i) {
        return Object.prototype.hasOwnProperty.call(n, i);
    }, e.p = "", e(e.s = 0);
}([ function(i, r, e) {
    r.__esModule = !0, r.storeBindingsBehavior = void 0;
    var o = "function" == typeof Symbol && "symbol" === (0, n.default)(Symbol.iterator) ? function(i) {
        return (0, n.default)(i);
    } : function(i) {
        return i && "function" == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : (0, 
        n.default)(i);
    };
    r.createStoreBindings = function(n, i) {
        return u(n, i), f(n, i);
    };
    var t = e(1);
    function u(n, i) {
        var r = i.store, e = i.actions;
        if (e) {
            if (void 0 === r) throw new Error("[mobx-miniprogram] no store specified");
            e instanceof Array ? e.forEach(function(i) {
                n[i] = function() {
                    return r[i].apply(r, arguments);
                };
            }) : "object" === (void 0 === e ? "undefined" : o(e)) && Object.keys(e).forEach(function(i) {
                var o = e[i];
                if ("string" != typeof i && "number" != typeof i) throw new Error("[mobx-miniprogram] unrecognized field definition");
                n[i] = function() {
                    return r[o].apply(r, arguments);
                };
            });
        }
    }
    function f(n, i) {
        var r = i.store, e = i.fields, u = null;
        function f() {
            if (null !== u) {
                var i = u;
                u = null, n.setData(i);
            }
        }
        function a(n, i) {
            u || (u = {}, wx.nextTick(f)), u[n] = i;
        }
        var s = [];
        if (e instanceof Array) {
            if (void 0 === r) throw new Error("[mobx-miniprogram] no store specified");
            s = e.map(function(n) {
                return (0, t.reaction)(function() {
                    return r[n];
                }, function(i) {
                    a(n, i);
                }, {
                    fireImmediately: !0
                });
            });
        } else "object" === (void 0 === e ? "undefined" : o(e)) && e && (s = Object.keys(e).map(function(i) {
            var o = e[i];
            if ("function" == typeof o) return (0, t.reaction)(function() {
                return o.call(n, r);
            }, function(n) {
                a(i, n);
            }, {
                fireImmediately: !0
            });
            if ("string" != typeof i && "number" != typeof i) throw new Error("[mobx-miniprogram] unrecognized field definition");
            if (void 0 === r) throw new Error("[mobx-miniprogram] no store specified");
            return (0, t.reaction)(function() {
                return r[o];
            }, function(n) {
                a(String(i), n);
            }, {
                fireImmediately: !0
            });
        }));
        return {
            updateStoreBindings: f,
            destroyStoreBindings: function() {
                s.forEach(function(n) {
                    return n();
                });
            }
        };
    }
    r.storeBindingsBehavior = Behavior({
        definitionFilter: function(n) {
            n.methods || (n.methods = {});
            var i = n.storeBindings;
            n.methods._mobxMiniprogramBindings = function() {
                return i;
            }, i && (Array.isArray(i) ? i.forEach(function(i) {
                u(n.methods, i);
            }) : u(n.methods, i));
        },
        attached: function() {
            if ("function" == typeof this._mobxMiniprogramBindings) {
                var n = this._mobxMiniprogramBindings();
                if (n) if (Array.isArray(n)) {
                    var i = this;
                    this._mobxMiniprogramBindings = n.map(function(n) {
                        return f(i, n);
                    });
                } else this._mobxMiniprogramBindings = f(this, n); else this._mobxMiniprogramBindings = null;
            }
        },
        detached: function() {
            this._mobxMiniprogramBindings && (Array.isArray(this._mobxMiniprogramBindings) ? this._mobxMiniprogramBindings.forEach(function(n) {
                n.destroyStoreBindings();
            }) : this._mobxMiniprogramBindings.destroyStoreBindings());
        },
        methods: {
            updateStoreBindings: function() {
                this._mobxMiniprogramBindings && "function" != typeof this._mobxMiniprogramBindings && (Array.isArray(this._mobxMiniprogramBindings) ? this._mobxMiniprogramBindings.forEach(function(n) {
                    n.updateStoreBindings();
                }) : this._mobxMiniprogramBindings.updateStoreBindings());
            }
        }
    });
}, function(n, i) {
    n.exports = require("mobx-miniprogram");
} ]);