(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [29],
  {
    "+tR8": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n("cpVT"),
        o = n("nKUr"),
        i = (n("q1tI"), n("pDQI"));
      function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function s(t) {
        return Object(o.jsxs)(
          i.a,
          c(
            c({}, t),
            {},
            {
              children: [
                Object(o.jsx)("path", {
                  d: "M3 6H5H21",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(o.jsx)("path", {
                  d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(o.jsx)("path", {
                  d: "M10 11V17",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(o.jsx)("path", {
                  d: "M14 11V17",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }
          )
        );
      }
    },
    "2URR": function (t, e, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("cpVT");
      n("q1tI");
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                Object(o.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var c = {
        progress: {
          base: {
            position: "absolute",
            left: "25%",
            right: "25%",
            top: "47%",
            height: "7px",
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "10px",
            borderColor: "#fff",
            transition: "opacity 0.5s",
            zIndex: 1,
          },
          progressFiller: {
            width: "100%",
            height: "5px",
            backgroundColor: "#fff",
          },
          progressFill: {
            animation: "x 3s ease 0s infinite",
            animationName: "loader-fill-animation",
          },
        },
      };
      e.a = function (t) {
        var e = t.loading,
          n = c.progress;
        return Object(r.jsx)("div", {
          style: a(a({}, n.base), e ? {} : { opacity: 0 }),
          children: Object(r.jsx)("div", {
            style: a(a({}, n.progressFiller), e ? n.progressFill : {}),
          }),
        });
      };
    },
    "3TIX": function (t, e, n) {
      "use strict";
      n.d(e, "K", function () {
        return D;
      }),
        n.d(e, "I", function () {
          return q;
        }),
        n.d(e, "R", function () {
          return X;
        }),
        n.d(e, "Q", function () {
          return $;
        }),
        n.d(e, "P", function () {
          return V;
        }),
        n.d(e, "L", function () {
          return F;
        }),
        n.d(e, "J", function () {
          return z;
        }),
        n.d(e, "M", function () {
          return W;
        }),
        n.d(e, "S", function () {
          return U;
        }),
        n.d(e, "U", function () {
          return H;
        }),
        n.d(e, "O", function () {
          return G;
        }),
        n.d(e, "T", function () {
          return K;
        }),
        n.d(e, "B", function () {
          return O;
        }),
        n.d(e, "N", function () {
          return J;
        }),
        n.d(e, "o", function () {
          return i;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "l", function () {
          return c;
        }),
        n.d(e, "m", function () {
          return s;
        }),
        n.d(e, "z", function () {
          return p;
        }),
        n.d(e, "A", function () {
          return f;
        }),
        n.d(e, "C", function () {
          return b;
        }),
        n.d(e, "g", function () {
          return R;
        }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "k", function () {
          return h;
        }),
        n.d(e, "j", function () {
          return v;
        }),
        n.d(e, "D", function () {
          return j;
        }),
        n.d(e, "G", function () {
          return m;
        }),
        n.d(e, "H", function () {
          return y;
        }),
        n.d(e, "y", function () {
          return g;
        }),
        n.d(e, "c", function () {
          return w;
        }),
        n.d(e, "n", function () {
          return x;
        }),
        n.d(e, "f", function () {
          return E;
        }),
        n.d(e, "F", function () {
          return k;
        }),
        n.d(e, "r", function () {
          return S;
        }),
        n.d(e, "E", function () {
          return C;
        }),
        n.d(e, "x", function () {
          return _;
        }),
        n.d(e, "q", function () {
          return L;
        }),
        n.d(e, "i", function () {
          return N;
        }),
        n.d(e, "t", function () {
          return I;
        }),
        n.d(e, "p", function () {
          return o;
        }),
        n.d(e, "u", function () {
          return l;
        }),
        n.d(e, "h", function () {
          return T;
        }),
        n.d(e, "e", function () {
          return r;
        }),
        n.d(e, "w", function () {
          return P;
        }),
        n.d(e, "s", function () {
          return A;
        }),
        n.d(e, "v", function () {
          return M;
        });
      var r = "FLUSH_FILE_WRITES",
        o = "OPEN_SIDEPANE_BY_TYPE",
        i = "NEW_CONSOLE_MESSAGE",
        a = "EVAL_CODE",
        c = "LOADING_ENGINE_COMPLETE",
        s = "LOADING_EXECUTION_ENGINE_STARTED",
        u = "CONSOLE_INPUT",
        l = "RESIZE_TERMINAL",
        d = "CLEAR_CONSOLE",
        p = "SET_EDITOR_SESSION",
        f = "SET_SPLIT_POSITION",
        b = "STOP_EVAL",
        h = "LINT_STARTED",
        v = "LINT_ENDED",
        j = "UPDATE_LAYOUT",
        g = "SET_ACTIVE_LINE",
        O = "SHOW_EXAMPLES",
        m = "WORKSPACE_MOUNTED",
        y = "WORKSPACE_WILL_UNMOUNT",
        w = "ENGINE_FORMAT_FILE",
        x = "MONACO_FORMAT_FILE",
        E = "FORMAT_FILE",
        k = "WEBVIEW_LOADED",
        S = "REFRESH_WEBVIEW",
        C = "UPDATE_WORKSPACE_PREFERENCES",
        _ = "SEND_LSP_MESSAGE",
        L = "RECEIVED_LSP_MESSAGE",
        N = "LANGUAGE_SERVER_DIED",
        I = "REGISTER_MONACO_EDITOR_HANDLE",
        A = "REGISTER_ACE_EDITOR_HANDLE",
        P = "SELECT_EDITOR_RANGE",
        T = "INSTALL_PACKAGES",
        R = "@@INIT",
        M = "RUN_REPL",
        D = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = arguments.length > 2 ? arguments[2] : void 0;
          return { data: t, type: e, kind: e, raw: !!n };
        };
      function V(t) {
        var e = t.wid,
          n = t.message,
          r = t.type,
          o = void 0 === r ? "" : r,
          a = t.raw;
        return { wid: e, type: i, message: D(n, o, !!a) };
      }
      function W(t) {
        var e = t.wid;
        return { type: M, wid: e };
      }
      function U(t) {
        var e = t.wid;
        return { type: b, wid: e };
      }
      function F(t) {
        var e = t.wid,
          n = t.code,
          r = t.clean;
        return { type: a, wid: e, code: n, clean: r };
      }
      function z(t) {
        var e = t.wid,
          n = t.input,
          r = t.kind;
        return { type: u, wid: e, input: n, kind: r || "output" };
      }
      function G(t) {
        return {
          type: "LINT_CODE",
          wid: t.wid,
          filePath: t.filePath,
          code: t.code,
        };
      }
      function H(t) {
        var e = t.wid,
          n = t.path,
          r = t.to,
          o = t.property;
        return { type: j, wid: e, path: n, to: r, property: o };
      }
      function K(t) {
        return {
          type: "TRACK_WS_EVENT",
          wid: t.wid,
          eventKey: t.eventKey,
          properties: t.properties,
          trackOnce: t.trackOnce,
        };
      }
      function q(t) {
        var e = t.wid,
          n = t.pud;
        return { type: d, wid: e, pud: n };
      }
      function X(t) {
        var e = t.wid,
          n = t.cols,
          r = t.rows,
          o = t.kind;
        return { type: l, wid: e, cols: n, rows: r, kind: o };
      }
      function $(t) {
        return {
          type: "OPEN_FILE",
          wid: t.wid,
          path: t.path,
          newTab: t.newTab,
        };
      }
      function B(t) {
        var e = t.wid,
          n = t.line;
        return { type: g, wid: e, line: n };
      }
      function J(t) {
        var e = t.wid,
          n = t.line;
        return function (t) {
          t(B({ wid: e, line: n })),
            setTimeout(function () {
              t(B({ wid: e, line: null }));
            }, 2e3);
        };
      }
    },
    "5sjI": function (t, e, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("2URR");
      e.a = function (t) {
        var e = t.messages;
        return Object(r.jsxs)("div", {
          style: {
            height: "100%",
            position: "relative",
            fontSize: "14px",
            padding: "15px",
            boxSizing: "border-box",
          },
          children: [
            e.map(function (t, e) {
              return Object(r.jsx)(
                "span",
                {
                  style: {
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                    lineHeight: "1em",
                    wordWrap: "break-word",
                    fontFamily: "monospace",
                    color: "error" === t.type ? "#f06" : "#fff",
                    position: "relative",
                    left: "error" === t.type ? "-8px" : "0px",
                  },
                  children: t.data,
                },
                e
              );
            }),
            Object(r.jsx)("div", {
              style: {
                marginLeft: "-8px",
                background:
                  "url(/public/images/sprite.png) -13px -583px no-repeat",
                width: "24px",
                height: "16px",
              },
            }),
            Object(r.jsx)(o.a, { loading: !0 }),
          ],
        });
      };
    },
    "8axe": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "checkLineEnd", function () {
          return S;
        }),
        n.d(e, "Component", function () {
          return C;
        }),
        n.d(e, "reducer", function () {
          return _;
        });
      var r = n("cpVT"),
        o = n("nKUr"),
        i = n("z7pX"),
        a = n("xvhg"),
        c = n("q1tI"),
        s = n("/MKj"),
        u = n("3TIX"),
        l = n("0gYX"),
        d = n.n(l),
        p = function (t) {
          var e = t.split("\n");
          if (0 === e.length) return 0;
          var n,
            r = e[e.length - 1].replace(/\s+$/, ""),
            o = r.match(/^\s*/);
          return (
            (n = o ? o[0] : ""),
            ":" === r[r.length - 1]
              ? 1
              : !(!n.length || 0 === r[r.length - 1].length) && 0
          );
        },
        f = function (t) {
          return !t.includes(":}") && !!t.includes(":{") && 0;
        };
      function b(t, e) {
        var n;
        if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return h(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return h(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          c = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (c = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var v = /"(?:[^"]|\\.)*"|'(?:[^']|\\.)*'|\/(?:[^/]|\\.)*\/|[{}()[\]]/gi,
        j = function (t) {
          var e,
            n = 0,
            r = 0,
            o = 0,
            i = b(t.match(v) || []);
          try {
            for (i.s(); !(e = i.n()).done; ) {
              switch (e.value) {
                case "(":
                  r++;
                  break;
                case ")":
                  r--;
                  break;
                case "[":
                  o++;
                  break;
                case "]":
                  o--;
                  break;
                case "{":
                  n++;
                  break;
                case "}":
                  n--;
              }
            }
          } catch (a) {
            i.e(a);
          } finally {
            i.f();
          }
          return (r > 0 || n > 0 || o > 0) && 1;
        },
        g = n("5sjI"),
        O = n("Qbrf"),
        m = n("OQjE"),
        y = n("h7rM"),
        w = n("7lhO"),
        x = n("tZOq");
      function E(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function S(t, e, n) {
        if (/\n\s*$/.test(e)) n(!1);
        else
          switch (d.a.get(t).key.toLowerCase()) {
            case "html":
              n(j(e));
              break;
            case "haskell":
              n(f(e));
              break;
            case "python_turtle":
              n(p(e));
              break;
            default:
              n(!1);
          }
      }
      function C(t) {
        var e = t.wid,
          r = t.pud,
          l = t.style,
          d = Object(w.a)(),
          p = Object(s.e)(),
          f = c.useRef(null),
          b = (function () {
            var t = c.useState({}),
              e = Object(a.a)(t, 2)[1];
            return c.useCallback(function () {
              e({});
            }, []);
          })();
        c.useEffect(function () {
          Promise.all([n.e(40), n.e(44)])
            .then(n.bind(null, "yR2o"))
            .then(function (t) {
              (f.current = t.default), b();
            });
        }, []);
        var h = Object(y.b)(e, r, "console"),
          v = Object(a.a)(h, 1)[0],
          j = v.loadingEngine,
          O = v.consoleMessages,
          m = v.runstate,
          E = v.promptValue,
          C = Object(x.Hb)({ variables: { replId: d } }).data,
          _ =
            "Repl" === (null === C || void 0 === C ? void 0 : C.repl.__typename)
              ? C.repl
              : void 0,
          L = (null === _ || void 0 === _ ? void 0 : _.language) || "",
          N = null === _ || void 0 === _ ? void 0 : _.lang.header,
          I = c.useCallback(
            function (t) {
              "stopping" !== m &&
                p(
                  "running" !== m
                    ? Object(u.L)({ wid: e, clean: !1, code: t })
                    : Object(u.J)({ wid: e, input: t, kind: "console" })
                );
            },
            [p, m, e]
          ),
          A = c.useCallback(
            function () {
              p(Object(u.I)({ wid: e, pud: r }));
            },
            [p, e, r]
          ),
          P = c.useCallback(
            function (t) {
              p({ type: "SET_PROMPT_VALUE", wid: e, pud: r, promptValue: t });
            },
            [p, e, r]
          ),
          T = c.useCallback(
            function (t, e) {
              S(L, t, e);
            },
            [L]
          ),
          R = { data: "".concat(N, "\n"), type: "" },
          M = N ? [R].concat(Object(i.a)(O)) : O;
        if (!f.current) return Object(o.jsx)(g.a, { messages: M });
        var D = f.current;
        return Object(o.jsx)("div", {
          style: k(
            k({}, l),
            {},
            {
              backgroundColor: "var(--color-brand-dark-blue)",
              borderRadius: "var(--border-radius-1)",
            }
          ),
          children: Object(o.jsx)("div", {
            style: { height: "100%" },
            children: Object(o.jsx)(D, {
              messages: M,
              showModal: function () {},
              clearConsole: A,
              setPromptValue: P,
              onEval: I,
              promptState: "idle" !== m ? "input" : "prompt",
              checkLineEnd: T,
              promptValue: E,
              loading: j,
            }),
          }),
        });
      }
      var _ = Object(O.a)({
        primary: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    consoleMessages: [],
                    loadingEngine: !1,
                    runstate: "idle",
                    presetStdin: "",
                    promptValue: "",
                  },
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case u.g:
              return k(k({}, t), e.initialState);
            case u.m:
              return k(k({}, t), {}, { loadingEngine: !0 });
            case u.l:
              return k(k({}, t), {}, { loadingEngine: !1 });
            case u.o:
              return "shell" === e.message.type
                ? t
                : k(
                    k({}, t),
                    {},
                    { consoleMessages: t.consoleMessages.concat(e.message) }
                  );
            case u.C:
              var n = Object(u.K)(
                "\nRepl.it: Stopping... please wait\n",
                "error"
              );
              return k(
                k({}, t),
                {},
                { consoleMessages: t.consoleMessages.concat(n) }
              );
            case "SET_PROMPT_VALUE":
              return k(k({}, t), {}, { promptValue: e.promptValue });
            case u.a:
              return k(k({}, t), {}, { consoleMessages: [] });
            default:
              return t;
          }
        },
        runstate: m.a,
      });
    },
    A3V5: function (t, e, n) {
      "use strict";
      var r = n("q1tI"),
        o = n("17x9"),
        i = Math.sqrt(2);
      function a(t) {
        var e = "top" === t.direction || "bottom" === t.direction,
          n = "left" === t.direction || "top" === t.direction,
          o = t.borderWidth * i,
          a = o / 2,
          c = 2 * t.size + 2 * o,
          s = t.size + o,
          u = n ? s : 0,
          l = n ? a : s - a,
          d = c / 2,
          p = c - a,
          f = e
            ? ["M", a, u, "L", d, l, "L", p, u]
            : ["M", u, a, "L", l, d, "L", u, p];
        return r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/svg/2000",
            width: e ? c : s,
            height: e ? s : c,
            style: t.style,
            className: t.className,
          },
          r.createElement("path", {
            d: f.join(" "),
            fill: t.color,
            stroke: t.borderColor,
            strokeWidth: t.borderWidth,
            strokeLinecap: "square",
          })
        );
      }
      (a.propTypes = {
        color: o.string.isRequired,
        size: o.number.isRequired,
        direction: o.oneOf(["top", "right", "bottom", "left"]).isRequired,
        borderWidth: o.number,
        borderColor: o.string,
        style: o.object,
        className: o.string,
      }),
        (a.defaultProps = { borderWidth: 0, borderColor: "transparent" }),
        (t.exports = a);
    },
    Hxkj: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n("0gYX"),
        o = n.n(r);
      function i(t, e) {
        var n = t.find(function (t) {
          return t.toLowerCase().includes("readme");
        });
        if (n) return n;
        var r = o.a.getMainFileName(e);
        if (o.a.usesInterpreter(e) && t.includes(r)) return r;
        if (t.includes("Makefile")) return "Makefile";
        if (t.includes(r)) return r;
        if (t.includes(".replit")) return ".replit";
        var i = t.find(function (t) {
          return t.endsWith(".md");
        });
        return i || t[0];
      }
    },
    PG9f: function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n;
        if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return o(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return o(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          c = !0,
          s = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (s = !0), (a = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t) {
        var e,
          n = {},
          o = r(t.split(/\n|\r|\r\n/));
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var i = e.value;
            if (!a(i)) {
              var c = (i = s(i)).indexOf("="),
                l = i.indexOf(":");
              if (-1 !== l || -1 !== c) {
                var d = c;
                -1 !== l && (l < c || -1 === c) && (d = l);
                var p = i
                    .slice(0, d)
                    .replace(/^\s*(?:export\s+)?(.*?)\s*$/, "$1"),
                  f = u(i.slice(d + 1), n);
                n[p] = f;
              }
            }
          }
        } catch (b) {
          o.e(b);
        } finally {
          o.f();
        }
        return n;
      }
      function a(t) {
        var e = t.trim();
        return 0 === e.length || e.startsWith("#");
      }
      function c(t, e) {
        return t.split(e).length - 1;
      }
      function s(t) {
        if (!t.includes("#")) return t;
        var e,
          n = !1,
          o = [],
          i = r(t.split("#"));
        try {
          for (i.s(); !(e = i.n()).done; ) {
            var a = e.value;
            (1 === c(a, '"') || c(a, "'")) &&
              (n ? ((n = !1), o.push(a)) : (n = !0)),
              (0 === o.length || n) && o.push(a);
          }
        } catch (s) {
          i.e(s);
        } finally {
          i.f();
        }
        return o.join("#");
      }
      function u(t, e) {
        var n = t.trim();
        if (0 === n.length) return n;
        var r = n.length - 1,
          o = '"' === n[0] && '"' === n[r],
          i = "'" === n[0] && "'" === n[r];
        return (
          (i || o) && (n = n.slice(1, -1)),
          o &&
            (n = (n = n.replace(/\\./g, function (t) {
              return "\\n" === t ? "\n" : "\\r" === t ? "\r" : t;
            })).replace(/\\([^$])/g, "$1")),
          i ||
            (n = n.replace(/(\\)?(\$)(\()?\{?([A-Z0-9_]+)?\}?/g, function (t) {
              var n = t.match(/(\\)?(\$)(\()?\{?([A-Z0-9_]+)?\}?/);
              if (null === n) return t;
              if ("\\" === n[1] || "(" === n[2]) return n[0].slice(1);
              var r = n[4];
              return "" !== r ? e[r] || "" : t;
            })),
          n
        );
      }
      n.d(e, "a", function () {
        return i;
      });
    },
    Zma6: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return O;
      });
      var r,
        o = n("nKUr"),
        i = n("vJKn"),
        a = n.n(i),
        c = n("rg98"),
        s = n("xvhg"),
        u = n("MX0m"),
        l = n.n(u),
        d = n("q1tI"),
        p = n("g7Gn"),
        f = n("XLFt"),
        b = n("koLh"),
        h = n("zgDP"),
        v = n("PG9f"),
        j = n("fA4Q");
      !(function (t) {
        (t.Connecting = "Connecting"),
          (t.Connected = "Connected"),
          (t.Disconnected = "Disconnected");
      })(r || (r = {}));
      var g = "VNC_PASSWORD";
      function O(t) {
        var e = t.fs,
          i = t.container,
          u = d.useState(null),
          O = Object(s.a)(u, 2),
          m = O[0],
          y = O[1],
          w = d.useState(void 0),
          x = Object(s.a)(w, 2),
          E = x[0],
          k = x[1],
          S = d.useState(r.Connecting),
          C = Object(s.a)(S, 2),
          _ = C[0],
          L = C[1],
          N = d.useState(null),
          I = Object(s.a)(N, 2),
          A = I[0],
          P = I[1],
          T = d.useState(!1),
          R = Object(s.a)(T, 2),
          M = R[0],
          D = R[1],
          V = d.useState(!1),
          W = Object(s.a)(V, 2),
          U = W[0],
          F = W[1],
          z = d.useState(null),
          G = Object(s.a)(z, 2),
          H = G[0],
          K = G[1];
        Object(h.track)(h.events.VNC_OPENED),
          d.useEffect(
            function () {
              if (i.getConnectionState() !== j.a.CONNECTED)
                return i.onConnectionStateChanged(function (t) {
                  t === j.a.CONNECTED && K(i.getVncUrl());
                });
              K(i.getVncUrl());
            },
            [i]
          );
        var q = d.useState(null),
          X = Object(s.a)(q, 2),
          $ = X[0],
          B = X[1],
          J = d.useRef(function () {
            return null;
          });
        d.useEffect(
          function () {
            J.current();
          },
          [$]
        );
        var Z = Object(b.a)(
            function (t) {
              return B(
                t.width && t.height
                  ? { width: t.width, height: t.height }
                  : null
              );
            },
            { type: "throttle", wait: 100 }
          ),
          Q = d.useRef(function (t) {});
        return (
          d.useEffect(
            function () {
              Q.current(U);
            },
            [U]
          ),
          d.useEffect(
            function () {
              if (!m) {
                var t = !1;
                return (
                  n
                    .e(156)
                    .then(n.t.bind(null, "xWqp", 7))
                    .then(function (e) {
                      t || y(e);
                    }),
                  function () {
                    t = !0;
                  }
                );
              }
            },
            [m]
          ),
          d.useEffect(
            function () {
              if (H && A && m) {
                var t = !1,
                  n = m.default,
                  o = i.getConnectionMetadata(),
                  s = {
                    credentials: {
                      username: null === o || void 0 === o ? void 0 : o.token,
                      password: E || "",
                    },
                  };
                Object(h.track)(h.events.VNC_CONNECTED);
                var u = new n(A, H, s);
                (u.scaleViewport = !0), (u.resizeSession = !0);
                var l = function () {
                    t || L(r.Connected);
                  },
                  d = function (t) {
                    var e = t.detail.capabilities.audio;
                    D(void 0 !== window.MediaSource && !!e);
                  },
                  f = function () {
                    t || L(r.Disconnected);
                  },
                  b = function () {
                    if (!t) {
                      var n = function () {
                        var t = window.prompt(
                          "The output is password protected, please input it:"
                        );
                        t && k(t);
                      };
                      (function () {
                        var r = Object(c.a)(
                          a.a.mark(function r() {
                            var o, i, c;
                            return a.a.wrap(function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (r.next = 2), e.readFile(".env");
                                  case 2:
                                    if (((o = r.sent), !t)) {
                                      r.next = 5;
                                      break;
                                    }
                                    return r.abrupt("return");
                                  case 5:
                                    if (!o.error) {
                                      r.next = 8;
                                      break;
                                    }
                                    return n(), r.abrupt("return");
                                  case 8:
                                    if (
                                      ((i = o.content.toString("utf8")),
                                      (c = Object(v.a)(i)),
                                      g in c)
                                    ) {
                                      r.next = 13;
                                      break;
                                    }
                                    return n(), r.abrupt("return");
                                  case 13:
                                    k(c.VNC_PASSWORD);
                                  case 14:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                          })
                        );
                        return function () {
                          return r.apply(this, arguments);
                        };
                      })()().catch(function (t) {
                        return p.c(t);
                      });
                    }
                  };
                return (
                  u.addEventListener("connect", l),
                  u.addEventListener("capabilities", d),
                  u.addEventListener("disconnect", f),
                  u.addEventListener("securityfailure", b),
                  (J.current = function () {
                    return u._windowResize();
                  }),
                  D(!1),
                  F(!1),
                  (Q.current = function (t) {
                    t
                      ? (Object(h.track)(h.events.VNC_AUDIO_ENABLED),
                        u.enableAudio(
                          2,
                          window.MediaSource.isTypeSupported(
                            "audio/webm;codecs=opus"
                          )
                            ? n.audioCodecs.OpusWebM
                            : n.audioCodecs.MP3,
                          32768
                        ))
                      : u.disableAudio();
                  }),
                  function () {
                    (t = !0),
                      (J.current = function () {
                        return null;
                      }),
                      (Q.current = function (t) {}),
                      u.disconnect(),
                      u.removeEventListener("securityfailure", b),
                      u.removeEventListener("disconnect", f),
                      u.removeEventListener("capabilities", d),
                      u.removeEventListener("connect", l);
                  }
                );
              }
            },
            [m, A, i, H, e, E]
          ),
          Object(o.jsxs)("div", {
            className: "jsx-3872500966 vnc",
            children: [
              M
                ? Object(o.jsxs)("label", {
                    className: "jsx-3872500966 vnc-audio",
                    children: [
                      "\ud83c\udfa7",
                      " ",
                      Object(o.jsx)("input", {
                        type: "checkbox",
                        checked: U,
                        onChange: function (t) {
                          return F(t.target.checked);
                        },
                        className: "jsx-3872500966",
                      }),
                    ],
                  })
                : null,
              Object(o.jsx)("div", {
                ref: function (t) {
                  Z(t), P(t);
                },
                className: "jsx-3872500966 vnc-target",
              }),
              _ !== r.Connected &&
                Object(o.jsx)("div", {
                  className: "jsx-3872500966 vnc-overlay",
                  children: Object(o.jsx)(f.a, {}),
                }),
              Object(o.jsx)(l.a, {
                id: "3872500966",
                children: [
                  ".vnc.jsx-3872500966{position:relative;}",
                  ".vnc.jsx-3872500966,.vnc-target.jsx-3872500966{height:100%;width:100%;}",
                  ".vnc-audio.jsx-3872500966{position:absolute;bottom:0;right:0;padding:0.2em;}",
                  ".vnc-overlay.jsx-3872500966{top:0;position:absolute;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:rgba(0,0,0,0.85);color:white;}",
                ],
              }),
            ],
          })
        );
      }
    },
    imBe: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return v;
      });
      var r = n("nKUr"),
        o = n("xEHj"),
        i = n("H+61"),
        a = n("UlJF"),
        c = n("7LId"),
        s = n("VIvw"),
        u = n("iHvq"),
        l = n("MX0m"),
        d = n.n(l),
        p = n("q1tI"),
        f = n("A3V5"),
        b = n.n(f);
      function h(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(u.a)(t);
          if (e) {
            var o = Object(u.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(s.a)(this, n);
        };
      }
      var v = (function (t) {
        Object(c.a)(n, t);
        var e = h(n);
        function n() {
          var t;
          Object(i.a)(this, n);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(o))).state = { hover: !1 }),
            (t.onMouseEnter = function (e) {
              t.props.onMouseEnter && t.props.onMouseEnter(e),
                t.setState({ hover: !0 });
            }),
            (t.onMouseLeave = function (e) {
              t.props.onMouseLeave && t.props.onMouseLeave(e),
                t.setState({ hover: !1 });
            }),
            (t.onClick = function (e) {
              t.props.onClick && t.props.onClick(e),
                t.props.hideOnClick && t.setState({ hover: !1 });
            }),
            t
          );
        }
        return (
          Object(a.a)(n, [
            {
              key: "render",
              value: function () {
                var t = this.props.position || "right",
                  e =
                    !this.props.hideTooltip &&
                    (this.props.showTooltip || this.state.hover),
                  n = p.Children.toArray(this.props.children),
                  i = Object(o.a)(n),
                  a = i[0],
                  c = i.slice(1),
                  s = p.cloneElement(a, {
                    key: "tooltip",
                    className: "tooltip-wrap-tooltip tooltip-wrap-".concat(t),
                    style: a.props.style,
                  });
                return Object(r.jsxs)("div", {
                  style: this.props.style,
                  onClick: this.onClick,
                  className: "jsx-4267586957 tooltip-base",
                  children: [
                    e && [
                      Object(r.jsx)(
                        "div",
                        {
                          className:
                            "jsx-4267586957 " +
                            "tooltip-handle tooltip-handle-".concat(t),
                          children: Object(r.jsx)(b.a, {
                            size: 10,
                            direction: j[t],
                            borderWidth: this.props.arrowBorderWidth,
                            color: "var(--color-background-1)",
                            borderColor: "var(--color-foreground-3)",
                          }),
                        },
                        "handle"
                      ),
                      s,
                    ],
                    Object(r.jsx)("div", {
                      style: this.props.wrapperStyle,
                      onMouseEnter: this.onMouseEnter,
                      onMouseLeave: this.onMouseLeave,
                      className: "jsx-4267586957",
                      children: c,
                    }),
                    Object(r.jsx)(d.a, {
                      id: "3051118086",
                      children: [
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-tooltip{border:1px solid var(--color-foreground-3);background-color:var(--color-background-1);color:var(--color-foreground-1);}",
                      ],
                    }),
                    Object(r.jsx)(d.a, {
                      id: "1093755106",
                      children: [
                        ".tooltip-base.jsx-4267586957{position:relative;}",
                        ".tooltip-handle.jsx-4267586957{position:absolute;height:10px;width:16px;z-index:1011;}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-tooltip{padding:12px;border-radius:1px;box-sizing:border-box;position:absolute;z-index:1010;font-size:14px;line-height:18px;white-space:nowrap;}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-top{left:-100%;bottom:calc(100% + 23px);-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-right{top:50%;left:calc(100% + 14px);-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-topRight{right:calc(20% - 4px);bottom:calc(100% + 23px);}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-bottom{left:calc(50% + 2px);top:calc(100% + 13px);-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-left{top:50%;right:calc(100% + 14px);-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}",
                        ".tooltip-handle-top.jsx-4267586957{bottom:100%;left:50%;-webkit-transform:translate(-50%,-19px);-ms-transform:translate(-50%,-19px);transform:translate(-50%,-19px);}",
                        ".tooltip-handle-right.jsx-4267586957{top:50%;left:100%;-webkit-transform:translate(4px,-108%);-ms-transform:translate(4px,-108%);transform:translate(4px,-108%);}",
                        ".tooltip-handle-topRight.jsx-4267586957{bottom:100%;left:50%;-webkit-transform:translate(calc(-50% - 4px),-17px);-ms-transform:translate(calc(-50% - 4px),-17px);transform:translate(calc(-50% - 4px),-17px);}",
                        ".tooltip-handle-bottom.jsx-4267586957{top:100%;left:50%;-webkit-transform:translate(-50%,-2px);-ms-transform:translate(-50%,-2px);transform:translate(-50%,-2px);}",
                        ".tooltip-handle-left.jsx-4267586957{top:50%;right:100%;-webkit-transform:translate(1px,-108%);-ms-transform:translate(1px,-108%);transform:translate(1px,-108%);}",
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(p.Component);
      v.defaultProps = {
        position: "right",
        onMouseEnter: function () {},
        onMouseLeave: function () {},
        arrowBorderColor: "#ecedec",
        arrowBorderWidth: 1,
      };
      var j = {
        top: "bottom",
        bottom: "top",
        right: "left",
        topRight: "bottom",
        left: "right",
      };
    },
    uMio: function (t, e, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = n("3CEA"),
        c = n("V6K1"),
        s = n("IdsG"),
        u = n("up5I"),
        l = n("xom/"),
        d = n("8Vt8");
      e.a = function (t) {
        var e = t.sentryEventId,
          n = t.user;
        t.devHide;
        return Object(r.jsx)(d.a, {
          width: "medium",
          isOpen: !0,
          preventClose: !0,
          onRequestClose: function () {},
          children: Object(r.jsxs)("div", {
            className: "jsx-2822044346 modal-content",
            children: [
              Object(r.jsxs)(l.b, {
                spacing: 2,
                align: "center",
                children: [
                  Object(r.jsx)(c.a, {
                    level: 2,
                    children: " The IDE is having a bit of trouble.",
                  }),
                  Object(r.jsx)("div", { className: "jsx-2822044346 spacer" }),
                  Object(r.jsx)(s.a, {
                    size: "large",
                    children:
                      "Parts of the IDE are not working correctly. Try reloading the page to get back to coding.",
                  }),
                  Object(r.jsx)("div", { className: "jsx-2822044346 spacer" }),
                  Object(r.jsx)(u.a, {
                    onClick: function () {
                      return window.location.reload();
                    },
                    color: "primary",
                    filled: !0,
                    fullWidth: !0,
                    children: "reload",
                  }),
                  e &&
                    Object(r.jsx)(u.a, {
                      onClick: function () {
                        a.h({
                          eventId: e,
                          title: "We are deeply sorry about what happened!",
                          subtitle: "Help us figure out what went wrong",
                          subtitle2: "",
                          labelComments:
                            "What were you doing before you saw this crash?",
                          user: n,
                          labelName: "Username",
                        });
                      },
                      children: "\ud83d\udcdd report this error",
                    }),
                  !1,
                ],
              }),
              Object(r.jsx)(i.a, {
                id: "2822044346",
                children: [
                  ".modal-content.jsx-2822044346{padding:var(--spacing-4);}",
                  ".sentry-error-embed-wrapper{z-index:300000 !important;}",
                ],
              }),
            ],
          }),
        });
      };
    },
  },
]);
