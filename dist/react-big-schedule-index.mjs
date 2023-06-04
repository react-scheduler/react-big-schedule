var Qt = Object.defineProperty;
var Jt = (R, t, e) => t in R ? Qt(R, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : R[t] = e;
var P = (R, t, e) => (Jt(R, typeof t != "symbol" ? t + "" : t, e), e);
import ze, { Component as We, createElement as be, useState as ke } from "react";
import p, { PropTypes as Y } from "prop-types";
import { Row as we, Col as de, Popover as Fe, Radio as ut, Calendar as Zt, Space as it, Spin as at } from "antd";
import { DragSource as Kt, DropTarget as es, DndProvider as ts } from "react-dnd";
import { MinusSquareOutlined as ss, PlusSquareOutlined as rs, CloseOutlined as ns, LeftOutlined as is, RightOutlined as as } from "@ant-design/icons";
import { rrulestr as Ae, RRuleSet as os } from "rrule";
import { HTML5Backend as ls } from "react-dnd-html5-backend";
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oe(R) {
  return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default") ? R.default : R;
}
var Ye = { exports: {} }, Se = {};
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
function cs() {
  if (ot)
    return Se;
  ot = 1;
  var R = ze, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, r = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(o, l, u) {
    var c, f = {}, h = null, v = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l)
      s.call(l, c) && !n.hasOwnProperty(c) && (f[c] = l[c]);
    if (o && o.defaultProps)
      for (c in l = o.defaultProps, l)
        f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: o, key: h, ref: v, props: f, _owner: r.current };
  }
  return Se.Fragment = e, Se.jsx = i, Se.jsxs = i, Se;
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
function ds() {
  return lt || (lt = 1, process.env.NODE_ENV !== "production" && function() {
    var R = ze, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), D = Symbol.iterator, g = "@@iterator";
    function w(a) {
      if (a === null || typeof a != "object")
        return null;
      var E = D && a[D] || a[g];
      return typeof E == "function" ? E : null;
    }
    var T = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(a) {
      {
        for (var E = arguments.length, I = new Array(E > 1 ? E - 1 : 0), L = 1; L < E; L++)
          I[L - 1] = arguments[L];
        k("error", a, I);
      }
    }
    function k(a, E, I) {
      {
        var L = T.ReactDebugCurrentFrame, G = L.getStackAddendum();
        G !== "" && (E += "%s", I = I.concat([G]));
        var K = I.map(function(B) {
          return String(B);
        });
        K.unshift("Warning: " + E), Function.prototype.apply.call(console[a], console, K);
      }
    }
    var A = !1, $ = !1, H = !1, N = !1, z = !1, W;
    W = Symbol.for("react.module.reference");
    function C(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === s || a === n || z || a === r || a === u || a === c || N || a === v || A || $ || H || typeof a == "object" && a !== null && (a.$$typeof === h || a.$$typeof === f || a.$$typeof === i || a.$$typeof === o || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === W || a.getModuleId !== void 0));
    }
    function X(a, E, I) {
      var L = a.displayName;
      if (L)
        return L;
      var G = E.displayName || E.name || "";
      return G !== "" ? I + "(" + G + ")" : I;
    }
    function Z(a) {
      return a.displayName || "Context";
    }
    function S(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case s:
          return "Fragment";
        case e:
          return "Portal";
        case n:
          return "Profiler";
        case r:
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
            return Z(E) + ".Consumer";
          case i:
            var I = a;
            return Z(I._context) + ".Provider";
          case l:
            return X(a, a.render, "ForwardRef");
          case f:
            var L = a.displayName || null;
            return L !== null ? L : S(a.type) || "Memo";
          case h: {
            var G = a, K = G._payload, B = G._init;
            try {
              return S(B(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, y = 0, j, m, M, _, F, Q, J;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function ae() {
      {
        if (y === 0) {
          j = console.log, m = console.info, M = console.warn, _ = console.error, F = console.group, Q = console.groupCollapsed, J = console.groupEnd;
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
    function ne() {
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
              value: m
            }),
            warn: x({}, a, {
              value: M
            }),
            error: x({}, a, {
              value: _
            }),
            group: x({}, a, {
              value: F
            }),
            groupCollapsed: x({}, a, {
              value: Q
            }),
            groupEnd: x({}, a, {
              value: J
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
          } catch (G) {
            var L = G.stack.trim().match(/\n( *(at )?)/);
            he = L && L[1] || "";
          }
        return `
` + he + a;
      }
    }
    var re = !1, oe;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new xe();
    }
    function De(a, E) {
      if (!a || re)
        return "";
      {
        var I = oe.get(a);
        if (I !== void 0)
          return I;
      }
      var L;
      re = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = le.current, le.current = null, ae();
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
`), te = q.length - 1, se = ie.length - 1; te >= 1 && se >= 0 && q[te] !== ie[se]; )
            se--;
          for (; te >= 1 && se >= 0; te--, se--)
            if (q[te] !== ie[se]) {
              if (te !== 1 || se !== 1)
                do
                  if (te--, se--, se < 0 || q[te] !== ie[se]) {
                    var ce = `
` + q[te].replace(" at new ", " at ");
                    return a.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", a.displayName)), typeof a == "function" && oe.set(a, ce), ce;
                  }
                while (te >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        re = !1, le.current = K, ne(), Error.prepareStackTrace = G;
      }
      var Ee = a ? a.displayName || a.name : "", nt = Ee ? ue(Ee) : "";
      return typeof a == "function" && oe.set(a, nt), nt;
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
            var L = a, G = L._payload, K = L._init;
            try {
              return je(K(G), E, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Ve = {}, Ue = T.ReactDebugCurrentFrame;
    function Me(a) {
      if (a) {
        var E = a._owner, I = je(a.type, a._source, E ? E.type : null);
        Ue.setExtraStackFrame(I);
      } else
        Ue.setExtraStackFrame(null);
    }
    function Mt(a, E, I, L, G) {
      {
        var K = Function.call.bind(Ie);
        for (var B in a)
          if (K(a, B)) {
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
            q && !(q instanceof Error) && (Me(G), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", I, B, typeof q), Me(null)), q instanceof Error && !(q.message in Ve) && (Ve[q.message] = !0, Me(G), b("Failed %s type: %s", I, q.message), Me(null));
          }
      }
    }
    var kt = Array.isArray;
    function He(a) {
      return kt(a);
    }
    function Wt(a) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, I = E && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return I;
      }
    }
    function _t(a) {
      try {
        return Xe(a), !1;
      } catch {
        return !0;
      }
    }
    function Xe(a) {
      return "" + a;
    }
    function Ge(a) {
      if (_t(a))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wt(a)), Xe(a);
    }
    var Ce = T.ReactCurrentOwner, Ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, Je, $e;
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
      if (typeof a.ref == "string" && Ce.current && E && Ce.current.stateNode !== E) {
        var I = S(Ce.current.type);
        $e[I] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(Ce.current.type), a.ref), $e[I] = !0);
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
          Je || (Je = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        I.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var At = function(a, E, I, L, G, K, B) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: E,
        ref: I,
        props: B,
        // Record the component responsible for creating this element.
        _owner: K
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
        value: G
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function Yt(a, E, I, L, G) {
      {
        var K, B = {}, q = null, ie = null;
        I !== void 0 && (Ge(I), q = "" + I), $t(E) && (Ge(E.key), q = "" + E.key), Ht(E) && (ie = E.ref, Pt(E, G));
        for (K in E)
          Ie.call(E, K) && !Ot.hasOwnProperty(K) && (B[K] = E[K]);
        if (a && a.defaultProps) {
          var te = a.defaultProps;
          for (K in te)
            B[K] === void 0 && (B[K] = te[K]);
        }
        if (q || ie) {
          var se = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          q && Lt(B, se), ie && Nt(B, se);
        }
        return At(a, q, ie, G, L, Ce.current, B);
      }
    }
    var Pe = T.ReactCurrentOwner, Ze = T.ReactDebugCurrentFrame;
    function ye(a) {
      if (a) {
        var E = a._owner, I = je(a.type, a._source, E ? E.type : null);
        Ze.setExtraStackFrame(I);
      } else
        Ze.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function Ne(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Ke() {
      {
        if (Pe.current) {
          var a = S(Pe.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function zt(a) {
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
        var E = Ke();
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
        a && a._owner && a._owner !== Pe.current && (L = " It was passed a child from " + S(a._owner.type) + "."), ye(a), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, L), ye(null);
      }
    }
    function st(a, E) {
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
          var G = w(a);
          if (typeof G == "function" && G !== a.entries)
            for (var K = G.call(a), B; !(B = K.next()).done; )
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
          var L = S(E);
          Mt(I, a.props, "prop", L, a);
        } else if (E.PropTypes !== void 0 && !Le) {
          Le = !0;
          var G = S(E);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
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
    function rt(a, E, I, L, G, K) {
      {
        var B = C(a);
        if (!B) {
          var q = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = zt(G);
          ie ? q += ie : q += Ke();
          var te;
          a === null ? te = "null" : He(a) ? te = "array" : a !== void 0 && a.$$typeof === t ? (te = "<" + (S(a.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : te = typeof a, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, q);
        }
        var se = Yt(a, E, I, G, K);
        if (se == null)
          return se;
        if (B) {
          var ce = E.children;
          if (ce !== void 0)
            if (L)
              if (He(ce)) {
                for (var Ee = 0; Ee < ce.length; Ee++)
                  st(ce[Ee], a);
                Object.freeze && Object.freeze(ce);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              st(ce, a);
        }
        return a === s ? Bt(se) : qt(se), se;
      }
    }
    function Vt(a, E, I) {
      return rt(a, E, I, !0);
    }
    function Ut(a, E, I) {
      return rt(a, E, I, !1);
    }
    var Xt = Ut, Gt = Vt;
    Re.Fragment = s, Re.jsx = Xt, Re.jsxs = Gt;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Ye.exports = cs() : Ye.exports = ds();
var d = Ye.exports;
const qe = ({
  schedulerData: R,
  eventItem: t,
  title: e,
  startTime: s,
  endTime: r,
  statusColor: n,
  subtitleGetter: i,
  viewEventClick: o,
  viewEventText: l,
  viewEvent2Click: u,
  viewEvent2Text: c,
  eventItemPopoverTemplateResolver: f
}) => {
  const { localeDayjs: h, config: v } = R, D = h(new Date(s)), g = h(new Date(r));
  if (f)
    return f(R, t, e, D, g, n);
  const w = i ? i(R, t) : null, T = l && o && (t.clickable1 === void 0 || t.clickable1), b = c && u && (t.clickable2 === void 0 || t.clickable2), k = () => /* @__PURE__ */ d.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer" }, onClick: () => o(R, t), children: l }), A = () => /* @__PURE__ */ d.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer", marginLeft: "16px" }, onClick: () => u(R, t), children: c });
  return /* @__PURE__ */ d.jsxs("div", { style: { width: v.eventItemPopoverWidth }, children: [
    /* @__PURE__ */ d.jsxs(we, { type: "flex", align: "middle", children: [
      v.eventItemPopoverShowColor && /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("div", { className: "status-dot", style: { backgroundColor: n } }) }),
      /* @__PURE__ */ d.jsx(de, { span: 22, className: "overflow-text", children: /* @__PURE__ */ d.jsx("span", { className: "header2-text", title: e, children: `${e}` }) })
    ] }),
    w && /* @__PURE__ */ d.jsxs(we, { type: "flex", align: "middle", children: [
      /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("div", {}) }),
      /* @__PURE__ */ d.jsx(de, { span: 22, className: "overflow-text", children: /* @__PURE__ */ d.jsx("span", { className: "header2-text", title: w, children: w }) })
    ] }),
    /* @__PURE__ */ d.jsxs(we, { type: "flex", align: "middle", children: [
      /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("div", {}) }),
      /* @__PURE__ */ d.jsxs(de, { span: 22, children: [
        /* @__PURE__ */ d.jsx("span", { className: "header1-text", children: D.format("HH:mm") }),
        v.eventItemPopoverDateFormat && /* @__PURE__ */ d.jsx("span", { className: "help-text", style: { marginLeft: "8px" }, children: D.format(v.eventItemPopoverDateFormat) }),
        /* @__PURE__ */ d.jsx("span", { className: "header2-text", style: { marginLeft: "8px" }, children: "-" }),
        /* @__PURE__ */ d.jsx("span", { className: "header1-text", style: { marginLeft: "8px" }, children: g.format("HH:mm") }),
        v.eventItemPopoverDateFormat && /* @__PURE__ */ d.jsx("span", { className: "help-text", style: { marginLeft: "8px" }, children: g.format(v.eventItemPopoverDateFormat) })
      ] })
    ] }),
    (T || b) && /* @__PURE__ */ d.jsxs(we, { type: "flex", align: "middle", children: [
      /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("div", {}) }),
      /* @__PURE__ */ d.jsxs(de, { span: 22, children: [
        T && k(),
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
const ge = "YYYY-MM-DD", V = "YYYY-MM-DD HH:mm:ss", O = { Day: 0, Week: 1, Month: 2, Quarter: 3, Year: 4, Custom: 5, Custom1: 6, Custom2: 7 }, U = { Day: 0, Hour: 1, Week: 2, Month: 3, Year: 4 }, me = { Top: 0, TopRight: 1, TopLeft: 2, Bottom: 3, BottomRight: 4, BottomLeft: 5 }, pe = { EVENT: "event" };
class Be extends We {
  constructor(e) {
    super(e);
    P(this, "initStartDrag", (e) => {
      const { schedulerData: s, eventItem: r } = this.props;
      let n = s._getEventSlotId(r), i = s.getSlotById(n);
      if (i && i.groupOnly || s._isResizing())
        return;
      e.stopPropagation();
      let o = 0;
      if (this.supportTouch) {
        if (e.changedTouches.length == 0)
          return;
        o = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        o = e.clientX;
      }
      this.setState({
        startX: o
      }), s._startResizing(), this.supportTouch ? (this.startResizer.addEventListener("touchmove", this.doStartDrag, !1), this.startResizer.addEventListener("touchend", this.stopStartDrag, !1), this.startResizer.addEventListener("touchcancel", this.cancelStartDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doStartDrag, !1), document.documentElement.addEventListener("mouseup", this.stopStartDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    P(this, "doStartDrag", (e) => {
      e.stopPropagation();
      let s = 0;
      if (this.supportTouch) {
        if (e.changedTouches.length == 0)
          return;
        s = e.changedTouches[0].pageX;
      } else
        s = e.clientX;
      const { left: r, width: n, leftIndex: i, rightIndex: o, schedulerData: l } = this.props;
      let u = l.getContentCellWidth(), c = i > 0 ? 5 : 6, f = u - c, h = o * u - c;
      const { startX: v } = this.state;
      let D = r + s - v, g = n + v - s;
      g < f ? (g = f, D = (o - 1) * u + (o - 1 > 0 ? 2 : 3)) : g > h && (g = h, D = 3), this.setState({ left: D, width: g });
    });
    P(this, "stopStartDrag", (e) => {
      e.stopPropagation(), this.supportTouch ? (this.startResizer.removeEventListener("touchmove", this.doStartDrag, !1), this.startResizer.removeEventListener("touchend", this.stopStartDrag, !1), this.startResizer.removeEventListener("touchcancel", this.cancelStartDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doStartDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopStartDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      const { width: s, left: r, top: n, leftIndex: i, rightIndex: o, schedulerData: l, eventItem: u, updateEventStart: c, conflictOccurred: f } = this.props;
      if (l._stopResizing(), this.state.width === s)
        return;
      let h = 0;
      if (this.supportTouch) {
        if (e.changedTouches.length == 0) {
          this.setState({
            left: r,
            top: n,
            width: s
          });
          return;
        }
        h = e.changedTouches[0].pageX;
      } else
        h = e.clientX;
      const { cellUnit: v, events: D, config: g, localeDayjs: w } = l;
      let T = l.getContentCellWidth(), b = i > 0 ? 5 : 6, k = T - b, A = o * T - b;
      const { startX: $ } = this.state;
      let H = s + $ - h, N = h - $, z = N < 0 ? -1 : N === 0 ? 0 : 1, W = (z > 0 ? Math.floor(Math.abs(N) / T) : Math.ceil(Math.abs(N) / T)) * z;
      H < k ? W = o - i - 1 : H > A && (W = -i);
      let C = w(new Date(u.start)).add(v === U.Hour ? W * g.minuteStep : W, v === U.Hour ? "minutes" : "days").format(V);
      if (W !== 0 && v !== U.Hour && g.displayWeekend === !1)
        if (W > 0) {
          let y = 0, j = 0;
          for (; ; ) {
            j++;
            let m = w(new Date(u.start)).add(j, "days"), M = m.weekday();
            if (M !== 0 && M !== 6 && (y++, y === W)) {
              C = m.format(V);
              break;
            }
          }
        } else {
          let y = 0, j = 0;
          for (; ; ) {
            j--;
            let m = w(new Date(u.start)).add(j, "days"), M = m.weekday();
            if (M !== 0 && M !== 6 && (y--, y === W)) {
              C = m.format(V);
              break;
            }
          }
        }
      let X = !1, Z = l._getEventSlotId(u), S, x = l.getSlotById(Z);
      if (x && (S = x.name), g.checkConflict) {
        let y = w(new Date(C)), j = w(new Date(u.end));
        D.forEach((m) => {
          if (l._getEventSlotId(m) === Z && m.id !== u.id) {
            let M = w(new Date(m.start)), _ = w(new Date(m.end));
            (y >= M && y < _ || j > M && j <= _ || M >= y && M < j || _ > y && _ <= j) && (X = !0);
          }
        });
      }
      X ? (this.setState({
        left: r,
        top: n,
        width: s
      }), f != null ? f(l, "StartResize", u, pe.EVENT, Z, S, C, u.end) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it"), this.subscribeResizeEvent(this.props)) : c != null && c(l, u, C);
    });
    P(this, "cancelStartDrag", (e) => {
      e.stopPropagation(), this.startResizer.removeEventListener("touchmove", this.doStartDrag, !1), this.startResizer.removeEventListener("touchend", this.stopStartDrag, !1), this.startResizer.removeEventListener("touchcancel", this.cancelStartDrag, !1), document.onselectstart = null, document.ondragstart = null;
      const { schedulerData: s, left: r, top: n, width: i } = this.props;
      s._stopResizing(), this.setState({
        left: r,
        top: n,
        width: i
      });
    });
    P(this, "initEndDrag", (e) => {
      const { schedulerData: s, eventItem: r } = this.props;
      let n = s._getEventSlotId(r), i = s.getSlotById(n);
      if (i && i.groupOnly || s._isResizing())
        return;
      e.stopPropagation();
      let o = 0;
      if (this.supportTouch) {
        if (e.changedTouches.length == 0)
          return;
        o = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        o = e.clientX;
      }
      this.setState({
        endX: o
      }), s._startResizing(), this.supportTouch ? (this.endResizer.addEventListener("touchmove", this.doEndDrag, !1), this.endResizer.addEventListener("touchend", this.stopEndDrag, !1), this.endResizer.addEventListener("touchcancel", this.cancelEndDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doEndDrag, !1), document.documentElement.addEventListener("mouseup", this.stopEndDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    P(this, "doEndDrag", (e) => {
      e.stopPropagation();
      let s = 0;
      if (this.supportTouch) {
        if (e.changedTouches.length == 0)
          return;
        s = e.changedTouches[0].pageX;
      } else
        s = e.clientX;
      const { width: r, leftIndex: n, schedulerData: i } = this.props, { headers: o } = i;
      let l = i.getContentCellWidth(), u = n > 0 ? 5 : 6, c = l - u, f = (o.length - n) * l - u;
      const { endX: h } = this.state;
      let v = r + s - h;
      v < c ? v = c : v > f && (v = f), this.setState({ width: v });
    });
    P(this, "stopEndDrag", (e) => {
      e.stopPropagation(), this.supportTouch ? (this.endResizer.removeEventListener("touchmove", this.doEndDrag, !1), this.endResizer.removeEventListener("touchend", this.stopEndDrag, !1), this.endResizer.removeEventListener("touchcancel", this.cancelEndDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doEndDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopEndDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      const { width: s, left: r, top: n, leftIndex: i, rightIndex: o, schedulerData: l, eventItem: u, updateEventEnd: c, conflictOccurred: f } = this.props;
      if (l._stopResizing(), this.state.width === s)
        return;
      let h = 0;
      if (this.supportTouch) {
        if (e.changedTouches.length == 0) {
          this.setState({
            left: r,
            top: n,
            width: s
          });
          return;
        }
        h = e.changedTouches[0].pageX;
      } else
        h = e.clientX;
      const { headers: v, cellUnit: D, events: g, config: w, localeDayjs: T } = l;
      let b = l.getContentCellWidth(), k = i > 0 ? 5 : 6, A = b - k, $ = (v.length - i) * b - k;
      const { endX: H } = this.state;
      let N = s + h - H, z = N - s, W = z < 0 ? -1 : z === 0 ? 0 : 1, C = (W < 0 ? Math.floor(Math.abs(z) / b) : Math.ceil(Math.abs(z) / b)) * W;
      N < A ? C = i - o + 1 : N > $ && (C = v.length - o);
      let X = T(new Date(u.end)).add(D === U.Hour ? C * w.minuteStep : C, D === U.Hour ? "minutes" : "days").format(V);
      if (C !== 0 && D !== U.Hour && w.displayWeekend === !1)
        if (C > 0) {
          let j = 0, m = 0;
          for (; ; ) {
            m++;
            let M = T(new Date(u.end)).add(m, "days"), _ = M.weekday();
            if (_ !== 0 && _ !== 6 && (j++, j === C)) {
              X = M.format(V);
              break;
            }
          }
        } else {
          let j = 0, m = 0;
          for (; ; ) {
            m--;
            let M = T(new Date(u.end)).add(m, "days"), _ = M.weekday();
            if (_ !== 0 && _ !== 6 && (j--, j === C)) {
              X = M.format(V);
              break;
            }
          }
        }
      let Z = !1, S = l._getEventSlotId(u), x, y = l.getSlotById(S);
      if (y && (x = y.name), w.checkConflict) {
        let j = T(new Date(u.start)), m = T(new Date(X));
        g.forEach((M) => {
          if (l._getEventSlotId(M) === S && M.id !== u.id) {
            let _ = T(new Date(M.start)), F = T(new Date(M.end));
            (j >= _ && j < F || m > _ && m <= F || _ >= j && _ < m || F > j && F <= m) && (Z = !0);
          }
        });
      }
      Z ? (this.setState({
        left: r,
        top: n,
        width: s
      }), f != null ? f(l, "EndResize", u, pe.EVENT, S, x, u.start, X) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it"), this.subscribeResizeEvent(this.props)) : c != null && c(l, u, X);
    });
    P(this, "cancelEndDrag", (e) => {
      e.stopPropagation(), this.endResizer.removeEventListener("touchmove", this.doEndDrag, !1), this.endResizer.removeEventListener("touchend", this.stopEndDrag, !1), this.endResizer.removeEventListener("touchcancel", this.cancelEndDrag, !1), document.onselectstart = null, document.ondragstart = null;
      const { schedulerData: s, left: r, top: n, width: i } = this.props;
      s._stopResizing(), this.setState({
        left: r,
        top: n,
        width: i
      });
    });
    P(this, "handleMouseMove", (e) => {
      const s = this.eventItemRef.current.getBoundingClientRect();
      this.setState({
        contentMousePosX: e.clientX,
        eventItemLeftRect: s.left,
        eventItemRightRect: s.right
      });
    });
    P(this, "startResizable", (e) => {
      const { eventItem: s, isInPopover: r, schedulerData: n } = e, { config: i } = n;
      return i.startResizable === !0 && r === !1 && (s.resizable == null || s.resizable !== !1) && (s.startResizable == null || s.startResizable !== !1);
    });
    P(this, "endResizable", (e) => {
      const { eventItem: s, isInPopover: r, schedulerData: n } = e, { config: i } = n;
      return i.endResizable === !0 && r === !1 && (s.resizable == null || s.resizable !== !1) && (s.endResizable == null || s.endResizable !== !1);
    });
    P(this, "subscribeResizeEvent", (e) => {
      this.startResizer != null && (this.supportTouch || (this.startResizer.removeEventListener("mousedown", this.initStartDrag, !1), this.startResizable(e) && this.startResizer.addEventListener("mousedown", this.initStartDrag, !1))), this.endResizer != null && (this.supportTouch || (this.endResizer.removeEventListener("mousedown", this.initEndDrag, !1), this.endResizable(e) && this.endResizer.addEventListener("mousedown", this.initEndDrag, !1)));
    });
    const { left: s, top: r, width: n } = e;
    this.state = {
      left: s,
      top: r,
      width: n,
      contentMousePosX: 0,
      eventItemLeftRect: 0,
      eventItemRightRect: 0
    }, this.startResizer = null, this.endResizer = null, this.supportTouch = !1, this.eventItemRef = ze.createRef(), this._isMounted = !1;
  }
  componentDidUpdate(e, s) {
    if (e !== this.props) {
      const { left: r, top: n, width: i } = this.props;
      this.setState({
        left: r,
        top: n,
        width: i
      }), this.subscribeResizeEvent(this.props);
    }
  }
  componentDidMount() {
    this._isMounted = !0, this.supportTouch = "ontouchstart" in window, this.subscribeResizeEvent(this.props);
  }
  render() {
    const { eventItem: e, isStart: s, isEnd: r, isInPopover: n, eventItemClick: i, schedulerData: o, isDragging: l, connectDragSource: u, connectDragPreview: c, eventItemTemplateResolver: f } = this.props, { config: h, localeDayjs: v } = o, { left: D, width: g, top: w } = this.state;
    let T = s ? r ? "round-all" : "round-head" : r ? "round-tail" : "round-none", b = h.defaultEventBgColor;
    const k = h.eventItemPopoverPlacement, A = /(top|bottom)(Right|Left)MousePosition/.test(k);
    e.bgColor && (b = e.bgColor);
    let $ = o.behaviors.getEventTextFunc(o, e), H = /* @__PURE__ */ d.jsx(qe, { ...this.props, eventItem: e, title: e.title, startTime: e.start, endTime: e.end, statusColor: b }), N = v(new Date(e.start)), z = n ? `${N.format("HH:mm")} ${$}` : $, W = /* @__PURE__ */ d.jsx("div", {});
    this.startResizable(this.props) && (W = /* @__PURE__ */ d.jsx("div", { className: "event-resizer event-start-resizer", ref: (m) => this.startResizer = m }));
    let C = /* @__PURE__ */ d.jsx("div", {});
    this.endResizable(this.props) && (C = /* @__PURE__ */ d.jsx("div", { className: "event-resizer event-end-resizer", ref: (m) => this.endResizer = m }));
    let X = /* @__PURE__ */ d.jsx("div", { className: T + " event-item", style: { height: h.eventItemHeight, backgroundColor: b }, children: /* @__PURE__ */ d.jsx("span", { style: { marginLeft: "10px", lineHeight: `${h.eventItemHeight}px` }, children: z }) }, e.id);
    f != null && (X = f(o, e, b, s, r, "event-item", h.eventItemHeight, void 0));
    let Z = /* @__PURE__ */ d.jsxs(
      "a",
      {
        className: "timeline-event",
        ref: this.eventItemRef,
        onMouseMove: A ? this.handleMouseMove : void 0,
        style: { left: D, width: g, top: w },
        onClick: () => {
          i && i(o, e);
        },
        children: [
          X,
          W,
          C
        ]
      }
    );
    const S = () => {
      let m = 0, M = "";
      if (A) {
        const _ = k.includes("Left"), F = this.state.contentMousePosX, Q = h.eventItemPopoverWidth, J = this.state.eventItemLeftRect, ee = this.state.eventItemRightRect;
        let ae = _ ? J : ee, ne = _ ? 1 : -1;
        M = k.replace("MousePosition", "");
        const le = 10;
        _ && this._isMounted ? F + Q + le > window.innerWidth && (M = `${k.replace(/(Right|Left).*/, "")}Right`, ae = ee, ne = -1) : F - Q - le < 0 && (M = `${k.replace(/(Right|Left).*/, "")}Left`, ae = J, ne = 1), m = F - ae - 20 * ne;
      }
      return {
        popoverOffsetX: m,
        mousePositionPlacement: M
      };
    }, { popoverOffsetX: x, mousePositionPlacement: y } = S(), j = h.dragAndDropEnabled ? c(u(Z)) : Z;
    return l ? null : o._isResizing() || h.eventItemPopoverEnabled == !1 || e.showPopover == !1 ? /* @__PURE__ */ d.jsx("div", { children: j }) : /* @__PURE__ */ d.jsx(
      Fe,
      {
        transitionName: A ? "" : void 0,
        align: A ? {
          offset: [x, k.includes("top") ? -10 : 10],
          overflow: {
            // shiftX: true,
            // shiftY: true,
          }
        } : void 0,
        placement: A ? y : k,
        content: H,
        trigger: h.eventItemPopoverTrigger,
        children: j
      }
    );
  }
}
P(Be, "propTypes", {
  schedulerData: Y.object.isRequired,
  eventItem: Y.object.isRequired,
  isStart: Y.bool.isRequired,
  isEnd: Y.bool.isRequired,
  left: Y.number.isRequired,
  width: Y.number.isRequired,
  top: Y.number.isRequired,
  isInPopover: Y.bool.isRequired,
  leftIndex: Y.number.isRequired,
  rightIndex: Y.number.isRequired,
  isDragging: Y.bool,
  connectDragSource: Y.func,
  connectDragPreview: Y.func,
  updateEventStart: Y.func,
  updateEventEnd: Y.func,
  moveEvent: Y.func,
  subtitleGetter: Y.func,
  eventItemClick: Y.func,
  viewEventClick: Y.func,
  viewEventText: Y.string,
  viewEvent2Click: Y.func,
  viewEvent2Text: Y.string,
  conflictOccurred: Y.func,
  eventItemTemplateResolver: Y.func
});
class ht {
  constructor(t, e, s, r = pe.EVENT) {
    P(this, "getDragSpec", () => ({
      beginDrag: (t, e, s) => this.resolveDragObjFunc(t),
      endDrag: (t, e, s) => {
        if (!e.didDrop())
          return;
        const { moveEvent: r, newEvent: n, schedulerData: i } = t, { events: o, config: l, viewType: u, localeDayjs: c } = i, f = e.getItem(), h = e.getItemType(), v = e.getDropResult();
        let D = v.slotId, g = v.slotName, w = v.start, T = v.end, b = v.initialStart;
        v.initialEnd;
        let k = "New", A = h === pe.EVENT;
        if (A) {
          const H = f;
          if (l.relativeMove)
            w = c(H.start).add(c(w).diff(c(new Date(b))), "ms").format(V);
          else if (u !== O.Day) {
            let N = c(w);
            w = c(H.start).year(N.year()).month(N.month()).date(N.date()).format(V);
          }
          if (T = c(w).add(c(H.end).diff(c(H.start)), "ms").format(V), l.crossResourceMove === !1) {
            D = i._getEventSlotId(f), g = void 0;
            let N = i.getSlotById(D);
            N && (g = N.name);
          }
          k = "Move";
        }
        let $ = !1;
        if (l.checkConflict) {
          let H = c(w), N = c(T);
          o.forEach((z) => {
            if (i._getEventSlotId(z) === D && (!A || z.id !== f.id)) {
              let W = c(z.start), C = c(z.end);
              (H >= W && H < C || N > W && N <= C || W >= H && W < N || C > H && C <= N) && ($ = !0);
            }
          });
        }
        if ($) {
          const { conflictOccurred: H } = t;
          H != null ? H(i, k, f, h, D, g, w, T) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it");
        } else
          A ? r !== void 0 && r(i, f, D, g, w, T) : n !== void 0 && n(i, D, g, w, T, h, f);
      },
      canDrag: (t) => {
        const { schedulerData: e, resourceEvents: s } = t, r = this.resolveDragObjFunc(t);
        if (e._isResizing())
          return !1;
        const { config: n } = e;
        return n.movable && (s == null || !s.groupOnly) && (r.movable == null || r.movable !== !1);
      }
    }));
    P(this, "getDragCollect", (t, e) => ({
      connectDragSource: t.dragSource(),
      isDragging: e.isDragging(),
      connectDragPreview: t.dragPreview()
    }));
    P(this, "getDragSource", () => this.dragSource);
    this.resolveDragObjFunc = t, this.DecoratedComponent = e, this.dndType = r, this.dragSource = s ? Kt(this.dndType, this.getDragSpec(), this.getDragCollect)(this.DecoratedComponent) : this.DecoratedComponent;
  }
}
function Te(R) {
  let t = 0, e = 0, s = R;
  for (; s; )
    t += s.offsetLeft - s.scrollLeft, e += s.offsetTop - s.scrollTop, s = s.offsetParent;
  return { x: t, y: e };
}
class us {
  constructor(t, e) {
    P(this, "getDropSpec", () => ({
      drop: (t, e, s) => {
        const { schedulerData: r, resourceEvents: n } = t, { cellUnit: i, localeDayjs: o } = r, l = e.getItemType(), u = Te(s.eventContainer);
        let c = r.getContentCellWidth(), f = null, h = null;
        if (l === pe.EVENT) {
          const T = e.getInitialClientOffset();
          let b = Math.floor((T.x - u.x) / c);
          f = n.headerItems[b].start, h = n.headerItems[b].end, i !== U.Hour && (h = o(new Date(n.headerItems[b].start)).hour(23).minute(59).second(59).format(V));
        }
        const v = e.getClientOffset();
        let D = Math.floor((v.x - u.x) / c), g = n.headerItems[D].start, w = n.headerItems[D].end;
        return i !== U.Hour && (w = o(new Date(n.headerItems[D].start)).hour(23).minute(59).second(59).format(V)), {
          slotId: n.slotId,
          slotName: n.slotName,
          start: g,
          end: w,
          initialStart: f,
          initialEnd: h
        };
      },
      hover: (t, e, s) => {
        const { schedulerData: r, resourceEvents: n, movingEvent: i } = t, { cellUnit: o, config: l, viewType: u, localeDayjs: c } = r;
        this.config = l;
        const f = e.getItem(), h = e.getItemType(), v = Te(s.eventContainer);
        let D = r.getContentCellWidth(), g = null;
        if (h === pe.EVENT) {
          const z = e.getInitialClientOffset();
          let W = Math.floor((z.x - v.x) / D);
          g = n.headerItems[W].start, n.headerItems[W].end, o !== U.Hour && c(new Date(n.headerItems[W].start)).hour(23).minute(59).second(59).format(V);
        }
        const w = e.getClientOffset();
        let T = Math.floor((w.x - v.x) / D);
        if (!n.headerItems[T])
          return;
        let b = n.headerItems[T].start, k = n.headerItems[T].end;
        o !== U.Hour && (k = c(new Date(n.headerItems[T].start)).hour(23).minute(59).second(59).format(V));
        let A = n.slotId, $ = n.slotName, H = "New";
        if (h === pe.EVENT) {
          const z = f;
          if (l.relativeMove)
            b = c(z.start).add(c(b).diff(c(new Date(g))), "ms").format(V);
          else if (u !== O.Day) {
            let W = c(b);
            b = c(z.start).year(W.year()).month(W.month()).date(W.date()).format(V);
          }
          if (k = c(b).add(c(z.end).diff(c(z.start)), "ms").format(V), l.crossResourceMove === !1) {
            A = r._getEventSlotId(f), $ = void 0;
            let W = r.getSlotById(A);
            W && ($ = W.name);
          }
          H = "Move";
        }
        i && i(r, A, $, b, k, H, h, f);
      },
      canDrop: (t, e) => {
        const { schedulerData: s, resourceEvents: r } = t, n = e.getItem();
        if (s._isResizing())
          return !1;
        const { config: i } = s;
        return i.movable && !r.groupOnly && (n.movable == null || n.movable !== !1);
      }
    }));
    P(this, "getDropCollect", (t, e) => ({
      connectDropTarget: t.dropTarget(),
      isOver: e.isOver()
    }));
    P(this, "getDropTarget", (t) => t ? es([...this.sourceMap.keys()], this.getDropSpec(), this.getDropCollect)(this.DecoratedComponent) : this.DecoratedComponent);
    P(this, "getDndSource", (t = pe.EVENT) => this.sourceMap.get(t));
    this.sourceMap = /* @__PURE__ */ new Map(), t.forEach((s) => {
      this.sourceMap.set(s.dndType, s);
    }), this.DecoratedComponent = e;
  }
}
const ft = ({ schedulerData: R, contentScrollbarHeight: t, slotClickedFunc: e, slotItemTemplateResolver: s, toggleExpandFunc: r }) => {
  const { renderData: n } = R, i = R.getResourceTableWidth() - 2, o = t, l = n.filter((h) => h.render), u = (h) => {
    r && r(R, h.slotId);
  }, c = (h, v) => {
    let D = /* @__PURE__ */ d.jsx("span", { className: "expander-space" }, `es${h.indent}`);
    h.hasChildren && (D = h.expanded ? /* @__PURE__ */ d.jsx(ss, { style: {}, className: "", onClick: () => u(h) }, `es${h.indent}`) : /* @__PURE__ */ d.jsx(rs, { style: {}, className: "", onClick: () => u(h) }, `es${h.indent}`)), v.push(D);
    const g = e ? /* @__PURE__ */ d.jsxs("span", { className: "slot-cell", children: [
      v,
      /* @__PURE__ */ d.jsx("a", { style: { cursor: "pointer" }, className: "slot-text", onClick: () => e(R, h), children: h.slotName })
    ] }) : /* @__PURE__ */ d.jsxs("span", { className: "slot-cell", children: [
      v,
      /* @__PURE__ */ d.jsx("span", { className: "slot-text", style: { cursor: e === void 0 ? void 0 : "pointer" }, children: h.slotName })
    ] });
    let w = /* @__PURE__ */ d.jsx("div", { title: h.slotName, className: "overflow-text header2-text", style: { textAlign: "left" }, children: g });
    if (s) {
      const b = s(R, h, e, i, "overflow-text header2-text");
      b && (w = b);
    }
    const T = {
      height: h.rowHeight,
      backgroundColor: h.groupOnly ? R.config.groupOnlySlotColor : void 0
    };
    return /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { "data-resource-id": h.slotId, style: T, children: w }) }, h.slotId);
  }, f = l.map((h) => {
    const v = [];
    for (let D = 0; D < h.indent; D++)
      v.push(/* @__PURE__ */ d.jsx("span", { className: "expander-space" }, `es${D}`));
    return c(h, v);
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
class pt extends We {
  constructor(t) {
    super(t);
  }
  render() {
    const { schedulerData: t, nonAgendaCellHeaderTemplateResolver: e } = this.props, { headers: s, cellUnit: r, config: n, localeDayjs: i } = t;
    let o = t.getTableHeaderHeight(), l = t.getContentCellWidth(), u = t.getMinuteStepsInHour(), c = [], f = {};
    return r === U.Hour ? s.forEach((h, v) => {
      if (v % u === 0) {
        let D = i(new Date(h.time));
        D.isSame(/* @__PURE__ */ new Date(), "hour"), f = h.nonWorkingTime ? {
          width: l * u,
          color: n.nonWorkingTimeHeadColor,
          backgroundColor: n.nonWorkingTimeHeadBgColor
        } : {
          width: l * u
        }, v === s.length - u && (f = h.nonWorkingTime ? { color: n.nonWorkingTimeHeadColor, backgroundColor: n.nonWorkingTimeHeadBgColor } : {});
        let g = n.nonAgendaDayCellHeaderFormat.split("|").map((T) => D.format(T)), w;
        if (typeof e == "function")
          w = e(t, h, g, f);
        else {
          const T = g.map((b, k) => /* @__PURE__ */ d.jsx("div", { children: b }, k));
          w = /* @__PURE__ */ d.jsx("th", { className: "header3-text", style: f, children: /* @__PURE__ */ d.jsx("div", { children: T }) }, h.time);
        }
        c.push(w);
      }
    }) : c = s.map((h, v) => {
      let D = i(new Date(h.time));
      f = h.nonWorkingTime ? {
        width: l,
        color: n.nonWorkingTimeHeadColor,
        backgroundColor: n.nonWorkingTimeHeadBgColor
      } : { width: l }, v === s.length - 1 && (f = h.nonWorkingTime ? { color: n.nonWorkingTimeHeadColor, backgroundColor: n.nonWorkingTimeHeadBgColor } : {});
      let w = (r === U.Week ? n.nonAgendaWeekCellHeaderFormat : r === U.Month ? n.nonAgendaMonthCellHeaderFormat : r === U.Year ? n.nonAgendaYearCellHeaderFormat : n.nonAgendaOtherCellHeaderFormat).split("|").map((b) => D.format(b));
      if (typeof e == "function")
        return e(t, h, w, f);
      const T = w.map((b, k) => /* @__PURE__ */ d.jsx("div", { children: b }, k));
      return /* @__PURE__ */ d.jsx("th", { className: "header3-text", style: f, children: /* @__PURE__ */ d.jsx("div", { children: T }) }, h.time);
    }), /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { style: { height: o }, children: c }) });
  }
}
P(pt, "propTypes", {
  schedulerData: Y.object.isRequired,
  nonAgendaCellHeaderTemplateResolver: Y.func
});
function gt({ schedulerData: R }) {
  const { renderData: t, headers: e, config: s, behaviors: r } = R, n = R.getContentCellWidth(), i = t.filter((o) => o.render).map(({ slotId: o, groupOnly: l, rowHeight: u }) => {
    const c = e.map((f, h) => {
      const v = `${o}_${f.time}`, D = h === e.length - 1 ? {} : { width: n };
      if (f.nonWorkingTime && (D.backgroundColor = s.nonWorkingTimeBodyBgColor), l && (D.backgroundColor = s.groupOnlySlotColor), r.getNonAgendaViewBodyCellBgColorFunc) {
        const g = r.getNonAgendaViewBodyCellBgColorFunc(R, o, f);
        g && (D.backgroundColor = g);
      }
      return /* @__PURE__ */ d.jsx("td", { style: D, children: /* @__PURE__ */ d.jsx("div", {}) }, v);
    });
    return /* @__PURE__ */ d.jsx("tr", { style: { height: u }, children: c }, o);
  });
  return /* @__PURE__ */ d.jsx("tbody", { children: i });
}
gt.propTypes = {
  schedulerData: p.object.isRequired
};
const vt = ({ schedulerData: R, number: t, left: e, width: s, top: r, clickAction: n, headerItem: i }) => {
  const { config: o } = R, l = `+${t} more`;
  return /* @__PURE__ */ d.jsx("a", { className: "timeline-event", style: { left: e, width: s, top: r }, onClick: () => n(i), children: /* @__PURE__ */ d.jsx("div", { style: { height: o.eventItemHeight, color: "#999", textAlign: "center" }, children: l }) });
};
vt.propTypes = {
  schedulerData: p.object.isRequired,
  number: p.number.isRequired,
  left: p.number.isRequired,
  width: p.number.isRequired,
  top: p.number.isRequired,
  clickAction: p.func.isRequired,
  headerItem: p.object.isRequired
};
const mt = ({ schedulerData: R, summary: t, left: e, width: s, top: r }) => {
  const { config: n } = R, i = t.color !== void 0 ? t.color : n.summaryColor;
  let o = "center";
  n.summaryPos === me.TopRight || n.summaryPos === me.BottomRight ? o = "right" : (n.summaryPos === me.TopLeft || n.summaryPos === me.BottomLeft) && (o = "left");
  const l = {
    height: n.eventItemHeight,
    color: i,
    textAlign: o,
    marginLeft: "6px",
    marginRight: "6px",
    ...t.fontSize !== void 0 ? { fontSize: t.fontSize } : {}
  };
  return /* @__PURE__ */ d.jsx("a", { className: "timeline-event header2-text", style: { left: e, width: s, top: r, cursor: "default" }, children: /* @__PURE__ */ d.jsx("div", { style: l, children: t.text }) });
};
mt.propTypes = {
  schedulerData: p.object.isRequired,
  summary: p.object.isRequired,
  left: p.number.isRequired,
  width: p.number.isRequired,
  top: p.number.isRequired
};
const Dt = ({ left: R, width: t, schedulerData: e }) => {
  const { config: s } = e, r = {
    left: R,
    width: t,
    top: 0,
    bottom: 0,
    backgroundColor: s.selectedAreaColor
  };
  return /* @__PURE__ */ d.jsx("div", { className: "selected-area", style: r });
};
Dt.propTypes = {
  schedulerData: p.object.isRequired,
  left: p.number.isRequired,
  width: p.number.isRequired
};
class yt extends We {
  constructor(e) {
    super(e);
    P(this, "initDrag", (e) => {
      const { isSelecting: s } = this.state;
      if (s || (e.srcElement || e.target) !== this.eventContainer)
        return;
      e.stopPropagation();
      const { resourceEvents: r } = this.props;
      if (r.groupOnly)
        return;
      let n = 0;
      if (this.supportTouch) {
        if (e.changedTouches.length == 0)
          return;
        n = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        n = e.clientX;
      }
      const { schedulerData: i } = this.props;
      let o = i.getContentCellWidth(), l = Te(this.eventContainer), u = n - l.x, c = Math.floor(u / o), f = c * o, h = Math.ceil(u / o), v = (h - c) * o;
      this.setState({
        startX: u,
        left: f,
        leftIndex: c,
        width: v,
        rightIndex: h,
        isSelecting: !0
      }), this.supportTouch ? (document.documentElement.addEventListener("touchmove", this.doDrag, !1), document.documentElement.addEventListener("touchend", this.stopDrag, !1), document.documentElement.addEventListener("touchcancel", this.cancelDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doDrag, !1), document.documentElement.addEventListener("mouseup", this.stopDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    P(this, "doDrag", (e) => {
      e.stopPropagation();
      let s = 0;
      if (this.supportTouch) {
        if (e.changedTouches.length == 0)
          return;
        s = e.changedTouches[0].pageX;
      } else
        s = e.clientX;
      const { startX: r } = this.state, { schedulerData: n } = this.props, { headers: i } = n;
      let o = n.getContentCellWidth(), l = Te(this.eventContainer), u = s - l.x, c = Math.floor(Math.min(r, u) / o);
      c = c < 0 ? 0 : c;
      let f = c * o, h = Math.ceil(Math.max(r, u) / o);
      h = h > i.length ? i.length : h;
      let v = (h - c) * o;
      this.setState({
        leftIndex: c,
        left: f,
        rightIndex: h,
        width: v,
        isSelecting: !0
      });
    });
    P(this, "stopDrag", (e) => {
      e.stopPropagation();
      const { schedulerData: s, newEvent: r, resourceEvents: n } = this.props, { headers: i, events: o, config: l, cellUnit: u, localeDayjs: c } = s, { leftIndex: f, rightIndex: h } = this.state;
      this.supportTouch ? (document.documentElement.removeEventListener("touchmove", this.doDrag, !1), document.documentElement.removeEventListener("touchend", this.stopDrag, !1), document.documentElement.removeEventListener("touchcancel", this.cancelDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      let v = i[f].time, D = n.headerItems[h - 1].end;
      u !== U.Hour && (D = c(new Date(n.headerItems[h - 1].start)).hour(23).minute(59).second(59).format(V));
      let g = n.slotId, w = n.slotName;
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
        let b = c(new Date(v)), k = c(D);
        o.forEach((A) => {
          if (s._getEventSlotId(A) === g) {
            let $ = c(A.start), H = c(A.end);
            (b >= $ && b < H || k > $ && k <= H || $ >= b && $ < k || H > b && H <= k) && (T = !0);
          }
        });
      }
      if (T) {
        const { conflictOccurred: b } = this.props;
        b != null ? b(
          s,
          "New",
          {
            id: void 0,
            start: v,
            end: D,
            slotId: g,
            slotName: w,
            title: void 0
          },
          pe.EVENT,
          g,
          w,
          v,
          D
        ) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it");
      } else
        r != null && r(s, g, w, v, D);
    });
    P(this, "cancelDrag", (e) => {
      e.stopPropagation();
      const { isSelecting: s } = this.state;
      s && (document.documentElement.removeEventListener("touchmove", this.doDrag, !1), document.documentElement.removeEventListener("touchend", this.stopDrag, !1), document.documentElement.removeEventListener("touchcancel", this.cancelDrag, !1), document.onselectstart = null, document.ondragstart = null, this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: !1
      }));
    });
    P(this, "onAddMoreClick", (e) => {
      const { onSetAddMoreState: s, resourceEvents: r, schedulerData: n } = this.props;
      if (s) {
        const { config: i } = n;
        let o = n.getContentCellWidth(), l = r.headerItems.indexOf(e);
        if (l !== -1) {
          let u = l * (o - 1), c = Te(this.eventContainer);
          u = u + c.x;
          let f = c.y, h = (e.count + 1) * i.eventItemLineHeight + 20;
          s({
            headerItem: e,
            left: u,
            top: f,
            height: h
          });
        }
      }
    });
    P(this, "eventContainerRef", (e) => {
      this.eventContainer = e;
    });
    this.state = {
      isSelecting: !1,
      left: 0,
      width: 0
    }, this.supportTouch = !1;
  }
  componentDidMount() {
    const { schedulerData: e } = this.props, { config: s } = e;
    this.supportTouch = "ontouchstart" in window, s.creatable === !0 && (this.supportTouch || this.eventContainer.addEventListener("mousedown", this.initDrag, !1));
  }
  componentDidUpdate(e, s) {
    e !== this.props && (this.supportTouch || this.eventContainer.removeEventListener("mousedown", this.initDrag, !1), this.props.schedulerData.config.creatable && (this.supportTouch || this.eventContainer.addEventListener("mousedown", this.initDrag, !1)));
  }
  render() {
    const { resourceEvents: e, schedulerData: s, connectDropTarget: r, dndSource: n } = this.props, { cellUnit: i, startDate: o, endDate: l, config: u, localeDayjs: c } = s, { isSelecting: f, left: h, width: v } = this.state;
    let D = s.getContentCellWidth(), g = s.getCellMaxEvents(), w = s.getContentTableWidth(), T = n.getDragSource(), b = f ? /* @__PURE__ */ d.jsx(Dt, { ...this.props, left: h, width: v }) : /* @__PURE__ */ d.jsx("div", {}), k = [];
    e.headerItems.forEach(($, H) => {
      if ($.count > 0 || $.summary != null) {
        let N = u.summaryPos === me.TopRight || u.summaryPos === me.Top || u.summaryPos === me.TopLeft, z = e.hasSummary && N ? 1 + u.eventItemLineHeight : 1, W = $.addMore === 0 ? g : $.addMoreIndex;
        if ($.events.forEach((C, X) => {
          if (X < W && C !== void 0 && C.render) {
            let Z = c(new Date(o)), S = c(l).add(1, "days");
            i === U.Hour && (Z = c(new Date(o)).add(u.dayStartFrom, "hours"), S = c(l).add(u.dayStopTo + 1, "hours"));
            let x = c(C.eventItem.start), y = c(C.eventItem.end), j = x >= Z, m = y <= S, M = H * D + (H > 0 ? 2 : 3), _ = C.span * D - (H > 0 ? 5 : 6) > 0 ? C.span * D - (H > 0 ? 5 : 6) : 0, F = z + X * u.eventItemLineHeight, Q = /* @__PURE__ */ be(
              T,
              {
                ...this.props,
                key: C.eventItem.id,
                eventItem: C.eventItem,
                isStart: j,
                isEnd: m,
                isInPopover: !1,
                left: M,
                width: _,
                top: F,
                leftIndex: H,
                rightIndex: H + C.span
              }
            );
            k.push(Q);
          }
        }), $.addMore > 0) {
          let C = H * D + (H > 0 ? 2 : 3), X = D - (H > 0 ? 5 : 6), Z = z + $.addMoreIndex * u.eventItemLineHeight, S = /* @__PURE__ */ be(
            vt,
            {
              ...this.props,
              key: $.time,
              headerItem: $,
              number: $.addMore,
              left: C,
              width: X,
              top: Z,
              clickAction: this.onAddMoreClick
            }
          );
          k.push(S);
        }
        if ($.summary != null) {
          let C = N ? 1 : e.rowHeight - u.eventItemLineHeight + 1, X = H * D + (H > 0 ? 2 : 3), Z = D - (H > 0 ? 5 : 6), S = `${e.slotId}_${$.time}`, x = /* @__PURE__ */ d.jsx(mt, { schedulerData: s, summary: $.summary, left: X, width: Z, top: C }, S);
          k.push(x);
        }
      }
    });
    const A = /* @__PURE__ */ d.jsxs("div", { ref: this.eventContainerRef, className: "event-container", style: { height: e.rowHeight }, children: [
      b,
      k
    ] });
    return /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { style: { width: w }, children: u.dragAndDropEnabled ? r(A) : A }) });
  }
}
P(yt, "propTypes", {
  resourceEvents: Y.object.isRequired,
  schedulerData: Y.object.isRequired,
  dndSource: Y.object.isRequired,
  onSetAddMoreState: Y.func,
  updateEventStart: Y.func,
  updateEventEnd: Y.func,
  moveEvent: Y.func,
  movingEvent: Y.func,
  conflictOccurred: Y.func,
  subtitleGetter: Y.func,
  eventItemClick: Y.func,
  viewEventClick: Y.func,
  viewEventText: Y.string,
  viewEvent2Click: Y.func,
  viewEvent2Text: Y.string,
  newEvent: Y.func,
  eventItemTemplateResolver: Y.func
});
function Et(R) {
  const { eventItem: t, isStart: e, isEnd: s, eventItemClick: r, schedulerData: n, eventItemTemplateResolver: i } = R, { config: o, behaviors: l } = n, u = e ? s ? "round-all" : "round-head" : s ? "round-tail" : "round-none", c = t.bgColor || o.defaultEventBgColor, f = l.getEventTextFunc(n, t);
  let h = /* @__PURE__ */ d.jsx("div", { className: `${u} event-item`, style: { height: o.eventItemHeight, maxWidth: o.agendaMaxEventWidth, backgroundColor: c }, children: /* @__PURE__ */ d.jsx("span", { style: { marginLeft: "10px", lineHeight: `${o.eventItemHeight}px` }, children: f }) }, t.id);
  i && (h = i(n, t, c, e, s, "event-item", o.eventItemHeight, o.agendaMaxEventWidth));
  const v = () => r == null ? void 0 : r(n, t), D = /* @__PURE__ */ d.jsx("a", { className: "day-event", onClick: v, children: h });
  let g = /* @__PURE__ */ d.jsx(qe, { ...R, title: t.title, startTime: t.start, endTime: t.end, statusColor: c });
  return o.eventItemPopoverEnabled ? /* @__PURE__ */ d.jsx(Fe, { placement: "bottomLeft", content: g, trigger: "hover", children: D }) : /* @__PURE__ */ d.jsx("span", { children: D });
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
function wt(R) {
  const { schedulerData: t, resourceEvents: e, slotClickedFunc: s, slotItemTemplateResolver: r } = R, { startDate: n, endDate: i, config: o, localeDayjs: l } = t, u = t.getResourceTableWidth() - 2, c = [];
  for (const v of e.headerItems) {
    const D = l(new Date(n)), g = l(i).add(1, "days"), w = l(new Date(v.start)), T = l(new Date(v.end));
    if (D === w && g === T)
      for (const b of v.events) {
        const k = l(new Date(n)), A = l(i).add(1, "days"), $ = l(b.eventItem.start), H = l(b.eventItem.end), N = $ >= k, z = H < A, W = /* @__PURE__ */ be(Et, { ...R, key: b.eventItem.id, eventItem: b.eventItem, isStart: N, isEnd: z });
        c.push(W);
      }
  }
  const f = s ? /* @__PURE__ */ d.jsx("a", { onClick: () => s(t, e), children: e.slotName }) : /* @__PURE__ */ d.jsx("span", { children: e.slotName });
  let h = /* @__PURE__ */ d.jsx("div", { style: { width: u }, title: e.slotName, className: "overflow-text header2-text", children: f });
  if (r) {
    const v = r(t, e, s, u, "overflow-text header2-text");
    v && (h = v);
  }
  return /* @__PURE__ */ d.jsxs("tr", { style: { minHeight: o.eventItemLineHeight + 2 }, children: [
    /* @__PURE__ */ d.jsx("td", { "data-resource-id": e.slotId, children: h }),
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
function bt(R) {
  const { schedulerData: t } = R, { config: e, renderData: s } = t, r = t.getResourceTableWidth(), n = t.getTableHeaderHeight(), i = t.isEventPerspective ? e.taskName : e.resourceName, o = e.agendaViewHeader, l = s.map((u) => /* @__PURE__ */ be(wt, { ...R, resourceEvents: u, key: u.slotId }));
  return /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { children: /* @__PURE__ */ d.jsxs("table", { className: "scheduler-table", children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { style: { height: n }, children: [
      /* @__PURE__ */ d.jsx("th", { style: { width: r }, className: "header3-text", children: i }),
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
function hs(R) {
  const { schedulerData: t, headerItem: e, left: s, top: r, height: n, closeAction: i } = R, { config: o, localeDayjs: l } = t, { time: u, start: c, end: f, events: h } = e, [v] = ke(new ht((k) => k.eventItem, Be, t.config.dragAndDropEnabled)), D = l(new Date(u)).format(o.addMorePopoverHeaderFormat), g = l(new Date(c)), w = l(f), T = v.getDragSource(), b = h.map((k, A) => {
    if (k !== void 0) {
      const $ = l(k.eventItem.start), H = l(k.eventItem.end), N = $ >= g, z = H < w, W = 12 + (A + 1) * o.eventItemLineHeight;
      return /* @__PURE__ */ be(
        T,
        {
          ...R,
          key: k.eventItem.id,
          eventItem: k.eventItem,
          leftIndex: 0,
          isInPopover: !0,
          isStart: N,
          isEnd: z,
          rightIndex: 1,
          left: 10,
          width: 138,
          top: W
        }
      );
    }
    return null;
  });
  return /* @__PURE__ */ d.jsxs("div", { className: "add-more-popover-overlay", style: { left: s, top: r, height: n, width: "170px" }, children: [
    /* @__PURE__ */ d.jsxs(we, { justify: "space-between", align: "middle", children: [
      /* @__PURE__ */ d.jsx(de, { span: 22, children: /* @__PURE__ */ d.jsx("span", { className: "base-text", children: D }) }),
      /* @__PURE__ */ d.jsx(de, { span: 2, children: /* @__PURE__ */ d.jsx("span", { onClick: () => i(void 0), children: /* @__PURE__ */ d.jsx(ns, {}) }) })
    ] }),
    b == null ? void 0 : b.filter(Boolean)
  ] });
}
hs.propTypes = {
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
(function(R, t) {
  (function(e, s) {
    R.exports = s();
  })(_e, function() {
    var e = 1e3, s = 6e4, r = 36e5, n = "millisecond", i = "second", o = "minute", l = "hour", u = "day", c = "week", f = "month", h = "quarter", v = "year", D = "date", g = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(S) {
      var x = ["th", "st", "nd", "rd"], y = S % 100;
      return "[" + S + (x[(y - 20) % 10] || x[y] || x[0]) + "]";
    } }, k = function(S, x, y) {
      var j = String(S);
      return !j || j.length >= x ? S : "" + Array(x + 1 - j.length).join(y) + S;
    }, A = { s: k, z: function(S) {
      var x = -S.utcOffset(), y = Math.abs(x), j = Math.floor(y / 60), m = y % 60;
      return (x <= 0 ? "+" : "-") + k(j, 2, "0") + ":" + k(m, 2, "0");
    }, m: function S(x, y) {
      if (x.date() < y.date())
        return -S(y, x);
      var j = 12 * (y.year() - x.year()) + (y.month() - x.month()), m = x.clone().add(j, f), M = y - m < 0, _ = x.clone().add(j + (M ? -1 : 1), f);
      return +(-(j + (y - m) / (M ? m - _ : _ - m)) || 0);
    }, a: function(S) {
      return S < 0 ? Math.ceil(S) || 0 : Math.floor(S);
    }, p: function(S) {
      return { M: f, y: v, w: c, d: u, D, h: l, m: o, s: i, ms: n, Q: h }[S] || String(S || "").toLowerCase().replace(/s$/, "");
    }, u: function(S) {
      return S === void 0;
    } }, $ = "en", H = {};
    H[$] = b;
    var N = function(S) {
      return S instanceof X;
    }, z = function S(x, y, j) {
      var m;
      if (!x)
        return $;
      if (typeof x == "string") {
        var M = x.toLowerCase();
        H[M] && (m = M), y && (H[M] = y, m = M);
        var _ = x.split("-");
        if (!m && _.length > 1)
          return S(_[0]);
      } else {
        var F = x.name;
        H[F] = x, m = F;
      }
      return !j && m && ($ = m), m || !j && $;
    }, W = function(S, x) {
      if (N(S))
        return S.clone();
      var y = typeof x == "object" ? x : {};
      return y.date = S, y.args = arguments, new X(y);
    }, C = A;
    C.l = z, C.i = N, C.w = function(S, x) {
      return W(S, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var X = function() {
      function S(y) {
        this.$L = z(y.locale, null, !0), this.parse(y);
      }
      var x = S.prototype;
      return x.parse = function(y) {
        this.$d = function(j) {
          var m = j.date, M = j.utc;
          if (m === null)
            return /* @__PURE__ */ new Date(NaN);
          if (C.u(m))
            return /* @__PURE__ */ new Date();
          if (m instanceof Date)
            return new Date(m);
          if (typeof m == "string" && !/Z$/i.test(m)) {
            var _ = m.match(w);
            if (_) {
              var F = _[2] - 1 || 0, Q = (_[7] || "0").substring(0, 3);
              return M ? new Date(Date.UTC(_[1], F, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, Q)) : new Date(_[1], F, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, Q);
            }
          }
          return new Date(m);
        }(y), this.$x = y.x || {}, this.init();
      }, x.init = function() {
        var y = this.$d;
        this.$y = y.getFullYear(), this.$M = y.getMonth(), this.$D = y.getDate(), this.$W = y.getDay(), this.$H = y.getHours(), this.$m = y.getMinutes(), this.$s = y.getSeconds(), this.$ms = y.getMilliseconds();
      }, x.$utils = function() {
        return C;
      }, x.isValid = function() {
        return this.$d.toString() !== g;
      }, x.isSame = function(y, j) {
        var m = W(y);
        return this.startOf(j) <= m && m <= this.endOf(j);
      }, x.isAfter = function(y, j) {
        return W(y) < this.startOf(j);
      }, x.isBefore = function(y, j) {
        return this.endOf(j) < W(y);
      }, x.$g = function(y, j, m) {
        return C.u(y) ? this[j] : this.set(m, y);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(y, j) {
        var m = this, M = !!C.u(j) || j, _ = C.p(y), F = function(ue, re) {
          var oe = C.w(m.$u ? Date.UTC(m.$y, re, ue) : new Date(m.$y, re, ue), m);
          return M ? oe : oe.endOf(u);
        }, Q = function(ue, re) {
          return C.w(m.toDate()[ue].apply(m.toDate("s"), (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), m);
        }, J = this.$W, ee = this.$M, ae = this.$D, ne = "set" + (this.$u ? "UTC" : "");
        switch (_) {
          case v:
            return M ? F(1, 0) : F(31, 11);
          case f:
            return M ? F(1, ee) : F(0, ee + 1);
          case c:
            var le = this.$locale().weekStart || 0, he = (J < le ? J + 7 : J) - le;
            return F(M ? ae - he : ae + (6 - he), ee);
          case u:
          case D:
            return Q(ne + "Hours", 0);
          case l:
            return Q(ne + "Minutes", 1);
          case o:
            return Q(ne + "Seconds", 2);
          case i:
            return Q(ne + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(y) {
        return this.startOf(y, !1);
      }, x.$set = function(y, j) {
        var m, M = C.p(y), _ = "set" + (this.$u ? "UTC" : ""), F = (m = {}, m[u] = _ + "Date", m[D] = _ + "Date", m[f] = _ + "Month", m[v] = _ + "FullYear", m[l] = _ + "Hours", m[o] = _ + "Minutes", m[i] = _ + "Seconds", m[n] = _ + "Milliseconds", m)[M], Q = M === u ? this.$D + (j - this.$W) : j;
        if (M === f || M === v) {
          var J = this.clone().set(D, 1);
          J.$d[F](Q), J.init(), this.$d = J.set(D, Math.min(this.$D, J.daysInMonth())).$d;
        } else
          F && this.$d[F](Q);
        return this.init(), this;
      }, x.set = function(y, j) {
        return this.clone().$set(y, j);
      }, x.get = function(y) {
        return this[C.p(y)]();
      }, x.add = function(y, j) {
        var m, M = this;
        y = Number(y);
        var _ = C.p(j), F = function(ee) {
          var ae = W(M);
          return C.w(ae.date(ae.date() + Math.round(ee * y)), M);
        };
        if (_ === f)
          return this.set(f, this.$M + y);
        if (_ === v)
          return this.set(v, this.$y + y);
        if (_ === u)
          return F(1);
        if (_ === c)
          return F(7);
        var Q = (m = {}, m[o] = s, m[l] = r, m[i] = e, m)[_] || 1, J = this.$d.getTime() + y * Q;
        return C.w(J, this);
      }, x.subtract = function(y, j) {
        return this.add(-1 * y, j);
      }, x.format = function(y) {
        var j = this, m = this.$locale();
        if (!this.isValid())
          return m.invalidDate || g;
        var M = y || "YYYY-MM-DDTHH:mm:ssZ", _ = C.z(this), F = this.$H, Q = this.$m, J = this.$M, ee = m.weekdays, ae = m.months, ne = function(re, oe, xe, De) {
          return re && (re[oe] || re(j, M)) || xe[oe].slice(0, De);
        }, le = function(re) {
          return C.s(F % 12 || 12, re, "0");
        }, he = m.meridiem || function(re, oe, xe) {
          var De = re < 12 ? "AM" : "PM";
          return xe ? De.toLowerCase() : De;
        }, ue = { YY: String(this.$y).slice(-2), YYYY: C.s(this.$y, 4, "0"), M: J + 1, MM: C.s(J + 1, 2, "0"), MMM: ne(m.monthsShort, J, ae, 3), MMMM: ne(ae, J), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: ne(m.weekdaysMin, this.$W, ee, 2), ddd: ne(m.weekdaysShort, this.$W, ee, 3), dddd: ee[this.$W], H: String(F), HH: C.s(F, 2, "0"), h: le(1), hh: le(2), a: he(F, Q, !0), A: he(F, Q, !1), m: String(Q), mm: C.s(Q, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: _ };
        return M.replace(T, function(re, oe) {
          return oe || ue[re] || _.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(y, j, m) {
        var M, _ = C.p(j), F = W(y), Q = (F.utcOffset() - this.utcOffset()) * s, J = this - F, ee = C.m(this, F);
        return ee = (M = {}, M[v] = ee / 12, M[f] = ee, M[h] = ee / 3, M[c] = (J - Q) / 6048e5, M[u] = (J - Q) / 864e5, M[l] = J / r, M[o] = J / s, M[i] = J / e, M)[_] || J, m ? ee : C.a(ee);
      }, x.daysInMonth = function() {
        return this.endOf(f).$D;
      }, x.$locale = function() {
        return H[this.$L];
      }, x.locale = function(y, j) {
        if (!y)
          return this.$L;
        var m = this.clone(), M = z(y, j, !0);
        return M && (m.$L = M), m;
      }, x.clone = function() {
        return C.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, S;
    }(), Z = X.prototype;
    return W.prototype = Z, [["$ms", n], ["$s", i], ["$m", o], ["$H", l], ["$W", u], ["$M", f], ["$y", v], ["$D", D]].forEach(function(S) {
      Z[S[1]] = function(x) {
        return this.$g(x, S[0], S[1]);
      };
    }), W.extend = function(S, x) {
      return S.$i || (S(x, X, W), S.$i = !0), W;
    }, W.locale = z, W.isDayjs = N, W.unix = function(S) {
      return W(1e3 * S);
    }, W.en = H[$], W.Ls = H, W.p = {}, W;
  });
})(xt);
var fs = xt.exports;
const ve = /* @__PURE__ */ Oe(fs);
var Ct = { exports: {} };
(function(R, t) {
  (function(e, s) {
    R.exports = s();
  })(_e, function() {
    var e = "month", s = "quarter";
    return function(r, n) {
      var i = n.prototype;
      i.quarter = function(u) {
        return this.$utils().u(u) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (u - 1));
      };
      var o = i.add;
      i.add = function(u, c) {
        return u = Number(u), this.$utils().p(c) === s ? this.add(3 * u, e) : o.bind(this)(u, c);
      };
      var l = i.startOf;
      i.startOf = function(u, c) {
        var f = this.$utils(), h = !!f.u(c) || c;
        if (f.p(u) === s) {
          var v = this.quarter() - 1;
          return h ? this.month(3 * v).startOf(e).startOf("day") : this.month(3 * v + 2).endOf(e).endOf("day");
        }
        return l.bind(this)(u, c);
      };
    };
  });
})(Ct);
var ps = Ct.exports;
const gs = /* @__PURE__ */ Oe(ps);
var St = { exports: {} };
(function(R, t) {
  (function(e, s) {
    R.exports = s();
  })(_e, function() {
    var e = "minute", s = /[+-]\d\d(?::?\d\d)?/g, r = /([+-]|\d\d)/g;
    return function(n, i, o) {
      var l = i.prototype;
      o.utc = function(g) {
        var w = { date: g, utc: !0, args: arguments };
        return new i(w);
      }, l.utc = function(g) {
        var w = o(this.toDate(), { locale: this.$L, utc: !0 });
        return g ? w.add(this.utcOffset(), e) : w;
      }, l.local = function() {
        return o(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var u = l.parse;
      l.parse = function(g) {
        g.utc && (this.$u = !0), this.$utils().u(g.$offset) || (this.$offset = g.$offset), u.call(this, g);
      };
      var c = l.init;
      l.init = function() {
        if (this.$u) {
          var g = this.$d;
          this.$y = g.getUTCFullYear(), this.$M = g.getUTCMonth(), this.$D = g.getUTCDate(), this.$W = g.getUTCDay(), this.$H = g.getUTCHours(), this.$m = g.getUTCMinutes(), this.$s = g.getUTCSeconds(), this.$ms = g.getUTCMilliseconds();
        } else
          c.call(this);
      };
      var f = l.utcOffset;
      l.utcOffset = function(g, w) {
        var T = this.$utils().u;
        if (T(g))
          return this.$u ? 0 : T(this.$offset) ? f.call(this) : this.$offset;
        if (typeof g == "string" && (g = function($) {
          $ === void 0 && ($ = "");
          var H = $.match(s);
          if (!H)
            return null;
          var N = ("" + H[0]).match(r) || ["-", 0, 0], z = N[0], W = 60 * +N[1] + +N[2];
          return W === 0 ? 0 : z === "+" ? W : -W;
        }(g), g === null))
          return this;
        var b = Math.abs(g) <= 16 ? 60 * g : g, k = this;
        if (w)
          return k.$offset = b, k.$u = g === 0, k;
        if (g !== 0) {
          var A = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (k = this.local().add(b + A, e)).$offset = b, k.$x.$localOffset = A;
        } else
          k = this.utc();
        return k;
      };
      var h = l.format;
      l.format = function(g) {
        var w = g || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h.call(this, w);
      }, l.valueOf = function() {
        var g = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * g;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var v = l.toDate;
      l.toDate = function(g) {
        return g === "s" && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : v.call(this);
      };
      var D = l.diff;
      l.diff = function(g, w, T) {
        if (g && this.$u === g.$u)
          return D.call(this, g, w, T);
        var b = this.local(), k = o(g).local();
        return D.call(b, k, w, T);
      };
    };
  });
})(St);
var vs = St.exports;
const ms = /* @__PURE__ */ Oe(vs);
var Rt = { exports: {} };
(function(R, t) {
  (function(e, s) {
    R.exports = s();
  })(_e, function() {
    return function(e, s) {
      s.prototype.weekday = function(r) {
        var n = this.$locale().weekStart || 0, i = this.$W, o = (i < n ? i + 7 : i) - n;
        return this.$utils().u(r) ? o : this.subtract(o, "day").add(r, "day");
      };
    };
  });
})(Rt);
var Ds = Rt.exports;
const ys = /* @__PURE__ */ Oe(Ds), ct = {
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
  summaryPos: me.TopRight,
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
}, Es = (R, t, e, s) => {
  const { localeDayjs: r } = R, n = r(new Date(e)), i = r(s);
  let o = "";
  return t === O.Week || n !== i && (t === O.Custom || t === O.Custom1 || t === O.Custom2) ? (o = `${n.format("MMM D")}-${i.format("D, YYYY")}`, n.month() !== i.month() && (o = `${n.format("MMM D")}-${i.format("MMM D, YYYY")}`), n.year() !== i.year() && (o = `${n.format("MMM D, YYYY")}-${i.format("MMM D, YYYY")}`)) : t === O.Month ? o = n.format("MMMM YYYY") : t === O.Quarter ? o = `${n.format("MMM D")}-${i.format("MMM D, YYYY")}` : t === O.Year ? o = n.format("YYYY") : o = n.format("MMM D, YYYY"), o;
}, ws = (R, t) => {
  var e;
  return R.isEventPerspective && ((e = R.resources.find((s) => s.id === t.resourceId)) == null ? void 0 : e.name) || t.title;
}, bs = (R) => {
  const { localeDayjs: t } = R;
  return t(/* @__PURE__ */ new Date());
}, xs = (R, t) => {
  const { localeDayjs: e, cellUnit: s } = R;
  if (s === U.Hour) {
    const r = e(new Date(t)).hour();
    return r < 9 || r > 18;
  } else {
    const r = e(new Date(t)).weekday();
    return r === 0 || r === 6;
  }
}, dt = {
  getSummaryFunc: void 0,
  getCustomDateFunc: void 0,
  getNonAgendaViewBodyCellBgColorFunc: void 0,
  getScrollSpecialDayjsFunc: bs,
  getDateLabelFunc: Es,
  getEventTextFunc: ws,
  isNonWorkingTimeFunc: xs
};
class Hs {
  constructor(t = ve(), e = O.Week, s = !1, r = !1, n = void 0, i = void 0) {
    this.resources = [], this.events = [], this.eventGroups = [], this.eventGroupsAutoGenerated = !0, this.viewType = e, this.cellUnit = e === O.Day ? U.Hour : U.Day, this.showAgenda = s, this.isEventPerspective = r, this.resizing = !1, this.scrollToSpecialDayjs = !1, this.documentWidth = 0, this._shouldReloadViewType = !1, this.calendarPopoverLocale = void 0, ve.extend(gs), ve.extend(ys), ve.extend(ms), this.localeDayjs = ve, this.config = n == null ? ct : { ...ct, ...n }, this._validateMinuteStep(this.config.minuteStep), this.behaviors = i == null ? dt : { ...dt, ...i }, this._resolveDate(0, t), this._createHeaders(), this._createRenderData();
  }
  setSchedulerLocale(t, e) {
    if (!t)
      return;
    let s = t;
    typeof t == "string" && import(`dayjs/locale/${t}.js`).then((r) => {
      s = r.default, e && Object.entries(e).forEach(([n, i]) => s[n] = i);
    }).catch((r) => {
      console.error("Error loading locale:", r);
    }), this.localeDayjs.locale(s), this._shouldReloadViewType = !0, this.setViewType(this.viewType, this.showAgenda, this.isEventPerspective);
  }
  setCalendarPopoverLocale(t) {
    t && typeof t == "string" && import(`antd/locale/${t}.js`).then((e) => {
      this.calendarPopoverLocale = e.default || Locale;
    }).catch((e) => {
      console.error("Error loading locale:", e);
    });
  }
  setResources(t) {
    this._validateResource(t), this.resources = Array.from(new Set(t)), this._createRenderData(), this.setScrollToSpecialDayjs(!0);
  }
  setEventGroupsAutoGenerated(t) {
    this.eventGroupsAutoGenerated = t;
  }
  //optional
  setEventGroups(t) {
    this._validateEventGroups(t), this.eventGroups = Array.from(new Set(t)), this.eventGroupsAutoGenerated = !1, this._createRenderData(), this.setScrollToSpecialDayjs(!0);
  }
  setMinuteStep(t) {
    this.config.minuteStep !== t && (this._validateMinuteStep(t), this.config.minuteStep = t, this._createHeaders(), this._createRenderData());
  }
  setBesidesWidth(t) {
    t >= 0 && (this.config.besidesWidth = t);
  }
  getMinuteStepsInHour() {
    return 60 / this.config.minuteStep;
  }
  addResource(t) {
    this.resources.filter((s) => s.id === t.id).length === 0 && (this.resources.push(t), this._createRenderData());
  }
  addEventGroup(t) {
    this.eventGroups.filter((s) => s.id === t.id).length === 0 && (this.eventGroups.push(t), this._createRenderData());
  }
  removeEventGroupById(t) {
    let e = -1;
    this.eventGroups.forEach((s, r) => {
      s.id === t && (e = r);
    }), e !== -1 && this.eventGroups.splice(e, 1);
  }
  containsEventGroupId(t) {
    let e = -1;
    return this.eventGroups.forEach((s, r) => {
      s.id === t && (e = r);
    }), e !== -1;
  }
  setEvents(t) {
    this._validateEvents(t), this.events = Array.from(t), this.eventGroupsAutoGenerated && this._generateEventGroups(), this.config.recurringEventsEnabled && this._handleRecurringEvents(), this._createRenderData();
  }
  setScrollToSpecialDayjs(t) {
    this.config.scrollToSpecialDayjsEnabled && (this.scrollToSpecialDayjs = t);
  }
  prev() {
    this._resolveDate(-1), this.events = [], this._createHeaders(), this._createRenderData();
  }
  next() {
    this._resolveDate(1), this.events = [], this._createHeaders(), this._createRenderData();
  }
  setDate(t = ve(/* @__PURE__ */ new Date())) {
    this._resolveDate(0, t), this.events = [], this._createHeaders(), this._createRenderData();
  }
  setViewType(t = O.Week, e = !1, s = !1) {
    if (this.showAgenda = e, this.isEventPerspective = s, this.cellUnit = U.Day, this.viewType !== t || this._shouldReloadViewType) {
      let r = this.startDate;
      if (t === O.Custom || t === O.Custom1 || t === O.Custom2)
        this.viewType = t, this._resolveDate(0, r);
      else {
        if (this.viewType < t)
          t === O.Week ? (this.startDate = this.localeDayjs(new Date(r)).startOf("week"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("week")) : t === O.Month ? (this.startDate = this.localeDayjs(new Date(r)).startOf("month"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("month")) : t === O.Quarter ? (this.startDate = this.localeDayjs(new Date(r)).startOf("quarter"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("quarter")) : t === O.Year && (this.startDate = this.localeDayjs(new Date(r)).startOf("year"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("year"));
        else {
          let n = this.localeDayjs(new Date(this.startDate)), i = this.localeDayjs(new Date(this.endDate)).add(1, "days");
          if (this.selectDate !== void 0) {
            let l = this.localeDayjs(new Date(this.selectDate));
            l >= n && l < i && (r = this.selectDate);
          }
          let o = this.localeDayjs();
          o >= n && o < i && (r = o.startOf("day")), t === O.Day ? (this.startDate = r, this.endDate = this.startDate, this.cellUnit = U.Hour) : t === O.Week ? (this.startDate = this.localeDayjs(new Date(r)).startOf("week"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("week")) : t === O.Month ? (this.startDate = this.localeDayjs(new Date(r)).startOf("month"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("month")) : t === O.Quarter && (this.startDate = this.localeDayjs(new Date(r)).startOf("quarter"), this.endDate = this.localeDayjs(new Date(this.startDate)).endOf("quarter"));
        }
        this.viewType = t;
      }
      this._shouldReloadViewType = !1, this.events = [], this._createHeaders(), this._createRenderData(), this.setScrollToSpecialDayjs(!0);
    }
  }
  setSchedulerMaxHeight(t) {
    this.config.schedulerMaxHeight = t;
  }
  isSchedulerResponsive() {
    return !!this.config.schedulerWidth.endsWith && this.config.schedulerWidth.endsWith("%");
  }
  toggleExpandStatus(t) {
    let e = !1, s = -1, r = !1, n = /* @__PURE__ */ new Map();
    this.renderData.forEach((i) => {
      if (e === !1)
        i.slotId === t && i.hasChildren && (e = !0, r = !i.expanded, i.expanded = r, s = i.indent, n.set(i.indent, {
          expanded: i.expanded,
          render: i.render
        }));
      else if (i.indent > s) {
        let o = n.get(i.indent - 1);
        i.render = o.expanded && o.render, i.hasChildren && n.set(i.indent, {
          expanded: i.expanded,
          render: i.render
        });
      } else
        e = !1;
    });
  }
  isResourceViewResponsive() {
    let t = this.getResourceTableConfigWidth();
    return !!t.endsWith && t.endsWith("%");
  }
  isContentViewResponsive() {
    let t = this.getContentCellConfigWidth();
    return !!t.endsWith && t.endsWith("%");
  }
  getSchedulerWidth() {
    let t = this.documentWidth - this.config.besidesWidth > 0 ? this.documentWidth - this.config.besidesWidth : 0;
    return this.isSchedulerResponsive() ? parseInt(t * Number(this.config.schedulerWidth.slice(0, -1)) / 100) : this.config.schedulerWidth;
  }
  getResourceTableWidth() {
    let t = this.getResourceTableConfigWidth(), e = this.getSchedulerWidth(), s = this.isResourceViewResponsive() ? parseInt(e * Number(t.slice(0, -1)) / 100) : t;
    return this.isSchedulerResponsive() && this.getContentTableWidth() + s < e && (s = e - this.getContentTableWidth()), s;
  }
  getContentCellWidth() {
    let t = this.getContentCellConfigWidth(), e = this.getSchedulerWidth();
    return this.isContentViewResponsive() ? parseInt(e * Number(t.slice(0, -1)) / 100) : t;
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
  getSlotById(t) {
    let e = this.getSlots(), s;
    return e.forEach((r) => {
      r.id === t && (s = r);
    }), s;
  }
  getResourceById(t) {
    let e;
    return this.resources.forEach((s) => {
      s.id === t && (e = s);
    }), e;
  }
  getTableHeaderHeight() {
    return this.config.tableHeaderHeight;
  }
  getSchedulerContentDesiredHeight() {
    let t = 0;
    return this.renderData.forEach((e) => {
      e.render && (t += e.rowHeight);
    }), t;
  }
  getCellMaxEvents() {
    return this.viewType === O.Week ? this.config.weekMaxEvents : this.viewType === O.Day ? this.config.dayMaxEvents : this.viewType === O.Month ? this.config.monthMaxEvents : this.viewType === O.Year ? this.config.yearMaxEvents : this.viewType === O.Quarter ? this.config.quarterMaxEvents : this.config.customMaxEvents;
  }
  getCalendarPopoverLocale() {
    return this.calendarPopoverLocale;
  }
  getSelectedDate() {
    return this.selectDate.format(ge);
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
    let t = this.localeDayjs(new Date(this.startDate)), e = this.localeDayjs(new Date(this.endDate)), s = t.format("LL");
    return t != e && (s = `${t.format("LL")}-${e.format("LL")}`), this.behaviors.getDateLabelFunc && (s = this.behaviors.getDateLabelFunc(this, this.viewType, this.startDate, this.endDate)), s;
  }
  addEvent(t) {
    this._attachEvent(t), this.eventGroupsAutoGenerated && this._generateEventGroups(), this._createRenderData();
  }
  updateEventStart(t, e) {
    this._detachEvent(t), t.start = e, this._attachEvent(t), this._createRenderData();
  }
  updateEventEnd(t, e) {
    t.end = e, this._createRenderData();
  }
  swapEvent(t, e) {
    this.isEventPerspective ? ([t.groupId, e.groupId] = [e.groupId, t.groupId], [t.groupName, e.groupName] = [e.groupName, t.groupName]) : [t.resourceId, e.resourceId] = [e.resourceId, t.resourceId], [t.start, e.start] = [e.start, t.start], [t.end, e.end] = [e.end, t.end], this._detachEvent(t), this._detachEvent(e), this._attachEvent(t), this._attachEvent(e), this._createRenderData();
  }
  swapEvent2(t, e) {
    var s = Object.assign({}, t), r = Object.assign({}, e);
    this._detachEvent(t), this._detachEvent(e), this.isEventPerspective ? (s.groupId = e.groupId, s.groupName = e.groupName, r.groupId = t.groupId, r.groupName = t.groupName) : (s.resourceId = e.resourceId, r.resourceId = t.resourceId), s.end = e.end, s.start = e.start, r.end = t.end, r.start = t.start, this._attachEvent(s), this._attachEvent(r), this._createRenderData();
  }
  moveEvent(t, e, s, r, n) {
    this._detachEvent(t), this.isEventPerspective ? (t.groupId = e, t.groupName = s) : t.resourceId = e, t.end = n, t.start = r, this._attachEvent(t), this._createRenderData();
  }
  isEventInTimeWindow(t, e, s, r) {
    return t < r && e > s;
  }
  removeEvent(t) {
    let e = this.events.indexOf(t);
    e !== -1 && (this.events.splice(e, 1), this._createRenderData());
  }
  removeEventById(t) {
    let e = -1;
    this.events.forEach((s, r) => {
      s.id === t && (e = r);
    }), e !== -1 && (this.events.splice(e, 1), this._createRenderData());
  }
  getResourceTableConfigWidth() {
    return this.showAgenda ? this.config.agendaResourceTableWidth : this.viewType === O.Week ? this.config.weekResourceTableWidth : this.viewType === O.Day ? this.config.dayResourceTableWidth : this.viewType === O.Month ? this.config.monthResourceTableWidth : this.viewType === O.Year ? this.config.yearResourceTableWidth : this.viewType === O.Quarter ? this.config.quarterResourceTableWidth : this.config.customResourceTableWidth;
  }
  getContentCellConfigWidth() {
    return this.viewType === O.Week ? this.config.weekCellWidth : this.viewType === O.Day ? this.config.dayCellWidth : this.viewType === O.Month ? this.config.monthCellWidth : this.viewType === O.Year ? this.config.yearCellWidth : this.viewType === O.Quarter ? this.config.quarterCellWidth : this.config.customCellWidth;
  }
  _setDocumentWidth(t) {
    t >= 0 && (this.documentWidth = t);
  }
  _detachEvent(t) {
    let e = this.events.indexOf(t);
    e !== -1 && this.events.splice(e, 1);
  }
  _attachEvent(t) {
    let e = 0, s = this.localeDayjs(new Date(t.start));
    this.events.forEach((r, n) => {
      let i = this.localeDayjs(new Date(r.start));
      s >= i && (e = n + 1);
    }), this.events.splice(e, 0, t);
  }
  _handleRecurringEvents() {
    let t = this.events.filter((e) => !!e.rrule);
    t.forEach((e) => {
      this._detachEvent(e);
    }), t.forEach((e) => {
      let s = this.startDate, r = this.endDate.add(1, "days"), n = this.localeDayjs(new Date(e.start)), i = this.localeDayjs(new Date(e.end)), o = Ae(e.rrule), l, u = o.origOptions.until || r.toDate();
      if (o.origOptions.dtstart && (l = this.localeDayjs(new Date(o.origOptions.dtstart))), r < u && (o.origOptions.until = r.toDate()), o = Ae(o.toString()), e.exdates || e.exrule) {
        const f = new os();
        f.rrule(o), e.exrule && f.exrule(Ae(e.exrule)), e.exdates && e.exdates.forEach((h) => {
          f.exdate(this.localeDayjs(h).toDate());
        }), o = f;
      }
      o.between(new Date(s), new Date(r)).forEach((f, h) => {
        const v = {
          ...e,
          recurringEventId: e.id,
          recurringEventStart: e.start,
          recurringEventEnd: e.end,
          id: `${e.id}-${h}`,
          start: o.origOptions.tzid ? this.localeDayjs.utc(f).utcOffset(this.localeDayjs((/* @__PURE__ */ new Date()).utcOffset)(), !0).format(V) : this.localeDayjs(new Date(f)).format(V),
          end: o.origOptions.tzid ? this.localeDayjs.utc(f).utcOffset(this.localeDayjs((/* @__PURE__ */ new Date()).utcOffset)(), !0).add(i.diff(n), "ms").add(this.localeDayjs(new Date(u)).utcOffset() - this.localeDayjs(new Date(e.start)).utcOffset(), "m").format(V) : this.localeDayjs(new Date(f)).add(i.diff(n), "ms").format(V)
        };
        let D = this.localeDayjs(v.start), g = this.localeDayjs(v.end);
        this.isEventInTimeWindow(D, g, s, r) && (!l || D >= l) && this._attachEvent(v);
      });
    });
  }
  _resolveDate(t, e = void 0) {
    if (e != null && (this.selectDate = this.localeDayjs(e)), this.viewType === O.Week)
      this.startDate = e != null ? this.localeDayjs(e).startOf("week") : this.localeDayjs(this.startDate).add(t, "weeks"), this.endDate = this.localeDayjs(this.startDate).endOf("week");
    else if (this.viewType === O.Day)
      this.startDate = e != null ? this.selectDate : this.localeDayjs(this.startDate).add(t, "days"), this.endDate = this.startDate;
    else if (this.viewType === O.Month)
      this.startDate = e != null ? this.localeDayjs(e).startOf("month") : this.localeDayjs(this.startDate).add(t, "months"), this.endDate = this.localeDayjs(this.startDate).endOf("month");
    else if (this.viewType === O.Quarter)
      this.startDate = e != null ? this.localeDayjs(e).startOf("quarter") : this.localeDayjs(this.startDate).add(t, "quarters"), this.endDate = this.localeDayjs(this.startDate).endOf("quarter");
    else if (this.viewType === O.Year)
      this.startDate = e != null ? this.localeDayjs(e).startOf("year") : this.localeDayjs(this.startDate).add(t, "years"), this.endDate = this.localeDayjs(this.startDate).endOf("year");
    else if (this.viewType === O.Custom || this.viewType === O.Custom1 || this.viewType === O.Custom2)
      if (this.behaviors.getCustomDateFunc != null) {
        let s = this.behaviors.getCustomDateFunc(this, t, e);
        this.startDate = this.localeDayjs(s.startDate), this.endDate = this.localeDayjs(s.endDate), s.cellUnit && (this.cellUnit = s.cellUnit);
      } else
        throw new Error("This is custom view type, set behaviors.getCustomDateFunc func to resolve the time window(startDate and endDate) yourself");
  }
  _createHeaders() {
    let t = [], e = this.localeDayjs(new Date(this.startDate)), s = this.localeDayjs(new Date(this.endDate)), r = e;
    if (this.showAgenda)
      t.push({ time: r.format(V), nonWorkingTime: !1 });
    else if (this.cellUnit === U.Hour) {
      e.hour() == 0 && (e = e.add(this.config.dayStartFrom, "hours")), s.hour() == 0 && (s = s.add(this.config.dayStopTo, "hours")), r = e;
      let n = -1;
      for (; r >= e && r <= s; ) {
        if (r.hour() == n) {
          r = r.add(1, "hours");
          continue;
        }
        n = r.hour();
        let i = this.getMinuteStepsInHour();
        for (let o = 0; o < i; o++) {
          let l = r.hour();
          if (l >= this.config.dayStartFrom && l <= this.config.dayStopTo) {
            let u = r.format(V), c = this.behaviors.isNonWorkingTimeFunc(this, u);
            t.push({ time: u, nonWorkingTime: c });
          }
          r = r.add(this.config.minuteStep, "minutes");
        }
      }
    } else if (this.cellUnit === U.Day)
      for (; r >= e && r <= s; ) {
        let n = r.format(V), i = r.weekday();
        if (this.config.displayWeekend || i !== 0 && i !== 6) {
          let o = this.behaviors.isNonWorkingTimeFunc(this, n);
          t.push({ time: n, nonWorkingTime: o });
        }
        r = r.add(1, "days");
      }
    else if (this.cellUnit === U.Week)
      for (; r >= e && r <= s; ) {
        let n = r.format(ge);
        t.push({ time: n }), r = r.add(1, "weeks").startOf("week");
      }
    else if (this.cellUnit === U.Month)
      for (; r >= e && r <= s; ) {
        let n = r.format(ge);
        t.push({ time: n }), r = r.add(1, "months").startOf("month");
      }
    else if (this.cellUnit === U.Year)
      for (; r >= e && r <= s; ) {
        let n = r.format(ge);
        t.push({ time: n }), r = r.add(1, "years").startOf("year");
      }
    this.headers = t;
  }
  _createInitHeaderEvents(t) {
    let e = this.localeDayjs(new Date(t.time)), s = e.format(V), r = this.showAgenda ? this.viewType === O.Week ? e.add(1, "weeks").format(V) : this.viewType === O.Day ? e.add(1, "days").format(V) : this.viewType === O.Month ? e.add(1, "months").format(V) : this.viewType === O.Year ? e.add(1, "years").format(V) : this.viewType === O.Quarter ? e.add(1, "quarters").format(V) : this.localeDayjs(new Date(this.endDate)).add(1, "days").format(V) : this.cellUnit === U.Hour ? e.add(this.config.minuteStep, "minutes").format(V) : this.cellUnit === U.Year ? e.add(1, "years").format(ge) : this.cellUnit === U.Month ? e.add(1, "months").format(ge) : this.cellUnit === U.Week ? e.add(1, "weeks").format(ge) : e.add(1, "days").format(V);
    return {
      time: t.time,
      nonWorkingTime: t.nonWorkingTime,
      start: s,
      end: r,
      count: 0,
      addMore: 0,
      addMoreIndex: 0,
      events: [, , ,]
    };
  }
  _createHeaderEvent(t, e, s) {
    return {
      render: t,
      span: e,
      eventItem: s
    };
  }
  _getEventSlotId(t) {
    return this.isEventPerspective ? this._getEventGroupId(t) : t.resourceId;
  }
  _getEventGroupId(t) {
    return t.groupId ? t.groupId.toString() : t.id.toString();
  }
  _getEventGroupName(t) {
    return t.groupName ? t.groupName : t.title;
  }
  _generateEventGroups() {
    let t = [], e = /* @__PURE__ */ new Set();
    this.events.forEach((s) => {
      let r = this._getEventGroupId(s), n = this._getEventGroupName(s);
      e.has(r) || (t.push({
        id: r,
        name: n,
        state: s
      }), e.add(r));
    }), this.eventGroups = t;
  }
  _createInitRenderData(t, e, s, r) {
    let n = t ? e : s, i = [], o = /* @__PURE__ */ new Map();
    n.forEach((h) => {
      let v = r.map((b) => this._createInitHeaderEvents(b)), D = {
        slotId: h.id,
        slotName: h.name,
        parentId: h.parentId,
        groupOnly: h.groupOnly,
        hasSummary: !1,
        rowMaxCount: 0,
        rowHeight: this.config.nonAgendaSlotMinHeight !== 0 ? this.config.nonAgendaSlotMinHeight : this.config.eventItemLineHeight + 2,
        headerItems: v,
        indent: 0,
        hasChildren: !1,
        expanded: !0,
        render: !0
      }, g = h.id, w;
      o.has(g) ? (w = o.get(g), w.data = D) : (w = {
        data: D,
        children: []
      }, o.set(g, w));
      let T = h.parentId;
      if (!T || T === g)
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
  _getSpan(t, e, s) {
    if (this.showAgenda)
      return 1;
    const r = (c, f, h) => {
      if ((h === "days" || h === "day") && c.getDate() === f.getDate() && c.getMonth() === f.getMonth())
        return 1;
      let v;
      switch (h) {
        case "days":
        case "day":
          v = 1e3 * 60 * 60 * 24;
          break;
        case "minutes":
        case "minute":
          v = 1e3 * 60;
          break;
        default:
          return 0;
      }
      const D = c.getTime(), w = (f.getTime() - D) / v;
      return w < 0 ? 0 : w;
    };
    let n = new Date(t), i = new Date(e), o = 0, l = new Date(this.startDate), u = new Date(this.endDate);
    if (this.viewType === O.Day) {
      if (s.length > 0) {
        const c = new Date(s[0].time);
        c.getDate() > n.getDate() && c.getDate() < i.getDate() ? o = 1440 / this.config.minuteStep : c.getDate() > n.getDate() && c.getDate() === i.getDate() ? o = Math.ceil(r(c, i, "minutes") / this.config.minuteStep) : c.getDate() === n.getDate() && c.getDate() < i.getDate() ? (c.setHours(23, 59, 59), o = Math.ceil(r(n, c, "minutes") / this.config.minuteStep)) : (c.getDate() === n.getDate() && c.getDate() === i.getDate() || i.getDate() === n.getDate()) && (o = Math.ceil(r(n, i, "minutes") / this.config.minuteStep));
      }
    } else if (this.viewType === O.Week) {
      const c = l < n ? n : l;
      o = Math.ceil(r(c, i, "days"));
    } else if (this.viewType === O.Month) {
      const c = n.getMonth() === i.getMonth() ? i : ve(n).endOf("month").toDate();
      o = Math.ceil(r(n, c, "days"));
    } else if (this.viewType === O.Quarter || this.viewType === O.Year)
      o = Math.ceil(r(n, i, "days"));
    else {
      l.setHours(0, 0, 0, 0), u.setHours(23, 59, 59), this.cellUnit === U.Day && (i.setHours(23, 59, 59), n.setHours(0, 0, 0, 0));
      const c = this.cellUnit === U.Day ? "days" : "minutes", f = this.cellUnit === U.Day ? 1 : this.config.minuteStep;
      l >= n && i <= u ? o = Math.ceil(r(l, i, c) / f) : l > n && i > u ? o = Math.ceil(r(l, u, c) / f) : l <= n && i >= u ? o = Math.ceil(r(n, u, c) / f) : o = Math.ceil(r(n, i, c) / f);
    }
    return o;
  }
  _validateResource(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Resources should be Array object");
    t.forEach((e, s) => {
      if (e == null)
        throw console.error(`Resource undefined: ${s}`), new Error(`Resource undefined: ${s}`);
      if (e.id == null || e.name == null)
        throw console.error("Resource property missed", s, e), new Error(`Resource property undefined: ${s}`);
    });
  }
  _validateEventGroups(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Event groups should be Array object");
    t.forEach((e, s) => {
      if (e == null)
        throw console.error(`Event group undefined: ${s}`), new Error(`Event group undefined: ${s}`);
      if (e.id == null || e.name == null)
        throw console.error("Event group property missed", s, e), new Error(`Event group property undefined: ${s}`);
    });
  }
  _validateEvents(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Events should be Array object");
    t.forEach((e, s) => {
      if (e == null)
        throw console.error(`Event undefined: ${s}`), new Error(`Event undefined: ${s}`);
      if (e.id == null || e.resourceId == null || e.title == null || e.start == null || e.end == null)
        throw console.error("Event property missed", s, e), new Error(`Event property undefined: ${s}`);
    });
  }
  _validateMinuteStep(t) {
    if (60 % t !== 0)
      throw console.error("Minute step is not set properly - 60 minutes must be divisible without remainder by this number"), new Error("Minute step is not set properly - 60 minutes must be divisible without remainder by this number");
  }
  _compare(t, e) {
    let s = this.localeDayjs(t.start), r = this.localeDayjs(e.start);
    if (s !== r)
      return s < r ? -1 : 1;
    let n = this.localeDayjs(t.end), i = this.localeDayjs(e.end);
    return n !== i ? n < i ? -1 : 1 : t.id < e.id ? -1 : 1;
  }
  _createRenderData() {
    let t = this._createInitRenderData(this.isEventPerspective, this.eventGroups, this.resources, this.headers), e = this.getCellMaxEvents();
    const s = 30;
    this.events.forEach((r) => {
      let n = t.filter((i) => i.slotId === this._getEventSlotId(r));
      if (n.length > 0) {
        let i = n[0], o = this._getSpan(r.start, r.end, this.headers), l = new Date(r.start), u = new Date(r.end), c = -1;
        i.headerItems.forEach((f, h) => {
          let v = new Date(f.start);
          if (new Date(f.end) > l && v < u) {
            if (f.count = f.count + 1, f.count > i.rowMaxCount) {
              i.rowMaxCount = f.count;
              let T = (e <= s && i.rowMaxCount > e ? e : i.rowMaxCount) * this.config.eventItemLineHeight + (this.config.creatable && this.config.checkConflict === !1 ? 20 : 2);
              T > i.rowHeight && (i.rowHeight = T);
            }
            if (c === -1) {
              let w = 0;
              for (; f.events[w] !== void 0; )
                w++;
              c = w;
            }
            let g = v <= l || h === 0;
            if (g === !1) {
              let w = i.headerItems[h - 1], T = new Date(w.start);
              (new Date(w.end) <= l || T >= u) && (g = !0);
            }
            f.events[c] = this._createHeaderEvent(g, o, r);
          }
        });
      }
    }), (e <= s || this.behaviors.getSummaryFunc !== void 0) && t.forEach((r) => {
      let n = !1;
      if (r.headerItems.forEach((i) => {
        if (e <= s) {
          let o = 0, l = 0, u = 0;
          for (; u < e - 1; )
            i.events[u] !== void 0 && (o++, l = u + 1), u++;
          i.events[u] !== void 0 ? o + 1 < i.count && (i.addMore = i.count - o, i.addMoreIndex = l) : o < i.count && (i.addMore = i.count - o, i.addMoreIndex = l);
        }
        if (this.behaviors.getSummaryFunc !== void 0) {
          let o = [];
          i.events.forEach((l) => {
            l && l.eventItem && o.push(l.eventItem);
          }), i.summary = this.behaviors.getSummaryFunc(this, o, r.slotId, r.slotName, i.start, i.end), i.summary && i.summary.text != null && (n = !0);
        }
      }), r.hasSummary = n, n) {
        let o = ((e <= s && r.rowMaxCount > e ? e : r.rowMaxCount) + 1) * this.config.eventItemLineHeight + (this.config.creatable && this.config.checkConflict === !1 ? 20 : 2);
        o > r.rowHeight && (r.rowHeight = o);
      }
    }), this.renderData = t;
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
const $s = {
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
}, Cs = ut.Button, Ss = ut.Group, Tt = ({ onViewChange: R, goNext: t, goBack: e, onSelectDate: s, schedulerData: r, leftCustomHeader: n, rightCustomHeader: i }) => {
  var z, W;
  const [o, l] = ke(!1), [u, c] = ke(!1), [f, h] = ke(!1), { viewType: v, showAgenda: D, isEventPerspective: g, config: w } = r, T = r.getDateLabel(), b = r.getSelectedDate(), k = (W = (z = r.getCalendarPopoverLocale()) == null ? void 0 : z.default) == null ? void 0 : W.Calendar, A = `${v}${D ? 1 : 0}${g ? 1 : 0}`, $ = (C, X, Z = void 0) => {
    const { config: S } = r;
    X ? S.viewChangeSpinEnabled && l(!0) : S.dateChangeSpinEnabled && c(!0);
    const x = () => {
      Z !== void 0 ? C(Z) : C(), X ? S.viewChangeSpinEnabled && l(!1) : S.dateChangeSpinEnabled && c(!1);
    };
    S.viewChangeSpinEnabled || S.dateChangeSpinEnabled ? setTimeout(x, S.schedulerHeaderEventsFuncsTimeoutMs) : x();
  }, H = /* @__PURE__ */ d.jsx("div", { className: "popover-calendar", children: /* @__PURE__ */ d.jsx(
    Zt,
    {
      locale: k,
      defaultValue: ve(b),
      fullscreen: !1,
      onSelect: (C) => {
        h(!1), $(s, !1, C.format(ge));
      }
    }
  ) }), N = w.views.map((C) => /* @__PURE__ */ d.jsx(
    Cs,
    {
      value: `${C.viewType}${C.showAgenda ? 1 : 0}${C.isEventPerspective ? 1 : 0}`,
      children: /* @__PURE__ */ d.jsx("span", { style: { margin: "0px 8px" }, children: C.viewName })
    },
    `${C.viewType}${C.showAgenda ? 1 : 0}${C.isEventPerspective ? 1 : 0}`
  ));
  return /* @__PURE__ */ d.jsxs(we, { gutter: [10, 10], type: "flex", align: "middle", justify: "space-between", style: { marginBottom: "24px" }, children: [
    n,
    /* @__PURE__ */ d.jsx(de, { children: /* @__PURE__ */ d.jsx("div", { className: "header2-text", children: /* @__PURE__ */ d.jsxs(it, { children: [
      /* @__PURE__ */ d.jsxs("div", { children: [
        /* @__PURE__ */ d.jsx(is, { type: "left", style: { marginRight: "8px" }, className: "icon-nav", onClick: () => $(e, !1) }),
        w.calendarPopoverEnabled ? /* @__PURE__ */ d.jsx(Fe, { content: H, placement: "bottomLeft", trigger: "click", open: f, onOpenChange: h, children: /* @__PURE__ */ d.jsx("span", { className: "header2-text-label", style: { cursor: "pointer" }, children: T }) }) : /* @__PURE__ */ d.jsx("span", { className: "header2-text-label", children: T }),
        /* @__PURE__ */ d.jsx(as, { type: "right", style: { marginLeft: "8px" }, className: "icon-nav", onClick: () => $(t, !1) })
      ] }),
      /* @__PURE__ */ d.jsx(at, { spinning: u })
    ] }) }) }),
    /* @__PURE__ */ d.jsx(de, { children: /* @__PURE__ */ d.jsxs(it, { children: [
      /* @__PURE__ */ d.jsx(at, { spinning: o }),
      /* @__PURE__ */ d.jsx(Ss, { buttonStyle: "solid", defaultValue: A, size: "default", onChange: (C) => $(R, !0, C), children: N })
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
const Ps = (R) => (t) => /* @__PURE__ */ d.jsx(ts, { backend: ls, children: /* @__PURE__ */ d.jsx(R, { ...t }) });
class Rs extends We {
  constructor(e) {
    super(e);
    P(this, "onWindowResize", (e) => {
      const { schedulerData: s } = this.props;
      s._setDocumentWidth(document.documentElement.clientWidth), this.setState({ documentWidth: document.documentElement.clientWidth, documentHeight: document.documentElement.clientHeight });
    });
    P(this, "resolveScrollbarSize", () => {
      this.props;
      let e = 17, s = 17, r = 17, n = 17;
      this.schedulerContent && (e = this.schedulerContent.offsetHeight - this.schedulerContent.clientHeight, s = this.schedulerContent.offsetWidth - this.schedulerContent.clientWidth), this.schedulerResource && (r = this.schedulerResource.offsetHeight - this.schedulerResource.clientHeight, n = this.schedulerResource.offsetWidth - this.schedulerResource.clientWidth);
      let i = {}, o = !1;
      e != this.state.contentScrollbarHeight && (i = { ...i, contentScrollbarHeight: e }, o = !0), s != this.state.contentScrollbarWidth && (i = { ...i, contentScrollbarWidth: s }, o = !0), r != this.state.resourceScrollbarHeight && (i = { ...i, resourceScrollbarHeight: r }, o = !0), n != this.state.resourceScrollbarWidth && (i = { ...i, resourceScrollbarWidth: n }, o = !0), o && this.setState(i);
    });
    P(this, "schedulerHeadRef", (e) => {
      this.schedulerHead = e;
    });
    P(this, "onSchedulerHeadMouseOver", () => {
      this.currentArea = 2;
    });
    P(this, "onSchedulerHeadMouseOut", () => {
      this.currentArea = -1;
    });
    P(this, "onSchedulerHeadScroll", (e, s) => {
      (this.currentArea === 2 || this.currentArea === -1) && this.schedulerContent.scrollLeft != this.schedulerHead.scrollLeft && (this.schedulerContent.scrollLeft = this.schedulerHead.scrollLeft);
    });
    P(this, "schedulerResourceRef", (e) => {
      this.schedulerResource = e;
    });
    P(this, "onSchedulerResourceMouseOver", () => {
      this.currentArea = 1;
    });
    P(this, "onSchedulerResourceMouseOut", () => {
      this.currentArea = -1;
    });
    P(this, "onSchedulerResourceScroll", (e, s) => {
      this.schedulerResource && (this.currentArea === 1 || this.currentArea === -1) && this.schedulerContent.scrollTop != this.schedulerResource.scrollTop && (this.schedulerContent.scrollTop = this.schedulerResource.scrollTop);
    });
    P(this, "schedulerContentRef", (e) => {
      this.schedulerContent = e;
    });
    P(this, "schedulerContentBgTableRef", (e) => {
      this.schedulerContentBgTable = e;
    });
    P(this, "onSchedulerContentMouseOver", () => {
      this.currentArea = 0;
    });
    P(this, "onSchedulerContentMouseOut", () => {
      this.currentArea = -1;
    });
    P(this, "onSchedulerContentScroll", (e, s) => {
      this.schedulerResource && (this.currentArea === 0 || this.currentArea === -1) && (this.schedulerHead.scrollLeft != this.schedulerContent.scrollLeft && (this.schedulerHead.scrollLeft = this.schedulerContent.scrollLeft), this.schedulerResource.scrollTop != this.schedulerContent.scrollTop && (this.schedulerResource.scrollTop = this.schedulerContent.scrollTop));
      const { schedulerData: r, onScrollLeft: n, onScrollRight: i, onScrollTop: o, onScrollBottom: l } = this.props;
      this.schedulerContent.scrollLeft !== this.scrollLeft ? (this.schedulerContent.scrollLeft === 0 && n != null && n(r, this.schedulerContent, this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth), Math.round(this.schedulerContent.scrollLeft) === this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth && i != null && i(r, this.schedulerContent, this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth)) : this.schedulerContent.scrollTop !== this.scrollTop && (this.schedulerContent.scrollTop === 0 && o != null && o(r, this.schedulerContent, this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight), Math.round(this.schedulerContent.scrollTop) === this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight && l != null && l(r, this.schedulerContent, this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight)), this.scrollLeft = this.schedulerContent.scrollLeft, this.scrollTop = this.schedulerContent.scrollTop;
    });
    P(this, "onViewChange", (e) => {
      const { onViewChange: s, schedulerData: r } = this.props;
      let n = parseInt(e.target.value.charAt(0)), i = e.target.value.charAt(1) === "1", o = e.target.value.charAt(2) === "1";
      s(r, { viewType: n, showAgenda: i, isEventPerspective: o }), this.setState({ ...this.state, spinning: !1 });
    });
    P(this, "goNext", () => {
      const { nextClick: e, schedulerData: s } = this.props;
      e(s);
    });
    P(this, "goBack", () => {
      const { prevClick: e, schedulerData: s } = this.props;
      e(s);
    });
    P(this, "onSelect", (e) => {
      const { onSelectDate: s, schedulerData: r } = this.props;
      s(r, e);
    });
    const { schedulerData: s, dndSources: r, parentRef: n } = e;
    let i = [];
    i.push(new ht((l) => l.eventItem, Be, s.config.dragAndDropEnabled)), r != null && r.length > 0 && (i = [...i, ...r]);
    let o = new us(i, yt);
    this.currentArea = -1, this.state = {
      dndContext: o,
      contentScrollbarHeight: 17,
      contentScrollbarWidth: 17,
      resourceScrollbarHeight: 17,
      resourceScrollbarWidth: 17,
      documentWidth: 0,
      documentHeight: 0
    }, this.scrollLeft = 0, this.scrollTop = 0, (s.isSchedulerResponsive() && !s.config.responsiveByParent || n === void 0) && (s._setDocumentWidth(document.documentElement.clientWidth), window.onresize = this.onWindowResize);
  }
  componentDidMount(e, s) {
    const { schedulerData: r, parentRef: n } = this.props;
    this.resolveScrollbarSize(), n !== void 0 && r.config.responsiveByParent && n.current && (r._setDocumentWidth(n.current.offsetWidth), this.ulObserver = new ResizeObserver((i, o) => {
      if (n.current) {
        const l = n.current.offsetWidth, u = n.current.offsetHeight;
        r._setDocumentWidth(l), this.setState({
          documentWidth: l,
          documentHeight: u
        });
      }
    }), this.ulObserver.observe(n.current));
  }
  componentDidUpdate(e, s) {
    this.resolveScrollbarSize();
    const { schedulerData: r } = this.props, { localeDayjs: n, behaviors: i } = r;
    if (r.getScrollToSpecialDayjs() && i.getScrollSpecialDayjsFunc && this.schedulerContent && this.schedulerContent.scrollWidth > this.schedulerContent.clientWidth) {
      let o = n(new Date(r.startDate)).startOf("day"), l = n(new Date(r.endDate)).endOf("day"), u = i.getScrollSpecialDayjsFunc(r, o, l);
      if (u >= o && u <= l) {
        let c = 0;
        r.headers.forEach((f) => {
          let h = n(new Date(f.time));
          u >= h && c++;
        }), this.schedulerContent.scrollLeft = (c - 1) * r.getContentCellWidth(), r.setScrollToSpecialDayjs(!1);
      }
    }
  }
  render() {
    const { schedulerData: e, leftCustomHeader: s, rightCustomHeader: r } = this.props, { viewType: n, renderData: i, showAgenda: o, config: l } = e, u = e.getSchedulerWidth();
    let c = /* @__PURE__ */ d.jsx("tr", {});
    if (o)
      c = /* @__PURE__ */ d.jsx(bt, { ...this.props });
    else {
      let h = e.getResourceTableWidth(), v = u - (l.resourceViewEnabled ? h : 0), D = e.getContentTableWidth() - 1, g = this.state.dndContext.getDropTarget(l.dragAndDropEnabled), w = this.state.dndContext.getDndSource(), b = i.filter((S) => S.render).map((S) => /* @__PURE__ */ be(g, { ...this.props, key: S.slotId, resourceEvents: S, dndSource: w })), k = this.state.contentScrollbarHeight, A = this.state.contentScrollbarWidth, $ = this.state.resourceScrollbarHeight, H = this.state.resourceScrollbarWidth, N = l.schedulerContentHeight, z = $ === 0 ? k : 0, W = k === 0 ? $ : 0, C = {
        overflowX: n === O.Week ? "hidden" : "auto",
        overflowY: "auto",
        margin: "0px",
        position: "relative",
        height: N,
        paddingBottom: W
      }, X = {
        height: N,
        overflowX: "auto",
        overflowY: "auto",
        width: h + H - 2,
        margin: `0px -${A}px 0px 0px`
      };
      l.schedulerMaxHeight > 0 && (C = {
        ...C,
        maxHeight: l.schedulerMaxHeight - l.tableHeaderHeight
      }, X = {
        ...X,
        maxHeight: l.schedulerMaxHeight - l.tableHeaderHeight
      });
      let Z = e.isEventPerspective ? l.taskName : l.resourceName;
      c = /* @__PURE__ */ d.jsxs("tr", { children: [
        /* @__PURE__ */ d.jsx("td", { style: { display: l.resourceViewEnabled ? void 0 : "none", width: h, verticalAlign: "top" }, children: /* @__PURE__ */ d.jsxs("div", { className: "resource-view", children: [
          /* @__PURE__ */ d.jsx("div", { style: { overflow: "hidden", borderBottom: "1px solid #e9e9e9", height: l.tableHeaderHeight }, children: /* @__PURE__ */ d.jsx("div", { style: { overflowX: "scroll", overflowY: "hidden", margin: `0px 0px -${k}px` }, children: /* @__PURE__ */ d.jsx("table", { className: "resource-table", children: /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { style: { height: l.tableHeaderHeight }, children: /* @__PURE__ */ d.jsx("th", { className: "header3-text", children: Z }) }) }) }) }) }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              style: X,
              ref: this.schedulerResourceRef,
              onMouseOver: this.onSchedulerResourceMouseOver,
              onMouseOut: this.onSchedulerResourceMouseOut,
              onScroll: this.onSchedulerResourceScroll,
              children: /* @__PURE__ */ d.jsx(ft, { ...this.props, contentScrollbarHeight: z })
            }
          )
        ] }) }),
        /* @__PURE__ */ d.jsx("td", { children: /* @__PURE__ */ d.jsxs("div", { className: "scheduler-view", style: { width: v, verticalAlign: "top" }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { overflow: "hidden", borderBottom: "1px solid #e9e9e9", height: l.tableHeaderHeight }, children: /* @__PURE__ */ d.jsx(
            "div",
            {
              style: { overflowX: "scroll", overflowY: "hidden", margin: `0px 0px -${k}px` },
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
              style: C,
              ref: this.schedulerContentRef,
              onMouseOver: this.onSchedulerContentMouseOver,
              onMouseOut: this.onSchedulerContentMouseOut,
              onScroll: this.onSchedulerContentScroll,
              children: /* @__PURE__ */ d.jsxs("div", { style: { width: D }, children: [
                /* @__PURE__ */ d.jsx("div", { className: "scheduler-content", children: /* @__PURE__ */ d.jsx("table", { className: "scheduler-content-table", children: /* @__PURE__ */ d.jsx("tbody", { children: b }) }) }),
                /* @__PURE__ */ d.jsx("div", { className: "scheduler-bg", children: /* @__PURE__ */ d.jsx("table", { className: "scheduler-bg-table", style: { width: D }, ref: this.schedulerContentBgTableRef, children: /* @__PURE__ */ d.jsx(gt, { ...this.props }) }) })
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
        schedulerData: e,
        onSelectDate: this.onSelect,
        goNext: this.goNext,
        goBack: this.goBack,
        rightCustomHeader: r,
        leftCustomHeader: s
      }
    )), /* @__PURE__ */ d.jsxs("table", { id: "RBS-Scheduler-root", className: "scheduler", style: { width: `${u}px` }, children: [
      /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: "2", children: f }) }) }),
      /* @__PURE__ */ d.jsx("tbody", { children: c })
    ] });
  }
}
P(Rs, "propTypes", {
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
  hs as AddMorePopover,
  U as CellUnit,
  V as DATETIME_FORMAT,
  ge as DATE_FORMAT,
  $s as DemoData,
  us as DnDContext,
  ht as DnDSource,
  Rs as Scheduler,
  Hs as SchedulerData,
  me as SummaryPos,
  O as ViewType,
  Ps as wrapperFun
};
