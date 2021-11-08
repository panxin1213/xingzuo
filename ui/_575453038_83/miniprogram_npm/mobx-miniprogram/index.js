var e = require("../../@babel/runtime/helpers/interopRequireDefault");

require("../../@babel/runtime/helpers/Objectentries");

var t = e(require("../../@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function(e, t) {
    return (n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    })(e, t);
};

function r(e, t) {
    function r() {
        this.constructor = e;
    }
    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, 
    new r());
}

var o = function() {
    return (o = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
    }).apply(this, arguments);
};

function i(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r, o, i = n.call(e), a = [];
    try {
        for (;(void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
    } catch (e) {
        o = {
            error: e
        };
    } finally {
        try {
            r && !r.done && (n = i.return) && n.call(i);
        } finally {
            if (o) throw o.error;
        }
    }
    return a;
}

function a() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
    return e;
}

var s = [];

Object.freeze(s);

var u = {};

function c() {
    return "undefined" != typeof window ? window : global;
}

function l() {
    return ++ke.mobxGuid;
}

function p(e) {
    throw f(!1, e), "X";
}

function f(e, t) {
    if (!e) throw new Error("[mobx] " + (t || "An invariant failed, however the error is obfuscated because this is an production build."));
}

Object.freeze(u);

function h(e) {
    var t = !1;
    return function() {
        if (!t) return t = !0, e.apply(this, arguments);
    };
}

var v = function() {};

function d(e) {
    return null !== e && "object" == (0, t.default)(e);
}

function y(e) {
    if (null === e || "object" != (0, t.default)(e)) return !1;
    var n = Object.getPrototypeOf(e);
    return n === Object.prototype || null === n;
}

function b(e, t, n) {
    Object.defineProperty(e, t, {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: n
    });
}

function m(e, t, n) {
    Object.defineProperty(e, t, {
        enumerable: !1,
        writable: !1,
        configurable: !0,
        value: n
    });
}

function g(e, t) {
    var n = "isMobX" + e;
    return t.prototype[n] = !0, function(e) {
        return d(e) && !0 === e[n];
    };
}

function x(e) {
    return void 0 !== c().Map && e instanceof c().Map;
}

function _(e) {
    return e instanceof Set;
}

function O(e) {
    for (var t = []; ;) {
        var n = e.next();
        if (n.done) break;
        t.push(n.value);
    }
    return t;
}

function w() {
    return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive";
}

function S(e) {
    return null === e ? null : "object" == (0, t.default)(e) ? "" + e : e;
}

function A() {
    return "function" == typeof Symbol && Symbol.iterator || "@@iterator";
}

function E(e, t) {
    m(e, A(), t);
}

function D(e) {
    return e[A()] = k, e;
}

function j() {
    return "function" == typeof Symbol && Symbol.toStringTag || "@@toStringTag";
}

function k() {
    return this;
}

var T = function() {
    function e(e) {
        void 0 === e && (e = "Atom@" + l()), this.name = e, this.isPendingUnobservation = !1, 
        this.isBeingObserved = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, 
        this.lastAccessedBy = 0, this.lowestObserverState = exports.IDerivationState.NOT_TRACKING;
    }
    return e.prototype.onBecomeUnobserved = function() {}, e.prototype.onBecomeObserved = function() {}, 
    e.prototype.reportObserved = function() {
        return Re(this);
    }, e.prototype.reportChanged = function() {
        Ve(), function(e) {
            if (e.lowestObserverState !== exports.IDerivationState.STALE) {
                e.lowestObserverState = exports.IDerivationState.STALE;
                for (var t = e.observers, n = t.length; n--; ) {
                    var r = t[n];
                    r.dependenciesState === exports.IDerivationState.UP_TO_DATE && (r.isTracing !== fe.NONE && Pe(r, e), 
                    r.onBecomeStale()), r.dependenciesState = exports.IDerivationState.STALE;
                }
            }
        }(this), Ne();
    }, e.prototype.toString = function() {
        return this.name;
    }, e;
}(), I = g("Atom", T);

function C(e, t, n) {
    void 0 === t && (t = v), void 0 === n && (n = v);
    var r = new T(e);
    return nt(r, t), rt(r, n), r;
}

function V(e, t) {
    return e === t;
}

var N = {
    identity: V,
    structural: function(e, t) {
        return an(e, t);
    },
    default: function(e, t) {
        return function(e, t) {
            return "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t);
        }(e, t) || V(e, t);
    }
}, R = {}, P = {};

function L(e, t) {
    var n = t ? R : P;
    return n[e] || (n[e] = {
        configurable: !0,
        enumerable: t,
        get: function() {
            return B(this), this[e];
        },
        set: function(t) {
            B(this), this[e] = t;
        }
    });
}

function B(e) {
    if (!0 !== e.__mobxDidRunLazyInitializers) {
        var t = e.__mobxDecorators;
        if (t) for (var n in b(e, "__mobxDidRunLazyInitializers", !0), t) {
            var r = t[n];
            r.propertyCreator(e, r.prop, r.descriptor, r.decoratorTarget, r.decoratorArguments);
        }
    }
}

function $(e, t) {
    return function() {
        var n, r = function(r, i, a, s) {
            if (!0 === s) return t(r, i, a, r, n), null;
            if (!Object.prototype.hasOwnProperty.call(r, "__mobxDecorators")) {
                var u = r.__mobxDecorators;
                b(r, "__mobxDecorators", o({}, u));
            }
            return r.__mobxDecorators[i] = {
                prop: i,
                propertyCreator: t,
                descriptor: a,
                decoratorTarget: r,
                decoratorArguments: n
            }, L(i, e);
        };
        return M(arguments) ? (n = s, r.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), 
        r);
    };
}

function M(e) {
    return (2 === e.length || 3 === e.length) && "string" == typeof e[1] || 4 === e.length && !0 === e[3];
}

function U(e, t, n) {
    return ht(e) ? e : Array.isArray(e) ? Z.array(e, {
        name: n
    }) : y(e) ? Z.object(e, void 0, {
        name: n
    }) : x(e) ? Z.map(e, {
        name: n
    }) : _(e) ? Z.set(e, {
        name: n
    }) : e;
}

function G(e) {
    return e;
}

function H(e) {
    var t = $(!0, function(t, n, r, o, i) {
        Xt(t, n, r ? r.initializer ? r.initializer.call(t) : r.value : void 0, e);
    }), n = ("undefined" != typeof process && process.env, t);
    return n.enhancer = e, n;
}

var K = {
    deep: !0,
    name: void 0,
    defaultDecorator: void 0
}, q = {
    deep: !1,
    name: void 0,
    defaultDecorator: void 0
};

function z(e) {
    return null == e ? K : "string" == typeof e ? {
        name: e,
        deep: !0
    } : e;
}

function W(e) {
    return e.defaultDecorator ? e.defaultDecorator.enhancer : !1 === e.deep ? G : U;
}

Object.freeze(K), Object.freeze(q);

var J = H(U), X = H(function(e, t, n) {
    return null == e || en(e) || $t(e) || Ht(e) || zt(e) ? e : Array.isArray(e) ? Z.array(e, {
        name: n,
        deep: !1
    }) : y(e) ? Z.object(e, void 0, {
        name: n,
        deep: !1
    }) : x(e) ? Z.map(e, {
        name: n,
        deep: !1
    }) : _(e) ? Z.set(e, {
        name: n,
        deep: !1
    }) : p(!1);
}), Y = H(G), F = H(function(e, t, n) {
    return an(e, t) ? t : e;
});

var Q = {
    box: function(e, t) {
        arguments.length > 2 && ee("box");
        var n = z(t);
        return new ce(e, W(n), n.name, !0, n.equals);
    },
    shallowBox: function(e, t) {
        return arguments.length > 2 && ee("shallowBox"), Z.box(e, {
            name: t,
            deep: !1
        });
    },
    array: function(e, t) {
        arguments.length > 2 && ee("array");
        var n = z(t);
        return new Vt(e, W(n), n.name);
    },
    shallowArray: function(e, t) {
        return arguments.length > 2 && ee("shallowArray"), Z.array(e, {
            name: t,
            deep: !1
        });
    },
    map: function(e, t) {
        arguments.length > 2 && ee("map");
        var n = z(t);
        return new Ut(e, W(n), n.name);
    },
    shallowMap: function(e, t) {
        return arguments.length > 2 && ee("shallowMap"), Z.map(e, {
            name: t,
            deep: !1
        });
    },
    set: function(e, t) {
        arguments.length > 2 && ee("set");
        var n = z(t);
        return new qt(e, W(n), n.name);
    },
    object: function(e, t, n) {
        return "string" == typeof arguments[1] && ee("object"), it({}, e, t, z(n));
    },
    shallowObject: function(e, t) {
        return "string" == typeof arguments[1] && ee("shallowObject"), Z.object(e, {}, {
            name: t,
            deep: !1
        });
    },
    ref: Y,
    shallow: X,
    deep: J,
    struct: F
}, Z = function(e, t, n) {
    if ("string" == typeof arguments[1]) return J.apply(null, arguments);
    if (ht(e)) return e;
    var r = y(e) ? Z.object(e, t, n) : Array.isArray(e) ? Z.array(e, t) : x(e) ? Z.map(e, t) : _(e) ? Z.set(e, t) : e;
    if (r !== e) return r;
    p(!1);
};

function ee(e) {
    p("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?");
}

Object.keys(Q).forEach(function(e) {
    return Z[e] = Q[e];
});

var te = $(!1, function(e, t, n, r, i) {
    var a = n.get, s = n.set, u = i[0] || {};
    !function(e, t, n) {
        var r = Jt(e);
        n.name = r.name + "." + t, n.context = e, r.values[t] = new pe(n), Object.defineProperty(e, t, function(e) {
            return Ft[e] || (Ft[e] = {
                configurable: ke.computedConfigurable,
                enumerable: !1,
                get: function() {
                    return Qt(this).read(this, e);
                },
                set: function(t) {
                    Qt(this).write(this, e, t);
                }
            });
        }(t));
    }(e, t, o({
        get: a,
        set: s
    }, u));
}), ne = te({
    equals: N.structural
}), re = function(e, n, r) {
    if ("string" == typeof n) return te.apply(null, arguments);
    if (null !== e && "object" == (0, t.default)(e) && 1 === arguments.length) return te.apply(null, arguments);
    var o = "object" == (0, t.default)(n) ? n : {};
    return o.get = e, o.set = "function" == typeof n ? n : o.set, o.name = o.name || e.name || "", 
    new pe(o);
};

function oe(e, t) {
    var n = function() {
        return ie(e, t, this, arguments);
    };
    return n.isMobxAction = !0, n;
}

function ie(e, t, n, r) {
    var o = function(e, t, n, r) {
        var o = Ge() && !!e, i = 0;
        if (o) {
            i = Date.now();
            var a = r && r.length || 0, s = new Array(a);
            if (a > 0) for (var u = 0; u < a; u++) s[u] = r[u];
            Ke({
                type: "action",
                name: e,
                object: n,
                arguments: s
            });
        }
        var c = Oe();
        return Ve(), {
            prevDerivation: c,
            prevAllowStateChanges: se(!0),
            notifySpy: o,
            startTime: i
        };
    }(e, 0, n, r), i = !0;
    try {
        var a = t.apply(n, r);
        return i = !1, a;
    } finally {
        i ? (ke.suppressReactionErrors = i, ae(o), ke.suppressReactionErrors = !1) : ae(o);
    }
}

function ae(e) {
    ue(e.prevAllowStateChanges), Ne(), we(e.prevDerivation), e.notifySpy && ze({
        time: Date.now() - e.startTime
    });
}

function se(e) {
    var t = ke.allowStateChanges;
    return ke.allowStateChanges = e, t;
}

function ue(e) {
    ke.allowStateChanges = e;
}

re.struct = ne;

var ce = function(e) {
    function t(t, n, r, o, i) {
        void 0 === r && (r = "ObservableValue@" + l()), void 0 === o && (o = !0), void 0 === i && (i = N.default);
        var a = e.call(this, r) || this;
        return a.enhancer = n, a.name = r, a.equals = i, a.hasUnreportedChange = !1, a.value = n(t, void 0, r), 
        o && Ge() && He({
            type: "create",
            name: a.name,
            newValue: "" + a.value
        }), a;
    }
    return r(t, e), t.prototype.dehanceValue = function(e) {
        return void 0 !== this.dehancer ? this.dehancer(e) : e;
    }, t.prototype.set = function(e) {
        var t = this.value;
        if ((e = this.prepareNewValue(e)) !== ke.UNCHANGED) {
            var n = Ge();
            n && Ke({
                type: "update",
                name: this.name,
                newValue: e,
                oldValue: t
            }), this.setNewValue(e), n && ze();
        }
    }, t.prototype.prepareNewValue = function(e) {
        if (me(this), wt(this)) {
            var t = At(this, {
                object: this,
                type: "update",
                newValue: e
            });
            if (!t) return ke.UNCHANGED;
            e = t.newValue;
        }
        return e = this.enhancer(e, this.value, this.name), this.equals(this.value, e) ? ke.UNCHANGED : e;
    }, t.prototype.setNewValue = function(e) {
        var t = this.value;
        this.value = e, this.reportChanged(), Et(this) && jt(this, {
            type: "update",
            object: this,
            newValue: e,
            oldValue: t
        });
    }, t.prototype.get = function() {
        return this.reportObserved(), this.dehanceValue(this.value);
    }, t.prototype.intercept = function(e) {
        return St(this, e);
    }, t.prototype.observe = function(e, t) {
        return t && e({
            object: this,
            type: "update",
            newValue: this.value,
            oldValue: void 0
        }), Dt(this, e);
    }, t.prototype.toJSON = function() {
        return this.get();
    }, t.prototype.toString = function() {
        return this.name + "[" + this.value + "]";
    }, t.prototype.valueOf = function() {
        return S(this.get());
    }, t;
}(T);

ce.prototype[w()] = ce.prototype.valueOf;

var le = g("ObservableValue", ce), pe = function() {
    function e(e) {
        this.dependenciesState = exports.IDerivationState.NOT_TRACKING, this.observing = [], 
        this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, 
        this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.runId = 0, 
        this.lastAccessedBy = 0, this.lowestObserverState = exports.IDerivationState.UP_TO_DATE, 
        this.unboundDepsCount = 0, this.__mapid = "#" + l(), this.value = new de(null), 
        this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = fe.NONE, this.derivation = e.get, 
        this.name = e.name || "ComputedValue@" + l(), e.set && (this.setter = oe(this.name + "-setter", e.set)), 
        this.equals = e.equals || (e.compareStructural || e.struct ? N.structural : N.default), 
        this.scope = e.context, this.requiresReaction = !!e.requiresReaction, this.keepAlive = !!e.keepAlive;
    }
    return e.prototype.onBecomeStale = function() {
        !function(e) {
            if (e.lowestObserverState === exports.IDerivationState.UP_TO_DATE) {
                e.lowestObserverState = exports.IDerivationState.POSSIBLY_STALE;
                for (var t = e.observers, n = t.length; n--; ) {
                    var r = t[n];
                    r.dependenciesState === exports.IDerivationState.UP_TO_DATE && (r.dependenciesState = exports.IDerivationState.POSSIBLY_STALE, 
                    r.isTracing !== fe.NONE && Pe(r, e), r.onBecomeStale());
                }
            }
        }(this);
    }, e.prototype.onBecomeUnobserved = function() {}, e.prototype.onBecomeObserved = function() {}, 
    e.prototype.get = function() {
        this.isComputing && p("Cycle detected in computation " + this.name + ": " + this.derivation), 
        0 !== ke.inBatch || 0 !== this.observers.length || this.keepAlive ? (Re(this), be(this) && this.trackAndCompute() && function(e) {
            if (e.lowestObserverState !== exports.IDerivationState.STALE) {
                e.lowestObserverState = exports.IDerivationState.STALE;
                for (var t = e.observers, n = t.length; n--; ) {
                    var r = t[n];
                    r.dependenciesState === exports.IDerivationState.POSSIBLY_STALE ? r.dependenciesState = exports.IDerivationState.STALE : r.dependenciesState === exports.IDerivationState.UP_TO_DATE && (e.lowestObserverState = exports.IDerivationState.UP_TO_DATE);
                }
            }
        }(this)) : be(this) && (this.warnAboutUntrackedRead(), Ve(), this.value = this.computeValue(!1), 
        Ne());
        var e = this.value;
        if (ye(e)) throw e.cause;
        return e;
    }, e.prototype.peek = function() {
        var e = this.computeValue(!1);
        if (ye(e)) throw e.cause;
        return e;
    }, e.prototype.set = function(e) {
        if (this.setter) {
            f(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), 
            this.isRunningSetter = !0;
            try {
                this.setter.call(this.scope, e);
            } finally {
                this.isRunningSetter = !1;
            }
        } else f(!1, !1);
    }, e.prototype.trackAndCompute = function() {
        Ge() && He({
            object: this.scope,
            type: "compute",
            name: this.name
        });
        var e = this.value, t = this.dependenciesState === exports.IDerivationState.NOT_TRACKING, n = this.computeValue(!0), r = t || ye(e) || ye(n) || !this.equals(e, n);
        return r && (this.value = n), r;
    }, e.prototype.computeValue = function(e) {
        var t;
        if (this.isComputing = !0, ke.computationDepth++, e) t = ge(this, this.derivation, this.scope); else if (!0 === ke.disableErrorBoundaries) t = this.derivation.call(this.scope); else try {
            t = this.derivation.call(this.scope);
        } catch (e) {
            t = new de(e);
        }
        return ke.computationDepth--, this.isComputing = !1, t;
    }, e.prototype.suspend = function() {
        this.keepAlive || (xe(this), this.value = void 0);
    }, e.prototype.observe = function(e, t) {
        var n = this, r = !0, o = void 0;
        return Ze(function() {
            var i = n.get();
            if (!r || t) {
                var a = Oe();
                e({
                    type: "update",
                    object: n,
                    newValue: i,
                    oldValue: o
                }), we(a);
            }
            r = !1, o = i;
        });
    }, e.prototype.warnAboutUntrackedRead = function() {}, e.prototype.toJSON = function() {
        return this.get();
    }, e.prototype.toString = function() {
        return this.name + "[" + this.derivation.toString() + "]";
    }, e.prototype.valueOf = function() {
        return S(this.get());
    }, e;
}();

pe.prototype[w()] = pe.prototype.valueOf;

var fe, he, ve = g("ComputedValue", pe);

(he = exports.IDerivationState || (exports.IDerivationState = {}))[he.NOT_TRACKING = -1] = "NOT_TRACKING", 
he[he.UP_TO_DATE = 0] = "UP_TO_DATE", he[he.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", 
he[he.STALE = 2] = "STALE", function(e) {
    e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
}(fe || (fe = {}));

var de = function(e) {
    this.cause = e;
};

function ye(e) {
    return e instanceof de;
}

function be(e) {
    switch (e.dependenciesState) {
      case exports.IDerivationState.UP_TO_DATE:
        return !1;

      case exports.IDerivationState.NOT_TRACKING:
      case exports.IDerivationState.STALE:
        return !0;

      case exports.IDerivationState.POSSIBLY_STALE:
        for (var t = Oe(), n = e.observing, r = n.length, o = 0; o < r; o++) {
            var i = n[o];
            if (ve(i)) {
                if (ke.disableErrorBoundaries) i.get(); else try {
                    i.get();
                } catch (e) {
                    return we(t), !0;
                }
                if (e.dependenciesState === exports.IDerivationState.STALE) return we(t), !0;
            }
        }
        return Se(e), we(t), !1;
    }
}

function me(e) {
    var t = e.observers.length > 0;
    ke.computationDepth > 0 && t && p(!1), ke.allowStateChanges || !t && "strict" !== ke.enforceActions || p(!1);
}

function ge(e, t, n) {
    Se(e), e.newObserving = new Array(e.observing.length + 100), e.unboundDepsCount = 0, 
    e.runId = ++ke.runId;
    var r, o = ke.trackingDerivation;
    if (ke.trackingDerivation = e, !0 === ke.disableErrorBoundaries) r = t.call(n); else try {
        r = t.call(n);
    } catch (e) {
        r = new de(e);
    }
    return ke.trackingDerivation = o, function(e) {
        for (var t = e.observing, n = e.observing = e.newObserving, r = exports.IDerivationState.UP_TO_DATE, o = 0, i = e.unboundDepsCount, a = 0; a < i; a++) 0 === (s = n[a]).diffValue && (s.diffValue = 1, 
        o !== a && (n[o] = s), o++), s.dependenciesState > r && (r = s.dependenciesState);
        for (n.length = o, e.newObserving = null, i = t.length; i--; ) 0 === (s = t[i]).diffValue && Ie(s, e), 
        s.diffValue = 0;
        for (;o--; ) {
            var s;
            1 === (s = n[o]).diffValue && (s.diffValue = 0, Te(s, e));
        }
        r !== exports.IDerivationState.UP_TO_DATE && (e.dependenciesState = r, e.onBecomeStale());
    }(e), r;
}

function xe(e) {
    var t = e.observing;
    e.observing = [];
    for (var n = t.length; n--; ) Ie(t[n], e);
    e.dependenciesState = exports.IDerivationState.NOT_TRACKING;
}

function _e(e) {
    var t = Oe(), n = e();
    return we(t), n;
}

function Oe() {
    var e = ke.trackingDerivation;
    return ke.trackingDerivation = null, e;
}

function we(e) {
    ke.trackingDerivation = e;
}

function Se(e) {
    if (e.dependenciesState !== exports.IDerivationState.UP_TO_DATE) {
        e.dependenciesState = exports.IDerivationState.UP_TO_DATE;
        for (var t = e.observing, n = t.length; n--; ) t[n].lowestObserverState = exports.IDerivationState.UP_TO_DATE;
    }
}

var Ae = [ "mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "disableErrorBoundaries", "runId", "UNCHANGED" ], Ee = function() {
    this.version = 5, this.UNCHANGED = {}, this.trackingDerivation = null, this.computationDepth = 0, 
    this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], 
    this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, 
    this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], 
    this.computedRequiresReaction = !1, this.computedConfigurable = !1, this.disableErrorBoundaries = !1, 
    this.suppressReactionErrors = !1;
}, De = !0, je = !1, ke = function() {
    var e = c();
    return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (De = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new Ee().version && (De = !1), 
    De ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), 
    e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new Ee()) : (setTimeout(function() {
        je || p("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
    }, 1), new Ee());
}();

function Te(e, t) {
    var n = e.observers.length;
    n && (e.observersIndexes[t.__mapid] = n), e.observers[n] = t, e.lowestObserverState > t.dependenciesState && (e.lowestObserverState = t.dependenciesState);
}

function Ie(e, t) {
    if (1 === e.observers.length) e.observers.length = 0, Ce(e); else {
        var n = e.observers, r = e.observersIndexes, o = n.pop();
        if (o !== t) {
            var i = r[t.__mapid] || 0;
            i ? r[o.__mapid] = i : delete r[o.__mapid], n[i] = o;
        }
        delete r[t.__mapid];
    }
}

function Ce(e) {
    !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, ke.pendingUnobservations.push(e));
}

function Ve() {
    ke.inBatch++;
}

function Ne() {
    if (0 == --ke.inBatch) {
        $e();
        for (var e = ke.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            n.isPendingUnobservation = !1, 0 === n.observers.length && (n.isBeingObserved && (n.isBeingObserved = !1, 
            n.onBecomeUnobserved()), n instanceof pe && n.suspend());
        }
        ke.pendingUnobservations = [];
    }
}

function Re(e) {
    var t = ke.trackingDerivation;
    return null !== t ? (t.runId !== e.lastAccessedBy && (e.lastAccessedBy = t.runId, 
    t.newObserving[t.unboundDepsCount++] = e, e.isBeingObserved || (e.isBeingObserved = !0, 
    e.onBecomeObserved())), !0) : (0 === e.observers.length && ke.inBatch > 0 && Ce(e), 
    !1);
}

function Pe(e, t) {
    if (console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'"), 
    e.isTracing === fe.BREAK) {
        var n = [];
        (function e(t, n, r) {
            n.length >= 1e3 ? n.push("(and many more)") : (n.push("" + new Array(r).join("\t") + t.name), 
            t.dependencies && t.dependencies.forEach(function(t) {
                return e(t, n, r + 1);
            }));
        })(at(e), n, 1), new Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof pe ? e.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")();
    }
}

var Le = function() {
    function e(e, t, n) {
        void 0 === e && (e = "Reaction@" + l()), this.name = e, this.onInvalidate = t, this.errorHandler = n, 
        this.observing = [], this.newObserving = [], this.dependenciesState = exports.IDerivationState.NOT_TRACKING, 
        this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + l(), 
        this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, 
        this.isTracing = fe.NONE;
    }
    return e.prototype.onBecomeStale = function() {
        this.schedule();
    }, e.prototype.schedule = function() {
        this._isScheduled || (this._isScheduled = !0, ke.pendingReactions.push(this), $e());
    }, e.prototype.isScheduled = function() {
        return this._isScheduled;
    }, e.prototype.runReaction = function() {
        if (!this.isDisposed) {
            if (Ve(), this._isScheduled = !1, be(this)) {
                this._isTrackPending = !0;
                try {
                    this.onInvalidate(), this._isTrackPending && Ge() && He({
                        name: this.name,
                        type: "scheduled-reaction"
                    });
                } catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            Ne();
        }
    }, e.prototype.track = function(e) {
        Ve();
        var t, n = Ge();
        n && (t = Date.now(), Ke({
            name: this.name,
            type: "reaction"
        })), this._isRunning = !0;
        var r = ge(this, e, void 0);
        this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && xe(this), ye(r) && this.reportExceptionInDerivation(r.cause), 
        n && ze({
            time: Date.now() - t
        }), Ne();
    }, e.prototype.reportExceptionInDerivation = function(e) {
        var t = this;
        if (this.errorHandler) this.errorHandler(e, this); else {
            if (ke.disableErrorBoundaries) throw e;
            var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
            ke.suppressReactionErrors ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)") : console.error(n, e), 
            Ge() && He({
                type: "error",
                name: this.name,
                message: n,
                error: "" + e
            }), ke.globalReactionErrorHandlers.forEach(function(n) {
                return n(e, t);
            });
        }
    }, e.prototype.dispose = function() {
        this.isDisposed || (this.isDisposed = !0, this._isRunning || (Ve(), xe(this), Ne()));
    }, e.prototype.getDisposer = function() {
        var e = this.dispose.bind(this);
        return e.$mobx = this, e;
    }, e.prototype.toString = function() {
        return "Reaction[" + this.name + "]";
    }, e.prototype.trace = function(e) {
        void 0 === e && (e = !1), mt(this, e);
    }, e;
}();

var Be = function(e) {
    return e();
};

function $e() {
    ke.inBatch > 0 || ke.isRunningReactions || Be(Me);
}

function Me() {
    ke.isRunningReactions = !0;
    for (var e = ke.pendingReactions, t = 0; e.length > 0; ) {
        100 == ++t && (console.error("Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + e[0]), 
        e.splice(0));
        for (var n = e.splice(0), r = 0, o = n.length; r < o; r++) n[r].runReaction();
    }
    ke.isRunningReactions = !1;
}

var Ue = g("Reaction", Le);

function Ge() {
    return !!ke.spyListeners.length;
}

function He(e) {
    if (ke.spyListeners.length) for (var t = ke.spyListeners, n = 0, r = t.length; n < r; n++) t[n](e);
}

function Ke(e) {
    He(o({}, e, {
        spyReportStart: !0
    }));
}

var qe = {
    spyReportEnd: !0
};

function ze(e) {
    He(e ? o({}, e, {
        spyReportEnd: !0
    }) : qe);
}

function We(e) {
    return ke.spyListeners.push(e), h(function() {
        ke.spyListeners = ke.spyListeners.filter(function(t) {
            return t !== e;
        });
    });
}

function Je() {
    p(!1);
}

function Xe(e) {
    return function(t, n, r) {
        if (r) {
            if (r.value) return {
                value: oe(e, r.value),
                enumerable: !1,
                configurable: !0,
                writable: !0
            };
            var o = r.initializer;
            return {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                initializer: function() {
                    return oe(e, o.call(this));
                }
            };
        }
        return Ye(e).apply(this, arguments);
    };
}

function Ye(e) {
    return function(t, n, r) {
        Object.defineProperty(t, n, {
            configurable: !0,
            enumerable: !1,
            get: function() {},
            set: function(t) {
                b(this, n, Fe(e, t));
            }
        });
    };
}

var Fe = function(e, t, n, r) {
    return 1 === arguments.length && "function" == typeof e ? oe(e.name || "<unnamed action>", e) : 2 === arguments.length && "function" == typeof t ? oe(e, t) : 1 === arguments.length && "string" == typeof e ? Xe(e) : !0 !== r ? Xe(t).apply(null, arguments) : void (e[t] = oe(e.name || t, n.value));
};

function Qe(e, t, n) {
    b(e, t, oe(t, n.bind(e)));
}

function Ze(e, t) {
    void 0 === t && (t = u);
    var n, r = t && t.name || e.name || "Autorun@" + l();
    if (t.scheduler || t.delay) {
        var o = tt(t), i = !1;
        n = new Le(r, function() {
            i || (i = !0, o(function() {
                i = !1, n.isDisposed || n.track(a);
            }));
        }, t.onError);
    } else n = new Le(r, function() {
        this.track(a);
    }, t.onError);
    function a() {
        e(n);
    }
    return n.schedule(), n.getDisposer();
}

Fe.bound = function(e, t, n, r) {
    return !0 === r ? (Qe(e, t, n.value), null) : n ? {
        configurable: !0,
        enumerable: !1,
        get: function() {
            return Qe(this, t, n.value || n.initializer.call(this)), this[t];
        },
        set: Je
    } : {
        enumerable: !1,
        configurable: !0,
        set: function(e) {
            Qe(this, t, e);
        },
        get: function() {}
    };
};

var et = function(e) {
    return e();
};

function tt(e) {
    return e.scheduler ? e.scheduler : e.delay ? function(t) {
        return setTimeout(t, e.delay);
    } : et;
}

function nt(e, t, n) {
    return ot("onBecomeObserved", e, t, n);
}

function rt(e, t, n) {
    return ot("onBecomeUnobserved", e, t, n);
}

function ot(e, t, n, r) {
    var o = "string" == typeof n ? tn(t, n) : tn(t), i = "string" == typeof n ? r : n, a = o[e];
    return "function" != typeof a ? p(!1) : (o[e] = function() {
        a.call(this), i.call(this);
    }, function() {
        o[e] = a;
    });
}

function it(e, t, n, r) {
    var o = (r = z(r)).defaultDecorator || (!1 === r.deep ? Y : J);
    B(e), Jt(e, r.name, o.enhancer), Ve();
    try {
        for (var i in t) {
            var a = Object.getOwnPropertyDescriptor(t, i), s = (n && i in n ? n[i] : a.get ? te : o)(e, i, a, !0);
            s && Object.defineProperty(e, i, s);
        }
    } finally {
        Ne();
    }
    return e;
}

function at(e, t) {
    return st(tn(e, t));
}

function st(e) {
    var t = {
        name: e.name
    };
    return e.observing && e.observing.length > 0 && (t.dependencies = function(e) {
        var t = [];
        return e.forEach(function(e) {
            -1 === t.indexOf(e) && t.push(e);
        }), t;
    }(e.observing).map(st)), t;
}

function ut(e) {
    var t = {
        name: e.name
    };
    return function(e) {
        return e.observers && e.observers.length > 0;
    }(e) && (t.observers = function(e) {
        return e.observers;
    }(e).map(ut)), t;
}

var ct = 0;

function lt(e) {
    "function" == typeof e.cancel && e.cancel();
}

function pt(e, t) {
    if (null == e) return !1;
    if (void 0 !== t) {
        if (!1 === en(e)) return !1;
        if (!e.$mobx.values[t]) return !1;
        var n = tn(e, t);
        return ve(n);
    }
    return ve(e);
}

function ft(e, t) {
    if (null == e) return !1;
    if (void 0 !== t) {
        if (en(e)) {
            var n = e.$mobx;
            return n.values && !!n.values[t];
        }
        return !1;
    }
    return en(e) || !!e.$mobx || I(e) || Ue(e) || ve(e);
}

function ht(e) {
    return 1 !== arguments.length && p(!1), ft(e);
}

function vt(e) {
    return en(e) ? e.$mobx.getKeys() : Ht(e) ? e._keys.slice() : zt(e) ? O(e.keys()) : $t(e) ? e.map(function(e, t) {
        return t;
    }) : p(!1);
}

function dt(e, t) {
    if (en(e)) {
        var n = nn(e);
        return n.getKeys(), !!n.values[t];
    }
    return Ht(e) || zt(e) ? e.has(t) : $t(e) ? t >= 0 && t < e.length : p(!1);
}

var yt = {
    detectCycles: !0,
    exportMapsAsObjects: !0,
    recurseEverything: !1
};

function bt(e, t, n, r) {
    return r.detectCycles && e.set(t, n), n;
}

function mt() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = !1;
    "boolean" == typeof e[e.length - 1] && (n = e.pop());
    var r = gt(e);
    if (!r) return p(!1);
    r.isTracing === fe.NONE && console.log("[mobx.trace] '" + r.name + "' tracing enabled"), 
    r.isTracing = n ? fe.BREAK : fe.LOG;
}

function gt(e) {
    switch (e.length) {
      case 0:
        return ke.trackingDerivation;

      case 1:
        return tn(e[0]);

      case 2:
        return tn(e[0], e[1]);
    }
}

function xt(e, t) {
    void 0 === t && (t = void 0), Ve();
    try {
        return e.apply(t);
    } finally {
        Ne();
    }
}

function _t(e, t, n) {
    var r;
    "number" == typeof n.timeout && (r = setTimeout(function() {
        if (!i.$mobx.isDisposed) {
            i();
            var e = new Error("WHEN_TIMEOUT");
            if (!n.onError) throw e;
            n.onError(e);
        }
    }, n.timeout)), n.name = n.name || "When@" + l();
    var o = oe(n.name + "-effect", t), i = Ze(function(t) {
        e() && (t.dispose(), r && clearTimeout(r), o());
    }, n);
    return i;
}

function Ot(e, t) {
    var n, r = new Promise(function(r, i) {
        var a = _t(e, r, o({}, t, {
            onError: i
        }));
        n = function() {
            a(), i("WHEN_CANCELLED");
        };
    });
    return r.cancel = n, r;
}

function wt(e) {
    return void 0 !== e.interceptors && e.interceptors.length > 0;
}

function St(e, t) {
    var n = e.interceptors || (e.interceptors = []);
    return n.push(t), h(function() {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
    });
}

function At(e, t) {
    var n = Oe();
    try {
        var r = e.interceptors;
        if (r) for (var o = 0, i = r.length; o < i && (f(!(t = r[o](t)) || t.type, "Intercept handlers should return nothing or a change object"), 
        t); o++) ;
        return t;
    } finally {
        we(n);
    }
}

function Et(e) {
    return void 0 !== e.changeListeners && e.changeListeners.length > 0;
}

function Dt(e, t) {
    var n = e.changeListeners || (e.changeListeners = []);
    return n.push(t), h(function() {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
    });
}

function jt(e, t) {
    var n = Oe(), r = e.changeListeners;
    if (r) {
        for (var o = 0, i = (r = r.slice()).length; o < i; o++) r[o](t);
        we(n);
    }
}

var kt = function() {
    var e = !1, t = {};
    return Object.defineProperty(t, "0", {
        set: function() {
            e = !0;
        }
    }), Object.create(t)[0] = 1, !1 === e;
}(), Tt = 0, It = function() {};

(function(e, t) {
    void 0 !== Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : void 0 !== e.prototype.__proto__ ? e.prototype.__proto__ = t : e.prototype = t;
})(It, Array.prototype), Object.isFrozen(Array) && [ "constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort" ].forEach(function(e) {
    Object.defineProperty(It.prototype, e, {
        configurable: !0,
        writable: !0,
        value: Array.prototype[e]
    });
});

var Ct = function() {
    function e(e, t, n, r) {
        this.array = n, this.owned = r, this.values = [], this.lastKnownLength = 0, this.atom = new T(e || "ObservableArray@" + l()), 
        this.enhancer = function(n, r) {
            return t(n, r, e + "[..]");
        };
    }
    return e.prototype.dehanceValue = function(e) {
        return void 0 !== this.dehancer ? this.dehancer(e) : e;
    }, e.prototype.dehanceValues = function(e) {
        return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e;
    }, e.prototype.intercept = function(e) {
        return St(this, e);
    }, e.prototype.observe = function(e, t) {
        return void 0 === t && (t = !1), t && e({
            object: this.array,
            type: "splice",
            index: 0,
            added: this.values.slice(),
            addedCount: this.values.length,
            removed: [],
            removedCount: 0
        }), Dt(this, e);
    }, e.prototype.getArrayLength = function() {
        return this.atom.reportObserved(), this.values.length;
    }, e.prototype.setArrayLength = function(e) {
        if ("number" != typeof e || e < 0) throw new Error("[mobx.array] Out of range: " + e);
        var t = this.values.length;
        if (e !== t) if (e > t) {
            for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
            this.spliceWithArray(t, 0, n);
        } else this.spliceWithArray(e, t - e);
    }, e.prototype.updateArrayLength = function(e, t) {
        if (e !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += t, t > 0 && e + t + 1 > Tt && Lt(e + t + 1);
    }, e.prototype.spliceWithArray = function(e, t, n) {
        var r = this;
        me(this.atom);
        var o = this.values.length;
        if (void 0 === e ? e = 0 : e > o ? e = o : e < 0 && (e = Math.max(0, o + e)), t = 1 === arguments.length ? o - e : null == t ? 0 : Math.max(0, Math.min(t, o - e)), 
        void 0 === n && (n = s), wt(this)) {
            var i = At(this, {
                object: this.array,
                type: "splice",
                index: e,
                removedCount: t,
                added: n
            });
            if (!i) return s;
            t = i.removedCount, n = i.added;
        }
        var a = (n = 0 === n.length ? n : n.map(function(e) {
            return r.enhancer(e, void 0);
        })).length - t;
        this.updateArrayLength(o, a);
        var u = this.spliceItemsIntoValues(e, t, n);
        return 0 === t && 0 === n.length || this.notifyArraySplice(e, n, u), this.dehanceValues(u);
    }, e.prototype.spliceItemsIntoValues = function(e, t, n) {
        var r;
        if (n.length < 1e4) return (r = this.values).splice.apply(r, a([ e, t ], n));
        var o = this.values.slice(e, e + t);
        return this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t)), 
        o;
    }, e.prototype.notifyArrayChildUpdate = function(e, t, n) {
        var r = !this.owned && Ge(), i = Et(this), a = i || r ? {
            object: this.array,
            type: "update",
            index: e,
            newValue: t,
            oldValue: n
        } : null;
        r && Ke(o({}, a, {
            name: this.atom.name
        })), this.atom.reportChanged(), i && jt(this, a), r && ze();
    }, e.prototype.notifyArraySplice = function(e, t, n) {
        var r = !this.owned && Ge(), i = Et(this), a = i || r ? {
            object: this.array,
            type: "splice",
            index: e,
            removed: n,
            added: t,
            removedCount: n.length,
            addedCount: t.length
        } : null;
        r && Ke(o({}, a, {
            name: this.atom.name
        })), this.atom.reportChanged(), i && jt(this, a), r && ze();
    }, e;
}(), Vt = function(e) {
    function t(t, n, r, o) {
        void 0 === r && (r = "ObservableArray@" + l()), void 0 === o && (o = !1);
        var i = e.call(this) || this, a = new Ct(r, n, i, o);
        if (m(i, "$mobx", a), t && t.length) {
            var s = se(!0);
            i.spliceWithArray(0, 0, t), ue(s);
        }
        return kt && Object.defineProperty(a.array, "0", Nt), i;
    }
    return r(t, e), t.prototype.intercept = function(e) {
        return this.$mobx.intercept(e);
    }, t.prototype.observe = function(e, t) {
        return void 0 === t && (t = !1), this.$mobx.observe(e, t);
    }, t.prototype.clear = function() {
        return this.splice(0);
    }, t.prototype.concat = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return this.$mobx.atom.reportObserved(), Array.prototype.concat.apply(this.peek(), e.map(function(e) {
            return $t(e) ? e.peek() : e;
        }));
    }, t.prototype.replace = function(e) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, e);
    }, t.prototype.toJS = function() {
        return this.slice();
    }, t.prototype.toJSON = function() {
        return this.toJS();
    }, t.prototype.peek = function() {
        return this.$mobx.atom.reportObserved(), this.$mobx.dehanceValues(this.$mobx.values);
    }, t.prototype.find = function(e, t, n) {
        void 0 === n && (n = 0);
        var r = this.findIndex.apply(this, arguments);
        return -1 === r ? void 0 : this.get(r);
    }, t.prototype.findIndex = function(e, t, n) {
        void 0 === n && (n = 0);
        for (var r = this.peek(), o = r.length, i = n; i < o; i++) if (e.call(t, r[i], i, this)) return i;
        return -1;
    }, t.prototype.splice = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        switch (arguments.length) {
          case 0:
            return [];

          case 1:
            return this.$mobx.spliceWithArray(e);

          case 2:
            return this.$mobx.spliceWithArray(e, t);
        }
        return this.$mobx.spliceWithArray(e, t, n);
    }, t.prototype.spliceWithArray = function(e, t, n) {
        return this.$mobx.spliceWithArray(e, t, n);
    }, t.prototype.push = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = this.$mobx;
        return n.spliceWithArray(n.values.length, 0, e), n.values.length;
    }, t.prototype.pop = function() {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    }, t.prototype.shift = function() {
        return this.splice(0, 1)[0];
    }, t.prototype.unshift = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = this.$mobx;
        return n.spliceWithArray(0, 0, e), n.values.length;
    }, t.prototype.reverse = function() {
        var e = this.slice();
        return e.reverse.apply(e, arguments);
    }, t.prototype.sort = function(e) {
        var t = this.slice();
        return t.sort.apply(t, arguments);
    }, t.prototype.remove = function(e) {
        var t = this.$mobx.dehanceValues(this.$mobx.values).indexOf(e);
        return t > -1 && (this.splice(t, 1), !0);
    }, t.prototype.move = function(e, t) {
        function n(e) {
            if (e < 0) throw new Error("[mobx.array] Index out of bounds: " + e + " is negative");
            var t = this.$mobx.values.length;
            if (e >= t) throw new Error("[mobx.array] Index out of bounds: " + e + " is not smaller than " + t);
        }
        if (n.call(this, e), n.call(this, t), e !== t) {
            var r, o = this.$mobx.values;
            r = e < t ? a(o.slice(0, e), o.slice(e + 1, t + 1), [ o[e] ], o.slice(t + 1)) : a(o.slice(0, t), [ o[e] ], o.slice(t, e), o.slice(e + 1)), 
            this.replace(r);
        }
    }, t.prototype.get = function(e) {
        var t = this.$mobx;
        if (t) {
            if (e < t.values.length) return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
            console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
    }, t.prototype.set = function(e, t) {
        var n = this.$mobx, r = n.values;
        if (e < r.length) {
            me(n.atom);
            var o = r[e];
            if (wt(n)) {
                var i = At(n, {
                    type: "update",
                    object: this,
                    index: e,
                    newValue: t
                });
                if (!i) return;
                t = i.newValue;
            }
            (t = n.enhancer(t, o)) !== o && (r[e] = t, n.notifyArrayChildUpdate(e, t, o));
        } else {
            if (e !== r.length) throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + r.length);
            n.spliceWithArray(e, 0, [ t ]);
        }
    }, t;
}(It);

E(Vt.prototype, function() {
    this.$mobx.atom.reportObserved();
    var e = this, t = 0;
    return D({
        next: function() {
            return t < e.length ? {
                value: e[t++],
                done: !1
            } : {
                done: !0,
                value: void 0
            };
        }
    });
}), Object.defineProperty(Vt.prototype, "length", {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this.$mobx.getArrayLength();
    },
    set: function(e) {
        this.$mobx.setArrayLength(e);
    }
}), b(Vt.prototype, j(), "Array"), [ "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString" ].forEach(function(e) {
    var t = Array.prototype[e];
    f("function" == typeof t, "Base function not defined on Array prototype: '" + e + "'"), 
    b(Vt.prototype, e, function() {
        return t.apply(this.peek(), arguments);
    });
}), function(e, t) {
    for (var n = 0; n < t.length; n++) b(e, t[n], e[t[n]]);
}(Vt.prototype, [ "constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString" ]);

var Nt = Rt(0);

function Rt(e) {
    return {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return this.get(e);
        },
        set: function(t) {
            this.set(e, t);
        }
    };
}

function Pt(e) {
    Object.defineProperty(Vt.prototype, "" + e, Rt(e));
}

function Lt(e) {
    for (var t = Tt; t < e; t++) Pt(t);
    Tt = e;
}

Lt(1e3);

var Bt = g("ObservableArrayAdministration", Ct);

function $t(e) {
    return d(e) && Bt(e.$mobx);
}

var Mt = {}, Ut = function() {
    function e(e, t, n) {
        if (void 0 === t && (t = U), void 0 === n && (n = "ObservableMap@" + l()), this.enhancer = t, 
        this.name = n, this.$mobx = Mt, this._keys = new Vt(void 0, G, this.name + ".keys()", !0), 
        "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        this._data = new Map(), this._hasMap = new Map(), this.merge(e);
    }
    return e.prototype._has = function(e) {
        return this._data.has(e);
    }, e.prototype.has = function(e) {
        var t = this;
        if (!ke.trackingDerivation) return this._has(e);
        var n = this._hasMap.get(e);
        if (!n) {
            var r = n = new ce(this._has(e), G, this.name + "." + Gt(e) + "?", !1);
            this._hasMap.set(e, r), rt(r, function() {
                return t._hasMap.delete(e);
            });
        }
        return n.get();
    }, e.prototype.set = function(e, t) {
        var n = this._has(e);
        if (wt(this)) {
            var r = At(this, {
                type: n ? "update" : "add",
                object: this,
                newValue: t,
                name: e
            });
            if (!r) return this;
            t = r.newValue;
        }
        return n ? this._updateValue(e, t) : this._addValue(e, t), this;
    }, e.prototype.delete = function(e) {
        var t = this;
        if (wt(this) && !(i = At(this, {
            type: "delete",
            object: this,
            name: e
        }))) return !1;
        if (this._has(e)) {
            var n = Ge(), r = Et(this), i = r || n ? {
                type: "delete",
                object: this,
                oldValue: this._data.get(e).value,
                name: e
            } : null;
            return n && Ke(o({}, i, {
                name: this.name,
                key: e
            })), xt(function() {
                t._keys.remove(e), t._updateHasMapEntry(e, !1), t._data.get(e).setNewValue(void 0), 
                t._data.delete(e);
            }), r && jt(this, i), n && ze(), !0;
        }
        return !1;
    }, e.prototype._updateHasMapEntry = function(e, t) {
        var n = this._hasMap.get(e);
        n && n.setNewValue(t);
    }, e.prototype._updateValue = function(e, t) {
        var n = this._data.get(e);
        if ((t = n.prepareNewValue(t)) !== ke.UNCHANGED) {
            var r = Ge(), i = Et(this), a = i || r ? {
                type: "update",
                object: this,
                oldValue: n.value,
                name: e,
                newValue: t
            } : null;
            r && Ke(o({}, a, {
                name: this.name,
                key: e
            })), n.setNewValue(t), i && jt(this, a), r && ze();
        }
    }, e.prototype._addValue = function(e, t) {
        var n = this;
        xt(function() {
            var r = new ce(t, n.enhancer, n.name + "." + Gt(e), !1);
            n._data.set(e, r), t = r.value, n._updateHasMapEntry(e, !0), n._keys.push(e);
        });
        var r = Ge(), i = Et(this), a = i || r ? {
            type: "add",
            object: this,
            name: e,
            newValue: t
        } : null;
        r && Ke(o({}, a, {
            name: this.name,
            key: e
        })), i && jt(this, a), r && ze();
    }, e.prototype.get = function(e) {
        return this.has(e) ? this.dehanceValue(this._data.get(e).get()) : this.dehanceValue(void 0);
    }, e.prototype.dehanceValue = function(e) {
        return void 0 !== this.dehancer ? this.dehancer(e) : e;
    }, e.prototype.keys = function() {
        return this._keys[A()]();
    }, e.prototype.values = function() {
        var e = this, t = 0;
        return D({
            next: function() {
                return t < e._keys.length ? {
                    value: e.get(e._keys[t++]),
                    done: !1
                } : {
                    value: void 0,
                    done: !0
                };
            }
        });
    }, e.prototype.entries = function() {
        var e = this, t = 0;
        return D({
            next: function() {
                if (t < e._keys.length) {
                    var n = e._keys[t++];
                    return {
                        value: [ n, e.get(n) ],
                        done: !1
                    };
                }
                return {
                    done: !0
                };
            }
        });
    }, e.prototype.forEach = function(e, t) {
        var n = this;
        this._keys.forEach(function(r) {
            return e.call(t, n.get(r), r, n);
        });
    }, e.prototype.merge = function(e) {
        var t = this;
        return Ht(e) && (e = e.toJS()), xt(function() {
            y(e) ? Object.keys(e).forEach(function(n) {
                return t.set(n, e[n]);
            }) : Array.isArray(e) ? e.forEach(function(e) {
                var n = i(e, 2), r = n[0], o = n[1];
                return t.set(r, o);
            }) : x(e) ? e.constructor !== Map ? p("Cannot initialize from classes that inherit from Map: " + e.constructor.name) : e.forEach(function(e, n) {
                return t.set(n, e);
            }) : null != e && p("Cannot initialize map from " + e);
        }), this;
    }, e.prototype.clear = function() {
        var e = this;
        xt(function() {
            _e(function() {
                e._keys.slice().forEach(function(t) {
                    return e.delete(t);
                });
            });
        });
    }, e.prototype.replace = function(e) {
        var t = this;
        return xt(function() {
            for (var n = function(e) {
                return x(e) || Ht(e) ? e : Array.isArray(e) ? new Map(e) : y(e) ? new Map(Object.entries(e)) : p("Cannot convert to map from '" + e + "'");
            }(e), r = t._keys, o = Array.from(n.keys()), i = !1, a = 0; a < r.length; a++) {
                var s = r[a];
                r.length === o.length && s !== o[a] && (i = !0), n.has(s) || (i = !0, t.delete(s));
            }
            n.forEach(function(e, n) {
                t._data.has(n) || (i = !0), t.set(n, e);
            }), i && t._keys.replace(o);
        }), this;
    }, Object.defineProperty(e.prototype, "size", {
        get: function() {
            return this._keys.length;
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.toPOJO = function() {
        var e = this, n = {};
        return this._keys.forEach(function(r) {
            return n["symbol" == (0, t.default)(r) ? r : Gt(r)] = e.get(r);
        }), n;
    }, e.prototype.toJS = function() {
        var e = this, t = new Map();
        return this._keys.forEach(function(n) {
            return t.set(n, e.get(n));
        }), t;
    }, e.prototype.toJSON = function() {
        return this.toPOJO();
    }, e.prototype.toString = function() {
        var e = this;
        return this.name + "[{ " + this._keys.map(function(t) {
            return Gt(t) + ": " + e.get(t);
        }).join(", ") + " }]";
    }, e.prototype.observe = function(e, t) {
        return Dt(this, e);
    }, e.prototype.intercept = function(e) {
        return St(this, e);
    }, e;
}();

function Gt(e) {
    return e && e.toString ? e.toString() : new String(e).toString();
}

E(Ut.prototype, function() {
    return this.entries();
}), m(Ut.prototype, j(), "Map");

var Ht = g("ObservableMap", Ut), Kt = {}, qt = function() {
    function e(e, t, n) {
        if (void 0 === t && (t = U), void 0 === n && (n = "ObservableSet@" + l()), this.name = n, 
        this.$mobx = Kt, this._data = new Set(), this._atom = C(this.name), "function" != typeof Set) throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        this.enhancer = function(e, r) {
            return t(e, r, n);
        }, e && this.replace(e);
    }
    return e.prototype.dehanceValue = function(e) {
        return void 0 !== this.dehancer ? this.dehancer(e) : e;
    }, e.prototype.clear = function() {
        var e = this;
        xt(function() {
            _e(function() {
                e._data.forEach(function(t) {
                    e.delete(t);
                });
            });
        });
    }, e.prototype.forEach = function(e, t) {
        var n = this;
        this._data.forEach(function(r) {
            e.call(t, r, r, n);
        });
    }, Object.defineProperty(e.prototype, "size", {
        get: function() {
            return this._atom.reportObserved(), this._data.size;
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.add = function(e) {
        var t = this;
        if (me(this._atom), wt(this) && !(o = At(this, {
            type: "add",
            object: this,
            newValue: e
        }))) return this;
        if (!this.has(e)) {
            xt(function() {
                t._data.add(t.enhancer(e, void 0)), t._atom.reportChanged();
            });
            var n = Ge(), r = Et(this), o = r || n ? {
                type: "add",
                object: this,
                newValue: e
            } : null;
            r && jt(this, o);
        }
        return this;
    }, e.prototype.delete = function(e) {
        var t = this;
        if (wt(this) && !(o = At(this, {
            type: "delete",
            object: this,
            oldValue: e
        }))) return !1;
        if (this.has(e)) {
            var n = Ge(), r = Et(this), o = r || n ? {
                type: "delete",
                object: this,
                oldValue: e
            } : null;
            return xt(function() {
                t._atom.reportChanged(), t._data.delete(e);
            }), r && jt(this, o), !0;
        }
        return !1;
    }, e.prototype.has = function(e) {
        return this._atom.reportObserved(), this._data.has(this.dehanceValue(e));
    }, e.prototype.entries = function() {
        var e = 0, t = O(this.keys()), n = O(this.values());
        return D({
            next: function() {
                var r = e;
                return e += 1, r < n.length ? {
                    value: [ t[r], n[r] ],
                    done: !1
                } : {
                    done: !0
                };
            }
        });
    }, e.prototype.keys = function() {
        return this.values();
    }, e.prototype.values = function() {
        this._atom.reportObserved();
        var e, t = this, n = 0;
        return void 0 !== this._data.values ? e = O(this._data.values()) : (e = [], this._data.forEach(function(t) {
            return e.push(t);
        })), D({
            next: function() {
                return n < e.length ? {
                    value: t.dehanceValue(e[n++]),
                    done: !1
                } : {
                    done: !0
                };
            }
        });
    }, e.prototype.replace = function(e) {
        var t = this;
        return zt(e) && (e = e.toJS()), xt(function() {
            Array.isArray(e) || _(e) ? (t.clear(), e.forEach(function(e) {
                return t.add(e);
            })) : null != e && p("Cannot initialize set from " + e);
        }), this;
    }, e.prototype.observe = function(e, t) {
        return Dt(this, e);
    }, e.prototype.intercept = function(e) {
        return St(this, e);
    }, e.prototype.toJS = function() {
        return new Set(this);
    }, e.prototype.toString = function() {
        return this.name + "[ " + O(this.keys()).join(", ") + " ]";
    }, e;
}();

E(qt.prototype, function() {
    return this.values();
}), m(qt.prototype, j(), "Set");

var zt = g("ObservableSet", qt), Wt = function() {
    function e(e, t, n) {
        this.target = e, this.name = t, this.defaultEnhancer = n, this.values = {};
    }
    return e.prototype.read = function(e, t) {
        if (this.target === e || (this.illegalAccess(e, t), this.values[t])) return this.values[t].get();
    }, e.prototype.write = function(e, t, n) {
        var r = this.target;
        r !== e && this.illegalAccess(e, t);
        var i = this.values[t];
        if (i instanceof pe) i.set(n); else {
            if (wt(this)) {
                if (!(u = At(this, {
                    type: "update",
                    object: r,
                    name: t,
                    newValue: n
                }))) return;
                n = u.newValue;
            }
            if ((n = i.prepareNewValue(n)) !== ke.UNCHANGED) {
                var a = Et(this), s = Ge(), u = a || s ? {
                    type: "update",
                    object: r,
                    oldValue: i.value,
                    name: t,
                    newValue: n
                } : null;
                s && Ke(o({}, u, {
                    name: this.name,
                    key: t
                })), i.setNewValue(n), a && jt(this, u), s && ze();
            }
        }
    }, e.prototype.remove = function(e) {
        if (this.values[e]) {
            var t = this.target;
            if (wt(this) && !(a = At(this, {
                object: t,
                name: e,
                type: "remove"
            }))) return;
            try {
                Ve();
                var n = Et(this), r = Ge(), i = this.values[e].get();
                this.keys && this.keys.remove(e), delete this.values[e], delete this.target[e];
                var a = n || r ? {
                    type: "remove",
                    object: t,
                    oldValue: i,
                    name: e
                } : null;
                r && Ke(o({}, a, {
                    name: this.name,
                    key: e
                })), n && jt(this, a), r && ze();
            } finally {
                Ne();
            }
        }
    }, e.prototype.illegalAccess = function(e, t) {
        console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    }, e.prototype.observe = function(e, t) {
        return Dt(this, e);
    }, e.prototype.intercept = function(e) {
        return St(this, e);
    }, e.prototype.getKeys = function() {
        var e = this;
        return void 0 === this.keys && (this.keys = new Vt(Object.keys(this.values).filter(function(t) {
            return e.values[t] instanceof ce;
        }), G, "keys(" + this.name + ")", !0)), this.keys.slice();
    }, e;
}();

function Jt(e, t, n) {
    void 0 === t && (t = ""), void 0 === n && (n = U);
    var r = e.$mobx;
    return r || (y(e) || (t = (e.constructor.name || "ObservableObject") + "@" + l()), 
    t || (t = "ObservableObject@" + l()), m(e, "$mobx", r = new Wt(e, t, n)), r);
}

function Xt(e, t, n, r) {
    var i = Jt(e);
    if (wt(i)) {
        var a = At(i, {
            object: e,
            name: t,
            type: "add",
            newValue: n
        });
        if (!a) return;
        n = a.newValue;
    }
    n = (i.values[t] = new ce(n, r, i.name + "." + t, !1)).value, Object.defineProperty(e, t, function(e) {
        return Yt[e] || (Yt[e] = {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.$mobx.read(this, e);
            },
            set: function(t) {
                this.$mobx.write(this, e, t);
            }
        });
    }(t)), i.keys && i.keys.push(t), function(e, t, n, r) {
        var i = Et(e), a = Ge(), s = i || a ? {
            type: "add",
            object: t,
            name: n,
            newValue: r
        } : null;
        a && Ke(o({}, s, {
            name: e.name,
            key: n
        })), i && jt(e, s), a && ze();
    }(i, e, t, n);
}

var Yt = Object.create(null), Ft = Object.create(null);

function Qt(e) {
    return e.$mobx || (B(e), e.$mobx);
}

var Zt = g("ObservableObjectAdministration", Wt);

function en(e) {
    return !!d(e) && (B(e), Zt(e.$mobx));
}

function tn(e, n) {
    if ("object" == (0, t.default)(e) && null !== e) {
        if ($t(e)) return void 0 !== n && p(!1), e.$mobx.atom;
        if (zt(e)) return e.$mobx;
        if (Ht(e)) {
            var r = e;
            return void 0 === n ? tn(r._keys) : ((o = r._data.get(n) || r._hasMap.get(n)) || p(!1), 
            o);
        }
        var o;
        if (B(e), n && !e.$mobx && e[n], en(e)) return n ? ((o = e.$mobx.values[n]) || p(!1), 
        o) : p(!1);
        if (I(e) || ve(e) || Ue(e)) return e;
    } else if ("function" == typeof e && Ue(e.$mobx)) return e.$mobx;
    return p(!1);
}

function nn(e, t) {
    return e || p("Expecting some object"), void 0 !== t ? nn(tn(e, t)) : I(e) || ve(e) || Ue(e) || Ht(e) || zt(e) ? e : (B(e), 
    e.$mobx ? e.$mobx : void p(!1));
}

function rn(e, t) {
    return (void 0 !== t ? tn(e, t) : en(e) || Ht(e) || zt(e) ? nn(e) : tn(e)).name;
}

var on = Object.prototype.toString;

function an(e, t) {
    return sn(e, t);
}

function sn(e, n, r, o) {
    if (e === n) return 0 !== e || 1 / e == 1 / n;
    if (null == e || null == n) return !1;
    if (e != e) return n != n;
    var i = (0, t.default)(e);
    return ("function" === i || "object" === i || "object" == (0, t.default)(n)) && function(e, n, r, o) {
        e = un(e), n = un(n);
        var i = on.call(e);
        if (i !== on.call(n)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + n;

          case "[object Number]":
            return +e != +e ? +n != +n : 0 == +e ? 1 / +e == 1 / n : +e == +n;

          case "[object Date]":
          case "[object Boolean]":
            return +e == +n;

          case "[object Symbol]":
            return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(n);
        }
        var a = "[object Array]" === i;
        if (!a) {
            if ("object" != (0, t.default)(e) || "object" != (0, t.default)(n)) return !1;
            var s = e.constructor, u = n.constructor;
            if (s !== u && !("function" == typeof s && s instanceof s && "function" == typeof u && u instanceof u) && "constructor" in e && "constructor" in n) return !1;
        }
        o = o || [];
        for (var c = (r = r || []).length; c--; ) if (r[c] === e) return o[c] === n;
        if (r.push(e), o.push(n), a) {
            if ((c = e.length) !== n.length) return !1;
            for (;c--; ) if (!sn(e[c], n[c], r, o)) return !1;
        } else {
            var l = Object.keys(e), p = void 0;
            if (c = l.length, Object.keys(n).length !== c) return !1;
            for (;c--; ) if (!cn(n, p = l[c]) || !sn(e[p], n[p], r, o)) return !1;
        }
        return r.pop(), o.pop(), !0;
    }(e, n, r, o);
}

function un(e) {
    return $t(e) ? e.peek() : x(e) || Ht(e) || _(e) || zt(e) ? O(e.entries()) : e;
}

function cn(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}

"object" == ("undefined" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ ? "undefined" : (0, 
t.default)(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: We,
    extras: {
        getDebugName: rn
    },
    $mobx: "$mobx"
}), exports.$mobx = "$mobx", exports.ObservableMap = Ut, exports.ObservableSet = qt, 
exports.Reaction = Le, exports._allowStateChanges = function(e, t) {
    var n, r = se(e);
    try {
        n = t();
    } finally {
        ue(r);
    }
    return n;
}, exports._allowStateChangesInsideComputed = function(e) {
    var t, n = ke.computationDepth;
    ke.computationDepth = 0;
    try {
        t = e();
    } finally {
        ke.computationDepth = n;
    }
    return t;
}, exports._getAdministration = nn, exports._getGlobalState = function() {
    return ke;
}, exports._interceptReads = function(e, t, n) {
    var r;
    if (Ht(e) || $t(e) || le(e)) r = nn(e); else {
        if (!en(e)) return p(!1);
        if ("string" != typeof t) return p(!1);
        r = nn(e, t);
    }
    return void 0 !== r.dehancer ? p(!1) : (r.dehancer = "function" == typeof t ? t : n, 
    function() {
        r.dehancer = void 0;
    });
}, exports._isComputingDerivation = function() {
    return null !== ke.trackingDerivation;
}, exports._resetGlobalState = function() {
    var e = new Ee();
    for (var t in e) -1 === Ae.indexOf(t) && (ke[t] = e[t]);
    ke.allowStateChanges = !ke.enforceActions;
}, exports.action = Fe, exports.autorun = Ze, exports.comparer = N, exports.computed = re, 
exports.configure = function(e) {
    var t = e.enforceActions, n = e.computedRequiresReaction, r = e.computedConfigurable, o = e.disableErrorBoundaries, i = e.arrayBuffer, a = e.reactionScheduler;
    if (!0 === e.isolateGlobalState && ((ke.pendingReactions.length || ke.inBatch || ke.isRunningReactions) && p("isolateGlobalState should be called before MobX is running any reactions"), 
    je = !0, De && (0 == --c().__mobxInstanceCount && (c().__mobxGlobals = void 0), 
    ke = new Ee())), void 0 !== t) {
        var s = void 0;
        switch (t) {
          case !0:
          case "observed":
            s = !0;
            break;

          case !1:
          case "never":
            s = !1;
            break;

          case "strict":
          case "always":
            s = "strict";
            break;

          default:
            p("Invalid value for 'enforceActions': '" + t + "', expected 'never', 'always' or 'observed'");
        }
        ke.enforceActions = s, ke.allowStateChanges = !0 !== s && "strict" !== s;
    }
    void 0 !== n && (ke.computedRequiresReaction = !!n), void 0 !== r && (ke.computedConfigurable = !!r), 
    void 0 !== o && (!0 === o && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on."), 
    ke.disableErrorBoundaries = !!o), "number" == typeof i && Lt(i), a && function(e) {
        var t = Be;
        Be = function(n) {
            return e(function() {
                return t(n);
            });
        };
    }(a);
}, exports.createAtom = C, exports.decorate = function(e, t) {
    var n = "function" == typeof e ? e.prototype : e, r = function(e) {
        var r = t[e];
        Array.isArray(r) || (r = [ r ]);
        var o = Object.getOwnPropertyDescriptor(n, e), i = r.reduce(function(t, r) {
            return r(n, e, t);
        }, o);
        i && Object.defineProperty(n, e, i);
    };
    for (var o in t) r(o);
    return e;
}, exports.entries = function(e) {
    return en(e) ? vt(e).map(function(t) {
        return [ t, e[t] ];
    }) : Ht(e) ? vt(e).map(function(t) {
        return [ t, e.get(t) ];
    }) : zt(e) ? O(e.entries()) : $t(e) ? e.map(function(e, t) {
        return [ t, e ];
    }) : p(!1);
}, exports.extendObservable = it, exports.extendShallowObservable = function(e, t, n) {
    return it(e, t, n, q);
}, exports.flow = function(e) {
    1 !== arguments.length && p("Flow expects one 1 argument and cannot be used as decorator");
    var t = e.name || "<unnamed flow>";
    return function() {
        var n, r = arguments, o = ++ct, i = Fe(t + " - runid: " + o + " - init", e).apply(this, r), a = void 0, s = new Promise(function(e, r) {
            var s = 0;
            function u(e) {
                var n;
                a = void 0;
                try {
                    n = Fe(t + " - runid: " + o + " - yield " + s++, i.next).call(i, e);
                } catch (e) {
                    return r(e);
                }
                l(n);
            }
            function c(e) {
                var n;
                a = void 0;
                try {
                    n = Fe(t + " - runid: " + o + " - yield " + s++, i.throw).call(i, e);
                } catch (e) {
                    return r(e);
                }
                l(n);
            }
            function l(t) {
                if (!t || "function" != typeof t.then) return t.done ? e(t.value) : (a = Promise.resolve(t.value)).then(u, c);
                t.then(l, r);
            }
            n = r, u(void 0);
        });
        return s.cancel = Fe(t + " - runid: " + o + " - cancel", function() {
            try {
                a && lt(a);
                var e = i.return(), t = Promise.resolve(e.value);
                t.then(v, v), lt(t), n(new Error("FLOW_CANCELLED"));
            } catch (e) {
                n(e);
            }
        }), s;
    };
}, exports.get = function(e, t) {
    if (dt(e, t)) return en(e) ? e[t] : Ht(e) ? e.get(t) : $t(e) ? e[t] : p(!1);
}, exports.getAtom = tn, exports.getDebugName = rn, exports.getDependencyTree = at, 
exports.getObserverTree = function(e, t) {
    return ut(tn(e, t));
}, exports.has = dt, exports.intercept = function(e, t, n) {
    return "function" == typeof n ? function(e, t, n) {
        return nn(e, t).intercept(n);
    }(e, t, n) : function(e, t) {
        return nn(e).intercept(t);
    }(e, t);
}, exports.isAction = function(e) {
    return "function" == typeof e && !0 === e.isMobxAction;
}, exports.isArrayLike = function(e) {
    return Array.isArray(e) || $t(e);
}, exports.isBoxedObservable = le, exports.isComputed = function(e) {
    return arguments.length > 1 ? p(!1) : pt(e);
}, exports.isComputedProp = function(e, t) {
    return "string" != typeof t ? p(!1) : pt(e, t);
}, exports.isObservable = ht, exports.isObservableArray = $t, exports.isObservableMap = Ht, 
exports.isObservableObject = en, exports.isObservableProp = function(e, t) {
    return "string" != typeof t ? p(!1) : ft(e, t);
}, exports.isObservableSet = zt, exports.keys = vt, exports.observable = Z, exports.observe = function(e, t, n, r) {
    return "function" == typeof n ? function(e, t, n, r) {
        return nn(e, t).observe(n, r);
    }(e, t, n, r) : function(e, t, n) {
        return nn(e).observe(t, n);
    }(e, t, n);
}, exports.onBecomeObserved = nt, exports.onBecomeUnobserved = rt, exports.onReactionError = function(e) {
    return ke.globalReactionErrorHandlers.push(e), function() {
        var t = ke.globalReactionErrorHandlers.indexOf(e);
        t >= 0 && ke.globalReactionErrorHandlers.splice(t, 1);
    };
}, exports.reaction = function(e, t, n) {
    void 0 === n && (n = u), "boolean" == typeof n && (n = {
        fireImmediately: n
    });
    var r, o = n.name || "Reaction@" + l(), i = Fe(o, n.onError ? function(e, t) {
        return function() {
            try {
                return t.apply(this, arguments);
            } catch (t) {
                e.call(this, t);
            }
        };
    }(n.onError, t) : t), a = !n.scheduler && !n.delay, s = tt(n), c = !0, p = !1, f = n.compareStructural ? N.structural : n.equals || N.default, h = new Le(o, function() {
        c || a ? v() : p || (p = !0, s(v));
    }, n.onError);
    function v() {
        if (p = !1, !h.isDisposed) {
            var t = !1;
            h.track(function() {
                var n = e(h);
                t = c || !f(r, n), r = n;
            }), c && n.fireImmediately && i(r, h), c || !0 !== t || i(r, h), c && (c = !1);
        }
    }
    return h.schedule(), h.getDisposer();
}, exports.remove = function(e, t) {
    if (en(e)) e.$mobx.remove(t); else if (Ht(e)) e.delete(t); else if (zt(e)) e.delete(t); else {
        if (!$t(e)) return p(!1);
        "number" != typeof t && (t = parseInt(t, 10)), f(t >= 0, "Not a valid index: '" + t + "'"), 
        e.splice(t, 1);
    }
}, exports.runInAction = function(e, t) {
    return ie("string" == typeof e ? e : e.name || "<unnamed action>", "function" == typeof e ? e : t, this, void 0);
}, exports.set = function e(t, n, r) {
    if (2 !== arguments.length || zt(t)) if (en(t)) {
        var o = t.$mobx;
        o.values[n] ? o.write(t, n, r) : Xt(t, n, r, o.defaultEnhancer);
    } else if (Ht(t)) t.set(n, r); else if (zt(t)) t.add(n); else {
        if (!$t(t)) return p(!1);
        "number" != typeof n && (n = parseInt(n, 10)), f(n >= 0, "Not a valid index: '" + n + "'"), 
        Ve(), n >= t.length && (t.length = n + 1), t[n] = r, Ne();
    } else {
        Ve();
        var i = n;
        try {
            for (var a in i) e(t, a, i[a]);
        } finally {
            Ne();
        }
    }
}, exports.spy = We, exports.toJS = function(e, n) {
    var r;
    return "boolean" == typeof n && (n = {
        detectCycles: n
    }), n || (n = yt), n.detectCycles = void 0 === n.detectCycles ? !0 === n.recurseEverything : !0 === n.detectCycles, 
    n.detectCycles && (r = new Map()), function e(n, r, o) {
        if (!r.recurseEverything && !ht(n)) return n;
        if ("object" != (0, t.default)(n)) return n;
        if (null === n) return null;
        if (n instanceof Date) return n;
        if (le(n)) return e(n.get(), r, o);
        if (ht(n) && vt(n), !0 === r.detectCycles && null !== n && o.has(n)) return o.get(n);
        if ($t(n) || Array.isArray(n)) {
            var i = bt(o, n, [], r), a = n.map(function(t) {
                return e(t, r, o);
            });
            i.length = a.length;
            for (var s = 0, u = a.length; s < u; s++) i[s] = a[s];
            return i;
        }
        if (zt(n) || Object.getPrototypeOf(n) === Set.prototype) {
            if (!1 === r.exportMapsAsObjects) {
                var c = bt(o, n, new Set(), r);
                return n.forEach(function(t) {
                    c.add(e(t, r, o));
                }), c;
            }
            var l = bt(o, n, [], r);
            return n.forEach(function(t) {
                l.push(e(t, r, o));
            }), l;
        }
        if (Ht(n) || Object.getPrototypeOf(n) === Map.prototype) {
            if (!1 === r.exportMapsAsObjects) {
                var p = bt(o, n, new Map(), r);
                return n.forEach(function(t, n) {
                    p.set(n, e(t, r, o));
                }), p;
            }
            var f = bt(o, n, {}, r);
            return n.forEach(function(t, n) {
                f[n] = e(t, r, o);
            }), f;
        }
        var h = bt(o, n, {}, r);
        for (var v in n) h[v] = e(n[v], r, o);
        return h;
    }(e, n, r);
}, exports.trace = mt, exports.transaction = xt, exports.untracked = _e, exports.values = function(e) {
    return en(e) ? vt(e).map(function(t) {
        return e[t];
    }) : Ht(e) ? vt(e).map(function(t) {
        return e.get(t);
    }) : zt(e) ? O(e.values()) : $t(e) ? e.slice() : p(!1);
}, exports.when = function(e, n, r) {
    return 1 === arguments.length || n && "object" == (0, t.default)(n) ? Ot(e, n) : _t(e, n, r || {});
};