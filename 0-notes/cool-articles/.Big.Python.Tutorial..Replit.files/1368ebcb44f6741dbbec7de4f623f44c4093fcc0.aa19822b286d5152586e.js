(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18],
  {
    "/Cao": function (e, t, n) {
      var r = n("8VYC"),
        o = n("Yvos"),
        i = n("HiSk");
      e.exports = l;
      var a,
        s = /\n/g,
        c = /\\n/g;
      function u() {}
      function l(e) {
        r.call(this, e),
          (this.query = this.query || {}),
          a || (a = i.___eio = i.___eio || []),
          (this.index = a.length);
        var t = this;
        a.push(e => {
          t.onData(e);
        }),
          (this.query.j = this.index),
          "function" === typeof addEventListener &&
            addEventListener(
              "beforeunload",
              () => {
                t.script && (t.script.onerror = u);
              },
              !1
            );
      }
      o(l, r),
        (l.prototype.supportsBinary = !1),
        (l.prototype.doClose = function () {
          this.script &&
            (this.script.parentNode.removeChild(this.script),
            (this.script = null)),
            this.form &&
              (this.form.parentNode.removeChild(this.form),
              (this.form = null),
              (this.iframe = null)),
            r.prototype.doClose.call(this);
        }),
        (l.prototype.doPoll = function () {
          var e = this,
            t = document.createElement("script");
          this.script &&
            (this.script.parentNode.removeChild(this.script),
            (this.script = null)),
            (t.async = !0),
            (t.src = this.uri()),
            (t.onerror = t => {
              e.onError("jsonp poll error", t);
            });
          var n = document.getElementsByTagName("script")[0];
          n
            ? n.parentNode.insertBefore(t, n)
            : (document.head || document.body).appendChild(t),
            (this.script = t),
            "undefined" !== typeof navigator &&
              /gecko/i.test(navigator.userAgent) &&
              setTimeout(() => {
                var e = document.createElement("iframe");
                document.body.appendChild(e), document.body.removeChild(e);
              }, 100);
        }),
        (l.prototype.doWrite = function (e, t) {
          var n = this;
          if (!this.form) {
            var r,
              o = document.createElement("form"),
              i = document.createElement("textarea"),
              a = (this.iframeId = "eio_iframe_" + this.index);
            (o.className = "socketio"),
              (o.style.position = "absolute"),
              (o.style.top = "-1000px"),
              (o.style.left = "-1000px"),
              (o.target = a),
              (o.method = "POST"),
              o.setAttribute("accept-charset", "utf-8"),
              (i.name = "d"),
              o.appendChild(i),
              document.body.appendChild(o),
              (this.form = o),
              (this.area = i);
          }
          function u() {
            l(), t();
          }
          function l() {
            if (n.iframe)
              try {
                n.form.removeChild(n.iframe);
              } catch (t) {
                n.onError("jsonp polling iframe removal error", t);
              }
            try {
              var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
              r = document.createElement(e);
            } catch (t) {
              ((r = document.createElement("iframe")).name = n.iframeId),
                (r.src = "javascript:0");
            }
            (r.id = n.iframeId), n.form.appendChild(r), (n.iframe = r);
          }
          (this.form.action = this.uri()),
            l(),
            (e = e.replace(c, "\\\n")),
            (this.area.value = e.replace(s, "\\n"));
          try {
            this.form.submit();
          } catch (A) {}
          this.iframe.attachEvent
            ? (this.iframe.onreadystatechange = () => {
                "complete" === n.iframe.readyState && u();
              })
            : (this.iframe.onload = u);
        });
    },
    "1dJL": function (e, t, n) {
      "use strict";
      var r =
          (this && this.__awaiter) ||
          ((e, t, n, r) => {
            return new (n || (n = Promise))((o, i) => {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (t) {
                  i(t);
                }
              }
              function s(e) {
                try {
                  c(r.throw(e));
                } catch (t) {
                  i(t);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(e => {
                          e(t);
                        })).then(a, s);
              }
              c((r = r.apply(e, t || [])).next());
            });
          }),
        o =
          (this && this.__generator) ||
          ((e, t) => {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent() {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return s => {
                return (i => {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (s) {
                      (i = [6, s]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          });
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Channel = void 0);
      var i = n("5/z4"),
        a = function (e) {
          var t = this,
            n = e.id,
            a = e.send,
            s = e.onUnrecoverableError;
          (this.onCommand = e => {
            if ("closed" === t.status) {
              var n = new Error(
                "Trying to listen to commands on a closed channel"
              );
              throw (t.onUnrecoverableError(n), n);
            }
            return t.onCommandListeners.push(e),
            () => {
              t.onCommandListeners = t.onCommandListeners.filter(t => {
                return t !== e;
              });
            }
          ;
          }),
            (this.send = e => {
              if ("closed" === t.status) {
                var n = new Error("Calling send on closed channel");
                throw (t.onUnrecoverableError(n), n);
              }
              if ("closing" === t.status)
                throw (
                  ((n = new Error(
                    "Cannot send any more commands after a close request"
                  )),
                  t.onUnrecoverableError(n),
                  n)
                );
              (e.channel = t.id), t.sendToContainer(i.api.Command.create(e));
            }),
            (this.request = e => {
              return r(t, void 0, void 0, function () {
                var t,
                  n = this;
                return o(this, r => {
                  return (t = Number(
                    Math.random().toString().split(".")[1]
                  ).toString(36)),
                  (e.ref = t),
                  [
                    2,
                    new Promise((r, o) => {
                      n.requestMap[t] = r;
                      try {
                        n.send(e);
                      } catch (i) {
                        delete n.requestMap[t], o(i);
                      }
                    }),
                  ]
                ;
                });
              });
            }),
            (this.handleCommand = e => {
              t.onCommandListeners.forEach(t => {
                return t(e);
              }),
                e.ref &&
                  t.requestMap[e.ref] &&
                  (t.requestMap[e.ref](e), delete t.requestMap[e.ref]);
            }),
            (this.handleClose = e => {
              Object.keys(t.requestMap).forEach(n => {
                var r = i.api.Command.fromObject({});
                (r.channelClosed = e),
                  t.requestMap[n](r),
                  delete t.requestMap[n];
              }),
                (t.status = "closed"),
                (t.onCommandListeners = []);
            }),
            (this.id = n),
            (this.sendToContainer = a),
            (this.onUnrecoverableError = s),
            (this.status = "open"),
            (this.requestMap = {}),
            (this.onCommandListeners = []);
        };
      t.Channel = a;
    },
    "1vQi": function (e, t) {
      var n =
          /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        r = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      e.exports = e => {
        var t = e,
          o = e.indexOf("["),
          i = e.indexOf("]");
        -1 != o &&
          -1 != i &&
          (e =
            e.substring(0, o) +
            e.substring(o, i).replace(/:/g, ";") +
            e.substring(i, e.length));
        for (var a = n.exec(e || ""), s = {}, c = 14; c--; )
          s[r[c]] = a[c] || "";
        return -1 != o &&
          -1 != i &&
          ((s.source = t),
          (s.host = s.host
            .substring(1, s.host.length - 1)
            .replace(/;/g, ":")),
          (s.authority = s.authority
            .replace("[", "")
            .replace("]", "")
            .replace(/;/g, ":")),
          (s.ipv6uri = !0)),
        (s.pathNames = ((e, t) => {
          var n = /\/{2,9}/g,
            r = t.replace(n, "/").split("/");
          ("/" != t.substr(0, 1) && 0 !== t.length) || r.splice(0, 1);
          "/" == t.substr(t.length - 1, 1) && r.splice(r.length - 1, 1);
          return r;
        })(0, s.path)),
        (s.queryKey = ((e, t) => {
          var n = {};
          return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (e, t, r) => {
            t && (n[t] = r);
          }),
          n
        ;
        })(0, s.query)),
        s
      ;
      };
    },
    25: function (e, t) {},
    "4A0d": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      var r = n("xvhg"),
        o = n("q1tI"),
        i = n("qzUi"),
        a = n("IUvJ"),
        s = n("koLh");
      function c() {
        var e = o.useState(null),
          t = Object(r.a)(e, 2),
          n = t[0],
          c = t[1],
          u = o.useState(null),
          l = Object(r.a)(u, 2),
          A = l[0],
          h = l[1];
        o.useEffect(
          () => {
            var e = !1;
            return Promise.all([Object(a.a)(), Object(i.a)()]).then(t => {
              var n = Object(r.a)(t, 1)[0];
              e || c(n);
            }),
            () => {
              e = !0;
            }
          ;
          },
          [c]
        );
        var p = o.useState(null),
          f = Object(r.a)(p, 2),
          d = f[0],
          b = f[1],
          y = Object(s.a)(
            e => {
              return h(
                e.width && e.height
                  ? { width: e.width, height: e.height }
                  : null
              );
            },
            { type: "throttle", wait: 100 }
          );
        o.useEffect(
          () => {
            return y(d);
          },
          [d, y]
        );
        var g = o.useState(null),
          v = Object(r.a)(g, 2),
          m = v[0],
          C = v[1];
        return o.useEffect(
          () => {
            m && A && m.fit();
          },
          [A, m]
        ),
        o.useLayoutEffect(
          () => {
            if (d && n) {
              var e = n.xterm,
                t = n.fitAddon,
                r = n.searchAddon,
                o = [];
              return e.open(d),
              o.push(() => {
                return e.dispose();
              }),
              C({
                onKey: e.onKey.bind(e),
                onData: e.onData.bind(e),
                onResize: e.onResize.bind(e),
                write: e.write.bind(e),
                fit() {
                  var e = d.getBoundingClientRect(),
                    n = e.width,
                    r = e.height;
                  n > 0 && r > 0 && t.fit();
                },
                focus() {
                  return e.focus();
                },
                clear() {
                  return e.clear();
                },
                findPrevious(e) {
                  return r.findPrevious(e);
                },
                findNext(e) {
                  return r.findNext(e);
                },
                getSize() {
                  return { cols: e.cols, rows: e.rows };
                },
              }),
              () => {
                o.forEach(e => {
                  return e();
                });
              };
            }
          },
          [d, n]
        ),
        [m, b];
      }
    },
    "5FiH": function (e, t) {
      !(e => {
        "use strict";
        (t.encode = t => {
          var n,
            r = new Uint8Array(t),
            o = r.length,
            i = "";
          for (n = 0; n < o; n += 3)
            (i += e[r[n] >> 2]),
              (i += e[((3 & r[n]) << 4) | (r[n + 1] >> 4)]),
              (i += e[((15 & r[n + 1]) << 2) | (r[n + 2] >> 6)]),
              (i += e[63 & r[n + 2]]);
          return (
            o % 3 === 2
              ? (i = i.substring(0, i.length - 1) + "=")
              : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
          );
        }),
          (t.decode = t => {
            var n,
              r,
              o,
              i,
              a,
              s = 0.75 * t.length,
              c = t.length,
              u = 0;
            "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);
            var l = new ArrayBuffer(s),
              A = new Uint8Array(l);
            for (n = 0; n < c; n += 4)
              (r = e.indexOf(t[n])),
                (o = e.indexOf(t[n + 1])),
                (i = e.indexOf(t[n + 2])),
                (a = e.indexOf(t[n + 3])),
                (A[u++] = (r << 2) | (o >> 4)),
                (A[u++] = ((15 & o) << 4) | (i >> 2)),
                (A[u++] = ((3 & i) << 6) | (63 & a));
            return l;
          });
      })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    },
    "6bXu": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return r;
      }),
        n.d(t, "b", () => {
          return o;
        });
      function r() {
        return window.__ENABLE_ALL_SERVICES;
      }
      function o() {
        window.__ENABLE_ALL_SERVICES = !0;
      }
    },
    "8VYC": function (e, t, n) {
      var r = n("O9h/"),
        o = n("r8CS"),
        i = n("E+TZ"),
        a = n("Yvos"),
        s = n("Aplp"),
        c = n("EuBs")("engine.io-client:polling");
      e.exports = l;
      var u = null != new (n("rx/v"))({ xdomain: !1 }).responseType;
      function l(e) {
        var t = e && e.forceBase64;
        (u && !t) || (this.supportsBinary = !1), r.call(this, e);
      }
      a(l, r),
        (l.prototype.name = "polling"),
        (l.prototype.doOpen = function () {
          this.poll();
        }),
        (l.prototype.pause = function (e) {
          var t = this;
          function n() {
            c("paused"), (t.readyState = "paused"), e();
          }
          if (((this.readyState = "pausing"), this.polling || !this.writable)) {
            var r = 0;
            this.polling &&
              (c("we are currently polling - waiting to pause"),
              r++,
              this.once("pollComplete", () => {
                c("pre-pause polling complete"), --r || n();
              })),
              this.writable ||
                (c("we are currently writing - waiting to pause"),
                r++,
                this.once("drain", () => {
                  c("pre-pause writing complete"), --r || n();
                }));
          } else n();
        }),
        (l.prototype.poll = function () {
          c("polling"), (this.polling = !0), this.doPoll(), this.emit("poll");
        }),
        (l.prototype.onData = function (e) {
          var t = this;
          c("polling got data %s", e);
          i.decodePayload(e, this.socket.binaryType, (e, n, r) => {
            if (
              ("opening" === t.readyState && "open" === e.type && t.onOpen(),
              "close" === e.type)
            )
              return t.onClose(), !1;
            t.onPacket(e);
          }),
            "closed" !== this.readyState &&
              ((this.polling = !1),
              this.emit("pollComplete"),
              "open" === this.readyState
                ? this.poll()
                : c('ignoring poll - transport state "%s"', this.readyState));
        }),
        (l.prototype.doClose = function () {
          var e = this;
          function t() {
            c("writing close packet"), e.write([{ type: "close" }]);
          }
          "open" === this.readyState
            ? (c("transport open - closing"), t())
            : (c("transport not open - deferring close"), this.once("open", t));
        }),
        (l.prototype.write = function (e) {
          var t = this;
          this.writable = !1;
          var n = () => {
            (t.writable = !0), t.emit("drain");
          };
          i.encodePayload(e, this.supportsBinary, e => {
            t.doWrite(e, n);
          });
        }),
        (l.prototype.uri = function () {
          var e = this.query || {},
            t = this.secure ? "https" : "http",
            n = "";
          return (
            !1 !== this.timestampRequests && (e[this.timestampParam] = s()),
            this.supportsBinary || e.sid || (e.b64 = 1),
            (e = o.encode(e)),
            this.port &&
              (("https" === t && 443 !== Number(this.port)) ||
                ("http" === t && 80 !== Number(this.port))) &&
              (n = ":" + this.port),
            e.length && (e = "?" + e),
            t +
              "://" +
              (-1 !== this.hostname.indexOf(":")
                ? "[" + this.hostname + "]"
                : this.hostname) +
              n +
              this.path +
              e
          );
        });
    },
    AJXi(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getConnectionStr =
          t.getWebSocketClass =
          t.getNextRetryDelay =
            void 0);
      var r = n("QmWs");
      function o(e) {
        return (
          ("object" === typeof e || "function" === typeof e) &&
          !!e &&
          "OPEN" in e &&
          1 === e.OPEN
        );
      }
      (t.getNextRetryDelay = e => {
        var t = Math.floor(500 * Math.random()),
          n = 1e3 * Math.pow(1.7, e);
        return Math.min(n, 15e3) + t;
      }),
        (t.getWebSocketClass = e => {
          if (e) {
            if (!o(e))
              throw new Error(
                "Passed in WebSocket does not look like a standard WebSocket"
              );
            return e;
          }
          if ("undefined" !== typeof WebSocket) {
            if (!o(WebSocket))
              throw new Error(
                "Global WebSocket does not look like a standard WebSocket"
              );
            return WebSocket;
          }
          throw new Error(
            "Please pass in a WebSocket class or add it to global"
          );
        }),
        (t.getConnectionStr = (e, t) => {
          var n = r.parse(e.gurl);
          return (
            t
              ? ((n.hostname = "gp-v2.herokuapp.com"),
                (n.host = "gp-v2.herokuapp.com"),
                (n.pathname =
                  "/wsv2/" + e.token + "/" + encodeURIComponent(e.gurl)))
              : (n.pathname = "/wsv2/" + e.token),
            r.format(n)
          );
        });
    },
    BQO9(e, t) {
      e.exports =
        "data:application/font-woff;base64,d09GRgABAAAAAAPUAA4AAAAABaQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAADuAAAABwAAAAchB3b2kdERUYAAAOUAAAAJAAAACYAKQAqT1MvMgAAAawAAAA5AAAAYENBXFNjbWFwAAAB+AAAAD4AAAFCAA/yUmN2dCAAAAI4AAAABAAAAAQAIgKIZ2FzcAAAA4wAAAAIAAAACAAAAAFnbHlmAAACSAAAAHwAAACIpDV7CWhlYWQAAAFEAAAAMQAAADYPsR5/aGhlYQAAAXgAAAAYAAAAJAYBBAVobXR4AAAB6AAAABAAAAAQDAAAomxvY2EAAAI8AAAACgAAAAoAbgBUbWF4cAAAAZAAAAAaAAAAIAAIADxuYW1lAAACxAAAAKgAAAFuIGxtGnBvc3QAAANsAAAAHgAAADKwqUy9eJxjYGQAg75rH9bE89t8ZeBmAfOvm9l/AdPWs54wKDEwMDEwrQJyOYAMIAAARtIKWgAAAHicY2BkYGBhAAEIycTAwMiAClgAAWwAEXicY2BkYGBgYeBhYGYAASYGBNADEQADJABFAAB4nGNgZmFgnMDAysDA1MDMAAQNEJoJiBkZ0ACjABInIM01hcHh3fJ3y1nAfBaoGiQlCgyMAFRaBy8AAAAEAAAiAAAAAAQAAAAEAACAeJxjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEQP675f//Q0jBGKhKBkY2BhiTgZEJSDAxoAJGhmEPAP2eCE8AAAAiAogAAAAqACoAKgBEAAB4nGNgYlBiYGA0YlrFwMzAzqC3kZFB32YTOwvDW6ONbKx3bDYxMwGZDBuZQcKsIOFN7GyMf2w2MYLEjQUVBdWNBZWVGAXenTnDtOpvmBJTGgPQpAYGBiYGJgewmdxA80WNTVmBmBmIGR0O/Gs4cOAAI4iAUAwMDAARHSJHeJyNzU0KgzAUBOCJRqE/dFkK3WTnolT0FL1A6QUki4AkEl30GD1Az9BVD9hRX6HQjcbAl5dhAmCHFxS+XyJW2OAoHmcncYotLmLNTCvO6Ic4p99MKr2S1tkKe2p2wlWIUxxwFmtmruKMvotz+jlWRVh0fNZh4G4Q4NFzbLvWDa4Jnof19P8mzX/WSHhJ4Y2ZyKmbbg1qlKg4trF3wZu6rBb1fACKDTLseJxjYGJABowM6IAFLMrEyMRempfp6upoDgAL4gJjAAAAAQAB//8AAHicY2BkYGDgAWIxBjkGJgZGBmYgZGRgAYowATEjBAMACK0AVAAAAAEAAAAA1awBAQAAAADXNj/0AAAAANc7muQ=";
    },
    "E+TZ": function (e, t, n) {
      var r,
        o = n("WDr1"),
        i = n("WLGk"),
        a = n("ypnn"),
        s = n("zMFY"),
        c = n("X6w4");
      "undefined" !== typeof ArrayBuffer && (r = n("5FiH"));
      var u =
          "undefined" !== typeof navigator &&
          /Android/i.test(navigator.userAgent),
        l =
          "undefined" !== typeof navigator &&
          /PhantomJS/i.test(navigator.userAgent),
        A = u || l;
      t.protocol = 3;
      var h = (t.packets = {
          open: 0,
          close: 1,
          ping: 2,
          pong: 3,
          message: 4,
          upgrade: 5,
          noop: 6,
        }),
        p = o(h),
        f = { type: "error", data: "parser error" },
        d = n("Qz/J");
      function b(e, t, n) {
        for (
          var r = new Array(e.length),
            o = s(e.length, n),
            i = (e, n, o) => {
              t(n, (t, n) => {
                (r[e] = n), o(t, r);
              });
            },
            a = 0;
          a < e.length;
          a++
        )
          i(a, e[a], o);
      }
      (t.encodePacket = (e, n, r, o) => {
        "function" === typeof n && ((o = n), (n = !1)),
          "function" === typeof r && ((o = r), (r = null));
        var i = void 0 === e.data ? void 0 : e.data.buffer || e.data;
        if ("undefined" !== typeof ArrayBuffer && i instanceof ArrayBuffer)
          return ((e, n, r) => {
            if (!n) return t.encodeBase64Packet(e, r);
            var o = e.data,
              i = new Uint8Array(o),
              a = new Uint8Array(1 + o.byteLength);
            a[0] = h[e.type];
            for (var s = 0; s < i.length; s++) a[s + 1] = i[s];
            return r(a.buffer);
          })(e, n, o);
        if ("undefined" !== typeof d && i instanceof d)
          return ((e, n, r) => {
            if (!n) return t.encodeBase64Packet(e, r);
            if (A)
              return ((e, n, r) => {
                if (!n) return t.encodeBase64Packet(e, r);
                var o = new FileReader();
                return (o.onload = () => {
                  t.encodePacket({ type: e.type, data: o.result }, n, !0, r);
                }),
                o.readAsArrayBuffer(e.data)
              ;
              })(e, n, r);
            var o = new Uint8Array(1);
            o[0] = h[e.type];
            var i = new d([o.buffer, e.data]);
            return r(i);
          })(e, n, o);
        if (i && i.base64)
          return ((e, n) => {
            var r = "b" + t.packets[e.type] + e.data.data;
            return n(r);
          })(e, o);
        var a = h[e.type];
        return (
          void 0 !== e.data &&
            (a += r
              ? c.encode(String(e.data), { strict: !1 })
              : String(e.data)),
          o("" + a)
        );
      }),
        (t.encodeBase64Packet = (e, n) => {
          var r,
            o = "b" + t.packets[e.type];
          if ("undefined" !== typeof d && e.data instanceof d) {
            var i = new FileReader();
            return (i.onload = () => {
              var e = i.result.split(",")[1];
              n(o + e);
            }),
            i.readAsDataURL(e.data)
          ;
          }
          try {
            r = String.fromCharCode.apply(null, new Uint8Array(e.data));
          } catch (u) {
            for (
              var a = new Uint8Array(e.data), s = new Array(a.length), c = 0;
              c < a.length;
              c++
            )
              s[c] = a[c];
            r = String.fromCharCode.apply(null, s);
          }
          return (o += btoa(r)), n(o);
        }),
        (t.decodePacket = (e, n, r) => {
          if (void 0 === e) return f;
          if ("string" === typeof e) {
            if ("b" === e.charAt(0))
              return t.decodeBase64Packet(e.substr(1), n);
            if (
              r &&
              !1 ===
                (e = (e => {
                  try {
                    e = c.decode(e, { strict: !1 });
                  } catch (t) {
                    return !1;
                  }
                  return e;
                })(e))
            )
              return f;
            var o = e.charAt(0);
            return Number(o) == o && p[o]
              ? e.length > 1
                ? { type: p[o], data: e.substring(1) }
                : { type: p[o] }
              : f;
          }
          o = new Uint8Array(e)[0];
          var i = a(e, 1);
          return d && "blob" === n && (i = new d([i])), { type: p[o], data: i };
        }),
        (t.decodeBase64Packet = (e, t) => {
          var n = p[e.charAt(0)];
          if (!r) return { type: n, data: { base64: !0, data: e.substr(1) } };
          var o = r.decode(e.substr(1));
          return "blob" === t && d && (o = new d([o])), { type: n, data: o };
        }),
        (t.encodePayload = (e, n, r) => {
          "function" === typeof n && ((r = n), (n = null));
          var o = i(e);
          if (n && o)
            return d && !A
              ? t.encodePayloadAsBlob(e, r)
              : t.encodePayloadAsArrayBuffer(e, r);
          if (!e.length) return r("0:");
          b(
            e,
            (e, r) => {
              t.encodePacket(e, !!o && n, !1, e => {
                r(null, (e => {
                  return e.length + ":" + e;
                })(e));
              });
            },
            (e, t) => {
              return r(t.join(""));
            }
          );
        }),
        (t.decodePayload = (e, n, r) => {
          if ("string" !== typeof e) return t.decodePayloadAsBinary(e, n, r);
          var o;
          if (("function" === typeof n && ((r = n), (n = null)), "" === e))
            return r(f, 0, 1);
          for (var i, a, s = "", c = 0, u = e.length; c < u; c++) {
            var l = e.charAt(c);
            if (":" === l) {
              if ("" === s || s != (i = Number(s))) return r(f, 0, 1);
              if (s != (a = e.substr(c + 1, i)).length) return r(f, 0, 1);
              if (a.length) {
                if (
                  ((o = t.decodePacket(a, n, !1)),
                  f.type === o.type && f.data === o.data)
                )
                  return r(f, 0, 1);
                if (!1 === r(o, c + i, u)) return;
              }
              (c += i), (s = "");
            } else s += l;
          }
          return "" !== s ? r(f, 0, 1) : void 0;
        }),
        (t.encodePayloadAsArrayBuffer = (e, n) => {
          if (!e.length) return n(new ArrayBuffer(0));
          b(
            e,
            (e, n) => {
              t.encodePacket(e, !0, !0, e => {
                return n(null, e);
              });
            },
            (e, t) => {
              var r = t.reduce((e, t) => {
                  var n;
                  return (
                    e +
                    (n =
                      "string" === typeof t
                        ? t.length
                        : t.byteLength).toString().length +
                    n +
                    2
                  );
                }, 0),
                o = new Uint8Array(r),
                i = 0;
              return t.forEach(e => {
                var t = "string" === typeof e,
                  n = e;
                if (t) {
                  for (
                    var r = new Uint8Array(e.length), a = 0;
                    a < e.length;
                    a++
                  )
                    r[a] = e.charCodeAt(a);
                  n = r.buffer;
                }
                o[i++] = t ? 0 : 1;
                var s = n.byteLength.toString();
                for (a = 0; a < s.length; a++) o[i++] = parseInt(s[a]);
                o[i++] = 255;
                for (r = new Uint8Array(n), a = 0; a < r.length; a++)
                  o[i++] = r[a];
              }),
              n(o.buffer)
            ;
            }
          );
        }),
        (t.encodePayloadAsBlob = (e, n) => {
          b(
            e,
            (e, n) => {
              t.encodePacket(e, !0, !0, e => {
                var t = new Uint8Array(1);
                if (((t[0] = 1), "string" === typeof e)) {
                  for (
                    var r = new Uint8Array(e.length), o = 0;
                    o < e.length;
                    o++
                  )
                    r[o] = e.charCodeAt(o);
                  (e = r.buffer), (t[0] = 0);
                }
                var i = (
                    e instanceof ArrayBuffer ? e.byteLength : e.size
                  ).toString(),
                  a = new Uint8Array(i.length + 1);
                for (o = 0; o < i.length; o++) a[o] = parseInt(i[o]);
                if (((a[i.length] = 255), d)) {
                  var s = new d([t.buffer, a.buffer, e]);
                  n(null, s);
                }
              });
            },
            (e, t) => {
              return n(new d(t));
            }
          );
        }),
        (t.decodePayloadAsBinary = (e, n, r) => {
          "function" === typeof n && ((r = n), (n = null));
          for (var o = e, i = []; o.byteLength > 0; ) {
            for (
              var s = new Uint8Array(o), c = 0 === s[0], u = "", l = 1;
              255 !== s[l];
              l++
            ) {
              if (u.length > 310) return r(f, 0, 1);
              u += s[l];
            }
            (o = a(o, 2 + u.length)), (u = parseInt(u));
            var A = a(o, 0, u);
            if (c)
              try {
                A = String.fromCharCode.apply(null, new Uint8Array(A));
              } catch (d) {
                var h = new Uint8Array(A);
                A = "";
                for (l = 0; l < h.length; l++) A += String.fromCharCode(h[l]);
              }
            i.push(A), (o = a(o, u));
          }
          var p = i.length;
          i.forEach((e, o) => {
            r(t.decodePacket(e, n, !0), o, p);
          });
        });
    },
    Emkz(e, t, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EIOCompat = t.splitHref = void 0);
      var o = n("GVdP"),
        i = n("QmWs");
      function a(e) {
        var t = i.parse(e),
          n = t.protocol,
          r = t.slashes,
          o = t.auth,
          a = t.host,
          s = t.pathname;
        return {
          uri: i.format({
            protocol: n,
            slashes: r,
            auth: o,
            host: a,
            query: { ordered: "1" },
          }),
          path: null != s ? s : "/",
        };
      }
      t.splitHref = a;
      var s = new Map([
        ["opening", 0],
        ["open", 1],
        ["closing", 2],
        ["closed", 3],
      ]);
      function c(e) {
        return "undefined" !== typeof window
          ? new MessageEvent("message", { data: e })
          : { type: "message", data: e };
      }
      function u(e, t) {
        return "undefined" !== typeof window
          ? new Event(e, t)
          : r({ type: e }, t);
      }
      var l = (() => {
        function e(e, t) {
          var n = this;
          if (
            ((this.CLOSED = 3),
            (this.CLOSING = 2),
            (this.OPEN = 1),
            (this.CONNECTING = 0),
            t)
          )
            throw new Error("Passing protocols is not implemented");
          var i = a(e),
            s = i.uri,
            l = i.path;
          (this.onopen = null),
            (this.onclose = null),
            (this.onmessage = null),
            (this.onerror = null),
            (this.eioSocket = o(s, { path: l, transports: ["polling"] })),
            (this.url = e),
            (this.extensions = ""),
            (this.protocol = ""),
            (this.bufferedAmount = 0),
            (this.readyState = 0),
            (this.incomingSequence = 0),
            (this.outOfOrderQueue = {}),
            (this.outgoingSequence = 0),
            this.setReadyState(),
            this.eioSocket.on("open", () => {
              if ((n.setReadyState(), null != n.onopen)) {
                var e = u("open");
                n.onopen.call(n, e);
              }
            }),
            this.eioSocket.on("close", e => {
              if ((n.setReadyState(), null != n.onclose)) {
                var t =
                  ((o = { reason: e, code: 1001, wasClean: !1 }),
                  "undefined" !== typeof window
                    ? new CloseEvent("close", o)
                    : r({ type: "close" }, o));
                n.onclose.call(n, t);
              }
              var o;
            }),
            this.eioSocket.on("message", e => {
              if ((n.setReadyState(), null != n.onmessage)) {
                if ("string" === typeof e)
                  throw new Error("expected data to be ArrayBuffer not string");
                var t = new DataView(e).getUint32(0),
                  r = e.slice(4);
                if (n.incomingSequence === t) {
                  n.incomingSequence = t + 1;
                  var o = c(r),
                    i = n.onmessage.bind(n);
                  i(o);
                  var a = Object.keys(n.outOfOrderQueue);
                  a.length > 0 &&
                    (a.sort().forEach(e => {
                      i(c(n.outOfOrderQueue[+e])),
                        (n.incomingSequence = +e + 1);
                    }),
                    (n.outOfOrderQueue = {}));
                } else n.outOfOrderQueue[t] = r;
              }
            }),
            this.eioSocket.on("error", () => {
              if ((n.setReadyState(), null != n.onerror)) {
                var e = u("error");
                n.onerror.call(n, e);
              }
            });
        }
        return (e.prototype.setReadyState = function () {
          this.readyState = s.get(this.eioSocket.readyState);
        }),
        (e.prototype.send = function (e) {
          var t = new ArrayBuffer(4 + e.byteLength);
          new Uint8Array(t).set(new Uint8Array(e), 4),
            new DataView(t).setUint32(0, this.outgoingSequence),
            (this.outgoingSequence += 1),
            this.eioSocket.send(t),
            this.setReadyState();
        }),
        (e.prototype.close = function () {
          (this.onmessage = null),
            this.eioSocket.close(),
            this.setReadyState();
        }),
        (e.prototype.addEventListener = () => {
          throw new Error(
            "Not Implemented, please use onmessage, onopen, onerror, or onclose"
          );
        }),
        (e.prototype.removeEventListener = () => {
          throw new Error("Not Implemented");
        }),
        (e.prototype.dispatchEvent = () => {
          throw new Error("Not Implemented");
        }),
        Object.defineProperty(e.prototype, "binaryType", {
          get() {
            return this.eioSocket.binaryType || "blob";
          },
          set(e) {
            this.eioSocket.binaryType = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.CLOSED = 3),
        (e.CLOSING = 2),
        (e.OPEN = 1),
        (e.CONNECTING = 0),
        e;
      })();
      t.EIOCompat = l;
    },
    EuBs(e, t, n) {
      ((r => {
        function o() {
          var e;
          try {
            e = t.storage.debug;
          } catch (n) {}
          return (
            !e && "undefined" !== typeof r && "env" in r && (e = r.env.DEBUG), e
          );
        }
        ((t = e.exports = n("m+yM")).log = function () {
          return (
            "object" === typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }),
          (t.formatArgs = function (e) {
            var n = this.useColors;
            if (
              ((e[0] =
                (n ? "%c" : "") +
                this.namespace +
                (n ? " %c" : " ") +
                e[0] +
                (n ? "%c " : " ") +
                "+" +
                t.humanize(this.diff)),
              !n)
            )
              return;
            var r = "color: " + this.color;
            e.splice(1, 0, r, "color: inherit");
            var o = 0,
              i = 0;
            e[0].replace(/%[a-zA-Z%]/g, e => {
              "%%" !== e && (o++, "%c" === e && (i = o));
            }),
              e.splice(i, 0, r);
          }),
          (t.save = e => {
            try {
              null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
            } catch (n) {}
          }),
          (t.load = o),
          (t.useColors = () => {
            if (
              "undefined" !== typeof window &&
              window.process &&
              "renderer" === window.process.type
            )
              return !0;
            if (
              "undefined" !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            )
              return !1;
            return (
              ("undefined" !== typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" !== typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              ("undefined" !== typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              ("undefined" !== typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (t.storage =
            "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : (() => {
                  try {
                    return window.localStorage;
                  } catch (e) {}
                })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.formatters.j = e => {
            try {
              return JSON.stringify(e);
            } catch (t) {
              return "[UnexpectedJSONParseError]: " + t.message;
            }
          }),
          t.enable(o());
      }).call(this, n("8oxB")));
    },
    "Fz/E": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return o;
      });
      var r = n("+qE3");
      function o() {
        return new r.EventEmitter();
      }
    },
    GVdP(e, t, n) {
      (e.exports = n("Gknm")), (e.exports.parser = n("E+TZ"));
    },
    Gknm(e, t, n) {
      var r = n("KPuF"),
        o = n("gnSh"),
        i = n("EuBs")("engine.io-client:socket"),
        a = n("7jRU"),
        s = n("E+TZ"),
        c = n("1vQi"),
        u = n("r8CS");
      function l(e, t) {
        if (!(this instanceof l)) return new l(e, t);
        (t = t || {}),
          e && "object" === typeof e && ((t = e), (e = null)),
          e
            ? ((e = c(e)),
              (t.hostname = e.host),
              (t.secure = "https" === e.protocol || "wss" === e.protocol),
              (t.port = e.port),
              e.query && (t.query = e.query))
            : t.host && (t.hostname = c(t.host).host),
          (this.secure =
            null != t.secure
              ? t.secure
              : "undefined" !== typeof location &&
                "https:" === location.protocol),
          t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
          (this.agent = t.agent || !1),
          (this.hostname =
            t.hostname ||
            ("undefined" !== typeof location
              ? location.hostname
              : "localhost")),
          (this.port =
            t.port ||
            ("undefined" !== typeof location && location.port
              ? location.port
              : this.secure
              ? 443
              : 80)),
          (this.query = t.query || {}),
          "string" === typeof this.query && (this.query = u.decode(this.query)),
          (this.upgrade = !1 !== t.upgrade),
          (this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/"),
          (this.forceJSONP = !!t.forceJSONP),
          (this.jsonp = !1 !== t.jsonp),
          (this.forceBase64 = !!t.forceBase64),
          (this.enablesXDR = !!t.enablesXDR),
          (this.withCredentials = !1 !== t.withCredentials),
          (this.timestampParam = t.timestampParam || "t"),
          (this.timestampRequests = t.timestampRequests),
          (this.transports = t.transports || ["polling", "websocket"]),
          (this.transportOptions = t.transportOptions || {}),
          (this.readyState = ""),
          (this.writeBuffer = []),
          (this.prevBufferLen = 0),
          (this.policyPort = t.policyPort || 843),
          (this.rememberUpgrade = t.rememberUpgrade || !1),
          (this.binaryType = null),
          (this.onlyBinaryUpgrades = t.onlyBinaryUpgrades),
          (this.perMessageDeflate =
            !1 !== t.perMessageDeflate && (t.perMessageDeflate || {})),
          !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
          this.perMessageDeflate &&
            null == this.perMessageDeflate.threshold &&
            (this.perMessageDeflate.threshold = 1024),
          (this.pfx = t.pfx || null),
          (this.key = t.key || null),
          (this.passphrase = t.passphrase || null),
          (this.cert = t.cert || null),
          (this.ca = t.ca || null),
          (this.ciphers = t.ciphers || null),
          (this.rejectUnauthorized =
            void 0 === t.rejectUnauthorized || t.rejectUnauthorized),
          (this.forceNode = !!t.forceNode),
          (this.isReactNative =
            "undefined" !== typeof navigator &&
            "string" === typeof navigator.product &&
            "reactnative" === navigator.product.toLowerCase()),
          ("undefined" === typeof self || this.isReactNative) &&
            (t.extraHeaders &&
              Object.keys(t.extraHeaders).length > 0 &&
              (this.extraHeaders = t.extraHeaders),
            t.localAddress && (this.localAddress = t.localAddress)),
          (this.id = null),
          (this.upgrades = null),
          (this.pingInterval = null),
          (this.pingTimeout = null),
          (this.pingIntervalTimer = null),
          (this.pingTimeoutTimer = null),
          this.open();
      }
      (e.exports = l),
        (l.priorWebsocketSuccess = !1),
        o(l.prototype),
        (l.protocol = s.protocol),
        (l.Socket = l),
        (l.Transport = n("O9h/")),
        (l.transports = n("KPuF")),
        (l.parser = n("E+TZ")),
        (l.prototype.createTransport = function (e) {
          i('creating transport "%s"', e);
          var t = (e => {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t;
          })(this.query);
          (t.EIO = s.protocol), (t.transport = e);
          var n = this.transportOptions[e] || {};
          return (
            this.id && (t.sid = this.id),
            new r[e]({
              query: t,
              socket: this,
              agent: n.agent || this.agent,
              hostname: n.hostname || this.hostname,
              port: n.port || this.port,
              secure: n.secure || this.secure,
              path: n.path || this.path,
              forceJSONP: n.forceJSONP || this.forceJSONP,
              jsonp: n.jsonp || this.jsonp,
              forceBase64: n.forceBase64 || this.forceBase64,
              enablesXDR: n.enablesXDR || this.enablesXDR,
              withCredentials: n.withCredentials || this.withCredentials,
              timestampRequests: n.timestampRequests || this.timestampRequests,
              timestampParam: n.timestampParam || this.timestampParam,
              policyPort: n.policyPort || this.policyPort,
              pfx: n.pfx || this.pfx,
              key: n.key || this.key,
              passphrase: n.passphrase || this.passphrase,
              cert: n.cert || this.cert,
              ca: n.ca || this.ca,
              ciphers: n.ciphers || this.ciphers,
              rejectUnauthorized:
                n.rejectUnauthorized || this.rejectUnauthorized,
              perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
              extraHeaders: n.extraHeaders || this.extraHeaders,
              forceNode: n.forceNode || this.forceNode,
              localAddress: n.localAddress || this.localAddress,
              requestTimeout: n.requestTimeout || this.requestTimeout,
              protocols: n.protocols || void 0,
              isReactNative: this.isReactNative,
            })
          );
        }),
        (l.prototype.open = function () {
          var e;
          if (
            this.rememberUpgrade &&
            l.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
          )
            e = "websocket";
          else {
            if (0 === this.transports.length) {
              var t = this;
              return void setTimeout(() => {
                t.emit("error", "No transports available");
              }, 0);
            }
            e = this.transports[0];
          }
          this.readyState = "opening";
          try {
            e = this.createTransport(e);
          } catch (n) {
            return this.transports.shift(), void this.open();
          }
          e.open(), this.setTransport(e);
        }),
        (l.prototype.setTransport = function (e) {
          i("setting transport %s", e.name);
          var t = this;
          this.transport &&
            (i("clearing existing transport %s", this.transport.name),
            this.transport.removeAllListeners()),
            (this.transport = e),
            e
              .on("drain", () => {
                t.onDrain();
              })
              .on("packet", e => {
                t.onPacket(e);
              })
              .on("error", e => {
                t.onError(e);
              })
              .on("close", () => {
                t.onClose("transport close");
              });
        }),
        (l.prototype.probe = function (e) {
          i('probing transport "%s"', e);
          var t = this.createTransport(e, { probe: 1 }),
            n = !1,
            r = this;
          function o() {
            if (r.onlyBinaryUpgrades) {
              var o = !this.supportsBinary && r.transport.supportsBinary;
              n = n || o;
            }
            n ||
              (i('probe transport "%s" opened', e),
              t.send([{ type: "ping", data: "probe" }]),
              t.once("packet", o => {
                if (!n)
                  if ("pong" === o.type && "probe" === o.data) {
                    if (
                      (i('probe transport "%s" pong', e),
                      (r.upgrading = !0),
                      r.emit("upgrading", t),
                      !t)
                    )
                      return;
                    (l.priorWebsocketSuccess = "websocket" === t.name),
                      i('pausing current transport "%s"', r.transport.name),
                      r.transport.pause(() => {
                        n ||
                          ("closed" !== r.readyState &&
                            (i("changing transport and sending upgrade packet"),
                            h(),
                            r.setTransport(t),
                            t.send([{ type: "upgrade" }]),
                            r.emit("upgrade", t),
                            (t = null),
                            (r.upgrading = !1),
                            r.flush()));
                      });
                  } else {
                    i('probe transport "%s" failed', e);
                    var a = new Error("probe error");
                    (a.transport = t.name), r.emit("upgradeError", a);
                  }
              }));
          }
          function a() {
            n || ((n = !0), h(), t.close(), (t = null));
          }
          function s(n) {
            var o = new Error("probe error: " + n);
            (o.transport = t.name),
              a(),
              i('probe transport "%s" failed because of error: %s', e, n),
              r.emit("upgradeError", o);
          }
          function c() {
            s("transport closed");
          }
          function u() {
            s("socket closed");
          }
          function A(e) {
            t &&
              e.name !== t.name &&
              (i('"%s" works - aborting "%s"', e.name, t.name), a());
          }
          function h() {
            t.removeListener("open", o),
              t.removeListener("error", s),
              t.removeListener("close", c),
              r.removeListener("close", u),
              r.removeListener("upgrading", A);
          }
          (l.priorWebsocketSuccess = !1),
            t.once("open", o),
            t.once("error", s),
            t.once("close", c),
            this.once("close", u),
            this.once("upgrading", A),
            t.open();
        }),
        (l.prototype.onOpen = function () {
          if (
            (i("socket open"),
            (this.readyState = "open"),
            (l.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emit("open"),
            this.flush(),
            "open" === this.readyState && this.upgrade && this.transport.pause)
          ) {
            i("starting upgrade probes");
            for (var e = 0, t = this.upgrades.length; e < t; e++)
              this.probe(this.upgrades[e]);
          }
        }),
        (l.prototype.onPacket = function (e) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (i('socket receive: type "%s", data "%s"', e.type, e.data),
              this.emit("packet", e),
              this.emit("heartbeat"),
              e.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
              case "pong":
                this.setPing(), this.emit("pong");
                break;
              case "error":
                var t = new Error("server error");
                (t.code = e.data), this.onError(t);
                break;
              case "message":
                this.emit("data", e.data), this.emit("message", e.data);
            }
          else
            i('packet received with socket readyState "%s"', this.readyState);
        }),
        (l.prototype.onHandshake = function (e) {
          this.emit("handshake", e),
            (this.id = e.sid),
            (this.transport.query.sid = e.sid),
            (this.upgrades = this.filterUpgrades(e.upgrades)),
            (this.pingInterval = e.pingInterval),
            (this.pingTimeout = e.pingTimeout),
            this.onOpen(),
            "closed" !== this.readyState &&
              (this.setPing(),
              this.removeListener("heartbeat", this.onHeartbeat),
              this.on("heartbeat", this.onHeartbeat));
        }),
        (l.prototype.onHeartbeat = function (e) {
          clearTimeout(this.pingTimeoutTimer);
          var t = this;
          t.pingTimeoutTimer = setTimeout(() => {
            "closed" !== t.readyState && t.onClose("ping timeout");
          }, e || t.pingInterval + t.pingTimeout);
        }),
        (l.prototype.setPing = function () {
          var e = this;
          clearTimeout(e.pingIntervalTimer),
            (e.pingIntervalTimer = setTimeout(() => {
              i(
                "writing ping packet - expecting pong within %sms",
                e.pingTimeout
              ),
                e.ping(),
                e.onHeartbeat(e.pingTimeout);
            }, e.pingInterval));
        }),
        (l.prototype.ping = function () {
          var e = this;
          this.sendPacket("ping", () => {
            e.emit("ping");
          });
        }),
        (l.prototype.onDrain = function () {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
        }),
        (l.prototype.flush = function () {
          "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length &&
            (i("flushing %d packets in socket", this.writeBuffer.length),
            this.transport.send(this.writeBuffer),
            (this.prevBufferLen = this.writeBuffer.length),
            this.emit("flush"));
        }),
        (l.prototype.write = l.prototype.send =
          function (e, t, n) {
            return this.sendPacket("message", e, t, n), this;
          }),
        (l.prototype.sendPacket = function (e, t, n, r) {
          if (
            ("function" === typeof t && ((r = t), (t = void 0)),
            "function" === typeof n && ((r = n), (n = null)),
            "closing" !== this.readyState && "closed" !== this.readyState)
          ) {
            (n = n || {}).compress = !1 !== n.compress;
            var o = { type: e, data: t, options: n };
            this.emit("packetCreate", o),
              this.writeBuffer.push(o),
              r && this.once("flush", r),
              this.flush();
          }
        }),
        (l.prototype.close = function () {
          if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            var e = this;
            this.writeBuffer.length
              ? this.once("drain", function () {
                  this.upgrading ? r() : t();
                })
              : this.upgrading
              ? r()
              : t();
          }
          function t() {
            e.onClose("forced close"),
              i("socket closing - telling transport to close"),
              e.transport.close();
          }
          function n() {
            e.removeListener("upgrade", n),
              e.removeListener("upgradeError", n),
              t();
          }
          function r() {
            e.once("upgrade", n), e.once("upgradeError", n);
          }
          return this;
        }),
        (l.prototype.onError = function (e) {
          i("socket error %j", e),
            (l.priorWebsocketSuccess = !1),
            this.emit("error", e),
            this.onClose("transport error", e);
        }),
        (l.prototype.onClose = function (e, t) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          ) {
            i('socket close with reason: "%s"', e);
            clearTimeout(this.pingIntervalTimer),
              clearTimeout(this.pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              (this.readyState = "closed"),
              (this.id = null),
              this.emit("close", e, t),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0);
          }
        }),
        (l.prototype.filterUpgrades = function (e) {
          for (var t = [], n = 0, r = e.length; n < r; n++)
            ~a(this.transports, e[n]) && t.push(e[n]);
          return t;
        });
    },
    HADy(e, t, n) {
      "use strict";
      var r, o;
      n.d(t, "a", () => {
        return r;
      }), n.d(t, "b", () => {
        return o;
      }), (e => {
        (e.STATE_CHANGE = "STATE_CHANGE"), (e.OUTPUT = "OUTPUT");
      })(r || (r = {})), (e => {
        (e.OFFLINE = "OFFLINE"),
          (e.IDLE = "IDLE"),
          (e.RUNNING = "RUNNING"),
          (e.STOPPING = "STOPPING");
      })(o || (o = {}));
    },
    HiSk(e, t) {
      e.exports =
        "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : Function("return this")();
    },
    IUvJ(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      var r = n("vJKn"),
        o = n.n(r),
        i = n("xvhg"),
        a = n("rg98"),
        s = {
          cursorBlink: !1,
          scrollback: 1e3,
          tabStopWidth: 4,
          fontFamily:
            'Monaco, "Ubuntu Mono", "Courier New", Courier, replit-icons, monospace',
          fontSize: 14,
          lineHeight: 1,
          bellStyle: "sound",
          drawBoldTextInBrightColors: !1,
          theme: {
            background: n("n5mk").a.color.brand.darkBlue,
            red: "#FF0066",
            green: "#66FF00",
            yellow: "#FF6600",
            brightYellow: "#FFCC00",
          },
        };
      function c() {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = Object(a.a)(
          o.a.mark(function e() {
            var t, r, a, c, u, l, A, h, p, f;
            return o.a.wrap(e => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2),
                    Promise.all([
                      n
                        .e(336)
                        .then(n.t.bind(null, "/POA", 7))
                        .then(e => {
                          return e;
                        }),
                      n
                        .e(333)
                        .then(n.t.bind(null, "R9As", 7))
                        .then(e => {
                          return e;
                        }),
                      n
                        .e(334)
                        .then(n.t.bind(null, "0fl0", 7))
                        .then(e => {
                          return e;
                        }),
                      n
                        .e(335)
                        .then(n.t.bind(null, "QIth", 7))
                        .then(e => {
                          return e;
                        }),
                    ])
                  ;
                  case 2:
                    return (
                      (t = e.sent),
                      (r = Object(i.a)(t, 4)),
                      (a = r[0].Terminal),
                      (c = r[1].FitAddon),
                      (u = r[2].SearchAddon),
                      (l = r[3].WebLinksAddon),
                      (A = new a(s)),
                      (h = new c()),
                      A.loadAddon(h),
                      (p = new l()),
                      A.loadAddon(p),
                      (f = new u()),
                      A.loadAddon(f),
                      e.abrupt("return", {
                        xterm: A,
                        fitAddon: h,
                        searchAddon: f,
                      })
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    KPuF(e, t, n) {
      var r = n("rx/v"),
        o = n("cK9Y"),
        i = n("/Cao"),
        a = n("u0Ev");
      (t.polling = e => {
        var t = !1,
          n = !1,
          a = !1 !== e.jsonp;
        if ("undefined" !== typeof location) {
          var s = "https:" === location.protocol,
            c = location.port;
          c || (c = s ? 443 : 80),
            (t = e.hostname !== location.hostname || c !== e.port),
            (n = e.secure !== s);
        }
        if (
          ((e.xdomain = t),
          (e.xscheme = n),
          "open" in new r(e) && !e.forceJSONP)
        )
          return new o(e);
        if (!a) throw new Error("JSONP disabled");
        return new i(e);
      }),
        (t.websocket = a);
    },
    "O9h/": function (e, t, n) {
      var r = n("E+TZ"),
        o = n("gnSh");
      function i(e) {
        (this.path = e.path),
          (this.hostname = e.hostname),
          (this.port = e.port),
          (this.secure = e.secure),
          (this.query = e.query),
          (this.timestampParam = e.timestampParam),
          (this.timestampRequests = e.timestampRequests),
          (this.readyState = ""),
          (this.agent = e.agent || !1),
          (this.socket = e.socket),
          (this.enablesXDR = e.enablesXDR),
          (this.withCredentials = e.withCredentials),
          (this.pfx = e.pfx),
          (this.key = e.key),
          (this.passphrase = e.passphrase),
          (this.cert = e.cert),
          (this.ca = e.ca),
          (this.ciphers = e.ciphers),
          (this.rejectUnauthorized = e.rejectUnauthorized),
          (this.forceNode = e.forceNode),
          (this.isReactNative = e.isReactNative),
          (this.extraHeaders = e.extraHeaders),
          (this.localAddress = e.localAddress);
      }
      (e.exports = i),
        o(i.prototype),
        (i.prototype.onError = function (e, t) {
          var n = new Error(e);
          return (
            (n.type = "TransportError"),
            (n.description = t),
            this.emit("error", n),
            this
          );
        }),
        (i.prototype.open = function () {
          return (
            ("closed" !== this.readyState && "" !== this.readyState) ||
              ((this.readyState = "opening"), this.doOpen()),
            this
          );
        }),
        (i.prototype.close = function () {
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          );
        }),
        (i.prototype.send = function (e) {
          if ("open" !== this.readyState) throw new Error("Transport not open");
          this.write(e);
        }),
        (i.prototype.onOpen = function () {
          (this.readyState = "open"), (this.writable = !0), this.emit("open");
        }),
        (i.prototype.onData = function (e) {
          var t = r.decodePacket(e, this.socket.binaryType);
          this.onPacket(t);
        }),
        (i.prototype.onPacket = function (e) {
          this.emit("packet", e);
        }),
        (i.prototype.onClose = function () {
          (this.readyState = "closed"), this.emit("close");
        });
    },
    P2Oe(e, t, n) {
      "use strict";
      (((e, r) => {
        n.d(t, "d", () => {
          return h;
        }),
          n.d(t, "c", () => {
            return p;
          }),
          n.d(t, "a", () => {
            return f;
          }),
          n.d(t, "b", () => {
            return d;
          }),
          n.d(t, "e", () => {
            return b;
          });
        var o = n("vJKn"),
          i = n.n(o),
          a = n("rg98"),
          s = n("0gYX"),
          c = n.n(s),
          u = n("dI/k"),
          l = n("5/z4"),
          A = e.env.VNC_PROXY_SUFFIX || "repl.co";
        function h(e) {
          var t = e.split(".");
          if (4 !== t.length)
            throw new Error("Invalid token: should have exactly 4 parts: " + e);
          for (
            var n = t[2].replace(/-/g, "+").replace(/_/g, "/");
            n.length % 4;

          )
            n += "=";
          var o = window.atob(n);
          if (o.length < 64)
            throw new Error(
              "Invalid token: signed part is too short: " + o.length
            );
          var i = o.substring(0, o.length - 64);
          try {
            return l.api.ReplToken.decode(new r(i, "base64"));
          } catch (a) {
            return JSON.parse(window.atob(i));
          }
        }
        function p(e) {
          var t = h(e).repl,
            n = t.user,
            r = t.slug,
            o = t.id,
            i = "".concat(r, "--").concat(n);
          return (
            i.length > 63 && (i = "".concat(o, ".id")),
            -1 !== A.indexOf("lvh.me:8080")
              ? "ws://".concat(i, ".").concat(A)
              : "wss://".concat(i, ".").concat(A)
          );
        }
        function f(e) {
          var t = e.language,
            n = e.files;
          return n.includes(".replit")
            ? { name: "shellrunner", service: "shellrun" }
            : c.a.usesInterpreter(t)
            ? { name: "interper", service: "interp2" }
            : ((e, t) => {
                return !0 === c.a.usesRunProject(e) &&
                (!1 === c.a.usesEval(e) ||
                  t.filter(t => {
                    return Object(u.b)(t) === c.a.get(e).ext;
                  }).length > 1);
              })(t, n) ? { name: "shellrunner", service: "shellrun" } : { name: "evaler", service: "eval" };
        }
        function d(e) {
          return "interper" === e
            ? { name: "interper", service: "interp2" }
            : "shellrunner" === e
            ? { name: "shellrunner", service: "shellrun" }
            : { name: "evaler", service: "eval" };
        }
        function b(e, t) {
          return y.apply(this, arguments);
        }
        function y() {
          return (y = Object(a.a)(
            i.a.mark(function e(t, n) {
              return i.a.wrap(e => {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise(e => {
                          t.on("command", function r(o) {
                            n(o) && (t.off("command", r), e(o));
                          });
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
      }).call(this, n("8oxB"), n("HDXh").Buffer));
    },
    "Qz/J": function (e, t) {
      var n =
          "undefined" !== typeof n
            ? n
            : "undefined" !== typeof WebKitBlobBuilder
            ? WebKitBlobBuilder
            : "undefined" !== typeof MSBlobBuilder
            ? MSBlobBuilder
            : "undefined" !== typeof MozBlobBuilder && MozBlobBuilder,
        r = (() => {
          try {
            return 2 === new Blob(["hi"]).size;
          } catch (e) {
            return !1;
          }
        })(),
        o =
          r && (() => {
            try {
              return 2 === new Blob([new Uint8Array([1, 2])]).size;
            } catch (e) {
              return !1;
            }
          })(),
        i = n && n.prototype.append && n.prototype.getBlob;
      function a(e) {
        return e.map(e => {
          if (e.buffer instanceof ArrayBuffer) {
            var t = e.buffer;
            if (e.byteLength !== t.byteLength) {
              var n = new Uint8Array(e.byteLength);
              n.set(new Uint8Array(t, e.byteOffset, e.byteLength)),
                (t = n.buffer);
            }
            return t;
          }
          return e;
        });
      }
      function s(e, t) {
        t = t || {};
        var r = new n();
        return a(e).forEach(e => {
          r.append(e);
        }),
        t.type ? r.getBlob(t.type) : r.getBlob()
      ;
      }
      function c(e, t) {
        return new Blob(a(e), t || {});
      }
      "undefined" !== typeof Blob &&
        ((s.prototype = Blob.prototype), (c.prototype = Blob.prototype)),
        (e.exports = r ? (o ? Blob : c) : i ? s : void 0);
    },
    WDr1(e, t) {
      e.exports =
        Object.keys ||
        (e => {
          var t = [],
            n = Object.prototype.hasOwnProperty;
          for (var r in e) n.call(e, r) && t.push(r);
          return t;
        });
    },
    WK0V(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), n("dy/U");
      var r = n("eTwx");
      Object.defineProperty(t, "Client", {
        enumerable: !0,
        get() {
          return r.Client;
        },
      });
      var o = n("1dJL");
      Object.defineProperty(t, "Channel", {
        enumerable: !0,
        get() {
          return o.Channel;
        },
      });
      var i = n("yLpU");
      Object.defineProperty(t, "FetchConnectionMetadataError", {
        enumerable: !0,
        get() {
          return i.FetchConnectionMetadataError;
        },
      }),
        Object.defineProperty(t, "ConnectionState", {
          enumerable: !0,
          get() {
            return i.ConnectionState;
          },
        });
    },
    X6w4(e, t) {
      var n,
        r,
        o,
        i = String.fromCharCode;
      function a(e) {
        for (var t, n, r = [], o = 0, i = e.length; o < i; )
          (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
            ? 56320 == (64512 & (n = e.charCodeAt(o++)))
              ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
              : (r.push(t), o--)
            : r.push(t);
        return r;
      }
      function s(e, t) {
        if (e >= 55296 && e <= 57343) {
          if (t)
            throw Error(
              "Lone surrogate U+" +
                e.toString(16).toUpperCase() +
                " is not a scalar value"
            );
          return !1;
        }
        return !0;
      }
      function c(e, t) {
        return i(((e >> t) & 63) | 128);
      }
      function u(e, t) {
        if (0 == (4294967168 & e)) return i(e);
        var n = "";
        return (
          0 == (4294965248 & e)
            ? (n = i(((e >> 6) & 31) | 192))
            : 0 == (4294901760 & e)
            ? (s(e, t) || (e = 65533),
              (n = i(((e >> 12) & 15) | 224)),
              (n += c(e, 6)))
            : 0 == (4292870144 & e) &&
              ((n = i(((e >> 18) & 7) | 240)), (n += c(e, 12)), (n += c(e, 6))),
          (n += i((63 & e) | 128))
        );
      }
      function l() {
        if (o >= r) throw Error("Invalid byte index");
        var e = 255 & n[o];
        if ((o++, 128 == (192 & e))) return 63 & e;
        throw Error("Invalid continuation byte");
      }
      function A(e) {
        var t, i;
        if (o > r) throw Error("Invalid byte index");
        if (o == r) return !1;
        if (((t = 255 & n[o]), o++, 0 == (128 & t))) return t;
        if (192 == (224 & t)) {
          if ((i = ((31 & t) << 6) | l()) >= 128) return i;
          throw Error("Invalid continuation byte");
        }
        if (224 == (240 & t)) {
          if ((i = ((15 & t) << 12) | (l() << 6) | l()) >= 2048)
            return s(i, e) ? i : 65533;
          throw Error("Invalid continuation byte");
        }
        if (
          240 == (248 & t) &&
          (i = ((7 & t) << 18) | (l() << 12) | (l() << 6) | l()) >= 65536 &&
          i <= 1114111
        )
          return i;
        throw Error("Invalid UTF-8 detected");
      }
      e.exports = {
        version: "2.1.2",
        encode(e, t) {
          for (
            var n = !1 !== (t = t || {}).strict,
              r = a(e),
              o = r.length,
              i = -1,
              s = "";
            ++i < o;

          )
            s += u(r[i], n);
          return s;
        },
        decode(e, t) {
          var s = !1 !== (t = t || {}).strict;
          (n = a(e)), (r = n.length), (o = 0);
          for (var c, u = []; !1 !== (c = A(s)); ) u.push(c);
          return (e => {
            for (var t, n = e.length, r = -1, o = ""; ++r < n; )
              (t = e[r]) > 65535 &&
                ((o += i((((t -= 65536) >>> 10) & 1023) | 55296)),
                (t = 56320 | (1023 & t))),
                (o += i(t));
            return o;
          })(u);
        },
      };
    },
    X8yK(e, t, n) {
      "use strict";
      t.a = {
        brand: { darkBlue: "#0D101E", lightBlue: "#68CDEE", gray: "#6D7D84" },
        main: {
          green: {
            dark: "#0A6640",
            default: "#0F9960",
            light: "#3DCC91",
            25: "rgba(15,153,96,0.25)",
            15: "rgba(15,153,96,0.15)",
          },
          red: {
            dark: "#A82A2A",
            default: "#DB3737",
            light: "#FF7373",
            25: "rgba(219, 55, 55, 0.25)",
            15: "rgba(219, 55, 55, 0.15)",
          },
          blue: {
            dark: "#0068AD",
            default: "#0097FB",
            light: "#73C4FA",
            25: "rgba(0, 151, 251, 0.25)",
            15: "rgba(0, 151, 251, 0.15)",
          },
          orange: {
            dark: "#A14809",
            default: "#E16D1A",
            light: "#FC9C58",
            25: "rgba(225, 109, 26, 0.25)",
            15: "rgba(225, 109, 26, 0.15)",
          },
          purple: {
            dark: "#6213B1",
            default: "#9D43F7",
            light: "#BF80FF",
            25: "rgba(98, 19, 177, 0.25)",
            15: "rgba(98, 19, 177, 0.15)",
          },
          gold: {
            dark: "#A67908",
            default: "#D99E0B",
            light: "#FFC940",
            25: "rgba(217, 158, 11, 0.25)",
            15: "rgba(217, 158, 11, 0.15)",
          },
        },
        neutrals: {
          black: "#21242C",
          white: "#FFFFFF",
          offWhite: "#F7F8FA",
          black64: "rgba(33, 36, 44, 0.64)",
          black50: "rgba(33, 36, 44, 0.50)",
          black16: "rgba(33, 36, 44, 0.16)",
          black8: "rgba(33, 36, 44, 0.08)",
          white64: "rgba(255, 255, 255, 0.64)",
          white50: "rgba(255, 255, 255, 0.50)",
          white16: "rgba(255, 255, 255, 0.16)",
          white8: "rgba(255, 255, 255, 0.08)",
        },
        multiplayer: {
          green: "#1BC47D",
          red: "#EF5533",
          blue: "#18A0FB",
          gold: "#FFC700",
          purple: "#907CFF",
          teal: "#00B5CE",
          pink: "#EE46D3",
        },
        languages: {
          java: "#b07219",
          scheme: "#1e4aec",
          clojure: "#db5855",
          haskell: "#5e5086",
          lua: "#000080",
          ruby: "#701516",
          python: "#3572A5",
          go: "#00ADD8",
          cpp: "#f34b7d",
          c: "#555555",
          "c#": "#178600",
          "f#": "#b845fc",
          rust: "#dea584",
          swift: "#ffac45",
          r: "#198CE7",
          bash: "#000000",
          crystal: "#000100",
          julia: "#a270ba",
          elixir: "#6e4a7e",
          nim: "#37775b",
          dart: "#00B4AB",
          erlang: "#B83998",
          typescript: "#2b7489",
          elisp: "#c065db",
          sql: "#e34c26",
          php: "#4F5D95",
          html: "#e34c26",
          css: "#563d7c",
          javascript: "#f1e05a",
        },
      };
    },
    cK9Y(e, t, n) {
      var r = n("rx/v"),
        o = n("8VYC"),
        i = n("gnSh"),
        a = n("Yvos"),
        s = n("EuBs")("engine.io-client:polling-xhr"),
        c = n("HiSk");
      function u() {}
      function l(e) {
        if (
          (o.call(this, e),
          (this.requestTimeout = e.requestTimeout),
          (this.extraHeaders = e.extraHeaders),
          "undefined" !== typeof location)
        ) {
          var t = "https:" === location.protocol,
            n = location.port;
          n || (n = t ? 443 : 80),
            (this.xd =
              ("undefined" !== typeof location &&
                e.hostname !== location.hostname) ||
              n !== e.port),
            (this.xs = e.secure !== t);
        }
      }
      function A(e) {
        (this.method = e.method || "GET"),
          (this.uri = e.uri),
          (this.xd = !!e.xd),
          (this.xs = !!e.xs),
          (this.async = !1 !== e.async),
          (this.data = void 0 !== e.data ? e.data : null),
          (this.agent = e.agent),
          (this.isBinary = e.isBinary),
          (this.supportsBinary = e.supportsBinary),
          (this.enablesXDR = e.enablesXDR),
          (this.withCredentials = e.withCredentials),
          (this.requestTimeout = e.requestTimeout),
          (this.pfx = e.pfx),
          (this.key = e.key),
          (this.passphrase = e.passphrase),
          (this.cert = e.cert),
          (this.ca = e.ca),
          (this.ciphers = e.ciphers),
          (this.rejectUnauthorized = e.rejectUnauthorized),
          (this.extraHeaders = e.extraHeaders),
          this.create();
      }
      if (
        ((e.exports = l),
        (e.exports.Request = A),
        a(l, o),
        (l.prototype.supportsBinary = !0),
        (l.prototype.request = function (e) {
          return (
            ((e = e || {}).uri = this.uri()),
            (e.xd = this.xd),
            (e.xs = this.xs),
            (e.agent = this.agent || !1),
            (e.supportsBinary = this.supportsBinary),
            (e.enablesXDR = this.enablesXDR),
            (e.withCredentials = this.withCredentials),
            (e.pfx = this.pfx),
            (e.key = this.key),
            (e.passphrase = this.passphrase),
            (e.cert = this.cert),
            (e.ca = this.ca),
            (e.ciphers = this.ciphers),
            (e.rejectUnauthorized = this.rejectUnauthorized),
            (e.requestTimeout = this.requestTimeout),
            (e.extraHeaders = this.extraHeaders),
            new A(e)
          );
        }),
        (l.prototype.doWrite = function (e, t) {
          var n = "string" !== typeof e && void 0 !== e,
            r = this.request({ method: "POST", data: e, isBinary: n }),
            o = this;
          r.on("success", t),
            r.on("error", e => {
              o.onError("xhr post error", e);
            }),
            (this.sendXhr = r);
        }),
        (l.prototype.doPoll = function () {
          s("xhr poll");
          var e = this.request(),
            t = this;
          e.on("data", e => {
            t.onData(e);
          }),
            e.on("error", e => {
              t.onError("xhr poll error", e);
            }),
            (this.pollXhr = e);
        }),
        i(A.prototype),
        (A.prototype.create = function () {
          var e = {
            agent: this.agent,
            xdomain: this.xd,
            xscheme: this.xs,
            enablesXDR: this.enablesXDR,
          };
          (e.pfx = this.pfx),
            (e.key = this.key),
            (e.passphrase = this.passphrase),
            (e.cert = this.cert),
            (e.ca = this.ca),
            (e.ciphers = this.ciphers),
            (e.rejectUnauthorized = this.rejectUnauthorized);
          var t = (this.xhr = new r(e)),
            n = this;
          try {
            s("xhr open %s: %s", this.method, this.uri),
              t.open(this.method, this.uri, this.async);
            try {
              if (this.extraHeaders)
                for (var o in (t.setDisableHeaderCheck &&
                  t.setDisableHeaderCheck(!0),
                this.extraHeaders))
                  this.extraHeaders.hasOwnProperty(o) &&
                    t.setRequestHeader(o, this.extraHeaders[o]);
            } catch (i) {}
            if ("POST" === this.method)
              try {
                this.isBinary
                  ? t.setRequestHeader(
                      "Content-type",
                      "application/octet-stream"
                    )
                  : t.setRequestHeader(
                      "Content-type",
                      "text/plain;charset=UTF-8"
                    );
              } catch (i) {}
            try {
              t.setRequestHeader("Accept", "*/*");
            } catch (i) {}
            "withCredentials" in t &&
              (t.withCredentials = this.withCredentials),
              this.requestTimeout && (t.timeout = this.requestTimeout),
              this.hasXDR()
                ? ((t.onload = () => {
                    n.onLoad();
                  }),
                  (t.onerror = () => {
                    n.onError(t.responseText);
                  }))
                : (t.onreadystatechange = () => {
                    if (2 === t.readyState)
                      try {
                        var e = t.getResponseHeader("Content-Type");
                        ((n.supportsBinary &&
                          "application/octet-stream" === e) ||
                          "application/octet-stream; charset=UTF-8" === e) &&
                          (t.responseType = "arraybuffer");
                      } catch (i) {}
                    4 === t.readyState &&
                      (200 === t.status || 1223 === t.status
                        ? n.onLoad()
                        : setTimeout(() => {
                            n.onError(
                              "number" === typeof t.status ? t.status : 0
                            );
                          }, 0));
                  }),
              s("xhr data %s", this.data),
              t.send(this.data);
          } catch (i) {
            return void setTimeout(() => {
              n.onError(i);
            }, 0);
          }
          "undefined" !== typeof document &&
            ((this.index = A.requestsCount++), (A.requests[this.index] = this));
        }),
        (A.prototype.onSuccess = function () {
          this.emit("success"), this.cleanup();
        }),
        (A.prototype.onData = function (e) {
          this.emit("data", e), this.onSuccess();
        }),
        (A.prototype.onError = function (e) {
          this.emit("error", e), this.cleanup(!0);
        }),
        (A.prototype.cleanup = function (e) {
          if ("undefined" !== typeof this.xhr && null !== this.xhr) {
            if (
              (this.hasXDR()
                ? (this.xhr.onload = this.xhr.onerror = u)
                : (this.xhr.onreadystatechange = u),
              e)
            )
              try {
                this.xhr.abort();
              } catch (t) {}
            "undefined" !== typeof document && delete A.requests[this.index],
              (this.xhr = null);
          }
        }),
        (A.prototype.onLoad = function () {
          var e;
          try {
            var t;
            try {
              t = this.xhr.getResponseHeader("Content-Type");
            } catch (n) {}
            e =
              (("application/octet-stream" === t ||
                "application/octet-stream; charset=UTF-8" === t) &&
                this.xhr.response) ||
              this.xhr.responseText;
          } catch (n) {
            this.onError(n);
          }
          null != e && this.onData(e);
        }),
        (A.prototype.hasXDR = function () {
          return (
            "undefined" !== typeof XDomainRequest && !this.xs && this.enablesXDR
          );
        }),
        (A.prototype.abort = function () {
          this.cleanup();
        }),
        (A.requestsCount = 0),
        (A.requests = {}),
        "undefined" !== typeof document)
      )
        if ("function" === typeof attachEvent) attachEvent("onunload", h);
        else if ("function" === typeof addEventListener) {
          addEventListener("onpagehide" in c ? "pagehide" : "unload", h, !1);
        }
      function h() {
        for (var e in A.requests)
          A.requests.hasOwnProperty(e) && A.requests[e].abort();
      }
    },
    dDrW(e, t) {
      e.exports =
        "data:application/x-font-ttf;base64,AAEAAAAOAIAAAwBgRkZUTYQd29oAAAWIAAAAHEdERUYAKQAqAAAFYAAAACZPUy8yQ0FcUwAAAWgAAABgY21hcAAP8lIAAAHYAAABQmN2dCAAIgKIAAADHAAAAARnYXNwAAAAAQAABVgAAAAIZ2x5ZqQ1ewkAAAMsAAAAiGhlYWQPsR5/AAAA7AAAADZoaGVhBgEEBQAAASQAAAAkaG10eAwAAKIAAAHIAAAAEGxvY2EAbgBUAAADIAAAAAptYXhwAAgAPAAAAUgAAAAgbmFtZSBsbRoAAAO0AAABbnBvc3SwqUy9AAAFJAAAADIAAQAAAAAAAI7W8KxfDzz1AAsEAAAAAADXNj/0AAAAANc7muQAIgAAAgACqgAAAAgAAgAAAAAAAAABAAAEAAAAAAAEAAAAAAACAAABAAAAAAAAAAAAAAAAAAAABAABAAAABAAMAAMAAAAAAAIAAAAAAAAAAAAAAC4AAAAAAAMEAAGQAAUAAAKAAwAAAACAAoADAAAAAgAAAAEAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAFBmRWQAQO6n7qcEAAAAAAAEAAAAAAAAAQAAAAAAAAAAAAAAIAABBAAAIgAAAAAEAAAABAAAgAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAO6n//8AAO6n//8RXAABAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAogAAAAqACoAKgBEAAAAAgAiAAABMgKqAAMABwAusQEALzyyBwQA7TKxBgXcPLIDAgDtMgCxAwAvPLIFBADtMrIHBgH8PLIBAgDtMjMRIREnMxEjIgEQ7szMAqr9ViICZgAAAwCAAAACAAJAAAMABwALAAABFTM1BRUzNQMVMzUBQMD+gMDAwAGAwMDAwMABgMDAAAAAAAAADgCuAAEAAAAAAAAAAAACAAEAAAAAAAEACwAbAAEAAAAAAAIAAQArAAEAAAAAAAMADABHAAEAAAAAAAQACwBsAAEAAAAAAAUACwCQAAEAAAAAAAYACwC0AAMAAQQJAAAAAAAAAAMAAQQJAAEAFgADAAMAAQQJAAIAAgAnAAMAAQQJAAMAGAAtAAMAAQQJAAQAFgBUAAMAAQQJAAUAFgB4AAMAAQQJAAYAFgCcAAAAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAAoAAAoAAHIAZQBwAGwAaQB0ACAAaQBjAG8AbgBzAAByZXBsaXQgaWNvbnMAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAVmVyc2lvbiAxLjAAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAAAAAgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAEAAAAAQACAQIHdW5pRUVBNwAAAAEAAf//AAAAAQAAAAwAAAAWAB4AAgABAAMAAwABAAQAAAACAAAAAQAAAAEAAAAAAAAAAQAAAADVrAEBAAAAANc2P/QAAAAA1zua5A==";
    },
    "dy/U": function (e, t, n) {
      ((r => {
        var o, i;
        void 0 ===
          (i =
            "function" ===
            typeof (o = () => {
              "use strict";

              class e {
                constructor(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }

                static exports(e, t, r) {
                  var o = !0,
                    i = !0;
                  if ("function" != typeof e) throw new TypeError(n);
                  return (
                    b(r) &&
                      ((o = "leading" in r ? !!r.leading : o),
                      (i = "trailing" in r ? !!r.trailing : i)),
                    d(e, t, { leading: o, maxWait: t, trailing: i })
                  );
                }

                static exports(e) {
                  var t = e.xdomain,
                    n = e.xscheme,
                    i = e.enablesXDR;
                  try {
                    if ("undefined" !== typeof XMLHttpRequest && (!t || r))
                      return new XMLHttpRequest();
                  } catch (a) {}
                  try {
                    if ("undefined" !== typeof XDomainRequest && !n && i)
                      return new XDomainRequest();
                  } catch (a) {}
                  if (!t)
                    try {
                      return new (o[["Active"].concat("Object").join("X")])(
                        "Microsoft.XMLHTTP"
                      );
                    } catch (a) {}
                }
              }

              function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              function n(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              }
              function o(e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && a(e, t);
              }
              function i(e) {
                return (i = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : e => {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function a(e, t) {
                return (a =
                  Object.setPrototypeOf ||
                  ((e, t) => {
                    return (e.__proto__ = t), e;
                  }))(e, t);
              }
              function s() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                  return Date.prototype.toString.call(
                    Reflect.construct(Date, [], () => {})
                  ),
                  !0
                ;
                } catch (e) {
                  return !1;
                }
              }
              function c(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function u(e, t) {
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? c(e)
                  : t;
              }
              function l(e) {
                var t = s();
                return function () {
                  var n,
                    r = i(e);
                  if (t) {
                    var o = i(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                  } else n = r.apply(this, arguments);
                  return u(this, n);
                };
              }
              function A(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = i(e));

                );
                return e;
              }
              function h(e, t, n) {
                return (h =
                  "undefined" !== typeof Reflect && Reflect.get
                    ? Reflect.get
                    : (e, t, n) => {
                        var r = A(e, t);
                        if (r) {
                          var o = Object.getOwnPropertyDescriptor(r, t);
                          return o.get ? o.get.call(n) : o.value;
                        }
                      })(e, t, n || e);
              }
              var p = (() => {
                  function t() {
                    e(this, t),
                      Object.defineProperty(this, "listeners", {
                        value: {},
                        writable: !0,
                        configurable: !0,
                      });
                  }
                  return n(t, [
                    {
                      key: "addEventListener",
                      value(e, t, n) {
                        e in this.listeners || (this.listeners[e] = []),
                          this.listeners[e].push({ callback: t, options: n });
                      },
                    },
                    {
                      key: "removeEventListener",
                      value(e, t) {
                        if (e in this.listeners)
                          for (
                            var n = this.listeners[e], r = 0, o = n.length;
                            r < o;
                            r++
                          )
                            if (n[r].callback === t)
                              return void n.splice(r, 1);
                      },
                    },
                    {
                      key: "dispatchEvent",
                      value(e) {
                        if (e.type in this.listeners) {
                          for (
                            var t = this.listeners[e.type].slice(),
                              n = 0,
                              r = t.length;
                            n < r;
                            n++
                          ) {
                            var o = t[n];
                            try {
                              o.callback.call(this, e);
                            } catch (i) {
                              Promise.resolve().then(() => {
                                throw i;
                              });
                            }
                            o.options &&
                              o.options.once &&
                              this.removeEventListener(e.type, o.callback);
                          }
                          return !e.defaultPrevented;
                        }
                      },
                    },
                  ]),
                  t;
                })(),
                f = (t => {
                  o(a, t);
                  var r = l(a);
                  function a() {
                    var t;
                    return (
                      e(this, a),
                      (t = r.call(this)).listeners || p.call(c(t)),
                      Object.defineProperty(c(t), "aborted", {
                        value: !1,
                        writable: !0,
                        configurable: !0,
                      }),
                      Object.defineProperty(c(t), "onabort", {
                        value: null,
                        writable: !0,
                        configurable: !0,
                      }),
                      t
                    );
                  }
                  return n(a, [
                    {
                      key: "toString",
                      value() {
                        return "[object AbortSignal]";
                      },
                    },
                    {
                      key: "dispatchEvent",
                      value(e) {
                        "abort" === e.type &&
                          ((this.aborted = !0),
                          "function" === typeof this.onabort &&
                            this.onabort.call(this, e)),
                          h(i(a.prototype), "dispatchEvent", this).call(
                            this,
                            e
                          );
                      },
                    },
                  ]),
                  a
                ;
                })(p),
                d = (() => {
                  function t() {
                    e(this, t),
                      Object.defineProperty(this, "signal", {
                        value: new f(),
                        writable: !0,
                        configurable: !0,
                      });
                  }
                  return n(t, [
                    {
                      key: "abort",
                      value() {
                        var e;
                        try {
                          e = new Event("abort");
                        } catch (t) {
                          "undefined" !== typeof document
                            ? document.createEvent
                              ? (e = document.createEvent("Event")).initEvent(
                                  "abort",
                                  !1,
                                  !1
                                )
                              : ((e = document.createEventObject()).type =
                                  "abort")
                            : (e = {
                                type: "abort",
                                bubbles: !1,
                                cancelable: !1,
                              });
                        }
                        this.signal.dispatchEvent(e);
                      },
                    },
                    {
                      key: "toString",
                      value() {
                        return "[object AbortController]";
                      },
                    },
                  ]),
                  t
                ;
                })();
              function b(e) {
                return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
                  ? (console.log(
                      "__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"
                    ),
                    !0)
                  : ("function" === typeof e.Request &&
                      !e.Request.prototype.hasOwnProperty("signal")) ||
                      !e.AbortController;
              }
              "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                ((d.prototype[Symbol.toStringTag] = "AbortController"),
                (f.prototype[Symbol.toStringTag] = "AbortSignal")), (e => {
                b(e) && ((e.AbortController = d), (e.AbortSignal = f));
              })("undefined" !== typeof self ? self : r);
            })
              ? o.call(t, n, t, e)
              : o) || (e.exports = i);
      }).call(this, n("ntbh")));
    },
    eTwx(e, t, n) {
      "use strict";
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__awaiter) ||
          ((e, t, n, r) => {
            return new (n || (n = Promise))((o, i) => {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (t) {
                  i(t);
                }
              }
              function s(e) {
                try {
                  c(r.throw(e));
                } catch (t) {
                  i(t);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(e => {
                          e(t);
                        })).then(a, s);
              }
              c((r = r.apply(e, t || [])).next());
            });
          }),
        i =
          (this && this.__generator) ||
          ((e, t) => {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent() {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return s => {
                return (i => {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (s) {
                      (i = [6, s]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          });
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Client = void 0);
      var a,
        s = n("5/z4"),
        c = n("1dJL"),
        u = n("AJXi"),
        l = n("Emkz"),
        A = n("yLpU");
      !(e => {
        (e.Intentional = "Intentional"),
          (e.Disconnected = "Disconnected"),
          (e.Error = "Error");
      })(a || (a = {}));
      var h = { secure: !0, host: "eval.global.replit.com", port: "443" },
        p = function () {
          var e = this;
          (this.open = (t, n) => {
            if (e.chan0Cb) {
              var a = new Error(
                "You must call `close` before opening the client again"
              );
              throw (e.onUnrecoverableError(a), a);
            }
            var s = t.fetchConnectionMetadata;
            if (!s || "function" !== typeof s) {
              var c = t.fetchToken;
              if (!c || "function" !== typeof c)
                throw (
                  ((a = new Error(
                    "You must provide a fetchConnectionMetadata/fetchToken function"
                  )),
                  e.onUnrecoverableError(a),
                  a)
                );
              var u = t.urlOptions || h,
                l = u.secure,
                p = u.host,
                f = u.port;
              s = t => {
                return o(e, void 0, void 0, function () {
                  var e, n;
                  return i(this, r => {
                    switch (r.label) {
                      case 0:
                        return r.trys.push([0, 2, , 3]), [4, c(t)];
                      case 1:
                        return (
                          (e = r.sent()),
                          (n = e.token),
                          e.aborted || !n
                            ? [
                                2,
                                {
                                  error: A.FetchConnectionMetadataError.Aborted,
                                },
                              ]
                            : [
                                2,
                                {
                                  token: n,
                                  gurl:
                                    "ws" + (l ? "s" : "") + "://" + p + ":" + f,
                                  conmanURL:
                                    "http" +
                                    (l ? "s" : "") +
                                    "://" +
                                    p +
                                    ":" +
                                    f,
                                  error: null,
                                },
                              ]
                        );
                      case 2:
                        return [2, { error: r.sent() }];
                      case 3:
                        return [2];
                    }
                  });
                });
              };
            }
            if (e.destroyed)
              throw (
                ((a = new Error(
                  "Client has been destroyed and cannot be re-used"
                )),
                e.onUnrecoverableError(a),
                a)
              );
            (e.connectOptions = r(
              { fetchConnectionMetadata: s, timeout: 1e4 },
              t
            )),
              e.debug({
                type: "breadcrumb",
                message: "open",
                data: { polling: !1 },
              }),
              (e.chan0Cb = n),
              e.connect({ tryCount: 0, websocketFailureCount: 0 });
          }),
            (this.openChannel = (t, n) => {
              if (
                t.name &&
                e.channelRequests.some(e => {
                  return !e.closeRequested && e.options.name === t.name;
                })
              ) {
                var r = new Error(
                  "Channel with name " + t.name + " already opened"
                );
                throw (e.onUnrecoverableError(r), r);
              }
              if (e.destroyed)
                throw (
                  ((r = new Error("Client has been destroyed and is unusable")),
                  e.onUnrecoverableError(r),
                  r)
                );
              var o = {
                options: t,
                openChannelCb: n,
                isOpen: !1,
                channelId: null,
                cleanupCb: null,
                closeRequested: !1,
              };
              e.channelRequests.push(o),
                e.connectionState === A.ConnectionState.CONNECTED &&
                  e.requestOpenChannel(o);
              var i = !1;
              return () => {
                i ||
                  ((i = !0),
                  (o.closeRequested = !0),
                  o.isOpen
                    ? e.requestCloseChannel(o)
                    : (e.channelRequests = e.channelRequests.filter(e => {
                        return e !== o;
                      })));
              };
            }),
            (this.requestOpenChannel = t => {
              var n = t.options,
                r = t.openChannelCb;
              if (e.connectOptions) {
                var o = n.skip;
                if (!o || !o(e.connectOptions.context)) {
                  var i = n.action;
                  if (
                    (i ||
                      (i =
                        null == n.name
                          ? s.api.OpenChannel.Action.CREATE
                          : s.api.OpenChannel.Action.ATTACH_OR_CREATE),
                    t.channelId)
                  )
                    e.onUnrecoverableError(new Error("Unexpected channelId"));
                  else {
                    var a =
                      "string" === typeof n.service
                        ? n.service
                        : n.service(e.connectOptions.context);
                    e.debug({
                      type: "breadcrumb",
                      message: "handleOpenChannel",
                      data: { name: n.name, service: a, action: i },
                    });
                    var u = e.getChannel(0),
                      l = Number(
                        Math.random().toString().split(".")[1]
                      ).toString(36);
                    u.send({
                      ref: l,
                      openChan: { name: n.name, service: a, action: i },
                    });
                    var A = u.onCommand(n => {
                      if (l === n.ref)
                        if ((A(), null != n.openChanRes)) {
                          var o = n.openChanRes,
                            i = o.id,
                            a = o.state,
                            u = o.error;
                          if (
                            (e.debug({
                              type: "breadcrumb",
                              message: "openChanres",
                            }),
                            e.connectOptions)
                          )
                            if (a !== s.api.OpenChannelRes.State.ERROR)
                              if (
                                "number" === typeof i &&
                                "number" === typeof a
                              ) {
                                var h = new c.Channel({
                                  id: i,
                                  onUnrecoverableError: e.onUnrecoverableError,
                                  send: e.send,
                                });
                                (e.channels[i] = h),
                                  (t.channelId = i),
                                  (t.isOpen = !0);
                                var p = t.closeRequested;
                                (t.cleanupCb = r({
                                  channel: h,
                                  error: null,
                                  context: e.connectOptions.context,
                                })),
                                  p && e.requestCloseChannel(t);
                              } else
                                e.onUnrecoverableError(
                                  new Error("Expected state and channel id")
                                );
                            else
                              e.onUnrecoverableError(
                                new Error(
                                  "Channel open resulted with an error: " +
                                    (u || "with no message")
                                )
                              );
                          else
                            e.onUnrecoverableError(
                              new Error("Expected connectionOptions")
                            );
                        } else
                          e.onUnrecoverableError(
                            new Error("Expected openChanRes on command")
                          );
                    });
                  }
                }
              } else
                e.onUnrecoverableError(new Error("Expected connectionOptions"));
            }),
            (this.requestCloseChannel = t => {
              return o(e, void 0, void 0, function () {
                var e, n, r, o, a;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return t.isOpen
                        ? ((e = t.channelId),
                          ((n = this.getChannel(t.channelId)).status =
                            "closing"),
                          (r = this.getChannel(0))
                            ? (this.debug({
                                type: "breadcrumb",
                                message: "requestChannelClose",
                                data: {
                                  id: e,
                                  name: t.options.name,
                                  service: t.options.service,
                                },
                              }),
                              [
                                4,
                                r.request({
                                  closeChan: {
                                    action: s.api.CloseChannel.Action.TRY_CLOSE,
                                    id: t.channelId,
                                  },
                                }),
                              ])
                            : (this.onUnrecoverableError(
                                new Error(
                                  "Tried to request a channel close but there was no chan0"
                                )
                              ),
                              [2]))
                        : (this.onUnrecoverableError(
                            new Error(
                              "Tried to request a channel close before opening"
                            )
                          ),
                          [2]);
                    case 1:
                      if ((o = i.sent()).channelClosed)
                        this.debug({
                          type: "breadcrumb",
                          message: "requestChannelClose:chan0Closed",
                          data: {
                            id: e,
                            name: t.options.name,
                            service: t.options.service,
                          },
                        });
                      else {
                        if (null == o.closeChanRes)
                          return (
                            this.onUnrecoverableError(
                              new Error("Expected closeChanRes")
                            ),
                            [2]
                          );
                        if (null == (a = o.closeChanRes.id))
                          return (
                            this.onUnrecoverableError(
                              new Error("Expected id, got " + a)
                            ),
                            [2]
                          );
                        if (a !== e)
                          return (
                            this.onUnrecoverableError(
                              new Error(
                                "Expected id from closeChanRes to be " +
                                  e +
                                  " got " +
                                  a
                              )
                            ),
                            [2]
                          );
                        this.debug({
                          type: "breadcrumb",
                          message: "requestChannelClose:closeChanRes",
                          data: {
                            id: e,
                            name: t.options.name,
                            service: t.options.service,
                            closeStatus: o.closeChanRes.status,
                          },
                        });
                      }
                      return (this.channelRequests = this.channelRequests.filter(
                        e => {
                          return e !== t;
                        }
                      )),
                      delete this.channels[e],
                      n.handleClose({
                        initiator: "channel",
                        willReconnect: !1,
                      }),
                      t.cleanupCb &&
                        t.cleanupCb({
                          initiator: "channel",
                          willReconnect: !1,
                        }),
                      [2]
                    ;
                  }
                });
              });
            }),
            (this.close = () => {
              if (
                (e.debug({ type: "breadcrumb", message: "user close" }),
                !e.chan0Cb || !e.connectOptions)
              ) {
                var t = new Error("Must call client.open before closing");
                throw (e.onUnrecoverableError(t), t);
              }
              e.fetchTokenAbortController &&
                (e.fetchTokenAbortController.abort(),
                (e.fetchTokenAbortController = null)),
                e.handleClose({ closeReason: a.Intentional });
            }),
            (this.destroy = () => {
              (e.destroyed = !0),
                e.debug({ type: "breadcrumb", message: "destroy" }),
                e.connectionState !== A.ConnectionState.DISCONNECTED &&
                  e.close(),
                (e.debug = () => {}),
                (e.userUnrecoverableErrorHandler = null),
                (e.channelRequests = []),
                (e.destroyed = !0);
            }),
            (this.getChannel = t => {
              var n = e.channels[t];
              if (!n) {
                var r = new Error("No channel with number " + t);
                throw (e.onUnrecoverableError(r), r);
              }
              return n;
            }),
            (this.setDebugFunc = t => {
              e.debug = t;
            }),
            (this.setUnrecoverableErrorHandler = t => {
              e.userUnrecoverableErrorHandler = t;
            }),
            (this.getConnectionMetadata = () => {
              return e.connectionMetadata;
            }),
            (this.connect = t => {
              var n = t.tryCount,
                r = t.websocketFailureCount;
              return o(e, void 0, void 0, function () {
                var e,
                  t,
                  o,
                  a,
                  h,
                  p,
                  f,
                  d,
                  b,
                  y,
                  g,
                  v,
                  m,
                  C,
                  w,
                  E,
                  O,
                  k,
                  S = this;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (
                        (this.debug({
                          type: "breadcrumb",
                          message: "connecting",
                          data: {
                            connectionState: this.connectionState,
                            connectTries: n,
                            websocketFailureCount: r,
                            readyState: this.ws ? this.ws.readyState : void 0,
                            chan0CbExists: Boolean(this.chan0Cb),
                          },
                        }),
                        this.connectionState !== A.ConnectionState.DISCONNECTED)
                      )
                        throw (
                          ((e = new Error(
                            "Client must be disconnected to connect"
                          )),
                          this.onUnrecoverableError(e),
                          e)
                        );
                      if (this.ws)
                        throw (
                          ((e = new Error(
                            "Unexpected existing websocket instance"
                          )),
                          this.onUnrecoverableError(e),
                          e)
                        );
                      if (!this.connectOptions)
                        throw (
                          ((e = new Error("Expected connectionOptions")),
                          this.onUnrecoverableError(e),
                          e)
                        );
                      if (!this.chan0Cb)
                        return (
                          this.onUnrecoverableError(
                            new Error("Expected chan0Cb")
                          ),
                          [2]
                        );
                      if (this.chan0CleanupCb)
                        return (
                          this.onUnrecoverableError(
                            new Error(
                              "Unexpected chan0CleanupCb, are you sure you closed"
                            )
                          ),
                          [2]
                        );
                      if (
                        this.channelRequests.some(e => {
                          return e.isOpen;
                        })
                      )
                        return (
                          this.onUnrecoverableError(
                            new Error(
                              "All channels should be closed when we connect"
                            )
                          ),
                          [2]
                        );
                      if (Object.keys(this.channels).length)
                        return (
                          this.onUnrecoverableError(
                            new Error(
                              "Found an an unexpected existing channels"
                            )
                          ),
                          [2]
                        );
                      if (
                        ((this.connectionState = A.ConnectionState.CONNECTING),
                        (t = new c.Channel({
                          id: 0,
                          onUnrecoverableError: this.onUnrecoverableError,
                          send: this.send,
                        })),
                        (this.channels[0] = t),
                        this.fetchTokenAbortController)
                      )
                        return (
                          this.onUnrecoverableError(
                            new Error(
                              "Expected fetchTokenAbortController to be null"
                            )
                          ),
                          [2]
                        );
                      (o = new AbortController()),
                        (this.fetchTokenAbortController = o),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          this.connectOptions.fetchConnectionMetadata(o.signal),
                        ]
                      );
                    case 2:
                      return (a = i.sent()), [3, 4];
                    case 3:
                      return (h = i.sent()), this.onUnrecoverableError(h), [2];
                    case 4:
                      return (this.fetchTokenAbortController = null),
                      (f =
                        (p = a).error ===
                        A.FetchConnectionMetadataError.Aborted),
                      o.signal.aborted !== f
                        ? o.signal.aborted
                          ? (this.onUnrecoverableError(
                              new Error(
                                "Expected abort returned from fetchConnectionMetadata to be truthy when the controller aborts"
                              )
                            ),
                            [2])
                          : (this.onUnrecoverableError(
                              new Error(
                                "Abort should only be truthy returned when the abort signal is triggered"
                              )
                            ),
                            [2])
                        : p.error === A.FetchConnectionMetadataError.Aborted
                        ? [2]
                        : p.error === A.FetchConnectionMetadataError.Retriable
                        ? (this.retryConnect({
                            tryCount: n + 1,
                            websocketFailureCount: r,
                            chan0: t,
                            error: new Error("Retriable error"),
                          }),
                          [2])
                        : this.connectionState !==
                          A.ConnectionState.CONNECTING
                        ? (this.onUnrecoverableError(
                            new Error("Client was closed before connecting")
                          ),
                          [2])
                        : p.error
                        ? (this.onUnrecoverableError(p.error), [2])
                        : (3 === r &&
                            this.debug({
                              type: "breadcrumb",
                              message: "polling fallback",
                            }),
                          (b = (d = r >= 3)
                            ? l.EIOCompat
                            : u.getWebSocketClass(
                                this.connectOptions.WebSocketClass
                              )),
                          (y = u.getConnectionStr(p, d)),
                          ((g = new b(y)).binaryType = "arraybuffer"),
                          (g.onmessage = this.onSocketMessage),
                          (this.ws = g),
                          (this.connectionMetadata = p),
                          (v = null),
                          (g.onerror = () => {
                            v
                              ? v(new Error("WebSocket errored"))
                              : S.onUnrecoverableError(
                                  new Error(
                                    "Got websocket error but no `onFailed` cb"
                                  )
                                );
                          }),
                          (g.onclose = () => {
                            v
                              ? v(
                                  new Error(
                                    "WebSocket closed before we got READY"
                                  )
                                )
                              : S.onUnrecoverableError(
                                  new Error(
                                    "Got websocket closure but no `onFailed` cb"
                                  )
                                );
                          }),
                          (m = () => {}),
                          (C = () => {}),
                          null !== (w = this.connectOptions.timeout) &&
                            ((C = () => {
                              S.debug({
                                type: "breadcrumb",
                                message: "cancel timeout",
                              }),
                                clearTimeout(E);
                            }),
                            (m = () => {
                              S.debug({
                                type: "breadcrumb",
                                message: "reset timeout",
                              }),
                                clearTimeout(E),
                                (E = setTimeout(() => {
                                  S.debug({
                                    type: "breadcrumb",
                                    message: "connect timeout",
                                  }),
                                    v
                                      ? v(new Error("timeout"))
                                      : S.onUnrecoverableError(
                                          new Error(
                                            "Connecting timed out but there was no `onFailed` cb"
                                          )
                                        );
                                }, w));
                            })()),
                          (O = !1),
                          (k = t.onCommand(e => {
                            if (((O = !0), m(), null != e.containerState))
                              if (null != e.containerState.state) {
                                var n = e.containerState.state;
                                S.debug({
                                  type: "breadcrumb",
                                  message: "containerState",
                                  data: n,
                                });
                                var r = s.api.ContainerState.State;
                                switch (n) {
                                  case r.READY:
                                    if ((k(), C(), !S.connectOptions))
                                      return void S.onUnrecoverableError(
                                        new Error(
                                          "Expected connectionOptions"
                                        )
                                      );
                                    if (!t)
                                      return void S.onUnrecoverableError(
                                        new Error(
                                          "Expected chan0 to be truthy"
                                        )
                                      );
                                    if (!S.chan0Cb)
                                      return void S.onUnrecoverableError(
                                        new Error(
                                          "Expected chan0Cb to be truthy"
                                        )
                                      );
                                    S.handleConnect();
                                    var o = S.close;
                                    (S.close = () => {
                                      return setTimeout(() => {
                                        o();
                                      }, 0);
                                    }),
                                      (S.chan0CleanupCb = S.chan0Cb({
                                        channel: t,
                                        error: null,
                                        context: S.connectOptions.context,
                                      })),
                                      (S.close = o);
                                    break;
                                  case r.SLEEP:
                                    if (!v)
                                      return void S.onUnrecoverableError(
                                        new Error(
                                          "Got SLEEP but there was no `onFailed` cb"
                                        )
                                      );
                                    v(
                                      new Error(
                                        "Got SLEEP as container state"
                                      )
                                    );
                                }
                              } else
                                S.onUnrecoverableError(
                                  new Error(
                                    "Got containterState but state was not defined"
                                  )
                                );
                          })),
                          (v = e => {
                            (v = null),
                              S.cleanupSocket(),
                              C(),
                              k(),
                              S.retryConnect({
                                tryCount: n + 1,
                                websocketFailureCount: O ? 0 : r + 1,
                                chan0: t,
                                error: e,
                              });
                          }),
                          [2])
                    ;
                  }
                });
              });
            }),
            (this.retryConnect = t => {
              var n = t.tryCount,
                r = t.websocketFailureCount,
                o = t.chan0,
                i = t.error;
              e.retryTimeoutId
                ? e.onUnrecoverableError(
                    new Error("unexpected existing retryTimeoutId")
                  )
                : e.chan0Cb &&
                  (e.retryTimeoutId = setTimeout(() => {
                    e.chan0Cb
                      ? ((e.retryTimeoutId = null),
                        e.debug({
                          type: "breadcrumb",
                          message: "retrying",
                          data: {
                            connectionState: e.connectionState,
                            connectTries: n,
                            websocketFailureCount: r,
                            error: i,
                            wsReadyState: e.ws ? e.ws.readyState : void 0,
                          },
                        }),
                        o.handleClose({
                          initiator: "client",
                          willReconnect: !0,
                        }),
                        delete e.channels[0],
                        (e.connectionState = A.ConnectionState.DISCONNECTED),
                        e.connect({ tryCount: n, websocketFailureCount: r }))
                      : e.onUnrecoverableError(
                          new Error(
                            "Scheduled retry is called after we closed?"
                          )
                        );
                  }, u.getNextRetryDelay(n)));
            }),
            (this.send = t => {
              e.debug({ type: "log", log: { direction: "out", cmd: t } });
              var n = s.api.Command.encode(t).finish(),
                r = n.buffer.slice(n.byteOffset, n.byteOffset + n.length);
              null != e.ws
                ? e.ws.send(r)
                : e.onUnrecoverableError(
                    new Error("Calling send on a closed client")
                  );
            }),
            (this.onSocketMessage = t => {
              var n = t.data,
                r = new Uint8Array(n),
                o = s.api.Command.decode(r);
              e.debug({ type: "log", log: { direction: "in", cmd: o } }),
                e.getChannel(o.channel).handleCommand(o);
            }),
            (this.handleConnect = () => {
              if (
                ((e.connectionState = A.ConnectionState.CONNECTED),
                e.debug({ type: "breadcrumb", message: "connected!" }),
                e.ws)
              ) {
                var t = t => {
                  e.connectionState !== A.ConnectionState.DISCONNECTED
                    ? (e.debug({
                        type: "breadcrumb",
                        message: "wsclose",
                        data: { event: t },
                      }),
                      e.handleClose({
                        closeReason: a.Disconnected,
                        wsEvent: t,
                      }))
                    : e.onUnrecoverableError(
                        new Error(
                          "Got a close event on socket but client is in disconnected state"
                        )
                      );
                };
                (e.ws.onclose = t),
                  (e.ws.onerror = t),
                  e.channelRequests.forEach(t => {
                    e.requestOpenChannel(t);
                  });
              } else
                e.onUnrecoverableError(
                  new Error("Expected Websocket instance")
                );
            }),
            (this.handleClose = t => {
              if (t.closeReason !== a.Error) {
                if (e.connectionState === A.ConnectionState.DISCONNECTED)
                  return void e.onUnrecoverableError(
                    new Error(
                      "handleClose is called but client already disconnected"
                    )
                  );
                if (e.ws && e.fetchTokenAbortController)
                  return void e.onUnrecoverableError(
                    new Error(
                      "fetchTokenAbortController and websocket exist simultaneously"
                    )
                  );
              }
              e.cleanupSocket(),
                e.retryTimeoutId && clearTimeout(e.retryTimeoutId);
              var n = t.closeReason === a.Disconnected;
              if (
                (e.channelRequests.forEach(r => {
                  var o = n && !r.closeRequested;
                  if (r.isOpen)
                    e
                      .getChannel(r.channelId)
                      .handleClose({ initiator: "client", willReconnect: o }),
                      delete e.channels[r.channelId];
                  else if (!o)
                    if (e.connectOptions)
                      r.openChannelCb({
                        channel: null,
                        error: new Error("Failed to open"),
                        context: e.connectOptions.context,
                      });
                    else if (t.closeReason !== a.Error)
                      return void e.onUnrecoverableError(
                        new Error("Expected connectionOptions")
                      );
                  var i = r.cleanupCb;
                  (r.channelId = null),
                    (r.isOpen = !1),
                    (r.cleanupCb = null),
                    (r.closeRequested = !1),
                    i && i({ initiator: "client", willReconnect: o });
                }),
                e.channels[0] &&
                  (e.channels[0].handleClose({
                    initiator: "client",
                    willReconnect: n,
                  }),
                  delete e.channels[0]),
                0 === Object.keys(e.channels).length ||
                  ((e.channels = {}), t.closeReason === a.Error))
              ) {
                if (e.chan0CleanupCb)
                  e.chan0CleanupCb({ initiator: "client", willReconnect: n }),
                    (e.chan0CleanupCb = null);
                else if (!n)
                  if (e.chan0Cb && e.connectOptions)
                    e.chan0Cb({
                      channel: null,
                      error: new Error("Failed to open"),
                      context: e.connectOptions.context,
                    });
                  else if (t.closeReason !== a.Error)
                    return void e.onUnrecoverableError(
                      new Error(
                        "open should have been called before `handleClose`"
                      )
                    );
                if (((e.connectionState = A.ConnectionState.DISCONNECTED), !n))
                  return (e.chan0Cb = null), void (e.connectOptions = null);
                e.debug({ type: "breadcrumb", message: "reconnecting" }),
                  e.connect({ tryCount: 0, websocketFailureCount: 0 });
              } else
                e.onUnrecoverableError(
                  new Error(
                    "channels object should be empty after channelRequests and chan0 cleanup"
                  )
                );
            }),
            (this.cleanupSocket = () => {
              var t = e.ws;
              e.debug({
                type: "breadcrumb",
                message: "cleanupSocket",
                data: {
                  hasWs: Boolean(t),
                  readyState: t ? t.readyState : null,
                  connectionState: e.connectionState,
                },
              }),
                t &&
                  ((e.ws = null),
                  (e.connectionMetadata = null),
                  (t.onmessage = null),
                  (t.onclose = null),
                  (t.onerror = () => {}),
                  (0 !== t.readyState && 1 !== t.readyState) ||
                    (e.debug({ type: "breadcrumb", message: "wsclose" }),
                    t.close()));
            }),
            (this.onUnrecoverableError = t => {
              if (
                (e.debug({
                  type: "breadcrumb",
                  message: "unrecoverable error",
                  data: { message: t.message },
                }),
                e.connectionState !== A.ConnectionState.DISCONNECTED)
              )
                try {
                  e.handleClose({ closeReason: a.Error, error: t });
                } catch (n) {
                  console.error(
                    "handleClose errored during unrecoverable error"
                  ),
                    console.error(n);
                }
              if (!e.userUnrecoverableErrorHandler)
                throw (
                  (console.error(
                    "Please supply your own unrecoverable error handling function"
                  ),
                  t)
                );
              e.userUnrecoverableErrorHandler(t);
            }),
            (this.ws = null),
            (this.channels = {}),
            (this.connectOptions = null),
            (this.chan0Cb = null),
            (this.chan0CleanupCb = null),
            (this.connectionState = A.ConnectionState.DISCONNECTED),
            (this.debug = () => {}),
            (this.userUnrecoverableErrorHandler = null),
            (this.channelRequests = []),
            (this.retryTimeoutId = null),
            (this.fetchTokenAbortController = null),
            (this.destroyed = !1),
            (this.connectionMetadata = null),
            this.debug({ type: "breadcrumb", message: "constructor" });
        };
      t.Client = p;
    },
    fA4Q(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return h;
      }),
        n.d(t, "b", () => {
          return k;
        });
      var r = n("vJKn"),
        o = n.n(r),
        i = n("cpVT"),
        a = n("rg98"),
        s = n("dhJC"),
        c = n("WK0V"),
        u = n("zgDP");
      function l(e) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = Object(a.a)(
          o.a.mark(function e(t) {
            var n, r, i;
            return o.a.wrap(e => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = t.client),
                    (r = t.args),
                    (i = t.env),
                    e.abrupt(
                      "return",
                      new Promise(e => {
                        var t = n.openChannel(
                          { service: "exec" },
                          n => {
                            var o = n.error,
                              a = n.channel;
                            if (o) e({ error: o.message, output: null });
                            else {
                              if (!a) throw new Error("Expected channel");
                              var s = "";
                              a.onCommand(e => {
                                e.output && (s += e.output);
                              }),
                                a
                                  .request({ exec: { args: r, env: i } })
                                  .then(n => {
                                    n.channelClosed
                                      ? e({
                                          error: "Channel closed",
                                          output: s || null,
                                        })
                                      : ("open" === a.status && t(),
                                        n.error
                                          ? e({
                                              error: n.error,
                                              output: s || null,
                                            })
                                          : e({ output: s, error: null }));
                                  });
                            }
                          }
                        );
                      })
                    )
                  ;
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var h,
        p = n("JxgA"),
        f = n("TjQ3");
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(t => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(t => {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(t => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function y(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = Object(a.a)(
          o.a.mark(function e(t) {
            var n, r, i, a, s, c, l, A;
            return o.a.wrap(
              e => {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.replId),
                        (r = t.isVnc),
                        (i = t.canWrite),
                        (a = t.isLoggedIn),
                        (s = t.overrideClusterMetadata),
                        (c = e => {
                          Object(u.track)(u.events.GOVAL_CONNECTION_FAILED, {
                            error: (e && e.message) || "unidentified failure",
                            host: window.location.hostname,
                            replId: n,
                            reason: "captcha",
                            context: "services",
                          });
                        }),
                        (l = {
                          url: "/data/repls/".concat(
                            n,
                            "/get_connection_metadata"
                          ),
                          overrideClusterMetadata: s,
                          clientVersion: "6c18b5f",
                          hCaptchaSiteKey: p.a,
                          flags: {},
                        }),
                        !a)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return", Object(f.a)(l));
                    case 5:
                      return (e.prev = 5), (e.next = 8), Object(p.b)();
                    case 8:
                      return (
                        (A = e.sent),
                        e.abrupt(
                          "return",
                          Object(f.a)(b(b({}, l), {}, { captcha: A }))
                        )
                      );
                    case 12:
                      return (
                        (e.prev = 12),
                        (e.t0 = e.catch(5)),
                        c(e.t0),
                        e.abrupt(
                          "return",
                          y({
                            replId: n,
                            isVnc: r,
                            canWrite: i,
                            overrideClusterMetadata: s,
                          })
                        )
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[5, 12]]
            );
          })
        )).apply(this, arguments);
      }
      !(e => {
        (e.CONNECTING = "CONNECTING"),
          (e.CONNECTED = "CONNECTED"),
          (e.DISCONNECTED = "DISCONNECTED");
      })(h || (h = {}));
      var v = n("Fz/E"),
        m = n("P2Oe"),
        C = n("zV7b");
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(t => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(t => {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(t => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var O;
      function k(e) {
        var t = e.onUnrecoverableError,
          n = Object(v.a)(),
          r = null,
          i = h.DISCONNECTED,
          A = e => {
            i !== e && ((i = e), n.emit(O.CONNECTION_STATE_CHANGE, i));
          },
          p = new c.Client(),
          f = null;
        p.setUnrecoverableErrorHandler(t);
        var d = window.location.search.includes("debug=1");
        return d &&
          p.setDebugFunc(e => {
            "log" === e.type &&
              console.log(
                "in" === e.log.direction ? "--\x3e" : "<--",
                e.log.cmd
              );
          }),
        {
          onPortOpened(e) {
            return n.on(O.PORT_OPEN, e),
            () => {
              n.removeListener(O.PORT_OPEN, e);
            }
          ;
          },
          onConnectionStateChanged(e) {
            return n.on(O.CONNECTION_STATE_CHANGE, e),
            () => {
              n.removeListener(O.CONNECTION_STATE_CHANGE, e);
            }
          ;
          },
          connect(e) {
            var t = e.repl,
              l = e.currentUser,
              b = e.overrideClusterMetadata,
              g = e.customConnectionMetadata,
              v = e.fetchConnectionMetadataExtras,
              m = Object(s.a)(e, [
                "repl",
                "currentUser",
                "overrideClusterMetadata",
                "customConnectionMetadata",
                "fetchConnectionMetadataExtras",
              ]);
            (r = t), i !== h.DISCONNECTED && p.close();
            var w = Boolean(l),
              k = null,
              S = {
                context: { repl: t, currentUser: l },
                fetchConnectionMetadata: (() => {
                  var e = Object(a.a)(
                    o.a.mark(function e(n) {
                      var r, i;
                      return o.a.wrap(
                        e => {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Object(C.a)();
                              case 2:
                                if (!n.aborted) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return", {
                                  error:
                                    c.FetchConnectionMetadataError.Aborted,
                                });
                              case 4:
                                if (b || !g || k === g.token) {
                                  e.next = 8;
                                  break;
                                }
                                return (
                                  (f = g),
                                  (k = g.token),
                                  e.abrupt(
                                    "return",
                                    E(E({}, g), {}, { error: null })
                                  )
                                );
                              case 8:
                                if (
                                  ((e.prev = 8), !m.fetchConnectionMetadata)
                                ) {
                                  e.next = 15;
                                  break;
                                }
                                return (
                                  (e.next = 12), m.fetchConnectionMetadata()
                                );
                              case 12:
                                (r = e.sent), (e.next = 18);
                                break;
                              case 15:
                                return (
                                  (e.next = 17),
                                  y(
                                    E(
                                      {
                                        replId: t.id,
                                        isVnc: Boolean(t.config.isVnc),
                                        canWrite: Boolean(
                                          null ===
                                            (i = t.currentUserPermissions) ||
                                            void 0 === i
                                            ? void 0
                                            : i.containerWrite
                                        ),
                                        isLoggedIn: w,
                                        overrideClusterMetadata: b,
                                        currentUser: l,
                                      },
                                      v
                                    )
                                  )
                                );
                              case 17:
                                r = e.sent;
                              case 18:
                                e.next = 27;
                                break;
                              case 20:
                                (e.prev = 20),
                                  (e.t0 = e.catch(8)),
                                  (e.t1 = (e.t0 && e.t0.statusCode) || 500),
                                  (e.next =
                                    408 === e.t1 ||
                                    409 === e.t1 ||
                                    429 === e.t1 ||
                                    502 === e.t1 ||
                                    503 === e.t1 ||
                                    504 === e.t1
                                      ? 25
                                      : 26);
                                break;
                              case 25:
                                return e.abrupt("return", {
                                  error:
                                    c.FetchConnectionMetadataError.Retriable,
                                });
                              case 26:
                                throw e.t0;
                              case 27:
                                if (!n.aborted) {
                                  e.next = 29;
                                  break;
                                }
                                return e.abrupt("return", {
                                  error:
                                    c.FetchConnectionMetadataError.Aborted,
                                });
                              case 29:
                                return (
                                  (f = r),
                                  d && console.log("connecting", r),
                                  e.abrupt(
                                    "return",
                                    E(E({}, r), {}, { error: null })
                                  )
                                );
                              case 32:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[8, 20]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              x = window.performance.now(),
              B = 0;
            p.open(S, e => {
              var r = e.channel;
              if (e.error) return A(h.DISCONNECTED), () => {};
              if (!r) throw new Error("Expected channel");
              d && console.log("connected", { replId: t.id });
              var o = r.onCommand(e => {
                switch (e.body) {
                  case "portOpen":
                    if (!e.portOpen)
                      throw new Error(
                        "portOpen only handles portOpen commands"
                      );
                    var t = e.portOpen.port || 0;
                    if (5901 === t) return;
                    n.emit(O.PORT_OPEN, {
                      port: t,
                      isVnc: 5900 === t,
                      forwarded: Boolean(e.portOpen.forwarded),
                    });
                }
              });
              window.v6ws = p.ws;
              var i = t.id,
                a = t.language;
              return Object(u.track)(u.events.CONTAINER_SERVICE_CONNECTED, {
                time: window.performance.now() - x,
                reconnect: B,
                replId: i,
                language: a,
              }),
              A(h.CONNECTED),
              e => {
                if (
                  (o(), (f = null), "willReconnect" in e && e.willReconnect)
                )
                  return (
                    (x = window.performance.now()),
                    B++,
                    void A(h.CONNECTING)
                  );
                A(h.DISCONNECTED);
              }
            ;
            }),
              A(h.CONNECTING);
          },
          openChannel(e, t) {
            var n = window.performance.now(),
              o = 0,
              i = e.name,
              a = e.service;
            return p.openChannel(e, e => {
              var s, c, l;
              Object(u.track)(u.events.OPEN_CHANNEL_CALLBACK_CALLED, {
                timeToOpen: window.performance.now() - n,
                replId: null === (s = r) || void 0 === s ? void 0 : s.id,
                language:
                  null === (c = r) || void 0 === c ? void 0 : c.language,
                slug: null === (l = r) || void 0 === l ? void 0 : l.slug,
                error: e.error,
                reconnect: o,
                name: i,
                service: a,
              });
              var A = t(e);
              return e => {
                A && A(e), (n = window.performance.now()), o++;
              };
            });
          },
          getConnectionState() {
            return i;
          },
          exec: (() => {
            var e = Object(a.a)(
              o.a.mark(function e() {
                var t,
                  n,
                  r,
                  i = arguments;
                return o.a.wrap(e => {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (
                          t = i.length, n = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          n[r] = i[r];
                        return e.abrupt("return", l({ client: p, args: n }));
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          execWithEnv: (() => {
            var e = Object(a.a)(
              o.a.mark(function e(t) {
                var n,
                  r,
                  i,
                  a = arguments;
                return o.a.wrap(e => {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (
                          n = a.length,
                            r = new Array(n > 1 ? n - 1 : 0),
                            i = 1;
                          i < n;
                          i++
                        )
                          r[i - 1] = a[i];
                        return e.abrupt(
                          "return",
                          l({ client: p, args: r, env: t })
                        );
                      case 2:
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
          close() {
            (r = null), i !== h.DISCONNECTED && p.close();
          },
          destroy() {
            (r = null), p.destroy(), n.removeAllListeners();
          },
          client() {
            return p;
          },
          getConnectionMetadata() {
            return f;
          },
          getRepl() {
            return r;
          },
          getVncUrl() {
            if (!f || i !== h.CONNECTED)
              throw new Error(
                "Cannot get vnc url when container is not connected"
              );
            return Object(m.c)(f.token);
          },
        };
      }
      !(e => {
        (e.CONNECTION_STATE_CHANGE = "CONNECTION_STATE_CHANGE"),
          (e.PORT_OPEN = "PORT_OPEN");
      })(O || (O = {}));
    },
    gnSh(e, t, n) {
      function r(e) {
        if (e)
          return (e => {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e;
          })(e);
      }
      (e.exports = r),
        (r.prototype.on = r.prototype.addEventListener =
          function (e, t) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(
                t
              ),
              this
            );
          }),
        (r.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (r.prototype.off =
          r.prototype.removeListener =
          r.prototype.removeAllListeners =
          r.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                r = this._callbacks["$" + e];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + e], this;
              for (var o = 0; o < r.length; o++)
                if ((n = r[o]) === t || n.fn === t) {
                  r.splice(o, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + e], this;
            }),
        (r.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks["$" + e],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r)
              n[r].apply(this, t);
          }
          return this;
        }),
        (r.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (r.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
    },
    "hKI/": function (e, t, n) {
      ((t => {
        var n = "Expected a function",
          r = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          i = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          s = parseInt,
          c = "object" == typeof t && t && t.Object === Object && t,
          u = "object" == typeof self && self && self.Object === Object && self,
          l = c || u || Function("return this")(),
          A = Object.prototype.toString,
          h = Math.max,
          p = Math.min,
          f = () => {
            return l.Date.now();
          };
        function d(e, t, r) {
          var o,
            i,
            a,
            s,
            c,
            u,
            l = 0,
            A = !1,
            d = !1,
            g = !0;
          if ("function" != typeof e) throw new TypeError(n);
          function v(t) {
            var n = o,
              r = i;
            return (o = i = void 0), (l = t), (s = e.apply(r, n));
          }
          function m(e) {
            return (l = e), (c = setTimeout(w, t)), A ? v(e) : s;
          }
          function C(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (d && e - l >= a);
          }
          function w() {
            var e = f();
            if (C(e)) return E(e);
            c = setTimeout(w, (e => {
              var n = t - (e - u);
              return d ? p(n, a - (e - l)) : n;
            })(e));
          }
          function E(e) {
            return (c = void 0), g && o ? v(e) : ((o = i = void 0), s);
          }
          function O() {
            var e = f(),
              n = C(e);
            if (((o = arguments), (i = this), (u = e), n)) {
              if (void 0 === c) return m(u);
              if (d) return (c = setTimeout(w, t)), v(u);
            }
            return void 0 === c && (c = setTimeout(w, t)), s;
          }
          return (t = y(t) || 0),
          b(r) &&
            ((A = !!r.leading),
            (a = (d = "maxWait" in r) ? h(y(r.maxWait) || 0, t) : a),
            (g = "trailing" in r ? !!r.trailing : g)),
          (O.cancel = () => {
            void 0 !== c && clearTimeout(c),
              (l = 0),
              (o = u = i = c = void 0);
          }),
          (O.flush = () => {
            return void 0 === c ? s : E(f());
          }),
          O
        ;
        }
        function b(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function y(e) {
          if ("number" == typeof e) return e;
          if ((e => {
            return "symbol" == typeof e ||
            ((e => {
              return !!e && "object" == typeof e;
            })(e) && "[object Symbol]" == A.call(e));
          })(e))
            return NaN;
          if (b(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = b(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(r, "");
          var n = i.test(e);
          return n || a.test(e)
            ? s(e.slice(2), n ? 2 : 8)
            : o.test(e)
            ? NaN
            : +e;
        }
      }).call(this, n("ntbh")));
    },
    koLh(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return A;
      });
      var r = n("xvhg"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("hKI/"),
        s = n.n(a),
        c = n("9/5/"),
        u = n.n(c),
        l = n("7njZ");
      function A(e, t) {
        var n = Object(l.a)(),
          o = i.a.useRef(e);
        o.current = e;
        var a = t || {},
          c = a.type,
          A = a.wait,
          h = i.a.useMemo(
            () => {
              return c
                ? ("debounce" === c ? u.a : s.a)(e => {
                    n.current && o.current(e);
                  }, A)
                : e => {
                    n.current && o.current(e);
                  };
            },
            [c, A]
          ),
          p = i.a.useRef(h);
        p.current = h;
        var f = i.a.useState(null),
          d = Object(r.a)(f, 2),
          b = d[0],
          y = d[1],
          g = i.a.useCallback(
            e => {
              y(e);
            },
            [y]
          ),
          v = i.a.useRef(null),
          m = i.a.useRef({ width: void 0, height: void 0 });
        return i.a.useEffect(() => {
          var e = new window.ResizeObserver(e => {
            var t = e[0];
            if (t) {
              var r = Math.round(t.contentRect.width),
                o = Math.round(t.contentRect.height);
              (m.current.width === r && m.current.height === o) ||
                window.requestAnimationFrame(() => {
                  n.current && p.current({ width: r, height: o });
                });
            }
          });
          return (v.current = e),
          () => {
            e.disconnect(), (v.current = null);
          }
        ;
        }, []),
        i.a.useEffect(
          () => {
            if (v.current && b)
              return v.current.observe(b),
              () => {
                v.current && v.current.unobserve(b),
                  "cancel" in p.current && p.current.cancel();
              }
            ;
          },
          [b]
        ),
        g
      ;
      }
    },
    "m+yM": function (e, t, n) {
      function r(e) {
        var n;
        function r() {
          if (r.enabled) {
            var e = r,
              o = +new Date(),
              i = o - (n || o);
            (e.diff = i), (e.prev = n), (e.curr = o), (n = o);
            for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
              a[s] = arguments[s];
            (a[0] = t.coerce(a[0])),
              "string" !== typeof a[0] && a.unshift("%O");
            var c = 0;
            (a[0] = a[0].replace(/%([a-zA-Z%])/g, (n, r) => {
              if ("%%" === n) return n;
              c++;
              var o = t.formatters[r];
              if ("function" === typeof o) {
                var i = a[c];
                (n = o.call(e, i)), a.splice(c, 1), c--;
              }
              return n;
            })),
              t.formatArgs.call(e, a);
            var u = r.log || t.log || console.log.bind(console);
            u.apply(e, a);
          }
        }
        return (r.namespace = e),
        (r.enabled = t.enabled(e)),
        (r.useColors = t.useColors()),
        (r.color = (e => {
          var n,
            r = 0;
          for (n in e) (r = (r << 5) - r + e.charCodeAt(n)), (r |= 0);
          return t.colors[Math.abs(r) % t.colors.length];
        })(e)),
        (r.destroy = o),
        "function" === typeof t.init && t.init(r),
        t.instances.push(r),
        r
      ;
      }
      function o() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0);
      }
      ((t = e.exports = r.debug = r.default = r).coerce = e => {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = () => {
          t.enable("");
        }),
        (t.enable = e => {
          var n;
          t.save(e), (t.names = []), (t.skips = []);
          var r = ("string" === typeof e ? e : "").split(/[\s,]+/),
            o = r.length;
          for (n = 0; n < o; n++)
            r[n] &&
              ("-" === (e = r[n].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
          for (n = 0; n < t.instances.length; n++) {
            var i = t.instances[n];
            i.enabled = t.enabled(i.namespace);
          }
        }),
        (t.enabled = e => {
          if ("*" === e[e.length - 1]) return !0;
          var n, r;
          for (n = 0, r = t.skips.length; n < r; n++)
            if (t.skips[n].test(e)) return !1;
          for (n = 0, r = t.names.length; n < r; n++)
            if (t.names[n].test(e)) return !0;
          return !1;
        }),
        (t.humanize = n("FGiv")),
        (t.instances = []),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    qzUi(e, t, n) {
      "use strict";
      n.d(t, "b", () => {
        return u;
      }),
        n.d(t, "a", () => {
          return A;
        });
      var r = n("vJKn"),
        o = n.n(r),
        i = n("xvhg"),
        a = n("rg98"),
        s = n("g7Gn"),
        c = n("IUvJ");
      function u() {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = Object(a.a)(
          o.a.mark(function e() {
            var t, n, r, a, s, u;
            return o.a.wrap(e => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Promise.all([Object(c.a)(), A()]);
                  case 2:
                    return (t = e.sent),
                    (n = Object(i.a)(t, 1)),
                    (r = n[0]),
                    (a = r.xterm),
                    (s = r.fitAddon),
                    (u = r.searchAddon),
                    (a.fit = () => {
                      return s.fit();
                    }),
                    (a.searchAddon = u),
                    e.abrupt("return", a)
                  ;
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function A() {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = Object(a.a)(
          o.a.mark(function e() {
            return o.a.wrap(e => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return f(),
                    e.abrupt(
                      "return",
                      d().catch(e => {
                        s.c(e);
                      })
                    )
                  ;
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var p = "replit-icons-font";
      function f() {
        if (!document.getElementById(p)) {
          var e = n("BQO9"),
            t = n("dDrW"),
            r = document.createElement("style");
          (r.id = p),
            (r.type = "text/css"),
            r.appendChild(
              document.createTextNode(
                "\n@font-face {\n  font-family: 'replit-icons';\n  font-style: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  src: url("
                  .concat(e, ") format('woff'),\n    url(")
                  .concat(t, ") format('truetype');\n}")
              )
            ),
            document.head.appendChild(r);
        }
      }
      function d() {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = Object(a.a)(
          o.a.mark(function e() {
            var t, n, r, i, a;
            return o.a.wrap(e => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = "normal normal 100px replit-icons"),
                      !(n = document.fonts))
                    ) {
                      e.next = 6;
                      break;
                    }
                    if (!n.check(t)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    return e.abrupt(
                      "return",
                      new Promise((e, r) => {
                        var o = !1,
                          i = setTimeout(() => {
                            (o = !0), r(new Error("Font loading timed out"));
                          }, 3e3);
                        n.load(t, String.fromCharCode(61095))
                          .then(() => {
                            o ||
                              (clearTimeout(i),
                              n.check(t)
                                ? e()
                                : r(
                                    new Error(
                                      "document.font.load resolved without loading"
                                    )
                                  ));
                          })
                          .catch(e => {
                            o || (clearTimeout(i), r(e));
                          });
                      })
                    );
                  case 6:
                    if (
                      (((r = document.createElement("span")).innerText =
                        String.fromCharCode(61095)),
                      (r.style.font = "normal normal 100px sans-serif"),
                      (r.style.position = "absolute"),
                      (r.style.left = "-9999px"),
                      (r.style.top = "-9999px"),
                      document.body.appendChild(r),
                      (i = r.offsetWidth),
                      (r.style.font = t),
                      !(a = () => {
                        return i !== r.offsetWidth;
                      })())
                    ) {
                      e.next = 18;
                      break;
                    }
                    return e.abrupt("return");
                  case 18:
                    return e.abrupt(
                      "return",
                      new Promise((e, t) => {
                        var n = setInterval(() => {
                            a() &&
                              (clearInterval(n),
                              clearTimeout(o),
                              document.body.removeChild(r),
                              e());
                          }, 50),
                          o = setTimeout(() => {
                            clearInterval(n),
                              document.body.removeChild(r),
                              a()
                                ? e()
                                : t(new Error("Font loading timed out"));
                          }, 3e3);
                      })
                    );
                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    r8CS(e, t) {
      (t.encode = e => {
        var t = "";
        for (var n in e)
          e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
        return t;
      }),
        (t.decode = e => {
          for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
            var i = n[r].split("=");
            t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
          }
          return t;
        });
    },
    "rx/v": function (e, t, n) {
      var r = n("yeub"),
        o = n("HiSk");
    },
    u0Ev(e, t, n) {
      ((t => {
        var r,
          o,
          i = n("O9h/"),
          a = n("E+TZ"),
          s = n("r8CS"),
          c = n("Yvos"),
          u = n("Aplp"),
          l = n("EuBs")("engine.io-client:websocket");
        if (
          ("undefined" !== typeof WebSocket
            ? (r = WebSocket)
            : "undefined" !== typeof self &&
              (r = self.WebSocket || self.MozWebSocket),
          "undefined" === typeof window)
        )
          try {
            o = n(25);
          } catch (p) {}
        var A = r || o;
        function h(e) {
          e && e.forceBase64 && (this.supportsBinary = !1),
            (this.perMessageDeflate = e.perMessageDeflate),
            (this.usingBrowserWebSocket = r && !e.forceNode),
            (this.protocols = e.protocols),
            this.usingBrowserWebSocket || (A = o),
            i.call(this, e);
        }
        (e.exports = h),
          c(h, i),
          (h.prototype.name = "websocket"),
          (h.prototype.supportsBinary = !0),
          (h.prototype.doOpen = function () {
            if (this.check()) {
              var e = this.uri(),
                t = this.protocols,
                n = {};
              this.isReactNative ||
                ((n.agent = this.agent),
                (n.perMessageDeflate = this.perMessageDeflate),
                (n.pfx = this.pfx),
                (n.key = this.key),
                (n.passphrase = this.passphrase),
                (n.cert = this.cert),
                (n.ca = this.ca),
                (n.ciphers = this.ciphers),
                (n.rejectUnauthorized = this.rejectUnauthorized)),
                this.extraHeaders && (n.headers = this.extraHeaders),
                this.localAddress && (n.localAddress = this.localAddress);
              try {
                this.ws =
                  this.usingBrowserWebSocket && !this.isReactNative
                    ? t
                      ? new A(e, t)
                      : new A(e)
                    : new A(e, t, n);
              } catch (r) {
                return this.emit("error", r);
              }
              void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                this.ws.supports && this.ws.supports.binary
                  ? ((this.supportsBinary = !0),
                    (this.ws.binaryType = "nodebuffer"))
                  : (this.ws.binaryType = "arraybuffer"),
                this.addEventListeners();
            }
          }),
          (h.prototype.addEventListeners = function () {
            var e = this;
            (this.ws.onopen = () => {
              e.onOpen();
            }),
              (this.ws.onclose = () => {
                e.onClose();
              }),
              (this.ws.onmessage = t => {
                e.onData(t.data);
              }),
              (this.ws.onerror = t => {
                e.onError("websocket error", t);
              });
          }),
          (h.prototype.write = function (e) {
            var n = this;
            this.writable = !1;
            for (var r = e.length, o = 0, i = r; o < i; o++)
              !(e => {
                a.encodePacket(e, n.supportsBinary, o => {
                  if (!n.usingBrowserWebSocket) {
                    var i = {};
                    if (
                      (e.options && (i.compress = e.options.compress),
                      n.perMessageDeflate)
                    )
                      ("string" === typeof o ? t.byteLength(o) : o.length) <
                        n.perMessageDeflate.threshold && (i.compress = !1);
                  }
                  try {
                    n.usingBrowserWebSocket ? n.ws.send(o) : n.ws.send(o, i);
                  } catch (p) {
                    l("websocket closed before onclose event");
                  }
                  --r || s();
                });
              })(e[o]);
            function s() {
              n.emit("flush"),
                setTimeout(() => {
                  (n.writable = !0), n.emit("drain");
                }, 0);
            }
          }),
          (h.prototype.onClose = function () {
            i.prototype.onClose.call(this);
          }),
          (h.prototype.doClose = function () {
            "undefined" !== typeof this.ws && this.ws.close();
          }),
          (h.prototype.uri = function () {
            var e = this.query || {},
              t = this.secure ? "wss" : "ws",
              n = "";
            return (
              this.port &&
                (("wss" === t && 443 !== Number(this.port)) ||
                  ("ws" === t && 80 !== Number(this.port))) &&
                (n = ":" + this.port),
              this.timestampRequests && (e[this.timestampParam] = u()),
              this.supportsBinary || (e.b64 = 1),
              (e = s.encode(e)).length && (e = "?" + e),
              t +
                "://" +
                (-1 !== this.hostname.indexOf(":")
                  ? "[" + this.hostname + "]"
                  : this.hostname) +
                n +
                this.path +
                e
            );
          }),
          (h.prototype.check = function () {
            return (
              !!A && !("__initialize" in A && this.name === h.prototype.name)
            );
          });
      }).call(this, n("HDXh").Buffer));
    },
    yLpU(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.FetchConnectionMetadataError = t.ConnectionState = void 0, (e => {
        (e[(e.CONNECTING = 0)] = "CONNECTING"),
          (e[(e.CONNECTED = 1)] = "CONNECTED"),
          (e[(e.DISCONNECTED = 2)] = "DISCONNECTED");
      })(t.ConnectionState || (t.ConnectionState = {})), (e => {
        (e.Aborted = "Aborted"), (e.Retriable = "Retriable");
      })(t.FetchConnectionMetadataError ||
        (t.FetchConnectionMetadataError = {}));
    },
    zV7b(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return a;
      });
      var r = n("vJKn"),
        o = n.n(r),
        i = n("rg98");
      function a() {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = Object(i.a)(
          o.a.mark(function e() {
            return o.a.wrap(e => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ("undefined" !== typeof document) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (document.hidden) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    return e.abrupt(
                      "return",
                      new Promise(e => {
                        document.addEventListener(
                          "visibilitychange",
                          function t() {
                            document.hidden ||
                              (document.removeEventListener(
                                "visibilitychange",
                                t
                              ),
                              e());
                          }
                        );
                      })
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
  },
]);
