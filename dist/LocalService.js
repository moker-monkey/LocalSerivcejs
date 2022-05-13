! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.LocalService = e() : t.LocalService = e()
}(window, (function () {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(r, o, function (e) {
                    return t[e]
                }.bind(null, o));
            return r
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 35)
    }([function (t, e, n) {
        var r = n(25)("wks"),
            o = n(27),
            i = n(1).Symbol,
            c = "function" == typeof i;
        (t.exports = function (t) {
            return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
        }).store = r
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e, n) {
        var r = n(3);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e, n) {
        t.exports = !n(5)((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e, n) {
        var r = n(1),
            o = n(22),
            i = n(29),
            c = n(27)("src"),
            u = n(43),
            s = ("" + u).split("toString");
        n(9).inspectSource = function (t) {
            return u.call(t)
        }, (t.exports = function (t, e, n, u) {
            var a = "function" == typeof n;
            a && (i(n, "name") || o(n, "name", e)), t[e] !== n && (a && (i(n, c) || o(n, c, t[e] ? "" + t[e] : s.join(String(e)))), t === r ? t[e] = n : u ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
        })(Function.prototype, "toString", (function () {
            return "function" == typeof this && this[c] || u.call(this)
        }))
    }, function (t, e, n) {
        var r = n(10),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e) {
        var n = t.exports = {
            version: "2.6.12"
        };
        "number" == typeof __e && (__e = n)
    }, function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e, n) {
        var r = n(8),
            o = n(0)("toStringTag"),
            i = "Arguments" == r(function () {
                return arguments
            }());
        t.exports = function (t) {
            var e, n, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
        }
    }, function (t, e, n) {
        var r = n(2),
            o = n(40),
            i = n(41),
            c = Object.defineProperty;
        e.f = n(4) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return c(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e, n) {
        var r = n(15);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(38)(!0);
        t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(12),
            o = RegExp.prototype.exec;
        t.exports = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var i = n.call(t, e);
                if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return o.call(t, e)
        }
    }, function (t, e, n) {
        "use strict";
        n(39);
        var r = n(6),
            o = n(22),
            i = n(5),
            c = n(11),
            u = n(0),
            s = n(19),
            a = u("species"),
            f = !i((function () {
                var t = /./;
                return t.exec = function () {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            })),
            l = function () {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments)
                };
                var n = "ab".split(t);
                return 2 === n.length && "a" === n[0] && "b" === n[1]
            }();
        t.exports = function (t, e, n) {
            var p = u(t),
                v = !i((function () {
                    var e = {};
                    return e[p] = function () {
                        return 7
                    }, 7 != "" [t](e)
                })),
                d = v ? !i((function () {
                    var e = !1,
                        n = /a/;
                    return n.exec = function () {
                        return e = !0, null
                    }, "split" === t && (n.constructor = {}, n.constructor[a] = function () {
                        return n
                    }), n[p](""), !e
                })) : void 0;
            if (!v || !d || "replace" === t && !f || "split" === t && !l) {
                var h = /./ [p],
                    y = n(c, p, "" [t], (function (t, e, n, r, o) {
                        return e.exec === s ? v && !o ? {
                            done: !0,
                            value: h.call(e, n, r)
                        } : {
                            done: !0,
                            value: t.call(n, e, r)
                        } : {
                            done: !1
                        }
                    })),
                    g = y[0],
                    m = y[1];
                r(String.prototype, t, g), o(RegExp.prototype, p, 2 == e ? function (t, e) {
                    return m.call(t, this, e)
                } : function (t) {
                    return m.call(t, this)
                })
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r, o, i = n(20),
            c = RegExp.prototype.exec,
            u = String.prototype.replace,
            s = c,
            a = (r = /a/, o = /b*/g, c.call(r, "a"), c.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
            f = void 0 !== /()??/.exec("")[1];
        (a || f) && (s = function (t) {
            var e, n, r, o, s = this;
            return f && (n = new RegExp("^" + s.source + "$(?!\\s)", i.call(s))), a && (e = s.lastIndex), r = c.call(s, t), a && r && (s.lastIndex = s.global ? r.index + r[0].length : e), f && r && r.length > 1 && u.call(r[0], n, (function () {
                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
            })), r
        }), t.exports = s
    }, function (t, e, n) {
        "use strict";
        var r = n(2);
        t.exports = function () {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function (t, e, n) {
        var r = n(1),
            o = n(9),
            i = n(22),
            c = n(6),
            u = n(14),
            s = function (t, e, n) {
                var a, f, l, p, v = t & s.F,
                    d = t & s.G,
                    h = t & s.S,
                    y = t & s.P,
                    g = t & s.B,
                    m = d ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    x = d ? o : o[e] || (o[e] = {}),
                    w = x.prototype || (x.prototype = {});
                for (a in d && (n = e), n) l = ((f = !v && m && void 0 !== m[a]) ? m : n)[a], p = g && f ? u(l, r) : y && "function" == typeof l ? u(Function.call, l) : l, m && c(m, a, l, t & s.U), x[a] != l && i(x, a, p), y && w[a] != l && (w[a] = l)
            };
        r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
    }, function (t, e, n) {
        var r = n(13),
            o = n(42);
        t.exports = n(4) ? function (t, e, n) {
            return r.f(t, e, o(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function () {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function () {
                        return e.i
                    }
                }), Object.defineProperty(e, "exports", {
                    enumerable: !0
                }), e.webpackPolyfill = 1
            }
            return e
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2),
            o = n(7),
            i = n(16),
            c = n(17);
        n(18)("match", 1, (function (t, e, n, u) {
            return [function (n) {
                var r = t(this),
                    o = null == n ? void 0 : n[e];
                return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
            }, function (t) {
                var e = u(n, t, this);
                if (e.done) return e.value;
                var s = r(t),
                    a = String(this);
                if (!s.global) return c(s, a);
                var f = s.unicode;
                s.lastIndex = 0;
                for (var l, p = [], v = 0; null !== (l = c(s, a));) {
                    var d = String(l[0]);
                    p[v] = d, "" === d && (s.lastIndex = i(a, o(s.lastIndex), f)), v++
                }
                return 0 === v ? null : p
            }]
        }))
    }, function (t, e, n) {
        var r = n(9),
            o = n(1),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(26) ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e) {
        t.exports = !1
    }, function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function (t, e, n) {
        var r = n(3),
            o = n(1).document,
            i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e, n) {
        var r = n(2),
            o = n(15),
            i = n(0)("species");
        t.exports = function (t, e) {
            var n, c = r(t).constructor;
            return void 0 === c || null == (n = r(c)[i]) ? e : o(n)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(12),
            o = {};
        o[n(0)("toStringTag")] = "z", o + "" != "[object z]" && n(6)(Object.prototype, "toString", (function () {
            return "[object " + r(this) + "]"
        }), !0)
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        var r, o, i, c = n(14),
            u = n(58),
            s = n(59),
            a = n(28),
            f = n(1),
            l = f.process,
            p = f.setImmediate,
            v = f.clearImmediate,
            d = f.MessageChannel,
            h = f.Dispatch,
            y = 0,
            g = {},
            m = function () {
                var t = +this;
                if (g.hasOwnProperty(t)) {
                    var e = g[t];
                    delete g[t], e()
                }
            },
            x = function (t) {
                m.call(t.data)
            };
        p && v || (p = function (t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return g[++y] = function () {
                u("function" == typeof t ? t : Function(t), e)
            }, r(y), y
        }, v = function (t) {
            delete g[t]
        }, "process" == n(8)(l) ? r = function (t) {
            l.nextTick(c(m, t, 1))
        } : h && h.now ? r = function (t) {
            h.now(c(m, t, 1))
        } : d ? (i = (o = new d).port2, o.port1.onmessage = x, r = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (t) {
            f.postMessage(t + "", "*")
        }, f.addEventListener("message", x, !1)) : r = "onreadystatechange" in a("script") ? function (t) {
            s.appendChild(a("script")).onreadystatechange = function () {
                s.removeChild(this), m.call(t)
            }
        } : function (t) {
            setTimeout(c(m, t, 1), 0)
        }), t.exports = {
            set: p,
            clear: v
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(15);

        function o(t) {
            var e, n;
            this.promise = new t((function (t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            })), this.resolve = r(e), this.reject = r(n)
        }
        t.exports.f = function (t) {
            return new o(t)
        }
    }, function (t, e, n) {
        "use strict";
        var r;
        n.r(e), "undefined" != typeof window && (r = n(36));
        var o = {
            XHR: r,
            setup: function (t) {
                return r.setup(t)
            },
            _listener_listed: {}
        };
        r && (r.LocalService = o), o.listener = function (t, e, n, i, c) {
            return r && (window.XMLHttpRequest = r), o._listener_listed[t + (e || "")] = c ? {
                rurl: t,
                rtype: e,
                template: n,
                error_template: i,
                beforeDone: c
            } : i ? {
                rurl: t,
                rtype: e,
                template: n,
                error_template: null,
                beforeDone: i
            } : {
                rurl: t,
                rtype: e,
                template: n,
                error_template: null,
                beforeDone: null
            }, o
        }, e.default = o
    }, function (t, e, n) {
        t.exports = n(37)
    }, function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                n(24), n(44), n(50), n(31), n(52);
                var e = n(68);
                window._XMLHttpRequest = window.XMLHttpRequest, window._ActiveXObject = window.ActiveXObject;
                try {
                    new window.Event("custom")
                } catch (t) {
                    window.Event = function (t, e, n, r) {
                        var o = document.createEvent("CustomEvent");
                        return o.initCustomEvent(t, e, n, r), o
                    }
                }
                var r = {
                        UNSENT: 0,
                        OPENED: 1,
                        HEADERS_RECEIVED: 2,
                        LOADING: 3,
                        DONE: 4
                    },
                    o = "readystatechange loadstart progress abort error load timeout loadend".split(" "),
                    i = "timeout withCredentials".split(" "),
                    c = "readyState responseURL status statusText responseType response responseText responseXML".split(" "),
                    u = {
                        100: "Continue",
                        101: "Switching Protocols",
                        200: "OK",
                        201: "Created",
                        202: "Accepted",
                        203: "Non-Authoritative Information",
                        204: "No Content",
                        205: "Reset Content",
                        206: "Partial Content",
                        300: "Multiple Choice",
                        301: "Moved Permanently",
                        302: "Found",
                        303: "See Other",
                        304: "Not Modified",
                        305: "Use Proxy",
                        307: "Temporary Redirect",
                        400: "Bad Request",
                        401: "Unauthorized",
                        402: "Payment Required",
                        403: "Forbidden",
                        404: "Not Found",
                        405: "Method Not Allowed",
                        406: "Not Acceptable",
                        407: "Proxy Authentication Required",
                        408: "Request Timeout",
                        409: "Conflict",
                        410: "Gone",
                        411: "Length Required",
                        412: "Precondition Failed",
                        413: "Request Entity Too Large",
                        414: "Request-URI Too Long",
                        415: "Unsupported Media Type",
                        416: "Requested Range Not Satisfiable",
                        417: "Expectation Failed",
                        422: "Unprocessable Entity",
                        500: "Internal Server Error",
                        501: "Not Implemented",
                        502: "Bad Gateway",
                        503: "Service Unavailable",
                        504: "Gateway Timeout",
                        505: "HTTP Version Not Supported"
                    };

                function s() {
                    this.custom = {
                        events: {},
                        requestHeaders: {},
                        responseHeaders: {}
                    }
                }

                function a(t, n, r) {
                    return "error" == r ? e.isFunction(t.error_template) ? t.error_template(n) : s.LocalService.listener(t) : e.isFunction(t.template) ? t.template(n) : s.LocalService.listener(t)
                }
                s._settings = {
                    timeout: "10-100",
                    noError: !1
                }, s.setup = function (t) {
                    return e.extend(s._settings, t), s._settings
                }, e.extend(s, r), e.extend(s.prototype, r), s.prototype.mock = !0, s.prototype.match = !1, e.extend(s.prototype, {
                    open: function (t, n, r, u, a) {
                        var f = this;
                        e.extend(this.custom, {
                            method: t,
                            url: n,
                            async: "boolean" != typeof r || r,
                            username: u,
                            password: a,
                            options: {
                                url: n,
                                type: t
                            }
                        }), this.custom.timeout = function (t) {
                            if ("number" == typeof t) return t;
                            if ("string" == typeof t && !~t.indexOf("-")) return parseInt(t, 10);
                            if ("string" == typeof t && ~t.indexOf("-")) {
                                var e = t.split("-"),
                                    n = parseInt(e[0], 10),
                                    r = parseInt(e[1], 10);
                                return Math.round(Math.random() * (r - n)) + n
                            }
                        }(s._settings.timeout);
                        var l = function (t) {
                            for (var n in s.LocalService._listener_listed) {
                                var r = s.LocalService._listener_listed[n];
                                if ((!r.rurl || o(r.rurl, t.url)) && (!r.rtype || o(r.rtype.toLowerCase(), t.type.toLowerCase()))) return r
                            }

                            function o(t, n) {
                                return "string" === e.type(t) ? t === n : "regexp" === e.type(t) ? t.test(n) : void 0
                            }
                        }(this.custom.options);

                        function p(t) {
                            for (var e = 0; e < c.length; e++) try {
                                f[c[e]] = v[c[e]]
                            } catch (t) {}
                            f.dispatchEvent(new Event(t.type))
                        }
                        if (l) this.match = !0, this.custom.template = l, this.readyState = s.OPENED, this.dispatchEvent(new Event("readystatechange"));
                        else {
                            var v = function () {
                                var t = (e = location.href, n = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/.exec(e.toLowerCase()) || [], /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(n[1]));
                                var e, n;
                                return window.ActiveXObject ? !t && r() || function () {
                                    try {
                                        return new window._ActiveXObject("Microsoft.XMLHTTP")
                                    } catch (t) {}
                                }() : r();

                                function r() {
                                    try {
                                        return new window._XMLHttpRequest
                                    } catch (t) {}
                                }
                            }();
                            this.custom.xhr = v;
                            for (var d = 0; d < o.length; d++) v.addEventListener(o[d], p);
                            u ? v.open(t, n, r, u, a) : v.open(t, n, r);
                            for (var h = 0; h < i.length; h++) try {
                                v[i[h]] = f[i[h]]
                            } catch (t) {}
                        }
                    },
                    setRequestHeader: function (t, e) {
                        if (this.match) {
                            var n = this.custom.requestHeaders;
                            n[t] ? n[t] += "," + e : n[t] = e
                        } else this.custom.xhr.setRequestHeader(t, e)
                    },
                    timeout: 0,
                    noError: !1,
                    withCredentials: !1,
                    upload: {},
                    send: function (t) {
                        var e = this,
                            n = this;

                        function r() {
                            n.readyState = s.HEADERS_RECEIVED, n.dispatchEvent(new Event("readystatechange")), n.readyState = s.LOADING, n.dispatchEvent(new Event("readystatechange")), n.status = 200, n.statusText = u[200], n.response = n.responseText = JSON.stringify(a(n.custom.template, n.custom.options), null, 4), n.readyState = s.DONE, n.dispatchEvent(new Event("readystatechange")), n.dispatchEvent(new Event("load")), n.dispatchEvent(new Event("loadend"))
                        }
                        this.custom.options.body = t, this.match ? (this.setRequestHeader("X-Requested-With", "MockXMLHttpRequest"), this.dispatchEvent(new Event("loadstart")), this.custom.async ? this.custom.template.beforeDone ? new Promise((function (t, n) {
                            e.custom.template.beforeDone(e.custom.options, t, n)
                        })).then((function (t) {
                            e.custom.options.local_data = t, r()
                        })).catch((function (t) {
                            console.warn("you can set reject({code:xxx,data:{}}) to setting the response code,default status code is 400"), e.custom.options.local_data = t;
                            var o, i = 400;
                            t.status && (i = t.status), e.noError ? r() : (o = i, console.log("status", o), n.readyState = s.HEADERS_RECEIVED, n.dispatchEvent(new Event("readystatechange")), n.readyState = s.LOADING, n.dispatchEvent(new Event("readystatechange")), n.status = o, n.statusText = u[o], console.log("error", n.custom.options), n.response = n.responseText = JSON.stringify(a(n.custom.template, n.custom.options, "error"), null, 4), n.readyState = s.DONE, n.dispatchEvent(new Event("readystatechange")), n.dispatchEvent(new Event("load")), n.dispatchEvent(new Event("loadend")))
                        })) : setTimeout((function () {
                            r()
                        }), this.custom.timeout) : r()) : this.custom.xhr.send(t)
                    },
                    abort: function () {
                        this.match ? (this.readyState = s.UNSENT, this.dispatchEvent(new Event("abort", !1, !1, this)), this.dispatchEvent(new Event("error", !1, !1, this))) : this.custom.xhr.abort()
                    }
                }), e.extend(s.prototype, {
                    responseURL: "",
                    status: s.UNSENT,
                    statusText: "",
                    getResponseHeader: function (t) {
                        return this.match ? this.custom.responseHeaders[t.toLowerCase()] : this.custom.xhr.getResponseHeader(t)
                    },
                    getAllResponseHeaders: function () {
                        if (!this.match) return this.custom.xhr.getAllResponseHeaders();
                        var t = this.custom.responseHeaders,
                            e = "";
                        for (var n in t) t.hasOwnProperty(n) && (e += n + ": " + t[n] + "\r\n");
                        return e
                    },
                    overrideMimeType: function () {},
                    responseType: "",
                    response: null,
                    responseText: "",
                    responseXML: null
                }), e.extend(s.prototype, {
                    addEventListener: function (t, e) {
                        var n = this.custom.events;
                        n[t] || (n[t] = []), n[t].push(e)
                    },
                    removeEventListener: function (t, e) {
                        for (var n = this.custom.events[t] || [], r = 0; r < n.length; r++) n[r] === e && n.splice(r--, 1)
                    },
                    dispatchEvent: function (t) {
                        for (var e = this.custom.events[t.type] || [], n = 0; n < e.length; n++) e[n].call(this, t);
                        var r = "on" + t.type;
                        this[r] && this[r](t)
                    }
                }), t.exports = s
            }.call(this, n(23)(t))
    }, function (t, e, n) {
        var r = n(10),
            o = n(11);
        t.exports = function (t) {
            return function (e, n) {
                var i, c, u = String(o(e)),
                    s = r(n),
                    a = u.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (i = u.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === a || (c = u.charCodeAt(s + 1)) < 56320 || c > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : c - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(19);
        n(21)({
            target: "RegExp",
            proto: !0,
            forced: r !== /./.exec
        }, {
            exec: r
        })
    }, function (t, e, n) {
        t.exports = !n(4) && !n(5)((function () {
            return 7 != Object.defineProperty(n(28)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, e, n) {
        var r = n(3);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function (t, e, n) {
        t.exports = n(25)("native-function-to-string", Function.toString)
    }, function (t, e, n) {
        "use strict";
        var r = n(21),
            o = n(45)(!1),
            i = [].indexOf,
            c = !!i && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (c || !n(49)(i)), "Array", {
            indexOf: function (t) {
                return c ? i.apply(this, arguments) || 0 : o(this, t, arguments[1])
            }
        })
    }, function (t, e, n) {
        var r = n(46),
            o = n(7),
            i = n(48);
        t.exports = function (t) {
            return function (e, n, c) {
                var u, s = r(e),
                    a = o(s.length),
                    f = i(c, a);
                if (t && n != n) {
                    for (; a > f;)
                        if ((u = s[f++]) != u) return !0
                } else
                    for (; a > f; f++)
                        if ((t || f in s) && s[f] === n) return t || f || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var r = n(47),
            o = n(11);
        t.exports = function (t) {
            return r(o(t))
        }
    }, function (t, e, n) {
        var r = n(8);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, e, n) {
        var r = n(10),
            o = Math.max,
            i = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(5);
        t.exports = function (t, e) {
            return !!t && r((function () {
                e ? t.call(null, (function () {}), 1) : t.call(null)
            }))
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(51),
            o = n(2),
            i = n(30),
            c = n(16),
            u = n(7),
            s = n(17),
            a = n(19),
            f = n(5),
            l = Math.min,
            p = [].push,
            v = "length",
            d = !f((function () {
                RegExp(4294967295, "y")
            }));
        n(18)("split", 2, (function (t, e, n, f) {
            var h;
            return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[v] || 2 != "ab".split(/(?:ab)*/)[v] || 4 != ".".split(/(.?)(.?)/)[v] || ".".split(/()()/)[v] > 1 || "".split(/.?/)[v] ? function (t, e) {
                var o = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!r(t)) return n.call(o, t, e);
                for (var i, c, u, s = [], f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, d = void 0 === e ? 4294967295 : e >>> 0, h = new RegExp(t.source, f + "g");
                    (i = a.call(h, o)) && !((c = h.lastIndex) > l && (s.push(o.slice(l, i.index)), i[v] > 1 && i.index < o[v] && p.apply(s, i.slice(1)), u = i[0][v], l = c, s[v] >= d));) h.lastIndex === i.index && h.lastIndex++;
                return l === o[v] ? !u && h.test("") || s.push("") : s.push(o.slice(l)), s[v] > d ? s.slice(0, d) : s
            } : "0".split(void 0, 0)[v] ? function (t, e) {
                return void 0 === t && 0 === e ? [] : n.call(this, t, e)
            } : n, [function (n, r) {
                var o = t(this),
                    i = null == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, o, r) : h.call(String(o), n, r)
            }, function (t, e) {
                var r = f(h, t, this, e, h !== n);
                if (r.done) return r.value;
                var a = o(t),
                    p = String(this),
                    v = i(a, RegExp),
                    y = a.unicode,
                    g = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (d ? "y" : "g"),
                    m = new v(d ? a : "^(?:" + a.source + ")", g),
                    x = void 0 === e ? 4294967295 : e >>> 0;
                if (0 === x) return [];
                if (0 === p.length) return null === s(m, p) ? [p] : [];
                for (var w = 0, b = 0, E = []; b < p.length;) {
                    m.lastIndex = d ? b : 0;
                    var _, S = s(m, d ? p : p.slice(b));
                    if (null === S || (_ = l(u(m.lastIndex + (d ? 0 : b)), p.length)) === w) b = c(p, b, y);
                    else {
                        if (E.push(p.slice(w, b)), E.length === x) return E;
                        for (var O = 1; O <= S.length - 1; O++)
                            if (E.push(S[O]), E.length === x) return E;
                        b = w = _
                    }
                }
                return E.push(p.slice(w)), E
            }]
        }))
    }, function (t, e, n) {
        var r = n(3),
            o = n(8),
            i = n(0)("match");
        t.exports = function (t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
        }
    }, function (t, e, n) {
        "use strict";
        var r, o, i, c, u = n(26),
            s = n(1),
            a = n(14),
            f = n(12),
            l = n(21),
            p = n(3),
            v = n(15),
            d = n(53),
            h = n(54),
            y = n(30),
            g = n(33).set,
            m = n(60)(),
            x = n(34),
            w = n(61),
            b = n(62),
            E = n(63),
            _ = s.TypeError,
            S = s.process,
            O = S && S.versions,
            j = O && O.v8 || "",
            R = s.Promise,
            P = "process" == f(S),
            T = function () {},
            M = o = x.f,
            A = !! function () {
                try {
                    var t = R.resolve(1),
                        e = (t.constructor = {})[n(0)("species")] = function (t) {
                            t(T, T)
                        };
                    return (P || "function" == typeof PromiseRejectionEvent) && t.then(T) instanceof e && 0 !== j.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
                } catch (t) {}
            }(),
            N = function (t) {
                var e;
                return !(!p(t) || "function" != typeof (e = t.then)) && e
            },
            I = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    m((function () {
                        for (var r = t._v, o = 1 == t._s, i = 0, c = function (e) {
                                var n, i, c, u = o ? e.ok : e.fail,
                                    s = e.resolve,
                                    a = e.reject,
                                    f = e.domain;
                                try {
                                    u ? (o || (2 == t._h && D(t), t._h = 1), !0 === u ? n = r : (f && f.enter(), n = u(r), f && (f.exit(), c = !0)), n === e.promise ? a(_("Promise-chain cycle")) : (i = N(n)) ? i.call(n, s, a) : s(n)) : a(r)
                                } catch (t) {
                                    f && !c && f.exit(), a(t)
                                }
                            }; n.length > i;) c(n[i++]);
                        t._c = [], t._n = !1, e && !t._h && L(t)
                    }))
                }
            },
            L = function (t) {
                g.call(s, (function () {
                    var e, n, r, o = t._v,
                        i = C(t);
                    if (i && (e = w((function () {
                            P ? S.emit("unhandledRejection", o, t) : (n = s.onunhandledrejection) ? n({
                                promise: t,
                                reason: o
                            }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o)
                        })), t._h = P || C(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
                }))
            },
            C = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            D = function (t) {
                g.call(s, (function () {
                    var e;
                    P ? S.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                }))
            },
            H = function (t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
            },
            F = function (t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw _("Promise can't be resolved itself");
                        (e = N(t)) ? m((function () {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t, a(F, r, 1), a(H, r, 1))
                            } catch (t) {
                                H.call(r, t)
                            }
                        })): (n._v = t, n._s = 1, I(n, !1))
                    } catch (t) {
                        H.call({
                            _w: n,
                            _d: !1
                        }, t)
                    }
                }
            };
        A || (R = function (t) {
            d(this, R, "Promise", "_h"), v(t), r.call(this);
            try {
                t(a(F, this, 1), a(H, this, 1))
            } catch (t) {
                H.call(this, t)
            }
        }, (r = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n(64)(R.prototype, {
            then: function (t, e) {
                var n = M(y(this, R));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = P ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise
            },
            catch: function (t) {
                return this.then(void 0, t)
            }
        }), i = function () {
            var t = new r;
            this.promise = t, this.resolve = a(F, t, 1), this.reject = a(H, t, 1)
        }, x.f = M = function (t) {
            return t === R || t === c ? new i(t) : o(t)
        }), l(l.G + l.W + l.F * !A, {
            Promise: R
        }), n(65)(R, "Promise"), n(66)("Promise"), c = n(9).Promise, l(l.S + l.F * !A, "Promise", {
            reject: function (t) {
                var e = M(this);
                return (0, e.reject)(t), e.promise
            }
        }), l(l.S + l.F * (u || !A), "Promise", {
            resolve: function (t) {
                return E(u && this === c ? R : this, t)
            }
        }), l(l.S + l.F * !(A && n(67)((function (t) {
            R.all(t).catch(T)
        }))), "Promise", {
            all: function (t) {
                var e = this,
                    n = M(e),
                    r = n.resolve,
                    o = n.reject,
                    i = w((function () {
                        var n = [],
                            i = 0,
                            c = 1;
                        h(t, !1, (function (t) {
                            var u = i++,
                                s = !1;
                            n.push(void 0), c++, e.resolve(t).then((function (t) {
                                s || (s = !0, n[u] = t, --c || r(n))
                            }), o)
                        })), --c || r(n)
                    }));
                return i.e && o(i.v), n.promise
            },
            race: function (t) {
                var e = this,
                    n = M(e),
                    r = n.reject,
                    o = w((function () {
                        h(t, !1, (function (t) {
                            e.resolve(t).then(n.resolve, r)
                        }))
                    }));
                return o.e && r(o.v), n.promise
            }
        })
    }, function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function (t, e, n) {
        var r = n(14),
            o = n(55),
            i = n(56),
            c = n(2),
            u = n(7),
            s = n(57),
            a = {},
            f = {};
        (e = t.exports = function (t, e, n, l, p) {
            var v, d, h, y, g = p ? function () {
                    return t
                } : s(t),
                m = r(n, l, e ? 2 : 1),
                x = 0;
            if ("function" != typeof g) throw TypeError(t + " is not iterable!");
            if (i(g)) {
                for (v = u(t.length); v > x; x++)
                    if ((y = e ? m(c(d = t[x])[0], d[1]) : m(t[x])) === a || y === f) return y
            } else
                for (h = g.call(t); !(d = h.next()).done;)
                    if ((y = o(h, m, d.value, e)) === a || y === f) return y
        }).BREAK = a, e.RETURN = f
    }, function (t, e, n) {
        var r = n(2);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function (t, e, n) {
        var r = n(32),
            o = n(0)("iterator"),
            i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function (t, e, n) {
        var r = n(12),
            o = n(0)("iterator"),
            i = n(32);
        t.exports = n(9).getIteratorMethod = function (t) {
            if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function (t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement
    }, function (t, e, n) {
        var r = n(1),
            o = n(33).set,
            i = r.MutationObserver || r.WebKitMutationObserver,
            c = r.process,
            u = r.Promise,
            s = "process" == n(8)(c);
        t.exports = function () {
            var t, e, n, a = function () {
                var r, o;
                for (s && (r = c.domain) && r.exit(); t;) {
                    o = t.fn, t = t.next;
                    try {
                        o()
                    } catch (r) {
                        throw t ? n() : e = void 0, r
                    }
                }
                e = void 0, r && r.enter()
            };
            if (s) n = function () {
                c.nextTick(a)
            };
            else if (!i || r.navigator && r.navigator.standalone)
                if (u && u.resolve) {
                    var f = u.resolve(void 0);
                    n = function () {
                        f.then(a)
                    }
                } else n = function () {
                    o.call(r, a)
                };
            else {
                var l = !0,
                    p = document.createTextNode("");
                new i(a).observe(p, {
                    characterData: !0
                }), n = function () {
                    p.data = l = !l
                }
            }
            return function (r) {
                var o = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = o), t || (t = o, n()), e = o
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }, function (t, e, n) {
        var r = n(1).navigator;
        t.exports = r && r.userAgent || ""
    }, function (t, e, n) {
        var r = n(2),
            o = n(3),
            i = n(34);
        t.exports = function (t, e) {
            if (r(t), o(e) && e.constructor === t) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise
        }
    }, function (t, e, n) {
        var r = n(6);
        t.exports = function (t, e, n) {
            for (var o in e) r(t, o, e[o], n);
            return t
        }
    }, function (t, e, n) {
        var r = n(13).f,
            o = n(29),
            i = n(0)("toStringTag");
        t.exports = function (t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(1),
            o = n(13),
            i = n(4),
            c = n(0)("species");
        t.exports = function (t) {
            var e = r[t];
            i && e && !e[c] && o.f(e, c, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (t, e, n) {
        var r = n(0)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i.return = function () {
                o = !0
            }, Array.from(i, (function () {
                throw 2
            }))
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    c = i[r]();
                c.next = function () {
                    return {
                        done: n = !0
                    }
                }, i[r] = function () {
                    return c
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                n(24), n(31), n(69), n(71), n(72);
                var e = {
                    extend: function () {
                        var t, n, r, o, i, c = arguments[0] || {},
                            u = 1,
                            s = arguments.length;
                        for (1 === s && (c = this, u = 0); u < s; u++)
                            if (t = arguments[u])
                                for (n in t) r = c[n], c !== (o = t[n]) && void 0 !== o && (e.isArray(o) || e.isObject(o) ? (e.isArray(o) && (i = r && e.isArray(r) ? r : []), e.isObject(o) && (i = r && e.isObject(r) ? r : {}), c[n] = e.extend(i, o)) : c[n] = o);
                        return c
                    },
                    each: function (t, e, n) {
                        var r, o;
                        if ("number" === this.type(t))
                            for (r = 0; r < t; r++) e(r, r);
                        else if (t.length === +t.length)
                            for (r = 0; r < t.length && !1 !== e.call(n, t[r], r, t); r++);
                        else
                            for (o in t)
                                if (!1 === e.call(n, t[o], o, t)) break
                    },
                    type: function (t) {
                        return null == t ? String(t) : Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1].toLowerCase()
                    }
                };
                e.each("String Object Array RegExp Function".split(" "), (function (t) {
                    e["is" + t] = function (n) {
                        return e.type(n) === t.toLowerCase()
                    }
                })), e.isObjectOrArray = function (t) {
                    return e.isObject(t) || e.isArray(t)
                }, e.isNumeric = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, e.keys = function (t) {
                    var e = [];
                    for (var n in t) t.hasOwnProperty(n) && e.push(n);
                    return e
                }, e.values = function (t) {
                    var e = [];
                    for (var n in t) t.hasOwnProperty(n) && e.push(t[n]);
                    return e
                }, e.heredoc = function (t) {
                    return t.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "").replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "")
                }, e.noop = function () {}, t.exports = e
            }.call(this, n(23)(t))
    }, function (t, e, n) {
        "use strict";
        var r = n(2),
            o = n(70),
            i = n(7),
            c = n(10),
            u = n(16),
            s = n(17),
            a = Math.max,
            f = Math.min,
            l = Math.floor,
            p = /\$([$&`']|\d\d?|<[^>]*>)/g,
            v = /\$([$&`']|\d\d?)/g;
        n(18)("replace", 2, (function (t, e, n, d) {
            return [function (r, o) {
                var i = t(this),
                    c = null == r ? void 0 : r[e];
                return void 0 !== c ? c.call(r, i, o) : n.call(String(i), r, o)
            }, function (t, e) {
                var o = d(n, t, this, e);
                if (o.done) return o.value;
                var l = r(t),
                    p = String(this),
                    v = "function" == typeof e;
                v || (e = String(e));
                var y = l.global;
                if (y) {
                    var g = l.unicode;
                    l.lastIndex = 0
                }
                for (var m = [];;) {
                    var x = s(l, p);
                    if (null === x) break;
                    if (m.push(x), !y) break;
                    "" === String(x[0]) && (l.lastIndex = u(p, i(l.lastIndex), g))
                }
                for (var w, b = "", E = 0, _ = 0; _ < m.length; _++) {
                    x = m[_];
                    for (var S = String(x[0]), O = a(f(c(x.index), p.length), 0), j = [], R = 1; R < x.length; R++) j.push(void 0 === (w = x[R]) ? w : String(w));
                    var P = x.groups;
                    if (v) {
                        var T = [S].concat(j, O, p);
                        void 0 !== P && T.push(P);
                        var M = String(e.apply(void 0, T))
                    } else M = h(S, p, O, j, P, e);
                    O >= E && (b += p.slice(E, O) + M, E = O + S.length)
                }
                return b + p.slice(E)
            }];

            function h(t, e, r, i, c, u) {
                var s = r + t.length,
                    a = i.length,
                    f = v;
                return void 0 !== c && (c = o(c), f = p), n.call(u, f, (function (n, o) {
                    var u;
                    switch (o.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return e.slice(0, r);
                        case "'":
                            return e.slice(s);
                        case "<":
                            u = c[o.slice(1, -1)];
                            break;
                        default:
                            var f = +o;
                            if (0 === f) return n;
                            if (f > a) {
                                var p = l(f / 10);
                                return 0 === p ? n : p <= a ? void 0 === i[p - 1] ? o.charAt(1) : i[p - 1] + o.charAt(1) : n
                            }
                            u = i[f - 1]
                    }
                    return void 0 === u ? "" : u
                }))
            }
        }))
    }, function (t, e, n) {
        var r = n(11);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, e, n) {
        var r = Date.prototype,
            o = r.toString,
            i = r.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(6)(r, "toString", (function () {
            var t = i.call(this);
            return t == t ? o.call(this) : "Invalid Date"
        }))
    }, function (t, e, n) {
        "use strict";
        n(73);
        var r = n(2),
            o = n(20),
            i = n(4),
            c = /./.toString,
            u = function (t) {
                n(6)(RegExp.prototype, "toString", t, !0)
            };
        n(5)((function () {
            return "/a/b" != c.call({
                source: "a",
                flags: "b"
            })
        })) ? u((function () {
            var t = r(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0)
        })) : "toString" != c.name && u((function () {
            return c.call(this)
        }))
    }, function (t, e, n) {
        n(4) && "g" != /./g.flags && n(13).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(20)
        })
    }])
}));
//# sourceMappingURL=LocalService.js.map