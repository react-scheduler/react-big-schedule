var Qt = Object.defineProperty;
var Kt = (C, e, t) => e in C ? Qt(C, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : C[e] = t;
var P = (C, e, t) => (Kt(C, typeof e != "symbol" ? e + "" : e, t), t);
import Ye, { Component as ke, createElement as be, useState as Me } from "react";
import p, { PropTypes as z } from "prop-types";
import { Row as we, Col as de, Popover as Fe, Radio as ut, Calendar as Jt, Space as it, Spin as at } from "antd";
import { DragSource as Zt, DropTarget as er, DndProvider as tr } from "react-dnd";
import { MinusSquareOutlined as rr, PlusSquareOutlined as nr, CloseOutlined as sr, LeftOutlined as ir, RightOutlined as ar } from "@ant-design/icons";
import { rrulestr as Ae, RRuleSet as or } from "rrule";
import { HTML5Backend as lr } from "react-dnd-html5-backend";
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oe(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var ze = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot;
function cr() {
  if (ot)
    return Ce;
  ot = 1;
  var C = Ye, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(o, l, u) {
    var c, f = {}, h = null, g = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (c in l)
      r.call(l, c) && !s.hasOwnProperty(c) && (f[c] = l[c]);
    if (o && o.defaultProps)
      for (c in l = o.defaultProps, l)
        f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: e, type: o, key: h, ref: g, props: f, _owner: n.current };
  }
  return Ce.Fragment = t, Ce.jsx = i, Ce.jsxs = i, Ce;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function dr() {
  return lt || (lt = 1, process.env.NODE_ENV !== "production" && function() {
    var C = Ye, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), D = Symbol.iterator, m = "@@iterator";
    function w(a) {
      if (a === null || typeof a != "object")
        return null;
      var E = D && a[D] || a[m];
      return typeof E == "function" ? E : null;
    }
    var T = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(a) {
      {
        for (var E = arguments.length, I = new Array(E > 1 ? E - 1 : 0), L = 1; L < E; L++)
          I[L - 1] = arguments[L];
        M("error", a, I);
      }
    }
    function M(a, E, I) {
      {
        var L = T.ReactDebugCurrentFrame, X = L.getStackAddendum();
        X !== "" && (E += "%s", I = I.concat([X]));
        var Z = I.map(function(B) {
          return String(B);
        });
        Z.unshift("Warning: " + E), Function.prototype.apply.call(console[a], console, Z);
      }
    }
    var A = !1, $ = !1, H = !1, N = !1, Y = !1, k;
    k = Symbol.for("react.module.reference");
    function S(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === s || Y || a === n || a === u || a === c || N || a === g || A || $ || H || typeof a == "object" && a !== null && (a.$$typeof === h || a.$$typeof === f || a.$$typeof === i || a.$$typeof === o || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === k || a.getModuleId !== void 0));
    }
    function G(a, E, I) {
      var L = a.displayName;
      if (L)
        return L;
      var X = E.displayName || E.name || "";
      return X !== "" ? I + "(" + X + ")" : I;
    }
    function J(a) {
      return a.displayName || "Context";
    }
    function R(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case n:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case o:
            var E = a;
            return J(E) + ".Consumer";
          case i:
            var I = a;
            return J(I._context) + ".Provider";
          case l:
            return G(a, a.render, "ForwardRef");
          case f:
            var L = a.displayName || null;
            return L !== null ? L : R(a.type) || "Memo";
          case h: {
            var X = a, Z = X._payload, B = X._init;
            try {
              return R(B(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, y = 0, j, v, _, W, F, Q, K;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function ae() {
      {
        if (y === 0) {
          j = console.log, v = console.info, _ = console.warn, W = console.error, F = console.group, Q = console.groupCollapsed, K = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        y++;
      }
    }
    function se() {
      {
        if (y--, y === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, a, {
              value: j
            }),
            info: x({}, a, {
              value: v
            }),
            warn: x({}, a, {
              value: _
            }),
            error: x({}, a, {
              value: W
            }),
            group: x({}, a, {
              value: F
            }),
            groupCollapsed: x({}, a, {
              value: Q
            }),
            groupEnd: x({}, a, {
              value: K
            })
          });
        }
        y < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = T.ReactCurrentDispatcher, he;
    function ue(a, E, I) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (X) {
            var L = X.stack.trim().match(/\n( *(at )?)/);
            he = L && L[1] || "";
          }
        return `
` + he + a;
      }
    }
    var ne = !1, oe;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new xe();
    }
    function De(a, E) {
      if (!a || ne)
        return "";
      {
        var I = oe.get(a);
        if (I !== void 0)
          return I;
      }
      var L;
      ne = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = le.current, le.current = null, ae();
      try {
        if (E) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (fe) {
              L = fe;
            }
            Reflect.construct(a, [], B);
          } else {
            try {
              B.call();
            } catch (fe) {
              L = fe;
            }
            a.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            L = fe;
          }
          a();
        }
      } catch (fe) {
        if (fe && L && typeof fe.stack == "string") {
          for (var q = fe.stack.split(`
`), ie = L.stack.split(`
`), te = q.length - 1, re = ie.length - 1; te >= 1 && re >= 0 && q[te] !== ie[re]; )
            re--;
          for (; te >= 1 && re >= 0; te--, re--)
            if (q[te] !== ie[re]) {
              if (te !== 1 || re !== 1)
                do
                  if (te--, re--, re < 0 || q[te] !== ie[re]) {
                    var ce = `
` + q[te].replace(" at new ", " at ");
                    return a.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", a.displayName)), typeof a == "function" && oe.set(a, ce), ce;
                  }
                while (te >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        ne = !1, le.current = Z, se(), Error.prepareStackTrace = X;
      }
      var Ee = a ? a.displayName || a.name : "", st = Ee ? ue(Ee) : "";
      return typeof a == "function" && oe.set(a, st), st;
    }
    function jt(a, E, I) {
      return De(a, !1);
    }
    function It(a) {
      var E = a.prototype;
      return !!(E && E.isReactComponent);
    }
    function je(a, E, I) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return De(a, It(a));
      if (typeof a == "string")
        return ue(a);
      switch (a) {
        case u:
          return ue("Suspense");
        case c:
          return ue("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return jt(a.render);
          case f:
            return je(a.type, E, I);
          case h: {
            var L = a, X = L._payload, Z = L._init;
            try {
              return je(Z(X), E, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Ve = {}, Ue = T.ReactDebugCurrentFrame;
    function _e(a) {
      if (a) {
        var E = a._owner, I = je(a.type, a._source, E ? E.type : null);
        Ue.setExtraStackFrame(I);
      } else
        Ue.setExtraStackFrame(null);
    }
    function _t(a, E, I, L, X) {
      {
        var Z = Function.call.bind(Ie);
        for (var B in a)
          if (Z(a, B)) {
            var q = void 0;
            try {
              if (typeof a[B] != "function") {
                var ie = Error((L || "React class") + ": " + I + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              q = a[B](E, B, L, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              q = te;
            }
            q && !(q instanceof Error) && (_e(X), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", I, B, typeof q), _e(null)), q instanceof Error && !(q.message in Ve) && (Ve[q.message] = !0, _e(X), b("Failed %s type: %s", I, q.message), _e(null));
          }
      }
    }
    var Mt = Array.isArray;
    function He(a) {
      return Mt(a);
    }
    function kt(a) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, I = E && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return I;
      }
    }
    function Wt(a) {
      try {
        return Ge(a), !1;
      } catch {
        return !0;
      }
    }
    function Ge(a) {
      return "" + a;
    }
    function Xe(a) {
      if (Wt(a))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kt(a)), Ge(a);
    }
    var Se = T.ReactCurrentOwner, Ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, Ke, $e;
    $e = {};
    function Ht(a) {
      if (Ie.call(a, "ref")) {
        var E = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function $t(a) {
      if (Ie.call(a, "key")) {
        var E = Object.getOwnPropertyDescriptor(a, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Pt(a, E) {
      if (typeof a.ref == "string" && Se.current && E && Se.current.stateNode !== E) {
        var I = R(Se.current.type);
        $e[I] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(Se.current.type), a.ref), $e[I] = !0);
      }
    }
    function Lt(a, E) {
      {
        var I = function() {
          Qe || (Qe = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        I.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function Nt(a, E) {
      {
        var I = function() {
          Ke || (Ke = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        I.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var At = function(a, E, I, L, X, Z, B) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: a,
        key: E,
        ref: I,
        props: B,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function zt(a, E, I, L, X) {
      {
        var Z, B = {}, q = null, ie = null;
        I !== void 0 && (Xe(I), q = "" + I), $t(E) && (Xe(E.key), q = "" + E.key), Ht(E) && (ie = E.ref, Pt(E, X));
        for (Z in E)
          Ie.call(E, Z) && !Ot.hasOwnProperty(Z) && (B[Z] = E[Z]);
        if (a && a.defaultProps) {
          var te = a.defaultProps;
          for (Z in te)
            B[Z] === void 0 && (B[Z] = te[Z]);
        }
        if (q || ie) {
          var re = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          q && Lt(B, re), ie && Nt(B, re);
        }
        return At(a, q, ie, X, L, Se.current, B);
      }
    }
    var Pe = T.ReactCurrentOwner, Je = T.ReactDebugCurrentFrame;
    function ye(a) {
      if (a) {
        var E = a._owner, I = je(a.type, a._source, E ? E.type : null);
        Je.setExtraStackFrame(I);
      } else
        Je.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function Ne(a) {
      return typeof a == "object" && a !== null && a.$$typeof === e;
    }
    function Ze() {
      {
        if (Pe.current) {
          var a = R(Pe.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Yt(a) {
      {
        if (a !== void 0) {
          var E = a.fileName.replace(/^.*[\\\/]/, ""), I = a.lineNumber;
          return `

Check your code at ` + E + ":" + I + ".";
        }
        return "";
      }
    }
    var et = {};
    function Ft(a) {
      {
        var E = Ze();
        if (!E) {
          var I = typeof a == "string" ? a : a.displayName || a.name;
          I && (E = `

Check the top-level render call using <` + I + ">.");
        }
        return E;
      }
    }
    function tt(a, E) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var I = Ft(E);
        if (et[I])
          return;
        et[I] = !0;
        var L = "";
        a && a._owner && a._owner !== Pe.current && (L = " It was passed a child from " + R(a._owner.type) + "."), ye(a), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, L), ye(null);
      }
    }
    function rt(a, E) {
      {
        if (typeof a != "object")
          return;
        if (He(a))
          for (var I = 0; I < a.length; I++) {
            var L = a[I];
            Ne(L) && tt(L, E);
          }
        else if (Ne(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var X = w(a);
          if (typeof X == "function" && X !== a.entries)
            for (var Z = X.call(a), B; !(B = Z.next()).done; )
              Ne(B.value) && tt(B.value, E);
        }
      }
    }
    function qt(a) {
      {
        var E = a.type;
        if (E == null || typeof E == "string")
          return;
        var I;
        if (typeof E == "function")
          I = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === f))
          I = E.propTypes;
        else
          return;
        if (I) {
          var L = R(E);
          _t(I, a.props, "prop", L, a);
        } else if (E.PropTypes !== void 0 && !Le) {
          Le = !0;
          var X = R(E);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(a) {
      {
        for (var E = Object.keys(a.props), I = 0; I < E.length; I++) {
          var L = E[I];
          if (L !== "children" && L !== "key") {
            ye(a), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), ye(null);
            break;
          }
        }
        a.ref !== null && (ye(a), b("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function nt(a, E, I, L, X, Z) {
      {
        var B = S(a);
        if (!B) {
          var q = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Yt(X);
          ie ? q += ie : q += Ze();
          var te;
          a === null ? te = "null" : He(a) ? te = "array" : a !== void 0 && a.$$typeof === e ? (te = "<" + (R(a.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : te = typeof a, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, q);
        }
        var re = zt(a, E, I, X, Z);
        if (re == null)
          return re;
        if (B) {
          var ce = E.children;
          if (ce !== void 0)
            if (L)
              if (He(ce)) {
                for (var Ee = 0; Ee < ce.length; Ee++)
                  rt(ce[Ee], a);
                Object.freeze && Object.freeze(ce);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rt(ce, a);
        }
        return a === r ? Bt(re) : qt(re), re;
      }
    }
    function Vt(a, E, I) {
      return nt(a, E, I, !0);
    }
    function Ut(a, E, I) {
      return nt(a, E, I, !1);
    }
    var Gt = Ut, Xt = Vt;
    Re.Fragment = r, Re.jsx = Gt, Re.jsxs = Xt;
  }()), Re;
}
process.env.NODE_ENV === "production" ? ze.exports = cr() : ze.exports = dr();
var d = ze.exports;
const qe = ({
  schedulerData: C,
  eventItem: e,
  title: t,
  startTime: r,
  endTime: n,
  statusColor: s,
  subtitleGetter: i,
  viewEventClick: o,
  viewEventText: l,
  viewEvent2Click: u,
  viewEvent2Text: c,
  eventItemPopoverTemplateResolver: f
}) => {
  const { localeDayjs: h, config: g } = C, D = h(new Date(r)), m = h(new Date(n));
  if (f)
    return f(C, e, t, D, m, s);
  const w = i ? i(C, e) : null, T = l && o && (e.clickable1 === void 0 || e.clickable1), b = c && u && (e.clickable2 === void 0 || e.clickable2), M = () => /* @__PURE__ */ d.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer" }, onClick: () => o(C, e), children: l }), A = () => /* @__PURE__ */ d.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer", marginLeft: "16px" }, onClick: () => u(C, e), children: c });
  return /* @__PURE__ */ d.jsxs("div", { style: { width: g.eventItemPopoverWidth }, children: [
    /* @__PURE__ */ d.jsxs(we, { type: "flex", align: "middle", children: [
      g.eventItemPopoverShowColor && /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("div", { className: "status-dot", style: { backgroundColor: s } }) }),
      /* @__PURE__ */ d.jsx(de, { span: 22, className: "overflow-text", children: /* @__PURE__ */ d.jsx("span", { className: "header2-text", title: t, children: `${t}` }) })
    ] }),
    w && /* @__PURE__ */ d.jsxs(we, { type: "flex", align: "middle", children: [
      /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("div", {}) }),
      /* @__PURE__ */ d.jsx(de, { span: 22, className: "overflow-text", children: /* @__PURE__ */ d.jsx("span", { className: "header2-text", title: w, children: w }) })
    ] }),
    /* @__PURE__ */ d.jsxs(we, { type: "flex", align: "middle", children: [
      /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("div", {}) }),
      /* @__PURE__ */ d.jsxs(de, { span: 22, children: [
        /* @__PURE__ */ d.jsx("span", { className: "header1-text", children: D.format("HH:mm") }),
        g.eventItemPopoverDateFormat && /* @__PURE__ */ d.jsx("span", { className: "help-text", style: { marginLeft: "8px" }, children: D.format(g.eventItemPopoverDateFormat) }),
        /* @__PURE__ */ d.jsx("span", { className: "header2-text", style: { marginLeft: "8px" }, children: "-" }),
        /* @__PURE__ */ d.jsx("span", { className: "header1-text", style: { marginLeft: "8px" }, children: m.format("HH:mm") }),
        g.eventItemPopoverDateFormat && /* @__PURE__ */ d.jsx("span", { className: "help-text", style: { marginLeft: "8px" }, children: m.format(g.eventItemPopoverDateFormat) })
      ] })
    ] }),
    (T || b) && /* @__PURE__ */ d.jsxs(we, { type: "flex", align: "middle", children: [
      /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("div", {}) }),
      /* @__PURE__ */ d.jsxs(de, { span: 22, children: [
        T && M(),
        b && A()
      ] })
    ] })
  ] });
};
qe.propTypes = {
  schedulerData: p.object.isRequired,
  eventItem: p.object.isRequired,
  title: p.string.isRequired,
  startTime: p.string.isRequired,
  endTime: p.string.isRequired,
  statusColor: p.string.isRequired,
  subtitleGetter: p.func,
  viewEventClick: p.func,
  viewEventText: p.string,
  viewEvent2Click: p.func,
  viewEvent2Text: p.string,
  eventItemPopoverTemplateResolver: p.func
};
const me = "YYYY-MM-DD", V = "YYYY-MM-DD HH:mm:ss", O = { Day: 0, Week: 1, Month: 2, Quarter: 3, Year: 4, Custom: 5, Custom1: 6, Custom2: 7 }, U = { Day: 0, Hour: 1, Week: 2, Month: 3, Year: 4 }, ve = { Top: 0, TopRight: 1, TopLeft: 2, Bottom: 3, BottomRight: 4, BottomLeft: 5 }, pe = { EVENT: "event" };
class Be extends ke {
  constructor(t) {
    super(t);
    P(this, "initStartDrag", (t) => {
      const { schedulerData: r, eventItem: n } = this.props;
      let s = r._getEventSlotId(n), i = r.getSlotById(s);
      if (i && i.groupOnly || r._isResizing())
        return;
      t.stopPropagation();
      let o = 0;
      if (this.supportTouch) {
        if (t.changedTouches.length == 0)
          return;
        o = t.changedTouches[0].pageX;
      } else {
        if (t.buttons !== void 0 && t.buttons !== 1)
          return;
        o = t.clientX;
      }
      this.setState({
        startX: o
      }), r._startResizing(), this.supportTouch ? (this.startResizer.addEventListener("touchmove", this.doStartDrag, !1), this.startResizer.addEventListener("touchend", this.stopStartDrag, !1), this.startResizer.addEventListener("touchcancel", this.cancelStartDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doStartDrag, !1), document.documentElement.addEventListener("mouseup", this.stopStartDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    P(this, "doStartDrag", (t) => {
      t.stopPropagation();
      let r = 0;
      if (this.supportTouch) {
        if (t.changedTouches.length == 0)
          return;
        r = t.changedTouches[0].pageX;
      } else
        r = t.clientX;
      const { left: n, width: s, leftIndex: i, rightIndex: o, schedulerData: l } = this.props;
      let u = l.getContentCellWidth(), c = i > 0 ? 5 : 6, f = u - c, h = o * u - c;
      const { startX: g } = this.state;
      let D = n + r - g, m = s + g - r;
      m < f ? (m = f, D = (o - 1) * u + (o - 1 > 0 ? 2 : 3)) : m > h && (m = h, D = 3), this.setState({ left: D, width: m });
    });
    P(this, "stopStartDrag", (t) => {
      t.stopPropagation(), this.supportTouch ? (this.startResizer.removeEventListener("touchmove", this.doStartDrag, !1), this.startResizer.removeEventListener("touchend", this.stopStartDrag, !1), this.startResizer.removeEventListener("touchcancel", this.cancelStartDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doStartDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopStartDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      const { width: r, left: n, top: s, leftIndex: i, rightIndex: o, schedulerData: l, eventItem: u, updateEventStart: c, conflictOccurred: f } = this.props;
      if (l._stopResizing(), this.state.width === r)
        return;
      let h = 0;
      if (this.supportTouch) {
        if (t.changedTouches.length == 0) {
          this.setState({
            left: n,
            top: s,
            width: r
          });
          return;
        }
        h = t.changedTouches[0].pageX;
      } else
        h = t.clientX;
      const { cellUnit: g, events: D, config: m, localeDayjs: w } = l;
      let T = l.getContentCellWidth(), b = i > 0 ? 5 : 6, M = T - b, A = o * T - b;
      const { startX: $ } = this.state;
      let H = r + $ - h, N = h - $, Y = N < 0 ? -1 : N === 0 ? 0 : 1, k = (Y > 0 ? Math.floor(Math.abs(N) / T) : Math.ceil(Math.abs(N) / T)) * Y;
      H < M ? k = o - i - 1 : H > A && (k = -i);
      let S = w(new Date(u.start)).add(g === U.Hour ? k * m.minuteStep : k, g === U.Hour ? "minutes" : "days").format(V);
      if (k !== 0 && g !== U.Hour && m.displayWeekend === !1)
        if (k > 0) {
          let y = 0, j = 0;
          for (; ; ) {
            j++;
            let v = w(new Date(u.start)).add(j, "days"), _ = v.weekday();
            if (_ !== 0 && _ !== 6 && (y++, y === k)) {
              S = v.format(V);
              break;
            }
          }
        } else {
          let y = 0, j = 0;
          for (; ; ) {
            j--;
            let v = w(new Date(u.start)).add(j, "days"), _ = v.weekday();
            if (_ !== 0 && _ !== 6 && (y--, y === k)) {
              S = v.format(V);
              break;
            }
          }
        }
      let G = !1, J = l._getEventSlotId(u), R, x = l.getSlotById(J);
      if (x && (R = x.name), m.checkConflict) {
        let y = w(new Date(S)), j = w(new Date(u.end));
        D.forEach((v) => {
          if (l._getEventSlotId(v) === J && v.id !== u.id) {
            let _ = w(new Date(v.start)), W = w(new Date(v.end));
            (y >= _ && y < W || j > _ && j <= W || _ >= y && _ < j || W > y && W <= j) && (G = !0);
          }
        });
      }
      G ? (this.setState({
        left: n,
        top: s,
        width: r
      }), f != null ? f(l, "StartResize", u, pe.EVENT, J, R, S, u.end) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it"), this.subscribeResizeEvent(this.props)) : c != null && c(l, u, S);
    });
    P(this, "cancelStartDrag", (t) => {
      t.stopPropagation(), this.startResizer.removeEventListener("touchmove", this.doStartDrag, !1), this.startResizer.removeEventListener("touchend", this.stopStartDrag, !1), this.startResizer.removeEventListener("touchcancel", this.cancelStartDrag, !1), document.onselectstart = null, document.ondragstart = null;
      const { schedulerData: r, left: n, top: s, width: i } = this.props;
      r._stopResizing(), this.setState({
        left: n,
        top: s,
        width: i
      });
    });
    P(this, "initEndDrag", (t) => {
      const { schedulerData: r, eventItem: n } = this.props;
      let s = r._getEventSlotId(n), i = r.getSlotById(s);
      if (i && i.groupOnly || r._isResizing())
        return;
      t.stopPropagation();
      let o = 0;
      if (this.supportTouch) {
        if (t.changedTouches.length == 0)
          return;
        o = t.changedTouches[0].pageX;
      } else {
        if (t.buttons !== void 0 && t.buttons !== 1)
          return;
        o = t.clientX;
      }
      this.setState({
        endX: o
      }), r._startResizing(), this.supportTouch ? (this.endResizer.addEventListener("touchmove", this.doEndDrag, !1), this.endResizer.addEventListener("touchend", this.stopEndDrag, !1), this.endResizer.addEventListener("touchcancel", this.cancelEndDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doEndDrag, !1), document.documentElement.addEventListener("mouseup", this.stopEndDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    P(this, "doEndDrag", (t) => {
      t.stopPropagation();
      let r = 0;
      if (this.supportTouch) {
        if (t.changedTouches.length == 0)
          return;
        r = t.changedTouches[0].pageX;
      } else
        r = t.clientX;
      const { width: n, leftIndex: s, schedulerData: i } = this.props, { headers: o } = i;
      let l = i.getContentCellWidth(), u = s > 0 ? 5 : 6, c = l - u, f = (o.length - s) * l - u;
      const { endX: h } = this.state;
      let g = n + r - h;
      g < c ? g = c : g > f && (g = f), this.setState({ width: g });
    });
    P(this, "stopEndDrag", (t) => {
      t.stopPropagation(), this.supportTouch ? (this.endResizer.removeEventListener("touchmove", this.doEndDrag, !1), this.endResizer.removeEventListener("touchend", this.stopEndDrag, !1), this.endResizer.removeEventListener("touchcancel", this.cancelEndDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doEndDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopEndDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      const { width: r, left: n, top: s, leftIndex: i, rightIndex: o, schedulerData: l, eventItem: u, updateEventEnd: c, conflictOccurred: f } = this.props;
      if (l._stopResizing(), this.state.width === r)
        return;
      let h = 0;
      if (this.supportTouch) {
        if (t.changedTouches.length == 0) {
          this.setState({
            left: n,
            top: s,
            width: r
          });
          return;
        }
        h = t.changedTouches[0].pageX;
      } else
        h = t.clientX;
      const { headers: g, cellUnit: D, events: m, config: w, localeDayjs: T } = l;
      let b = l.getContentCellWidth(), M = i > 0 ? 5 : 6, A = b - M, $ = (g.length - i) * b - M;
      const { endX: H } = this.state;
      let N = r + h - H, Y = N - r, k = Y < 0 ? -1 : Y === 0 ? 0 : 1, S = (k < 0 ? Math.floor(Math.abs(Y) / b) : Math.ceil(Math.abs(Y) / b)) * k;
      N < A ? S = i - o + 1 : N > $ && (S = g.length - o);
      let G = T(new Date(u.end)).add(D === U.Hour ? S * w.minuteStep : S, D === U.Hour ? "minutes" : "days").format(V);
      if (S !== 0 && D !== U.Hour && w.displayWeekend === !1)
        if (S > 0) {
          let j = 0, v = 0;
          for (; ; ) {
            v++;
            let _ = T(new Date(u.end)).add(v, "days"), W = _.weekday();
            if (W !== 0 && W !== 6 && (j++, j === S)) {
              G = _.format(V);
              break;
            }
          }
        } else {
          let j = 0, v = 0;
          for (; ; ) {
            v--;
            let _ = T(new Date(u.end)).add(v, "days"), W = _.weekday();
            if (W !== 0 && W !== 6 && (j--, j === S)) {
              G = _.format(V);
              break;
            }
          }
        }
      let J = !1, R = l._getEventSlotId(u), x, y = l.getSlotById(R);
      if (y && (x = y.name), w.checkConflict) {
        let j = T(new Date(u.start)), v = T(new Date(G));
        m.forEach((_) => {
          if (l._getEventSlotId(_) === R && _.id !== u.id) {
            let W = T(new Date(_.start)), F = T(new Date(_.end));
            (j >= W && j < F || v > W && v <= F || W >= j && W < v || F > j && F <= v) && (J = !0);
          }
        });
      }
      J ? (this.setState({
        left: n,
        top: s,
        width: r
      }), f != null ? f(l, "EndResize", u, pe.EVENT, R, x, u.start, G) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it"), this.subscribeResizeEvent(this.props)) : c != null && c(l, u, G);
    });
    P(this, "cancelEndDrag", (t) => {
      t.stopPropagation(), this.endResizer.removeEventListener("touchmove", this.doEndDrag, !1), this.endResizer.removeEventListener("touchend", this.stopEndDrag, !1), this.endResizer.removeEventListener("touchcancel", this.cancelEndDrag, !1), document.onselectstart = null, document.ondragstart = null;
      const { schedulerData: r, left: n, top: s, width: i } = this.props;
      r._stopResizing(), this.setState({
        left: n,
        top: s,
        width: i
      });
    });
    P(this, "handleMouseMove", (t) => {
      const r = this.eventItemRef.current.getBoundingClientRect();
      this.setState({
        contentMousePosX: t.clientX,
        eventItemLeftRect: r.left,
        eventItemRightRect: r.right
      });
    });
    P(this, "startResizable", (t) => {
      const { eventItem: r, isInPopover: n, schedulerData: s } = t, { config: i } = s;
      return i.startResizable === !0 && n === !1 && (r.resizable == null || r.resizable !== !1) && (r.startResizable == null || r.startResizable !== !1);
    });
    P(this, "endResizable", (t) => {
      const { eventItem: r, isInPopover: n, schedulerData: s } = t, { config: i } = s;
      return i.endResizable === !0 && n === !1 && (r.resizable == null || r.resizable !== !1) && (r.endResizable == null || r.endResizable !== !1);
    });
    P(this, "subscribeResizeEvent", (t) => {
      this.startResizer != null && (this.supportTouch || (this.startResizer.removeEventListener("mousedown", this.initStartDrag, !1), this.startResizable(t) && this.startResizer.addEventListener("mousedown", this.initStartDrag, !1))), this.endResizer != null && (this.supportTouch || (this.endResizer.removeEventListener("mousedown", this.initEndDrag, !1), this.endResizable(t) && this.endResizer.addEventListener("mousedown", this.initEndDrag, !1)));
    });
    const { left: r, top: n, width: s } = t;
    this.state = {
      left: r,
      top: n,
      width: s,
      contentMousePosX: 0,
      eventItemLeftRect: 0,
      eventItemRightRect: 0
    }, this.startResizer = null, this.endResizer = null, this.supportTouch = !1, this.eventItemRef = Ye.createRef(), this._isMounted = !1;
  }
  componentDidUpdate(t, r) {
    if (t !== this.props) {
      const { left: n, top: s, width: i } = this.props;
      this.setState({
        left: n,
        top: s,
        width: i
      }), this.subscribeResizeEvent(this.props);
    }
  }
  componentDidMount() {
    this._isMounted = !0, this.supportTouch = "ontouchstart" in window, this.subscribeResizeEvent(this.props);
  }
  render() {
    const { eventItem: t, isStart: r, isEnd: n, isInPopover: s, eventItemClick: i, schedulerData: o, isDragging: l, connectDragSource: u, connectDragPreview: c, eventItemTemplateResolver: f } = this.props, { config: h, localeDayjs: g } = o, { left: D, width: m, top: w } = this.state;
    let T = r ? n ? "round-all" : "round-head" : n ? "round-tail" : "round-none", b = h.defaultEventBgColor;
    const M = h.eventItemPopoverPlacement, A = /(top|bottom)(Right|Left)MousePosition/.test(M);
    t.bgColor && (b = t.bgColor);
    let $ = o.behaviors.getEventTextFunc(o, t), H = /* @__PURE__ */ d.jsx(qe, { ...this.props, eventItem: t, title: t.title, startTime: t.start, endTime: t.end, statusColor: b }), N = g(new Date(t.start)), Y = s ? `${N.format("HH:mm")} ${$}` : $, k = /* @__PURE__ */ d.jsx("div", {});
    this.startResizable(this.props) && (k = /* @__PURE__ */ d.jsx("div", { className: "event-resizer event-start-resizer", ref: (v) => this.startResizer = v }));
    let S = /* @__PURE__ */ d.jsx("div", {});
    this.endResizable(this.props) && (S = /* @__PURE__ */ d.jsx("div", { className: "event-resizer event-end-resizer", ref: (v) => this.endResizer = v }));
    let G = /* @__PURE__ */ d.jsx("div", { className: T + " event-item", style: { height: h.eventItemHeight, backgroundColor: b }, children: /* @__PURE__ */ d.jsx("span", { style: { marginLeft: "10px", lineHeight: `${h.eventItemHeight}px` }, children: Y }) }, t.id);
    f != null && (G = f(o, t, b, r, n, "event-item", h.eventItemHeight, void 0));
    let J = /* @__PURE__ */ d.jsxs(
      "a",
      {
        className: "timeline-event",
        ref: this.eventItemRef,
        onMouseMove: A ? this.handleMouseMove : void 0,
        style: { left: D, width: m, top: w },
        onClick: () => {
          i && i(o, t);
        },
        children: [
          G,
          k,
          S
        ]
      }
    );
    const R = () => {
      let v = 0, _ = "";
      if (A) {
        const W = M.includes("Left"), F = this.state.contentMousePosX, Q = h.eventItemPopoverWidth, K = this.state.eventItemLeftRect, ee = this.state.eventItemRightRect;
        let ae = W ? K : ee, se = W ? 1 : -1;
        _ = M.replace("MousePosition", "");
        const le = 10;
        W && this._isMounted ? F + Q + le > window.innerWidth && (_ = `${M.replace(/(Right|Left).*/, "")}Right`, ae = ee, se = -1) : F - Q - le < 0 && (_ = `${M.replace(/(Right|Left).*/, "")}Left`, ae = K, se = 1), v = F - ae - 20 * se;
      }
      return {
        popoverOffsetX: v,
        mousePositionPlacement: _
      };
    }, { popoverOffsetX: x, mousePositionPlacement: y } = R(), j = h.dragAndDropEnabled ? c(u(J)) : J;
    return l ? null : o._isResizing() || h.eventItemPopoverEnabled == !1 || t.showPopover == !1 ? /* @__PURE__ */ d.jsx("div", { children: j }) : /* @__PURE__ */ d.jsx(
      Fe,
      {
        transitionName: A ? "" : void 0,
        align: A ? {
          offset: [x, M.includes("top") ? -10 : 10],
          overflow: {
            // shiftX: true,
            // shiftY: true,
          }
        } : void 0,
        placement: A ? y : M,
        content: H,
        trigger: h.eventItemPopoverTrigger,
        children: j
      }
    );
  }
}
P(Be, "propTypes", {
  schedulerData: z.object.isRequired,
  eventItem: z.object.isRequired,
  isStart: z.bool.isRequired,
  isEnd: z.bool.isRequired,
  left: z.number.isRequired,
  width: z.number.isRequired,
  top: z.number.isRequired,
  isInPopover: z.bool.isRequired,
  leftIndex: z.number.isRequired,
  rightIndex: z.number.isRequired,
  isDragging: z.bool,
  connectDragSource: z.func,
  connectDragPreview: z.func,
  updateEventStart: z.func,
  updateEventEnd: z.func,
  moveEvent: z.func,
  subtitleGetter: z.func,
  eventItemClick: z.func,
  viewEventClick: z.func,
  viewEventText: z.string,
  viewEvent2Click: z.func,
  viewEvent2Text: z.string,
  conflictOccurred: z.func,
  eventItemTemplateResolver: z.func
});
class ht {
  constructor(e, t, r, n = pe.EVENT) {
    P(this, "getDragSpec", () => ({
      beginDrag: (e, t, r) => this.resolveDragObjFunc(e),
      endDrag: (e, t, r) => {
        if (!t.didDrop())
          return;
        const { moveEvent: n, newEvent: s, schedulerData: i } = e, { events: o, config: l, viewType: u, localeDayjs: c } = i, f = t.getItem(), h = t.getItemType(), g = t.getDropResult();
        let D = g.slotId, m = g.slotName, w = g.start, T = g.end, b = g.initialStart;
        g.initialEnd;
        let M = "New", A = h === pe.EVENT;
        if (A) {
          const H = f;
          if (l.relativeMove)
            w = c(H.start).add(c(w).diff(c(new Date(b))), "ms").format(V);
          else if (u !== O.Day) {
            let N = c(w);
            w = c(H.start).year(N.year()).month(N.month()).date(N.date()).format(V);
          }
          if (T = c(w).add(c(H.end).diff(c(H.start)), "ms").format(V), l.crossResourceMove === !1) {
            D = i._getEventSlotId(f), m = void 0;
            let N = i.getSlotById(D);
            N && (m = N.name);
          }
          M = "Move";
        }
        let $ = !1;
        if (l.checkConflict) {
          let H = c(w), N = c(T);
          o.forEach((Y) => {
            if (i._getEventSlotId(Y) === D && (!A || Y.id !== f.id)) {
              let k = c(Y.start), S = c(Y.end);
              (H >= k && H < S || N > k && N <= S || k >= H && k < N || S > H && S <= N) && ($ = !0);
            }
          });
        }
        if ($) {
          const { conflictOccurred: H } = e;
          H != null ? H(i, M, f, h, D, m, w, T) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it");
        } else
          A ? n !== void 0 && n(i, f, D, m, w, T) : s !== void 0 && s(i, D, m, w, T, h, f);
      },
      canDrag: (e) => {
        const { schedulerData: t, resourceEvents: r } = e, n = this.resolveDragObjFunc(e);
        if (t._isResizing())
          return !1;
        const { config: s } = t;
        return s.movable && (r == null || !r.groupOnly) && (n.movable == null || n.movable !== !1);
      }
    }));
    P(this, "getDragCollect", (e, t) => ({
      connectDragSource: e.dragSource(),
      isDragging: t.isDragging(),
      connectDragPreview: e.dragPreview()
    }));
    P(this, "getDragSource", () => this.dragSource);
    this.resolveDragObjFunc = e, this.DecoratedComponent = t, this.dndType = n, this.dragSource = r ? Zt(this.dndType, this.getDragSpec(), this.getDragCollect)(this.DecoratedComponent) : this.DecoratedComponent;
  }
}
function Te(C) {
  let e = 0, t = 0, r = C;
  for (; r; )
    e += r.offsetLeft - r.scrollLeft, t += r.offsetTop - r.scrollTop, r = r.offsetParent;
  return { x: e, y: t };
}
class ur {
  constructor(e, t) {
    P(this, "getDropSpec", () => ({
      drop: (e, t, r) => {
        const { schedulerData: n, resourceEvents: s } = e, { cellUnit: i, localeDayjs: o } = n, l = t.getItemType(), u = Te(r.eventContainer);
        let c = n.getContentCellWidth(), f = null, h = null;
        if (l === pe.EVENT) {
          const T = t.getInitialClientOffset();
          let b = Math.floor((T.x - u.x) / c);
          f = s.headerItems[b].start, h = s.headerItems[b].end, i !== U.Hour && (h = o(new Date(s.headerItems[b].start)).hour(23).minute(59).second(59).format(V));
        }
        const g = t.getClientOffset();
        let D = Math.floor((g.x - u.x) / c), m = s.headerItems[D].start, w = s.headerItems[D].end;
        return i !== U.Hour && (w = o(new Date(s.headerItems[D].start)).hour(23).minute(59).second(59).format(V)), {
          slotId: s.slotId,
          slotName: s.slotName,
          start: m,
          end: w,
          initialStart: f,
          initialEnd: h
        };
      },
      hover: (e, t, r) => {
        const { schedulerData: n, resourceEvents: s, movingEvent: i } = e, { cellUnit: o, config: l, viewType: u, localeDayjs: c } = n;
        this.config = l;
        const f = t.getItem(), h = t.getItemType(), g = Te(r.eventContainer);
        let D = n.getContentCellWidth(), m = null;
        if (h === pe.EVENT) {
          const Y = t.getInitialClientOffset();
          let k = Math.floor((Y.x - g.x) / D);
          m = s.headerItems[k].start, s.headerItems[k].end, o !== U.Hour && c(new Date(s.headerItems[k].start)).hour(23).minute(59).second(59).format(V);
        }
        const w = t.getClientOffset();
        let T = Math.floor((w.x - g.x) / D);
        if (!s.headerItems[T])
          return;
        let b = s.headerItems[T].start, M = s.headerItems[T].end;
        o !== U.Hour && (M = c(new Date(s.headerItems[T].start)).hour(23).minute(59).second(59).format(V));
        let A = s.slotId, $ = s.slotName, H = "New";
        if (h === pe.EVENT) {
          const Y = f;
          if (l.relativeMove)
            b = c(Y.start).add(c(b).diff(c(new Date(m))), "ms").format(V);
          else if (u !== O.Day) {
            let k = c(b);
            b = c(Y.start).year(k.year()).month(k.month()).date(k.date()).format(V);
          }
          if (M = c(b).add(c(Y.end).diff(c(Y.start)), "ms").format(V), l.crossResourceMove === !1) {
            A = n._getEventSlotId(f), $ = void 0;
            let k = n.getSlotById(A);
            k && ($ = k.name);
          }
          H = "Move";
        }
        i && i(n, A, $, b, M, H, h, f);
      },
      canDrop: (e, t) => {
        const { schedulerData: r, resourceEvents: n } = e, s = t.getItem();
        if (r._isResizing())
          return !1;
        const { config: i } = r;
        return i.movable && !n.groupOnly && (s.movable == null || s.movable !== !1);
      }
    }));
    P(this, "getDropCollect", (e, t) => ({
      connectDropTarget: e.dropTarget(),
      isOver: t.isOver()
    }));
    P(this, "getDropTarget", (e) => e ? er([...this.sourceMap.keys()], this.getDropSpec(), this.getDropCollect)(this.DecoratedComponent) : this.DecoratedComponent);
    P(this, "getDndSource", (e = pe.EVENT) => this.sourceMap.get(e));
    this.sourceMap = /* @__PURE__ */ new Map(), e.forEach((r) => {
      this.sourceMap.set(r.dndType, r);
    }), this.DecoratedComponent = t;
  }
}
const ft = ({ schedulerData: C, contentScrollbarHeight: e, slotClickedFunc: t, slotItemTemplateResolver: r, toggleExpandFunc: n }) => {
  const { renderData: s } = C, i = C.getResourceTableWidth() - 2, o = e, l = s.filter((h) => h.render), u = (h) => {
    n && n(C, h.slotId);
  }, c = (h, g) => {
    let D = /* @__PURE__ */ d.jsx("span", { className: "expander-space" }, `es${h.indent}`);
    h.hasChildren && (D = h.expanded ? /* @__PURE__ */ d.jsx(rr, { style: {}, className: "", onClick: () => u(h) }, `es${h.indent}`) : /* @__PURE__ */ d.jsx(nr, { style: {}, className: "", onClick: () => u(h) }, `es${h.indent}`)), g.push(D);
    const m = t ? /* @__PURE__ */ d.jsxs("span", { className: "slot-cell", children: [
      g,
      /* @__PURE__ */ d.jsx("a", { style: { cursor: "pointer" }, className: "slot-text", onClick: () => t(C, h), children: h.slotName })
    ] }) : /* @__PURE__ */ d.jsxs("span", { className: "slot-cell", children: [
      g,
      /* @__PURE__ */ d.jsx("span", { className: "slot-text", style: { cursor: t === void 0 ? void 0 : "pointer" }, children: h.slotName })
    ] });
    let w = /* @__PURE__ */ d.jsx("div", { title: h.slotName, className: "overflow-text header2-text", style: { textAlign: "left" }, children: m });
    if (r) {
      const b = r(C, h, t, i, "overflow-text header2-text");
      b && (w = b);
    }
    const T = {
      height: h.rowHeight,
      backgroundColor: h.groupOnly ? C.config.groupOnlySlotColor : void 0
    };
    return /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { "data-resource-id": h.slotId, style: T, children: w }) }, h.slotId);
  }, f = l.map((h) => {
    const g = [];
    for (let D = 0; D < h.indent; D++)
      g.push(/* @__PURE__ */ d.jsx("span", { className: "expander-space" }, `es${D}`));
    return c(h, g);
  });
  return /* @__PURE__ */ d.jsx("div", { style: { paddingBottom: o }, children: /* @__PURE__ */ d.jsx("table", { className: "resource-table", children: /* @__PURE__ */ d.jsx("tbody", { children: f }) }) });
};
ft.propTypes = {
  schedulerData: p.object.isRequired,
  contentScrollbarHeight: p.number.isRequired,
  slotClickedFunc: p.func,
  slotItemTemplateResolver: p.func,
  toggleExpandFunc: p.func
};
class pt extends ke {
  constructor(e) {
    super(e);
  }
  render() {
    const { schedulerData: e, nonAgendaCellHeaderTemplateResolver: t } = this.props, { headers: r, cellUnit: n, config: s, localeDayjs: i } = e;
    let o = e.getTableHeaderHeight(), l = e.getContentCellWidth(), u = e.getMinuteStepsInHour(), c = [], f = {};
    return n === U.Hour ? r.forEach((h, g) => {
      if (g % u === 0) {
        let D = i(new Date(h.time));
        D.isSame(/* @__PURE__ */ new Date(), "hour"), f = h.nonWorkingTime ? {
          width: l * u,
          color: s.nonWorkingTimeHeadColor,
          backgroundColor: s.nonWorkingTimeHeadBgColor
        } : {
          width: l * u
        }, g === r.length - u && (f = h.nonWorkingTime ? { color: s.nonWorkingTimeHeadColor, backgroundColor: s.nonWorkingTimeHeadBgColor } : {});
        let m = s.nonAgendaDayCellHeaderFormat.split("|").map((T) => D.format(T)), w;
        if (typeof t == "function")
          w = t(e, h, m, f);
        else {
          const T = m.map((b, M) => /* @__PURE__ */ d.jsx("div", { children: b }, M));
          w = /* @__PURE__ */ d.jsx("th", { className: "header3-text", style: f, children: /* @__PURE__ */ d.jsx("div", { children: T }) }, h.time);
        }
        c.push(w);
      }
    }) : c = r.map((h, g) => {
      let D = i(new Date(h.time));
      f = h.nonWorkingTime ? {
        width: l,
        color: s.nonWorkingTimeHeadColor,
        backgroundColor: s.nonWorkingTimeHeadBgColor
      } : { width: l }, g === r.length - 1 && (f = h.nonWorkingTime ? { color: s.nonWorkingTimeHeadColor, backgroundColor: s.nonWorkingTimeHeadBgColor } : {});
      let w = (n === U.Week ? s.nonAgendaWeekCellHeaderFormat : n === U.Month ? s.nonAgendaMonthCellHeaderFormat : n === U.Year ? s.nonAgendaYearCellHeaderFormat : s.nonAgendaOtherCellHeaderFormat).split("|").map((b) => D.format(b));
      if (typeof t == "function")
        return t(e, h, w, f);
      const T = w.map((b, M) => /* @__PURE__ */ d.jsx("div", { children: b }, M));
      return /* @__PURE__ */ d.jsx("th", { className: "header3-text", style: f, children: /* @__PURE__ */ d.jsx("div", { children: T }) }, h.time);
    }), /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { style: { height: o }, children: c }) });
  }
}
P(pt, "propTypes", {
  schedulerData: z.object.isRequired,
  nonAgendaCellHeaderTemplateResolver: z.func
});
function mt({ schedulerData: C }) {
  const { renderData: e, headers: t, config: r, behaviors: n } = C, s = C.getContentCellWidth(), i = e.filter((o) => o.render).map(({ slotId: o, groupOnly: l, rowHeight: u }) => {
    const c = t.map((f, h) => {
      const g = `${o}_${f.time}`, D = h === t.length - 1 ? {} : { width: s };
      if (f.nonWorkingTime && (D.backgroundColor = r.nonWorkingTimeBodyBgColor), l && (D.backgroundColor = r.groupOnlySlotColor), n.getNonAgendaViewBodyCellBgColorFunc) {
        const m = n.getNonAgendaViewBodyCellBgColorFunc(C, o, f);
        m && (D.backgroundColor = m);
      }
      return /* @__PURE__ */ d.jsx("td", { style: D, children: /* @__PURE__ */ d.jsx("div", {}) }, g);
    });
    return /* @__PURE__ */ d.jsx("tr", { style: { height: u }, children: c }, o);
  });
  return /* @__PURE__ */ d.jsx("tbody", { children: i });
}
mt.propTypes = {
  schedulerData: p.object.isRequired
};
const gt = ({ schedulerData: C, number: e, left: t, width: r, top: n, clickAction: s, headerItem: i }) => {
  const { config: o } = C, l = `+${e} more`;
  return /* @__PURE__ */ d.jsx("a", { className: "timeline-event", style: { left: t, width: r, top: n }, onClick: () => s(i), children: /* @__PURE__ */ d.jsx("div", { style: { height: o.eventItemHeight, color: "#999", textAlign: "center" }, children: l }) });
};
gt.propTypes = {
  schedulerData: p.object.isRequired,
  number: p.number.isRequired,
  left: p.number.isRequired,
  width: p.number.isRequired,
  top: p.number.isRequired,
  clickAction: p.func.isRequired,
  headerItem: p.object.isRequired
};
const vt = ({ schedulerData: C, summary: e, left: t, width: r, top: n }) => {
  const { config: s } = C, i = e.color !== void 0 ? e.color : s.summaryColor;
  let o = "center";
  s.summaryPos === ve.TopRight || s.summaryPos === ve.BottomRight ? o = "right" : (s.summaryPos === ve.TopLeft || s.summaryPos === ve.BottomLeft) && (o = "left");
  const l = {
    height: s.eventItemHeight,
    color: i,
    textAlign: o,
    marginLeft: "6px",
    marginRight: "6px",
    ...e.fontSize !== void 0 ? { fontSize: e.fontSize } : {}
  };
  return /* @__PURE__ */ d.jsx("a", { className: "timeline-event header2-text", style: { left: t, width: r, top: n, cursor: "default" }, children: /* @__PURE__ */ d.jsx("div", { style: l, children: e.text }) });
};
vt.propTypes = {
  schedulerData: p.object.isRequired,
  summary: p.object.isRequired,
  left: p.number.isRequired,
  width: p.number.isRequired,
  top: p.number.isRequired
};
const Dt = ({ left: C, width: e, schedulerData: t }) => {
  const { config: r } = t, n = {
    left: C,
    width: e,
    top: 0,
    bottom: 0,
    backgroundColor: r.selectedAreaColor
  };
  return /* @__PURE__ */ d.jsx("div", { className: "selected-area", style: n });
};
Dt.propTypes = {
  schedulerData: p.object.isRequired,
  left: p.number.isRequired,
  width: p.number.isRequired
};
class yt extends ke {
  constructor(t) {
    super(t);
    P(this, "initDrag", (t) => {
      const { isSelecting: r } = this.state;
      if (r || (t.srcElement || t.target) !== this.eventContainer)
        return;
      t.stopPropagation();
      const { resourceEvents: n } = this.props;
      if (n.groupOnly)
        return;
      let s = 0;
      if (this.supportTouch) {
        if (t.changedTouches.length == 0)
          return;
        s = t.changedTouches[0].pageX;
      } else {
        if (t.buttons !== void 0 && t.buttons !== 1)
          return;
        s = t.clientX;
      }
      const { schedulerData: i } = this.props;
      let o = i.getContentCellWidth(), l = Te(this.eventContainer), u = s - l.x, c = Math.floor(u / o), f = c * o, h = Math.ceil(u / o), g = (h - c) * o;
      this.setState({
        startX: u,
        left: f,
        leftIndex: c,
        width: g,
        rightIndex: h,
        isSelecting: !0
      }), this.supportTouch ? (document.documentElement.addEventListener("touchmove", this.doDrag, !1), document.documentElement.addEventListener("touchend", this.stopDrag, !1), document.documentElement.addEventListener("touchcancel", this.cancelDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doDrag, !1), document.documentElement.addEventListener("mouseup", this.stopDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    P(this, "doDrag", (t) => {
      t.stopPropagation();
      let r = 0;
      if (this.supportTouch) {
        if (t.changedTouches.length == 0)
          return;
        r = t.changedTouches[0].pageX;
      } else
        r = t.clientX;
      const { startX: n } = this.state, { schedulerData: s } = this.props, { headers: i } = s;
      let o = s.getContentCellWidth(), l = Te(this.eventContainer), u = r - l.x, c = Math.floor(Math.min(n, u) / o);
      c = c < 0 ? 0 : c;
      let f = c * o, h = Math.ceil(Math.max(n, u) / o);
      h = h > i.length ? i.length : h;
      let g = (h - c) * o;
      this.setState({
        leftIndex: c,
        left: f,
        rightIndex: h,
        width: g,
        isSelecting: !0
      });
    });
    P(this, "stopDrag", (t) => {
      t.stopPropagation();
      const { schedulerData: r, newEvent: n, resourceEvents: s } = this.props, { headers: i, events: o, config: l, cellUnit: u, localeDayjs: c } = r, { leftIndex: f, rightIndex: h } = this.state;
      this.supportTouch ? (document.documentElement.removeEventListener("touchmove", this.doDrag, !1), document.documentElement.removeEventListener("touchend", this.stopDrag, !1), document.documentElement.removeEventListener("touchcancel", this.cancelDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      let g = i[f].time, D = s.headerItems[h - 1].end;
      u !== U.Hour && (D = c(new Date(s.headerItems[h - 1].start)).hour(23).minute(59).second(59).format(V));
      let m = s.slotId, w = s.slotName;
      this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: !1
      });
      let T = !1;
      if (l.checkConflict) {
        let b = c(new Date(g)), M = c(D);
        o.forEach((A) => {
          if (r._getEventSlotId(A) === m) {
            let $ = c(A.start), H = c(A.end);
            (b >= $ && b < H || M > $ && M <= H || $ >= b && $ < M || H > b && H <= M) && (T = !0);
          }
        });
      }
      if (T) {
        const { conflictOccurred: b } = this.props;
        b != null ? b(
          r,
          "New",
          {
            id: void 0,
            start: g,
            end: D,
            slotId: m,
            slotName: w,
            title: void 0
          },
          pe.EVENT,
          m,
          w,
          g,
          D
        ) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it");
      } else
        n != null && n(r, m, w, g, D);
    });
    P(this, "cancelDrag", (t) => {
      t.stopPropagation();
      const { isSelecting: r } = this.state;
      r && (document.documentElement.removeEventListener("touchmove", this.doDrag, !1), document.documentElement.removeEventListener("touchend", this.stopDrag, !1), document.documentElement.removeEventListener("touchcancel", this.cancelDrag, !1), document.onselectstart = null, document.ondragstart = null, this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: !1
      }));
    });
    P(this, "onAddMoreClick", (t) => {
      const { onSetAddMoreState: r, resourceEvents: n, schedulerData: s } = this.props;
      if (r) {
        const { config: i } = s;
        let o = s.getContentCellWidth(), l = n.headerItems.indexOf(t);
        if (l !== -1) {
          let u = l * (o - 1), c = Te(this.eventContainer);
          u = u + c.x;
          let f = c.y, h = (t.count + 1) * i.eventItemLineHeight + 20;
          r({
            headerItem: t,
            left: u,
            top: f,
            height: h
          });
        }
      }
    });
    P(this, "eventContainerRef", (t) => {
      this.eventContainer = t;
    });
    this.state = {
      isSelecting: !1,
      left: 0,
      width: 0
    }, this.supportTouch = !1;
  }
  componentDidMount() {
    const { schedulerData: t } = this.props, { config: r } = t;
    this.supportTouch = "ontouchstart" in window, r.creatable === !0 && (this.supportTouch || this.eventContainer.addEventListener("mousedown", this.initDrag, !1));
  }
  componentDidUpdate(t, r) {
    t !== this.props && (this.supportTouch || this.eventContainer.removeEventListener("mousedown", this.initDrag, !1), this.props.schedulerData.config.creatable && (this.supportTouch || this.eventContainer.addEventListener("mousedown", this.initDrag, !1)));
  }
  render() {
    const { resourceEvents: t, schedulerData: r, connectDropTarget: n, dndSource: s } = this.props, { cellUnit: i, startDate: o, endDate: l, config: u, localeDayjs: c } = r, { isSelecting: f, left: h, width: g } = this.state;
    let D = r.getContentCellWidth(), m = r.getCellMaxEvents(), w = r.getContentTableWidth(), T = s.getDragSource(), b = f ? /* @__PURE__ */ d.jsx(Dt, { ...this.props, left: h, width: g }) : /* @__PURE__ */ d.jsx("div", {}), M = [];
    t.headerItems.forEach(($, H) => {
      if ($.count > 0 || $.summary != null) {
        let N = u.summaryPos === ve.TopRight || u.summaryPos === ve.Top || u.summaryPos === ve.TopLeft, Y = t.hasSummary && N ? 1 + u.eventItemLineHeight : 1, k = $.addMore === 0 ? m : $.addMoreIndex;
        if ($.events.forEach((S, G) => {
          if (G < k && S !== void 0 && S.render) {
            let J = c(new Date(o)), R = c(l).add(1, "days");
            i === U.Hour && (J = c(new Date(o)).add(u.dayStartFrom, "hours"), R = c(l).add(u.dayStopTo + 1, "hours"));
            let x = c(S.eventItem.start), y = c(S.eventItem.end), j = x >= J, v = y <= R, _ = H * D + (H > 0 ? 2 : 3), W = S.span * D - (H > 0 ? 5 : 6) > 0 ? S.span * D - (H > 0 ? 5 : 6) : 0, F = Y + G * u.eventItemLineHeight, Q = /* @__PURE__ */ be(
              T,
              {
                ...this.props,
                key: S.eventItem.id,
                eventItem: S.eventItem,
                isStart: j,
                isEnd: v,
                isInPopover: !1,
                left: _,
                width: W,
                top: F,
                leftIndex: H,
                rightIndex: H + S.span
              }
            );
            M.push(Q);
          }
        }), $.addMore > 0) {
          let S = H * D + (H > 0 ? 2 : 3), G = D - (H > 0 ? 5 : 6), J = Y + $.addMoreIndex * u.eventItemLineHeight, R = /* @__PURE__ */ be(
            gt,
            {
              ...this.props,
              key: $.time,
              headerItem: $,
              number: $.addMore,
              left: S,
              width: G,
              top: J,
              clickAction: this.onAddMoreClick
            }
          );
          M.push(R);
        }
        if ($.summary != null) {
          let S = N ? 1 : t.rowHeight - u.eventItemLineHeight + 1, G = H * D + (H > 0 ? 2 : 3), J = D - (H > 0 ? 5 : 6), R = `${t.slotId}_${$.time}`, x = /* @__PURE__ */ d.jsx(vt, { schedulerData: r, summary: $.summary, left: G, width: J, top: S }, R);
          M.push(x);
        }
      }
    });
    const A = /* @__PURE__ */ d.jsxs("div", { ref: this.eventContainerRef, className: "event-container", style: { height: t.rowHeight }, children: [
      b,
      M
    ] });
    return /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { style: { width: w }, children: u.dragAndDropEnabled ? n(A) : A }) });
  }
}
P(yt, "propTypes", {
  resourceEvents: z.object.isRequired,
  schedulerData: z.object.isRequired,
  dndSource: z.object.isRequired,
  onSetAddMoreState: z.func,
  updateEventStart: z.func,
  updateEventEnd: z.func,
  moveEvent: z.func,
  movingEvent: z.func,
  conflictOccurred: z.func,
  subtitleGetter: z.func,
  eventItemClick: z.func,
  viewEventClick: z.func,
  viewEventText: z.string,
  viewEvent2Click: z.func,
  viewEvent2Text: z.string,
  newEvent: z.func,
  eventItemTemplateResolver: z.func
});
function Et(C) {
  const { eventItem: e, isStart: t, isEnd: r, eventItemClick: n, schedulerData: s, eventItemTemplateResolver: i } = C, { config: o, behaviors: l } = s, u = t ? r ? "round-all" : "round-head" : r ? "round-tail" : "round-none", c = e.bgColor || o.defaultEventBgColor, f = l.getEventTextFunc(s, e);
  let h = /* @__PURE__ */ d.jsx("div", { className: `${u} event-item`, style: { height: o.eventItemHeight, maxWidth: o.agendaMaxEventWidth, backgroundColor: c }, children: /* @__PURE__ */ d.jsx("span", { style: { marginLeft: "10px", lineHeight: `${o.eventItemHeight}px` }, children: f }) }, e.id);
  i && (h = i(s, e, c, t, r, "event-item", o.eventItemHeight, o.agendaMaxEventWidth));
  const g = () => n == null ? void 0 : n(s, e), D = /* @__PURE__ */ d.jsx("a", { className: "day-event", onClick: g, children: h });
  let m = /* @__PURE__ */ d.jsx(qe, { ...C, title: e.title, startTime: e.start, endTime: e.end, statusColor: c });
  return o.eventItemPopoverEnabled ? /* @__PURE__ */ d.jsx(Fe, { placement: "bottomLeft", content: m, trigger: "hover", children: D }) : /* @__PURE__ */ d.jsx("span", { children: D });
}
Et.propTypes = {
  schedulerData: p.object.isRequired,
  eventItem: p.object.isRequired,
  isStart: p.bool.isRequired,
  isEnd: p.bool.isRequired,
  subtitleGetter: p.func,
  eventItemClick: p.func,
  viewEventClick: p.func,
  viewEventText: p.string,
  viewEvent2Click: p.func,
  viewEvent2Text: p.string,
  eventItemTemplateResolver: p.func
};
function wt(C) {
  const { schedulerData: e, resourceEvents: t, slotClickedFunc: r, slotItemTemplateResolver: n } = C, { startDate: s, endDate: i, config: o, localeDayjs: l } = e, u = e.getResourceTableWidth() - 2, c = [];
  for (const g of t.headerItems) {
    const D = l(new Date(s)), m = l(i).add(1, "days"), w = l(new Date(g.start)), T = l(new Date(g.end));
    if (D === w && m === T)
      for (const b of g.events) {
        const M = l(new Date(s)), A = l(i).add(1, "days"), $ = l(b.eventItem.start), H = l(b.eventItem.end), N = $ >= M, Y = H < A, k = /* @__PURE__ */ be(Et, { ...C, key: b.eventItem.id, eventItem: b.eventItem, isStart: N, isEnd: Y });
        c.push(k);
      }
  }
  const f = r ? /* @__PURE__ */ d.jsx("a", { onClick: () => r(e, t), children: t.slotName }) : /* @__PURE__ */ d.jsx("span", { children: t.slotName });
  let h = /* @__PURE__ */ d.jsx("div", { style: { width: u }, title: t.slotName, className: "overflow-text header2-text", children: f });
  if (n) {
    const g = n(e, t, r, u, "overflow-text header2-text");
    g && (h = g);
  }
  return /* @__PURE__ */ d.jsxs("tr", { style: { minHeight: o.eventItemLineHeight + 2 }, children: [
    /* @__PURE__ */ d.jsx("td", { "data-resource-id": t.slotId, children: h }),
    /* @__PURE__ */ d.jsx("td", { children: /* @__PURE__ */ d.jsx("div", { className: "day-event-container", children: c }) })
  ] });
}
wt.propTypes = {
  schedulerData: p.object.isRequired,
  resourceEvents: p.object.isRequired,
  subtitleGetter: p.func,
  eventItemClick: p.func,
  viewEventClick: p.func,
  viewEventText: p.string,
  viewEvent2Click: p.func,
  viewEvent2Text: p.string,
  slotClickedFunc: p.func,
  slotItemTemplateResolver: p.func
};
function bt(C) {
  const { schedulerData: e } = C, { config: t, renderData: r } = e, n = e.getResourceTableWidth(), s = e.getTableHeaderHeight(), i = e.isEventPerspective ? t.taskName : t.resourceName, o = t.agendaViewHeader, l = r.map((u) => /* @__PURE__ */ be(wt, { ...C, resourceEvents: u, key: u.slotId }));
  return /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { children: /* @__PURE__ */ d.jsxs("table", { className: "scheduler-table", children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { style: { height: s }, children: [
      /* @__PURE__ */ d.jsx("th", { style: { width: n }, className: "header3-text", children: i }),
      /* @__PURE__ */ d.jsx("th", { className: "header3-text", children: o })
    ] }) }),
    /* @__PURE__ */ d.jsx("tbody", { children: l })
  ] }) }) });
}
bt.propTypes = {
  schedulerData: p.object.isRequired,
  subtitleGetter: p.func,
  eventItemClick: p.func,
  viewEventClick: p.func,
  viewEventText: p.string,
  viewEvent2Click: p.func,
  viewEvent2Text: p.string,
  slotClickedFunc: p.func
};
function hr(C) {
  const { schedulerData: e, headerItem: t, left: r, top: n, height: s, closeAction: i } = C, { config: o, localeDayjs: l } = e, { time: u, start: c, end: f, events: h } = t, [g] = Me(new ht((M) => M.eventItem, Be, e.config.dragAndDropEnabled)), D = l(new Date(u)).format(o.addMorePopoverHeaderFormat), m = l(new Date(c)), w = l(f), T = g.getDragSource(), b = h.map((M, A) => {
    if (M !== void 0) {
      const $ = l(M.eventItem.start), H = l(M.eventItem.end), N = $ >= m, Y = H < w, k = 12 + (A + 1) * o.eventItemLineHeight;
      return /* @__PURE__ */ be(
        T,
        {
          ...C,
          key: M.eventItem.id,
          eventItem: M.eventItem,
          leftIndex: 0,
          isInPopover: !0,
          isStart: N,
          isEnd: Y,
          rightIndex: 1,
          left: 10,
          width: 138,
          top: k
        }
      );
    }
    return null;
  });
  return /* @__PURE__ */ d.jsxs("div", { className: "add-more-popover-overlay", style: { left: r, top: n, height: s, width: "170px" }, children: [
    /* @__PURE__ */ d.jsxs(we, { justify: "space-between", align: "middle", children: [
      /* @__PURE__ */ d.jsx(de, { span: 22, children: /* @__PURE__ */ d.jsx("span", { className: "base-text", children: D }) }),
      /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("span", { onClick: () => i(void 0), children: /* @__PURE__ */ d.jsx(sr, {}) }) })
    ] }),
    b == null ? void 0 : b.filter(Boolean)
  ] });
}
hr.propTypes = {
  schedulerData: p.object.isRequired,
  headerItem: p.object.isRequired,
  left: p.number.isRequired,
  top: p.number.isRequired,
  height: p.number.isRequired,
  closeAction: p.func.isRequired,
  subtitleGetter: p.func,
  moveEvent: p.func,
  eventItemClick: p.func,
  viewEventClick: p.func,
  viewEventText: p.string,
  viewEvent2Click: p.func,
  viewEvent2Text: p.string,
  eventItemTemplateResolver: p.func
};
var xt = { exports: {} };
(function(C, e) {
  (function(t, r) {
    C.exports = r();
  })(We, function() {
    var t = 1e3, r = 6e4, n = 36e5, s = "millisecond", i = "second", o = "minute", l = "hour", u = "day", c = "week", f = "month", h = "quarter", g = "year", D = "date", m = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var x = ["th", "st", "nd", "rd"], y = R % 100;
      return "[" + R + (x[(y - 20) % 10] || x[y] || x[0]) + "]";
    } }, M = function(R, x, y) {
      var j = String(R);
      return !j || j.length >= x ? R : "" + Array(x + 1 - j.length).join(y) + R;
    }, A = { s: M, z: function(R) {
      var x = -R.utcOffset(), y = Math.abs(x), j = Math.floor(y / 60), v = y % 60;
      return (x <= 0 ? "+" : "-") + M(j, 2, "0") + ":" + M(v, 2, "0");
    }, m: function R(x, y) {
      if (x.date() < y.date())
        return -R(y, x);
      var j = 12 * (y.year() - x.year()) + (y.month() - x.month()), v = x.clone().add(j, f), _ = y - v < 0, W = x.clone().add(j + (_ ? -1 : 1), f);
      return +(-(j + (y - v) / (_ ? v - W : W - v)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: f, y: g, w: c, d: u, D, h: l, m: o, s: i, ms: s, Q: h }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, $ = "en", H = {};
    H[$] = b;
    var N = function(R) {
      return R instanceof G;
    }, Y = function R(x, y, j) {
      var v;
      if (!x)
        return $;
      if (typeof x == "string") {
        var _ = x.toLowerCase();
        H[_] && (v = _), y && (H[_] = y, v = _);
        var W = x.split("-");
        if (!v && W.length > 1)
          return R(W[0]);
      } else {
        var F = x.name;
        H[F] = x, v = F;
      }
      return !j && v && ($ = v), v || !j && $;
    }, k = function(R, x) {
      if (N(R))
        return R.clone();
      var y = typeof x == "object" ? x : {};
      return y.date = R, y.args = arguments, new G(y);
    }, S = A;
    S.l = Y, S.i = N, S.w = function(R, x) {
      return k(R, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var G = function() {
      function R(y) {
        this.$L = Y(y.locale, null, !0), this.parse(y);
      }
      var x = R.prototype;
      return x.parse = function(y) {
        this.$d = function(j) {
          var v = j.date, _ = j.utc;
          if (v === null)
            return /* @__PURE__ */ new Date(NaN);
          if (S.u(v))
            return /* @__PURE__ */ new Date();
          if (v instanceof Date)
            return new Date(v);
          if (typeof v == "string" && !/Z$/i.test(v)) {
            var W = v.match(w);
            if (W) {
              var F = W[2] - 1 || 0, Q = (W[7] || "0").substring(0, 3);
              return _ ? new Date(Date.UTC(W[1], F, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, Q)) : new Date(W[1], F, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, Q);
            }
          }
          return new Date(v);
        }(y), this.$x = y.x || {}, this.init();
      }, x.init = function() {
        var y = this.$d;
        this.$y = y.getFullYear(), this.$M = y.getMonth(), this.$D = y.getDate(), this.$W = y.getDay(), this.$H = y.getHours(), this.$m = y.getMinutes(), this.$s = y.getSeconds(), this.$ms = y.getMilliseconds();
      }, x.$utils = function() {
        return S;
      }, x.isValid = function() {
        return this.$d.toString() !== m;
      }, x.isSame = function(y, j) {
        var v = k(y);
        return this.startOf(j) <= v && v <= this.endOf(j);
      }, x.isAfter = function(y, j) {
        return k(y) < this.startOf(j);
      }, x.isBefore = function(y, j) {
        return this.endOf(j) < k(y);
      }, x.$g = function(y, j, v) {
        return S.u(y) ? this[j] : this.set(v, y);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(y, j) {
        var v = this, _ = !!S.u(j) || j, W = S.p(y), F = function(ue, ne) {
          var oe = S.w(v.$u ? Date.UTC(v.$y, ne, ue) : new Date(v.$y, ne, ue), v);
          return _ ? oe : oe.endOf(u);
        }, Q = function(ue, ne) {
          return S.w(v.toDate()[ue].apply(v.toDate("s"), (_ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), v);
        }, K = this.$W, ee = this.$M, ae = this.$D, se = "set" + (this.$u ? "UTC" : "");
        switch (W) {
          case g:
            return _ ? F(1, 0) : F(31, 11);
          case f:
            return _ ? F(1, ee) : F(0, ee + 1);
          case c:
            var le = this.$locale().weekStart || 0, he = (K < le ? K + 7 : K) - le;
            return F(_ ? ae - he : ae + (6 - he), ee);
          case u:
          case D:
            return Q(se + "Hours", 0);
          case l:
            return Q(se + "Minutes", 1);
          case o:
            return Q(se + "Seconds", 2);
          case i:
            return Q(se + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(y) {
        return this.startOf(y, !1);
      }, x.$set = function(y, j) {
        var v, _ = S.p(y), W = "set" + (this.$u ? "UTC" : ""), F = (v = {}, v[u] = W + "Date", v[D] = W + "Date", v[f] = W + "Month", v[g] = W + "FullYear", v[l] = W + "Hours", v[o] = W + "Minutes", v[i] = W + "Seconds", v[s] = W + "Milliseconds", v)[_], Q = _ === u ? this.$D + (j - this.$W) : j;
        if (_ === f || _ === g) {
          var K = this.clone().set(D, 1);
          K.$d[F](Q), K.init(), this.$d = K.set(D, Math.min(this.$D, K.daysInMonth())).$d;
        } else
          F && this.$d[F](Q);
        return this.init(), this;
      }, x.set = function(y, j) {
        return this.clone().$set(y, j);
      }, x.get = function(y) {
        return this[S.p(y)]();
      }, x.add = function(y, j) {
        var v, _ = this;
        y = Number(y);
        var W = S.p(j), F = function(ee) {
          var ae = k(_);
          return S.w(ae.date(ae.date() + Math.round(ee * y)), _);
        };
        if (W === f)
          return this.set(f, this.$M + y);
        if (W === g)
          return this.set(g, this.$y + y);
        if (W === u)
          return F(1);
        if (W === c)
          return F(7);
        var Q = (v = {}, v[o] = r, v[l] = n, v[i] = t, v)[W] || 1, K = this.$d.getTime() + y * Q;
        return S.w(K, this);
      }, x.subtract = function(y, j) {
        return this.add(-1 * y, j);
      }, x.format = function(y) {
        var j = this, v = this.$locale();
        if (!this.isValid())
          return v.invalidDate || m;
        var _ = y || "YYYY-MM-DDTHH:mm:ssZ", W = S.z(this), F = this.$H, Q = this.$m, K = this.$M, ee = v.weekdays, ae = v.months, se = function(ne, oe, xe, De) {
          return ne && (ne[oe] || ne(j, _)) || xe[oe].slice(0, De);
        }, le = function(ne) {
          return S.s(F % 12 || 12, ne, "0");
        }, he = v.meridiem || function(ne, oe, xe) {
          var De = ne < 12 ? "AM" : "PM";
          return xe ? De.toLowerCase() : De;
        }, ue = { YY: String(this.$y).slice(-2), YYYY: S.s(this.$y, 4, "0"), M: K + 1, MM: S.s(K + 1, 2, "0"), MMM: se(v.monthsShort, K, ae, 3), MMMM: se(ae, K), D: this.$D, DD: S.s(this.$D, 2, "0"), d: String(this.$W), dd: se(v.weekdaysMin, this.$W, ee, 2), ddd: se(v.weekdaysShort, this.$W, ee, 3), dddd: ee[this.$W], H: String(F), HH: S.s(F, 2, "0"), h: le(1), hh: le(2), a: he(F, Q, !0), A: he(F, Q, !1), m: String(Q), mm: S.s(Q, 2, "0"), s: String(this.$s), ss: S.s(this.$s, 2, "0"), SSS: S.s(this.$ms, 3, "0"), Z: W };
        return _.replace(T, function(ne, oe) {
          return oe || ue[ne] || W.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(y, j, v) {
        var _, W = S.p(j), F = k(y), Q = (F.utcOffset() - this.utcOffset()) * r, K = this - F, ee = S.m(this, F);
        return ee = (_ = {}, _[g] = ee / 12, _[f] = ee, _[h] = ee / 3, _[c] = (K - Q) / 6048e5, _[u] = (K - Q) / 864e5, _[l] = K / n, _[o] = K / r, _[i] = K / t, _)[W] || K, v ? ee : S.a(ee);
      }, x.daysInMonth = function() {
        return this.endOf(f).$D;
      }, x.$locale = function() {
        return H[this.$L];
      }, x.locale = function(y, j) {
        if (!y)
          return this.$L;
        var v = this.clone(), _ = Y(y, j, !0);
        return _ && (v.$L = _), v;
      }, x.clone = function() {
        return S.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), J = G.prototype;
    return k.prototype = J, [["$ms", s], ["$s", i], ["$m", o], ["$H", l], ["$W", u], ["$M", f], ["$y", g], ["$D", D]].forEach(function(R) {
      J[R[1]] = function(x) {
        return this.$g(x, R[0], R[1]);
      };
    }), k.extend = function(R, x) {
      return R.$i || (R(x, G, k), R.$i = !0), k;
    }, k.locale = Y, k.isDayjs = N, k.unix = function(R) {
      return k(1e3 * R);
    }, k.en = H[$], k.Ls = H, k.p = {}, k;
  });
})(xt);
var fr = xt.exports;
const ge = /* @__PURE__ */ Oe(fr);
var St = { exports: {} };
(function(C, e) {
  (function(t, r) {
    C.exports = r();
  })(We, function() {
    var t = "month", r = "quarter";
    return function(n, s) {
      var i = s.prototype;
      i.quarter = function(u) {
        return this.$utils().u(u) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (u - 1));
      };
      var o = i.add;
      i.add = function(u, c) {
        return u = Number(u), this.$utils().p(c) === r ? this.add(3 * u, t) : o.bind(this)(u, c);
      };
      var l = i.startOf;
      i.startOf = function(u, c) {
        var f = this.$utils(), h = !!f.u(c) || c;
        if (f.p(u) === r) {
          var g = this.quarter() - 1;
          return h ? this.month(3 * g).startOf(t).startOf("day") : this.month(3 * g + 2).endOf(t).endOf("day");
        }
        return l.bind(this)(u, c);
      };
    };
  });
})(St);
var pr = St.exports;
const mr = /* @__PURE__ */ Oe(pr);
var Ct = { exports: {} };
(function(C, e) {
  (function(t, r) {
    C.exports = r();
  })(We, function() {
    var t = "minute", r = /[+-]\d\d(?::?\d\d)?/g, n = /([+-]|\d\d)/g;
    return function(s, i, o) {
      var l = i.prototype;
      o.utc = function(m) {
        var w = { date: m, utc: !0, args: arguments };
        return new i(w);
      }, l.utc = function(m) {
        var w = o(this.toDate(), { locale: this.$L, utc: !0 });
        return m ? w.add(this.utcOffset(), t) : w;
      }, l.local = function() {
        return o(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var u = l.parse;
      l.parse = function(m) {
        m.utc && (this.$u = !0), this.$utils().u(m.$offset) || (this.$offset = m.$offset), u.call(this, m);
      };
      var c = l.init;
      l.init = function() {
        if (this.$u) {
          var m = this.$d;
          this.$y = m.getUTCFullYear(), this.$M = m.getUTCMonth(), this.$D = m.getUTCDate(), this.$W = m.getUTCDay(), this.$H = m.getUTCHours(), this.$m = m.getUTCMinutes(), this.$s = m.getUTCSeconds(), this.$ms = m.getUTCMilliseconds();
        } else
          c.call(this);
      };
      var f = l.utcOffset;
      l.utcOffset = function(m, w) {
        var T = this.$utils().u;
        if (T(m))
          return this.$u ? 0 : T(this.$offset) ? f.call(this) : this.$offset;
        if (typeof m == "string" && (m = function($) {
          $ === void 0 && ($ = "");
          var H = $.match(r);
          if (!H)
            return null;
          var N = ("" + H[0]).match(n) || ["-", 0, 0], Y = N[0], k = 60 * +N[1] + +N[2];
          return k === 0 ? 0 : Y === "+" ? k : -k;
        }(m), m === null))
          return this;
        var b = Math.abs(m) <= 16 ? 60 * m : m, M = this;
        if (w)
          return M.$offset = b, M.$u = m === 0, M;
        if (m !== 0) {
          var A = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (M = this.local().add(b + A, t)).$offset = b, M.$x.$localOffset = A;
        } else
          M = this.utc();
        return M;
      };
      var h = l.format;
      l.format = function(m) {
        var w = m || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h.call(this, w);
      }, l.valueOf = function() {
        var m = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * m;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var g = l.toDate;
      l.toDate = function(m) {
        return m === "s" && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : g.call(this);
      };
      var D = l.diff;
      l.diff = function(m, w, T) {
        if (m && this.$u === m.$u)
          return D.call(this, m, w, T);
        var b = this.local(), M = o(m).local();
        return D.call(b, M, w, T);
      };
    };
  });
})(Ct);
var gr = Ct.exports;
const vr = /* @__PURE__ */ Oe(gr);
var Rt = { exports: {} };
(function(C, e) {
  (function(t, r) {
    C.exports = r();
  })(We, function() {
    return function(t, r) {
      r.prototype.weekday = function(n) {
        var s = this.$locale().weekStart || 0, i = this.$W, o = (i < s ? i + 7 : i) - s;
        return this.$utils().u(n) ? o : this.subtract(o, "day").add(n, "day");
      };
    };
  });
})(Rt);
var Dr = Rt.exports;
const yr = /* @__PURE__ */ Oe(Dr), ct = {
  schedulerWidth: "100%",
  besidesWidth: 20,
  schedulerMaxHeight: 0,
  tableHeaderHeight: 40,
  schedulerContentHeight: "500px",
  responsiveByParent: !1,
  agendaResourceTableWidth: 160,
  agendaMaxEventWidth: 100,
  dayResourceTableWidth: 160,
  weekResourceTableWidth: "16%",
  monthResourceTableWidth: 160,
  quarterResourceTableWidth: 160,
  yearResourceTableWidth: 160,
  customResourceTableWidth: 160,
  dayCellWidth: 30,
  weekCellWidth: "12%",
  monthCellWidth: 80,
  quarterCellWidth: 80,
  yearCellWidth: 80,
  customCellWidth: 80,
  dayMaxEvents: 99,
  weekMaxEvents: 99,
  monthMaxEvents: 99,
  quarterMaxEvents: 99,
  yearMaxEvents: 99,
  customMaxEvents: 99,
  eventItemPopoverTrigger: "hover",
  eventItemPopoverPlacement: "bottomLeft",
  eventItemPopoverWidth: 300,
  eventItemHeight: 22,
  eventItemLineHeight: 24,
  nonAgendaSlotMinHeight: 0,
  dayStartFrom: 0,
  dayStopTo: 23,
  defaultEventBgColor: "#80C5F6",
  selectedAreaColor: "#7EC2F3",
  nonWorkingTimeHeadColor: "#999999",
  nonWorkingTimeHeadBgColor: "#fff0f6",
  nonWorkingTimeBodyBgColor: "#fff0f6",
  summaryColor: "#666",
  summaryPos: ve.TopRight,
  groupOnlySlotColor: "#F8F8F8",
  startResizable: !0,
  endResizable: !0,
  movable: !0,
  creatable: !0,
  crossResourceMove: !0,
  checkConflict: !1,
  scrollToSpecialDayjsEnabled: !0,
  eventItemPopoverEnabled: !0,
  eventItemPopoverShowColor: !0,
  calendarPopoverEnabled: !0,
  recurringEventsEnabled: !0,
  viewChangeSpinEnabled: !0,
  dateChangeSpinEnabled: !0,
  headerEnabled: !0,
  resourceViewEnabled: !0,
  displayWeekend: !0,
  relativeMove: !0,
  defaultExpanded: !0,
  dragAndDropEnabled: !0,
  schedulerHeaderEventsFuncsTimeoutMs: 100,
  resourceName: "Resource Name",
  taskName: "Task Name",
  agendaViewHeader: "Agenda",
  addMorePopoverHeaderFormat: "MMM D, YYYY dddd",
  eventItemPopoverDateFormat: "MMM D",
  nonAgendaDayCellHeaderFormat: "ha",
  nonAgendaWeekCellHeaderFormat: "ww/YYYY",
  nonAgendaMonthCellHeaderFormat: "MMM YYYY",
  nonAgendaYearCellHeaderFormat: "YYYY",
  nonAgendaOtherCellHeaderFormat: "ddd M/D",
  minuteStep: 30,
  views: [
    { viewName: "Day", viewType: O.Day, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Week", viewType: O.Week, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Month", viewType: O.Month, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Quarter", viewType: O.Quarter, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Year", viewType: O.Year, showAgenda: !1, isEventPerspective: !1 }
  ]
}, Er = (C, e, t, r) => {
  const { localeDayjs: n } = C, s = n(new Date(t)), i = n(r);
  let o = "";
  return e === O.Week || s !== i && (e === O.Custom || e === O.Custom1 || e === O.Custom2) ? (o = `${s.format("MMM D")}-${i.format("D, YYYY")}`, s.month() !== i.month() && (o = `${s.format("MMM D")}-${i.format("MMM D, YYYY")}`), s.year() !== i.year() && (o = `${s.format("MMM D, YYYY")}-${i.format("MMM D, YYYY")}`)) : e === O.Month ? o = s.format("MMMM YYYY") : e === O.Quarter ? o = `${s.format("MMM D")}-${i.format("MMM D, YYYY")}` : e === O.Year ? o = s.format("YYYY") : o = s.format("MMM D, YYYY"), o;
}, wr = (C, e) => {
  var t;
  return C.isEventPerspective && ((t = C.resources.find((r) => r.id === e.resourceId)) == null ? void 0 : t.name) || e.title;
}, br = (C) => {
  const { localeDayjs: e } = C;
  return e(/* @__PURE__ */ new Date());
}, xr = (C, e) => {
  const { localeDayjs: t, cellUnit: r } = C;
  if (r === U.Hour) {
    const n = t(new Date(e)).hour();
    return n < 9 || n > 18;
  } else {
    const n = t(new Date(e)).weekday();
    return n === 0 || n === 6;
  }
}, dt = {
  getSummaryFunc: void 0,
  getCustomDateFunc: void 0,
  getNonAgendaViewBodyCellBgColorFunc: void 0,
  getScrollSpecialDayjsFunc: br,
  getDateLabelFunc: Er,
  getEventTextFunc: wr,
  isNonWorkingTimeFunc: xr
};
function Sr(C) {
  switch (C) {
    case "af":
      return import("./af-d261e868.mjs").then((e) => e.a);
    case "am":
      return import("./am-224a9385.mjs").then((e) => e.a);
    case "ar-dz":
      return import("./ar-dz-91081f8c.mjs").then((e) => e.a);
    case "ar-iq":
      return import("./ar-iq-35005b0c.mjs").then((e) => e.a);
    case "ar-kw":
      return import("./ar-kw-1a9a82be.mjs").then((e) => e.a);
    case "ar-ly":
      return import("./ar-ly-11c752c5.mjs").then((e) => e.a);
    case "ar-ma":
      return import("./ar-ma-7e359427.mjs").then((e) => e.a);
    case "ar-sa":
      return import("./ar-sa-29446434.mjs").then((e) => e.a);
    case "ar-tn":
      return import("./ar-tn-63e67ef5.mjs").then((e) => e.a);
    case "ar":
      return import("./ar-f5c171ed.mjs").then((e) => e.a);
    case "az":
      return import("./az-bfd231b5.mjs").then((e) => e.a);
    case "be":
      return import("./be-d70c00f9.mjs").then((e) => e.b);
    case "bg":
      return import("./bg-e99bbe0b.mjs").then((e) => e.b);
    case "bi":
      return import("./bi-9f01c3c6.mjs").then((e) => e.b);
    case "bm":
      return import("./bm-8bf4bc50.mjs").then((e) => e.b);
    case "bn-bd":
      return import("./bn-bd-abdb28cb.mjs").then((e) => e.b);
    case "bn":
      return import("./bn-d871a0e3.mjs").then((e) => e.b);
    case "bo":
      return import("./bo-7b71a483.mjs").then((e) => e.b);
    case "br":
      return import("./br-f179db70.mjs").then((e) => e.b);
    case "bs":
      return import("./bs-c8ed7148.mjs").then((e) => e.b);
    case "ca":
      return import("./ca-232f44f2.mjs").then((e) => e.c);
    case "cs":
      return import("./cs-0b32023f.mjs").then((e) => e.c);
    case "cv":
      return import("./cv-4792f0ee.mjs").then((e) => e.c);
    case "cy":
      return import("./cy-96c8b119.mjs").then((e) => e.c);
    case "da":
      return import("./da-d928f274.mjs").then((e) => e.d);
    case "de-at":
      return import("./de-at-84562d2e.mjs").then((e) => e.d);
    case "de-ch":
      return import("./de-ch-79a3153c.mjs").then((e) => e.d);
    case "de":
      return import("./de-34f06a9a.mjs").then((e) => e.d);
    case "dv":
      return import("./dv-0ee272b1.mjs").then((e) => e.d);
    case "el":
      return import("./el-637c2b50.mjs").then((e) => e.e);
    case "en-au":
      return import("./en-au-1ed9ed33.mjs").then((e) => e.e);
    case "en-ca":
      return import("./en-ca-7742e9f1.mjs").then((e) => e.e);
    case "en-gb":
      return import("./en-gb-2f274ed7.mjs").then((e) => e.e);
    case "en-ie":
      return import("./en-ie-c281d009.mjs").then((e) => e.e);
    case "en-il":
      return import("./en-il-48c6e4fe.mjs").then((e) => e.e);
    case "en-in":
      return import("./en-in-f336c1e3.mjs").then((e) => e.e);
    case "en-nz":
      return import("./en-nz-296ee938.mjs").then((e) => e.e);
    case "en-sg":
      return import("./en-sg-903fc3e4.mjs").then((e) => e.e);
    case "en-tt":
      return import("./en-tt-88f14f96.mjs").then((e) => e.e);
    case "en":
      return import("./en-6cc074f6.mjs").then((e) => e.e);
    case "eo":
      return import("./eo-0b9df0e3.mjs").then((e) => e.e);
    case "es-do":
      return import("./es-do-fdb84224.mjs").then((e) => e.e);
    case "es-mx":
      return import("./es-mx-ce5288a0.mjs").then((e) => e.e);
    case "es-pr":
      return import("./es-pr-14324bdd.mjs").then((e) => e.e);
    case "es-us":
      return import("./es-us-0d104bbf.mjs").then((e) => e.e);
    case "es":
      return import("./es-7d03b704.mjs").then((e) => e.e);
    case "et":
      return import("./et-9f30f713.mjs").then((e) => e.e);
    case "eu":
      return import("./eu-63a1f76f.mjs").then((e) => e.e);
    case "fa":
      return import("./fa-335d0b96.mjs").then((e) => e.f);
    case "fi":
      return import("./fi-7cdd9168.mjs").then((e) => e.f);
    case "fo":
      return import("./fo-d0d95c1e.mjs").then((e) => e.f);
    case "fr-ca":
      return import("./fr-ca-2522539f.mjs").then((e) => e.f);
    case "fr-ch":
      return import("./fr-ch-8325ee1a.mjs").then((e) => e.f);
    case "fr":
      return import("./fr-b01e251f.mjs").then((e) => e.f);
    case "fy":
      return import("./fy-6cda26ac.mjs").then((e) => e.f);
    case "ga":
      return import("./ga-68a1e399.mjs").then((e) => e.g);
    case "gd":
      return import("./gd-4bbf5b25.mjs").then((e) => e.g);
    case "gl":
      return import("./gl-a19274c1.mjs").then((e) => e.g);
    case "gom-latn":
      return import("./gom-latn-f93ac68e.mjs").then((e) => e.g);
    case "gu":
      return import("./gu-8e00d26e.mjs").then((e) => e.g);
    case "he":
      return import("./he-967823cc.mjs").then((e) => e.h);
    case "hi":
      return import("./hi-7b32a906.mjs").then((e) => e.h);
    case "hr":
      return import("./hr-bff12c96.mjs").then((e) => e.h);
    case "ht":
      return import("./ht-e11b7e11.mjs").then((e) => e.h);
    case "hu":
      return import("./hu-3912d17e.mjs").then((e) => e.h);
    case "hy-am":
      return import("./hy-am-fd69fa6c.mjs").then((e) => e.h);
    case "id":
      return import("./id-7c760e03.mjs").then((e) => e.i);
    case "is":
      return import("./is-82659783.mjs").then((e) => e.i);
    case "it-ch":
      return import("./it-ch-29efc9de.mjs").then((e) => e.i);
    case "it":
      return import("./it-93f75775.mjs").then((e) => e.i);
    case "ja":
      return import("./ja-86ef23e1.mjs").then((e) => e.j);
    case "jv":
      return import("./jv-224d9b1d.mjs").then((e) => e.j);
    case "ka":
      return import("./ka-721a02b5.mjs").then((e) => e.k);
    case "kk":
      return import("./kk-e2839ef0.mjs").then((e) => e.k);
    case "km":
      return import("./km-14365cf0.mjs").then((e) => e.k);
    case "kn":
      return import("./kn-82c95118.mjs").then((e) => e.k);
    case "ko":
      return import("./ko-5398e502.mjs").then((e) => e.k);
    case "ku":
      return import("./ku-6b4bd046.mjs").then((e) => e.k);
    case "ky":
      return import("./ky-1ca6ed9a.mjs").then((e) => e.k);
    case "lb":
      return import("./lb-4f29287e.mjs").then((e) => e.l);
    case "lo":
      return import("./lo-dae0cc3b.mjs").then((e) => e.l);
    case "lt":
      return import("./lt-ea27df14.mjs").then((e) => e.l);
    case "lv":
      return import("./lv-ab1def34.mjs").then((e) => e.l);
    case "me":
      return import("./me-8e72569e.mjs").then((e) => e.m);
    case "mi":
      return import("./mi-3fb45ec8.mjs").then((e) => e.m);
    case "mk":
      return import("./mk-bddf86ba.mjs").then((e) => e.m);
    case "ml":
      return import("./ml-50b80bc9.mjs").then((e) => e.m);
    case "mn":
      return import("./mn-2abf6e3b.mjs").then((e) => e.m);
    case "mr":
      return import("./mr-25647ba3.mjs").then((e) => e.m);
    case "ms-my":
      return import("./ms-my-92424001.mjs").then((e) => e.m);
    case "ms":
      return import("./ms-4c2217c7.mjs").then((e) => e.m);
    case "mt":
      return import("./mt-95691ec8.mjs").then((e) => e.m);
    case "my":
      return import("./my-fc6697f1.mjs").then((e) => e.m);
    case "nb":
      return import("./nb-78379e4d.mjs").then((e) => e.n);
    case "ne":
      return import("./ne-5ddd3770.mjs").then((e) => e.n);
    case "nl-be":
      return import("./nl-be-6116f7c9.mjs").then((e) => e.n);
    case "nl":
      return import("./nl-95719c81.mjs").then((e) => e.n);
    case "nn":
      return import("./nn-d59580f8.mjs").then((e) => e.n);
    case "oc-lnc":
      return import("./oc-lnc-fa0a2b7e.mjs").then((e) => e.o);
    case "pa-in":
      return import("./pa-in-8abb143a.mjs").then((e) => e.p);
    case "pl":
      return import("./pl-06dff6ac.mjs").then((e) => e.p);
    case "pt-br":
      return import("./pt-br-a6963bc9.mjs").then((e) => e.p);
    case "pt":
      return import("./pt-9e9c44c6.mjs").then((e) => e.p);
    case "rn":
      return import("./rn-946efba1.mjs").then((e) => e.r);
    case "ro":
      return import("./ro-d42ba627.mjs").then((e) => e.r);
    case "se":
      return import("./se-58da0b5f.mjs").then((e) => e.s);
    case "si":
      return import("./si-f96c77bd.mjs").then((e) => e.s);
    case "sk":
      return import("./sk-eaba50c0.mjs").then((e) => e.s);
    case "sl":
      return import("./sl-71d74522.mjs").then((e) => e.s);
    case "sq":
      return import("./sq-0d44db9f.mjs").then((e) => e.s);
    case "sr-cyrl":
      return import("./sr-cyrl-0ffe0ac0.mjs").then((e) => e.s);
    case "sr":
      return import("./sr-e5d508f2.mjs").then((e) => e.s);
    case "ss":
      return import("./ss-3ee6f856.mjs").then((e) => e.s);
    case "sv-fi":
      return import("./sv-fi-69261db0.mjs").then((e) => e.s);
    case "sv":
      return import("./sv-ba3d24d6.mjs").then((e) => e.s);
    case "sw":
      return import("./sw-5d6791a1.mjs").then((e) => e.s);
    case "ta":
      return import("./ta-8a5b67bb.mjs").then((e) => e.t);
    case "te":
      return import("./te-6343a062.mjs").then((e) => e.t);
    case "tet":
      return import("./tet-1a4c9268.mjs").then((e) => e.t);
    case "tg":
      return import("./tg-bf7a37d6.mjs").then((e) => e.t);
    case "th":
      return import("./th-947f17a9.mjs").then((e) => e.t);
    case "tk":
      return import("./tk-f316e5b8.mjs").then((e) => e.t);
    case "tl-ph":
      return import("./tl-ph-d46c43fd.mjs").then((e) => e.t);
    case "tlh":
      return import("./tlh-d54937b2.mjs").then((e) => e.t);
    case "tr":
      return import("./tr-442d0b9f.mjs").then((e) => e.t);
    case "tzl":
      return import("./tzl-a7cbf6fe.mjs").then((e) => e.t);
    case "tzm-latn":
      return import("./tzm-latn-3b0bc64f.mjs").then((e) => e.t);
    case "tzm":
      return import("./tzm-dff395a0.mjs").then((e) => e.t);
    case "ug-cn":
      return import("./ug-cn-24b140a5.mjs").then((e) => e.u);
    case "uk":
      return import("./uk-f47f1749.mjs").then((e) => e.u);
    case "ur":
      return import("./ur-647fe763.mjs").then((e) => e.u);
    case "uz-latn":
      return import("./uz-latn-a7dc7079.mjs").then((e) => e.u);
    case "uz":
      return import("./uz-050fa6f0.mjs").then((e) => e.u);
    case "vi":
      return import("./vi-37dd582c.mjs").then((e) => e.v);
    case "x-pseudo":
      return import("./x-pseudo-7d79a6b5.mjs").then((e) => e.x);
    case "yo":
      return import("./yo-728fb497.mjs").then((e) => e.y);
    case "zh-cn":
      return import("./zh-cn-cdbbd79a.mjs").then((e) => e.z);
    case "zh-hk":
      return import("./zh-hk-2d4717c5.mjs").then((e) => e.z);
    case "zh-tw":
      return import("./zh-tw-db64f0c1.mjs").then((e) => e.z);
    case "zh":
      return import("./zh-758e83c7.mjs").then((e) => e.z);
    case "sd":
      return import("./sd-11783e2c.mjs").then((e) => e.s);
    case "rw":
      return import("./rw-e740777f.mjs").then((e) => e.r);
    case "ru":
      return import("./ru-4126f173.mjs").then((e) => e.r);
    default:
      return import("./en-6cc074f6.mjs").then((e) => e.e);
  }
}
function Cr(C) {
  switch (C) {
    case "ar_EG":
      return import("./ar_EG-b98e6d11.mjs").then((e) => e.a);
    case "az_AZ":
      return import("./az_AZ-263b31eb.mjs").then((e) => e.a);
    case "bg_BG":
      return import("./bg_BG-b1adcb56.mjs").then((e) => e.b);
    case "bn_BD":
      return import("./bn_BD-f7dac38c.mjs").then((e) => e.b);
    case "by_BY":
      return import("./by_BY-1679b3e6.mjs").then((e) => e.b);
    case "ca_ES":
      return import("./ca_ES-76318eea.mjs").then((e) => e.c);
    case "context":
      return import("./context-1dd2fa5f.mjs").then((e) => e.c);
    case "cs_CZ":
      return import("./cs_CZ-97ef6de0.mjs").then((e) => e.c);
    case "da_DK":
      return import("./da_DK-adbed59d.mjs").then((e) => e.d);
    case "de_DE":
      return import("./de_DE-6a461f9f.mjs").then((e) => e.d);
    case "el_GR":
      return import("./el_GR-68dee4cf.mjs").then((e) => e.e);
    case "en_GB":
      return import("./en_GB-75e0bc3a.mjs").then((e) => e.e);
    case "en_US":
      return import("./en_US-9c29aede.mjs").then((e) => e.e);
    case "es_ES":
      return import("./es_ES-31262a5e.mjs").then((e) => e.e);
    case "et_EE":
      return import("./et_EE-65ea7c61.mjs").then((e) => e.e);
    case "eu_ES":
      return import("./eu_ES-fe711360.mjs").then((e) => e.e);
    case "fa_IR":
      return import("./fa_IR-f4ec27d2.mjs").then((e) => e.f);
    case "fi_FI":
      return import("./fi_FI-f6329731.mjs").then((e) => e.f);
    case "fr_BE":
      return import("./fr_BE-aef6539f.mjs").then((e) => e.f);
    case "fr_CA":
      return import("./fr_CA-37c7b413.mjs").then((e) => e.f);
    case "fr_FR":
      return import("./fr_FR-48f19dd9.mjs").then((e) => e.f);
    case "ga_IE":
      return import("./ga_IE-5ec8b77f.mjs").then((e) => e.g);
    case "gl_ES":
      return import("./gl_ES-17e2d32c.mjs").then((e) => e.g);
    case "he_IL":
      return import("./he_IL-6c32cc63.mjs").then((e) => e.h);
    case "hi_IN":
      return import("./hi_IN-0def1590.mjs").then((e) => e.h);
    case "hr_HR":
      return import("./hr_HR-dca450bc.mjs").then((e) => e.h);
    case "hu_HU":
      return import("./hu_HU-2a468eb4.mjs").then((e) => e.h);
    case "hy_AM":
      return import("./hy_AM-8e18b243.mjs").then((e) => e.h);
    case "id_ID":
      return import("./id_ID-f248c4e1.mjs").then((e) => e.i);
    case "index":
      return import("./index-de6ac5bf.mjs").then((e) => e.i);
    case "is_IS":
      return import("./is_IS-73b44a2e.mjs").then((e) => e.i);
    case "it_IT":
      return import("./it_IT-587663e7.mjs").then((e) => e.i);
    case "ja_JP":
      return import("./ja_JP-1743b656.mjs").then((e) => e.j);
    case "ka_GE":
      return import("./ka_GE-d2308856.mjs").then((e) => e.k);
    case "kk_KZ":
      return import("./kk_KZ-561eb4ac.mjs").then((e) => e.k);
    case "kmr_IQ":
      return import("./kmr_IQ-5df997a4.mjs").then((e) => e.k);
    case "km_KH":
      return import("./km_KH-65703a5f.mjs").then((e) => e.k);
    case "kn_IN":
      return import("./kn_IN-eba4018b.mjs").then((e) => e.k);
    case "ko_KR":
      return import("./ko_KR-524ec2f0.mjs").then((e) => e.k);
    case "ku_IQ":
      return import("./ku_IQ-579f0d0c.mjs").then((e) => e.k);
    case "lt_LT":
      return import("./lt_LT-18b40ce0.mjs").then((e) => e.l);
    case "lv_LV":
      return import("./lv_LV-fedfeff2.mjs").then((e) => e.l);
    case "mk_MK":
      return import("./mk_MK-efcd1a6f.mjs").then((e) => e.m);
    case "ml_IN":
      return import("./ml_IN-53289144.mjs").then((e) => e.m);
    case "mn_MN":
      return import("./mn_MN-127b1682.mjs").then((e) => e.m);
    case "ms_MY":
      return import("./ms_MY-d3ecc3f8.mjs").then((e) => e.m);
    case "my_MM":
      return import("./my_MM-134e5333.mjs").then((e) => e.m);
    case "nb_NO":
      return import("./nb_NO-c9ce8913.mjs").then((e) => e.n);
    case "ne_NP":
      return import("./ne_NP-162c9907.mjs").then((e) => e.n);
    case "nl_BE":
      return import("./nl_BE-5c93d4a1.mjs").then((e) => e.n);
    case "nl_NL":
      return import("./nl_NL-aafa5544.mjs").then((e) => e.n);
    case "pl_PL":
      return import("./pl_PL-5fb01a59.mjs").then((e) => e.p);
    case "pt_BR":
      return import("./pt_BR-afea5687.mjs").then((e) => e.p);
    case "pt_PT":
      return import("./pt_PT-314d036e.mjs").then((e) => e.p);
    case "ro_RO":
      return import("./ro_RO-caadbaad.mjs").then((e) => e.r);
    case "ru_RU":
      return import("./ru_RU-8ec475f7.mjs").then((e) => e.r);
    case "si_LK":
      return import("./si_LK-6aacaae3.mjs").then((e) => e.s);
    case "sk_SK":
      return import("./sk_SK-aad910db.mjs").then((e) => e.s);
    case "sl_SI":
      return import("./sl_SI-181bde7f.mjs").then((e) => e.s);
    case "sr_RS":
      return import("./sr_RS-b5ecb652.mjs").then((e) => e.s);
    case "sv_SE":
      return import("./sv_SE-1f34fed5.mjs").then((e) => e.s);
    case "ta_IN":
      return import("./ta_IN-7209d0ef.mjs").then((e) => e.t);
    case "th_TH":
      return import("./th_TH-73aa7524.mjs").then((e) => e.t);
    case "tk_TK":
      return import("./tk_TK-2b5d3c28.mjs").then((e) => e.t);
    case "tr_TR":
      return import("./tr_TR-8930f026.mjs").then((e) => e.t);
    case "uk_UA":
      return import("./uk_UA-bbccc34f.mjs").then((e) => e.u);
    case "ur_PK":
      return import("./ur_PK-4f63e64a.mjs").then((e) => e.u);
    case "useLocale":
      return import("./useLocale-5d628ddd.mjs").then((e) => e.u);
    case "vi_VN":
      return import("./vi_VN-e51f09f8.mjs").then((e) => e.v);
    case "zh_CN":
      return import("./zh_CN-cba2b5e1.mjs").then((e) => e.z);
    case "zh_HK":
      return import("./zh_HK-e6888c1f.mjs").then((e) => e.z);
    case "zh_TW":
      return import("./zh_TW-917988fe.mjs").then((e) => e.z);
    default:
      return import("./en_US-9c29aede.mjs").then((e) => e.e);
  }
}
class Pr {
  constructor(e = ge(), t = O.Week, r = !1, n = !1, s = void 0, i = void 0) {
    this.resources = [], this.events = [], this.eventGroups = [], this.eventGroupsAutoGenerated = !0, this.viewType = t, this.cellUnit = t === O.Day ? U.Hour : U.Day, this.showAgenda = r, this.isEventPerspective = n, this.resizing = !1, this.scrollToSpecialDayjs = !1, this.documentWidth = 0, this._shouldReloadViewType = !1, this.calendarPopoverLocale = void 0, ge.extend(mr), ge.extend(yr), ge.extend(vr), this.localeDayjs = ge, this.config = s == null ? ct : { ...ct, ...s }, this._validateMinuteStep(this.config.minuteStep), this.behaviors = i == null ? dt : { ...dt, ...i }, this._resolveDate(0, e), this._createHeaders(), this._createRenderData();
  }
  setSchedulerLocale(e, t) {
    if (!e)
      return;
    let r = e;
    typeof e == "string" && Sr(e).then((n) => {
      r = n.default, t && Object.entries(t).forEach(([s, i]) => r[s] = i);
    }).catch((n) => {
      console.error("Error loading locale:", n);
    }), this.localeDayjs.locale(r), this._shouldReloadViewType = !0, this.setViewType(this.viewType, this.showAgenda, this.isEventPerspective);
  }
  setCalendarPopoverLocale(e) {
    e && typeof e == "string" && Cr(e).then((t) => {
      this.calendarPopoverLocale = t.default || Locale;
    }).catch((t) => {
      console.error("Error loading locale:", t);
    });
  }
  setResources(e) {
    this._validateResource(e), this.resources = Array.from(new Set(e)), this._createRenderData(), this.setScrollToSpecialDayjs(!0);
  }
  setEventGroupsAutoGenerated(e) {
    this.eventGroupsAutoGenerated = e;
  }
  //optional
  setEventGroups(e) {
    this._validateEventGroups(e), this.eventGroups = Array.from(new Set(e)), this.eventGroupsAutoGenerated = !1, this._createRenderData(), this.setScrollToSpecialDayjs(!0);
  }
  setMinuteStep(e) {
    this.config.minuteStep !== e && (this._validateMinuteStep(e), this.config.minuteStep = e, this._createHeaders(), this._createRenderData());
  }
  setBesidesWidth(e) {
    e >= 0 && (this.config.besidesWidth = e);
  }
  getMinuteStepsInHour() {
    return 60 / this.config.minuteStep;
  }
  addResource(e) {
    this.resources.filter((r) => r.id === e.id).length === 0 && (this.resources.push(e), this._createRenderData());
  }
  addEventGroup(e) {
    this.eventGroups.filter((r) => r.id === e.id).length === 0 && (this.eventGroups.push(e), this._createRenderData());
  }
  removeEventGroupById(e) {
    let t = -1;
    this.eventGroups.forEach((r, n) => {
      r.id === e && (t = n);
    }), t !== -1 && this.eventGroups.splice(t, 1);
  }
  containsEventGroupId(e) {
    let t = -1;
    return this.eventGroups.forEach((r, n) => {
      r.id === e && (t = n);
    }), t !== -1;
  }
  setEvents(e) {
    this._validateEvents(e), this.events = Array.from(e), this.eventGroupsAutoGenerated && this._generateEventGroups(), this.config.recurringEventsEnabled && this._handleRecurringEvents(), this._createRenderData();
  }
  setScrollToSpecialDayjs(e) {
    this.config.scrollToSpecialDayjsEnabled && (this.scrollToSpecialDayjs = e);
  }
  prev() {
    this._resolveDate(-1), this.events = [], this._createHeaders(), this._createRenderData();
  }
  next() {
    this._resolveDate(1), this.events = [], this._createHeaders(), this._createRenderData();
  }
  setDate(e = ge(/* @__PURE__ */ new Date())) {
    this._resolveDate(0, e), this.events = [], this._createHeaders(), this._createRenderData();
  }
  setViewType(e = O.Week, t = !1, r = !1) {
    if (this.showAgenda = t, this.isEventPerspective = r, this.cellUnit = U.Day, this.viewType !== e || this._shouldReloadViewType) {
      let n = this.startDate;
      if (e === O.Custom || e === O.Custom1 || e === O.Custom2)
        this.viewType = e, this._resolveDate(0, n);
      else {
        if (this.viewType < e)
          e === O.Week ? (this.startDate = this.localeDayjs(new Date(n)).startOf("week"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("week")) : e === O.Month ? (this.startDate = this.localeDayjs(new Date(n)).startOf("month"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("month")) : e === O.Quarter ? (this.startDate = this.localeDayjs(new Date(n)).startOf("quarter"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("quarter")) : e === O.Year && (this.startDate = this.localeDayjs(new Date(n)).startOf("year"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("year"));
        else {
          let s = this.localeDayjs(new Date(this.startDate)), i = this.localeDayjs(new Date(this.endDate)).add(1, "days");
          if (this.selectDate !== void 0) {
            let l = this.localeDayjs(new Date(this.selectDate));
            l >= s && l < i && (n = this.selectDate);
          }
          let o = this.localeDayjs();
          o >= s && o < i && (n = o.startOf("day")), e === O.Day ? (this.startDate = n, this.endDate = this.startDate, this.cellUnit = U.Hour) : e === O.Week ? (this.startDate = this.localeDayjs(new Date(n)).startOf("week"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("week")) : e === O.Month ? (this.startDate = this.localeDayjs(new Date(n)).startOf("month"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("month")) : e === O.Quarter && (this.startDate = this.localeDayjs(new Date(n)).startOf("quarter"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("quarter"));
        }
        this.viewType = e;
      }
      this._shouldReloadViewType = !1, this.events = [], this._createHeaders(), this._createRenderData(), this.setScrollToSpecialDayjs(!0);
    }
  }
  setSchedulerMaxHeight(e) {
    this.config.schedulerMaxHeight = e;
  }
  isSchedulerResponsive() {
    return !!this.config.schedulerWidth.endsWith && this.config.schedulerWidth.endsWith("%");
  }
  toggleExpandStatus(e) {
    let t = !1, r = -1, n = !1, s = /* @__PURE__ */ new Map();
    this.renderData.forEach((i) => {
      if (t === !1)
        i.slotId === e && i.hasChildren && (t = !0, n = !i.expanded, i.expanded = n, r = i.indent, s.set(i.indent, {
          expanded: i.expanded,
          render: i.render
        }));
      else if (i.indent > r) {
        let o = s.get(i.indent - 1);
        i.render = o.expanded && o.render, i.hasChildren && s.set(i.indent, {
          expanded: i.expanded,
          render: i.render
        });
      } else
        t = !1;
    });
  }
  isResourceViewResponsive() {
    let e = this.getResourceTableConfigWidth();
    return !!e.endsWith && e.endsWith("%");
  }
  isContentViewResponsive() {
    let e = this.getContentCellConfigWidth();
    return !!e.endsWith && e.endsWith("%");
  }
  getSchedulerWidth() {
    let e = this.documentWidth - this.config.besidesWidth > 0 ? this.documentWidth - this.config.besidesWidth : 0;
    return this.isSchedulerResponsive() ? parseInt(e * Number(this.config.schedulerWidth.slice(0, -1)) / 100) : this.config.schedulerWidth;
  }
  getResourceTableWidth() {
    let e = this.getResourceTableConfigWidth(), t = this.getSchedulerWidth(), r = this.isResourceViewResponsive() ? parseInt(t * Number(e.slice(0, -1)) / 100) : e;
    return this.isSchedulerResponsive() && this.getContentTableWidth() + r < t && (r = t - this.getContentTableWidth()), r;
  }
  getContentCellWidth() {
    let e = this.getContentCellConfigWidth(), t = this.getSchedulerWidth();
    return this.isContentViewResponsive() ? parseInt(t * Number(e.slice(0, -1)) / 100) : e;
  }
  getContentTableWidth() {
    return this.headers.length * this.getContentCellWidth();
  }
  getScrollToSpecialDayjs() {
    return this.config.scrollToSpecialDayjsEnabled ? this.scrollToSpecialDayjs : !1;
  }
  getSlots() {
    return this.isEventPerspective ? this.eventGroups : this.resources;
  }
  getSlotById(e) {
    let t = this.getSlots(), r;
    return t.forEach((n) => {
      n.id === e && (r = n);
    }), r;
  }
  getResourceById(e) {
    let t;
    return this.resources.forEach((r) => {
      r.id === e && (t = r);
    }), t;
  }
  getTableHeaderHeight() {
    return this.config.tableHeaderHeight;
  }
  getSchedulerContentDesiredHeight() {
    let e = 0;
    return this.renderData.forEach((t) => {
      t.render && (e += t.rowHeight);
    }), e;
  }
  getCellMaxEvents() {
    return this.viewType === O.Week ? this.config.weekMaxEvents : this.viewType === O.Day ? this.config.dayMaxEvents : this.viewType === O.Month ? this.config.monthMaxEvents : this.viewType === O.Year ? this.config.yearMaxEvents : this.viewType === O.Quarter ? this.config.quarterMaxEvents : this.config.customMaxEvents;
  }
  getCalendarPopoverLocale() {
    return this.calendarPopoverLocale;
  }
  getSelectedDate() {
    return this.selectDate.format(me);
  }
  getViewStartDate() {
    return this.startDate;
  }
  getViewEndDate() {
    return this.endDate;
  }
  getViewDates() {
    return {
      startDate: this.startDate,
      endDate: this.endDate
    };
  }
  getDateLabel() {
    let e = this.localeDayjs(new Date(this.startDate)), t = this.localeDayjs(new Date(this.endDate)), r = e.format("LL");
    return e != t && (r = `${e.format("LL")}-${t.format("LL")}`), this.behaviors.getDateLabelFunc && (r = this.behaviors.getDateLabelFunc(this, this.viewType, this.startDate, this.endDate)), r;
  }
  addEvent(e) {
    this._attachEvent(e), this.eventGroupsAutoGenerated && this._generateEventGroups(), this._createRenderData();
  }
  updateEventStart(e, t) {
    this._detachEvent(e), e.start = t, this._attachEvent(e), this._createRenderData();
  }
  updateEventEnd(e, t) {
    e.end = t, this._createRenderData();
  }
  swapEvent(e, t) {
    this.isEventPerspective ? ([e.groupId, t.groupId] = [t.groupId, e.groupId], [e.groupName, t.groupName] = [t.groupName, e.groupName]) : [e.resourceId, t.resourceId] = [t.resourceId, e.resourceId], [e.start, t.start] = [t.start, e.start], [e.end, t.end] = [t.end, e.end], this._detachEvent(e), this._detachEvent(t), this._attachEvent(e), this._attachEvent(t), this._createRenderData();
  }
  swapEvent2(e, t) {
    var r = Object.assign({}, e), n = Object.assign({}, t);
    this._detachEvent(e), this._detachEvent(t), this.isEventPerspective ? (r.groupId = t.groupId, r.groupName = t.groupName, n.groupId = e.groupId, n.groupName = e.groupName) : (r.resourceId = t.resourceId, n.resourceId = e.resourceId), r.end = t.end, r.start = t.start, n.end = e.end, n.start = e.start, this._attachEvent(r), this._attachEvent(n), this._createRenderData();
  }
  moveEvent(e, t, r, n, s) {
    this._detachEvent(e), this.isEventPerspective ? (e.groupId = t, e.groupName = r) : e.resourceId = t, e.end = s, e.start = n, this._attachEvent(e), this._createRenderData();
  }
  isEventInTimeWindow(e, t, r, n) {
    return e < n && t > r;
  }
  removeEvent(e) {
    let t = this.events.indexOf(e);
    t !== -1 && (this.events.splice(t, 1), this._createRenderData());
  }
  removeEventById(e) {
    let t = -1;
    this.events.forEach((r, n) => {
      r.id === e && (t = n);
    }), t !== -1 && (this.events.splice(t, 1), this._createRenderData());
  }
  getResourceTableConfigWidth() {
    return this.showAgenda ? this.config.agendaResourceTableWidth : this.viewType === O.Week ? this.config.weekResourceTableWidth : this.viewType === O.Day ? this.config.dayResourceTableWidth : this.viewType === O.Month ? this.config.monthResourceTableWidth : this.viewType === O.Year ? this.config.yearResourceTableWidth : this.viewType === O.Quarter ? this.config.quarterResourceTableWidth : this.config.customResourceTableWidth;
  }
  getContentCellConfigWidth() {
    return this.viewType === O.Week ? this.config.weekCellWidth : this.viewType === O.Day ? this.config.dayCellWidth : this.viewType === O.Month ? this.config.monthCellWidth : this.viewType === O.Year ? this.config.yearCellWidth : this.viewType === O.Quarter ? this.config.quarterCellWidth : this.config.customCellWidth;
  }
  _setDocumentWidth(e) {
    e >= 0 && (this.documentWidth = e);
  }
  _detachEvent(e) {
    let t = this.events.indexOf(e);
    t !== -1 && this.events.splice(t, 1);
  }
  _attachEvent(e) {
    let t = 0, r = this.localeDayjs(new Date(e.start));
    this.events.forEach((n, s) => {
      let i = this.localeDayjs(new Date(n.start));
      r >= i && (t = s + 1);
    }), this.events.splice(t, 0, e);
  }
  _handleRecurringEvents() {
    let e = this.events.filter((t) => !!t.rrule);
    e.forEach((t) => {
      this._detachEvent(t);
    }), e.forEach((t) => {
      let r = this.startDate, n = this.endDate.add(1, "days"), s = this.localeDayjs(new Date(t.start)), i = this.localeDayjs(new Date(t.end)), o = Ae(t.rrule), l, u = o.origOptions.until || n.toDate();
      if (o.origOptions.dtstart && (l = this.localeDayjs(new Date(o.origOptions.dtstart))), n < u && (o.origOptions.until = n.toDate()), o = Ae(o.toString()), t.exdates || t.exrule) {
        const f = new or();
        f.rrule(o), t.exrule && f.exrule(Ae(t.exrule)), t.exdates && t.exdates.forEach((h) => {
          f.exdate(this.localeDayjs(h).toDate());
        }), o = f;
      }
      o.between(new Date(r), new Date(n)).forEach((f, h) => {
        const g = {
          ...t,
          recurringEventId: t.id,
          recurringEventStart: t.start,
          recurringEventEnd: t.end,
          id: `${t.id}-${h}`,
          start: o.origOptions.tzid ? this.localeDayjs.utc(f).utcOffset(this.localeDayjs((/* @__PURE__ */ new Date()).utcOffset)(), !0).format(V) : this.localeDayjs(new Date(f)).format(V),
          end: o.origOptions.tzid ? this.localeDayjs.utc(f).utcOffset(this.localeDayjs((/* @__PURE__ */ new Date()).utcOffset)(), !0).add(i.diff(s), "ms").add(this.localeDayjs(new Date(u)).utcOffset() - this.localeDayjs(new Date(t.start)).utcOffset(), "m").format(V) : this.localeDayjs(new Date(f)).add(i.diff(s), "ms").format(V)
        };
        let D = this.localeDayjs(g.start), m = this.localeDayjs(g.end);
        this.isEventInTimeWindow(D, m, r, n) && (!l || D >= l) && this._attachEvent(g);
      });
    });
  }
  _resolveDate(e, t = void 0) {
    if (t != null && (this.selectDate = this.localeDayjs(t)), this.viewType === O.Week)
      this.startDate = t != null ? this.localeDayjs(t).startOf("week") : this.localeDayjs(this.startDate).add(e, "weeks"), this.endDate = this.localeDayjs(this.startDate).endOf("week");
    else if (this.viewType === O.Day)
      this.startDate = t != null ? this.selectDate : this.localeDayjs(this.startDate).add(e, "days"), this.endDate = this.startDate;
    else if (this.viewType === O.Month)
      this.startDate = t != null ? this.localeDayjs(t).startOf("month") : this.localeDayjs(this.startDate).add(e, "months"), this.endDate = this.localeDayjs(this.startDate).endOf("month");
    else if (this.viewType === O.Quarter)
      this.startDate = t != null ? this.localeDayjs(t).startOf("quarter") : this.localeDayjs(this.startDate).add(e, "quarters"), this.endDate = this.localeDayjs(this.startDate).endOf("quarter");
    else if (this.viewType === O.Year)
      this.startDate = t != null ? this.localeDayjs(t).startOf("year") : this.localeDayjs(this.startDate).add(e, "years"), this.endDate = this.localeDayjs(this.startDate).endOf("year");
    else if (this.viewType === O.Custom || this.viewType === O.Custom1 || this.viewType === O.Custom2)
      if (this.behaviors.getCustomDateFunc != null) {
        let r = this.behaviors.getCustomDateFunc(this, e, t);
        this.startDate = this.localeDayjs(r.startDate), this.endDate = this.localeDayjs(r.endDate), r.cellUnit && (this.cellUnit = r.cellUnit);
      } else
        throw new Error("This is custom view type, set behaviors.getCustomDateFunc func to resolve the time window(startDate and endDate) yourself");
  }
  _createHeaders() {
    let e = [], t = this.localeDayjs(new Date(this.startDate)), r = this.localeDayjs(new Date(this.endDate)), n = t;
    if (this.showAgenda)
      e.push({ time: n.format(V), nonWorkingTime: !1 });
    else if (this.cellUnit === U.Hour) {
      t.hour() == 0 && (t = t.add(this.config.dayStartFrom, "hours")), r.hour() == 0 && (r = r.add(this.config.dayStopTo, "hours")), n = t;
      let s = -1;
      for (; n >= t && n <= r; ) {
        if (n.hour() == s) {
          n = n.add(1, "hours");
          continue;
        }
        s = n.hour();
        let i = this.getMinuteStepsInHour();
        for (let o = 0; o < i; o++) {
          let l = n.hour();
          if (l >= this.config.dayStartFrom && l <= this.config.dayStopTo) {
            let u = n.format(V), c = this.behaviors.isNonWorkingTimeFunc(this, u);
            e.push({ time: u, nonWorkingTime: c });
          }
          n = n.add(this.config.minuteStep, "minutes");
        }
      }
    } else if (this.cellUnit === U.Day)
      for (; n >= t && n <= r; ) {
        let s = n.format(V), i = n.weekday();
        if (this.config.displayWeekend || i !== 0 && i !== 6) {
          let o = this.behaviors.isNonWorkingTimeFunc(this, s);
          e.push({ time: s, nonWorkingTime: o });
        }
        n = n.add(1, "days");
      }
    else if (this.cellUnit === U.Week)
      for (; n >= t && n <= r; ) {
        let s = n.format(me);
        e.push({ time: s }), n = n.add(1, "weeks").startOf("week");
      }
    else if (this.cellUnit === U.Month)
      for (; n >= t && n <= r; ) {
        let s = n.format(me);
        e.push({ time: s }), n = n.add(1, "months").startOf("month");
      }
    else if (this.cellUnit === U.Year)
      for (; n >= t && n <= r; ) {
        let s = n.format(me);
        e.push({ time: s }), n = n.add(1, "years").startOf("year");
      }
    this.headers = e;
  }
  _createInitHeaderEvents(e) {
    let t = this.localeDayjs(new Date(e.time)), r = t.format(V), n = this.showAgenda ? this.viewType === O.Week ? t.add(1, "weeks").format(V) : this.viewType === O.Day ? t.add(1, "days").format(V) : this.viewType === O.Month ? t.add(1, "months").format(V) : this.viewType === O.Year ? t.add(1, "years").format(V) : this.viewType === O.Quarter ? t.add(1, "quarters").format(V) : this.localeDayjs(new Date(this.endDate)).add(1, "days").format(V) : this.cellUnit === U.Hour ? t.add(this.config.minuteStep, "minutes").format(V) : this.cellUnit === U.Year ? t.add(1, "years").format(me) : this.cellUnit === U.Month ? t.add(1, "months").format(me) : this.cellUnit === U.Week ? t.add(1, "weeks").format(me) : t.add(1, "days").format(V);
    return {
      time: e.time,
      nonWorkingTime: e.nonWorkingTime,
      start: r,
      end: n,
      count: 0,
      addMore: 0,
      addMoreIndex: 0,
      events: [, , ,]
    };
  }
  _createHeaderEvent(e, t, r) {
    return {
      render: e,
      span: t,
      eventItem: r
    };
  }
  _getEventSlotId(e) {
    return this.isEventPerspective ? this._getEventGroupId(e) : e.resourceId;
  }
  _getEventGroupId(e) {
    return e.groupId ? e.groupId.toString() : e.id.toString();
  }
  _getEventGroupName(e) {
    return e.groupName ? e.groupName : e.title;
  }
  _generateEventGroups() {
    let e = [], t = /* @__PURE__ */ new Set();
    this.events.forEach((r) => {
      let n = this._getEventGroupId(r), s = this._getEventGroupName(r);
      t.has(n) || (e.push({
        id: n,
        name: s,
        state: r
      }), t.add(n));
    }), this.eventGroups = e;
  }
  _createInitRenderData(e, t, r, n) {
    let s = e ? t : r, i = [], o = /* @__PURE__ */ new Map();
    s.forEach((h) => {
      let g = n.map((b) => this._createInitHeaderEvents(b)), D = {
        slotId: h.id,
        slotName: h.name,
        parentId: h.parentId,
        groupOnly: h.groupOnly,
        hasSummary: !1,
        rowMaxCount: 0,
        rowHeight: this.config.nonAgendaSlotMinHeight !== 0 ? this.config.nonAgendaSlotMinHeight : this.config.eventItemLineHeight + 2,
        headerItems: g,
        indent: 0,
        hasChildren: !1,
        expanded: !0,
        render: !0
      }, m = h.id, w;
      o.has(m) ? (w = o.get(m), w.data = D) : (w = {
        data: D,
        children: []
      }, o.set(m, w));
      let T = h.parentId;
      if (!T || T === m)
        i.push(w);
      else {
        let b;
        o.has(T) ? b = o.get(T) : (b = {
          data: void 0,
          children: []
        }, o.set(T, b)), b.children.push(w);
      }
    });
    let l = [], u;
    for (u = i.length - 1; u >= 0; u--)
      l.push(i[u]);
    let c = [], f;
    for (; l.length > 0; )
      for (f = l.pop(), f.data.indent > 0 && (f.data.render = this.config.defaultExpanded), f.children.length > 0 && (f.data.hasChildren = !0, f.data.expanded = this.config.defaultExpanded), c.push(f.data), u = f.children.length - 1; u >= 0; u--)
        f.children[u].data.indent = f.data.indent + 1, l.push(f.children[u]);
    return c;
  }
  _getSpan(e, t, r) {
    if (this.showAgenda)
      return 1;
    const n = (c, f, h) => {
      if ((h === "days" || h === "day") && c.getDate() === f.getDate() && c.getMonth() === f.getMonth())
        return 1;
      let g;
      switch (h) {
        case "days":
        case "day":
          g = 1e3 * 60 * 60 * 24;
          break;
        case "minutes":
        case "minute":
          g = 1e3 * 60;
          break;
        default:
          return 0;
      }
      const D = c.getTime(), w = (f.getTime() - D) / g;
      return w < 0 ? 0 : w;
    };
    let s = new Date(e), i = new Date(t), o = 0, l = new Date(this.startDate), u = new Date(this.endDate);
    if (this.viewType === O.Day) {
      if (r.length > 0) {
        const c = new Date(r[0].time);
        c.getDate() > s.getDate() && c.getDate() < i.getDate() ? o = 1440 / this.config.minuteStep : c.getDate() > s.getDate() && c.getDate() === i.getDate() ? o = Math.ceil(n(c, i, "minutes") / this.config.minuteStep) : c.getDate() === s.getDate() && c.getDate() < i.getDate() ? (c.setHours(23, 59, 59), o = Math.ceil(n(s, c, "minutes") / this.config.minuteStep)) : (c.getDate() === s.getDate() && c.getDate() === i.getDate() || i.getDate() === s.getDate()) && (o = Math.ceil(n(s, i, "minutes") / this.config.minuteStep));
      }
    } else if (this.viewType === O.Week) {
      const c = l < s ? s : l;
      o = Math.ceil(n(c, i, "days"));
    } else if (this.viewType === O.Month) {
      const c = s.getMonth() === i.getMonth() ? i : ge(s).endOf("month").toDate();
      o = Math.ceil(n(s, c, "days"));
    } else if (this.viewType === O.Quarter || this.viewType === O.Year)
      o = Math.ceil(n(s, i, "days"));
    else {
      l.setHours(0, 0, 0, 0), u.setHours(23, 59, 59), this.cellUnit === U.Day && (i.setHours(23, 59, 59), s.setHours(0, 0, 0, 0));
      const c = this.cellUnit === U.Day ? "days" : "minutes", f = this.cellUnit === U.Day ? 1 : this.config.minuteStep;
      l >= s && i <= u ? o = Math.ceil(n(l, i, c) / f) : l > s && i > u ? o = Math.ceil(n(l, u, c) / f) : l <= s && i >= u ? o = Math.ceil(n(s, u, c) / f) : o = Math.ceil(n(s, i, c) / f);
    }
    return o;
  }
  _validateResource(e) {
    if (Object.prototype.toString.call(e) !== "[object Array]")
      throw new Error("Resources should be Array object");
    e.forEach((t, r) => {
      if (t == null)
        throw console.error(`Resource undefined: ${r}`), new Error(`Resource undefined: ${r}`);
      if (t.id == null || t.name == null)
        throw console.error("Resource property missed", r, t), new Error(`Resource property undefined: ${r}`);
    });
  }
  _validateEventGroups(e) {
    if (Object.prototype.toString.call(e) !== "[object Array]")
      throw new Error("Event groups should be Array object");
    e.forEach((t, r) => {
      if (t == null)
        throw console.error(`Event group undefined: ${r}`), new Error(`Event group undefined: ${r}`);
      if (t.id == null || t.name == null)
        throw console.error("Event group property missed", r, t), new Error(`Event group property undefined: ${r}`);
    });
  }
  _validateEvents(e) {
    if (Object.prototype.toString.call(e) !== "[object Array]")
      throw new Error("Events should be Array object");
    e.forEach((t, r) => {
      if (t == null)
        throw console.error(`Event undefined: ${r}`), new Error(`Event undefined: ${r}`);
      if (t.id == null || t.resourceId == null || t.title == null || t.start == null || t.end == null)
        throw console.error("Event property missed", r, t), new Error(`Event property undefined: ${r}`);
    });
  }
  _validateMinuteStep(e) {
    if (60 % e !== 0)
      throw console.error("Minute step is not set properly - 60 minutes must be divisible without remainder by this number"), new Error("Minute step is not set properly - 60 minutes must be divisible without remainder by this number");
  }
  _compare(e, t) {
    let r = this.localeDayjs(e.start), n = this.localeDayjs(t.start);
    if (r !== n)
      return r < n ? -1 : 1;
    let s = this.localeDayjs(e.end), i = this.localeDayjs(t.end);
    return s !== i ? s < i ? -1 : 1 : e.id < t.id ? -1 : 1;
  }
  _createRenderData() {
    let e = this._createInitRenderData(this.isEventPerspective, this.eventGroups, this.resources, this.headers), t = this.getCellMaxEvents();
    const r = 30;
    this.events.forEach((n) => {
      let s = e.filter((i) => i.slotId === this._getEventSlotId(n));
      if (s.length > 0) {
        let i = s[0], o = this._getSpan(n.start, n.end, this.headers), l = new Date(n.start), u = new Date(n.end), c = -1;
        i.headerItems.forEach((f, h) => {
          let g = new Date(f.start);
          if (new Date(f.end) > l && g < u) {
            if (f.count = f.count + 1, f.count > i.rowMaxCount) {
              i.rowMaxCount = f.count;
              let T = (t <= r && i.rowMaxCount > t ? t : i.rowMaxCount) * this.config.eventItemLineHeight + (this.config.creatable && this.config.checkConflict === !1 ? 20 : 2);
              T > i.rowHeight && (i.rowHeight = T);
            }
            if (c === -1) {
              let w = 0;
              for (; f.events[w] !== void 0; )
                w++;
              c = w;
            }
            let m = g <= l || h === 0;
            if (m === !1) {
              let w = i.headerItems[h - 1], T = new Date(w.start);
              (new Date(w.end) <= l || T >= u) && (m = !0);
            }
            f.events[c] = this._createHeaderEvent(m, o, n);
          }
        });
      }
    }), (t <= r || this.behaviors.getSummaryFunc !== void 0) && e.forEach((n) => {
      let s = !1;
      if (n.headerItems.forEach((i) => {
        if (t <= r) {
          let o = 0, l = 0, u = 0;
          for (; u < t - 1; )
            i.events[u] !== void 0 && (o++, l = u + 1), u++;
          i.events[u] !== void 0 ? o + 1 < i.count && (i.addMore = i.count - o, i.addMoreIndex = l) : o < i.count && (i.addMore = i.count - o, i.addMoreIndex = l);
        }
        if (this.behaviors.getSummaryFunc !== void 0) {
          let o = [];
          i.events.forEach((l) => {
            l && l.eventItem && o.push(l.eventItem);
          }), i.summary = this.behaviors.getSummaryFunc(this, o, n.slotId, n.slotName, i.start, i.end), i.summary && i.summary.text != null && (s = !0);
        }
      }), n.hasSummary = s, s) {
        let o = ((t <= r && n.rowMaxCount > t ? t : n.rowMaxCount) + 1) * this.config.eventItemLineHeight + (this.config.creatable && this.config.checkConflict === !1 ? 20 : 2);
        o > n.rowHeight && (n.rowHeight = o);
      }
    }), this.renderData = e;
  }
  _startResizing() {
    this.resizing = !0;
  }
  _stopResizing() {
    this.resizing = !1;
  }
  _isResizing() {
    return this.resizing;
  }
}
const Lr = {
  resources: [
    { id: "r0", name: "Resource0", groupOnly: !0 },
    { id: "r1", name: "Resource1", parentId: "r0" },
    { id: "r2", name: "Resource2", parentId: "r3" },
    { id: "r3", name: "Resource3", parentId: "r1" },
    { id: "r4", name: "Resource4" },
    { id: "r5", name: "Resource5" },
    { id: "r6", name: "Resource6" },
    { id: "r7", name: "Resource7" }
  ],
  events: [
    { id: 1, start: "2022-12-18 09:30:00", end: "2022-12-19 23:30:00", resourceId: "r1", title: "I am finished", bgColor: "#D9D9D9", showPopover: !1 },
    { id: 2, start: "2022-12-18 12:30:00", end: "2022-12-26 23:30:00", resourceId: "r2", title: "I am not resizable", resizable: !1 },
    { id: 3, start: "2022-12-19 12:30:00", end: "2022-12-20 23:30:00", resourceId: "r3", title: "I am not movable", movable: !1 },
    { id: 4, start: "2022-12-19 14:30:00", end: "2022-12-20 23:30:00", resourceId: "r4", title: "I am not start-resizable", startResizable: !1 },
    { id: 5, start: "2022-12-19 15:30:00", end: "2022-12-20 23:30:00", resourceId: "r5", title: "I am not end-resizable", endResizable: !1 },
    { id: 6, start: "2022-12-19 15:35:00", end: "2022-12-19 23:30:00", resourceId: "r6", title: "I am normal" },
    { id: 7, start: "2022-12-19 15:40:00", end: "2022-12-20 23:30:00", resourceId: "r7", title: "I am exceptional", bgColor: "#FA9E95" },
    { id: 8, start: "2022-12-19 15:50:00", end: "2022-12-19 23:30:00", resourceId: "r1", title: "I am locked", movable: !1, resizable: !1, bgColor: "red" },
    { id: 9, start: "2022-12-19 16:30:00", end: "2022-12-27 23:30:00", resourceId: "r1", title: "R1 has many tasks 1" },
    { id: 10, start: "2022-12-19 17:30:00", end: "2022-12-19 23:30:00", resourceId: "r1", title: "R1 has recurring tasks every week on Tuesday, Friday", rrule: "FREQ=WEEKLY;DTSTART=20221219T013000Z;BYDAY=TU,FR", bgColor: "#f759ab" },
    { id: 11, start: "2022-12-19 18:30:00", end: "2022-12-20 23:30:00", resourceId: "r1", title: "R1 has many tasks 3" },
    { id: 12, start: "2022-12-20 18:30:00", end: "2022-12-20 23:30:00", resourceId: "r1", title: "R1 has many tasks 4" },
    { id: 13, start: "2022-12-21 18:30:00", end: "2022-12-24 23:30:00", resourceId: "r1", title: "R1 has many tasks 5" },
    { id: 14, start: "2022-12-23 18:30:00", end: "2022-12-27 23:30:00", resourceId: "r1", title: "R1 has many tasks 6" }
  ],
  eventsForTaskView: [
    { id: 1, start: "2022-12-18 09:30:00", end: "2022-12-18 23:30:00", resourceId: "r1", title: "I am finished", bgColor: "#D9D9D9", groupId: 1, groupName: "Task1" },
    { id: 2, start: "2022-12-18 12:30:00", end: "2022-12-26 23:30:00", resourceId: "r2", title: "I am not resizable", resizable: !1, groupId: 2, groupName: "Task2" },
    { id: 3, start: "2022-12-19 12:30:00", end: "2022-12-20 23:30:00", resourceId: "r3", title: "I am not movable", movable: !1, groupId: 3, groupName: "Task3" },
    { id: 7, start: "2022-12-19 15:40:00", end: "2022-12-20 23:30:00", resourceId: "r7", title: "I am exceptional", bgColor: "#FA9E95", groupId: 4, groupName: "Task4" },
    { id: 4, start: "2022-12-20 14:30:00", end: "2022-12-21 23:30:00", resourceId: "r4", title: "I am not start-resizable", startResizable: !1, groupId: 1, groupName: "Task1" },
    { id: 5, start: "2022-12-21 15:30:00", end: "2022-12-22 23:30:00", resourceId: "r5", title: "I am not end-resizable", endResizable: !1, groupId: 3, groupName: "Task3" },
    { id: 9, start: "2022-12-21 16:30:00", end: "2022-12-21 23:30:00", resourceId: "r1", title: "R1 has many tasks", groupId: 4, groupName: "Task4" },
    { id: 6, start: "2022-12-22 15:35:00", end: "2022-12-23 23:30:00", resourceId: "r6", title: "I am normal", groupId: 1, groupName: "Task1" },
    {
      id: 8,
      start: "2022-12-25 15:50:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r1",
      title: "I am locked",
      movable: !1,
      resizable: !1,
      bgColor: "red",
      groupId: 1,
      groupName: "Task1"
    },
    { id: 10, start: "2022-12-26 18:30:00", end: "2022-12-26 23:30:00", resourceId: "r2", title: "R2 has many tasks", groupId: 4, groupName: "Task4" },
    { id: 11, start: "2022-12-27 18:30:00", end: "2022-12-27 23:30:00", resourceId: "r4", title: "R4 has many tasks", groupId: 4, groupName: "Task4" },
    { id: 12, start: "2022-12-28 18:30:00", end: "2022-12-28 23:30:00", resourceId: "r6", title: "R6 has many tasks", groupId: 3, groupName: "Task3" }
  ],
  eventsForCustomEventStyle: [
    { id: 1, start: "2022-12-18 09:30:00", end: "2022-12-19 23:30:00", resourceId: "r1", title: "I am finished", bgColor: "#D9D9D9", type: 1 },
    { id: 2, start: "2022-12-18 12:30:00", end: "2022-12-26 23:30:00", resourceId: "r2", title: "I am not resizable", resizable: !1, type: 2 },
    { id: 3, start: "2022-12-19 12:30:00", end: "2022-12-20 23:30:00", resourceId: "r3", title: "I am not movable", movable: !1, type: 3 },
    { id: 4, start: "2022-12-19 14:30:00", end: "2022-12-20 23:30:00", resourceId: "r4", title: "I am not start-resizable", startResizable: !1, type: 1 },
    { id: 5, start: "2022-12-19 15:30:00", end: "2022-12-20 23:30:00", resourceId: "r5", title: "I am not end-resizable", endResizable: !1, type: 2 },
    { id: 6, start: "2022-12-19 15:35:00", end: "2022-12-19 23:30:00", resourceId: "r6", title: "I am normal", type: 3 },
    { id: 7, start: "2022-12-19 15:40:00", end: "2022-12-20 23:30:00", resourceId: "r7", title: "I am exceptional", bgColor: "#FA9E95", type: 1 },
    { id: 8, start: "2022-12-19 15:50:00", end: "2022-12-19 23:30:00", resourceId: "r1", title: "I am locked", movable: !1, resizable: !1, bgColor: "red", type: 2 },
    { id: 9, start: "2022-12-19 16:30:00", end: "2022-12-27 23:30:00", resourceId: "r1", title: "R1 has many tasks 1", type: 3 },
    { id: 10, start: "2022-12-20 18:30:00", end: "2022-12-20 23:30:00", resourceId: "r1", title: "R1 has many tasks 2", type: 1 },
    { id: 11, start: "2022-12-21 18:30:00", end: "2022-12-22 23:30:00", resourceId: "r1", title: "R1 has many tasks 3", type: 2 },
    { id: 12, start: "2022-12-23 18:30:00", end: "2022-12-27 23:30:00", resourceId: "r1", title: "R1 has many tasks 4", type: 3 }
  ]
}, Rr = ut.Button, Tr = ut.Group, Tt = ({ onViewChange: C, goNext: e, goBack: t, onSelectDate: r, schedulerData: n, leftCustomHeader: s, rightCustomHeader: i }) => {
  var Y, k;
  const [o, l] = Me(!1), [u, c] = Me(!1), [f, h] = Me(!1), { viewType: g, showAgenda: D, isEventPerspective: m, config: w } = n, T = n.getDateLabel(), b = n.getSelectedDate(), M = (k = (Y = n.getCalendarPopoverLocale()) == null ? void 0 : Y.default) == null ? void 0 : k.Calendar, A = `${g}${D ? 1 : 0}${m ? 1 : 0}`, $ = (S, G, J = void 0) => {
    const { config: R } = n;
    G ? R.viewChangeSpinEnabled && l(!0) : R.dateChangeSpinEnabled && c(!0);
    const x = () => {
      J !== void 0 ? S(J) : S(), G ? R.viewChangeSpinEnabled && l(!1) : R.dateChangeSpinEnabled && c(!1);
    };
    R.viewChangeSpinEnabled || R.dateChangeSpinEnabled ? setTimeout(x, R.schedulerHeaderEventsFuncsTimeoutMs) : x();
  }, H = /* @__PURE__ */ d.jsx("div", { className: "popover-calendar", children: /* @__PURE__ */ d.jsx(
    Jt,
    {
      locale: M,
      defaultValue: ge(b),
      fullscreen: !1,
      onSelect: (S) => {
        h(!1), $(r, !1, S.format(me));
      }
    }
  ) }), N = w.views.map((S) => /* @__PURE__ */ d.jsx(
    Rr,
    {
      value: `${S.viewType}${S.showAgenda ? 1 : 0}${S.isEventPerspective ? 1 : 0}`,
      children: /* @__PURE__ */ d.jsx("span", { style: { margin: "0px 8px" }, children: S.viewName })
    },
    `${S.viewType}${S.showAgenda ? 1 : 0}${S.isEventPerspective ? 1 : 0}`
  ));
  return /* @__PURE__ */ d.jsxs(we, { gutter: [10, 10], type: "flex", align: "middle", justify: "space-between", style: { marginBottom: "24px" }, children: [
    s,
    /* @__PURE__ */ d.jsx(de, { children: /* @__PURE__ */ d.jsx("div", { className: "header2-text", children: /* @__PURE__ */ d.jsxs(it, { children: [
      /* @__PURE__ */ d.jsxs("div", { children: [
        /* @__PURE__ */ d.jsx(ir, { type: "left", style: { marginRight: "8px" }, className: "icon-nav", onClick: () => $(t, !1) }),
        w.calendarPopoverEnabled ? /* @__PURE__ */ d.jsx(Fe, { content: H, placement: "bottomLeft", trigger: "click", open: f, onOpenChange: h, children: /* @__PURE__ */ d.jsx("span", { className: "header2-text-label", style: { cursor: "pointer" }, children: T }) }) : /* @__PURE__ */ d.jsx("span", { className: "header2-text-label", children: T }),
        /* @__PURE__ */ d.jsx(ar, { type: "right", style: { marginLeft: "8px" }, className: "icon-nav", onClick: () => $(e, !1) })
      ] }),
      /* @__PURE__ */ d.jsx(at, { spinning: u })
    ] }) }) }),
    /* @__PURE__ */ d.jsx(de, { children: /* @__PURE__ */ d.jsxs(it, { children: [
      /* @__PURE__ */ d.jsx(at, { spinning: o }),
      /* @__PURE__ */ d.jsx(Tr, { buttonStyle: "solid", defaultValue: A, size: "default", onChange: (S) => $(C, !0, S), children: N })
    ] }) }),
    i
  ] });
};
Tt.propTypes = {
  onViewChange: p.func.isRequired,
  goNext: p.func.isRequired,
  goBack: p.func.isRequired,
  onSelectDate: p.func.isRequired,
  schedulerData: p.object.isRequired,
  leftCustomHeader: p.object,
  rightCustomHeader: p.object
};
const Nr = (C) => (e) => /* @__PURE__ */ d.jsx(tr, { backend: lr, children: /* @__PURE__ */ d.jsx(C, { ...e }) });
class jr extends ke {
  constructor(t) {
    super(t);
    P(this, "onWindowResize", (t) => {
      const { schedulerData: r } = this.props;
      r._setDocumentWidth(document.documentElement.clientWidth), this.setState({ documentWidth: document.documentElement.clientWidth, documentHeight: document.documentElement.clientHeight });
    });
    P(this, "resolveScrollbarSize", () => {
      this.props;
      let t = 17, r = 17, n = 17, s = 17;
      this.schedulerContent && (t = this.schedulerContent.offsetHeight - this.schedulerContent.clientHeight, r = this.schedulerContent.offsetWidth - this.schedulerContent.clientWidth), this.schedulerResource && (n = this.schedulerResource.offsetHeight - this.schedulerResource.clientHeight, s = this.schedulerResource.offsetWidth - this.schedulerResource.clientWidth);
      let i = {}, o = !1;
      t != this.state.contentScrollbarHeight && (i = { ...i, contentScrollbarHeight: t }, o = !0), r != this.state.contentScrollbarWidth && (i = { ...i, contentScrollbarWidth: r }, o = !0), n != this.state.resourceScrollbarHeight && (i = { ...i, resourceScrollbarHeight: n }, o = !0), s != this.state.resourceScrollbarWidth && (i = { ...i, resourceScrollbarWidth: s }, o = !0), o && this.setState(i);
    });
    P(this, "schedulerHeadRef", (t) => {
      this.schedulerHead = t;
    });
    P(this, "onSchedulerHeadMouseOver", () => {
      this.currentArea = 2;
    });
    P(this, "onSchedulerHeadMouseOut", () => {
      this.currentArea = -1;
    });
    P(this, "onSchedulerHeadScroll", (t, r) => {
      (this.currentArea === 2 || this.currentArea === -1) && this.schedulerContent.scrollLeft != this.schedulerHead.scrollLeft && (this.schedulerContent.scrollLeft = this.schedulerHead.scrollLeft);
    });
    P(this, "schedulerResourceRef", (t) => {
      this.schedulerResource = t;
    });
    P(this, "onSchedulerResourceMouseOver", () => {
      this.currentArea = 1;
    });
    P(this, "onSchedulerResourceMouseOut", () => {
      this.currentArea = -1;
    });
    P(this, "onSchedulerResourceScroll", (t, r) => {
      this.schedulerResource && (this.currentArea === 1 || this.currentArea === -1) && this.schedulerContent.scrollTop != this.schedulerResource.scrollTop && (this.schedulerContent.scrollTop = this.schedulerResource.scrollTop);
    });
    P(this, "schedulerContentRef", (t) => {
      this.schedulerContent = t;
    });
    P(this, "schedulerContentBgTableRef", (t) => {
      this.schedulerContentBgTable = t;
    });
    P(this, "onSchedulerContentMouseOver", () => {
      this.currentArea = 0;
    });
    P(this, "onSchedulerContentMouseOut", () => {
      this.currentArea = -1;
    });
    P(this, "onSchedulerContentScroll", (t, r) => {
      this.schedulerResource && (this.currentArea === 0 || this.currentArea === -1) && (this.schedulerHead.scrollLeft != this.schedulerContent.scrollLeft && (this.schedulerHead.scrollLeft = this.schedulerContent.scrollLeft), this.schedulerResource.scrollTop != this.schedulerContent.scrollTop && (this.schedulerResource.scrollTop = this.schedulerContent.scrollTop));
      const { schedulerData: n, onScrollLeft: s, onScrollRight: i, onScrollTop: o, onScrollBottom: l } = this.props;
      this.schedulerContent.scrollLeft !== this.scrollLeft ? (this.schedulerContent.scrollLeft === 0 && s != null && s(n, this.schedulerContent, this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth), Math.round(this.schedulerContent.scrollLeft) === this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth && i != null && i(n, this.schedulerContent, this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth)) : this.schedulerContent.scrollTop !== this.scrollTop && (this.schedulerContent.scrollTop === 0 && o != null && o(n, this.schedulerContent, this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight), Math.round(this.schedulerContent.scrollTop) === this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight && l != null && l(n, this.schedulerContent, this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight)), this.scrollLeft = this.schedulerContent.scrollLeft, this.scrollTop = this.schedulerContent.scrollTop;
    });
    P(this, "onViewChange", (t) => {
      const { onViewChange: r, schedulerData: n } = this.props;
      let s = parseInt(t.target.value.charAt(0)), i = t.target.value.charAt(1) === "1", o = t.target.value.charAt(2) === "1";
      r(n, { viewType: s, showAgenda: i, isEventPerspective: o }), this.setState({ ...this.state, spinning: !1 });
    });
    P(this, "goNext", () => {
      const { nextClick: t, schedulerData: r } = this.props;
      t(r);
    });
    P(this, "goBack", () => {
      const { prevClick: t, schedulerData: r } = this.props;
      t(r);
    });
    P(this, "onSelect", (t) => {
      const { onSelectDate: r, schedulerData: n } = this.props;
      r(n, t);
    });
    const { schedulerData: r, dndSources: n, parentRef: s } = t;
    let i = [];
    i.push(new ht((l) => l.eventItem, Be, r.config.dragAndDropEnabled)), n != null && n.length > 0 && (i = [...i, ...n]);
    let o = new ur(i, yt);
    this.currentArea = -1, this.state = {
      dndContext: o,
      contentScrollbarHeight: 17,
      contentScrollbarWidth: 17,
      resourceScrollbarHeight: 17,
      resourceScrollbarWidth: 17,
      documentWidth: 0,
      documentHeight: 0
    }, this.scrollLeft = 0, this.scrollTop = 0, (r.isSchedulerResponsive() && !r.config.responsiveByParent || s === void 0) && (r._setDocumentWidth(document.documentElement.clientWidth), window.onresize = this.onWindowResize);
  }
  componentDidMount(t, r) {
    const { schedulerData: n, parentRef: s } = this.props;
    this.resolveScrollbarSize(), s !== void 0 && n.config.responsiveByParent && s.current && (n._setDocumentWidth(s.current.offsetWidth), this.ulObserver = new ResizeObserver((i, o) => {
      if (s.current) {
        const l = s.current.offsetWidth, u = s.current.offsetHeight;
        n._setDocumentWidth(l), this.setState({
          documentWidth: l,
          documentHeight: u
        });
      }
    }), this.ulObserver.observe(s.current));
  }
  componentDidUpdate(t, r) {
    this.resolveScrollbarSize();
    const { schedulerData: n } = this.props, { localeDayjs: s, behaviors: i } = n;
    if (n.getScrollToSpecialDayjs() && i.getScrollSpecialDayjsFunc && this.schedulerContent && this.schedulerContent.scrollWidth > this.schedulerContent.clientWidth) {
      let o = s(new Date(n.startDate)).startOf("day"), l = s(new Date(n.endDate)).endOf("day"), u = i.getScrollSpecialDayjsFunc(n, o, l);
      if (u >= o && u <= l) {
        let c = 0;
        n.headers.forEach((f) => {
          let h = s(new Date(f.time));
          u >= h && c++;
        }), this.schedulerContent.scrollLeft = (c - 1) * n.getContentCellWidth(), n.setScrollToSpecialDayjs(!1);
      }
    }
  }
  render() {
    const { schedulerData: t, leftCustomHeader: r, rightCustomHeader: n } = this.props, { viewType: s, renderData: i, showAgenda: o, config: l } = t, u = t.getSchedulerWidth();
    let c = /* @__PURE__ */ d.jsx("tr", {});
    if (o)
      c = /* @__PURE__ */ d.jsx(bt, { ...this.props });
    else {
      let h = t.getResourceTableWidth(), g = u - (l.resourceViewEnabled ? h : 0), D = t.getContentTableWidth() - 1, m = this.state.dndContext.getDropTarget(l.dragAndDropEnabled), w = this.state.dndContext.getDndSource(), b = i.filter((R) => R.render).map((R) => /* @__PURE__ */ be(m, { ...this.props, key: R.slotId, resourceEvents: R, dndSource: w })), M = this.state.contentScrollbarHeight, A = this.state.contentScrollbarWidth, $ = this.state.resourceScrollbarHeight, H = this.state.resourceScrollbarWidth, N = l.schedulerContentHeight, Y = $ === 0 ? M : 0, k = M === 0 ? $ : 0, S = {
        overflowX: s === O.Week ? "hidden" : "auto",
        overflowY: "auto",
        margin: "0px",
        position: "relative",
        height: N,
        paddingBottom: k
      }, G = {
        height: N,
        overflowX: "auto",
        overflowY: "auto",
        width: h + H - 2,
        margin: `0px -${A}px 0px 0px`
      };
      l.schedulerMaxHeight > 0 && (S = {
        ...S,
        maxHeight: l.schedulerMaxHeight - l.tableHeaderHeight
      }, G = {
        ...G,
        maxHeight: l.schedulerMaxHeight - l.tableHeaderHeight
      });
      let J = t.isEventPerspective ? l.taskName : l.resourceName;
      c = /* @__PURE__ */ d.jsxs("tr", { children: [
        /* @__PURE__ */ d.jsx("td", { style: { display: l.resourceViewEnabled ? void 0 : "none", width: h, verticalAlign: "top" }, children: /* @__PURE__ */ d.jsxs("div", { className: "resource-view", children: [
          /* @__PURE__ */ d.jsx("div", { style: { overflow: "hidden", borderBottom: "1px solid #e9e9e9", height: l.tableHeaderHeight }, children: /* @__PURE__ */ d.jsx("div", { style: { overflowX: "scroll", overflowY: "hidden", margin: `0px 0px -${M}px` }, children: /* @__PURE__ */ d.jsx("table", { className: "resource-table", children: /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { style: { height: l.tableHeaderHeight }, children: /* @__PURE__ */ d.jsx("th", { className: "header3-text", children: J }) }) }) }) }) }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              style: G,
              ref: this.schedulerResourceRef,
              onMouseOver: this.onSchedulerResourceMouseOver,
              onMouseOut: this.onSchedulerResourceMouseOut,
              onScroll: this.onSchedulerResourceScroll,
              children: /* @__PURE__ */ d.jsx(ft, { ...this.props, contentScrollbarHeight: Y })
            }
          )
        ] }) }),
        /* @__PURE__ */ d.jsx("td", { children: /* @__PURE__ */ d.jsxs("div", { className: "scheduler-view", style: { width: g, verticalAlign: "top" }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { overflow: "hidden", borderBottom: "1px solid #e9e9e9", height: l.tableHeaderHeight }, children: /* @__PURE__ */ d.jsx(
            "div",
            {
              style: { overflowX: "scroll", overflowY: "hidden", margin: `0px 0px -${M}px` },
              ref: this.schedulerHeadRef,
              onMouseOver: this.onSchedulerHeadMouseOver,
              onMouseOut: this.onSchedulerHeadMouseOut,
              onScroll: this.onSchedulerHeadScroll,
              children: /* @__PURE__ */ d.jsx("div", { style: { paddingRight: `${A}px`, width: D + A }, children: /* @__PURE__ */ d.jsx("table", { className: "scheduler-bg-table", children: /* @__PURE__ */ d.jsx(pt, { ...this.props }) }) })
            }
          ) }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              style: S,
              ref: this.schedulerContentRef,
              onMouseOver: this.onSchedulerContentMouseOver,
              onMouseOut: this.onSchedulerContentMouseOut,
              onScroll: this.onSchedulerContentScroll,
              children: /* @__PURE__ */ d.jsxs("div", { style: { width: D }, children: [
                /* @__PURE__ */ d.jsx("div", { className: "scheduler-content", children: /* @__PURE__ */ d.jsx("table", { className: "scheduler-content-table", children: /* @__PURE__ */ d.jsx("tbody", { children: b }) }) }),
                /* @__PURE__ */ d.jsx("div", { className: "scheduler-bg", children: /* @__PURE__ */ d.jsx("table", { className: "scheduler-bg-table", style: { width: D }, ref: this.schedulerContentBgTableRef, children: /* @__PURE__ */ d.jsx(mt, { ...this.props }) }) })
              ] })
            }
          )
        ] }) })
      ] });
    }
    let f = /* @__PURE__ */ d.jsx("div", {});
    return l.headerEnabled && (f = /* @__PURE__ */ d.jsx(
      Tt,
      {
        onViewChange: this.onViewChange,
        schedulerData: t,
        onSelectDate: this.onSelect,
        goNext: this.goNext,
        goBack: this.goBack,
        rightCustomHeader: n,
        leftCustomHeader: r
      }
    )), /* @__PURE__ */ d.jsxs("table", { id: "RBS-Scheduler-root", className: "scheduler", style: { width: `${u}px` }, children: [
      /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: "2", children: f }) }) }),
      /* @__PURE__ */ d.jsx("tbody", { children: c })
    ] });
  }
}
P(jr, "propTypes", {
  parentRef: p.object,
  schedulerData: p.object.isRequired,
  prevClick: p.func.isRequired,
  nextClick: p.func.isRequired,
  onViewChange: p.func.isRequired,
  onSelectDate: p.func.isRequired,
  onSetAddMoreState: p.func,
  updateEventStart: p.func,
  updateEventEnd: p.func,
  moveEvent: p.func,
  movingEvent: p.func,
  leftCustomHeader: p.object,
  rightCustomHeader: p.object,
  newEvent: p.func,
  subtitleGetter: p.func,
  eventItemClick: p.func,
  viewEventClick: p.func,
  viewEventText: p.string,
  viewEvent2Click: p.func,
  viewEvent2Text: p.string,
  conflictOccurred: p.func,
  eventItemTemplateResolver: p.func,
  dndSources: p.array,
  slotClickedFunc: p.func,
  toggleExpandFunc: p.func,
  slotItemTemplateResolver: p.func,
  nonAgendaCellHeaderTemplateResolver: p.func,
  onScrollLeft: p.func,
  onScrollRight: p.func,
  onScrollTop: p.func,
  onScrollBottom: p.func
});
export {
  hr as A,
  U as C,
  me as D,
  jr as S,
  O as V,
  Nr as W,
  V as a,
  Pr as b,
  We as c,
  fr as d,
  ve as e,
  ht as f,
  Oe as g,
  ur as h,
  Lr as i
};
