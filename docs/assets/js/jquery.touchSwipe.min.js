/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!(function (e) {
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], e)
    : e(
        "undefined" != typeof module && module.exports
          ? require("jquery")
          : jQuery
      );
})(function (e) {
  "use strict";
  function n(n) {
    return (
      !n ||
        void 0 !== n.allowPageScroll ||
        (void 0 === n.swipe && void 0 === n.swipeStatus) ||
        (n.allowPageScroll = s),
      void 0 !== n.click && void 0 === n.tap && (n.tap = n.click),
      n || (n = {}),
      (n = e.extend({}, e.fn.swipe.defaults, n)),
      this.each(function () {
        var r = e(this),
          i = r.data(D);
        i || ((i = new t(this, n)), r.data(D, i));
      })
    );
  }
  function t(n, t) {
    function P(n) {
      if (
        !(
          !0 === me.data(D + "_intouch") ||
          e(n.target).closest(t.excludedElements, me).length > 0
        )
      ) {
        var a = n.originalEvent ? n.originalEvent : n;
        if (
          !a.pointerType ||
          "mouse" != a.pointerType ||
          0 != t.fallbackToMouseEvents
        ) {
          var u,
            s = a.touches,
            c = s ? s[0] : a;
          return (
            (xe = y),
            s
              ? (Se = s.length)
              : !1 !== t.preventDefaultEvents && n.preventDefault(),
            (he = 0),
            (fe = null),
            (de = null),
            (ye = null),
            (ge = 0),
            (we = 0),
            (ve = 0),
            (Te = 1),
            (be = 0),
            ((p = {})[r] = ne(r)),
            (p[i] = ne(i)),
            (p[l] = ne(l)),
            (p[o] = ne(o)),
            (Ee = p),
            Z(),
            K(0, c),
            !s || Se === t.fingers || t.fingers === T || C()
              ? ((Me = le()),
                2 == Se &&
                  (K(1, s[1]), (we = ve = re(Oe[0].start, Oe[1].start))),
                (t.swipeStatus || t.pinchStatus) && (u = j(a, xe)))
              : (u = !1),
            !1 === u
              ? (j(a, (xe = x)), u)
              : (t.hold &&
                  (Ae = setTimeout(
                    e.proxy(function () {
                      me.trigger("hold", [a.target]),
                        t.hold && (u = t.hold.call(me, a, a.target));
                    }, this),
                    t.longTapThreshold
                  )),
                J(!0),
                null)
          );
        }
      }
      var p;
    }
    function L(n) {
      var p,
        h,
        f = n.originalEvent ? n.originalEvent : n;
      if (xe !== m && xe !== x && !B()) {
        var d,
          g = f.touches,
          b = $(g ? g[0] : f);
        if (
          ((De = le()),
          g && (Se = g.length),
          t.hold && clearTimeout(Ae),
          (xe = E),
          2 == Se &&
            (0 == we
              ? (K(1, g[1]), (we = ve = re(Oe[0].start, Oe[1].start)))
              : ($(g[1]),
                (ve = re(Oe[0].end, Oe[1].end)),
                Oe[0].end,
                Oe[1].end,
                (ye = Te < 1 ? u : a)),
            (Te = ((ve / we) * 1).toFixed(2)),
            (be = Math.abs(we - ve))),
          Se === t.fingers || t.fingers === T || !g || C())
        ) {
          if (
            ((fe = ie(b.start, b.end)),
            (function (e, n) {
              if (!1 !== t.preventDefaultEvents)
                if (t.allowPageScroll === s) e.preventDefault();
                else {
                  var a = t.allowPageScroll === c;
                  switch (n) {
                    case r:
                      ((t.swipeLeft && a) || (!a && t.allowPageScroll != w)) &&
                        e.preventDefault();
                      break;
                    case i:
                      ((t.swipeRight && a) || (!a && t.allowPageScroll != w)) &&
                        e.preventDefault();
                      break;
                    case l:
                      ((t.swipeUp && a) || (!a && t.allowPageScroll != v)) &&
                        e.preventDefault();
                      break;
                    case o:
                      ((t.swipeDown && a) || (!a && t.allowPageScroll != v)) &&
                        e.preventDefault();
                  }
                }
            })(n, (de = ie(b.last, b.end))),
            (p = b.start),
            (h = b.end),
            (he = Math.round(
              Math.sqrt(Math.pow(h.x - p.x, 2) + Math.pow(h.y - p.y, 2))
            )),
            (ge = te()),
            (function (e, n) {
              e != s && ((n = Math.max(n, ee(e))), (Ee[e].distance = n));
            })(fe, he),
            (d = j(f, xe)),
            !t.triggerOnTouchEnd || t.triggerOnTouchLeave)
          ) {
            var y = !0;
            if (t.triggerOnTouchLeave) {
              var S = (function (n) {
                var t = (n = e(n)).offset(),
                  r = {
                    left: t.left,
                    right: t.left + n.outerWidth(),
                    top: t.top,
                    bottom: t.top + n.outerHeight(),
                  };
                return r;
              })(this);
              y = (function (e, n) {
                return (
                  e.x > n.left && e.x < n.right && e.y > n.top && e.y < n.bottom
                );
              })(b.end, S);
            }
            !t.triggerOnTouchEnd && y
              ? (xe = U(E))
              : t.triggerOnTouchLeave && !y && (xe = U(m)),
              (xe != x && xe != m) || j(f, xe);
          }
        } else j(f, (xe = x));
        !1 === d && j(f, (xe = x));
      }
    }
    function R(e) {
      var n = e.originalEvent ? e.originalEvent : e,
        r = n.touches;
      if (r) {
        if (r.length && !B())
          return (
            (function (e) {
              (Pe = le()), (Le = e.touches.length + 1);
            })(n),
            !0
          );
        if (r.length && B()) return !0;
      }
      return (
        B() && (Se = Le),
        (De = le()),
        (ge = te()),
        _() || !H()
          ? j(n, (xe = x))
          : t.triggerOnTouchEnd || (!1 === t.triggerOnTouchEnd && xe === E)
          ? (!1 !== t.preventDefaultEvents &&
              !1 !== e.cancelable &&
              e.preventDefault(),
            j(n, (xe = m)))
          : !t.triggerOnTouchEnd && W()
          ? N(n, (xe = m), f)
          : xe === E && j(n, (xe = x)),
        J(!1),
        null
      );
    }
    function k() {
      (Se = 0), (De = 0), (Me = 0), (we = 0), (ve = 0), (Te = 1), Z(), J(!1);
    }
    function A(e) {
      var n = e.originalEvent ? e.originalEvent : e;
      t.triggerOnTouchLeave && j(n, (xe = U(m)));
    }
    function I() {
      me.unbind(ae, P),
        me.unbind(pe, k),
        me.unbind(ue, L),
        me.unbind(se, R),
        ce && me.unbind(ce, A),
        J(!1);
    }
    function U(e) {
      var n = e,
        r = q(),
        i = H(),
        l = _();
      return (
        !r || l
          ? (n = x)
          : !i || e != E || (t.triggerOnTouchEnd && !t.triggerOnTouchLeave)
          ? !i && e == m && t.triggerOnTouchLeave && (n = x)
          : (n = m),
        n
      );
    }
    function j(e, n) {
      var r,
        i = e.touches;
      return (
        (!(!F() || !X()) || X()) && (r = N(e, n, p)),
        (!(!Q() || !C()) || C()) && !1 !== r && (r = N(e, n, h)),
        G() && z() && !1 !== r
          ? (r = N(e, n, d))
          : ge > t.longTapThreshold && he < b && t.longTap && !1 !== r
          ? (r = N(e, n, g))
          : !((1 !== Se && S) || !(isNaN(he) || he < t.threshold) || !W()) &&
            !1 !== r &&
            (r = N(e, n, f)),
        n === x && k(),
        n === m && ((i && i.length) || k()),
        r
      );
    }
    function N(n, s, c) {
      var w;
      if (c == p) {
        if (
          (me.trigger("swipeStatus", [
            s,
            fe || null,
            he || 0,
            ge || 0,
            Se,
            Oe,
            de,
          ]),
          t.swipeStatus &&
            !1 ===
              (w = t.swipeStatus.call(
                me,
                n,
                s,
                fe || null,
                he || 0,
                ge || 0,
                Se,
                Oe,
                de
              )))
        )
          return !1;
        if (s == m && F()) {
          if (
            (clearTimeout(ke),
            clearTimeout(Ae),
            me.trigger("swipe", [fe, he, ge, Se, Oe, de]),
            t.swipe && !1 === (w = t.swipe.call(me, n, fe, he, ge, Se, Oe, de)))
          )
            return !1;
          switch (fe) {
            case r:
              me.trigger("swipeLeft", [fe, he, ge, Se, Oe, de]),
                t.swipeLeft &&
                  (w = t.swipeLeft.call(me, n, fe, he, ge, Se, Oe, de));
              break;
            case i:
              me.trigger("swipeRight", [fe, he, ge, Se, Oe, de]),
                t.swipeRight &&
                  (w = t.swipeRight.call(me, n, fe, he, ge, Se, Oe, de));
              break;
            case l:
              me.trigger("swipeUp", [fe, he, ge, Se, Oe, de]),
                t.swipeUp &&
                  (w = t.swipeUp.call(me, n, fe, he, ge, Se, Oe, de));
              break;
            case o:
              me.trigger("swipeDown", [fe, he, ge, Se, Oe, de]),
                t.swipeDown &&
                  (w = t.swipeDown.call(me, n, fe, he, ge, Se, Oe, de));
          }
        }
      }
      if (c == h) {
        if (
          (me.trigger("pinchStatus", [
            s,
            ye || null,
            be || 0,
            ge || 0,
            Se,
            Te,
            Oe,
          ]),
          t.pinchStatus &&
            !1 ===
              (w = t.pinchStatus.call(
                me,
                n,
                s,
                ye || null,
                be || 0,
                ge || 0,
                Se,
                Te,
                Oe
              )))
        )
          return !1;
        if (s == m && Q())
          switch (ye) {
            case a:
              me.trigger("pinchIn", [ye || null, be || 0, ge || 0, Se, Te, Oe]),
                t.pinchIn &&
                  (w = t.pinchIn.call(
                    me,
                    n,
                    ye || null,
                    be || 0,
                    ge || 0,
                    Se,
                    Te,
                    Oe
                  ));
              break;
            case u:
              me.trigger("pinchOut", [
                ye || null,
                be || 0,
                ge || 0,
                Se,
                Te,
                Oe,
              ]),
                t.pinchOut &&
                  (w = t.pinchOut.call(
                    me,
                    n,
                    ye || null,
                    be || 0,
                    ge || 0,
                    Se,
                    Te,
                    Oe
                  ));
          }
      }
      return (
        c == f
          ? (s !== x && s !== m) ||
            (clearTimeout(ke),
            clearTimeout(Ae),
            z() && !G()
              ? ((Re = le()),
                (ke = setTimeout(
                  e.proxy(function () {
                    (Re = null),
                      me.trigger("tap", [n.target]),
                      t.tap && (w = t.tap.call(me, n, n.target));
                  }, this),
                  t.doubleTapThreshold
                )))
              : ((Re = null),
                me.trigger("tap", [n.target]),
                t.tap && (w = t.tap.call(me, n, n.target))))
          : c == d
          ? (s !== x && s !== m) ||
            (clearTimeout(ke),
            clearTimeout(Ae),
            (Re = null),
            me.trigger("doubletap", [n.target]),
            t.doubleTap && (w = t.doubleTap.call(me, n, n.target)))
          : c == g &&
            ((s !== x && s !== m) ||
              (clearTimeout(ke),
              (Re = null),
              me.trigger("longtap", [n.target]),
              t.longTap && (w = t.longTap.call(me, n, n.target)))),
        w
      );
    }
    function H() {
      var e = !0;
      return null !== t.threshold && (e = he >= t.threshold), e;
    }
    function _() {
      var e = !1;
      return (
        null !== t.cancelThreshold &&
          null !== fe &&
          (e = ee(fe) - he >= t.cancelThreshold),
        e
      );
    }
    function q() {
      return !(t.maxTimeThreshold && ge >= t.maxTimeThreshold);
    }
    function Q() {
      var e = Y(),
        n = V(),
        r = null === t.pinchThreshold || be >= t.pinchThreshold;
      return e && n && r;
    }
    function C() {
      return !!(t.pinchStatus || t.pinchIn || t.pinchOut);
    }
    function F() {
      var e = q(),
        n = H(),
        t = Y(),
        r = V();
      return !_() && r && t && n && e;
    }
    function X() {
      return !!(
        t.swipe ||
        t.swipeStatus ||
        t.swipeLeft ||
        t.swipeRight ||
        t.swipeUp ||
        t.swipeDown
      );
    }
    function Y() {
      return Se === t.fingers || t.fingers === T || !S;
    }
    function V() {
      return 0 !== Oe[0].end.x;
    }
    function W() {
      return !!t.tap;
    }
    function z() {
      return !!t.doubleTap;
    }
    function G() {
      if (null == Re) return !1;
      var e = le();
      return z() && e - Re <= t.doubleTapThreshold;
    }
    function Z() {
      (Pe = 0), (Le = 0);
    }
    function B() {
      var e = !1;
      Pe && le() - Pe <= t.fingerReleaseThreshold && (e = !0);
      return e;
    }
    function J(e) {
      me &&
        (!0 === e
          ? (me.bind(ue, L), me.bind(se, R), ce && me.bind(ce, A))
          : (me.unbind(ue, L, !1),
            me.unbind(se, R, !1),
            ce && me.unbind(ce, A, !1)),
        me.data(D + "_intouch", !0 === e));
    }
    function K(e, n) {
      var t = {
        start: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
      };
      return (
        (t.start.x = t.last.x = t.end.x = n.pageX || n.clientX),
        (t.start.y = t.last.y = t.end.y = n.pageY || n.clientY),
        (Oe[e] = t),
        t
      );
    }
    function $(e) {
      var n = void 0 !== e.identifier ? e.identifier : 0,
        t = (function (e) {
          return Oe[e] || null;
        })(n);
      return (
        null === t && (t = K(n, e)),
        (t.last.x = t.end.x),
        (t.last.y = t.end.y),
        (t.end.x = e.pageX || e.clientX),
        (t.end.y = e.pageY || e.clientY),
        t
      );
    }
    function ee(e) {
      if (Ee[e]) return Ee[e].distance;
    }
    function ne(e) {
      return { direction: e, distance: 0 };
    }
    function te() {
      return De - Me;
    }
    function re(e, n) {
      var t = Math.abs(e.x - n.x),
        r = Math.abs(e.y - n.y);
      return Math.round(Math.sqrt(t * t + r * r));
    }
    function ie(e, n) {
      if (((a = n), (t = e).x == a.x && t.y == a.y)) return s;
      var t,
        a,
        u = (function (e, n) {
          var t = e.x - n.x,
            r = n.y - e.y,
            i = Math.atan2(r, t),
            l = Math.round((180 * i) / Math.PI);
          return l < 0 && (l = 360 - Math.abs(l)), l;
        })(e, n);
      return (u <= 45 && u >= 0) || (u <= 360 && u >= 315)
        ? r
        : u >= 135 && u <= 225
        ? i
        : u > 45 && u < 135
        ? o
        : l;
    }
    function le() {
      return new Date().getTime();
    }
    t = e.extend({}, t);
    var oe = S || M || !t.fallbackToMouseEvents,
      ae = oe
        ? M
          ? O
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      ue = oe
        ? M
          ? O
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      se = oe
        ? M
          ? O
            ? "MSPointerUp"
            : "pointerup"
          : "touchend"
        : "mouseup",
      ce = oe ? (M ? "mouseleave" : null) : "mouseleave",
      pe = M ? (O ? "MSPointerCancel" : "pointercancel") : "touchcancel",
      he = 0,
      fe = null,
      de = null,
      ge = 0,
      we = 0,
      ve = 0,
      Te = 1,
      be = 0,
      ye = 0,
      Ee = null,
      me = e(n),
      xe = "start",
      Se = 0,
      Oe = {},
      Me = 0,
      De = 0,
      Pe = 0,
      Le = 0,
      Re = 0,
      ke = null,
      Ae = null;
    try {
      me.bind(ae, P), me.bind(pe, k);
    } catch (n) {
      e.error("events not supported " + ae + "," + pe + " on jQuery.swipe");
    }
    (this.enable = function () {
      return this.disable(), me.bind(ae, P), me.bind(pe, k), me;
    }),
      (this.disable = function () {
        return I(), me;
      }),
      (this.destroy = function () {
        I(), me.data(D, null), (me = null);
      }),
      (this.option = function (n, r) {
        if ("object" == typeof n) t = e.extend(t, n);
        else if (void 0 !== t[n]) {
          if (void 0 === r) return t[n];
          t[n] = r;
        } else {
          if (!n) return t;
          e.error("Option " + n + " does not exist on jQuery.swipe.options");
        }
        return null;
      });
  }
  var r = "left",
    i = "right",
    l = "up",
    o = "down",
    a = "in",
    u = "out",
    s = "none",
    c = "auto",
    p = "swipe",
    h = "pinch",
    f = "tap",
    d = "doubletap",
    g = "longtap",
    w = "horizontal",
    v = "vertical",
    T = "all",
    b = 10,
    y = "start",
    E = "move",
    m = "end",
    x = "cancel",
    S = "ontouchstart" in window,
    O =
      window.navigator.msPointerEnabled &&
      !window.navigator.pointerEnabled &&
      !S,
    M =
      (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) &&
      !S,
    D = "TouchSwipe";
  (e.fn.swipe = function (t) {
    var r = e(this),
      i = r.data(D);
    if (i && "string" == typeof t) {
      if (i[t]) return i[t].apply(i, Array.prototype.slice.call(arguments, 1));
      e.error("Method " + t + " does not exist on jQuery.swipe");
    } else if (i && "object" == typeof t) i.option.apply(i, arguments);
    else if (!(i || ("object" != typeof t && t)))
      return n.apply(this, arguments);
    return r;
  }),
    (e.fn.swipe.version = "1.6.18"),
    (e.fn.swipe.defaults = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
      preventDefaultEvents: !0,
    }),
    (e.fn.swipe.phases = {
      PHASE_START: y,
      PHASE_MOVE: E,
      PHASE_END: m,
      PHASE_CANCEL: x,
    }),
    (e.fn.swipe.directions = {
      LEFT: r,
      RIGHT: i,
      UP: l,
      DOWN: o,
      IN: a,
      OUT: u,
    }),
    (e.fn.swipe.pageScroll = { NONE: s, HORIZONTAL: w, VERTICAL: v, AUTO: c }),
    (e.fn.swipe.fingers = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      ALL: T,
    });
});
