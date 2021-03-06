/*! For license information please see 2.afcb63ef.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    123: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n(0),
        o = n.n(r),
        c = n(122),
        i = n(117),
        l = n(120),
        s = n(10),
        u = "light",
        d = "dark",
        f = function (e) {
          return e === d ? d : u;
        },
        m = function () {
          return s.a.canUseDOM
            ? f(document.documentElement.getAttribute("data-theme"))
            : u;
        },
        h = function (e) {
          try {
            localStorage.setItem("theme", f(e));
          } catch (t) {
            console.error(t);
          }
        },
        v = function () {
          var e = Object(i.a)().siteConfig,
            t = (e = void 0 === e ? {} : e).themeConfig,
            n = (t = void 0 === t ? {} : t).colorMode,
            a = (n = void 0 === n ? {} : n).disableSwitch,
            o = void 0 !== a && a,
            c = Object(r.useState)(m),
            l = c[0],
            s = c[1],
            v = Object(r.useCallback)(function () {
              s(u), h(u);
            }, []),
            b = Object(r.useCallback)(function () {
              s(d), h(d);
            }, []);
          return (
            Object(r.useEffect)(
              function () {
                document.documentElement.setAttribute("data-theme", f(l));
              },
              [l]
            ),
            Object(r.useEffect)(
              function () {
                if (!o)
                  try {
                    var e = localStorage.getItem("theme");
                    null !== e && s(f(e));
                  } catch (t) {
                    console.error(t);
                  }
              },
              [s]
            ),
            Object(r.useEffect)(function () {
              o ||
                window
                  .matchMedia("(prefers-color-scheme: dark)")
                  .addListener(function (e) {
                    var t = e.matches;
                    s(t ? d : u);
                  });
            }, []),
            { isDarkTheme: l === d, setLightTheme: v, setDarkTheme: b }
          );
        },
        b = n(137);
      var p = function (e) {
          var t = v(),
            n = t.isDarkTheme,
            a = t.setLightTheme,
            r = t.setDarkTheme;
          return o.a.createElement(
            b.a.Provider,
            { value: { isDarkTheme: n, setLightTheme: a, setDarkTheme: r } },
            e.children
          );
        },
        g = "docusaurus.tab.",
        k = function () {
          var e = Object(r.useState)({}),
            t = e[0],
            n = e[1],
            a = Object(r.useCallback)(function (e, t) {
              try {
                localStorage.setItem("docusaurus.tab." + e, t);
              } catch (n) {
                console.error(n);
              }
            }, []);
          return (
            Object(r.useEffect)(function () {
              try {
                for (var e = {}, t = 0; t < localStorage.length; t += 1) {
                  var a = localStorage.key(t);
                  if (a.startsWith(g))
                    e[a.substring(g.length)] = localStorage.getItem(a);
                }
                n(e);
              } catch (r) {
                console.error(r);
              }
            }, []),
            {
              tabGroupChoices: t,
              setTabGroupChoices: function (e, t) {
                n(function (n) {
                  var a;
                  return Object.assign({}, n, (((a = {})[e] = t), a));
                }),
                  a(e, t);
              },
            }
          );
        },
        E = "docusaurus.announcement.dismiss",
        O = "docusaurus.announcement.id",
        y = function () {
          var e = Object(i.a)().siteConfig.themeConfig.announcementBar,
            t = Object(r.useState)(!0),
            n = t[0],
            a = t[1],
            o = Object(r.useCallback)(function () {
              localStorage.setItem(E, "true"), a(!0);
            }, []);
          return (
            Object(r.useEffect)(function () {
              if (e) {
                var t = e.id,
                  n = localStorage.getItem(O);
                "annoucement-bar" === n && (n = "announcement-bar");
                var r = t !== n;
                localStorage.setItem(O, t),
                  r && localStorage.setItem(E, "false"),
                  (r || "false" === localStorage.getItem(E)) && a(!1);
              }
            }, []),
            { isAnnouncementBarClosed: n, closeAnnouncementBar: o }
          );
        },
        j = n(138);
      var C = function (e) {
          var t = k(),
            n = t.tabGroupChoices,
            a = t.setTabGroupChoices,
            r = y(),
            c = r.isAnnouncementBarClosed,
            i = r.closeAnnouncementBar;
          return o.a.createElement(
            j.a.Provider,
            {
              value: {
                tabGroupChoices: n,
                setTabGroupChoices: a,
                isAnnouncementBarClosed: c,
                closeAnnouncementBar: i,
              },
            },
            e.children
          );
        },
        w = n(118),
        _ = n(139),
        N = n(49),
        S = n.n(N);
      var T = function () {
          var e,
            t = Object(i.a)().siteConfig,
            n = (t = void 0 === t ? {} : t).themeConfig,
            a = (n = void 0 === n ? {} : n).announcementBar,
            r = void 0 === a ? {} : a,
            c = r.content,
            l = r.backgroundColor,
            s = r.textColor,
            u = r.isCloseable,
            d = Object(_.a)(),
            f = d.isAnnouncementBarClosed,
            m = d.closeAnnouncementBar;
          return !c || (u && f)
            ? null
            : o.a.createElement(
                "div",
                {
                  className: S.a.announcementBar,
                  style: { backgroundColor: l, color: s },
                  role: "banner",
                },
                o.a.createElement("div", {
                  className: Object(w.a)(
                    S.a.announcementBarContent,
                    ((e = {}), (e[S.a.announcementBarCloseable] = u), e)
                  ),
                  dangerouslySetInnerHTML: { __html: c },
                }),
                u
                  ? o.a.createElement(
                      "button",
                      {
                        type: "button",
                        className: S.a.announcementBarClose,
                        onClick: m,
                        "aria-label": "Close",
                      },
                      o.a.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "\xd7"
                      )
                    )
                  : null
              );
        },
        L = n(119),
        I = n(22),
        B = n(121),
        M = n(140);
      function P() {
        return o.a.createElement(
          "svg",
          {
            width: "15",
            height: "15",
            className: "DocSearch-Control-Key-Icon",
          },
          o.a.createElement("path", {
            d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
            strokeWidth: "1.2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "square",
          })
        );
      }
      var D = n(141);
      function x() {
        return (x =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function A(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              a = !0,
              r = !1,
              o = void 0;
            try {
              for (
                var c, i = e[Symbol.iterator]();
                !(a = (c = i.next()).done) &&
                (n.push(c.value), !t || n.length !== t);
                a = !0
              );
            } catch (l) {
              (r = !0), (o = l);
            } finally {
              try {
                a || null == i.return || i.return();
              } finally {
                if (r) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return R(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return R(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var U = "Ctrl";
      function V() {
        return "undefined" == typeof navigator
          ? U
          : /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
      }
      var X = o.a.forwardRef(function (e, t) {
          var n = A(
              Object(r.useState)(function () {
                return V() ? "\u2318" : U;
              }),
              2
            ),
            a = n[0],
            c = n[1];
          return (
            Object(r.useEffect)(function () {
              V() && c("\u2318");
            }, []),
            o.a.createElement(
              "button",
              x(
                {
                  type: "button",
                  className: "DocSearch DocSearch-Button",
                  "aria-label": "Search",
                },
                e,
                { ref: t }
              ),
              o.a.createElement(D.a, null),
              o.a.createElement(
                "span",
                { className: "DocSearch-Button-Placeholder" },
                "Search"
              ),
              o.a.createElement(
                "span",
                { className: "DocSearch-Button-Key" },
                a === U ? o.a.createElement(P, null) : a
              ),
              o.a.createElement(
                "span",
                { className: "DocSearch-Button-Key" },
                "K"
              )
            )
          );
        }),
        F = null;
      function H(e) {
        var t = e.hit,
          n = e.children;
        return o.a.createElement(L.a, { to: t.url }, n);
      }
      function K(e) {
        var t = e.state,
          n = e.onClose,
          a = Object(M.a)().generateSearchPageLink;
        return o.a.createElement(
          L.a,
          { to: a(t.query), onClick: n },
          "See all ",
          t.context.nbHits,
          " results"
        );
      }
      function Y(e) {
        var t = Object(i.a)().siteMetadata,
          s = Object(l.b)().withBaseUrl,
          u = Object(B.useHistory)(),
          d = Object(r.useRef)(null),
          f = Object(r.useState)(!1),
          m = f[0],
          h = f[1],
          v = Object(r.useState)(null),
          b = v[0],
          p = v[1],
          g = Object(r.useCallback)(function () {
            return F
              ? Promise.resolve()
              : Promise.all([
                  n.e(54).then(n.bind(null, 184)),
                  Promise.all([n.e(0), n.e(55)]).then(n.bind(null, 183)),
                  n.e(0).then(n.t.bind(null, 112, 7)),
                ]).then(function (e) {
                  var t = e[0].DocSearchModal;
                  F = t;
                });
          }, []),
          k = Object(r.useCallback)(
            function () {
              g().then(function () {
                h(!0);
              });
            },
            [g, h]
          ),
          E = Object(r.useCallback)(
            function () {
              h(!1);
            },
            [h]
          ),
          O = Object(r.useCallback)(
            function (e) {
              g().then(function () {
                h(!0), p(e.key);
              });
            },
            [g, h, p]
          ),
          y = Object(r.useRef)({
            navigate: function (e) {
              var t = e.suggestionUrl;
              u.push(t);
            },
          }).current,
          j = Object(r.useRef)(function (e) {
            return e.map(function (e) {
              var t = document.createElement("a");
              return (
                (t.href = e.url),
                Object.assign({}, e, { url: s("" + t.pathname + t.hash) })
              );
            });
          }).current,
          C = Object(r.useMemo)(
            function () {
              return function (e) {
                return o.a.createElement(K, Object(a.a)({}, e, { onClose: E }));
              };
            },
            [E]
          ),
          w = Object(r.useCallback)(
            function (e) {
              return e.addAlgoliaAgent("docusaurus", t.docusaurusVersion), e;
            },
            [t.docusaurusVersion]
          );
        return (
          (function (e) {
            var t = e.isOpen,
              n = e.onOpen,
              a = e.onClose,
              r = e.onInput,
              c = e.searchButtonRef;
            o.a.useEffect(
              function () {
                function e(e) {
                  ((27 === e.keyCode && t) ||
                    ("k" === e.key && (e.metaKey || e.ctrlKey)) ||
                    (!(function (e) {
                      var t = e.target,
                        n = t.tagName;
                      return (
                        t.isContentEditable ||
                        "INPUT" === n ||
                        "SELECT" === n ||
                        "TEXTAREA" === n
                      );
                    })(e) &&
                      "/" === e.key &&
                      !t)) &&
                    (e.preventDefault(),
                    t
                      ? a()
                      : document.body.classList.contains("DocSearch--active") ||
                        document.body.classList.contains("DocSearch--active") ||
                        n()),
                    c &&
                      c.current === document.activeElement &&
                      r &&
                      /[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode)) &&
                      r(e);
                }
                return (
                  window.addEventListener("keydown", e),
                  function () {
                    window.removeEventListener("keydown", e);
                  }
                );
              },
              [t, n, a, r, c]
            );
          })({
            isOpen: m,
            onOpen: k,
            onClose: E,
            onInput: O,
            searchButtonRef: d,
          }),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              c.a,
              null,
              o.a.createElement("link", {
                rel: "preconnect",
                href: "https://" + e.appId + "-dsn.algolia.net",
                crossOrigin: !0,
              })
            ),
            o.a.createElement(X, {
              onTouchStart: g,
              onFocus: g,
              onMouseOver: g,
              onClick: k,
              ref: d,
            }),
            m &&
              Object(I.createPortal)(
                o.a.createElement(
                  F,
                  Object(a.a)(
                    {
                      onClose: E,
                      initialScrollY: window.scrollY,
                      initialQuery: b,
                      navigator: y,
                      transformItems: j,
                      hitComponent: H,
                      resultsFooterComponent: C,
                      transformSearchClient: w,
                    },
                    e
                  )
                ),
                document.body
              )
          )
        );
      }
      var q = function () {
          var e = Object(i.a)().siteConfig;
          return o.a.createElement(Y, e.themeConfig.algolia);
        },
        G = n(157),
        W = n.n(G),
        z = n(50),
        J = n.n(z),
        Q = function (e) {
          var t = e.icon,
            n = e.style;
          return o.a.createElement(
            "span",
            { className: Object(w.a)(J.a.toggle, J.a.dark), style: n },
            t
          );
        },
        Z = function (e) {
          var t = e.icon,
            n = e.style;
          return o.a.createElement(
            "span",
            { className: Object(w.a)(J.a.toggle, J.a.light), style: n },
            t
          );
        },
        $ = function (e) {
          var t = Object(i.a)(),
            n = t.siteConfig.themeConfig.colorMode.switchConfig,
            r = n.darkIcon,
            c = n.darkIconStyle,
            l = n.lightIcon,
            s = n.lightIconStyle,
            u = t.isClient;
          return o.a.createElement(
            W.a,
            Object(a.a)(
              {
                disabled: !u,
                icons: {
                  checked: o.a.createElement(Q, { icon: r, style: c }),
                  unchecked: o.a.createElement(Z, { icon: l, style: s }),
                },
              },
              e
            )
          );
        },
        ee = n(125);
      var te = function (e) {
          var t = Object(r.useState)(e),
            n = t[0],
            a = t[1];
          return (
            Object(r.useEffect)(function () {
              var e = function () {
                return a(window.location.hash);
              };
              return (
                window.addEventListener("hashchange", e),
                function () {
                  return window.removeEventListener("hashchange", e);
                }
              );
            }, []),
            [n, a]
          );
        },
        ne = n(142),
        ae = function (e) {
          var t = Object(r.useState)(!0),
            n = t[0],
            a = t[1],
            o = Object(r.useState)(!1),
            c = o[0],
            i = o[1],
            l = Object(r.useState)(0),
            s = l[0],
            u = l[1],
            d = Object(r.useState)(0),
            f = d[0],
            m = d[1],
            h = Object(r.useCallback)(function (e) {
              null !== e && m(e.getBoundingClientRect().height);
            }, []),
            v = Object(B.useLocation)(),
            b = te(v.hash),
            p = b[0],
            g = b[1];
          return (
            Object(ne.a)(
              function (t) {
                var n = t.scrollY;
                if (e && (0 === n && a(!0), !(n < f))) {
                  if (c) return i(!1), a(!1), void u(n);
                  var r = document.documentElement.scrollHeight - f,
                    o = window.innerHeight;
                  s && n >= s ? a(!1) : n + o < r && a(!0), u(n);
                }
              },
              [s, f]
            ),
            Object(r.useEffect)(
              function () {
                e && (a(!0), g(v.hash));
              },
              [v]
            ),
            Object(r.useEffect)(
              function () {
                e && p && i(!0);
              },
              [p]
            ),
            { navbarRef: h, isNavbarVisible: n }
          );
        },
        re = n(143),
        oe = n(144),
        ce = n(145),
        ie = n(51),
        le = n.n(ie),
        se = n(6),
        ue = n(135),
        de = {
          default: function () {
            return ue.a;
          },
          docsVersion: function () {
            return n(162).default;
          },
          docsVersionDropdown: function () {
            return n(166).default;
          },
        };
      function fe(e) {
        var t = e.type,
          n = Object(se.a)(e, ["type"]),
          a = (function (e) {
            void 0 === e && (e = "default");
            var t = de[e];
            if (!t)
              throw new Error(
                "No NavbarItem component found for type=" + e + "."
              );
            return t();
          })(t);
        return o.a.createElement(a, n);
      }
      var me = "right";
      var he = function () {
          var e,
            t,
            n = Object(i.a)(),
            c = n.siteConfig.themeConfig,
            l = c.navbar,
            s = (l = void 0 === l ? {} : l).title,
            u = void 0 === s ? "" : s,
            d = l.items,
            f = void 0 === d ? [] : d,
            m = l.hideOnScroll,
            h = void 0 !== m && m,
            v = l.style,
            b = void 0 === v ? void 0 : v,
            p = c.colorMode,
            g = (p = void 0 === p ? {} : p).disableSwitch,
            k = void 0 !== g && g,
            E = n.isClient,
            O = Object(r.useState)(!1),
            y = O[0],
            j = O[1],
            C = Object(r.useState)(!1),
            _ = C[0],
            N = C[1],
            S = Object(ee.a)(),
            T = S.isDarkTheme,
            I = S.setLightTheme,
            B = S.setDarkTheme,
            M = ae(h),
            P = M.navbarRef,
            D = M.isNavbarVisible,
            x = Object(ce.a)(),
            A = x.logoLink,
            R = x.logoLinkProps,
            U = x.logoImageUrl,
            V = x.logoAlt;
          Object(re.a)(y);
          var X = Object(r.useCallback)(
              function () {
                j(!0);
              },
              [j]
            ),
            F = Object(r.useCallback)(
              function () {
                j(!1);
              },
              [j]
            ),
            H = Object(r.useCallback)(
              function (e) {
                return e.target.checked ? B() : I();
              },
              [I, B]
            ),
            K = Object(oe.a)();
          Object(r.useEffect)(
            function () {
              K === oe.b.desktop && j(!1);
            },
            [K]
          );
          var Y = (function (e) {
              return {
                leftItems: e.filter(function (e) {
                  var t;
                  return (
                    "left" ===
                    (null !== (t = e.position) && void 0 !== t ? t : me)
                  );
                }),
                rightItems: e.filter(function (e) {
                  var t;
                  return (
                    "right" ===
                    (null !== (t = e.position) && void 0 !== t ? t : me)
                  );
                }),
              };
            })(f),
            G = Y.leftItems,
            W = Y.rightItems;
          return o.a.createElement(
            "nav",
            {
              ref: P,
              className: Object(w.a)(
                "navbar",
                "navbar--fixed-top",
                ((e = {
                  "navbar--dark": "dark" === b,
                  "navbar--primary": "primary" === b,
                  "navbar-sidebar--show": y,
                }),
                (e[le.a.navbarHideable] = h),
                (e[le.a.navbarHidden] = !D),
                e)
              ),
            },
            o.a.createElement(
              "div",
              { className: "navbar__inner" },
              o.a.createElement(
                "div",
                { className: "navbar__items" },
                null != f &&
                  0 !== f.length &&
                  o.a.createElement(
                    "div",
                    {
                      "aria-label": "Navigation bar toggle",
                      className: "navbar__toggle",
                      role: "button",
                      tabIndex: 0,
                      onClick: X,
                      onKeyDown: X,
                    },
                    o.a.createElement(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "30",
                        height: "30",
                        viewBox: "0 0 30 30",
                        role: "img",
                        focusable: "false",
                      },
                      o.a.createElement("title", null, "Menu"),
                      o.a.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "2",
                        d: "M4 7h22M4 15h22M4 23h22",
                      })
                    )
                  ),
                o.a.createElement(
                  L.a,
                  Object(a.a)({ className: "navbar__brand", to: A }, R),
                  null != U &&
                    o.a.createElement("img", {
                      key: E,
                      className: "navbar__logo",
                      src: U,
                      alt: V,
                    }),
                  null != u &&
                    o.a.createElement(
                      "strong",
                      {
                        className: Object(w.a)(
                          "navbar__title",
                          ((t = {}), (t[le.a.hideLogoText] = _), t)
                        ),
                      },
                      u
                    )
                ),
                G.map(function (e, t) {
                  return o.a.createElement(fe, Object(a.a)({}, e, { key: t }));
                })
              ),
              o.a.createElement(
                "div",
                { className: "navbar__items navbar__items--right" },
                W.map(function (e, t) {
                  return o.a.createElement(fe, Object(a.a)({}, e, { key: t }));
                }),
                !k &&
                  o.a.createElement($, {
                    className: le.a.displayOnlyInLargeViewport,
                    "aria-label": "Dark mode toggle",
                    checked: T,
                    onChange: H,
                  }),
                o.a.createElement(q, {
                  handleSearchBarToggle: N,
                  isSearchBarExpanded: _,
                })
              )
            ),
            o.a.createElement("div", {
              role: "presentation",
              className: "navbar-sidebar__backdrop",
              onClick: F,
            }),
            o.a.createElement(
              "div",
              { className: "navbar-sidebar" },
              o.a.createElement(
                "div",
                { className: "navbar-sidebar__brand" },
                o.a.createElement(
                  L.a,
                  Object(a.a)(
                    { className: "navbar__brand", onClick: F, to: A },
                    R
                  ),
                  null != U &&
                    o.a.createElement("img", {
                      key: E,
                      className: "navbar__logo",
                      src: U,
                      alt: V,
                    }),
                  null != u &&
                    o.a.createElement(
                      "strong",
                      { className: "navbar__title" },
                      u
                    )
                ),
                !k &&
                  y &&
                  o.a.createElement($, {
                    "aria-label": "Dark mode toggle in sidebar",
                    checked: T,
                    onChange: H,
                  })
              ),
              o.a.createElement(
                "div",
                { className: "navbar-sidebar__items" },
                o.a.createElement(
                  "div",
                  { className: "menu" },
                  o.a.createElement(
                    "ul",
                    { className: "menu__list" },
                    f.map(function (e, t) {
                      return o.a.createElement(
                        fe,
                        Object(a.a)({ mobile: !0 }, e, { onClick: F, key: t })
                      );
                    })
                  )
                )
              )
            )
          );
        },
        ve = n(52),
        be = n.n(ve);
      function pe(e) {
        var t = e.to,
          n = e.href,
          r = e.label,
          c = e.prependBaseUrlToHref,
          i = Object(se.a)(e, ["to", "href", "label", "prependBaseUrlToHref"]),
          s = Object(l.a)(t),
          u = Object(l.a)(n, { forcePrependBaseUrl: !0 });
        return o.a.createElement(
          L.a,
          Object(a.a)(
            { className: "footer__link-item" },
            n
              ? {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: c ? u : n,
                }
              : { to: s },
            i
          ),
          r
        );
      }
      var ge = function (e) {
        var t = e.url,
          n = e.alt;
        return o.a.createElement("img", {
          className: "footer__logo",
          alt: n,
          src: t,
        });
      };
      var ke = function () {
        var e = Object(i.a)().siteConfig,
          t = (void 0 === e ? {} : e).themeConfig,
          n = (void 0 === t ? {} : t).footer,
          a = n || {},
          r = a.copyright,
          c = a.links,
          s = void 0 === c ? [] : c,
          u = a.logo,
          d = void 0 === u ? {} : u,
          f = Object(l.a)(d.src);
        return n
          ? o.a.createElement(
              "footer",
              {
                className: Object(w.a)("footer", {
                  "footer--dark": "dark" === n.style,
                }),
              },
              o.a.createElement(
                "div",
                { className: "container" },
                s &&
                  s.length > 0 &&
                  o.a.createElement(
                    "div",
                    { className: "row footer__links" },
                    s.map(function (e, t) {
                      return o.a.createElement(
                        "div",
                        { key: t, className: "col footer__col" },
                        null != e.title
                          ? o.a.createElement(
                              "h4",
                              { className: "footer__title" },
                              e.title
                            )
                          : null,
                        null != e.items &&
                          Array.isArray(e.items) &&
                          e.items.length > 0
                          ? o.a.createElement(
                              "ul",
                              { className: "footer__items" },
                              e.items.map(function (e, t) {
                                return e.html
                                  ? o.a.createElement("li", {
                                      key: t,
                                      className: "footer__item",
                                      dangerouslySetInnerHTML: {
                                        __html: e.html,
                                      },
                                    })
                                  : o.a.createElement(
                                      "li",
                                      {
                                        key: e.href || e.to,
                                        className: "footer__item",
                                      },
                                      o.a.createElement(pe, e)
                                    );
                              })
                            )
                          : null
                      );
                    })
                  ),
                (d || r) &&
                  o.a.createElement(
                    "div",
                    { className: "text--center" },
                    d &&
                      d.src &&
                      o.a.createElement(
                        "div",
                        { className: "margin-bottom--sm" },
                        d.href
                          ? o.a.createElement(
                              "a",
                              {
                                href: d.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: be.a.footerLogoLink,
                              },
                              o.a.createElement(ge, { alt: d.alt, url: f })
                            )
                          : o.a.createElement(ge, { alt: d.alt, url: f })
                      ),
                    o.a.createElement("div", {
                      dangerouslySetInnerHTML: { __html: r },
                    })
                  )
              )
            )
          : null;
      };
      n(53);
      function Ee(e) {
        var t = e.children;
        return o.a.createElement(p, null, o.a.createElement(C, null, t));
      }
      t.a = function (e) {
        var t = Object(i.a)().siteConfig,
          n = t.favicon,
          r = t.title,
          s = t.themeConfig,
          u = s.image,
          d = s.metadatas,
          f = t.url,
          m = e.children,
          h = e.title,
          v = e.noFooter,
          b = e.description,
          p = e.image,
          g = e.keywords,
          k = e.permalink,
          E = h ? h + " | " + r : r,
          O = p || u,
          y = Object(l.a)(O, { absolute: !0 }),
          j = Object(l.a)(n);
        return o.a.createElement(
          Ee,
          null,
          o.a.createElement(
            c.a,
            null,
            o.a.createElement("html", { lang: "en" }),
            E && o.a.createElement("title", null, E),
            E &&
              o.a.createElement("meta", { property: "og:title", content: E }),
            n && o.a.createElement("link", { rel: "shortcut icon", href: j }),
            b && o.a.createElement("meta", { name: "description", content: b }),
            b &&
              o.a.createElement("meta", {
                property: "og:description",
                content: b,
              }),
            g &&
              g.length &&
              o.a.createElement("meta", {
                name: "keywords",
                content: g.join(","),
              }),
            O &&
              o.a.createElement("meta", { property: "og:image", content: y }),
            O &&
              o.a.createElement("meta", {
                property: "twitter:image",
                content: y,
              }),
            O &&
              o.a.createElement("meta", {
                name: "twitter:image:alt",
                content: "Image for " + E,
              }),
            k &&
              o.a.createElement("meta", { property: "og:url", content: f + k }),
            k && o.a.createElement("link", { rel: "canonical", href: f + k }),
            o.a.createElement("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            })
          ),
          o.a.createElement(
            c.a,
            null,
            d.map(function (e, t) {
              return o.a.createElement(
                "meta",
                Object(a.a)({ key: "metadata_" + t }, e)
              );
            })
          ),
          o.a.createElement(T, null),
          o.a.createElement(he, null),
          o.a.createElement("div", { className: "main-wrapper" }, m),
          !v && o.a.createElement(ke, null)
        );
      };
    },
    125: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n(137);
      t.a = function () {
        var e = Object(a.useContext)(r.a);
        if (null == e)
          throw new Error(
            "`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext."
          );
        return e;
      };
    },
    135: function (e, t, n) {
      "use strict";
      var a,
        r = n(2),
        o = n(6),
        c = n(0),
        i = n.n(c),
        l = n(118),
        s = n(119),
        u = n(120);
      var d = function () {
          if (void 0 !== a) return a;
          var e = !1,
            t = {
              get passive() {
                e = !0;
              },
            },
            n = function () {};
          return (
            window.addEventListener("t", n, t),
            window.removeEventListener("t", n, t),
            (a = e),
            e
          );
        },
        f = c.useLayoutEffect,
        m = function (e) {
          var t = Object(c.useRef)(e);
          return (
            f(function () {
              t.current = e;
            }),
            t
          );
        },
        h = "touchstart",
        v = ["mousedown", h],
        b = function (e) {
          if (e === h) return d() ? { passive: !0 } : void 0;
        };
      var p = function (e, t) {
        var n = m(t);
        Object(c.useEffect)(
          function () {
            if (t) {
              var a = function (t) {
                e.current &&
                  n.current &&
                  !e.current.contains(t.target) &&
                  n.current(t);
              };
              return (
                v.forEach(function (e) {
                  document.addEventListener(e, a, b(e));
                }),
                function () {
                  v.forEach(function (e) {
                    document.removeEventListener(e, a, b(e));
                  });
                }
              );
            }
          },
          [!t]
        );
      };
      function g(e) {
        var t = e.activeBasePath,
          n = e.activeBaseRegex,
          a = e.to,
          c = e.href,
          l = e.label,
          d = e.activeClassName,
          f = void 0 === d ? "navbar__link--active" : d,
          m = e.prependBaseUrlToHref,
          h = Object(o.a)(e, [
            "activeBasePath",
            "activeBaseRegex",
            "to",
            "href",
            "label",
            "activeClassName",
            "prependBaseUrlToHref",
          ]),
          v = Object(u.a)(a),
          b = Object(u.a)(t),
          p = Object(u.a)(c, { forcePrependBaseUrl: !0 });
        return i.a.createElement(
          s.a,
          Object(r.a)(
            {},
            c
              ? {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: m ? p : c,
                }
              : Object.assign(
                  { isNavLink: !0, activeClassName: f, to: v },
                  t || n
                    ? {
                        isActive: function (e, t) {
                          return n
                            ? new RegExp(n).test(t.pathname)
                            : t.pathname.startsWith(b);
                        },
                      }
                    : null
                ),
            h
          ),
          l
        );
      }
      function k(e) {
        var t = e.items,
          n = e.position,
          a = e.className,
          s = Object(o.a)(e, ["items", "position", "className"]),
          u = i.a.useRef(null),
          d = i.a.useRef(null),
          f = Object(c.useState)(!1),
          m = f[0],
          h = f[1];
        function v(e) {
          if (e) {
            var t,
              n,
              a =
                null == d ||
                null === (t = d.current) ||
                void 0 === t ||
                null === (n = t.firstChild) ||
                void 0 === n
                  ? void 0
                  : n.firstChild;
            a && a.focus();
          }
          h(e);
        }
        p(u, function () {
          return v(!1);
        });
        var b = function (e, t) {
          return (
            void 0 === t && (t = !1),
            Object(l.a)(
              { "navbar__item navbar__link": !t, dropdown__link: t },
              e
            )
          );
        };
        return t
          ? i.a.createElement(
              "div",
              {
                ref: u,
                className: Object(l.a)(
                  "navbar__item",
                  "dropdown",
                  "dropdown--hoverable",
                  {
                    "dropdown--left": "left" === n,
                    "dropdown--right": "right" === n,
                    "dropdown--show": m,
                  }
                ),
              },
              i.a.createElement(
                g,
                Object(r.a)({ className: b(a) }, s, {
                  onClick: s.to
                    ? void 0
                    : function (e) {
                        return e.preventDefault();
                      },
                  onKeyDown: function (e) {
                    (("Enter" === e.key && !s.to) || "Tab" === e.key) &&
                      (e.preventDefault(), v(!0));
                  },
                }),
                s.label
              ),
              i.a.createElement(
                "ul",
                { ref: d, className: "dropdown__menu" },
                t.map(function (e, n) {
                  var a = e.className,
                    c = Object(o.a)(e, ["className"]);
                  return i.a.createElement(
                    "li",
                    { key: n },
                    i.a.createElement(
                      g,
                      Object(r.a)(
                        {
                          onKeyDown: function (e) {
                            n === t.length - 1 &&
                              "Tab" === e.key &&
                              (e.preventDefault(), v(!1));
                          },
                          activeClassName: "dropdown__link--active",
                          className: b(a, !0),
                        },
                        c
                      )
                    )
                  );
                })
              )
            )
          : i.a.createElement(g, Object(r.a)({ className: b(a) }, s));
      }
      function E(e) {
        var t = e.items,
          n = (e.position, e.className),
          a = Object(o.a)(e, ["items", "position", "className"]),
          c = function (e, t) {
            return (
              void 0 === t && (t = !1),
              Object(l.a)("menu__link", { "menu__link--sublist": t }, e)
            );
          };
        return t
          ? i.a.createElement(
              "li",
              { className: "menu__list-item" },
              i.a.createElement(
                g,
                Object(r.a)({ className: c(n, !0) }, a),
                a.label
              ),
              i.a.createElement(
                "ul",
                { className: "menu__list" },
                t.map(function (e, t) {
                  var n = e.className,
                    l = Object(o.a)(e, ["className"]);
                  return i.a.createElement(
                    "li",
                    { className: "menu__list-item", key: t },
                    i.a.createElement(
                      g,
                      Object(r.a)(
                        {
                          activeClassName: "menu__link--active",
                          className: c(n),
                        },
                        l,
                        { onClick: a.onClick }
                      )
                    )
                  );
                })
              )
            )
          : i.a.createElement(
              "li",
              { className: "menu__list-item" },
              i.a.createElement(g, Object(r.a)({ className: c(n) }, a))
            );
      }
      t.a = function (e) {
        var t = e.mobile,
          n = void 0 !== t && t,
          a = Object(o.a)(e, ["mobile"]),
          r = n ? E : k;
        return i.a.createElement(r, a);
      };
    },
    137: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a).a.createContext(void 0);
      t.a = r;
    },
    138: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = Object(a.createContext)(void 0);
      t.a = r;
    },
    139: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n(138);
      t.a = function () {
        var e = Object(a.useContext)(r.a);
        if (null == e)
          throw new Error(
            "`useUserPreferencesContext` is used outside of `Layout` Component."
          );
        return e;
      };
    },
    140: function (e, t, n) {
      "use strict";
      var a = n(121),
        r = n(10),
        o = n(117);
      t.a = function () {
        var e = Object(a.useHistory)(),
          t = Object(a.useLocation)(),
          n = Object(o.a)().siteConfig,
          c = (n = void 0 === n ? {} : n).baseUrl;
        return {
          searchValue:
            (r.a.canUseDOM && new URLSearchParams(t.search).get("q")) || "",
          updateSearchPath: function (n) {
            var a = new URLSearchParams(t.search);
            n ? a.set("q", n) : a.delete("q"),
              e.replace({ search: a.toString() });
          },
          generateSearchPageLink: function (e) {
            return c + "search?q=" + encodeURIComponent(e);
          },
        };
      };
    },
    141: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a = n(0),
        r = n.n(a);
      function o() {
        return r.a.createElement(
          "svg",
          {
            width: "20",
            height: "20",
            className: "DocSearch-Search-Icon",
            viewBox: "0 0 20 20",
          },
          r.a.createElement("path", {
            d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
    },
    142: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n(10),
        o = function () {
          return {
            scrollX: r.a.canUseDOM ? window.pageXOffset : 0,
            scrollY: r.a.canUseDOM ? window.pageYOffset : 0,
          };
        };
      t.a = function (e, t) {
        void 0 === t && (t = []);
        var n = Object(a.useState)(o()),
          r = n[0],
          c = n[1],
          i = function () {
            var t = o();
            c(t), e && e(t);
          };
        return (
          Object(a.useEffect)(function () {
            return (
              window.addEventListener("scroll", i),
              function () {
                return window.removeEventListener("scroll", i, { passive: !0 });
              }
            );
          }, t),
          r
        );
      };
    },
    143: function (e, t, n) {
      "use strict";
      var a = n(0);
      t.a = function (e) {
        void 0 === e && (e = !0),
          Object(a.useEffect)(
            function () {
              return (
                (document.body.style.overflow = e ? "hidden" : "visible"),
                function () {
                  document.body.style.overflow = "visible";
                }
              );
            },
            [e]
          );
      };
    },
    144: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      });
      var a = n(0),
        r = { desktop: "desktop", mobile: "mobile" };
      t.a = function () {
        var e = "undefined" != typeof window;
        function t() {
          if (e) return window.innerWidth > 996 ? r.desktop : r.mobile;
        }
        var n = Object(a.useState)(t),
          o = n[0],
          c = n[1];
        return (
          Object(a.useEffect)(function () {
            if (e)
              return (
                window.addEventListener("resize", n),
                function () {
                  return window.removeEventListener("resize", n);
                }
              );
            function n() {
              c(t());
            }
          }, []),
          o
        );
      };
    },
    145: function (e, t, n) {
      "use strict";
      var a = n(117),
        r = n(125),
        o = n(120),
        c = n(124);
      t.a = function () {
        var e = Object(a.a)().siteConfig,
          t = (e = void 0 === e ? {} : e).themeConfig,
          n = (t = void 0 === t ? {} : t).navbar,
          i = (n = void 0 === n ? {} : n).logo,
          l = void 0 === i ? {} : i,
          s = Object(r.a)().isDarkTheme,
          u = Object(o.a)(l.href || "/"),
          d = {};
        l.target
          ? (d = { target: l.target })
          : Object(c.a)(u) ||
            (d = { rel: "noopener noreferrer", target: "_blank" });
        var f = l.srcDark && s ? l.srcDark : l.src;
        return {
          logoLink: u,
          logoLinkProps: d,
          logoImageUrl: Object(o.a)(f),
          logoAlt: l.alt,
        };
      };
    },
    157: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        o = n(0),
        c = f(o),
        i = f(n(158)),
        l = f(n(7)),
        s = f(n(159)),
        u = f(n(160)),
        d = n(161);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var m = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.handleClick = n.handleClick.bind(n)),
            (n.handleTouchStart = n.handleTouchStart.bind(n)),
            (n.handleTouchMove = n.handleTouchMove.bind(n)),
            (n.handleTouchEnd = n.handleTouchEnd.bind(n)),
            (n.handleFocus = n.handleFocus.bind(n)),
            (n.handleBlur = n.handleBlur.bind(n)),
            (n.previouslyChecked = !(!e.checked && !e.defaultChecked)),
            (n.state = {
              checked: !(!e.checked && !e.defaultChecked),
              hasFocus: !1,
            }),
            n
          );
        }
        return (
          (function (e, t) {
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
          })(t, e),
          r(t, [
            {
              key: "componentDidUpdate",
              value: function (e) {
                e.checked !== this.props.checked &&
                  this.setState({ checked: !!this.props.checked });
              },
            },
            {
              key: "handleClick",
              value: function (e) {
                var t = this.input;
                if (e.target !== t && !this.moved)
                  return (
                    (this.previouslyChecked = t.checked),
                    e.preventDefault(),
                    t.focus(),
                    void t.click()
                  );
                var n = this.props.hasOwnProperty("checked")
                  ? this.props.checked
                  : t.checked;
                this.setState({ checked: n });
              },
            },
            {
              key: "handleTouchStart",
              value: function (e) {
                (this.startX = (0, d.pointerCoord)(e).x), (this.activated = !0);
              },
            },
            {
              key: "handleTouchMove",
              value: function (e) {
                if (this.activated && ((this.moved = !0), this.startX)) {
                  var t = (0, d.pointerCoord)(e).x;
                  this.state.checked && t + 15 < this.startX
                    ? (this.setState({ checked: !1 }),
                      (this.startX = t),
                      (this.activated = !0))
                    : t - 15 > this.startX &&
                      (this.setState({ checked: !0 }),
                      (this.startX = t),
                      (this.activated = t < this.startX + 5));
                }
              },
            },
            {
              key: "handleTouchEnd",
              value: function (e) {
                if (this.moved) {
                  var t = this.input;
                  if ((e.preventDefault(), this.startX)) {
                    var n = (0, d.pointerCoord)(e).x;
                    !0 === this.previouslyChecked && this.startX + 4 > n
                      ? this.previouslyChecked !== this.state.checked &&
                        (this.setState({ checked: !1 }),
                        (this.previouslyChecked = this.state.checked),
                        t.click())
                      : this.startX - 4 < n &&
                        this.previouslyChecked !== this.state.checked &&
                        (this.setState({ checked: !0 }),
                        (this.previouslyChecked = this.state.checked),
                        t.click()),
                      (this.activated = !1),
                      (this.startX = null),
                      (this.moved = !1);
                  }
                }
              },
            },
            {
              key: "handleFocus",
              value: function (e) {
                var t = this.props.onFocus;
                t && t(e), this.setState({ hasFocus: !0 });
              },
            },
            {
              key: "handleBlur",
              value: function (e) {
                var t = this.props.onBlur;
                t && t(e), this.setState({ hasFocus: !1 });
              },
            },
            {
              key: "getIcon",
              value: function (e) {
                var n = this.props.icons;
                return n
                  ? void 0 === n[e]
                    ? t.defaultProps.icons[e]
                    : n[e]
                  : null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.className,
                  r =
                    (t.icons,
                    (function (e, t) {
                      var n = {};
                      for (var a in e)
                        t.indexOf(a) >= 0 ||
                          (Object.prototype.hasOwnProperty.call(e, a) &&
                            (n[a] = e[a]));
                      return n;
                    })(t, ["className", "icons"])),
                  o = (0, i.default)(
                    "react-toggle",
                    {
                      "react-toggle--checked": this.state.checked,
                      "react-toggle--focus": this.state.hasFocus,
                      "react-toggle--disabled": this.props.disabled,
                    },
                    n
                  );
                return c.default.createElement(
                  "div",
                  {
                    className: o,
                    onClick: this.handleClick,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd,
                  },
                  c.default.createElement(
                    "div",
                    { className: "react-toggle-track" },
                    c.default.createElement(
                      "div",
                      { className: "react-toggle-track-check" },
                      this.getIcon("checked")
                    ),
                    c.default.createElement(
                      "div",
                      { className: "react-toggle-track-x" },
                      this.getIcon("unchecked")
                    )
                  ),
                  c.default.createElement("div", {
                    className: "react-toggle-thumb",
                  }),
                  c.default.createElement(
                    "input",
                    a({}, r, {
                      ref: function (t) {
                        e.input = t;
                      },
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                      className: "react-toggle-screenreader-only",
                      type: "checkbox",
                    })
                  )
                );
              },
            },
          ]),
          t
        );
      })(o.PureComponent);
      (t.default = m),
        (m.displayName = "Toggle"),
        (m.defaultProps = {
          icons: {
            checked: c.default.createElement(s.default, null),
            unchecked: c.default.createElement(u.default, null),
          },
        }),
        (m.propTypes = {
          checked: l.default.bool,
          disabled: l.default.bool,
          defaultChecked: l.default.bool,
          onChange: l.default.func,
          onFocus: l.default.func,
          onBlur: l.default.func,
          className: l.default.string,
          name: l.default.string,
          value: l.default.string,
          id: l.default.string,
          "aria-labelledby": l.default.string,
          "aria-label": l.default.string,
          icons: l.default.oneOfType([
            l.default.bool,
            l.default.shape({
              checked: l.default.node,
              unchecked: l.default.node,
            }),
          ]),
        });
    },
    158: function (e, t, n) {
      var a;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var a = arguments[t];
            if (a) {
              var o = typeof a;
              if ("string" === o || "number" === o) e.push(a);
              else if (Array.isArray(a) && a.length) {
                var c = r.apply(null, a);
                c && e.push(c);
              } else if ("object" === o)
                for (var i in a) n.call(a, i) && a[i] && e.push(i);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (a = function () {
                return r;
              }.apply(t, [])) || (e.exports = a);
      })();
    },
    159: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        r = n(0),
        o = (a = r) && a.__esModule ? a : { default: a };
      t.default = function () {
        return o.default.createElement(
          "svg",
          { width: "14", height: "11", viewBox: "0 0 14 11" },
          o.default.createElement("title", null, "switch-check"),
          o.default.createElement("path", {
            d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
            fill: "#fff",
            fillRule: "evenodd",
          })
        );
      };
    },
    160: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        r = n(0),
        o = (a = r) && a.__esModule ? a : { default: a };
      t.default = function () {
        return o.default.createElement(
          "svg",
          { width: "10", height: "10", viewBox: "0 0 10 10" },
          o.default.createElement("title", null, "switch-x"),
          o.default.createElement("path", {
            d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
            fill: "#fff",
            fillRule: "evenodd",
          })
        );
      };
    },
    161: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pointerCoord = function (e) {
          if (e) {
            var t = e.changedTouches;
            if (t && t.length > 0) {
              var n = t[0];
              return { x: n.clientX, y: n.clientY };
            }
            var a = e.pageX;
            if (void 0 !== a) return { x: a, y: e.pageY };
          }
          return { x: 0, y: 0 };
        });
    },
    162: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return s;
        });
      var a = n(2),
        r = n(6),
        o = n(0),
        c = n.n(o),
        i = n(135),
        l = n(126);
      function s(e) {
        var t = e.label,
          n = e.to,
          o = e.docsPluginId,
          s = Object(r.a)(e, ["label", "to", "docsPluginId"]),
          u = Object(l.useActiveVersion)(o),
          d = Object(l.useLatestVersion)(o),
          f = null != u ? u : d,
          m = null != t ? t : f.label,
          h =
            null != n
              ? n
              : (function (e) {
                  return e.docs.find(function (t) {
                    return t.id === e.mainDocId;
                  });
                })(f).path;
        return c.a.createElement(i.a, Object(a.a)({}, s, { label: m, to: h }));
      }
    },
    166: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return u;
        });
      var a = n(2),
        r = n(6),
        o = n(0),
        c = n.n(o),
        i = n(135),
        l = n(126),
        s = function (e) {
          return e.docs.find(function (t) {
            return t.id === e.mainDocId;
          });
        };
      function u(e) {
        var t,
          n = e.mobile,
          o = e.docsPluginId,
          u = Object(r.a)(e, ["mobile", "docsPluginId"]),
          d = Object(l.useActiveDocContext)(o),
          f = Object(l.useVersions)(o),
          m = Object(l.useLatestVersion)(o);
        var h = null !== (t = d.activeVersion) && void 0 !== t ? t : m,
          v = n ? "Versions" : h.label,
          b = n ? void 0 : s(h).path;
        return c.a.createElement(
          i.a,
          Object(a.a)({}, u, {
            mobile: n,
            label: v,
            to: b,
            items: (function () {
              if (!(f.length <= 2))
                return f.map(function (e) {
                  var t =
                    (null == d ? void 0 : d.alternateDocVersions[e.name]) ||
                    s(e);
                  return {
                    isNavLink: !0,
                    label: e.label,
                    to: t.path,
                    isActive: function () {
                      return e === (null == d ? void 0 : d.activeVersion);
                    },
                  };
                });
            })(),
          })
        );
      }
    },
  },
]);
