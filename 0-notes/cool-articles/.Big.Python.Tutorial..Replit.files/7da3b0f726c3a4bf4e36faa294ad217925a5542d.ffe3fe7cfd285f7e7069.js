(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [23],
  {
    "8/ze": function (e, t, r) {
      "use strict";
      r.d(t, "a", () => {
        return n;
      });
      var n = ".";
    },
    "8v8i": function (e, t, r) {
      "use strict";
      let n, o, i, a, c, s;
      r.d(t, "a", () => {
        return n;
      }),
        r.d(t, "b", () => {
          return o;
        }),
        r.d(t, "d", () => {
          return i;
        }),
        r.d(t, "e", () => {
          return a;
        }),
        r.d(t, "c", () => {
          return s;
        }),
        ((e) => {
          (e.Create = "CREATE"),
            (e.Move = "MOVE"),
            (e.Delete = "DELETE"),
            (e.Modify = "MODIFY");
        })(n || (n = {})),
        ((e) => {
          (e.Local = "LOCAL"), (e.Container = "CONTAINER");
        })(o || (o = {})),
        ((e) => {
          (e.File = "FILE"), (e.Directory = "DIRECTORY");
        })(i || (i = {})),
        ((e) => {
          (e.NotFound = "NOT_FOUND"),
            (e.AlreadyExists = "ALREADY_EXIST"),
            (e.NotDirectory = "NOT_DIRECTORY"),
            (e.IsDirectory = "IS_DIRECTORY");
        })(a || (a = {})),
        ((e) => {
          (e.Offline = "OFFLINE"),
            (e.Loading = "LOADING"),
            (e.Syncing = "SYNCING"),
            (e.Clean = "CLEAN"),
            (e.Error = "ERROR");
        })(c || (c = {})),
        ((e) => {
          (e.Dirty = "DIRTY"), (e.Syncing = "SYNCING"), (e.Clean = "CLEAN");
        })(s || (s = {}));
    },
    HtvZ(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r("Z5Wq"),
            o = (e) => {
              if (!Array.isArray(e))
                throw Error("Op must be an array of components");
              for (var t = null, r = 0; r < e.length; r++) {
                const n = e[r];
                switch (typeof n) {
                  case "object":
                    if (!("number" === typeof n.d && n.d > 0))
                      throw Error("Object components must be deletes of size > 0");
                    break;
                  case "string":
                    if (!(n.length > 0)) throw Error("Inserts cannot be empty");
                    break;
                  case "number":
                    if (!(n > 0)) throw Error("Skip components must be >0");
                    if ("number" === typeof t)
                      throw Error("Adjacent skip components should be combined");
                }
                t = n;
              }
              if ("number" === typeof t) throw Error("Op has a trailing skip");
            },
            i = (e) => {
              for (var t = [], r = a(t), n = 0; n < e.length; n++) r(e[n]);
              return u(t);
            },
            a = (e) => {
              return (t) => {
                t &&
                  0 !== t.d &&
                  (0 === e.length
                    ? e.push(t)
                    : typeof t === typeof e[e.length - 1]
                    ? "object" === typeof t
                      ? (e[e.length - 1].d += t.d)
                      : (e[e.length - 1] += t)
                    : e.push(t));
              };
            },
            c = (e) => {
              return "number" === typeof e
                ? e
                : "string" === typeof e
                ? n.strPosToUni(e)
                : e.d;
            },
            s = (e) => {
              let t = 0, r = 0;
              return {
                take(o, i) {
                  if (t === e.length) return -1 === o ? null : o;
                  let a;
                  const c = e[t];
                  if ("number" === typeof c)
                    return -1 === o || c - r <= o
                      ? ((a = c - r), ++t, (r = 0), a)
                      : ((r += o), o);
                  if ("string" === typeof c) {
                    if (-1 === o || "i" === i || n.strPosToUni(c.slice(r)) <= o)
                      return (a = c.slice(r)), ++t, (r = 0), a;
                    const s = r + n.uniToStrPos(c.slice(r), o);
                    return (a = c.slice(r, s)), (r = s), a;
                  }
                  return -1 === o || "d" === i || c.d - r <= o
                    ? ((a = { d: c.d - r }), ++t, (r = 0), a)
                    : ((r += o), { d: o });
                },
                peek() {
                  return e[t];
                },
              };
            },
            u = (e) => {
              return (
                e.length > 0 && "number" === typeof e[e.length - 1] && e.pop(), e
              );
            };
      function l(e, t, r) {
        if ("left" !== r && "right" !== r)
          throw Error("side (" + r + ") must be 'left' or 'right'");
        o(e), o(t);
        for (
          var i, l = [], f = a(l), p = s(e), d = p.take, h = p.peek, b = 0;
          b < t.length;
          b++
        ) {
          const v = t[b];
          let g = void 0;
          let m = void 0;
          switch (typeof v) {
            case "number":
              for (g = v; g > 0; )
                f((m = d(g, "i"))), "string" !== typeof m && (g -= c(m));
              break;
            case "string":
              "left" === r && "string" === typeof h() && f(d(-1)),
                f(n.strPosToUni(v));
              break;
            case "object":
              for (g = v.d; g > 0; )
                switch (typeof (m = d(g, "i"))) {
                  case "number":
                    g -= m;
                    break;
                  case "string":
                    f(m);
                    break;
                  case "object":
                    g -= m.d;
                }
          }
        }
        for (; (i = d(-1)); ) f(i);
        return u(l);
      }
      function f(e, t) {
        o(e), o(t);
        for (var r, i = [], l = a(i), f = s(e).take, p = 0; p < t.length; p++) {
          const d = t[p];
          let h = void 0;
          let b = void 0;
          switch (typeof d) {
            case "number":
              for (h = d; h > 0; )
                l((b = f(h, "d"))), "object" !== typeof b && (h -= c(b));
              break;
            case "string":
              l(d);
              break;
            case "object":
              for (h = d.d; h > 0; )
                switch (typeof (b = f(h, "d"))) {
                  case "number":
                    l({ d: b }), (h -= b);
                    break;
                  case "string":
                    h -= n.strPosToUni(b);
                    break;
                  case "object":
                    l(b);
                }
          }
        }
        for (; (r = f(-1)); ) l(r);
        return u(i);
      }
      const p = (e, t) => {
                for (let r = 0, o = 0; o < t.length && e > r; o++) {
                  const i = t[o];
                  switch (typeof i) {
                    case "number":
                      r += i;
                      break;
                    case "string":
                      const a = n.strPosToUni(i);
                      (r += a), (e += a);
                      break;
                    case "object":
                      e -= Math.min(i.d, e - r);
                  }
                }
                return e;
              },
            d = (e, t) => {
              return "number" === typeof e
                ? p(e, t)
                : e.map((e) => {
                    return p(e, t);
                  });
            };
      t.default = (e) => {
        return {
          name: "text-unicode",
          uri: "http://sharejs.org/types/text-unicode",
          trim: u,
          normalize: i,
          checkOp: o,
          create() {
            const t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            if ("string" !== typeof t)
              throw Error("Initial data must be a string");
            return e.create(t);
          },
          apply(t, r) {
            o(r);
            for (var n = e.builder(t), i = 0; i < r.length; i++) {
              const a = r[i];
              switch (typeof a) {
                case "number":
                  n.skip(a);
                  break;
                case "string":
                  n.append(a);
                  break;
                case "object":
                  n.del(a.d);
              }
            }
            return n.build();
          },
          transform: l,
          compose: f,
          transformPosition: p,
          transformSelection: d,
        };
      };
    },
    "LI1+": function (e, t, r) {
      "use strict";
      r.d(t, "c", () => {
        return m;
      }),
        r.d(t, "a", () => {
          return y;
        }),
        r.d(t, "b", () => {
          return O;
        });
      const n = r("nKUr"), o = r("xvhg"), i = r("MX0m"), a = r.n(i), c = r("q1tI"), s = r("HADy"), u = r("4A0d");
      function l(e, t) {
        let r;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = ((e, t) => {
              if (!e) return;
              if ("string" === typeof e) return f(e, t);
              let r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return f(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            let n = 0;
            const o = () => {};
            return {
              s: o,
              n() {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e(e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let i, a = !0, c = !1;
        return {
          s() {
            r = e[Symbol.iterator]();
          },
          n() {
            const e = r.next();
            return (a = e.done), e;
          },
          e(e) {
            (c = !0), (i = e);
          },
          f() {
            try {
              a || null == r.return || r.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      const p = r("YuJD"),
            d = r("up5I"),
            h = r("DgdK"),
            b = r("5zsw"),
            v = r("xom/"),
            g = (e, t) => {
              const r = e.runner,
                    i = e.packager,
                    f = e.languageHeader,
                    d = e.onClear,
                    h = ((e) => {
                      const t = e.runner, r = e.packager, n = e.languageHeader, i = Object(u.a)(), a = Object(o.a)(i, 2), f = a[0], p = a[1], d = c.useState(""), h = Object(o.a)(d, 2), b = h[0], v = h[1];
                      return c.useEffect(() => {
                        if (!f)
                          return t.onOutput((e) => {
                            return v((t) => {
                              return t + e;
                            });
                          });
                      }, [f, t, v]),
                      c.useEffect(() => {
                        if (!f && r)
                          return r.onOutput((e) => {
                            return v((t) => {
                              return t + e.replace(/\n/g, "\n\r");
                            });
                          });
                      }, [f, r, v]),
                      c.useEffect(() => {
                        if (f && r)
                          return r.onOutput((e) => {
                            return f.write(e.replace(/\n/g, "\n\r"));
                          });
                      }, [f, r]),
                      c.useEffect(() => {
                        b && f && (f.write(b), v(""));
                      }, [f, b]),
                      c.useEffect(() => {
                        n &&
                          v((e) => {
                            return e + "".concat(n.replace(/\n/g, "\n\r"), "\n\r");
                          });
                      }, [n, v]),
                      c.useEffect(() => {
                        if (f) {
                          const e = () => {
                                    t.getRunState() !== s.b.OFFLINE &&
                                      t.resizeTerminal(f.getSize());
                                  },
                                r = [];
                          r.push(f.onResize(e).dispose);
                          let n = [];
                          r.push(
                            f.onData((e) => {
                              t.getRunState() !== s.b.OFFLINE
                                ? t.sendInput(e)
                                : n.push(e);
                            }).dispose
                          ),
                            r.push(
                              t.onOutput((e) => {
                                f.write(e);
                              })
                            );
                          let o = !1;
                          return r.push(
                            t.onStateChanged((r) => {
                              if (r !== s.b.OFFLINE) {
                                if ((o || (e(), (o = !0)), n.length)) {
                                  let i;
                                  const a = l(n);
                                  try {
                                    for (a.s(); !(i = a.n()).done; ) {
                                      const c = i.value;
                                      t.sendInput(c);
                                    }
                                  } catch (u) {
                                    a.e(u);
                                  } finally {
                                    a.f();
                                  }
                                  n = [];
                                }
                              } else o = !1;
                            })
                          ),
                          t.getRunState() !== s.b.OFFLINE && (e(), (o = !0)),
                          () => {
                            r.forEach((e) => {
                              return e();
                            });
                          }
                        ;
                        }
                      }, [f, t]),
                      [f, p]
                    ;
                    })({ runner: r, packager: i, languageHeader: f }),
                    b = Object(o.a)(h, 2),
                    g = b[0],
                    x = b[1],
                    w = c.useState(!1),
                    j = Object(o.a)(w, 2),
                    k = j[0],
                    E = j[1];
              return (
                c.useImperativeHandle(t, () => {
                  return {
                    clear() {
                      g && g.clear();
                    },
                  };
                }),
                Object(n.jsxs)("div", {
                  onKeyDown(e) {
                    "f" === e.key &&
                      Object(p.b)(e) &&
                      !e.shiftKey &&
                      (E(!0), e.preventDefault());
                  },
                  className: "jsx-3520147872 replit-ui-theme-root dark terminal",
                  children: [
                    Object(n.jsx)("div", {
                      className: "jsx-3520147872 controls",
                      children: Object(n.jsxs)(v.a, {
                        align: "center",
                        wrap: "nowrap",
                        children: [
                          k && g
                            ? Object(n.jsx)(m, {
                                findPrevious: g.findPrevious,
                                findNext: g.findNext,
                                exit() {
                                  return E(!1);
                                },
                              })
                            : Object(n.jsx)(O, {
                                onClick() {
                                  return E(!0);
                                },
                              }),
                          Object(n.jsx)(y, {
                            onClick() {
                              g &&
                                (g.clear(),
                                d && d(),
                                f &&
                                  g.write(
                                    "".concat(f.replace(/\n/g, "\n\r"), "\n\r")
                                  ),
                                g.focus());
                            },
                          }),
                        ],
                      }),
                    }),
                    Object(n.jsx)("div", {
                      ref: x,
                      className: "jsx-3520147872 xterm-container",
                    }),
                    Object(n.jsx)(a.a, {
                      id: "3520147872",
                      children: [
                        ".terminal.jsx-3520147872{height:100%;width:100%;position:relative;background-color:var(--color-brand-dark-blue);border-radius:var(--border-radius-1);}",
                        ".controls.jsx-3520147872{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;top:var(--spacing-1);right:var(--spacing-1);z-index:100;min-height:30px;}",
                        ".xterm-container.jsx-3520147872{height:100%;overflow:auto;}",
                        ".xterm-container.jsx-3520147872 .xterm{height:100%;padding:var(--spacing-2) var(--spacing-2) var(--spacing-half);}",
                        ".xterm-container.jsx-3520147872 .xterm-viewport{overflow-y:auto !important;border-radius:var(--border-radius-1);}",
                      ],
                    }),
                  ],
                })
              );
            };
      t.d = c.forwardRef(g);
      function m(e) {
        const t = e.findNext, r = e.findPrevious, i = e.exit, s = c.useRef(null), u = c.useState(""), l = Object(o.a)(u, 2), f = l[0], p = l[1];
        c.useEffect(() => {
          s.current && s.current.focus();
        }, []);
        return Object(n.jsxs)("div", {
          className: "jsx-2844282466 search",
          children: [
            Object(n.jsx)("input", {
              ref: s,
              placeholder: "Find",
              value: f,
              onChange(e) {
                return p(e.target.value);
              },
              onKeyDown(e) {
                return ((e) => {
                  "Escape" !== e.key
                    ? "Enter" === e.key && (e.shiftKey ? r(f) : t(f))
                    : i();
                })(e);
              },
              className: "jsx-2844282466",
            }),
            Object(n.jsx)(d.a, {
              size: "small",
              onClick() {
                return t(f);
              },
              children: "Next",
            }),
            Object(n.jsx)(d.a, {
              size: "small",
              onClick() {
                return r(f);
              },
              children: "Previous",
            }),
            Object(n.jsx)(d.a, { size: "small", onClick: i, children: "Exit" }),
            Object(n.jsx)(a.a, {
              id: "2844282466",
              children: [
                ".search.jsx-2844282466{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30px;}",
                "input.jsx-2844282466{padding:4px var(--spacing-1) var(--spacing-half);background-color:var(--color-background-1);color:var(--color-white);height:24px;width:85px;border:none;border-radius:var(--border-radius-1);box-shadow:none;}",
                "input.jsx-2844282466::-webkit-input-placeholder{color:var(--color-white);}",
                "input.jsx-2844282466::-moz-placeholder{color:var(--color-white);}",
                "input.jsx-2844282466:-ms-input-placeholder{color:var(--color-white);}",
                "input.jsx-2844282466::placeholder{color:var(--color-white);}",
                "input.jsx-2844282466:focus{outline:none;border:var(--color-primary-1);}",
                "input.jsx-2844282466,.search button{margin:0 var(--spacing-half);}",
              ],
            }),
          ],
        });
      }
      var y = (e) => {
          const t = e.onClick;
          return Object(n.jsxs)("button", {
            "aria-label": "Clear",
            "data-microtip-position": "bottom-left",
            role: "tooltip",
            onClick: t,
            className: "jsx-616918215",
            children: [
              Object(n.jsx)(b.a, { size: "medium" }),
              Object(n.jsx)(a.a, {
                id: "616918215",
                children: [
                  "button.jsx-616918215{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:var(--border-radius-1);padding:var(--spacing-half);background-color:var(--color-brand-dark-blue);color:var(--color-foreground-1);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;border:none;cursor:pointer;}",
                  "button.jsx-616918215:hover{background-color:var(--color-control-2);}",
                  "button.jsx-616918215:focus{outline:none;}",
                ],
              }),
            ],
          });
        },
        O = (e) => {
          const t = e.onClick;
          return Object(n.jsxs)("button", {
            "aria-label": "Search",
            "data-microtip-position": "bottom",
            role: "tooltip",
            onClick: t,
            className: "jsx-616918215",
            children: [
              Object(n.jsx)(h.a, { size: "medium" }),
              Object(n.jsx)(a.a, {
                id: "616918215",
                children: [
                  "button.jsx-616918215{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:var(--border-radius-1);padding:var(--spacing-half);background-color:var(--color-brand-dark-blue);color:var(--color-foreground-1);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;border:none;cursor:pointer;}",
                  "button.jsx-616918215:hover{background-color:var(--color-control-2);}",
                  "button.jsx-616918215:focus{outline:none;}",
                ],
              }),
            ],
          });
        };
    },
    NuhN(e, t, r) {
      "use strict";
      r.d(t, "a", () => {
        return n;
      }),
        r.d(t, "e", () => {
          return o;
        }),
        r.d(t, "d", () => {
          return i;
        }),
        r.d(t, "c", () => {
          return a;
        }),
        r.d(t, "b", () => {
          return c;
        }),
        r.d(t, "g", () => {
          return s;
        }),
        r.d(t, "f", () => {
          return u;
        });
      function n(e) {
        return "" === e || e.endsWith("/") ? e : e + "/";
      }
      function o(e, t) {
        return Object.keys(e).filter((e) => {
          return i(t, e);
        });
      }
      function i(e, t) {
        return t !== e && t.startsWith(n(e));
      }
      function a(e, t) {
        return Object.keys(e).filter((e) => {
          return c(t, e);
        });
      }
      function c(e, t) {
        if (!i(e, t)) return !1;
        const r = n(e);
        let o = t.slice(r.length);
        return o.endsWith("/") && (o = o.slice(-1)), !o.includes("/");
      }
      function s(e, t, r) {
        const n = o(e, t).map((e) => {
          return [e, u(t, r, e)];
        });
        return "undefined" !== typeof e[t] && n.unshift([t, r]), n;
      }
      function u(e, t, r) {
        const o = n(e);
        return n(t) + r.slice(o.length);
      }
    },
    VOEV(e, t, r) {
      "use strict";
      r.d(t, "a", () => {
        return J;
      });
      const n = r("vJKn"),
            o = r.n(n),
            i = r("rg98"),
            a = r("cpVT"),
            c = r("z7pX"),
            s = r("gfZM"),
            u = r("8v8i"),
            l = r("dI/k"),
            f = r("NuhN"),
            p = r("8/ze"),
            d = r("5/z4"),
            h = r("H+61"),
            b = r("UlJF"),
            v = r("+Css"),
            g = r("7LId"),
            m = r("VIvw"),
            y = r("iHvq"),
            O = r("+qE3"),
            x = r("cC09"),
            w = r("cHV+"),
            j = r("9/5/"),
            k = r.n(j),
            E = r("Z5Wq"),
            C = r("zgDP"),
            T = r("xvhg"),
            S = r("Yk1I"),
            D = r.n(S),
            R = (e) => {
              if (!Array.isArray(e))
                throw Error("Op must be an array of components");
              for (var t = null, r = 0; r < e.length; r++) {
                const n = e[r];
                switch (typeof n) {
                  case "object":
                    if (!("number" === typeof n.d && n.d > 0))
                      throw Error("Object components must be deletes of size > 0");
                    break;
                  case "string":
                    if (!(n.length > 0)) throw Error("Inserts cannot be empty");
                    break;
                  case "number":
                    if (!(n > 0)) throw Error("Skip components must be >0");
                    if ("number" === typeof t)
                      throw Error("Adjacent skip components should be combined");
                }
                t = n;
              }
              if ("number" === typeof t) throw Error("Op has a trailing skip");
            },
            N = (e) => {
              return "number" === typeof e
                ? e
                : "string" === typeof e
                ? e.length
                : e.d;
            };
      function A(e, t) {
        R(e), R(t);
        for (
          var r,
            n,
            o = [],
            i =
              ((r = o),
              (e) => {
                e &&
                  0 !== e.d &&
                  (0 === r.length
                    ? r.push(e)
                    : typeof e === typeof r[r.length - 1]
                    ? "object" === typeof e
                      ? (r[r.length - 1].d += e.d)
                      : (r[r.length - 1] += e)
                    : r.push(e));
              }),
            a = ((e) => {
              let t = 0, r = 0;
              return [
                (n, o) => {
                  if (t === e.length) return -1 === n ? null : n;
                  let i;
                  const a = e[t];
                  return "number" === typeof a
                    ? -1 === n || a - r <= n
                      ? ((i = a - r), ++t, (r = 0), i)
                      : ((r += n), n)
                    : "string" === typeof a
                    ? -1 === n || "i" === o || a.length - r <= n
                      ? ((i = a.slice(r)), ++t, (r = 0), i)
                      : ((i = a.slice(r, r + n)), (r += n), i)
                    : -1 === n || "d" === o || a.d - r <= n
                    ? ((i = { d: a.d - r }), ++t, (r = 0), i)
                    : ((r += n), { d: n });
                },
                () => {
                  return e[t];
                },
              ];
            })(e)[0],
            c = 0;
          c < t.length;
          c++
        ) {
          const s = t[c];
          let u = void 0;
          let l = void 0;
          switch (typeof s) {
            case "number":
              for (u = s; u > 0; )
                (l = a(u, "d")) && i(l), "object" !== typeof l && (u -= N(l));
              break;
            case "string":
              i(s);
              break;
            case "object":
              for (u = s.d; u > 0; )
                switch (typeof (l = a(u, "d"))) {
                  case "number":
                    i({ d: l }), (u -= l);
                    break;
                  case "string":
                    u -= l.length;
                    break;
                  case "object":
                    l && i(l);
                }
          }
        }
        for (; (n = a(-1)); ) i(n);
        return ((e) => {
          return (
            e.length > 0 && "number" === typeof e[e.length - 1] && e.pop(), e
          );
        })(o);
      }
      function I(e, t) {
        if (e === t) return [];
        const r = [],
              n = (e) => {
                e &&
                  0 !== e.d &&
                  (0 === r.length
                    ? r.push(e)
                    : typeof e === typeof r[r.length - 1]
                    ? "object" === typeof e
                      ? (r[r.length - 1].d += e.d)
                      : (r[r.length - 1] += e)
                    : r.push(e));
              };
        return D()(e, t).forEach((e) => {
          const t = Object(T.a)(e, 2), r = t[0], o = t[1];
          switch (r) {
            case D.a.INSERT:
              n(o);
              break;
            case D.a.DELETE:
              n({ d: o.length });
              break;
            case D.a.EQUAL:
              n(o.length);
          }
        }),
        r.length > 0 && "number" === typeof r[r.length - 1] && r.pop(),
        r
      ;
      }
      function F(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function P(e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(r), !0).forEach((t) => {
                Object(a.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : F(Object(r)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _(e, t) {
        let r;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = ((e, t) => {
              if (!e) return;
              if ("string" === typeof e) return L(e, t);
              let r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return L(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            let n = 0;
            const o = () => {};
            return {
              s: o,
              n() {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: ((e) => {
                function t(t) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = () => {
                    return e.toString();
                  }),
                  t
                );
              })((e) => {
                throw e;
              }),
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let i, a = !0, c = !1;
        return {
          s() {
            r = e[Symbol.iterator]();
          },
          n() {
            const e = r.next();
            return (a = e.done), e;
          },
          e: ((e) => {
            function t(t) {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = () => {
                return e.toString();
              }),
              t
            );
          })((e) => {
            (c = !0), (i = e);
          }),
          f() {
            try {
              a || null == r.return || r.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function U(e) {
        const t = (() => {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          let r;
          const n = Object(y.a)(e);
          if (t) {
            const o = Object(y.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(m.a)(this, r);
        };
      }
      function M(e) {
        return e.map((e) => {
          if ("delete" in e && e.delete) return { d: e.delete };
          if ("skip" in e && e.skip) return e.skip;
          if ("insert" in e && "string" === typeof e.insert) return e.insert;
          throw new Error("Unexpected op type");
        });
      }
      const z = ((e) => {
        Object(g.a)(r, e);
        const t = U(r);
        function r(e, n) {
          let c;
          return Object(h.a)(this, r),
          (c = t.call(this)),
          Object(a.a)(Object(v.a)(c), "linkedFile", void 0),
          Object(a.a)(Object(v.a)(c), "channel", void 0),
          Object(a.a)(Object(v.a)(c), "destroy", void 0),
          Object(a.a)(Object(v.a)(c), "pending", void 0),
          Object(a.a)(Object(v.a)(c), "inflight", void 0),
          Object(a.a)(Object(v.a)(c), "inflightOpsPromise", void 0),
          Object(a.a)(Object(v.a)(c), "version", void 0),
          Object(a.a)(Object(v.a)(c), "otContents", void 0),
          Object(a.a)(Object(v.a)(c), "pendingCursors", void 0),
          Object(a.a)(Object(v.a)(c), "flushedCursorIds", void 0),
          Object(a.a)(Object(v.a)(c), "user", void 0),
          Object(a.a)(Object(v.a)(c), "debounceSend", void 0),
          Object(a.a)(Object(v.a)(c), "debounceCommit", void 0),
          Object(a.a)(Object(v.a)(c), "isCommitting", void 0),
          Object(a.a)(Object(v.a)(c), "resolveStatusOp", void 0),
          Object(a.a)(Object(v.a)(c), "isReconnecting", void 0),
          Object(a.a)(Object(v.a)(c), "uncommittedOps", void 0),
          Object(a.a)(Object(v.a)(c), "hasUncommittedMultiplayerOps", void 0),
          Object(a.a)(Object(v.a)(c), "committedVersion", void 0),
          Object(a.a)(Object(v.a)(c), "committedContent", void 0),
          Object(a.a)(Object(v.a)(c), "bufferedReconnectingOps", void 0),
          Object(a.a)(Object(v.a)(c), "didEditOffline", void 0),
          Object(a.a)(Object(v.a)(c), "reconnectTrackedData", void 0),
          Object(a.a)(Object(v.a)(c), "timeDisconnected", void 0),
          Object(a.a)(Object(v.a)(c), "writeOps", (e) => {
            if (!c.channel && !c.isReconnecting)
              throw new Error(
                "Trying to send changes before ever coming online"
              );
            c.isReconnecting && (c.didEditOffline = !0);
            let t = "";
            try {
              t = c.getLocalContent();
            } catch (f) {
              return void c.emit(
                "error",
                new Error("OT Error: unable to get local content"),
                { originalError: f }
              );
            }
            let r;
            let n = [];
            let o = 0;
            const i = _(e);
            try {
              for (i.s(); !(r = i.n()).done; ) {
                const a = r.value;
                switch (typeof a) {
                  case "number":
                    o += a;
                    break;
                  case "string":
                    const s = Object(E.strPosToUni)(t, o);
                    (n =
                      s > 0
                        ? w.type.compose(n, [s, a])
                        : w.type.compose(n, [a])),
                      (o += a.length);
                    break;
                  case "object":
                    const u = Object(E.strPosToUni)(t, o), l = Object(E.strPosToUni)(t, o + a.d) - u;
                    n =
                      u > 0
                        ? w.type.compose(n, [u, { d: l }])
                        : w.type.compose(n, [{ d: l }]);
                    break;
                  default:
                    return void c.emit(
                      "error",
                      new Error("OT Error: unknown op type")
                    );
                }
              }
            } catch (p) {
              i.e(p);
            } finally {
              i.f();
            }
            (c.pending = w.type.compose(c.pending, n)),
              0 !== c.pending.length
                ? c.emit("fileDirty")
                : c.isCommitting && c.emit("commitStart");
            try {
              c.getLocalContent();
            } catch (f) {
              c.emit(
                "error",
                new Error("OT Error: unable to get local content"),
                { originalError: f }
              );
            }
            c.debounceSend();
          }),
          Object(a.a)(Object(v.a)(c), "updateCursors", (e) => {
            (c.pendingCursors = e), c.debounceSend();
          }),
          Object(a.a)(Object(v.a)(c), "isClean", () => {
            return (
              c.committedVersion === c.version &&
              0 === c.inflight.length &&
              0 === c.pending.length
            );
          }),
          Object(a.a)(Object(v.a)(c), "sendOps", () => {
            if (
              c.channel &&
              "open" === c.channel.status &&
              !c.isReconnecting &&
              !(c.inflight.length > 0)
            ) {
              if (0 !== c.pending.length) {
                const e = c.pending.map((e) => {
                  return "object" === typeof e
                    ? { delete: e.d }
                    : "number" === typeof e
                    ? { skip: e }
                    : { insert: e };
                });
                (c.inflight = c.pending),
                  (c.pending = []),
                  (c.inflightOpsPromise = c.channel.request({
                    ot: { spookyVersion: c.version, ops: e },
                  })),
                  c.inflightOpsPromise.then((t) => {
                    t.error &&
                      c.emit(
                        "error",
                        new Error("OT Error: error accepting packet"),
                        { originalError: t.error, ops: e }
                      );
                  });
              }
              if (0 !== c.pendingCursors.length) {
                let t;
                const r = _(c.flushedCursorIds);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    const n = t.value;
                    c.channel.send({ otDeleteCursor: { id: n } });
                  }
                } catch (u) {
                  r.e(u);
                } finally {
                  r.f();
                }
                c.flushedCursorIds = [];
                let o;
                const i = _(c.pendingCursors);
                try {
                  for (i.s(); !(o = i.n()).done; ) {
                    const a = o.value,
                          s = Number(
                            Math.random().toString().split(".")[1]
                          ).toString(36);
                    c.flushedCursorIds.push(s),
                      c.channel.send({
                        otNewCursor: P({ id: s, user: c.user }, a),
                      });
                  }
                } catch (u) {
                  i.e(u);
                } finally {
                  i.f();
                }
                c.pendingCursors = [];
              }
            }
          }),
          Object(a.a)(Object(v.a)(c), "handlePacket", (e, t) => {
            let r = e.ops;
            const n = e.version;
            const o = e.crc32;
            const i = t.overrideReconnectringBuffer;
            if (c.resolveStatusOp)
              return (
                c.resolveStatusOp({ ops: r, version: n }),
                void (c.resolveStatusOp = null)
              );
            if (!c.isReconnecting || i)
              if (-1 !== c.version)
                if ((c.version++, n === c.version)) {
                  let a = "";
                  try {
                    a = w.type.apply(c.otContents, r);
                  } catch (O) {
                    return void c.emit(
                      "error",
                      new Error("OT Error: unable to apply updated content"),
                      { originalError: O, incomingOps: r }
                    );
                  }
                  const s = x.str(a) >>> 0;
                  if (s === o) {
                    if (
                      (c.uncommittedOps.push({
                        version: n,
                        crc32: o,
                        ops: r,
                      }),
                      JSON.stringify(r) === JSON.stringify(c.inflight))
                    )
                      return (
                        c.debounceCommit(),
                        (c.inflight = []),
                        (c.inflightOpsPromise = null),
                        (c.otContents = a),
                        c.debounceSend(),
                        void c.debounceSend.flush()
                      );
                    c.isCommitting || c.emit("fileDirty"),
                      c.debounceCommit(),
                      (c.hasUncommittedMultiplayerOps = !0);
                    let u = "";
                    try {
                      u = c.getLocalContent();
                    } catch (O) {
                      return void c.emit(
                        "error",
                        new Error("OT Error: unable to get local content"),
                        { originalError: O }
                      );
                    }
                    if (c.inflight.length) {
                      const l = w.type.transform(c.inflight, r, "right");
                      (r = w.type.transform(r, c.inflight, "left")),
                        (c.inflight = l);
                    }
                    if (c.pending.length) {
                      const f = w.type.transform(c.pending, r, "right");
                      (r = w.type.transform(r, c.pending, "left")),
                        (c.pending = f);
                    }
                    let p;
                    let d = [];
                    let h = 0;
                    const b = _(r);
                    try {
                      for (b.s(); !(p = b.n()).done; ) {
                        const v = p.value;
                        switch (typeof v) {
                          case "number":
                            h += v;
                            break;
                          case "string":
                            const g = Object(E.uniToStrPos)(u, h);
                            (d = A(d, g > 0 ? [g, v] : [v])),
                              (h += Object(E.strPosToUni)(v));
                            break;
                          case "object":
                            const m = Object(E.uniToStrPos)(u, h), y = Object(E.uniToStrPos)(u, h + v.d) - m;
                            d = A(d, m > 0 ? [m, { d: y }] : [{ d: y }]);
                            break;
                          default:
                            return void c.emit(
                              "error",
                              new Error("OT Error: unknown op type")
                            );
                        }
                      }
                    } catch (j) {
                      b.e(j);
                    } finally {
                      b.f();
                    }
                    (c.otContents = a), c.emit("op", d);
                  } else
                    c.emit("error", new Error("OT Error: crc32 mismatch"), {
                      server: o,
                      client: s,
                      incomingOps: r,
                    });
                } else
                  c.emit(
                    "error",
                    new Error("OT Error: invalid server version"),
                    {
                      expectedVersion: c.version,
                      receievedVersion: n,
                      incomingOps: r,
                    }
                  );
              else
                c.emit(
                  "error",
                  new Error(
                    "Got packet while version is still -1, expected version to be set in handleStatus"
                  )
                );
            else
              c.bufferedReconnectingOps.push({
                crc32: o,
                ops: r,
                version: n,
              });
          }),
          Object(a.a)(Object(v.a)(c), "handleNewCursor", (e) => {
            c.emit("cursor", e);
          }),
          Object(a.a)(Object(v.a)(c), "handleDeleteCursor", (e) => {
            const t = e.id;
            c.emit("removeCursor", t);
          }),
          Object(a.a)(
            Object(v.a)(c),
            "handleStatus",
            (() => {
              const e = Object(i.a)(
                o.a.mark(function e(t) {
                  let r, n, i, a, s, u;
                  return o.a.wrap((e) => {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (c.channel) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (!t.linkedFile) {
                            e.next = 23;
                            break;
                          }
                          if (null != t.contents) {
                            e.next = 6;
                            break;
                          }
                          return (
                            c.emit(
                              "error",
                              new Error(
                                "expected status contents,  got null or undefined"
                              )
                            ),
                            e.abrupt("return")
                          );
                        case 6:
                          if (null != t.cursors) {
                            e.next = 9;
                            break;
                          }
                          return (
                            c.emit(
                              "error",
                              new Error(
                                "expected status cursors, got null or undefined"
                              )
                            ),
                            e.abrupt("return")
                          );
                        case 9:
                          if (null != t.version) {
                            e.next = 12;
                            break;
                          }
                          return (
                            c.emit(
                              "error",
                              new Error(
                                "expected status version, got null or undefined"
                              )
                            ),
                            e.abrupt("return")
                          );
                        case 12:
                          if (!c.isReconnecting) {
                            e.next = 15;
                            break;
                          }
                          return (
                            c.handleReconnect(t.contents, t.version),
                            e.abrupt("return")
                          );
                        case 15:
                          return (
                            (c.otContents = t.contents),
                            (c.version = t.version),
                            c.emit("firstConnect"),
                            c.emit("op", [c.otContents]),
                            t.cursors.forEach(c.handleNewCursor),
                            c.emit("fileDirty"),
                            c.debounceCommit(),
                            e.abrupt("return")
                          );
                        case 23:
                          return (
                            (r = new Promise((e) => {
                              return (c.resolveStatusOp = e);
                            })),
                            (e.next = 26),
                            c.channel.request({
                              otLinkFile: {
                                file: { path: c.linkedFile },
                                highConsistency: Boolean(
                                  window["flag-ot-high-consitency"]
                                ),
                              },
                            })
                          );
                        case 26:
                          if (!(n = e.sent).channelClosed) {
                            e.next = 29;
                            break;
                          }
                          return e.abrupt("return");
                        case 29:
                          if (!n.error) {
                            e.next = 32;
                            break;
                          }
                          return (
                            c.emit(
                              "error",
                              new Error("link file error " + n.error)
                            ),
                            e.abrupt("return")
                          );
                        case 32:
                          return (e.next = 34), r;
                        case 34:
                          if (
                            ((i = e.sent),
                            (a = i.ops),
                            (s = i.version),
                            !(a.length > 1))
                          ) {
                            e.next = 40;
                            break;
                          }
                          return (
                            c.emit(
                              "error",
                              new Error("Expected a single status op")
                            ),
                            e.abrupt("return")
                          );
                        case 40:
                          if ("string" === typeof (u = a[0] || "")) {
                            e.next = 44;
                            break;
                          }
                          return (
                            c.emit(
                              "error",
                              new Error(
                                "Expected a status op to be an insert or empty"
                              )
                            ),
                            e.abrupt("return")
                          );
                        case 44:
                          if (!c.isReconnecting) {
                            e.next = 47;
                            break;
                          }
                          return c.handleReconnect(u, s), e.abrupt("return");
                        case 47:
                          (c.otContents = u),
                            (c.version = s),
                            (c.committedVersion = s),
                            (c.committedContent = c.otContents),
                            c.emit("firstConnect"),
                            c.emit("op", a);
                        case 53:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          ),
          Object(a.a)(
            Object(v.a)(c),
            "handleReconnect",
            (() => {
              const e = Object(i.a)(
                o.a.mark(function e(t, r) {
                  let n, i, a, s, u, l, f, p, d, h, b, v, g, m, y, O, x, j, k, E, T, S, D, R, N, A, I, F, L, U, M;
                  return o.a.wrap(
                    (e) => {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (c.timeDisconnected) {
                              e.next = 2;
                              break;
                            }
                            throw new Error("wat");
                          case 2:
                            if (
                              ((n = Date.now() - c.timeDisconnected),
                              (i = (e) => {
                                c.reconnectTrackedData = P(
                                  P({}, e),
                                  {},
                                  {
                                    serverVersion: r,
                                    ourVersion: c.version,
                                    ourCommittedVersion: c.committedVersion,
                                    areContentsEqual: c.otContents === t,
                                    areCommittedContentsEqual:
                                      c.committedContent === t,
                                    didReceiveOpsWhileReconnecting: Boolean(
                                      c.bufferedReconnectingOps
                                    ),
                                    didEditOffline: c.didEditOffline,
                                    hasPendingOps: Boolean(c.pending.length),
                                    disconnectDuration: n,
                                  }
                                );
                              }),
                              (a = () => {
                                (c.isReconnecting = !1),
                                  (c.bufferedReconnectingOps = []),
                                  (c.didEditOffline = !1),
                                  (c.timeDisconnected = null),
                                  c.debounceSend(),
                                  c.debounceCommit(),
                                  c.emit("reconnected");
                              }),
                              !c.inflight.length)
                            ) {
                              e.next = 26;
                              break;
                            }
                            if (r !== c.version || c.otContents !== t) {
                              e.next = 14;
                              break;
                            }
                            return (
                              i({
                                case: "has_inflight_happy_path_ops_unreached",
                                prompted: !1,
                              }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              (c.pending = w.type.compose(
                                c.inflight,
                                c.pending
                              )),
                              (c.inflight = []),
                              (c.inflightOpsPromise = null),
                              a(),
                              e.abrupt("return")
                            );
                          case 14:
                            (s = !1), (u = c.otContents);
                            try {
                              u = w.type.apply(t, c.inflight);
                            } catch (o) {
                              s = !0;
                            }
                            if (s || c.version + 1 !== r || u !== t) {
                              e.next = 22;
                              break;
                            }
                            return (
                              i({
                                case: "has_inflight_happy_path_ops_reached",
                                prompted: !0,
                              }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              c.emit("promptUserReconnect"),
                              e.abrupt("return")
                            );
                          case 22:
                            return (
                              i({ case: "has_inflight", prompted: !0 }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              c.emit("promptUserReconnect"),
                              e.abrupt("return")
                            );
                          case 26:
                            if (!c.hasUncommittedMultiplayerOps) {
                              e.next = 31;
                              break;
                            }
                            return (
                              i({ case: "multiplayer", prompted: !0 }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              c.emit("promptUserReconnect"),
                              e.abrupt("return")
                            );
                          case 31:
                            if (c.version !== r) {
                              e.next = 41;
                              break;
                            }
                            if (t !== c.otContents) {
                              e.next = 37;
                              break;
                            }
                            return (
                              i({ case: "happy_path", prompted: !1 }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              a(),
                              e.abrupt("return")
                            );
                          case 37:
                            return (
                              i({
                                case: "same_version_different_content",
                                prompted: !0,
                              }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              c.emit("promptUserReconnect"),
                              e.abrupt("return")
                            );
                          case 41:
                            if (c.committedVersion !== r) {
                              e.next = 70;
                              break;
                            }
                            (l = t), (e.prev = 43), (f = _(c.uncommittedOps));
                            try {
                              for (f.s(); !(p = f.n()).done; )
                                (d = p.value.ops), (l = w.type.apply(l, d));
                            } catch (z) {
                              f.e(z);
                            } finally {
                              f.f();
                            }
                            e.next = 54;
                            break;
                          case 48:
                            return (
                              (e.prev = 48),
                              (e.t0 = e.catch(43)),
                              i({
                                case: "same_committed_version_unable_to_apply_ops",
                                prompted: !0,
                              }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              c.emit("promptUserReconnect"),
                              e.abrupt("return")
                            );
                          case 54:
                            if (l !== c.otContents) {
                              e.next = 66;
                              break;
                            }
                            i({
                              case: "happy_path_uncommitted",
                              prompted: !1,
                            }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              (h = []),
                              (b = _(c.uncommittedOps));
                            try {
                              for (b.s(); !(v = b.n()).done; )
                                (g = v.value.ops), (h = w.type.compose(h, g));
                            } catch (z) {
                              b.e(z);
                            } finally {
                              b.f();
                            }
                            return (
                              (c.pending = w.type.compose(h, c.pending)),
                              (c.uncommittedOps = []),
                              (c.version = r),
                              (c.otContents = t),
                              a(),
                              e.abrupt("return")
                            );
                          case 66:
                            return (
                              i({
                                case: "same_committed_version_different_content_fixed",
                                prompted: !0,
                              }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              c.emit("promptUserReconnect"),
                              e.abrupt("return")
                            );
                          case 70:
                            if (!(c.version < r)) {
                              e.next = 95;
                              break;
                            }
                            return (
                              (e.next = 73), c.fetchOps(c.version + 1, r)
                            );
                          case 73:
                            (m = e.sent), (y = !1), (O = c.otContents);
                            try {
                              x = _(m);
                              try {
                                for (x.s(); !(j = x.n()).done; )
                                  (k = j.value.ops), (O = w.type.apply(O, k));
                              } catch (z) {
                                x.e(z);
                              } finally {
                                x.f();
                              }
                            } catch (o) {
                              y = !0;
                            }
                            if (y || O !== t) {
                              e.next = 86;
                              break;
                            }
                            i({
                              case: "happy_path_server_ahead",
                              prompted: !1,
                            }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              (E = _(m));
                            try {
                              for (E.s(); !(T = E.n()).done; )
                                (S = T.value),
                                  c.handlePacket(S, {
                                    overrideReconnectringBuffer: !0,
                                  });
                            } catch (z) {
                              E.e(z);
                            } finally {
                              E.f();
                            }
                            D = _(c.bufferedReconnectingOps);
                            try {
                              for (D.s(); !(R = D.n()).done; )
                                (N = R.value),
                                  c.handlePacket(N, {
                                    overrideReconnectringBuffer: !0,
                                  });
                            } catch (z) {
                              D.e(z);
                            } finally {
                              D.f();
                            }
                            return a(), e.abrupt("return");
                          case 86:
                            return (
                              (e.next = 88),
                              c.fetchOps(c.committedVersion + 1, r)
                            );
                          case 88:
                            (A = e.sent), (I = !1), (F = c.committedContent);
                            try {
                              L = _(A);
                              try {
                                for (L.s(); !(U = L.n()).done; )
                                  (M = U.value.ops), (F = w.type.apply(F, M));
                              } catch (z) {
                                L.e(z);
                              } finally {
                                L.f();
                              }
                            } catch (o) {
                              I = !0;
                            }
                            return (
                              I ||
                                F !== t ||
                                (i({
                                  case: "happy_path_uncommitted_server_ahead",
                                  prompted: !0,
                                }),
                                Object(C.track)(
                                  C.events.FILE_RECONNECTED_STATUS2,
                                  c.reconnectTrackedData
                                )),
                              c.emit("promptUserReconnect"),
                              e.abrupt("return")
                            );
                          case 95:
                            i({ case: "other", prompted: !0 }),
                              Object(C.track)(
                                C.events.FILE_RECONNECTED_STATUS2,
                                c.reconnectTrackedData
                              ),
                              c.emit("promptUserReconnect");
                          case 98:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[43, 48]]
                  );
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })()
          ),
          Object(a.a)(Object(v.a)(c), "getLocalContent", () => {
            const e = Object(v.a)(c);
            const t = e.inflight;
            const r = e.otContents;
            const n = e.pending;
            let o = r;
            return (
              t.length && (o = w.type.apply(o, t)),
              n.length && (o = w.type.apply(o, n)),
              o
            );
          }),
          Object(a.a)(
            Object(v.a)(c),
            "fetchOps",
            (() => {
              const e = Object(i.a)(
                o.a.mark(function e(t, r) {
                  let n;
                  return o.a.wrap((e) => {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (c.channel) {
                            e.next = 2;
                            break;
                          }
                          throw new Error("No cahnnel, cannot fetch");
                        case 2:
                          return (
                            (e.next = 4),
                            c.channel.request({
                              otFetchRequest: {
                                versionFrom: t,
                                versionTo: r,
                              },
                            })
                          );
                        case 4:
                          if (!(n = e.sent).channelClosed) {
                            e.next = 7;
                            break;
                          }
                          throw new Error("Channel closed while requesting");
                        case 7:
                          if (!n.error) {
                            e.next = 9;
                            break;
                          }
                          throw new Error(
                            "Fetch ops returned an error" + n.error
                          );
                        case 9:
                          if (n.otFetchResponse) {
                            e.next = 11;
                            break;
                          }
                          throw new Error("Expected otFetchResponse");
                        case 11:
                          if (n.otFetchResponse.packets) {
                            e.next = 13;
                            break;
                          }
                          throw new Error("Expected otFetchResponse.packets");
                        case 13:
                          return e.abrupt(
                            "return",
                            n.otFetchResponse.packets.map((e) => {
                              const t = e.crc32, r = e.ops, n = e.version;
                              if (null == t)
                                throw new Error("Expected crc32 in packet");
                              if (null == r)
                                throw new Error("Expected ops in packet");
                              if (null == n)
                                throw new Error("Expected version in packet");
                              return { crc32: t, version: n, ops: M(r) };
                            })
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })()
          ),
          (c.linkedFile = e),
          (c.channel = null),
          (c.inflight = []),
          (c.inflightOpsPromise = null),
          (c.uncommittedOps = []),
          (c.hasUncommittedMultiplayerOps = !1),
          (c.committedVersion = -1),
          (c.isReconnecting = !1),
          (c.bufferedReconnectingOps = []),
          (c.didEditOffline = !1),
          (c.pending = []),
          (c.version = -1),
          (c.otContents = ""),
          (c.committedContent = ""),
          (c.flushedCursorIds = []),
          (c.pendingCursors = []),
          (c.user = null),
          (c.debounceSend = k()(
            () => {
              return c.sendOps();
            },
            20,
            { maxWait: 60 }
          )),
          (c.debounceCommit = k()(
            () => {
              return c.commitToDisk();
            },
            1e3,
            { maxWait: 3e3 }
          )),
          (c.resolveStatusOp = null),
          (c.isCommitting = !1),
          (c.timeDisconnected = null),
          (c.destroy = n.openChannel(
            { service: "ot", name: "ot:".concat(e) },
            (e) => {
              if (!e.error) {
                const t = e.channel, r = e.context;
                return (c.user = r.currentUser
                  ? { name: r.currentUser.username, id: r.currentUser.id }
                  : null),
                (c.channel = t),
                t.onCommand((e) => {
                  switch (e.body) {
                    case "ot":
                      if (
                        !e.ot ||
                        null == e.ot.ops ||
                        null == e.ot.spookyVersion ||
                        null == e.ot.crc32
                      )
                        return void c.emit(
                          "error",
                          new Error("OT Error: missing data in ot packet"),
                          e.ot || {}
                        );
                      const t = {
                        crc32: e.ot.crc32,
                        ops: M(e.ot.ops),
                        version: e.ot.spookyVersion,
                      };
                      return c.handlePacket(t, {
                        overrideReconnectringBuffer: !1,
                      });
                    case "otstatus":
                      return c.handleStatus(e.otstatus);
                    case "error":
                      if (e.ref) return;
                      return c.emit(
                        "error",
                        new Error("Unkown protocol error OT channel"),
                        { originalError: e.error || "Server error" }
                      );
                    case "otNewCursor":
                      return c.handleNewCursor(e.otNewCursor);
                    case "otDeleteCursor":
                      return c.handleDeleteCursor(e.otDeleteCursor);
                  }
                }),
                () => {
                  (c.channel = null),
                    (c.isReconnecting = !0),
                    c.debounceSend.cancel(),
                    c.debounceCommit.cancel(),
                    c.timeDisconnected || (c.timeDisconnected = Date.now());
                }
              ;
              }
            }
          )),
          c
        ;
        }
        return Object(b.a)(r, [
          {
            key: "commitToDisk",
            value: (() => {
              const e = Object(i.a)(
                o.a.mark(function e() {
                  let t, r, n;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.channel) {
                              e.next = 2;
                              break;
                            }
                            throw new Error("Tryna commit while offline");
                          case 2:
                            if ("open" === this.channel.status) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            if (!this.isReconnecting) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Committing while reconnecting");
                          case 6:
                            if (!this.isClean()) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return");
                          case 8:
                            if (!this.isCommitting) {
                              e.next = 11;
                              break;
                            }
                            return this.debounceCommit(), e.abrupt("return");
                          case 11:
                            if (
                              ((this.isCommitting = !0),
                              !this.inflightOpsPromise)
                            ) {
                              e.next = 19;
                              break;
                            }
                            return (e.next = 15), this.inflightOpsPromise;
                          case 15:
                            if (!e.sent.channelClosed) {
                              e.next = 19;
                              break;
                            }
                            return (
                              (this.isCommitting = !1), e.abrupt("return")
                            );
                          case 19:
                            if (!(this.pending.length > 0)) {
                              e.next = 32;
                              break;
                            }
                            if (
                              (this.debounceSend(),
                              this.debounceSend.flush(),
                              this.inflightOpsPromise)
                            ) {
                              e.next = 26;
                              break;
                            }
                            return (
                              (this.isCommitting = !1),
                              this.emit(
                                "error",
                                new Error("expected inflight promise")
                              ),
                              e.abrupt("return")
                            );
                          case 26:
                            return (e.next = 28), this.inflightOpsPromise;
                          case 28:
                            if (!e.sent.channelClosed) {
                              e.next = 32;
                              break;
                            }
                            return (
                              (this.isCommitting = !1), e.abrupt("return")
                            );
                          case 32:
                            return (
                              this.emit("commitStart"),
                              (t = this.version),
                              (r = this.otContents),
                              (e.next = 37),
                              this.channel.request({ flush: {} })
                            );
                          case 37:
                            if (!(n = e.sent).channelClosed) {
                              e.next = 41;
                              break;
                            }
                            return (
                              (this.isCommitting = !1), e.abrupt("return")
                            );
                          case 41:
                            if ("ok" === n.body) {
                              e.next = 45;
                              break;
                            }
                            return (
                              (this.isCommitting = !1),
                              this.emit(
                                "error",
                                new Error("OT Error: unable to flush"),
                                { originalError: n.error || n.toString() }
                              ),
                              e.abrupt("return")
                            );
                          case 45:
                            return (
                              (this.uncommittedOps = []),
                              (this.hasUncommittedMultiplayerOps = !1),
                              (this.committedVersion = t),
                              (this.committedContent = r),
                              this.isClean() && this.emit("commitClean"),
                              (this.isCommitting = !1),
                              e.abrupt("return", n)
                            );
                          case 52:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          },
        ]),
        r
      ;
      })(O.EventEmitter);
      function q(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function B(e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(r), !0).forEach((t) => {
                Object(a.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function V(e, t) {
        let r;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = ((e, t) => {
              if (!e) return;
              if ("string" === typeof e) return H(e, t);
              let r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return H(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            let n = 0;
            const o = () => {};
            return {
              s: o,
              n() {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e(e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let i, a = !0, c = !1;
        return {
          s() {
            r = e[Symbol.iterator]();
          },
          n() {
            const e = r.next();
            return (a = e.done), e;
          },
          e(e) {
            (c = !0), (i = e);
          },
          f() {
            try {
              a || null == r.return || r.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function H(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Y(e) {
        return (
          !!e.includes("no such file") || !!e.includes("file does not exist")
        );
      }
      function G(e) {
        return Y(e)
          ? u.e.NotFound
          : e.includes("file exist")
          ? u.e.AlreadyExists
          : e.includes("not a directory")
          ? u.e.NotDirectory
          : void 0;
      }
      function W(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return new Promise((t, n) => {
          setTimeout(() => {
            e.apply(void 0, r)
              .then(t)
              .catch(n);
          }, 0);
        });
      }
      function J(e) {
        let t;
        const r = e.container;
        let n = null;
        const a = {};
        const h = {};
        r.openChannel({ service: "fsevents" }, (e) => {
          const t = e.error, r = e.channel;
          if (!t) {
            if (!r) throw new Error("Expected channel");
            (n = r),
              r.onCommand((e) => {
                if ("fileEvent" === e.body) {
                  if (!e.fileEvent) throw new Error("Expected fileEvent");
                  const t = e.fileEvent, r = t.file, n = t.dest, o = t.op;
                  if (r) {
                    const i = r.path;
                    if (
                      null !== i &&
                      null !== o &&
                      void 0 !== i &&
                      void 0 !== o
                    ) {
                      let c;
                      if (a[i] || r.type === d.api.File.Type.DIRECTORY)
                        c = u.d.Directory;
                      else {
                        const s = Object.keys(a).find((e) => {
                                  return Object(f.b)(e, i);
                                }),
                              l =
                                s &&
                                a[s].children.find((e) => {
                                  return e.filename === i.split("/").pop();
                                });
                        c = l ? l.type : u.d.File;
                      }
                      switch (o) {
                        case d.api.FileEvent.Op.Create:
                          v({
                            eventType: u.a.Create,
                            node: { path: i, type: c },
                          });
                          break;
                        case d.api.FileEvent.Op.Modify:
                          if (c === u.d.Directory) break;
                          break;
                        case d.api.FileEvent.Op.Remove:
                          v({
                            eventType: u.a.Delete,
                            node: { path: i, type: c },
                          });
                          break;
                        case d.api.FileEvent.Op.Move:
                          if (null == n || null == n.path)
                            throw new Error("Expected dest path");
                          const p = n.path;
                          v({
                            eventType: u.a.Create,
                            node: { path: p, type: c },
                          }),
                            v({
                              eventType: u.a.Delete,
                              node: { path: i, type: c },
                            });
                      }
                    }
                  }
                }
              });
            const o = [].concat(
              Object(c.a)(
                Object.keys(a).map((e) => {
                  return { path: e };
                })
              ),
              Object(c.a)(
                Object.keys(h).map((e) => {
                  return { path: e };
                })
              )
            );
            return (
              o.length && r.send({ subscribeFile: { files: o } }),
              () => {
                n = null;
              }
            );
          }
        });
        let b = new Promise((e) => {
          return (t = e);
        });
        function v(e) {
          const t =
            e.node.type === u.d.Directory ? a[e.node.path] : h[e.node.path];
          if (t)
            switch (e.eventType) {
              case u.a.Create:
                break;
              case u.a.Move:
              case u.a.Delete:
                let r;
                const n = V(t.listeners);
                try {
                  for (n.s(); !(r = n.n()).done; ) {
                    const o = r.value, i = o.onMoveOrDelete, s = o.dispose;
                    i && i(e), s();
                  }
                } catch (A) {
                  n.e(A);
                } finally {
                  n.f();
                }
                break;
              case u.a.Modify:
            }
          const f = e.node.path.includes("/") ? Object(l.e)(e.node.path) : p.a, d = a[f];
          if (d)
            switch (e.eventType) {
              case u.a.Create:
                const b = e.node.path.split("/").pop();
                if (!b) throw new Error("Expected filename");
                let v;

                const g = [].concat(
                  Object(c.a)(
                    d.children.filter((e) => {
                      return e.filename !== b;
                    })
                  ),
                  [{ type: e.node.type, filename: b }]
                );

                const m = V(d.listeners);
                try {
                  for (m.s(); !(v = m.n()).done; ) {
                    (0, v.value.onChange)(g);
                  }
                } catch (A) {
                  m.e(A);
                } finally {
                  m.f();
                }
                d.children = g;
                break;
              case u.a.Move:
                let y;

                const O = d.children.filter((t) => {
                  return t.filename !== e.node.path;
                });

                const x = V(d.listeners);
                try {
                  for (x.s(); !(y = x.n()).done; ) {
                    (0, y.value.onChange)(O);
                  }
                } catch (A) {
                  x.e(A);
                } finally {
                  x.f();
                }
                d.children = O;
                const w = e.to.split("/").slice(0, -1).join("/"), j = a[w];
                if (!j) return;
                let k;
                const E = { filename: e.node.path, type: e.node.type };
                const C = [].concat(Object(c.a)(j.children), [E]);
                const T = V(j.listeners);
                try {
                  for (T.s(); !(k = T.n()).done; ) {
                    (0, k.value.onChange)(C);
                  }
                } catch (A) {
                  T.e(A);
                } finally {
                  T.f();
                }
                j.children = C;
                break;
              case u.a.Delete:
                let S;
                const D = e.node.path.split("/").pop();

                const R = d.children.filter((e) => {
                  return e.filename !== D;
                });

                const N = V(d.listeners);
                try {
                  for (N.s(); !(S = N.n()).done; ) {
                    (0, S.value.onChange)(R);
                  }
                } catch (A) {
                  N.e(A);
                } finally {
                  N.f();
                }
                d.children = R;
                break;
              default:
                throw new Error("unknown event");
            }
        }
        r.openChannel(
          {
            service(e) {
              return e.repl.currentUserPermissions.containerWrite
                ? "gcsfiles"
                : "files";
            },
          },
          (e) => {
            const r = e.error, n = e.channel;
            if (!r) {
              if (!n) throw new Error("Expected channel");
              return (
                t(n),
                () => {
                  b = new Promise((e) => {
                    return (t = e);
                  });
                }
              );
            }
          }
        );
        const g = {
          watchDir(e, t) {
            let r = !1;

            const o = function t() {
              (r = !0),
                a[e] &&
                  ((a[e].listeners = a[e].listeners.filter((e) => {
                    return e.dispose !== t;
                  })),
                  0 === a[e].listeners.length && delete a[e]);
            };

            return g
              .readDir(e)
              .then((i) => {
                if (!r) {
                  if (i.error) {
                    const c = new Error(i.error);
                    return (c.code = i.error), t.onError(c), void o();
                  }
                  a[e] ||
                    ((a[e] = {
                      path: e,
                      type: u.d.Directory,
                      children: i.children,
                      listeners: [],
                    }),
                    n && n.send({ subscribeFile: { files: [{ path: e }] } })),
                    a[e].listeners.push(B(B({}, t), {}, { dispose: o })),
                    t.onChange(i.children);
                }
              })
              .catch((e) => {
                o(), t.onError(e);
              }),
            o
          ;
          },
          writeFile(e, t) {
            return Object(i.a)(
              o.a.mark(function r() {
                let n, i, a;
                return o.a.wrap((r) => {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), b;
                      case 2:
                        return (
                          (n = r.sent),
                          (r.next = 5),
                          n.request({
                            write: { path: e, content: t.toBuffer() },
                          })
                        );
                      case 5:
                        if (!(i = r.sent).channelClosed) {
                          r.next = 8;
                          break;
                        }
                        return r.abrupt("return", W(g.writeFile, e, t));
                      case 8:
                        if (!i.error) {
                          r.next = 14;
                          break;
                        }
                        if (
                          ((a = null),
                          i.error.includes("not a directory")
                            ? (a = u.e.NotDirectory)
                            : i.error.includes("file exists") &&
                              (a = u.e.IsDirectory),
                          a)
                        ) {
                          r.next = 13;
                          break;
                        }
                        throw new Error(i.error);
                      case 13:
                        return r.abrupt("return", { error: a });
                      case 14:
                        return (
                          v({
                            eventType: u.a.Create,
                            node: { path: e, type: u.d.File },
                          }),
                          r.abrupt("return", { error: null })
                        );
                      case 16:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          readFile(e) {
            return Object(i.a)(
              o.a.mark(function t() {
                let r, n, i;
                return o.a.wrap((t) => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), b;
                      case 2:
                        return (
                          (r = t.sent),
                          (t.next = 5),
                          r.request({ read: { path: e } })
                        );
                      case 5:
                        if (!(n = t.sent).channelClosed) {
                          t.next = 8;
                          break;
                        }
                        return t.abrupt("return", W(g.readFile, e));
                      case 8:
                        if (!n.error) {
                          t.next = 14;
                          break;
                        }
                        if (
                          ((i = null),
                          Y(n.error)
                            ? (i = u.e.NotFound)
                            : n.error.includes("is a directory") &&
                              (i = u.e.IsDirectory),
                          i)
                        ) {
                          t.next = 13;
                          break;
                        }
                        throw new Error(n.error);
                      case 13:
                        return t.abrupt("return", { error: i });
                      case 14:
                        if (n.file && n.file.path && n.file.content) {
                          t.next = 16;
                          break;
                        }
                        throw new Error("Expected file");
                      case 16:
                        return t.abrupt("return", {
                          content: s.a.from(n.file.content),
                          error: null,
                        });
                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          createDir(e) {
            return Object(i.a)(
              o.a.mark(function t() {
                let r, n, i;
                return o.a.wrap((t) => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), b;
                      case 2:
                        return (
                          (r = t.sent),
                          (t.next = 5),
                          r.request({ mkdir: { path: e } })
                        );
                      case 5:
                        if (!(n = t.sent).channelClosed) {
                          t.next = 8;
                          break;
                        }
                        return t.abrupt("return", W(g.createDir, e));
                      case 8:
                        if (!n.error) {
                          t.next = 14;
                          break;
                        }
                        if (
                          ((i = null),
                          n.error.includes("not a directory") &&
                            (i = u.e.NotDirectory),
                          i)
                        ) {
                          t.next = 13;
                          break;
                        }
                        throw new Error(n.error);
                      case 13:
                        return t.abrupt("return", { error: i });
                      case 14:
                        return (
                          v({
                            eventType: u.a.Create,
                            node: { path: e, type: u.d.Directory },
                          }),
                          t.abrupt("return", { error: null })
                        );
                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          moveDir(e, t) {
            return Object(i.a)(
              o.a.mark(function r() {
                let n, i, a;
                return o.a.wrap((r) => {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), b;
                      case 2:
                        return (
                          (n = r.sent),
                          (r.next = 5),
                          n.request({ move: { oldPath: e, newPath: t } })
                        );
                      case 5:
                        if (!(i = r.sent).channelClosed) {
                          r.next = 8;
                          break;
                        }
                        return r.abrupt("return", W(g.moveDir, e, t));
                      case 8:
                        if (!i.error) {
                          r.next = 13;
                          break;
                        }
                        if ((a = G(i.error))) {
                          r.next = 12;
                          break;
                        }
                        throw new Error(i.error);
                      case 12:
                        return r.abrupt("return", { error: a });
                      case 13:
                        return (
                          v({
                            eventType: u.a.Create,
                            node: { path: t, type: u.d.Directory },
                          }),
                          v({
                            eventType: u.a.Delete,
                            node: { path: e, type: u.d.Directory },
                          }),
                          r.abrupt("return", { error: null })
                        );
                      case 16:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          moveFile(e, t) {
            return Object(i.a)(
              o.a.mark(function r() {
                let n, i, a;
                return o.a.wrap((r) => {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), b;
                      case 2:
                        return (
                          (n = r.sent),
                          (r.next = 5),
                          n.request({ move: { oldPath: e, newPath: t } })
                        );
                      case 5:
                        if (!(i = r.sent).channelClosed) {
                          r.next = 8;
                          break;
                        }
                        return r.abrupt("return", W(g.moveFile, e, t));
                      case 8:
                        if (!i.error) {
                          r.next = 13;
                          break;
                        }
                        if ((a = G(i.error))) {
                          r.next = 12;
                          break;
                        }
                        throw new Error(i.error);
                      case 12:
                        return r.abrupt("return", { error: a });
                      case 13:
                        return (
                          v({
                            eventType: u.a.Create,
                            node: { path: t, type: u.d.File },
                          }),
                          v({
                            eventType: u.a.Delete,
                            node: { path: e, type: u.d.File },
                          }),
                          r.abrupt("return", { error: null })
                        );
                      case 16:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          deleteFile(e) {
            return Object(i.a)(
              o.a.mark(function t() {
                let r, n, i;
                return o.a.wrap((t) => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), b;
                      case 2:
                        return (
                          (r = t.sent),
                          (t.next = 5),
                          r.request({ remove: { path: e } })
                        );
                      case 5:
                        if (!(n = t.sent).channelClosed) {
                          t.next = 8;
                          break;
                        }
                        return t.abrupt("return", W(g.deleteFile, e));
                      case 8:
                        if (!n.error) {
                          t.next = 14;
                          break;
                        }
                        if (((i = null), Y(n.error) && (i = u.e.NotFound), i)) {
                          t.next = 13;
                          break;
                        }
                        throw new Error(n.error);
                      case 13:
                        return t.abrupt("return", { error: i });
                      case 14:
                        return (
                          v({
                            eventType: u.a.Delete,
                            node: { path: e, type: u.d.File },
                          }),
                          t.abrupt("return", { error: null })
                        );
                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          deleteDir(e) {
            return Object(i.a)(
              o.a.mark(function t() {
                let r, n, i;
                return o.a.wrap((t) => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), b;
                      case 2:
                        return (
                          (r = t.sent),
                          (t.next = 5),
                          r.request({ remove: { path: e } })
                        );
                      case 5:
                        if (!(n = t.sent).channelClosed) {
                          t.next = 8;
                          break;
                        }
                        return t.abrupt("return", W(g.deleteDir, e));
                      case 8:
                        if (!n.error) {
                          t.next = 14;
                          break;
                        }
                        if (((i = null), Y(n.error) && (i = u.e.NotFound), i)) {
                          t.next = 13;
                          break;
                        }
                        throw new Error(n.error);
                      case 13:
                        return t.abrupt("return", { error: i });
                      case 14:
                        return (
                          v({
                            eventType: u.a.Delete,
                            node: { path: e, type: u.d.Directory },
                          }),
                          t.abrupt("return", { error: null })
                        );
                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          readDir(e) {
            return Object(i.a)(
              o.a.mark(function t() {
                let r, n, i, a, c;
                return o.a.wrap((t) => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), b;
                      case 2:
                        return (
                          (n = t.sent),
                          (t.next = 5),
                          n.request({ readdir: { path: e } })
                        );
                      case 5:
                        if (!(i = t.sent).channelClosed) {
                          t.next = 8;
                          break;
                        }
                        return t.abrupt("return", W(g.readDir, e));
                      case 8:
                        if (!i.error) {
                          t.next = 14;
                          break;
                        }
                        if (
                          ((a = null),
                          Y(i.error)
                            ? (a = u.e.NotFound)
                            : i.error.includes("not a directory") &&
                              (a = u.e.NotDirectory),
                          a)
                        ) {
                          t.next = 13;
                          break;
                        }
                        throw new Error(i.error);
                      case 13:
                        return t.abrupt("return", { error: a });
                      case 14:
                        if (null !== (r = i.files) && void 0 !== r && r.files) {
                          t.next = 16;
                          break;
                        }
                        throw new Error("Expected filesChannel");
                      case 16:
                        return (
                          (c = i.files.files.map((e) => {
                            if (!e.path) throw new Error("Expected path");
                            return {
                              filename: e.path,
                              type:
                                e.type === d.api.File.Type.DIRECTORY
                                  ? u.d.Directory
                                  : u.d.File,
                            };
                          })),
                          t.abrupt("return", { children: c, error: null })
                        );
                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          stat(e) {
            return Object(i.a)(
              o.a.mark(function t() {
                let r, n;
                return o.a.wrap((t) => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), b;
                      case 2:
                        return (
                          (r = t.sent),
                          (t.next = 5),
                          r.request({ stat: { path: e } })
                        );
                      case 5:
                        if (!(n = t.sent).channelClosed) {
                          t.next = 8;
                          break;
                        }
                        return t.abrupt("return", W(g.stat, e));
                      case 8:
                        if (!n.error) {
                          t.next = 10;
                          break;
                        }
                        throw new Error(n.error);
                      case 10:
                        if (n.statRes) {
                          t.next = 12;
                          break;
                        }
                        throw new Error("expected stat result");
                      case 12:
                        if (n.statRes.exists) {
                          t.next = 14;
                          break;
                        }
                        return t.abrupt("return", { exists: !1 });
                      case 14:
                        if (n.statRes.type !== d.api.File.Type.DIRECTORY) {
                          t.next = 16;
                          break;
                        }
                        return t.abrupt("return", {
                          exists: !0,
                          type: u.d.Directory,
                          lastModified: new Date(1e3 * n.statRes.modTime),
                        });
                      case 16:
                        return t.abrupt("return", {
                          exists: !0,
                          type: u.d.File,
                          lastModified: new Date(1e3 * n.statRes.modTime),
                          byteLength: Number(n.statRes.size),
                        });
                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          watchOtFile(e, t) {
            const n = this;
            h[e] ||
              (h[e] = {
                path: e,
                type: u.d.File,
                listeners: [],
                otClient: new z(e, r),
              });
            let a = !1;
            let c = () => {};

            const l = (l) => {
              c();
              const p = () => {
                let e;
                return null === (e = t.onStatusChange) || void 0 === e
                  ? void 0
                  : e.call(t, u.c.Dirty);
              };
              h[e].otClient.on("fileDirty", p);
              const d = () => {
                let e;
                return null === (e = t.onStatusChange) || void 0 === e
                  ? void 0
                  : e.call(t, u.c.Clean);
              };
              h[e].otClient.on("commitClean", d);
              const b = () => {
                let e;
                return null === (e = t.onStatusChange) || void 0 === e
                  ? void 0
                  : e.call(t, u.c.Syncing);
              };
              h[e].otClient.on("commitStart", b);
              const v = (e) => {
                let r;
                return null === (r = t.onCursor) || void 0 === r
                  ? void 0
                  : r.call(t, e);
              };
              h[e].otClient.on("cursor", v);
              const g = (e) => {
                let r;
                return null === (r = t.onRemoveCursor) || void 0 === r
                  ? void 0
                  : r.call(t, e);
              };
              h[e].otClient.on("removeCursor", g);
              const m = (() => {
                const t = Object(i.a)(
                  o.a.mark(function t(i) {
                    let a, c, u, l, f, p, d;
                    return o.a.wrap((t) => {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((a = h[e].otClient).destroy(),
                              (c = () => {
                                const t = new z(e, r);
                                return new Promise((r, n) => {
                                  t.once("op", () => {
                                    const n = I(
                                      a.getLocalContent(),
                                      t.getLocalContent()
                                    );
                                    h[e].otClient = t;
                                    let o;
                                    const i = V(h[e].listeners);
                                    try {
                                      for (i.s(); !(o = i.n()).done; ) {
                                        (0, o.value.reregister)(n);
                                      }
                                    } catch (c) {
                                      i.e(c);
                                    } finally {
                                      i.f();
                                    }
                                    r();
                                  }),
                                    t.once("error", (e) => {
                                      return n(e);
                                    });
                                });
                              }),
                              "remote" !== i)
                            ) {
                              t.next = 7;
                              break;
                            }
                            return (t.next = 6), c();
                          case 6:
                            return t.abrupt("return");
                          case 7:
                            return (
                              (t.next = 9),
                              n.writeFile(e, s.a.from(a.getLocalContent()))
                            );
                          case 9:
                            if (!(u = t.sent).error) {
                              t.next = 16;
                              break;
                            }
                            ((l = new Error(
                              "Got error while overwriting file during reconnect"
                            )).code = u.error),
                              (f = V(h[e].listeners));
                            try {
                              for (f.s(); !(p = f.n()).done; )
                                (d = p.value).onError && d.onError(l),
                                  d.dispose();
                            } catch (o) {
                              f.e(o);
                            } finally {
                              f.f();
                            }
                            return t.abrupt("return");
                          case 16:
                            return (t.next = 18), c();
                          case 18:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
              h[e].otClient.on("promptUserReconnect", () => {
                let e;
                return null === (e = t.onReconnectFail) || void 0 === e
                  ? void 0
                  : e.call(t, m);
              });
              const y = (e) => {
                t.onError && t.onError(e), f();
              };
              h[e].otClient.on("error", y);
              const O = (r) => {
                      h[e].otClient.writeOps(r);
                      let n;
                      const o = V(h[e].listeners);
                      try {
                        for (o.s(); !(n = o.n()).done; ) {
                          const i = n.value.onChange;
                          i &&
                            i !== t.onChange &&
                            i({ ops: r, changeSource: u.b.Local });
                        }
                      } catch (a) {
                        o.e(a);
                      } finally {
                        o.f();
                      }
                    },
                    x = (t) => {
                      h[e].otClient.updateCursors([t]);
                    };
              if (
                (-1 !== h[e].otClient.version &&
                  setTimeout(() => {
                    let r;
                    a ||
                      null === (r = t.onReady) ||
                      void 0 === r ||
                      r.call(t, {
                        initialContent: s.a.from(
                          h[e].otClient.getLocalContent()
                        ),
                        writeOps: O,
                        sendCursor: x,
                        fetchOps: h[e].otClient.fetchOps,
                        version: h[e].otClient.version,
                      });
                  }),
                l)
              ) {
                let w;
                null === (w = t.onChange) ||
                  void 0 === w ||
                  w.call(t, { ops: l, changeSource: u.b.Container });
              } else {
                const j = (r) => {
                  let n, o;
                  if (!a)
                    return (
                      (a = !0),
                      void (
                        null === (o = t.onReady) ||
                        void 0 === o ||
                        o.call(t, {
                          initialContent: s.a.from(
                            h[e].otClient.getLocalContent()
                          ),
                          writeOps: O,
                          sendCursor: x,
                          fetchOps: h[e].otClient.fetchOps,
                          version: h[e].otClient.version,
                        })
                      )
                    );
                  null === (n = t.onChange) ||
                    void 0 === n ||
                    n.call(t, { ops: r, changeSource: u.b.Container });
                };
                h[e].otClient.on("op", j),
                  (c = () => {
                    h[e].otClient.removeListener("fileDirty", p),
                      h[e].otClient.removeListener("commitClean", d),
                      h[e].otClient.removeListener("commitStart", b),
                      h[e].otClient.removeListener("error", y),
                      h[e].otClient.removeListener("op", j),
                      h[e].otClient.removeListener("cursor", v),
                      h[e].otClient.removeListener("removeCursor", g);
                  });
              }
            };

            l();
            var f = function t() {
              h[e] &&
                ((a = !0),
                c(),
                (h[e].listeners = h[e].listeners.filter((e) => {
                  return e.dispose !== t;
                })),
                0 === h[e].listeners.length &&
                  (h[e].otClient.destroy(), delete h[e]));
            };
            return (
              h[e].listeners.push(
                B(B({}, t), {}, { dispose: f, reregister: l })
              ),
              f
            );
          },
        };
        return g;
      }
    },
    VZNv(e, t, r) {
      "use strict";
      r.d(t, "a", () => {
        return p;
      });
      const n = r("vJKn"), o = r.n(n), i = r("rg98"), a = r("0gYX"), c = r.n(a), s = r("5/z4"), u = r("HADy"), l = r("Fz/E"), f = r("6bXu");
      function p(e) {
        const t = e.container;
        const r = e.beforeRun;
        const n = Object(l.a)();
        let a = null;
        let p = u.b.OFFLINE;
        let d = "none";
        let h = !1;
        let b = Math.random();
        function v() {
          const e = (e) => {
            p !== e && ((p = e), n.emit(u.a.STATE_CHANGE, p));
          };
          e(
            a
              ? h
                ? u.b.STOPPING
                : "none" === d
                ? u.b.IDLE
                : u.b.RUNNING
              : u.b.OFFLINE
          );
        }
        function g() {
          return (g = Object(i.a)(
            o.a.mark(function e() {
              let t;
              return o.a.wrap((e) => {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (p === u.b.IDLE) {
                        e.next = 2;
                        break;
                      }
                      throw new Error(
                        "Cannot run while state is not IDLE, got state: " + p
                      );
                    case 2:
                      return (
                        (t = Math.random()),
                        (b = t),
                        (d = "before-run"),
                        v(),
                        (e.next = 8),
                        r()
                      );
                    case 8:
                      if (b === t) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return");
                    case 10:
                      if ("none" !== d) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt("return");
                    case 12:
                      if ("server" !== d) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt("return");
                    case 14:
                      if (a) {
                        e.next = 16;
                        break;
                      }
                      throw new Error(
                        "State is RUNNING but shellrunner is null?"
                      );
                    case 16:
                      (d = "optimistic"), a.send({ runMain: {} });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function m() {
          return (m = Object(i.a)(
            o.a.mark(function e(t) {
              return o.a.wrap((e) => {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (p === u.b.IDLE || p === u.b.RUNNING) {
                        e.next = 2;
                        break;
                      }
                      throw new Error(
                        "Can only send input when running or idle"
                      );
                    case 2:
                      if (a) {
                        e.next = 4;
                        break;
                      }
                      throw new Error(
                        "State is not OFFLINE but shellrunner is null?"
                      );
                    case 4:
                      a.send({ input: t });
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return t.openChannel(
          {
            name: "shellrunner",
            service: "shellrun2",
            skip(e) {
              let t;
              const r = e.repl;
              return (
                !Object(f.a)() ||
                ((t = r.language),
                !(
                  !0 === c.a.usesInterpreter(t) ||
                  !1 !== c.a.usesRunProject(t)
                ))
              );
            },
          },
          (e) => {
            const t = e.channel;
            if (!e.error) {
              if (!t) throw new Error("Expected error");
              return (a = t),
              v(),
              t.onCommand((e) => {
                switch (e.body) {
                  case "state":
                    const t = e.state === s.api.State.Stopped;
                    h && t && (h = !1),
                      t ? "server" === d && (d = "none") : (d = "server"),
                      v();
                    break;
                  case "output":
                    n.emit(u.a.OUTPUT, e.output);
                }
              }),
              () => {
                (d = "none"), (h = !1), (a = null), v();
              }
            ;
            }
          }
        ),
        {
          run() {
            return g.apply(this, arguments);
          },
          stopRun() {
            if (p !== u.b.RUNNING)
              throw new Error(
                "stopRun must be called when running but got ".concat(p)
              );
            if (!a)
              throw new Error("State is RUNNING but shellrunner is null?");
            if ("before-run" === d) return (d = "none"), void v();
            (d = "none"), (h = !0), v(), a.send({ clear: {} });
          },
          sendInput(e) {
            return m.apply(this, arguments);
          },
          resizeTerminal(e) {
            if (!a)
              throw new Error("resizeTerminal must be called when online");
            a.send({ resizeTerm: e });
          },
          onOutput(e) {
            return (
              n.on(u.a.OUTPUT, e),
              () => {
                n.removeListener(u.a.OUTPUT, e);
              }
            );
          },
          onStateChanged(e) {
            return (
              n.on(u.a.STATE_CHANGE, e),
              () => {
                n.removeListener(u.a.STATE_CHANGE, e);
              }
            );
          },
          getRunState() {
            return p;
          },
        }
      ;
      }
    },
    Yk1I(e, t) {
      const r = -1;
      function n(e, t, s, u) {
        if (e === t) return e ? [[0, e]] : [];
        if (null != s) {
          const l = ((e, t, r) => {
            const n =
                      "number" === typeof r ? { index: r, length: 0 } : r.oldRange,
                  o = "number" === typeof r ? null : r.newRange,
                  i = e.length,
                  a = t.length;
            if (0 === n.length && (null === o || 0 === o.length)) {
              const c = n.index, s = e.slice(0, c), u = e.slice(c), l = o ? o.index : null, f = c + a - i;
              if ((null === l || l === f) && !(f < 0 || f > a)) {
                var d = t.slice(0, f);
                if ((v = t.slice(f)) === u) {
                  var h = Math.min(c, f);
                  if ((m = s.slice(0, h)) === (O = d.slice(0, h)))
                    return p(m, s.slice(h), d.slice(h), u);
                }
              }
              if (null === l || l === c) {
                const b = c;
                var v = ((d = t.slice(0, b)), t.slice(b));
                if (d === s) {
                  var g = Math.min(i - b, a - b);
                  if (
                    (y = u.slice(u.length - g)) === (x = v.slice(v.length - g))
                  )
                    return p(
                      s,
                      u.slice(0, u.length - g),
                      v.slice(0, v.length - g),
                      y
                    );
                }
              }
            }
            if (n.length > 0 && o && 0 === o.length) {
              var m = e.slice(0, n.index),
                y = e.slice(n.index + n.length);
              if (!(a < (h = m.length) + (g = y.length))) {
                var O = t.slice(0, h),
                  x = t.slice(a - g);
                if (m === O && y === x)
                  return p(m, e.slice(h, i - g), t.slice(h, a - g), y);
              }
            }
            return null;
          })(e, t, s);
          if (l) return l;
        }
        let f = i(e, t);
        const d = e.substring(0, f);
        f = a((e = e.substring(f)), (t = t.substring(f)));
        const h = e.substring(e.length - f),
              b = ((e, t) => {
                let c;
                if (!e) return [[1, t]];
                if (!t) return [[r, e]];
                const s = e.length > t.length ? e : t, u = e.length > t.length ? t : e, l = s.indexOf(u);
                if (-1 !== l)
                  return (
                    (c = [
                      [1, s.substring(0, l)],
                      [0, u],
                      [1, s.substring(l + u.length)],
                    ]),
                    e.length > t.length && (c[0][0] = c[2][0] = r),
                    c
                  );
                if (1 === u.length)
                  return [
                    [r, e],
                    [1, t],
                  ];
                const f = ((e, t) => {
                  const r = e.length > t.length ? e : t, n = e.length > t.length ? t : e;
                  if (r.length < 4 || 2 * n.length < r.length) return null;
                  function o(e, t, r) {
                    for (
                      var n,
                        o,
                        c,
                        s,
                        u = e.substring(r, r + Math.floor(e.length / 4)),
                        l = -1,
                        f = "";
                      -1 !== (l = t.indexOf(u, l + 1));

                    ) {
                      const p = i(e.substring(r), t.substring(l)), d = a(e.substring(0, r), t.substring(0, l));
                      f.length < d + p &&
                        ((f = t.substring(l - d, l) + t.substring(l, l + p)),
                        (n = e.substring(0, r - d)),
                        (o = e.substring(r + p)),
                        (c = t.substring(0, l - d)),
                        (s = t.substring(l + p)));
                    }
                    return 2 * f.length >= e.length ? [n, o, c, s, f] : null;
                  }
                  let c;
                  let s;
                  let u;
                  let l;
                  let f;
                  const p = o(r, n, Math.ceil(r.length / 4));
                  const d = o(r, n, Math.ceil(r.length / 2));
                  if (!p && !d) return null;
                  c = d ? (p && p[4].length > d[4].length ? p : d) : p;
                  e.length > t.length
                    ? ((s = c[0]), (u = c[1]), (l = c[2]), (f = c[3]))
                    : ((l = c[0]), (f = c[1]), (s = c[2]), (u = c[3]));
                  const h = c[4];
                  return [s, u, l, f, h];
                })(e, t);
                if (f) {
                  const p = f[0], d = f[1], h = f[2], b = f[3], v = f[4], g = n(p, h), m = n(d, b);
                  return g.concat([[0, v]], m);
                }
                return ((e, t) => {
                  for (
                    var n = e.length,
                      i = t.length,
                      a = Math.ceil((n + i) / 2),
                      c = a,
                      s = 2 * a,
                      u = new Array(s),
                      l = new Array(s),
                      f = 0;
                    f < s;
                    f++
                  )
                    (u[f] = -1), (l[f] = -1);
                  (u[c + 1] = 0), (l[c + 1] = 0);
                  for (
                    let p = n - i, d = p % 2 !== 0, h = 0, b = 0, v = 0, g = 0, m = 0;
                    m < a;
                    m++
                  ) {
                    for (let y = -m + h; y <= m - b; y += 2) {
                      for (
                        var O = c + y,
                          x =
                            (C =
                              y === -m || (y !== m && u[O - 1] < u[O + 1])
                                ? u[O + 1]
                                : u[O - 1] + 1) - y;
                        C < n && x < i && e.charAt(C) === t.charAt(x);

                      )
                        C++, x++;
                      if (((u[O] = C), C > n)) b += 2;
                      else if (x > i) h += 2;
                      else if (d) {
                        if ((k = c + p - y) >= 0 && k < s && -1 !== l[k])
                          if (C >= (j = n - l[k])) return o(e, t, C, x);
                      }
                    }
                    for (let w = -m + v; w <= m - g; w += 2) {
                      for (
                        var j,
                          k = c + w,
                          E =
                            (j =
                              w === -m || (w !== m && l[k - 1] < l[k + 1])
                                ? l[k + 1]
                                : l[k - 1] + 1) - w;
                        j < n &&
                        E < i &&
                        e.charAt(n - j - 1) === t.charAt(i - E - 1);

                      )
                        j++, E++;
                      if (((l[k] = j), j > n)) g += 2;
                      else if (E > i) v += 2;
                      else if (!d) {
                        if ((O = c + p - w) >= 0 && O < s && -1 !== u[O]) {
                          var C;
                          x = c + (C = u[O]) - O;
                          if (C >= (j = n - j)) return o(e, t, C, x);
                        }
                      }
                    }
                  }
                  return [
                    [r, e],
                    [1, t],
                  ];
                })(e, t);
              })(
                (e = e.substring(0, e.length - f)),
                (t = t.substring(0, t.length - f))
              );
        return d && b.unshift([0, d]), h && b.push([0, h]), c(b, u), b;
      }
      function o(e, t, r, o) {
        const i = e.substring(0, r), a = t.substring(0, o), c = e.substring(r), s = t.substring(o), u = n(i, a), l = n(c, s);
        return u.concat(l);
      }
      function i(e, t) {
        if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
        for (var r = 0, n = Math.min(e.length, t.length), o = n, i = 0; r < o; )
          e.substring(i, o) == t.substring(i, o) ? (i = r = o) : (n = o),
            (o = Math.floor((n - r) / 2 + r));
        return s(e.charCodeAt(o - 1)) && o--, o;
      }
      function a(e, t) {
        if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
        for (var r = 0, n = Math.min(e.length, t.length), o = n, i = 0; r < o; )
          e.substring(e.length - o, e.length - i) ==
          t.substring(t.length - o, t.length - i)
            ? (i = r = o)
            : (n = o),
            (o = Math.floor((n - r) / 2 + r));
        return u(e.charCodeAt(e.length - o)) && o--, o;
      }
      function c(e, t) {
        e.push([0, ""]);
        for (var n, o = 0, s = 0, u = 0, p = "", d = ""; o < e.length; )
          if (o < e.length - 1 && !e[o][1]) e.splice(o, 1);
          else
            switch (e[o][0]) {
              case 1:
                u++, (d += e[o][1]), o++;
                break;
              case r:
                s++, (p += e[o][1]), o++;
                break;
              case 0:
                let h = o - u - s - 1;
                if (t) {
                  if (h >= 0 && f(e[h][1])) {
                    var b = e[h][1].slice(-1);
                    if (
                      ((e[h][1] = e[h][1].slice(0, -1)),
                      (p = b + p),
                      (d = b + d),
                      !e[h][1])
                    ) {
                      e.splice(h, 1), o--;
                      let v = h - 1;
                      e[v] && 1 === e[v][0] && (u++, (d = e[v][1] + d), v--),
                        e[v] && e[v][0] === r && (s++, (p = e[v][1] + p), v--),
                        (h = v);
                    }
                  }
                  if (l(e[o][1])) {
                    b = e[o][1].charAt(0);
                    (e[o][1] = e[o][1].slice(1)), (p += b), (d += b);
                  }
                }
                if (o < e.length - 1 && !e[o][1]) {
                  e.splice(o, 1);
                  break;
                }
                if (p.length > 0 || d.length > 0) {
                  p.length > 0 &&
                    d.length > 0 &&
                    (0 !== (n = i(d, p)) &&
                      (h >= 0
                        ? (e[h][1] += d.substring(0, n))
                        : (e.splice(0, 0, [0, d.substring(0, n)]), o++),
                      (d = d.substring(n)),
                      (p = p.substring(n))),
                    0 !== (n = a(d, p)) &&
                      ((e[o][1] = d.substring(d.length - n) + e[o][1]),
                      (d = d.substring(0, d.length - n)),
                      (p = p.substring(0, p.length - n))));
                  const g = u + s;
                  0 === p.length && 0 === d.length
                    ? (e.splice(o - g, g), (o -= g))
                    : 0 === p.length
                    ? (e.splice(o - g, g, [1, d]), (o = o - g + 1))
                    : 0 === d.length
                    ? (e.splice(o - g, g, [r, p]), (o = o - g + 1))
                    : (e.splice(o - g, g, [r, p], [1, d]), (o = o - g + 2));
                }
                0 !== o && 0 === e[o - 1][0]
                  ? ((e[o - 1][1] += e[o][1]), e.splice(o, 1))
                  : o++,
                  (u = 0),
                  (s = 0),
                  (p = ""),
                  (d = "");
            }
        "" === e[e.length - 1][1] && e.pop();
        let m = !1;
        for (o = 1; o < e.length - 1; )
          0 === e[o - 1][0] &&
            0 === e[o + 1][0] &&
            (e[o][1].substring(e[o][1].length - e[o - 1][1].length) ===
            e[o - 1][1]
              ? ((e[o][1] =
                  e[o - 1][1] +
                  e[o][1].substring(0, e[o][1].length - e[o - 1][1].length)),
                (e[o + 1][1] = e[o - 1][1] + e[o + 1][1]),
                e.splice(o - 1, 1),
                (m = !0))
              : e[o][1].substring(0, e[o + 1][1].length) == e[o + 1][1] &&
                ((e[o - 1][1] += e[o + 1][1]),
                (e[o][1] = e[o][1].substring(e[o + 1][1].length) + e[o + 1][1]),
                e.splice(o + 1, 1),
                (m = !0))),
            o++;
        m && c(e, t);
      }
      function s(e) {
        return e >= 55296 && e <= 56319;
      }
      function u(e) {
        return e >= 56320 && e <= 57343;
      }
      function l(e) {
        return u(e.charCodeAt(0));
      }
      function f(e) {
        return s(e.charCodeAt(e.length - 1));
      }
      function p(e, t, n, o) {
        return f(e) || l(o)
          ? null
          : ((e) => {
              for (var t = [], r = 0; r < e.length; r++)
                e[r][1].length > 0 && t.push(e[r]);
              return t;
            })([
              [0, e],
              [r, t],
              [1, n],
              [0, o],
            ]);
      }
      function d(e, t, r) {
        return n(e, t, r, !0);
      }
      (d.INSERT = 1), (d.DELETE = r), (d.EQUAL = 0), (e.exports = d);
    },
    Z5Wq(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.strPosToUni = function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e.length,
              r = 0,
              n = 0;
            n < t;
            n++
          ) {
            const o = e.charCodeAt(n);
            o >= 55296 && o <= 57343 && (r++, n++);
          }
          if (n !== t) throw Error("Invalid offset - splits unicode bytes");
          return n - r;
        }),
        (t.uniToStrPos = (e, t) => {
          for (var r = 0; t > 0; t--) {
            const n = e.charCodeAt(r);
            r += n >= 55296 && n <= 57343 ? 2 : 1;
          }
          return r;
        });
    },
    cC09(e, t, r) {
      let n;
      (n = (e) => {
        e.version = "1.2.0";
        const t = (() => {
          for (var e = 0, t = new Array(256), r = 0; 256 != r; ++r)
            (e =
              1 &
              (e =
                1 &
                (e =
                  1 &
                  (e =
                    1 &
                    (e =
                      1 &
                      (e =
                        1 &
                        (e =
                          1 &
                          (e = 1 & (e = r) ? -306674912 ^ (e >>> 1) : e >>> 1)
                            ? -306674912 ^ (e >>> 1)
                            : e >>> 1)
                          ? -306674912 ^ (e >>> 1)
                          : e >>> 1)
                        ? -306674912 ^ (e >>> 1)
                        : e >>> 1)
                      ? -306674912 ^ (e >>> 1)
                      : e >>> 1)
                    ? -306674912 ^ (e >>> 1)
                    : e >>> 1)
                  ? -306674912 ^ (e >>> 1)
                  : e >>> 1)
                ? -306674912 ^ (e >>> 1)
                : e >>> 1),
              (t[r] = e);
          return "undefined" !== typeof Int32Array ? new Int32Array(t) : t;
        })();
        (e.table = t),
          (e.bstr = (e, r) => {
            for (var n = -1 ^ r, o = e.length - 1, i = 0; i < o; )
              n =
                ((n = (n >>> 8) ^ t[255 & (n ^ e.charCodeAt(i++))]) >>> 8) ^
                t[255 & (n ^ e.charCodeAt(i++))];
            return (
              i === o && (n = (n >>> 8) ^ t[255 & (n ^ e.charCodeAt(i))]),
              -1 ^ n
            );
          }),
          (e.buf = (e, r) => {
            if (e.length > 1e4)
              return ((e, r) => {
                for (var n = -1 ^ r, o = e.length - 7, i = 0; i < o; )
                  n =
                    ((n =
                      ((n =
                        ((n =
                          ((n =
                            ((n =
                              ((n =
                                ((n = (n >>> 8) ^ t[255 & (n ^ e[i++])]) >>>
                                  8) ^
                                t[255 & (n ^ e[i++])]) >>>
                                8) ^
                              t[255 & (n ^ e[i++])]) >>>
                              8) ^
                            t[255 & (n ^ e[i++])]) >>>
                            8) ^
                          t[255 & (n ^ e[i++])]) >>>
                          8) ^
                        t[255 & (n ^ e[i++])]) >>>
                        8) ^
                      t[255 & (n ^ e[i++])]) >>>
                      8) ^
                    t[255 & (n ^ e[i++])];
                for (; i < o + 7; ) n = (n >>> 8) ^ t[255 & (n ^ e[i++])];
                return -1 ^ n;
              })(e, r);
            for (var n = -1 ^ r, o = e.length - 3, i = 0; i < o; )
              n =
                ((n =
                  ((n =
                    ((n = (n >>> 8) ^ t[255 & (n ^ e[i++])]) >>> 8) ^
                    t[255 & (n ^ e[i++])]) >>>
                    8) ^
                  t[255 & (n ^ e[i++])]) >>>
                  8) ^
                t[255 & (n ^ e[i++])];
            for (; i < o + 3; ) n = (n >>> 8) ^ t[255 & (n ^ e[i++])];
            return -1 ^ n;
          }),
          (e.str = (e, r) => {
            for (var n, o, i = -1 ^ r, a = 0, c = e.length; a < c; )
              (n = e.charCodeAt(a++)) < 128
                ? (i = (i >>> 8) ^ t[255 & (i ^ n)])
                : n < 2048
                ? (i =
                    ((i =
                      (i >>> 8) ^ t[255 & (i ^ (192 | ((n >> 6) & 31)))]) >>>
                      8) ^
                    t[255 & (i ^ (128 | (63 & n)))])
                : n >= 55296 && n < 57344
                ? ((n = 64 + (1023 & n)),
                  (o = 1023 & e.charCodeAt(a++)),
                  (i =
                    ((i =
                      ((i =
                        ((i =
                          (i >>> 8) ^ t[255 & (i ^ (240 | ((n >> 8) & 7)))]) >>>
                          8) ^
                        t[255 & (i ^ (128 | ((n >> 2) & 63)))]) >>>
                        8) ^
                      t[
                        255 & (i ^ (128 | ((o >> 6) & 15) | ((3 & n) << 4)))
                      ]) >>>
                      8) ^
                    t[255 & (i ^ (128 | (63 & o)))]))
                : (i =
                    ((i =
                      ((i =
                        (i >>> 8) ^ t[255 & (i ^ (224 | ((n >> 12) & 15)))]) >>>
                        8) ^
                      t[255 & (i ^ (128 | ((n >> 6) & 63)))]) >>>
                      8) ^
                    t[255 & (i ^ (128 | (63 & n)))]);
            return -1 ^ i;
          });
      }),
        "undefined" === typeof DO_NOT_EXPORT_CRC ? n(t) : n({});
    },
    "cHV+": function (e, t, r) {
      "use strict";
      const n =
        (this && this.__importDefault) ||
        ((e) => {
          return e && e.__esModule ? e : { default: e };
        });
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = r("Z5Wq"),
            i = n(r("HtvZ")),
            a = n(r("qpVQ")),
            c = {
              create(e) {
                return e;
              },
              toString(e) {
                return e;
              },
              builder(e) {
                if ("string" !== typeof e)
                  throw Error("Invalid document snapshot: " + e);
                const t = [];
                return {
                  skip(r) {
                    const n = o.uniToStrPos(e, r);
                    if (n > e.length)
                      throw Error("The op is too long for this document");
                    t.push(e.slice(0, n)), (e = e.slice(n));
                  },
                  append(e) {
                    t.push(e);
                  },
                  del(t) {
                    e = e.slice(o.uniToStrPos(e, t));
                  },
                  build() {
                    return t.join("") + e;
                  },
                };
              },
            },
            s = i.default(c),
            u = Object.assign({}, s, { api: a.default });
      t.type = u;
      const l = r("HtvZ");
      t.makeType = l.default;
    },
    gfZM(e, t, r) {
      "use strict";
      ((e) => {
        const n = r("H+61"),
              o = r("UlJF"),
              i = (() => {
                function t(r, o) {
                  if (
                    (Object(n.a)(this, t),
                    (this.asEncoding = {}),
                    (this.asBuffer = null),
                    o && "string" === typeof r)
                  )
                    this.asEncoding[o] = r;
                  else if (void 0 === r || null === r) this.asBuffer = e.alloc(0);
                  else if (r instanceof e) this.asBuffer = r;
                  else if ("string" === typeof r) this.asEncoding.utf8 = r;
                  else if (r instanceof ArrayBuffer) this.asBuffer = e.from(r);
                  else {
                    if (r instanceof t) return r;
                    r instanceof Uint8Array
                      ? (this.asBuffer = e.from(r))
                      : "object" === typeof r &&
                        "object" === typeof r.asEncoding &&
                        null !== r.asEncoding &&
                        (r.asBuffer instanceof e || null === r.asBuffer) &&
                        ((this.asBuffer = r.asBuffer || null),
                        "string" === typeof r.asEncoding.base64 &&
                          (this.asEncoding = { base64: r.asEncoding.base64 }),
                        "string" === typeof r.asEncoding.utf8 &&
                          (this.asEncoding = { utf8: r.asEncoding.utf8 }));
                  }
                }
                return Object(o.a)(t, null, [
                  {
                    key: "from",
                    value(e, r) {
                      return new t(e, r);
                    },
                  },
                  {
                    key: "isBuffer",
                    value(e) {
                      return e instanceof t;
                    },
                  },
                ]),
                Object(o.a)(t, [
                  {
                    key: "toString",
                    value() {
                      const e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "utf8";
                      if (void 0 !== this.asEncoding[e])
                        return this.asEncoding[e];
                      const t = this.toBuffer(), r = t.toString(e);
                      return (this.asEncoding[e] = r), r;
                    },
                  },
                  {
                    key: "toJSON",
                    value() {
                      return {
                        asEncoding: { base64: this.toString("base64") },
                        asBuffer: null,
                      };
                    },
                  },
                  {
                    key: "toBuffer",
                    value() {
                      if (this.asBuffer) return this.asBuffer;
                      for (const t in this.asEncoding) {
                        const r = this.asEncoding[t];
                        if ("string" === typeof r) {
                          const n = e.from(r, t);
                          return (this.asBuffer = n), n;
                        }
                      }
                      return (this.asBuffer = e.alloc(0)), this.asBuffer;
                    },
                  },
                  {
                    key: "length",
                    get() {
                      return void 0 !== this.asEncoding.utf8
                        ? this.asEncoding.utf8.length
                        : this.toBuffer().length;
                    },
                  },
                ]),
                t
              ;
              })();
        t.a = i;
      }).call(this, r("HDXh").Buffer);
    },
    qpVQ(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r("Z5Wq");
      function o(e, t) {
        return {
          get: e,
          getLength() {
            return e().length;
          },
          insert(r, o, i) {
            const a = n.strPosToUni(e(), r);
            return t([a, o], i);
          },
          remove(r, o, i) {
            const a = n.strPosToUni(e(), r);
            return t([a, { d: o }], i);
          },
          _onOp(e) {
            for (let t = 0, r = 0; r < e.length; r++) {
              const n = e[r];
              switch (typeof n) {
                case "number":
                  (t += n), n;
                  break;
                case "string":
                  this.onInsert && this.onInsert(t, n), (t += n.length);
                  break;
                case "object":
                  this.onRemove && this.onRemove(t, n.d), n.d;
              }
            }
          },
          onInsert: null,
          onRemove: null,
        };
      }
      (t.default = o), (o.provides = { text: !0 });
    },
    tidx(e, t, r) {
      "use strict";
      r.d(t, "a", () => {
        return m;
      });
      const n = r("nKUr"), o = r("cpVT"), i = r("H+61"), a = r("UlJF"), c = r("7LId"), s = r("VIvw"), u = r("iHvq"), l = r("MX0m"), f = r.n(l), p = r("q1tI"), d = r("xom/"), h = r("2tbh");
      function b(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach((t) => {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function g(e) {
        const t = (() => {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          let r;
          const n = Object(u.a)(e);
          if (t) {
            const o = Object(u.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(s.a)(this, r);
        };
      }
      var m = ((e) => {
        Object(c.a)(r, e);
        const t = g(r);
        function r() {
          let e;
          Object(i.a)(this, r);
          for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(o))).state = {
              isLogin: !!e.props.showLoginFirst,
            }),
            (e.handleChangeAuth = () => {
              e.setState((e) => {
                return { isLogin: !e.isLogin };
              });
            }),
            (e.handleSubmit = (t) => {
              t.error && e.props.onFailure(t),
                t.user &&
                  e.props.onSuccess(
                    v(v({}, t), {}, { isLogin: e.state.isLogin })
                  );
            }),
            e
          );
        }
        return Object(a.a)(r, [
          {
            key: "render",
            value() {
              const e = this;
              return Object(n.jsxs)("div", {
                className: "jsx-101910848 auth-modal",
                children: [
                  Object(n.jsxs)(d.b, {
                    align: "center",
                    spacing: 2,
                    children: [
                      Object(n.jsx)("div", {
                        className: "jsx-101910848 auth-modal-title",
                        children: this.props.title || "Sign up",
                      }),
                      Object(n.jsx)("div", {
                        className: "jsx-101910848 auth-modal-description",
                        children:
                          this.props.description ||
                          "Code, create, and learn together on Replit",
                      }),
                      Object(n.jsx)(h.a, {
                        onChangeAuth: this.handleChangeAuth,
                        isTeacher: this.props.isTeacher,
                        isLogin: this.state.isLogin,
                        onSubmit: this.handleSubmit,
                      }),
                      this.props.allowAnon &&
                        Object(n.jsx)("div", {
                          className: "jsx-101910848 auth-modal-anon",
                          children: Object(n.jsx)("a", {
                            onClick() {
                              return e.props.onSuccess();
                            },
                            className: "jsx-101910848",
                            children: "continue as Anonymous",
                          }),
                        }),
                    ],
                  }),
                  Object(n.jsx)(f.a, {
                    id: "101910848",
                    children: [
                      ".auth-modal.jsx-101910848{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:var(--spacing-4) var(--spacing-2);}",
                      ".title-container.jsx-101910848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:var(--spacing-2);}",
                      ".auth-modal-title.jsx-101910848{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;color:var(--color-foreground-1);font-size:var(--font-size-desktop-heading-2);font-weight:var(--font-weight-medium);}",
                      ".auth-modal-description.jsx-101910848{text-align:center;color:var(--color-foreground-2);font-size:var(--font-size-deskptop-text-medium);}",
                      ".auth-modal-anon.jsx-101910848{margin-top:14px;font-size:14px;}",
                      ".auth-modal-anon.jsx-101910848 a.jsx-101910848{color:var(--color-primary-1);-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}",
                    ],
                  }),
                ],
              });
            },
          },
        ]),
        r
      ;
      })(p.Component);
      m.defaultProps = {
        showLoginFirst: !1,
        isTeacher: !1,
        allowAnon: !1,
        onSuccess() {},
        onFailure() {},
      };
    },
  },
]);
