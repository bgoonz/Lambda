(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [25],
  {
    "/7TX": function (e, t, r) {
      "use strict";
      const n =
        (this && this.__extends) ||
        (() => {
          const e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              ((e, t) => {
                e.__proto__ = t;
              })) ||
            ((e, t) => {
              for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            });
          return (t, r) => {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i;
      const o = r("1vg8");
      !((e) => {
        (e.ParseError = -32700),
          (e.InvalidRequest = -32600),
          (e.MethodNotFound = -32601),
          (e.InvalidParams = -32602),
          (e.InternalError = -32603),
          (e.serverErrorStart = -32099),
          (e.serverErrorEnd = -32e3),
          (e.ServerNotInitialized = -32002),
          (e.UnknownErrorCode = -32001),
          (e.RequestCancelled = -32800),
          (e.MessageWriteError = 1),
          (e.MessageReadError = 2);
      })((i = t.ErrorCodes || (t.ErrorCodes = {})));
      const s = ((e) => {
        function t(r, n, s) {
          const a = e.call(this, n) || this;
          return (
            (a.code = o.number(r) ? r : i.UnknownErrorCode),
            (a.data = s),
            Object.setPrototypeOf(a, t.prototype),
            a
          );
        }
        return (
          n(t, e),
          (t.prototype.toJson = function () {
            return { code: this.code, message: this.message, data: this.data };
          }),
          t
        );
      })(Error);
      t.ResponseError = s;
      const a = (() => {
        function e(e, t) {
          (this._method = e), (this._numberOfParams = t);
        }
        return (
          Object.defineProperty(e.prototype, "method", {
            get() {
              return this._method;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "numberOfParams", {
            get() {
              return this._numberOfParams;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
      t.AbstractMessageType = a;
      const u = ((e) => {
        function t(t) {
          const r = e.call(this, t, 0) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType0 = u;
      const c = ((e) => {
        function t(t) {
          const r = e.call(this, t, 1) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType = c;
      const f = ((e) => {
        function t(t) {
          const r = e.call(this, t, 1) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType1 = f;
      const d = ((e) => {
        function t(t) {
          const r = e.call(this, t, 2) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType2 = d;
      const l = ((e) => {
        function t(t) {
          const r = e.call(this, t, 3) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType3 = l;
      const p = ((e) => {
        function t(t) {
          const r = e.call(this, t, 4) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType4 = p;
      const h = ((e) => {
        function t(t) {
          const r = e.call(this, t, 5) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType5 = h;
      const v = ((e) => {
        function t(t) {
          const r = e.call(this, t, 6) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType6 = v;
      const m = ((e) => {
        function t(t) {
          const r = e.call(this, t, 7) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType7 = m;
      const y = ((e) => {
        function t(t) {
          const r = e.call(this, t, 8) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType8 = y;
      const g = ((e) => {
        function t(t) {
          const r = e.call(this, t, 9) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.RequestType9 = g;
      const _ = ((e) => {
        function t(t) {
          const r = e.call(this, t, 1) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType = _;
      const w = ((e) => {
        function t(t) {
          const r = e.call(this, t, 0) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType0 = w;
      const R = ((e) => {
        function t(t) {
          const r = e.call(this, t, 1) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType1 = R;
      const T = ((e) => {
        function t(t) {
          const r = e.call(this, t, 2) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType2 = T;
      const N = ((e) => {
        function t(t) {
          const r = e.call(this, t, 3) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType3 = N;
      const b = ((e) => {
        function t(t) {
          const r = e.call(this, t, 4) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType4 = b;
      const E = ((e) => {
        function t(t) {
          const r = e.call(this, t, 5) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType5 = E;
      const C = ((e) => {
        function t(t) {
          const r = e.call(this, t, 6) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType6 = C;
      const k = ((e) => {
        function t(t) {
          const r = e.call(this, t, 7) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType7 = k;
      const O = ((e) => {
        function t(t) {
          const r = e.call(this, t, 8) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      t.NotificationType8 = O;
      const q = ((e) => {
        function t(t) {
          const r = e.call(this, t, 9) || this;
          return (r._ = void 0), r;
        }
        return n(t, e), t;
      })(a);
      (t.NotificationType9 = q),
        (t.isRequestMessage = (e) => {
          const t = e;
          return t && o.string(t.method) && (o.string(t.id) || o.number(t.id));
        }),
        (t.isNotificationMessage = (e) => {
          const t = e;
          return t && o.string(t.method) && void 0 === e.id;
        }),
        (t.isResponseMessage = (e) => {
          const t = e;
          return (
            t &&
            (void 0 !== t.result || !!t.error) &&
            (o.string(t.id) || o.number(t.id) || null === t.id)
          );
        });
    },
    "4Wfv": function (e, t, r) {
      "use strict";
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((e) => {
          (e.None = 0), (e.First = 1), (e.Last = 2);
        })((n = t.Touch || (t.Touch = {})));
      const i = (() => {
        function e() {
          (this._map = new Map()),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0);
        }
        return (
          (e.prototype.clear = function () {
            this._map.clear(),
              (this._head = void 0),
              (this._tail = void 0),
              (this._size = 0);
          }),
          (e.prototype.isEmpty = function () {
            return !this._head && !this._tail;
          }),
          Object.defineProperty(e.prototype, "size", {
            get() {
              return this._size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.has = function (e) {
            return this._map.has(e);
          }),
          (e.prototype.get = function (e) {
            const t = this._map.get(e);
            if (t) return t.value;
          }),
          (e.prototype.set = function (e, t, r) {
            void 0 === r && (r = n.None);
            let i = this._map.get(e);
            if (i) (i.value = t), r !== n.None && this.touch(i, r);
            else {
              switch (
                ((i = { key: e, value: t, next: void 0, previous: void 0 }), r)
              ) {
                case n.None:
                  this.addItemLast(i);
                  break;
                case n.First:
                  this.addItemFirst(i);
                  break;
                case n.Last:
                default:
                  this.addItemLast(i);
              }
              this._map.set(e, i), this._size++;
            }
          }),
          (e.prototype.delete = function (e) {
            const t = this._map.get(e);
            return (
              !!t && (this._map.delete(e), this.removeItem(t), this._size--, !0)
            );
          }),
          (e.prototype.shift = function () {
            if (this._head || this._tail) {
              if (!this._head || !this._tail) throw new Error("Invalid list");
              const e = this._head;
              return (
                this._map.delete(e.key),
                this.removeItem(e),
                this._size--,
                e.value
              );
            }
          }),
          (e.prototype.forEach = function (e, t) {
            for (let r = this._head; r; )
              t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this),
                (r = r.next);
          }),
          (e.prototype.forEachReverse = function (e, t) {
            for (let r = this._tail; r; )
              t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this),
                (r = r.previous);
          }),
          (e.prototype.values = function () {
            for (var e = [], t = this._head; t; ) e.push(t.value), (t = t.next);
            return e;
          }),
          (e.prototype.keys = function () {
            for (var e = [], t = this._head; t; ) e.push(t.key), (t = t.next);
            return e;
          }),
          (e.prototype.addItemFirst = function (e) {
            if (this._head || this._tail) {
              if (!this._head) throw new Error("Invalid list");
              (e.next = this._head), (this._head.previous = e);
            } else this._tail = e;
            this._head = e;
          }),
          (e.prototype.addItemLast = function (e) {
            if (this._head || this._tail) {
              if (!this._tail) throw new Error("Invalid list");
              (e.previous = this._tail), (this._tail.next = e);
            } else this._head = e;
            this._tail = e;
          }),
          (e.prototype.removeItem = function (e) {
            if (e === this._head && e === this._tail)
              (this._head = void 0), (this._tail = void 0);
            else if (e === this._head) this._head = e.next;
            else if (e === this._tail) this._tail = e.previous;
            else {
              const t = e.next;
              const r = e.previous;
              if (!t || !r) throw new Error("Invalid list");
              (t.previous = r), (r.next = t);
            }
          }),
          (e.prototype.touch = function (e, t) {
            if (!this._head || !this._tail) throw new Error("Invalid list");
            if (t === n.First || t === n.Last)
              if (t === n.First) {
                if (e === this._head) return;
                var r = e.next;
                var i = e.previous;
                e === this._tail
                  ? ((i.next = void 0), (this._tail = i))
                  : ((r.previous = i), (i.next = r)),
                  (e.previous = void 0),
                  (e.next = this._head),
                  (this._head.previous = e),
                  (this._head = e);
              } else if (t === n.Last) {
                if (e === this._tail) return;
                (r = e.next), (i = e.previous);
                e === this._head
                  ? ((r.previous = void 0), (this._head = r))
                  : ((r.previous = i), (i.next = r)),
                  (e.next = void 0),
                  (e.previous = this._tail),
                  (this._tail.next = e),
                  (this._tail = e);
              }
          }),
          e
        );
      })();
      t.LinkedMap = i;
    },
    ALIN(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r("RUQ2");
      const i = r("uWpP");
      const o = r("vIUA");
      (t.createClientSocketTransport = (e, t) => {
        let r;
        void 0 === t && (t = "utf-8");
        const s = new Promise((e, t) => {
          r = e;
        });
        return new Promise((a, u) => {
          const c = n.createServer((e) => {
            c.close(),
              r([
                new i.SocketMessageReader(e, t),
                new o.SocketMessageWriter(e, t),
              ]);
          });
          c.on("error", u),
            c.listen(e, "127.0.0.1", () => {
              c.removeListener("error", u),
                a({
                  onConnected() {
                    return s;
                  },
                });
            });
        });
      }),
        (t.createServerSocketTransport = (e, t) => {
          void 0 === t && (t = "utf-8");
          const r = n.createConnection(e, "127.0.0.1");
          return [
            new i.SocketMessageReader(r, t),
            new o.SocketMessageWriter(r, t),
          ];
        });
    },
    "C+6V": function (e, t, r) {
      "use strict";
      (function (e) {
        const n =
          (this && this.__extends) ||
          (() => {
            const e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                ((e, t) => {
                  e.__proto__ = t;
                })) ||
              ((e, t) => {
                for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              });
            return (t, r) => {
              function n() {
                this.constructor = t;
              }
              e(t, r),
                (t.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        function i(e) {
          for (const r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = r("1vg8");
        const s = r("/7TX");
        (t.RequestType = s.RequestType),
          (t.RequestType0 = s.RequestType0),
          (t.RequestType1 = s.RequestType1),
          (t.RequestType2 = s.RequestType2),
          (t.RequestType3 = s.RequestType3),
          (t.RequestType4 = s.RequestType4),
          (t.RequestType5 = s.RequestType5),
          (t.RequestType6 = s.RequestType6),
          (t.RequestType7 = s.RequestType7),
          (t.RequestType8 = s.RequestType8),
          (t.RequestType9 = s.RequestType9),
          (t.ResponseError = s.ResponseError),
          (t.ErrorCodes = s.ErrorCodes),
          (t.NotificationType = s.NotificationType),
          (t.NotificationType0 = s.NotificationType0),
          (t.NotificationType1 = s.NotificationType1),
          (t.NotificationType2 = s.NotificationType2),
          (t.NotificationType3 = s.NotificationType3),
          (t.NotificationType4 = s.NotificationType4),
          (t.NotificationType5 = s.NotificationType5),
          (t.NotificationType6 = s.NotificationType6),
          (t.NotificationType7 = s.NotificationType7),
          (t.NotificationType8 = s.NotificationType8),
          (t.NotificationType9 = s.NotificationType9);
        const a = r("uWpP");
        (t.MessageReader = a.MessageReader),
          (t.StreamMessageReader = a.StreamMessageReader),
          (t.IPCMessageReader = a.IPCMessageReader),
          (t.SocketMessageReader = a.SocketMessageReader);
        const u = r("vIUA");
        (t.MessageWriter = u.MessageWriter),
          (t.StreamMessageWriter = u.StreamMessageWriter),
          (t.IPCMessageWriter = u.IPCMessageWriter),
          (t.SocketMessageWriter = u.SocketMessageWriter);
        const c = r("Z5Ki");
        (t.Disposable = c.Disposable),
          (t.Event = c.Event),
          (t.Emitter = c.Emitter);
        const f = r("Ff8q");
        (t.CancellationTokenSource = f.CancellationTokenSource),
          (t.CancellationToken = f.CancellationToken);
        let d;
        let l;
        let p;
        let h;
        let v;
        const m = r("4Wfv");
        i(r("qL5x")),
          i(r("ALIN")),
          ((e) => {
            e.type = new s.NotificationType("$/cancelRequest");
          })(d || (d = {})),
          (t.NullLogger = Object.freeze({
            error() {},
            warn() {},
            info() {},
            log() {},
          })),
          ((e) => {
            (e[(e.Off = 0)] = "Off"),
              (e[(e.Messages = 1)] = "Messages"),
              (e[(e.Verbose = 2)] = "Verbose");
          })((l = t.Trace || (t.Trace = {}))),
          ((e) => {
            (e.fromString = (t) => {
              switch ((t = t.toLowerCase())) {
                case "off":
                  return e.Off;
                case "messages":
                  return e.Messages;
                case "verbose":
                  return e.Verbose;
                default:
                  return e.Off;
              }
            }),
              (e.toString = (t) => {
                switch (t) {
                  case e.Off:
                    return "off";
                  case e.Messages:
                    return "messages";
                  case e.Verbose:
                    return "verbose";
                  default:
                    return "off";
                }
              });
          })((l = t.Trace || (t.Trace = {}))),
          ((e) => {
            e.type = new s.NotificationType("$/setTraceNotification");
          })((p = t.SetTraceNotification || (t.SetTraceNotification = {}))),
          ((e) => {
            e.type = new s.NotificationType("$/logTraceNotification");
          })((h = t.LogTraceNotification || (t.LogTraceNotification = {}))),
          ((e) => {
            (e[(e.Closed = 1)] = "Closed"),
              (e[(e.Disposed = 2)] = "Disposed"),
              (e[(e.AlreadyListening = 3)] = "AlreadyListening");
          })((v = t.ConnectionErrors || (t.ConnectionErrors = {})));
        let y;

        const g = ((e) => {
          function t(r, n) {
            const i = e.call(this, n) || this;
            return (i.code = r), Object.setPrototypeOf(i, t.prototype), i;
          }
          return n(t, e), t;
        })(Error);

        function _(t, r, n, i) {
          let a;
          let u;
          let _ = 0;
          let w = 0;
          let R = 0;
          const T = "2.0";
          let N = void 0;
          const b = Object.create(null);
          let E = void 0;
          const C = Object.create(null);
          let k = new m.LinkedMap();
          let O = Object.create(null);
          let q = Object.create(null);
          let S = l.Off;
          let M = y.New;
          const P = new c.Emitter();
          const j = new c.Emitter();
          const I = new c.Emitter();
          const L = new c.Emitter();
          function x(e) {
            return `req-${e.toString()}`;
          }
          function W(e, t) {
            let r;
            s.isRequestMessage(t)
              ? e.set(x(t.id), t)
              : s.isResponseMessage(t)
              ? e.set(
                  null === (r = t.id)
                    ? `res-unknown-${(++R).toString()}`
                    : `res-${r.toString()}`,
                  t
                )
              : e.set(`not-${(++w).toString()}`, t);
          }
          function U(e) {}
          function D() {
            return M === y.Listening;
          }
          function A() {
            return M === y.Closed;
          }
          function J() {
            return M === y.Disposed;
          }
          function V() {
            (M !== y.New && M !== y.Listening) ||
              ((M = y.Closed), j.fire(void 0));
          }
          function z() {
            a ||
              0 === k.size ||
              (a = e(() => {
                (a = void 0),
                  (() => {
                    if (0 === k.size) return;
                    const e = k.shift();
                    try {
                      s.isRequestMessage(e)
                        ? ((e) => {
                            if (J()) return;
                            function t(t, n, i) {
                              const o = { jsonrpc: T, id: e.id };
                              t instanceof s.ResponseError
                                ? (o.error = t.toJson())
                                : (o.result = void 0 === t ? null : t),
                                B(o, n, i),
                                r.write(o);
                            }
                            function n(t, n, i) {
                              const o = {
                                jsonrpc: T,
                                id: e.id,
                                error: t.toJson(),
                              };
                              B(o, n, i), r.write(o);
                            }
                            function i(t, n, i) {
                              void 0 === t && (t = null);
                              const o = { jsonrpc: T, id: e.id, result: t };
                              B(o, n, i), r.write(o);
                            }
                            !((e) => {
                              if (S === l.Off || !u) return;
                              let t = void 0;
                              S === l.Verbose &&
                                e.params &&
                                (t = `Params: ${JSON.stringify(
                                  e.params,
                                  null,
                                  4
                                )}\n\n`);
                              u.log(
                                `Received request '${e.method} - (${e.id})'.`,
                                t
                              );
                            })(e);
                            let a;
                            let c;
                            const d = b[e.method];
                            d && ((a = d.type), (c = d.handler));
                            const p = Date.now();
                            if (c || N) {
                              const h = new f.CancellationTokenSource();
                              const v = String(e.id);
                              q[v] = h;
                              try {
                                let m = void 0;

                                const y = (m =
                                  void 0 === e.params ||
                                  (void 0 !== a && 0 === a.numberOfParams)
                                    ? c
                                      ? c(h.token)
                                      : N(e.method, h.token)
                                    : o.array(e.params) &&
                                      (void 0 === a || a.numberOfParams > 1)
                                    ? c
                                      ? c.apply(
                                          void 0,
                                          e.params.concat([h.token])
                                        )
                                      : N.apply(
                                          void 0,
                                          [e.method].concat(e.params, [h.token])
                                        )
                                    : c
                                    ? c(e.params, h.token)
                                    : N(e.method, e.params, h.token));

                                m
                                  ? y.then
                                    ? y.then(
                                        (r) => {
                                          delete q[v], t(r, e.method, p);
                                        },
                                        (t) => {
                                          delete q[v],
                                            t instanceof s.ResponseError
                                              ? n(t, e.method, p)
                                              : t && o.string(t.message)
                                              ? n(
                                                  new s.ResponseError(
                                                    s.ErrorCodes.InternalError,
                                                    `Request ${e.method} failed with message: ${t.message}`
                                                  ),
                                                  e.method,
                                                  p
                                                )
                                              : n(
                                                  new s.ResponseError(
                                                    s.ErrorCodes.InternalError,
                                                    `Request ${e.method} failed unexpectedly without providing any details.`
                                                  ),
                                                  e.method,
                                                  p
                                                );
                                        }
                                      )
                                    : (delete q[v], t(m, e.method, p))
                                  : (delete q[v], i(m, e.method, p));
                              } catch (g) {
                                delete q[v],
                                  g instanceof s.ResponseError
                                    ? t(g, e.method, p)
                                    : g && o.string(g.message)
                                    ? n(
                                        new s.ResponseError(
                                          s.ErrorCodes.InternalError,
                                          `Request ${e.method} failed with message: ${g.message}`
                                        ),
                                        e.method,
                                        p
                                      )
                                    : n(
                                        new s.ResponseError(
                                          s.ErrorCodes.InternalError,
                                          `Request ${e.method} failed unexpectedly without providing any details.`
                                        ),
                                        e.method,
                                        p
                                      );
                              }
                            } else
                              n(
                                new s.ResponseError(
                                  s.ErrorCodes.MethodNotFound,
                                  `Unhandled method ${e.method}`
                                ),
                                e.method,
                                p
                              );
                          })(e)
                        : s.isNotificationMessage(e)
                        ? ((e) => {
                            if (J()) return;
                            let t;
                            let r = void 0;
                            if (e.method === d.type.method)
                              t = (e) => {
                                const t = e.id;
                                const r = q[String(t)];
                                r && r.cancel();
                              };
                            else {
                              const i = C[e.method];
                              i && ((t = i.handler), (r = i.type));
                            }
                            if (t || E)
                              try {
                                !((e) => {
                                  if (
                                    S === l.Off ||
                                    !u ||
                                    e.method === h.type.method
                                  )
                                    return;
                                  let t = void 0;
                                  S === l.Verbose &&
                                    (t = e.params
                                      ? `Params: ${JSON.stringify(
                                          e.params,
                                          null,
                                          4
                                        )}\n\n`
                                      : "No parameters provided.\n\n");
                                  u.log(
                                    `Received notification '${e.method}'.`,
                                    t
                                  );
                                })(e),
                                  void 0 === e.params ||
                                  (void 0 !== r && 0 === r.numberOfParams)
                                    ? t
                                      ? t()
                                      : E(e.method)
                                    : o.array(e.params) &&
                                      (void 0 === r || r.numberOfParams > 1)
                                    ? t
                                      ? t.apply(void 0, e.params)
                                      : E.apply(
                                          void 0,
                                          [e.method].concat(e.params)
                                        )
                                    : t
                                    ? t(e.params)
                                    : E(e.method, e.params);
                              } catch (s) {
                                s.message
                                  ? n.error(
                                      `Notification handler '${e.method}' failed with message: ${s.message}`
                                    )
                                  : n.error(
                                      `Notification handler '${e.method}' failed unexpectedly.`
                                    );
                              }
                            else I.fire(e);
                          })(e)
                        : s.isResponseMessage(e)
                        ? ((e) => {
                            if (J()) return;
                            if (null === e.id)
                              e.error
                                ? n.error(
                                    `Received response message without id: Error is: \n${JSON.stringify(
                                      e.error,
                                      void 0,
                                      4
                                    )}`
                                  )
                                : n.error(
                                    "Received response message without id. No further error information provided."
                                  );
                            else {
                              const t = String(e.id);
                              const r = O[t];
                              if (
                                (((e, t) => {
                                  if (S === l.Off || !u) return;
                                  let r = void 0;
                                  S === l.Verbose &&
                                    (e.error && e.error.data
                                      ? (r = `Error data: ${JSON.stringify(
                                          e.error.data,
                                          null,
                                          4
                                        )}\n\n`)
                                      : e.result
                                      ? (r = `Result: ${JSON.stringify(
                                          e.result,
                                          null,
                                          4
                                        )}\n\n`)
                                      : void 0 === e.error &&
                                        (r = "No result returned.\n\n"));
                                  if (t) {
                                    const n = e.error
                                      ? ` Request failed: ${e.error.message} (${e.error.code}).`
                                      : "";
                                    u.log(
                                      `Received response '${t.method} - (${
                                        e.id
                                      })' in ${
                                        Date.now() - t.timerStart
                                      }ms.${n}`,
                                      r
                                    );
                                  } else
                                    u.log(
                                      `Received response ${e.id} without active response promise.`,
                                      r
                                    );
                                })(e, r),
                                r)
                              ) {
                                delete O[t];
                                try {
                                  if (e.error) {
                                    var i = e.error;
                                    r.reject(
                                      new s.ResponseError(
                                        i.code,
                                        i.message,
                                        i.data
                                      )
                                    );
                                  } else {
                                    if (void 0 === e.result)
                                      throw new Error("Should never happen.");
                                    r.resolve(e.result);
                                  }
                                } catch (i) {
                                  i.message
                                    ? n.error(
                                        `Response handler '${r.method}' failed with message: ${i.message}`
                                      )
                                    : n.error(
                                        `Response handler '${r.method}' failed unexpectedly.`
                                      );
                                }
                              }
                            }
                          })(e)
                        : ((e) => {
                            if (!e)
                              return void n.error("Received empty message.");
                            n.error(
                              `Received message which is neither a response nor a notification message:\n${JSON.stringify(
                                e,
                                null,
                                4
                              )}`
                            );
                            const t = e;
                            if (o.string(t.id) || o.number(t.id)) {
                              const r = String(t.id);
                              const i = O[r];
                              i &&
                                i.reject(
                                  new Error(
                                    "The received response has neither a result nor an error property."
                                  )
                                );
                            }
                          })(e);
                    } finally {
                      z();
                    }
                  })();
              }));
          }
          t.onClose(V),
            t.onError((e) => {
              P.fire([e, void 0, void 0]);
            }),
            r.onClose(V),
            r.onError((e) => {
              P.fire(e);
            });
          const F = (e) => {
            try {
              if (s.isNotificationMessage(e) && e.method === d.type.method) {
                const t = x(e.params.id);
                const n = k.get(t);
                if (s.isRequestMessage(n)) {
                  const o =
                    i && i.cancelUndispatched
                      ? i.cancelUndispatched(n, U)
                      : void 0;
                  if (o && (void 0 !== o.error || void 0 !== o.result))
                    return (
                      k.delete(t),
                      (o.id = n.id),
                      B(o, e.method, Date.now()),
                      void r.write(o)
                    );
                }
              }
              W(k, e);
            } finally {
              z();
            }
          };
          function Q(e) {
            if (S !== l.Off && u) {
              let t = void 0;
              S === l.Verbose &&
                e.params &&
                (t = `Params: ${JSON.stringify(e.params, null, 4)}\n\n`),
                u.log(`Sending request '${e.method} - (${e.id})'.`, t);
            }
          }
          function X(e) {
            if (S !== l.Off && u) {
              let t = void 0;
              S === l.Verbose &&
                (t = e.params
                  ? `Params: ${JSON.stringify(e.params, null, 4)}\n\n`
                  : "No parameters provided.\n\n"),
                u.log(`Sending notification '${e.method}'.`, t);
            }
          }
          function B(e, t, r) {
            if (S !== l.Off && u) {
              let n = void 0;
              S === l.Verbose &&
                (e.error && e.error.data
                  ? (n = `Error data: ${JSON.stringify(
                      e.error.data,
                      null,
                      4
                    )}\n\n`)
                  : e.result
                  ? (n = `Result: ${JSON.stringify(e.result, null, 4)}\n\n`)
                  : void 0 === e.error && (n = "No result returned.\n\n")),
                u.log(
                  `Sending response '${t} - (${
                    e.id
                  })'. Processing request took ${Date.now() - r}ms`,
                  n
                );
            }
          }
          function G() {
            if (A()) throw new g(v.Closed, "Connection is closed.");
            if (J()) throw new g(v.Disposed, "Connection is disposed.");
          }
          function $() {
            if (!D()) throw new Error("Call listen() first.");
          }
          function K(e) {
            return void 0 === e ? null : e;
          }
          function Z(e, t) {
            let r;
            const n = e.numberOfParams;
            switch (n) {
              case 0:
                r = null;
                break;
              case 1:
                r = K(t[0]);
                break;
              default:
                r = [];
                for (var i = 0; i < t.length && i < n; i++) r.push(K(t[i]));
                if (t.length < n) for (i = t.length; i < n; i++) r.push(null);
            }
            return r;
          }
          const H = {
            sendNotification(e) {
              for (var t, n, i = [], s = 1; s < arguments.length; s++)
                i[s - 1] = arguments[s];
              if ((G(), o.string(e)))
                switch (((t = e), i.length)) {
                  case 0:
                    n = null;
                    break;
                  case 1:
                    n = i[0];
                    break;
                  default:
                    n = i;
                }
              else (t = e.method), (n = Z(e, i));
              const a = { jsonrpc: T, method: t, params: n };
              X(a), r.write(a);
            },
            onNotification(e, t) {
              G(),
                o.func(e)
                  ? (E = e)
                  : t &&
                    (o.string(e)
                      ? (C[e] = { type: void 0, handler: t })
                      : (C[e.method] = { type: e, handler: t }));
            },
            sendRequest(e) {
              for (var t, n, i = [], a = 1; a < arguments.length; a++)
                i[a - 1] = arguments[a];
              G(), $();
              let u = void 0;
              if (o.string(e))
                switch (((t = e), i.length)) {
                  case 0:
                    n = null;
                    break;
                  case 1:
                    f.CancellationToken.is(i[0])
                      ? ((n = null), (u = i[0]))
                      : (n = K(i[0]));
                    break;
                  default:
                    const c = i.length - 1;
                    f.CancellationToken.is(i[c])
                      ? ((u = i[c]),
                        (n =
                          2 === i.length
                            ? K(i[0])
                            : i.slice(0, c).map((e) => {
                                return K(e);
                              })))
                      : (n = i.map((e) => {
                          return K(e);
                        }));
                }
              else {
                (t = e.method), (n = Z(e, i));
                const l = e.numberOfParams;
                u = f.CancellationToken.is(i[l]) ? i[l] : void 0;
              }
              const p = _++;

              const h = new Promise((e, i) => {
                const o = { jsonrpc: T, id: p, method: t, params: n };

                let a = {
                  method: t,
                  timerStart: Date.now(),
                  resolve: e,
                  reject: i,
                };

                Q(o);
                try {
                  r.write(o);
                } catch (u) {
                  a.reject(
                    new s.ResponseError(
                      s.ErrorCodes.MessageWriteError,
                      u.message ? u.message : "Unknown reason"
                    )
                  ),
                    (a = null);
                }
                a && (O[String(p)] = a);
              });

              return (
                u &&
                  u.onCancellationRequested(() => {
                    H.sendNotification(d.type, { id: p });
                  }),
                h
              );
            },
            onRequest(e, t) {
              G(),
                o.func(e)
                  ? (N = e)
                  : t &&
                    (o.string(e)
                      ? (b[e] = { type: void 0, handler: t })
                      : (b[e.method] = { type: e, handler: t }));
            },
            trace(e, t, r) {
              void 0 === r && (r = !1),
                (u = (S = e) === l.Off ? void 0 : t),
                !r ||
                  A() ||
                  J() ||
                  H.sendNotification(p.type, { value: l.toString(e) });
            },
            onError: P.event,
            onClose: j.event,
            onUnhandledNotification: I.event,
            onDispose: L.event,
            dispose() {
              if (!J()) {
                (M = y.Disposed), L.fire(void 0);
                const e = new Error("Connection got disposed.");
                Object.keys(O).forEach((t) => {
                  O[t].reject(e);
                }),
                  (O = Object.create(null)),
                  (q = Object.create(null)),
                  (k = new m.LinkedMap()),
                  o.func(r.dispose) && r.dispose(),
                  o.func(t.dispose) && t.dispose();
              }
            },
            listen() {
              G(),
                (() => {
                  if (D())
                    throw new g(
                      v.AlreadyListening,
                      "Connection is already listening"
                    );
                })(),
                (M = y.Listening),
                t.listen(F);
            },
            inspect() {
              console.log("inspect");
            },
          };
          return (
            H.onNotification(h.type, (e) => {
              S !== l.Off &&
                u &&
                u.log(e.message, S === l.Verbose ? e.verbose : void 0);
            }),
            H
          );
        }
        (t.ConnectionError = g),
          ((e) => {
            e.is = (e) => {
              const t = e;
              return t && o.func(t.cancelUndispatched);
            };
          })(t.ConnectionStrategy || (t.ConnectionStrategy = {})),
          ((e) => {
            (e[(e.New = 1)] = "New"),
              (e[(e.Listening = 2)] = "Listening"),
              (e[(e.Closed = 3)] = "Closed"),
              (e[(e.Disposed = 4)] = "Disposed");
          })(y || (y = {})),
          (t.createMessageConnection = (e, r, n, i) => {
            let o;
            return (
              n || (n = t.NullLogger),
              _(
                void 0 !== (o = e).listen && void 0 === o.read
                  ? e
                  : new a.StreamMessageReader(e),
                ((e) => {
                  return void 0 !== e.write && void 0 === e.end;
                })(r)
                  ? r
                  : new u.StreamMessageWriter(r),
                n,
                i
              )
            );
          });
      }.call(this, r("CfyG").setImmediate));
    },
    Ff8q(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n;
      const i = r("Z5Ki");
      const o = r("1vg8");
      !((e) => {
        (e.None = Object.freeze({
          isCancellationRequested: !1,
          onCancellationRequested: i.Event.None,
        })),
          (e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: i.Event.None,
          })),
          (e.is = (t) => {
            const r = t;
            return (
              r &&
              (r === e.None ||
                r === e.Cancelled ||
                (o.boolean(r.isCancellationRequested) &&
                  !!r.onCancellationRequested))
            );
          });
      })((n = t.CancellationToken || (t.CancellationToken = {})));

      const s = Object.freeze((e, t) => {
        const r = setTimeout(e.bind(t), 0);
        return {
          dispose() {
            clearTimeout(r);
          },
        };
      });

      const a = (() => {
        function e() {
          this._isCancelled = !1;
        }
        return (
          (e.prototype.cancel = function () {
            this._isCancelled ||
              ((this._isCancelled = !0),
              this._emitter &&
                (this._emitter.fire(void 0), (this._emitter = void 0)));
          }),
          Object.defineProperty(e.prototype, "isCancellationRequested", {
            get() {
              return this._isCancelled;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "onCancellationRequested", {
            get() {
              return this._isCancelled
                ? s
                : (this._emitter || (this._emitter = new i.Emitter()),
                  this._emitter.event);
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();

      const u = (() => {
        function e() {}
        return (
          Object.defineProperty(e.prototype, "token", {
            get() {
              return this._token || (this._token = new a()), this._token;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.cancel = function () {
            this._token ? this._token.cancel() : (this._token = n.Cancelled);
          }),
          (e.prototype.dispose = function () {
            this.cancel();
          }),
          e
        );
      })();

      t.CancellationTokenSource = u;
    },
    PENG(e, t) {
      (t.endianness = () => {
        return "LE";
      }),
        (t.hostname = () => {
          return "undefined" !== typeof location ? location.hostname : "";
        }),
        (t.loadavg = () => {
          return [];
        }),
        (t.uptime = () => {
          return 0;
        }),
        (t.freemem = () => {
          return Number.MAX_VALUE;
        }),
        (t.totalmem = () => {
          return Number.MAX_VALUE;
        }),
        (t.cpus = () => {
          return [];
        }),
        (t.type = () => {
          return "Browser";
        }),
        (t.release = () => {
          return "undefined" !== typeof navigator ? navigator.appVersion : "";
        }),
        (t.networkInterfaces = t.getNetworkInterfaces =
          () => {
            return {};
          }),
        (t.arch = () => {
          return "javascript";
        }),
        (t.platform = () => {
          return "browser";
        }),
        (t.tmpdir = t.tmpDir =
          () => {
            return "/tmp";
          }),
        (t.EOL = "\n"),
        (t.homedir = () => {
          return "/";
        });
    },
    RUQ2(e, t, r) {
      ((e) => {
        const t = r("RUQ2");
        for (k in t) e[k] = t[k];
      }).call(this, r("ntbh"));
    },
    qL5x(e, t, r) {
      "use strict";
      ((e) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r("tpqs");
        const i = r("PENG");
        const o = r("HEbw");
        const s = r("RUQ2");
        const a = r("uWpP");
        const u = r("vIUA");
        (t.generateRandomPipeName = () => {
          const t = o.randomBytes(21).toString("hex");
          return "win32" === e.platform
            ? `\\\\.\\pipe\\vscode-jsonrpc-${t}-sock`
            : n.join(i.tmpdir(), `vscode-${t}.sock`);
        }),
          (t.createClientPipeTransport = (e, t) => {
            let r;
            void 0 === t && (t = "utf-8");
            const n = new Promise((e, t) => {
              r = e;
            });
            return new Promise((i, o) => {
              const c = s.createServer((e) => {
                c.close(),
                  r([
                    new a.SocketMessageReader(e, t),
                    new u.SocketMessageWriter(e, t),
                  ]);
              });
              c.on("error", o),
                c.listen(e, () => {
                  c.removeListener("error", o),
                    i({
                      onConnected() {
                        return n;
                      },
                    });
                });
            });
          }),
          (t.createServerPipeTransport = (e, t) => {
            void 0 === t && (t = "utf-8");
            const r = s.createConnection(e);
            return [
              new a.SocketMessageReader(r, t),
              new u.SocketMessageWriter(r, t),
            ];
          });
      }).call(this, r("8oxB"));
    },
  },
]);
