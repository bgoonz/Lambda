(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    "1Giq": function (module, exports, __webpack_require__) {
      "use strict";
      function inquire(moduleName) {
        try {
          var mod = eval("quire".replace(/^/, "re"))(moduleName);
          if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (e) {}
        return null;
      }
      module.exports = inquire;
    },
    "3G9Y": function (t, e, r) {
      "use strict";
      t.exports = o;
      var n = r("DIMq");
      (o.prototype = Object.create(n.prototype)).constructor = o;
      var i = r("6Tgl");
      function o() {
        n.call(this);
      }
      function s(t, e, r) {
        t.length < 40
          ? i.utf8.write(t, e, r)
          : e.utf8Write
          ? e.utf8Write(t, r)
          : e.write(t, r);
      }
      (o._configure = () => {
        (o.alloc = i._Buffer_allocUnsafe),
          (o.writeBytesBuffer =
            i.Buffer &&
            i.Buffer.prototype instanceof Uint8Array &&
            "set" === i.Buffer.prototype.set.name
              ? (t, e, r) => {
                  e.set(t, r);
                }
              : (t, e, r) => {
                  if (t.copy) t.copy(e, r, 0, t.length);
                  else for (var n = 0; n < t.length; ) e[r++] = t[n++];
                });
      }),
        (o.prototype.bytes = function (t) {
          i.isString(t) && (t = i._Buffer_from(t, "base64"));
          var e = t.length >>> 0;
          return (
            this.uint32(e), e && this._push(o.writeBytesBuffer, e, t), this
          );
        }),
        (o.prototype.string = function (t) {
          var e = i.Buffer.byteLength(t);
          return this.uint32(e), e && this._push(s, e, t), this;
        }),
        o._configure();
    },
    "6C75": function (t, e) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        (t => {
          return "[object Array]" == r.call(t);
        });
    },
    "6Tgl": function (t, e, r) {
      "use strict";
      (function (t) {
        var n = e;
        function i(t, e, r) {
          for (var n = Object.keys(e), i = 0; i < n.length; ++i)
            (void 0 !== t[n[i]] && r) || (t[n[i]] = e[n[i]]);
          return t;
        }
        function o(t) {
          function e(t, r) {
            if (!(this instanceof e)) return new e(t, r);
            Object.defineProperty(this, "message", {
              get() {
                return t;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, e)
                : Object.defineProperty(this, "stack", {
                    value: new Error().stack || "",
                  }),
              r && i(this, r);
          }
          return ((e.prototype = Object.create(Error.prototype)).constructor = e),
          Object.defineProperty(e.prototype, "name", {
            get() {
              return t;
            },
          }),
          (e.prototype.toString = function () {
            return this.name + ": " + this.message;
          }),
          e
        ;
        }
        (n.asPromise = r("MFts")),
          (n.base64 = r("bnU+")),
          (n.EventEmitter = r("aJe0")),
          (n.float = r("KwGI")),
          (n.inquire = r("1Giq")),
          (n.utf8 = r("yNTq")),
          (n.pool = r("BEY9")),
          (n.LongBits = r("o4Qh")),
          (n.isNode = Boolean(
            "undefined" !== typeof t &&
              t &&
              t.process &&
              t.process.versions &&
              t.process.versions.node
          )),
          (n.global =
            (n.isNode && t) ||
            ("undefined" !== typeof window && window) ||
            ("undefined" !== typeof self && self) ||
            this),
          (n.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (n.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (n.isInteger =
            Number.isInteger ||
            (t => {
              return (
                "number" === typeof t && isFinite(t) && Math.floor(t) === t
              );
            })),
          (n.isString = t => {
            return "string" === typeof t || t instanceof String;
          }),
          (n.isObject = t => {
            return t && "object" === typeof t;
          }),
          (n.isset = n.isSet =
            (t, e) => {
              var r = t[e];
              return (
                !(null == r || !t.hasOwnProperty(e)) &&
                ("object" !== typeof r ||
                  (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
              );
            }),
          (n.Buffer = (() => {
            try {
              var t = n.inquire("buffer").Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (e) {
              return null;
            }
          })()),
          (n._Buffer_from = null),
          (n._Buffer_allocUnsafe = null),
          (n.newBuffer = t => {
            return "number" === typeof t
              ? n.Buffer
                ? n._Buffer_allocUnsafe(t)
                : new n.Array(t)
              : n.Buffer
              ? n._Buffer_from(t)
              : "undefined" === typeof Uint8Array
              ? t
              : new Uint8Array(t);
          }),
          (n.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array),
          (n.Long =
            (n.global.dcodeIO && n.global.dcodeIO.Long) ||
            n.global.Long ||
            n.inquire("long")),
          (n.key2Re = /^true|false|0|1$/),
          (n.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (n.longToHash = t => {
            return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash;
          }),
          (n.longFromHash = (t, e) => {
            var r = n.LongBits.fromHash(t);
            return n.Long
              ? n.Long.fromBits(r.lo, r.hi, e)
              : r.toNumber(Boolean(e));
          }),
          (n.merge = i),
          (n.lcFirst = t => {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (n.newError = o),
          (n.ProtocolError = o("ProtocolError")),
          (n.oneOfGetter = t => {
            for (var e = {}, r = 0; r < t.length; ++r) e[t[r]] = 1;
            return function () {
              for (var t = Object.keys(this), r = t.length - 1; r > -1; --r)
                if (
                  1 === e[t[r]] &&
                  void 0 !== this[t[r]] &&
                  null !== this[t[r]]
                )
                  return t[r];
            };
          }),
          (n.oneOfSetter = t => {
            return function (e) {
              for (var r = 0; r < t.length; ++r)
                t[r] !== e && delete this[t[r]];
            };
          }),
          (n.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          }),
          (n._configure = () => {
            var t = n.Buffer;
            t
              ? ((n._Buffer_from =
                  (t.from !== Uint8Array.from && t.from) ||
                  ((e, r) => {
                    return new t(e, r);
                  })),
                (n._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  (e => {
                    return new t(e);
                  })))
              : (n._Buffer_from = n._Buffer_allocUnsafe = null);
          });
      }.call(this, r("ntbh")));
    },
    "7jRU": function (t, e) {
      var r = [].indexOf;
      t.exports = (t, e) => {
        if (r) return t.indexOf(e);
        for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
        return -1;
      };
    },
    AbGV(t, e, r) {
      "use strict";
      e.Service = r("gH6v");
    },
    Aplp(t, e, r) {
      "use strict";
      var n,
        i =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        o = {},
        s = 0,
        u = 0;
      function f(t) {
        var e = "";
        do {
          (e = i[t % 64] + e), (t = Math.floor(t / 64));
        } while (t > 0);
        return e;
      }
      function a() {
        var t = f(+new Date());
        return t !== n ? ((s = 0), (n = t)) : t + "." + f(s++);
      }
      for (; u < 64; u++) o[i[u]] = u;
      (a.encode = f),
        (a.decode = t => {
          var e = 0;
          for (u = 0; u < t.length; u++) e = 64 * e + o[t.charAt(u)];
          return e;
        }),
        (t.exports = a);
    },
    BEY9(t, e, r) {
      "use strict";
      t.exports = (t, e, r) => {
        var n = r || 8192,
          i = n >>> 1,
          o = null,
          s = n;
        return r => {
          if (r < 1 || r > i) return t(r);
          s + r > n && ((o = t(n)), (s = 0));
          var u = e.call(o, s, (s += r));
          return 7 & s && (s = 1 + (7 | s)), u;
        };
      };
    },
    "Bko/": function (t, e, r) {
      "use strict";
      t.exports = {};
    },
    DIMq(t, e, r) {
      "use strict";
      t.exports = h;
      var n,
        i = r("6Tgl"),
        o = i.LongBits,
        s = i.base64,
        u = i.utf8;
      function f(t, e, r) {
        (this.fn = t), (this.len = e), (this.next = void 0), (this.val = r);
      }
      function a() {}
      function c(t) {
        (this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states);
      }
      function h() {
        (this.len = 0),
          (this.head = new f(a, 0, 0)),
          (this.tail = this.head),
          (this.states = null);
      }
      var l = () => {
        return i.Buffer
          ? () => {
              return (h.create = () => {
                return new n();
              })();
            }
          : () => {
              return new h();
            };
      };
      function p(t, e, r) {
        e[r] = 255 & t;
      }
      function y(t, e) {
        (this.len = t), (this.next = void 0), (this.val = e);
      }
      function d(t, e, r) {
        for (; t.hi; )
          (e[r++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7);
        for (; t.lo > 127; ) (e[r++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7);
        e[r++] = t.lo;
      }
      function b(t, e, r) {
        (e[r] = 255 & t),
          (e[r + 1] = (t >>> 8) & 255),
          (e[r + 2] = (t >>> 16) & 255),
          (e[r + 3] = t >>> 24);
      }
      (h.create = l()),
        (h.alloc = t => {
          return new i.Array(t);
        }),
        i.Array !== Array &&
          (h.alloc = i.pool(h.alloc, i.Array.prototype.subarray)),
        (h.prototype._push = function (t, e, r) {
          return (
            (this.tail = this.tail.next = new f(t, e, r)), (this.len += e), this
          );
        }),
        (y.prototype = Object.create(f.prototype)),
        (y.prototype.fn = (t, e, r) => {
          for (; t > 127; ) (e[r++] = (127 & t) | 128), (t >>>= 7);
          e[r] = t;
        }),
        (h.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next =
              new y(
                (t >>>= 0) < 128
                  ? 1
                  : t < 16384
                  ? 2
                  : t < 2097152
                  ? 3
                  : t < 268435456
                  ? 4
                  : 5,
                t
              )).len),
            this
          );
        }),
        (h.prototype.int32 = function (t) {
          return t < 0 ? this._push(d, 10, o.fromNumber(t)) : this.uint32(t);
        }),
        (h.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (h.prototype.uint64 = function (t) {
          var e = o.from(t);
          return this._push(d, e.length(), e);
        }),
        (h.prototype.int64 = h.prototype.uint64),
        (h.prototype.sint64 = function (t) {
          var e = o.from(t).zzEncode();
          return this._push(d, e.length(), e);
        }),
        (h.prototype.bool = function (t) {
          return this._push(p, 1, t ? 1 : 0);
        }),
        (h.prototype.fixed32 = function (t) {
          return this._push(b, 4, t >>> 0);
        }),
        (h.prototype.sfixed32 = h.prototype.fixed32),
        (h.prototype.fixed64 = function (t) {
          var e = o.from(t);
          return this._push(b, 4, e.lo)._push(b, 4, e.hi);
        }),
        (h.prototype.sfixed64 = h.prototype.fixed64),
        (h.prototype.float = function (t) {
          return this._push(i.float.writeFloatLE, 4, t);
        }),
        (h.prototype.double = function (t) {
          return this._push(i.float.writeDoubleLE, 8, t);
        });
      var g = i.Array.prototype.set
        ? (t, e, r) => {
            e.set(t, r);
          }
        : (t, e, r) => {
            for (var n = 0; n < t.length; ++n) e[r + n] = t[n];
          };
      (h.prototype.bytes = function (t) {
        var e = t.length >>> 0;
        if (!e) return this._push(p, 1, 0);
        if (i.isString(t)) {
          var r = h.alloc((e = s.length(t)));
          s.decode(t, r, 0), (t = r);
        }
        return this.uint32(e)._push(g, e, t);
      }),
        (h.prototype.string = function (t) {
          var e = u.length(t);
          return e ? this.uint32(e)._push(u.write, e, t) : this._push(p, 1, 0);
        }),
        (h.prototype.fork = function () {
          return (
            (this.states = new c(this)),
            (this.head = this.tail = new f(a, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (h.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new f(a, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (h.prototype.ldelim = function () {
          var t = this.head,
            e = this.tail,
            r = this.len;
          return (
            this.reset().uint32(r),
            r && ((this.tail.next = t.next), (this.tail = e), (this.len += r)),
            this
          );
        }),
        (h.prototype.finish = function () {
          for (
            var t = this.head.next, e = this.constructor.alloc(this.len), r = 0;
            t;

          )
            t.fn(t.val, e, r), (r += t.len), (t = t.next);
          return e;
        }),
        (h._configure = t => {
          (n = t), (h.create = l()), n._configure();
        });
    },
    FGiv(t, e) {
      var r = 1e3,
        n = 60 * r,
        i = 60 * n,
        o = 24 * i,
        s = 365.25 * o;
      function u(t, e, r) {
        if (!(t < e))
          return t < 1.5 * e
            ? Math.floor(t / e) + " " + r
            : Math.ceil(t / e) + " " + r + "s";
      }
      t.exports = (t, e) => {
        e = e || {};
        var f,
          a = typeof t;
        if ("string" === a && t.length > 0)
          return (t => {
            if ((t = String(t)).length > 100) return;
            var e =
              /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                t
              );
            if (!e) return;
            var u = parseFloat(e[1]);
            switch ((e[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return u * s;
              case "days":
              case "day":
              case "d":
                return u * o;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return u * i;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return u * n;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return u * r;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return u;
              default:
                return;
            }
          })(t);
        if ("number" === a && !1 === isNaN(t))
          return e.long ? u((f = t), o, "day") ||
                u(f, i, "hour") ||
                u(f, n, "minute") ||
                u(f, r, "second") ||
                f + " ms" : (t => {
                if (t >= o) return Math.round(t / o) + "d";
                if (t >= i) return Math.round(t / i) + "h";
                if (t >= n) return Math.round(t / n) + "m";
                if (t >= r) return Math.round(t / r) + "s";
                return t + "ms";
              })(t);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(t)
        );
      };
    },
    IRA2(t, e, r) {
      "use strict";
      t.exports = f;
      var n,
        i = r("6Tgl"),
        o = i.LongBits,
        s = i.utf8;
      function u(t, e) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len
        );
      }
      function f(t) {
        (this.buf = t), (this.pos = 0), (this.len = t.length);
      }
      var a =
          "undefined" !== typeof Uint8Array
            ? t => {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new f(t);
                throw Error("illegal buffer");
              }
            : t => {
                if (Array.isArray(t)) return new f(t);
                throw Error("illegal buffer");
              },
        c = () => {
          return i.Buffer
            ? t => {
                return (f.create = t => {
                  return i.Buffer.isBuffer(t) ? new n(t) : a(t);
                })(t);
              }
            : a;
        };
      function h() {
        var t = new o(0, 0),
          e = 0;
        if (!(this.len - this.pos > 4)) {
          for (; e < 3; ++e) {
            if (this.pos >= this.len) throw u(this);
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
          return (
            (t.lo = (t.lo | ((127 & this.buf[this.pos++]) << (7 * e))) >>> 0), t
          );
        }
        for (; e < 4; ++e)
          if (
            ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return t;
        if (
          ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
          (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return t;
        if (((e = 0), this.len - this.pos > 4)) {
          for (; e < 5; ++e)
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
        } else
          for (; e < 5; ++e) {
            if (this.pos >= this.len) throw u(this);
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
        throw Error("invalid varint encoding");
      }
      function l(t, e) {
        return (
          (t[e - 4] | (t[e - 3] << 8) | (t[e - 2] << 16) | (t[e - 1] << 24)) >>>
          0
        );
      }
      function p() {
        if (this.pos + 8 > this.len) throw u(this, 8);
        return new o(
          l(this.buf, (this.pos += 4)),
          l(this.buf, (this.pos += 4))
        );
      }
      (f.create = c()),
        (f.prototype._slice =
          i.Array.prototype.subarray || i.Array.prototype.slice),
        (f.prototype.uint32 = (() => {
          var t = 4294967295;
          return function () {
            if (
              ((t = (127 & this.buf[this.pos]) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 7)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 14)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 21)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((15 & this.buf[this.pos]) << 28)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if ((this.pos += 5) > this.len)
              throw ((this.pos = this.len), u(this, 10));
            return t;
          };
        })()),
        (f.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (f.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (f.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (f.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          return l(this.buf, (this.pos += 4));
        }),
        (f.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          return 0 | l(this.buf, (this.pos += 4));
        }),
        (f.prototype.float = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          var t = i.float.readFloatLE(this.buf, this.pos);
          return (this.pos += 4), t;
        }),
        (f.prototype.double = function () {
          if (this.pos + 8 > this.len) throw u(this, 4);
          var t = i.float.readDoubleLE(this.buf, this.pos);
          return (this.pos += 8), t;
        }),
        (f.prototype.bytes = function () {
          var t = this.uint32(),
            e = this.pos,
            r = this.pos + t;
          if (r > this.len) throw u(this, t);
          return (
            (this.pos += t),
            Array.isArray(this.buf)
              ? this.buf.slice(e, r)
              : e === r
              ? new this.buf.constructor(0)
              : this._slice.call(this.buf, e, r)
          );
        }),
        (f.prototype.string = function () {
          var t = this.bytes();
          return s.read(t, 0, t.length);
        }),
        (f.prototype.skip = function (t) {
          if ("number" === typeof t) {
            if (this.pos + t > this.len) throw u(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw u(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (f.prototype.skipType = function (t) {
          switch (t) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; 4 !== (t = 7 & this.uint32()); ) this.skipType(t);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + t + " at offset " + this.pos);
          }
          return this;
        }),
        (f._configure = t => {
          (n = t), (f.create = c()), n._configure();
          var e = i.Long ? "toLong" : "toNumber";
          i.merge(f.prototype, {
            int64() {
              return h.call(this)[e](!1);
            },
            uint64() {
              return h.call(this)[e](!0);
            },
            sint64() {
              return h.call(this).zzDecode()[e](!1);
            },
            fixed64() {
              return p.call(this)[e](!0);
            },
            sfixed64() {
              return p.call(this)[e](!1);
            },
          });
        });
    },
    KwGI(t, e, r) {
      "use strict";
      function n(t) {
        return "undefined" !== typeof Float32Array ? (() => {
              var e = new Float32Array([-0]),
                r = new Uint8Array(e.buffer),
                n = 128 === r[3];
              function i(t, n, i) {
                (e[0] = t),
                  (n[i] = r[0]),
                  (n[i + 1] = r[1]),
                  (n[i + 2] = r[2]),
                  (n[i + 3] = r[3]);
              }
              function o(t, n, i) {
                (e[0] = t),
                  (n[i] = r[3]),
                  (n[i + 1] = r[2]),
                  (n[i + 2] = r[1]),
                  (n[i + 3] = r[0]);
              }
              function s(t, n) {
                return (
                  (r[0] = t[n]),
                  (r[1] = t[n + 1]),
                  (r[2] = t[n + 2]),
                  (r[3] = t[n + 3]),
                  e[0]
                );
              }
              function u(t, n) {
                return (
                  (r[3] = t[n]),
                  (r[2] = t[n + 1]),
                  (r[1] = t[n + 2]),
                  (r[0] = t[n + 3]),
                  e[0]
                );
              }
              (t.writeFloatLE = n ? i : o),
                (t.writeFloatBE = n ? o : i),
                (t.readFloatLE = n ? s : u),
                (t.readFloatBE = n ? u : s);
            })() : (() => {
              function e(t, e, r, n) {
                var i = e < 0 ? 1 : 0;
                if ((i && (e = -e), 0 === e))
                  t(1 / e > 0 ? 0 : 2147483648, r, n);
                else if (isNaN(e)) t(2143289344, r, n);
                else if (e > 34028234663852886e22)
                  t(((i << 31) | 2139095040) >>> 0, r, n);
                else if (e < 11754943508222875e-54)
                  t(
                    ((i << 31) | Math.round(e / 1401298464324817e-60)) >>> 0,
                    r,
                    n
                  );
                else {
                  var o = Math.floor(Math.log(e) / Math.LN2);
                  t(
                    ((i << 31) |
                      ((o + 127) << 23) |
                      (8388607 &
                        Math.round(e * Math.pow(2, -o) * 8388608))) >>>
                      0,
                    r,
                    n
                  );
                }
              }
              function r(t, e, r) {
                var n = t(e, r),
                  i = 2 * (n >> 31) + 1,
                  o = (n >>> 23) & 255,
                  s = 8388607 & n;
                return 255 === o
                  ? s
                    ? NaN
                    : i * (1 / 0)
                  : 0 === o
                  ? 1401298464324817e-60 * i * s
                  : i * Math.pow(2, o - 150) * (s + 8388608);
              }
              (t.writeFloatLE = e.bind(null, i)),
                (t.writeFloatBE = e.bind(null, o)),
                (t.readFloatLE = r.bind(null, s)),
                (t.readFloatBE = r.bind(null, u));
            })(),
        "undefined" !== typeof Float64Array ? (() => {
              var e = new Float64Array([-0]),
                r = new Uint8Array(e.buffer),
                n = 128 === r[7];
              function i(t, n, i) {
                (e[0] = t),
                  (n[i] = r[0]),
                  (n[i + 1] = r[1]),
                  (n[i + 2] = r[2]),
                  (n[i + 3] = r[3]),
                  (n[i + 4] = r[4]),
                  (n[i + 5] = r[5]),
                  (n[i + 6] = r[6]),
                  (n[i + 7] = r[7]);
              }
              function o(t, n, i) {
                (e[0] = t),
                  (n[i] = r[7]),
                  (n[i + 1] = r[6]),
                  (n[i + 2] = r[5]),
                  (n[i + 3] = r[4]),
                  (n[i + 4] = r[3]),
                  (n[i + 5] = r[2]),
                  (n[i + 6] = r[1]),
                  (n[i + 7] = r[0]);
              }
              function s(t, n) {
                return (
                  (r[0] = t[n]),
                  (r[1] = t[n + 1]),
                  (r[2] = t[n + 2]),
                  (r[3] = t[n + 3]),
                  (r[4] = t[n + 4]),
                  (r[5] = t[n + 5]),
                  (r[6] = t[n + 6]),
                  (r[7] = t[n + 7]),
                  e[0]
                );
              }
              function u(t, n) {
                return (
                  (r[7] = t[n]),
                  (r[6] = t[n + 1]),
                  (r[5] = t[n + 2]),
                  (r[4] = t[n + 3]),
                  (r[3] = t[n + 4]),
                  (r[2] = t[n + 5]),
                  (r[1] = t[n + 6]),
                  (r[0] = t[n + 7]),
                  e[0]
                );
              }
              (t.writeDoubleLE = n ? i : o),
                (t.writeDoubleBE = n ? o : i),
                (t.readDoubleLE = n ? s : u),
                (t.readDoubleBE = n ? u : s);
            })() : (() => {
              function e(t, e, r, n, i, o) {
                var s = n < 0 ? 1 : 0;
                if ((s && (n = -n), 0 === n))
                  t(0, i, o + e), t(1 / n > 0 ? 0 : 2147483648, i, o + r);
                else if (isNaN(n)) t(0, i, o + e), t(2146959360, i, o + r);
                else if (n > 17976931348623157e292)
                  t(0, i, o + e), t(((s << 31) | 2146435072) >>> 0, i, o + r);
                else {
                  var u;
                  if (n < 22250738585072014e-324)
                    t((u = n / 5e-324) >>> 0, i, o + e),
                      t(((s << 31) | (u / 4294967296)) >>> 0, i, o + r);
                  else {
                    var f = Math.floor(Math.log(n) / Math.LN2);
                    1024 === f && (f = 1023),
                      t(
                        (4503599627370496 * (u = n * Math.pow(2, -f))) >>> 0,
                        i,
                        o + e
                      ),
                      t(
                        ((s << 31) |
                          ((f + 1023) << 20) |
                          ((1048576 * u) & 1048575)) >>>
                          0,
                        i,
                        o + r
                      );
                  }
                }
              }
              function r(t, e, r, n, i) {
                var o = t(n, i + e),
                  s = t(n, i + r),
                  u = 2 * (s >> 31) + 1,
                  f = (s >>> 20) & 2047,
                  a = 4294967296 * (1048575 & s) + o;
                return 2047 === f
                  ? a
                    ? NaN
                    : u * (1 / 0)
                  : 0 === f
                  ? 5e-324 * u * a
                  : u * Math.pow(2, f - 1075) * (a + 4503599627370496);
              }
              (t.writeDoubleLE = e.bind(null, i, 0, 4)),
                (t.writeDoubleBE = e.bind(null, o, 4, 0)),
                (t.readDoubleLE = r.bind(null, s, 0, 4)),
                (t.readDoubleBE = r.bind(null, u, 4, 0));
            })(),
        t
      ;
      }
      function i(t, e, r) {
        (e[r] = 255 & t),
          (e[r + 1] = (t >>> 8) & 255),
          (e[r + 2] = (t >>> 16) & 255),
          (e[r + 3] = t >>> 24);
      }
      function o(t, e, r) {
        (e[r] = t >>> 24),
          (e[r + 1] = (t >>> 16) & 255),
          (e[r + 2] = (t >>> 8) & 255),
          (e[r + 3] = 255 & t);
      }
      function s(t, e) {
        return (
          (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24)) >>> 0
        );
      }
      function u(t, e) {
        return (
          ((t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]) >>> 0
        );
      }
      t.exports = n(n);
    },
    MFts(t, e, r) {
      "use strict";
      t.exports = function (t, e) {
        var r = new Array(arguments.length - 1),
          n = 0,
          i = 2,
          o = !0;
        for (; i < arguments.length; ) r[n++] = arguments[i++];
        return new Promise((i, s) => {
          r[n] = function (t) {
            if (o)
              if (((o = !1), t)) s(t);
              else {
                for (
                  var e = new Array(arguments.length - 1), r = 0;
                  r < e.length;

                )
                  e[r++] = arguments[r];
                i.apply(null, e);
              }
          };
          try {
            t.apply(e || null, r);
          } catch (u) {
            o && ((o = !1), s(u));
          }
        });
      };
    },
    TjQ3(t, e, r) {
      "use strict";
      r.d(e, "a", () => {
        return y;
      });
      var n = r("vJKn"),
        i = r.n(n),
        o = r("cpVT"),
        s = r("dhJC"),
        u = r("rg98"),
        f = r("XWHH"),
        a = r.n(f),
        c = r("XE6U");
      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(e => {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(r), !0).forEach(e => {
                Object(o.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(e => {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p =
        /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
      function y(t) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = Object(u.a)(
          i.a.mark(function t(e) {
            var r, n, o, u, f, h, y, d;
            return i.a.wrap(
              t => {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = e.url),
                        (n = Object(s.a)(e, ["url"])),
                        (t.prev = 1),
                        (t.next = 4),
                        a()(r, {
                          credentials: "same-origin",
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest",
                          },
                          method: "post",
                          body: JSON.stringify(
                            l(l({}, n), {}, { format: "pbuf" })
                          ),
                        })
                      );
                    case 4:
                      (o = t.sent), (t.next = 11);
                      break;
                    case 7:
                      throw (
                        ((t.prev = 7),
                        (t.t0 = t.catch(1)),
                        (t.t0.statusCode = 504),
                        t.t0)
                      );
                    case 11:
                      if (o.ok) {
                        t.next = 26;
                        break;
                      }
                      if (
                        !(f = o.headers.get("content-type")) ||
                        !f.includes("application/json")
                      ) {
                        t.next = 20;
                        break;
                      }
                      return (t.next = 16), o.json();
                    case 16:
                      (h = t.sent), (u = h.message), (t.next = 23);
                      break;
                    case 20:
                      return (t.next = 22), o.text();
                    case 22:
                      u = t.sent;
                    case 23:
                      throw (
                        (((y = new Error(u || o.statusText)).statusCode =
                          o.status),
                        y)
                      );
                    case 26:
                      return (t.next = 28), o.json();
                    case 28:
                      if (
                        (d = t.sent).token.startsWith("v2.public.") ||
                        p.test(d.token)
                      ) {
                        t.next = 31;
                        break;
                      }
                      throw new c.a(
                        "Expected token to be PASETO- or base64-encoded"
                      ).setExtras(l({ connectionMetadata: d, url: r }, n));
                    case 31:
                      return t.abrupt("return", d);
                    case 32:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 7]]
            );
          })
        )).apply(this, arguments);
      }
    },
    VDtp(t, e, r) {
      "use strict";
      t.exports = r("bDA7");
    },
    WLGk(t, e, r) {
      ((e => {
        var n = r("6C75"),
          i = Object.prototype.toString,
          o =
            "function" === typeof Blob ||
            ("undefined" !== typeof Blob &&
              "[object BlobConstructor]" === i.call(Blob)),
          s =
            "function" === typeof File ||
            ("undefined" !== typeof File &&
              "[object FileConstructor]" === i.call(File));
        t.exports = function t(r) {
          if (!r || "object" !== typeof r) return !1;
          if (n(r)) {
            for (var i = 0, u = r.length; i < u; i++) if (t(r[i])) return !0;
            return !1;
          }
          if (
            ("function" === typeof e && e.isBuffer && e.isBuffer(r)) ||
            ("function" === typeof ArrayBuffer && r instanceof ArrayBuffer) ||
            (o && r instanceof Blob) ||
            (s && r instanceof File)
          )
            return !0;
          if (
            r.toJSON &&
            "function" === typeof r.toJSON &&
            1 === arguments.length
          )
            return t(r.toJSON(), !0);
          for (var f in r)
            if (Object.prototype.hasOwnProperty.call(r, f) && t(r[f]))
              return !0;
          return !1;
        };
      }).call(this, r("HDXh").Buffer));
    },
    Yvos(t, e) {
      t.exports = (t, e) => {
        var r = () => {};
        (r.prototype = e.prototype),
          (t.prototype = new r()),
          (t.prototype.constructor = t);
      };
    },
    aJe0(t, e, r) {
      "use strict";

      class n {
        constructor() {
          this._listeners = {};
        }

        static length(t) {
          var e = t.length;
          if (!e) return 0;
          for (var r = 0; --e % 4 > 1 && "=" === t.charAt(e); ) ++r;
          return Math.ceil(3 * t.length) / 4 - r;
        }

        static encode(t, e, r) {
          for (var n, o = null, s = [], u = 0, f = 0; e < r; ) {
            var a = t[e++];
            switch (f) {
              case 0:
                (s[u++] = i[a >> 2]), (n = (3 & a) << 4), (f = 1);
                break;
              case 1:
                (s[u++] = i[n | (a >> 4)]), (n = (15 & a) << 2), (f = 2);
                break;
              case 2:
                (s[u++] = i[n | (a >> 6)]), (s[u++] = i[63 & a]), (f = 0);
            }
            u > 8191 &&
              ((o || (o = [])).push(String.fromCharCode.apply(String, s)),
              (u = 0));
          }
          return (
            f && ((s[u++] = i[n]), (s[u++] = 61), 1 === f && (s[u++] = 61)),
            o
              ? (u && o.push(String.fromCharCode.apply(String, s.slice(0, u))),
                o.join(""))
              : String.fromCharCode.apply(String, s.slice(0, u))
          );
        }
      }

      (t.exports = n),
        (n.prototype.on = function (t, e, r) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: e,
              ctx: r || this,
            }),
            this
          );
        }),
        (n.prototype.off = function (t, e) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === e) this._listeners[t] = [];
          else
            for (var r = this._listeners[t], n = 0; n < r.length; )
              r[n].fn === e ? r.splice(n, 1) : ++n;
          return this;
        }),
        (n.prototype.emit = function (t) {
          var e = this._listeners[t];
          if (e) {
            for (var r = [], n = 1; n < arguments.length; )
              r.push(arguments[n++]);
            for (n = 0; n < e.length; ) e[n].fn.apply(e[n++].ctx, r);
          }
          return this;
        });
    },
    bDA7(t, e, r) {
      "use strict";
      var n = e;
      function i() {
        n.util._configure(),
          n.Writer._configure(n.BufferWriter),
          n.Reader._configure(n.BufferReader);
      }
      (n.build = "minimal"),
        (n.Writer = r("DIMq")),
        (n.BufferWriter = r("3G9Y")),
        (n.Reader = r("IRA2")),
        (n.BufferReader = r("lWSR")),
        (n.util = r("6Tgl")),
        (n.rpc = r("AbGV")),
        (n.roots = r("Bko/")),
        (n.configure = i),
        i();
    },
    "bnU+": function (t, e, r) {
      "use strict";
      var n = e;
      for (var i = new Array(64), o = new Array(123), s = 0; s < 64; )
        o[
          (i[s] =
            s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : (s - 59) | 43)
        ] = s++;
      var u = "invalid encoding";
      (n.decode = (t, e, r) => {
        for (var n, i = r, s = 0, f = 0; f < t.length; ) {
          var a = t.charCodeAt(f++);
          if (61 === a && s > 1) break;
          if (void 0 === (a = o[a])) throw Error(u);
          switch (s) {
            case 0:
              (n = a), (s = 1);
              break;
            case 1:
              (e[r++] = (n << 2) | ((48 & a) >> 4)), (n = a), (s = 2);
              break;
            case 2:
              (e[r++] = ((15 & n) << 4) | ((60 & a) >> 2)), (n = a), (s = 3);
              break;
            case 3:
              (e[r++] = ((3 & n) << 6) | a), (s = 0);
          }
        }
        if (1 === s) throw Error(u);
        return r - i;
      }),
        (n.test = t => {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t
          );
        });
    },
    gH6v(t, e, r) {
      "use strict";
      t.exports = i;
      var n = r("6Tgl");
      function i(t, e, r) {
        if ("function" !== typeof t)
          throw TypeError("rpcImpl must be a function");
        n.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(e)),
          (this.responseDelimited = Boolean(r));
      }
      ((i.prototype = Object.create(n.EventEmitter.prototype)).constructor = i),
        (i.prototype.rpcCall = function t(e, r, i, o, s) {
          if (!o) throw TypeError("request must be specified");
          var u = this;
          if (!s) return n.asPromise(t, u, e, r, i, o);
          if (u.rpcImpl)
            try {
              return u.rpcImpl(
                e,
                r[u.requestDelimited ? "encodeDelimited" : "encode"](
                  o
                ).finish(),
                (t, r) => {
                  if (t) return u.emit("error", t, e), s(t);
                  if (null !== r) {
                    if (!(r instanceof i))
                      try {
                        r =
                          i[u.responseDelimited ? "decodeDelimited" : "decode"](
                            r
                          );
                      } catch (t) {
                        return u.emit("error", t, e), s(t);
                      }
                    return u.emit("data", r, e), s(null, r);
                  }
                  u.end(!0);
                }
              );
            } catch (f) {
              return u.emit("error", f, e),
              void setTimeout(() => {
                s(f);
              }, 0)
            ;
            }
          else
            setTimeout(() => {
              s(Error("already ended"));
            }, 0);
        }),
        (i.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        });
    },
    lWSR(t, e, r) {
      "use strict";
      t.exports = o;
      var n = r("IRA2");
      (o.prototype = Object.create(n.prototype)).constructor = o;
      var i = r("6Tgl");
      function o(t) {
        n.call(this, t);
      }
      (o._configure = () => {
        i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
      }),
        (o.prototype.string = function () {
          var t = this.uint32();
          return this.buf.utf8Slice
            ? this.buf.utf8Slice(
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len))
              )
            : this.buf.toString(
                "utf-8",
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len))
              );
        }),
        o._configure();
    },
    o4Qh(t, e, r) {
      "use strict";
      t.exports = i;
      var n = r("6Tgl");
      function i(t, e) {
        (this.lo = t >>> 0), (this.hi = e >>> 0);
      }
      var o = (i.zero = new i(0, 0));
      (o.toNumber = () => {
        return 0;
      }),
        (o.zzEncode = o.zzDecode =
          function () {
            return this;
          }),
        (o.length = () => {
          return 1;
        });
      var s = (i.zeroHash = "\0\0\0\0\0\0\0\0");
      (i.fromNumber = t => {
        if (0 === t) return o;
        var e = t < 0;
        e && (t = -t);
        var r = t >>> 0,
          n = ((t - r) / 4294967296) >>> 0;
        return (
          e &&
            ((n = ~n >>> 0),
            (r = ~r >>> 0),
            ++r > 4294967295 && ((r = 0), ++n > 4294967295 && (n = 0))),
          new i(r, n)
        );
      }),
        (i.from = t => {
          if ("number" === typeof t) return i.fromNumber(t);
          if (n.isString(t)) {
            if (!n.Long) return i.fromNumber(parseInt(t, 10));
            t = n.Long.fromString(t);
          }
          return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : o;
        }),
        (i.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var e = (1 + ~this.lo) >>> 0,
              r = ~this.hi >>> 0;
            return e || (r = (r + 1) >>> 0), -(e + 4294967296 * r);
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (i.prototype.toLong = function (t) {
          return n.Long
            ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        });
      var u = String.prototype.charCodeAt;
      (i.fromHash = t => {
        return t === s
          ? o
          : new i(
              (u.call(t, 0) |
                (u.call(t, 1) << 8) |
                (u.call(t, 2) << 16) |
                (u.call(t, 3) << 24)) >>>
                0,
              (u.call(t, 4) |
                (u.call(t, 5) << 8) |
                (u.call(t, 6) << 16) |
                (u.call(t, 7) << 24)) >>>
                0
            );
      }),
        (i.prototype.toHash = function () {
          return String.fromCharCode(
            255 & this.lo,
            (this.lo >>> 8) & 255,
            (this.lo >>> 16) & 255,
            this.lo >>> 24,
            255 & this.hi,
            (this.hi >>> 8) & 255,
            (this.hi >>> 16) & 255,
            this.hi >>> 24
          );
        }),
        (i.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.length = function () {
          var t = this.lo,
            e = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            r = this.hi >>> 24;
          return 0 === r
            ? 0 === e
              ? t < 16384
                ? t < 128
                  ? 1
                  : 2
                : t < 2097152
                ? 3
                : 4
              : e < 16384
              ? e < 128
                ? 5
                : 6
              : e < 2097152
              ? 7
              : 8
            : r < 128
            ? 9
            : 10;
        });
    },
    yNTq(t, e, r) {
      "use strict";
      var n = e;
      (n.length = t => {
        for (var e = 0, r = 0, n = 0; n < t.length; ++n)
          (r = t.charCodeAt(n)) < 128
            ? (e += 1)
            : r < 2048
            ? (e += 2)
            : 55296 === (64512 & r) && 56320 === (64512 & t.charCodeAt(n + 1))
            ? (++n, (e += 4))
            : (e += 3);
        return e;
      }),
        (n.read = (t, e, r) => {
          if (r - e < 1) return "";
          for (var n, i = null, o = [], s = 0; e < r; )
            (n = t[e++]) < 128
              ? (o[s++] = n)
              : n > 191 && n < 224
              ? (o[s++] = ((31 & n) << 6) | (63 & t[e++]))
              : n > 239 && n < 365
              ? ((n =
                  (((7 & n) << 18) |
                    ((63 & t[e++]) << 12) |
                    ((63 & t[e++]) << 6) |
                    (63 & t[e++])) -
                  65536),
                (o[s++] = 55296 + (n >> 10)),
                (o[s++] = 56320 + (1023 & n)))
              : (o[s++] =
                  ((15 & n) << 12) | ((63 & t[e++]) << 6) | (63 & t[e++])),
              s > 8191 &&
                ((i || (i = [])).push(String.fromCharCode.apply(String, o)),
                (s = 0));
          return i
            ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))),
              i.join(""))
            : String.fromCharCode.apply(String, o.slice(0, s));
        }),
        (n.write = (t, e, r) => {
          for (var n, i, o = r, s = 0; s < t.length; ++s)
            (n = t.charCodeAt(s)) < 128
              ? (e[r++] = n)
              : n < 2048
              ? ((e[r++] = (n >> 6) | 192), (e[r++] = (63 & n) | 128))
              : 55296 === (64512 & n) &&
                56320 === (64512 & (i = t.charCodeAt(s + 1)))
              ? ((n = 65536 + ((1023 & n) << 10) + (1023 & i)),
                ++s,
                (e[r++] = (n >> 18) | 240),
                (e[r++] = ((n >> 12) & 63) | 128),
                (e[r++] = ((n >> 6) & 63) | 128),
                (e[r++] = (63 & n) | 128))
              : ((e[r++] = (n >> 12) | 224),
                (e[r++] = ((n >> 6) & 63) | 128),
                (e[r++] = (63 & n) | 128));
          return r - o;
        });
    },
    yeub(t, e) {
      try {
        t.exports =
          "undefined" !== typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (r) {
        t.exports = !1;
      }
    },
    ypnn(t, e) {
      t.exports = (t, e, r) => {
        var n = t.byteLength;
        if (((e = e || 0), (r = r || n), t.slice)) return t.slice(e, r);
        if (
          (e < 0 && (e += n),
          r < 0 && (r += n),
          r > n && (r = n),
          e >= n || e >= r || 0 === n)
        )
          return new ArrayBuffer(0);
        for (
          var i = new Uint8Array(t), o = new Uint8Array(r - e), s = e, u = 0;
          s < r;
          s++, u++
        )
          o[u] = i[s];
        return o.buffer;
      };
    },
    zMFY(t, e) {
      function r() {}
      t.exports = (t, e, n) => {
        var i = !1;
        return (n = n || r), (o.count = t), 0 === t ? e() : o;
        function o(t, r) {
          if (o.count <= 0) throw new Error("after called too many times");
          --o.count,
            t ? ((i = !0), e(t), (e = n)) : 0 !== o.count || i || e(null, r);
        }
      };
    },
  },
]);
