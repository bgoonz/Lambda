(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    "14ZF": function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        a = r("MX0m"),
        i = r.n(a);
      r("q1tI");
      t.a = function () {
        return Object(n.jsxs)("div", {
          className: "jsx-710207973 signup-form-email-disclaimer",
          children: [
            "By continuing, you agree to Repl.it's",
            " ",
            Object(n.jsx)("a", {
              href: "/site/terms",
              target: "_blank",
              className: "jsx-710207973",
              children: "Terms of Service",
            }),
            " ",
            "and",
            " ",
            Object(n.jsx)("a", {
              href: "/site/privacy",
              target: "_blank",
              className: "jsx-710207973",
              children: "Privacy Policy",
            }),
            ", and to receiving emails with updates.",
            Object(n.jsx)(i.a, {
              id: "710207973",
              children: [
                ".signup-form-email-disclaimer.jsx-710207973{font-size:12px;margin-top:20px;text-align:center;color:var(--color-foreground-2);line-height:14px;}",
              ],
            }),
          ],
        });
      };
    },
    "2tbh": function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        a = r("MX0m"),
        i = r.n(a),
        o = r("q1tI"),
        c = r("cpVT"),
        s = r("vJKn"),
        u = r.n(s),
        p = r("rg98"),
        l = r("H+61"),
        f = r("UlJF"),
        d = r("7LId"),
        h = r("VIvw"),
        b = r("iHvq"),
        m = r("/MKj"),
        j = r("ANjH"),
        x = r("XLFt"),
        g = r("BvvR"),
        v = r("KRxe");
      function y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                Object(c.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function O(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(b.a)(e);
          if (t) {
            var a = Object(b.a)(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return Object(h.a)(this, r);
        };
      }
      var k = (function (e) {
        Object(d.a)(r, e);
        var t = O(r);
        function r() {
          var e;
          Object(l.a)(this, r);
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(a))).state = { isShown: !1 }),
            (e.toggleShowHide = function () {
              e.setState({ isShown: !e.state.isShown });
            }),
            e
          );
        }
        return (
          Object(f.a)(r, [
            {
              key: "focus",
              value: function () {
                this.input && this.input.focus();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state.isShown,
                  r = t ? "HIDE" : "SHOW";
                return Object(n.jsxs)("div", {
                  className: "jsx-3588716774 password-input",
                  children: [
                    this.props.validated
                      ? Object(n.jsx)(
                          g.a,
                          w(
                            w(
                              {
                                ref: function (t) {
                                  return (e.input = t);
                                },
                                type: t ? "text" : "password",
                              },
                              this.props
                            ),
                            {},
                            { validated: void 0 }
                          )
                        )
                      : Object(n.jsx)(
                          v.b,
                          w(
                            w(
                              {
                                ref: function (t) {
                                  return (e.input = t);
                                },
                              },
                              this.props
                            ),
                            {},
                            { type: t ? "text" : "password", validated: void 0 }
                          )
                        ),
                    this.props.value &&
                      this.props.value.length > 0 &&
                      Object(n.jsx)("div", {
                        onClick: this.toggleShowHide,
                        className: "jsx-3588716774 password-show-toggle",
                        children: r,
                      }),
                    Object(n.jsx)(i.a, {
                      id: "3588716774",
                      children: [
                        ".password-input.jsx-3588716774{position:relative;}",
                        ".password-input.jsx-3588716774 input{padding-right:67px !important;}",
                        ".password-show-toggle.jsx-3588716774{position:absolute;right:19px;line-height:16px;top:12px;cursor:pointer;}",
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          r
        );
      })(o.Component);
      k.defaultProps = { validated: !1, theme: "replitLight" };
      var S = k,
        C = r("kDxc"),
        R = r("7J1T"),
        _ = r("JxgA"),
        E = r("14ZF"),
        P = r("up5I"),
        T = r("IdsG");
      function N(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                Object(c.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function D(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(b.a)(e);
          if (t) {
            var a = Object(b.a)(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return Object(h.a)(this, r);
        };
      }
      var L = (function (e) {
          Object(d.a)(r, e);
          var t = D(r);
          function r(e) {
            var n;
            return (
              Object(l.a)(this, r),
              ((n = t.call(this)).onRandomUser = function () {
                var e = "user".concat(Math.ceil(1e7 * Math.random())),
                  t = "".concat(e, "@").concat(e, ".com");
                n.setState({ username: e, email: t });
              }),
              (n.onSignup = (function () {
                var e = Object(p.a)(
                  u.a.mark(function e(t) {
                    var r, a, i, o, c, s, p, l, f, d, h, b;
                    return u.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              t.preventDefault(),
                                n.setState({ isLoading: !0 }),
                                (r = n.props.onSubmit),
                                (e.t0 = u.a.keys(n.state.validation));
                            case 4:
                              if ((e.t1 = e.t0()).done) {
                                e.next = 12;
                                break;
                              }
                              if (
                                ((a = e.t1.value),
                                !n.inputRefs[a] ||
                                  !n.inputRefs[a].focus ||
                                  (n.state[a] && !n.state.validation[a]))
                              ) {
                                e.next = 10;
                                break;
                              }
                              return (
                                n.inputRefs[a].focus(),
                                n.setState({ isLoading: !1 }),
                                e.abrupt("return")
                              );
                            case 10:
                              e.next = 4;
                              break;
                            case 12:
                              if (
                                ((i = n.state),
                                (o = i.username),
                                (c = i.email),
                                (s = i.password),
                                (p = i.isTeacher),
                                (l = i.privacyInvite),
                                o && s && c)
                              ) {
                                e.next = 17;
                                break;
                              }
                              return (
                                r({ error: "All fields are required" }),
                                n.setState({ isLoading: !1 }),
                                e.abrupt("return")
                              );
                            case 17:
                              return (
                                (e.prev = 17), (e.next = 20), Object(_.b)()
                              );
                            case 20:
                              (f = e.sent), (e.next = 28);
                              break;
                            case 23:
                              return (
                                (e.prev = 23),
                                (e.t2 = e.catch(17)),
                                r({
                                  error:
                                    "Something went wrong trying to submit. Please try again.",
                                }),
                                n.setState({ isLoading: !1 }),
                                e.abrupt("return")
                              );
                            case 28:
                              return (
                                (e.next = 30),
                                n.props.signup({
                                  username: o,
                                  password: s,
                                  privacyInvite: l,
                                  email: c,
                                  teacher: p,
                                  hCaptchaResponse: f,
                                  hCaptchaSiteKey: _.a,
                                })
                              );
                            case 30:
                              if (
                                ((d = e.sent),
                                (h = d.user),
                                (b = d.error),
                                n.setState({ isLoading: !1 }),
                                !b)
                              ) {
                                e.next = 38;
                                break;
                              }
                              if (
                                (r({
                                  error:
                                    b.status && b.message
                                      ? b.message
                                      : "Something went wrong",
                                }),
                                !(b.status >= 500))
                              ) {
                                e.next = 38;
                                break;
                              }
                              throw b;
                            case 38:
                              h && r({ user: h });
                            case 39:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[17, 23]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.inputRefs = {}),
              (n.state = {
                username: e.username || "",
                email: e.email || "",
                password: e.password || "",
                isTeacher: e.isTeacher || !1,
                privacyInvite: e.privacyInvite,
                isLoading: !1,
                validation: { username: null, email: null, password: null },
              }),
              e.privacyInvite &&
                ((n.state.username = e.randomUsername),
                (n.state.email = "".concat(
                  e.randomUsername,
                  "@teams.noreply.replit.com"
                ))),
              n
            );
          }
          return (
            Object(f.a)(r, [
              {
                key: "onValidation",
                value: function (e, t) {
                  this.setState({
                    validation: I(
                      I({}, this.state.validation),
                      {},
                      Object(c.a)({}, e, t)
                    ),
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.onChangeAuth,
                    r = this.state,
                    a = r.email,
                    o = r.username,
                    c = r.password,
                    s = r.isTeacher,
                    u = r.isLoading,
                    p = r.privacyInvite;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsxs)("form", {
                        onSubmit: this.onSignup,
                        method: "POST",
                        action: "/signup",
                        className: "jsx-750989145 signup-form",
                        children: [
                          p &&
                            Object(n.jsx)("div", {
                              className: "jsx-750989145 invite-message",
                              children: Object(n.jsx)(T.a, {
                                size: "small",
                                children:
                                  "Use our default or pick a username that's not your real name.",
                              }),
                            }),
                          Object(n.jsx)("div", {
                            className: "jsx-750989145 input-group",
                            children: Object(n.jsx)(g.a, {
                              ref: function (t) {
                                return (e.inputRefs.username = t);
                              },
                              validator: "username",
                              name: "username",
                              placeholder: "username",
                              value: o,
                              onChange: function (t) {
                                return e.setState({
                                  username: t.currentTarget.value,
                                });
                              },
                              onValidation: function (t) {
                                return e.onValidation("username", t);
                              },
                              autoComplete: "on",
                              autoFocus: !0,
                              autoCorrect: "off",
                              autoCapitalize: "off",
                            }),
                          }),
                          this.props.privacyInvite
                            ? void 0
                            : Object(n.jsx)("div", {
                                className: "jsx-750989145 input-group",
                                children: Object(n.jsx)(g.a, {
                                  ref: function (t) {
                                    return (e.inputRefs.email = t);
                                  },
                                  validator: "email",
                                  name: "email",
                                  placeholder: "email",
                                  value: a,
                                  onChange: function (t) {
                                    return e.setState({
                                      email: t.currentTarget.value,
                                    });
                                  },
                                  onValidation: function (t) {
                                    return e.onValidation("email", t);
                                  },
                                  readOnly: !!this.props.immutableEmail,
                                  autoComplete: "on",
                                  autoCorrect: "off",
                                  autoCapitalize: "off",
                                }),
                              }),
                          Object(n.jsx)("div", {
                            className: "jsx-750989145 input-group",
                            children: Object(n.jsx)(
                              S,
                              {
                                validated: !0,
                                ref: function (t) {
                                  return (e.inputRefs.password = t);
                                },
                                name: "password",
                                placeholder: "password",
                                validator: "password",
                                value: c,
                                onChange: function (t) {
                                  return e.setState({
                                    password: t.currentTarget.value,
                                  });
                                },
                                onValidation: function (t) {
                                  return e.onValidation("password", t);
                                },
                              },
                              "password"
                            ),
                          }),
                          !this.props.privacyInvite &&
                            Object(n.jsxs)("div", {
                              className: "jsx-750989145 signup-form-bottom",
                              children: [
                                Object(n.jsx)("div", {
                                  className: "jsx-750989145 teacher-checkbox",
                                  children: Object(n.jsx)(C.a, {
                                    checked: s,
                                    onChange: function (t) {
                                      return e.setState({ isTeacher: t });
                                    },
                                    children: "I'm a teacher",
                                  }),
                                }),
                                t &&
                                  Object(n.jsxs)("div", {
                                    className: "jsx-750989145",
                                    children: [
                                      "or",
                                      " ",
                                      Object(n.jsx)("a", {
                                        onClick: function (e) {
                                          e.preventDefault(), t();
                                        },
                                        className:
                                          "jsx-750989145 signup-form-switcher",
                                        children: "log in",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          u
                            ? Object(n.jsx)(x.a, {
                                style: {
                                  margin: "0 auto",
                                  width: "35px",
                                  height: "35px",
                                },
                              })
                            : Object(n.jsx)(P.a, {
                                color: "primary",
                                filled: !0,
                                fullWidth: !0,
                                onClick: this.onSignup,
                                children: "Sign up",
                              }),
                          Object(n.jsx)(E.a, {}),
                          Object(n.jsx)("input", {
                            type: "submit",
                            style: { display: "none" },
                            className: "jsx-750989145",
                          }),
                          Object(n.jsx)(i.a, {
                            id: "750989145",
                            children: [
                              ".input-group.jsx-750989145{margin-bottom:8px;}",
                              ".invite-message.jsx-750989145{text-align:center;padding:var(--spacing-1);}",
                              ".signup-form-bottom.jsx-750989145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;font-size:14px;margin-bottom:20px;color:var(--color-foreground-2);}",
                              ".signup-form-switcher.jsx-750989145{cursor:pointer;}",
                            ],
                          }),
                        ],
                      }),
                      !1,
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(o.Component),
        U = Object(m.c)(null, function (e) {
          return Object(j.b)({ signup: R.f }, e);
        })(L),
        A = r("YFqc"),
        F = r.n(A);
      function H(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(b.a)(e);
          if (t) {
            var a = Object(b.a)(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return Object(h.a)(this, r);
        };
      }
      var G = (function (e) {
          Object(d.a)(r, e);
          var t = H(r);
          function r() {
            var e;
            Object(l.a)(this, r);
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                username: e.props.username || "",
                password: e.props.password || "",
                isLoading: !1,
              }),
              (e.onLogin = (function () {
                var t = Object(p.a)(
                  u.a.mark(function t(r) {
                    var n, a, i, o, c, s, p, l;
                    return u.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                (r && r.preventDefault && r.preventDefault(),
                                !e.state.isLoading)
                              ) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return");
                            case 3:
                              if (
                                ((n = e.props.onSubmit),
                                (a = e.state),
                                (i = a.username),
                                (o = a.password),
                                i && o)
                              ) {
                                t.next = 9;
                                break;
                              }
                              return (
                                n({ error: "All fields are required" }),
                                !i && e.inputRefs.username
                                  ? e.inputRefs.username.focus()
                                  : !o &&
                                    e.inputRefs.password &&
                                    e.inputRefs.password.focus(),
                                t.abrupt("return")
                              );
                            case 9:
                              return (
                                e.setState({ isLoading: !0 }),
                                (t.prev = 10),
                                (t.next = 13),
                                Object(_.b)()
                              );
                            case 13:
                              (c = t.sent), (t.next = 21);
                              break;
                            case 16:
                              return (
                                (t.prev = 16),
                                (t.t0 = t.catch(10)),
                                n({
                                  error:
                                    "Something went wrong trying to submit. Please try again.",
                                }),
                                e.setState({ isLoading: !1 }),
                                t.abrupt("return")
                              );
                            case 21:
                              return (
                                (t.next = 23),
                                e.props.login({
                                  username: i,
                                  password: o,
                                  hCaptchaResponse: c,
                                  hCaptchaSiteKey: _.a,
                                  teacher: e.props.isTeacher,
                                })
                              );
                            case 23:
                              if (
                                ((s = t.sent),
                                (p = s.user),
                                (l = s.error),
                                e.setState({ isLoading: !1 }),
                                !l)
                              ) {
                                t.next = 31;
                                break;
                              }
                              if (
                                (n({
                                  error:
                                    l.status && l.message
                                      ? l.message
                                      : "Something went wrong",
                                }),
                                !(l.status >= 500))
                              ) {
                                t.next = 31;
                                break;
                              }
                              throw l;
                            case 31:
                              p && n({ user: p });
                            case 32:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[10, 16]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              (e.inputRefs = {}),
              e
            );
          }
          return (
            Object(f.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.onChangeAuth,
                    r = this.state,
                    a = r.username,
                    o = r.password,
                    c = r.isLoading;
                  return Object(n.jsx)("div", {
                    children: Object(n.jsxs)("form", {
                      onSubmit: this.onLogin,
                      method: "POST",
                      action: "/login",
                      className: "jsx-3520724391 login-form",
                      children: [
                        Object(n.jsx)("div", {
                          className: "jsx-3520724391 input-group",
                          children: Object(n.jsx)(v.b, {
                            ref: function (t) {
                              return (e.inputRefs.username = t);
                            },
                            name: "username",
                            placeholder: "email or username",
                            value: a,
                            onChange: function (t) {
                              return e.setState({
                                username: t.currentTarget.value,
                              });
                            },
                            autoComplete: "on",
                            autoFocus: !0,
                            autoCorrect: "off",
                            autoCapitalize: "off",
                          }),
                        }),
                        Object(n.jsx)("div", {
                          className: "jsx-3520724391 input-group",
                          children: Object(n.jsx)(
                            S,
                            {
                              ref: function (t) {
                                return (e.inputRefs.password = t);
                              },
                              validated: !1,
                              name: "password",
                              placeholder: "password",
                              value: o,
                              onChange: function (t) {
                                return e.setState({
                                  password: t.currentTarget.value,
                                });
                              },
                            },
                            "password"
                          ),
                        }),
                        Object(n.jsxs)("div", {
                          className: "jsx-3520724391 login-form-bottom",
                          children: [
                            Object(n.jsx)(F.a, {
                              href: "/forgot",
                              children: Object(n.jsx)("a", {
                                className: "jsx-3520724391 login-forgot",
                                children: "Forgot password?",
                              }),
                            }),
                            t &&
                              Object(n.jsxs)("div", {
                                className: "jsx-3520724391",
                                children: [
                                  "or",
                                  " ",
                                  Object(n.jsx)("a", {
                                    onClick: function (e) {
                                      e.preventDefault(), t();
                                    },
                                    className:
                                      "jsx-3520724391 login-form-switcher",
                                    children: "sign up",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        c
                          ? Object(n.jsx)(x.a, {
                              style: {
                                margin: "0 auto",
                                width: "35px",
                                height: "35px",
                              },
                            })
                          : Object(n.jsx)(P.a, {
                              color: "primary",
                              onClick: this.onLogin,
                              filled: !0,
                              fullWidth: !0,
                              children: "Log in",
                            }),
                        Object(n.jsx)("input", {
                          type: "submit",
                          style: { display: "none" },
                          className: "jsx-3520724391",
                        }),
                        Object(n.jsx)(i.a, {
                          id: "3520724391",
                          children: [
                            ".input-group.jsx-3520724391{margin-bottom:8px;}",
                            ".login-form-bottom.jsx-3520724391{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;margin-bottom:20px;font-size:14px;}",
                            ".login-forgot.jsx-3520724391{color:var(--color-primary-1);display:inline-block;border:0;margin-left:3px;}",
                            ".login-forgot.jsx-3520724391:hover{-webkit-text-decoration:underline;text-decoration:underline;}",
                            ".login-form-switcher.jsx-3520724391{color:var(--color-primary-1);cursor:pointer;}",
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(o.Component),
        M = Object(m.c)(null, function (e) {
          return Object(j.b)({ login: R.d }, e);
        })(G),
        K = r("TSYQ"),
        z = r.n(K);
      function J(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(b.a)(e);
          if (t) {
            var a = Object(b.a)(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return Object(h.a)(this, r);
        };
      }
      var V = ["google", "github", "facebook"],
        q = (function (e) {
          Object(d.a)(r, e);
          var t = J(r);
          function r() {
            var e;
            Object(l.a)(this, r);
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a))).onOAuth = function (t) {
                var r = e.props.onSubmit,
                  n = window.open(t),
                  a = (function () {
                    var t = Object(p.a)(
                      u.a.mark(function t(i) {
                        var o, c, s, p;
                        return u.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  (i.origin !== window.location.origin &&
                                    "https://replit.com" !== i.origin &&
                                    "https://repl.it" !== i.origin) ||
                                  ("authenticated" !== i.data &&
                                    "authenticated:new_user" !== i.data)
                                ) {
                                  t.next = 14;
                                  break;
                                }
                                return (
                                  window.removeEventListener("message", a),
                                  n.close(),
                                  (t.next = 5),
                                  e.props.authenticate()
                                );
                              case 5:
                                if (
                                  ((o = t.sent),
                                  (c = o.error),
                                  (s = o.user),
                                  !c)
                                ) {
                                  t.next = 13;
                                  break;
                                }
                                if (
                                  (r({
                                    error:
                                      c.status && c.message
                                        ? c.message
                                        : "Something went wrong",
                                  }),
                                  401 === c.status)
                                ) {
                                  t.next = 12;
                                  break;
                                }
                                throw c;
                              case 12:
                                return t.abrupt("return");
                              case 13:
                                s &&
                                  ((p = "authenticated:new_user" === i.data),
                                  r({ user: s, social: !0, newUser: p }));
                              case 14:
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
                window.addEventListener("message", a);
              }),
              (e.onOptionClick = function (t, r) {
                t.preventDefault();
                var n = "/auth/".concat(r, "/get?close=1");
                e.props.isTeacher && (n += "&teacher=1"), e.onOAuth(n);
              }),
              e
            );
          }
          return (
            Object(f.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(n.jsxs)("div", {
                    className: "jsx-3910275636",
                    children: [
                      V.map(function (t) {
                        return Object(n.jsx)(
                          Q,
                          {
                            onClick: function (r) {
                              return e.onOptionClick(r, t);
                            },
                            provider: t,
                          },
                          t
                        );
                      }),
                      Object(n.jsx)(i.a, {
                        id: "3910275636",
                        children: [
                          "div.jsx-3910275636{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:var(--spacing-2) 0;}",
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(o.Component),
        Q = function (e) {
          var t = e.onClick,
            r = e.provider;
          return Object(n.jsxs)("a", {
            onClick: t,
            className: "jsx-1534605632 social-login-item",
            children: [
              Object(n.jsx)("div", {
                style: {
                  backgroundImage: "url(/public/images/".concat(r, ".png)"),
                },
                className:
                  "jsx-1534605632 " +
                  (z()("social-login-icon", Object(c.a)({}, r, r)) || ""),
              }),
              Object(n.jsx)(i.a, {
                id: "1534605632",
                children: [
                  ".social-login-item.jsx-1534605632{padding:var(--spacing-1);border-radius:100%;}",
                  ".social-login-icon.jsx-1534605632{height:24px;width:24px;background-size:contain;background-repeat:no-repeat;}",
                  ".social-login-item.jsx-1534605632:hover{background-color:var(--color-control-3);}",
                  ".social-login-item.jsx-1534605632,.social-login-item.jsx-1534605632:hover{border:0 none;}",
                  ".replit-ui-theme-root.dark .social-login-icon.github{-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1);}",
                ],
              }),
            ],
          });
        },
        Y = Object(m.c)(null, function (e) {
          return Object(j.b)({ authenticate: R.a }, e);
        })(q),
        B = r("EQ2k");
      t.a = function (e) {
        var t = e.onSubmit,
          r = e.isLogin,
          a = e.email,
          o = e.isTeacher,
          c = e.onChangeAuth,
          s = e.privacyInvite,
          u = e.randomUsername;
        return Object(n.jsxs)("div", {
          className: i.a.dynamic([["1827768959", [B.a.black]]]),
          children: [
            Object(n.jsx)(i.a, {
              id: "1827768959",
              dynamic: [B.a.black],
              children: [
                "div.__jsx-style-dynamic-selector{max-width:280px;margin-top:auto;margin-bottom:auto;color:".concat(
                  B.a.black,
                  ";}"
                ),
              ],
            }),
            !s && Object(n.jsx)(Y, { isTeacher: o, onSubmit: t }),
            r
              ? Object(n.jsx)(M, { isTeacher: o, onSubmit: t, onChangeAuth: c })
              : Object(n.jsx)(U, {
                  isTeacher: o,
                  email: a,
                  onSubmit: t,
                  onChangeAuth: c,
                  privacyInvite: s,
                  randomUsername: u,
                }),
          ],
        });
      };
    },
    "7J1T": function (e, t, r) {
      "use strict";
      r.d(t, "f", function () {
        return p;
      }),
        r.d(t, "d", function () {
          return l;
        }),
        r.d(t, "a", function () {
          return f;
        }),
        r.d(t, "e", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return h;
        }),
        r.d(t, "b", function () {
          return b;
        });
      var n = r("cpVT"),
        a = r("vJKn"),
        i = r.n(a),
        o = r("rg98"),
        c = r("G5Ub");
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function p(e) {
        var t = e.username,
          r = e.email,
          n = e.password,
          a = e.teacher,
          s = e.selfLearner,
          u = e.hCaptchaResponse,
          p = e.hCaptchaSiteKey,
          l = e.privacyInvite;
        return (function () {
          var e = Object(o.a)(
            i.a.mark(function e(o, f) {
              var d;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          o({ type: "FETCH_SIGNUP_REQUEST" }),
                          (e.prev = 1),
                          (e.next = 4),
                          Object(c.d)("/signup", {
                            email: r,
                            username: t,
                            password: n,
                            teacher: a,
                            privacyInvite: l,
                            selfLearner: s,
                            hCaptchaResponse: u,
                            hCaptchaSiteKey: p,
                          })
                        );
                      case 4:
                        (d = e.sent), (e.next = 11);
                        break;
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          o({ type: "FETCH_SIGNUP_FAILURE", error: e.t0 }),
                          e.abrupt("return", { error: e.t0 })
                        );
                      case 11:
                        return (
                          o({ type: "FETCH_SIGNUP_SUCCESS", user: d }),
                          e.abrupt("return", { user: f().user.userInfo })
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
      }
      function l(e) {
        var t = e.username,
          r = e.password,
          n = e.teacher,
          a = e.hCaptchaResponse,
          s = e.hCaptchaSiteKey;
        return (function () {
          var e = Object(o.a)(
            i.a.mark(function e(o, u) {
              var p;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          o({ type: "FETCH_LOGIN_REQUEST" }),
                          (e.prev = 1),
                          (e.next = 4),
                          Object(c.d)("/login", {
                            username: t,
                            password: r,
                            teacher: n,
                            hCaptchaResponse: a,
                            hCaptchaSiteKey: s,
                          })
                        );
                      case 4:
                        (p = e.sent), (e.next = 11);
                        break;
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          o({ type: "FETCH_LOGIN_FAILURE", error: e.t0 }),
                          e.abrupt("return", { error: e.t0 })
                        );
                      case 11:
                        return (
                          o({ type: "FETCH_LOGIN_SUCCESS", user: p }),
                          e.abrupt("return", { user: u().user.userInfo })
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
      }
      function f() {
        return (function () {
          var e = Object(o.a)(
            i.a.mark(function e(t, r) {
              var n, a;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t({ type: "FETCH_USER_INFO_REQUEST" }),
                          (e.prev = 1),
                          (e.next = 4),
                          Object(c.b)("/is_authenticated")
                        );
                      case 4:
                        (n = e.sent), (e.next = 11);
                        break;
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          t({ type: "FETCH_USER_INFO_FAILURE", error: e.t0 }),
                          e.abrupt("return", { error: e.t0 })
                        );
                      case 11:
                        if (n.success) {
                          e.next = 16;
                          break;
                        }
                        return (
                          ((a = new Error("Unauthorized")).status = 401),
                          t({ type: "FETCH_USER_INFO_FAILURE", error: a }),
                          e.abrupt("return", { error: a })
                        );
                      case 16:
                        return (
                          t({
                            type: "FETCH_USER_INFO_SUCCESS",
                            user: u(
                              u({}, n.user),
                              {},
                              {
                                should_complete_profile:
                                  n.should_complete_profile,
                              }
                            ),
                          }),
                          e.abrupt("return", { user: r().user.userInfo })
                        );
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
      }
      function d() {
        return { type: "AUTH_MODAL_SHOW" };
      }
      function h() {
        return { type: "AUTH_MODAL_INCREMENT_PROMPT_COUNT" };
      }
      function b() {
        return { type: "AUTH_MODAL_DISSMISS" };
      }
    },
    JxgA: function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return o;
        }),
          r.d(t, "b", function () {
            return d;
          });
        var n = r("vJKn"),
          a = r.n(n),
          i = r("rg98"),
          o = e.env.BYPASS_CAPTCHA_CYPRESS
            ? "20000000-ffff-ffff-ffff-000000000002"
            : "473079ba-e99f-4e25-a635-e9b661c7dd3e",
          c = 0;
        function s() {
          var e = Math.floor(500 * Math.random());
          return 1e3 * Math.pow(1.7, c) + e;
        }
        var u = null;
        function p() {
          return l.apply(this, arguments);
        }
        function l() {
          return (l = Object(i.a)(
            a.a.mark(function e() {
              var t;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        ((t = document.createElement("script")).src =
                          "https://www.hcaptcha.com/1/api.js?render=explicit&host=repl.it"),
                        e.abrupt(
                          "return",
                          new Promise(function (e, r) {
                            (t.onload = f(function () {
                              (u = null), e();
                            })),
                              (t.onerror = function () {
                                c++,
                                  (u = new Promise(function (e, t) {
                                    setTimeout(function () {
                                      p().then(e, t);
                                    }, s());
                                  })),
                                  5 === c &&
                                    r(
                                      new Error(
                                        "Failed to load captcha script after ".concat(
                                          5,
                                          " times"
                                        )
                                      )
                                    );
                              }),
                              window.document.head.appendChild(t);
                          })
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function f(e) {
          return function () {
            "undefined" === typeof window.hcaptcha
              ? setTimeout(function () {
                  f(e);
                }, 100)
              : e();
          };
        }
        function d() {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = Object(i.a)(
            a.a.mark(function e() {
              var t;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      e.next = 2;
                      break;
                    case 2:
                      if ((window.location.hostname, !u)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 6), u;
                    case 6:
                      return (
                        (t = window.hcaptcha),
                        e.abrupt(
                          "return",
                          new Promise(function (e, r) {
                            var n = document.createElement("div"),
                              a = t.render(n, {
                                sitekey: o,
                                size: "invisible",
                                callback: function (r) {
                                  t.reset(a),
                                    window.document.body.contains(n) &&
                                      window.document.body.removeChild(n),
                                    e(r);
                                },
                                "error-callback": function () {
                                  t.reset(a),
                                    window.document.body.contains(n) &&
                                      window.document.body.removeChild(n),
                                    r(new Error("HCaptcha render error"));
                                },
                                "expired-callback": function () {
                                  t.reset(a),
                                    window.document.body.contains(n) &&
                                      window.document.body.removeChild(n),
                                    r(new Error("HCaptcha render expired"));
                                },
                              });
                            window.document.body.appendChild(n), t.execute(a);
                          })
                        )
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        u = p();
      }.call(this, r("8oxB")));
    },
    kDxc: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        a = r("H+61"),
        i = r("UlJF"),
        o = r("7LId"),
        c = r("VIvw"),
        s = r("iHvq"),
        u = r("MX0m"),
        p = r.n(u),
        l = r("q1tI"),
        f = r("TSYQ"),
        d = r.n(f),
        h = r("EQ2k");
      function b(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(s.a)(e);
          if (t) {
            var a = Object(s.a)(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return Object(c.a)(this, r);
        };
      }
      var m = (function (e) {
        Object(o.a)(r, e);
        var t = b(r);
        function r(e) {
          var n;
          return (
            Object(a.a)(this, r),
            ((n = t.call(this, e)).onToggle = function (e) {
              e && (e.preventDefault(), e.stopPropagation());
              var t =
                void 0 === n.props.forceChecked
                  ? n.state.checked
                  : n.props.forceChecked;
              n.props.onChange(!t),
                void 0 === n.props.forceChecked &&
                  n.setState({ checked: !n.state.checked });
            }),
            (n.state = { checked: e.checked || !1 }),
            n
          );
        }
        return (
          Object(i.a)(r, [
            {
              key: "render",
              value: function () {
                return Object(n.jsxs)("div", {
                  style: this.props.style,
                  onClick: this.onToggle,
                  className:
                    p.a.dynamic([["950980637", [h.a.blueGray, h.a.blueGray]]]) +
                    " checkbox-wrapper",
                  children: [
                    Object(n.jsx)("div", {
                      className:
                        p.a.dynamic([
                          ["950980637", [h.a.blueGray, h.a.blueGray]],
                        ]) +
                        " " +
                        (d()("checkbox-box", {
                          "checkbox-checked":
                            void 0 !== this.props.forceChecked
                              ? this.props.forceChecked
                              : this.props.checked,
                        }) || ""),
                    }),
                    this.props.children,
                    Object(n.jsx)(p.a, {
                      id: "950980637",
                      dynamic: [h.a.blueGray, h.a.blueGray],
                      children: [
                        ".checkbox-wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}",
                        ".checkbox-box.__jsx-style-dynamic-selector{min-width:16px;width:16px;height:16px;background:#fff;border:solid 2px #eee;margin-right:5px;}",
                        ".checkbox-checked.__jsx-style-dynamic-selector{background-color:"
                          .concat(
                            h.a.blueGray,
                            ";background-image:url(/public/images/check_mark.svg);background-size:90%;background-position:center;background-repeat:no-repeat;border:solid 2px "
                          )
                          .concat(h.a.blueGray, ";}"),
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          r
        );
      })(l.Component);
      (m.defaultProps = { style: {}, onChange: function () {} }), (t.a = m);
    },
  },
]);
