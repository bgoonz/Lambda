(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [27],
  {
    "/+LJ": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return r;
      });
      var r = (e) => {
        const t = e.ace,
          n = e.path;
        if (n.endsWith(".php")) return { path: "ace/mode/php", inline: !0 };
        const r = ((e) => {
          return e.endsWith(".litcoffee")
            ? "coffee"
            : /\.(ml|mli)/.test(e)
            ? "ocaml"
            : /\.(pod6|raku|rakumod|rakutest)/.test(e)
            ? "perl6"
            : /\.(psm1|psc1|psd1)/.test(e)
            ? "powershell"
            : e.endsWith(".cr")
            ? "crystal"
            : /\.(t|pod)/.test(e)
            ? "perl"
            : e.endsWith(".bas")
            ? "basic"
            : null;
        })(n);
        return r
          ? "ace/mode/".concat(r)
          : t.require("ace/ext/modelist").getModeForPath(n).mode;
      };
    },
    "0HhJ": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return s;
      });
      const r = n("cpVT"),
        a = n("nKUr"),
        o = (n("q1tI"), n("pDQI"));
      function i(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach((t) => {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e) {
        return Object(a.jsxs)(
          o.a,
          c(
            c({}, e),
            {},
            {
              children: [
                Object(a.jsx)("path", {
                  d: "M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L16.5 4.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(a.jsx)("path", {
                  d: "M3.27002 6.95996L7.63502 9.48496L12 12.01L20.73 6.95996",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(a.jsx)("path", {
                  d: "M12 22.08V12",
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
    "7EIp": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return pe;
      });
      const r = n("nKUr"),
        a = n("cpVT"),
        o = n("xvhg"),
        i = n("dhJC"),
        c = n("MX0m"),
        s = n.n(c),
        l = n("q1tI"),
        u = n("TSYQ"),
        d = n.n(u),
        p = n("qJlv"),
        f = n("b0NY"),
        b = n("vJKn"),
        j = n.n(b),
        h = n("rg98"),
        g = n("z7pX"),
        v = n("zgDP"),
        x = n("JOwT"),
        O = n("8v8i"),
        m = n("up5I"),
        y = n("YuJD"),
        w = n("kDUs"),
        k = n("8PE+"),
        E = n("kx/0"),
        C = n("nXXz"),
        P = n("VwSA"),
        D = n("UWUU"),
        T = n("0HhJ"),
        N = n("Wjzo"),
        S = n("dI/k");
      function R(e) {
        const t = e.depth,
          n = e.active,
          a = e.children,
          i = e.onClick,
          c = e.interactive,
          u = void 0 === c || c,
          p = e.className,
          f = e.actions,
          b = e.onAction,
          j = l.useRef(null),
          h = l.useState(!1),
          g = Object(o.a)(h, 2),
          v = g[0],
          x = g[1],
          O = l.useRef(null);
        return Object(r.jsxs)("div", {
          ref: j,
          onClick: i
            ? (e) => {
                return i({ newTab: Object(y.b)(e) });
              }
            : void 0,
          onContextMenu(e) {
            O.current && (e.preventDefault(), O.current.open());
          },
          className:
            "jsx-2503987086 " +
            s.a.dynamic([["217255527", [t, n || v ? 1 : 0]]]) +
            " " +
            (d()(p, "node", { active: n, interactive: u }) || ""),
          children: [
            a,
            f && f.length && b
              ? Object(r.jsx)("div", {
                  className:
                    "jsx-2503987086 " +
                    s.a.dynamic([["217255527", [t, n || v ? 1 : 0]]]) +
                    " actions",
                  children: Object(r.jsx)(w.b, {
                    ref: O,
                    onOpenChange: x,
                    actions: f,
                    onAction: b,
                    isActive: n,
                  }),
                })
              : null,
            Object(r.jsx)(s.a, {
              id: "217255527",
              dynamic: [t, n || v ? 1 : 0],
              children: [
                ".node.__jsx-style-dynamic-selector{padding-left:calc(".concat(
                  t,
                  " * var(--spacing-2));}"
                ),
                ".actions.__jsx-style-dynamic-selector{opacity:".concat(
                  n || v ? 1 : 0,
                  ";}"
                ),
              ],
            }),
            Object(r.jsx)(s.a, {
              id: "2503987086",
              children: [
                ".node.jsx-2503987086{height:var(--spacing-4);cursor:pointer;color:var(--color-foreground-2);border-radius:var(--border-radius-1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:var(--font-size-desktop-text-small);}",
                ".node.interactive.jsx-2503987086:hover{background-color:var(--color-control-3);color:var(--color-foreground-1);}",
                ".node.interactive.jsx-2503987086:active{background-color:var(--color-control-2);}",
                ".node.interactive.active.jsx-2503987086{background-color:var(--color-primary-1);color:var(--color-white);}",
                ".node.interactive.active.jsx-2503987086 .content.jsx-2503987086{background-color:var(--color-primary-1);color:var(--color-white);font-weight:var(--font-weight-medium);}",
                ".node.jsx-2503987086:hover .actions.jsx-2503987086{opacity:1;}",
                ".actions.jsx-2503987086{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;-webkit-transition:opacity;transition:opacity;height:100%;}",
              ],
            }),
          ],
        });
      }
      function _(e) {
        const t = e.expanded;
        const n = e.active;
        const a = e.type;
        const o = e.path;
        let i = null;
        if (a === O.d.Directory) i = Object(r.jsx)(k.a, { filled: n });
        else if (x.a.includes(o)) i = Object(r.jsx)(T.a, { filled: n });
        else if (Object(S.h)(o)) i = Object(r.jsx)(N.a, { filled: n });
        else {
          const c = o.split(".").pop();
          if (c && c in P.a) {
            const l = n ? "var(--color-white)" : P.a[c];
            i = Object(r.jsx)(D.LanguageIcon, { language: c, fill: l });
          } else i = Object(r.jsx)(E.a, { filled: n });
        }
        return Object(r.jsxs)("div", {
          className:
            "jsx-702476865 " +
            s.a.dynamic([["2323416086", [t ? 0 : -90]]]) +
            " node-icon",
          children: [
            Object(r.jsx)("div", {
              className:
                "jsx-702476865 " +
                s.a.dynamic([["2323416086", [t ? 0 : -90]]]) +
                " gutter",
              children:
                a === O.d.Directory
                  ? Object(r.jsx)("div", {
                      className:
                        "jsx-702476865 " +
                        s.a.dynamic([["2323416086", [t ? 0 : -90]]]) +
                        " chevron",
                      children: Object(r.jsx)(C.a, {}),
                    })
                  : null,
            }),
            Object(r.jsx)("div", {
              className:
                "jsx-702476865 " +
                s.a.dynamic([["2323416086", [t ? 0 : -90]]]) +
                " icon",
              children: i,
            }),
            Object(r.jsx)(s.a, {
              id: "2323416086",
              dynamic: [t ? 0 : -90],
              children: [
                ".chevron.__jsx-style-dynamic-selector{-webkit-transform:rotate("
                  .concat(t ? 0 : -90, "deg);-ms-transform:rotate(")
                  .concat(t ? 0 : -90, "deg);transform:rotate(")
                  .concat(t ? 0 : -90, "deg);}"),
              ],
            }),
            Object(r.jsx)(s.a, {
              id: "702476865",
              children: [
                ".node-icon.jsx-702476865{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",
                ".icon.jsx-702476865{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:24px;height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                ".gutter.jsx-702476865{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:var(--spacing-2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",
                ".chevron.jsx-702476865{-webkit-transition:0.1s -webkit-transform;-webkit-transition:0.1s transform;transition:0.1s transform;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",
              ],
            }),
          ],
        });
      }
      function A(e) {
        const t = e.children;
        return Object(r.jsxs)("div", {
          title: t,
          className: "jsx-2487264214",
          children: [
            Object(r.jsx)("span", { className: "jsx-2487264214", children: t }),
            Object(r.jsx)(s.a, {
              id: "2487264214",
              children: [
                "div.jsx-2487264214{font-size:var(--font-size-desktop-text-small);-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding-left:var(--spacing-1);padding-right:var(--spacing-half);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}",
              ],
            }),
          ],
        });
      }
      function L(e) {
        const t = e.onCreateClick,
          n = e.depth;
        return Object(r.jsxs)(R, {
          interactive: !1,
          depth: n,
          children: [
            Object(r.jsxs)("div", {
              className: "jsx-3022828519",
              children: [
                "Add a ",
                Object(r.jsx)(m.a, {
                  size: "small",
                  border: !1,
                  onClick() {
                    return t(O.d.File);
                  },
                  children: "file",
                }),
                "  or ",
                Object(r.jsx)(m.a, {
                  size: "small",
                  border: !1,
                  onClick() {
                    return t(O.d.Directory);
                  },
                  children: "folder",
                }),
              ],
            }),
            Object(r.jsx)(s.a, {
              id: "3022828519",
              children: [
                "div.jsx-3022828519{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;overflow:hidden;white-space:nowrap;}",
              ],
            }),
          ],
        });
      }
      const I = n("CLjb"),
        F = n("IjuC"),
        U = n("8Vt8"),
        M = n("QdtJ"),
        V = n("VoYB");
      function z(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function G(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(n), !0).forEach((t) => {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function H(e) {
        const t = e.path,
          n = e.readOnly,
          a = e.onRename,
          c = e.onDelete,
          u = e.overwriteNode,
          p = e.getNodeType,
          f = Object(i.a)(e, [
            "path",
            "readOnly",
            "onRename",
            "onDelete",
            "overwriteNode",
            "getNodeType",
          ]),
          b = t.split("/"),
          j = b[b.length - 1],
          h = b.length - 1,
          g = l.useState(null),
          v = Object(o.a)(g, 2),
          x = v[0],
          m = v[1],
          y = Object(V.a)().showError,
          k = l.useState(null),
          E = Object(o.a)(k, 2),
          C = E[0],
          P = E[1];
        l.useEffect(() => {
          if (x) {
            let e = !1;
            return (
              x.file.then((n) => {
                if (!e) {
                  if (n.error) {
                    if (n.error === O.e.AlreadyExists) {
                      const r =
                        "." === x.path ? j : "".concat(x.path, "/").concat(j);
                      return (
                        p(r).then((e) => {
                          r !== t && P({ path: r, type: e });
                        }),
                        void m(null)
                      );
                    }
                    y("Something went wrong trying to remove ".concat(j));
                  }
                  m(null);
                }
              }),
              () => {
                e = !0;
              }
            );
          }
        }, [x, j, t, p, y]);
        const D = Object(I.a)({
            item: { type: O.d.File, path: t },
            canDrag() {
              return !n;
            },
            collect(e) {
              return { isDragging: e.isDragging() };
            },
            end(e, t) {
              if (t.didDrop()) {
                const n = t.getDropResult();
                n.file && m(n);
              }
            },
          }),
          T = Object(o.a)(D, 2),
          N = T[0].isDragging,
          S = T[1];
        return Object(r.jsxs)("div", {
          ref: S,
          className:
            "jsx-1562813330 " +
            (d()({ "is-dragging": N, "is-removing": x }) || ""),
          children: [
            Object(r.jsx)(
              R,
              G(
                G({ depth: h }, f),
                {},
                {
                  actions: n
                    ? void 0
                    : [w.a.Rename, w.a.OpenTab, w.a.CopyLink, w.a.Delete],
                  onAction(e) {
                    switch (e) {
                      case w.a.Rename:
                        return void a();
                      case w.a.OpenTab:
                        return void f.onClick({ newTab: !0 });
                      case w.a.CopyLink:
                        const n = window.location.href,
                          r = n.includes("#") ? n.indexOf("#") : n.length,
                          o = "".concat(n.slice(0, r), "#").concat(t);
                        return void Object(F.a)(o);
                      case w.a.Delete:
                        c();
                    }
                  },
                  children: Object(r.jsxs)("div", {
                    className: "jsx-1562813330 node-info",
                    children: [
                      Object(r.jsx)(_, {
                        type: O.d.File,
                        path: t,
                        active: f.active,
                      }),
                      Object(r.jsx)(A, { children: j }),
                    ],
                  }),
                }
              )
            ),
            Object(r.jsx)(U.a, {
              isOpen: Boolean(C),
              onRequestClose() {
                return P(null);
              },
              children: C
                ? Object(r.jsx)(M.a, {
                    paths: [C.path],
                    onCancel() {
                      return P(null);
                    },
                    onConfirm() {
                      u(C), P(null);
                    },
                  })
                : null,
            }),
            Object(r.jsx)(s.a, {
              id: "1562813330",
              children: [
                "div.jsx-1562813330{max-width:100%;width:100%;}",
                ".node-info.jsx-1562813330{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}",
                ".is-removing.jsx-1562813330{opacity:0.5;pointer-events:none;}",
                ".is-dragging.jsx-1562813330{opacity:0.7;}",
              ],
            }),
          ],
        });
      }
      const q = n("yzOi"),
        B = n("KRxe"),
        J = n("5QjX");
      function W(e) {
        const t = e.type,
          n = e.initialValue,
          a = e.onSubmit,
          o = e.onCancel,
          i = e.siblings,
          c = e.depth,
          u = l.useRef(null),
          d = Object(J.a)("flag-repl-secrets"),
          p = Object(q.a)(n || "", (e) => {
            const t = Object(S.i)({
              files: i.map((e) => {
                return e.filename;
              }),
              fileName: e,
              initialValue: n,
              disallowDotEnv: d,
            });
            return t ? { message: t } : null;
          });
        return (
          l.useEffect(() => {
            if (n) {
              let e = n.lastIndexOf(".");
              -1 === e && (e = n.length),
                u.current && u.current.setSelectionRange(0, e);
            }
          }, [n]),
          Object(r.jsxs)("div", {
            className:
              "jsx-125275207 " +
              s.a.dynamic([["2358739874", [c, c]]]) +
              " input-wrap",
            children: [
              Object(r.jsx)(B.b, {
                ref: u,
                validationResults: p.error
                  ? [{ state: "error", message: p.error.message }]
                  : void 0,
                autoFocus: !0,
                value: p.value,
                onBlur() {
                  p.value && p.value !== n ? (p.error ? o() : a(p.value)) : o();
                },
                onKeyUp: p.validate,
                onKeyDown(e) {
                  if ("Enter" === e.key) {
                    if (p.error) return;
                    return p.value !== n && p.value
                      ? void a(p.value)
                      : void o();
                  }
                  "Escape" === e.key && o();
                },
                onChange(e) {
                  p.setValue(e.target.value);
                },
              }),
              Object(r.jsx)("div", {
                className:
                  "jsx-125275207 " +
                  s.a.dynamic([["2358739874", [c, c]]]) +
                  " icon",
                children: Object(r.jsx)(_, { type: t, path: p.value }),
              }),
              Object(r.jsx)(s.a, {
                id: "2358739874",
                dynamic: [c, c],
                children: [
                  ".input-wrap.__jsx-style-dynamic-selector input{padding-left:calc(".concat(
                    c,
                    " * var(--spacing-2) + var(--spacing-6));}"
                  ),
                  ".icon.__jsx-style-dynamic-selector{padding-left:calc(".concat(
                    c,
                    " * var(--spacing-2));}"
                  ),
                ],
              }),
              Object(r.jsx)(s.a, {
                id: "125275207",
                children: [
                  ".input-wrap.jsx-125275207{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;font-size:var(--font-size-desktop-text-small);position:relative;}",
                  ".input-wrap.jsx-125275207 input{font-size:inherit;padding-top:var(--spacing-half);padding-bottom:var(--spacing-half);}",
                  ".icon.jsx-125275207{color:var(--color-foreground-2);pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;left:0;height:100%;}",
                ],
              }),
            ],
          })
        );
      }
      const K = n("7njZ");
      function Z(e) {
        const t = e.type,
          n = e.create,
          a = e.onCreate,
          i = e.onError,
          c = e.onCancel,
          u = e.parentPath,
          d = e.depth,
          p = void 0 === d ? 0 : d,
          f = e.siblings,
          b = Object(K.a)(),
          j = l.useState(null),
          h = Object(o.a)(j, 2),
          g = h[0],
          v = h[1];
        return g
          ? Object(r.jsxs)("div", {
              className: "jsx-4270797373 pending-node",
              children: [
                Object(r.jsxs)(R, {
                  depth: p,
                  onClick() {
                    return null;
                  },
                  children: [
                    Object(r.jsx)(_, { path: g.filename, type: g.type }),
                    Object(r.jsx)(A, { children: g.filename }),
                  ],
                }),
                Object(r.jsx)(s.a, {
                  id: "4270797373",
                  children: [
                    ".pending-node.jsx-4270797373{pointer-events:none;opacity:0.5;}",
                  ],
                }),
              ],
            })
          : Object(r.jsx)(W, {
              depth: p,
              siblings: f,
              type: t,
              onCancel: c,
              onSubmit(e) {
                if (!g) {
                  const r = { path: u ? u + "/" + e : e, type: t };
                  v({ filename: e, type: t }),
                    n(r)
                      .then(() => {
                        b.current && (v(null), a(r));
                      })
                      .catch((e) => {
                        b.current && i(e);
                      });
                }
              },
            });
      }
      const X = n("gfZM"),
        Q = n("V6K1"),
        Y = n("xom/"),
        $ = n("IdsG");
      function ee(e) {
        const t = e.filename,
          n = e.onCancel,
          a = e.onConfirm;
        return Object(r.jsxs)("div", {
          className: "jsx-4280829187 content",
          children: [
            Object(r.jsxs)(Y.b, {
              spacing: 4,
              children: [
                Object(r.jsxs)(Y.b, {
                  spacing: 1,
                  children: [
                    Object(r.jsxs)(Q.a, {
                      level: 3,
                      children: ["Delete ", t, "?"],
                    }),
                    Object(r.jsx)($.a, {
                      foreground: 2,
                      children:
                        "Are you sure you want delete this file? This cannot be undone.",
                    }),
                  ],
                }),
                Object(r.jsxs)(Y.a, {
                  spacing: 1,
                  children: [
                    Object(r.jsx)(m.a, {
                      autoFocus: !0,
                      onClick: n,
                      children: "Cancel",
                    }),
                    Object(r.jsx)(m.a, {
                      color: "negative",
                      filled: !0,
                      onClick: a,
                      children: "Yes, delete this file",
                    }),
                  ],
                }),
              ],
            }),
            Object(r.jsx)(s.a, {
              id: "4280829187",
              children: [".content.jsx-4280829187{padding:var(--spacing-4);}"],
            }),
          ],
        });
      }
      const te = n("GRpk");
      function ne(e) {
        const t = e.rows,
          n = void 0 === t ? 3 : t,
          a = e.depth,
          o = void 0 === a ? 0 : a,
          i = "fileTreeLoader2-" + Math.random().toString();
        return Object(r.jsxs)("div", {
          className: s.a.dynamic([["772706436", [o]]]) + " loader",
          children: [
            Object(r.jsx)(te.a, {
              primaryColor: "var(--color-control-1)",
              secondaryColor: "var(--color-control-3)",
              height: 32 * n,
              width: 250,
              className: "content-loader",
              uniquekey: i,
              children: Array(n)
                .fill(null)
                .map((e, t) => {
                  return Object(r.jsxs)(
                    l.Fragment,
                    {
                      children: [
                        Object(r.jsx)("circle", {
                          cx: "28",
                          cy: "".concat(16 + 32 * t),
                          r: "8",
                          className: s.a.dynamic([["772706436", [o]]]),
                        }),
                        Object(r.jsx)("rect", {
                          x: 48,
                          y: "".concat(7 + 32 * t),
                          rx: "3",
                          ry: "3",
                          width: "".concat(
                            100 + ((n = t), n % 2 !== 0 ? -10 * n : 10 * n)
                          ),
                          height: "16",
                          className: s.a.dynamic([["772706436", [o]]]),
                        }),
                      ],
                    },
                    t
                  );
                  var n;
                }),
            }),
            Object(r.jsx)(s.a, {
              id: "772706436",
              dynamic: [o],
              children: [
                ".loader.__jsx-style-dynamic-selector{width:100%;height:100%;overflow:hidden;padding-left:calc(".concat(
                  o,
                  " * var(--spacing-2));}"
                ),
                ".loader.__jsx-style-dynamic-selector>svg{width:250px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
              ],
            }),
          ],
        });
      }
      function re(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ae(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? re(Object(n), !0).forEach((t) => {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : re(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function oe(e) {
        const t = e.parentPath,
          n = e.nodes,
          a = e.loading,
          c = e.error,
          s = e.readOnly,
          u = Object(i.a)(e, [
            "parentPath",
            "nodes",
            "loading",
            "error",
            "readOnly",
          ]),
          d = Object(V.a)().showError,
          p = t ? t.split("/") : [],
          f = u.fs,
          b = u.pendingFileType,
          m = u.setPendingFileType,
          y = u.onNodeClick,
          w = u.activePath,
          k = ((e) => {
            const t = l.useState(null),
              n = Object(o.a)(t, 2),
              r = n[0],
              a = n[1],
              i = l.useState(null),
              c = Object(o.a)(i, 2),
              s = c[0],
              u = c[1];
            return (
              l.useEffect(() => {
                if (s) {
                  let t = !1;
                  return (
                    "rename" === s.type
                      ? (s.fileType === O.d.File
                          ? e.moveFile(s.path, s.to)
                          : e.moveDir(s.path, s.to)
                        ).then((e) => {
                          t || (u(null), e.error && a(e.error));
                        })
                      : (s.fileType === O.d.File
                          ? e.deleteFile(s.path)
                          : e.deleteDir(s.path)
                        ).then((e) => {
                          t || (u(null), e.error && a(e.error));
                        }),
                    () => {
                      t = !0;
                    }
                  );
                }
                a(null);
              }, [s, e]),
              {
                renameNode(e) {
                  return u(ae(ae({}, e), {}, { type: "rename" }));
                },
                deleteNode(e) {
                  return u(ae(ae({}, e), {}, { type: "delete" }));
                },
                currentOp: s,
                error: r,
              }
            );
          })(f),
          E = k.renameNode,
          C = k.deleteNode,
          P = k.currentOp,
          D = k.error,
          T = l.useState(null),
          N = Object(o.a)(T, 2),
          S = N[0],
          I = N[1],
          F = l.useState(null),
          M = Object(o.a)(F, 2),
          z = M[0],
          G = M[1];
        if (
          (l.useEffect(() => {
            D && d("Something went wrong trying to more or remove a file.");
          }, [D, d]),
          a)
        )
          return Object(r.jsx)(ne, { rows: t ? 1 : 5, depth: p.length });
        if (c)
          return Object(r.jsx)(R, {
            depth: p.length,
            interactive: !1,
            children: c,
          });
        if (!n) return null;
        const q = n.some((e) => {
            if (w)
              return (
                e.type === O.d.File &&
                (t ? w.endsWith("/" + e.filename) : w === e.filename)
              );
          }),
          B =
            !s &&
            b &&
            ((!t && !w) || w === t || q || (!t && w && x.a.includes(w)));
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)("div", {
              style: { position: "relative" },
              children: Object(r.jsx)("div", {
                style: {
                  position: "absolute",
                  top: 0,
                  display: "none",
                  left: 0,
                },
                children: Object(r.jsx)(ne, {
                  rows: p.length ? 3 : 6,
                  depth: p.length,
                }),
              }),
            }),
            n.map((e) => {
              const t = e.filename,
                a = e.type,
                o = [].concat(Object(g.a)(p), [t]).join("/"),
                i = n.filter((e) => {
                  return e.filename !== t;
                });
              if ((null === P || void 0 === P ? void 0 : P.path) === o)
                return "rename" === P.type
                  ? Object(r.jsxs)(
                      R,
                      {
                        depth: p.length,
                        onClick() {
                          return null;
                        },
                        children: [
                          Object(r.jsx)(_, { type: O.d.File, path: o }),
                          Object(r.jsx)(A, {
                            children: P.path.split("/").pop() || "",
                          }),
                        ],
                      },
                      t
                    )
                  : null;
              if ((null === S || void 0 === S ? void 0 : S.filename) === t)
                return Object(r.jsx)(
                  R,
                  {
                    depth: 0,
                    onClick() {
                      return null;
                    },
                    children: Object(r.jsx)(W, {
                      type: a,
                      depth: p.length,
                      siblings: i,
                      initialValue: t,
                      onSubmit(e) {
                        const t = [].concat(Object(g.a)(p), [e]).join("/");
                        E({ fileType: a, path: o, to: t });
                      },
                      onCancel() {
                        return I(null);
                      },
                    }),
                  },
                  t
                );
              const c = {
                siblings: i,
                readOnly: s,
                active: w === o,
                path: o,
                key: t,
                getNodeType: (() => {
                  const e = Object(h.a)(
                    j.a.mark(function e(t) {
                      let n;
                      return j.a.wrap((e) => {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), f.readFile(t);
                            case 2:
                              return (
                                (n = e.sent),
                                e.abrupt(
                                  "return",
                                  n.error === O.e.IsDirectory
                                    ? O.d.Directory
                                    : O.d.File
                                )
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                overwriteNode: (() => {
                  const e = Object(h.a)(
                    j.a.mark(function e(t) {
                      let n, r, i;
                      return j.a.wrap((e) => {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.path),
                                (r = t.type),
                                (i =
                                  r === O.d.Directory
                                    ? f.deleteDir
                                    : f.deleteFile),
                                (e.next = 4),
                                i(n)
                              );
                            case 4:
                              if (!e.sent.error) {
                                e.next = 8;
                                break;
                              }
                              return (
                                d(
                                  "Something went wrong trying to move: ".concat(
                                    o
                                  )
                                ),
                                e.abrupt("return")
                              );
                            case 8:
                              E({ path: o, fileType: a, to: n });
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                onClick() {
                  const e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : { newTab: !1 },
                    t = e.newTab;
                  return y({ path: o, type: a, newTab: t });
                },
                onRename() {
                  return I({ filename: t, type: a });
                },
                onDelete() {
                  return G({ filename: t, type: a });
                },
              };
              return a === O.d.File
                ? Object(r.jsx)(H, ae({}, c))
                : Object(r.jsx)(pe, ae(ae({}, c), u));
            }),
            u.pendingUploads
              ? u.pendingUploads.map((e) => {
                  const a = e.lastIndexOf("/");
                  return (-1 !== a ? e.slice(0, a) : void 0) !== t
                    ? null
                    : Object(r.jsx)(
                        H,
                        {
                          onRename() {
                            return null;
                          },
                          onDelete() {
                            return null;
                          },
                          overwriteNode() {
                            return null;
                          },
                          getNodeType: Object(h.a)(
                            j.a.mark(function e() {
                              return j.a.wrap((e) => {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt("return", O.d.File);
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          ),
                          siblings: n.filter((t) => {
                            return t.filename !== e;
                          }),
                          path: e,
                          readOnly: !0,
                          onClick() {
                            return null;
                          },
                        },
                        e
                      );
                })
              : null,
            s || n.length || B
              ? null
              : Object(r.jsx)(L, { depth: p.length, onCreateClick: m }),
            B && b
              ? Object(r.jsx)(Z, {
                  siblings: n || [],
                  depth: p.length,
                  parentPath: t,
                  create(e) {
                    const t = e.path,
                      n = e.type;
                    return (
                      n === O.d.File &&
                        "readme.md" === t.toLowerCase() &&
                        Object(v.track)(v.events.README_CREATED),
                      n === O.d.File
                        ? f.writeFile(t, X.a.from(""))
                        : f.createDir(t)
                    );
                  },
                  type: b,
                  onError(e) {
                    return d("Something went wrong: ".concat(e));
                  },
                  onCancel() {
                    return m(null);
                  },
                  onCreate(e) {
                    m(null), y(e);
                  },
                })
              : null,
            Object(r.jsx)(U.a, {
              isOpen: Boolean(z),
              onRequestClose() {
                return G(null);
              },
              children: z
                ? Object(r.jsx)(ee, {
                    filename: z.filename,
                    onCancel() {
                      return G(null);
                    },
                    onConfirm() {
                      G(null),
                        C({
                          fileType: z.type,
                          path: []
                            .concat(Object(g.a)(p), [z.filename])
                            .join("/"),
                        });
                    },
                  })
                : null,
            }),
          ],
        });
      }
      const ie = n("aMZS"),
        ce = n("8/ze"),
        se = n("NuhN"),
        le = n("v0rv");
      function ue(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function de(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(n), !0).forEach((t) => {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function pe(e) {
        const t = e.path,
          n = e.active,
          a = e.onClick,
          c = e.onRename,
          u = e.onDelete,
          b = e.overwriteNode,
          j = Object(i.a)(e, [
            "path",
            "active",
            "onClick",
            "onRename",
            "onDelete",
            "overwriteNode",
          ]),
          h = j.fs,
          g = j.transformChildren,
          v = j.uploadFiles,
          m = j.readOnly,
          y = j.getNodeType,
          k = j.setPendingFileType,
          E = j.activePath ? j.activePath.split("/") : [],
          C = t.split("/"),
          P = C.length - 1,
          D = C[P],
          T = !n && E[P] === D,
          N = t === ce.a,
          S = Object(V.a)().showError,
          L = l.useState(null),
          F = Object(o.a)(L, 2),
          z = F[0],
          G = F[1],
          H = l.useState(null),
          q = Object(o.a)(H, 2),
          B = q[0],
          J = q[1],
          W = l.useState([]),
          K = Object(o.a)(W, 2),
          Z = K[0],
          X = K[1];
        l.useEffect(() => {
          if (z) {
            let e = !1;
            return (
              z.dir.then((t) => {
                if (!e) {
                  if (t.error) {
                    if (t.error === O.e.AlreadyExists) {
                      const n =
                        "." === z.path ? D : "".concat(z.path, "/").concat(D);
                      return void y(n).then((e) => {
                        J({ path: n, type: e }), G(null);
                      });
                    }
                    S("Something went wrong trying to remove ".concat(D));
                  }
                  G(null);
                }
              }),
              () => {
                e = !0;
              }
            );
          }
        }, [z, D, y, S]);
        const Q = l.useState(null),
          Y = Object(o.a)(Q, 2),
          $ = Y[0],
          ee = Y[1];
        l.useEffect(() => {
          if ($) {
            let e = !1;
            return (
              ("dir" in $ ? $.dir : $.file).then(() => {
                e || ee(null);
              }),
              () => {
                e = !0;
              }
            );
          }
        }, [$]);
        const te = Object(f.a)({
            path: t,
            initialExpanded: N || T || n,
            fs: j.fs,
          }),
          ne = te.collapse,
          re = te.expand,
          ae = te.children,
          le = te.loading,
          ue = te.error,
          pe = te.expanded;
        l.useEffect(() => {
          !pe && T && re();
        }, [re, pe, T]),
          l.useEffect(() => {
            !pe && n && j.pendingFileType && re();
          }, [re, pe, n, j.pendingFileType]);
        const be = Object(I.a)({
            item: { type: O.d.Directory, path: t },
            canDrag() {
              return !j.readOnly;
            },
            collect(e) {
              return { isDragging: e.isDragging() };
            },
            end(e, t) {
              t.didDrop() && G(t.getDropResult());
            },
          }),
          je = Object(o.a)(be, 2),
          he = je[0].isDragging,
          ge = je[1],
          ve = Object(ie.a)({
            accept: [O.d.File, O.d.Directory, p.b.FILE],
            canDrop(e) {
              return (
                "files" in e ||
                (e.path !== t &&
                  !Object(se.d)(e.path, t) &&
                  !(
                    Object(se.b)(t, e.path) ||
                    (t === ce.a && !e.path.includes("/"))
                  ))
              );
            },
            drop(e, n) {
              if (!n.didDrop()) {
                if (!("dirContent" in e)) {
                  const r = e.path.split("/"),
                    a = r[r.length - 1];
                  if (
                    null === ae || void 0 === ae
                      ? void 0
                      : ae.find((e) => {
                          return e.filename === a;
                        })
                  )
                    return e.type === O.d.Directory
                      ? {
                          dir: Promise.resolve({ error: O.e.AlreadyExists }),
                          path: t,
                        }
                      : {
                          file: Promise.resolve({ error: O.e.AlreadyExists }),
                          path: t,
                        };
                  if (
                    null !== ae &&
                    void 0 !== ae &&
                    ae.some((n) => {
                      return (
                        "".concat(t, "/").concat(n.filename, "}") === e.path
                      );
                    })
                  ) {
                    const o = Promise.resolve({ error: null });
                    return e.type === O.d.Directory
                      ? { dir: o, path: t }
                      : { file: o, path: t };
                  }
                  const i = t + "/" + a;
                  if (e.type === O.d.Directory) {
                    const c = h.moveDir(e.path, i);
                    return ee({ dir: c }), { dir: c, path: t };
                  }
                  const s = h.moveFile(e.path, i);
                  return ee({ file: s }), { file: s, path: t };
                }
                e.dirContent.then((e) => {
                  v({ parentPath: N ? void 0 : t, files: e });
                });
              }
            },
            collect(e) {
              return { isOver: e.canDrop() && e.isOver({ shallow: !0 }) };
            },
          }),
          xe = Object(o.a)(ve, 2),
          Oe = xe[0].isOver,
          me = xe[1];
        l.useEffect(() => {
          if (Oe && !pe) {
            const e = setTimeout(re, 500);
            return () => {
              clearTimeout(e);
            };
          }
        }, [Oe, re, pe]),
          l.useEffect(() => {
            ae &&
              t === ce.a &&
              X(
                ae.filter((e) => {
                  return x.a.includes(e.filename);
                })
              );
          }, [t, ae]);
        let ye = ae;
        return (
          ye && g && (ye = g({ children: ye, path: t })),
          Object(r.jsxs)("div", {
            ref(e) {
              me(e), ge(e);
            },
            className:
              "jsx-3964962450 " +
              (d()("dir-node", {
                "is-dropping": Oe,
                "is-dragging": he,
                "is-removing": z,
                "root-node": t === ce.a,
              }) || ""),
            children: [
              N
                ? null
                : Object(r.jsx)(R, {
                    active: n || Oe,
                    depth: P,
                    onClick(e) {
                      pe ? ne() : re(), a(e);
                    },
                    actions: m
                      ? void 0
                      : [w.a.Rename, w.a.AddFile, w.a.AddFolder, w.a.Delete],
                    onAction(e) {
                      switch ((n || a(), pe || re(), e)) {
                        case w.a.Rename:
                          return void c();
                        case w.a.AddFile:
                          return void k(O.d.File);
                        case w.a.AddFolder:
                          return void k(O.d.Directory);
                        case w.a.Delete:
                          u();
                      }
                    },
                    children: Object(r.jsxs)("div", {
                      className: "jsx-3964962450 node-info",
                      children: [
                        Object(r.jsx)(_, {
                          type: O.d.Directory,
                          path: t,
                          expanded: pe,
                          active: n,
                        }),
                        Object(r.jsx)(A, { children: D }),
                      ],
                    }),
                  }),
              Object(r.jsx)("div", {
                className: "jsx-3964962450 " + (d()({ hidden: !pe }) || ""),
                children: Object(r.jsx)(
                  oe,
                  de(
                    {
                      parentPath: N ? void 0 : t,
                      nodes: ye,
                      loading: le || (N && !g),
                      error: ue,
                    },
                    j
                  )
                ),
              }),
              Z.length
                ? Object(r.jsx)(fe, {
                    socialView: Boolean(m),
                    children: Object(r.jsx)(
                      oe,
                      de(
                        de({}, j),
                        {},
                        {
                          uploadFiles() {},
                          pendingFileType: null,
                          setPendingFileType() {},
                          nodes: Z,
                          parentPath: void 0,
                        }
                      )
                    ),
                  })
                : null,
              Object(r.jsx)(U.a, {
                isOpen: Boolean(B),
                onRequestClose() {
                  return J(null);
                },
                children: B
                  ? Object(r.jsx)(M.a, {
                      paths: [B.path],
                      onCancel() {
                        return J(null);
                      },
                      onConfirm() {
                        b(B), J(null);
                      },
                    })
                  : null,
              }),
              Object(r.jsx)(s.a, {
                id: "3964962450",
                children: [
                  ".dir-node.jsx-3964962450{border-radius:var(--border-radius-1);}",
                  ".root-node.jsx-3964962450{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}",
                  ".node-info.jsx-3964962450{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}",
                  ".hidden.jsx-3964962450{display:none;height:0;width:0;}",
                  ".is-removing.jsx-3964962450{opacity:0.5;pointer-events:none;}",
                  ".is-dropping.jsx-3964962450{background-color:var(--color-primary-transparent-2);}",
                  ".is-dragging.jsx-3964962450{opacity:0.7;}",
                ],
              }),
            ],
          })
        );
      }
      function fe(e) {
        const t = e.socialView,
          n = e.children;
        return t
          ? Object(r.jsxs)(r.Fragment, {
              children: [
                Object(r.jsx)(le.a, { height: 1 }),
                Object(r.jsxs)(Y.b, {
                  align: "stretch",
                  spacing: 1,
                  children: [
                    Object(r.jsx)("span", {
                      className: "jsx-156114122 eyebrow",
                      children: "Package files",
                    }),
                    Object(r.jsx)("div", {
                      className: "jsx-156114122 packager-nodes-wrapper",
                      children: n,
                    }),
                  ],
                }),
                Object(r.jsx)(s.a, {
                  id: "156114122",
                  children: [
                    ".eyebrow.jsx-156114122{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;font-size:var(--font-size-desktop-text-xsmall);color:var(--color-foreground-2);font-weight:var(--font-weight-medium);text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-align:center;}",
                    ".packager-nodes-wrapper.jsx-156114122{position:relative;width:100%;}",
                  ],
                }),
              ],
            })
          : Object(r.jsxs)(Y.b, {
              spacing: 0,
              children: [
                Object(r.jsx)("div", {
                  className: "jsx-2856158915 heading-container",
                  children: Object(r.jsx)(Q.a, {
                    level: 5,
                    children: "Packager files",
                  }),
                }),
                n,
                Object(r.jsx)(s.a, {
                  id: "2856158915",
                  children: [
                    ".heading-container.jsx-2856158915{padding:var(--spacing-2) var(--spacing-1) var(--spacing-2) var(--spacing-2);white-space:nowrap;}",
                  ],
                }),
              ],
            });
      }
    },
    "7lhO": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return o;
      });
      const r = n("q1tI"),
        a = n("f47c");
      function o() {
        const e = r.useContext(a.a);
        if (!e) throw new Error("Expected repl id to be in context");
        return e;
      }
    },
    AYTL(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return l;
      });
      const r = n("cpVT"),
        a = n("nKUr"),
        o = n("dhJC"),
        i = (n("q1tI"), n("pDQI"));
      function c(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach((t) => {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e) {
        const t = e.orientation,
          n = Object(o.a)(e, ["orientation"]),
          r = "horizontal" === t ? 90 : 0;
        return Object(a.jsxs)(
          i.a,
          s(
            s({}, n),
            {},
            {
              rotate: r,
              children: [
                Object(a.jsx)("path", {
                  d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(a.jsx)("path", {
                  d: "M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(a.jsx)("path", {
                  d: "M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z",
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
    Dtuc(e, t, n) {
      "use strict";
      n.d(t, "b", () => {
        return d;
      });
      let r;
      const a = n("vJKn");
      const o = n.n(a);
      const i = n("rg98");
      const c = n("g7Gn");
      const s = n("G5Ub");
      const l = n("yz3v");

      const u = (() => {
        const e = Object(i.a)(
          o.a.mark(function e() {
            let t;
            return o.a.wrap((e) => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!r) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", Promise.resolve(r));
                  case 2:
                    return (
                      (e.next = 4),
                      Object(s.c)("/public/ace/".concat(l.version, "/ace.js"))
                    );
                  case 4:
                    if ((r = window.ace)) {
                      e.next = 9;
                      break;
                    }
                    throw ((t = new Error("Failed to load ace")), c.c(t), t);
                  case 9:
                    return (
                      (e.next = 11),
                      Promise.all([
                        n.e(67).then(n.t.bind(null, "A8C4", 7)),
                        n.e(260).then(n.t.bind(null, "n2/T", 7)),
                      ])
                    );
                  case 11:
                    return (
                      r.require("ace/language_tools"), e.abrupt("return", r)
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();

      var d = () => {
        if (!r) throw new Error("Expected ace to be loaded");
        return r;
      };

      t.a = u;
    },
    EP3k(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return l;
      });
      const r = n("vJKn"),
        a = n.n(r),
        o = n("rg98"),
        i = n("0gYX"),
        c = n.n(i),
        s = n("gfZM");
      function l(e) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = Object(o.a)(
          a.a.mark(function e(t) {
            let n, r, o, i, l, u;
            return a.a.wrap((e) => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.fs), (r = t.language), (e.next = 3), n.readDir(".")
                    );
                  case 3:
                    if (!(o = e.sent).error) {
                      e.next = 6;
                      break;
                    }
                    throw new Error("Could not read files");
                  case 6:
                    return (
                      (i = o.children),
                      !(l = c.a.getMainFileName(r)) &&
                        i.length &&
                        (l = i[0].filename),
                      (e.next = 11),
                      n.readFile(l)
                    );
                  case 11:
                    if (!(u = e.sent).error) {
                      e.next = 14;
                      break;
                    }
                    throw u.error;
                  case 14:
                    return e.abrupt("return", s.a.from(u.content).toString());
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    IjuC(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return i;
      });
      const r = n("vJKn"),
        a = n.n(r),
        o = n("rg98");
      function i(e) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = Object(o.a)(
          a.a.mark(function e(t) {
            return a.a.wrap(
              (e) => {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (window.navigator.clipboard) {
                        e.next = 3;
                        break;
                      }
                      return s(t), e.abrupt("return");
                    case 3:
                      return (
                        (e.prev = 3),
                        (e.next = 6),
                        window.navigator.clipboard.writeText(t)
                      );
                    case 6:
                      e.next = 11;
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(3)), s(t);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 8]]
            );
          })
        )).apply(this, arguments);
      }
      function s(e) {
        const t = document.createElement("textarea");
        (t.value = e),
          (t.style.top = "0"),
          (t.style.left = "0"),
          (t.style.position = "fixed"),
          document.body.appendChild(t),
          t.focus(),
          t.select(),
          document.execCommand("copy"),
          document.body.removeChild(t);
      }
    },
    JOwT(e, t, n) {
      "use strict";
      t.a = [
        "package.json",
        "package-lock.json",
        "yarn.lock",
        "node_modules",
        "poetry.lock",
        "pyproject.toml",
        "requirements.txt",
        ".venv/",
        ".local",
        "go.mod",
        "go.sum",
        "Gemfile",
        "Gemfile.lock",
        "pom.xml",
        "target",
      ];
    },
    LTTG(e, t, n) {
      "use strict";
      ((e) => {
        n.d(t, "a", () => {
          return d;
        });
        const r = n("vJKn"),
          a = n.n(r),
          o = n("rg98"),
          i = n("RPwF"),
          c = n("zgDP"),
          s = n("dZ/7"),
          l = n("HADy"),
          u = n("Fz/E");
        function d(t) {
          let r;
          const d = t.beforeRun;
          const p = t.getMainFileContents;
          const f = Object(u.a)();
          let b = l.b.OFFLINE;
          function j(e) {
            (b = e), f.emit(s.a.STATE_CHANGE, b);
          }
          function h(e) {
            return g.apply(this, arguments);
          }
          function g() {
            return (g = Object(o.a)(
              a.a.mark(function t(o) {
                let u, d, p, b, g, x, O, m, y, w, k, E;
                return a.a.wrap((t) => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (u = o.replId),
                          (d = o.hostedUrl),
                          (p = o.language),
                          (b = o.iframeParent),
                          (g = o.timeout),
                          (x = void 0 === g ? 5e3 : g),
                          r && v(),
                          (t.next = 4),
                          n
                            .e(66)
                            .then(n.t.bind(null, "i5jj", 7))
                            .then((e) => {
                              return e.default;
                            })
                        );
                      case 4:
                        if (((O = t.sent), b))
                          for (; b.firstChild; ) b.removeChild(b.firstChild);
                        if (
                          ((m = new O(p, {
                            useIframe: !0,
                            iframeParent: b,
                            track: c.track,
                          })).on("warn", (e) => {
                            f.emit(s.a.OUTPUT, e);
                          }),
                          (y = e.env.PR_REVIEW_APP
                            ? "/public/secure/"
                            : "https://replbox.repl.it/public/secure/"),
                          "html" !== p)
                        ) {
                          t.next = 13;
                          break;
                        }
                        if (d) {
                          t.next = 12;
                          break;
                        }
                        throw new Error("Expected hostedUrl for " + p);
                      case 12:
                        y = d + "/__debug_wrapper.html";
                      case 13:
                        return (
                          (w = "kaboom" === p ? "html" : p),
                          (k = ""
                            .concat(
                              window.location.origin,
                              "/public/replbox_lang/"
                            )
                            .concat(i.version, "/")
                            .concat(w, ".js")),
                          (E = !1),
                          (t.next = 18),
                          new Promise((e, t) => {
                            const n = setTimeout(() => {
                                (E = !0),
                                  Object(c.track)(
                                    c.events.LOAD_REPLBOX_ENGINE_TIMED_OUT,
                                    { language: p }
                                  ),
                                  e();
                              }, x),
                              r = window.performance.now();
                            m.load({ iframeOrigin: y, languageBundleSrc: k })
                              .then(() => {
                                clearTimeout(n),
                                  Object(c.track)(
                                    c.events.LOAD_REPLBOX_ENGINE_TIME,
                                    { time: window.performance.now() - r }
                                  ),
                                  e();
                              })
                              .catch((e) => {
                                clearTimeout(n), t(e);
                              });
                          })
                        );
                      case 18:
                        if (!E) {
                          t.next = 21;
                          break;
                        }
                        return (
                          m.destroy(),
                          t.abrupt(
                            "return",
                            h({
                              replId: u,
                              language: p,
                              hostedUrl: d,
                              iframeParent: b,
                            })
                          )
                        );
                      case 21:
                        (r = {
                          replId: u,
                          replbox: m,
                          language: p,
                          hostedUrl: d,
                        }),
                          j(l.b.IDLE);
                      case 23:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          function v() {
            let e;
            if (null === (e = r) || void 0 === e || !e.replbox)
              throw new Error("replbox not loaded. runState is; " + b);
            j(l.b.OFFLINE), r.replbox.destroy(), (r = null);
          }
          function x() {
            return (x = Object(o.a)(
              a.a.mark(function e() {
                let t;
                let n;
                let o;
                const i = arguments;
                return a.a.wrap((e) => {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = i.length > 0 && void 0 !== i[0] ? i[0] : {}),
                          (n = t.clean),
                          r)
                        ) {
                          e.next = 3;
                          break;
                        }
                        throw new Error(
                          "replbox not loaded. runState is; " + b
                        );
                      case 3:
                        if ("web_project" !== r.language) {
                          e.next = 5;
                          break;
                        }
                        throw new Error("TODO?");
                      case 5:
                        return j(l.b.RUNNING), (e.next = 8), d(r.language);
                      case 8:
                        if (b === l.b.RUNNING) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return");
                      case 10:
                        if (r) {
                          e.next = 12;
                          break;
                        }
                        throw new Error(
                          "replbox not loaded. runState is; " + b
                        );
                      case 12:
                        if ("html" !== r.language) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.next = 15),
                          r.replbox.runProject([], {
                            stdout(e) {
                              return f.emit(s.a.OUTPUT, e);
                            },
                            stderr(e) {
                              return f.emit(s.a.ERROR, e);
                            },
                            replId: r.replId,
                            url: r.hostedUrl,
                          })
                        );
                      case 15:
                        return e.abrupt("return");
                      case 16:
                        if (!n) {
                          e.next = 21;
                          break;
                        }
                        return (e.next = 19), r.replbox.reset();
                      case 19:
                        if (b === l.b.RUNNING) {
                          e.next = 21;
                          break;
                        }
                        return e.abrupt("return");
                      case 21:
                        return (e.next = 23), p(r.language);
                      case 23:
                        if (((o = e.sent), b === l.b.RUNNING)) {
                          e.next = 26;
                          break;
                        }
                        return e.abrupt("return");
                      case 26:
                        return e.abrupt("return", O(o));
                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function O(e) {
            return m.apply(this, arguments);
          }
          function m() {
            return (m = Object(o.a)(
              a.a.mark(function e(t) {
                let n;
                return a.a.wrap((e) => {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (r) {
                          e.next = 2;
                          break;
                        }
                        throw new Error(
                          "replbox not loaded. runState is; " + b
                        );
                      case 2:
                        return (
                          b !== l.b.RUNNING && j(l.b.RUNNING),
                          (e.next = 5),
                          r.replbox.evaluate(t, {
                            stdout(e) {
                              return f.emit(s.a.OUTPUT, e);
                            },
                          })
                        );
                      case 5:
                        if (((n = e.sent), b === l.b.RUNNING)) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return");
                      case 8:
                        if (!n.error) {
                          e.next = 11;
                          break;
                        }
                        return f.emit(s.a.ERROR, n.error), e.abrupt("return");
                      case 11:
                        f.emit(s.a.OUTPUT, n.data), j(l.b.IDLE);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return {
            load: h,
            run() {
              return x.apply(this, arguments);
            },
            evalCode: O,
            refreshWebview() {
              if (!r) throw new Error("replbox not loaded. runState is; " + b);
              r.replbox.refreshWebProject();
            },
            stopRun() {
              if (!r) throw new Error("replbox not loaded. runState is; " + b);
              try {
                r.replbox.stop();
              } catch (e) {
                if (e.message.match(/postmessage/i)) return;
                throw e;
              }
              j(l.b.IDLE);
            },
            destroy: v,
            onOutput(e) {
              return (
                f.on(s.a.OUTPUT, e),
                () => {
                  f.removeListener(s.a.OUTPUT, e);
                }
              );
            },
            onStateChanged(e) {
              return (
                f.on(s.a.STATE_CHANGE, e),
                () => {
                  f.removeListener(s.a.STATE_CHANGE, e);
                }
              );
            },
            getRunState() {
              return b;
            },
          };
        }
      }).call(this, n("8oxB"));
    },
    OQjE(e, t, n) {
      "use strict";
      n.d(t, "b", () => {
        return r;
      }),
        n.d(t, "a", () => {
          return a;
        });
      var r = "idle";
      function a() {
        const e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case "EVAL_STARTED":
          case "EVAL_SETUP":
            return "running";
          case "STOP_EVAL":
            return "stopping";
          case "EVAL_ENDED":
            return "idle";
          case "SET_RUN_STATE":
            return t.runstate;
          default:
            return e;
        }
      }
    },
    Qbrf(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return s;
      });
      const r = n("cpVT");
      function a(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach((t) => {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t) {
        let n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = ((e, t) => {
              if (!e) return;
              if ("string" === typeof e) return c(e, t);
              let n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            let r = 0;
            const a = () => {};
            return {
              s: a,
              n() {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e(e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let o,
          i = !0,
          s = !1;
        return {
          s() {
            n = e[Symbol.iterator]();
          },
          n() {
            const e = n.next();
            return (i = e.done), e;
          },
          e(e) {
            (s = !0), (o = e);
          },
          f() {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e) {
        "function" !== typeof e.primary &&
          (e.primary = function () {
            const e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return e;
          });
        const t = Object.keys(e);
        return (n, r) => {
          let a;
          let c = !1;
          const s = {};
          const l = i(t);
          try {
            for (l.s(); !(a = l.n()).done; ) {
              const u = a.value;
              if ("primary" !== u) {
                const d = e[u],
                  p = n ? n[u] : void 0,
                  f = d(p, r);
                (s[u] = f), (c = c || f !== p);
              }
            }
          } catch (h) {
            l.e(h);
          } finally {
            l.f();
          }
          const b = n ? (c ? o(o({}, n), s) : n) : void 0,
            j = e.primary(b, r);
          return (c = c || j !== b) ? o(o({}, s), j) : n;
        };
      }
    },
    QdtJ(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return d;
      });
      const r = n("nKUr"),
        a = n("MX0m"),
        o = n.n(a),
        i = (n("q1tI"), n("up5I")),
        c = n("V6K1"),
        s = n("xom/"),
        l = n("IdsG"),
        u = n("dI/k");
      function d(e) {
        let t;
        const n = e.paths;
        const a = e.onCancel;
        const d = e.onConfirm;
        return Object(r.jsxs)("div", {
          className: "jsx-4280829187 content",
          children: [
            Object(r.jsxs)(s.b, {
              spacing: 4,
              children: [
                Object(r.jsxs)(s.b, {
                  spacing: 1,
                  children: [
                    Object(r.jsx)(c.a, { level: 3, children: "Overwrite?" }),
                    Object(r.jsxs)(l.a, {
                      foreground: 2,
                      children: [
                        ((t = n),
                        (t = t.map(u.c)).length < 2
                          ? t[0]
                          : ""
                              .concat(t.slice(0, -1).join(", "), " and ")
                              .concat(t.slice(-1))),
                        " already exist in destination, are you sure you want overwrite them?",
                      ],
                    }),
                    Object(r.jsx)(l.a, {
                      foreground: 2,
                      children: "This action cannot be reversed.",
                    }),
                  ],
                }),
                Object(r.jsxs)(s.a, {
                  spacing: 1,
                  children: [
                    Object(r.jsx)(i.a, {
                      onClick() {
                        return a();
                      },
                      children: "Cancel",
                    }),
                    Object(r.jsx)(i.a, {
                      color: "negative",
                      filled: !0,
                      onClick() {
                        return d();
                      },
                      children: "Replace",
                    }),
                  ],
                }),
              ],
            }),
            Object(r.jsx)(o.a, {
              id: "4280829187",
              children: [".content.jsx-4280829187{padding:var(--spacing-4);}"],
            }),
          ],
        });
      }
    },
    RPwF(e) {
      e.exports = JSON.parse(
        '{"name":"@replit/replbox","version":"2.20.0","description":"A sandboxed browser REPL","main":"dist/index.js","files":["/dist"],"scripts":{"prepublishOnly":"yarn build && cp stuffjschild.html dist","clean":"rm -rf ./dist","build":"yarn clean && NODE_ENV=production webpack --config ./webpack.config.js --bail","test":"prettier --check  \\"src/**/*.js\\" && jest","prettier":"prettier --write \\"src/**/*.js\\"","dev":"NODE_ENV=development node dev_server.js"},"author":"amjad@repl.it","license":"UNLICENSED","devDependencies":{"@replit/alcor":"^0.1.0","@sentry/browser":"^5.7.1","apl":"git+https://github.com/ngn/apl.git#cc314fe3be5f2d018d556b7e91916711e46d265e","babel-core":"^6.25.0","babel-generator":"6.26.0","babel-loader":"7.1.2","babel-polyfill":"6.26.0","babel-preset-env":"1.6.1","babel-preset-stage-2":"6.24.1","babel-template":"6.26.0","babel-traverse":"6.26.0","babel-types":"^6.26.0","babylon":"6.18.0","biwascheme":"git+https://github.com/masad-frost/biwascheme.git#3c0d5a67cd1af696c69ab7fb085b2f42c8b0586c","codemirror":"^5.52.0","context-eval":"^0.1.0","empty-module":"^0.0.2","express":"^4.17.1","happypack":"^4.0.1","inspect-x":"1.7.0","jasmine-core":"^2.4.1","jasmine_dom_matchers":"^1.4.0","jest":"^24.9.0","prettier":"^1.18.2","puppeteer":"^1.11.0","script-loader":"0.7.0","serve-handler":"^6.1.2","stuff.js":"^0.4.1","underscore":"1.2.2","underscore.string":"2.0.0","webpack":"3.10","webpack-dev-middleware":"^2","whatwg-fetch":"^3.0.0"},"dependencies":{},"jest":{"globalSetup":"<rootDir>/jest_setup.js","globalTeardown":"<rootDir>/jest_teardown.js","verbose":true,"bail":1},"prettier":{"trailingComma":"all","tabWidth":2,"semi":true,"singleQuote":true}}'
      );
    },
    S6NQ(e, t, n) {
      "use strict";
      n.d(t, "b", () => {
        return j;
      }),
        n.d(t, "a", () => {
          return h;
        });
      const r = n("xvhg"),
        a = n("cpVT"),
        o = n("g7Gn"),
        i = n("gfZM"),
        c = n("NuhN"),
        s = n("tSgl"),
        l = n.n(s),
        u = n("XE6U");
      function d(e, t) {
        let n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = ((e, t) => {
              if (!e) return;
              if ("string" === typeof e) return p(e, t);
              let n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return p(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            let r = 0;
            const a = () => {};
            return {
              s: a,
              n() {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e(e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let o,
          i = !0,
          c = !1;
        return {
          s() {
            n = e[Symbol.iterator]();
          },
          n() {
            const e = n.next();
            return (i = e.done), e;
          },
          e(e) {
            (c = !0), (o = e);
          },
          f() {
            try {
              i || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach((t) => {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var j = {};
      function h() {
        const e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
          t = arguments.length > 1 ? arguments[1] : void 0;
        if ("string" === typeof t.path && l()(t.path)) return e;
        const n = (() => {
          switch (t.type) {
            case "FILE_UNLOAD":
              return b(
                b({}, e),
                {},
                Object(a.a)({}, t.path, { path: t.path, loaded: !1 })
              );
            case "FILE_LOADED":
            case "FILE_CACHE_HIT":
              return b(
                b({}, e),
                {},
                Object(a.a)({}, t.path, b(b({}, e[t.path]), t.file))
              );
            case "CREATE_FILE":
              return b(
                b({}, e),
                {},
                Object(a.a)({}, t.path, t.file || { path: t.path, loaded: !1 })
              );
            case "MOVE_FILE":
              const n = Object(c.g)(e, t.path, t.to);
              if (!n.length) return e;
              const o = b({}, e);
              return (
                n.forEach((t) => {
                  const n = Object(r.a)(t, 2),
                    a = n[0],
                    i = n[1];
                  delete o[a];
                  const c = e[a];
                  if (!c) throw new Error("No source file!");
                  o[i] = b(b({}, c), {}, { path: i });
                }),
                o
              );
            case "DELETE_FILE":
              const s = Object(c.e)(e, t.path);
              if (s.length && e[t.path])
                throw new u.a(
                  "matched children and node while deleting"
                ).setExtras({ path: t.path, fileState: e });
              const l = b({}, e);
              return (
                s.length
                  ? s.forEach((e) => {
                      delete l[e];
                    })
                  : delete l[t.path],
                l
              );
            case "OT_FILE_OP":
              if (!t.changeSource)
                throw new Error(
                  "Expected changeSource on action OT_FILE_OP got " +
                    JSON.stringify(t)
                );
              const d = e[t.path];
              if (!d)
                throw new Error(
                  "tried to perform an OT op on " +
                    t.path +
                    " but we don't know about that file."
                );
              if (!d.loaded) return e;
              const p = g(i.a.from(d.content).toString("utf8"), t.op);
              return b(
                b({}, e),
                {},
                Object(a.a)(
                  {},
                  t.path,
                  b(b({}, d), {}, { content: i.a.from(p) })
                )
              );
            default:
              return e;
          }
        })();
        return (
          n !== e &&
            !e[t.path] &&
            n[t.path] &&
            "CREATE_FILE" !== t.type &&
            o.m((n) => {
              n.setExtra("action", t),
                n.setExtra("prevstate", e),
                o.c(
                  new Error(
                    "created file without using CREATE_FILE or FILE_CACHE_HIT"
                  )
                );
            }),
          n
        );
      }
      function g(e, t) {
        let n;
        let r = e;
        let a = 0;
        const o = d(t);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            const i = n.value;
            if ("string" === typeof i)
              (r = r.slice(0, a) + i + r.slice(a)), (a += i.length);
            else if ("object" === typeof i && "number" === typeof i.d)
              r = r.slice(0, a) + r.slice(a + i.d);
            else {
              if ("number" !== typeof i) throw new Error("bad ot op: " + i);
              a += i;
            }
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        return r;
      }
    },
    TeFj(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return s;
      });
      const r = n("cpVT"),
        a = n("nKUr"),
        o = (n("q1tI"), n("pDQI"));
      function i(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach((t) => {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e) {
        return Object(a.jsxs)(
          o.a,
          c(
            c({}, e),
            {},
            {
              children: [
                Object(a.jsx)("path", {
                  d: "M9 12L2 12",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
                Object(a.jsx)("path", {
                  d: "M16 6L11 6C10.4477 6 10 6.44772 10 7L10 17C10 17.5523 10.4477 18 11 18L16 18",
                  strokeWidth: "2",
                }),
                Object(a.jsx)("path", {
                  d: "M16 18C16 19.6569 17.3431 21 19 21C20.6569 21 22 19.6569 22 18C22 16.3431 20.6569 15 19 15C17.3431 15 16 16.3431 16 18Z",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(a.jsx)("path", {
                  d: "M16 6C16 4.34315 17.3431 3 19 3C20.6569 3 22 4.34315 22 6C22 7.65685 20.6569 9 19 9C17.3431 9 16 7.65685 16 6Z",
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
    VwSA(e, t, n) {
      "use strict";
      t.a = {
        py: "#78ABC0",
        rb: "#DD646A",
        js: "#C5B007",
        jsx: "#C5B007",
        java: "#84BEE2",
        html: "#F98545",
        css: "#28AAE6",
        cpp: "#659AD1",
        c: "#A8B9CB",
      };
    },
    b0NY(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return s;
      });
      const r = n("xvhg"),
        a = n("q1tI"),
        o = n("7njZ"),
        i = n("tSgl"),
        c = n.n(i);
      function s(e) {
        const t = e.path,
          n = e.initialExpanded,
          i = e.fs,
          s = a.useState(null),
          l = Object(r.a)(s, 2),
          u = l[0],
          d = l[1],
          p = a.useState(null),
          f = Object(r.a)(p, 2),
          b = f[0],
          j = f[1],
          h = a.useState(Boolean(n)),
          g = Object(r.a)(h, 2),
          v = g[0],
          x = g[1],
          O = Object(o.a)();
        a.useEffect(() => {
          if (v) {
            const e = i.watchDir(t, {
              onChange(e) {
                d(
                  e.filter((e) => {
                    return !c()(e.filename);
                  })
                );
              },
              onError(e) {
                j(e);
              },
            });
            return () => {
              O.current && d(null), e();
            };
          }
        }, [i, t, v, d, j]);
        const m = a.useCallback(() => {
            x(!0);
          }, []),
          y = a.useCallback(() => {
            x(!1);
          }, []);
        return v
          ? b
            ? {
                collapse: y,
                expand: m,
                children: null,
                expanded: v,
                loading: !1,
                error: b,
              }
            : u
            ? {
                collapse: y,
                expand: m,
                children: u,
                loading: !1,
                error: b,
                expanded: v,
              }
            : {
                collapse: y,
                expand: m,
                children: u,
                loading: !0,
                error: b,
                expanded: v,
              }
          : {
              collapse: y,
              expand: m,
              children: null,
              loading: !1,
              error: null,
              expanded: v,
            };
      }
    },
    "dZ/7": function (e, t, n) {
      "use strict";
      let r;
      n.d(t, "a", () => {
        return r;
      }),
        ((e) => {
          (e.STATE_CHANGE = "STATE_CHANGE"),
            (e.OUTPUT = "OUTPUT"),
            (e.ERROR = "ERROR");
        })(r || (r = {}));
    },
    f47c(e, t, n) {
      "use strict";
      const r = n("q1tI"),
        a = r.createContext(null);
      t.a = a;
    },
    gnTG(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return h;
      });
      let r;
      const a = n("xvhg");
      const o = n("vJKn");
      const i = n.n(o);
      const c = n("rg98");
      const s = n("Fz/E");
      const l = n("g7Gn");
      const u = n("5/z4");
      const d = n("0gYX");
      const p = n.n(d);
      const f = n("XWHH");
      const b = n.n(f);
      !((e) => {
        (e.OUTPUT = "OUTPUT"),
          (e.ERROR = "ERROR"),
          (e.STATE_CHANGED = "STATE_CHANGED"),
          (e.CHANNEL_OPENED = "CHANNEL_OPENED");
      })(r || (r = {}));
      const j = n("6bXu");
      function h(e) {
        const t = e.container;
        const n = Object(s.a)();
        let o = null;

        const d = (e) => {
          const t = e.repl;
          return (
            !(window["flag-packager-service"] || Object(j.a)()) ||
            !p.a.supportsPackager3(t.language)
          );
        };

        function f() {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = Object(c.a)(
            i.a.mark(function e() {
              return i.a.wrap((e) => {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!o || "open" !== o.status) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", o);
                    case 2:
                      return e.abrupt(
                        "return",
                        new Promise((e) => {
                          n.once(r.CHANNEL_OPENED, (t) => {
                            e(t);
                          });
                        })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function g() {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = Object(c.a)(
            i.a.mark(function e() {
              return i.a.wrap((e) => {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise((e, n) => {
                          let r = !1;

                          const a = t.openChannel(
                            { service: "packager3", skip: d },
                            (t) => {
                              const o = t.channel,
                                i = t.error;
                              if (r)
                                throw new Error(
                                  "getAnonymousChannel fullfilled but openChannelCb called again"
                                );
                              if (!i)
                                return (
                                  e([o, a]),
                                  (e) => {
                                    e.willReconnect && a(),
                                      r ||
                                        ((r = !0),
                                        n(
                                          new Error(
                                            "Expected getAnonymousChannel promise to be fulfilled when closing"
                                          )
                                        ));
                                  }
                                );
                              n(i);
                            }
                          );
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          t.openChannel(
            { service: "packager3", name: "packager", skip: d },
            (e) => {
              const t = e.channel;
              if (!e.error) {
                if (!t) throw new Error("Expected channel");
                return (
                  t.onCommand((e) => {
                    switch (e.body) {
                      case "state":
                        const t = e.state === u.api.State.Running;
                        n.emit(r.STATE_CHANGED, t);
                        break;
                      case "output":
                        n.emit(r.OUTPUT, e.output);
                        break;
                      case "error":
                        n.emit(r.ERROR, e.error);
                    }
                  }),
                  (o = t),
                  n.emit(r.CHANNEL_OPENED, t),
                  () => {
                    o = null;
                  }
                );
              }
            }
          ),
          {
            addPackages(e) {
              return Object(c.a)(
                i.a.mark(function t() {
                  let n, r, a;
                  return i.a.wrap((t) => {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), f();
                        case 2:
                          return (
                            (n = t.sent),
                            (r = e.map((e) => {
                              return { name: e };
                            })),
                            (t.next = 6),
                            n.request({ packageAdd: { pkgs: r } })
                          );
                        case 6:
                          if (!(a = t.sent).channelClosed) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt("return", !1);
                        case 9:
                          return t.abrupt("return", Boolean(a.ok));
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            removePackages(e) {
              return Object(c.a)(
                i.a.mark(function t() {
                  let n, r, a;
                  return i.a.wrap((t) => {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), f();
                        case 2:
                          return (
                            (n = t.sent),
                            (r = e.map((e) => {
                              return { name: e };
                            })),
                            (t.next = 6),
                            n.request({ packageRemove: { pkgs: r } })
                          );
                        case 6:
                          if (!(a = t.sent).channelClosed) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt("return", !1);
                        case 9:
                          return t.abrupt("return", Boolean(a.ok));
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            searchPackages(e) {
              return Object(c.a)(
                i.a.mark(function n() {
                  let r, o, c, s, u, d, p;
                  return i.a.wrap(
                    (n) => {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              !(
                                (null !==
                                  (o =
                                    null === (r = t.getRepl()) || void 0 === r
                                      ? void 0
                                      : r.language) &&
                                  void 0 !== o &&
                                  o.includes("python")) ||
                                "pygame" === o
                              )
                            ) {
                              n.next = 10;
                              break;
                            }
                            return (
                              (n.prev = 2),
                              n.abrupt(
                                "return",
                                b()(
                                  "https://pipsearch.amasad.repl.co/search?name=" +
                                    encodeURIComponent(e),
                                  { mode: "cors" }
                                ).then((e) => {
                                  return e.json();
                                })
                              )
                            );
                          case 6:
                            return (
                              (n.prev = 6),
                              (n.t0 = n.catch(2)),
                              l.c(n.t0),
                              n.abrupt("return", [])
                            );
                          case 10:
                            return (n.next = 12), g();
                          case 12:
                            return (
                              (c = n.sent),
                              (s = Object(a.a)(c, 2)),
                              (u = s[0]),
                              (d = s[1]),
                              (n.next = 18),
                              u.request({ packageSearch: { query: e } })
                            );
                          case 18:
                            if (!(p = n.sent).channelClosed) {
                              n.next = 21;
                              break;
                            }
                            return n.abrupt("return", []);
                          case 21:
                            if (
                              (d(),
                              "packageSearchResp" !== p.body ||
                                !p.packageSearchResp)
                            ) {
                              n.next = 24;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              p.packageSearchResp.results || []
                            );
                          case 24:
                            return (
                              l.c(
                                new Error(
                                  "Unknown packager3 command ".concat(
                                    p.body,
                                    ". "
                                  ) +
                                    "Expected packageSearchResp. Received error: ".concat(
                                      p.error
                                    )
                                )
                              ),
                              n.abrupt("return", [])
                            );
                          case 26:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[2, 6]]
                  );
                })
              )();
            },
            fetchPackageInfo(e) {
              return Object(c.a)(
                i.a.mark(function t() {
                  let n, r, o, c, s;
                  return i.a.wrap((t) => {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), g();
                        case 2:
                          return (
                            (n = t.sent),
                            (r = Object(a.a)(n, 2)),
                            (o = r[0]),
                            (c = r[1]),
                            (t.next = 8),
                            o.request({ packageInfo: { pkg: { name: e } } })
                          );
                        case 8:
                          if (!(s = t.sent).channelClosed) {
                            t.next = 11;
                            break;
                          }
                          return t.abrupt("return", void 0);
                        case 11:
                          if (
                            (c(),
                            "packageInfoResp" !== s.body || !s.packageInfoResp)
                          ) {
                            t.next = 14;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            s.packageInfoResp.pkg || void 0
                          );
                        case 14:
                          return (
                            l.c(
                              new Error(
                                "Unknown packager3 command ".concat(
                                  s.body,
                                  ". "
                                ) +
                                  "Expected packageInfoResp. Received error: ".concat(
                                    s.error
                                  )
                              )
                            ),
                            t.abrupt("return", void 0)
                          );
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            installPackages() {
              return Object(c.a)(
                i.a.mark(function e() {
                  let t, n;
                  return i.a.wrap((e) => {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), f();
                        case 2:
                          return (
                            (t = e.sent),
                            (e.next = 5),
                            t.request({ packageInstall: {} })
                          );
                        case 5:
                          if (!(n = e.sent).channelClosed) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return", !1);
                        case 8:
                          return e.abrupt("return", Boolean(n.ok));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            listSpecfile() {
              return Object(c.a)(
                i.a.mark(function e() {
                  let t, n, r, o, c, s, u, d;
                  return i.a.wrap((e) => {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), g();
                        case 2:
                          return (
                            (t = e.sent),
                            (n = Object(a.a)(t, 2)),
                            (r = n[0]),
                            (o = n[1]),
                            (e.next = 8),
                            r.request({ packageListSpecfile: {} })
                          );
                        case 8:
                          if (!(c = e.sent).channelClosed) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt("return", {
                            packages: null,
                            error: "channel closed",
                          });
                        case 11:
                          o(),
                            (e.t0 = c.body),
                            (e.next =
                              "error" === e.t0
                                ? 15
                                : "packageListSpecfileResp" === e.t0
                                ? 16
                                : 20);
                          break;
                        case 15:
                          return e.abrupt("return", {
                            packages: null,
                            error: "list specfile failed: ".concat(c.error),
                          });
                        case 16:
                          if (
                            (u =
                              null === (s = c.packageListSpecfileResp) ||
                              void 0 === s
                                ? void 0
                                : s.pkgs)
                          ) {
                            e.next = 19;
                            break;
                          }
                          return e.abrupt("return", {
                            packages: null,
                            error: "list specfile returned an empty response",
                          });
                        case 19:
                          return e.abrupt("return", {
                            packages: u,
                            error: null,
                          });
                        case 20:
                          return (
                            (d =
                              "Unknown packager3 listSpecFile command ".concat(
                                c.body,
                                ". "
                              ) + "Expected error or packageListSpecfileResp"),
                            l.c(new Error(d)),
                            e.abrupt("return", { packages: null, error: d })
                          );
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            onOutput(e) {
              return (
                n.on(r.OUTPUT, e),
                () => {
                  n.removeListener(r.OUTPUT, e);
                }
              );
            },
            onError(e) {
              return (
                n.on(r.ERROR, e),
                () => {
                  n.removeListener(r.ERROR, e);
                }
              );
            },
            onStateChanged(e) {
              return (
                n.on(r.STATE_CHANGED, e),
                () => {
                  n.removeListener(r.STATE_CHANGED, e);
                }
              );
            },
          }
        );
      }
    },
    h7rM(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return a;
      }),
        n.d(t, "b", () => {
          return o;
        });
      const r = n("/MKj");
      function a(e, t, n, r) {
        const a = e.workspace[t].plugins[n];
        if (a.type !== r) throw new Error("expected type to be " + r);
        return a.state;
      }
      function o(e, t, n, o) {
        const i = Object(r.f)((r) => {
            return a(r, e, t, n);
          }, o),
          c = Object(r.e)();
        return [
          i,
          (n) => {
            c({ type: "SET_STATE", wid: e, pud: t, state: n });
          },
        ];
      }
    },
    icXl(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return s;
      });
      const r = n("0gYX"),
        a = n.n(r),
        o = n("8v8i"),
        i = n("8/ze"),
        c = n("JOwT");
      function s(e) {
        const t =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (n) => {
          const r = n.path,
            s = n.children,
            l =
              r === i.a
                ? s.filter((e) => {
                    return !c.a.includes(e.filename);
                  })
                : s,
            u = a.a.getMainFileName(e);
          return l
            .filter((n) => {
              const o = n.filename;
              return (
                !a.a.isLangFileBinary(e, o) && (!t || r !== i.a || ".env" !== o)
              );
            })
            .sort((e, t) => {
              return r === i.a && e.filename === u
                ? -1
                : (r === i.a && t.filename === u) ||
                  (t.type === o.d.Directory && e.type !== o.d.Directory)
                ? 1
                : e.type === o.d.Directory && t.type !== o.d.Directory
                ? -1
                : e.filename.localeCompare(t.filename);
            });
        };
      }
    },
    kDUs(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return a;
      });
      let r;
      var a;
      const o = n("nKUr");
      const i = n("cpVT");
      const c = n("MX0m");
      const s = n.n(c);
      const l = n("q1tI");
      const u = n("TSYQ");
      const d = n.n(u);
      const p = n("IdsG");
      const f = n("AYTL");
      const b = n("M85P");
      function j(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach((t) => {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      !((e) => {
        (e.AddFile = "AddFile"),
          (e.AddFolder = "AddFolder"),
          (e.UploadFile = "UploadFile"),
          (e.UploadFolder = "UploadFolder"),
          (e.DownloadZip = "DownloadZip"),
          (e.OpenTab = "OpenTab"),
          (e.CopyLink = "CopyLink"),
          (e.Rename = "Rename"),
          (e.Delete = "Delete");
      })(a || (a = {}));
      const g =
        ((r = {}),
        Object(i.a)(r, a.AddFile, "Add file"),
        Object(i.a)(r, a.AddFolder, "Add folder"),
        Object(i.a)(r, a.UploadFile, "Upload file"),
        Object(i.a)(r, a.UploadFolder, "Upload folder"),
        Object(i.a)(r, a.DownloadZip, "Download as zip"),
        Object(i.a)(r, a.OpenTab, "Open tab"),
        Object(i.a)(r, a.CopyLink, "Copy link"),
        Object(i.a)(r, a.Rename, "Rename"),
        Object(i.a)(r, a.Delete, "Delete"),
        r);
      function v(e) {
        const t = e.isNegative,
          n = e.isHighlighted,
          r = e.children;
        return Object(o.jsxs)("div", {
          className:
            "jsx-3056961124 " +
            (d()({ "is-negative": t, "is-highlighted": n }) || ""),
          children: [
            Object(o.jsx)(p.a, { size: "small", children: r }),
            Object(o.jsx)(s.a, {
              id: "3056961124",
              children: [
                "div.jsx-3056961124{color:var(--color-foreground-1);padding:var(--spacing-1);margin:var(--spacing-half);border-radius:var(--border-radius-1);font-weight:var(--font-weight-regular);cursor:pointer;white-space:nowrap;}",
                "div.jsx-3056961124:hover{cursor:pointer;}",
                ".is-highlighted.jsx-3056961124{background-color:var(--color-control-3);}",
                ".is-negative.jsx-3056961124 *{color:var(--color-negative-1) !important;}",
                ".is-negative.jsx-3056961124:hover{background-color:var(--color-negative-1);}",
                ".is-negative.jsx-3056961124:hover *{color:var(--color-white) !important;}",
              ],
            }),
          ],
        });
      }
      const x = (e, t) => {
        const n = e.isActive,
          r = e.actions,
          i = e.onAction,
          c = e.onOpenChange,
          u = Object(b.d)({
            items: r,
            onSelectedItemChange(e) {
              const t = e.selectedItem;
              t && (i(t), y());
            },
          }),
          d = u.isOpen,
          p = u.getToggleButtonProps,
          j = u.getMenuProps,
          x = u.highlightedIndex,
          O = u.getItemProps,
          m = u.openMenu,
          y = u.reset;
        l.useImperativeHandle(t, () => {
          return { open: m };
        }),
          l.useEffect(() => {
            c && c(d);
          }, [d, c]);
        const w = p(),
          k = r.includes(a.UploadFile);
        return Object(o.jsxs)("div", {
          className:
            s.a.dynamic([
              [
                "824934503",
                [
                  n ? "var(--color-white)" : "var(--color-foreground-3)",
                  n ? "auto" : "var(--color-foreground-1)",
                ],
              ],
            ]) + " node-actions-menu",
          children: [
            Object(o.jsx)(
              "button",
              h(
                h({}, w),
                {},
                {
                  onClick(e) {
                    e.stopPropagation(), w.onClick(e);
                  },
                  className:
                    s.a.dynamic([
                      [
                        "824934503",
                        [
                          n
                            ? "var(--color-white)"
                            : "var(--color-foreground-3)",
                          n ? "auto" : "var(--color-foreground-1)",
                        ],
                      ],
                    ]) +
                    " " +
                    ((w && null != w.className && w.className) || ""),
                  children: Object(o.jsx)(f.a, { size: "large" }),
                }
              )
            ),
            d
              ? Object(o.jsxs)(
                  "ul",
                  h(
                    h({}, j()),
                    {},
                    {
                      className: s.a.dynamic([
                        [
                          "824934503",
                          [
                            n
                              ? "var(--color-white)"
                              : "var(--color-foreground-3)",
                            n ? "auto" : "var(--color-foreground-1)",
                          ],
                        ],
                      ]),
                      children: [
                        r.map((e, t) => {
                          return Object(o.jsx)(
                            "li",
                            h(
                              h(
                                {},
                                O({
                                  item: e,
                                  onClick(e) {
                                    return e.stopPropagation();
                                  },
                                })
                              ),
                              {},
                              {
                                className: s.a.dynamic([
                                  [
                                    "824934503",
                                    [
                                      n
                                        ? "var(--color-white)"
                                        : "var(--color-foreground-3)",
                                      n ? "auto" : "var(--color-foreground-1)",
                                    ],
                                  ],
                                ]),
                                children: Object(o.jsx)(v, {
                                  isHighlighted: x === t,
                                  isNegative: e === a.Delete,
                                  children: g[e],
                                }),
                              }
                            ),
                            e
                          );
                        }),
                        k
                          ? Object(o.jsxs)("div", {
                              className:
                                s.a.dynamic([
                                  [
                                    "824934503",
                                    [
                                      n
                                        ? "var(--color-white)"
                                        : "var(--color-foreground-3)",
                                      n ? "auto" : "var(--color-foreground-1)",
                                    ],
                                  ],
                                ]) + " protip",
                              children: [
                                Object(o.jsx)("span", {
                                  className: s.a.dynamic([
                                    [
                                      "824934503",
                                      [
                                        n
                                          ? "var(--color-white)"
                                          : "var(--color-foreground-3)",
                                        n
                                          ? "auto"
                                          : "var(--color-foreground-1)",
                                      ],
                                    ],
                                  ]),
                                  children: "PROTIP:",
                                }),
                                " drag and drop files or folders to upload!",
                              ],
                            })
                          : null,
                      ],
                    }
                  )
                )
              : null,
            Object(o.jsx)(s.a, {
              id: "824934503",
              dynamic: [
                n ? "var(--color-white)" : "var(--color-foreground-3)",
                n ? "auto" : "var(--color-foreground-1)",
              ],
              children: [
                ".node-actions-menu.__jsx-style-dynamic-selector{position:relative;width:20px;height:100%;}",
                ".is-touch-device .protip.__jsx-style-dynamic-selector{display:none;}",
                ".protip.__jsx-style-dynamic-selector{font-size:13px;padding:10px 5px;text-align:center;color:var(--color-foreground-1);border-top:1px solid var(--color-foreground-3);}",
                ".protip.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{color:var(--color-positive-1);font-weight:var(--font-weight-bold);font-size:12px;}",
                "button.__jsx-style-dynamic-selector{top:0;width:100%;height:100%;display:block;background-color:transparent;border:0 none;cursor:pointer;color:".concat(
                  n ? "var(--color-white)" : "var(--color-foreground-3)",
                  ";border-radius:var(--border-radius-1);}"
                ),
                "button.__jsx-style-dynamic-selector:hover{color:".concat(
                  n ? "auto" : "var(--color-foreground-1)",
                  ";}"
                ),
                "button.__jsx-style-dynamic-selector:focus{outline:none;}",
                "ul.__jsx-style-dynamic-selector{width:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:var(--color-background-1);border:1px solid var(--color-control-2);border-radius:var(--border-radius-1);list-style:none;position:absolute;right:var(--spacing-1);top:calc(100% - var(--spacing-1));z-index:1;}",
                "ul.__jsx-style-dynamic-selector:focus{outline:none;}",
              ],
            }),
          ],
        });
      };
      t.b = l.forwardRef(x);
    },
    "kx/0": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return s;
      });
      const r = n("cpVT"),
        a = n("nKUr"),
        o = (n("q1tI"), n("pDQI"));
      function i(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach((t) => {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e) {
        return Object(a.jsx)(
          o.a,
          c(
            c({}, e),
            {},
            {
              children: Object(a.jsx)("path", {
                d: "M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9M13 2L20 9M13 2V9H20",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }
          )
        );
      }
    },
    sMwv(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return u;
      });
      const r = n("xvhg"),
        a = n("q1tI"),
        o = n("20a2"),
        i = n("VoYB"),
        c = n("tZOq"),
        s = n("Z+Ew"),
        l = n("zgDP");
      function u() {
        let e;
        let t;
        let n;

        const u =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

        const d = u.onFork;
        const p = Object(o.useRouter)();
        const f = Object(i.a)();
        const b = f.showError;

        const j = Object(c.oc)({
          onCompleted(e) {
            const t =
              "Repl" ===
              (null === e || void 0 === e ? void 0 : e.createRepl.__typename)
                ? e.createRepl
                : null;
            t &&
              (d && d(),
              p.push(
                { pathname: Object(s.a)(), query: { replUrl: t.url } },
                { pathname: t.url }
              ));
          },
        });

        const h = Object(r.a)(j, 2);
        const g = h[0];
        const v = h[1];

        const x =
          "UserError" ===
          (null === (e = v.data) || void 0 === e
            ? void 0
            : e.createRepl.__typename)
            ? null === (t = v.data) || void 0 === t
              ? void 0
              : t.createRepl.message
            : null === (n = v.error) || void 0 === n
            ? void 0
            : n.message;

        a.useEffect(() => {
          x && b(x);
        }, [x, b]);
        const O = a.useCallback(
          (e, t) => {
            const n = t.trackingData;
            g({ variables: { input: { originId: e } } }),
              Object(l.track)(l.events.REPL_FORKED, n);
          },
          [g]
        );
        return [O, { loading: v.loading }];
      }
    },
    xEHj(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      const r = n("T/aA"),
        a = n("8tO+"),
        o = n("8rE2"),
        i = n("++Bh");
      function c(e) {
        return (
          Object(r.a)(e) || Object(a.a)(e) || Object(o.a)(e) || Object(i.a)()
        );
      }
    },
    yz3v(e) {
      e.exports = JSON.parse(
        '{"name":"ace-builds","main":"./src-noconflict/ace.js","typings":"ace.d.ts","version":"1.4.11","description":"Ace (Ajax.org Cloud9 Editor)","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"repository":{"type":"git","url":"https://github.com/ajaxorg/ace-builds.git"},"author":"","license":"BSD-3-Clause","bugs":{"url":"https://github.com/ajaxorg/ace-builds/issues"},"homepage":"https://github.com/ajaxorg/ace-builds"}'
      );
    },
  },
]);
