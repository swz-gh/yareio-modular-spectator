// ==UserScript==
// @name        yareio-modular-spectator
// @description A modular version of yareio-spectator
// @namespace   npmjs.com/rollup-plugin-userscript-metablock
// @version     0.1.1
// @author      swz
// @license     MIT
// @homepage    https://github.com/swz-gh/yareio-modular-spectator#readme
// @supportURL  https://github.com/swz-gh/yareio-modular-spectator/issues
// @icon        https://yare.io/favicon.ico
// @match       https://yare.io/d*/*
// @run-at      document-idle
// @grant       none
// ==/UserScript==
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t, e, i, n) {
  return new (i || (i = Promise))(function (o, s) {
    function a(t) {
      try {
        l(n.next(t));
      } catch (t) {
        s(t);
      }
    }
    function r(t) {
      try {
        l(n.throw(t));
      } catch (t) {
        s(t);
      }
    }
    function l(t) {
      var e;
      t.done
        ? o(t.value)
        : ((e = t.value),
          e instanceof i
            ? e
            : new i(function (t) {
                t(e);
              })).then(a, r);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function e(t, e) {
  var i,
    n,
    o,
    s,
    a = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (s = { next: r(0), throw: r(1), return: r(2) }),
    "function" == typeof Symbol &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function r(s) {
    return function (r) {
      return (function (s) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; a; )
          try {
            if (
              ((i = 1),
              n &&
                (o =
                  2 & s[0]
                    ? n.return
                    : s[0]
                    ? n.throw || ((o = n.return) && o.call(n), 0)
                    : n.next) &&
                !(o = o.call(n, s[1])).done)
            )
              return o;
            switch (((n = 0), o && (s = [2 & s[0], o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return a.label++, { value: s[1], done: !1 };
              case 5:
                a.label++, (n = s[1]), (s = [0]);
                continue;
              case 7:
                (s = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !((o = a.trys),
                  (o = o.length > 0 && o[o.length - 1]) ||
                    (6 !== s[0] && 2 !== s[0]))
                ) {
                  a = 0;
                  continue;
                }
                if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  a.label = s[1];
                  break;
                }
                if (6 === s[0] && a.label < o[1]) {
                  (a.label = o[1]), (o = s);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(s);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            s = e.call(t, a);
          } catch (t) {
            (s = [6, t]), (n = 0);
          } finally {
            i = o = 0;
          }
        if (5 & s[0]) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      })([s, r]);
    };
  }
}
function i(t) {
  null == window.dragpositions[t.id] &&
    (window.dragpositions[t.id] = { pos1: 0, pos2: 0, pos3: 0, pos4: 0 });
  var e = document.querySelector("#" + t.id + " .topBar");
  function i(e) {
    (e = e || window.event).preventDefault(),
      (window.dragpositions[t.id].pos3 = e.clientX),
      (window.dragpositions[t.id].pos4 = e.clientY),
      (document.onmouseup = o),
      (document.onmousemove = n);
  }
  function n(e) {
    (e = e || window.event).preventDefault(),
      (window.dragpositions[t.id].pos1 =
        window.dragpositions[t.id].pos3 - e.clientX),
      (window.dragpositions[t.id].pos2 =
        window.dragpositions[t.id].pos4 - e.clientY),
      (window.dragpositions[t.id].pos3 = e.clientX),
      (window.dragpositions[t.id].pos4 = e.clientY),
      (t.style.top = t.offsetTop - window.dragpositions[t.id].pos2 + "px"),
      (t.style.left = t.offsetLeft - window.dragpositions[t.id].pos1 + "px");
  }
  function o() {
    (document.onmouseup = null), (document.onmousemove = null);
  }
  e ? (e.onmousedown = i) : (t.onmousedown = i);
}
window.dragpositions = {};
var n,
  o = (function () {
    function t(t) {
      (this.prevBaseEnergy = 0),
        (this.economyScore = 0),
        (this.economyEfficiency = 0),
        (this.totalEconomyScore = 0),
        (this.totalEconomyEfficiency = 0),
        (this.economyScoreCount = 1),
        (this.base = window.bases[this.basenum]),
        (this.basenum = t);
    }
    return (
      (t.prototype.tick = function () {
        var t = this;
        this.base = window.bases[this.basenum];
        var e = this.base.energy;
        this.prevBaseEnergy > e && (e += this.base.current_spirit_cost),
          (this.economyScore = e - this.prevBaseEnergy),
          (this.economyEfficiency =
            this.economyScore /
            living_spirits
              .filter(function (e) {
                return e.player_id == t.base.player_id && 0 != e.hp;
              })
              .reduce(function (t, e) {
                return t + e.size;
              }, 0)),
          (this.totalEconomyScore += this.economyScore),
          (this.totalEconomyEfficiency += this.economyEfficiency),
          (this.prevBaseEnergy = this.base.energy),
          this.economyScoreCount++;
      }),
      (t.prototype.getTotalEnergyCapacity = function () {
        var t = this;
        return living_spirits
          .filter(function (e) {
            return e.player_id == t.base.player_id && 0 != e.hp;
          })
          .reduce(function (t, e) {
            return t + e.energy_capacity;
          }, 0);
      }),
      (t.prototype.getStats = function () {
        var t = this;
        this.base = window.bases[this.basenum];
        var e = "",
          i = living_spirits.filter(function (e) {
            return e.player_id == t.base.player_id && 0 != e.hp;
          }),
          n = living_spirits.filter(function (e) {
            return e.player_id == t.base.player_id && 0 == e.hp;
          }).length,
          o = i.length,
          s = i.reduce(function (t, e) {
            return t + e.energy;
          }, 0),
          a = i.reduce(function (t, e) {
            return t + e.energy_capacity;
          }, 0);
        return (
          (e += "Unit Count: " + Math.trunc(o) + "\n"),
          (e += "Dead Units: " + Math.trunc(n) + "\n"),
          (e += "Energy: " + Math.trunc(s) + "\n"),
          (e += "Energy Capacity: " + Math.trunc(a) + "\n"),
          (e +=
            "Economy Score (energy/s): " +
            Math.trunc(this.economyScore) +
            "\n"),
          (e +=
            "Avg Economy Score (energy/s): " +
            Math.trunc(this.totalEconomyScore / this.economyScoreCount) +
            "\n"),
          (e +=
            "Economic Efficiency: " + this.economyEfficiency.toFixed(2) + "\n"),
          (e +=
            "Avg Economic Efficiency: " +
            (this.totalEconomyEfficiency / this.economyScoreCount).toFixed(2) +
            "\n")
        );
      }),
      t
    );
  })(),
  s = new Uint8Array(16);
function a() {
  if (
    !n &&
    !(n =
      ("undefined" != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ("undefined" != typeof msCrypto &&
        "function" == typeof msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto)))
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return n(s);
}
var r =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function l(t) {
  return "string" == typeof t && r.test(t);
}
for (var c = [], h = 0; h < 256; ++h) c.push((h + 256).toString(16).substr(1));
function d(t, e, i) {
  var n = (t = t || {}).random || (t.rng || a)();
  if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
    i = i || 0;
    for (var o = 0; o < 16; ++o) e[i + o] = n[o];
    return e;
  }
  return (function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      i = (
        c[t[e + 0]] +
        c[t[e + 1]] +
        c[t[e + 2]] +
        c[t[e + 3]] +
        "-" +
        c[t[e + 4]] +
        c[t[e + 5]] +
        "-" +
        c[t[e + 6]] +
        c[t[e + 7]] +
        "-" +
        c[t[e + 8]] +
        c[t[e + 9]] +
        "-" +
        c[t[e + 10]] +
        c[t[e + 11]] +
        c[t[e + 12]] +
        c[t[e + 13]] +
        c[t[e + 14]] +
        c[t[e + 15]]
      ).toLowerCase();
    if (!l(i)) throw TypeError("Stringified UUID is invalid");
    return i;
  })(n);
}
/*!
 * Chart.js v3.4.1
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */ const u =
  "undefined" == typeof window
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
function f(t, e, i) {
  const n = i || ((t) => Array.prototype.slice.call(t));
  let o = !1,
    s = [];
  return function (...i) {
    (s = n(i)),
      o ||
        ((o = !0),
        u.call(window, () => {
          (o = !1), t.apply(e, s);
        }));
  };
}
const g = (t) => ("start" === t ? "left" : "end" === t ? "right" : "center"),
  p = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2),
  m = (function () {
    let t = 0;
    return function () {
      return t++;
    };
  })();
function b(t) {
  return null == t;
}
function x(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  const e = Object.prototype.toString.call(t);
  return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
}
function y(t) {
  return null !== t && "[object Object]" === Object.prototype.toString.call(t);
}
const _ = (t) => ("number" == typeof t || t instanceof Number) && isFinite(+t);
function v(t, e) {
  return _(t) ? t : e;
}
function w(t, e) {
  return void 0 === t ? e : t;
}
const M = (t, e) =>
  "string" == typeof t && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t;
function k(t, e, i) {
  if (t && "function" == typeof t.call) return t.apply(i, e);
}
function S(t, e, i, n) {
  let o, s, a;
  if (x(t))
    if (((s = t.length), n)) for (o = s - 1; o >= 0; o--) e.call(i, t[o], o);
    else for (o = 0; o < s; o++) e.call(i, t[o], o);
  else if (y(t))
    for (a = Object.keys(t), s = a.length, o = 0; o < s; o++)
      e.call(i, t[a[o]], a[o]);
}
function P(t, e) {
  let i, n, o, s;
  if (!t || !e || t.length !== e.length) return !1;
  for (i = 0, n = t.length; i < n; ++i)
    if (
      ((o = t[i]),
      (s = e[i]),
      o.datasetIndex !== s.datasetIndex || o.index !== s.index)
    )
      return !1;
  return !0;
}
function D(t) {
  if (x(t)) return t.map(D);
  if (y(t)) {
    const e = Object.create(null),
      i = Object.keys(t),
      n = i.length;
    let o = 0;
    for (; o < n; ++o) e[i[o]] = D(t[i[o]]);
    return e;
  }
  return t;
}
function C(t) {
  return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
}
function O(t, e, i, n) {
  if (!C(t)) return;
  const o = e[t],
    s = i[t];
  y(o) && y(s) ? T(o, s, n) : (e[t] = D(s));
}
function T(t, e, i) {
  const n = x(e) ? e : [e],
    o = n.length;
  if (!y(t)) return t;
  const s = (i = i || {}).merger || O;
  for (let a = 0; a < o; ++a) {
    if (!y((e = n[a]))) continue;
    const o = Object.keys(e);
    for (let n = 0, a = o.length; n < a; ++n) s(o[n], t, e, i);
  }
  return t;
}
function A(t, e) {
  return T(t, e, { merger: L });
}
function L(t, e, i) {
  if (!C(t)) return;
  const n = e[t],
    o = i[t];
  y(n) && y(o)
    ? A(n, o)
    : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = D(o));
}
function E(t, e) {
  const i = t.indexOf(".", e);
  return -1 === i ? t.length : i;
}
function R(t, e) {
  if ("" === e) return t;
  let i = 0,
    n = E(e, i);
  for (; t && n > i; ) (t = t[e.substr(i, n - i)]), (i = n + 1), (n = E(e, i));
  return t;
}
function I(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const F = (t) => void 0 !== t,
  z = (t) => "function" == typeof t,
  V = Math.PI,
  B = 2 * V,
  N = B + V,
  W = Number.POSITIVE_INFINITY,
  j = V / 180,
  H = V / 2,
  $ = V / 4,
  Y = (2 * V) / 3,
  U = Math.log10,
  X = Math.sign;
function G(t) {
  const e = Math.round(t);
  t = Z(t, e, t / 1e3) ? e : t;
  const i = Math.pow(10, Math.floor(U(t))),
    n = t / i;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
}
function K(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Z(t, e, i) {
  return Math.abs(t - e) < i;
}
function q(t, e, i) {
  let n, o, s;
  for (n = 0, o = t.length; n < o; n++)
    (s = t[n][i]),
      isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
}
function Q(t) {
  return t * (V / 180);
}
function J(t) {
  return t * (180 / V);
}
function tt(t) {
  if (!_(t)) return;
  let e = 1,
    i = 0;
  for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
  return i;
}
function et(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function it(t, e) {
  return ((t - e + N) % B) - V;
}
function nt(t) {
  return ((t % B) + B) % B;
}
function ot(t, e, i, n) {
  const o = nt(t),
    s = nt(e),
    a = nt(i),
    r = nt(s - o),
    l = nt(a - o),
    c = nt(o - s),
    h = nt(o - a);
  return o === s || o === a || (n && s === a) || (r > l && c < h);
}
function st(t, e, i) {
  return Math.max(e, Math.min(i, t));
}
const at = (t) => 0 === t || 1 === t,
  rt = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * B) / i),
  lt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * B) / i) + 1,
  ct = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => -t * (t - 2),
    easeInOutQuad: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (t -= 1) * t * t + 1,
    easeInOutCubic: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t) => t * t * t * t,
    easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t) => t * t * t * t * t,
    easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t) =>
      (t /= 0.5) < 1
        ? 0.5 * t * t * t * t * t
        : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t) => 1 - Math.cos(t * H),
    easeOutSine: (t) => Math.sin(t * H),
    easeInOutSine: (t) => -0.5 * (Math.cos(V * t) - 1),
    easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
    easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
    easeInOutExpo: (t) =>
      at(t)
        ? t
        : t < 0.5
        ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
        : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
    easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
    easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t) =>
      (t /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t) => (at(t) ? t : rt(t, 0.075, 0.3)),
    easeOutElastic: (t) => (at(t) ? t : lt(t, 0.075, 0.3)),
    easeInOutElastic(t) {
      const e = 0.1125;
      return at(t)
        ? t
        : t < 0.5
        ? 0.5 * rt(2 * t, e, 0.45)
        : 0.5 + 0.5 * lt(2 * t - 1, e, 0.45);
    },
    easeInBack(t) {
      const e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack(t) {
      const e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack(t) {
      let e = 1.70158;
      return (t /= 0.5) < 1
        ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
        : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: (t) => 1 - ct.easeOutBounce(1 - t),
    easeOutBounce(t) {
      const e = 7.5625,
        i = 2.75;
      return t < 1 / i
        ? e * t * t
        : t < 2 / i
        ? e * (t -= 1.5 / i) * t + 0.75
        : t < 2.5 / i
        ? e * (t -= 2.25 / i) * t + 0.9375
        : e * (t -= 2.625 / i) * t + 0.984375;
    },
    easeInOutBounce: (t) =>
      t < 0.5
        ? 0.5 * ct.easeInBounce(2 * t)
        : 0.5 * ct.easeOutBounce(2 * t - 1) + 0.5,
  },
  ht = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  dt = "0123456789ABCDEF",
  ut = (t) => dt[15 & t],
  ft = (t) => dt[(240 & t) >> 4] + dt[15 & t],
  gt = (t) => (240 & t) >> 4 == (15 & t);
function pt(t) {
  var e = (function (t) {
    return gt(t.r) && gt(t.g) && gt(t.b) && gt(t.a);
  })(t)
    ? ut
    : ft;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t;
}
function mt(t) {
  return (t + 0.5) | 0;
}
const bt = (t, e, i) => Math.max(Math.min(t, i), e);
function xt(t) {
  return bt(mt(2.55 * t), 0, 255);
}
function yt(t) {
  return bt(mt(255 * t), 0, 255);
}
function _t(t) {
  return bt(mt(t / 2.55) / 100, 0, 1);
}
function vt(t) {
  return bt(mt(100 * t), 0, 100);
}
const wt =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
const Mt =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function kt(t, e, i) {
  const n = e * Math.min(i, 1 - i),
    o = (e, o = (e + t / 30) % 12) =>
      i - n * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [o(0), o(8), o(4)];
}
function St(t, e, i) {
  const n = (n, o = (n + t / 60) % 6) =>
    i - i * e * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Pt(t, e, i) {
  const n = kt(t, 1, 0.5);
  let o;
  for (e + i > 1 && ((o = 1 / (e + i)), (e *= o), (i *= o)), o = 0; o < 3; o++)
    (n[o] *= 1 - e - i), (n[o] += e);
  return n;
}
function Dt(t) {
  const e = t.r / 255,
    i = t.g / 255,
    n = t.b / 255,
    o = Math.max(e, i, n),
    s = Math.min(e, i, n),
    a = (o + s) / 2;
  let r, l, c;
  return (
    o !== s &&
      ((c = o - s),
      (l = a > 0.5 ? c / (2 - o - s) : c / (o + s)),
      (r =
        o === e
          ? (i - n) / c + (i < n ? 6 : 0)
          : o === i
          ? (n - e) / c + 2
          : (e - i) / c + 4),
      (r = 60 * r + 0.5)),
    [0 | r, l || 0, a]
  );
}
function Ct(t, e, i, n) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(yt);
}
function Ot(t, e, i) {
  return Ct(kt, t, e, i);
}
function Tt(t) {
  return ((t % 360) + 360) % 360;
}
function At(t) {
  const e = Mt.exec(t);
  let i,
    n = 255;
  if (!e) return;
  e[5] !== i && (n = e[6] ? xt(+e[5]) : yt(+e[5]));
  const o = Tt(+e[2]),
    s = +e[3] / 100,
    a = +e[4] / 100;
  return (
    (i =
      "hwb" === e[1]
        ? (function (t, e, i) {
            return Ct(Pt, t, e, i);
          })(o, s, a)
        : "hsv" === e[1]
        ? (function (t, e, i) {
            return Ct(St, t, e, i);
          })(o, s, a)
        : Ot(o, s, a)),
    { r: i[0], g: i[1], b: i[2], a: n }
  );
}
const Lt = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Et = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
let Rt;
function It(t) {
  Rt ||
    ((Rt = (function () {
      const t = {},
        e = Object.keys(Et),
        i = Object.keys(Lt);
      let n, o, s, a, r;
      for (n = 0; n < e.length; n++) {
        for (a = r = e[n], o = 0; o < i.length; o++)
          (s = i[o]), (r = r.replace(s, Lt[s]));
        (s = parseInt(Et[a], 16)),
          (t[r] = [(s >> 16) & 255, (s >> 8) & 255, 255 & s]);
      }
      return t;
    })()),
    (Rt.transparent = [0, 0, 0, 0]));
  const e = Rt[t.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
}
function Ft(t, e, i) {
  if (t) {
    let n = Dt(t);
    (n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1))),
      (n = Ot(n)),
      (t.r = n[0]),
      (t.g = n[1]),
      (t.b = n[2]);
  }
}
function zt(t, e) {
  return t ? Object.assign(e || {}, t) : t;
}
function Vt(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(t)
      ? t.length >= 3 &&
        ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
        t.length > 3 && (e.a = yt(t[3])))
      : ((e = zt(t, { r: 0, g: 0, b: 0, a: 1 })).a = yt(e.a)),
    e
  );
}
function Bt(t) {
  return "r" === t.charAt(0)
    ? (function (t) {
        const e = wt.exec(t);
        let i,
          n,
          o,
          s = 255;
        if (e) {
          if (e[7] !== i) {
            const t = +e[7];
            s = 255 & (e[8] ? xt(t) : 255 * t);
          }
          return (
            (i = +e[1]),
            (n = +e[3]),
            (o = +e[5]),
            (i = 255 & (e[2] ? xt(i) : i)),
            (n = 255 & (e[4] ? xt(n) : n)),
            (o = 255 & (e[6] ? xt(o) : o)),
            { r: i, g: n, b: o, a: s }
          );
        }
      })(t)
    : At(t);
}
class Nt {
  constructor(t) {
    if (t instanceof Nt) return t;
    const e = typeof t;
    let i;
    var n, o, s;
    "object" === e
      ? (i = Vt(t))
      : "string" === e &&
        ((s = (n = t).length),
        "#" === n[0] &&
          (4 === s || 5 === s
            ? (o = {
                r: 255 & (17 * ht[n[1]]),
                g: 255 & (17 * ht[n[2]]),
                b: 255 & (17 * ht[n[3]]),
                a: 5 === s ? 17 * ht[n[4]] : 255,
              })
            : (7 !== s && 9 !== s) ||
              (o = {
                r: (ht[n[1]] << 4) | ht[n[2]],
                g: (ht[n[3]] << 4) | ht[n[4]],
                b: (ht[n[5]] << 4) | ht[n[6]],
                a: 9 === s ? (ht[n[7]] << 4) | ht[n[8]] : 255,
              })),
        (i = o || It(t) || Bt(t))),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = zt(this._rgb);
    return t && (t.a = _t(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Vt(t);
  }
  rgbString() {
    return this._valid
      ? (t = this._rgb) &&
          (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${_t(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
      : this._rgb;
    var t;
  }
  hexString() {
    return this._valid ? pt(this._rgb) : this._rgb;
  }
  hslString() {
    return this._valid
      ? (function (t) {
          if (!t) return;
          const e = Dt(t),
            i = e[0],
            n = vt(e[1]),
            o = vt(e[2]);
          return t.a < 255
            ? `hsla(${i}, ${n}%, ${o}%, ${_t(t.a)})`
            : `hsl(${i}, ${n}%, ${o}%)`;
        })(this._rgb)
      : this._rgb;
  }
  mix(t, e) {
    const i = this;
    if (t) {
      const n = i.rgb,
        o = t.rgb;
      let s;
      const a = e === s ? 0.5 : e,
        r = 2 * a - 1,
        l = n.a - o.a,
        c = ((r * l == -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
      (s = 1 - c),
        (n.r = 255 & (c * n.r + s * o.r + 0.5)),
        (n.g = 255 & (c * n.g + s * o.g + 0.5)),
        (n.b = 255 & (c * n.b + s * o.b + 0.5)),
        (n.a = a * n.a + (1 - a) * o.a),
        (i.rgb = n);
    }
    return i;
  }
  clone() {
    return new Nt(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = yt(t)), this;
  }
  clearer(t) {
    return (this._rgb.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = mt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    return (this._rgb.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Ft(this._rgb, 2, t), this;
  }
  darken(t) {
    return Ft(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Ft(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Ft(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return (
      (function (t, e) {
        var i = Dt(t);
        (i[0] = Tt(i[0] + e)),
          (i = Ot(i)),
          (t.r = i[0]),
          (t.g = i[1]),
          (t.b = i[2]);
      })(this._rgb, t),
      this
    );
  }
}
function Wt(t) {
  return new Nt(t);
}
const jt = (t) => t instanceof CanvasGradient || t instanceof CanvasPattern;
function Ht(t) {
  return jt(t) ? t : Wt(t);
}
function $t(t) {
  return jt(t) ? t : Wt(t).saturate(0.5).darken(0.1).hexString();
}
const Yt = Object.create(null),
  Ut = Object.create(null);
function Xt(t, e) {
  if (!e) return t;
  const i = e.split(".");
  for (let e = 0, n = i.length; e < n; ++e) {
    const n = i[e];
    t = t[n] || (t[n] = Object.create(null));
  }
  return t;
}
function Gt(t, e, i) {
  return "string" == typeof e ? T(Xt(t, e), i) : T(Xt(t, ""), e);
}
var Kt = new (class {
  constructor(t) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (t, e) => $t(e.backgroundColor)),
      (this.hoverBorderColor = (t, e) => $t(e.borderColor)),
      (this.hoverColor = (t, e) => $t(e.color)),
      (this.indexAxis = "x"),
      (this.interaction = { mode: "nearest", intersect: !0 }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      this.describe(t);
  }
  set(t, e) {
    return Gt(this, t, e);
  }
  get(t) {
    return Xt(this, t);
  }
  describe(t, e) {
    return Gt(Ut, t, e);
  }
  override(t, e) {
    return Gt(Yt, t, e);
  }
  route(t, e, i, n) {
    const o = Xt(this, t),
      s = Xt(this, i),
      a = "_" + e;
    Object.defineProperties(o, {
      [a]: { value: o[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const t = this[a],
            e = s[n];
          return y(t) ? Object.assign({}, e, t) : w(t, e);
        },
        set(t) {
          this[a] = t;
        },
      },
    });
  }
})({
  _scriptable: (t) => !t.startsWith("on"),
  _indexable: (t) => "events" !== t,
  hover: { _fallback: "interaction" },
  interaction: { _scriptable: !1, _indexable: !1 },
});
function Zt(t, e, i, n, o) {
  let s = e[o];
  return (
    s || ((s = e[o] = t.measureText(o).width), i.push(o)), s > n && (n = s), n
  );
}
function qt(t, e, i, n) {
  let o = ((n = n || {}).data = n.data || {}),
    s = (n.garbageCollect = n.garbageCollect || []);
  n.font !== e &&
    ((o = n.data = {}), (s = n.garbageCollect = []), (n.font = e)),
    t.save(),
    (t.font = e);
  let a = 0;
  const r = i.length;
  let l, c, h, d, u;
  for (l = 0; l < r; l++)
    if (((d = i[l]), null != d && !0 !== x(d))) a = Zt(t, o, s, a, d);
    else if (x(d))
      for (c = 0, h = d.length; c < h; c++)
        (u = d[c]), null == u || x(u) || (a = Zt(t, o, s, a, u));
  t.restore();
  const f = s.length / 2;
  if (f > i.length) {
    for (l = 0; l < f; l++) delete o[s[l]];
    s.splice(0, f);
  }
  return a;
}
function Qt(t, e, i) {
  const n = t.currentDevicePixelRatio,
    o = 0 !== i ? Math.max(i / 2, 0.5) : 0;
  return Math.round((e - o) * n) / n + o;
}
function Jt(t, e) {
  (e = e || t.getContext("2d")).save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore();
}
function te(t, e, i, n) {
  let o, s, a, r, l;
  const c = e.pointStyle,
    h = e.rotation,
    d = e.radius;
  let u = (h || 0) * j;
  if (
    c &&
    "object" == typeof c &&
    ((o = c.toString()),
    "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)
  )
    return (
      t.save(),
      t.translate(i, n),
      t.rotate(u),
      t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
      void t.restore()
    );
  if (!(isNaN(d) || d <= 0)) {
    switch ((t.beginPath(), c)) {
      default:
        t.arc(i, n, d, 0, B), t.closePath();
        break;
      case "triangle":
        t.moveTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
          (u += Y),
          t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
          (u += Y),
          t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
          t.closePath();
        break;
      case "rectRounded":
        (l = 0.516 * d),
          (r = d - l),
          (s = Math.cos(u + $) * r),
          (a = Math.sin(u + $) * r),
          t.arc(i - s, n - a, l, u - V, u - H),
          t.arc(i + a, n - s, l, u - H, u),
          t.arc(i + s, n + a, l, u, u + H),
          t.arc(i - a, n + s, l, u + H, u + V),
          t.closePath();
        break;
      case "rect":
        if (!h) {
          (r = Math.SQRT1_2 * d), t.rect(i - r, n - r, 2 * r, 2 * r);
          break;
        }
        u += $;
      case "rectRot":
        (s = Math.cos(u) * d),
          (a = Math.sin(u) * d),
          t.moveTo(i - s, n - a),
          t.lineTo(i + a, n - s),
          t.lineTo(i + s, n + a),
          t.lineTo(i - a, n + s),
          t.closePath();
        break;
      case "crossRot":
        u += $;
      case "cross":
        (s = Math.cos(u) * d),
          (a = Math.sin(u) * d),
          t.moveTo(i - s, n - a),
          t.lineTo(i + s, n + a),
          t.moveTo(i + a, n - s),
          t.lineTo(i - a, n + s);
        break;
      case "star":
        (s = Math.cos(u) * d),
          (a = Math.sin(u) * d),
          t.moveTo(i - s, n - a),
          t.lineTo(i + s, n + a),
          t.moveTo(i + a, n - s),
          t.lineTo(i - a, n + s),
          (u += $),
          (s = Math.cos(u) * d),
          (a = Math.sin(u) * d),
          t.moveTo(i - s, n - a),
          t.lineTo(i + s, n + a),
          t.moveTo(i + a, n - s),
          t.lineTo(i - a, n + s);
        break;
      case "line":
        (s = Math.cos(u) * d),
          (a = Math.sin(u) * d),
          t.moveTo(i - s, n - a),
          t.lineTo(i + s, n + a);
        break;
      case "dash":
        t.moveTo(i, n), t.lineTo(i + Math.cos(u) * d, n + Math.sin(u) * d);
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function ee(t, e, i) {
  return (
    (i = i || 0.5),
    t &&
      t.x > e.left - i &&
      t.x < e.right + i &&
      t.y > e.top - i &&
      t.y < e.bottom + i
  );
}
function ie(t, e) {
  t.save(),
    t.beginPath(),
    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    t.clip();
}
function ne(t) {
  t.restore();
}
function oe(t, e, i, n, o) {
  if (!e) return t.lineTo(i.x, i.y);
  if ("middle" === o) {
    const n = (e.x + i.x) / 2;
    t.lineTo(n, e.y), t.lineTo(n, i.y);
  } else ("after" === o) != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
  t.lineTo(i.x, i.y);
}
function se(t, e, i, n) {
  if (!e) return t.lineTo(i.x, i.y);
  t.bezierCurveTo(
    n ? e.cp1x : e.cp2x,
    n ? e.cp1y : e.cp2y,
    n ? i.cp2x : i.cp1x,
    n ? i.cp2y : i.cp1y,
    i.x,
    i.y
  );
}
function ae(t, e, i, n, o, s = {}) {
  const a = x(e) ? e : [e],
    r = s.strokeWidth > 0 && "" !== s.strokeColor;
  let l, c;
  for (
    t.save(),
      t.font = o.string,
      (function (t, e) {
        e.translation && t.translate(e.translation[0], e.translation[1]);
        b(e.rotation) || t.rotate(e.rotation);
        e.color && (t.fillStyle = e.color);
        e.textAlign && (t.textAlign = e.textAlign);
        e.textBaseline && (t.textBaseline = e.textBaseline);
      })(t, s),
      l = 0;
    l < a.length;
    ++l
  )
    (c = a[l]),
      r &&
        (s.strokeColor && (t.strokeStyle = s.strokeColor),
        b(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
        t.strokeText(c, i, n, s.maxWidth)),
      t.fillText(c, i, n, s.maxWidth),
      re(t, i, n, c, s),
      (n += o.lineHeight);
  t.restore();
}
function re(t, e, i, n, o) {
  if (o.strikethrough || o.underline) {
    const s = t.measureText(n),
      a = e - s.actualBoundingBoxLeft,
      r = e + s.actualBoundingBoxRight,
      l = i - s.actualBoundingBoxAscent,
      c = i + s.actualBoundingBoxDescent,
      h = o.strikethrough ? (l + c) / 2 : c;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = o.decorationWidth || 2),
      t.moveTo(a, h),
      t.lineTo(r, h),
      t.stroke();
  }
}
function le(t, e) {
  const { x: i, y: n, w: o, h: s, radius: a } = e;
  t.arc(i + a.topLeft, n + a.topLeft, a.topLeft, -H, V, !0),
    t.lineTo(i, n + s - a.bottomLeft),
    t.arc(i + a.bottomLeft, n + s - a.bottomLeft, a.bottomLeft, V, H, !0),
    t.lineTo(i + o - a.bottomRight, n + s),
    t.arc(
      i + o - a.bottomRight,
      n + s - a.bottomRight,
      a.bottomRight,
      H,
      0,
      !0
    ),
    t.lineTo(i + o, n + a.topRight),
    t.arc(i + o - a.topRight, n + a.topRight, a.topRight, 0, -H, !0),
    t.lineTo(i + a.topLeft, n);
}
const ce = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
  he = new RegExp(
    /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
  );
function de(t, e) {
  const i = ("" + t).match(ce);
  if (!i || "normal" === i[1]) return 1.2 * e;
  switch (((t = +i[2]), i[3])) {
    case "px":
      return t;
    case "%":
      t /= 100;
  }
  return e * t;
}
function ue(t, e) {
  const i = {},
    n = y(e),
    o = n ? Object.keys(e) : e,
    s = y(t) ? (n ? (i) => w(t[i], t[e[i]]) : (e) => t[e]) : () => t;
  for (const t of o) i[t] = +s(t) || 0;
  return i;
}
function fe(t) {
  return ue(t, { top: "y", right: "x", bottom: "y", left: "x" });
}
function ge(t) {
  return ue(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function pe(t) {
  const e = fe(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function me(t, e) {
  (t = t || {}), (e = e || Kt.font);
  let i = w(t.size, e.size);
  "string" == typeof i && (i = parseInt(i, 10));
  let n = w(t.style, e.style);
  n &&
    !("" + n).match(he) &&
    (console.warn('Invalid font style specified: "' + n + '"'), (n = ""));
  const o = {
    family: w(t.family, e.family),
    lineHeight: de(w(t.lineHeight, e.lineHeight), i),
    size: i,
    style: n,
    weight: w(t.weight, e.weight),
    string: "",
  };
  return (
    (o.string = (function (t) {
      return !t || b(t.size) || b(t.family)
        ? null
        : (t.style ? t.style + " " : "") +
            (t.weight ? t.weight + " " : "") +
            t.size +
            "px " +
            t.family;
    })(o)),
    o
  );
}
function be(t, e, i, n) {
  let o,
    s,
    a,
    r = !0;
  for (o = 0, s = t.length; o < s; ++o)
    if (
      ((a = t[o]),
      void 0 !== a &&
        (void 0 !== e && "function" == typeof a && ((a = a(e)), (r = !1)),
        void 0 !== i && x(a) && ((a = a[i % a.length]), (r = !1)),
        void 0 !== a))
    )
      return n && !r && (n.cacheable = !1), a;
}
function xe(t, e, i) {
  i = i || ((i) => t[i] < e);
  let n,
    o = t.length - 1,
    s = 0;
  for (; o - s > 1; ) (n = (s + o) >> 1), i(n) ? (s = n) : (o = n);
  return { lo: s, hi: o };
}
const ye = (t, e, i) => xe(t, i, (n) => t[n][e] < i),
  _e = (t, e, i) => xe(t, i, (n) => t[n][e] >= i);
const ve = ["push", "pop", "shift", "splice", "unshift"];
function we(t, e) {
  const i = t._chartjs;
  if (!i) return;
  const n = i.listeners,
    o = n.indexOf(e);
  -1 !== o && n.splice(o, 1),
    n.length > 0 ||
      (ve.forEach((e) => {
        delete t[e];
      }),
      delete t._chartjs);
}
function Me(t) {
  const e = new Set();
  let i, n;
  for (i = 0, n = t.length; i < n; ++i) e.add(t[i]);
  return e.size === n ? t : Array.from(e);
}
function ke(t, e = [""], i = t, n, o = () => t[0]) {
  F(n) || (n = Ie("_fallback", t));
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: t,
    _rootScopes: i,
    _fallback: n,
    _getTarget: o,
    override: (o) => ke([o, ...t], e, i, n),
  };
  return new Proxy(s, {
    deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
    get: (i, n) =>
      Oe(i, n, () =>
        (function (t, e, i, n) {
          let o;
          for (const s of e)
            if (((o = Ie(De(s, t), i)), F(o)))
              return Ce(t, o) ? Ee(i, n, t, o) : o;
        })(n, e, t, i)
      ),
    getOwnPropertyDescriptor: (t, e) =>
      Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
    getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
    has: (t, e) => Fe(t).includes(e),
    ownKeys: (t) => Fe(t),
    set: (t, e, i) => (
      ((t._storage || (t._storage = o()))[e] = i),
      delete t[e],
      delete t._keys,
      !0
    ),
  });
}
function Se(t, e, i, n) {
  const o = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: i,
    _stack: new Set(),
    _descriptors: Pe(t, n),
    setContext: (e) => Se(t, e, i, n),
    override: (o) => Se(t.override(o), e, i, n),
  };
  return new Proxy(o, {
    deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
    get: (t, e, i) =>
      Oe(t, e, () =>
        (function (t, e, i) {
          const { _proxy: n, _context: o, _subProxy: s, _descriptors: a } = t;
          let r = n[e];
          z(r) &&
            a.isScriptable(e) &&
            (r = (function (t, e, i, n) {
              const { _proxy: o, _context: s, _subProxy: a, _stack: r } = i;
              if (r.has(t))
                throw new Error(
                  "Recursion detected: " + Array.from(r).join("->") + "->" + t
                );
              r.add(t),
                (e = e(s, a || n)),
                r.delete(t),
                y(e) && (e = Ee(o._scopes, o, t, e));
              return e;
            })(e, r, t, i));
          x(r) &&
            r.length &&
            (r = (function (t, e, i, n) {
              const {
                _proxy: o,
                _context: s,
                _subProxy: a,
                _descriptors: r,
              } = i;
              if (F(s.index) && n(t)) e = e[s.index % e.length];
              else if (y(e[0])) {
                const i = e,
                  n = o._scopes.filter((t) => t !== i);
                e = [];
                for (const l of i) {
                  const i = Ee(n, o, t, l);
                  e.push(Se(i, s, a && a[t], r));
                }
              }
              return e;
            })(e, r, t, a.isIndexable));
          Ce(e, r) && (r = Se(r, o, s && s[e], a));
          return r;
        })(t, e, i)
      ),
    getOwnPropertyDescriptor: (e, i) =>
      e._descriptors.allKeys
        ? Reflect.has(t, i)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(t, i),
    getPrototypeOf: () => Reflect.getPrototypeOf(t),
    has: (e, i) => Reflect.has(t, i),
    ownKeys: () => Reflect.ownKeys(t),
    set: (e, i, n) => ((t[i] = n), delete e[i], !0),
  });
}
function Pe(t, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: i = e.scriptable,
    _indexable: n = e.indexable,
    _allKeys: o = e.allKeys,
  } = t;
  return {
    allKeys: o,
    scriptable: i,
    indexable: n,
    isScriptable: z(i) ? i : () => i,
    isIndexable: z(n) ? n : () => n,
  };
}
const De = (t, e) => (t ? t + I(e) : e),
  Ce = (t, e) => y(e) && "adapters" !== t;
function Oe(t, e, i) {
  let n = t[e];
  return F(n) || ((n = i()), F(n) && (t[e] = n)), n;
}
function Te(t, e, i) {
  return z(t) ? t(e, i) : t;
}
const Ae = (t, e) => (!0 === t ? e : "string" == typeof t ? R(e, t) : void 0);
function Le(t, e, i, n) {
  for (const o of e) {
    const e = Ae(i, o);
    if (e) {
      t.add(e);
      const o = Te(e._fallback, i, e);
      if (F(o) && o !== i && o !== n) return o;
    } else if (!1 === e && F(n) && i !== n) return null;
  }
  return !1;
}
function Ee(t, e, i, n) {
  const o = e._rootScopes,
    s = Te(e._fallback, i, n),
    a = [...t, ...o],
    r = new Set();
  r.add(n);
  let l = Re(r, a, i, s || i);
  return (
    null !== l &&
    (!F(s) || s === i || ((l = Re(r, a, s, l)), null !== l)) &&
    ke(Array.from(r), [""], o, s, () =>
      (function (t, e, i) {
        const n = t._getTarget();
        e in n || (n[e] = {});
        const o = n[e];
        if (x(o) && y(i)) return i;
        return o;
      })(e, i, n)
    )
  );
}
function Re(t, e, i, n) {
  for (; i; ) i = Le(t, e, i, n);
  return i;
}
function Ie(t, e) {
  for (const i of e) {
    if (!i) continue;
    const e = i[t];
    if (F(e)) return e;
  }
}
function Fe(t) {
  let e = t._keys;
  return (
    e ||
      (e = t._keys =
        (function (t) {
          const e = new Set();
          for (const i of t)
            for (const t of Object.keys(i).filter((t) => !t.startsWith("_")))
              e.add(t);
          return Array.from(e);
        })(t._scopes)),
    e
  );
}
const ze = Number.EPSILON || 1e-14,
  Ve = (t, e) => e < t.length && !t[e].skip && t[e],
  Be = (t) => ("x" === t ? "y" : "x");
function Ne(t, e, i, n) {
  const o = t.skip ? e : t,
    s = e,
    a = i.skip ? e : i,
    r = et(s, o),
    l = et(a, s);
  let c = r / (r + l),
    h = l / (r + l);
  (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
  const d = n * c,
    u = n * h;
  return {
    previous: { x: s.x - d * (a.x - o.x), y: s.y - d * (a.y - o.y) },
    next: { x: s.x + u * (a.x - o.x), y: s.y + u * (a.y - o.y) },
  };
}
function We(t, e = "x") {
  const i = Be(e),
    n = t.length,
    o = Array(n).fill(0),
    s = Array(n);
  let a,
    r,
    l,
    c = Ve(t, 0);
  for (a = 0; a < n; ++a)
    if (((r = l), (l = c), (c = Ve(t, a + 1)), l)) {
      if (c) {
        const t = c[e] - l[e];
        o[a] = 0 !== t ? (c[i] - l[i]) / t : 0;
      }
      s[a] = r
        ? c
          ? X(o[a - 1]) !== X(o[a])
            ? 0
            : (o[a - 1] + o[a]) / 2
          : o[a - 1]
        : o[a];
    }
  !(function (t, e, i) {
    const n = t.length;
    let o,
      s,
      a,
      r,
      l,
      c = Ve(t, 0);
    for (let h = 0; h < n - 1; ++h)
      (l = c),
        (c = Ve(t, h + 1)),
        l &&
          c &&
          (Z(e[h], 0, ze)
            ? (i[h] = i[h + 1] = 0)
            : ((o = i[h] / e[h]),
              (s = i[h + 1] / e[h]),
              (r = Math.pow(o, 2) + Math.pow(s, 2)),
              r <= 9 ||
                ((a = 3 / Math.sqrt(r)),
                (i[h] = o * a * e[h]),
                (i[h + 1] = s * a * e[h]))));
  })(t, o, s),
    (function (t, e, i = "x") {
      const n = Be(i),
        o = t.length;
      let s,
        a,
        r,
        l = Ve(t, 0);
      for (let c = 0; c < o; ++c) {
        if (((a = r), (r = l), (l = Ve(t, c + 1)), !r)) continue;
        const o = r[i],
          h = r[n];
        a &&
          ((s = (o - a[i]) / 3),
          (r[`cp1${i}`] = o - s),
          (r[`cp1${n}`] = h - s * e[c])),
          l &&
            ((s = (l[i] - o) / 3),
            (r[`cp2${i}`] = o + s),
            (r[`cp2${n}`] = h + s * e[c]));
      }
    })(t, s, e);
}
function je(t, e, i) {
  return Math.max(Math.min(t, i), e);
}
function He(t, e, i, n, o) {
  let s, a, r, l;
  if (
    (e.spanGaps && (t = t.filter((t) => !t.skip)),
    "monotone" === e.cubicInterpolationMode)
  )
    We(t, o);
  else {
    let i = n ? t[t.length - 1] : t[0];
    for (s = 0, a = t.length; s < a; ++s)
      (r = t[s]),
        (l = Ne(i, r, t[Math.min(s + 1, a - (n ? 0 : 1)) % a], e.tension)),
        (r.cp1x = l.previous.x),
        (r.cp1y = l.previous.y),
        (r.cp2x = l.next.x),
        (r.cp2y = l.next.y),
        (i = r);
  }
  e.capBezierPoints &&
    (function (t, e) {
      let i,
        n,
        o,
        s,
        a,
        r = ee(t[0], e);
      for (i = 0, n = t.length; i < n; ++i)
        (a = s),
          (s = r),
          (r = i < n - 1 && ee(t[i + 1], e)),
          s &&
            ((o = t[i]),
            a &&
              ((o.cp1x = je(o.cp1x, e.left, e.right)),
              (o.cp1y = je(o.cp1y, e.top, e.bottom))),
            r &&
              ((o.cp2x = je(o.cp2x, e.left, e.right)),
              (o.cp2y = je(o.cp2y, e.top, e.bottom))));
    })(t, i);
}
function $e(t) {
  let e = t.parentNode;
  return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
}
function Ye(t, e, i) {
  let n;
  return (
    "string" == typeof t
      ? ((n = parseInt(t, 10)),
        -1 !== t.indexOf("%") && (n = (n / 100) * e.parentNode[i]))
      : (n = t),
    n
  );
}
const Ue = (t) => window.getComputedStyle(t, null);
const Xe = ["top", "right", "bottom", "left"];
function Ge(t, e, i) {
  const n = {};
  i = i ? "-" + i : "";
  for (let o = 0; o < 4; o++) {
    const s = Xe[o];
    n[s] = parseFloat(t[e + "-" + s + i]) || 0;
  }
  return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
}
function Ke(t, e) {
  const { canvas: i, currentDevicePixelRatio: n } = e,
    o = Ue(i),
    s = "border-box" === o.boxSizing,
    a = Ge(o, "padding"),
    r = Ge(o, "border", "width"),
    {
      x: l,
      y: c,
      box: h,
    } = (function (t, e) {
      const i = t.native || t,
        n = i.touches,
        o = n && n.length ? n[0] : i,
        { offsetX: s, offsetY: a } = o;
      let r,
        l,
        c = !1;
      if (
        ((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(s, a, i.target)
      )
        (r = s), (l = a);
      else {
        const t = e.getBoundingClientRect();
        (r = o.clientX - t.left), (l = o.clientY - t.top), (c = !0);
      }
      return { x: r, y: l, box: c };
    })(t, i),
    d = a.left + (h && r.left),
    u = a.top + (h && r.top);
  let { width: f, height: g } = e;
  return (
    s && ((f -= a.width + r.width), (g -= a.height + r.height)),
    {
      x: Math.round((((l - d) / f) * i.width) / n),
      y: Math.round((((c - u) / g) * i.height) / n),
    }
  );
}
const Ze = (t) => Math.round(10 * t) / 10;
function qe(t, e, i, n) {
  const o = Ue(t),
    s = Ge(o, "margin"),
    a = Ye(o.maxWidth, t, "clientWidth") || W,
    r = Ye(o.maxHeight, t, "clientHeight") || W,
    l = (function (t, e, i) {
      let n, o;
      if (void 0 === e || void 0 === i) {
        const s = $e(t);
        if (s) {
          const t = s.getBoundingClientRect(),
            a = Ue(s),
            r = Ge(a, "border", "width"),
            l = Ge(a, "padding");
          (e = t.width - l.width - r.width),
            (i = t.height - l.height - r.height),
            (n = Ye(a.maxWidth, s, "clientWidth")),
            (o = Ye(a.maxHeight, s, "clientHeight"));
        } else (e = t.clientWidth), (i = t.clientHeight);
      }
      return { width: e, height: i, maxWidth: n || W, maxHeight: o || W };
    })(t, e, i);
  let { width: c, height: h } = l;
  if ("content-box" === o.boxSizing) {
    const t = Ge(o, "border", "width"),
      e = Ge(o, "padding");
    (c -= e.width + t.width), (h -= e.height + t.height);
  }
  return (
    (c = Math.max(0, c - s.width)),
    (h = Math.max(0, n ? Math.floor(c / n) : h - s.height)),
    (c = Ze(Math.min(c, a, l.maxWidth))),
    (h = Ze(Math.min(h, r, l.maxHeight))),
    c && !h && (h = Ze(c / 2)),
    { width: c, height: h }
  );
}
function Qe(t, e, i) {
  const n = e || 1,
    o = Math.floor(t.height * n),
    s = Math.floor(t.width * n);
  (t.height = o / n), (t.width = s / n);
  const a = t.canvas;
  return (
    a.style &&
      (i || (!a.style.height && !a.style.width)) &&
      ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
    (t.currentDevicePixelRatio !== n || a.height !== o || a.width !== s) &&
      ((t.currentDevicePixelRatio = n),
      (a.height = o),
      (a.width = s),
      t.ctx.setTransform(n, 0, 0, n, 0, 0),
      !0)
  );
}
const Je = (function () {
  let t = !1;
  try {
    const e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e);
  } catch (t) {}
  return t;
})();
function ti(t, e) {
  const i = (function (t, e) {
      return Ue(t).getPropertyValue(e);
    })(t, e),
    n = i && i.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function ei(t, e, i, n) {
  return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
}
function ii(t, e, i, n) {
  return {
    x: t.x + i * (e.x - t.x),
    y:
      "middle" === n
        ? i < 0.5
          ? t.y
          : e.y
        : "after" === n
        ? i < 1
          ? t.y
          : e.y
        : i > 0
        ? e.y
        : t.y,
  };
}
function ni(t, e, i, n) {
  const o = { x: t.cp2x, y: t.cp2y },
    s = { x: e.cp1x, y: e.cp1y },
    a = ei(t, o, i),
    r = ei(o, s, i),
    l = ei(s, e, i),
    c = ei(a, r, i),
    h = ei(r, l, i);
  return ei(c, h, i);
}
const oi = new Map();
function si(t, e, i) {
  return (function (t, e) {
    e = e || {};
    const i = t + JSON.stringify(e);
    let n = oi.get(i);
    return n || ((n = new Intl.NumberFormat(t, e)), oi.set(i, n)), n;
  })(e, i).format(t);
}
function ai(t, e, i) {
  return t
    ? (function (t, e) {
        return {
          x: (i) => t + t + e - i,
          setWidth(t) {
            e = t;
          },
          textAlign: (t) =>
            "center" === t ? t : "right" === t ? "left" : "right",
          xPlus: (t, e) => t - e,
          leftForLtr: (t, e) => t - e,
        };
      })(e, i)
    : {
        x: (t) => t,
        setWidth(t) {},
        textAlign: (t) => t,
        xPlus: (t, e) => t + e,
        leftForLtr: (t, e) => t,
      };
}
function ri(t) {
  return "angle" === t
    ? { between: ot, compare: it, normalize: nt }
    : {
        between: (t, e, i) => t >= Math.min(e, i) && t <= Math.max(i, e),
        compare: (t, e) => t - e,
        normalize: (t) => t,
      };
}
function li({ start: t, end: e, count: i, loop: n, style: o }) {
  return {
    start: t % i,
    end: e % i,
    loop: n && (e - t + 1) % i == 0,
    style: o,
  };
}
function ci(t, e, i) {
  if (!i) return [t];
  const { property: n, start: o, end: s } = i,
    a = e.length,
    { compare: r, between: l, normalize: c } = ri(n),
    {
      start: h,
      end: d,
      loop: u,
      style: f,
    } = (function (t, e, i) {
      const { property: n, start: o, end: s } = i,
        { between: a, normalize: r } = ri(n),
        l = e.length;
      let c,
        h,
        { start: d, end: u, loop: f } = t;
      if (f) {
        for (
          d += l, u += l, c = 0, h = l;
          c < h && a(r(e[d % l][n]), o, s);
          ++c
        )
          d--, u--;
        (d %= l), (u %= l);
      }
      return u < d && (u += l), { start: d, end: u, loop: f, style: t.style };
    })(t, e, i),
    g = [];
  let p,
    m,
    b,
    x = !1,
    y = null;
  const _ = () => x || (l(o, b, p) && 0 !== r(o, b)),
    v = () => !x || 0 === r(s, p) || l(s, b, p);
  for (let t = h, i = h; t <= d; ++t)
    (m = e[t % a]),
      m.skip ||
        ((p = c(m[n])),
        p !== b &&
          ((x = l(p, o, s)),
          null === y && _() && (y = 0 === r(p, o) ? t : i),
          null !== y &&
            v() &&
            (g.push(li({ start: y, end: t, loop: u, count: a, style: f })),
            (y = null)),
          (i = t),
          (b = p)));
  return (
    null !== y && g.push(li({ start: y, end: d, loop: u, count: a, style: f })),
    g
  );
}
function hi(t, e) {
  const i = [],
    n = t.segments;
  for (let o = 0; o < n.length; o++) {
    const s = ci(n[o], t.points, e);
    s.length && i.push(...s);
  }
  return i;
}
function di(t, e, i) {
  return i && i.setContext && e
    ? (function (t, e, i) {
        const n = e.length,
          o = [];
        let s = t[0].start,
          a = s;
        for (const r of t) {
          let t,
            l,
            c = e[s % n];
          for (a = s + 1; a <= r.end; a++) {
            const h = e[a % n];
            (l = ui(i.setContext({ type: "segment", p0: c, p1: h }))),
              fi(l, t) &&
                (o.push({ start: s, end: a - 1, loop: r.loop, style: t }),
                (t = l),
                (s = a - 1)),
              (c = h),
              (t = l);
          }
          s < a - 1 &&
            (o.push({ start: s, end: a - 1, loop: r.loop, style: l }),
            (s = a - 1));
        }
        return o;
      })(t, e, i)
    : t;
}
function ui(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor,
  };
}
function fi(t, e) {
  return e && JSON.stringify(t) !== JSON.stringify(e);
}
/*!
 * Chart.js v3.4.1
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */ var gi = new (class {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, i, n) {
    const o = e.listeners[n],
      s = e.duration;
    o.forEach((n) =>
      n({
        chart: t,
        initial: e.initial,
        numSteps: s,
        currentStep: Math.min(i - e.start, s),
      })
    );
  }
  _refresh() {
    const t = this;
    t._request ||
      ((t._running = !0),
      (t._request = u.call(window, () => {
        t._update(), (t._request = null), t._running && t._refresh();
      })));
  }
  _update(t = Date.now()) {
    const e = this;
    let i = 0;
    e._charts.forEach((n, o) => {
      if (!n.running || !n.items.length) return;
      const s = n.items;
      let a,
        r = s.length - 1,
        l = !1;
      for (; r >= 0; --r)
        (a = s[r]),
          a._active
            ? (a._total > n.duration && (n.duration = a._total),
              a.tick(t),
              (l = !0))
            : ((s[r] = s[s.length - 1]), s.pop());
      l && (o.draw(), e._notify(o, n, t, "progress")),
        s.length ||
          ((n.running = !1), e._notify(o, n, t, "complete"), (n.initial = !1)),
        (i += s.length);
    }),
      (e._lastDate = t),
      0 === i && (e._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        e.set(t, i)),
      i
    );
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    e && e.length && this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !!(e && e.running && e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const i = e.items;
    let n = i.length - 1;
    for (; n >= 0; --n) i[n].cancel();
    (e.items = []), this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
})();
const pi = {
  boolean: (t, e, i) => (i > 0.5 ? e : t),
  color(t, e, i) {
    const n = Ht(t || "transparent"),
      o = n.valid && Ht(e || "transparent");
    return o && o.valid ? o.mix(n, i).hexString() : e;
  },
  number: (t, e, i) => t + (e - t) * i,
};
class mi {
  constructor(t, e, i, n) {
    const o = e[i];
    n = be([t.to, n, o, t.from]);
    const s = be([t.from, o, n]);
    (this._active = !0),
      (this._fn = t.fn || pi[t.type || typeof s]),
      (this._easing = ct[t.easing] || ct.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = i),
      (this._from = s),
      (this._to = n),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    const n = this;
    if (n._active) {
      n._notify(!1);
      const o = n._target[n._prop],
        s = i - n._start,
        a = n._duration - s;
      (n._start = i),
        (n._duration = Math.floor(Math.max(a, t.duration))),
        (n._total += s),
        (n._loop = !!t.loop),
        (n._to = be([t.to, e, o, t.from])),
        (n._from = be([t.from, o, e]));
    }
  }
  cancel() {
    const t = this;
    t._active && (t.tick(Date.now()), (t._active = !1), t._notify(!1));
  }
  tick(t) {
    const e = this,
      i = t - e._start,
      n = e._duration,
      o = e._prop,
      s = e._from,
      a = e._loop,
      r = e._to;
    let l;
    if (((e._active = s !== r && (a || i < n)), !e._active))
      return (e._target[o] = r), void e._notify(!0);
    i < 0
      ? (e._target[o] = s)
      : ((l = (i / n) % 2),
        (l = a && l > 1 ? 2 - l : l),
        (l = e._easing(Math.min(1, Math.max(0, l)))),
        (e._target[o] = e._fn(s, r, l)));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({ res: e, rej: i });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej",
      i = this._promises || [];
    for (let t = 0; t < i.length; t++) i[t][e]();
  }
}
Kt.set("animation", {
  delay: void 0,
  duration: 1e3,
  easing: "easeOutQuart",
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0,
});
const bi = Object.keys(Kt.animation);
Kt.describe("animation", {
  _fallback: !1,
  _indexable: !1,
  _scriptable: (t) => "onProgress" !== t && "onComplete" !== t && "fn" !== t,
}),
  Kt.set("animations", {
    colors: {
      type: "color",
      properties: ["color", "borderColor", "backgroundColor"],
    },
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius", "tension"],
    },
  }),
  Kt.describe("animations", { _fallback: "animation" }),
  Kt.set("transitions", {
    active: { animation: { duration: 400 } },
    resize: { animation: { duration: 0 } },
    show: {
      animations: {
        colors: { from: "transparent" },
        visible: { type: "boolean", duration: 0 },
      },
    },
    hide: {
      animations: {
        colors: { to: "transparent" },
        visible: { type: "boolean", easing: "linear", fn: (t) => 0 | t },
      },
    },
  });
class xi {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!y(t)) return;
    const e = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const n = t[i];
      if (!y(n)) return;
      const o = {};
      for (const t of bi) o[t] = n[t];
      ((x(n.properties) && n.properties) || [i]).forEach((t) => {
        (t !== i && e.has(t)) || e.set(t, o);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options,
      n = (function (t, e) {
        if (!e) return;
        let i = t.options;
        if (!i) return void (t.options = e);
        i.$shared &&
          (t.options = i =
            Object.assign({}, i, { $shared: !1, $animations: {} }));
        return i;
      })(t, i);
    if (!n) return [];
    const o = this._createAnimations(n, i);
    return (
      i.$shared &&
        (function (t, e) {
          const i = [],
            n = Object.keys(e);
          for (let e = 0; e < n.length; e++) {
            const o = t[n[e]];
            o && o.active() && i.push(o.wait());
          }
          return Promise.all(i);
        })(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, e) {
    const i = this._properties,
      n = [],
      o = t.$animations || (t.$animations = {}),
      s = Object.keys(e),
      a = Date.now();
    let r;
    for (r = s.length - 1; r >= 0; --r) {
      const l = s[r];
      if ("$" === l.charAt(0)) continue;
      if ("options" === l) {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const c = e[l];
      let h = o[l];
      const d = i.get(l);
      if (h) {
        if (d && h.active()) {
          h.update(d, c, a);
          continue;
        }
        h.cancel();
      }
      d && d.duration
        ? ((o[l] = h = new mi(d, t, l, c)), n.push(h))
        : (t[l] = c);
    }
    return n;
  }
  update(t, e) {
    if (0 === this._properties.size) return void Object.assign(t, e);
    const i = this._createAnimations(t, e);
    return i.length ? (gi.add(this._chart, i), !0) : void 0;
  }
}
function yi(t, e) {
  const i = (t && t.options) || {},
    n = i.reverse,
    o = void 0 === i.min ? e : 0,
    s = void 0 === i.max ? e : 0;
  return { start: n ? s : o, end: n ? o : s };
}
function _i(t, e) {
  const i = [],
    n = t._getSortedDatasetMetas(e);
  let o, s;
  for (o = 0, s = n.length; o < s; ++o) i.push(n[o].index);
  return i;
}
function vi(t, e, i, n) {
  const o = t.keys,
    s = "single" === n.mode;
  let a, r, l, c;
  if (null !== e) {
    for (a = 0, r = o.length; a < r; ++a) {
      if (((l = +o[a]), l === i)) {
        if (n.all) continue;
        break;
      }
      (c = t.values[l]), _(c) && (s || 0 === e || X(e) === X(c)) && (e += c);
    }
    return e;
  }
}
function wi(t, e) {
  const i = t && t.options.stacked;
  return i || (void 0 === i && void 0 !== e.stack);
}
function Mi(t, e, i) {
  const n = t[e] || (t[e] = {});
  return n[i] || (n[i] = {});
}
function ki(t, e, i) {
  for (const n of e.getMatchingVisibleMetas("bar").reverse()) {
    const e = t[n.index];
    if ((i && e > 0) || (!i && e < 0)) return n.index;
  }
  return null;
}
function Si(t, e) {
  const { chart: i, _cachedMeta: n } = t,
    o = i._stacks || (i._stacks = {}),
    { iScale: s, vScale: a, index: r } = n,
    l = s.axis,
    c = a.axis,
    h = (function (t, e, i) {
      return `${t.id}.${e.id}.${i.stack || i.type}`;
    })(s, a, n),
    d = e.length;
  let u;
  for (let t = 0; t < d; ++t) {
    const i = e[t],
      { [l]: n, [c]: s } = i;
    (u = (i._stacks || (i._stacks = {}))[c] = Mi(o, h, n)),
      (u[r] = s),
      (u._top = ki(u, a, !0)),
      (u._bottom = ki(u, a, !1));
  }
}
function Pi(t, e) {
  const i = t.scales;
  return Object.keys(i)
    .filter((t) => i[t].axis === e)
    .shift();
}
function Di(t, e) {
  const i = t.vScale && t.vScale.axis;
  if (i) {
    e = e || t._parsed;
    for (const n of e) {
      const e = n._stacks;
      if (!e || void 0 === e[i] || void 0 === e[i][t.index]) return;
      delete e[i][t.index];
    }
  }
}
const Ci = (t) => "reset" === t || "none" === t,
  Oi = (t, e) => (e ? t : Object.assign({}, t));
class Ti {
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.$context = void 0),
      (this._syncList = []),
      this.initialize();
  }
  initialize() {
    const t = this,
      e = t._cachedMeta;
    t.configure(),
      t.linkScales(),
      (e._stacked = wi(e.vScale, e)),
      t.addElements();
  }
  updateIndex(t) {
    this.index !== t && Di(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this,
      e = t.chart,
      i = t._cachedMeta,
      n = t.getDataset(),
      o = (t, e, i, n) => ("x" === t ? e : "r" === t ? n : i),
      s = (i.xAxisID = w(n.xAxisID, Pi(e, "x"))),
      a = (i.yAxisID = w(n.yAxisID, Pi(e, "y"))),
      r = (i.rAxisID = w(n.rAxisID, Pi(e, "r"))),
      l = i.indexAxis,
      c = (i.iAxisID = o(l, s, a, r)),
      h = (i.vAxisID = o(l, a, s, r));
    (i.xScale = t.getScaleForId(s)),
      (i.yScale = t.getScaleForId(a)),
      (i.rScale = t.getScaleForId(r)),
      (i.iScale = t.getScaleForId(c)),
      (i.vScale = t.getScaleForId(h));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && we(this._data, this), t._stacked && Di(t);
  }
  _dataCheck() {
    const t = this,
      e = t.getDataset(),
      i = e.data || (e.data = []),
      n = t._data;
    if (y(i))
      t._data = (function (t) {
        const e = Object.keys(t),
          i = new Array(e.length);
        let n, o, s;
        for (n = 0, o = e.length; n < o; ++n)
          (s = e[n]), (i[n] = { x: s, y: t[s] });
        return i;
      })(i);
    else if (n !== i) {
      if (n) {
        we(n, t);
        const e = t._cachedMeta;
        Di(e), (e._parsed = []);
      }
      i &&
        Object.isExtensible(i) &&
        ((s = t),
        (o = i)._chartjs
          ? o._chartjs.listeners.push(s)
          : (Object.defineProperty(o, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [s] },
            }),
            ve.forEach((t) => {
              const e = "_onData" + I(t),
                i = o[t];
              Object.defineProperty(o, t, {
                configurable: !0,
                enumerable: !1,
                value(...t) {
                  const n = i.apply(this, t);
                  return (
                    o._chartjs.listeners.forEach((i) => {
                      "function" == typeof i[e] && i[e](...t);
                    }),
                    n
                  );
                },
              });
            }))),
        (t._syncList = []),
        (t._data = i);
    }
    var o, s;
  }
  addElements() {
    const t = this,
      e = t._cachedMeta;
    t._dataCheck(),
      t.datasetElementType && (e.dataset = new t.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this,
      i = e._cachedMeta,
      n = e.getDataset();
    let o = !1;
    e._dataCheck();
    const s = i._stacked;
    (i._stacked = wi(i.vScale, i)),
      i.stack !== n.stack && ((o = !0), Di(i), (i.stack = n.stack)),
      e._resyncElements(t),
      (o || s !== i._stacked) && Si(e, i._parsed);
  }
  configure() {
    const t = this,
      e = t.chart.config,
      i = e.datasetScopeKeys(t._type),
      n = e.getOptionScopes(t.getDataset(), i, !0);
    (t.options = e.createResolver(n, t.getContext())),
      (t._parsing = t.options.parsing);
  }
  parse(t, e) {
    const i = this,
      { _cachedMeta: n, _data: o } = i,
      { iScale: s, _stacked: a } = n,
      r = s.axis;
    let l,
      c,
      h,
      d = (0 === t && e === o.length) || n._sorted,
      u = t > 0 && n._parsed[t - 1];
    if (!1 === i._parsing) (n._parsed = o), (n._sorted = !0), (h = o);
    else {
      h = x(o[t])
        ? i.parseArrayData(n, o, t, e)
        : y(o[t])
        ? i.parseObjectData(n, o, t, e)
        : i.parsePrimitiveData(n, o, t, e);
      const s = () => null === c[r] || (u && c[r] < u[r]);
      for (l = 0; l < e; ++l)
        (n._parsed[l + t] = c = h[l]), d && (s() && (d = !1), (u = c));
      n._sorted = d;
    }
    a && Si(i, h);
  }
  parsePrimitiveData(t, e, i, n) {
    const { iScale: o, vScale: s } = t,
      a = o.axis,
      r = s.axis,
      l = o.getLabels(),
      c = o === s,
      h = new Array(n);
    let d, u, f;
    for (d = 0, u = n; d < u; ++d)
      (f = d + i),
        (h[d] = { [a]: c || o.parse(l[f], f), [r]: s.parse(e[f], f) });
    return h;
  }
  parseArrayData(t, e, i, n) {
    const { xScale: o, yScale: s } = t,
      a = new Array(n);
    let r, l, c, h;
    for (r = 0, l = n; r < l; ++r)
      (c = r + i),
        (h = e[c]),
        (a[r] = { x: o.parse(h[0], c), y: s.parse(h[1], c) });
    return a;
  }
  parseObjectData(t, e, i, n) {
    const { xScale: o, yScale: s } = t,
      { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
      l = new Array(n);
    let c, h, d, u;
    for (c = 0, h = n; c < h; ++c)
      (d = c + i),
        (u = e[d]),
        (l[c] = { x: o.parse(R(u, a), d), y: s.parse(R(u, r), d) });
    return l;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const n = this.chart,
      o = this._cachedMeta,
      s = e[t.axis];
    return vi({ keys: _i(n, !0), values: e._stacks[t.axis] }, s, o.index, {
      mode: i,
    });
  }
  updateRangeFromParsed(t, e, i, n) {
    const o = i[e.axis];
    let s = null === o ? NaN : o;
    const a = n && i._stacks[e.axis];
    n &&
      a &&
      ((n.values = a),
      (t.min = Math.min(t.min, s)),
      (t.max = Math.max(t.max, s)),
      (s = vi(n, o, this._cachedMeta.index, { all: !0 }))),
      (t.min = Math.min(t.min, s)),
      (t.max = Math.max(t.max, s));
  }
  getMinMax(t, e) {
    const i = this,
      n = i._cachedMeta,
      o = n._parsed,
      s = n._sorted && t === n.iScale,
      a = o.length,
      r = i._getOtherScale(t),
      l = e && n._stacked && { keys: _i(i.chart, !0), values: null },
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: h, max: d } = (function (t) {
        const {
          min: e,
          max: i,
          minDefined: n,
          maxDefined: o,
        } = t.getUserBounds();
        return {
          min: n ? e : Number.NEGATIVE_INFINITY,
          max: o ? i : Number.POSITIVE_INFINITY,
        };
      })(r);
    let u, f, g, p;
    function m() {
      return (
        (g = o[u]), (f = g[t.axis]), (p = g[r.axis]), !_(f) || h > p || d < p
      );
    }
    for (
      u = 0;
      u < a && (m() || (i.updateRangeFromParsed(c, t, g, l), !s));
      ++u
    );
    if (s)
      for (u = a - 1; u >= 0; --u)
        if (!m()) {
          i.updateRangeFromParsed(c, t, g, l);
          break;
        }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      i = [];
    let n, o, s;
    for (n = 0, o = e.length; n < o; ++n) (s = e[n][t.axis]), _(s) && i.push(s);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = e.iScale,
      n = e.vScale,
      o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : "",
    };
  }
  _update(t) {
    const e = this,
      i = e._cachedMeta;
    e.configure(),
      (e._cachedDataOpts = {}),
      e.update(t || "default"),
      (i._clip = (function (t) {
        let e, i, n, o;
        return (
          y(t)
            ? ((e = t.top), (i = t.right), (n = t.bottom), (o = t.left))
            : (e = i = n = o = t),
          { top: e, right: i, bottom: n, left: o, disabled: !1 === t }
        );
      })(
        w(
          e.options.clip,
          (function (t, e, i) {
            if (!1 === i) return !1;
            const n = yi(t, i),
              o = yi(e, i);
            return { top: o.end, right: n.end, bottom: o.start, left: n.start };
          })(i.xScale, i.yScale, e.getMaxOverflow())
        )
      ));
  }
  update(t) {}
  draw() {
    const t = this,
      e = t._ctx,
      i = t.chart,
      n = t._cachedMeta,
      o = n.data || [],
      s = i.chartArea,
      a = [],
      r = t._drawStart || 0,
      l = t._drawCount || o.length - r;
    let c;
    for (n.dataset && n.dataset.draw(e, s, r, l), c = r; c < r + l; ++c) {
      const t = o[c];
      t.active ? a.push(t) : t.draw(e, s);
    }
    for (c = 0; c < a.length; ++c) a[c].draw(e, s);
  }
  getStyle(t, e) {
    const i = e ? "active" : "default";
    return void 0 === t && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const n = this,
      o = n.getDataset();
    let s;
    if (t >= 0 && t < n._cachedMeta.data.length) {
      const e = n._cachedMeta.data[t];
      (s =
        e.$context ||
        (e.$context = (function (t, e, i) {
          return Object.assign(Object.create(t), {
            active: !1,
            dataIndex: e,
            parsed: void 0,
            raw: void 0,
            element: i,
            index: e,
            mode: "default",
            type: "data",
          });
        })(n.getContext(), t, e))),
        (s.parsed = n.getParsed(t)),
        (s.raw = o.data[t]),
        (s.index = s.dataIndex = t);
    } else
      (s =
        n.$context ||
        (n.$context = (function (t, e) {
          return Object.assign(Object.create(t), {
            active: !1,
            dataset: void 0,
            datasetIndex: e,
            index: e,
            mode: "default",
            type: "dataset",
          });
        })(n.chart.getContext(), n.index))),
        (s.dataset = o),
        (s.index = s.datasetIndex = n.index);
    return (s.active = !!e), (s.mode = i), s;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", i) {
    const n = this,
      o = "active" === e,
      s = n._cachedDataOpts,
      a = t + "-" + e,
      r = s[a],
      l = n.enableOptionSharing && F(i);
    if (r) return Oi(r, l);
    const c = n.chart.config,
      h = c.datasetElementScopeKeys(n._type, t),
      d = o ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      u = c.getOptionScopes(n.getDataset(), h),
      f = Object.keys(Kt.elements[t]),
      g = c.resolveNamedOptions(u, f, () => n.getContext(i, o), d);
    return g.$shared && ((g.$shared = l), (s[a] = Object.freeze(Oi(g, l)))), g;
  }
  _resolveAnimations(t, e, i) {
    const n = this,
      o = n.chart,
      s = n._cachedDataOpts,
      a = `animation-${e}`,
      r = s[a];
    if (r) return r;
    let l;
    if (!1 !== o.options.animation) {
      const o = n.chart.config,
        s = o.datasetAnimationScopeKeys(n._type, e),
        a = o.getOptionScopes(n.getDataset(), s);
      l = o.createResolver(a, n.getContext(t, i, e));
    }
    const c = new xi(o, l && l.animations);
    return l && l._cacheable && (s[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || Ci(t) || this.chart._animationsDisabled;
  }
  updateElement(t, e, i, n) {
    Ci(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !Ci(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, i, n).update(t, {
      options: (!n && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this,
      i = e._data,
      n = e._cachedMeta.data;
    for (const [t, i, n] of e._syncList) e[t](i, n);
    e._syncList = [];
    const o = n.length,
      s = i.length,
      a = Math.min(s, o);
    a && e.parse(0, a),
      s > o
        ? e._insertElements(o, s - o, t)
        : s < o && e._removeElements(s, o - s);
  }
  _insertElements(t, e, i = !0) {
    const n = this,
      o = n._cachedMeta,
      s = o.data,
      a = t + e;
    let r;
    const l = (t) => {
      for (t.length += e, r = t.length - 1; r >= a; r--) t[r] = t[r - e];
    };
    for (l(s), r = t; r < a; ++r) s[r] = new n.dataElementType();
    n._parsing && l(o._parsed),
      n.parse(t, e),
      i && n.updateElements(s, t, e, "reset");
  }
  updateElements(t, e, i, n) {}
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const n = i._parsed.splice(t, e);
      i._stacked && Di(i, n);
    }
    i.data.splice(t, e);
  }
  _onDataPush() {
    const t = arguments.length;
    this._syncList.push([
      "_insertElements",
      this.getDataset().data.length - t,
      t,
    ]);
  }
  _onDataPop() {
    this._syncList.push([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1,
    ]);
  }
  _onDataShift() {
    this._syncList.push(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, e) {
    this._syncList.push(["_removeElements", t, e]),
      this._syncList.push(["_insertElements", t, arguments.length - 2]);
  }
  _onDataUnshift() {
    this._syncList.push(["_insertElements", 0, arguments.length]);
  }
}
function Ai(t) {
  const e = (function (t) {
    if (!t._cache.$bar) {
      const e = t.getMatchingVisibleMetas("bar");
      let i = [];
      for (let n = 0, o = e.length; n < o; n++)
        i = i.concat(e[n].controller.getAllParsedValues(t));
      t._cache.$bar = Me(i.sort((t, e) => t - e));
    }
    return t._cache.$bar;
  })(t);
  let i,
    n,
    o,
    s,
    a = t._length;
  const r = () => {
    32767 !== o &&
      -32768 !== o &&
      (F(s) && (a = Math.min(a, Math.abs(o - s) || a)), (s = o));
  };
  for (i = 0, n = e.length; i < n; ++i) (o = t.getPixelForValue(e[i])), r();
  for (s = void 0, i = 0, n = t.ticks.length; i < n; ++i)
    (o = t.getPixelForTick(i)), r();
  return a;
}
function Li(t, e, i, n) {
  return (
    x(t)
      ? (function (t, e, i, n) {
          const o = i.parse(t[0], n),
            s = i.parse(t[1], n),
            a = Math.min(o, s),
            r = Math.max(o, s);
          let l = a,
            c = r;
          Math.abs(a) > Math.abs(r) && ((l = r), (c = a)),
            (e[i.axis] = c),
            (e._custom = {
              barStart: l,
              barEnd: c,
              start: o,
              end: s,
              min: a,
              max: r,
            });
        })(t, e, i, n)
      : (e[i.axis] = i.parse(t, n)),
    e
  );
}
function Ei(t, e, i, n) {
  const o = t.iScale,
    s = t.vScale,
    a = o.getLabels(),
    r = o === s,
    l = [];
  let c, h, d, u;
  for (c = i, h = i + n; c < h; ++c)
    (u = e[c]),
      (d = {}),
      (d[o.axis] = r || o.parse(a[c], c)),
      l.push(Li(u, d, s, c));
  return l;
}
function Ri(t) {
  return t && void 0 !== t.barStart && void 0 !== t.barEnd;
}
(Ti.defaults = {}),
  (Ti.prototype.datasetElementType = null),
  (Ti.prototype.dataElementType = null);
class Ii extends Ti {
  parsePrimitiveData(t, e, i, n) {
    return Ei(t, e, i, n);
  }
  parseArrayData(t, e, i, n) {
    return Ei(t, e, i, n);
  }
  parseObjectData(t, e, i, n) {
    const { iScale: o, vScale: s } = t,
      { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
      l = "x" === o.axis ? a : r,
      c = "x" === s.axis ? a : r,
      h = [];
    let d, u, f, g;
    for (d = i, u = i + n; d < u; ++d)
      (g = e[d]),
        (f = {}),
        (f[o.axis] = o.parse(R(g, l), d)),
        h.push(Li(R(g, c), f, s, d));
    return h;
  }
  updateRangeFromParsed(t, e, i, n) {
    super.updateRangeFromParsed(t, e, i, n);
    const o = i._custom;
    o &&
      e === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: i, vScale: n } = e,
      o = this.getParsed(t),
      s = o._custom,
      a = Ri(s)
        ? "[" + s.start + ", " + s.end + "]"
        : "" + n.getLabelForValue(o[n.axis]);
    return { label: "" + i.getLabelForValue(o[i.axis]), value: a };
  }
  initialize() {
    const t = this;
    (t.enableOptionSharing = !0), super.initialize();
    t._cachedMeta.stack = t.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, i, n) {
    const o = this,
      s = "reset" === n,
      a = o._cachedMeta.vScale,
      r = a.getBasePixel(),
      l = a.isHorizontal(),
      c = o._getRuler(),
      h = o.resolveDataElementOptions(e, n),
      d = o.getSharedOptions(h),
      u = o.includeOptions(n, d);
    o.updateSharedOptions(d, n, h);
    for (let h = e; h < e + i; h++) {
      const e = o.getParsed(h),
        i =
          s || b(e[a.axis])
            ? { base: r, head: r }
            : o._calculateBarValuePixels(h),
        f = o._calculateBarIndexPixels(h, c),
        g = (e._stacks || {})[a.axis],
        p = {
          horizontal: l,
          base: i.base,
          enableBorderRadius:
            !g || Ri(e._custom) || o.index === g._top || o.index === g._bottom,
          x: l ? i.head : f.center,
          y: l ? f.center : i.head,
          height: l ? f.size : Math.abs(i.size),
          width: l ? Math.abs(i.size) : f.size,
        };
      u &&
        (p.options =
          d || o.resolveDataElementOptions(h, t[h].active ? "active" : n)),
        o.updateElement(t[h], h, p, n);
    }
  }
  _getStacks(t, e) {
    const i = this._cachedMeta.iScale,
      n = i.getMatchingVisibleMetas(this._type),
      o = i.options.stacked,
      s = n.length,
      a = [];
    let r, l;
    for (r = 0; r < s; ++r)
      if (((l = n[r]), l.controller.options.grouped)) {
        if (void 0 !== e) {
          const t =
            l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];
          if (b(t) || isNaN(t)) continue;
        }
        if (
          ((!1 === o ||
            -1 === a.indexOf(l.stack) ||
            (void 0 === o && void 0 === l.stack)) &&
            a.push(l.stack),
          l.index === t)
        )
          break;
      }
    return a.length || a.push(void 0), a;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, i) {
    const n = this._getStacks(t, i),
      o = void 0 !== e ? n.indexOf(e) : -1;
    return -1 === o ? n.length - 1 : o;
  }
  _getRuler() {
    const t = this,
      e = t.options,
      i = t._cachedMeta,
      n = i.iScale,
      o = [];
    let s, a;
    for (s = 0, a = i.data.length; s < a; ++s)
      o.push(n.getPixelForValue(t.getParsed(s)[n.axis], s));
    const r = e.barThickness;
    return {
      min: r || Ai(n),
      pixels: o,
      start: n._startPixel,
      end: n._endPixel,
      stackCount: t._getStackCount(),
      scale: n,
      grouped: e.grouped,
      ratio: r ? 1 : e.categoryPercentage * e.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const e = this,
      { vScale: i, _stacked: n } = e._cachedMeta,
      { base: o, minBarLength: s } = e.options,
      a = e.getParsed(t),
      r = a._custom,
      l = Ri(r);
    let c,
      h,
      d = a[i.axis],
      u = 0,
      f = n ? e.applyStack(i, a, n) : d;
    f !== d && ((u = f - d), (f = d)),
      l &&
        ((d = r.barStart),
        (f = r.barEnd - r.barStart),
        0 !== d && X(d) !== X(r.barEnd) && (u = 0),
        (u += d));
    const g = b(o) || l ? u : o;
    let p = i.getPixelForValue(g);
    (c = this.chart.getDataVisibility(t) ? i.getPixelForValue(u + f) : p),
      (h = c - p),
      void 0 !== s &&
        Math.abs(h) < s &&
        ((h = h < 0 ? -s : s), 0 === d && (p -= h / 2), (c = p + h));
    const m = o || 0;
    if (p === i.getPixelForValue(m)) {
      const t = i.getLineWidthForValue(m) / 2;
      h > 0 ? ((p += t), (h -= t)) : h < 0 && ((p -= t), (h += t));
    }
    return { size: h, base: p, head: c, center: c + h / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const i = this,
      n = e.scale,
      o = i.options,
      s = o.skipNull,
      a = w(o.maxBarThickness, 1 / 0);
    let r, l;
    if (e.grouped) {
      const n = s ? i._getStackCount(t) : e.stackCount,
        c =
          "flex" === o.barThickness
            ? (function (t, e, i, n) {
                const o = e.pixels,
                  s = o[t];
                let a = t > 0 ? o[t - 1] : null,
                  r = t < o.length - 1 ? o[t + 1] : null;
                const l = i.categoryPercentage;
                null === a && (a = s - (null === r ? e.end - e.start : r - s)),
                  null === r && (r = s + s - a);
                const c = s - ((s - Math.min(a, r)) / 2) * l;
                return {
                  chunk: ((Math.abs(r - a) / 2) * l) / n,
                  ratio: i.barPercentage,
                  start: c,
                };
              })(t, e, o, n)
            : (function (t, e, i, n) {
                const o = i.barThickness;
                let s, a;
                return (
                  b(o)
                    ? ((s = e.min * i.categoryPercentage),
                      (a = i.barPercentage))
                    : ((s = o * n), (a = 1)),
                  { chunk: s / n, ratio: a, start: e.pixels[t] - s / 2 }
                );
              })(t, e, o, n),
        h = i._getStackIndex(i.index, i._cachedMeta.stack, s ? t : void 0);
      (r = c.start + c.chunk * h + c.chunk / 2),
        (l = Math.min(a, c.chunk * c.ratio));
    } else
      (r = n.getPixelForValue(i.getParsed(t)[n.axis], t)),
        (l = Math.min(a, e.min * e.ratio));
    return { base: r - l / 2, head: r + l / 2, center: r, size: l };
  }
  draw() {
    const t = this,
      e = t._cachedMeta,
      i = e.vScale,
      n = e.data,
      o = n.length;
    let s = 0;
    for (; s < o; ++s) null !== t.getParsed(s)[i.axis] && n[s].draw(t._ctx);
  }
}
(Ii.id = "bar"),
  (Ii.defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  }),
  (Ii.overrides = {
    interaction: { mode: "index" },
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  });
class Fi extends Ti {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  parseObjectData(t, e, i, n) {
    const { xScale: o, yScale: s } = t,
      { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
      l = [];
    let c, h, d;
    for (c = i, h = i + n; c < h; ++c)
      (d = e[c]),
        l.push({
          x: o.parse(R(d, a), c),
          y: s.parse(R(d, r), c),
          _custom: d && d.r && +d.r,
        });
    return l;
  }
  getMaxOverflow() {
    const { data: t, _parsed: e } = this._cachedMeta;
    let i = 0;
    for (let n = t.length - 1; n >= 0; --n)
      i = Math.max(i, t[n].size() / 2, e[n]._custom);
    return i > 0 && i;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { xScale: i, yScale: n } = e,
      o = this.getParsed(t),
      s = i.getLabelForValue(o.x),
      a = n.getLabelForValue(o.y),
      r = o._custom;
    return {
      label: e.label,
      value: "(" + s + ", " + a + (r ? ", " + r : "") + ")",
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, i, n) {
    const o = this,
      s = "reset" === n,
      { iScale: a, vScale: r } = o._cachedMeta,
      l = o.resolveDataElementOptions(e, n),
      c = o.getSharedOptions(l),
      h = o.includeOptions(n, c),
      d = a.axis,
      u = r.axis;
    for (let l = e; l < e + i; l++) {
      const e = t[l],
        i = !s && o.getParsed(l),
        c = {},
        f = (c[d] = s ? a.getPixelForDecimal(0.5) : a.getPixelForValue(i[d])),
        g = (c[u] = s ? r.getBasePixel() : r.getPixelForValue(i[u]));
      (c.skip = isNaN(f) || isNaN(g)),
        h &&
          ((c.options = o.resolveDataElementOptions(
            l,
            e.active ? "active" : n
          )),
          s && (c.options.radius = 0)),
        o.updateElement(e, l, c, n);
    }
    o.updateSharedOptions(c, n, l);
  }
  resolveDataElementOptions(t, e) {
    const i = this.getParsed(t);
    let n = super.resolveDataElementOptions(t, e);
    n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
    const o = n.radius;
    return (
      "active" !== e && (n.radius = 0), (n.radius += w(i && i._custom, o)), n
    );
  }
}
(Fi.id = "bubble"),
  (Fi.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "borderWidth", "radius"],
      },
    },
  }),
  (Fi.overrides = {
    scales: { x: { type: "linear" }, y: { type: "linear" } },
    plugins: { tooltip: { callbacks: { title: () => "" } } },
  });
class zi extends Ti {
  constructor(t, e) {
    super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, e) {
    const i = this.getDataset().data,
      n = this._cachedMeta;
    let o, s;
    for (o = t, s = t + e; o < s; ++o) n._parsed[o] = +i[o];
  }
  _getRotation() {
    return Q(this.options.rotation - 90);
  }
  _getCircumference() {
    return Q(this.options.circumference);
  }
  _getRotationExtents() {
    let t = B,
      e = -B;
    const i = this;
    for (let n = 0; n < i.chart.data.datasets.length; ++n)
      if (i.chart.isDatasetVisible(n)) {
        const o = i.chart.getDatasetMeta(n).controller,
          s = o._getRotation(),
          a = o._getCircumference();
        (t = Math.min(t, s)), (e = Math.max(e, s + a));
      }
    return { rotation: t, circumference: e - t };
  }
  update(t) {
    const e = this,
      i = e.chart,
      { chartArea: n } = i,
      o = e._cachedMeta,
      s = o.data,
      a = e.getMaxBorderWidth() + e.getMaxOffset(s) + e.options.spacing,
      r = Math.max((Math.min(n.width, n.height) - a) / 2, 0),
      l = Math.min(
        ((c = e.options.cutout),
        (h = r),
        "string" == typeof c && c.endsWith("%") ? parseFloat(c) / 100 : c / h),
        1
      );
    var c, h;
    const d = e._getRingWeight(e.index),
      { circumference: u, rotation: f } = e._getRotationExtents(),
      {
        ratioX: g,
        ratioY: p,
        offsetX: m,
        offsetY: b,
      } = (function (t, e, i) {
        let n = 1,
          o = 1,
          s = 0,
          a = 0;
        if (e < B) {
          const r = t,
            l = r + e,
            c = Math.cos(r),
            h = Math.sin(r),
            d = Math.cos(l),
            u = Math.sin(l),
            f = (t, e, n) =>
              ot(t, r, l, !0) ? 1 : Math.max(e, e * i, n, n * i),
            g = (t, e, n) =>
              ot(t, r, l, !0) ? -1 : Math.min(e, e * i, n, n * i),
            p = f(0, c, d),
            m = f(H, h, u),
            b = g(V, c, d),
            x = g(V + H, h, u);
          (n = (p - b) / 2),
            (o = (m - x) / 2),
            (s = -(p + b) / 2),
            (a = -(m + x) / 2);
        }
        return { ratioX: n, ratioY: o, offsetX: s, offsetY: a };
      })(f, u, l),
      x = (n.width - a) / g,
      y = (n.height - a) / p,
      _ = Math.max(Math.min(x, y) / 2, 0),
      v = M(e.options.radius, _),
      w = (v - Math.max(v * l, 0)) / e._getVisibleDatasetWeightTotal();
    (e.offsetX = m * v),
      (e.offsetY = b * v),
      (o.total = e.calculateTotal()),
      (e.outerRadius = v - w * e._getRingWeightOffset(e.index)),
      (e.innerRadius = Math.max(e.outerRadius - w * d, 0)),
      e.updateElements(s, 0, s.length, t);
  }
  _circumference(t, e) {
    const i = this,
      n = i.options,
      o = i._cachedMeta,
      s = i._getCircumference();
    return (e && n.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      null === o._parsed[t]
      ? 0
      : i.calculateCircumference((o._parsed[t] * s) / B);
  }
  updateElements(t, e, i, n) {
    const o = this,
      s = "reset" === n,
      a = o.chart,
      r = a.chartArea,
      l = a.options.animation,
      c = (r.left + r.right) / 2,
      h = (r.top + r.bottom) / 2,
      d = s && l.animateScale,
      u = d ? 0 : o.innerRadius,
      f = d ? 0 : o.outerRadius,
      g = o.resolveDataElementOptions(e, n),
      p = o.getSharedOptions(g),
      m = o.includeOptions(n, p);
    let b,
      x = o._getRotation();
    for (b = 0; b < e; ++b) x += o._circumference(b, s);
    for (b = e; b < e + i; ++b) {
      const e = o._circumference(b, s),
        i = t[b],
        a = {
          x: c + o.offsetX,
          y: h + o.offsetY,
          startAngle: x,
          endAngle: x + e,
          circumference: e,
          outerRadius: f,
          innerRadius: u,
        };
      m &&
        (a.options =
          p || o.resolveDataElementOptions(b, i.active ? "active" : n)),
        (x += e),
        o.updateElement(i, b, a, n);
    }
    o.updateSharedOptions(p, n, g);
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let i,
      n = 0;
    for (i = 0; i < e.length; i++) {
      const e = t._parsed[i];
      null !== e &&
        !isNaN(e) &&
        this.chart.getDataVisibility(i) &&
        (n += Math.abs(e));
    }
    return n;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? B * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart,
      n = i.data.labels || [],
      o = si(e._parsed[t], i.options.locale);
    return { label: n[t] || "", value: o };
  }
  getMaxBorderWidth(t) {
    const e = this;
    let i = 0;
    const n = e.chart;
    let o, s, a, r, l;
    if (!t)
      for (o = 0, s = n.data.datasets.length; o < s; ++o)
        if (n.isDatasetVisible(o)) {
          (a = n.getDatasetMeta(o)),
            (t = a.data),
            (r = a.controller),
            r !== e && r.configure();
          break;
        }
    if (!t) return 0;
    for (o = 0, s = t.length; o < s; ++o)
      (l = r.resolveDataElementOptions(o)),
        "inner" !== l.borderAlign &&
          (i = Math.max(i, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return i;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let i = 0, n = t.length; i < n; ++i) {
      const t = this.resolveDataElementOptions(i);
      e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(w(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
(zi.id = "doughnut"),
  (zi.defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  (zi.descriptors = {
    _scriptable: (t) => "spacing" !== t,
    _indexable: (t) => "spacing" !== t,
  }),
  (zi.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: i },
              } = t.legend.options;
              return e.labels.map((e, n) => {
                const o = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: o.backgroundColor,
                  strokeStyle: o.borderColor,
                  lineWidth: o.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(n),
                  index: n,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        },
      },
      tooltip: {
        callbacks: {
          title: () => "",
          label(t) {
            let e = t.label;
            const i = ": " + t.formattedValue;
            return x(e) ? ((e = e.slice()), (e[0] += i)) : (e += i), e;
          },
        },
      },
    },
  });
class Vi extends Ti {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  update(t) {
    const e = this,
      i = e._cachedMeta,
      { dataset: n, data: o = [], _dataset: s } = i,
      a = e.chart._animationsDisabled;
    let { start: r, count: l } = (function (t, e, i) {
      const n = e.length;
      let o = 0,
        s = n;
      if (t._sorted) {
        const { iScale: a, _parsed: r } = t,
          l = a.axis,
          { min: c, max: h, minDefined: d, maxDefined: u } = a.getUserBounds();
        d &&
          (o = st(
            Math.min(
              ye(r, a.axis, c).lo,
              i ? n : ye(e, l, a.getPixelForValue(c)).lo
            ),
            0,
            n - 1
          )),
          (s = u
            ? st(
                Math.max(
                  ye(r, a.axis, h).hi + 1,
                  i ? 0 : ye(e, l, a.getPixelForValue(h)).hi + 1
                ),
                o,
                n
              ) - o
            : n - o);
      }
      return { start: o, count: s };
    })(i, o, a);
    (e._drawStart = r),
      (e._drawCount = l),
      (function (t) {
        const { xScale: e, yScale: i, _scaleRanges: n } = t,
          o = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
        if (!n) return (t._scaleRanges = o), !0;
        const s =
          n.xmin !== e.min ||
          n.xmax !== e.max ||
          n.ymin !== i.min ||
          n.ymax !== i.max;
        return Object.assign(n, o), s;
      })(i) && ((r = 0), (l = o.length)),
      (n._decimated = !!s._decimated),
      (n.points = o);
    const c = e.resolveDatasetElementOptions(t);
    e.options.showLine || (c.borderWidth = 0),
      (c.segment = e.options.segment),
      e.updateElement(n, void 0, { animated: !a, options: c }, t),
      e.updateElements(o, r, l, t);
  }
  updateElements(t, e, i, n) {
    const o = this,
      s = "reset" === n,
      { iScale: a, vScale: r, _stacked: l } = o._cachedMeta,
      c = o.resolveDataElementOptions(e, n),
      h = o.getSharedOptions(c),
      d = o.includeOptions(n, h),
      u = a.axis,
      f = r.axis,
      g = o.options.spanGaps,
      p = K(g) ? g : Number.POSITIVE_INFINITY,
      m = o.chart._animationsDisabled || s || "none" === n;
    let x = e > 0 && o.getParsed(e - 1);
    for (let c = e; c < e + i; ++c) {
      const e = t[c],
        i = o.getParsed(c),
        g = m ? e : {},
        y = b(i[f]),
        _ = (g[u] = a.getPixelForValue(i[u], c)),
        v = (g[f] =
          s || y
            ? r.getBasePixel()
            : r.getPixelForValue(l ? o.applyStack(r, i, l) : i[f], c));
      (g.skip = isNaN(_) || isNaN(v) || y),
        (g.stop = c > 0 && i[u] - x[u] > p),
        (g.parsed = i),
        d &&
          (g.options =
            h || o.resolveDataElementOptions(c, e.active ? "active" : n)),
        m || o.updateElement(e, c, g, n),
        (x = i);
    }
    o.updateSharedOptions(h, n, c);
  }
  getMaxOverflow() {
    const t = this,
      e = t._cachedMeta,
      i = e.dataset,
      n = (i.options && i.options.borderWidth) || 0,
      o = e.data || [];
    if (!o.length) return n;
    const s = o[0].size(t.resolveDataElementOptions(0)),
      a = o[o.length - 1].size(t.resolveDataElementOptions(o.length - 1));
    return Math.max(n, s, a) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
(Vi.id = "line"),
  (Vi.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  (Vi.overrides = {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
class Bi extends Ti {
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart,
      n = i.data.labels || [],
      o = si(e._parsed[t].r, i.options.locale);
    return { label: n[t] || "", value: o };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  _updateRadius() {
    const t = this,
      e = t.chart,
      i = e.chartArea,
      n = e.options,
      o = Math.min(i.right - i.left, i.bottom - i.top),
      s = Math.max(o / 2, 0),
      a =
        (s -
          Math.max(
            n.cutoutPercentage ? (s / 100) * n.cutoutPercentage : 1,
            0
          )) /
        e.getVisibleDatasetCount();
    (t.outerRadius = s - a * t.index), (t.innerRadius = t.outerRadius - a);
  }
  updateElements(t, e, i, n) {
    const o = this,
      s = "reset" === n,
      a = o.chart,
      r = o.getDataset(),
      l = a.options.animation,
      c = o._cachedMeta.rScale,
      h = c.xCenter,
      d = c.yCenter,
      u = c.getIndexAngle(0) - 0.5 * V;
    let f,
      g = u;
    const p = 360 / o.countVisibleElements();
    for (f = 0; f < e; ++f) g += o._computeAngle(f, n, p);
    for (f = e; f < e + i; f++) {
      const e = t[f];
      let i = g,
        m = g + o._computeAngle(f, n, p),
        b = a.getDataVisibility(f)
          ? c.getDistanceFromCenterForValue(r.data[f])
          : 0;
      (g = m), s && (l.animateScale && (b = 0), l.animateRotate && (i = m = u));
      const x = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: b,
        startAngle: i,
        endAngle: m,
        options: o.resolveDataElementOptions(f, e.active ? "active" : n),
      };
      o.updateElement(e, f, x, n);
    }
  }
  countVisibleElements() {
    const t = this.getDataset(),
      e = this._cachedMeta;
    let i = 0;
    return (
      e.data.forEach((e, n) => {
        !isNaN(t.data[n]) && this.chart.getDataVisibility(n) && i++;
      }),
      i
    );
  }
  _computeAngle(t, e, i) {
    return this.chart.getDataVisibility(t)
      ? Q(this.resolveDataElementOptions(t, e).angle || i)
      : 0;
  }
}
(Bi.id = "polarArea"),
  (Bi.defaults = {
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
        ],
      },
    },
    indexAxis: "r",
    startAngle: 0,
  }),
  (Bi.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: i },
              } = t.legend.options;
              return e.labels.map((e, n) => {
                const o = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: o.backgroundColor,
                  strokeStyle: o.borderColor,
                  lineWidth: o.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(n),
                  index: n,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        },
      },
      tooltip: {
        callbacks: {
          title: () => "",
          label: (t) =>
            t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue,
        },
      },
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  });
class Ni extends zi {}
(Ni.id = "pie"),
  (Ni.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%",
  });
class Wi extends Ti {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      i = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(i[e.axis]),
    };
  }
  update(t) {
    const e = this,
      i = e._cachedMeta,
      n = i.dataset,
      o = i.data || [],
      s = i.iScale.getLabels();
    if (((n.points = o), "resize" !== t)) {
      const i = e.resolveDatasetElementOptions(t);
      e.options.showLine || (i.borderWidth = 0);
      const a = { _loop: !0, _fullLoop: s.length === o.length, options: i };
      e.updateElement(n, void 0, a, t);
    }
    e.updateElements(o, 0, o.length, t);
  }
  updateElements(t, e, i, n) {
    const o = this,
      s = o.getDataset(),
      a = o._cachedMeta.rScale,
      r = "reset" === n;
    for (let l = e; l < e + i; l++) {
      const e = t[l],
        i = o.resolveDataElementOptions(l, e.active ? "active" : n),
        c = a.getPointPositionForValue(l, s.data[l]),
        h = r ? a.xCenter : c.x,
        d = r ? a.yCenter : c.y,
        u = {
          x: h,
          y: d,
          angle: c.angle,
          skip: isNaN(h) || isNaN(d),
          options: i,
        };
      o.updateElement(e, l, u, n);
    }
  }
}
(Wi.id = "radar"),
  (Wi.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: { line: { fill: "start" } },
  }),
  (Wi.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } });
class ji extends Vi {}
function Hi() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
(ji.id = "scatter"),
  (ji.defaults = { showLine: !1, fill: !1 }),
  (ji.overrides = {
    interaction: { mode: "point" },
    plugins: {
      tooltip: {
        callbacks: {
          title: () => "",
          label: (t) => "(" + t.label + ", " + t.formattedValue + ")",
        },
      },
    },
    scales: { x: { type: "linear" }, y: { type: "linear" } },
  });
class $i {
  constructor(t) {
    this.options = t || {};
  }
  formats() {
    return Hi();
  }
  parse(t, e) {
    return Hi();
  }
  format(t, e) {
    return Hi();
  }
  add(t, e, i) {
    return Hi();
  }
  diff(t, e, i) {
    return Hi();
  }
  startOf(t, e, i) {
    return Hi();
  }
  endOf(t, e) {
    return Hi();
  }
}
$i.override = function (t) {
  Object.assign($i.prototype, t);
};
var Yi = { _date: $i };
function Ui(t, e) {
  return "native" in t ? { x: t.x, y: t.y } : Ke(t, e);
}
function Xi(t, e, i, n) {
  const { controller: o, data: s, _sorted: a } = t,
    r = o._cachedMeta.iScale;
  if (r && e === r.axis && a && s.length) {
    const t = r._reversePixels ? _e : ye;
    if (!n) return t(s, e, i);
    if (o._sharedOptions) {
      const n = s[0],
        o = "function" == typeof n.getRange && n.getRange(e);
      if (o) {
        const n = t(s, e, i - o),
          a = t(s, e, i + o);
        return { lo: n.lo, hi: a.hi };
      }
    }
  }
  return { lo: 0, hi: s.length - 1 };
}
function Gi(t, e, i, n, o) {
  const s = t.getSortedVisibleDatasetMetas(),
    a = i[e];
  for (let t = 0, i = s.length; t < i; ++t) {
    const { index: i, data: r } = s[t],
      { lo: l, hi: c } = Xi(s[t], e, a, o);
    for (let t = l; t <= c; ++t) {
      const e = r[t];
      e.skip || n(e, i, t);
    }
  }
}
function Ki(t, e, i, n) {
  const o = [];
  if (!ee(e, t.chartArea, t._minPadding)) return o;
  return (
    Gi(
      t,
      i,
      e,
      function (t, i, s) {
        t.inRange(e.x, e.y, n) &&
          o.push({ element: t, datasetIndex: i, index: s });
      },
      !0
    ),
    o
  );
}
function Zi(t, e, i, n, o) {
  const s = (function (t) {
    const e = -1 !== t.indexOf("x"),
      i = -1 !== t.indexOf("y");
    return function (t, n) {
      const o = e ? Math.abs(t.x - n.x) : 0,
        s = i ? Math.abs(t.y - n.y) : 0;
      return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
    };
  })(i);
  let a = Number.POSITIVE_INFINITY,
    r = [];
  if (!ee(e, t.chartArea, t._minPadding)) return r;
  return (
    Gi(t, i, e, function (i, l, c) {
      if (n && !i.inRange(e.x, e.y, o)) return;
      const h = i.getCenterPoint(o);
      if (!ee(h, t.chartArea, t._minPadding)) return;
      const d = s(e, h);
      d < a
        ? ((r = [{ element: i, datasetIndex: l, index: c }]), (a = d))
        : d === a && r.push({ element: i, datasetIndex: l, index: c });
    }),
    r
  );
}
function qi(t, e, i, n) {
  const o = Ui(e, t),
    s = [],
    a = i.axis,
    r = "x" === a ? "inXRange" : "inYRange";
  let l = !1;
  return (
    (function (t, e) {
      const i = t.getSortedVisibleDatasetMetas();
      let n, o, s;
      for (let t = 0, a = i.length; t < a; ++t) {
        ({ index: n, data: o } = i[t]);
        for (let t = 0, i = o.length; t < i; ++t)
          (s = o[t]), s.skip || e(s, n, t);
      }
    })(t, (t, e, i) => {
      t[r](o[a], n) && s.push({ element: t, datasetIndex: e, index: i }),
        t.inRange(o.x, o.y, n) && (l = !0);
    }),
    i.intersect && !l ? [] : s
  );
}
var Qi = {
  modes: {
    index(t, e, i, n) {
      const o = Ui(e, t),
        s = i.axis || "x",
        a = i.intersect ? Ki(t, o, s, n) : Zi(t, o, s, !1, n),
        r = [];
      return a.length
        ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
            const e = a[0].index,
              i = t.data[e];
            i &&
              !i.skip &&
              r.push({ element: i, datasetIndex: t.index, index: e });
          }),
          r)
        : [];
    },
    dataset(t, e, i, n) {
      const o = Ui(e, t),
        s = i.axis || "xy";
      let a = i.intersect ? Ki(t, o, s, n) : Zi(t, o, s, !1, n);
      if (a.length > 0) {
        const e = a[0].datasetIndex,
          i = t.getDatasetMeta(e).data;
        a = [];
        for (let t = 0; t < i.length; ++t)
          a.push({ element: i[t], datasetIndex: e, index: t });
      }
      return a;
    },
    point: (t, e, i, n) => Ki(t, Ui(e, t), i.axis || "xy", n),
    nearest: (t, e, i, n) => Zi(t, Ui(e, t), i.axis || "xy", i.intersect, n),
    x: (t, e, i, n) => ((i.axis = "x"), qi(t, e, i, n)),
    y: (t, e, i, n) => ((i.axis = "y"), qi(t, e, i, n)),
  },
};
const Ji = ["left", "top", "right", "bottom"];
function tn(t, e) {
  return t.filter((t) => t.pos === e);
}
function en(t, e) {
  return t.filter((t) => -1 === Ji.indexOf(t.pos) && t.box.axis === e);
}
function nn(t, e) {
  return t.sort((t, i) => {
    const n = e ? i : t,
      o = e ? t : i;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function on(t, e, i, n) {
  return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
}
function sn(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function an(t, e, i) {
  const n = i.box,
    o = t.maxPadding;
  y(i.pos) ||
    (i.size && (t[i.pos] -= i.size),
    (i.size = i.horizontal ? n.height : n.width),
    (t[i.pos] += i.size)),
    n.getPadding && sn(o, n.getPadding());
  const s = Math.max(0, e.outerWidth - on(o, t, "left", "right")),
    a = Math.max(0, e.outerHeight - on(o, t, "top", "bottom")),
    r = s !== t.w,
    l = a !== t.h;
  return (
    (t.w = s),
    (t.h = a),
    i.horizontal ? { same: r, other: l } : { same: l, other: r }
  );
}
function rn(t, e) {
  const i = e.maxPadding;
  function n(t) {
    const n = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      t.forEach((t) => {
        n[t] = Math.max(e[t], i[t]);
      }),
      n
    );
  }
  return n(t ? ["left", "right"] : ["top", "bottom"]);
}
function ln(t, e, i) {
  const n = [];
  let o, s, a, r, l, c;
  for (o = 0, s = t.length, l = 0; o < s; ++o) {
    (a = t[o]),
      (r = a.box),
      r.update(a.width || e.w, a.height || e.h, rn(a.horizontal, e));
    const { same: s, other: h } = an(e, i, a);
    (l |= s && n.length), (c = c || h), r.fullSize || n.push(a);
  }
  return (l && ln(n, e, i)) || c;
}
function cn(t, e, i) {
  const n = i.padding;
  let o,
    s,
    a,
    r,
    l = e.x,
    c = e.y;
  for (o = 0, s = t.length; o < s; ++o)
    (a = t[o]),
      (r = a.box),
      a.horizontal
        ? ((r.left = r.fullSize ? n.left : e.left),
          (r.right = r.fullSize ? i.outerWidth - n.right : e.left + e.w),
          (r.top = c),
          (r.bottom = c + r.height),
          (r.width = r.right - r.left),
          (c = r.bottom))
        : ((r.left = l),
          (r.right = l + r.width),
          (r.top = r.fullSize ? n.top : e.top),
          (r.bottom = r.fullSize ? i.outerHeight - n.bottom : e.top + e.h),
          (r.height = r.bottom - r.top),
          (l = r.right));
  (e.x = l), (e.y = c);
}
Kt.set("layout", { padding: { top: 0, right: 0, bottom: 0, left: 0 } });
var hn = {
  addBox(t, e) {
    t.boxes || (t.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(t) {
                e.draw(t);
              },
            },
          ];
        }),
      t.boxes.push(e);
  },
  removeBox(t, e) {
    const i = t.boxes ? t.boxes.indexOf(e) : -1;
    -1 !== i && t.boxes.splice(i, 1);
  },
  configure(t, e, i) {
    (e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight);
  },
  update(t, e, i, n) {
    if (!t) return;
    const o = pe(t.options.layout.padding),
      s = Math.max(e - o.width, 0),
      a = Math.max(i - o.height, 0),
      r = (function (t) {
        const e = (function (t) {
            const e = [];
            let i, n, o;
            for (i = 0, n = (t || []).length; i < n; ++i)
              (o = t[i]),
                e.push({
                  index: i,
                  box: o,
                  pos: o.position,
                  horizontal: o.isHorizontal(),
                  weight: o.weight,
                });
            return e;
          })(t),
          i = nn(
            e.filter((t) => t.box.fullSize),
            !0
          ),
          n = nn(tn(e, "left"), !0),
          o = nn(tn(e, "right")),
          s = nn(tn(e, "top"), !0),
          a = nn(tn(e, "bottom")),
          r = en(e, "x"),
          l = en(e, "y");
        return {
          fullSize: i,
          leftAndTop: n.concat(s),
          rightAndBottom: o.concat(l).concat(a).concat(r),
          chartArea: tn(e, "chartArea"),
          vertical: n.concat(o).concat(l),
          horizontal: s.concat(a).concat(r),
        };
      })(t.boxes),
      l = r.vertical,
      c = r.horizontal;
    S(t.boxes, (t) => {
      "function" == typeof t.beforeLayout && t.beforeLayout();
    });
    const h =
        l.reduce(
          (t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1),
          0
        ) || 1,
      d = Object.freeze({
        outerWidth: e,
        outerHeight: i,
        padding: o,
        availableWidth: s,
        availableHeight: a,
        vBoxMaxWidth: s / 2 / h,
        hBoxMaxHeight: a / 2,
      }),
      u = Object.assign({}, o);
    sn(u, pe(n));
    const f = Object.assign(
      { maxPadding: u, w: s, h: a, x: o.left, y: o.top },
      o
    );
    !(function (t, e) {
      let i, n, o;
      for (i = 0, n = t.length; i < n; ++i)
        (o = t[i]),
          o.horizontal
            ? ((o.width = o.box.fullSize && e.availableWidth),
              (o.height = e.hBoxMaxHeight))
            : ((o.width = e.vBoxMaxWidth),
              (o.height = o.box.fullSize && e.availableHeight));
    })(l.concat(c), d),
      ln(r.fullSize, f, d),
      ln(l, f, d),
      ln(c, f, d) && ln(l, f, d),
      (function (t) {
        const e = t.maxPadding;
        function i(i) {
          const n = Math.max(e[i] - t[i], 0);
          return (t[i] += n), n;
        }
        (t.y += i("top")), (t.x += i("left")), i("right"), i("bottom");
      })(f),
      cn(r.leftAndTop, f, d),
      (f.x += f.w),
      (f.y += f.h),
      cn(r.rightAndBottom, f, d),
      (t.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w,
      }),
      S(r.chartArea, (e) => {
        const i = e.box;
        Object.assign(i, t.chartArea), i.update(f.w, f.h);
      });
  },
};
class dn {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {}
  removeEventListener(t, e, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, n) {
    return (
      (e = Math.max(0, e || t.width)),
      (i = i || t.height),
      { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
    );
  }
  isAttached(t) {
    return !0;
  }
}
class un extends dn {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
}
const fn = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  gn = (t) => null === t || "" === t;
const pn = !!Je && { passive: !0 };
function mn(t, e, i) {
  t.canvas.removeEventListener(e, i, pn);
}
function bn(t, e, i) {
  const n = t.canvas,
    o = (n && $e(n)) || n,
    s = new MutationObserver((t) => {
      const e = $e(o);
      t.forEach((t) => {
        for (let n = 0; n < t.addedNodes.length; n++) {
          const s = t.addedNodes[n];
          (s !== o && s !== e) || i(t.target);
        }
      });
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function xn(t, e, i) {
  const n = t.canvas,
    o = n && $e(n);
  if (!o) return;
  const s = new MutationObserver((t) => {
    t.forEach((t) => {
      for (let e = 0; e < t.removedNodes.length; e++)
        if (t.removedNodes[e] === n) {
          i();
          break;
        }
    });
  });
  return s.observe(o, { childList: !0 }), s;
}
const yn = new Map();
let _n = 0;
function vn() {
  const t = window.devicePixelRatio;
  t !== _n &&
    ((_n = t),
    yn.forEach((e, i) => {
      i.currentDevicePixelRatio !== t && e();
    }));
}
function wn(t, e, i) {
  const n = t.canvas,
    o = n && $e(n);
  if (!o) return;
  const s = f((t, e) => {
      const n = o.clientWidth;
      i(t, e), n < o.clientWidth && i();
    }, window),
    a = new ResizeObserver((t) => {
      const e = t[0],
        i = e.contentRect.width,
        n = e.contentRect.height;
      (0 === i && 0 === n) || s(i, n);
    });
  return (
    a.observe(o),
    (function (t, e) {
      yn.size || window.addEventListener("resize", vn), yn.set(t, e);
    })(t, s),
    a
  );
}
function Mn(t, e, i) {
  i && i.disconnect(),
    "resize" === e &&
      (function (t) {
        yn.delete(t), yn.size || window.removeEventListener("resize", vn);
      })(t);
}
function kn(t, e, i) {
  const n = t.canvas,
    o = f(
      (e) => {
        null !== t.ctx &&
          i(
            (function (t, e) {
              const i = fn[t.type] || t.type,
                { x: n, y: o } = Ke(t, e);
              return {
                type: i,
                chart: e,
                native: t,
                x: void 0 !== n ? n : null,
                y: void 0 !== o ? o : null,
              };
            })(e, t)
          );
      },
      t,
      (t) => {
        const e = t[0];
        return [e, e.offsetX, e.offsetY];
      }
    );
  return (
    (function (t, e, i) {
      t.addEventListener(e, i, pn);
    })(n, e, o),
    o
  );
}
class Sn extends dn {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t
      ? ((function (t, e) {
          const i = t.style,
            n = t.getAttribute("height"),
            o = t.getAttribute("width");
          if (
            ((t.$chartjs = {
              initial: {
                height: n,
                width: o,
                style: { display: i.display, height: i.height, width: i.width },
              },
            }),
            (i.display = i.display || "block"),
            (i.boxSizing = i.boxSizing || "border-box"),
            gn(o))
          ) {
            const e = ti(t, "width");
            void 0 !== e && (t.width = e);
          }
          if (gn(n))
            if ("" === t.style.height) t.height = t.width / (e || 2);
            else {
              const e = ti(t, "height");
              void 0 !== e && (t.height = e);
            }
        })(t, e),
        i)
      : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e.$chartjs) return !1;
    const i = e.$chartjs.initial;
    ["height", "width"].forEach((t) => {
      const n = i[t];
      b(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
    });
    const n = i.style || {};
    return (
      Object.keys(n).forEach((t) => {
        e.style[t] = n[t];
      }),
      (e.width = e.width),
      delete e.$chartjs,
      !0
    );
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}),
      o = { attach: bn, detach: xn, resize: wn }[e] || kn;
    n[e] = o(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}),
      n = i[e];
    if (!n) return;
    (({ attach: Mn, detach: Mn, resize: Mn }[e] || mn)(t, e, n),
      (i[e] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, n) {
    return qe(t, e, i, n);
  }
  isAttached(t) {
    const e = $e(t);
    return !(!e || !$e(e));
  }
}
class Pn {
  constructor() {
    (this.x = void 0),
      (this.y = void 0),
      (this.active = !1),
      (this.options = void 0),
      (this.$animations = void 0);
  }
  tooltipPosition(t) {
    const { x: e, y: i } = this.getProps(["x", "y"], t);
    return { x: e, y: i };
  }
  hasValue() {
    return K(this.x) && K(this.y);
  }
  getProps(t, e) {
    const i = this,
      n = this.$animations;
    if (!e || !n) return i;
    const o = {};
    return (
      t.forEach((t) => {
        o[t] = n[t] && n[t].active() ? n[t]._to : i[t];
      }),
      o
    );
  }
}
(Pn.defaults = {}), (Pn.defaultRoutes = void 0);
const Dn = {
  values: (t) => (x(t) ? t : "" + t),
  numeric(t, e, i) {
    if (0 === t) return "0";
    const n = this.chart.options.locale;
    let o,
      s = t;
    if (i.length > 1) {
      const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      (e < 1e-4 || e > 1e15) && (o = "scientific"),
        (s = (function (t, e) {
          let i =
            e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
          Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          return i;
        })(t, i));
    }
    const a = U(Math.abs(s)),
      r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      l = { notation: o, minimumFractionDigits: r, maximumFractionDigits: r };
    return Object.assign(l, this.options.ticks.format), si(t, n, l);
  },
  logarithmic(t, e, i) {
    if (0 === t) return "0";
    const n = t / Math.pow(10, Math.floor(U(t)));
    return 1 === n || 2 === n || 5 === n ? Dn.numeric.call(this, t, e, i) : "";
  },
};
var Cn = { formatters: Dn };
function On(t, e) {
  const i = t.options.ticks,
    n =
      i.maxTicksLimit ||
      (function (t) {
        const e = t.options.offset,
          i = t._tickSize(),
          n = t._length / i + (e ? 0 : 1),
          o = t._maxLength / i;
        return Math.floor(Math.min(n, o));
      })(t),
    o = i.major.enabled
      ? (function (t) {
          const e = [];
          let i, n;
          for (i = 0, n = t.length; i < n; i++) t[i].major && e.push(i);
          return e;
        })(e)
      : [],
    s = o.length,
    a = o[0],
    r = o[s - 1],
    l = [];
  if (s > n)
    return (
      (function (t, e, i, n) {
        let o,
          s = 0,
          a = i[0];
        for (n = Math.ceil(n), o = 0; o < t.length; o++)
          o === a && (e.push(t[o]), s++, (a = i[s * n]));
      })(e, l, o, s / n),
      l
    );
  const c = (function (t, e, i) {
    const n = (function (t) {
        const e = t.length;
        let i, n;
        if (e < 2) return !1;
        for (n = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== n) return !1;
        return n;
      })(t),
      o = e.length / i;
    if (!n) return Math.max(o, 1);
    const s = (function (t) {
      const e = [],
        i = Math.sqrt(t);
      let n;
      for (n = 1; n < i; n++) t % n == 0 && (e.push(n), e.push(t / n));
      return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
    })(n);
    for (let t = 0, e = s.length - 1; t < e; t++) {
      const e = s[t];
      if (e > o) return e;
    }
    return Math.max(o, 1);
  })(o, e, n);
  if (s > 0) {
    let t, i;
    const n = s > 1 ? Math.round((r - a) / (s - 1)) : null;
    for (Tn(e, l, c, b(n) ? 0 : a - n, a), t = 0, i = s - 1; t < i; t++)
      Tn(e, l, c, o[t], o[t + 1]);
    return Tn(e, l, c, r, b(n) ? e.length : r + n), l;
  }
  return Tn(e, l, c), l;
}
function Tn(t, e, i, n, o) {
  const s = w(n, 0),
    a = Math.min(w(o, t.length), t.length);
  let r,
    l,
    c,
    h = 0;
  for (
    i = Math.ceil(i), o && ((r = o - n), (i = r / Math.floor(r / i))), c = s;
    c < 0;

  )
    h++, (c = Math.round(s + h * i));
  for (l = Math.max(s, 0); l < a; l++)
    l === c && (e.push(t[l]), h++, (c = Math.round(s + h * i)));
}
Kt.set("scale", {
  display: !0,
  offset: !1,
  reverse: !1,
  beginAtZero: !1,
  bounds: "ticks",
  grace: 0,
  grid: {
    display: !0,
    lineWidth: 1,
    drawBorder: !0,
    drawOnChartArea: !0,
    drawTicks: !0,
    tickLength: 8,
    tickWidth: (t, e) => e.lineWidth,
    tickColor: (t, e) => e.color,
    offset: !1,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1,
  },
  title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: !1,
    textStrokeWidth: 0,
    textStrokeColor: "",
    padding: 3,
    display: !0,
    autoSkip: !0,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: Cn.formatters.values,
    minor: {},
    major: {},
    align: "center",
    crossAlign: "near",
    showLabelBackdrop: !1,
    backdropColor: "rgba(255, 255, 255, 0.75)",
    backdropPadding: 2,
  },
}),
  Kt.route("scale.ticks", "color", "", "color"),
  Kt.route("scale.grid", "color", "", "borderColor"),
  Kt.route("scale.grid", "borderColor", "", "borderColor"),
  Kt.route("scale.title", "color", "", "color"),
  Kt.describe("scale", {
    _fallback: !1,
    _scriptable: (t) =>
      !t.startsWith("before") &&
      !t.startsWith("after") &&
      "callback" !== t &&
      "parser" !== t,
    _indexable: (t) => "borderDash" !== t && "tickBorderDash" !== t,
  }),
  Kt.describe("scales", { _fallback: "scale" }),
  Kt.describe("scale.ticks", {
    _scriptable: (t) => "backdropPadding" !== t && "callback" !== t,
    _indexable: (t) => "backdropPadding" !== t,
  });
const An = (t, e, i) => ("top" === e || "left" === e ? t[e] + i : t[e] - i);
function Ln(t, e) {
  const i = [],
    n = t.length / e,
    o = t.length;
  let s = 0;
  for (; s < o; s += n) i.push(t[Math.floor(s)]);
  return i;
}
function En(t, e, i) {
  const n = t.ticks.length,
    o = Math.min(e, n - 1),
    s = t._startPixel,
    a = t._endPixel,
    r = 1e-6;
  let l,
    c = t.getPixelForTick(o);
  if (
    !(
      i &&
      ((l =
        1 === n
          ? Math.max(c - s, a - c)
          : 0 === e
          ? (t.getPixelForTick(1) - c) / 2
          : (c - t.getPixelForTick(o - 1)) / 2),
      (c += o < e ? l : -l),
      c < s - r || c > a + r)
    )
  )
    return c;
}
function Rn(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function In(t, e) {
  if (!t.display) return 0;
  const i = me(t.font, e),
    n = pe(t.padding);
  return (x(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
}
function Fn(t, e, i) {
  let n = g(t);
  return (
    ((i && "right" !== e) || (!i && "right" === e)) &&
      (n = ((t) => ("left" === t ? "right" : "right" === t ? "left" : t))(n)),
    n
  );
}
class zn extends Pn {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    const e = this;
    (e.options = t.setContext(e.getContext())),
      (e.axis = t.axis),
      (e._userMin = e.parse(t.min)),
      (e._userMax = e.parse(t.max)),
      (e._suggestedMin = e.parse(t.suggestedMin)),
      (e._suggestedMax = e.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: n } = this;
    return (
      (t = v(t, Number.POSITIVE_INFINITY)),
      (e = v(e, Number.NEGATIVE_INFINITY)),
      (i = v(i, Number.POSITIVE_INFINITY)),
      (n = v(n, Number.NEGATIVE_INFINITY)),
      { min: v(t, i), max: v(e, n), minDefined: _(t), maxDefined: _(e) }
    );
  }
  getMinMax(t) {
    const e = this;
    let i,
      { min: n, max: o, minDefined: s, maxDefined: a } = e.getUserBounds();
    if (s && a) return { min: n, max: o };
    const r = e.getMatchingVisibleMetas();
    for (let l = 0, c = r.length; l < c; ++l)
      (i = r[l].controller.getMinMax(e, t)),
        s || (n = Math.min(n, i.min)),
        a || (o = Math.max(o, i.max));
    return { min: v(n, v(o, n)), max: v(o, v(n, o)) };
  }
  getPadding() {
    const t = this;
    return {
      left: t.paddingLeft || 0,
      top: t.paddingTop || 0,
      right: t.paddingRight || 0,
      bottom: t.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    k(this.options.beforeUpdate, [this]);
  }
  update(t, e, i) {
    const n = this,
      o = n.options.ticks,
      s = o.sampleSize;
    n.beforeUpdate(),
      (n.maxWidth = t),
      (n.maxHeight = e),
      (n._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (n.ticks = null),
      (n._labelSizes = null),
      (n._gridLineItems = null),
      (n._labelItems = null),
      n.beforeSetDimensions(),
      n.setDimensions(),
      n.afterSetDimensions(),
      (n._maxLength = n.isHorizontal()
        ? n.width + i.left + i.right
        : n.height + i.top + i.bottom),
      n._dataLimitsCached ||
        (n.beforeDataLimits(),
        n.determineDataLimits(),
        n.afterDataLimits(),
        (n._range = (function (t, e) {
          const { min: i, max: n } = t;
          return { min: i - Math.abs(M(e, i)), max: n + M(e, n) };
        })(n, n.options.grace)),
        (n._dataLimitsCached = !0)),
      n.beforeBuildTicks(),
      (n.ticks = n.buildTicks() || []),
      n.afterBuildTicks();
    const a = s < n.ticks.length;
    n._convertTicksToLabels(a ? Ln(n.ticks, s) : n.ticks),
      n.configure(),
      n.beforeCalculateLabelRotation(),
      n.calculateLabelRotation(),
      n.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || "auto" === o.source) &&
        ((n.ticks = On(n, n.ticks)), (n._labelSizes = null)),
      a && n._convertTicksToLabels(n.ticks),
      n.beforeFit(),
      n.fit(),
      n.afterFit(),
      n.afterUpdate();
  }
  configure() {
    const t = this;
    let e,
      i,
      n = t.options.reverse;
    t.isHorizontal()
      ? ((e = t.left), (i = t.right))
      : ((e = t.top), (i = t.bottom), (n = !n)),
      (t._startPixel = e),
      (t._endPixel = i),
      (t._reversePixels = n),
      (t._length = i - e),
      (t._alignToPixels = t.options.alignToPixels);
  }
  afterUpdate() {
    k(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    k(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    const t = this;
    t.isHorizontal()
      ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
      : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
      (t.paddingLeft = 0),
      (t.paddingTop = 0),
      (t.paddingRight = 0),
      (t.paddingBottom = 0);
  }
  afterSetDimensions() {
    k(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    const e = this;
    e.chart.notifyPlugins(t, e.getContext()), k(e.options[t], [e]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    k(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this,
      i = e.options.ticks;
    let n, o, s;
    for (n = 0, o = t.length; n < o; n++)
      (s = t[n]), (s.label = k(i.callback, [s.value, n, t], e));
  }
  afterTickToLabelConversion() {
    k(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    k(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this,
      e = t.options,
      i = e.ticks,
      n = t.ticks.length,
      o = i.minRotation || 0,
      s = i.maxRotation;
    let a,
      r,
      l,
      c = o;
    if (!t._isVisible() || !i.display || o >= s || n <= 1 || !t.isHorizontal())
      return void (t.labelRotation = o);
    const h = t._getLabelSizes(),
      d = h.widest.width,
      u = h.highest.height,
      f = st(t.chart.width - d, 0, t.maxWidth);
    (a = e.offset ? t.maxWidth / n : f / (n - 1)),
      d + 6 > a &&
        ((a = f / (n - (e.offset ? 0.5 : 1))),
        (r =
          t.maxHeight -
          Rn(e.grid) -
          i.padding -
          In(e.title, t.chart.options.font)),
        (l = Math.sqrt(d * d + u * u)),
        (c = J(
          Math.min(
            Math.asin(Math.min((h.highest.height + 6) / a, 1)),
            Math.asin(Math.min(r / l, 1)) - Math.asin(u / l)
          )
        )),
        (c = Math.max(o, Math.min(s, c)))),
      (t.labelRotation = c);
  }
  afterCalculateLabelRotation() {
    k(this.options.afterCalculateLabelRotation, [this]);
  }
  beforeFit() {
    k(this.options.beforeFit, [this]);
  }
  fit() {
    const t = this,
      e = { width: 0, height: 0 },
      {
        chart: i,
        options: { ticks: n, title: o, grid: s },
      } = t,
      a = t._isVisible(),
      r = t.isHorizontal();
    if (a) {
      const a = In(o, i.options.font);
      if (
        (r
          ? ((e.width = t.maxWidth), (e.height = Rn(s) + a))
          : ((e.height = t.maxHeight), (e.width = Rn(s) + a)),
        n.display && t.ticks.length)
      ) {
        const { first: i, last: o, widest: s, highest: a } = t._getLabelSizes(),
          l = 2 * n.padding,
          c = Q(t.labelRotation),
          h = Math.cos(c),
          d = Math.sin(c);
        if (r) {
          const i = n.mirror ? 0 : d * s.width + h * a.height;
          e.height = Math.min(t.maxHeight, e.height + i + l);
        } else {
          const i = n.mirror ? 0 : h * s.width + d * a.height;
          e.width = Math.min(t.maxWidth, e.width + i + l);
        }
        t._calculatePadding(i, o, d, h);
      }
    }
    t._handleMargins(),
      r
        ? ((t.width = t._length = i.width - t._margins.left - t._margins.right),
          (t.height = e.height))
        : ((t.width = e.width),
          (t.height = t._length =
            i.height - t._margins.top - t._margins.bottom));
  }
  _calculatePadding(t, e, i, n) {
    const o = this,
      {
        ticks: { align: s, padding: a },
        position: r,
      } = o.options,
      l = 0 !== o.labelRotation,
      c = "top" !== r && "x" === o.axis;
    if (o.isHorizontal()) {
      const r = o.getPixelForTick(0) - o.left,
        h = o.right - o.getPixelForTick(o.ticks.length - 1);
      let d = 0,
        u = 0;
      l
        ? c
          ? ((d = n * t.width), (u = i * e.height))
          : ((d = i * t.height), (u = n * e.width))
        : "start" === s
        ? (u = e.width)
        : "end" === s
        ? (d = t.width)
        : ((d = t.width / 2), (u = e.width / 2)),
        (o.paddingLeft = Math.max(((d - r + a) * o.width) / (o.width - r), 0)),
        (o.paddingRight = Math.max(((u - h + a) * o.width) / (o.width - h), 0));
    } else {
      let i = e.height / 2,
        n = t.height / 2;
      "start" === s
        ? ((i = 0), (n = t.height))
        : "end" === s && ((i = e.height), (n = 0)),
        (o.paddingTop = i + a),
        (o.paddingBottom = n + a);
    }
  }
  _handleMargins() {
    const t = this;
    t._margins &&
      ((t._margins.left = Math.max(t.paddingLeft, t._margins.left)),
      (t._margins.top = Math.max(t.paddingTop, t._margins.top)),
      (t._margins.right = Math.max(t.paddingRight, t._margins.right)),
      (t._margins.bottom = Math.max(t.paddingBottom, t._margins.bottom)));
  }
  afterFit() {
    k(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return "top" === e || "bottom" === e || "x" === t;
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    const e = this;
    let i, n;
    for (
      e.beforeTickToLabelConversion(),
        e.generateTickLabels(t),
        i = 0,
        n = t.length;
      i < n;
      i++
    )
      b(t[i].label) && (t.splice(i, 1), n--, i--);
    e.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    const t = this;
    let e = t._labelSizes;
    if (!e) {
      const i = t.options.ticks.sampleSize;
      let n = t.ticks;
      i < n.length && (n = Ln(n, i)),
        (t._labelSizes = e = t._computeLabelSizes(n, n.length));
    }
    return e;
  }
  _computeLabelSizes(t, e) {
    const { ctx: i, _longestTextCache: n } = this,
      o = [],
      s = [];
    let a,
      r,
      l,
      c,
      h,
      d,
      u,
      f,
      g,
      p,
      m,
      y = 0,
      _ = 0;
    for (a = 0; a < e; ++a) {
      if (
        ((c = t[a].label),
        (h = this._resolveTickFontOptions(a)),
        (i.font = d = h.string),
        (u = n[d] = n[d] || { data: {}, gc: [] }),
        (f = h.lineHeight),
        (g = p = 0),
        b(c) || x(c))
      ) {
        if (x(c))
          for (r = 0, l = c.length; r < l; ++r)
            (m = c[r]),
              b(m) || x(m) || ((g = Zt(i, u.data, u.gc, g, m)), (p += f));
      } else (g = Zt(i, u.data, u.gc, g, c)), (p = f);
      o.push(g), s.push(p), (y = Math.max(g, y)), (_ = Math.max(p, _));
    }
    !(function (t, e) {
      S(t, (t) => {
        const i = t.gc,
          n = i.length / 2;
        let o;
        if (n > e) {
          for (o = 0; o < n; ++o) delete t.data[i[o]];
          i.splice(0, n);
        }
      });
    })(n, e);
    const v = o.indexOf(y),
      w = s.indexOf(_),
      M = (t) => ({ width: o[t] || 0, height: s[t] || 0 });
    return {
      first: M(0),
      last: M(e - 1),
      widest: M(v),
      highest: M(w),
      widths: o,
      heights: s,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    const e = this;
    e._reversePixels && (t = 1 - t);
    const i = e._startPixel + t * e._length;
    return st(e._alignToPixels ? Qt(e.chart, i, 0) : i, -32768, 32767);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this,
      i = e.ticks || [];
    if (t >= 0 && t < i.length) {
      const n = i[t];
      return (
        n.$context ||
        (n.$context = (function (t, e, i) {
          return Object.assign(Object.create(t), {
            tick: i,
            index: e,
            type: "tick",
          });
        })(e.getContext(), t, n))
      );
    }
    return (
      e.$context ||
      (e.$context =
        ((n = e.chart.getContext()),
        (o = e),
        Object.assign(Object.create(n), { scale: o, type: "scale" })))
    );
    var n, o;
  }
  _tickSize() {
    const t = this,
      e = t.options.ticks,
      i = Q(t.labelRotation),
      n = Math.abs(Math.cos(i)),
      o = Math.abs(Math.sin(i)),
      s = t._getLabelSizes(),
      a = e.autoSkipPadding || 0,
      r = s ? s.widest.width + a : 0,
      l = s ? s.highest.height + a : 0;
    return t.isHorizontal()
      ? l * n > r * o
        ? r / n
        : l / o
      : l * o < r * n
      ? l / n
      : r / o;
  }
  _isVisible() {
    const t = this.options.display;
    return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this,
      i = e.axis,
      n = e.chart,
      o = e.options,
      { grid: s, position: a } = o,
      r = s.offset,
      l = e.isHorizontal(),
      c = e.ticks.length + (r ? 1 : 0),
      h = Rn(s),
      d = [],
      u = s.setContext(e.getContext()),
      f = u.drawBorder ? u.borderWidth : 0,
      g = f / 2,
      p = function (t) {
        return Qt(n, t, f);
      };
    let m, b, x, _, v, M, k, S, P, D, C, O;
    if ("top" === a)
      (m = p(e.bottom)),
        (M = e.bottom - h),
        (S = m - g),
        (D = p(t.top) + g),
        (O = t.bottom);
    else if ("bottom" === a)
      (m = p(e.top)),
        (D = t.top),
        (O = p(t.bottom) - g),
        (M = m + g),
        (S = e.top + h);
    else if ("left" === a)
      (m = p(e.right)),
        (v = e.right - h),
        (k = m - g),
        (P = p(t.left) + g),
        (C = t.right);
    else if ("right" === a)
      (m = p(e.left)),
        (P = t.left),
        (C = p(t.right) - g),
        (v = m + g),
        (k = e.left + h);
    else if ("x" === i) {
      if ("center" === a) m = p((t.top + t.bottom) / 2 + 0.5);
      else if (y(a)) {
        const t = Object.keys(a)[0],
          i = a[t];
        m = p(e.chart.scales[t].getPixelForValue(i));
      }
      (D = t.top), (O = t.bottom), (M = m + g), (S = M + h);
    } else if ("y" === i) {
      if ("center" === a) m = p((t.left + t.right) / 2);
      else if (y(a)) {
        const t = Object.keys(a)[0],
          i = a[t];
        m = p(e.chart.scales[t].getPixelForValue(i));
      }
      (v = m - g), (k = v - h), (P = t.left), (C = t.right);
    }
    const T = w(o.ticks.maxTicksLimit, c),
      A = Math.max(1, Math.ceil(c / T));
    for (b = 0; b < c; b += A) {
      const t = s.setContext(e.getContext(b)),
        i = t.lineWidth,
        o = t.color,
        a = s.borderDash || [],
        c = t.borderDashOffset,
        h = t.tickWidth,
        u = t.tickColor,
        f = t.tickBorderDash || [],
        g = t.tickBorderDashOffset;
      (x = En(e, b, r)),
        void 0 !== x &&
          ((_ = Qt(n, x, i)),
          l ? (v = k = P = C = _) : (M = S = D = O = _),
          d.push({
            tx1: v,
            ty1: M,
            tx2: k,
            ty2: S,
            x1: P,
            y1: D,
            x2: C,
            y2: O,
            width: i,
            color: o,
            borderDash: a,
            borderDashOffset: c,
            tickWidth: h,
            tickColor: u,
            tickBorderDash: f,
            tickBorderDashOffset: g,
          }));
    }
    return (e._ticksLength = c), (e._borderValue = m), d;
  }
  _computeLabelItems(t) {
    const e = this,
      i = e.axis,
      n = e.options,
      { position: o, ticks: s } = n,
      a = e.isHorizontal(),
      r = e.ticks,
      { align: l, crossAlign: c, padding: h, mirror: d } = s,
      u = Rn(n.grid),
      f = u + h,
      g = d ? -h : f,
      p = -Q(e.labelRotation),
      m = [];
    let b,
      _,
      v,
      w,
      M,
      k,
      S,
      P,
      D,
      C,
      O,
      T,
      A = "middle";
    if ("top" === o) (k = e.bottom - g), (S = e._getXAxisLabelAlignment());
    else if ("bottom" === o) (k = e.top + g), (S = e._getXAxisLabelAlignment());
    else if ("left" === o) {
      const t = e._getYAxisLabelAlignment(u);
      (S = t.textAlign), (M = t.x);
    } else if ("right" === o) {
      const t = e._getYAxisLabelAlignment(u);
      (S = t.textAlign), (M = t.x);
    } else if ("x" === i) {
      if ("center" === o) k = (t.top + t.bottom) / 2 + f;
      else if (y(o)) {
        const t = Object.keys(o)[0],
          i = o[t];
        k = e.chart.scales[t].getPixelForValue(i) + f;
      }
      S = e._getXAxisLabelAlignment();
    } else if ("y" === i) {
      if ("center" === o) M = (t.left + t.right) / 2 - f;
      else if (y(o)) {
        const t = Object.keys(o)[0],
          i = o[t];
        M = e.chart.scales[t].getPixelForValue(i);
      }
      S = e._getYAxisLabelAlignment(u).textAlign;
    }
    "y" === i && ("start" === l ? (A = "top") : "end" === l && (A = "bottom"));
    const L = e._getLabelSizes();
    for (b = 0, _ = r.length; b < _; ++b) {
      (v = r[b]), (w = v.label);
      const t = s.setContext(e.getContext(b));
      (P = e.getPixelForTick(b) + s.labelOffset),
        (D = e._resolveTickFontOptions(b)),
        (C = D.lineHeight),
        (O = x(w) ? w.length : 1);
      const i = O / 2,
        n = t.color,
        l = t.textStrokeColor,
        h = t.textStrokeWidth;
      let u;
      if (
        (a
          ? ((M = P),
            (T =
              "top" === o
                ? "near" === c || 0 !== p
                  ? -O * C + C / 2
                  : "center" === c
                  ? -L.highest.height / 2 - i * C + C
                  : -L.highest.height + C / 2
                : "near" === c || 0 !== p
                ? C / 2
                : "center" === c
                ? L.highest.height / 2 - i * C
                : L.highest.height - O * C),
            d && (T *= -1))
          : ((k = P), (T = ((1 - O) * C) / 2)),
        t.showLabelBackdrop)
      ) {
        const e = pe(t.backdropPadding),
          i = L.heights[b],
          n = L.widths[b];
        let o = k + T - e.top,
          s = M - e.left;
        switch (A) {
          case "middle":
            o -= i / 2;
            break;
          case "bottom":
            o -= i;
        }
        switch (S) {
          case "center":
            s -= n / 2;
            break;
          case "right":
            s -= n;
        }
        u = {
          left: s,
          top: o,
          width: n + e.width,
          height: i + e.height,
          color: t.backdropColor,
        };
      }
      m.push({
        rotation: p,
        label: w,
        font: D,
        color: n,
        strokeColor: l,
        strokeWidth: h,
        textOffset: T,
        textAlign: S,
        textBaseline: A,
        translation: [M, k],
        backdrop: u,
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Q(this.labelRotation)) return "top" === t ? "left" : "right";
    let i = "center";
    return (
      "start" === e.align ? (i = "left") : "end" === e.align && (i = "right"), i
    );
  }
  _getYAxisLabelAlignment(t) {
    const e = this,
      {
        position: i,
        ticks: { crossAlign: n, mirror: o, padding: s },
      } = e.options,
      a = t + s,
      r = e._getLabelSizes().widest.width;
    let l, c;
    return (
      "left" === i
        ? o
          ? ((l = "left"), (c = e.right + s))
          : ((c = e.right - a),
            "near" === n
              ? (l = "right")
              : "center" === n
              ? ((l = "center"), (c -= r / 2))
              : ((l = "left"), (c = e.left)))
        : "right" === i
        ? o
          ? ((l = "right"), (c = e.left + s))
          : ((c = e.left + a),
            "near" === n
              ? (l = "left")
              : "center" === n
              ? ((l = "center"), (c += r / 2))
              : ((l = "right"), (c = e.right)))
        : (l = "right"),
      { textAlign: l, x: c }
    );
  }
  _computeLabelArea() {
    const t = this;
    if (t.options.ticks.mirror) return;
    const e = t.chart,
      i = t.options.position;
    return "left" === i || "right" === i
      ? { top: 0, left: t.left, bottom: e.height, right: t.right }
      : "top" === i || "bottom" === i
      ? { top: t.top, left: 0, bottom: t.bottom, right: e.width }
      : void 0;
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: i,
      top: n,
      width: o,
      height: s,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(i, n, o, s), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this,
      i = e.options.grid;
    if (!e._isVisible() || !i.display) return 0;
    const n = e.ticks.findIndex((e) => e.value === t);
    if (n >= 0) {
      return i.setContext(e.getContext(n)).lineWidth;
    }
    return 0;
  }
  drawGrid(t) {
    const e = this,
      i = e.options.grid,
      n = e.ctx,
      o = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
    let s, a;
    const r = (t, e, i) => {
      i.width &&
        i.color &&
        (n.save(),
        (n.lineWidth = i.width),
        (n.strokeStyle = i.color),
        n.setLineDash(i.borderDash || []),
        (n.lineDashOffset = i.borderDashOffset),
        n.beginPath(),
        n.moveTo(t.x, t.y),
        n.lineTo(e.x, e.y),
        n.stroke(),
        n.restore());
    };
    if (i.display)
      for (s = 0, a = o.length; s < a; ++s) {
        const t = o[s];
        i.drawOnChartArea && r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
          i.drawTicks &&
            r(
              { x: t.tx1, y: t.ty1 },
              { x: t.tx2, y: t.ty2 },
              {
                color: t.tickColor,
                width: t.tickWidth,
                borderDash: t.tickBorderDash,
                borderDashOffset: t.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const t = this,
      {
        chart: e,
        ctx: i,
        options: { grid: n },
      } = t,
      o = n.setContext(t.getContext()),
      s = n.drawBorder ? o.borderWidth : 0;
    if (!s) return;
    const a = n.setContext(t.getContext(0)).lineWidth,
      r = t._borderValue;
    let l, c, h, d;
    t.isHorizontal()
      ? ((l = Qt(e, t.left, s) - s / 2),
        (c = Qt(e, t.right, a) + a / 2),
        (h = d = r))
      : ((h = Qt(e, t.top, s) - s / 2),
        (d = Qt(e, t.bottom, a) + a / 2),
        (l = c = r)),
      i.save(),
      (i.lineWidth = o.borderWidth),
      (i.strokeStyle = o.borderColor),
      i.beginPath(),
      i.moveTo(l, h),
      i.lineTo(c, d),
      i.stroke(),
      i.restore();
  }
  drawLabels(t) {
    const e = this;
    if (!e.options.ticks.display) return;
    const i = e.ctx,
      n = e._computeLabelArea();
    n && ie(i, n);
    const o = e._labelItems || (e._labelItems = e._computeLabelItems(t));
    let s, a;
    for (s = 0, a = o.length; s < a; ++s) {
      const t = o[s],
        e = t.font,
        n = t.label;
      t.backdrop &&
        ((i.fillStyle = t.backdrop.color),
        i.fillRect(
          t.backdrop.left,
          t.backdrop.top,
          t.backdrop.width,
          t.backdrop.height
        )),
        ae(i, n, 0, t.textOffset, e, t);
    }
    n && ne(i);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: i, reverse: n },
    } = this;
    if (!i.display) return;
    const o = me(i.font),
      s = pe(i.padding),
      a = i.align;
    let r = o.lineHeight / 2;
    "bottom" === e
      ? ((r += s.bottom),
        x(i.text) && (r += o.lineHeight * (i.text.length - 1)))
      : (r += s.top);
    const {
      titleX: l,
      titleY: c,
      maxWidth: h,
      rotation: d,
    } = (function (t, e, i, n) {
      const { top: o, left: s, bottom: a, right: r } = t;
      let l,
        c,
        h,
        d = 0;
      return (
        t.isHorizontal()
          ? ((c = p(n, s, r)), (h = An(t, i, e)), (l = r - s))
          : ((c = An(t, i, e)), (h = p(n, a, o)), (d = "left" === i ? -H : H)),
        { titleX: c, titleY: h, maxWidth: l, rotation: d }
      );
    })(this, r, e, a);
    ae(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: h,
      rotation: d,
      textAlign: Fn(a, e, n),
      textBaseline: "middle",
      translation: [l, c],
    });
  }
  draw(t) {
    const e = this;
    e._isVisible() &&
      (e.drawBackground(),
      e.drawGrid(t),
      e.drawBorder(),
      e.drawTitle(),
      e.drawLabels(t));
  }
  _layers() {
    const t = this,
      e = t.options,
      i = (e.ticks && e.ticks.z) || 0,
      n = (e.grid && e.grid.z) || 0;
    return t._isVisible() && t.draw === zn.prototype.draw
      ? [
          {
            z: n,
            draw(e) {
              t.drawBackground(), t.drawGrid(e), t.drawTitle();
            },
          },
          {
            z: n + 1,
            draw() {
              t.drawBorder();
            },
          },
          {
            z: i,
            draw(e) {
              t.drawLabels(e);
            },
          },
        ]
      : [
          {
            z: i,
            draw(e) {
              t.draw(e);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this,
      i = e.chart.getSortedVisibleDatasetMetas(),
      n = e.axis + "AxisID",
      o = [];
    let s, a;
    for (s = 0, a = i.length; s < a; ++s) {
      const a = i[s];
      a[n] !== e.id || (t && a.type !== t) || o.push(a);
    }
    return o;
  }
  _resolveTickFontOptions(t) {
    return me(this.options.ticks.setContext(this.getContext(t)).font);
  }
  _maxDigits() {
    const t = this,
      e = t._resolveTickFontOptions(0).lineHeight;
    return (t.isHorizontal() ? t.width : t.height) / e;
  }
}
class Vn {
  constructor(t, e, i) {
    (this.type = t),
      (this.scope = e),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const e = this,
      i = Object.getPrototypeOf(t);
    let n;
    (function (t) {
      return "id" in t && "defaults" in t;
    })(i) && (n = e.register(i));
    const o = e.items,
      s = t.id,
      a = e.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + t);
    return (
      s in o ||
        ((o[s] = t),
        (function (t, e, i) {
          const n = T(Object.create(null), [
            i ? Kt.get(i) : {},
            Kt.get(e),
            t.defaults,
          ]);
          Kt.set(e, n),
            t.defaultRoutes &&
              (function (t, e) {
                Object.keys(e).forEach((i) => {
                  const n = i.split("."),
                    o = n.pop(),
                    s = [t].concat(n).join("."),
                    a = e[i].split("."),
                    r = a.pop(),
                    l = a.join(".");
                  Kt.route(s, o, l, r);
                });
              })(e, t.defaultRoutes);
          t.descriptors && Kt.describe(e, t.descriptors);
        })(t, a, n),
        e.override && Kt.override(t.id, t.overrides)),
      a
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      i = t.id,
      n = this.scope;
    i in e && delete e[i],
      n && i in Kt[n] && (delete Kt[n][i], this.override && delete Yt[i]);
  }
}
var Bn = new (class {
  constructor() {
    (this.controllers = new Vn(Ti, "datasets", !0)),
      (this.elements = new Vn(Pn, "elements")),
      (this.plugins = new Vn(Object, "plugins")),
      (this.scales = new Vn(zn, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, i) {
    const n = this;
    [...e].forEach((e) => {
      const o = i || n._getRegistryForType(e);
      i || o.isForType(e) || (o === n.plugins && e.id)
        ? n._exec(t, o, e)
        : S(e, (e) => {
            const o = i || n._getRegistryForType(e);
            n._exec(t, o, e);
          });
    });
  }
  _exec(t, e, i) {
    const n = I(t);
    k(i["before" + n], [], i), e[t](i), k(i["after" + n], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const n = e.get(t);
    if (void 0 === n)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return n;
  }
})();
class Nn {
  constructor() {
    this._init = [];
  }
  notify(t, e, i, n) {
    const o = this;
    "beforeInit" === e &&
      ((o._init = o._createDescriptors(t, !0)),
      o._notify(o._init, t, "install"));
    const s = n ? o._descriptors(t).filter(n) : o._descriptors(t),
      a = o._notify(s, t, e, i);
    return (
      "destroy" === e &&
        (o._notify(s, t, "stop"), o._notify(o._init, t, "uninstall")),
      a
    );
  }
  _notify(t, e, i, n) {
    n = n || {};
    for (const o of t) {
      const t = o.plugin;
      if (!1 === k(t[i], [e, n, o.options], t) && n.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    b(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config,
      n = w(i.options && i.options.plugins, {}),
      o = (function (t) {
        const e = [],
          i = Object.keys(Bn.plugins.items);
        for (let t = 0; t < i.length; t++) e.push(Bn.getPlugin(i[t]));
        const n = t.plugins || [];
        for (let t = 0; t < n.length; t++) {
          const i = n[t];
          -1 === e.indexOf(i) && e.push(i);
        }
        return e;
      })(i);
    return !1 !== n || e
      ? (function (t, e, i, n) {
          const o = [],
            s = t.getContext();
          for (let a = 0; a < e.length; a++) {
            const r = e[a],
              l = Wn(i[r.id], n);
            null !== l && o.push({ plugin: r, options: jn(t.config, r, l, s) });
          }
          return o;
        })(t, o, n, e)
      : [];
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      i = this._cache,
      n = (t, e) =>
        t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
    this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start");
  }
}
function Wn(t, e) {
  return e || !1 !== t ? (!0 === t ? {} : t) : null;
}
function jn(t, e, i, n) {
  const o = t.pluginScopeKeys(e),
    s = t.getOptionScopes(i, o);
  return t.createResolver(s, n, [""], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0,
  });
}
function Hn(t, e) {
  const i = Kt.datasets[t] || {};
  return (
    ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
  );
}
function $n(t, e) {
  return "x" === t || "y" === t
    ? t
    : e.axis ||
        ("top" === (i = e.position) || "bottom" === i
          ? "x"
          : "left" === i || "right" === i
          ? "y"
          : void 0) ||
        t.charAt(0).toLowerCase();
  var i;
}
function Yn(t) {
  const e = t.options || (t.options = {});
  (e.plugins = w(e.plugins, {})),
    (e.scales = (function (t, e) {
      const i = Yt[t.type] || { scales: {} },
        n = e.scales || {},
        o = Hn(t.type, e),
        s = Object.create(null),
        a = Object.create(null);
      return (
        Object.keys(n).forEach((t) => {
          const e = n[t],
            r = $n(t, e),
            l = (function (t, e) {
              return t === e ? "_index_" : "_value_";
            })(r, o),
            c = i.scales || {};
          (s[r] = s[r] || t),
            (a[t] = A(Object.create(null), [{ axis: r }, e, c[r], c[l]]));
        }),
        t.data.datasets.forEach((i) => {
          const o = i.type || t.type,
            r = i.indexAxis || Hn(o, e),
            l = (Yt[o] || {}).scales || {};
          Object.keys(l).forEach((t) => {
            const e = (function (t, e) {
                let i = t;
                return (
                  "_index_" === t
                    ? (i = e)
                    : "_value_" === t && (i = "x" === e ? "y" : "x"),
                  i
                );
              })(t, r),
              o = i[e + "AxisID"] || s[e] || e;
            (a[o] = a[o] || Object.create(null)),
              A(a[o], [{ axis: e }, n[o], l[t]]);
          });
        }),
        Object.keys(a).forEach((t) => {
          const e = a[t];
          A(e, [Kt.scales[e.type], Kt.scale]);
        }),
        a
      );
    })(t, e));
}
function Un(t) {
  return (
    ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
  );
}
const Xn = new Map(),
  Gn = new Set();
function Kn(t, e) {
  let i = Xn.get(t);
  return i || ((i = e()), Xn.set(t, i), Gn.add(i)), i;
}
const Zn = (t, e, i) => {
  const n = R(e, i);
  void 0 !== n && t.add(n);
};
class qn {
  constructor(t) {
    (this._config = (function (t) {
      return ((t = t || {}).data = Un(t.data)), Yn(t), t;
    })(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Un(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Yn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Kn(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Kn(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Kn(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id;
    return Kn(`${this.type}-plugin-${e}`, () => [
      [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let n = i.get(t);
    return (n && !e) || ((n = new Map()), i.set(t, n)), n;
  }
  getOptionScopes(t, e, i) {
    const { options: n, type: o } = this,
      s = this._cachedScopes(t, i),
      a = s.get(e);
    if (a) return a;
    const r = new Set();
    e.forEach((e) => {
      t && (r.add(t), e.forEach((e) => Zn(r, t, e))),
        e.forEach((t) => Zn(r, n, t)),
        e.forEach((t) => Zn(r, Yt[o] || {}, t)),
        e.forEach((t) => Zn(r, Kt, t)),
        e.forEach((t) => Zn(r, Ut, t));
    });
    const l = Array.from(r);
    return Gn.has(e) && s.set(e, l), l;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, Yt[e] || {}, Kt.datasets[e] || {}, { type: e }, Kt, Ut];
  }
  resolveNamedOptions(t, e, i, n = [""]) {
    const o = { $shared: !0 },
      { resolver: s, subPrefixes: a } = Qn(this._resolverCache, t, n);
    let r = s;
    if (
      (function (t, e) {
        const { isScriptable: i, isIndexable: n } = Pe(t);
        for (const o of e)
          if ((i(o) && z(t[o])) || (n(o) && x(t[o]))) return !0;
        return !1;
      })(s, e)
    ) {
      o.$shared = !1;
      r = Se(s, (i = z(i) ? i() : i), this.createResolver(t, i, a));
    }
    for (const t of e) o[t] = r[t];
    return o;
  }
  createResolver(t, e, i = [""], n) {
    const { resolver: o } = Qn(this._resolverCache, t, i);
    return y(e) ? Se(o, e, void 0, n) : o;
  }
}
function Qn(t, e, i) {
  let n = t.get(e);
  n || ((n = new Map()), t.set(e, n));
  const o = i.join();
  let s = n.get(o);
  if (!s) {
    (s = {
      resolver: ke(e, i),
      subPrefixes: i.filter((t) => !t.toLowerCase().includes("hover")),
    }),
      n.set(o, s);
  }
  return s;
}
const Jn = ["top", "bottom", "left", "right", "chartArea"];
function to(t, e) {
  return "top" === t || "bottom" === t || (-1 === Jn.indexOf(t) && "x" === e);
}
function eo(t, e) {
  return function (i, n) {
    return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t];
  };
}
function io(t) {
  const e = t.chart,
    i = e.options.animation;
  e.notifyPlugins("afterRender"), k(i && i.onComplete, [t], e);
}
function no(t) {
  const e = t.chart,
    i = e.options.animation;
  k(i && i.onProgress, [t], e);
}
function oo() {
  return "undefined" != typeof window && "undefined" != typeof document;
}
function so(t) {
  return (
    oo() && "string" == typeof t
      ? (t = document.getElementById(t))
      : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
const ao = {},
  ro = (t) => {
    const e = so(t);
    return Object.values(ao)
      .filter((t) => t.canvas === e)
      .pop();
  };
class lo {
  constructor(t, e) {
    const i = this;
    this.config = e = new qn(e);
    const n = so(t),
      o = ro(n);
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas can be reused."
      );
    const s = e.createResolver(e.chartOptionScopes(), i.getContext());
    this.platform = i._initializePlatform(n, e);
    const a = i.platform.acquireContext(n, s.aspectRatio),
      r = a && a.canvas,
      l = r && r.height,
      c = r && r.width;
    (this.id = m()),
      (this.ctx = a),
      (this.canvas = r),
      (this.width = c),
      (this.height = l),
      (this._options = s),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this.scale = void 0),
      (this._plugins = new Nn()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = (function (t, e) {
        let i;
        return function () {
          return e ? (clearTimeout(i), (i = setTimeout(t, e))) : t(), e;
        };
      })(() => this.update("resize"), s.resizeDelay || 0)),
      (ao[i.id] = i),
      a && r
        ? (gi.listen(i, "complete", io),
          gi.listen(i, "progress", no),
          i._initialize(),
          i.attached && i.update())
        : console.error(
            "Failed to create chart: can't acquire context from the given item"
          );
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: e },
      width: i,
      height: n,
      _aspectRatio: o,
    } = this;
    return b(t) ? (e && o ? o : n ? i / n : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  _initialize() {
    const t = this;
    return (
      t.notifyPlugins("beforeInit"),
      t.options.responsive ? t.resize() : Qe(t, t.options.devicePixelRatio),
      t.bindEvents(),
      t.notifyPlugins("afterInit"),
      t
    );
  }
  _initializePlatform(t, e) {
    return e.platform
      ? new e.platform()
      : !oo() ||
        ("undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas)
      ? new un()
      : new Sn();
  }
  clear() {
    return Jt(this.canvas, this.ctx), this;
  }
  stop() {
    return gi.stop(this), this;
  }
  resize(t, e) {
    gi.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: e })
      : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this,
      n = i.options,
      o = i.canvas,
      s = n.maintainAspectRatio && i.aspectRatio,
      a = i.platform.getMaximumSize(o, t, e, s),
      r = n.devicePixelRatio || i.platform.getDevicePixelRatio();
    (i.width = a.width),
      (i.height = a.height),
      (i._aspectRatio = i.aspectRatio),
      Qe(i, r, !0) &&
        (i.notifyPlugins("resize", { size: a }),
        k(n.onResize, [i, a], i),
        i.attached && i._doResize() && i.render());
  }
  ensureScalesHaveIDs() {
    S(this.options.scales || {}, (t, e) => {
      t.id = e;
    });
  }
  buildOrUpdateScales() {
    const t = this,
      e = t.options,
      i = e.scales,
      n = t.scales,
      o = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
    let s = [];
    i &&
      (s = s.concat(
        Object.keys(i).map((t) => {
          const e = i[t],
            n = $n(t, e),
            o = "r" === n,
            s = "x" === n;
          return {
            options: e,
            dposition: o ? "chartArea" : s ? "bottom" : "left",
            dtype: o ? "radialLinear" : s ? "category" : "linear",
          };
        })
      )),
      S(s, (i) => {
        const s = i.options,
          a = s.id,
          r = $n(a, s),
          l = w(s.type, i.dtype);
        (void 0 !== s.position && to(s.position, r) === to(i.dposition)) ||
          (s.position = i.dposition),
          (o[a] = !0);
        let c = null;
        if (a in n && n[a].type === l) c = n[a];
        else {
          (c = new (Bn.getScale(l))({ id: a, type: l, ctx: t.ctx, chart: t })),
            (n[c.id] = c);
        }
        c.init(s, e);
      }),
      S(o, (t, e) => {
        t || delete n[e];
      }),
      S(n, (e) => {
        hn.configure(t, e, e.options), hn.addBox(t, e);
      });
  }
  _updateMetasets() {
    const t = this,
      e = t._metasets,
      i = t.data.datasets.length,
      n = e.length;
    if ((e.sort((t, e) => t.index - e.index), n > i)) {
      for (let e = i; e < n; ++e) t._destroyDatasetMeta(e);
      e.splice(i, n - i);
    }
    t._sortedMetasets = e.slice(0).sort(eo("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const t = this,
      {
        _metasets: e,
        data: { datasets: i },
      } = t;
    e.length > i.length && delete t._stacks,
      e.forEach((e, n) => {
        0 === i.filter((t) => t === e._dataset).length &&
          t._destroyDatasetMeta(n);
      });
  }
  buildOrUpdateControllers() {
    const t = this,
      e = [],
      i = t.data.datasets;
    let n, o;
    for (t._removeUnreferencedMetasets(), n = 0, o = i.length; n < o; n++) {
      const o = i[n];
      let s = t.getDatasetMeta(n);
      const a = o.type || t.config.type;
      if (
        (s.type &&
          s.type !== a &&
          (t._destroyDatasetMeta(n), (s = t.getDatasetMeta(n))),
        (s.type = a),
        (s.indexAxis = o.indexAxis || Hn(a, t.options)),
        (s.order = o.order || 0),
        (s.index = n),
        (s.label = "" + o.label),
        (s.visible = t.isDatasetVisible(n)),
        s.controller)
      )
        s.controller.updateIndex(n), s.controller.linkScales();
      else {
        const i = Bn.getController(a),
          { datasetElementType: o, dataElementType: r } = Kt.datasets[a];
        Object.assign(i.prototype, {
          dataElementType: Bn.getElement(r),
          datasetElementType: o && Bn.getElement(o),
        }),
          (s.controller = new i(t, n)),
          e.push(s.controller);
      }
    }
    return t._updateMetasets(), e;
  }
  _resetElements() {
    const t = this;
    S(
      t.data.datasets,
      (e, i) => {
        t.getDatasetMeta(i).controller.reset();
      },
      t
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this,
      i = e.config;
    i.update(),
      (e._options = i.createResolver(i.chartOptionScopes(), e.getContext())),
      S(e.scales, (t) => {
        hn.removeBox(e, t);
      });
    const n = (e._animationsDisabled = !e.options.animation);
    e.ensureScalesHaveIDs(), e.buildOrUpdateScales();
    if (
      ((((t, e) => {
        if (t.size !== e.size) return !1;
        for (const i of t) if (!e.has(i)) return !1;
        return !0;
      })(new Set(Object.keys(e._listeners)), new Set(e.options.events)) &&
        !!this._responsiveListeners === e.options.responsive) ||
        (e.unbindEvents(), e.bindEvents()),
      e._plugins.invalidate(),
      !1 === e.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
    )
      return;
    const o = e.buildOrUpdateControllers();
    e.notifyPlugins("beforeElementsUpdate");
    let s = 0;
    for (let t = 0, i = e.data.datasets.length; t < i; t++) {
      const { controller: i } = e.getDatasetMeta(t),
        a = !n && -1 === o.indexOf(i);
      i.buildOrUpdateElements(a), (s = Math.max(+i.getMaxOverflow(), s));
    }
    (e._minPadding = s),
      e._updateLayout(s),
      n ||
        S(o, (t) => {
          t.reset();
        }),
      e._updateDatasets(t),
      e.notifyPlugins("afterUpdate", { mode: t }),
      e._layers.sort(eo("z", "_idx")),
      e._lastEvent && e._eventHandler(e._lastEvent, !0),
      e.render();
  }
  _updateLayout(t) {
    const e = this;
    if (!1 === e.notifyPlugins("beforeLayout", { cancelable: !0 })) return;
    hn.update(e, e.width, e.height, t);
    const i = e.chartArea,
      n = i.width <= 0 || i.height <= 0;
    (e._layers = []),
      S(
        e.boxes,
        (t) => {
          (n && "chartArea" === t.position) ||
            (t.configure && t.configure(), e._layers.push(...t._layers()));
        },
        e
      ),
      e._layers.forEach((t, e) => {
        t._idx = e;
      }),
      e.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    const e = this,
      i = "function" == typeof t;
    if (
      !1 !==
      e.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })
    ) {
      for (let n = 0, o = e.data.datasets.length; n < o; ++n)
        e._updateDataset(n, i ? t({ datasetIndex: n }) : t);
      e.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, e) {
    const i = this,
      n = i.getDatasetMeta(t),
      o = { meta: n, index: t, mode: e, cancelable: !0 };
    !1 !== i.notifyPlugins("beforeDatasetUpdate", o) &&
      (n.controller._update(e),
      (o.cancelable = !1),
      i.notifyPlugins("afterDatasetUpdate", o));
  }
  render() {
    const t = this;
    !1 !== t.notifyPlugins("beforeRender", { cancelable: !0 }) &&
      (gi.has(t)
        ? t.attached && !gi.running(t) && gi.start(t)
        : (t.draw(), io({ chart: t })));
  }
  draw() {
    const t = this;
    let e;
    if (t._resizeBeforeDraw) {
      const { width: e, height: i } = t._resizeBeforeDraw;
      t._resize(e, i), (t._resizeBeforeDraw = null);
    }
    if ((t.clear(), t.width <= 0 || t.height <= 0)) return;
    if (!1 === t.notifyPlugins("beforeDraw", { cancelable: !0 })) return;
    const i = t._layers;
    for (e = 0; e < i.length && i[e].z <= 0; ++e) i[e].draw(t.chartArea);
    for (t._drawDatasets(); e < i.length; ++e) i[e].draw(t.chartArea);
    t.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      i = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const o = e[n];
      (t && !o.visible) || i.push(o);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    const t = this;
    if (!1 === t.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }))
      return;
    const e = t.getSortedVisibleDatasetMetas();
    for (let i = e.length - 1; i >= 0; --i) t._drawDataset(e[i]);
    t.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this,
      i = e.ctx,
      n = t._clip,
      o = !n.disabled,
      s = e.chartArea,
      a = { meta: t, index: t.index, cancelable: !0 };
    !1 !== e.notifyPlugins("beforeDatasetDraw", a) &&
      (o &&
        ie(i, {
          left: !1 === n.left ? 0 : s.left - n.left,
          right: !1 === n.right ? e.width : s.right + n.right,
          top: !1 === n.top ? 0 : s.top - n.top,
          bottom: !1 === n.bottom ? e.height : s.bottom + n.bottom,
        }),
      t.controller.draw(),
      o && ne(i),
      (a.cancelable = !1),
      e.notifyPlugins("afterDatasetDraw", a));
  }
  getElementsAtEventForMode(t, e, i, n) {
    const o = Qi.modes[e];
    return "function" == typeof o ? o(this, t, i, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      i = this._metasets;
    let n = i.filter((t) => t && t._dataset === e).pop();
    return (
      n ||
        ((n = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        i.push(n)),
      n
    );
  }
  getContext() {
    return this.$context || (this.$context = { chart: this, type: "chart" });
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e) return !1;
    const i = this.getDatasetMeta(t);
    return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    this.getDatasetMeta(t).hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateDatasetVisibility(t, e) {
    const i = this,
      n = e ? "show" : "hide",
      o = i.getDatasetMeta(t),
      s = o.controller._resolveAnimations(void 0, n);
    i.setDatasetVisibility(t, e),
      s.update(o, { visible: e }),
      i.update((e) => (e.datasetIndex === t ? n : void 0));
  }
  hide(t) {
    this._updateDatasetVisibility(t, !1);
  }
  show(t) {
    this._updateDatasetVisibility(t, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this,
      i = e._metasets && e._metasets[t];
    i && i.controller && (i.controller._destroy(), delete e._metasets[t]);
  }
  destroy() {
    const t = this,
      { canvas: e, ctx: i } = t;
    let n, o;
    for (t.stop(), gi.remove(t), n = 0, o = t.data.datasets.length; n < o; ++n)
      t._destroyDatasetMeta(n);
    t.config.clearCache(),
      e &&
        (t.unbindEvents(),
        Jt(e, i),
        t.platform.releaseContext(i),
        (t.canvas = null),
        (t.ctx = null)),
      t.notifyPlugins("destroy"),
      delete ao[t.id];
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this,
      e = t._listeners,
      i = t.platform,
      n = function (e, i, n) {
        (e.offsetX = i), (e.offsetY = n), t._eventHandler(e);
      };
    S(t.options.events, (o) =>
      ((n, o) => {
        i.addEventListener(t, n, o), (e[n] = o);
      })(o, n)
    );
  }
  bindResponsiveEvents() {
    const t = this;
    t._responsiveListeners || (t._responsiveListeners = {});
    const e = t._responsiveListeners,
      i = t.platform,
      n = (n, o) => {
        i.addEventListener(t, n, o), (e[n] = o);
      },
      o = (n, o) => {
        e[n] && (i.removeEventListener(t, n, o), delete e[n]);
      },
      s = (e, i) => {
        t.canvas && t.resize(e, i);
      };
    let a;
    const r = () => {
      o("attach", r),
        (t.attached = !0),
        t.resize(),
        n("resize", s),
        n("detach", a);
    };
    (a = () => {
      (t.attached = !1), o("resize", s), n("attach", r);
    }),
      i.isAttached(t.canvas) ? r() : a();
  }
  unbindEvents() {
    const t = this;
    S(t._listeners, (e, i) => {
      t.platform.removeEventListener(t, i, e);
    }),
      (t._listeners = {}),
      S(t._responsiveListeners, (e, i) => {
        t.platform.removeEventListener(t, i, e);
      }),
      (t._responsiveListeners = void 0);
  }
  updateHoverStyle(t, e, i) {
    const n = i ? "set" : "remove";
    let o, s, a, r;
    for (
      "dataset" === e &&
        ((o = this.getDatasetMeta(t[0].datasetIndex)),
        o.controller["_" + n + "DatasetHoverStyle"]()),
        a = 0,
        r = t.length;
      a < r;
      ++a
    ) {
      s = t[a];
      const e = s && this.getDatasetMeta(s.datasetIndex).controller;
      e && e[n + "HoverStyle"](s.element, s.datasetIndex, s.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this,
      i = e._active || [],
      n = t.map(({ datasetIndex: t, index: i }) => {
        const n = e.getDatasetMeta(t);
        if (!n) throw new Error("No dataset found at index " + t);
        return { datasetIndex: t, element: n.data[i], index: i };
      });
    !P(n, i) && ((e._active = n), e._updateHoverStyles(n, i));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  _updateHoverStyles(t, e, i) {
    const n = this,
      o = n.options.hover,
      s = (t, e) =>
        t.filter(
          (t) =>
            !e.some(
              (e) => t.datasetIndex === e.datasetIndex && t.index === e.index
            )
        ),
      a = s(e, t),
      r = i ? t : s(t, e);
    a.length && n.updateHoverStyle(a, o.mode, !1),
      r.length && o.mode && n.updateHoverStyle(r, o.mode, !0);
  }
  _eventHandler(t, e) {
    const i = this,
      n = { event: t, replay: e, cancelable: !0 },
      o = (e) => (e.options.events || this.options.events).includes(t.type);
    if (!1 === i.notifyPlugins("beforeEvent", n, o)) return;
    const s = i._handleEvent(t, e);
    return (
      (n.cancelable = !1),
      i.notifyPlugins("afterEvent", n, o),
      (s || n.changed) && i.render(),
      i
    );
  }
  _handleEvent(t, e) {
    const i = this,
      { _active: n = [], options: o } = i,
      s = o.hover,
      a = e;
    let r = [],
      l = !1,
      c = null;
    return (
      "mouseout" !== t.type &&
        ((r = i.getElementsAtEventForMode(t, s.mode, s, a)),
        (c = "click" === t.type ? i._lastEvent : t)),
      (i._lastEvent = null),
      ee(t, i.chartArea, i._minPadding) &&
        (k(o.onHover, [t, r, i], i),
        ("mouseup" !== t.type &&
          "click" !== t.type &&
          "contextmenu" !== t.type) ||
          k(o.onClick, [t, r, i], i)),
      (l = !P(r, n)),
      (l || e) && ((i._active = r), i._updateHoverStyles(r, n, e)),
      (i._lastEvent = c),
      l
    );
  }
}
const co = () => S(lo.instances, (t) => t._plugins.invalidate());
function ho(t, e, i) {
  const {
    startAngle: n,
    pixelMargin: o,
    x: s,
    y: a,
    outerRadius: r,
    innerRadius: l,
  } = e;
  let c = o / r;
  t.beginPath(),
    t.arc(s, a, r, n - c, i + c),
    l > o
      ? ((c = o / l), t.arc(s, a, l, i + c, n - c, !0))
      : t.arc(s, a, o, i + H, n - H),
    t.closePath(),
    t.clip();
}
function uo(t, e, i, n) {
  const o = ue(t.options.borderRadius, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd",
  ]);
  const s = (i - e) / 2,
    a = Math.min(s, (n * e) / 2),
    r = (t) => {
      const e = ((i - Math.min(s, t)) * n) / 2;
      return st(t, 0, Math.min(s, e));
    };
  return {
    outerStart: r(o.outerStart),
    outerEnd: r(o.outerEnd),
    innerStart: st(o.innerStart, 0, a),
    innerEnd: st(o.innerEnd, 0, a),
  };
}
function fo(t, e, i, n) {
  return { x: i + t * Math.cos(e), y: n + t * Math.sin(e) };
}
function go(t, e, i, n, o) {
  const { x: s, y: a, startAngle: r, pixelMargin: l, innerRadius: c } = e,
    h = Math.max(e.outerRadius + n + i - l, 0),
    d = c > 0 ? c + n + i + l : 0;
  let u = 0;
  const f = o - r;
  if (n) {
    const t = ((c > 0 ? c - n : 0) + (h > 0 ? h - n : 0)) / 2;
    u = (f - (0 !== t ? (f * t) / (t + n) : f)) / 2;
  }
  const g = (f - Math.max(0.001, f * h - i / V) / h) / 2,
    p = r + g + u,
    m = o - g - u,
    {
      outerStart: b,
      outerEnd: x,
      innerStart: y,
      innerEnd: _,
    } = uo(e, d, h, m - p),
    v = h - b,
    w = h - x,
    M = p + b / v,
    k = m - x / w,
    S = d + y,
    P = d + _,
    D = p + y / S,
    C = m - _ / P;
  if ((t.beginPath(), t.arc(s, a, h, M, k), x > 0)) {
    const e = fo(w, k, s, a);
    t.arc(e.x, e.y, x, k, m + H);
  }
  const O = fo(P, m, s, a);
  if ((t.lineTo(O.x, O.y), _ > 0)) {
    const e = fo(P, C, s, a);
    t.arc(e.x, e.y, _, m + H, C + Math.PI);
  }
  if ((t.arc(s, a, d, m - _ / d, p + y / d, !0), y > 0)) {
    const e = fo(S, D, s, a);
    t.arc(e.x, e.y, y, D + Math.PI, p - H);
  }
  const T = fo(v, p, s, a);
  if ((t.lineTo(T.x, T.y), b > 0)) {
    const e = fo(v, M, s, a);
    t.arc(e.x, e.y, b, p - H, M);
  }
  t.closePath();
}
function po(t, e, i, n, o) {
  const { options: s } = e,
    a = "inner" === s.borderAlign;
  s.borderWidth &&
    (a
      ? ((t.lineWidth = 2 * s.borderWidth), (t.lineJoin = "round"))
      : ((t.lineWidth = s.borderWidth), (t.lineJoin = "bevel")),
    e.fullCircles &&
      (function (t, e, i) {
        const { x: n, y: o, startAngle: s, pixelMargin: a, fullCircles: r } = e,
          l = Math.max(e.outerRadius - a, 0),
          c = e.innerRadius + a;
        let h;
        for (
          i && ho(t, e, s + B),
            t.beginPath(),
            t.arc(n, o, c, s + B, s, !0),
            h = 0;
          h < r;
          ++h
        )
          t.stroke();
        for (t.beginPath(), t.arc(n, o, l, s, s + B), h = 0; h < r; ++h)
          t.stroke();
      })(t, e, a),
    a && ho(t, e, o),
    go(t, e, i, n, o),
    t.stroke());
}
Object.defineProperties(lo, {
  defaults: { enumerable: true, value: Kt },
  instances: { enumerable: true, value: ao },
  overrides: { enumerable: true, value: Yt },
  registry: { enumerable: true, value: Bn },
  version: { enumerable: true, value: "3.4.1" },
  getChart: { enumerable: true, value: ro },
  register: {
    enumerable: true,
    value: (...t) => {
      Bn.add(...t), co();
    },
  },
  unregister: {
    enumerable: true,
    value: (...t) => {
      Bn.remove(...t), co();
    },
  },
});
class mo extends Pn {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const n = this.getProps(["x", "y"], i),
      { angle: o, distance: s } = (function (t, e) {
        const i = e.x - t.x,
          n = e.y - t.y,
          o = Math.sqrt(i * i + n * n);
        let s = Math.atan2(n, i);
        return s < -0.5 * V && (s += B), { angle: s, distance: o };
      })(n, { x: t, y: e }),
      {
        startAngle: a,
        endAngle: r,
        innerRadius: l,
        outerRadius: c,
        circumference: h,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        i
      ),
      d = this.options.spacing / 2;
    return (h >= B || ot(o, a, r)) && s >= l + d && s <= c + d;
  }
  getCenterPoint(t) {
    const {
        x: e,
        y: i,
        startAngle: n,
        endAngle: o,
        innerRadius: s,
        outerRadius: a,
      } = this.getProps(
        [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        t
      ),
      { offset: r, spacing: l } = this.options,
      c = (n + o) / 2,
      h = (s + a + l + r) / 2;
    return { x: e + Math.cos(c) * h, y: i + Math.sin(c) * h };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const e = this,
      { options: i, circumference: n } = e,
      o = (i.offset || 0) / 2,
      s = (i.spacing || 0) / 2;
    if (
      ((e.pixelMargin = "inner" === i.borderAlign ? 0.33 : 0),
      (e.fullCircles = n > B ? Math.floor(n / B) : 0),
      0 === n || e.innerRadius < 0 || e.outerRadius < 0)
    )
      return;
    t.save();
    let a = 0;
    if (o) {
      a = o / 2;
      const i = (e.startAngle + e.endAngle) / 2;
      t.translate(Math.cos(i) * a, Math.sin(i) * a),
        e.circumference >= V && (a = o);
    }
    (t.fillStyle = i.backgroundColor), (t.strokeStyle = i.borderColor);
    const r = (function (t, e, i, n) {
      const { fullCircles: o, startAngle: s, circumference: a } = e;
      let r = e.endAngle;
      if (o) {
        go(t, e, i, n, s + B);
        for (let e = 0; e < o; ++e) t.fill();
        isNaN(a) || ((r = s + (a % B)), a % B == 0 && (r += B));
      }
      return go(t, e, i, n, r), t.fill(), r;
    })(t, e, a, s);
    po(t, e, a, s, r), t.restore();
  }
}
function bo(t, e, i = e) {
  (t.lineCap = w(i.borderCapStyle, e.borderCapStyle)),
    t.setLineDash(w(i.borderDash, e.borderDash)),
    (t.lineDashOffset = w(i.borderDashOffset, e.borderDashOffset)),
    (t.lineJoin = w(i.borderJoinStyle, e.borderJoinStyle)),
    (t.lineWidth = w(i.borderWidth, e.borderWidth)),
    (t.strokeStyle = w(i.borderColor, e.borderColor));
}
function xo(t, e, i) {
  t.lineTo(i.x, i.y);
}
function yo(t, e, i = {}) {
  const n = t.length,
    { start: o = 0, end: s = n - 1 } = i,
    { start: a, end: r } = e,
    l = Math.max(o, a),
    c = Math.min(s, r),
    h = (o < a && s < a) || (o > r && s > r);
  return {
    count: n,
    start: l,
    loop: e.loop,
    ilen: c < l && !h ? n + c - l : c - l,
  };
}
function _o(t, e, i, n) {
  const { points: o, options: s } = e,
    { count: a, start: r, loop: l, ilen: c } = yo(o, i, n),
    h = (function (t) {
      return t.stepped
        ? oe
        : t.tension || "monotone" === t.cubicInterpolationMode
        ? se
        : xo;
    })(s);
  let d,
    u,
    f,
    { move: g = !0, reverse: p } = n || {};
  for (d = 0; d <= c; ++d)
    (u = o[(r + (p ? c - d : d)) % a]),
      u.skip ||
        (g ? (t.moveTo(u.x, u.y), (g = !1)) : h(t, f, u, p, s.stepped),
        (f = u));
  return l && ((u = o[(r + (p ? c : 0)) % a]), h(t, f, u, p, s.stepped)), !!l;
}
function vo(t, e, i, n) {
  const o = e.points,
    { count: s, start: a, ilen: r } = yo(o, i, n),
    { move: l = !0, reverse: c } = n || {};
  let h,
    d,
    u,
    f,
    g,
    p,
    m = 0,
    b = 0;
  const x = (t) => (a + (c ? r - t : t)) % s,
    y = () => {
      f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
    };
  for (l && ((d = o[x(0)]), t.moveTo(d.x, d.y)), h = 0; h <= r; ++h) {
    if (((d = o[x(h)]), d.skip)) continue;
    const e = d.x,
      i = d.y,
      n = 0 | e;
    n === u
      ? (i < f ? (f = i) : i > g && (g = i), (m = (b * m + e) / ++b))
      : (y(), t.lineTo(e, i), (u = n), (b = 0), (f = g = i)),
      (p = i);
  }
  y();
}
function wo(t) {
  const e = t.options,
    i = e.borderDash && e.borderDash.length;
  return !(
    t._decimated ||
    t._loop ||
    e.tension ||
    "monotone" === e.cubicInterpolationMode ||
    e.stepped ||
    i
  )
    ? vo
    : _o;
}
(mo.id = "arc"),
  (mo.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
  }),
  (mo.defaultRoutes = { backgroundColor: "backgroundColor" });
const Mo = "function" == typeof Path2D;
function ko(t, e, i, n) {
  Mo && 1 === e.segments.length
    ? (function (t, e, i, n) {
        let o = e._path;
        o || ((o = e._path = new Path2D()), e.path(o, i, n) && o.closePath()),
          bo(t, e.options),
          t.stroke(o);
      })(t, e, i, n)
    : (function (t, e, i, n) {
        const { segments: o, options: s } = e,
          a = wo(e);
        for (const r of o)
          bo(t, s, r.style),
            t.beginPath(),
            a(t, e, r, { start: i, end: i + n - 1 }) && t.closePath(),
            t.stroke();
      })(t, e, i, n);
}
class So extends Pn {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this,
      n = i.options;
    if (
      (n.tension || "monotone" === n.cubicInterpolationMode) &&
      !n.stepped &&
      !i._pointsUpdated
    ) {
      const o = n.spanGaps ? i._loop : i._fullLoop;
      He(i._points, n, t, o, e), (i._pointsUpdated = !0);
    }
  }
  set points(t) {
    const e = this;
    (e._points = t),
      delete e._segments,
      delete e._path,
      (e._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return (
      this._segments ||
      (this._segments = (function (t, e) {
        const i = t.points,
          n = t.options.spanGaps,
          o = i.length;
        if (!o) return [];
        const s = !!t._loop,
          { start: a, end: r } = (function (t, e, i, n) {
            let o = 0,
              s = e - 1;
            if (i && !n) for (; o < e && !t[o].skip; ) o++;
            for (; o < e && t[o].skip; ) o++;
            for (o %= e, i && (s += o); s > o && t[s % e].skip; ) s--;
            return (s %= e), { start: o, end: s };
          })(i, o, s, n);
        return di(
          !0 === n
            ? [{ start: a, end: r, loop: s }]
            : (function (t, e, i, n) {
                const o = t.length,
                  s = [];
                let a,
                  r = e,
                  l = t[e];
                for (a = e + 1; a <= i; ++a) {
                  const i = t[a % o];
                  i.skip || i.stop
                    ? l.skip ||
                      ((n = !1),
                      s.push({ start: e % o, end: (a - 1) % o, loop: n }),
                      (e = r = i.stop ? a : null))
                    : ((r = a), l.skip && (e = a)),
                    (l = i);
                }
                return (
                  null !== r && s.push({ start: e % o, end: r % o, loop: n }), s
                );
              })(
                i,
                a,
                r < a ? r + o : r,
                !!t._fullLoop && 0 === a && r === o - 1
              ),
          i,
          e
        );
      })(this, this.options.segment))
    );
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      i = t.length;
    return i && e[t[i - 1].end];
  }
  interpolate(t, e) {
    const i = this,
      n = i.options,
      o = t[e],
      s = i.points,
      a = hi(i, { property: e, start: o, end: o });
    if (!a.length) return;
    const r = [],
      l = (function (t) {
        return t.stepped
          ? ii
          : t.tension || "monotone" === t.cubicInterpolationMode
          ? ni
          : ei;
      })(n);
    let c, h;
    for (c = 0, h = a.length; c < h; ++c) {
      const { start: i, end: h } = a[c],
        d = s[i],
        u = s[h];
      if (d === u) {
        r.push(d);
        continue;
      }
      const f = l(d, u, Math.abs((o - d[e]) / (u[e] - d[e])), n.stepped);
      (f[e] = t[e]), r.push(f);
    }
    return 1 === r.length ? r[0] : r;
  }
  pathSegment(t, e, i) {
    return wo(this)(t, this, e, i);
  }
  path(t, e, i) {
    const n = this,
      o = n.segments,
      s = wo(n);
    let a = n._loop;
    (e = e || 0), (i = i || n.points.length - e);
    for (const r of o) a &= s(t, n, r, { start: e, end: e + i - 1 });
    return !!a;
  }
  draw(t, e, i, n) {
    const o = this,
      s = o.options || {};
    (o.points || []).length &&
      s.borderWidth &&
      (t.save(),
      ko(t, o, i, n),
      t.restore(),
      o.animated && ((o._pointsUpdated = !1), (o._path = void 0)));
  }
}
function Po(t, e, i, n) {
  const o = t.options,
    { [i]: s } = t.getProps([i], n);
  return Math.abs(e - s) < o.radius + o.hitRadius;
}
(So.id = "line"),
  (So.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  (So.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  (So.descriptors = {
    _scriptable: !0,
    _indexable: (t) => "borderDash" !== t && "fill" !== t,
  });
class Do extends Pn {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const n = this.options,
      { x: o, y: s } = this.getProps(["x", "y"], i);
    return (
      Math.pow(t - o, 2) + Math.pow(e - s, 2) <
      Math.pow(n.hitRadius + n.radius, 2)
    );
  }
  inXRange(t, e) {
    return Po(this, t, "x", e);
  }
  inYRange(t, e) {
    return Po(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: i } = this.getProps(["x", "y"], t);
    return { x: e, y: i };
  }
  size(t) {
    let e = (t = t || this.options || {}).radius || 0;
    e = Math.max(e, (e && t.hoverRadius) || 0);
    return 2 * (e + ((e && t.borderWidth) || 0));
  }
  draw(t) {
    const e = this,
      i = e.options;
    e.skip ||
      i.radius < 0.1 ||
      ((t.strokeStyle = i.borderColor),
      (t.lineWidth = i.borderWidth),
      (t.fillStyle = i.backgroundColor),
      te(t, i, e.x, e.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function Co(t, e) {
  const {
    x: i,
    y: n,
    base: o,
    width: s,
    height: a,
  } = t.getProps(["x", "y", "base", "width", "height"], e);
  let r, l, c, h, d;
  return (
    t.horizontal
      ? ((d = a / 2),
        (r = Math.min(i, o)),
        (l = Math.max(i, o)),
        (c = n - d),
        (h = n + d))
      : ((d = s / 2),
        (r = i - d),
        (l = i + d),
        (c = Math.min(n, o)),
        (h = Math.max(n, o))),
    { left: r, top: c, right: l, bottom: h }
  );
}
function Oo(t) {
  let e = t.options.borderSkipped;
  const i = {};
  return e
    ? ((e = t.horizontal
        ? To(e, "left", "right", t.base > t.x)
        : To(e, "bottom", "top", t.base < t.y)),
      (i[e] = !0),
      i)
    : i;
}
function To(t, e, i, n) {
  var o, s, a;
  return (
    n
      ? ((a = i),
        (t = Ao((t = (o = t) === (s = e) ? a : o === a ? s : o), i, e)))
      : (t = Ao(t, e, i)),
    t
  );
}
function Ao(t, e, i) {
  return "start" === t ? e : "end" === t ? i : t;
}
function Lo(t, e, i, n) {
  return t ? 0 : Math.max(Math.min(e, n), i);
}
function Eo(t) {
  const e = Co(t),
    i = e.right - e.left,
    n = e.bottom - e.top,
    o = (function (t, e, i) {
      const n = t.options.borderWidth,
        o = Oo(t),
        s = fe(n);
      return {
        t: Lo(o.top, s.top, 0, i),
        r: Lo(o.right, s.right, 0, e),
        b: Lo(o.bottom, s.bottom, 0, i),
        l: Lo(o.left, s.left, 0, e),
      };
    })(t, i / 2, n / 2),
    s = (function (t, e, i) {
      const { enableBorderRadius: n } = t.getProps(["enableBorderRadius"]),
        o = t.options.borderRadius,
        s = ge(o),
        a = Math.min(e, i),
        r = Oo(t),
        l = n || y(o);
      return {
        topLeft: Lo(!l || r.top || r.left, s.topLeft, 0, a),
        topRight: Lo(!l || r.top || r.right, s.topRight, 0, a),
        bottomLeft: Lo(!l || r.bottom || r.left, s.bottomLeft, 0, a),
        bottomRight: Lo(!l || r.bottom || r.right, s.bottomRight, 0, a),
      };
    })(t, i / 2, n / 2);
  return {
    outer: { x: e.left, y: e.top, w: i, h: n, radius: s },
    inner: {
      x: e.left + o.l,
      y: e.top + o.t,
      w: i - o.l - o.r,
      h: n - o.t - o.b,
      radius: {
        topLeft: Math.max(0, s.topLeft - Math.max(o.t, o.l)),
        topRight: Math.max(0, s.topRight - Math.max(o.t, o.r)),
        bottomLeft: Math.max(0, s.bottomLeft - Math.max(o.b, o.l)),
        bottomRight: Math.max(0, s.bottomRight - Math.max(o.b, o.r)),
      },
    },
  };
}
function Ro(t, e, i, n) {
  const o = null === e,
    s = null === i,
    a = t && !(o && s) && Co(t, n);
  return (
    a &&
    (o || (e >= a.left && e <= a.right)) &&
    (s || (i >= a.top && i <= a.bottom))
  );
}
function Io(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
(Do.id = "point"),
  (Do.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  (Do.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
class Fo extends Pn {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const e = this.options,
      { inner: i, outer: n } = Eo(this),
      o =
        (s = n.radius).topLeft || s.topRight || s.bottomLeft || s.bottomRight
          ? le
          : Io;
    var s;
    t.save(),
      (n.w === i.w && n.h === i.h) ||
        (t.beginPath(),
        o(t, n),
        t.clip(),
        o(t, i),
        (t.fillStyle = e.borderColor),
        t.fill("evenodd")),
      t.beginPath(),
      o(t, i),
      (t.fillStyle = e.backgroundColor),
      t.fill(),
      t.restore();
  }
  inRange(t, e, i) {
    return Ro(this, t, e, i);
  }
  inXRange(t, e) {
    return Ro(this, t, null, e);
  }
  inYRange(t, e) {
    return Ro(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: i,
      base: n,
      horizontal: o,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: o ? (e + n) / 2 : e, y: o ? i : (i + n) / 2 };
  }
  getRange(t) {
    return "x" === t ? this.width / 2 : this.height / 2;
  }
}
function zo(t, e, i) {
  const n = (function (t) {
    const e = t.options,
      i = e.fill;
    let n = w(i && i.target, i);
    return (
      void 0 === n && (n = !!e.backgroundColor),
      !1 !== n && null !== n && (!0 === n ? "origin" : n)
    );
  })(t);
  if (y(n)) return !isNaN(n.value) && n;
  let o = parseFloat(n);
  return _(o) && Math.floor(o) === o
    ? (("-" !== n[0] && "+" !== n[0]) || (o = e + o),
      !(o === e || o < 0 || o >= i) && o)
    : ["origin", "start", "end", "stack"].indexOf(n) >= 0 && n;
}
(Fo.id = "bar"),
  (Fo.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    enableBorderRadius: !0,
    pointStyle: void 0,
  }),
  (Fo.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
class Vo {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, i) {
    const { x: n, y: o, radius: s } = this;
    return (
      (e = e || { start: 0, end: B }),
      t.arc(n, o, s, e.end, e.start, !0),
      !i.bounds
    );
  }
  interpolate(t) {
    const { x: e, y: i, radius: n } = this,
      o = t.angle;
    return { x: e + Math.cos(o) * n, y: i + Math.sin(o) * n, angle: o };
  }
}
function Bo(t) {
  return (t.scale || {}).getPointPositionForValue
    ? (function (t) {
        const { scale: e, fill: i } = t,
          n = e.options,
          o = e.getLabels().length,
          s = [],
          a = n.reverse ? e.max : e.min,
          r = n.reverse ? e.min : e.max;
        let l, c, h;
        if (
          ((h =
            "start" === i
              ? a
              : "end" === i
              ? r
              : y(i)
              ? i.value
              : e.getBaseValue()),
          n.grid.circular)
        )
          return (
            (c = e.getPointPositionForValue(0, a)),
            new Vo({
              x: c.x,
              y: c.y,
              radius: e.getDistanceFromCenterForValue(h),
            })
          );
        for (l = 0; l < o; ++l) s.push(e.getPointPositionForValue(l, h));
        return s;
      })(t)
    : (function (t) {
        const { scale: e = {}, fill: i } = t;
        let n,
          o = null;
        return (
          "start" === i
            ? (o = e.bottom)
            : "end" === i
            ? (o = e.top)
            : y(i)
            ? (o = e.getPixelForValue(i.value))
            : e.getBasePixel && (o = e.getBasePixel()),
          _(o)
            ? ((n = e.isHorizontal()), { x: n ? o : null, y: n ? null : o })
            : null
        );
      })(t);
}
function No(t, e, i) {
  for (; e > t; e--) {
    const t = i[e];
    if (!isNaN(t.x) && !isNaN(t.y)) break;
  }
  return e;
}
function Wo(t) {
  const { chart: e, scale: i, index: n, line: o } = t,
    s = [],
    a = o.segments,
    r = o.points,
    l = (function (t, e) {
      const i = [],
        n = t.getSortedVisibleDatasetMetas();
      for (let t = 0; t < n.length; t++) {
        const o = n[t];
        if (o.index === e) break;
        jo(o) && i.unshift(o.dataset);
      }
      return i;
    })(e, n);
  l.push(Yo({ x: null, y: i.bottom }, o));
  for (let t = 0; t < a.length; t++) {
    const e = a[t];
    for (let t = e.start; t <= e.end; t++) Ho(s, r[t], l);
  }
  return new So({ points: s, options: {} });
}
const jo = (t) => "line" === t.type && !t.hidden;
function Ho(t, e, i) {
  const n = [];
  for (let o = 0; o < i.length; o++) {
    const s = i[o],
      { first: a, last: r, point: l } = $o(s, e, "x");
    if (!(!l || (a && r)))
      if (a) n.unshift(l);
      else if ((t.push(l), !r)) break;
  }
  t.push(...n);
}
function $o(t, e, i) {
  const n = t.interpolate(e, i);
  if (!n) return {};
  const o = n[i],
    s = t.segments,
    a = t.points;
  let r = !1,
    l = !1;
  for (let t = 0; t < s.length; t++) {
    const e = s[t],
      n = a[e.start][i],
      c = a[e.end][i];
    if (o >= n && o <= c) {
      (r = o === n), (l = o === c);
      break;
    }
  }
  return { first: r, last: l, point: n };
}
function Yo(t, e) {
  let i = [],
    n = !1;
  return (
    x(t)
      ? ((n = !0), (i = t))
      : (i = (function (t, e) {
          const { x: i = null, y: n = null } = t || {},
            o = e.points,
            s = [];
          return (
            e.segments.forEach(({ start: t, end: e }) => {
              e = No(t, e, o);
              const a = o[t],
                r = o[e];
              null !== n
                ? (s.push({ x: a.x, y: n }), s.push({ x: r.x, y: n }))
                : null !== i &&
                  (s.push({ x: i, y: a.y }), s.push({ x: i, y: r.y }));
            }),
            s
          );
        })(t, e)),
    i.length
      ? new So({ points: i, options: { tension: 0 }, _loop: n, _fullLoop: n })
      : null
  );
}
function Uo(t, e, i) {
  let n = t[e].fill;
  const o = [e];
  let s;
  if (!i) return n;
  for (; !1 !== n && -1 === o.indexOf(n); ) {
    if (!_(n)) return n;
    if (((s = t[n]), !s)) return !1;
    if (s.visible) return n;
    o.push(n), (n = s.fill);
  }
  return !1;
}
function Xo(t, e, i) {
  t.beginPath(),
    e.path(t),
    t.lineTo(e.last().x, i),
    t.lineTo(e.first().x, i),
    t.closePath(),
    t.clip();
}
function Go(t, e, i, n) {
  if (n) return;
  let o = e[t],
    s = i[t];
  return (
    "angle" === t && ((o = nt(o)), (s = nt(s))),
    { property: t, start: o, end: s }
  );
}
function Ko(t, e, i, n) {
  return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
}
function Zo(t, e, i) {
  const { top: n, bottom: o } = e.chart.chartArea,
    { property: s, start: a, end: r } = i || {};
  "x" === s && (t.beginPath(), t.rect(a, n, r - a, o - n), t.clip());
}
function qo(t, e, i, n) {
  const o = e.interpolate(i, n);
  o && t.lineTo(o.x, o.y);
}
function Qo(t, e) {
  const { line: i, target: n, property: o, color: s, scale: a } = e,
    r = (function (t, e, i) {
      const n = t.segments,
        o = t.points,
        s = e.points,
        a = [];
      for (const t of n) {
        let { start: n, end: r } = t;
        r = No(n, r, o);
        const l = Go(i, o[n], o[r], t.loop);
        if (!e.segments) {
          a.push({ source: t, target: l, start: o[n], end: o[r] });
          continue;
        }
        const c = hi(e, l);
        for (const e of c) {
          const n = Go(i, s[e.start], s[e.end], e.loop),
            r = ci(t, o, n);
          for (const t of r)
            a.push({
              source: t,
              target: e,
              start: { [i]: Ko(l, n, "start", Math.max) },
              end: { [i]: Ko(l, n, "end", Math.min) },
            });
        }
      }
      return a;
    })(i, n, o);
  for (const { source: e, target: l, start: c, end: h } of r) {
    const { style: { backgroundColor: r = s } = {} } = e;
    t.save(), (t.fillStyle = r), Zo(t, a, Go(o, c, h)), t.beginPath();
    const d = !!i.pathSegment(t, e);
    d ? t.closePath() : qo(t, n, h, o);
    const u = !!n.pathSegment(t, l, { move: d, reverse: !0 }),
      f = d && u;
    f || qo(t, n, c, o),
      t.closePath(),
      t.fill(f ? "evenodd" : "nonzero"),
      t.restore();
  }
}
function Jo(t, e, i) {
  const n = (function (t) {
      const { chart: e, fill: i, line: n } = t;
      if (_(i))
        return (function (t, e) {
          const i = t.getDatasetMeta(e);
          return i && t.isDatasetVisible(e) ? i.dataset : null;
        })(e, i);
      if ("stack" === i) return Wo(t);
      const o = Bo(t);
      return o instanceof Vo ? o : Yo(o, n);
    })(e),
    { line: o, scale: s, axis: a } = e,
    r = o.options,
    l = r.fill,
    c = r.backgroundColor,
    { above: h = c, below: d = c } = l || {};
  n &&
    o.points.length &&
    (ie(t, i),
    (function (t, e) {
      const { line: i, target: n, above: o, below: s, area: a, scale: r } = e,
        l = i._loop ? "angle" : e.axis;
      t.save(),
        "x" === l &&
          s !== o &&
          (Xo(t, n, a.top),
          Qo(t, { line: i, target: n, color: o, scale: r, property: l }),
          t.restore(),
          t.save(),
          Xo(t, n, a.bottom)),
        Qo(t, { line: i, target: n, color: s, scale: r, property: l }),
        t.restore();
    })(t, {
      line: o,
      target: n,
      above: h,
      below: d,
      area: i,
      scale: s,
      axis: a,
    }),
    ne(t));
}
var ts = {
  id: "filler",
  afterDatasetsUpdate(t, e, i) {
    const n = (t.data.datasets || []).length,
      o = [];
    let s, a, r, l;
    for (a = 0; a < n; ++a)
      (s = t.getDatasetMeta(a)),
        (r = s.dataset),
        (l = null),
        r &&
          r.options &&
          r instanceof So &&
          (l = {
            visible: t.isDatasetVisible(a),
            index: a,
            fill: zo(r, a, n),
            chart: t,
            axis: s.controller.options.indexAxis,
            scale: s.vScale,
            line: r,
          }),
        (s.$filler = l),
        o.push(l);
    for (a = 0; a < n; ++a)
      (l = o[a]), l && !1 !== l.fill && (l.fill = Uo(o, a, i.propagate));
  },
  beforeDraw(t, e, i) {
    const n = "beforeDraw" === i.drawTime,
      o = t.getSortedVisibleDatasetMetas(),
      s = t.chartArea;
    for (let e = o.length - 1; e >= 0; --e) {
      const i = o[e].$filler;
      i && (i.line.updateControlPoints(s, i.axis), n && Jo(t.ctx, i, s));
    }
  },
  beforeDatasetsDraw(t, e, i) {
    if ("beforeDatasetsDraw" !== i.drawTime) return;
    const n = t.getSortedVisibleDatasetMetas();
    for (let e = n.length - 1; e >= 0; --e) {
      const i = n[e].$filler;
      i && Jo(t.ctx, i, t.chartArea);
    }
  },
  beforeDatasetDraw(t, e, i) {
    const n = e.meta.$filler;
    n &&
      !1 !== n.fill &&
      "beforeDatasetDraw" === i.drawTime &&
      Jo(t.ctx, n, t.chartArea);
  },
  defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
class es extends Pn {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const i = this,
      n = i.options;
    if (((i.left = 0), (i.top = 0), !n.display))
      return void (i.width = i.height = i.right = i.bottom = 0);
    (i.width = i.right = t), (i.height = i.bottom = e);
    const o = x(n.text) ? n.text.length : 1;
    i._padding = pe(n.padding);
    const s = o * me(n.font).lineHeight + i._padding.height;
    i.isHorizontal() ? (i.height = s) : (i.width = s);
  }
  isHorizontal() {
    const t = this.options.position;
    return "top" === t || "bottom" === t;
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: n, right: o, options: s } = this,
      a = s.align;
    let r,
      l,
      c,
      h = 0;
    return (
      this.isHorizontal()
        ? ((l = p(a, i, o)), (c = e + t), (r = o - i))
        : ("left" === s.position
            ? ((l = i + t), (c = p(a, n, e)), (h = -0.5 * V))
            : ((l = o - t), (c = p(a, e, n)), (h = 0.5 * V)),
          (r = n - e)),
      { titleX: l, titleY: c, maxWidth: r, rotation: h }
    );
  }
  draw() {
    const t = this,
      e = t.ctx,
      i = t.options;
    if (!i.display) return;
    const n = me(i.font),
      o = n.lineHeight / 2 + t._padding.top,
      { titleX: s, titleY: a, maxWidth: r, rotation: l } = t._drawArgs(o);
    ae(e, i.text, 0, 0, n, {
      color: i.color,
      maxWidth: r,
      rotation: l,
      textAlign: g(i.align),
      textBaseline: "middle",
      translation: [s, a],
    });
  }
}
var is = {
  id: "title",
  _element: es,
  start(t, e, i) {
    !(function (t, e) {
      const i = new es({ ctx: t.ctx, options: e, chart: t });
      hn.configure(t, i, e), hn.addBox(t, i), (t.titleBlock = i);
    })(t, i);
  },
  stop(t) {
    const e = t.titleBlock;
    hn.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, i) {
    const n = t.titleBlock;
    hn.configure(t, n, i), (n.options = i);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const ns = {
  average(t) {
    if (!t.length) return !1;
    let e,
      i,
      n = 0,
      o = 0,
      s = 0;
    for (e = 0, i = t.length; e < i; ++e) {
      const i = t[e].element;
      if (i && i.hasValue()) {
        const t = i.tooltipPosition();
        (n += t.x), (o += t.y), ++s;
      }
    }
    return { x: n / s, y: o / s };
  },
  nearest(t, e) {
    if (!t.length) return !1;
    let i,
      n,
      o,
      s = e.x,
      a = e.y,
      r = Number.POSITIVE_INFINITY;
    for (i = 0, n = t.length; i < n; ++i) {
      const n = t[i].element;
      if (n && n.hasValue()) {
        const t = et(e, n.getCenterPoint());
        t < r && ((r = t), (o = n));
      }
    }
    if (o) {
      const t = o.tooltipPosition();
      (s = t.x), (a = t.y);
    }
    return { x: s, y: a };
  },
};
function os(t, e) {
  return e && (x(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function ss(t) {
  return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1
    ? t.split("\n")
    : t;
}
function as(t, e) {
  const { element: i, datasetIndex: n, index: o } = e,
    s = t.getDatasetMeta(n).controller,
    { label: a, value: r } = s.getLabelAndValue(o);
  return {
    chart: t,
    label: a,
    parsed: s.getParsed(o),
    raw: t.data.datasets[n].data[o],
    formattedValue: r,
    dataset: s.getDataset(),
    dataIndex: o,
    datasetIndex: n,
    element: i,
  };
}
function rs(t, e) {
  const i = t._chart.ctx,
    { body: n, footer: o, title: s } = t,
    { boxWidth: a, boxHeight: r } = e,
    l = me(e.bodyFont),
    c = me(e.titleFont),
    h = me(e.footerFont),
    d = s.length,
    u = o.length,
    f = n.length,
    g = pe(e.padding);
  let p = g.height,
    m = 0,
    b = n.reduce(
      (t, e) => t + e.before.length + e.lines.length + e.after.length,
      0
    );
  if (
    ((b += t.beforeBody.length + t.afterBody.length),
    d &&
      (p += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
    b)
  ) {
    p +=
      f * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) +
      (b - f) * l.lineHeight +
      (b - 1) * e.bodySpacing;
  }
  u && (p += e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing);
  let x = 0;
  const y = function (t) {
    m = Math.max(m, i.measureText(t).width + x);
  };
  return (
    i.save(),
    (i.font = c.string),
    S(t.title, y),
    (i.font = l.string),
    S(t.beforeBody.concat(t.afterBody), y),
    (x = e.displayColors ? a + 2 : 0),
    S(n, (t) => {
      S(t.before, y), S(t.lines, y), S(t.after, y);
    }),
    (x = 0),
    (i.font = h.string),
    S(t.footer, y),
    i.restore(),
    (m += g.width),
    { width: m, height: p }
  );
}
function ls(t, e, i, n) {
  const { x: o, width: s } = i,
    {
      width: a,
      chartArea: { left: r, right: l },
    } = t;
  let c = "center";
  return (
    "center" === n
      ? (c = o <= (r + l) / 2 ? "left" : "right")
      : o <= s / 2
      ? (c = "left")
      : o >= a - s / 2 && (c = "right"),
    (function (t, e, i, n) {
      const { x: o, width: s } = n,
        a = i.caretSize + i.caretPadding;
      return (
        ("left" === t && o + s + a > e.width) ||
        ("right" === t && o - s - a < 0) ||
        void 0
      );
    })(c, t, e, i) && (c = "center"),
    c
  );
}
function cs(t, e, i) {
  const n =
    e.yAlign ||
    (function (t, e) {
      const { y: i, height: n } = e;
      return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center";
    })(t, i);
  return { xAlign: e.xAlign || ls(t, e, i, n), yAlign: n };
}
function hs(t, e, i, n) {
  const { caretSize: o, caretPadding: s, cornerRadius: a } = t,
    { xAlign: r, yAlign: l } = i,
    c = o + s,
    h = a + s;
  let d = (function (t, e) {
    let { x: i, width: n } = t;
    return "right" === e ? (i -= n) : "center" === e && (i -= n / 2), i;
  })(e, r);
  const u = (function (t, e, i) {
    let { y: n, height: o } = t;
    return "top" === e ? (n += i) : (n -= "bottom" === e ? o + i : o / 2), n;
  })(e, l, c);
  return (
    "center" === l
      ? "left" === r
        ? (d += c)
        : "right" === r && (d -= c)
      : "left" === r
      ? (d -= h)
      : "right" === r && (d += h),
    { x: st(d, 0, n.width - e.width), y: st(u, 0, n.height - e.height) }
  );
}
function ds(t, e, i) {
  const n = pe(i.padding);
  return "center" === e
    ? t.x + t.width / 2
    : "right" === e
    ? t.x + t.width - n.right
    : t.x + n.left;
}
function us(t) {
  return os([], ss(t));
}
function fs(t, e) {
  const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return i ? t.override(i) : t;
}
(class extends Pn {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._chart = t._chart),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this,
      e = t._cachedAnimations;
    if (e) return e;
    const i = t._chart,
      n = t.options.setContext(t.getContext()),
      o = n.enabled && i.options.animation && n.animations,
      s = new xi(t._chart, o);
    return o._cacheable && (t._cachedAnimations = Object.freeze(s)), s;
  }
  getContext() {
    const t = this;
    return (
      t.$context ||
      (t.$context =
        ((e = t._chart.getContext()),
        (i = t),
        (n = t._tooltipItems),
        Object.assign(Object.create(e), {
          tooltip: i,
          tooltipItems: n,
          type: "tooltip",
        })))
    );
    var e, i, n;
  }
  getTitle(t, e) {
    const i = this,
      { callbacks: n } = e,
      o = n.beforeTitle.apply(i, [t]),
      s = n.title.apply(i, [t]),
      a = n.afterTitle.apply(i, [t]);
    let r = [];
    return (r = os(r, ss(o))), (r = os(r, ss(s))), (r = os(r, ss(a))), r;
  }
  getBeforeBody(t, e) {
    return us(e.callbacks.beforeBody.apply(this, [t]));
  }
  getBody(t, e) {
    const i = this,
      { callbacks: n } = e,
      o = [];
    return (
      S(t, (t) => {
        const e = { before: [], lines: [], after: [] },
          s = fs(n, t);
        os(e.before, ss(s.beforeLabel.call(i, t))),
          os(e.lines, s.label.call(i, t)),
          os(e.after, ss(s.afterLabel.call(i, t))),
          o.push(e);
      }),
      o
    );
  }
  getAfterBody(t, e) {
    return us(e.callbacks.afterBody.apply(this, [t]));
  }
  getFooter(t, e) {
    const i = this,
      { callbacks: n } = e,
      o = n.beforeFooter.apply(i, [t]),
      s = n.footer.apply(i, [t]),
      a = n.afterFooter.apply(i, [t]);
    let r = [];
    return (r = os(r, ss(o))), (r = os(r, ss(s))), (r = os(r, ss(a))), r;
  }
  _createItems(t) {
    const e = this,
      i = e._active,
      n = e._chart.data,
      o = [],
      s = [],
      a = [];
    let r,
      l,
      c = [];
    for (r = 0, l = i.length; r < l; ++r) c.push(as(e._chart, i[r]));
    return (
      t.filter && (c = c.filter((e, i, o) => t.filter(e, i, o, n))),
      t.itemSort && (c = c.sort((e, i) => t.itemSort(e, i, n))),
      S(c, (i) => {
        const n = fs(t.callbacks, i);
        o.push(n.labelColor.call(e, i)),
          s.push(n.labelPointStyle.call(e, i)),
          a.push(n.labelTextColor.call(e, i));
      }),
      (e.labelColors = o),
      (e.labelPointStyles = s),
      (e.labelTextColors = a),
      (e.dataPoints = c),
      c
    );
  }
  update(t, e) {
    const i = this,
      n = i.options.setContext(i.getContext()),
      o = i._active;
    let s,
      a = [];
    if (o.length) {
      const t = ns[n.position].call(i, o, i._eventPosition);
      (a = i._createItems(n)),
        (i.title = i.getTitle(a, n)),
        (i.beforeBody = i.getBeforeBody(a, n)),
        (i.body = i.getBody(a, n)),
        (i.afterBody = i.getAfterBody(a, n)),
        (i.footer = i.getFooter(a, n));
      const e = (i._size = rs(i, n)),
        r = Object.assign({}, t, e),
        l = cs(i._chart, n, r),
        c = hs(n, r, l, i._chart);
      (i.xAlign = l.xAlign),
        (i.yAlign = l.yAlign),
        (s = {
          opacity: 1,
          x: c.x,
          y: c.y,
          width: e.width,
          height: e.height,
          caretX: t.x,
          caretY: t.y,
        });
    } else 0 !== i.opacity && (s = { opacity: 0 });
    (i._tooltipItems = a),
      (i.$context = void 0),
      s && i._resolveAnimations().update(i, s),
      t &&
        n.external &&
        n.external.call(i, { chart: i._chart, tooltip: i, replay: e });
  }
  drawCaret(t, e, i, n) {
    const o = this.getCaretPosition(t, i, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: n, yAlign: o } = this,
      { cornerRadius: s, caretSize: a } = i,
      { x: r, y: l } = t,
      { width: c, height: h } = e;
    let d, u, f, g, p, m;
    return (
      "center" === o
        ? ((p = l + h / 2),
          "left" === n
            ? ((d = r), (u = d - a), (g = p + a), (m = p - a))
            : ((d = r + c), (u = d + a), (g = p - a), (m = p + a)),
          (f = d))
        : ((u =
            "left" === n
              ? r + s + a
              : "right" === n
              ? r + c - s - a
              : this.caretX),
          "top" === o
            ? ((g = l), (p = g - a), (d = u - a), (f = u + a))
            : ((g = l + h), (p = g + a), (d = u + a), (f = u - a)),
          (m = g)),
      { x1: d, x2: u, x3: f, y1: g, y2: p, y3: m }
    );
  }
  drawTitle(t, e, i) {
    const n = this,
      o = n.title,
      s = o.length;
    let a, r, l;
    if (s) {
      const c = ai(i.rtl, n.x, n.width);
      for (
        t.x = ds(n, i.titleAlign, i),
          e.textAlign = c.textAlign(i.titleAlign),
          e.textBaseline = "middle",
          a = me(i.titleFont),
          r = i.titleSpacing,
          e.fillStyle = i.titleColor,
          e.font = a.string,
          l = 0;
        l < s;
        ++l
      )
        e.fillText(o[l], c.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + r),
          l + 1 === s && (t.y += i.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, e, i, n, o) {
    const s = this,
      a = s.labelColors[i],
      r = s.labelPointStyles[i],
      { boxHeight: l, boxWidth: c } = o,
      h = me(o.bodyFont),
      d = ds(s, "left", o),
      u = n.x(d),
      f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
      g = e.y + f;
    if (o.usePointStyle) {
      const e = {
          radius: Math.min(c, l) / 2,
          pointStyle: r.pointStyle,
          rotation: r.rotation,
          borderWidth: 1,
        },
        i = n.leftForLtr(u, c) + c / 2,
        s = g + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        te(t, e, i, s),
        (t.strokeStyle = a.borderColor),
        (t.fillStyle = a.backgroundColor),
        te(t, e, i, s);
    } else {
      (t.lineWidth = a.borderWidth || 1),
        (t.strokeStyle = a.borderColor),
        t.setLineDash(a.borderDash || []),
        (t.lineDashOffset = a.borderDashOffset || 0);
      const e = n.leftForLtr(u, c),
        i = n.leftForLtr(n.xPlus(u, 1), c - 2),
        s = ge(a.borderRadius);
      Object.values(s).some((t) => 0 !== t)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          le(t, { x: e, y: g, w: c, h: l, radius: s }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = a.backgroundColor),
          t.beginPath(),
          le(t, { x: i, y: g + 1, w: c - 2, h: l - 2, radius: s }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(e, g, c, l),
          t.strokeRect(e, g, c, l),
          (t.fillStyle = a.backgroundColor),
          t.fillRect(i, g + 1, c - 2, l - 2));
    }
    t.fillStyle = s.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const n = this,
      { body: o } = n,
      {
        bodySpacing: s,
        bodyAlign: a,
        displayColors: r,
        boxHeight: l,
        boxWidth: c,
      } = i,
      h = me(i.bodyFont);
    let d = h.lineHeight,
      u = 0;
    const f = ai(i.rtl, n.x, n.width),
      g = function (i) {
        e.fillText(i, f.x(t.x + u), t.y + d / 2), (t.y += d + s);
      },
      p = f.textAlign(a);
    let m, b, x, y, _, v, w;
    for (
      e.textAlign = a,
        e.textBaseline = "middle",
        e.font = h.string,
        t.x = ds(n, p, i),
        e.fillStyle = i.bodyColor,
        S(n.beforeBody, g),
        u = r && "right" !== p ? ("center" === a ? c / 2 + 1 : c + 2) : 0,
        y = 0,
        v = o.length;
      y < v;
      ++y
    ) {
      for (
        m = o[y],
          b = n.labelTextColors[y],
          e.fillStyle = b,
          S(m.before, g),
          x = m.lines,
          r &&
            x.length &&
            (n._drawColorBox(e, t, y, f, i), (d = Math.max(h.lineHeight, l))),
          _ = 0,
          w = x.length;
        _ < w;
        ++_
      )
        g(x[_]), (d = h.lineHeight);
      S(m.after, g);
    }
    (u = 0), (d = h.lineHeight), S(n.afterBody, g), (t.y -= s);
  }
  drawFooter(t, e, i) {
    const n = this,
      o = n.footer,
      s = o.length;
    let a, r;
    if (s) {
      const l = ai(i.rtl, n.x, n.width);
      for (
        t.x = ds(n, i.footerAlign, i),
          t.y += i.footerMarginTop,
          e.textAlign = l.textAlign(i.footerAlign),
          e.textBaseline = "middle",
          a = me(i.footerFont),
          e.fillStyle = i.footerColor,
          e.font = a.string,
          r = 0;
        r < s;
        ++r
      )
        e.fillText(o[r], l.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, e, i, n) {
    const { xAlign: o, yAlign: s } = this,
      { x: a, y: r } = t,
      { width: l, height: c } = i,
      h = n.cornerRadius;
    (e.fillStyle = n.backgroundColor),
      (e.strokeStyle = n.borderColor),
      (e.lineWidth = n.borderWidth),
      e.beginPath(),
      e.moveTo(a + h, r),
      "top" === s && this.drawCaret(t, e, i, n),
      e.lineTo(a + l - h, r),
      e.quadraticCurveTo(a + l, r, a + l, r + h),
      "center" === s && "right" === o && this.drawCaret(t, e, i, n),
      e.lineTo(a + l, r + c - h),
      e.quadraticCurveTo(a + l, r + c, a + l - h, r + c),
      "bottom" === s && this.drawCaret(t, e, i, n),
      e.lineTo(a + h, r + c),
      e.quadraticCurveTo(a, r + c, a, r + c - h),
      "center" === s && "left" === o && this.drawCaret(t, e, i, n),
      e.lineTo(a, r + h),
      e.quadraticCurveTo(a, r, a + h, r),
      e.closePath(),
      e.fill(),
      n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this,
      i = e._chart,
      n = e.$animations,
      o = n && n.x,
      s = n && n.y;
    if (o || s) {
      const n = ns[t.position].call(e, e._active, e._eventPosition);
      if (!n) return;
      const a = (e._size = rs(e, t)),
        r = Object.assign({}, n, e._size),
        l = cs(i, t, r),
        c = hs(t, r, l, i);
      (o._to === c.x && s._to === c.y) ||
        ((e.xAlign = l.xAlign),
        (e.yAlign = l.yAlign),
        (e.width = a.width),
        (e.height = a.height),
        (e.caretX = n.x),
        (e.caretY = n.y),
        e._resolveAnimations().update(e, c));
    }
  }
  draw(t) {
    const e = this,
      i = e.options.setContext(e.getContext());
    let n = e.opacity;
    if (!n) return;
    e._updateAnimationTarget(i);
    const o = { width: e.width, height: e.height },
      s = { x: e.x, y: e.y };
    n = Math.abs(n) < 0.001 ? 0 : n;
    const a = pe(i.padding),
      r =
        e.title.length ||
        e.beforeBody.length ||
        e.body.length ||
        e.afterBody.length ||
        e.footer.length;
    i.enabled &&
      r &&
      (t.save(),
      (t.globalAlpha = n),
      e.drawBackground(s, t, o, i),
      (function (t, e) {
        let i, n;
        ("ltr" !== e && "rtl" !== e) ||
          ((i = t.canvas.style),
          (n = [
            i.getPropertyValue("direction"),
            i.getPropertyPriority("direction"),
          ]),
          i.setProperty("direction", e, "important"),
          (t.prevTextDirection = n));
      })(t, i.textDirection),
      (s.y += a.top),
      e.drawTitle(s, t, i),
      e.drawBody(s, t, i),
      e.drawFooter(s, t, i),
      (function (t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty("direction", e[0], e[1]));
      })(t, i.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this,
      n = i._active,
      o = t.map(({ datasetIndex: t, index: e }) => {
        const n = i._chart.getDatasetMeta(t);
        if (!n) throw new Error("Cannot find a dataset at index " + t);
        return { datasetIndex: t, element: n.data[e], index: e };
      }),
      s = !P(n, o),
      a = i._positionChanged(o, e);
    (s || a) && ((i._active = o), (i._eventPosition = e), i.update(!0));
  }
  handleEvent(t, e) {
    const i = this,
      n = i.options,
      o = i._active || [];
    let s = !1,
      a = [];
    "mouseout" !== t.type &&
      ((a = i._chart.getElementsAtEventForMode(t, n.mode, n, e)),
      n.reverse && a.reverse());
    const r = i._positionChanged(a, t);
    return (
      (s = e || !P(a, o) || r),
      s &&
        ((i._active = a),
        (n.enabled || n.external) &&
          ((i._eventPosition = { x: t.x, y: t.y }), i.update(!0, e))),
      s
    );
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: n, options: o } = this,
      s = ns[o.position].call(this, t, e);
    return !1 !== s && (i !== s.x || n !== s.y);
  }
}.positioners = ns);
function gs(t, e, i) {
  const n = t.indexOf(e);
  if (-1 === n)
    return ((t, e, i) =>
      "string" == typeof e ? t.push(e) - 1 : isNaN(e) ? null : i)(t, e, i);
  return n !== t.lastIndexOf(e) ? i : n;
}
class ps extends zn {
  constructor(t) {
    super(t), (this._startValue = void 0), (this._valueRange = 0);
  }
  parse(t, e) {
    if (b(t)) return null;
    const i = this.getLabels();
    return ((t, e) => (null === t ? null : st(Math.round(t), 0, e)))(
      (e = isFinite(e) && i[e] === t ? e : gs(i, t, w(e, t))),
      i.length - 1
    );
  }
  determineDataLimits() {
    const t = this,
      { minDefined: e, maxDefined: i } = t.getUserBounds();
    let { min: n, max: o } = t.getMinMax(!0);
    "ticks" === t.options.bounds &&
      (e || (n = 0), i || (o = t.getLabels().length - 1)),
      (t.min = n),
      (t.max = o);
  }
  buildTicks() {
    const t = this,
      e = t.min,
      i = t.max,
      n = t.options.offset,
      o = [];
    let s = t.getLabels();
    (s = 0 === e && i === s.length - 1 ? s : s.slice(e, i + 1)),
      (t._valueRange = Math.max(s.length - (n ? 0 : 1), 1)),
      (t._startValue = t.min - (n ? 0.5 : 0));
    for (let t = e; t <= i; t++) o.push({ value: t });
    return o;
  }
  getLabelForValue(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  configure() {
    const t = this;
    super.configure(),
      t.isHorizontal() || (t._reversePixels = !t._reversePixels);
  }
  getPixelForValue(t) {
    const e = this;
    return (
      "number" != typeof t && (t = e.parse(t)),
      null === t
        ? NaN
        : e.getPixelForDecimal((t - e._startValue) / e._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    const e = this;
    return Math.round(e._startValue + e.getDecimalForPixel(t) * e._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function ms(t, e) {
  const i = [],
    {
      bounds: n,
      step: o,
      min: s,
      max: a,
      precision: r,
      count: l,
      maxTicks: c,
      maxDigits: h,
      includeBounds: d,
    } = t,
    u = o || 1,
    f = c - 1,
    { min: g, max: p } = e,
    m = !b(s),
    x = !b(a),
    y = !b(l),
    _ = (p - g) / (h + 1);
  let v,
    w,
    M,
    k,
    S = G((p - g) / f / u) * u;
  if (S < 1e-14 && !m && !x) return [{ value: g }, { value: p }];
  (k = Math.ceil(p / S) - Math.floor(g / S)),
    k > f && (S = G((k * S) / f / u) * u),
    b(r) || ((v = Math.pow(10, r)), (S = Math.ceil(S * v) / v)),
    "ticks" === n
      ? ((w = Math.floor(g / S) * S), (M = Math.ceil(p / S) * S))
      : ((w = g), (M = p)),
    m &&
    x &&
    o &&
    (function (t, e) {
      const i = Math.round(t);
      return i - e <= t && i + e >= t;
    })((a - s) / o, S / 1e3)
      ? ((k = Math.round(Math.min((a - s) / S, c))),
        (S = (a - s) / k),
        (w = s),
        (M = a))
      : y
      ? ((w = m ? s : w), (M = x ? a : M), (k = l - 1), (S = (M - w) / k))
      : ((k = (M - w) / S),
        (k = Z(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k)));
  const P = Math.max(tt(S), tt(w));
  (v = Math.pow(10, b(r) ? P : r)),
    (w = Math.round(w * v) / v),
    (M = Math.round(M * v) / v);
  let D = 0;
  for (
    m &&
    (d && w !== s
      ? (i.push({ value: s }),
        w < s && D++,
        Z(Math.round((w + D * S) * v) / v, s, bs(s, _, t)) && D++)
      : w < s && D++);
    D < k;
    ++D
  )
    i.push({ value: Math.round((w + D * S) * v) / v });
  return (
    x && d && M !== a
      ? Z(i[i.length - 1].value, a, bs(a, _, t))
        ? (i[i.length - 1].value = a)
        : i.push({ value: a })
      : (x && M !== a) || i.push({ value: M }),
    i
  );
}
function bs(t, e, { horizontal: i, minRotation: n }) {
  const o = Q(n),
    s = (i ? Math.sin(o) : Math.cos(o)) || 0.001,
    a = 0.75 * e * ("" + t).length;
  return Math.min(e / s, a);
}
(ps.id = "category"),
  (ps.defaults = { ticks: { callback: ps.prototype.getLabelForValue } });
class xs extends zn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return b(t) ||
      (("number" == typeof t || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const t = this,
      { beginAtZero: e } = t.options,
      { minDefined: i, maxDefined: n } = t.getUserBounds();
    let { min: o, max: s } = t;
    const a = (t) => (o = i ? o : t),
      r = (t) => (s = n ? s : t);
    if (e) {
      const t = X(o),
        e = X(s);
      t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && a(0);
    }
    o === s && (r(s + 1), e || a(o - 1)), (t.min = o), (t.max = s);
  }
  getTickLimit() {
    const t = this,
      e = t.options.ticks;
    let i,
      { maxTicksLimit: n, stepSize: o } = e;
    return (
      o
        ? (i = Math.ceil(t.max / o) - Math.floor(t.min / o) + 1)
        : ((i = t.computeTickLimit()), (n = n || 11)),
      n && (i = Math.min(n, i)),
      i
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this,
      e = t.options,
      i = e.ticks;
    let n = t.getTickLimit();
    n = Math.max(2, n);
    const o = ms(
      {
        maxTicks: n,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: i.precision,
        step: i.stepSize,
        count: i.count,
        maxDigits: t._maxDigits(),
        horizontal: t.isHorizontal(),
        minRotation: i.minRotation || 0,
        includeBounds: !1 !== i.includeBounds,
      },
      t._range || t
    );
    return (
      "ticks" === e.bounds && q(o, t, "value"),
      e.reverse
        ? (o.reverse(), (t.start = t.max), (t.end = t.min))
        : ((t.start = t.min), (t.end = t.max)),
      o
    );
  }
  configure() {
    const t = this,
      e = t.ticks;
    let i = t.min,
      n = t.max;
    if ((super.configure(), t.options.offset && e.length)) {
      const t = (n - i) / Math.max(e.length - 1, 1) / 2;
      (i -= t), (n += t);
    }
    (t._startValue = i), (t._endValue = n), (t._valueRange = n - i);
  }
  getLabelForValue(t) {
    return si(t, this.chart.options.locale);
  }
}
class ys extends xs {
  determineDataLimits() {
    const t = this,
      { min: e, max: i } = t.getMinMax(!0);
    (t.min = _(e) ? e : 0), (t.max = _(i) ? i : 1), t.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this,
      e = t.isHorizontal(),
      i = e ? t.width : t.height,
      n = Q(t.options.ticks.minRotation),
      o = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
      s = t._resolveTickFontOptions(0);
    return Math.ceil(i / Math.min(40, s.lineHeight / o));
  }
  getPixelForValue(t) {
    return null === t
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
function _s(t) {
  return 1 === t / Math.pow(10, Math.floor(U(t)));
}
(ys.id = "linear"),
  (ys.defaults = { ticks: { callback: Cn.formatters.numeric } });
class vs extends zn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const i = xs.prototype.parse.apply(this, [t, e]);
    if (0 !== i) return _(i) && i > 0 ? i : null;
    this._zero = !0;
  }
  determineDataLimits() {
    const t = this,
      { min: e, max: i } = t.getMinMax(!0);
    (t.min = _(e) ? Math.max(0, e) : null),
      (t.max = _(i) ? Math.max(0, i) : null),
      t.options.beginAtZero && (t._zero = !0),
      t.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const t = this,
      { minDefined: e, maxDefined: i } = t.getUserBounds();
    let n = t.min,
      o = t.max;
    const s = (t) => (n = e ? n : t),
      a = (t) => (o = i ? o : t),
      r = (t, e) => Math.pow(10, Math.floor(U(t)) + e);
    n === o && (n <= 0 ? (s(1), a(10)) : (s(r(n, -1)), a(r(o, 1)))),
      n <= 0 && s(r(o, -1)),
      o <= 0 && a(r(n, 1)),
      t._zero && t.min !== t._suggestedMin && n === r(t.min, 0) && s(r(n, -1)),
      (t.min = n),
      (t.max = o);
  }
  buildTicks() {
    const t = this,
      e = t.options,
      i = (function (t, e) {
        const i = Math.floor(U(e.max)),
          n = Math.ceil(e.max / Math.pow(10, i)),
          o = [];
        let s = v(t.min, Math.pow(10, Math.floor(U(e.min)))),
          a = Math.floor(U(s)),
          r = Math.floor(s / Math.pow(10, a)),
          l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
        do {
          o.push({ value: s, major: _s(s) }),
            ++r,
            10 === r && ((r = 1), ++a, (l = a >= 0 ? 1 : l)),
            (s = Math.round(r * Math.pow(10, a) * l) / l);
        } while (a < i || (a === i && r < n));
        const c = v(t.max, s);
        return o.push({ value: c, major: _s(s) }), o;
      })({ min: t._userMin, max: t._userMax }, t);
    return (
      "ticks" === e.bounds && q(i, t, "value"),
      e.reverse
        ? (i.reverse(), (t.start = t.max), (t.end = t.min))
        : ((t.start = t.min), (t.end = t.max)),
      i
    );
  }
  getLabelForValue(t) {
    return void 0 === t ? "0" : si(t, this.chart.options.locale);
  }
  configure() {
    const t = this,
      e = t.min;
    super.configure(),
      (t._startValue = U(e)),
      (t._valueRange = U(t.max) - U(e));
  }
  getPixelForValue(t) {
    const e = this;
    return (
      (void 0 !== t && 0 !== t) || (t = e.min),
      null === t || isNaN(t)
        ? NaN
        : e.getPixelForDecimal(
            t === e.min ? 0 : (U(t) - e._startValue) / e._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const e = this,
      i = e.getDecimalForPixel(t);
    return Math.pow(10, e._startValue + i * e._valueRange);
  }
}
function ws(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const t = pe(e.backdropPadding);
    return w(e.font && e.font.size, Kt.font.size) + t.height;
  }
  return 0;
}
function Ms(t, e, i, n, o) {
  return t === n || t === o
    ? { start: e - i / 2, end: e + i / 2 }
    : t < n || t > o
    ? { start: e - i, end: e }
    : { start: e, end: e + i };
}
function ks(t) {
  const e = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
    i = {},
    n = [],
    o = [],
    s = t.getLabels().length;
  for (let c = 0; c < s; c++) {
    const s = t.options.pointLabels.setContext(t.getContext(c));
    o[c] = s.padding;
    const h = t.getPointPosition(c, t.drawingArea + o[c]),
      d = me(s.font),
      u =
        ((a = t.ctx),
        (r = d),
        (l = x((l = t._pointLabels[c])) ? l : [l]),
        { w: qt(a, r.string, l), h: l.length * r.lineHeight });
    n[c] = u;
    const f = t.getIndexAngle(c),
      g = J(f),
      p = Ms(g, h.x, u.w, 0, 180),
      m = Ms(g, h.y, u.h, 90, 270);
    p.start < e.l && ((e.l = p.start), (i.l = f)),
      p.end > e.r && ((e.r = p.end), (i.r = f)),
      m.start < e.t && ((e.t = m.start), (i.t = f)),
      m.end > e.b && ((e.b = m.end), (i.b = f));
  }
  var a, r, l;
  t._setReductions(t.drawingArea, e, i),
    (t._pointLabelItems = (function (t, e, i) {
      const n = [],
        o = t.getLabels().length,
        s = t.options,
        a = ws(s),
        r = t.getDistanceFromCenterForValue(s.ticks.reverse ? t.min : t.max);
      for (let s = 0; s < o; s++) {
        const o = 0 === s ? a / 2 : 0,
          l = t.getPointPosition(s, r + o + i[s]),
          c = J(t.getIndexAngle(s)),
          h = e[s],
          d = Ds(l.y, h.h, c),
          u = Ss(c),
          f = Ps(l.x, h.w, u);
        n.push({
          x: l.x,
          y: d,
          textAlign: u,
          left: f,
          top: d,
          right: f + h.w,
          bottom: d + h.h,
        });
      }
      return n;
    })(t, n, o));
}
function Ss(t) {
  return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
}
function Ps(t, e, i) {
  return "right" === i ? (t -= e) : "center" === i && (t -= e / 2), t;
}
function Ds(t, e, i) {
  return (
    90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e), t
  );
}
function Cs(t, e, i, n) {
  const { ctx: o } = t;
  if (i) o.arc(t.xCenter, t.yCenter, e, 0, B);
  else {
    let i = t.getPointPosition(0, e);
    o.moveTo(i.x, i.y);
    for (let s = 1; s < n; s++)
      (i = t.getPointPosition(s, e)), o.lineTo(i.x, i.y);
  }
}
function Os(t) {
  return K(t) ? t : 0;
}
(vs.id = "logarithmic"),
  (vs.defaults = {
    ticks: { callback: Cn.formatters.logarithmic, major: { enabled: !0 } },
  });
class Ts extends xs {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = this;
    (t.width = t.maxWidth),
      (t.height = t.maxHeight),
      (t.paddingTop = ws(t.options) / 2),
      (t.xCenter = Math.floor(t.width / 2)),
      (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
      (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2);
  }
  determineDataLimits() {
    const t = this,
      { min: e, max: i } = t.getMinMax(!1);
    (t.min = _(e) && !isNaN(e) ? e : 0),
      (t.max = _(i) && !isNaN(i) ? i : 0),
      t.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ws(this.options));
  }
  generateTickLabels(t) {
    const e = this;
    xs.prototype.generateTickLabels.call(e, t),
      (e._pointLabels = e.getLabels().map((t, i) => {
        const n = k(e.options.pointLabels.callback, [t, i], e);
        return n || 0 === n ? n : "";
      }));
  }
  fit() {
    const t = this,
      e = t.options;
    e.display && e.pointLabels.display ? ks(t) : t.setCenterPoint(0, 0, 0, 0);
  }
  _setReductions(t, e, i) {
    const n = this;
    let o = e.l / Math.sin(i.l),
      s = Math.max(e.r - n.width, 0) / Math.sin(i.r),
      a = -e.t / Math.cos(i.t),
      r = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
    (o = Os(o)),
      (s = Os(s)),
      (a = Os(a)),
      (r = Os(r)),
      (n.drawingArea = Math.max(
        t / 2,
        Math.min(Math.floor(t - (o + s) / 2), Math.floor(t - (a + r) / 2))
      )),
      n.setCenterPoint(o, s, a, r);
  }
  setCenterPoint(t, e, i, n) {
    const o = this,
      s = o.width - e - o.drawingArea,
      a = t + o.drawingArea,
      r = i + o.drawingArea,
      l = o.height - o.paddingTop - n - o.drawingArea;
    (o.xCenter = Math.floor((a + s) / 2 + o.left)),
      (o.yCenter = Math.floor((r + l) / 2 + o.top + o.paddingTop));
  }
  getIndexAngle(t) {
    return nt(
      t * (B / this.getLabels().length) + Q(this.options.startAngle || 0)
    );
  }
  getDistanceFromCenterForValue(t) {
    const e = this;
    if (b(t)) return NaN;
    const i = e.drawingArea / (e.max - e.min);
    return e.options.reverse ? (e.max - t) * i : (t - e.min) * i;
  }
  getValueForDistanceFromCenter(t) {
    if (b(t)) return NaN;
    const e = this,
      i = t / (e.drawingArea / (e.max - e.min));
    return e.options.reverse ? e.max - i : e.min + i;
  }
  getPointPosition(t, e) {
    const i = this,
      n = i.getIndexAngle(t) - H;
    return {
      x: Math.cos(n) * e + i.xCenter,
      y: Math.sin(n) * e + i.yCenter,
      angle: n,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: i, right: n, bottom: o } = this._pointLabelItems[t];
    return { left: e, top: i, right: n, bottom: o };
  }
  drawBackground() {
    const t = this,
      {
        backgroundColor: e,
        grid: { circular: i },
      } = t.options;
    if (e) {
      const n = t.ctx;
      n.save(),
        n.beginPath(),
        Cs(
          t,
          t.getDistanceFromCenterForValue(t._endValue),
          i,
          t.getLabels().length
        ),
        n.closePath(),
        (n.fillStyle = e),
        n.fill(),
        n.restore();
    }
  }
  drawGrid() {
    const t = this,
      e = t.ctx,
      i = t.options,
      { angleLines: n, grid: o } = i,
      s = t.getLabels().length;
    let a, r, l;
    if (
      (i.pointLabels.display &&
        (function (t, e) {
          const {
            ctx: i,
            options: { pointLabels: n },
          } = t;
          for (let o = e - 1; o >= 0; o--) {
            const e = n.setContext(t.getContext(o)),
              s = me(e.font),
              {
                x: a,
                y: r,
                textAlign: l,
                left: c,
                top: h,
                right: d,
                bottom: u,
              } = t._pointLabelItems[o],
              { backdropColor: f } = e;
            if (!b(f)) {
              const t = pe(e.backdropPadding);
              (i.fillStyle = f),
                i.fillRect(
                  c - t.left,
                  h - t.top,
                  d - c + t.width,
                  u - h + t.height
                );
            }
            ae(i, t._pointLabels[o], a, r + s.lineHeight / 2, s, {
              color: e.color,
              textAlign: l,
              textBaseline: "middle",
            });
          }
        })(t, s),
      o.display &&
        t.ticks.forEach((e, i) => {
          if (0 !== i) {
            r = t.getDistanceFromCenterForValue(e.value);
            const n = o.setContext(t.getContext(i - 1));
            !(function (t, e, i, n) {
              const o = t.ctx,
                s = e.circular,
                { color: a, lineWidth: r } = e;
              (!s && !n) ||
                !a ||
                !r ||
                i < 0 ||
                (o.save(),
                (o.strokeStyle = a),
                (o.lineWidth = r),
                o.setLineDash(e.borderDash),
                (o.lineDashOffset = e.borderDashOffset),
                o.beginPath(),
                Cs(t, i, s, n),
                o.closePath(),
                o.stroke(),
                o.restore());
            })(t, n, r, s);
          }
        }),
      n.display)
    ) {
      for (e.save(), a = t.getLabels().length - 1; a >= 0; a--) {
        const o = n.setContext(t.getContext(a)),
          { color: s, lineWidth: c } = o;
        c &&
          s &&
          ((e.lineWidth = c),
          (e.strokeStyle = s),
          e.setLineDash(o.borderDash),
          (e.lineDashOffset = o.borderDashOffset),
          (r = t.getDistanceFromCenterForValue(
            i.ticks.reverse ? t.min : t.max
          )),
          (l = t.getPointPosition(a, r)),
          e.beginPath(),
          e.moveTo(t.xCenter, t.yCenter),
          e.lineTo(l.x, l.y),
          e.stroke());
      }
      e.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this,
      e = t.ctx,
      i = t.options,
      n = i.ticks;
    if (!n.display) return;
    const o = t.getIndexAngle(0);
    let s, a;
    e.save(),
      e.translate(t.xCenter, t.yCenter),
      e.rotate(o),
      (e.textAlign = "center"),
      (e.textBaseline = "middle"),
      t.ticks.forEach((o, r) => {
        if (0 === r && !i.reverse) return;
        const l = n.setContext(t.getContext(r)),
          c = me(l.font);
        if (
          ((s = t.getDistanceFromCenterForValue(t.ticks[r].value)),
          l.showLabelBackdrop)
        ) {
          (e.font = c.string),
            (a = e.measureText(o.label).width),
            (e.fillStyle = l.backdropColor);
          const t = pe(l.backdropPadding);
          e.fillRect(
            -a / 2 - t.left,
            -s - c.size / 2 - t.top,
            a + t.width,
            c.size + t.height
          );
        }
        ae(e, o.label, 0, -s, c, { color: l.color });
      }),
      e.restore();
  }
  drawTitle() {}
}
(Ts.id = "radialLinear"),
  (Ts.defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Cn.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback: (t) => t,
      padding: 5,
    },
  }),
  (Ts.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  (Ts.descriptors = { angleLines: { _fallback: "grid" } });
const As = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Ls = Object.keys(As);
function Es(t, e) {
  return t - e;
}
function Rs(t, e) {
  if (b(e)) return null;
  const i = t._adapter,
    { parser: n, round: o, isoWeekday: s } = t._parseOpts;
  let a = e;
  return (
    "function" == typeof n && (a = n(a)),
    _(a) || (a = "string" == typeof n ? i.parse(a, n) : i.parse(a)),
    null === a
      ? null
      : (o &&
          (a =
            "week" !== o || (!K(s) && !0 !== s)
              ? i.startOf(a, o)
              : i.startOf(a, "isoWeek", s)),
        +a)
  );
}
function Is(t, e, i, n) {
  const o = Ls.length;
  for (let s = Ls.indexOf(t); s < o - 1; ++s) {
    const t = As[Ls[s]],
      o = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
    if (t.common && Math.ceil((i - e) / (o * t.size)) <= n) return Ls[s];
  }
  return Ls[o - 1];
}
function Fs(t, e, i) {
  if (i) {
    if (i.length) {
      const { lo: n, hi: o } = xe(i, e);
      t[i[n] >= e ? i[n] : i[o]] = !0;
    }
  } else t[e] = !0;
}
function zs(t, e, i) {
  const n = [],
    o = {},
    s = e.length;
  let a, r;
  for (a = 0; a < s; ++a)
    (r = e[a]), (o[r] = a), n.push({ value: r, major: !1 });
  return 0 !== s && i
    ? (function (t, e, i, n) {
        const o = t._adapter,
          s = +o.startOf(e[0].value, n),
          a = e[e.length - 1].value;
        let r, l;
        for (r = s; r <= a; r = +o.add(r, 1, n))
          (l = i[r]), l >= 0 && (e[l].major = !0);
        return e;
      })(t, n, o, i)
    : n;
}
class Vs extends zn {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e) {
    const i = t.time || (t.time = {}),
      n = (this._adapter = new Yi._date(t.adapters.date));
    A(i.displayFormats, n.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return void 0 === t ? null : Rs(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this,
      e = t.options,
      i = t._adapter,
      n = e.time.unit || "day";
    let { min: o, max: s, minDefined: a, maxDefined: r } = t.getUserBounds();
    function l(t) {
      a || isNaN(t.min) || (o = Math.min(o, t.min)),
        r || isNaN(t.max) || (s = Math.max(s, t.max));
    }
    (a && r) ||
      (l(t._getLabelBounds()),
      ("ticks" === e.bounds && "labels" === e.ticks.source) ||
        l(t.getMinMax(!1))),
      (o = _(o) && !isNaN(o) ? o : +i.startOf(Date.now(), n)),
      (s = _(s) && !isNaN(s) ? s : +i.endOf(Date.now(), n) + 1),
      (t.min = Math.min(o, s - 1)),
      (t.max = Math.max(o + 1, s));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i };
  }
  buildTicks() {
    const t = this,
      e = t.options,
      i = e.time,
      n = e.ticks,
      o = "labels" === n.source ? t.getLabelTimestamps() : t._generate();
    "ticks" === e.bounds &&
      o.length &&
      ((t.min = t._userMin || o[0]), (t.max = t._userMax || o[o.length - 1]));
    const s = t.min,
      a = (function (t, e, i) {
        let n = 0,
          o = t.length;
        for (; n < o && t[n] < e; ) n++;
        for (; o > n && t[o - 1] > i; ) o--;
        return n > 0 || o < t.length ? t.slice(n, o) : t;
      })(o, s, t.max);
    return (
      (t._unit =
        i.unit ||
        (n.autoSkip
          ? Is(i.minUnit, t.min, t.max, t._getLabelCapacity(s))
          : (function (t, e, i, n, o) {
              for (let s = Ls.length - 1; s >= Ls.indexOf(i); s--) {
                const i = Ls[s];
                if (As[i].common && t._adapter.diff(o, n, i) >= e - 1) return i;
              }
              return Ls[i ? Ls.indexOf(i) : 0];
            })(t, a.length, i.minUnit, t.min, t.max))),
      (t._majorUnit =
        n.major.enabled && "year" !== t._unit
          ? (function (t) {
              for (let e = Ls.indexOf(t) + 1, i = Ls.length; e < i; ++e)
                if (As[Ls[e]].common) return Ls[e];
            })(t._unit)
          : void 0),
      t.initOffsets(o),
      e.reverse && a.reverse(),
      zs(t, a, t._majorUnit)
    );
  }
  initOffsets(t) {
    const e = this;
    let i,
      n,
      o = 0,
      s = 0;
    e.options.offset &&
      t.length &&
      ((i = e.getDecimalForValue(t[0])),
      (o = 1 === t.length ? 1 - i : (e.getDecimalForValue(t[1]) - i) / 2),
      (n = e.getDecimalForValue(t[t.length - 1])),
      (s =
        1 === t.length ? n : (n - e.getDecimalForValue(t[t.length - 2])) / 2));
    const a = t.length < 3 ? 0.5 : 0.25;
    (o = st(o, 0, a)),
      (s = st(s, 0, a)),
      (e._offsets = { start: o, end: s, factor: 1 / (o + 1 + s) });
  }
  _generate() {
    const t = this,
      e = t._adapter,
      i = t.min,
      n = t.max,
      o = t.options,
      s = o.time,
      a = s.unit || Is(s.minUnit, i, n, t._getLabelCapacity(i)),
      r = w(s.stepSize, 1),
      l = "week" === a && s.isoWeekday,
      c = K(l) || !0 === l,
      h = {};
    let d,
      u,
      f = i;
    if (
      (c && (f = +e.startOf(f, "isoWeek", l)),
      (f = +e.startOf(f, c ? "day" : a)),
      e.diff(n, i, a) > 1e5 * r)
    )
      throw new Error(
        i + " and " + n + " are too far apart with stepSize of " + r + " " + a
      );
    const g = "data" === o.ticks.source && t.getDataTimestamps();
    for (d = f, u = 0; d < n; d = +e.add(d, r, a), u++) Fs(h, d, g);
    return (
      (d !== n && "ticks" !== o.bounds && 1 !== u) || Fs(h, d, g),
      Object.keys(h)
        .sort((t, e) => t - e)
        .map((t) => +t)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? e.format(t, i.tooltipFormat)
      : e.format(t, i.displayFormats.datetime);
  }
  _tickFormatFunction(t, e, i, n) {
    const o = this,
      s = o.options,
      a = s.time.displayFormats,
      r = o._unit,
      l = o._majorUnit,
      c = r && a[r],
      h = l && a[l],
      d = i[e],
      u = l && h && d && d.major,
      f = o._adapter.format(t, n || (u ? h : c)),
      g = s.ticks.callback;
    return g ? k(g, [f, e, i], o) : f;
  }
  generateTickLabels(t) {
    let e, i, n;
    for (e = 0, i = t.length; e < i; ++e)
      (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
  }
  getDecimalForValue(t) {
    const e = this;
    return null === t ? NaN : (t - e.min) / (e.max - e.min);
  }
  getPixelForValue(t) {
    const e = this,
      i = e._offsets,
      n = e.getDecimalForValue(t);
    return e.getPixelForDecimal((i.start + n) * i.factor);
  }
  getValueForPixel(t) {
    const e = this,
      i = e._offsets,
      n = e.getDecimalForPixel(t) / i.factor - i.end;
    return e.min + n * (e.max - e.min);
  }
  _getLabelSize(t) {
    const e = this,
      i = e.options.ticks,
      n = e.ctx.measureText(t).width,
      o = Q(e.isHorizontal() ? i.maxRotation : i.minRotation),
      s = Math.cos(o),
      a = Math.sin(o),
      r = e._resolveTickFontOptions(0).size;
    return { w: n * s + r * a, h: n * a + r * s };
  }
  _getLabelCapacity(t) {
    const e = this,
      i = e.options.time,
      n = i.displayFormats,
      o = n[i.unit] || n.millisecond,
      s = e._tickFormatFunction(t, 0, zs(e, [t], e._majorUnit), o),
      a = e._getLabelSize(s),
      r = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    const t = this;
    let e,
      i,
      n = t._cache.data || [];
    if (n.length) return n;
    const o = t.getMatchingVisibleMetas();
    if (t._normalized && o.length)
      return (t._cache.data = o[0].controller.getAllParsedValues(t));
    for (e = 0, i = o.length; e < i; ++e)
      n = n.concat(o[e].controller.getAllParsedValues(t));
    return (t._cache.data = t.normalize(n));
  }
  getLabelTimestamps() {
    const t = this,
      e = t._cache.labels || [];
    let i, n;
    if (e.length) return e;
    const o = t.getLabels();
    for (i = 0, n = o.length; i < n; ++i) e.push(Rs(t, o[i]));
    return (t._cache.labels = t._normalized ? e : t.normalize(e));
  }
  normalize(t) {
    return Me(t.sort(Es));
  }
}
function Bs(t, e, i) {
  let n,
    o,
    s,
    a,
    r = 0,
    l = t.length - 1;
  i
    ? (e >= t[r].pos && e <= t[l].pos && ({ lo: r, hi: l } = ye(t, "pos", e)),
      ({ pos: n, time: s } = t[r]),
      ({ pos: o, time: a } = t[l]))
    : (e >= t[r].time &&
        e <= t[l].time &&
        ({ lo: r, hi: l } = ye(t, "time", e)),
      ({ time: n, pos: s } = t[r]),
      ({ time: o, pos: a } = t[l]));
  const c = o - n;
  return c ? s + ((a - s) * (e - n)) / c : s;
}
(Vs.id = "time"),
  (Vs.defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", major: { enabled: !1 } },
  });
class Ns extends Vs {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this,
      e = t._getTimestampsForTable(),
      i = (t._table = t.buildLookupTable(e));
    (t._minPos = Bs(i, t.min)),
      (t._tableRange = Bs(i, t.max) - t._minPos),
      super.initOffsets(e);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this,
      n = [],
      o = [];
    let s, a, r, l, c;
    for (s = 0, a = t.length; s < a; ++s)
      (l = t[s]), l >= e && l <= i && n.push(l);
    if (n.length < 2)
      return [
        { time: e, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (s = 0, a = n.length; s < a; ++s)
      (c = n[s + 1]),
        (r = n[s - 1]),
        (l = n[s]),
        Math.round((c + r) / 2) !== l && o.push({ time: l, pos: s / (a - 1) });
    return o;
  }
  _getTimestampsForTable() {
    const t = this;
    let e = t._cache.all || [];
    if (e.length) return e;
    const i = t.getDataTimestamps(),
      n = t.getLabelTimestamps();
    return (
      (e = i.length && n.length ? t.normalize(i.concat(n)) : i.length ? i : n),
      (e = t._cache.all = e),
      e
    );
  }
  getDecimalForValue(t) {
    return (Bs(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this,
      i = e._offsets,
      n = e.getDecimalForPixel(t) / i.factor - i.end;
    return Bs(e._table, n * e._tableRange + e._minPos, !0);
  }
}
function Ws(t, e, i, n) {
  (n =
    n ||
    function (t, e, i, n, o) {
      var s = e.split("\n"),
        a = Math.max(n - 3, 0),
        r = Math.min(s.length, n + 3),
        l = o(i),
        c = s
          .slice(a, r)
          .map(function (t, e) {
            var i = e + a + 1;
            return (i == n ? " >> " : "    ") + i + "| " + t;
          })
          .join("\n");
      throw (
        ((t.path = l),
        (t.message = (l || "ejs") + ":" + n + "\n" + c + "\n\n" + t.message),
        t)
      );
    }),
    (e =
      e ||
      function (t) {
        return null == t ? "" : String(t).replace(s, a);
      });
  var o = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&#34;",
      "'": "&#39;",
    },
    s = /[&<>'"]/g;
  function a(t) {
    return o[t] || t;
  }
  var r = 1;
  try {
    var l = "";
    function c(t) {
      null != t && (l += t);
    }
    let i = t;
    return (
      (r = 3),
      c('\r\n<div class="modular-spectator-module player-data resizable" id='),
      (r = 4),
      c(e(i.id)),
      c(' >\r\n  <div class="topBar">\r\n    <p class="topBarTitle">'),
      (r = 6),
      c(e(i.name)),
      c(
        '</p>\r\n  </div>\r\n  <div class="moduleBody">\r\n    <pre class="moduleBodyContent">'
      ),
      (r = 9),
      c(e(i.content)),
      c("</pre>\r\n  </div>\r\n</div>"),
      (r = 11),
      l
    );
  } catch (t) {
    n(
      t,
      '<% \r\nlet data = locals\r\n%>\r\n<div class="modular-spectator-module player-data resizable" id=<%= data.id %> >\r\n  <div class="topBar">\r\n    <p class="topBarTitle"><%= data.name %></p>\r\n  </div>\r\n  <div class="moduleBody">\r\n    <pre class="moduleBodyContent"><%= data.content %></pre>\r\n  </div>\r\n</div>',
      undefined,
      r,
      e
    );
  }
}
(Ns.id = "timeseries"), (Ns.defaults = Vs.defaults);
var js = /https?:\/\/yare.io\/d\d+\/[a-z0-9]+/.test(window.location.href);
lo.register(So, Fo, Do, Ii, Vi, Ni, ps, ys, vs, Ts, ts, is),
  console.log("Loaded yareio-spectator (modular)");
var Hs,
  $s,
  Ys = new o(0),
  Us = "module-" + d(),
  Xs = new Array(25).fill(0),
  Gs = new o(1),
  Ks = "module-" + d(),
  Zs = new Array(25).fill(0),
  qs = "module-" + d();
function Qs() {
  Ys.tick(),
    Gs.tick(),
    (document.querySelector(
      "#" + Us + " .moduleBody .moduleBodyContent"
    ).innerHTML = Ys.getStats()),
    (document.querySelector(
      "#" + Ks + " .moduleBody .moduleBodyContent"
    ).innerHTML = Gs.getStats()),
    Xs.shift(),
    Xs.push(Math.round(Ys.getTotalEnergyCapacity())),
    Zs.shift(),
    Zs.push(Math.round(Gs.getTotalEnergyCapacity())),
    (Hs.data.datasets[0].data = Xs),
    (Hs.data.datasets[1].data = Zs),
    Hs.update();
}
function Js() {
  return t(this, void 0, void 0, function () {
    var t, n;
    return e(this, function (e) {
      return (
        console.log("Running yareio-spectator (modular)"),
        (t = document.createElement("div")).classList.add(
          "yareio-modular-spectator-container"
        ),
        document.body.appendChild(t),
        (t.innerHTML +=
          '<link rel="stylesheet" href="data:text/css;base64,LnBvbGlzaGVkLXNwZWN0YXRvci1tb2R1bGUgew0KICBwb3NpdGlvbjogYWJzb2x1dGU7DQogIHotaW5kZXg6IDEwMDA7DQogIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4yNyk7DQogIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7DQogIHRleHQtYWxpZ246IGNlbnRlcjsNCiAgbWluLWhlaWdodDogM3JlbTsNCiAgbWluLXdpZHRoOiA1cmVtOw0KICBkaXNwbGF5OiBmbGV4Ow0KICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOw0KfQ0KDQoucG9saXNoZWQtc3BlY3RhdG9yLW1vZHVsZS5yZXNpemFibGUgew0KICByZXNpemU6IGJvdGg7DQogIG92ZXJmbG93OiBhdXRvOw0KfQ0KDQoucG9saXNoZWQtc3BlY3RhdG9yLW1vZHVsZSAudG9wQmFyIHsNCiAgcGFkZGluZzogMTBweDsNCiAgY3Vyc29yOiBtb3ZlOw0KICB6LWluZGV4OiAxMDsNCiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWM1YzsNCiAgY29sb3I6ICNmZmY7DQogIHVzZXItc2VsZWN0OiBub25lOw0KICAvKiB3aWR0aDogMTAwJTsgKi8NCn0NCg==">'),
        (n = document.createElement("div")).classList.add(
          "yareio-modular-spectator-module-container"
        ),
        t.appendChild(n),
        (n.innerHTML += Ws({
          id: Us,
          name: "Player 1 stats",
          content: Ys.getStats(),
        })),
        (n.innerHTML += Ws({
          id: Ks,
          name: "Player 2 stats",
          content: Gs.getStats(),
        })),
        (n.innerHTML += (function (t, e, i, n) {
          (n =
            n ||
            function (t, e, i, n, o) {
              var s = e.split("\n"),
                a = Math.max(n - 3, 0),
                r = Math.min(s.length, n + 3),
                l = o(i),
                c = s
                  .slice(a, r)
                  .map(function (t, e) {
                    var i = e + a + 1;
                    return (i == n ? " >> " : "    ") + i + "| " + t;
                  })
                  .join("\n");
              throw (
                ((t.path = l),
                (t.message =
                  (l || "ejs") + ":" + n + "\n" + c + "\n\n" + t.message),
                t)
              );
            }),
            (e =
              e ||
              function (t) {
                return null == t ? "" : String(t).replace(s, a);
              });
          var o = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&#34;",
              "'": "&#39;",
            },
            s = /[&<>'"]/g;
          function a(t) {
            return o[t] || t;
          }
          var r = 1;
          try {
            var l = "";
            function c(t) {
              null != t && (l += t);
            }
            let i = t;
            return (
              (r = 3),
              c(
                '\r\n<div class="modular-spectator-module player-data resizable" id='
              ),
              (r = 4),
              c(e(i.id)),
              c(' >\r\n  <div class="topBar">\r\n    <p class="topBarTitle">'),
              (r = 6),
              c(e(i.name)),
              c(
                '</p>\r\n  </div>\r\n  <div class="moduleBody">\r\n    <canvas id='
              ),
              (r = 9),
              c(e(i.id + "-canvas")),
              c(" ></canvas>\r\n  </div>\r\n</div>"),
              (r = 11),
              l
            );
          } catch (t) {
            n(
              t,
              '<% \r\nlet data = locals\r\n%>\r\n<div class="modular-spectator-module player-data resizable" id=<%= data.id %> >\r\n  <div class="topBar">\r\n    <p class="topBarTitle"><%= data.name %></p>\r\n  </div>\r\n  <div class="moduleBody">\r\n    <canvas id=<%= data.id + "-canvas" %> ></canvas>\r\n  </div>\r\n</div>',
              void 0,
              r,
              e
            );
          }
        })({ id: qs, name: "Unit Graph" })),
        (Hs = new lo(document.getElementById(qs + "-canvas"), {
          type: "line",
          data: {
            labels: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24,
            ],
            datasets: [
              {
                label: "Player 1",
                backgroundColor: window.colors.color1,
                borderColor: window.colors.color1,
                data: [1, 2, 3, 4, 1, 2, 3, 4],
                tension: 0.4,
              },
              {
                label: "Player 2",
                backgroundColor: window.colors.color2,
                borderColor: window.colors.color2,
                data: [1, 2, 3, 4, 1, 2, 3, 4],
                tension: 0.4,
              },
            ],
          },
          options: {
            transitions: { duration: 50 },
            scales: {
              x: { display: !0, title: { display: !0 } },
              y: {
                display: !0,
                title: { display: !0, text: "Value" },
                suggestedMin: 0,
                suggestedMax: 200,
              },
            },
          },
        })),
        i(document.getElementById(Us) || document.createElement("div")),
        i(document.getElementById(Ks) || document.createElement("div")),
        i(document.getElementById(qs) || document.createElement("div")),
        setInterval(Qs, 600),
        [2]
      );
    });
  });
}
js &&
  ($s = setInterval(function () {
    incoming.t > 0 && (clearInterval($s), Js());
  }, 300));
