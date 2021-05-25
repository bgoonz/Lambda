/*! For license information please see main.3d967720.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  [
    function (e, t, n) {
      "use strict";
      e.exports = n(31);
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      }),
        n.d(t, "b", function () {
          return w;
        }),
        n.d(t, "c", function () {
          return S;
        }),
        n.d(t, "d", function () {
          return O;
        }),
        n.d(t, "e", function () {
          return b;
        }),
        n.d(t, "f", function () {
          return L;
        }),
        n.d(t, "g", function () {
          return j;
        }),
        n.d(t, "h", function () {
          return h;
        }),
        n.d(t, "i", function () {
          return x;
        }),
        n.d(t, "j", function () {
          return _;
        }),
        n.d(t, "k", function () {
          return M;
        }),
        n.d(t, "l", function () {
          return z;
        }),
        n.d(t, "m", function () {
          return U;
        }),
        n.d(t, "n", function () {
          return $;
        }),
        n.d(t, "o", function () {
          return D;
        });
      var r = n(3),
        a = n(0),
        o = n.n(a),
        i = (n(7), n(5)),
        l = n(18),
        s = n(4),
        u = n(2),
        c = n(19),
        d = n.n(c),
        p = (n(24), n(6)),
        f = n(28),
        m = n.n(f),
        g = (function (e) {
          var t = Object(l.a)();
          return (t.displayName = e), t;
        })("Router-History"),
        h = (function (e) {
          var t = Object(l.a)();
          return (t.displayName = e), t;
        })("Router"),
        b = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                location: t.history.location,
              }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._isMounted
                    ? n.setState({ location: e })
                    : (n._pendingLocation = e);
                })),
              n
            );
          }
          Object(r.a)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: "/", url: "/", params: {}, isExact: "/" === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this._isMounted = !0),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && this.unlisten();
            }),
            (n.render = function () {
              return o.a.createElement(
                h.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                o.a.createElement(g.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                })
              );
            }),
            t
          );
        })(o.a.Component);
      var v = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
              i.d
            )(t.props)),
            t
          );
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            return o.a.createElement(b, {
              history: this.history,
              children: this.props.children,
            });
          }),
          t
        );
      })(o.a.Component);
      var y = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        Object(r.a)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            this.props.onMount && this.props.onMount.call(this, this);
          }),
          (n.componentDidUpdate = function (e) {
            this.props.onUpdate && this.props.onUpdate.call(this, this, e);
          }),
          (n.componentWillUnmount = function () {
            this.props.onUnmount && this.props.onUnmount.call(this, this);
          }),
          (n.render = function () {
            return null;
          }),
          t
        );
      })(o.a.Component);
      function w(e) {
        var t = e.message,
          n = e.when,
          r = void 0 === n || n;
        return o.a.createElement(h.Consumer, null, function (e) {
          if ((e || Object(s.a)(!1), !r || e.staticContext)) return null;
          var n = e.history.block;
          return o.a.createElement(y, {
            onMount: function (e) {
              e.release = n(t);
            },
            onUpdate: function (e, r) {
              r.message !== t && (e.release(), (e.release = n(t)));
            },
            onUnmount: function (e) {
              e.release();
            },
            message: t,
          });
        });
      }
      var k = {},
        E = 0;
      function x(e, t) {
        return (
          void 0 === e && (e = "/"),
          void 0 === t && (t = {}),
          "/" === e
            ? e
            : (function (e) {
                if (k[e]) return k[e];
                var t = d.a.compile(e);
                return E < 1e4 && ((k[e] = t), E++), t;
              })(e)(t, { pretty: !0 })
        );
      }
      function S(e) {
        var t = e.computedMatch,
          n = e.to,
          r = e.push,
          a = void 0 !== r && r;
        return o.a.createElement(h.Consumer, null, function (e) {
          e || Object(s.a)(!1);
          var r = e.history,
            l = e.staticContext,
            c = a ? r.push : r.replace,
            d = Object(i.c)(
              t
                ? "string" == typeof n
                  ? x(n, t.params)
                  : Object(u.a)({}, n, { pathname: x(n.pathname, t.params) })
                : n
            );
          return l
            ? (c(d), null)
            : o.a.createElement(y, {
                onMount: function () {
                  c(d);
                },
                onUpdate: function (e, t) {
                  var n = Object(i.c)(t.to);
                  Object(i.f)(n, Object(u.a)({}, d, { key: n.key })) || c(d);
                },
                to: n,
              });
        });
      }
      var T = {},
        C = 0;
      function _(e, t) {
        void 0 === t && (t = {}),
          ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          a = n.exact,
          o = void 0 !== a && a,
          i = n.strict,
          l = void 0 !== i && i,
          s = n.sensitive,
          u = void 0 !== s && s;
        return [].concat(r).reduce(function (t, n) {
          if (!n && "" !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = "" + t.end + t.strict + t.sensitive,
                r = T[n] || (T[n] = {});
              if (r[e]) return r[e];
              var a = [],
                o = { regexp: d()(e, a, t), keys: a };
              return C < 1e4 && ((r[e] = o), C++), o;
            })(n, { end: o, strict: l, sensitive: u }),
            a = r.regexp,
            i = r.keys,
            s = a.exec(e);
          if (!s) return null;
          var c = s[0],
            p = s.slice(1),
            f = e === c;
          return o && !f
            ? null
            : {
                path: n,
                url: "/" === n && "" === c ? "/" : c,
                isExact: f,
                params: i.reduce(function (e, t, n) {
                  return (e[t.name] = p[n]), e;
                }, {}),
              };
        }, null);
      }
      var O = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return o.a.createElement(h.Consumer, null, function (t) {
              t || Object(s.a)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? _(n.pathname, e.props)
                  : t.match,
                a = Object(u.a)({}, t, { location: n, match: r }),
                i = e.props,
                l = i.children,
                c = i.component,
                d = i.render;
              return (
                Array.isArray(l) && 0 === l.length && (l = null),
                o.a.createElement(
                  h.Provider,
                  { value: a },
                  a.match
                    ? l
                      ? "function" == typeof l
                        ? l(a)
                        : l
                      : c
                      ? o.a.createElement(c, a)
                      : d
                      ? d(a)
                      : null
                    : "function" == typeof l
                    ? l(a)
                    : null
                )
              );
            });
          }),
          t
        );
      })(o.a.Component);
      function P(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function R(e, t) {
        if (!e) return t;
        var n = P(e);
        return 0 !== t.pathname.indexOf(n)
          ? t
          : Object(u.a)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function A(e) {
        return "string" == typeof e ? e : Object(i.e)(e);
      }
      function N(e) {
        return function () {
          Object(s.a)(!1);
        };
      }
      function I() {}
      var L = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).handlePush =
              function (e) {
                return t.navigateTo(e, "PUSH");
              }),
            (t.handleReplace = function (e) {
              return t.navigateTo(e, "REPLACE");
            }),
            (t.handleListen = function () {
              return I;
            }),
            (t.handleBlock = function () {
              return I;
            }),
            t
          );
        }
        Object(r.a)(t, e);
        var n = t.prototype;
        return (
          (n.navigateTo = function (e, t) {
            var n = this.props,
              r = n.basename,
              a = void 0 === r ? "" : r,
              o = n.context,
              l = void 0 === o ? {} : o;
            (l.action = t),
              (l.location = (function (e, t) {
                return e
                  ? Object(u.a)({}, t, { pathname: P(e) + t.pathname })
                  : t;
              })(a, Object(i.c)(e))),
              (l.url = A(l.location));
          }),
          (n.render = function () {
            var e = this.props,
              t = e.basename,
              n = void 0 === t ? "" : t,
              r = e.context,
              a = void 0 === r ? {} : r,
              l = e.location,
              s = void 0 === l ? "/" : l,
              c = Object(p.a)(e, ["basename", "context", "location"]),
              d = {
                createHref: function (e) {
                  return P(n + A(e));
                },
                action: "POP",
                location: R(n, Object(i.c)(s)),
                push: this.handlePush,
                replace: this.handleReplace,
                go: N(),
                goBack: N(),
                goForward: N(),
                listen: this.handleListen,
                block: this.handleBlock,
              };
            return o.a.createElement(
              b,
              Object(u.a)({}, c, { history: d, staticContext: a })
            );
          }),
          t
        );
      })(o.a.Component);
      var j = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return o.a.createElement(h.Consumer, null, function (t) {
              t || Object(s.a)(!1);
              var n,
                r,
                a = e.props.location || t.location;
              return (
                o.a.Children.forEach(e.props.children, function (e) {
                  if (null == r && o.a.isValidElement(e)) {
                    n = e;
                    var i = e.props.path || e.props.from;
                    r = i
                      ? _(a.pathname, Object(u.a)({}, e.props, { path: i }))
                      : t.match;
                  }
                }),
                r
                  ? o.a.cloneElement(n, { location: a, computedMatch: r })
                  : null
              );
            });
          }),
          t
        );
      })(o.a.Component);
      function D(e) {
        var t = "withRouter(" + (e.displayName || e.name) + ")",
          n = function (t) {
            var n = t.wrappedComponentRef,
              r = Object(p.a)(t, ["wrappedComponentRef"]);
            return o.a.createElement(h.Consumer, null, function (t) {
              return (
                t || Object(s.a)(!1),
                o.a.createElement(e, Object(u.a)({}, r, t, { ref: n }))
              );
            });
          };
        return (n.displayName = t), (n.WrappedComponent = e), m()(n, e);
      }
      var F = o.a.useContext;
      function M() {
        return F(g);
      }
      function z() {
        return F(h).location;
      }
      function U() {
        var e = F(h).match;
        return e ? e.params : {};
      }
      function $(e) {
        var t = z(),
          n = F(h).match;
        return e ? _(t.pathname, e) : n;
      }
    },
    function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      var r = "Invariant failed";
      t.a = function (e, t) {
        if (!e) throw new Error(r);
      };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return x;
      }),
        n.d(t, "b", function () {
          return P;
        }),
        n.d(t, "d", function () {
          return A;
        }),
        n.d(t, "c", function () {
          return g;
        }),
        n.d(t, "f", function () {
          return h;
        }),
        n.d(t, "e", function () {
          return m;
        });
      var r = n(2);
      function a(e) {
        return "/" === e.charAt(0);
      }
      function o(e, t) {
        for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1)
          e[n] = e[r];
        e.pop();
      }
      var i = function (e, t) {
        void 0 === t && (t = "");
        var n,
          r = (e && e.split("/")) || [],
          i = (t && t.split("/")) || [],
          l = e && a(e),
          s = t && a(t),
          u = l || s;
        if (
          (e && a(e) ? (i = r) : r.length && (i.pop(), (i = i.concat(r))),
          !i.length)
        )
          return "/";
        if (i.length) {
          var c = i[i.length - 1];
          n = "." === c || ".." === c || "" === c;
        } else n = !1;
        for (var d = 0, p = i.length; p >= 0; p--) {
          var f = i[p];
          "." === f
            ? o(i, p)
            : ".." === f
            ? (o(i, p), d++)
            : d && (o(i, p), d--);
        }
        if (!u) for (; d--; d) i.unshift("..");
        !u || "" === i[0] || (i[0] && a(i[0])) || i.unshift("");
        var m = i.join("/");
        return n && "/" !== m.substr(-1) && (m += "/"), m;
      };
      function l(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      var s = function e(t, n) {
          if (t === n) return !0;
          if (null == t || null == n) return !1;
          if (Array.isArray(t))
            return (
              Array.isArray(n) &&
              t.length === n.length &&
              t.every(function (t, r) {
                return e(t, n[r]);
              })
            );
          if ("object" == typeof t || "object" == typeof n) {
            var r = l(t),
              a = l(n);
            return r !== t || a !== n
              ? e(r, a)
              : Object.keys(Object.assign({}, t, n)).every(function (r) {
                  return e(t[r], n[r]);
                });
          }
          return !1;
        },
        u = n(4);
      function c(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function d(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function p(e, t) {
        return (function (e, t) {
          return (
            0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
            -1 !== "/?#".indexOf(e.charAt(t.length))
          );
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function f(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function m(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          a = t || "/";
        return (
          n && "?" !== n && (a += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (a += "#" === r.charAt(0) ? r : "#" + r),
          a
        );
      }
      function g(e, t, n, a) {
        var o;
        "string" == typeof e
          ? ((o = (function (e) {
              var t = e || "/",
                n = "",
                r = "",
                a = t.indexOf("#");
              -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
              var o = t.indexOf("?");
              return (
                -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))),
                {
                  pathname: t,
                  search: "?" === n ? "" : n,
                  hash: "#" === r ? "" : r,
                }
              );
            })(e)).state = t)
          : (void 0 === (o = Object(r.a)({}, e)).pathname && (o.pathname = ""),
            o.search
              ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search)
              : (o.search = ""),
            o.hash
              ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash)
              : (o.hash = ""),
            void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (o.key = n),
          a
            ? o.pathname
              ? "/" !== o.pathname.charAt(0) &&
                (o.pathname = i(o.pathname, a.pathname))
              : (o.pathname = a.pathname)
            : o.pathname || (o.pathname = "/"),
          o
        );
      }
      function h(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          s(e.state, t.state)
        );
      }
      function b() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, a) {
            if (null != e) {
              var o = "function" == typeof e ? e(t, n) : e;
              "string" == typeof o
                ? "function" == typeof r
                  ? r(o, a)
                  : a(!0)
                : a(!1 !== o);
            } else a(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var v = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function y(e, t) {
        t(window.confirm(e));
      }
      var w = "popstate",
        k = "hashchange";
      function E() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function x(e) {
        void 0 === e && (e = {}), v || Object(u.a)(!1);
        var t,
          n = window.history,
          a =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = e,
          l = i.forceRefresh,
          s = void 0 !== l && l,
          d = i.getUserConfirmation,
          h = void 0 === d ? y : d,
          x = i.keyLength,
          S = void 0 === x ? 6 : x,
          T = e.basename ? f(c(e.basename)) : "";
        function C(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            a = window.location,
            o = a.pathname + a.search + a.hash;
          return T && (o = p(o, T)), g(o, r, n);
        }
        function _() {
          return Math.random().toString(36).substr(2, S);
        }
        var O = b();
        function P(e) {
          Object(r.a)($, e),
            ($.length = n.length),
            O.notifyListeners($.location, $.action);
        }
        function R(e) {
          (function (e) {
            return (
              void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            );
          })(e) || I(C(e.state));
        }
        function A() {
          I(C(E()));
        }
        var N = !1;
        function I(e) {
          if (N) (N = !1), P();
          else {
            O.confirmTransitionTo(e, "POP", h, function (t) {
              t
                ? P({ action: "POP", location: e })
                : (function (e) {
                    var t = $.location,
                      n = j.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = j.indexOf(e.key);
                    -1 === r && (r = 0);
                    var a = n - r;
                    a && ((N = !0), F(a));
                  })(e);
            });
          }
        }
        var L = C(E()),
          j = [L.key];
        function D(e) {
          return T + m(e);
        }
        function F(e) {
          n.go(e);
        }
        var M = 0;
        function z(e) {
          1 === (M += e) && 1 === e
            ? (window.addEventListener(w, R),
              o && window.addEventListener(k, A))
            : 0 === M &&
              (window.removeEventListener(w, R),
              o && window.removeEventListener(k, A));
        }
        var U = !1;
        var $ = {
          length: n.length,
          action: "POP",
          location: L,
          createHref: D,
          push: function (e, t) {
            var r = "PUSH",
              o = g(e, t, _(), $.location);
            O.confirmTransitionTo(o, r, h, function (e) {
              if (e) {
                var t = D(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.pushState({ key: i, state: l }, null, t), s))
                    window.location.href = t;
                  else {
                    var u = j.indexOf($.location.key),
                      c = j.slice(0, u + 1);
                    c.push(o.key), (j = c), P({ action: r, location: o });
                  }
                else window.location.href = t;
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              o = g(e, t, _(), $.location);
            O.confirmTransitionTo(o, r, h, function (e) {
              if (e) {
                var t = D(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.replaceState({ key: i, state: l }, null, t), s))
                    window.location.replace(t);
                  else {
                    var u = j.indexOf($.location.key);
                    -1 !== u && (j[u] = o.key), P({ action: r, location: o });
                  }
                else window.location.replace(t);
              }
            });
          },
          go: F,
          goBack: function () {
            F(-1);
          },
          goForward: function () {
            F(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = O.setPrompt(e);
            return (
              U || (z(1), (U = !0)),
              function () {
                return U && ((U = !1), z(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = O.appendListener(e);
            return (
              z(1),
              function () {
                z(-1), t();
              }
            );
          },
        };
        return $;
      }
      var S = "hashchange",
        T = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + d(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: d, decodePath: c },
          slash: { encodePath: c, decodePath: c },
        };
      function C(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function _() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function O(e) {
        window.location.replace(C(window.location.href) + "#" + e);
      }
      function P(e) {
        void 0 === e && (e = {}), v || Object(u.a)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf("Firefox"), e),
          a = n.getUserConfirmation,
          o = void 0 === a ? y : a,
          i = n.hashType,
          l = void 0 === i ? "slash" : i,
          s = e.basename ? f(c(e.basename)) : "",
          d = T[l],
          h = d.encodePath,
          w = d.decodePath;
        function k() {
          var e = w(_());
          return s && (e = p(e, s)), g(e);
        }
        var E = b();
        function x(e) {
          Object(r.a)(U, e),
            (U.length = t.length),
            E.notifyListeners(U.location, U.action);
        }
        var P = !1,
          R = null;
        function A() {
          var e,
            t,
            n = _(),
            r = h(n);
          if (n !== r) O(r);
          else {
            var a = k(),
              i = U.location;
            if (
              !P &&
              ((t = a),
              (e = i).pathname === t.pathname &&
                e.search === t.search &&
                e.hash === t.hash)
            )
              return;
            if (R === m(a)) return;
            (R = null),
              (function (e) {
                if (P) (P = !1), x();
                else {
                  var t = "POP";
                  E.confirmTransitionTo(e, t, o, function (n) {
                    n
                      ? x({ action: t, location: e })
                      : (function (e) {
                          var t = U.location,
                            n = j.lastIndexOf(m(t));
                          -1 === n && (n = 0);
                          var r = j.lastIndexOf(m(e));
                          -1 === r && (r = 0);
                          var a = n - r;
                          a && ((P = !0), D(a));
                        })(e);
                  });
                }
              })(a);
          }
        }
        var N = _(),
          I = h(N);
        N !== I && O(I);
        var L = k(),
          j = [m(L)];
        function D(e) {
          t.go(e);
        }
        var F = 0;
        function M(e) {
          1 === (F += e) && 1 === e
            ? window.addEventListener(S, A)
            : 0 === F && window.removeEventListener(S, A);
        }
        var z = !1;
        var U = {
          length: t.length,
          action: "POP",
          location: L,
          createHref: function (e) {
            var t = document.querySelector("base"),
              n = "";
            return (
              t && t.getAttribute("href") && (n = C(window.location.href)),
              n + "#" + h(s + m(e))
            );
          },
          push: function (e, t) {
            var n = "PUSH",
              r = g(e, void 0, void 0, U.location);
            E.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = m(r),
                  a = h(s + t);
                if (_() !== a) {
                  (R = t),
                    (function (e) {
                      window.location.hash = e;
                    })(a);
                  var o = j.lastIndexOf(m(U.location)),
                    i = j.slice(0, o + 1);
                  i.push(t), (j = i), x({ action: n, location: r });
                } else x();
              }
            });
          },
          replace: function (e, t) {
            var n = "REPLACE",
              r = g(e, void 0, void 0, U.location);
            E.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = m(r),
                  a = h(s + t);
                _() !== a && ((R = t), O(a));
                var o = j.indexOf(m(U.location));
                -1 !== o && (j[o] = t), x({ action: n, location: r });
              }
            });
          },
          go: D,
          goBack: function () {
            D(-1);
          },
          goForward: function () {
            D(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = E.setPrompt(e);
            return (
              z || (M(1), (z = !0)),
              function () {
                return z && ((z = !1), M(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = E.appendListener(e);
            return (
              M(1),
              function () {
                M(-1), t();
              }
            );
          },
        };
        return U;
      }
      function R(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function A(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          a = t.initialEntries,
          o = void 0 === a ? ["/"] : a,
          i = t.initialIndex,
          l = void 0 === i ? 0 : i,
          s = t.keyLength,
          u = void 0 === s ? 6 : s,
          c = b();
        function d(e) {
          Object(r.a)(w, e),
            (w.length = w.entries.length),
            c.notifyListeners(w.location, w.action);
        }
        function p() {
          return Math.random().toString(36).substr(2, u);
        }
        var f = R(l, 0, o.length - 1),
          h = o.map(function (e) {
            return g(e, void 0, "string" == typeof e ? p() : e.key || p());
          }),
          v = m;
        function y(e) {
          var t = R(w.index + e, 0, w.entries.length - 1),
            r = w.entries[t];
          c.confirmTransitionTo(r, "POP", n, function (e) {
            e ? d({ action: "POP", location: r, index: t }) : d();
          });
        }
        var w = {
          length: h.length,
          action: "POP",
          location: h[f],
          index: f,
          entries: h,
          createHref: v,
          push: function (e, t) {
            var r = "PUSH",
              a = g(e, t, p(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              if (e) {
                var t = w.index + 1,
                  n = w.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, a) : n.push(a),
                  d({ action: r, location: a, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              a = g(e, t, p(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              e && ((w.entries[w.index] = a), d({ action: r, location: a }));
            });
          },
          go: y,
          goBack: function () {
            y(-1);
          },
          goForward: function () {
            y(1);
          },
          canGo: function (e) {
            var t = w.index + e;
            return t >= 0 && t < w.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), c.setPrompt(e);
          },
          listen: function (e) {
            return c.appendListener(e);
          },
        };
        return w;
      }
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      e.exports = n(35)();
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n(1),
        a = n(2),
        o = n(0),
        i = n.n(o);
      function l(e, t, n) {
        return (
          void 0 === n && (n = []),
          e.some(function (e) {
            var a = e.path
              ? Object(r.j)(t, e)
              : n.length
              ? n[n.length - 1].match
              : r.e.computeRootMatch(t);
            return (
              a &&
                (n.push({ route: e, match: a }), e.routes && l(e.routes, t, n)),
              a
            );
          }),
          n
        );
      }
      function s(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          e
            ? i.a.createElement(
                r.g,
                n,
                e.map(function (e, n) {
                  return i.a.createElement(r.d, {
                    key: e.key || n,
                    path: e.path,
                    exact: e.exact,
                    strict: e.strict,
                    render: function (n) {
                      return e.render
                        ? e.render(Object(a.a)({}, n, {}, t, { route: e }))
                        : i.a.createElement(
                            e.component,
                            Object(a.a)({}, n, t, { route: e })
                          );
                    },
                  });
                })
              )
            : null
        );
      }
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          title: "Create React App",
          tagline: "Set up a modern web app by running one command.",
          url: "https://create-react-app.dev",
          baseUrl: "/",
          projectName: "create-react-app",
          organizationName: "facebook",
          favicon: "img/favicon/favicon.ico",
          presets: [
            [
              "@docusaurus/preset-classic",
              {
                docs: {
                  path: "../docs",
                  sidebarPath:
                    "/Users/iansu/Projects/oss/create-react-app-master/docusaurus/website/sidebars.json",
                  editUrl:
                    "https://github.com/facebook/create-react-app/edit/master/docusaurus/website",
                  showLastUpdateAuthor: !0,
                  showLastUpdateTime: !0,
                },
                theme: {
                  customCss:
                    "/Users/iansu/Projects/oss/create-react-app-master/docusaurus/website/src/css/custom.css",
                },
              },
            ],
          ],
          themeConfig: {
            image: "img/logo-og.png",
            algolia: {
              apiKey: "3be60f4f8ffc24c75da84857d6323791",
              indexName: "create-react-app",
              appId: "BH4D9OD16A",
            },
            navbar: {
              title: "Create React App",
              logo: { alt: "Create React App Logo", src: "img/logo.svg" },
              items: [
                {
                  to: "docs/getting-started",
                  label: "Docs",
                  position: "right",
                },
                {
                  href: "https://reactjs.org/community/support.html",
                  label: "Help",
                  position: "right",
                },
                {
                  href: "https://www.github.com/facebook/create-react-app",
                  label: "GitHub",
                  position: "right",
                },
              ],
              hideOnScroll: !1,
            },
            footer: {
              style: "dark",
              links: [
                {
                  title: "Docs",
                  items: [
                    { label: "Get Started", to: "docs/getting-started" },
                    { label: "Learn React", href: "https://reactjs.org/" },
                  ],
                },
                {
                  title: "Community",
                  items: [
                    {
                      label: "Stack Overflow",
                      href: "https://stackoverflow.com/questions/tagged/create-react-app",
                    },
                    {
                      label: "GitHub Discussions",
                      href: "https://github.com/facebook/create-react-app/discussions",
                    },
                    { label: "Twitter", href: "https://twitter.com/reactjs" },
                    {
                      label: "Contributor Covenant",
                      href: "https://www.contributor-covenant.org/version/1/4/code-of-conduct",
                    },
                  ],
                },
                {
                  title: "Social",
                  items: [
                    {
                      label: "GitHub",
                      href: "https://www.github.com/facebook/create-react-app",
                    },
                  ],
                },
              ],
              logo: {
                alt: "Facebook Open Source Logo",
                src: "img/oss_logo.png",
              },
              copyright: "Copyright \xa9 2020 Facebook, Inc.",
            },
            colorMode: {
              defaultMode: "light",
              disableSwitch: !1,
              respectPrefersColorScheme: !1,
              switchConfig: {
                darkIcon: "\ud83c\udf1c",
                darkIconStyle: {},
                lightIcon: "\ud83c\udf1e",
                lightIconStyle: {},
              },
            },
            metadatas: [],
          },
          onBrokenLinks: "throw",
          onDuplicateRoutes: "warn",
          customFields: {},
          plugins: [],
          themes: [],
        });
    },
    function (e, t, n) {
      "use strict";
      var r = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        a = {
          canUseDOM: r,
          canUseEventListeners:
            r && !(!window.addEventListener && !window.attachEvent),
          canUseIntersectionObserver: r && "IntersectionObserver" in window,
          canUseViewport: r && !!window.screen,
        };
      t.a = a;
    },
    function (e) {
      e.exports = JSON.parse(
        '{"/-deb":{"component":"c4f5d8e4","config":"5e9f5e1a"},"/search-8ec":{"component":"93a054d8"},"/docs-374":{"component":"1be78505","versionMetadata":"935f2afb"},"/docs/adding-a-css-modules-stylesheet-343":{"component":"17896441","content":"69233dfe"},"/docs/adding-a-router-f40":{"component":"17896441","content":"34e309a0"},"/docs/adding-a-sass-stylesheet-d0f":{"component":"17896441","content":"993ad022"},"/docs/adding-a-stylesheet-169":{"component":"17896441","content":"f87328ee"},"/docs/adding-bootstrap-e9a":{"component":"17896441","content":"90313351"},"/docs/adding-css-reset-7d3":{"component":"17896441","content":"b9aeacd6"},"/docs/adding-custom-environment-variables-611":{"component":"17896441","content":"2ccb190c"},"/docs/adding-flow-b29":{"component":"17896441","content":"d5c5a619"},"/docs/adding-images-fonts-and-files-915":{"component":"17896441","content":"eb09bdf2"},"/docs/adding-relay-5b5":{"component":"17896441","content":"e8bbf698"},"/docs/adding-typescript-5e7":{"component":"17896441","content":"76151ec7"},"/docs/advanced-configuration-cef":{"component":"17896441","content":"0a8ed1d3"},"/docs/alternatives-to-ejecting-26b":{"component":"17896441","content":"fe6114bd"},"/docs/analyzing-the-bundle-size-feb":{"component":"17896441","content":"b3326c3f"},"/docs/available-scripts-80b":{"component":"17896441","content":"652d43aa"},"/docs/can-i-use-decorators-2ee":{"component":"17896441","content":"e543a104"},"/docs/code-splitting-a46":{"component":"17896441","content":"eae9715f"},"/docs/custom-templates-794":{"component":"17896441","content":"a18c2e9f"},"/docs/debugging-tests-17d":{"component":"17896441","content":"53038b28"},"/docs/deployment-4e3":{"component":"17896441","content":"e330d02f"},"/docs/developing-components-in-isolation-44e":{"component":"17896441","content":"d43c4a9d"},"/docs/documentation-intro-fe8":{"component":"17896441","content":"8f15ff3e"},"/docs/fetching-data-with-ajax-requests-eb5":{"component":"17896441","content":"14d1cfa4"},"/docs/folder-structure-6b7":{"component":"17896441","content":"e9cc2457"},"/docs/getting-started-71e":{"component":"17896441","content":"8d0344ba"},"/docs/importing-a-component-6cf":{"component":"17896441","content":"ea373786"},"/docs/installing-a-dependency-641":{"component":"17896441","content":"2358c029"},"/docs/integrating-with-an-api-backend-05f":{"component":"17896441","content":"bd4026a4"},"/docs/loading-graphql-files-483":{"component":"17896441","content":"aa942060"},"/docs/making-a-progressive-web-app-996":{"component":"17896441","content":"b0e05c17"},"/docs/measuring-performance-1c6":{"component":"17896441","content":"2937a60f"},"/docs/post-processing-css-7f9":{"component":"17896441","content":"cdf1c877"},"/docs/pre-rendering-into-static-html-files-78b":{"component":"17896441","content":"28368535"},"/docs/production-build-2aa":{"component":"17896441","content":"7b4168bb"},"/docs/proxying-api-requests-in-development-9e7":{"component":"17896441","content":"5f589533"},"/docs/running-tests-3d9":{"component":"17896441","content":"0d4a303b"},"/docs/setting-up-your-editor-f50":{"component":"17896441","content":"81e5044a"},"/docs/supported-browsers-features-d00":{"component":"17896441","content":"7fc9aaf5"},"/docs/title-and-meta-tags-8ab":{"component":"17896441","content":"5791669a"},"/docs/troubleshooting-f69":{"component":"17896441","content":"992518d4"},"/docs/updating-to-new-releases-d08":{"component":"17896441","content":"65e9e485"},"/docs/using-global-variables-120":{"component":"17896441","content":"469e441c"},"/docs/using-https-in-development-c53":{"component":"17896441","content":"a9ceed40"},"/docs/using-the-public-folder-165":{"component":"17896441","content":"d01c30f5"}}'
      );
    },
    function (e, t, n) {
      var r, a;
      void 0 ===
        (a =
          "function" ==
          typeof (r = function () {
            var e,
              t,
              n = { version: "0.2.0" },
              r = (n.settings = {
                minimum: 0.08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: 0.02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template:
                  '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
              });
            function a(e, t, n) {
              return e < t ? t : e > n ? n : e;
            }
            function o(e) {
              return 100 * (-1 + e);
            }
            function i(e, t, n) {
              var a;
              return (
                ((a =
                  "translate3d" === r.positionUsing
                    ? { transform: "translate3d(" + o(e) + "%,0,0)" }
                    : "translate" === r.positionUsing
                    ? { transform: "translate(" + o(e) + "%,0)" }
                    : { "margin-left": o(e) + "%" }).transition =
                  "all " + t + "ms " + n),
                a
              );
            }
            (n.configure = function (e) {
              var t, n;
              for (t in e)
                void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
              return this;
            }),
              (n.status = null),
              (n.set = function (e) {
                var t = n.isStarted();
                (e = a(e, r.minimum, 1)), (n.status = 1 === e ? null : e);
                var o = n.render(!t),
                  u = o.querySelector(r.barSelector),
                  c = r.speed,
                  d = r.easing;
                return (
                  o.offsetWidth,
                  l(function (t) {
                    "" === r.positionUsing &&
                      (r.positionUsing = n.getPositioningCSS()),
                      s(u, i(e, c, d)),
                      1 === e
                        ? (s(o, { transition: "none", opacity: 1 }),
                          o.offsetWidth,
                          setTimeout(function () {
                            s(o, {
                              transition: "all " + c + "ms linear",
                              opacity: 0,
                            }),
                              setTimeout(function () {
                                n.remove(), t();
                              }, c);
                          }, c))
                        : setTimeout(t, c);
                  }),
                  this
                );
              }),
              (n.isStarted = function () {
                return "number" == typeof n.status;
              }),
              (n.start = function () {
                n.status || n.set(0);
                var e = function () {
                  setTimeout(function () {
                    n.status && (n.trickle(), e());
                  }, r.trickleSpeed);
                };
                return r.trickle && e(), this;
              }),
              (n.done = function (e) {
                return e || n.status
                  ? n.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (n.inc = function (e) {
                var t = n.status;
                return t
                  ? ("number" != typeof e &&
                      (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                    (t = a(t + e, 0, 0.994)),
                    n.set(t))
                  : n.start();
              }),
              (n.trickle = function () {
                return n.inc(Math.random() * r.trickleRate);
              }),
              (e = 0),
              (t = 0),
              (n.promise = function (r) {
                return r && "resolved" !== r.state()
                  ? (0 === t && n.start(),
                    e++,
                    t++,
                    r.always(function () {
                      0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                    }),
                    this)
                  : this;
              }),
              (n.render = function (e) {
                if (n.isRendered()) return document.getElementById("nprogress");
                c(document.documentElement, "nprogress-busy");
                var t = document.createElement("div");
                (t.id = "nprogress"), (t.innerHTML = r.template);
                var a,
                  i = t.querySelector(r.barSelector),
                  l = e ? "-100" : o(n.status || 0),
                  u = document.querySelector(r.parent);
                return (
                  s(i, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + l + "%,0,0)",
                  }),
                  r.showSpinner ||
                    ((a = t.querySelector(r.spinnerSelector)) && f(a)),
                  u != document.body && c(u, "nprogress-custom-parent"),
                  u.appendChild(t),
                  t
                );
              }),
              (n.remove = function () {
                d(document.documentElement, "nprogress-busy"),
                  d(
                    document.querySelector(r.parent),
                    "nprogress-custom-parent"
                  );
                var e = document.getElementById("nprogress");
                e && f(e);
              }),
              (n.isRendered = function () {
                return !!document.getElementById("nprogress");
              }),
              (n.getPositioningCSS = function () {
                var e = document.body.style,
                  t =
                    "WebkitTransform" in e
                      ? "Webkit"
                      : "MozTransform" in e
                      ? "Moz"
                      : "msTransform" in e
                      ? "ms"
                      : "OTransform" in e
                      ? "O"
                      : "";
                return t + "Perspective" in e
                  ? "translate3d"
                  : t + "Transform" in e
                  ? "translate"
                  : "margin";
              });
            var l = (function () {
                var e = [];
                function t() {
                  var n = e.shift();
                  n && n(t);
                }
                return function (n) {
                  e.push(n), 1 == e.length && t();
                };
              })(),
              s = (function () {
                var e = ["Webkit", "O", "Moz", "ms"],
                  t = {};
                function n(e) {
                  return e
                    .replace(/^-ms-/, "ms-")
                    .replace(/-([\da-z])/gi, function (e, t) {
                      return t.toUpperCase();
                    });
                }
                function r(t) {
                  var n = document.body.style;
                  if (t in n) return t;
                  for (
                    var r,
                      a = e.length,
                      o = t.charAt(0).toUpperCase() + t.slice(1);
                    a--;

                  )
                    if ((r = e[a] + o) in n) return r;
                  return t;
                }
                function a(e) {
                  return (e = n(e)), t[e] || (t[e] = r(e));
                }
                function o(e, t, n) {
                  (t = a(t)), (e.style[t] = n);
                }
                return function (e, t) {
                  var n,
                    r,
                    a = arguments;
                  if (2 == a.length)
                    for (n in t)
                      void 0 !== (r = t[n]) &&
                        t.hasOwnProperty(n) &&
                        o(e, n, r);
                  else o(e, a[1], a[2]);
                };
              })();
            function u(e, t) {
              return (
                ("string" == typeof e ? e : p(e)).indexOf(" " + t + " ") >= 0
              );
            }
            function c(e, t) {
              var n = p(e),
                r = n + t;
              u(n, t) || (e.className = r.substring(1));
            }
            function d(e, t) {
              var n,
                r = p(e);
              u(e, t) &&
                ((n = r.replace(" " + t + " ", " ")),
                (e.className = n.substring(1, n.length - 1)));
            }
            function p(e) {
              return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
            }
            function f(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            }
            return n;
          })
            ? r.call(t, n, t, e)
            : r) || (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "e", function () {
          return k;
        });
      var r = n(1);
      n.d(t, "d", function () {
        return r.a;
      }),
        n.d(t, "f", function () {
          return r.b;
        }),
        n.d(t, "g", function () {
          return r.c;
        }),
        n.d(t, "h", function () {
          return r.d;
        }),
        n.d(t, "i", function () {
          return r.e;
        }),
        n.d(t, "j", function () {
          return r.f;
        }),
        n.d(t, "k", function () {
          return r.g;
        }),
        n.d(t, "l", function () {
          return r.i;
        }),
        n.d(t, "m", function () {
          return r.j;
        }),
        n.d(t, "n", function () {
          return r.k;
        }),
        n.d(t, "o", function () {
          return r.l;
        }),
        n.d(t, "p", function () {
          return r.m;
        }),
        n.d(t, "q", function () {
          return r.n;
        }),
        n.d(t, "r", function () {
          return r.o;
        });
      var a = n(3),
        o = n(0),
        i = n.n(o),
        l = n(5),
        s = (n(7), n(2)),
        u = n(6),
        c = n(4),
        d = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
                l.a
              )(t.props)),
              t
            );
          }
          return (
            Object(a.a)(t, e),
            (t.prototype.render = function () {
              return i.a.createElement(r.e, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(i.a.Component);
      var p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
              l.b
            )(t.props)),
            t
          );
        }
        return (
          Object(a.a)(t, e),
          (t.prototype.render = function () {
            return i.a.createElement(r.e, {
              history: this.history,
              children: this.props.children,
            });
          }),
          t
        );
      })(i.a.Component);
      var f = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        m = function (e, t) {
          return "string" == typeof e ? Object(l.c)(e, null, null, t) : e;
        },
        g = function (e) {
          return e;
        },
        h = i.a.forwardRef;
      void 0 === h && (h = g);
      var b = h(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          o = Object(u.a)(e, ["innerRef", "navigate", "onClick"]),
          l = o.target,
          c = Object(s.a)({}, o, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (l && "_self" !== l) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (c.ref = (g !== h && t) || n), i.a.createElement("a", c);
      });
      var v = h(function (e, t) {
          var n = e.component,
            a = void 0 === n ? b : n,
            o = e.replace,
            l = e.to,
            d = e.innerRef,
            p = Object(u.a)(e, ["component", "replace", "to", "innerRef"]);
          return i.a.createElement(r.h.Consumer, null, function (e) {
            e || Object(c.a)(!1);
            var n = e.history,
              r = m(f(l, e.location), e.location),
              u = r ? n.createHref(r) : "",
              b = Object(s.a)({}, p, {
                href: u,
                navigate: function () {
                  var t = f(l, e.location);
                  (o ? n.replace : n.push)(t);
                },
              });
            return (
              g !== h ? (b.ref = t || d) : (b.innerRef = d),
              i.a.createElement(a, b)
            );
          });
        }),
        y = function (e) {
          return e;
        },
        w = i.a.forwardRef;
      void 0 === w && (w = y);
      var k = w(function (e, t) {
        var n = e["aria-current"],
          a = void 0 === n ? "page" : n,
          o = e.activeClassName,
          l = void 0 === o ? "active" : o,
          d = e.activeStyle,
          p = e.className,
          g = e.exact,
          h = e.isActive,
          b = e.location,
          k = e.sensitive,
          E = e.strict,
          x = e.style,
          S = e.to,
          T = e.innerRef,
          C = Object(u.a)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return i.a.createElement(r.h.Consumer, null, function (e) {
          e || Object(c.a)(!1);
          var n = b || e.location,
            o = m(f(S, n), n),
            u = o.pathname,
            _ = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            O = _
              ? Object(r.j)(n.pathname, {
                  path: _,
                  exact: g,
                  sensitive: k,
                  strict: E,
                })
              : null,
            P = !!(h ? h(O, n) : O),
            R = P
              ? (function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return t
                    .filter(function (e) {
                      return e;
                    })
                    .join(" ");
                })(p, l)
              : p,
            A = P ? Object(s.a)({}, x, {}, d) : x,
            N = Object(s.a)(
              {
                "aria-current": (P && a) || null,
                className: R,
                style: A,
                to: o,
              },
              C
            );
          return (
            y !== w ? (N.ref = t || T) : (N.innerRef = T),
            i.a.createElement(v, N)
          );
        });
      });
    },
    ,
    ,
    function (e, t, n) {
      var r = { "./": 40 };
      function a(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 16);
    },
    function (e, t, n) {
      "use strict";
      var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var l = n(0),
        s = n(7),
        u = [],
        c = [];
      function d(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function p(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var a = d(e[r]);
            a.loading
              ? (t.loading = !0)
              : ((t.loaded[r] = a.loaded), (t.error = a.error)),
              n.push(a.promise),
              a.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function f(e, t) {
        return l.createElement((n = e) && n.__esModule ? n.default : n, t);
        var n;
      }
      function m(e, t) {
        var d, p;
        if (!t.loading)
          throw new Error("react-loadable requires a `loading` component");
        var m = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: f,
              webpack: null,
              modules: null,
            },
            t
          ),
          g = null;
        function h() {
          return g || (g = e(m.loader)), g.promise;
        }
        return (
          u.push(h),
          "function" == typeof m.webpack &&
            c.push(function () {
              if (
                ((e = m.webpack),
                "object" === r(n.m) &&
                  e().every(function (e) {
                    return void 0 !== e && void 0 !== n.m[e];
                  }))
              )
                return h();
              var e;
            }),
          (p = d =
            (function (t) {
              function n(r) {
                a(this, n);
                var i = o(this, t.call(this, r));
                return (
                  (i.retry = function () {
                    i.setState({ error: null, loading: !0, timedOut: !1 }),
                      (g = e(m.loader)),
                      i._loadModule();
                  }),
                  h(),
                  (i.state = {
                    error: g.error,
                    pastDelay: !1,
                    timedOut: !1,
                    loading: g.loading,
                    loaded: g.loaded,
                  }),
                  i
                );
              }
              return (
                i(n, t),
                (n.preload = function () {
                  return h();
                }),
                (n.prototype.componentWillMount = function () {
                  (this._mounted = !0), this._loadModule();
                }),
                (n.prototype._loadModule = function () {
                  var e = this;
                  if (
                    (this.context.loadable &&
                      Array.isArray(m.modules) &&
                      m.modules.forEach(function (t) {
                        e.context.loadable.report(t);
                      }),
                    g.loading)
                  ) {
                    "number" == typeof m.delay &&
                      (0 === m.delay
                        ? this.setState({ pastDelay: !0 })
                        : (this._delay = setTimeout(function () {
                            e.setState({ pastDelay: !0 });
                          }, m.delay))),
                      "number" == typeof m.timeout &&
                        (this._timeout = setTimeout(function () {
                          e.setState({ timedOut: !0 });
                        }, m.timeout));
                    var t = function () {
                      e._mounted &&
                        (e.setState({
                          error: g.error,
                          loaded: g.loaded,
                          loading: g.loading,
                        }),
                        e._clearTimeouts());
                    };
                    g.promise
                      .then(function () {
                        t();
                      })
                      .catch(function (e) {
                        t();
                      });
                  }
                }),
                (n.prototype.componentWillUnmount = function () {
                  (this._mounted = !1), this._clearTimeouts();
                }),
                (n.prototype._clearTimeouts = function () {
                  clearTimeout(this._delay), clearTimeout(this._timeout);
                }),
                (n.prototype.render = function () {
                  return this.state.loading || this.state.error
                    ? l.createElement(m.loading, {
                        isLoading: this.state.loading,
                        pastDelay: this.state.pastDelay,
                        timedOut: this.state.timedOut,
                        error: this.state.error,
                        retry: this.retry,
                      })
                    : this.state.loaded
                    ? m.render(this.state.loaded, this.props)
                    : null;
                }),
                n
              );
            })(l.Component)),
          (d.contextTypes = {
            loadable: s.shape({ report: s.func.isRequired }),
          }),
          p
        );
      }
      function g(e) {
        return m(d, e);
      }
      g.Map = function (e) {
        if ("function" != typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return m(p, e);
      };
      var h = (function (e) {
        function t() {
          return a(this, t), o(this, e.apply(this, arguments));
        }
        return (
          i(t, e),
          (t.prototype.getChildContext = function () {
            return { loadable: { report: this.props.report } };
          }),
          (t.prototype.render = function () {
            return l.Children.only(this.props.children);
          }),
          t
        );
      })(l.Component);
      function b(e) {
        for (var t = []; e.length; ) {
          var n = e.pop();
          t.push(n());
        }
        return Promise.all(t).then(function () {
          if (e.length) return b(e);
        });
      }
      (h.propTypes = { report: s.func.isRequired }),
        (h.childContextTypes = {
          loadable: s.shape({ report: s.func.isRequired }).isRequired,
        }),
        (g.Capture = h),
        (g.preloadAll = function () {
          return new Promise(function (e, t) {
            b(u).then(e, t);
          });
        }),
        (g.preloadReady = function () {
          return new Promise(function (e, t) {
            b(c).then(e, e);
          });
        }),
        (e.exports = g);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(0),
          a = n.n(r),
          o = n(3),
          i = n(7),
          l = n.n(i),
          s = 1073741823,
          u =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : {};
        function c(e) {
          var t = [];
          return {
            on: function (e) {
              t.push(e);
            },
            off: function (e) {
              t = t.filter(function (t) {
                return t !== e;
              });
            },
            get: function () {
              return e;
            },
            set: function (n, r) {
              (e = n),
                t.forEach(function (t) {
                  return t(e, r);
                });
            },
          };
        }
        var d =
          a.a.createContext ||
          function (e, t) {
            var n,
              a,
              i,
              d =
                "__create-react-context-" +
                ((u[(i = "__global_unique_id__")] = (u[i] || 0) + 1) + "__"),
              p = (function (e) {
                function n() {
                  var t;
                  return (
                    ((t = e.apply(this, arguments) || this).emitter = c(
                      t.props.value
                    )),
                    t
                  );
                }
                Object(o.a)(n, e);
                var r = n.prototype;
                return (
                  (r.getChildContext = function () {
                    var e;
                    return ((e = {})[d] = this.emitter), e;
                  }),
                  (r.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        a = e.value;
                      (
                        (o = r) === (i = a)
                          ? 0 !== o || 1 / o == 1 / i
                          : o != o && i != i
                      )
                        ? (n = 0)
                        : ((n = "function" == typeof t ? t(r, a) : s),
                          0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var o, i;
                  }),
                  (r.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(r.Component);
            p.childContextTypes = (((n = {})[d] = l.a.object.isRequired), n);
            var f = (function (t) {
              function n() {
                var e;
                return (
                  ((e = t.apply(this, arguments) || this).state = {
                    value: e.getValue(),
                  }),
                  (e.onUpdate = function (t, n) {
                    0 != ((0 | e.observedBits) & n) &&
                      e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              Object(o.a)(n, t);
              var r = n.prototype;
              return (
                (r.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? s : t;
                }),
                (r.componentDidMount = function () {
                  this.context[d] && this.context[d].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? s : e;
                }),
                (r.componentWillUnmount = function () {
                  this.context[d] && this.context[d].off(this.onUpdate);
                }),
                (r.getValue = function () {
                  return this.context[d] ? this.context[d].get() : e;
                }),
                (r.render = function () {
                  return ((e = this.props.children),
                  Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(r.Component);
            return (
              (f.contextTypes = (((a = {})[d] = l.a.object), a)),
              { Provider: p, Consumer: f }
            );
          };
        t.a = d;
      }.call(this, n(29)));
    },
    function (e, t, n) {
      var r = n(37);
      (e.exports = f),
        (e.exports.parse = o),
        (e.exports.compile = function (e, t) {
          return l(o(e, t), t);
        }),
        (e.exports.tokensToFunction = l),
        (e.exports.tokensToRegExp = p);
      var a = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function o(e, t) {
        for (
          var n, r = [], o = 0, i = 0, l = "", c = (t && t.delimiter) || "/";
          null != (n = a.exec(e));

        ) {
          var d = n[0],
            p = n[1],
            f = n.index;
          if (((l += e.slice(i, f)), (i = f + d.length), p)) l += p[1];
          else {
            var m = e[i],
              g = n[2],
              h = n[3],
              b = n[4],
              v = n[5],
              y = n[6],
              w = n[7];
            l && (r.push(l), (l = ""));
            var k = null != g && null != m && m !== g,
              E = "+" === y || "*" === y,
              x = "?" === y || "*" === y,
              S = n[2] || c,
              T = b || v;
            r.push({
              name: h || o++,
              prefix: g || "",
              delimiter: S,
              optional: x,
              repeat: E,
              partial: k,
              asterisk: !!w,
              pattern: T ? u(T) : w ? ".*" : "[^" + s(S) + "]+?",
            });
          }
        }
        return i < e.length && (l += e.substr(i)), l && r.push(l), r;
      }
      function i(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function l(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          "object" == typeof e[a] &&
            (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", d(t)));
        return function (t, a) {
          for (
            var o = "",
              l = t || {},
              s = (a || {}).pretty ? i : encodeURIComponent,
              u = 0;
            u < e.length;
            u++
          ) {
            var c = e[u];
            if ("string" != typeof c) {
              var d,
                p = l[c.name];
              if (null == p) {
                if (c.optional) {
                  c.partial && (o += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (r(p)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(p) +
                      "`"
                  );
                if (0 === p.length) {
                  if (c.optional) continue;
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  );
                }
                for (var f = 0; f < p.length; f++) {
                  if (((d = s(p[f])), !n[u].test(d)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(d) +
                        "`"
                    );
                  o += (0 === f ? c.prefix : c.delimiter) + d;
                }
              } else {
                if (
                  ((d = c.asterisk
                    ? encodeURI(p).replace(/[?#]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : s(p)),
                  !n[u].test(d))
                )
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      d +
                      '"'
                  );
                o += c.prefix + d;
              }
            } else o += c;
          }
          return o;
        };
      }
      function s(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function u(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function c(e, t) {
        return (e.keys = t), e;
      }
      function d(e) {
        return e && e.sensitive ? "" : "i";
      }
      function p(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (
          var a = (n = n || {}).strict, o = !1 !== n.end, i = "", l = 0;
          l < e.length;
          l++
        ) {
          var u = e[l];
          if ("string" == typeof u) i += s(u);
          else {
            var p = s(u.prefix),
              f = "(?:" + u.pattern + ")";
            t.push(u),
              u.repeat && (f += "(?:" + p + f + ")*"),
              (i += f =
                u.optional
                  ? u.partial
                    ? p + "(" + f + ")?"
                    : "(?:" + p + "(" + f + "))?"
                  : p + "(" + f + ")");
          }
        }
        var m = s(n.delimiter || "/"),
          g = i.slice(-m.length) === m;
        return (
          a || (i = (g ? i.slice(0, -m.length) : i) + "(?:" + m + "(?=$))?"),
          (i += o ? "$" : a && g ? "" : "(?=" + m + "|$)"),
          c(new RegExp("^" + i, d(n)), t)
        );
      }
      function f(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return c(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], a = 0; a < e.length; a++)
                  r.push(f(e[a], t, n).source);
                return c(new RegExp("(?:" + r.join("|") + ")", d(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return p(o(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    function (e, t, n) {
      "use strict";
      var r,
        a,
        o,
        i =
          ((r = 0),
          (a = {
            util: {
              encode: function (e) {
                return e instanceof o
                  ? new o(e.type, a.util.encode(e.content), e.alias)
                  : "Array" === a.util.type(e)
                  ? e.map(a.util.encode)
                  : e
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/\u00a0/g, " ");
              },
              type: function (e) {
                return Object.prototype.toString
                  .call(e)
                  .match(/\[object (\w+)\]/)[1];
              },
              objId: function (e) {
                return (
                  e.__id || Object.defineProperty(e, "__id", { value: ++r }),
                  e.__id
                );
              },
              clone: function (e, t) {
                var n = a.util.type(e);
                switch (((t = t || {}), n)) {
                  case "Object":
                    if (t[a.util.objId(e)]) return t[a.util.objId(e)];
                    var r = {};
                    for (var o in ((t[a.util.objId(e)] = r), e))
                      e.hasOwnProperty(o) && (r[o] = a.util.clone(e[o], t));
                    return r;
                  case "Array":
                    return t[a.util.objId(e)]
                      ? t[a.util.objId(e)]
                      : ((r = []),
                        (t[a.util.objId(e)] = r),
                        e.forEach(function (e, n) {
                          r[n] = a.util.clone(e, t);
                        }),
                        r);
                }
                return e;
              },
            },
            languages: {
              extend: function (e, t) {
                var n = a.util.clone(a.languages[e]);
                for (var r in t) n[r] = t[r];
                return n;
              },
              insertBefore: function (e, t, n, r) {
                var o = (r = r || a.languages)[e];
                if (2 == arguments.length) {
                  for (var i in (n = arguments[1]))
                    n.hasOwnProperty(i) && (o[i] = n[i]);
                  return o;
                }
                var l = {};
                for (var s in o)
                  if (o.hasOwnProperty(s)) {
                    if (s == t)
                      for (var i in n) n.hasOwnProperty(i) && (l[i] = n[i]);
                    l[s] = o[s];
                  }
                return (
                  a.languages.DFS(a.languages, function (t, n) {
                    n === r[e] && t != e && (this[t] = l);
                  }),
                  (r[e] = l)
                );
              },
              DFS: function (e, t, n, r) {
                for (var o in ((r = r || {}), e))
                  e.hasOwnProperty(o) &&
                    (t.call(e, o, e[o], n || o),
                    "Object" !== a.util.type(e[o]) || r[a.util.objId(e[o])]
                      ? "Array" !== a.util.type(e[o]) ||
                        r[a.util.objId(e[o])] ||
                        ((r[a.util.objId(e[o])] = !0),
                        a.languages.DFS(e[o], t, o, r))
                      : ((r[a.util.objId(e[o])] = !0),
                        a.languages.DFS(e[o], t, null, r)));
              },
            },
            plugins: {},
            highlight: function (e, t, n) {
              var r = { code: e, grammar: t, language: n };
              return (
                (r.tokens = a.tokenize(r.code, r.grammar)),
                o.stringify(a.util.encode(r.tokens), r.language)
              );
            },
            matchGrammar: function (e, t, n, r, o, i, l) {
              var s = a.Token;
              for (var u in n)
                if (n.hasOwnProperty(u) && n[u]) {
                  if (u == l) return;
                  var c = n[u];
                  c = "Array" === a.util.type(c) ? c : [c];
                  for (var d = 0; d < c.length; ++d) {
                    var p = c[d],
                      f = p.inside,
                      m = !!p.lookbehind,
                      g = !!p.greedy,
                      h = 0,
                      b = p.alias;
                    if (g && !p.pattern.global) {
                      var v = p.pattern.toString().match(/[imuy]*$/)[0];
                      p.pattern = RegExp(p.pattern.source, v + "g");
                    }
                    p = p.pattern || p;
                    for (
                      var y = r, w = o;
                      y < t.length;
                      w += t[y].length, ++y
                    ) {
                      var k = t[y];
                      if (t.length > e.length) return;
                      if (!(k instanceof s)) {
                        if (g && y != t.length - 1) {
                          if (((p.lastIndex = w), !(_ = p.exec(e)))) break;
                          for (
                            var E = _.index + (m ? _[1].length : 0),
                              x = _.index + _[0].length,
                              S = y,
                              T = w,
                              C = t.length;
                            S < C &&
                            (T < x || (!t[S].type && !t[S - 1].greedy));
                            ++S
                          )
                            E >= (T += t[S].length) && (++y, (w = T));
                          if (t[y] instanceof s) continue;
                          (O = S - y), (k = e.slice(w, T)), (_.index -= w);
                        } else {
                          p.lastIndex = 0;
                          var _ = p.exec(k),
                            O = 1;
                        }
                        if (_) {
                          m && (h = _[1] ? _[1].length : 0),
                            (x =
                              (E = _.index + h) + (_ = _[0].slice(h)).length);
                          var P = k.slice(0, E),
                            R = k.slice(x),
                            A = [y, O];
                          P && (++y, (w += P.length), A.push(P));
                          var N = new s(u, f ? a.tokenize(_, f) : _, b, _, g);
                          if (
                            (A.push(N),
                            R && A.push(R),
                            Array.prototype.splice.apply(t, A),
                            1 != O && a.matchGrammar(e, t, n, y, w, !0, u),
                            i)
                          )
                            break;
                        } else if (i) break;
                      }
                    }
                  }
                }
            },
            hooks: { add: function () {} },
            tokenize: function (e, t, n) {
              var r = [e],
                o = t.rest;
              if (o) {
                for (var i in o) t[i] = o[i];
                delete t.rest;
              }
              return a.matchGrammar(e, r, t, 0, 0, !1), r;
            },
          }),
          ((o = a.Token =
            function (e, t, n, r, a) {
              (this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (r || "").length),
                (this.greedy = !!a);
            }).stringify = function (e, t, n) {
            if ("string" == typeof e) return e;
            if ("Array" === a.util.type(e))
              return e
                .map(function (n) {
                  return o.stringify(n, t, e);
                })
                .join("");
            var r = {
              type: e.type,
              content: o.stringify(e.content, t, n),
              tag: "span",
              classes: ["token", e.type],
              attributes: {},
              language: t,
              parent: n,
            };
            if (e.alias) {
              var i = "Array" === a.util.type(e.alias) ? e.alias : [e.alias];
              Array.prototype.push.apply(r.classes, i);
            }
            var l = Object.keys(r.attributes)
              .map(function (e) {
                return (
                  e +
                  '="' +
                  (r.attributes[e] || "").replace(/"/g, "&quot;") +
                  '"'
                );
              })
              .join(" ");
            return (
              "<" +
              r.tag +
              ' class="' +
              r.classes.join(" ") +
              '"' +
              (l ? " " + l : "") +
              ">" +
              r.content +
              "</" +
              r.tag +
              ">"
            );
          }),
          a);
      (i.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/i,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
              inside: {
                punctuation: [
                  /^=/,
                  { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                ],
              },
            },
            punctuation: /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: /&#?[\da-z]{1,8};/i,
      }),
        (i.languages.markup.tag.inside["attr-value"].inside.entity =
          i.languages.markup.entity),
        i.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(i.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: i.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r["language-" + t] = { pattern: /[\s\S]+/, inside: i.languages[t] };
            var a = {};
            (a[e] = {
              pattern: RegExp(
                /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  e
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              i.languages.insertBefore("markup", "cdata", a);
          },
        }),
        (i.languages.xml = i.languages.extend("markup", {})),
        (i.languages.html = i.languages.markup),
        (i.languages.mathml = i.languages.markup),
        (i.languages.svg = i.languages.markup),
        (function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            };
          e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: n,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
              },
              {
                pattern:
                  /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                greedy: !0,
                inside: n,
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: n.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          };
          for (
            var r = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              a = n.variable[1].inside,
              o = 0;
            o < r.length;
            o++
          )
            a[r[o]] = e.languages.bash[r[o]];
          e.languages.shell = e.languages.bash;
        })(i),
        (i.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.c = i.languages.extend("clike", {
          "class-name": {
            pattern: /(\b(?:enum|struct)\s+)\w+/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
          number:
            /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i,
        })),
        i.languages.insertBefore("c", "string", {
          macro: {
            pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            alias: "property",
            inside: {
              string: {
                pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                lookbehind: !0,
              },
              directive: {
                pattern:
                  /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: "keyword",
              },
            },
          },
          constant:
            /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete i.languages.c.boolean,
        (i.languages.cpp = i.languages.extend("c", {
          "class-name": {
            pattern: /(\b(?:class|enum|struct)\s+)\w+/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
          number: {
            pattern:
              /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
            greedy: !0,
          },
          operator:
            />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
          boolean: /\b(?:true|false)\b/,
        })),
        i.languages.insertBefore("cpp", "string", {
          "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0,
          },
        }),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
              inside: { rule: /@[\w-]+/ },
            },
            url: {
              pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
              inside: { function: /^url/i, punctuation: /^\(|\)$/ },
            },
            selector: RegExp(
              "[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"
            ),
            string: { pattern: t, greedy: !0 },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                "style-attr": {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    "attr-name": {
                      pattern: /^\s*style/i,
                      inside: n.tag.inside,
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": { pattern: /.+/i, inside: e.languages.css },
                  },
                  alias: "language-css",
                },
              },
              n.tag
            ));
        })(i),
        (i.languages.css.selector = {
          pattern: i.languages.css.selector,
          inside: {
            "pseudo-element":
              /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: {
              pattern:
                /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
              greedy: !0,
              inside: {
                punctuation: /^\[|\]$/,
                "case-sensitivity": {
                  pattern: /(\s)[si]$/i,
                  lookbehind: !0,
                  alias: "keyword",
                },
                namespace: {
                  pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                  lookbehind: !0,
                  inside: { punctuation: /\|$/ },
                },
                attribute: {
                  pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
                  lookbehind: !0,
                },
                value: [
                  /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                  {
                    pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
                    lookbehind: !0,
                  },
                ],
                operator: /[|~*^$]?=/,
              },
            },
            "n-th": [
              {
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: { number: /[\dn]+/, operator: /[+-]/ },
              },
              { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
            ],
            punctuation: /[()]/,
          },
        }),
        i.languages.insertBefore("css", "property", {
          variable: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
            lookbehind: !0,
          },
        }),
        i.languages.insertBefore("css", "function", {
          operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
          hexcode: /#[\da-f]{3,8}/i,
          entity: /\\[\da-f]{1,8}/i,
          unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 },
          number: /-?[\d.]+/,
        }),
        (i.languages.javascript = i.languages.extend("clike", {
          "class-name": [
            i.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          number:
            /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          function:
            /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          operator:
            /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
        })),
        (i.languages.javascript["class-name"][0].pattern =
          /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        i.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0,
          },
          "function-variable": {
            pattern:
              /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
              inside: i.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        i.languages.insertBefore("javascript", "string", {
          "template-string": {
            pattern:
              /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\${|}$/,
                    alias: "punctuation",
                  },
                  rest: i.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        i.languages.markup &&
          i.languages.markup.tag.addInlined("script", "javascript"),
        (i.languages.js = i.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern =
              /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ },
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                script: {
                  pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?={)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                  alias: "language-javascript",
                },
              },
              e.languages.jsx.tag
            );
          var n = function (e) {
              return e
                ? "string" == typeof e
                  ? e
                  : "string" == typeof e.content
                  ? e.content
                  : e.content.map(n).join("")
                : "";
            },
            r = function (t) {
              for (var a = [], o = 0; o < t.length; o++) {
                var i = t[o],
                  l = !1;
                if (
                  ("string" != typeof i &&
                    ("tag" === i.type &&
                    i.content[0] &&
                    "tag" === i.content[0].type
                      ? "</" === i.content[0].content[0].content
                        ? a.length > 0 &&
                          a[a.length - 1].tagName ===
                            n(i.content[0].content[1]) &&
                          a.pop()
                        : "/>" === i.content[i.content.length - 1].content ||
                          a.push({
                            tagName: n(i.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : a.length > 0 &&
                        "punctuation" === i.type &&
                        "{" === i.content
                      ? a[a.length - 1].openedBraces++
                      : a.length > 0 &&
                        a[a.length - 1].openedBraces > 0 &&
                        "punctuation" === i.type &&
                        "}" === i.content
                      ? a[a.length - 1].openedBraces--
                      : (l = !0)),
                  (l || "string" == typeof i) &&
                    a.length > 0 &&
                    0 === a[a.length - 1].openedBraces)
                ) {
                  var s = n(i);
                  o < t.length - 1 &&
                    ("string" == typeof t[o + 1] ||
                      "plain-text" === t[o + 1].type) &&
                    ((s += n(t[o + 1])), t.splice(o + 1, 1)),
                    o > 0 &&
                      ("string" == typeof t[o - 1] ||
                        "plain-text" === t[o - 1].type) &&
                      ((s = n(t[o - 1]) + s), t.splice(o - 1, 1), o--),
                    (t[o] = new e.Token("plain-text", s, null, s));
                }
                i.content && "string" != typeof i.content && r(i.content);
              }
            };
          e.hooks.add("after-tokenize", function (e) {
            ("jsx" !== e.language && "tsx" !== e.language) || r(e.tokens);
          });
        })(i),
        (function (e) {
          var t = (e.languages.javadoclike = {
            parameter: {
              pattern:
                /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
              lookbehind: !0,
            },
            punctuation: /[{}]/,
          });
          Object.defineProperty(t, "addSupport", {
            value: function (t, n) {
              "string" == typeof t && (t = [t]),
                t.forEach(function (t) {
                  !(function (t, n) {
                    var r = "doc-comment",
                      a = e.languages[t];
                    if (a) {
                      var o = a[r];
                      if (!o) {
                        var i = {
                          "doc-comment": {
                            pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                            alias: "comment",
                          },
                        };
                        o = (a = e.languages.insertBefore(t, "comment", i))[r];
                      }
                      if (
                        (o instanceof RegExp && (o = a[r] = { pattern: o }),
                        Array.isArray(o))
                      )
                        for (var l = 0, s = o.length; l < s; l++)
                          o[l] instanceof RegExp && (o[l] = { pattern: o[l] }),
                            n(o[l]);
                      else n(o);
                    }
                  })(t, function (e) {
                    e.inside || (e.inside = {}), (e.inside.rest = n);
                  });
                });
            },
          }),
            t.addSupport(["java", "javascript", "php"], t);
        })(i),
        (function (e) {
          var t =
              /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,
            n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
          (e.languages.java = e.languages.extend("clike", {
            "class-name": [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
            keyword: t,
            function: [
              e.languages.clike.function,
              { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 },
            ],
            number:
              /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
            operator: {
              pattern:
                /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("java", "class-name", {
              annotation: {
                alias: "punctuation",
                pattern: /(^|[^.])@\w+/,
                lookbehind: !0,
              },
              namespace: {
                pattern:
                  /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
                lookbehind: !0,
                inside: { punctuation: /\./ },
              },
              generics: {
                pattern:
                  /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
                inside: {
                  "class-name": n,
                  keyword: t,
                  punctuation: /[<>(),.:]/,
                  operator: /[?&|]/,
                },
              },
            });
        })(i),
        (function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, r, a, o) {
                if (n.language === r) {
                  var i = (n.tokenStack = []);
                  (n.code = n.code.replace(a, function (e) {
                    if ("function" == typeof o && !o(e)) return e;
                    for (
                      var a, l = i.length;
                      -1 !== n.code.indexOf((a = t(r, l)));

                    )
                      ++l;
                    return (i[l] = e), a;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var a = 0,
                    o = Object.keys(n.tokenStack);
                  !(function i(l) {
                    for (var s = 0; s < l.length && !(a >= o.length); s++) {
                      var u = l[s];
                      if (
                        "string" == typeof u ||
                        (u.content && "string" == typeof u.content)
                      ) {
                        var c = o[a],
                          d = n.tokenStack[c],
                          p = "string" == typeof u ? u : u.content,
                          f = t(r, c),
                          m = p.indexOf(f);
                        if (m > -1) {
                          ++a;
                          var g = p.substring(0, m),
                            h = new e.Token(
                              r,
                              e.tokenize(d, n.grammar),
                              "language-" + r,
                              d
                            ),
                            b = p.substring(m + f.length),
                            v = [];
                          g && v.push.apply(v, i([g])),
                            v.push(h),
                            b && v.push.apply(v, i([b])),
                            "string" == typeof u
                              ? l.splice.apply(l, [s, 1].concat(v))
                              : (u.content = v);
                        }
                      } else u.content && i(u.content);
                    }
                    return l;
                  })(n.tokens);
                }
              },
            },
          });
        })(i),
        (function (e) {
          (e.languages.php = e.languages.extend("clike", {
            keyword:
              /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
            boolean: { pattern: /\b(?:false|true)\b/i, alias: "constant" },
            constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
            comment: {
              pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("php", "string", {
              "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment",
              },
            }),
            e.languages.insertBefore("php", "comment", {
              delimiter: {
                pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                alias: "important",
              },
            }),
            e.languages.insertBefore("php", "keyword", {
              variable: /\$+(?:\w+\b|(?={))/i,
              package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            }),
            e.languages.insertBefore("php", "operator", {
              property: { pattern: /(->)[\w]+/, lookbehind: !0 },
            });
          var t = {
            pattern:
              /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: { rest: e.languages.php },
          };
          e.languages.insertBefore("php", "string", {
            "nowdoc-string": {
              pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
              greedy: !0,
              alias: "string",
              inside: {
                delimiter: {
                  pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                  alias: "symbol",
                  inside: { punctuation: /^<<<'?|[';]$/ },
                },
              },
            },
            "heredoc-string": {
              pattern:
                /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
              greedy: !0,
              alias: "string",
              inside: {
                delimiter: {
                  pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                  alias: "symbol",
                  inside: { punctuation: /^<<<"?|[";]$/ },
                },
                interpolation: t,
              },
            },
            "single-quoted-string": {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              greedy: !0,
              alias: "string",
            },
            "double-quoted-string": {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              alias: "string",
              inside: { interpolation: t },
            },
          }),
            delete e.languages.php.string,
            e.hooks.add("before-tokenize", function (t) {
              if (/<\?/.test(t.code)) {
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "php",
                  /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi
                );
              }
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(t, "php");
            });
        })(i),
        (function (e) {
          var t = e.languages.javascript,
            n = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source,
            r = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)";
          (e.languages.jsdoc = e.languages.extend("javadoclike", {
            parameter: {
              pattern: RegExp(r + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
          })),
            e.languages.insertBefore("jsdoc", "keyword", {
              "optional-parameter": {
                pattern: RegExp(
                  r + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source
                ),
                lookbehind: !0,
                inside: {
                  parameter: {
                    pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                    lookbehind: !0,
                    inside: { punctuation: /\./ },
                  },
                  code: {
                    pattern: /(=)[\s\S]*(?=\]$)/,
                    lookbehind: !0,
                    inside: t,
                    alias: "language-javascript",
                  },
                  punctuation: /[=[\]]/,
                },
              },
              "class-name": [
                {
                  pattern: RegExp("(@[a-z]+\\s+)" + n),
                  lookbehind: !0,
                  inside: { punctuation: /[.,:?=<>|{}()[\]]/ },
                },
                {
                  pattern:
                    /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
                  lookbehind: !0,
                  inside: { punctuation: /\./ },
                },
              ],
              example: {
                pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                lookbehind: !0,
                inside: {
                  code: {
                    pattern: /^(\s*(?:\*\s*)?).+$/m,
                    lookbehind: !0,
                    inside: t,
                    alias: "language-javascript",
                  },
                },
              },
            }),
            e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
        })(i),
        (i.languages.actionscript = i.languages.extend("javascript", {
          keyword:
            /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
        })),
        (i.languages.actionscript["class-name"].alias = "function"),
        i.languages.markup &&
          i.languages.insertBefore("actionscript", "string", {
            xml: {
              pattern:
                /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
              lookbehind: !0,
              inside: { rest: i.languages.markup },
            },
          }),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: "variable" };
          (e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
          })),
            e.languages.insertBefore("coffeescript", "comment", {
              "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment",
              },
              "block-regex": {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: "regex",
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore("coffeescript", "string", {
              "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: "punctuation" },
                  rest: e.languages.javascript,
                },
              },
              "multiline-string": [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: "string",
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore("coffeescript", "keyword", {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript["template-string"],
            (e.languages.coffee = e.languages.coffeescript);
        })(i),
        (function (e) {
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var t = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n],
              a = e.languages.javascript[r];
            "RegExp" === e.util.type(a) &&
              (a = e.languages.javascript[r] = { pattern: a });
            var o = a.inside || {};
            (a.inside = o), (o["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(i),
        (function (e) {
          (e.languages.flow = e.languages.extend("javascript", {})),
            e.languages.insertBefore("flow", "keyword", {
              type: [
                {
                  pattern:
                    /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
                  alias: "tag",
                },
              ],
            }),
            (e.languages.flow["function-variable"].pattern =
              /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i),
            delete e.languages.flow.parameter,
            e.languages.insertBefore("flow", "operator", {
              "flow-punctuation": {
                pattern: /\{\||\|\}/,
                alias: "punctuation",
              },
            }),
            Array.isArray(e.languages.flow.keyword) ||
              (e.languages.flow.keyword = [e.languages.flow.keyword]),
            e.languages.flow.keyword.unshift(
              {
                pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
                lookbehind: !0,
              },
              {
                pattern:
                  /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                lookbehind: !0,
              }
            );
        })(i),
        (i.languages.n4js = i.languages.extend("javascript", {
          keyword:
            /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
        })),
        i.languages.insertBefore("n4js", "constant", {
          annotation: { pattern: /@+\w+/, alias: "operator" },
        }),
        (i.languages.n4jsd = i.languages.n4js),
        (i.languages.typescript = i.languages.extend("javascript", {
          keyword:
            /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
          builtin:
            /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
        })),
        (i.languages.ts = i.languages.typescript),
        (function (e) {
          var t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            r = t.inside.interpolation,
            a = r.inside["interpolation-punctuation"],
            o = r.pattern.source;
          function i(t, r) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + r + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function l(e, t) {
            return "___" + t.toUpperCase() + "_" + e + "___";
          }
          function s(t, n, r) {
            var a = { code: t, grammar: n, language: r };
            return (
              e.hooks.run("before-tokenize", a),
              (a.tokens = e.tokenize(a.code, a.grammar)),
              e.hooks.run("after-tokenize", a),
              a.tokens
            );
          }
          function u(t) {
            var n = {};
            n["interpolation-punctuation"] = a;
            var o = e.tokenize(t, n);
            if (3 === o.length) {
              var i = [1, 1];
              i.push.apply(i, s(o[1], e.languages.javascript, "javascript")),
                o.splice.apply(o, i);
            }
            return new e.Token("interpolation", o, r.alias, t);
          }
          function c(t, n, r) {
            var a = e.tokenize(t, {
                interpolation: { pattern: RegExp(o), lookbehind: !0 },
              }),
              i = 0,
              c = {},
              d = s(
                a
                  .map(function (e) {
                    if ("string" == typeof e) return e;
                    for (
                      var n, a = e.content;
                      -1 !== t.indexOf((n = l(i++, r)));

                    );
                    return (c[n] = a), n;
                  })
                  .join(""),
                n,
                r
              ),
              p = Object.keys(c);
            return (
              (i = 0),
              (function e(t) {
                for (var n = 0; n < t.length; n++) {
                  if (i >= p.length) return;
                  var r = t[n];
                  if ("string" == typeof r || "string" == typeof r.content) {
                    var a = p[i],
                      o = "string" == typeof r ? r : r.content,
                      l = o.indexOf(a);
                    if (-1 !== l) {
                      ++i;
                      var s = o.substring(0, l),
                        d = u(c[a]),
                        f = o.substring(l + a.length),
                        m = [];
                      if ((s && m.push(s), m.push(d), f)) {
                        var g = [f];
                        e(g), m.push.apply(m, g);
                      }
                      "string" == typeof r
                        ? (t.splice.apply(t, [n, 1].concat(m)),
                          (n += m.length - 1))
                        : (r.content = m);
                    }
                  } else {
                    var h = r.content;
                    Array.isArray(h) ? e(h) : e([h]);
                  }
                }
              })(d),
              new e.Token(r, d, "language-" + r, t)
            );
          }
          e.languages.javascript["template-string"] = [
            i(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i("svg", /\bsvg/.source),
            i("markdown", /\b(?:md|markdown)/.source),
            i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            t,
          ].filter(Boolean);
          var d = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          function p(e) {
            return "string" == typeof e
              ? e
              : Array.isArray(e)
              ? e.map(p).join("")
              : p(e.content);
          }
          e.hooks.add("after-tokenize", function (t) {
            t.language in d &&
              (function t(n) {
                for (var r = 0, a = n.length; r < a; r++) {
                  var o = n[r];
                  if ("string" != typeof o) {
                    var i = o.content;
                    if (Array.isArray(i))
                      if ("template-string" === o.type) {
                        var l = i[1];
                        if (
                          3 === i.length &&
                          "string" != typeof l &&
                          "embedded-code" === l.type
                        ) {
                          var s = p(l),
                            u = l.alias,
                            d = Array.isArray(u) ? u[0] : u,
                            f = e.languages[d];
                          if (!f) continue;
                          i[1] = c(s, f, d);
                        }
                      } else t(i);
                    else "string" != typeof i && t([i]);
                  }
                }
              })(t.tokens);
          });
        })(i),
        (i.languages.graphql = {
          comment: /#.*/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
          operator: /[!=|]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
          function n(e, n) {
            return (
              (e = e.replace(/<inner>/g, t)),
              n && (e = e + "|" + e.replace(/_/g, "\\*")),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var r = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            a = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, r),
            o =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/
                .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + a + o + "(?:" + a + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + a + o + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + a + ")" + o + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(r),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
                  lookbehind: !0,
                  alias: "keyword",
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: "keyword" },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#+.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: n(
                  /__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source,
                  !0
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source,
                  !0
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source, !1),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/
                    .source,
                  !1
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  content: {
                    pattern: /(^!?\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike"].forEach(function (n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n]);
              });
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" !== e.language && "md" !== e.language) ||
                (function e(t) {
                  if (t && "string" != typeof t)
                    for (var n = 0, r = t.length; n < r; n++) {
                      var a = t[n];
                      if ("code" === a.type) {
                        var o = a.content[1],
                          i = a.content[3];
                        if (
                          o &&
                          i &&
                          "code-language" === o.type &&
                          "code-block" === i.type &&
                          "string" == typeof o.content
                        ) {
                          var l =
                            "language-" +
                            o.content.trim().split(/\s+/)[0].toLowerCase();
                          i.alias
                            ? "string" == typeof i.alias
                              ? (i.alias = [i.alias, l])
                              : i.alias.push(l)
                            : (i.alias = [l]);
                        }
                      } else e(a.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n = "", r = 0, a = t.classes.length; r < a; r++) {
                  var o = t.classes[r],
                    i = /language-(.+)/.exec(o);
                  if (i) {
                    n = i[1];
                    break;
                  }
                }
                var l = e.languages[n];
                if (l) {
                  var s = t.content
                    .replace(/&lt;/g, "<")
                    .replace(/&amp;/g, "&");
                  t.content = e.highlight(s, l, n);
                } else if (n && "none" !== n && e.plugins.autoloader) {
                  var u =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = u),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(u);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(i),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
          };
          var t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          };
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              a = [];
            /^\w+$/.test(n) || a.push(/\w+/.exec(n)[0]),
              "diff" === n && a.push("bold"),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  "^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                  "m"
                ),
                alias: a,
              });
          }),
            Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
        })(i),
        (i.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m,
        }),
        (i.languages.go = i.languages.extend("clike", {
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          builtin:
            /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          string: { pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        })),
        delete i.languages.go["class-name"],
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: "punctuation" },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
              lookbehind: !0,
              alias: "keyword",
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add("before-tokenize", function (t) {
              e.languages["markup-templating"].buildPlaceholders(
                t,
                "handlebars",
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              );
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(
                t,
                "handlebars"
              );
            });
        })(i),
        (i.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (i.languages.less = i.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        i.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (i.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern:
                /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (i.languages.objectivec = i.languages.extend("c", {
          keyword:
            /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          string:
            /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete i.languages.objectivec["class-name"],
        (i.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number:
            /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
          type: { pattern: /\B['`]\w*/, alias: "variable" },
          directive: { pattern: /\B#\w+/, alias: "function" },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator:
            /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
          punctuation: /[(){}\[\]|_.,:;]/,
        }),
        (i.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/i,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number:
            /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = i.languages.python),
        (i.languages.py = i.languages.python),
        (i.languages.reason = i.languages.extend("clike", {
          comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        i.languages.insertBefore("reason", "class-name", {
          character: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: "string",
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: "variable" },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete i.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern:
                  /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(i),
        (i.languages.scss = i.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        i.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        i.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        i.languages.insertBefore("scss", "function", {
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (i.languages.scss.atrule.inside.rest = i.languages.scss),
        (i.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = {
            url: /url\((["']?).*?\1\)/i,
            string: {
              pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
              greedy: !0,
            },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
              pattern:
                /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
              lookbehind: !0,
            },
            hexcode: /#[\da-f]{3,6}/i,
            number: /\b\d+(?:\.\d+)?%?/,
            boolean: /\b(?:true|false)\b/,
            operator: [
              /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
            ],
            punctuation: /[{}()\[\];:,]/,
          };
          (t.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: {
              delimiter: { pattern: /^{|}$/, alias: "punctuation" },
              rest: t,
            },
          }),
            (t.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: t },
            }),
            (e.languages.stylus = {
              comment: {
                pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              "atrule-declaration": {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: t },
              },
              "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: t },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: t },
              },
              "property-declaration": {
                pattern:
                  /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: t.interpolation },
                  },
                  rest: t,
                },
              },
              selector: {
                pattern:
                  /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: t.interpolation,
                  punctuation: /[{},]/,
                },
              },
              func: t.func,
              string: t.string,
              interpolation: t.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(i);
      var l = i.util.clone(i.languages.typescript);
      (i.languages.tsx = i.languages.extend("jsx", l)),
        (i.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (i.languages.yaml = {
          scalar: {
            pattern:
              /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
            lookbehind: !0,
            alias: "string",
          },
          comment: /#.*/,
          key: {
            pattern:
              /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
            lookbehind: !0,
            alias: "atrule",
          },
          directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important",
          },
          datetime: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
            lookbehind: !0,
            alias: "number",
          },
          boolean: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important",
          },
          null: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important",
          },
          string: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
            lookbehind: !0,
            greedy: !0,
          },
          number: {
            pattern:
              /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
          },
          tag: /![^\s]+/,
          important: /[&*][\w]+/,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
        }),
        (i.languages.yml = i.languages.yaml),
        (t.a = i);
    },
    function (e, t, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      function i(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (a) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, l, s = i(e), u = 1; u < arguments.length; u++) {
              for (var c in (n = Object(arguments[u])))
                a.call(n, c) && (s[c] = n[c]);
              if (r) {
                l = r(n);
                for (var d = 0; d < l.length; d++)
                  o.call(n, l[d]) && (s[l[d]] = n[l[d]]);
              }
            }
            return s;
          };
    },
    function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(32));
    },
    function (e, t, n) {
      "use strict";
      var r = n(8);
      t.a = r.b;
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(38);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        a = n.n(r);
      t.a = a.a.createContext(null);
    },
    function (e) {
      e.exports = JSON.parse(
        '{"docusaurus-plugin-content-docs":{"default":{"path":"/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/docs","mainDocId":"documentation-intro","docs":[{"id":"adding-a-css-modules-stylesheet","path":"/docs/adding-a-css-modules-stylesheet"},{"id":"adding-a-router","path":"/docs/adding-a-router"},{"id":"adding-a-sass-stylesheet","path":"/docs/adding-a-sass-stylesheet"},{"id":"adding-a-stylesheet","path":"/docs/adding-a-stylesheet"},{"id":"adding-bootstrap","path":"/docs/adding-bootstrap"},{"id":"adding-css-reset","path":"/docs/adding-css-reset"},{"id":"adding-custom-environment-variables","path":"/docs/adding-custom-environment-variables"},{"id":"adding-flow","path":"/docs/adding-flow"},{"id":"adding-images-fonts-and-files","path":"/docs/adding-images-fonts-and-files"},{"id":"adding-relay","path":"/docs/adding-relay"},{"id":"adding-typescript","path":"/docs/adding-typescript"},{"id":"advanced-configuration","path":"/docs/advanced-configuration"},{"id":"alternatives-to-ejecting","path":"/docs/alternatives-to-ejecting"},{"id":"analyzing-the-bundle-size","path":"/docs/analyzing-the-bundle-size"},{"id":"available-scripts","path":"/docs/available-scripts"},{"id":"can-i-use-decorators","path":"/docs/can-i-use-decorators"},{"id":"code-splitting","path":"/docs/code-splitting"},{"id":"custom-templates","path":"/docs/custom-templates"},{"id":"debugging-tests","path":"/docs/debugging-tests"},{"id":"deployment","path":"/docs/deployment"},{"id":"developing-components-in-isolation","path":"/docs/developing-components-in-isolation"},{"id":"documentation-intro","path":"/docs/documentation-intro"},{"id":"fetching-data-with-ajax-requests","path":"/docs/fetching-data-with-ajax-requests"},{"id":"folder-structure","path":"/docs/folder-structure"},{"id":"getting-started","path":"/docs/getting-started"},{"id":"importing-a-component","path":"/docs/importing-a-component"},{"id":"installing-a-dependency","path":"/docs/installing-a-dependency"},{"id":"integrating-with-an-api-backend","path":"/docs/integrating-with-an-api-backend"},{"id":"loading-graphql-files","path":"/docs/loading-graphql-files"},{"id":"making-a-progressive-web-app","path":"/docs/making-a-progressive-web-app"},{"id":"measuring-performance","path":"/docs/measuring-performance"},{"id":"post-processing-css","path":"/docs/post-processing-css"},{"id":"pre-rendering-into-static-html-files","path":"/docs/pre-rendering-into-static-html-files"},{"id":"production-build","path":"/docs/production-build"},{"id":"proxying-api-requests-in-development","path":"/docs/proxying-api-requests-in-development"},{"id":"running-tests","path":"/docs/running-tests"},{"id":"setting-up-your-editor","path":"/docs/setting-up-your-editor"},{"id":"supported-browsers-features","path":"/docs/supported-browsers-features"},{"id":"title-and-meta-tags","path":"/docs/title-and-meta-tags"},{"id":"troubleshooting","path":"/docs/troubleshooting"},{"id":"updating-to-new-releases","path":"/docs/updating-to-new-releases"},{"id":"using-global-variables","path":"/docs/using-global-variables"},{"id":"using-https-in-development","path":"/docs/using-https-in-development"},{"id":"using-the-public-folder","path":"/docs/using-the-public-folder"}]}]}}}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"docusaurusVersion":"2.0.0-alpha.64","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.0.0-alpha.64"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"2.0.0-alpha.64"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.0.0-alpha.64"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.0.0-alpha.64"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.0.0-alpha.64"},"docusaurus-theme-search-algolia":{"type":"package","name":"@docusaurus/theme-search-algolia","version":"2.0.0-alpha.64"}}}'
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(24),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function s(e) {
        return r.isMemo(e) ? i : l[e.$$typeof] || a;
      }
      (l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[r.Memo] = i);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (m) {
            var a = f(n);
            a && a !== m && e(t, a, r);
          }
          var i = c(n);
          d && (i = i.concat(d(n)));
          for (var l = s(t), g = s(n), h = 0; h < i.length; ++h) {
            var b = i[h];
            if (!(o[b] || (r && r[b]) || (g && g[b]) || (l && l[b]))) {
              var v = p(n, b);
              try {
                u(t, b, v);
              } catch (y) {}
            }
          }
        }
        return t;
      };
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      e.exports = n(45);
    },
    function (e, t, n) {
      "use strict";
      var r = n(21),
        a = "function" == typeof Symbol && Symbol.for,
        o = a ? Symbol.for("react.element") : 60103,
        i = a ? Symbol.for("react.portal") : 60106,
        l = a ? Symbol.for("react.fragment") : 60107,
        s = a ? Symbol.for("react.strict_mode") : 60108,
        u = a ? Symbol.for("react.profiler") : 60114,
        c = a ? Symbol.for("react.provider") : 60109,
        d = a ? Symbol.for("react.context") : 60110,
        p = a ? Symbol.for("react.forward_ref") : 60112,
        f = a ? Symbol.for("react.suspense") : 60113,
        m = a ? Symbol.for("react.memo") : 60115,
        g = a ? Symbol.for("react.lazy") : 60116,
        h = "function" == typeof Symbol && Symbol.iterator;
      function b(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var v = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        y = {};
      function w(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = y),
          (this.updater = n || v);
      }
      function k() {}
      function E(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = y),
          (this.updater = n || v);
      }
      (w.prototype.isReactComponent = {}),
        (w.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(b(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (w.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (k.prototype = w.prototype);
      var x = (E.prototype = new k());
      (x.constructor = E), r(x, w.prototype), (x.isPureReactComponent = !0);
      var S = { current: null },
        T = Object.prototype.hasOwnProperty,
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
      function _(e, t, n) {
        var r,
          a = {},
          i = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            T.call(t, r) && !C.hasOwnProperty(r) && (a[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s) a.children = n;
        else if (1 < s) {
          for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
          a.children = u;
        }
        if (e && e.defaultProps)
          for (r in (s = e.defaultProps)) void 0 === a[r] && (a[r] = s[r]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: l,
          props: a,
          _owner: S.current,
        };
      }
      function O(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o;
      }
      var P = /\/+/g,
        R = [];
      function A(e, t, n, r) {
        if (R.length) {
          var a = R.pop();
          return (
            (a.result = e),
            (a.keyPrefix = t),
            (a.func = n),
            (a.context = r),
            (a.count = 0),
            a
          );
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function N(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > R.length && R.push(e);
      }
      function I(e, t, n, r) {
        var a = typeof e;
        ("undefined" !== a && "boolean" !== a) || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else
          switch (a) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case o:
                case i:
                  l = !0;
              }
          }
        if (l) return n(r, e, "" === t ? "." + j(e, 0) : t), 1;
        if (((l = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
          for (var s = 0; s < e.length; s++) {
            var u = t + j((a = e[s]), s);
            l += I(a, u, n, r);
          }
        else if (
          (null === e || "object" != typeof e
            ? (u = null)
            : (u =
                "function" == typeof (u = (h && e[h]) || e["@@iterator"])
                  ? u
                  : null),
          "function" == typeof u)
        )
          for (e = u.call(e), s = 0; !(a = e.next()).done; )
            l += I((a = a.value), (u = t + j(a, s++)), n, r);
        else if ("object" === a)
          throw (
            ((n = "" + e),
            Error(
              b(
                31,
                "[object Object]" === n
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : n,
                ""
              )
            ))
          );
        return l;
      }
      function L(e, t, n) {
        return null == e ? 0 : I(e, "", t, n);
      }
      function j(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + e).replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function D(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function F(e, t, n) {
        var r = e.result,
          a = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? M(e, r, n, function (e) {
                return e;
              })
            : null != e &&
              (O(e) &&
                (e = (function (e, t) {
                  return {
                    $$typeof: o,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  e,
                  a +
                    (!e.key || (t && t.key === e.key)
                      ? ""
                      : ("" + e.key).replace(P, "$&/") + "/") +
                    n
                )),
              r.push(e));
      }
      function M(e, t, n, r, a) {
        var o = "";
        null != n && (o = ("" + n).replace(P, "$&/") + "/"),
          L(e, F, (t = A(t, o, r, a))),
          N(t);
      }
      var z = { current: null };
      function U() {
        var e = z.current;
        if (null === e) throw Error(b(321));
        return e;
      }
      var $ = {
        ReactCurrentDispatcher: z,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: S,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: function (e, t, n) {
          if (null == e) return e;
          var r = [];
          return M(e, r, null, t, n), r;
        },
        forEach: function (e, t, n) {
          if (null == e) return e;
          L(e, D, (t = A(null, null, t, n))), N(t);
        },
        count: function (e) {
          return L(
            e,
            function () {
              return null;
            },
            null
          );
        },
        toArray: function (e) {
          var t = [];
          return (
            M(e, t, null, function (e) {
              return e;
            }),
            t
          );
        },
        only: function (e) {
          if (!O(e)) throw Error(b(143));
          return e;
        },
      }),
        (t.Component = w),
        (t.Fragment = l),
        (t.Profiler = u),
        (t.PureComponent = E),
        (t.StrictMode = s),
        (t.Suspense = f),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error(b(267, e));
          var a = r({}, e.props),
            i = e.key,
            l = e.ref,
            s = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (s = S.current)),
              void 0 !== t.key && (i = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (c in t)
              T.call(t, c) &&
                !C.hasOwnProperty(c) &&
                (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) a.children = n;
          else if (1 < c) {
            u = Array(c);
            for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
            a.children = u;
          }
          return {
            $$typeof: o,
            type: e.type,
            key: i,
            ref: l,
            props: a,
            _owner: s,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: d,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: c, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = _),
        (t.createFactory = function (e) {
          var t = _.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: p, render: e };
        }),
        (t.isValidElement = O),
        (t.lazy = function (e) {
          return { $$typeof: g, _ctor: e, _status: -1, _result: null };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return U().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return U().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return U().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return U().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return U().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return U().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return U().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return U().useRef(e);
        }),
        (t.useState = function (e) {
          return U().useState(e);
        }),
        (t.version = "16.13.1");
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        a = n(21),
        o = n(33);
      function i(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(i(227));
      function l(e, t, n, r, a, o, i, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }
      var s = !1,
        u = null,
        c = !1,
        d = null,
        p = {
          onError: function (e) {
            (s = !0), (u = e);
          },
        };
      function f(e, t, n, r, a, o, i, c, d) {
        (s = !1), (u = null), l.apply(p, arguments);
      }
      var m = null,
        g = null,
        h = null;
      function b(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = h(n)),
          (function (e, t, n, r, a, o, l, p, m) {
            if ((f.apply(this, arguments), s)) {
              if (!s) throw Error(i(198));
              var g = u;
              (s = !1), (u = null), c || ((c = !0), (d = g));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      var v = null,
        y = {};
      function w() {
        if (v)
          for (var e in y) {
            var t = y[e],
              n = v.indexOf(e);
            if (!(-1 < n)) throw Error(i(96, e));
            if (!E[n]) {
              if (!t.extractEvents) throw Error(i(97, e));
              for (var r in ((E[n] = t), (n = t.eventTypes))) {
                var a = void 0,
                  o = n[r],
                  l = t,
                  s = r;
                if (x.hasOwnProperty(s)) throw Error(i(99, s));
                x[s] = o;
                var u = o.phasedRegistrationNames;
                if (u) {
                  for (a in u) u.hasOwnProperty(a) && k(u[a], l, s);
                  a = !0;
                } else
                  o.registrationName
                    ? (k(o.registrationName, l, s), (a = !0))
                    : (a = !1);
                if (!a) throw Error(i(98, r, e));
              }
            }
          }
      }
      function k(e, t, n) {
        if (S[e]) throw Error(i(100, e));
        (S[e] = t), (T[e] = t.eventTypes[n].dependencies);
      }
      var E = [],
        x = {},
        S = {},
        T = {};
      function C(e) {
        var t,
          n = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            if (!y.hasOwnProperty(t) || y[t] !== r) {
              if (y[t]) throw Error(i(102, t));
              (y[t] = r), (n = !0);
            }
          }
        n && w();
      }
      var _ = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        O = null,
        P = null,
        R = null;
      function A(e) {
        if ((e = g(e))) {
          if ("function" != typeof O) throw Error(i(280));
          var t = e.stateNode;
          t && ((t = m(t)), O(e.stateNode, e.type, t));
        }
      }
      function N(e) {
        P ? (R ? R.push(e) : (R = [e])) : (P = e);
      }
      function I() {
        if (P) {
          var e = P,
            t = R;
          if (((R = P = null), A(e), t)) for (e = 0; e < t.length; e++) A(t[e]);
        }
      }
      function L(e, t) {
        return e(t);
      }
      function j(e, t, n, r, a) {
        return e(t, n, r, a);
      }
      function D() {}
      var F = L,
        M = !1,
        z = !1;
      function U() {
        (null === P && null === R) || (D(), I());
      }
      function $(e, t, n) {
        if (z) return e(t, n);
        z = !0;
        try {
          return F(e, t, n);
        } finally {
          (z = !1), U();
        }
      }
      var B =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        q = Object.prototype.hasOwnProperty,
        G = {},
        H = {};
      function W(e, t, n, r, a, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o);
      }
      var V = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          V[e] = new W(e, 0, !1, e, null, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          V[t] = new W(t, 1, !1, e[1], null, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            V[e] = new W(e, 2, !1, e.toLowerCase(), null, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          V[e] = new W(e, 2, !1, e, null, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            V[e] = new W(e, 3, !1, e.toLowerCase(), null, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          V[e] = new W(e, 3, !0, e, null, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          V[e] = new W(e, 4, !1, e, null, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          V[e] = new W(e, 6, !1, e, null, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          V[e] = new W(e, 5, !1, e.toLowerCase(), null, !1);
        });
      var Q = /[\-:]([a-z])/g;
      function K(e) {
        return e[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(Q, K);
          V[t] = new W(t, 1, !1, e, null, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(Q, K);
            V[t] = new W(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(Q, K);
          V[t] = new W(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          V[e] = new W(e, 1, !1, e.toLowerCase(), null, !1);
        }),
        (V.xlinkHref = new W(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          V[e] = new W(e, 1, !1, e.toLowerCase(), null, !0);
        });
      var X = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function Y(e, t, n, r) {
        var a = V.hasOwnProperty(t) ? V[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function (e) {
                return (
                  !!q.call(H, e) ||
                  (!q.call(G, e) &&
                    (B.test(e) ? (H[e] = !0) : ((G[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      X.hasOwnProperty("ReactCurrentDispatcher") ||
        (X.ReactCurrentDispatcher = { current: null }),
        X.hasOwnProperty("ReactCurrentBatchConfig") ||
          (X.ReactCurrentBatchConfig = { suspense: null });
      var Z = /^(.*)[\\\/]/,
        J = "function" == typeof Symbol && Symbol.for,
        ee = J ? Symbol.for("react.element") : 60103,
        te = J ? Symbol.for("react.portal") : 60106,
        ne = J ? Symbol.for("react.fragment") : 60107,
        re = J ? Symbol.for("react.strict_mode") : 60108,
        ae = J ? Symbol.for("react.profiler") : 60114,
        oe = J ? Symbol.for("react.provider") : 60109,
        ie = J ? Symbol.for("react.context") : 60110,
        le = J ? Symbol.for("react.concurrent_mode") : 60111,
        se = J ? Symbol.for("react.forward_ref") : 60112,
        ue = J ? Symbol.for("react.suspense") : 60113,
        ce = J ? Symbol.for("react.suspense_list") : 60120,
        de = J ? Symbol.for("react.memo") : 60115,
        pe = J ? Symbol.for("react.lazy") : 60116,
        fe = J ? Symbol.for("react.block") : 60121,
        me = "function" == typeof Symbol && Symbol.iterator;
      function ge(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (me && e[me]) || e["@@iterator"])
          ? e
          : null;
      }
      function he(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case ne:
            return "Fragment";
          case te:
            return "Portal";
          case ae:
            return "Profiler";
          case re:
            return "StrictMode";
          case ue:
            return "Suspense";
          case ce:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case ie:
              return "Context.Consumer";
            case oe:
              return "Context.Provider";
            case se:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case de:
              return he(e.type);
            case fe:
              return he(e.render);
            case pe:
              if ((e = 1 === e._status ? e._result : null)) return he(e);
          }
        return null;
      }
      function be(e) {
        var t = "";
        do {
          e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var n = "";
              break e;
            default:
              var r = e._debugOwner,
                a = e._debugSource,
                o = he(e.type);
              (n = null),
                r && (n = he(r.type)),
                (r = o),
                (o = ""),
                a
                  ? (o =
                      " (at " +
                      a.fileName.replace(Z, "") +
                      ":" +
                      a.lineNumber +
                      ")")
                  : n && (o = " (created by " + n + ")"),
                (n = "\n    in " + (r || "Unknown") + o);
          }
          (t += n), (e = e.return);
        } while (e);
        return t;
      }
      function ve(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function ye(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function we(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = ye(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var a = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function ke(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = ye(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function Ee(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function xe(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = ve(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function Se(e, t) {
        null != (t = t.checked) && Y(e, "checked", t, !1);
      }
      function Te(e, t) {
        Se(e, t);
        var n = ve(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? _e(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            _e(e, t.type, ve(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function Ce(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function _e(e, t, n) {
        ("number" === t && e.ownerDocument.activeElement === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function Oe(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function Pe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + ve(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function Re(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function Ae(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(i(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(i(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: ve(n) };
      }
      function Ne(e, t) {
        var n = ve(t.value),
          r = ve(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function Ie(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var Le = "http://www.w3.org/1999/xhtml",
        je = "http://www.w3.org/2000/svg";
      function De(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function Fe(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? De(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var Me,
        ze,
        Ue =
          ((ze = function (e, t) {
            if (e.namespaceURI !== je || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (Me = Me || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = Me.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ze(e, t);
                });
              }
            : ze);
      function $e(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      function Be(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var qe = {
          animationend: Be("Animation", "AnimationEnd"),
          animationiteration: Be("Animation", "AnimationIteration"),
          animationstart: Be("Animation", "AnimationStart"),
          transitionend: Be("Transition", "TransitionEnd"),
        },
        Ge = {},
        He = {};
      function We(e) {
        if (Ge[e]) return Ge[e];
        if (!qe[e]) return e;
        var t,
          n = qe[e];
        for (t in n) if (n.hasOwnProperty(t) && t in He) return (Ge[e] = n[t]);
        return e;
      }
      _ &&
        ((He = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete qe.animationend.animation,
          delete qe.animationiteration.animation,
          delete qe.animationstart.animation),
        "TransitionEvent" in window || delete qe.transitionend.transition);
      var Ve = We("animationend"),
        Qe = We("animationiteration"),
        Ke = We("animationstart"),
        Xe = We("transitionend"),
        Ye =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        Ze = new ("function" == typeof WeakMap ? WeakMap : Map)();
      function Je(e) {
        var t = Ze.get(e);
        return void 0 === t && ((t = new Map()), Ze.set(e, t)), t;
      }
      function et(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function tt(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function nt(e) {
        if (et(e) !== e) throw Error(i(188));
      }
      function rt(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = et(e))) throw Error(i(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var o = a.alternate;
              if (null === o) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === o.child) {
                for (o = a.child; o; ) {
                  if (o === n) return nt(a), e;
                  if (o === r) return nt(a), t;
                  o = o.sibling;
                }
                throw Error(i(188));
              }
              if (n.return !== r.return) (n = a), (r = o);
              else {
                for (var l = !1, s = a.child; s; ) {
                  if (s === n) {
                    (l = !0), (n = a), (r = o);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = a), (n = o);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(i(189));
                }
              }
              if (n.alternate !== r) throw Error(i(190));
            }
            if (3 !== n.tag) throw Error(i(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function at(e, t) {
        if (null == t) throw Error(i(30));
        return null == e
          ? t
          : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
          ? [e].concat(t)
          : [e, t];
      }
      function ot(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
      }
      var it = null;
      function lt(e) {
        if (e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          if (Array.isArray(t))
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
              b(e, t[r], n[r]);
          else t && b(e, t, n);
          (e._dispatchListeners = null),
            (e._dispatchInstances = null),
            e.isPersistent() || e.constructor.release(e);
        }
      }
      function st(e) {
        if ((null !== e && (it = at(it, e)), (e = it), (it = null), e)) {
          if ((ot(e, lt), it)) throw Error(i(95));
          if (c) throw ((e = d), (c = !1), (d = null), e);
        }
      }
      function ut(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      function ct(e) {
        if (!_) return !1;
        var t = (e = "on" + e) in document;
        return (
          t ||
            ((t = document.createElement("div")).setAttribute(e, "return;"),
            (t = "function" == typeof t[e])),
          t
        );
      }
      var dt = [];
      function pt(e) {
        (e.topLevelType = null),
          (e.nativeEvent = null),
          (e.targetInst = null),
          (e.ancestors.length = 0),
          10 > dt.length && dt.push(e);
      }
      function ft(e, t, n, r) {
        if (dt.length) {
          var a = dt.pop();
          return (
            (a.topLevelType = e),
            (a.eventSystemFlags = r),
            (a.nativeEvent = t),
            (a.targetInst = n),
            a
          );
        }
        return {
          topLevelType: e,
          eventSystemFlags: r,
          nativeEvent: t,
          targetInst: n,
          ancestors: [],
        };
      }
      function mt(e) {
        var t = e.targetInst,
          n = t;
        do {
          if (!n) {
            e.ancestors.push(n);
            break;
          }
          var r = n;
          if (3 === r.tag) r = r.stateNode.containerInfo;
          else {
            for (; r.return; ) r = r.return;
            r = 3 !== r.tag ? null : r.stateNode.containerInfo;
          }
          if (!r) break;
          (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = An(r));
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
          t = e.ancestors[n];
          var a = ut(e.nativeEvent);
          r = e.topLevelType;
          var o = e.nativeEvent,
            i = e.eventSystemFlags;
          0 === n && (i |= 64);
          for (var l = null, s = 0; s < E.length; s++) {
            var u = E[s];
            u && (u = u.extractEvents(r, t, o, a, i)) && (l = at(l, u));
          }
          st(l);
        }
      }
      function gt(e, t, n) {
        if (!n.has(e)) {
          switch (e) {
            case "scroll":
              Kt(t, "scroll", !0);
              break;
            case "focus":
            case "blur":
              Kt(t, "focus", !0),
                Kt(t, "blur", !0),
                n.set("blur", null),
                n.set("focus", null);
              break;
            case "cancel":
            case "close":
              ct(e) && Kt(t, e, !0);
              break;
            case "invalid":
            case "submit":
            case "reset":
              break;
            default:
              -1 === Ye.indexOf(e) && Qt(e, t);
          }
          n.set(e, null);
        }
      }
      var ht,
        bt,
        vt,
        yt = !1,
        wt = [],
        kt = null,
        Et = null,
        xt = null,
        St = new Map(),
        Tt = new Map(),
        Ct = [],
        _t =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
            " "
          ),
        Ot =
          "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
            " "
          );
      function Pt(e, t, n, r, a) {
        return {
          blockedOn: e,
          topLevelType: t,
          eventSystemFlags: 32 | n,
          nativeEvent: a,
          container: r,
        };
      }
      function Rt(e, t) {
        switch (e) {
          case "focus":
          case "blur":
            kt = null;
            break;
          case "dragenter":
          case "dragleave":
            Et = null;
            break;
          case "mouseover":
          case "mouseout":
            xt = null;
            break;
          case "pointerover":
          case "pointerout":
            St.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Tt.delete(t.pointerId);
        }
      }
      function At(e, t, n, r, a, o) {
        return null === e || e.nativeEvent !== o
          ? ((e = Pt(t, n, r, a, o)),
            null !== t && null !== (t = Nn(t)) && bt(t),
            e)
          : ((e.eventSystemFlags |= r), e);
      }
      function Nt(e) {
        var t = An(e.target);
        if (null !== t) {
          var n = et(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = tt(n)))
                return (
                  (e.blockedOn = t),
                  void o.unstable_runWithPriority(e.priority, function () {
                    vt(n);
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function It(e) {
        if (null !== e.blockedOn) return !1;
        var t = Jt(
          e.topLevelType,
          e.eventSystemFlags,
          e.container,
          e.nativeEvent
        );
        if (null !== t) {
          var n = Nn(t);
          return null !== n && bt(n), (e.blockedOn = t), !1;
        }
        return !0;
      }
      function Lt(e, t, n) {
        It(e) && n.delete(t);
      }
      function jt() {
        for (yt = !1; 0 < wt.length; ) {
          var e = wt[0];
          if (null !== e.blockedOn) {
            null !== (e = Nn(e.blockedOn)) && ht(e);
            break;
          }
          var t = Jt(
            e.topLevelType,
            e.eventSystemFlags,
            e.container,
            e.nativeEvent
          );
          null !== t ? (e.blockedOn = t) : wt.shift();
        }
        null !== kt && It(kt) && (kt = null),
          null !== Et && It(Et) && (Et = null),
          null !== xt && It(xt) && (xt = null),
          St.forEach(Lt),
          Tt.forEach(Lt);
      }
      function Dt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          yt ||
            ((yt = !0),
            o.unstable_scheduleCallback(o.unstable_NormalPriority, jt)));
      }
      function Ft(e) {
        function t(t) {
          return Dt(t, e);
        }
        if (0 < wt.length) {
          Dt(wt[0], e);
          for (var n = 1; n < wt.length; n++) {
            var r = wt[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== kt && Dt(kt, e),
            null !== Et && Dt(Et, e),
            null !== xt && Dt(xt, e),
            St.forEach(t),
            Tt.forEach(t),
            n = 0;
          n < Ct.length;
          n++
        )
          (r = Ct[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Ct.length && null === (n = Ct[0]).blockedOn; )
          Nt(n), null === n.blockedOn && Ct.shift();
      }
      var Mt = {},
        zt = new Map(),
        Ut = new Map(),
        $t = [
          "abort",
          "abort",
          Ve,
          "animationEnd",
          Qe,
          "animationIteration",
          Ke,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Xe,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function Bt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            a = e[n + 1],
            o = "on" + (a[0].toUpperCase() + a.slice(1));
          (o = {
            phasedRegistrationNames: { bubbled: o, captured: o + "Capture" },
            dependencies: [r],
            eventPriority: t,
          }),
            Ut.set(r, t),
            zt.set(r, o),
            (Mt[a] = o);
        }
      }
      Bt(
        "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        Bt(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        Bt($t, 2);
      for (
        var qt =
            "change selectionchange textInput compositionstart compositionend compositionupdate".split(
              " "
            ),
          Gt = 0;
        Gt < qt.length;
        Gt++
      )
        Ut.set(qt[Gt], 0);
      var Ht = o.unstable_UserBlockingPriority,
        Wt = o.unstable_runWithPriority,
        Vt = !0;
      function Qt(e, t) {
        Kt(t, e, !1);
      }
      function Kt(e, t, n) {
        var r = Ut.get(t);
        switch (void 0 === r ? 2 : r) {
          case 0:
            r = Xt.bind(null, t, 1, e);
            break;
          case 1:
            r = Yt.bind(null, t, 1, e);
            break;
          default:
            r = Zt.bind(null, t, 1, e);
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
      }
      function Xt(e, t, n, r) {
        M || D();
        var a = Zt,
          o = M;
        M = !0;
        try {
          j(a, e, t, n, r);
        } finally {
          (M = o) || U();
        }
      }
      function Yt(e, t, n, r) {
        Wt(Ht, Zt.bind(null, e, t, n, r));
      }
      function Zt(e, t, n, r) {
        if (Vt)
          if (0 < wt.length && -1 < _t.indexOf(e))
            (e = Pt(null, e, t, n, r)), wt.push(e);
          else {
            var a = Jt(e, t, n, r);
            if (null === a) Rt(e, r);
            else if (-1 < _t.indexOf(e)) (e = Pt(a, e, t, n, r)), wt.push(e);
            else if (
              !(function (e, t, n, r, a) {
                switch (t) {
                  case "focus":
                    return (kt = At(kt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Et = At(Et, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (xt = At(xt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return St.set(o, At(St.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Tt.set(o, At(Tt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            ) {
              Rt(e, r), (e = ft(e, r, null, t));
              try {
                $(mt, e);
              } finally {
                pt(e);
              }
            }
          }
      }
      function Jt(e, t, n, r) {
        if (null !== (n = An((n = ut(r))))) {
          var a = et(n);
          if (null === a) n = null;
          else {
            var o = a.tag;
            if (13 === o) {
              if (null !== (n = tt(a))) return n;
              n = null;
            } else if (3 === o) {
              if (a.stateNode.hydrate)
                return 3 === a.tag ? a.stateNode.containerInfo : null;
              n = null;
            } else a !== n && (n = null);
          }
        }
        e = ft(e, r, n, t);
        try {
          $(mt, e);
        } finally {
          pt(e);
        }
        return null;
      }
      var en = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        tn = ["Webkit", "ms", "Moz", "O"];
      function nn(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (en.hasOwnProperty(e) && en[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function rn(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = nn(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(en).forEach(function (e) {
        tn.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (en[t] = en[e]);
        });
      });
      var an = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function on(e, t) {
        if (t) {
          if (
            an[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(i(137, e, ""));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(i(60));
            if (
              "object" != typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(i(61));
          }
          if (null != t.style && "object" != typeof t.style)
            throw Error(i(62, ""));
        }
      }
      function ln(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var sn = Le;
      function un(e, t) {
        var n = Je(
          (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
        );
        t = T[t];
        for (var r = 0; r < t.length; r++) gt(t[r], e, n);
      }
      function cn() {}
      function dn(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function pn(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function fn(e, t) {
        var n,
          r = pn(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = pn(r);
        }
      }
      function mn(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? mn(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function gn() {
        for (var e = window, t = dn(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = dn((e = t.contentWindow).document);
        }
        return t;
      }
      function hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var bn = "$?",
        vn = "$!",
        yn = null,
        wn = null;
      function kn(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function En(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var xn = "function" == typeof setTimeout ? setTimeout : void 0,
        Sn = "function" == typeof clearTimeout ? clearTimeout : void 0;
      function Tn(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Cn(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || n === vn || n === bn) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var _n = Math.random().toString(36).slice(2),
        On = "__reactInternalInstance$" + _n,
        Pn = "__reactEventHandlers$" + _n,
        Rn = "__reactContainere$" + _n;
      function An(e) {
        var t = e[On];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Rn] || n[On])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Cn(e); null !== e; ) {
                if ((n = e[On])) return n;
                e = Cn(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function Nn(e) {
        return !(e = e[On] || e[Rn]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function In(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(i(33));
      }
      function Ln(e) {
        return e[Pn] || null;
      }
      function jn(e) {
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Dn(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = m(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
        return n;
      }
      function Fn(e, t, n) {
        (t = Dn(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
          ((n._dispatchListeners = at(n._dispatchListeners, t)),
          (n._dispatchInstances = at(n._dispatchInstances, e)));
      }
      function Mn(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
          for (var t = e._targetInst, n = []; t; ) n.push(t), (t = jn(t));
          for (t = n.length; 0 < t--; ) Fn(n[t], "captured", e);
          for (t = 0; t < n.length; t++) Fn(n[t], "bubbled", e);
        }
      }
      function zn(e, t, n) {
        e &&
          n &&
          n.dispatchConfig.registrationName &&
          (t = Dn(e, n.dispatchConfig.registrationName)) &&
          ((n._dispatchListeners = at(n._dispatchListeners, t)),
          (n._dispatchInstances = at(n._dispatchInstances, e)));
      }
      function Un(e) {
        e && e.dispatchConfig.registrationName && zn(e._targetInst, null, e);
      }
      function $n(e) {
        ot(e, Mn);
      }
      var Bn = null,
        qn = null,
        Gn = null;
      function Hn() {
        if (Gn) return Gn;
        var e,
          t,
          n = qn,
          r = n.length,
          a = "value" in Bn ? Bn.value : Bn.textContent,
          o = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
        return (Gn = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function Wn() {
        return !0;
      }
      function Vn() {
        return !1;
      }
      function Qn(e, t, n, r) {
        for (var a in ((this.dispatchConfig = e),
        (this._targetInst = t),
        (this.nativeEvent = n),
        (e = this.constructor.Interface)))
          e.hasOwnProperty(a) &&
            ((t = e[a])
              ? (this[a] = t(n))
              : "target" === a
              ? (this.target = r)
              : (this[a] = n[a]));
        return (
          (this.isDefaultPrevented = (
            null != n.defaultPrevented
              ? n.defaultPrevented
              : !1 === n.returnValue
          )
            ? Wn
            : Vn),
          (this.isPropagationStopped = Vn),
          this
        );
      }
      function Kn(e, t, n, r) {
        if (this.eventPool.length) {
          var a = this.eventPool.pop();
          return this.call(a, e, t, n, r), a;
        }
        return new this(e, t, n, r);
      }
      function Xn(e) {
        if (!(e instanceof this)) throw Error(i(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
      }
      function Yn(e) {
        (e.eventPool = []), (e.getPooled = Kn), (e.release = Xn);
      }
      a(Qn.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Wn));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Wn));
        },
        persist: function () {
          this.isPersistent = Wn;
        },
        isPersistent: Vn,
        destructor: function () {
          var e,
            t = this.constructor.Interface;
          for (e in t) this[e] = null;
          (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
            (this.isPropagationStopped = this.isDefaultPrevented = Vn),
            (this._dispatchInstances = this._dispatchListeners = null);
        },
      }),
        (Qn.Interface = {
          type: null,
          target: null,
          currentTarget: function () {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null,
        }),
        (Qn.extend = function (e) {
          function t() {}
          function n() {
            return r.apply(this, arguments);
          }
          var r = this;
          t.prototype = r.prototype;
          var o = new t();
          return (
            a(o, n.prototype),
            (n.prototype = o),
            (n.prototype.constructor = n),
            (n.Interface = a({}, r.Interface, e)),
            (n.extend = r.extend),
            Yn(n),
            n
          );
        }),
        Yn(Qn);
      var Zn = Qn.extend({ data: null }),
        Jn = Qn.extend({ data: null }),
        er = [9, 13, 27, 32],
        tr = _ && "CompositionEvent" in window,
        nr = null;
      _ && "documentMode" in document && (nr = document.documentMode);
      var rr = _ && "TextEvent" in window && !nr,
        ar = _ && (!tr || (nr && 8 < nr && 11 >= nr)),
        or = String.fromCharCode(32),
        ir = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: "onBeforeInput",
              captured: "onBeforeInputCapture",
            },
            dependencies: ["compositionend", "keypress", "textInput", "paste"],
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: "onCompositionEnd",
              captured: "onCompositionEndCapture",
            },
            dependencies:
              "blur compositionend keydown keypress keyup mousedown".split(" "),
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: "onCompositionStart",
              captured: "onCompositionStartCapture",
            },
            dependencies:
              "blur compositionstart keydown keypress keyup mousedown".split(
                " "
              ),
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: "onCompositionUpdate",
              captured: "onCompositionUpdateCapture",
            },
            dependencies:
              "blur compositionupdate keydown keypress keyup mousedown".split(
                " "
              ),
          },
        },
        lr = !1;
      function sr(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== er.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "blur":
            return !0;
          default:
            return !1;
        }
      }
      function ur(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var cr = !1;
      var dr = {
          eventTypes: ir,
          extractEvents: function (e, t, n, r) {
            var a;
            if (tr)
              e: {
                switch (e) {
                  case "compositionstart":
                    var o = ir.compositionStart;
                    break e;
                  case "compositionend":
                    o = ir.compositionEnd;
                    break e;
                  case "compositionupdate":
                    o = ir.compositionUpdate;
                    break e;
                }
                o = void 0;
              }
            else
              cr
                ? sr(e, n) && (o = ir.compositionEnd)
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (o = ir.compositionStart);
            return (
              o
                ? (ar &&
                    "ko" !== n.locale &&
                    (cr || o !== ir.compositionStart
                      ? o === ir.compositionEnd && cr && (a = Hn())
                      : ((qn = "value" in (Bn = r) ? Bn.value : Bn.textContent),
                        (cr = !0))),
                  (o = Zn.getPooled(o, t, n, r)),
                  a ? (o.data = a) : null !== (a = ur(n)) && (o.data = a),
                  $n(o),
                  (a = o))
                : (a = null),
              (e = rr
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return ur(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((lr = !0), or);
                      case "textInput":
                        return (e = t.data) === or && lr ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (cr)
                      return "compositionend" === e || (!tr && sr(e, t))
                        ? ((e = Hn()), (Gn = qn = Bn = null), (cr = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return ar && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n))
                ? (((t = Jn.getPooled(ir.beforeInput, t, n, r)).data = e),
                  $n(t))
                : (t = null),
              null === a ? t : null === t ? a : [a, t]
            );
          },
        },
        pr = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
      function fr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!pr[e.type] : "textarea" === t;
      }
      var mr = {
        change: {
          phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture",
          },
          dependencies:
            "blur change click focus input keydown keyup selectionchange".split(
              " "
            ),
        },
      };
      function gr(e, t, n) {
        return (
          ((e = Qn.getPooled(mr.change, e, t, n)).type = "change"),
          N(n),
          $n(e),
          e
        );
      }
      var hr = null,
        br = null;
      function vr(e) {
        st(e);
      }
      function yr(e) {
        if (ke(In(e))) return e;
      }
      function wr(e, t) {
        if ("change" === e) return t;
      }
      var kr = !1;
      function Er() {
        hr && (hr.detachEvent("onpropertychange", xr), (br = hr = null));
      }
      function xr(e) {
        if ("value" === e.propertyName && yr(br))
          if (((e = gr(br, e, ut(e))), M)) st(e);
          else {
            M = !0;
            try {
              L(vr, e);
            } finally {
              (M = !1), U();
            }
          }
      }
      function Sr(e, t, n) {
        "focus" === e
          ? (Er(), (br = n), (hr = t).attachEvent("onpropertychange", xr))
          : "blur" === e && Er();
      }
      function Tr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return yr(br);
      }
      function Cr(e, t) {
        if ("click" === e) return yr(t);
      }
      function _r(e, t) {
        if ("input" === e || "change" === e) return yr(t);
      }
      _ &&
        (kr =
          ct("input") && (!document.documentMode || 9 < document.documentMode));
      var Or = {
          eventTypes: mr,
          _isInputEventSupported: kr,
          extractEvents: function (e, t, n, r) {
            var a = t ? In(t) : window,
              o = a.nodeName && a.nodeName.toLowerCase();
            if ("select" === o || ("input" === o && "file" === a.type))
              var i = wr;
            else if (fr(a))
              if (kr) i = _r;
              else {
                i = Tr;
                var l = Sr;
              }
            else
              (o = a.nodeName) &&
                "input" === o.toLowerCase() &&
                ("checkbox" === a.type || "radio" === a.type) &&
                (i = Cr);
            if (i && (i = i(e, t))) return gr(i, n, r);
            l && l(e, a, t),
              "blur" === e &&
                (e = a._wrapperState) &&
                e.controlled &&
                "number" === a.type &&
                _e(a, "number", a.value);
          },
        },
        Pr = Qn.extend({ view: null, detail: null }),
        Rr = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Ar(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Rr[e]) && !!t[e];
      }
      function Nr() {
        return Ar;
      }
      var Ir = 0,
        Lr = 0,
        jr = !1,
        Dr = !1,
        Fr = Pr.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: Nr,
          button: null,
          buttons: null,
          relatedTarget: function (e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function (e) {
            if ("movementX" in e) return e.movementX;
            var t = Ir;
            return (
              (Ir = e.screenX),
              jr ? ("mousemove" === e.type ? e.screenX - t : 0) : ((jr = !0), 0)
            );
          },
          movementY: function (e) {
            if ("movementY" in e) return e.movementY;
            var t = Lr;
            return (
              (Lr = e.screenY),
              Dr ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Dr = !0), 0)
            );
          },
        }),
        Mr = Fr.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null,
        }),
        zr = {
          mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["mouseout", "mouseover"],
          },
          mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["mouseout", "mouseover"],
          },
          pointerEnter: {
            registrationName: "onPointerEnter",
            dependencies: ["pointerout", "pointerover"],
          },
          pointerLeave: {
            registrationName: "onPointerLeave",
            dependencies: ["pointerout", "pointerover"],
          },
        },
        Ur = {
          eventTypes: zr,
          extractEvents: function (e, t, n, r, a) {
            var o = "mouseover" === e || "pointerover" === e,
              i = "mouseout" === e || "pointerout" === e;
            if (
              (o && 0 == (32 & a) && (n.relatedTarget || n.fromElement)) ||
              (!i && !o)
            )
              return null;
            ((o =
              r.window === r
                ? r
                : (o = r.ownerDocument)
                ? o.defaultView || o.parentWindow
                : window),
            i)
              ? ((i = t),
                null !==
                  (t = (t = n.relatedTarget || n.toElement) ? An(t) : null) &&
                  (t !== et(t) || (5 !== t.tag && 6 !== t.tag)) &&
                  (t = null))
              : (i = null);
            if (i === t) return null;
            if ("mouseout" === e || "mouseover" === e)
              var l = Fr,
                s = zr.mouseLeave,
                u = zr.mouseEnter,
                c = "mouse";
            else
              ("pointerout" !== e && "pointerover" !== e) ||
                ((l = Mr),
                (s = zr.pointerLeave),
                (u = zr.pointerEnter),
                (c = "pointer"));
            if (
              ((e = null == i ? o : In(i)),
              (o = null == t ? o : In(t)),
              ((s = l.getPooled(s, i, n, r)).type = c + "leave"),
              (s.target = e),
              (s.relatedTarget = o),
              ((n = l.getPooled(u, t, n, r)).type = c + "enter"),
              (n.target = o),
              (n.relatedTarget = e),
              (c = t),
              (r = i) && c)
            )
              e: {
                for (u = c, i = 0, e = l = r; e; e = jn(e)) i++;
                for (e = 0, t = u; t; t = jn(t)) e++;
                for (; 0 < i - e; ) (l = jn(l)), i--;
                for (; 0 < e - i; ) (u = jn(u)), e--;
                for (; i--; ) {
                  if (l === u || l === u.alternate) break e;
                  (l = jn(l)), (u = jn(u));
                }
                l = null;
              }
            else l = null;
            for (
              u = l, l = [];
              r && r !== u && (null === (i = r.alternate) || i !== u);

            )
              l.push(r), (r = jn(r));
            for (
              r = [];
              c && c !== u && (null === (i = c.alternate) || i !== u);

            )
              r.push(c), (c = jn(c));
            for (c = 0; c < l.length; c++) zn(l[c], "bubbled", s);
            for (c = r.length; 0 < c--; ) zn(r[c], "captured", n);
            return 0 == (64 & a) ? [s] : [s, n];
          },
        };
      var $r =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        Br = Object.prototype.hasOwnProperty;
      function qr(e, t) {
        if ($r(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!Br.call(t, n[r]) || !$r(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      var Gr = _ && "documentMode" in document && 11 >= document.documentMode,
        Hr = {
          select: {
            phasedRegistrationNames: {
              bubbled: "onSelect",
              captured: "onSelectCapture",
            },
            dependencies:
              "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
                " "
              ),
          },
        },
        Wr = null,
        Vr = null,
        Qr = null,
        Kr = !1;
      function Xr(e, t) {
        var n =
          t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Kr || null == Wr || Wr !== dn(n)
          ? null
          : ("selectionStart" in (n = Wr) && hn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
                }),
            Qr && qr(Qr, n)
              ? null
              : ((Qr = n),
                ((e = Qn.getPooled(Hr.select, Vr, e, t)).type = "select"),
                (e.target = Wr),
                $n(e),
                e));
      }
      var Yr = {
          eventTypes: Hr,
          extractEvents: function (e, t, n, r, a, o) {
            if (
              !(o = !(a =
                o ||
                (r.window === r
                  ? r.document
                  : 9 === r.nodeType
                  ? r
                  : r.ownerDocument)))
            ) {
              e: {
                (a = Je(a)), (o = T.onSelect);
                for (var i = 0; i < o.length; i++)
                  if (!a.has(o[i])) {
                    a = !1;
                    break e;
                  }
                a = !0;
              }
              o = !a;
            }
            if (o) return null;
            switch (((a = t ? In(t) : window), e)) {
              case "focus":
                (fr(a) || "true" === a.contentEditable) &&
                  ((Wr = a), (Vr = t), (Qr = null));
                break;
              case "blur":
                Qr = Vr = Wr = null;
                break;
              case "mousedown":
                Kr = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                return (Kr = !1), Xr(n, r);
              case "selectionchange":
                if (Gr) break;
              case "keydown":
              case "keyup":
                return Xr(n, r);
            }
            return null;
          },
        },
        Zr = Qn.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        Jr = Qn.extend({
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        ea = Pr.extend({ relatedTarget: null });
      function ta(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      var na = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        ra = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        aa = Pr.extend({
          key: function (e) {
            if (e.key) {
              var t = na[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = ta(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? ra[e.keyCode] || "Unidentified"
              : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: Nr,
          charCode: function (e) {
            return "keypress" === e.type ? ta(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? ta(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        oa = Fr.extend({ dataTransfer: null }),
        ia = Pr.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: Nr,
        }),
        la = Qn.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        sa = Fr.extend({
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null,
        }),
        ua = {
          eventTypes: Mt,
          extractEvents: function (e, t, n, r) {
            var a = zt.get(e);
            if (!a) return null;
            switch (e) {
              case "keypress":
                if (0 === ta(n)) return null;
              case "keydown":
              case "keyup":
                e = aa;
                break;
              case "blur":
              case "focus":
                e = ea;
                break;
              case "click":
                if (2 === n.button) return null;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                e = Fr;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                e = oa;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                e = ia;
                break;
              case Ve:
              case Qe:
              case Ke:
                e = Zr;
                break;
              case Xe:
                e = la;
                break;
              case "scroll":
                e = Pr;
                break;
              case "wheel":
                e = sa;
                break;
              case "copy":
              case "cut":
              case "paste":
                e = Jr;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                e = Mr;
                break;
              default:
                e = Qn;
            }
            return $n((t = e.getPooled(a, t, n, r))), t;
          },
        };
      if (v) throw Error(i(101));
      (v = Array.prototype.slice.call(
        "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
          " "
        )
      )),
        w(),
        (m = Ln),
        (g = Nn),
        (h = In),
        C({
          SimpleEventPlugin: ua,
          EnterLeaveEventPlugin: Ur,
          ChangeEventPlugin: Or,
          SelectEventPlugin: Yr,
          BeforeInputEventPlugin: dr,
        });
      var ca = [],
        da = -1;
      function pa(e) {
        0 > da || ((e.current = ca[da]), (ca[da] = null), da--);
      }
      function fa(e, t) {
        da++, (ca[da] = e.current), (e.current = t);
      }
      var ma = {},
        ga = { current: ma },
        ha = { current: !1 },
        ba = ma;
      function va(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ma;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          o = {};
        for (a in n) o[a] = t[a];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        );
      }
      function ya(e) {
        return null != (e = e.childContextTypes);
      }
      function wa() {
        pa(ha), pa(ga);
      }
      function ka(e, t, n) {
        if (ga.current !== ma) throw Error(i(168));
        fa(ga, t), fa(ha, n);
      }
      function Ea(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var o in (r = r.getChildContext()))
          if (!(o in e)) throw Error(i(108, he(t) || "Unknown", o));
        return a({}, n, {}, r);
      }
      function xa(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            ma),
          (ba = ga.current),
          fa(ga, e),
          fa(ha, ha.current),
          !0
        );
      }
      function Sa(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(i(169));
        n
          ? ((e = Ea(e, t, ba)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            pa(ha),
            pa(ga),
            fa(ga, e))
          : pa(ha),
          fa(ha, n);
      }
      var Ta = o.unstable_runWithPriority,
        Ca = o.unstable_scheduleCallback,
        _a = o.unstable_cancelCallback,
        Oa = o.unstable_requestPaint,
        Pa = o.unstable_now,
        Ra = o.unstable_getCurrentPriorityLevel,
        Aa = o.unstable_ImmediatePriority,
        Na = o.unstable_UserBlockingPriority,
        Ia = o.unstable_NormalPriority,
        La = o.unstable_LowPriority,
        ja = o.unstable_IdlePriority,
        Da = {},
        Fa = o.unstable_shouldYield,
        Ma = void 0 !== Oa ? Oa : function () {},
        za = null,
        Ua = null,
        $a = !1,
        Ba = Pa(),
        qa =
          1e4 > Ba
            ? Pa
            : function () {
                return Pa() - Ba;
              };
      function Ga() {
        switch (Ra()) {
          case Aa:
            return 99;
          case Na:
            return 98;
          case Ia:
            return 97;
          case La:
            return 96;
          case ja:
            return 95;
          default:
            throw Error(i(332));
        }
      }
      function Ha(e) {
        switch (e) {
          case 99:
            return Aa;
          case 98:
            return Na;
          case 97:
            return Ia;
          case 96:
            return La;
          case 95:
            return ja;
          default:
            throw Error(i(332));
        }
      }
      function Wa(e, t) {
        return (e = Ha(e)), Ta(e, t);
      }
      function Va(e, t, n) {
        return (e = Ha(e)), Ca(e, t, n);
      }
      function Qa(e) {
        return null === za ? ((za = [e]), (Ua = Ca(Aa, Xa))) : za.push(e), Da;
      }
      function Ka() {
        if (null !== Ua) {
          var e = Ua;
          (Ua = null), _a(e);
        }
        Xa();
      }
      function Xa() {
        if (!$a && null !== za) {
          $a = !0;
          var e = 0;
          try {
            var t = za;
            Wa(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (za = null);
          } catch (n) {
            throw (null !== za && (za = za.slice(e + 1)), Ca(Aa, Ka), n);
          } finally {
            $a = !1;
          }
        }
      }
      function Ya(e, t, n) {
        return (
          1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
        );
      }
      function Za(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      var Ja = { current: null },
        eo = null,
        to = null,
        no = null;
      function ro() {
        no = to = eo = null;
      }
      function ao(e) {
        var t = Ja.current;
        pa(Ja), (e.type._context._currentValue = t);
      }
      function oo(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if (e.childExpirationTime < t)
            (e.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t);
          else {
            if (!(null !== n && n.childExpirationTime < t)) break;
            n.childExpirationTime = t;
          }
          e = e.return;
        }
      }
      function io(e, t) {
        (eo = e),
          (no = to = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (e.expirationTime >= t && (Li = !0), (e.firstContext = null));
      }
      function lo(e, t) {
        if (no !== e && !1 !== t && 0 !== t)
          if (
            (("number" == typeof t && 1073741823 !== t) ||
              ((no = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === to)
          ) {
            if (null === eo) throw Error(i(308));
            (to = t),
              (eo.dependencies = {
                expirationTime: 0,
                firstContext: t,
                responders: null,
              });
          } else to = to.next = t;
        return e._currentValue;
      }
      var so = !1;
      function uo(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          baseQueue: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function co(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              baseQueue: e.baseQueue,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function po(e, t) {
        return ((e = {
          expirationTime: e,
          suspenseConfig: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        }).next = e);
      }
      function fo(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function mo(e, t) {
        var n = e.alternate;
        null !== n && co(n, e),
          null === (n = (e = e.updateQueue).baseQueue)
            ? ((e.baseQueue = t.next = t), (t.next = t))
            : ((t.next = n.next), (n.next = t));
      }
      function go(e, t, n, r) {
        var o = e.updateQueue;
        so = !1;
        var i = o.baseQueue,
          l = o.shared.pending;
        if (null !== l) {
          if (null !== i) {
            var s = i.next;
            (i.next = l.next), (l.next = s);
          }
          (i = l),
            (o.shared.pending = null),
            null !== (s = e.alternate) &&
              null !== (s = s.updateQueue) &&
              (s.baseQueue = l);
        }
        if (null !== i) {
          s = i.next;
          var u = o.baseState,
            c = 0,
            d = null,
            p = null,
            f = null;
          if (null !== s)
            for (var m = s; ; ) {
              if ((l = m.expirationTime) < r) {
                var g = {
                  expirationTime: m.expirationTime,
                  suspenseConfig: m.suspenseConfig,
                  tag: m.tag,
                  payload: m.payload,
                  callback: m.callback,
                  next: null,
                };
                null === f ? ((p = f = g), (d = u)) : (f = f.next = g),
                  l > c && (c = l);
              } else {
                null !== f &&
                  (f = f.next =
                    {
                      expirationTime: 1073741823,
                      suspenseConfig: m.suspenseConfig,
                      tag: m.tag,
                      payload: m.payload,
                      callback: m.callback,
                      next: null,
                    }),
                  fs(l, m.suspenseConfig);
                e: {
                  var h = e,
                    b = m;
                  switch (((l = t), (g = n), b.tag)) {
                    case 1:
                      if ("function" == typeof (h = b.payload)) {
                        u = h.call(g, u, l);
                        break e;
                      }
                      u = h;
                      break e;
                    case 3:
                      h.effectTag = (-4097 & h.effectTag) | 64;
                    case 0:
                      if (
                        null ==
                        (l =
                          "function" == typeof (h = b.payload)
                            ? h.call(g, u, l)
                            : h)
                      )
                        break e;
                      u = a({}, u, l);
                      break e;
                    case 2:
                      so = !0;
                  }
                }
                null !== m.callback &&
                  ((e.effectTag |= 32),
                  null === (l = o.effects) ? (o.effects = [m]) : l.push(m));
              }
              if (null === (m = m.next) || m === s) {
                if (null === (l = o.shared.pending)) break;
                (m = i.next = l.next),
                  (l.next = s),
                  (o.baseQueue = i = l),
                  (o.shared.pending = null);
              }
            }
          null === f ? (d = u) : (f.next = p),
            (o.baseState = d),
            (o.baseQueue = f),
            ms(c),
            (e.expirationTime = c),
            (e.memoizedState = u);
        }
      }
      function ho(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (
                ((r.callback = null), (r = a), (a = n), "function" != typeof r)
              )
                throw Error(i(191, r));
              r.call(a);
            }
          }
      }
      var bo = X.ReactCurrentBatchConfig,
        vo = new r.Component().refs;
      function yo(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
          (e.memoizedState = n),
          0 === e.expirationTime && (e.updateQueue.baseState = n);
      }
      var wo = {
        isMounted: function (e) {
          return !!(e = e._reactInternalFiber) && et(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = es(),
            a = bo.suspense;
          ((a = po((r = ts(r, e, a)), a)).payload = t),
            null != n && (a.callback = n),
            fo(e, a),
            ns(e, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = es(),
            a = bo.suspense;
          ((a = po((r = ts(r, e, a)), a)).tag = 1),
            (a.payload = t),
            null != n && (a.callback = n),
            fo(e, a),
            ns(e, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternalFiber;
          var n = es(),
            r = bo.suspense;
          ((r = po((n = ts(n, e, r)), r)).tag = 2),
            null != t && (r.callback = t),
            fo(e, r),
            ns(e, n);
        },
      };
      function ko(e, t, n, r, a, o, i) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, i)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !qr(n, r) ||
              !qr(a, o);
      }
      function Eo(e, t, n) {
        var r = !1,
          a = ma,
          o = t.contextType;
        return (
          "object" == typeof o && null !== o
            ? (o = lo(o))
            : ((a = ya(t) ? ba : ga.current),
              (o = (r = null != (r = t.contextTypes)) ? va(e, a) : ma)),
          (t = new t(n, o)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = wo),
          (e.stateNode = t),
          (t._reactInternalFiber = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              a),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }
      function xo(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && wo.enqueueReplaceState(t, t.state, null);
      }
      function So(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = vo), uo(e);
        var o = t.contextType;
        "object" == typeof o && null !== o
          ? (a.context = lo(o))
          : ((o = ya(t) ? ba : ga.current), (a.context = va(e, o))),
          go(e, n, a, r),
          (a.state = e.memoizedState),
          "function" == typeof (o = t.getDerivedStateFromProps) &&
            (yo(e, t, o, n), (a.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount &&
              "function" != typeof a.componentWillMount) ||
            ((t = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && wo.enqueueReplaceState(a, a.state, null),
            go(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" == typeof a.componentDidMount && (e.effectTag |= 4);
      }
      var To = Array.isArray;
      function Co(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(i(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(i(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === vo && (t = r.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                })._stringRef = a),
                t);
          }
          if ("string" != typeof e) throw Error(i(284));
          if (!n._owner) throw Error(i(290, e));
        }
        return e;
      }
      function _o(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            i(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t,
              ""
            )
          );
      }
      function Oo(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.effectTag = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = Ls(e, t)).index = 0), (e.sibling = null), e;
        }
        function o(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.effectTag = 2), n)
                  : r
                : ((t.effectTag = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.effectTag = 2), t;
        }
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Fs(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function u(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = Co(e, t, n)), (r.return = e), r)
            : (((r = js(n.type, n.key, n.props, null, e.mode, r)).ref = Co(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Ms(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Ds(n, e.mode, r, o)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function p(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Fs("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case ee:
                return (
                  ((n = js(t.type, t.key, t.props, null, e.mode, n)).ref = Co(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case te:
                return ((t = Ms(t, e.mode, n)).return = e), t;
            }
            if (To(t) || ge(t))
              return ((t = Ds(t, e.mode, n, null)).return = e), t;
            _o(e, t);
          }
          return null;
        }
        function f(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== a ? null : s(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case ee:
                return n.key === a
                  ? n.type === ne
                    ? d(e, t, n.props.children, r, a)
                    : u(e, t, n, r)
                  : null;
              case te:
                return n.key === a ? c(e, t, n, r) : null;
            }
            if (To(n) || ge(n)) return null !== a ? null : d(e, t, n, r, null);
            _o(e, n);
          }
          return null;
        }
        function m(e, t, n, r, a) {
          if ("string" == typeof r || "number" == typeof r)
            return s(t, (e = e.get(n) || null), "" + r, a);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case ee:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === ne
                    ? d(t, e, r.props.children, a, r.key)
                    : u(t, e, r, a)
                );
              case te:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (To(r) || ge(r)) return d(t, (e = e.get(n) || null), r, a, null);
            _o(t, r);
          }
          return null;
        }
        function g(a, i, l, s) {
          for (
            var u = null, c = null, d = i, g = (i = 0), h = null;
            null !== d && g < l.length;
            g++
          ) {
            d.index > g ? ((h = d), (d = null)) : (h = d.sibling);
            var b = f(a, d, l[g], s);
            if (null === b) {
              null === d && (d = h);
              break;
            }
            e && d && null === b.alternate && t(a, d),
              (i = o(b, i, g)),
              null === c ? (u = b) : (c.sibling = b),
              (c = b),
              (d = h);
          }
          if (g === l.length) return n(a, d), u;
          if (null === d) {
            for (; g < l.length; g++)
              null !== (d = p(a, l[g], s)) &&
                ((i = o(d, i, g)),
                null === c ? (u = d) : (c.sibling = d),
                (c = d));
            return u;
          }
          for (d = r(a, d); g < l.length; g++)
            null !== (h = m(d, a, g, l[g], s)) &&
              (e &&
                null !== h.alternate &&
                d.delete(null === h.key ? g : h.key),
              (i = o(h, i, g)),
              null === c ? (u = h) : (c.sibling = h),
              (c = h));
          return (
            e &&
              d.forEach(function (e) {
                return t(a, e);
              }),
            u
          );
        }
        function h(a, l, s, u) {
          var c = ge(s);
          if ("function" != typeof c) throw Error(i(150));
          if (null == (s = c.call(s))) throw Error(i(151));
          for (
            var d = (c = null), g = l, h = (l = 0), b = null, v = s.next();
            null !== g && !v.done;
            h++, v = s.next()
          ) {
            g.index > h ? ((b = g), (g = null)) : (b = g.sibling);
            var y = f(a, g, v.value, u);
            if (null === y) {
              null === g && (g = b);
              break;
            }
            e && g && null === y.alternate && t(a, g),
              (l = o(y, l, h)),
              null === d ? (c = y) : (d.sibling = y),
              (d = y),
              (g = b);
          }
          if (v.done) return n(a, g), c;
          if (null === g) {
            for (; !v.done; h++, v = s.next())
              null !== (v = p(a, v.value, u)) &&
                ((l = o(v, l, h)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return c;
          }
          for (g = r(a, g); !v.done; h++, v = s.next())
            null !== (v = m(g, a, h, v.value, u)) &&
              (e &&
                null !== v.alternate &&
                g.delete(null === v.key ? h : v.key),
              (l = o(v, l, h)),
              null === d ? (c = v) : (d.sibling = v),
              (d = v));
          return (
            e &&
              g.forEach(function (e) {
                return t(a, e);
              }),
            c
          );
        }
        return function (e, r, o, s) {
          var u =
            "object" == typeof o &&
            null !== o &&
            o.type === ne &&
            null === o.key;
          u && (o = o.props.children);
          var c = "object" == typeof o && null !== o;
          if (c)
            switch (o.$$typeof) {
              case ee:
                e: {
                  for (c = o.key, u = r; null !== u; ) {
                    if (u.key === c) {
                      switch (u.tag) {
                        case 7:
                          if (o.type === ne) {
                            n(e, u.sibling),
                              ((r = a(u, o.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (u.elementType === o.type) {
                            n(e, u.sibling),
                              ((r = a(u, o.props)).ref = Co(e, u, o)),
                              (r.return = e),
                              (e = r);
                            break e;
                          }
                      }
                      n(e, u);
                      break;
                    }
                    t(e, u), (u = u.sibling);
                  }
                  o.type === ne
                    ? (((r = Ds(o.props.children, e.mode, s, o.key)).return =
                        e),
                      (e = r))
                    : (((s = js(o.type, o.key, o.props, null, e.mode, s)).ref =
                        Co(e, r, o)),
                      (s.return = e),
                      (e = s));
                }
                return l(e);
              case te:
                e: {
                  for (u = o.key; null !== r; ) {
                    if (r.key === u) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === o.containerInfo &&
                        r.stateNode.implementation === o.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, o.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Ms(o, e.mode, s)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" == typeof o || "number" == typeof o)
            return (
              (o = "" + o),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r))
                : (n(e, r), ((r = Fs(o, e.mode, s)).return = e), (e = r)),
              l(e)
            );
          if (To(o)) return g(e, r, o, s);
          if (ge(o)) return h(e, r, o, s);
          if ((c && _o(e, o), void 0 === o && !u))
            switch (e.tag) {
              case 1:
              case 0:
                throw (
                  ((e = e.type),
                  Error(i(152, e.displayName || e.name || "Component")))
                );
            }
          return n(e, r);
        };
      }
      var Po = Oo(!0),
        Ro = Oo(!1),
        Ao = {},
        No = { current: Ao },
        Io = { current: Ao },
        Lo = { current: Ao };
      function jo(e) {
        if (e === Ao) throw Error(i(174));
        return e;
      }
      function Do(e, t) {
        switch ((fa(Lo, t), fa(Io, e), fa(No, Ao), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
            break;
          default:
            t = Fe(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        pa(No), fa(No, t);
      }
      function Fo() {
        pa(No), pa(Io), pa(Lo);
      }
      function Mo(e) {
        jo(Lo.current);
        var t = jo(No.current),
          n = Fe(t, e.type);
        t !== n && (fa(Io, e), fa(No, n));
      }
      function zo(e) {
        Io.current === e && (pa(No), pa(Io));
      }
      var Uo = { current: 0 };
      function $o(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) || n.data === bn || n.data === vn)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (64 & t.effectTag)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      function Bo(e, t) {
        return { responder: e, props: t };
      }
      var qo = X.ReactCurrentDispatcher,
        Go = X.ReactCurrentBatchConfig,
        Ho = 0,
        Wo = null,
        Vo = null,
        Qo = null,
        Ko = !1;
      function Xo() {
        throw Error(i(321));
      }
      function Yo(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!$r(e[n], t[n])) return !1;
        return !0;
      }
      function Zo(e, t, n, r, a, o) {
        if (
          ((Ho = o),
          (Wo = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.expirationTime = 0),
          (qo.current = null === e || null === e.memoizedState ? ki : Ei),
          (e = n(r, a)),
          t.expirationTime === Ho)
        ) {
          o = 0;
          do {
            if (((t.expirationTime = 0), !(25 > o))) throw Error(i(301));
            (o += 1),
              (Qo = Vo = null),
              (t.updateQueue = null),
              (qo.current = xi),
              (e = n(r, a));
          } while (t.expirationTime === Ho);
        }
        if (
          ((qo.current = wi),
          (t = null !== Vo && null !== Vo.next),
          (Ho = 0),
          (Qo = Vo = Wo = null),
          (Ko = !1),
          t)
        )
          throw Error(i(300));
        return e;
      }
      function Jo() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Qo ? (Wo.memoizedState = Qo = e) : (Qo = Qo.next = e), Qo
        );
      }
      function ei() {
        if (null === Vo) {
          var e = Wo.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Vo.next;
        var t = null === Qo ? Wo.memoizedState : Qo.next;
        if (null !== t) (Qo = t), (Vo = e);
        else {
          if (null === e) throw Error(i(310));
          (e = {
            memoizedState: (Vo = e).memoizedState,
            baseState: Vo.baseState,
            baseQueue: Vo.baseQueue,
            queue: Vo.queue,
            next: null,
          }),
            null === Qo ? (Wo.memoizedState = Qo = e) : (Qo = Qo.next = e);
        }
        return Qo;
      }
      function ti(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function ni(e) {
        var t = ei(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = Vo,
          a = r.baseQueue,
          o = n.pending;
        if (null !== o) {
          if (null !== a) {
            var l = a.next;
            (a.next = o.next), (o.next = l);
          }
          (r.baseQueue = a = o), (n.pending = null);
        }
        if (null !== a) {
          (a = a.next), (r = r.baseState);
          var s = (l = o = null),
            u = a;
          do {
            var c = u.expirationTime;
            if (c < Ho) {
              var d = {
                expirationTime: u.expirationTime,
                suspenseConfig: u.suspenseConfig,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null,
              };
              null === s ? ((l = s = d), (o = r)) : (s = s.next = d),
                c > Wo.expirationTime && ((Wo.expirationTime = c), ms(c));
            } else
              null !== s &&
                (s = s.next =
                  {
                    expirationTime: 1073741823,
                    suspenseConfig: u.suspenseConfig,
                    action: u.action,
                    eagerReducer: u.eagerReducer,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                fs(c, u.suspenseConfig),
                (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
            u = u.next;
          } while (null !== u && u !== a);
          null === s ? (o = r) : (s.next = l),
            $r(r, t.memoizedState) || (Li = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function ri(e) {
        var t = ei(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          o = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = (a = a.next);
          do {
            (o = e(o, l.action)), (l = l.next);
          } while (l !== a);
          $r(o, t.memoizedState) || (Li = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o);
        }
        return [o, r];
      }
      function ai(e) {
        var t = Jo();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: ti,
              lastRenderedState: e,
            }).dispatch =
            yi.bind(null, Wo, e)),
          [t.memoizedState, e]
        );
      }
      function oi(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Wo.updateQueue)
            ? ((t = { lastEffect: null }),
              (Wo.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function ii() {
        return ei().memoizedState;
      }
      function li(e, t, n, r) {
        var a = Jo();
        (Wo.effectTag |= e),
          (a.memoizedState = oi(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function si(e, t, n, r) {
        var a = ei();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== Vo) {
          var i = Vo.memoizedState;
          if (((o = i.destroy), null !== r && Yo(r, i.deps)))
            return void oi(t, n, o, r);
        }
        (Wo.effectTag |= e), (a.memoizedState = oi(1 | t, n, o, r));
      }
      function ui(e, t) {
        return li(516, 4, e, t);
      }
      function ci(e, t) {
        return si(516, 4, e, t);
      }
      function di(e, t) {
        return si(4, 2, e, t);
      }
      function pi(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function fi(e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          si(4, 2, pi.bind(null, t, e), n)
        );
      }
      function mi() {}
      function gi(e, t) {
        return (Jo().memoizedState = [e, void 0 === t ? null : t]), e;
      }
      function hi(e, t) {
        var n = ei();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Yo(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function bi(e, t) {
        var n = ei();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Yo(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function vi(e, t, n) {
        var r = Ga();
        Wa(98 > r ? 98 : r, function () {
          e(!0);
        }),
          Wa(97 < r ? 97 : r, function () {
            var r = Go.suspense;
            Go.suspense = void 0 === t ? null : t;
            try {
              e(!1), n();
            } finally {
              Go.suspense = r;
            }
          });
      }
      function yi(e, t, n) {
        var r = es(),
          a = bo.suspense;
        a = {
          expirationTime: (r = ts(r, e, a)),
          suspenseConfig: a,
          action: n,
          eagerReducer: null,
          eagerState: null,
          next: null,
        };
        var o = t.pending;
        if (
          (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
          (t.pending = a),
          (o = e.alternate),
          e === Wo || (null !== o && o === Wo))
        )
          (Ko = !0), (a.expirationTime = Ho), (Wo.expirationTime = Ho);
        else {
          if (
            0 === e.expirationTime &&
            (null === o || 0 === o.expirationTime) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var i = t.lastRenderedState,
                l = o(i, n);
              if (((a.eagerReducer = o), (a.eagerState = l), $r(l, i))) return;
            } catch (s) {}
          ns(e, r);
        }
      }
      var wi = {
          readContext: lo,
          useCallback: Xo,
          useContext: Xo,
          useEffect: Xo,
          useImperativeHandle: Xo,
          useLayoutEffect: Xo,
          useMemo: Xo,
          useReducer: Xo,
          useRef: Xo,
          useState: Xo,
          useDebugValue: Xo,
          useResponder: Xo,
          useDeferredValue: Xo,
          useTransition: Xo,
        },
        ki = {
          readContext: lo,
          useCallback: gi,
          useContext: lo,
          useEffect: ui,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              li(4, 2, pi.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return li(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = Jo();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = Jo();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                {
                  pending: null,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }).dispatch =
                yi.bind(null, Wo, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Jo().memoizedState = e);
          },
          useState: ai,
          useDebugValue: mi,
          useResponder: Bo,
          useDeferredValue: function (e, t) {
            var n = ai(e),
              r = n[0],
              a = n[1];
            return (
              ui(
                function () {
                  var n = Go.suspense;
                  Go.suspense = void 0 === t ? null : t;
                  try {
                    a(e);
                  } finally {
                    Go.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = ai(!1),
              n = t[0];
            return (t = t[1]), [gi(vi.bind(null, t, e), [t, e]), n];
          },
        },
        Ei = {
          readContext: lo,
          useCallback: hi,
          useContext: lo,
          useEffect: ci,
          useImperativeHandle: fi,
          useLayoutEffect: di,
          useMemo: bi,
          useReducer: ni,
          useRef: ii,
          useState: function () {
            return ni(ti);
          },
          useDebugValue: mi,
          useResponder: Bo,
          useDeferredValue: function (e, t) {
            var n = ni(ti),
              r = n[0],
              a = n[1];
            return (
              ci(
                function () {
                  var n = Go.suspense;
                  Go.suspense = void 0 === t ? null : t;
                  try {
                    a(e);
                  } finally {
                    Go.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = ni(ti),
              n = t[0];
            return (t = t[1]), [hi(vi.bind(null, t, e), [t, e]), n];
          },
        },
        xi = {
          readContext: lo,
          useCallback: hi,
          useContext: lo,
          useEffect: ci,
          useImperativeHandle: fi,
          useLayoutEffect: di,
          useMemo: bi,
          useReducer: ri,
          useRef: ii,
          useState: function () {
            return ri(ti);
          },
          useDebugValue: mi,
          useResponder: Bo,
          useDeferredValue: function (e, t) {
            var n = ri(ti),
              r = n[0],
              a = n[1];
            return (
              ci(
                function () {
                  var n = Go.suspense;
                  Go.suspense = void 0 === t ? null : t;
                  try {
                    a(e);
                  } finally {
                    Go.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = ri(ti),
              n = t[0];
            return (t = t[1]), [hi(vi.bind(null, t, e), [t, e]), n];
          },
        },
        Si = null,
        Ti = null,
        Ci = !1;
      function _i(e, t) {
        var n = Ns(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.effectTag = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Oi(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function Pi(e) {
        if (Ci) {
          var t = Ti;
          if (t) {
            var n = t;
            if (!Oi(e, t)) {
              if (!(t = Tn(n.nextSibling)) || !Oi(e, t))
                return (
                  (e.effectTag = (-1025 & e.effectTag) | 2),
                  (Ci = !1),
                  void (Si = e)
                );
              _i(Si, n);
            }
            (Si = e), (Ti = Tn(t.firstChild));
          } else (e.effectTag = (-1025 & e.effectTag) | 2), (Ci = !1), (Si = e);
        }
      }
      function Ri(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Si = e;
      }
      function Ai(e) {
        if (e !== Si) return !1;
        if (!Ci) return Ri(e), (Ci = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !En(t, e.memoizedProps))
        )
          for (t = Ti; t; ) _i(e, t), (t = Tn(t.nextSibling));
        if ((Ri(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(i(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    Ti = Tn(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && n !== vn && n !== bn) || t++;
              }
              e = e.nextSibling;
            }
            Ti = null;
          }
        } else Ti = Si ? Tn(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Ni() {
        (Ti = Si = null), (Ci = !1);
      }
      var Ii = X.ReactCurrentOwner,
        Li = !1;
      function ji(e, t, n, r) {
        t.child = null === e ? Ro(t, null, n, r) : Po(t, e.child, n, r);
      }
      function Di(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        return (
          io(t, a),
          (r = Zo(e, t, n, r, o, a)),
          null === e || Li
            ? ((t.effectTag |= 1), ji(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= a && (e.expirationTime = 0),
              Zi(e, t, a))
        );
      }
      function Fi(e, t, n, r, a, o) {
        if (null === e) {
          var i = n.type;
          return "function" != typeof i ||
            Is(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = js(n.type, null, r, null, t.mode, o)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = i), Mi(e, t, i, r, a, o));
        }
        return (
          (i = e.child),
          a < o &&
          ((a = i.memoizedProps),
          (n = null !== (n = n.compare) ? n : qr)(a, r) && e.ref === t.ref)
            ? Zi(e, t, o)
            : ((t.effectTag |= 1),
              ((e = Ls(i, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function Mi(e, t, n, r, a, o) {
        return null !== e &&
          qr(e.memoizedProps, r) &&
          e.ref === t.ref &&
          ((Li = !1), a < o)
          ? ((t.expirationTime = e.expirationTime), Zi(e, t, o))
          : Ui(e, t, n, r, o);
      }
      function zi(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.effectTag |= 128);
      }
      function Ui(e, t, n, r, a) {
        var o = ya(n) ? ba : ga.current;
        return (
          (o = va(t, o)),
          io(t, a),
          (n = Zo(e, t, n, r, o, a)),
          null === e || Li
            ? ((t.effectTag |= 1), ji(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= a && (e.expirationTime = 0),
              Zi(e, t, a))
        );
      }
      function $i(e, t, n, r, a) {
        if (ya(n)) {
          var o = !0;
          xa(t);
        } else o = !1;
        if ((io(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            Eo(t, n, r),
            So(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var i = t.stateNode,
            l = t.memoizedProps;
          i.props = l;
          var s = i.context,
            u = n.contextType;
          "object" == typeof u && null !== u
            ? (u = lo(u))
            : (u = va(t, (u = ya(n) ? ba : ga.current)));
          var c = n.getDerivedStateFromProps,
            d =
              "function" == typeof c ||
              "function" == typeof i.getSnapshotBeforeUpdate;
          d ||
            ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
              "function" != typeof i.componentWillReceiveProps) ||
            ((l !== r || s !== u) && xo(t, i, r, u)),
            (so = !1);
          var p = t.memoizedState;
          (i.state = p),
            go(t, r, i, a),
            (s = t.memoizedState),
            l !== r || p !== s || ha.current || so
              ? ("function" == typeof c &&
                  (yo(t, n, c, r), (s = t.memoizedState)),
                (l = so || ko(t, n, l, r, p, s, u))
                  ? (d ||
                      ("function" != typeof i.UNSAFE_componentWillMount &&
                        "function" != typeof i.componentWillMount) ||
                      ("function" == typeof i.componentWillMount &&
                        i.componentWillMount(),
                      "function" == typeof i.UNSAFE_componentWillMount &&
                        i.UNSAFE_componentWillMount()),
                    "function" == typeof i.componentDidMount &&
                      (t.effectTag |= 4))
                  : ("function" == typeof i.componentDidMount &&
                      (t.effectTag |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = s)),
                (i.props = r),
                (i.state = s),
                (i.context = u),
                (r = l))
              : ("function" == typeof i.componentDidMount && (t.effectTag |= 4),
                (r = !1));
        } else
          (i = t.stateNode),
            co(e, t),
            (l = t.memoizedProps),
            (i.props = t.type === t.elementType ? l : Za(t.type, l)),
            (s = i.context),
            "object" == typeof (u = n.contextType) && null !== u
              ? (u = lo(u))
              : (u = va(t, (u = ya(n) ? ba : ga.current))),
            (d =
              "function" == typeof (c = n.getDerivedStateFromProps) ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && xo(t, i, r, u)),
            (so = !1),
            (s = t.memoizedState),
            (i.state = s),
            go(t, r, i, a),
            (p = t.memoizedState),
            l !== r || s !== p || ha.current || so
              ? ("function" == typeof c &&
                  (yo(t, n, c, r), (p = t.memoizedState)),
                (c = so || ko(t, n, l, r, s, p, u))
                  ? (d ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, p, u),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, p, u)),
                    "function" == typeof i.componentDidUpdate &&
                      (t.effectTag |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (t.effectTag |= 256))
                  : ("function" != typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && s === e.memoizedState) ||
                      (t.effectTag |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && s === e.memoizedState) ||
                      (t.effectTag |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (i.props = r),
                (i.state = p),
                (i.context = u),
                (r = c))
              : ("function" != typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && s === e.memoizedState) ||
                  (t.effectTag |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && s === e.memoizedState) ||
                  (t.effectTag |= 256),
                (r = !1));
        return Bi(e, t, n, r, o, a);
      }
      function Bi(e, t, n, r, a, o) {
        zi(e, t);
        var i = 0 != (64 & t.effectTag);
        if (!r && !i) return a && Sa(t, n, !1), Zi(e, t, o);
        (r = t.stateNode), (Ii.current = t);
        var l =
          i && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.effectTag |= 1),
          null !== e && i
            ? ((t.child = Po(t, e.child, null, o)),
              (t.child = Po(t, null, l, o)))
            : ji(e, t, l, o),
          (t.memoizedState = r.state),
          a && Sa(t, n, !0),
          t.child
        );
      }
      function qi(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ka(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ka(0, t.context, !1),
          Do(e, t.containerInfo);
      }
      var Gi,
        Hi,
        Wi,
        Vi = { dehydrated: null, retryTime: 0 };
      function Qi(e, t, n) {
        var r,
          a = t.mode,
          o = t.pendingProps,
          i = Uo.current,
          l = !1;
        if (
          ((r = 0 != (64 & t.effectTag)) ||
            (r = 0 != (2 & i) && (null === e || null !== e.memoizedState)),
          r
            ? ((l = !0), (t.effectTag &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === o.fallback ||
              !0 === o.unstable_avoidThisFallback ||
              (i |= 1),
          fa(Uo, 1 & i),
          null === e)
        ) {
          if ((void 0 !== o.fallback && Pi(t), l)) {
            if (
              ((l = o.fallback),
              ((o = Ds(null, a, 0, null)).return = t),
              0 == (2 & t.mode))
            )
              for (
                e = null !== t.memoizedState ? t.child.child : t.child,
                  o.child = e;
                null !== e;

              )
                (e.return = o), (e = e.sibling);
            return (
              ((n = Ds(l, a, n, null)).return = t),
              (o.sibling = n),
              (t.memoizedState = Vi),
              (t.child = o),
              n
            );
          }
          return (
            (a = o.children),
            (t.memoizedState = null),
            (t.child = Ro(t, null, a, n))
          );
        }
        if (null !== e.memoizedState) {
          if (((a = (e = e.child).sibling), l)) {
            if (
              ((o = o.fallback),
              ((n = Ls(e, e.pendingProps)).return = t),
              0 == (2 & t.mode) &&
                (l = null !== t.memoizedState ? t.child.child : t.child) !==
                  e.child)
            )
              for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
            return (
              ((a = Ls(a, o)).return = t),
              (n.sibling = a),
              (n.childExpirationTime = 0),
              (t.memoizedState = Vi),
              (t.child = n),
              a
            );
          }
          return (
            (n = Po(t, e.child, o.children, n)),
            (t.memoizedState = null),
            (t.child = n)
          );
        }
        if (((e = e.child), l)) {
          if (
            ((l = o.fallback),
            ((o = Ds(null, a, 0, null)).return = t),
            (o.child = e),
            null !== e && (e.return = o),
            0 == (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                o.child = e;
              null !== e;

            )
              (e.return = o), (e = e.sibling);
          return (
            ((n = Ds(l, a, n, null)).return = t),
            (o.sibling = n),
            (n.effectTag |= 2),
            (o.childExpirationTime = 0),
            (t.memoizedState = Vi),
            (t.child = o),
            n
          );
        }
        return (t.memoizedState = null), (t.child = Po(t, e, o.children, n));
      }
      function Ki(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t),
          oo(e.return, t);
      }
      function Xi(e, t, n, r, a, o) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailExpiration: 0,
              tailMode: a,
              lastEffect: o,
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = r),
            (i.tail = n),
            (i.tailExpiration = 0),
            (i.tailMode = a),
            (i.lastEffect = o));
      }
      function Yi(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          o = r.tail;
        if ((ji(e, t, r.children, n), 0 != (2 & (r = Uo.current))))
          (r = (1 & r) | 2), (t.effectTag |= 64);
        else {
          if (null !== e && 0 != (64 & e.effectTag))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Ki(e, n);
              else if (19 === e.tag) Ki(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((fa(Uo, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === $o(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                Xi(t, !1, a, n, o, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === $o(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              Xi(t, !0, n, null, o, t.lastEffect);
              break;
            case "together":
              Xi(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function Zi(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if ((0 !== r && ms(r), t.childExpirationTime < n)) return null;
        if (null !== e && t.child !== e.child) throw Error(i(153));
        if (null !== t.child) {
          for (
            n = Ls((e = t.child), e.pendingProps), t.child = n, n.return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((n = n.sibling = Ls(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function Ji(e, t) {
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
      }
      function el(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return ya(t.type) && wa(), null;
          case 3:
            return (
              Fo(),
              pa(ha),
              pa(ga),
              (n = t.stateNode).pendingContext &&
                ((n.context = n.pendingContext), (n.pendingContext = null)),
              (null !== e && null !== e.child) || !Ai(t) || (t.effectTag |= 4),
              null
            );
          case 5:
            zo(t), (n = jo(Lo.current));
            var o = t.type;
            if (null !== e && null != t.stateNode)
              Hi(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(i(166));
                return null;
              }
              if (((e = jo(No.current)), Ai(t))) {
                (r = t.stateNode), (o = t.type);
                var l = t.memoizedProps;
                switch (((r[On] = t), (r[Pn] = l), o)) {
                  case "iframe":
                  case "object":
                  case "embed":
                    Qt("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < Ye.length; e++) Qt(Ye[e], r);
                    break;
                  case "source":
                    Qt("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Qt("error", r), Qt("load", r);
                    break;
                  case "form":
                    Qt("reset", r), Qt("submit", r);
                    break;
                  case "details":
                    Qt("toggle", r);
                    break;
                  case "input":
                    xe(r, l), Qt("invalid", r), un(n, "onChange");
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!l.multiple }),
                      Qt("invalid", r),
                      un(n, "onChange");
                    break;
                  case "textarea":
                    Ae(r, l), Qt("invalid", r), un(n, "onChange");
                }
                for (var s in (on(o, l), (e = null), l))
                  if (l.hasOwnProperty(s)) {
                    var u = l[s];
                    "children" === s
                      ? "string" == typeof u
                        ? r.textContent !== u && (e = ["children", u])
                        : "number" == typeof u &&
                          r.textContent !== "" + u &&
                          (e = ["children", "" + u])
                      : S.hasOwnProperty(s) && null != u && un(n, s);
                  }
                switch (o) {
                  case "input":
                    we(r), Ce(r, l, !0);
                    break;
                  case "textarea":
                    we(r), Ie(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof l.onClick && (r.onclick = cn);
                }
                (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
              } else {
                switch (
                  ((s = 9 === n.nodeType ? n : n.ownerDocument),
                  e === sn && (e = De(o)),
                  e === sn
                    ? "script" === o
                      ? (((e = s.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" == typeof r.is
                      ? (e = s.createElement(o, { is: r.is }))
                      : ((e = s.createElement(o)),
                        "select" === o &&
                          ((s = e),
                          r.multiple
                            ? (s.multiple = !0)
                            : r.size && (s.size = r.size)))
                    : (e = s.createElementNS(e, o)),
                  (e[On] = t),
                  (e[Pn] = r),
                  Gi(e, t),
                  (t.stateNode = e),
                  (s = ln(o, r)),
                  o)
                ) {
                  case "iframe":
                  case "object":
                  case "embed":
                    Qt("load", e), (u = r);
                    break;
                  case "video":
                  case "audio":
                    for (u = 0; u < Ye.length; u++) Qt(Ye[u], e);
                    u = r;
                    break;
                  case "source":
                    Qt("error", e), (u = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Qt("error", e), Qt("load", e), (u = r);
                    break;
                  case "form":
                    Qt("reset", e), Qt("submit", e), (u = r);
                    break;
                  case "details":
                    Qt("toggle", e), (u = r);
                    break;
                  case "input":
                    xe(e, r),
                      (u = Ee(e, r)),
                      Qt("invalid", e),
                      un(n, "onChange");
                    break;
                  case "option":
                    u = Oe(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (u = a({}, r, { value: void 0 })),
                      Qt("invalid", e),
                      un(n, "onChange");
                    break;
                  case "textarea":
                    Ae(e, r),
                      (u = Re(e, r)),
                      Qt("invalid", e),
                      un(n, "onChange");
                    break;
                  default:
                    u = r;
                }
                on(o, u);
                var c = u;
                for (l in c)
                  if (c.hasOwnProperty(l)) {
                    var d = c[l];
                    "style" === l
                      ? rn(e, d)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (d = d ? d.__html : void 0) && Ue(e, d)
                      : "children" === l
                      ? "string" == typeof d
                        ? ("textarea" !== o || "" !== d) && $e(e, d)
                        : "number" == typeof d && $e(e, "" + d)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (S.hasOwnProperty(l)
                          ? null != d && un(n, l)
                          : null != d && Y(e, l, d, s));
                  }
                switch (o) {
                  case "input":
                    we(e), Ce(e, r, !1);
                    break;
                  case "textarea":
                    we(e), Ie(e);
                    break;
                  case "option":
                    null != r.value &&
                      e.setAttribute("value", "" + ve(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (n = r.value)
                        ? Pe(e, !!r.multiple, n, !1)
                        : null != r.defaultValue &&
                          Pe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof u.onClick && (e.onclick = cn);
                }
                kn(o, r) && (t.effectTag |= 4);
              }
              null !== t.ref && (t.effectTag |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Wi(0, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(i(166));
              (n = jo(Lo.current)),
                jo(No.current),
                Ai(t)
                  ? ((n = t.stateNode),
                    (r = t.memoizedProps),
                    (n[On] = t),
                    n.nodeValue !== r && (t.effectTag |= 4))
                  : (((n = (
                      9 === n.nodeType ? n : n.ownerDocument
                    ).createTextNode(r))[On] = t),
                    (t.stateNode = n));
            }
            return null;
          case 13:
            return (
              pa(Uo),
              (r = t.memoizedState),
              0 != (64 & t.effectTag)
                ? ((t.expirationTime = n), t)
                : ((n = null !== r),
                  (r = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && Ai(t)
                    : ((r = null !== (o = e.memoizedState)),
                      n ||
                        null === o ||
                        (null !== (o = e.child.sibling) &&
                          (null !== (l = t.firstEffect)
                            ? ((t.firstEffect = o), (o.nextEffect = l))
                            : ((t.firstEffect = t.lastEffect = o),
                              (o.nextEffect = null)),
                          (o.effectTag = 8)))),
                  n &&
                    !r &&
                    0 != (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Uo.current)
                      ? jl === Ol && (jl = Pl)
                      : ((jl !== Ol && jl !== Pl) || (jl = Rl),
                        0 !== Ul && null !== Nl && ($s(Nl, Ll), Bs(Nl, Ul)))),
                  (n || r) && (t.effectTag |= 4),
                  null)
            );
          case 4:
            return Fo(), null;
          case 10:
            return ao(t), null;
          case 17:
            return ya(t.type) && wa(), null;
          case 19:
            if ((pa(Uo), null === (r = t.memoizedState))) return null;
            if (((o = 0 != (64 & t.effectTag)), null === (l = r.rendering))) {
              if (o) Ji(r, !1);
              else if (jl !== Ol || (null !== e && 0 != (64 & e.effectTag)))
                for (l = t.child; null !== l; ) {
                  if (null !== (e = $o(l))) {
                    for (
                      t.effectTag |= 64,
                        Ji(r, !1),
                        null !== (o = e.updateQueue) &&
                          ((t.updateQueue = o), (t.effectTag |= 4)),
                        null === r.lastEffect && (t.firstEffect = null),
                        t.lastEffect = r.lastEffect,
                        r = t.child;
                      null !== r;

                    )
                      (l = n),
                        ((o = r).effectTag &= 2),
                        (o.nextEffect = null),
                        (o.firstEffect = null),
                        (o.lastEffect = null),
                        null === (e = o.alternate)
                          ? ((o.childExpirationTime = 0),
                            (o.expirationTime = l),
                            (o.child = null),
                            (o.memoizedProps = null),
                            (o.memoizedState = null),
                            (o.updateQueue = null),
                            (o.dependencies = null))
                          : ((o.childExpirationTime = e.childExpirationTime),
                            (o.expirationTime = e.expirationTime),
                            (o.child = e.child),
                            (o.memoizedProps = e.memoizedProps),
                            (o.memoizedState = e.memoizedState),
                            (o.updateQueue = e.updateQueue),
                            (l = e.dependencies),
                            (o.dependencies =
                              null === l
                                ? null
                                : {
                                    expirationTime: l.expirationTime,
                                    firstContext: l.firstContext,
                                    responders: l.responders,
                                  })),
                        (r = r.sibling);
                    return fa(Uo, (1 & Uo.current) | 2), t.child;
                  }
                  l = l.sibling;
                }
            } else {
              if (!o)
                if (null !== (e = $o(l))) {
                  if (
                    ((t.effectTag |= 64),
                    (o = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.effectTag |= 4)),
                    Ji(r, !0),
                    null === r.tail && "hidden" === r.tailMode && !l.alternate)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * qa() - r.renderingStartTime > r.tailExpiration &&
                    1 < n &&
                    ((t.effectTag |= 64),
                    (o = !0),
                    Ji(r, !1),
                    (t.expirationTime = t.childExpirationTime = n - 1));
              r.isBackwards
                ? ((l.sibling = t.child), (t.child = l))
                : (null !== (n = r.last) ? (n.sibling = l) : (t.child = l),
                  (r.last = l));
            }
            return null !== r.tail
              ? (0 === r.tailExpiration && (r.tailExpiration = qa() + 500),
                (n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = qa()),
                (n.sibling = null),
                (t = Uo.current),
                fa(Uo, o ? (1 & t) | 2 : 1 & t),
                n)
              : null;
        }
        throw Error(i(156, t.tag));
      }
      function tl(e) {
        switch (e.tag) {
          case 1:
            ya(e.type) && wa();
            var t = e.effectTag;
            return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Fo(), pa(ha), pa(ga), 0 != (64 & (t = e.effectTag))))
              throw Error(i(285));
            return (e.effectTag = (-4097 & t) | 64), e;
          case 5:
            return zo(e), null;
          case 13:
            return (
              pa(Uo),
              4096 & (t = e.effectTag)
                ? ((e.effectTag = (-4097 & t) | 64), e)
                : null
            );
          case 19:
            return pa(Uo), null;
          case 4:
            return Fo(), null;
          case 10:
            return ao(e), null;
          default:
            return null;
        }
      }
      function nl(e, t) {
        return { value: e, source: t, stack: be(t) };
      }
      (Gi = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Hi = function (e, t, n, r, o) {
          var i = e.memoizedProps;
          if (i !== r) {
            var l,
              s,
              u = t.stateNode;
            switch ((jo(No.current), (e = null), n)) {
              case "input":
                (i = Ee(u, i)), (r = Ee(u, r)), (e = []);
                break;
              case "option":
                (i = Oe(u, i)), (r = Oe(u, r)), (e = []);
                break;
              case "select":
                (i = a({}, i, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (e = []);
                break;
              case "textarea":
                (i = Re(u, i)), (r = Re(u, r)), (e = []);
                break;
              default:
                "function" != typeof i.onClick &&
                  "function" == typeof r.onClick &&
                  (u.onclick = cn);
            }
            for (l in (on(n, r), (n = null), i))
              if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && null != i[l])
                if ("style" === l)
                  for (s in (u = i[l]))
                    u.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                else
                  "dangerouslySetInnerHTML" !== l &&
                    "children" !== l &&
                    "suppressContentEditableWarning" !== l &&
                    "suppressHydrationWarning" !== l &&
                    "autoFocus" !== l &&
                    (S.hasOwnProperty(l)
                      ? e || (e = [])
                      : (e = e || []).push(l, null));
            for (l in r) {
              var c = r[l];
              if (
                ((u = null != i ? i[l] : void 0),
                r.hasOwnProperty(l) && c !== u && (null != c || null != u))
              )
                if ("style" === l)
                  if (u) {
                    for (s in u)
                      !u.hasOwnProperty(s) ||
                        (c && c.hasOwnProperty(s)) ||
                        (n || (n = {}), (n[s] = ""));
                    for (s in c)
                      c.hasOwnProperty(s) &&
                        u[s] !== c[s] &&
                        (n || (n = {}), (n[s] = c[s]));
                  } else n || (e || (e = []), e.push(l, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === l
                    ? ((c = c ? c.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != c && u !== c && (e = e || []).push(l, c))
                    : "children" === l
                    ? u === c ||
                      ("string" != typeof c && "number" != typeof c) ||
                      (e = e || []).push(l, "" + c)
                    : "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      (S.hasOwnProperty(l)
                        ? (null != c && un(o, l), e || u === c || (e = []))
                        : (e = e || []).push(l, c));
            }
            n && (e = e || []).push("style", n),
              (o = e),
              (t.updateQueue = o) && (t.effectTag |= 4);
          }
        }),
        (Wi = function (e, t, n, r) {
          n !== r && (t.effectTag |= 4);
        });
      var rl = "function" == typeof WeakSet ? WeakSet : Set;
      function al(e, t) {
        var n = t.source,
          r = t.stack;
        null === r && null !== n && (r = be(n)),
          null !== n && he(n.type),
          (t = t.value),
          null !== e && 1 === e.tag && he(e.type);
        try {
          console.error(t);
        } catch (a) {
          setTimeout(function () {
            throw a;
          });
        }
      }
      function ol(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (n) {
              Cs(e, n);
            }
          else t.current = null;
      }
      function il(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.effectTag && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : Za(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(i(163));
      }
      function ll(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var r = n.destroy;
              (n.destroy = void 0), void 0 !== r && r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function sl(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function ul(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return void sl(3, n);
          case 1:
            if (((e = n.stateNode), 4 & n.effectTag))
              if (null === t) e.componentDidMount();
              else {
                var r =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : Za(n.type, t.memoizedProps);
                e.componentDidUpdate(
                  r,
                  t.memoizedState,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              }
            return void (null !== (t = n.updateQueue) && ho(n, t, e));
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              ho(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.effectTag &&
                kn(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && Ft(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
            return;
        }
        throw Error(i(163));
      }
      function cl(e, t, n) {
        switch (("function" == typeof Rs && Rs(t), t.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var r = e.next;
              Wa(97 < n ? 97 : n, function () {
                var e = r;
                do {
                  var n = e.destroy;
                  if (void 0 !== n) {
                    var a = t;
                    try {
                      n();
                    } catch (o) {
                      Cs(a, o);
                    }
                  }
                  e = e.next;
                } while (e !== r);
              });
            }
            break;
          case 1:
            ol(t),
              "function" == typeof (n = t.stateNode).componentWillUnmount &&
                (function (e, t) {
                  try {
                    (t.props = e.memoizedProps),
                      (t.state = e.memoizedState),
                      t.componentWillUnmount();
                  } catch (n) {
                    Cs(e, n);
                  }
                })(t, n);
            break;
          case 5:
            ol(t);
            break;
          case 4:
            hl(e, t, n);
        }
      }
      function dl(e) {
        var t = e.alternate;
        (e.return = null),
          (e.child = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.alternate = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.pendingProps = null),
          (e.memoizedProps = null),
          (e.stateNode = null),
          null !== t && dl(t);
      }
      function pl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function fl(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (pl(t)) {
              var n = t;
              break e;
            }
            t = t.return;
          }
          throw Error(i(160));
        }
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(i(161));
        }
        16 & n.effectTag && ($e(t, ""), (n.effectTag &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || pl(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.effectTag) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.effectTag)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? ml(e, n, t) : gl(e, n, t);
      }
      function ml(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = cn));
        else if (4 !== r && null !== (e = e.child))
          for (ml(e, t, n), e = e.sibling; null !== e; )
            ml(e, t, n), (e = e.sibling);
      }
      function gl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (gl(e, t, n), e = e.sibling; null !== e; )
            gl(e, t, n), (e = e.sibling);
      }
      function hl(e, t, n) {
        for (var r, a, o = t, l = !1; ; ) {
          if (!l) {
            l = o.return;
            e: for (;;) {
              if (null === l) throw Error(i(160));
              switch (((r = l.stateNode), l.tag)) {
                case 5:
                  a = !1;
                  break e;
                case 3:
                case 4:
                  (r = r.containerInfo), (a = !0);
                  break e;
              }
              l = l.return;
            }
            l = !0;
          }
          if (5 === o.tag || 6 === o.tag) {
            e: for (var s = e, u = o, c = n, d = u; ; )
              if ((cl(s, d, c), null !== d.child && 4 !== d.tag))
                (d.child.return = d), (d = d.child);
              else {
                if (d === u) break e;
                for (; null === d.sibling; ) {
                  if (null === d.return || d.return === u) break e;
                  d = d.return;
                }
                (d.sibling.return = d.return), (d = d.sibling);
              }
            a
              ? ((s = r),
                (u = o.stateNode),
                8 === s.nodeType
                  ? s.parentNode.removeChild(u)
                  : s.removeChild(u))
              : r.removeChild(o.stateNode);
          } else if (4 === o.tag) {
            if (null !== o.child) {
              (r = o.stateNode.containerInfo),
                (a = !0),
                (o.child.return = o),
                (o = o.child);
              continue;
            }
          } else if ((cl(e, o, n), null !== o.child)) {
            (o.child.return = o), (o = o.child);
            continue;
          }
          if (o === t) break;
          for (; null === o.sibling; ) {
            if (null === o.return || o.return === t) return;
            4 === (o = o.return).tag && (l = !1);
          }
          (o.sibling.return = o.return), (o = o.sibling);
        }
      }
      function bl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            return void ll(3, t);
          case 1:
            return;
          case 5:
            var n = t.stateNode;
            if (null != n) {
              var r = t.memoizedProps,
                a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var o = t.updateQueue;
              if (((t.updateQueue = null), null !== o)) {
                for (
                  n[Pn] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      Se(n, r),
                    ln(e, a),
                    t = ln(e, r),
                    a = 0;
                  a < o.length;
                  a += 2
                ) {
                  var l = o[a],
                    s = o[a + 1];
                  "style" === l
                    ? rn(n, s)
                    : "dangerouslySetInnerHTML" === l
                    ? Ue(n, s)
                    : "children" === l
                    ? $e(n, s)
                    : Y(n, l, s, t);
                }
                switch (e) {
                  case "input":
                    Te(n, r);
                    break;
                  case "textarea":
                    Ne(n, r);
                    break;
                  case "select":
                    (t = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (e = r.value)
                        ? Pe(n, !!r.multiple, e, !1)
                        : t !== !!r.multiple &&
                          (null != r.defaultValue
                            ? Pe(n, !!r.multiple, r.defaultValue, !0)
                            : Pe(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(i(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (t = t.stateNode).hydrate &&
              ((t.hydrate = !1), Ft(t.containerInfo))
            );
          case 12:
            return;
          case 13:
            if (
              ((n = t),
              null === t.memoizedState
                ? (r = !1)
                : ((r = !0), (n = t.child), (Bl = qa())),
              null !== n)
            )
              e: for (e = n; ; ) {
                if (5 === e.tag)
                  (o = e.stateNode),
                    r
                      ? "function" == typeof (o = o.style).setProperty
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none")
                      : ((o = e.stateNode),
                        (a =
                          null != (a = e.memoizedProps.style) &&
                          a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (o.style.display = nn("display", a)));
                else if (6 === e.tag)
                  e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                else {
                  if (
                    13 === e.tag &&
                    null !== e.memoizedState &&
                    null === e.memoizedState.dehydrated
                  ) {
                    ((o = e.child.sibling).return = e), (e = o);
                    continue;
                  }
                  if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                  }
                }
                if (e === n) break;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            return void vl(t);
          case 19:
            return void vl(t);
          case 17:
            return;
        }
        throw Error(i(163));
      }
      function vl(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new rl()),
            t.forEach(function (t) {
              var r = Os.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      var yl = "function" == typeof WeakMap ? WeakMap : Map;
      function wl(e, t, n) {
        ((n = po(n, null)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Gl || ((Gl = !0), (Hl = r)), al(e, t);
          }),
          n
        );
      }
      function kl(e, t, n) {
        (n = po(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var a = t.value;
          n.payload = function () {
            return al(e, t), r(a);
          };
        }
        var o = e.stateNode;
        return (
          null !== o &&
            "function" == typeof o.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof r &&
                (null === Wl ? (Wl = new Set([this])) : Wl.add(this), al(e, t));
              var n = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : "",
              });
            }),
          n
        );
      }
      var El,
        xl = Math.ceil,
        Sl = X.ReactCurrentDispatcher,
        Tl = X.ReactCurrentOwner,
        Cl = 16,
        _l = 32,
        Ol = 0,
        Pl = 3,
        Rl = 4,
        Al = 0,
        Nl = null,
        Il = null,
        Ll = 0,
        jl = Ol,
        Dl = null,
        Fl = 1073741823,
        Ml = 1073741823,
        zl = null,
        Ul = 0,
        $l = !1,
        Bl = 0,
        ql = null,
        Gl = !1,
        Hl = null,
        Wl = null,
        Vl = !1,
        Ql = null,
        Kl = 90,
        Xl = null,
        Yl = 0,
        Zl = null,
        Jl = 0;
      function es() {
        return 0 != (48 & Al)
          ? 1073741821 - ((qa() / 10) | 0)
          : 0 !== Jl
          ? Jl
          : (Jl = 1073741821 - ((qa() / 10) | 0));
      }
      function ts(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = Ga();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if (0 != (Al & Cl)) return Ll;
        if (null !== n) e = Ya(e, 0 | n.timeoutMs || 5e3, 250);
        else
          switch (r) {
            case 99:
              e = 1073741823;
              break;
            case 98:
              e = Ya(e, 150, 100);
              break;
            case 97:
            case 96:
              e = Ya(e, 5e3, 250);
              break;
            case 95:
              e = 2;
              break;
            default:
              throw Error(i(326));
          }
        return null !== Nl && e === Ll && --e, e;
      }
      function ns(e, t) {
        if (50 < Yl) throw ((Yl = 0), (Zl = null), Error(i(185)));
        if (null !== (e = rs(e, t))) {
          var n = Ga();
          1073741823 === t
            ? 0 != (8 & Al) && 0 == (48 & Al)
              ? ls(e)
              : (os(e), 0 === Al && Ka())
            : os(e),
            0 == (4 & Al) ||
              (98 !== n && 99 !== n) ||
              (null === Xl
                ? (Xl = new Map([[e, t]]))
                : (void 0 === (n = Xl.get(e)) || n > t) && Xl.set(e, t));
        }
      }
      function rs(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
          a = null;
        if (null === r && 3 === e.tag) a = e.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t),
              null === r.return && 3 === r.tag)
            ) {
              a = r.stateNode;
              break;
            }
            r = r.return;
          }
        return (
          null !== a && (Nl === a && (ms(t), jl === Rl && $s(a, Ll)), Bs(a, t)),
          a
        );
      }
      function as(e) {
        var t = e.lastExpiredTime;
        if (0 !== t) return t;
        if (!Us(e, (t = e.firstPendingTime))) return t;
        var n = e.lastPingedTime;
        return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e
          ? 0
          : e;
      }
      function os(e) {
        if (0 !== e.lastExpiredTime)
          (e.callbackExpirationTime = 1073741823),
            (e.callbackPriority = 99),
            (e.callbackNode = Qa(ls.bind(null, e)));
        else {
          var t = as(e),
            n = e.callbackNode;
          if (0 === t)
            null !== n &&
              ((e.callbackNode = null),
              (e.callbackExpirationTime = 0),
              (e.callbackPriority = 90));
          else {
            var r = es();
            if (
              (1073741823 === t
                ? (r = 99)
                : 1 === t || 2 === t
                ? (r = 95)
                : (r =
                    0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                      ? 99
                      : 250 >= r
                      ? 98
                      : 5250 >= r
                      ? 97
                      : 95),
              null !== n)
            ) {
              var a = e.callbackPriority;
              if (e.callbackExpirationTime === t && a >= r) return;
              n !== Da && _a(n);
            }
            (e.callbackExpirationTime = t),
              (e.callbackPriority = r),
              (t =
                1073741823 === t
                  ? Qa(ls.bind(null, e))
                  : Va(r, is.bind(null, e), {
                      timeout: 10 * (1073741821 - t) - qa(),
                    })),
              (e.callbackNode = t);
          }
        }
      }
      function is(e, t) {
        if (((Jl = 0), t)) return qs(e, (t = es())), os(e), null;
        var n = as(e);
        if (0 !== n) {
          if (((t = e.callbackNode), 0 != (48 & Al))) throw Error(i(327));
          if ((xs(), (e === Nl && n === Ll) || cs(e, n), null !== Il)) {
            var r = Al;
            Al |= Cl;
            for (var a = ps(); ; )
              try {
                hs();
                break;
              } catch (s) {
                ds(e, s);
              }
            if ((ro(), (Al = r), (Sl.current = a), 1 === jl))
              throw ((t = Dl), cs(e, n), $s(e, n), os(e), t);
            if (null === Il)
              switch (
                ((a = e.finishedWork = e.current.alternate),
                (e.finishedExpirationTime = n),
                (r = jl),
                (Nl = null),
                r)
              ) {
                case Ol:
                case 1:
                  throw Error(i(345));
                case 2:
                  qs(e, 2 < n ? 2 : n);
                  break;
                case Pl:
                  if (
                    ($s(e, n),
                    n === (r = e.lastSuspendedTime) &&
                      (e.nextKnownPendingLevel = ys(a)),
                    1073741823 === Fl && 10 < (a = Bl + 500 - qa()))
                  ) {
                    if ($l) {
                      var o = e.lastPingedTime;
                      if (0 === o || o >= n) {
                        (e.lastPingedTime = n), cs(e, n);
                        break;
                      }
                    }
                    if (0 !== (o = as(e)) && o !== n) break;
                    if (0 !== r && r !== n) {
                      e.lastPingedTime = r;
                      break;
                    }
                    e.timeoutHandle = xn(ws.bind(null, e), a);
                    break;
                  }
                  ws(e);
                  break;
                case Rl:
                  if (
                    ($s(e, n),
                    n === (r = e.lastSuspendedTime) &&
                      (e.nextKnownPendingLevel = ys(a)),
                    $l && (0 === (a = e.lastPingedTime) || a >= n))
                  ) {
                    (e.lastPingedTime = n), cs(e, n);
                    break;
                  }
                  if (0 !== (a = as(e)) && a !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  if (
                    (1073741823 !== Ml
                      ? (r = 10 * (1073741821 - Ml) - qa())
                      : 1073741823 === Fl
                      ? (r = 0)
                      : ((r = 10 * (1073741821 - Fl) - 5e3),
                        0 > (r = (a = qa()) - r) && (r = 0),
                        (n = 10 * (1073741821 - n) - a) <
                          (r =
                            (120 > r
                              ? 120
                              : 480 > r
                              ? 480
                              : 1080 > r
                              ? 1080
                              : 1920 > r
                              ? 1920
                              : 3e3 > r
                              ? 3e3
                              : 4320 > r
                              ? 4320
                              : 1960 * xl(r / 1960)) - r) && (r = n)),
                    10 < r)
                  ) {
                    e.timeoutHandle = xn(ws.bind(null, e), r);
                    break;
                  }
                  ws(e);
                  break;
                case 5:
                  if (1073741823 !== Fl && null !== zl) {
                    o = Fl;
                    var l = zl;
                    if (
                      (0 >= (r = 0 | l.busyMinDurationMs)
                        ? (r = 0)
                        : ((a = 0 | l.busyDelayMs),
                          (r =
                            (o =
                              qa() -
                              (10 * (1073741821 - o) -
                                (0 | l.timeoutMs || 5e3))) <= a
                              ? 0
                              : a + r - o)),
                      10 < r)
                    ) {
                      $s(e, n), (e.timeoutHandle = xn(ws.bind(null, e), r));
                      break;
                    }
                  }
                  ws(e);
                  break;
                default:
                  throw Error(i(329));
              }
            if ((os(e), e.callbackNode === t)) return is.bind(null, e);
          }
        }
        return null;
      }
      function ls(e) {
        var t = e.lastExpiredTime;
        if (((t = 0 !== t ? t : 1073741823), 0 != (48 & Al)))
          throw Error(i(327));
        if ((xs(), (e === Nl && t === Ll) || cs(e, t), null !== Il)) {
          var n = Al;
          Al |= Cl;
          for (var r = ps(); ; )
            try {
              gs();
              break;
            } catch (a) {
              ds(e, a);
            }
          if ((ro(), (Al = n), (Sl.current = r), 1 === jl))
            throw ((n = Dl), cs(e, t), $s(e, t), os(e), n);
          if (null !== Il) throw Error(i(261));
          (e.finishedWork = e.current.alternate),
            (e.finishedExpirationTime = t),
            (Nl = null),
            ws(e),
            os(e);
        }
        return null;
      }
      function ss(e, t) {
        var n = Al;
        Al |= 1;
        try {
          return e(t);
        } finally {
          0 === (Al = n) && Ka();
        }
      }
      function us(e, t) {
        var n = Al;
        (Al &= -2), (Al |= 8);
        try {
          return e(t);
        } finally {
          0 === (Al = n) && Ka();
        }
      }
      function cs(e, t) {
        (e.finishedWork = null), (e.finishedExpirationTime = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Sn(n)), null !== Il))
          for (n = Il.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && wa();
                break;
              case 3:
                Fo(), pa(ha), pa(ga);
                break;
              case 5:
                zo(r);
                break;
              case 4:
                Fo();
                break;
              case 13:
              case 19:
                pa(Uo);
                break;
              case 10:
                ao(r);
            }
            n = n.return;
          }
        (Nl = e),
          (Il = Ls(e.current, null)),
          (Ll = t),
          (jl = Ol),
          (Dl = null),
          (Ml = Fl = 1073741823),
          (zl = null),
          (Ul = 0),
          ($l = !1);
      }
      function ds(e, t) {
        for (;;) {
          try {
            if ((ro(), (qo.current = wi), Ko))
              for (var n = Wo.memoizedState; null !== n; ) {
                var r = n.queue;
                null !== r && (r.pending = null), (n = n.next);
              }
            if (
              ((Ho = 0),
              (Qo = Vo = Wo = null),
              (Ko = !1),
              null === Il || null === Il.return)
            )
              return (jl = 1), (Dl = t), (Il = null);
            e: {
              var a = e,
                o = Il.return,
                i = Il,
                l = t;
              if (
                ((t = Ll),
                (i.effectTag |= 2048),
                (i.firstEffect = i.lastEffect = null),
                null !== l &&
                  "object" == typeof l &&
                  "function" == typeof l.then)
              ) {
                var s = l;
                if (0 == (2 & i.mode)) {
                  var u = i.alternate;
                  u
                    ? ((i.updateQueue = u.updateQueue),
                      (i.memoizedState = u.memoizedState),
                      (i.expirationTime = u.expirationTime))
                    : ((i.updateQueue = null), (i.memoizedState = null));
                }
                var c = 0 != (1 & Uo.current),
                  d = o;
                do {
                  var p;
                  if ((p = 13 === d.tag)) {
                    var f = d.memoizedState;
                    if (null !== f) p = null !== f.dehydrated;
                    else {
                      var m = d.memoizedProps;
                      p =
                        void 0 !== m.fallback &&
                        (!0 !== m.unstable_avoidThisFallback || !c);
                    }
                  }
                  if (p) {
                    var g = d.updateQueue;
                    if (null === g) {
                      var h = new Set();
                      h.add(s), (d.updateQueue = h);
                    } else g.add(s);
                    if (0 == (2 & d.mode)) {
                      if (
                        ((d.effectTag |= 64),
                        (i.effectTag &= -2981),
                        1 === i.tag)
                      )
                        if (null === i.alternate) i.tag = 17;
                        else {
                          var b = po(1073741823, null);
                          (b.tag = 2), fo(i, b);
                        }
                      i.expirationTime = 1073741823;
                      break e;
                    }
                    (l = void 0), (i = t);
                    var v = a.pingCache;
                    if (
                      (null === v
                        ? ((v = a.pingCache = new yl()),
                          (l = new Set()),
                          v.set(s, l))
                        : void 0 === (l = v.get(s)) &&
                          ((l = new Set()), v.set(s, l)),
                      !l.has(i))
                    ) {
                      l.add(i);
                      var y = _s.bind(null, a, s, i);
                      s.then(y, y);
                    }
                    (d.effectTag |= 4096), (d.expirationTime = t);
                    break e;
                  }
                  d = d.return;
                } while (null !== d);
                l = Error(
                  (he(i.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                    be(i)
                );
              }
              5 !== jl && (jl = 2), (l = nl(l, i)), (d = o);
              do {
                switch (d.tag) {
                  case 3:
                    (s = l),
                      (d.effectTag |= 4096),
                      (d.expirationTime = t),
                      mo(d, wl(d, s, t));
                    break e;
                  case 1:
                    s = l;
                    var w = d.type,
                      k = d.stateNode;
                    if (
                      0 == (64 & d.effectTag) &&
                      ("function" == typeof w.getDerivedStateFromError ||
                        (null !== k &&
                          "function" == typeof k.componentDidCatch &&
                          (null === Wl || !Wl.has(k))))
                    ) {
                      (d.effectTag |= 4096),
                        (d.expirationTime = t),
                        mo(d, kl(d, s, t));
                      break e;
                    }
                }
                d = d.return;
              } while (null !== d);
            }
            Il = vs(Il);
          } catch (E) {
            t = E;
            continue;
          }
          break;
        }
      }
      function ps() {
        var e = Sl.current;
        return (Sl.current = wi), null === e ? wi : e;
      }
      function fs(e, t) {
        e < Fl && 2 < e && (Fl = e),
          null !== t && e < Ml && 2 < e && ((Ml = e), (zl = t));
      }
      function ms(e) {
        e > Ul && (Ul = e);
      }
      function gs() {
        for (; null !== Il; ) Il = bs(Il);
      }
      function hs() {
        for (; null !== Il && !Fa(); ) Il = bs(Il);
      }
      function bs(e) {
        var t = El(e.alternate, e, Ll);
        return (
          (e.memoizedProps = e.pendingProps),
          null === t && (t = vs(e)),
          (Tl.current = null),
          t
        );
      }
      function vs(e) {
        Il = e;
        do {
          var t = Il.alternate;
          if (((e = Il.return), 0 == (2048 & Il.effectTag))) {
            if (
              ((t = el(t, Il, Ll)), 1 === Ll || 1 !== Il.childExpirationTime)
            ) {
              for (var n = 0, r = Il.child; null !== r; ) {
                var a = r.expirationTime,
                  o = r.childExpirationTime;
                a > n && (n = a), o > n && (n = o), (r = r.sibling);
              }
              Il.childExpirationTime = n;
            }
            if (null !== t) return t;
            null !== e &&
              0 == (2048 & e.effectTag) &&
              (null === e.firstEffect && (e.firstEffect = Il.firstEffect),
              null !== Il.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = Il.firstEffect),
                (e.lastEffect = Il.lastEffect)),
              1 < Il.effectTag &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = Il)
                  : (e.firstEffect = Il),
                (e.lastEffect = Il)));
          } else {
            if (null !== (t = tl(Il))) return (t.effectTag &= 2047), t;
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
          }
          if (null !== (t = Il.sibling)) return t;
          Il = e;
        } while (null !== Il);
        return jl === Ol && (jl = 5), null;
      }
      function ys(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e;
      }
      function ws(e) {
        var t = Ga();
        return Wa(99, ks.bind(null, e, t)), null;
      }
      function ks(e, t) {
        do {
          xs();
        } while (null !== Ql);
        if (0 != (48 & Al)) throw Error(i(327));
        var n = e.finishedWork,
          r = e.finishedExpirationTime;
        if (null === n) return null;
        if (
          ((e.finishedWork = null),
          (e.finishedExpirationTime = 0),
          n === e.current)
        )
          throw Error(i(177));
        (e.callbackNode = null),
          (e.callbackExpirationTime = 0),
          (e.callbackPriority = 90),
          (e.nextKnownPendingLevel = 0);
        var a = ys(n);
        if (
          ((e.firstPendingTime = a),
          r <= e.lastSuspendedTime
            ? (e.firstSuspendedTime =
                e.lastSuspendedTime =
                e.nextKnownPendingLevel =
                  0)
            : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
          r <= e.lastPingedTime && (e.lastPingedTime = 0),
          r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
          e === Nl && ((Il = Nl = null), (Ll = 0)),
          1 < n.effectTag
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (a = n.firstEffect))
              : (a = n)
            : (a = n.firstEffect),
          null !== a)
        ) {
          var o = Al;
          (Al |= _l), (Tl.current = null), (yn = Vt);
          var l = gn();
          if (hn(l)) {
            if ("selectionStart" in l)
              var s = { start: l.selectionStart, end: l.selectionEnd };
            else
              e: {
                var u =
                  (s = ((s = l.ownerDocument) && s.defaultView) || window)
                    .getSelection && s.getSelection();
                if (u && 0 !== u.rangeCount) {
                  s = u.anchorNode;
                  var c = u.anchorOffset,
                    d = u.focusNode;
                  u = u.focusOffset;
                  try {
                    s.nodeType, d.nodeType;
                  } catch (C) {
                    s = null;
                    break e;
                  }
                  var p = 0,
                    f = -1,
                    m = -1,
                    g = 0,
                    h = 0,
                    b = l,
                    v = null;
                  t: for (;;) {
                    for (
                      var y;
                      b !== s || (0 !== c && 3 !== b.nodeType) || (f = p + c),
                        b !== d || (0 !== u && 3 !== b.nodeType) || (m = p + u),
                        3 === b.nodeType && (p += b.nodeValue.length),
                        null !== (y = b.firstChild);

                    )
                      (v = b), (b = y);
                    for (;;) {
                      if (b === l) break t;
                      if (
                        (v === s && ++g === c && (f = p),
                        v === d && ++h === u && (m = p),
                        null !== (y = b.nextSibling))
                      )
                        break;
                      v = (b = v).parentNode;
                    }
                    b = y;
                  }
                  s = -1 === f || -1 === m ? null : { start: f, end: m };
                } else s = null;
              }
            s = s || { start: 0, end: 0 };
          } else s = null;
          (wn = {
            activeElementDetached: null,
            focusedElem: l,
            selectionRange: s,
          }),
            (Vt = !1),
            (ql = a);
          do {
            try {
              Es();
            } catch (C) {
              if (null === ql) throw Error(i(330));
              Cs(ql, C), (ql = ql.nextEffect);
            }
          } while (null !== ql);
          ql = a;
          do {
            try {
              for (l = e, s = t; null !== ql; ) {
                var w = ql.effectTag;
                if ((16 & w && $e(ql.stateNode, ""), 128 & w)) {
                  var k = ql.alternate;
                  if (null !== k) {
                    var E = k.ref;
                    null !== E &&
                      ("function" == typeof E ? E(null) : (E.current = null));
                  }
                }
                switch (1038 & w) {
                  case 2:
                    fl(ql), (ql.effectTag &= -3);
                    break;
                  case 6:
                    fl(ql), (ql.effectTag &= -3), bl(ql.alternate, ql);
                    break;
                  case 1024:
                    ql.effectTag &= -1025;
                    break;
                  case 1028:
                    (ql.effectTag &= -1025), bl(ql.alternate, ql);
                    break;
                  case 4:
                    bl(ql.alternate, ql);
                    break;
                  case 8:
                    hl(l, (c = ql), s), dl(c);
                }
                ql = ql.nextEffect;
              }
            } catch (C) {
              if (null === ql) throw Error(i(330));
              Cs(ql, C), (ql = ql.nextEffect);
            }
          } while (null !== ql);
          if (
            ((E = wn),
            (k = gn()),
            (w = E.focusedElem),
            (s = E.selectionRange),
            k !== w &&
              w &&
              w.ownerDocument &&
              mn(w.ownerDocument.documentElement, w))
          ) {
            null !== s &&
              hn(w) &&
              ((k = s.start),
              void 0 === (E = s.end) && (E = k),
              "selectionStart" in w
                ? ((w.selectionStart = k),
                  (w.selectionEnd = Math.min(E, w.value.length)))
                : (E =
                    ((k = w.ownerDocument || document) && k.defaultView) ||
                    window).getSelection &&
                  ((E = E.getSelection()),
                  (c = w.textContent.length),
                  (l = Math.min(s.start, c)),
                  (s = void 0 === s.end ? l : Math.min(s.end, c)),
                  !E.extend && l > s && ((c = s), (s = l), (l = c)),
                  (c = fn(w, l)),
                  (d = fn(w, s)),
                  c &&
                    d &&
                    (1 !== E.rangeCount ||
                      E.anchorNode !== c.node ||
                      E.anchorOffset !== c.offset ||
                      E.focusNode !== d.node ||
                      E.focusOffset !== d.offset) &&
                    ((k = k.createRange()).setStart(c.node, c.offset),
                    E.removeAllRanges(),
                    l > s
                      ? (E.addRange(k), E.extend(d.node, d.offset))
                      : (k.setEnd(d.node, d.offset), E.addRange(k))))),
              (k = []);
            for (E = w; (E = E.parentNode); )
              1 === E.nodeType &&
                k.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
            for (
              "function" == typeof w.focus && w.focus(), w = 0;
              w < k.length;
              w++
            )
              ((E = k[w]).element.scrollLeft = E.left),
                (E.element.scrollTop = E.top);
          }
          (Vt = !!yn), (wn = yn = null), (e.current = n), (ql = a);
          do {
            try {
              for (w = e; null !== ql; ) {
                var x = ql.effectTag;
                if ((36 & x && ul(w, ql.alternate, ql), 128 & x)) {
                  k = void 0;
                  var S = ql.ref;
                  if (null !== S) {
                    var T = ql.stateNode;
                    switch (ql.tag) {
                      case 5:
                        k = T;
                        break;
                      default:
                        k = T;
                    }
                    "function" == typeof S ? S(k) : (S.current = k);
                  }
                }
                ql = ql.nextEffect;
              }
            } catch (C) {
              if (null === ql) throw Error(i(330));
              Cs(ql, C), (ql = ql.nextEffect);
            }
          } while (null !== ql);
          (ql = null), Ma(), (Al = o);
        } else e.current = n;
        if (Vl) (Vl = !1), (Ql = e), (Kl = t);
        else
          for (ql = a; null !== ql; )
            (t = ql.nextEffect), (ql.nextEffect = null), (ql = t);
        if (
          (0 === (t = e.firstPendingTime) && (Wl = null),
          1073741823 === t
            ? e === Zl
              ? Yl++
              : ((Yl = 0), (Zl = e))
            : (Yl = 0),
          "function" == typeof Ps && Ps(n.stateNode, r),
          os(e),
          Gl)
        )
          throw ((Gl = !1), (e = Hl), (Hl = null), e);
        return 0 != (8 & Al) || Ka(), null;
      }
      function Es() {
        for (; null !== ql; ) {
          var e = ql.effectTag;
          0 != (256 & e) && il(ql.alternate, ql),
            0 == (512 & e) ||
              Vl ||
              ((Vl = !0),
              Va(97, function () {
                return xs(), null;
              })),
            (ql = ql.nextEffect);
        }
      }
      function xs() {
        if (90 !== Kl) {
          var e = 97 < Kl ? 97 : Kl;
          return (Kl = 90), Wa(e, Ss);
        }
      }
      function Ss() {
        if (null === Ql) return !1;
        var e = Ql;
        if (((Ql = null), 0 != (48 & Al))) throw Error(i(331));
        var t = Al;
        for (Al |= _l, e = e.current.firstEffect; null !== e; ) {
          try {
            var n = e;
            if (0 != (512 & n.effectTag))
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                  ll(5, n), sl(5, n);
              }
          } catch (r) {
            if (null === e) throw Error(i(330));
            Cs(e, r);
          }
          (n = e.nextEffect), (e.nextEffect = null), (e = n);
        }
        return (Al = t), Ka(), !0;
      }
      function Ts(e, t, n) {
        fo(e, (t = wl(e, (t = nl(n, t)), 1073741823))),
          null !== (e = rs(e, 1073741823)) && os(e);
      }
      function Cs(e, t) {
        if (3 === e.tag) Ts(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Ts(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" == typeof n.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === Wl || !Wl.has(r)))
              ) {
                fo(n, (e = kl(n, (e = nl(t, e)), 1073741823))),
                  null !== (n = rs(n, 1073741823)) && os(n);
                break;
              }
            }
            n = n.return;
          }
      }
      function _s(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          Nl === e && Ll === n
            ? jl === Rl || (jl === Pl && 1073741823 === Fl && qa() - Bl < 500)
              ? cs(e, Ll)
              : ($l = !0)
            : Us(e, n) &&
              ((0 !== (t = e.lastPingedTime) && t < n) ||
                ((e.lastPingedTime = n), os(e)));
      }
      function Os(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) && (t = ts((t = es()), e, null)),
          null !== (e = rs(e, t)) && os(e);
      }
      El = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
          var a = t.pendingProps;
          if (e.memoizedProps !== a || ha.current) Li = !0;
          else {
            if (r < n) {
              switch (((Li = !1), t.tag)) {
                case 3:
                  qi(t), Ni();
                  break;
                case 5:
                  if ((Mo(t), 4 & t.mode && 1 !== n && a.hidden))
                    return (t.expirationTime = t.childExpirationTime = 1), null;
                  break;
                case 1:
                  ya(t.type) && xa(t);
                  break;
                case 4:
                  Do(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  (r = t.memoizedProps.value),
                    (a = t.type._context),
                    fa(Ja, a._currentValue),
                    (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (r = t.child.childExpirationTime) && r >= n
                      ? Qi(e, t, n)
                      : (fa(Uo, 1 & Uo.current),
                        null !== (t = Zi(e, t, n)) ? t.sibling : null);
                  fa(Uo, 1 & Uo.current);
                  break;
                case 19:
                  if (
                    ((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))
                  ) {
                    if (r) return Yi(e, t, n);
                    t.effectTag |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null), (a.tail = null)),
                    fa(Uo, Uo.current),
                    !r)
                  )
                    return null;
              }
              return Zi(e, t, n);
            }
            Li = !1;
          }
        } else Li = !1;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (a = va(t, ga.current)),
              io(t, n),
              (a = Zo(null, t, r, e, a, n)),
              (t.effectTag |= 1),
              "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ya(r))
              ) {
                var o = !0;
                xa(t);
              } else o = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                uo(t);
              var l = r.getDerivedStateFromProps;
              "function" == typeof l && yo(t, r, l, e),
                (a.updater = wo),
                (t.stateNode = a),
                (a._reactInternalFiber = t),
                So(t, r, e, n),
                (t = Bi(null, t, r, !0, o, n));
            } else (t.tag = 0), ji(null, t, a, n), (t = t.child);
            return t;
          case 16:
            e: {
              if (
                ((a = t.elementType),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (e = t.pendingProps),
                (function (e) {
                  if (-1 === e._status) {
                    e._status = 0;
                    var t = e._ctor;
                    (t = t()),
                      (e._result = t),
                      t.then(
                        function (t) {
                          0 === e._status &&
                            ((t = t.default), (e._status = 1), (e._result = t));
                        },
                        function (t) {
                          0 === e._status && ((e._status = 2), (e._result = t));
                        }
                      );
                  }
                })(a),
                1 !== a._status)
              )
                throw a._result;
              switch (
                ((a = a._result),
                (t.type = a),
                (o = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return Is(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === se) return 11;
                      if (e === de) return 14;
                    }
                    return 2;
                  })(a)),
                (e = Za(a, e)),
                o)
              ) {
                case 0:
                  t = Ui(null, t, a, e, n);
                  break e;
                case 1:
                  t = $i(null, t, a, e, n);
                  break e;
                case 11:
                  t = Di(null, t, a, e, n);
                  break e;
                case 14:
                  t = Fi(null, t, a, Za(a.type, e), r, n);
                  break e;
              }
              throw Error(i(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Ui(e, t, r, (a = t.elementType === r ? a : Za(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              $i(e, t, r, (a = t.elementType === r ? a : Za(r, a)), n)
            );
          case 3:
            if ((qi(t), (r = t.updateQueue), null === e || null === r))
              throw Error(i(282));
            if (
              ((r = t.pendingProps),
              (a = null !== (a = t.memoizedState) ? a.element : null),
              co(e, t),
              go(t, r, null, n),
              (r = t.memoizedState.element) === a)
            )
              Ni(), (t = Zi(e, t, n));
            else {
              if (
                ((a = t.stateNode.hydrate) &&
                  ((Ti = Tn(t.stateNode.containerInfo.firstChild)),
                  (Si = t),
                  (a = Ci = !0)),
                a)
              )
                for (n = Ro(t, null, r, n), t.child = n; n; )
                  (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
              else ji(e, t, r, n), Ni();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Mo(t),
              null === e && Pi(t),
              (r = t.type),
              (a = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (l = a.children),
              En(r, a)
                ? (l = null)
                : null !== o && En(r, o) && (t.effectTag |= 16),
              zi(e, t),
              4 & t.mode && 1 !== n && a.hidden
                ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                : (ji(e, t, l, n), (t = t.child)),
              t
            );
          case 6:
            return null === e && Pi(t), null;
          case 13:
            return Qi(e, t, n);
          case 4:
            return (
              Do(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Po(t, null, r, n)) : ji(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Di(e, t, r, (a = t.elementType === r ? a : Za(r, a)), n)
            );
          case 7:
            return ji(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return ji(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (l = t.memoizedProps),
                (o = a.value);
              var s = t.type._context;
              if ((fa(Ja, s._currentValue), (s._currentValue = o), null !== l))
                if (
                  ((s = l.value),
                  0 ===
                    (o = $r(s, o)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(s, o)
                          : 1073741823)))
                ) {
                  if (l.children === a.children && !ha.current) {
                    t = Zi(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                    var u = s.dependencies;
                    if (null !== u) {
                      l = s.child;
                      for (var c = u.firstContext; null !== c; ) {
                        if (c.context === r && 0 != (c.observedBits & o)) {
                          1 === s.tag &&
                            (((c = po(n, null)).tag = 2), fo(s, c)),
                            s.expirationTime < n && (s.expirationTime = n),
                            null !== (c = s.alternate) &&
                              c.expirationTime < n &&
                              (c.expirationTime = n),
                            oo(s.return, n),
                            u.expirationTime < n && (u.expirationTime = n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === s.tag && s.type === t.type ? null : s.child;
                    if (null !== l) l.return = s;
                    else
                      for (l = s; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (s = l.sibling)) {
                          (s.return = l.return), (l = s);
                          break;
                        }
                        l = l.return;
                      }
                    s = l;
                  }
              ji(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (o = t.pendingProps).children),
              io(t, n),
              (r = r((a = lo(a, o.unstable_observedBits)))),
              (t.effectTag |= 1),
              ji(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (o = Za((a = t.type), t.pendingProps)),
              Fi(e, t, a, (o = Za(a.type, o)), r, n)
            );
          case 15:
            return Mi(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : Za(r, a)),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (t.tag = 1),
              ya(r) ? ((e = !0), xa(t)) : (e = !1),
              io(t, n),
              Eo(t, r, a),
              So(t, r, a, n),
              Bi(null, t, r, !0, e, n)
            );
          case 19:
            return Yi(e, t, n);
        }
        throw Error(i(156, t.tag));
      };
      var Ps = null,
        Rs = null;
      function As(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function Ns(e, t, n, r) {
        return new As(e, t, n, r);
      }
      function Is(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Ls(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Ns(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.effectTag = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childExpirationTime = e.childExpirationTime),
          (n.expirationTime = e.expirationTime),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : {
                  expirationTime: t.expirationTime,
                  firstContext: t.firstContext,
                  responders: t.responders,
                }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function js(e, t, n, r, a, o) {
        var l = 2;
        if (((r = e), "function" == typeof e)) Is(e) && (l = 1);
        else if ("string" == typeof e) l = 5;
        else
          e: switch (e) {
            case ne:
              return Ds(n.children, a, o, t);
            case le:
              (l = 8), (a |= 7);
              break;
            case re:
              (l = 8), (a |= 1);
              break;
            case ae:
              return (
                ((e = Ns(12, n, t, 8 | a)).elementType = ae),
                (e.type = ae),
                (e.expirationTime = o),
                e
              );
            case ue:
              return (
                ((e = Ns(13, n, t, a)).type = ue),
                (e.elementType = ue),
                (e.expirationTime = o),
                e
              );
            case ce:
              return (
                ((e = Ns(19, n, t, a)).elementType = ce),
                (e.expirationTime = o),
                e
              );
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case oe:
                    l = 10;
                    break e;
                  case ie:
                    l = 9;
                    break e;
                  case se:
                    l = 11;
                    break e;
                  case de:
                    l = 14;
                    break e;
                  case pe:
                    (l = 16), (r = null);
                    break e;
                  case fe:
                    l = 22;
                    break e;
                }
              throw Error(i(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Ns(l, n, t, a)).elementType = e),
          (t.type = r),
          (t.expirationTime = o),
          t
        );
      }
      function Ds(e, t, n, r) {
        return ((e = Ns(7, e, r, t)).expirationTime = n), e;
      }
      function Fs(e, t, n) {
        return ((e = Ns(6, e, null, t)).expirationTime = n), e;
      }
      function Ms(e, t, n) {
        return (
          ((t = Ns(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).expirationTime = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function zs(e, t, n) {
        (this.tag = t),
          (this.current = null),
          (this.containerInfo = e),
          (this.pingCache = this.pendingChildren = null),
          (this.finishedExpirationTime = 0),
          (this.finishedWork = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 90),
          (this.lastExpiredTime =
            this.lastPingedTime =
            this.nextKnownPendingLevel =
            this.lastSuspendedTime =
            this.firstSuspendedTime =
            this.firstPendingTime =
              0);
      }
      function Us(e, t) {
        var n = e.firstSuspendedTime;
        return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
      }
      function $s(e, t) {
        var n = e.firstSuspendedTime,
          r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t),
          (r > t || 0 === n) && (e.lastSuspendedTime = t),
          t <= e.lastPingedTime && (e.lastPingedTime = 0),
          t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
      }
      function Bs(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n &&
          (t >= n
            ? (e.firstSuspendedTime =
                e.lastSuspendedTime =
                e.nextKnownPendingLevel =
                  0)
            : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
          t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
      }
      function qs(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t);
      }
      function Gs(e, t, n, r) {
        var a = t.current,
          o = es(),
          l = bo.suspense;
        o = ts(o, a, l);
        e: if (n) {
          t: {
            if (et((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
              throw Error(i(170));
            var s = n;
            do {
              switch (s.tag) {
                case 3:
                  s = s.stateNode.context;
                  break t;
                case 1:
                  if (ya(s.type)) {
                    s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              s = s.return;
            } while (null !== s);
            throw Error(i(171));
          }
          if (1 === n.tag) {
            var u = n.type;
            if (ya(u)) {
              n = Ea(n, u, s);
              break e;
            }
          }
          n = s;
        } else n = ma;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = po(o, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          fo(a, t),
          ns(a, o),
          o
        );
      }
      function Hs(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function Ws(e, t) {
        null !== (e = e.memoizedState) &&
          null !== e.dehydrated &&
          e.retryTime < t &&
          (e.retryTime = t);
      }
      function Vs(e, t) {
        Ws(e, t), (e = e.alternate) && Ws(e, t);
      }
      function Qs(e, t, n) {
        var r = new zs(e, t, (n = null != n && !0 === n.hydrate)),
          a = Ns(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        (r.current = a),
          (a.stateNode = r),
          uo(a),
          (e[Rn] = r.current),
          n &&
            0 !== t &&
            (function (e, t) {
              var n = Je(t);
              _t.forEach(function (e) {
                gt(e, t, n);
              }),
                Ot.forEach(function (e) {
                  gt(e, t, n);
                });
            })(0, 9 === e.nodeType ? e : e.ownerDocument),
          (this._internalRoot = r);
      }
      function Ks(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function Xs(e, t, n, r, a) {
        var o = n._reactRootContainer;
        if (o) {
          var i = o._internalRoot;
          if ("function" == typeof a) {
            var l = a;
            a = function () {
              var e = Hs(i);
              l.call(e);
            };
          }
          Gs(t, i, e, a);
        } else {
          if (
            ((o = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new Qs(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
            (i = o._internalRoot),
            "function" == typeof a)
          ) {
            var s = a;
            a = function () {
              var e = Hs(i);
              s.call(e);
            };
          }
          us(function () {
            Gs(t, i, e, a);
          });
        }
        return Hs(i);
      }
      function Ys(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: te,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function Zs(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Ks(t)) throw Error(i(200));
        return Ys(e, t, null, n);
      }
      (Qs.prototype.render = function (e) {
        Gs(e, this._internalRoot, null, null);
      }),
        (Qs.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Gs(null, e, null, function () {
            t[Rn] = null;
          });
        }),
        (ht = function (e) {
          if (13 === e.tag) {
            var t = Ya(es(), 150, 100);
            ns(e, t), Vs(e, t);
          }
        }),
        (bt = function (e) {
          13 === e.tag && (ns(e, 3), Vs(e, 3));
        }),
        (vt = function (e) {
          if (13 === e.tag) {
            var t = es();
            ns(e, (t = ts(t, e, null))), Vs(e, t);
          }
        }),
        (O = function (e, t, n) {
          switch (t) {
            case "input":
              if ((Te(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = Ln(r);
                    if (!a) throw Error(i(90));
                    ke(r), Te(r, a);
                  }
                }
              }
              break;
            case "textarea":
              Ne(e, n);
              break;
            case "select":
              null != (t = n.value) && Pe(e, !!n.multiple, t, !1);
          }
        }),
        (L = ss),
        (j = function (e, t, n, r, a) {
          var o = Al;
          Al |= 4;
          try {
            return Wa(98, e.bind(null, t, n, r, a));
          } finally {
            0 === (Al = o) && Ka();
          }
        }),
        (D = function () {
          0 == (49 & Al) &&
            ((function () {
              if (null !== Xl) {
                var e = Xl;
                (Xl = null),
                  e.forEach(function (e, t) {
                    qs(t, e), os(t);
                  }),
                  Ka();
              }
            })(),
            xs());
        }),
        (F = function (e, t) {
          var n = Al;
          Al |= 2;
          try {
            return e(t);
          } finally {
            0 === (Al = n) && Ka();
          }
        });
      var Js = {
        Events: [
          Nn,
          In,
          Ln,
          C,
          x,
          $n,
          function (e) {
            ot(e, Un);
          },
          N,
          I,
          Zt,
          st,
          xs,
          { current: !1 },
        ],
      };
      !(function (e) {
        var t = e.findFiberByHostInstance;
        (function (e) {
          if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) return !0;
          try {
            var n = t.inject(e);
            (Ps = function (e) {
              try {
                t.onCommitFiberRoot(
                  n,
                  e,
                  void 0,
                  64 == (64 & e.current.effectTag)
                );
              } catch (r) {}
            }),
              (Rs = function (e) {
                try {
                  t.onCommitFiberUnmount(n, e);
                } catch (r) {}
              });
          } catch (r) {}
        })(
          a({}, e, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: X.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = rt(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance: function (e) {
              return t ? t(e) : null;
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          })
        );
      })({
        findFiberByHostInstance: An,
        bundleType: 0,
        version: "16.13.1",
        rendererPackageName: "react-dom",
      }),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Js),
        (t.createPortal = Zs),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternalFiber;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(i(188));
            throw Error(i(268, Object.keys(e)));
          }
          return (e = null === (e = rt(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e, t) {
          if (0 != (48 & Al)) throw Error(i(187));
          var n = Al;
          Al |= 1;
          try {
            return Wa(99, e.bind(null, t));
          } finally {
            (Al = n), Ka();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!Ks(t)) throw Error(i(200));
          return Xs(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!Ks(t)) throw Error(i(200));
          return Xs(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!Ks(e)) throw Error(i(40));
          return (
            !!e._reactRootContainer &&
            (us(function () {
              Xs(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Rn] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = ss),
        (t.unstable_createPortal = function (e, t) {
          return Zs(
            e,
            t,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!Ks(n)) throw Error(i(200));
          if (null == e || void 0 === e._reactInternalFiber) throw Error(i(38));
          return Xs(e, t, n, !1, r);
        }),
        (t.version = "16.13.1");
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(34);
    },
    function (e, t, n) {
      "use strict";
      var r, a, o, i, l;
      if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var s = null,
          u = null,
          c = function () {
            if (null !== s)
              try {
                var e = t.unstable_now();
                s(!0, e), (s = null);
              } catch (n) {
                throw (setTimeout(c, 0), n);
              }
          },
          d = Date.now();
        (t.unstable_now = function () {
          return Date.now() - d;
        }),
          (r = function (e) {
            null !== s ? setTimeout(r, 0, e) : ((s = e), setTimeout(c, 0));
          }),
          (a = function (e, t) {
            u = setTimeout(e, t);
          }),
          (o = function () {
            clearTimeout(u);
          }),
          (i = function () {
            return !1;
          }),
          (l = t.unstable_forceFrameRate = function () {});
      } else {
        var p = window.performance,
          f = window.Date,
          m = window.setTimeout,
          g = window.clearTimeout;
        if ("undefined" != typeof console) {
          var h = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ),
            "function" != typeof h &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              );
        }
        if ("object" == typeof p && "function" == typeof p.now)
          t.unstable_now = function () {
            return p.now();
          };
        else {
          var b = f.now();
          t.unstable_now = function () {
            return f.now() - b;
          };
        }
        var v = !1,
          y = null,
          w = -1,
          k = 5,
          E = 0;
        (i = function () {
          return t.unstable_now() >= E;
        }),
          (l = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                )
              : (k = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var x = new MessageChannel(),
          S = x.port2;
        (x.port1.onmessage = function () {
          if (null !== y) {
            var e = t.unstable_now();
            E = e + k;
            try {
              y(!0, e) ? S.postMessage(null) : ((v = !1), (y = null));
            } catch (n) {
              throw (S.postMessage(null), n);
            }
          } else v = !1;
        }),
          (r = function (e) {
            (y = e), v || ((v = !0), S.postMessage(null));
          }),
          (a = function (e, n) {
            w = m(function () {
              e(t.unstable_now());
            }, n);
          }),
          (o = function () {
            g(w), (w = -1);
          });
      }
      function T(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(void 0 !== a && 0 < O(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function C(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function _(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a; ) {
              var o = 2 * (r + 1) - 1,
                i = e[o],
                l = o + 1,
                s = e[l];
              if (void 0 !== i && 0 > O(i, n))
                void 0 !== s && 0 > O(s, i)
                  ? ((e[r] = s), (e[l] = n), (r = l))
                  : ((e[r] = i), (e[o] = n), (r = o));
              else {
                if (!(void 0 !== s && 0 > O(s, n))) break e;
                (e[r] = s), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }
      function O(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var P = [],
        R = [],
        A = 1,
        N = null,
        I = 3,
        L = !1,
        j = !1,
        D = !1;
      function F(e) {
        for (var t = C(R); null !== t; ) {
          if (null === t.callback) _(R);
          else {
            if (!(t.startTime <= e)) break;
            _(R), (t.sortIndex = t.expirationTime), T(P, t);
          }
          t = C(R);
        }
      }
      function M(e) {
        if (((D = !1), F(e), !j))
          if (null !== C(P)) (j = !0), r(z);
          else {
            var t = C(R);
            null !== t && a(M, t.startTime - e);
          }
      }
      function z(e, n) {
        (j = !1), D && ((D = !1), o()), (L = !0);
        var r = I;
        try {
          for (
            F(n), N = C(P);
            null !== N && (!(N.expirationTime > n) || (e && !i()));

          ) {
            var l = N.callback;
            if (null !== l) {
              (N.callback = null), (I = N.priorityLevel);
              var s = l(N.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof s ? (N.callback = s) : N === C(P) && _(P),
                F(n);
            } else _(P);
            N = C(P);
          }
          if (null !== N) var u = !0;
          else {
            var c = C(R);
            null !== c && a(M, c.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (N = null), (I = r), (L = !1);
        }
      }
      function U(e) {
        switch (e) {
          case 1:
            return -1;
          case 2:
            return 250;
          case 5:
            return 1073741823;
          case 4:
            return 1e4;
          default:
            return 5e3;
        }
      }
      var $ = l;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          j || L || ((j = !0), r(z));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return I;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return C(P);
        }),
        (t.unstable_next = function (e) {
          switch (I) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = I;
          }
          var n = I;
          I = t;
          try {
            return e();
          } finally {
            I = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = $),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = I;
          I = e;
          try {
            return t();
          } finally {
            I = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, i) {
          var l = t.unstable_now();
          if ("object" == typeof i && null !== i) {
            var s = i.delay;
            (s = "number" == typeof s && 0 < s ? l + s : l),
              (i = "number" == typeof i.timeout ? i.timeout : U(e));
          } else (i = U(e)), (s = l);
          return (
            (e = {
              id: A++,
              callback: n,
              priorityLevel: e,
              startTime: s,
              expirationTime: (i = s + i),
              sortIndex: -1,
            }),
            s > l
              ? ((e.sortIndex = s),
                T(R, e),
                null === C(P) &&
                  e === C(R) &&
                  (D ? o() : (D = !0), a(M, s - l)))
              : ((e.sortIndex = i), T(P, e), j || L || ((j = !0), r(z))),
            e
          );
        }),
        (t.unstable_shouldYield = function () {
          var e = t.unstable_now();
          F(e);
          var n = C(P);
          return (
            (n !== N &&
              null !== N &&
              null !== n &&
              null !== n.callback &&
              n.startTime <= e &&
              n.expirationTime < N.expirationTime) ||
            i()
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = I;
          return function () {
            var n = I;
            I = t;
            try {
              return e.apply(this, arguments);
            } finally {
              I = n;
            }
          };
        });
    },
    function (e, t, n) {
      "use strict";
      var r = n(36);
      function a() {}
      function o() {}
      (o.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, o, i) {
            if (i !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t) {
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        };
    },
    function (e, t, n) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        a = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        l = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        d = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        m = r ? Symbol.for("react.suspense") : 60113,
        g = r ? Symbol.for("react.suspense_list") : 60120,
        h = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        v = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        k = r ? Symbol.for("react.scope") : 60119;
      function E(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case d:
                case p:
                case i:
                case s:
                case l:
                case m:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case f:
                    case b:
                    case h:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function x(e) {
        return E(e) === p;
      }
      (t.AsyncMode = d),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = c),
        (t.ContextProvider = u),
        (t.Element = a),
        (t.ForwardRef = f),
        (t.Fragment = i),
        (t.Lazy = b),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = l),
        (t.Suspense = m),
        (t.isAsyncMode = function (e) {
          return x(e) || E(e) === d;
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return E(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return E(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === a;
        }),
        (t.isForwardRef = function (e) {
          return E(e) === f;
        }),
        (t.isFragment = function (e) {
          return E(e) === i;
        }),
        (t.isLazy = function (e) {
          return E(e) === b;
        }),
        (t.isMemo = function (e) {
          return E(e) === h;
        }),
        (t.isPortal = function (e) {
          return E(e) === o;
        }),
        (t.isProfiler = function (e) {
          return E(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return E(e) === l;
        }),
        (t.isSuspense = function (e) {
          return E(e) === m;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === p ||
            e === s ||
            e === l ||
            e === m ||
            e === g ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === b ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === f ||
                e.$$typeof === y ||
                e.$$typeof === w ||
                e.$$typeof === k ||
                e.$$typeof === v))
          );
        }),
        (t.typeOf = E);
    },
    ,
    function (e, t, n) {
      const r = n(41),
        a = n(42),
        o = new Set();
      function i(e) {
        void 0 === e
          ? (e = Object.keys(r.languages).filter((e) => "meta" != e))
          : Array.isArray(e) || (e = [e]);
        const t = [...o, ...Object.keys(Prism.languages)];
        a(r, e, t).load((e) => {
          if (!(e in r.languages))
            return void (
              i.silent || console.warn("Language does not exist: " + e)
            );
          const t = "./prism-" + e;
          delete n.c[n(16).resolve(t)],
            delete Prism.languages[e],
            n(16)(t),
            o.add(e);
        });
      }
      (i.silent = !1), (e.exports = i);
    },
    function (e, t, n) {
      e.exports &&
        (e.exports = {
          core: {
            meta: { path: "components/prism-core.js", option: "mandatory" },
            core: "Core",
          },
          themes: {
            meta: {
              path: "themes/{id}.css",
              link: "index.html?theme={id}",
              exclusive: !0,
            },
            prism: { title: "Default", option: "default" },
            "prism-dark": "Dark",
            "prism-funky": "Funky",
            "prism-okaidia": { title: "Okaidia", owner: "ocodia" },
            "prism-twilight": { title: "Twilight", owner: "remybach" },
            "prism-coy": { title: "Coy", owner: "tshedor" },
            "prism-solarizedlight": {
              title: "Solarized Light",
              owner: "hectormatos2011 ",
            },
            "prism-tomorrow": { title: "Tomorrow Night", owner: "Rosey" },
          },
          languages: {
            meta: {
              path: "components/prism-{id}",
              noCSS: !0,
              examplesPath: "examples/prism-{id}",
              addCheckAll: !0,
            },
            markup: {
              title: "Markup",
              alias: ["html", "xml", "svg", "mathml", "ssml", "atom", "rss"],
              aliasTitles: {
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                atom: "Atom",
                rss: "RSS",
              },
              option: "default",
            },
            css: { title: "CSS", option: "default", modify: "markup" },
            clike: { title: "C-like", option: "default" },
            javascript: {
              title: "JavaScript",
              require: "clike",
              modify: "markup",
              alias: "js",
              option: "default",
            },
            abap: { title: "ABAP", owner: "dellagustin" },
            abnf: { title: "ABNF", owner: "RunDevelopment" },
            actionscript: {
              title: "ActionScript",
              require: "javascript",
              modify: "markup",
              owner: "Golmote",
            },
            ada: { title: "Ada", owner: "Lucretia" },
            agda: { title: "Agda", owner: "xy-ren" },
            al: { title: "AL", owner: "RunDevelopment" },
            antlr4: { title: "ANTLR4", alias: "g4", owner: "RunDevelopment" },
            apacheconf: { title: "Apache Configuration", owner: "GuiTeK" },
            apl: { title: "APL", owner: "ngn" },
            applescript: { title: "AppleScript", owner: "Golmote" },
            aql: { title: "AQL", owner: "RunDevelopment" },
            arduino: { title: "Arduino", require: "cpp", owner: "eisbehr-" },
            arff: { title: "ARFF", owner: "Golmote" },
            asciidoc: { alias: "adoc", title: "AsciiDoc", owner: "Golmote" },
            aspnet: {
              title: "ASP.NET (C#)",
              require: ["markup", "csharp"],
              owner: "nauzilus",
            },
            asm6502: { title: "6502 Assembly", owner: "kzurawel" },
            autohotkey: { title: "AutoHotkey", owner: "aviaryan" },
            autoit: { title: "AutoIt", owner: "Golmote" },
            bash: {
              title: "Bash",
              alias: "shell",
              aliasTitles: { shell: "Shell" },
              owner: "zeitgeist87",
            },
            basic: { title: "BASIC", owner: "Golmote" },
            batch: { title: "Batch", owner: "Golmote" },
            bbcode: {
              title: "BBcode",
              alias: "shortcode",
              aliasTitles: { shortcode: "Shortcode" },
              owner: "RunDevelopment",
            },
            bison: { title: "Bison", require: "c", owner: "Golmote" },
            bnf: {
              title: "BNF",
              alias: "rbnf",
              aliasTitles: { rbnf: "RBNF" },
              owner: "RunDevelopment",
            },
            brainfuck: { title: "Brainfuck", owner: "Golmote" },
            brightscript: { title: "BrightScript", owner: "RunDevelopment" },
            bro: { title: "Bro", owner: "wayward710" },
            c: { title: "C", require: "clike", owner: "zeitgeist87" },
            csharp: {
              title: "C#",
              require: "clike",
              alias: ["cs", "dotnet"],
              owner: "mvalipour",
            },
            cpp: { title: "C++", require: "c", owner: "zeitgeist87" },
            cil: { title: "CIL", owner: "sbrl" },
            clojure: { title: "Clojure", owner: "troglotit" },
            cmake: { title: "CMake", owner: "mjrogozinski" },
            coffeescript: {
              title: "CoffeeScript",
              require: "javascript",
              alias: "coffee",
              owner: "R-osey",
            },
            concurnas: {
              title: "Concurnas",
              alias: "conc",
              owner: "jasontatton",
            },
            csp: { title: "Content-Security-Policy", owner: "ScottHelme" },
            crystal: {
              title: "Crystal",
              require: "ruby",
              owner: "MakeNowJust",
            },
            "css-extras": {
              title: "CSS Extras",
              require: "css",
              modify: "css",
              owner: "milesj",
            },
            cypher: { title: "Cypher", owner: "RunDevelopment" },
            d: { title: "D", require: "clike", owner: "Golmote" },
            dart: { title: "Dart", require: "clike", owner: "Golmote" },
            dax: { title: "DAX", owner: "peterbud" },
            dhall: { title: "Dhall", owner: "RunDevelopment" },
            diff: { title: "Diff", owner: "uranusjr" },
            django: {
              title: "Django/Jinja2",
              require: "markup-templating",
              alias: "jinja2",
              owner: "romanvm",
            },
            "dns-zone-file": {
              title: "DNS zone file",
              owner: "RunDevelopment",
              alias: "dns-zone",
            },
            docker: {
              title: "Docker",
              alias: "dockerfile",
              owner: "JustinBeckwith",
            },
            ebnf: { title: "EBNF", owner: "RunDevelopment" },
            editorconfig: { title: "EditorConfig", owner: "osipxd" },
            eiffel: { title: "Eiffel", owner: "Conaclos" },
            ejs: {
              title: "EJS",
              require: ["javascript", "markup-templating"],
              owner: "RunDevelopment",
              alias: "eta",
              aliasTitles: { eta: "Eta" },
            },
            elixir: { title: "Elixir", owner: "Golmote" },
            elm: { title: "Elm", owner: "zwilias" },
            etlua: {
              title: "Embedded Lua templating",
              require: ["lua", "markup-templating"],
              owner: "RunDevelopment",
            },
            erb: {
              title: "ERB",
              require: ["ruby", "markup-templating"],
              owner: "Golmote",
            },
            erlang: { title: "Erlang", owner: "Golmote" },
            "excel-formula": {
              title: "Excel Formula",
              alias: ["xlsx", "xls"],
              owner: "RunDevelopment",
            },
            fsharp: { title: "F#", require: "clike", owner: "simonreynolds7" },
            factor: { title: "Factor", owner: "catb0t" },
            "firestore-security-rules": {
              title: "Firestore security rules",
              require: "clike",
              owner: "RunDevelopment",
            },
            flow: { title: "Flow", require: "javascript", owner: "Golmote" },
            fortran: { title: "Fortran", owner: "Golmote" },
            ftl: {
              title: "FreeMarker Template Language",
              require: "markup-templating",
              owner: "RunDevelopment",
            },
            gml: {
              title: "GameMaker Language",
              alias: "gamemakerlanguage",
              require: "clike",
              owner: "LiarOnce",
            },
            gcode: { title: "G-code", owner: "RunDevelopment" },
            gdscript: { title: "GDScript", owner: "RunDevelopment" },
            gedcom: { title: "GEDCOM", owner: "Golmote" },
            gherkin: { title: "Gherkin", owner: "hason" },
            git: { title: "Git", owner: "lgiraudel" },
            glsl: { title: "GLSL", require: "c", owner: "Golmote" },
            go: { title: "Go", require: "clike", owner: "arnehormann" },
            graphql: {
              title: "GraphQL",
              optional: ["markdown"],
              owner: "Golmote",
            },
            groovy: { title: "Groovy", require: "clike", owner: "robfletcher" },
            haml: {
              title: "Haml",
              require: "ruby",
              optional: [
                "css",
                "css-extras",
                "coffeescript",
                "erb",
                "javascript",
                "less",
                "markdown",
                "scss",
                "textile",
              ],
              owner: "Golmote",
            },
            handlebars: {
              title: "Handlebars",
              require: "markup-templating",
              owner: "Golmote",
            },
            haskell: { title: "Haskell", alias: "hs", owner: "bholst" },
            haxe: { title: "Haxe", require: "clike", owner: "Golmote" },
            hcl: { title: "HCL", owner: "outsideris" },
            hlsl: { title: "HLSL", require: "c", owner: "RunDevelopment" },
            http: {
              title: "HTTP",
              optional: ["css", "javascript", "json", "markup"],
              owner: "danielgtaylor",
            },
            hpkp: { title: "HTTP Public-Key-Pins", owner: "ScottHelme" },
            hsts: {
              title: "HTTP Strict-Transport-Security",
              owner: "ScottHelme",
            },
            ichigojam: { title: "IchigoJam", owner: "BlueCocoa" },
            icon: { title: "Icon", owner: "Golmote" },
            ignore: {
              title: ".ignore",
              owner: "osipxd",
              alias: ["gitignore", "hgignore", "npmignore"],
              aliasTitles: {
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
              },
            },
            inform7: { title: "Inform 7", owner: "Golmote" },
            ini: { title: "Ini", owner: "aviaryan" },
            io: { title: "Io", owner: "AlesTsurko" },
            j: { title: "J", owner: "Golmote" },
            java: { title: "Java", require: "clike", owner: "sherblot" },
            javadoc: {
              title: "JavaDoc",
              require: ["markup", "java", "javadoclike"],
              modify: "java",
              optional: "scala",
              owner: "RunDevelopment",
            },
            javadoclike: {
              title: "JavaDoc-like",
              modify: ["java", "javascript", "php"],
              owner: "RunDevelopment",
            },
            javastacktrace: {
              title: "Java stack trace",
              owner: "RunDevelopment",
            },
            jolie: { title: "Jolie", require: "clike", owner: "thesave" },
            jq: { title: "JQ", owner: "RunDevelopment" },
            jsdoc: {
              title: "JSDoc",
              require: ["javascript", "javadoclike", "typescript"],
              modify: "javascript",
              optional: ["actionscript", "coffeescript"],
              owner: "RunDevelopment",
            },
            "js-extras": {
              title: "JS Extras",
              require: "javascript",
              modify: "javascript",
              optional: [
                "actionscript",
                "coffeescript",
                "flow",
                "n4js",
                "typescript",
              ],
              owner: "RunDevelopment",
            },
            json: {
              title: "JSON",
              alias: "webmanifest",
              aliasTitles: { webmanifest: "Web App Manifest" },
              owner: "CupOfTea696",
            },
            json5: { title: "JSON5", require: "json", owner: "RunDevelopment" },
            jsonp: { title: "JSONP", require: "json", owner: "RunDevelopment" },
            jsstacktrace: { title: "JS stack trace", owner: "sbrl" },
            "js-templates": {
              title: "JS Templates",
              require: "javascript",
              modify: "javascript",
              optional: ["css", "css-extras", "graphql", "markdown", "markup"],
              owner: "RunDevelopment",
            },
            julia: { title: "Julia", owner: "cdagnino" },
            keyman: { title: "Keyman", owner: "mcdurdin" },
            kotlin: {
              title: "Kotlin",
              alias: ["kt", "kts"],
              aliasTitles: { kts: "Kotlin Script" },
              require: "clike",
              owner: "Golmote",
            },
            latex: {
              title: "LaTeX",
              alias: ["tex", "context"],
              aliasTitles: { tex: "TeX", context: "ConTeXt" },
              owner: "japborst",
            },
            latte: {
              title: "Latte",
              require: ["clike", "markup-templating", "php"],
              owner: "nette",
            },
            less: {
              title: "Less",
              require: "css",
              optional: "css-extras",
              owner: "Golmote",
            },
            lilypond: {
              title: "LilyPond",
              require: "scheme",
              alias: "ly",
              owner: "RunDevelopment",
            },
            liquid: { title: "Liquid", owner: "cinhtau" },
            lisp: {
              title: "Lisp",
              alias: ["emacs", "elisp", "emacs-lisp"],
              owner: "JuanCaicedo",
            },
            livescript: { title: "LiveScript", owner: "Golmote" },
            llvm: { title: "LLVM IR", owner: "porglezomp" },
            lolcode: { title: "LOLCODE", owner: "Golmote" },
            lua: { title: "Lua", owner: "Golmote" },
            makefile: { title: "Makefile", owner: "Golmote" },
            markdown: {
              title: "Markdown",
              require: "markup",
              alias: "md",
              owner: "Golmote",
            },
            "markup-templating": {
              title: "Markup templating",
              require: "markup",
              owner: "Golmote",
            },
            matlab: { title: "MATLAB", owner: "Golmote" },
            mel: { title: "MEL", owner: "Golmote" },
            mizar: { title: "Mizar", owner: "Golmote" },
            monkey: { title: "Monkey", owner: "Golmote" },
            moonscript: {
              title: "MoonScript",
              alias: "moon",
              owner: "RunDevelopment",
            },
            n1ql: { title: "N1QL", owner: "TMWilds" },
            n4js: {
              title: "N4JS",
              require: "javascript",
              optional: "jsdoc",
              alias: "n4jsd",
              owner: "bsmith-n4",
            },
            "nand2tetris-hdl": {
              title: "Nand To Tetris HDL",
              owner: "stephanmax",
            },
            nasm: { title: "NASM", owner: "rbmj" },
            neon: { title: "NEON", owner: "nette" },
            nginx: { title: "nginx", owner: "westonganger", require: "clike" },
            nim: { title: "Nim", owner: "Golmote" },
            nix: { title: "Nix", owner: "Golmote" },
            nsis: { title: "NSIS", owner: "idleberg" },
            objectivec: {
              title: "Objective-C",
              require: "c",
              alias: "objc",
              owner: "uranusjr",
            },
            ocaml: { title: "OCaml", owner: "Golmote" },
            opencl: {
              title: "OpenCL",
              require: "c",
              modify: ["c", "cpp"],
              owner: "Milania1",
            },
            oz: { title: "Oz", owner: "Golmote" },
            parigp: { title: "PARI/GP", owner: "Golmote" },
            parser: { title: "Parser", require: "markup", owner: "Golmote" },
            pascal: {
              title: "Pascal",
              alias: "objectpascal",
              aliasTitles: { objectpascal: "Object Pascal" },
              owner: "Golmote",
            },
            pascaligo: { title: "Pascaligo", owner: "DefinitelyNotAGoat" },
            pcaxis: { title: "PC-Axis", alias: "px", owner: "RunDevelopment" },
            peoplecode: {
              title: "PeopleCode",
              alias: "pcode",
              owner: "RunDevelopment",
            },
            perl: { title: "Perl", owner: "Golmote" },
            php: {
              title: "PHP",
              require: ["clike", "markup-templating"],
              owner: "milesj",
            },
            phpdoc: {
              title: "PHPDoc",
              require: ["php", "javadoclike"],
              modify: "php",
              owner: "RunDevelopment",
            },
            "php-extras": {
              title: "PHP Extras",
              require: "php",
              modify: "php",
              owner: "milesj",
            },
            plsql: { title: "PL/SQL", require: "sql", owner: "Golmote" },
            powerquery: {
              title: "PowerQuery",
              alias: ["pq", "mscript"],
              owner: "peterbud",
            },
            powershell: { title: "PowerShell", owner: "nauzilus" },
            processing: {
              title: "Processing",
              require: "clike",
              owner: "Golmote",
            },
            prolog: { title: "Prolog", owner: "Golmote" },
            properties: { title: ".properties", owner: "Golmote" },
            protobuf: {
              title: "Protocol Buffers",
              require: "clike",
              owner: "just-boris",
            },
            pug: {
              title: "Pug",
              require: ["markup", "javascript"],
              optional: [
                "coffeescript",
                "ejs",
                "handlebars",
                "less",
                "livescript",
                "markdown",
                "scss",
                "stylus",
                "twig",
              ],
              owner: "Golmote",
            },
            puppet: { title: "Puppet", owner: "Golmote" },
            pure: {
              title: "Pure",
              optional: ["c", "cpp", "fortran"],
              owner: "Golmote",
            },
            purebasic: {
              title: "PureBasic",
              require: "clike",
              alias: "pbfasm",
              owner: "HeX0R101",
            },
            python: { title: "Python", alias: "py", owner: "multipetros" },
            q: { title: "Q (kdb+ database)", owner: "Golmote" },
            qml: {
              title: "QML",
              require: "javascript",
              owner: "RunDevelopment",
            },
            qore: { title: "Qore", require: "clike", owner: "temnroegg" },
            r: { title: "R", owner: "Golmote" },
            racket: {
              title: "Racket",
              require: "scheme",
              alias: "rkt",
              owner: "RunDevelopment",
            },
            jsx: {
              title: "React JSX",
              require: ["markup", "javascript"],
              optional: ["jsdoc", "js-extras", "js-templates"],
              owner: "vkbansal",
            },
            tsx: { title: "React TSX", require: ["jsx", "typescript"] },
            reason: { title: "Reason", require: "clike", owner: "Golmote" },
            regex: {
              title: "Regex",
              modify: [
                "actionscript",
                "coffeescript",
                "flow",
                "javascript",
                "typescript",
                "vala",
              ],
              owner: "RunDevelopment",
            },
            renpy: { title: "Ren'py", alias: "rpy", owner: "HyuchiaDiego" },
            rest: { title: "reST (reStructuredText)", owner: "Golmote" },
            rip: { title: "Rip", owner: "ravinggenius" },
            roboconf: { title: "Roboconf", owner: "Golmote" },
            robotframework: {
              title: "Robot Framework",
              alias: "robot",
              owner: "RunDevelopment",
            },
            ruby: {
              title: "Ruby",
              require: "clike",
              alias: "rb",
              owner: "samflores",
            },
            rust: { title: "Rust", owner: "Golmote" },
            sas: {
              title: "SAS",
              optional: ["groovy", "lua", "sql"],
              owner: "Golmote",
            },
            sass: { title: "Sass (Sass)", require: "css", owner: "Golmote" },
            scss: {
              title: "Sass (Scss)",
              require: "css",
              optional: "css-extras",
              owner: "MoOx",
            },
            scala: { title: "Scala", require: "java", owner: "jozic" },
            scheme: { title: "Scheme", owner: "bacchus123" },
            "shell-session": {
              title: "Shell session",
              require: "bash",
              owner: "RunDevelopment",
            },
            smali: { title: "Smali", owner: "RunDevelopment" },
            smalltalk: { title: "Smalltalk", owner: "Golmote" },
            smarty: {
              title: "Smarty",
              require: "markup-templating",
              owner: "Golmote",
            },
            solidity: {
              title: "Solidity (Ethereum)",
              alias: "sol",
              require: "clike",
              owner: "glachaud",
            },
            "solution-file": {
              title: "Solution file",
              alias: "sln",
              owner: "RunDevelopment",
            },
            soy: {
              title: "Soy (Closure Template)",
              require: "markup-templating",
              owner: "Golmote",
            },
            sparql: {
              title: "SPARQL",
              require: "turtle",
              owner: "Triply-Dev",
              alias: "rq",
            },
            "splunk-spl": { title: "Splunk SPL", owner: "RunDevelopment" },
            sqf: {
              title: "SQF: Status Quo Function (Arma 3)",
              require: "clike",
              owner: "RunDevelopment",
            },
            sql: { title: "SQL", owner: "multipetros" },
            iecst: {
              title: "Structured Text (IEC 61131-3)",
              owner: "serhioromano",
            },
            stylus: { title: "Stylus", owner: "vkbansal" },
            swift: { title: "Swift", require: "clike", owner: "chrischares" },
            "t4-templating": {
              title: "T4 templating",
              owner: "RunDevelopment",
            },
            "t4-cs": {
              title: "T4 Text Templates (C#)",
              require: ["t4-templating", "csharp"],
              alias: "t4",
              owner: "RunDevelopment",
            },
            "t4-vb": {
              title: "T4 Text Templates (VB)",
              require: ["t4-templating", "vbnet"],
              owner: "RunDevelopment",
            },
            tap: { title: "TAP", owner: "isaacs", require: "yaml" },
            tcl: { title: "Tcl", owner: "PeterChaplin" },
            tt2: {
              title: "Template Toolkit 2",
              require: ["clike", "markup-templating"],
              owner: "gflohr",
            },
            textile: {
              title: "Textile",
              require: "markup",
              optional: "css",
              owner: "Golmote",
            },
            toml: { title: "TOML", owner: "RunDevelopment" },
            turtle: {
              title: "Turtle",
              alias: "trig",
              aliasTitles: { trig: "TriG" },
              owner: "jakubklimek",
            },
            twig: { title: "Twig", require: "markup", owner: "brandonkelly" },
            typescript: {
              title: "TypeScript",
              require: "javascript",
              optional: "js-templates",
              alias: "ts",
              owner: "vkbansal",
            },
            unrealscript: {
              title: "UnrealScript",
              alias: ["uscript", "uc"],
              owner: "RunDevelopment",
            },
            vala: { title: "Vala", require: "clike", owner: "TemplarVolk" },
            vbnet: { title: "VB.Net", require: "basic", owner: "Bigsby" },
            velocity: {
              title: "Velocity",
              require: "markup",
              owner: "Golmote",
            },
            verilog: { title: "Verilog", owner: "a-rey" },
            vhdl: { title: "VHDL", owner: "a-rey" },
            vim: { title: "vim", owner: "westonganger" },
            "visual-basic": {
              title: "Visual Basic",
              alias: ["vb", "vba"],
              aliasTitles: { vba: "VBA" },
              owner: "Golmote",
            },
            warpscript: { title: "WarpScript", owner: "RunDevelopment" },
            wasm: { title: "WebAssembly", owner: "Golmote" },
            wiki: { title: "Wiki markup", require: "markup", owner: "Golmote" },
            xeora: {
              title: "Xeora",
              require: "markup",
              alias: "xeoracube",
              aliasTitles: { xeoracube: "XeoraCube" },
              owner: "freakmaxi",
            },
            "xml-doc": {
              title: "XML doc (.net)",
              require: "markup",
              modify: ["csharp", "fsharp", "vbnet"],
              owner: "RunDevelopment",
            },
            xojo: { title: "Xojo (REALbasic)", owner: "Golmote" },
            xquery: { title: "XQuery", require: "markup", owner: "Golmote" },
            yaml: { title: "YAML", alias: "yml", owner: "hason" },
            yang: { title: "YANG", owner: "RunDevelopment" },
            zig: { title: "Zig", owner: "RunDevelopment" },
          },
          plugins: {
            meta: { path: "plugins/{id}/prism-{id}", link: "plugins/{id}/" },
            "line-highlight": {
              title: "Line Highlight",
              description: "Highlights specific lines and/or line ranges.",
            },
            "line-numbers": {
              title: "Line Numbers",
              description: "Line number at the beginning of code lines.",
              owner: "kuba-kubula",
            },
            "show-invisibles": {
              title: "Show Invisibles",
              description:
                "Show hidden characters such as tabs and line breaks.",
              optional: ["autolinker", "data-uri-highlight"],
            },
            autolinker: {
              title: "Autolinker",
              description:
                "Converts URLs and emails in code to clickable links. Parses Markdown links in comments.",
            },
            wpd: {
              title: "WebPlatform Docs",
              description:
                'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.',
            },
            "custom-class": {
              title: "Custom Class",
              description:
                "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
              owner: "dvkndn",
              noCSS: !0,
            },
            "file-highlight": {
              title: "File Highlight",
              description:
                "Fetch external files and highlight them with Prism. Used on the Prism website itself.",
              noCSS: !0,
            },
            "show-language": {
              title: "Show Language",
              description:
                "Display the highlighted language in code blocks (inline code does not show the label).",
              owner: "nauzilus",
              noCSS: !0,
              require: "toolbar",
            },
            "jsonp-highlight": {
              title: "JSONP Highlight",
              description:
                "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
              noCSS: !0,
              owner: "nauzilus",
            },
            "highlight-keywords": {
              title: "Highlight Keywords",
              description:
                "Adds special CSS classes for each keyword matched in the code. For example, the keyword <code>if</code> will have the class <code>keyword-if</code> as well. You can have fine grained control over the appearance of each keyword by providing your own CSS rules.",
              owner: "vkbansal",
              noCSS: !0,
            },
            "remove-initial-line-feed": {
              title: "Remove initial line feed",
              description: "Removes the initial line feed in code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "inline-color": {
              title: "Inline color",
              description:
                "Adds a small inline preview for colors in style sheets.",
              require: "css-extras",
              owner: "RunDevelopment",
            },
            previewers: {
              title: "Previewers",
              description:
                "Previewers for angles, colors, gradients, easing and time.",
              require: "css-extras",
              owner: "Golmote",
            },
            autoloader: {
              title: "Autoloader",
              description:
                "Automatically loads the needed languages to highlight the code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "keep-markup": {
              title: "Keep Markup",
              description:
                "Prevents custom markup from being dropped out during highlighting.",
              owner: "Golmote",
              optional: "normalize-whitespace",
              noCSS: !0,
            },
            "command-line": {
              title: "Command Line",
              description:
                "Display a command line with a prompt and, optionally, the output/response from the commands.",
              owner: "chriswells0",
            },
            "unescaped-markup": {
              title: "Unescaped Markup",
              description: "Write markup without having to escape anything.",
            },
            "normalize-whitespace": {
              title: "Normalize Whitespace",
              description:
                "Supports multiple operations to normalize whitespace in code blocks.",
              owner: "zeitgeist87",
              optional: "unescaped-markup",
              noCSS: !0,
            },
            "data-uri-highlight": {
              title: "Data-URI Highlight",
              description: "Highlights data-URI contents.",
              owner: "Golmote",
              noCSS: !0,
            },
            toolbar: {
              title: "Toolbar",
              description:
                "Attach a toolbar for plugins to easily register buttons on the top of a code block.",
              owner: "mAAdhaTTah",
            },
            "copy-to-clipboard": {
              title: "Copy to Clipboard Button",
              description:
                "Add a button that copies the code block to the clipboard when clicked.",
              owner: "mAAdhaTTah",
              require: "toolbar",
              noCSS: !0,
            },
            "download-button": {
              title: "Download Button",
              description:
                "A button in the toolbar of a code block adding a convenient way to download a code file.",
              owner: "Golmote",
              require: "toolbar",
              noCSS: !0,
            },
            "match-braces": {
              title: "Match braces",
              description: "Highlights matching braces.",
              owner: "RunDevelopment",
            },
            "diff-highlight": {
              title: "Diff Highlight",
              description: "Highlights the code inside diff blocks.",
              owner: "RunDevelopment",
              require: "diff",
            },
            "filter-highlight-all": {
              title: "Filter highlightAll",
              description:
                "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",
              owner: "RunDevelopment",
              noCSS: !0,
            },
            treeview: {
              title: "Treeview",
              description:
                "A language with special styles to highlight file system tree structures.",
              owner: "Golmote",
            },
          },
        });
    },
    function (e, t, n) {
      "use strict";
      var r = (function () {
        var e = function () {};
        function t(e, t) {
          Array.isArray(e) ? e.forEach(t) : null != e && t(e, 0);
        }
        function n(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
          return t;
        }
        function r(e) {
          var n = {},
            r = [];
          function a(r, o) {
            if (!(r in n)) {
              o.push(r);
              var i = o.indexOf(r);
              if (i < o.length - 1)
                throw new Error(
                  "Circular dependency: " + o.slice(i).join(" -> ")
                );
              var l = {},
                s = e[r];
              if (s) {
                function u(t) {
                  if (!(t in e))
                    throw new Error(
                      r + " depends on an unknown component " + t
                    );
                  if (!(t in l))
                    for (var i in (a(t, o), (l[t] = !0), n[t])) l[i] = !0;
                }
                t(s.require, u), t(s.optional, u), t(s.modify, u);
              }
              (n[r] = l), o.pop();
            }
          }
          return function (e) {
            var t = n[e];
            return t || (a(e, r), (t = n[e])), t;
          };
        }
        function a(e) {
          for (var t in e) return !0;
          return !1;
        }
        return function (o, i, l) {
          var s = (function (e) {
              var t = {};
              for (var n in e) {
                var r = e[n];
                for (var a in r)
                  if ("meta" != a) {
                    var o = r[a];
                    t[a] = "string" == typeof o ? { title: o } : o;
                  }
              }
              return t;
            })(o),
            u = (function (e) {
              var n;
              return function (r) {
                if (r in e) return r;
                if (!n)
                  for (var a in ((n = {}), e)) {
                    var o = e[a];
                    t(o && o.alias, function (t) {
                      if (t in n)
                        throw new Error(
                          t + " cannot be alias for both " + a + " and " + n[t]
                        );
                      if (t in e)
                        throw new Error(
                          t +
                            " cannot be alias of " +
                            a +
                            " because it is a component."
                        );
                      n[t] = a;
                    });
                  }
                return n[r] || r;
              };
            })(s);
          (i = i.map(u)), (l = (l || []).map(u));
          var c = n(i),
            d = n(l);
          i.forEach(function e(n) {
            var r = s[n];
            t(r && r.require, function (t) {
              t in d || ((c[t] = !0), e(t));
            });
          });
          for (var p, f = r(s), m = c; a(m); ) {
            for (var g in ((p = {}), m)) {
              var h = s[g];
              t(h && h.modify, function (e) {
                e in d && (p[e] = !0);
              });
            }
            for (var b in d)
              if (!(b in c))
                for (var v in f(b))
                  if (v in c) {
                    p[b] = !0;
                    break;
                  }
            for (var y in (m = p)) c[y] = !0;
          }
          var w = {
            getIds: function () {
              var e = [];
              return (
                w.load(function (t) {
                  e.push(t);
                }),
                e
              );
            },
            load: function (t, n) {
              return (function (t, n, r, a) {
                const o = a ? a.series : void 0,
                  i = a ? a.parallel : e;
                var l = {},
                  s = {};
                function u(e) {
                  if (e in l) return l[e];
                  s[e] = !0;
                  var a,
                    c = [];
                  for (var d in t(e)) d in n && c.push(d);
                  if (0 === c.length) a = r(e);
                  else {
                    var p = i(
                      c.map(function (e) {
                        var t = u(e);
                        return delete s[e], t;
                      })
                    );
                    o
                      ? (a = o(p, function () {
                          return r(e);
                        }))
                      : r(e);
                  }
                  return (l[e] = a);
                }
                for (var c in n) u(c);
                var d = [];
                for (var p in s) d.push(l[p]);
                return i(d);
              })(f, c, t, n);
            },
          };
          return w;
        };
      })();
      e.exports = r;
    },
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        o = n(22),
        i = n(13),
        l = n(17),
        s = n.n(l),
        u = function (e) {
          var t = e.error,
            n = e.retry,
            r = e.pastDelay;
          return t
            ? a.a.createElement(
                "div",
                {
                  style: {
                    align: "center",
                    color: "#fff",
                    backgroundColor: "#fa383e",
                    borderColor: "#fa383e",
                    borderStyle: "solid",
                    borderRadius: "0.25rem",
                    borderWidth: "1px",
                    boxSizing: "border-box",
                    display: "block",
                    padding: "1rem",
                    flex: "0 0 50%",
                    marginLeft: "25%",
                    marginRight: "25%",
                    marginTop: "5rem",
                    maxWidth: "50%",
                    width: "100%",
                  },
                },
                a.a.createElement("p", null, t.message),
                a.a.createElement(
                  "div",
                  null,
                  a.a.createElement(
                    "button",
                    { type: "button", onClick: n },
                    "Retry"
                  )
                )
              )
            : r
            ? a.a.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  },
                },
                a.a.createElement(
                  "svg",
                  {
                    id: "loader",
                    style: {
                      width: 128,
                      height: 110,
                      position: "absolute",
                      top: "calc(100vh - 64%)",
                    },
                    viewBox: "0 0 45 45",
                    xmlns: "http://www.w3.org/2000/svg",
                    stroke: "#61dafb",
                  },
                  a.a.createElement(
                    "g",
                    {
                      fill: "none",
                      fillRule: "evenodd",
                      transform: "translate(1 1)",
                      strokeWidth: "2",
                    },
                    a.a.createElement(
                      "circle",
                      { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                      a.a.createElement("animate", {
                        attributeName: "r",
                        begin: "1.5s",
                        dur: "3s",
                        values: "6;22",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      }),
                      a.a.createElement("animate", {
                        attributeName: "stroke-opacity",
                        begin: "1.5s",
                        dur: "3s",
                        values: "1;0",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      }),
                      a.a.createElement("animate", {
                        attributeName: "stroke-width",
                        begin: "1.5s",
                        dur: "3s",
                        values: "2;0",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      })
                    ),
                    a.a.createElement(
                      "circle",
                      { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                      a.a.createElement("animate", {
                        attributeName: "r",
                        begin: "3s",
                        dur: "3s",
                        values: "6;22",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      }),
                      a.a.createElement("animate", {
                        attributeName: "stroke-opacity",
                        begin: "3s",
                        dur: "3s",
                        values: "1;0",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      }),
                      a.a.createElement("animate", {
                        attributeName: "stroke-width",
                        begin: "3s",
                        dur: "3s",
                        values: "2;0",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      })
                    ),
                    a.a.createElement(
                      "circle",
                      { cx: "22", cy: "22", r: "8" },
                      a.a.createElement("animate", {
                        attributeName: "r",
                        begin: "0s",
                        dur: "1.5s",
                        values: "6;1;2;3;4;5;6",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      })
                    )
                  )
                )
              )
            : null;
        },
        c = n(11),
        d = {
          "0a8ed1d3": [
            function () {
              return n.e(3).then(n.bind(null, 54));
            },
            "@site/../docs/advanced-configuration.md",
            54,
          ],
          "0d4a303b": [
            function () {
              return n.e(4).then(n.bind(null, 55));
            },
            "@site/../docs/running-tests.md",
            55,
          ],
          "14d1cfa4": [
            function () {
              return n.e(5).then(n.bind(null, 56));
            },
            "@site/../docs/fetching-data-with-ajax-requests.md",
            56,
          ],
          17896441: [
            function () {
              return Promise.all([n.e(0), n.e(1), n.e(6)]).then(
                n.bind(null, 110)
              );
            },
            "@theme/DocItem",
            110,
          ],
          "1be78505": [
            function () {
              return Promise.all([n.e(0), n.e(1), n.e(2), n.e(53)]).then(
                n.bind(null, 111)
              );
            },
            "@theme/DocPage",
            111,
          ],
          "2358c029": [
            function () {
              return n.e(7).then(n.bind(null, 64));
            },
            "@site/../docs/installing-a-dependency.md",
            64,
          ],
          28368535: [
            function () {
              return n.e(8).then(n.bind(null, 65));
            },
            "@site/../docs/pre-rendering-into-static-html-files.md",
            65,
          ],
          "2937a60f": [
            function () {
              return n.e(9).then(n.bind(null, 66));
            },
            "@site/../docs/measuring-performance.md",
            66,
          ],
          "2ccb190c": [
            function () {
              return n.e(10).then(n.bind(null, 67));
            },
            "@site/../docs/adding-custom-environment-variables.md",
            67,
          ],
          "34e309a0": [
            function () {
              return n.e(11).then(n.bind(null, 68));
            },
            "@site/../docs/adding-a-router.md",
            68,
          ],
          "469e441c": [
            function () {
              return n.e(12).then(n.bind(null, 69));
            },
            "@site/../docs/using-global-variables.md",
            69,
          ],
          "53038b28": [
            function () {
              return n.e(13).then(n.bind(null, 70));
            },
            "@site/../docs/debugging-tests.md",
            70,
          ],
          "5791669a": [
            function () {
              return n.e(14).then(n.bind(null, 71));
            },
            "@site/../docs/title-and-meta-tags.md",
            71,
          ],
          "5e9f5e1a": [
            function () {
              return Promise.resolve().then(n.bind(null, 9));
            },
            "@generated/docusaurus.config",
            9,
          ],
          "5f589533": [
            function () {
              return n.e(15).then(n.bind(null, 72));
            },
            "@site/../docs/proxying-api-requests-in-development.md",
            72,
          ],
          "652d43aa": [
            function () {
              return n.e(16).then(n.bind(null, 73));
            },
            "@site/../docs/available-scripts.md",
            73,
          ],
          "65e9e485": [
            function () {
              return n.e(17).then(n.bind(null, 74));
            },
            "@site/../docs/updating-to-new-releases.md",
            74,
          ],
          "69233dfe": [
            function () {
              return n.e(18).then(n.bind(null, 75));
            },
            "@site/../docs/adding-a-css-modules-stylesheet.md",
            75,
          ],
          "76151ec7": [
            function () {
              return n.e(19).then(n.bind(null, 76));
            },
            "@site/../docs/adding-typescript.md",
            76,
          ],
          "7b4168bb": [
            function () {
              return n.e(20).then(n.bind(null, 77));
            },
            "@site/../docs/production-build.md",
            77,
          ],
          "7fc9aaf5": [
            function () {
              return n.e(21).then(n.bind(null, 78));
            },
            "@site/../docs/supported-browsers-features.md",
            78,
          ],
          "81e5044a": [
            function () {
              return n.e(22).then(n.bind(null, 79));
            },
            "@site/../docs/setting-up-your-editor.md",
            79,
          ],
          "8d0344ba": [
            function () {
              return n.e(23).then(n.bind(null, 80));
            },
            "@site/../docs/getting-started.md",
            80,
          ],
          "8f15ff3e": [
            function () {
              return n.e(24).then(n.bind(null, 81));
            },
            "@site/../docs/documentation-intro.md",
            81,
          ],
          90313351: [
            function () {
              return n.e(25).then(n.bind(null, 82));
            },
            "@site/../docs/adding-bootstrap.md",
            82,
          ],
          "935f2afb": [
            function () {
              return n.e(26).then(n.t.bind(null, 83, 3));
            },
            "~docs/default/version-current-metadata-prop-751.json",
            83,
          ],
          "93a054d8": [
            function () {
              return Promise.all([n.e(0), n.e(1), n.e(2), n.e(52)]).then(
                n.bind(null, 84)
              );
            },
            "/Users/iansu/Projects/oss/create-react-app-master/docusaurus/website/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchPage/index.js",
            84,
          ],
          "992518d4": [
            function () {
              return n.e(27).then(n.bind(null, 86));
            },
            "@site/../docs/troubleshooting.md",
            86,
          ],
          "993ad022": [
            function () {
              return n.e(28).then(n.bind(null, 87));
            },
            "@site/../docs/adding-a-sass-stylesheet.md",
            87,
          ],
          a18c2e9f: [
            function () {
              return n.e(29).then(n.bind(null, 88));
            },
            "@site/../docs/custom-templates.md",
            88,
          ],
          a9ceed40: [
            function () {
              return n.e(30).then(n.bind(null, 89));
            },
            "@site/../docs/using-https-in-development.md",
            89,
          ],
          aa942060: [
            function () {
              return n.e(31).then(n.bind(null, 90));
            },
            "@site/../docs/loading-graphql-files.md",
            90,
          ],
          b0e05c17: [
            function () {
              return n.e(32).then(n.bind(null, 91));
            },
            "@site/../docs/making-a-progressive-web-app.md",
            91,
          ],
          b3326c3f: [
            function () {
              return n.e(33).then(n.bind(null, 92));
            },
            "@site/../docs/analyzing-the-bundle-size.md",
            92,
          ],
          b9aeacd6: [
            function () {
              return n.e(34).then(n.bind(null, 93));
            },
            "@site/../docs/adding-css-reset.md",
            93,
          ],
          bd4026a4: [
            function () {
              return n.e(35).then(n.bind(null, 94));
            },
            "@site/../docs/integrating-with-an-api-backend.md",
            94,
          ],
          c4f5d8e4: [
            function () {
              return Promise.all([n.e(0), n.e(1), n.e(2), n.e(36)]).then(
                n.bind(null, 95)
              );
            },
            "@site/src/pages/index.js",
            95,
          ],
          cdf1c877: [
            function () {
              return n.e(37).then(n.bind(null, 97));
            },
            "@site/../docs/post-processing-css.md",
            97,
          ],
          d01c30f5: [
            function () {
              return n.e(38).then(n.bind(null, 98));
            },
            "@site/../docs/using-the-public-folder.md",
            98,
          ],
          d43c4a9d: [
            function () {
              return n.e(39).then(n.bind(null, 99));
            },
            "@site/../docs/developing-components-in-isolation.md",
            99,
          ],
          d5c5a619: [
            function () {
              return n.e(40).then(n.bind(null, 100));
            },
            "@site/../docs/adding-flow.md",
            100,
          ],
          e330d02f: [
            function () {
              return n.e(41).then(n.bind(null, 101));
            },
            "@site/../docs/deployment.md",
            101,
          ],
          e543a104: [
            function () {
              return n.e(42).then(n.bind(null, 102));
            },
            "@site/../docs/can-i-use-decorators.md",
            102,
          ],
          e8bbf698: [
            function () {
              return n.e(43).then(n.bind(null, 103));
            },
            "@site/../docs/adding-relay.md",
            103,
          ],
          e9cc2457: [
            function () {
              return n.e(44).then(n.bind(null, 104));
            },
            "@site/../docs/folder-structure.md",
            104,
          ],
          ea373786: [
            function () {
              return n.e(45).then(n.bind(null, 105));
            },
            "@site/../docs/importing-a-component.md",
            105,
          ],
          eae9715f: [
            function () {
              return n.e(46).then(n.bind(null, 106));
            },
            "@site/../docs/code-splitting.md",
            106,
          ],
          eb09bdf2: [
            function () {
              return n.e(47).then(n.bind(null, 107));
            },
            "@site/../docs/adding-images-fonts-and-files.md",
            107,
          ],
          f87328ee: [
            function () {
              return n.e(48).then(n.bind(null, 108));
            },
            "@site/../docs/adding-a-stylesheet.md",
            108,
          ],
          fe6114bd: [
            function () {
              return n.e(49).then(n.bind(null, 109));
            },
            "@site/../docs/alternatives-to-ejecting.md",
            109,
          ],
        };
      var p = function (e) {
        var t = {};
        return (
          (function e(n, r) {
            Object.keys(n).forEach(function (a) {
              var o = n[a],
                i = r ? r + "." + a : a;
              "object" === typeof o && !!o && Object.keys(o).length
                ? e(o, i)
                : (t[i] = o);
            });
          })(e),
          t
        );
      };
      var f = function (e, t) {
          if ("*" === e)
            return s()({
              loading: u,
              loader: function () {
                return Promise.all([n.e(0), n.e(1), n.e(2), n.e(56)]).then(
                  n.bind(null, 136)
                );
              },
            });
          var r = c[e + "-" + t],
            o = [],
            i = [],
            l = {},
            f = p(r);
          return (
            Object.keys(f).forEach(function (e) {
              var t = d[f[e]];
              t && ((l[e] = t[0]), o.push(t[1]), i.push(t[2]));
            }),
            s.a.Map({
              loading: u,
              loader: l,
              modules: o,
              webpack: function () {
                return i;
              },
              render: function (e, t) {
                var n = JSON.parse(JSON.stringify(r));
                Object.keys(e).forEach(function (t) {
                  for (
                    var r = n, a = t.split("."), o = 0;
                    o < a.length - 1;
                    o += 1
                  )
                    r = r[a[o]];
                  r[a[a.length - 1]] = e[t].default;
                  var i = Object.keys(e[t]).filter(function (e) {
                    return "default" !== e;
                  });
                  i &&
                    i.length &&
                    i.forEach(function (n) {
                      r[a[a.length - 1]][n] = e[t][n];
                    });
                });
                var o = n.component;
                return (
                  delete n.component,
                  a.a.createElement(o, Object.assign({}, n, t))
                );
              },
            })
          );
        },
        m = [
          { path: "/", component: f("/", "deb"), exact: !0 },
          { path: "/search", component: f("/search", "8ec"), exact: !0 },
          {
            path: "/docs",
            component: f("/docs", "374"),
            routes: [
              {
                path: "/docs/adding-a-css-modules-stylesheet",
                component: f("/docs/adding-a-css-modules-stylesheet", "343"),
                exact: !0,
              },
              {
                path: "/docs/adding-a-router",
                component: f("/docs/adding-a-router", "f40"),
                exact: !0,
              },
              {
                path: "/docs/adding-a-sass-stylesheet",
                component: f("/docs/adding-a-sass-stylesheet", "d0f"),
                exact: !0,
              },
              {
                path: "/docs/adding-a-stylesheet",
                component: f("/docs/adding-a-stylesheet", "169"),
                exact: !0,
              },
              {
                path: "/docs/adding-bootstrap",
                component: f("/docs/adding-bootstrap", "e9a"),
                exact: !0,
              },
              {
                path: "/docs/adding-css-reset",
                component: f("/docs/adding-css-reset", "7d3"),
                exact: !0,
              },
              {
                path: "/docs/adding-custom-environment-variables",
                component: f(
                  "/docs/adding-custom-environment-variables",
                  "611"
                ),
                exact: !0,
              },
              {
                path: "/docs/adding-flow",
                component: f("/docs/adding-flow", "b29"),
                exact: !0,
              },
              {
                path: "/docs/adding-images-fonts-and-files",
                component: f("/docs/adding-images-fonts-and-files", "915"),
                exact: !0,
              },
              {
                path: "/docs/adding-relay",
                component: f("/docs/adding-relay", "5b5"),
                exact: !0,
              },
              {
                path: "/docs/adding-typescript",
                component: f("/docs/adding-typescript", "5e7"),
                exact: !0,
              },
              {
                path: "/docs/advanced-configuration",
                component: f("/docs/advanced-configuration", "cef"),
                exact: !0,
              },
              {
                path: "/docs/alternatives-to-ejecting",
                component: f("/docs/alternatives-to-ejecting", "26b"),
                exact: !0,
              },
              {
                path: "/docs/analyzing-the-bundle-size",
                component: f("/docs/analyzing-the-bundle-size", "feb"),
                exact: !0,
              },
              {
                path: "/docs/available-scripts",
                component: f("/docs/available-scripts", "80b"),
                exact: !0,
              },
              {
                path: "/docs/can-i-use-decorators",
                component: f("/docs/can-i-use-decorators", "2ee"),
                exact: !0,
              },
              {
                path: "/docs/code-splitting",
                component: f("/docs/code-splitting", "a46"),
                exact: !0,
              },
              {
                path: "/docs/custom-templates",
                component: f("/docs/custom-templates", "794"),
                exact: !0,
              },
              {
                path: "/docs/debugging-tests",
                component: f("/docs/debugging-tests", "17d"),
                exact: !0,
              },
              {
                path: "/docs/deployment",
                component: f("/docs/deployment", "4e3"),
                exact: !0,
              },
              {
                path: "/docs/developing-components-in-isolation",
                component: f("/docs/developing-components-in-isolation", "44e"),
                exact: !0,
              },
              {
                path: "/docs/documentation-intro",
                component: f("/docs/documentation-intro", "fe8"),
                exact: !0,
              },
              {
                path: "/docs/fetching-data-with-ajax-requests",
                component: f("/docs/fetching-data-with-ajax-requests", "eb5"),
                exact: !0,
              },
              {
                path: "/docs/folder-structure",
                component: f("/docs/folder-structure", "6b7"),
                exact: !0,
              },
              {
                path: "/docs/getting-started",
                component: f("/docs/getting-started", "71e"),
                exact: !0,
              },
              {
                path: "/docs/importing-a-component",
                component: f("/docs/importing-a-component", "6cf"),
                exact: !0,
              },
              {
                path: "/docs/installing-a-dependency",
                component: f("/docs/installing-a-dependency", "641"),
                exact: !0,
              },
              {
                path: "/docs/integrating-with-an-api-backend",
                component: f("/docs/integrating-with-an-api-backend", "05f"),
                exact: !0,
              },
              {
                path: "/docs/loading-graphql-files",
                component: f("/docs/loading-graphql-files", "483"),
                exact: !0,
              },
              {
                path: "/docs/making-a-progressive-web-app",
                component: f("/docs/making-a-progressive-web-app", "996"),
                exact: !0,
              },
              {
                path: "/docs/measuring-performance",
                component: f("/docs/measuring-performance", "1c6"),
                exact: !0,
              },
              {
                path: "/docs/post-processing-css",
                component: f("/docs/post-processing-css", "7f9"),
                exact: !0,
              },
              {
                path: "/docs/pre-rendering-into-static-html-files",
                component: f(
                  "/docs/pre-rendering-into-static-html-files",
                  "78b"
                ),
                exact: !0,
              },
              {
                path: "/docs/production-build",
                component: f("/docs/production-build", "2aa"),
                exact: !0,
              },
              {
                path: "/docs/proxying-api-requests-in-development",
                component: f(
                  "/docs/proxying-api-requests-in-development",
                  "9e7"
                ),
                exact: !0,
              },
              {
                path: "/docs/running-tests",
                component: f("/docs/running-tests", "3d9"),
                exact: !0,
              },
              {
                path: "/docs/setting-up-your-editor",
                component: f("/docs/setting-up-your-editor", "f50"),
                exact: !0,
              },
              {
                path: "/docs/supported-browsers-features",
                component: f("/docs/supported-browsers-features", "d00"),
                exact: !0,
              },
              {
                path: "/docs/title-and-meta-tags",
                component: f("/docs/title-and-meta-tags", "8ab"),
                exact: !0,
              },
              {
                path: "/docs/troubleshooting",
                component: f("/docs/troubleshooting", "f69"),
                exact: !0,
              },
              {
                path: "/docs/updating-to-new-releases",
                component: f("/docs/updating-to-new-releases", "d08"),
                exact: !0,
              },
              {
                path: "/docs/using-global-variables",
                component: f("/docs/using-global-variables", "120"),
                exact: !0,
              },
              {
                path: "/docs/using-https-in-development",
                component: f("/docs/using-https-in-development", "c53"),
                exact: !0,
              },
              {
                path: "/docs/using-the-public-folder",
                component: f("/docs/using-the-public-folder", "165"),
                exact: !0,
              },
            ],
          },
          { path: "*", component: f("*") },
        ],
        g = n(10),
        h = n(9),
        b = n(26),
        v = n(27),
        y = n(23),
        w = n(25),
        k = n(3),
        E = n(1),
        x = n(12),
        S = n.n(x),
        T = [n(15), n(15), n(15), n(39), n(46), n(43)];
      function C(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        T.forEach(function (t) {
          var r = t.__esModule ? t.default : t;
          r && r[e] && r[e].apply(r, n);
        });
      }
      var _ = {
          onRouteUpdate: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            C.apply(void 0, ["onRouteUpdate"].concat(t));
          },
          onRouteUpdateDelayed: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            C.apply(void 0, ["onRouteUpdateDelayed"].concat(t));
          },
        },
        O = n(8);
      function P(e, t) {
        var n = Object(O.a)(e, t);
        return Promise.all(
          n.map(function (e) {
            var t = e.route.component;
            if (t && t.preload) return t.preload();
          })
        );
      }
      var R = {};
      var A = function (e) {
        if (R[e.pathname])
          return Object.assign(Object.assign({}, e), {
            pathname: R[e.pathname],
          });
        var t = e.pathname || "/";
        return (
          "" === (t = t.trim().replace(/\/index\.html$/, "")) && (t = "/"),
          (R[e.pathname] = t),
          Object.assign(Object.assign({}, e), { pathname: t })
        );
      };
      n(44);
      S.a.configure({ showSpinner: !1 });
      var N = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).previousLocation = null),
              (n.progressBarTimeout = null),
              (n.state = { nextRouteHasLoaded: !0 }),
              n
            );
          }
          Object(k.a)(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e, t) {
              var n = this,
                r = e.location !== this.props.location,
                a = this.props,
                o = a.routes,
                i = a.delay,
                l = void 0 === i ? 1e3 : i;
              if (r) {
                var s = A(e.location);
                return (
                  this.startProgressBar(l),
                  (this.previousLocation = A(this.props.location)),
                  this.setState({ nextRouteHasLoaded: !1 }),
                  P(o, s.pathname)
                    .then(function () {
                      _.onRouteUpdate({
                        previousLocation: n.previousLocation,
                        location: s,
                      }),
                        (n.previousLocation = null),
                        n.setState(
                          { nextRouteHasLoaded: !0 },
                          n.stopProgressBar
                        );
                      var e = s.hash;
                      if (e) {
                        var t = e.substring(1),
                          r = document.getElementById(t);
                        r && r.scrollIntoView();
                      } else window.scrollTo(0, 0);
                    })
                    .catch(function (e) {
                      return console.warn(e);
                    }),
                  !1
                );
              }
              return !!t.nextRouteHasLoaded;
            }),
            (n.clearProgressBarTimeout = function () {
              this.progressBarTimeout &&
                (clearTimeout(this.progressBarTimeout),
                (this.progressBarTimeout = null));
            }),
            (n.startProgressBar = function (e) {
              var t = this;
              this.clearProgressBarTimeout(),
                (this.progressBarTimeout = setTimeout(function () {
                  _.onRouteUpdateDelayed({ location: A(t.props.location) }),
                    S.a.start();
                }, e));
            }),
            (n.stopProgressBar = function () {
              this.clearProgressBarTimeout(), S.a.done();
            }),
            (n.render = function () {
              var e = this.props,
                t = e.children,
                n = e.location;
              return a.a.createElement(E.d, {
                location: A(n),
                render: function () {
                  return t;
                },
              });
            }),
            t
          );
        })(a.a.Component),
        I = Object(E.o)(N);
      var L = function () {
        var e = Object(r.useState)(!1),
          t = e[0],
          n = e[1];
        return (
          Object(r.useEffect)(function () {
            n(!0);
          }, []),
          a.a.createElement(
            w.a.Provider,
            {
              value: {
                siteConfig: h.default,
                siteMetadata: v,
                globalData: b,
                isClient: t,
              },
            },
            a.a.createElement(I, { routes: m }, Object(y.a)(m))
          )
        );
      };
      var j = (function (e) {
          if ("undefined" == typeof document) return !1;
          var t = document.createElement("link");
          try {
            if (t.relList && "function" == typeof t.relList.supports)
              return t.relList.supports(e);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (e) {
              return new Promise(function (t, n) {
                if ("undefined" != typeof document) {
                  var r = document.createElement("link");
                  r.setAttribute("rel", "prefetch"),
                    r.setAttribute("href", e),
                    (r.onload = t),
                    (r.onerror = n),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(r);
                } else n();
              });
            }
          : function (e) {
              return new Promise(function (t, n) {
                var r = new XMLHttpRequest();
                r.open("GET", e, !0),
                  (r.withCredentials = !0),
                  (r.onload = function () {
                    200 === r.status ? t() : n();
                  }),
                  r.send(null);
              });
            },
        D = {};
      var F = function (e) {
          return new Promise(function (t) {
            D[e]
              ? t()
              : j(e)
                  .then(function () {
                    t(), (D[e] = !0);
                  })
                  .catch(function () {});
          });
        },
        M = {},
        z = {},
        U = function () {
          return !(
            !("connection" in navigator) ||
            -1 === (navigator.connection.effectiveType || "").indexOf("2g") ||
            !navigator.connection.saveData
          );
        },
        $ = {
          prefetch: function (e) {
            return (
              !!(function (e) {
                return !U() && !z[e] && !M[e];
              })(e) &&
              ((M[e] = !0),
              Object(O.a)(m, e)
                .reduce(function (e, t) {
                  var n = c[t.route.path];
                  if (!n) return e;
                  var r = Object.values(p(n));
                  return e.concat(r);
                }, [])
                .forEach(function (e) {
                  var t = n.gca(e);
                  t && !/undefined/.test(t) && F(t);
                }),
              !0)
            );
          },
          preload: function (e) {
            return (
              !!(function (e) {
                return !U() && !z[e];
              })(e) && ((z[e] = !0), P(m, e), !0)
            );
          },
        };
      if (g.a.canUseDOM) {
        window.docusaurus = $;
        var B = o.hydrate;
        P(m, window.location.pathname).then(function () {
          B(
            a.a.createElement(i.a, null, a.a.createElement(L, null)),
            document.getElementById("__docusaurus")
          );
        });
      }
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(20),
        a = n(10),
        o = n(9);
      (function (e) {
        if (a.a.canUseDOM) {
          var t = o.default.themeConfig.prism,
            r = (t = void 0 === t ? {} : t).additionalLanguages,
            i = void 0 === r ? [] : r;
          (window.Prism = e),
            i.forEach(function (e) {
              n(16)("./prism-" + e);
            }),
            delete window.Prism;
        }
      })(r.a);
    },
  ],
  [[30, 51, 0]],
]);
