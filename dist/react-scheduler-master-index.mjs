var Yt = Object.defineProperty;
var qt = (y, t, e) => t in y ? Yt(y, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : y[t] = e;
var M = (y, t, e) => (qt(y, typeof t != "symbol" ? t + "" : t, e), e);
import st, { Component as _e, createElement as he, useState as $t } from "react";
import u, { PropTypes as oe } from "prop-types";
import { MinusSquareOutlined as Bt, PlusSquareOutlined as Vt, CloseOutlined as Gt, LeftOutlined as Ut, RightOutlined as Xt } from "@ant-design/icons";
import { Row as ue, Col as ee, Popover as He, Radio as it, Calendar as Qt } from "antd";
import { DragSource as Jt, DropTarget as Kt } from "react-dnd";
import ke from "moment";
import { rrulestr as je, RRuleSet as Zt } from "rrule";
var We = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function er() {
  if (et)
    return me;
  et = 1;
  var y = st, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, d, c) {
    var h, p = {}, f = null, m = null;
    c !== void 0 && (f = "" + c), d.key !== void 0 && (f = "" + d.key), d.ref !== void 0 && (m = d.ref);
    for (h in d)
      r.call(d, h) && !i.hasOwnProperty(h) && (p[h] = d[h]);
    if (a && a.defaultProps)
      for (h in d = a.defaultProps, d)
        p[h] === void 0 && (p[h] = d[h]);
    return { $$typeof: t, type: a, key: f, ref: m, props: p, _owner: n.current };
  }
  return me.Fragment = e, me.jsx = o, me.jsxs = o, me;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function tr() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && function() {
    var y = st, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), E = Symbol.iterator, R = "@@iterator";
    function C(s) {
      if (s === null || typeof s != "object")
        return null;
      var g = E && s[E] || s[R];
      return typeof g == "function" ? g : null;
    }
    var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(s) {
      {
        for (var g = arguments.length, b = new Array(g > 1 ? g - 1 : 0), I = 1; I < g; I++)
          b[I - 1] = arguments[I];
        D("error", s, b);
      }
    }
    function D(s, g, b) {
      {
        var I = x.ReactDebugCurrentFrame, F = I.getStackAddendum();
        F !== "" && (g += "%s", b = b.concat([F]));
        var B = b.map(function(L) {
          return String(L);
        });
        B.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, B);
      }
    }
    var T = !1, k = !1, j = !1, N = !1, A = !1, S;
    S = Symbol.for("react.module.reference");
    function _(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === i || A || s === n || s === c || s === h || N || s === m || T || k || j || typeof s == "object" && s !== null && (s.$$typeof === f || s.$$typeof === p || s.$$typeof === o || s.$$typeof === a || s.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === S || s.getModuleId !== void 0));
    }
    function q(s, g, b) {
      var I = s.displayName;
      if (I)
        return I;
      var F = g.displayName || g.name || "";
      return F !== "" ? b + "(" + F + ")" : b;
    }
    function Q(s) {
      return s.displayName || "Context";
    }
    function G(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case a:
            var g = s;
            return Q(g) + ".Consumer";
          case o:
            var b = s;
            return Q(b._context) + ".Provider";
          case d:
            return q(s, s.render, "ForwardRef");
          case p:
            var I = s.displayName || null;
            return I !== null ? I : G(s.type) || "Memo";
          case f: {
            var F = s, B = F._payload, L = F._init;
            try {
              return G(L(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, U = 0, z, Y, $, V, ne, Le, Pe;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function vt() {
      {
        if (U === 0) {
          z = console.log, Y = console.info, $ = console.warn, V = console.error, ne = console.group, Le = console.groupCollapsed, Pe = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        U++;
      }
    }
    function Et() {
      {
        if (U--, U === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, s, {
              value: z
            }),
            info: K({}, s, {
              value: Y
            }),
            warn: K({}, s, {
              value: $
            }),
            error: K({}, s, {
              value: V
            }),
            group: K({}, s, {
              value: ne
            }),
            groupCollapsed: K({}, s, {
              value: Le
            }),
            groupEnd: K({}, s, {
              value: Pe
            })
          });
        }
        U < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = x.ReactCurrentDispatcher, Re;
    function ve(s, g, b) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (F) {
            var I = F.stack.trim().match(/\n( *(at )?)/);
            Re = I && I[1] || "";
          }
        return `
` + Re + s;
      }
    }
    var Se = !1, Ee;
    {
      var bt = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new bt();
    }
    function ze(s, g) {
      if (!s || Se)
        return "";
      {
        var b = Ee.get(s);
        if (b !== void 0)
          return b;
      }
      var I;
      Se = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = Ce.current, Ce.current = null, vt();
      try {
        if (g) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (se) {
              I = se;
            }
            Reflect.construct(s, [], L);
          } else {
            try {
              L.call();
            } catch (se) {
              I = se;
            }
            s.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (se) {
            I = se;
          }
          s();
        }
      } catch (se) {
        if (se && I && typeof se.stack == "string") {
          for (var H = se.stack.split(`
`), Z = I.stack.split(`
`), X = H.length - 1, J = Z.length - 1; X >= 1 && J >= 0 && H[X] !== Z[J]; )
            J--;
          for (; X >= 1 && J >= 0; X--, J--)
            if (H[X] !== Z[J]) {
              if (X !== 1 || J !== 1)
                do
                  if (X--, J--, J < 0 || H[X] !== Z[J]) {
                    var te = `
` + H[X].replace(" at new ", " at ");
                    return s.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", s.displayName)), typeof s == "function" && Ee.set(s, te), te;
                  }
                while (X >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        Se = !1, Ce.current = B, Et(), Error.prepareStackTrace = F;
      }
      var ce = s ? s.displayName || s.name : "", Ze = ce ? ve(ce) : "";
      return typeof s == "function" && Ee.set(s, Ze), Ze;
    }
    function yt(s, g, b) {
      return ze(s, !1);
    }
    function xt(s) {
      var g = s.prototype;
      return !!(g && g.isReactComponent);
    }
    function be(s, g, b) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return ze(s, xt(s));
      if (typeof s == "string")
        return ve(s);
      switch (s) {
        case c:
          return ve("Suspense");
        case h:
          return ve("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case d:
            return yt(s.render);
          case p:
            return be(s.type, g, b);
          case f: {
            var I = s, F = I._payload, B = I._init;
            try {
              return be(B(F), g, b);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, Fe = {}, Ye = x.ReactDebugCurrentFrame;
    function xe(s) {
      if (s) {
        var g = s._owner, b = be(s.type, s._source, g ? g.type : null);
        Ye.setExtraStackFrame(b);
      } else
        Ye.setExtraStackFrame(null);
    }
    function Ct(s, g, b, I, F) {
      {
        var B = Function.call.bind(ye);
        for (var L in s)
          if (B(s, L)) {
            var H = void 0;
            try {
              if (typeof s[L] != "function") {
                var Z = Error((I || "React class") + ": " + b + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              H = s[L](g, L, I, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              H = X;
            }
            H && !(H instanceof Error) && (xe(F), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", b, L, typeof H), xe(null)), H instanceof Error && !(H.message in Fe) && (Fe[H.message] = !0, xe(F), v("Failed %s type: %s", b, H.message), xe(null));
          }
      }
    }
    var Rt = Array.isArray;
    function we(s) {
      return Rt(s);
    }
    function St(s) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, b = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return b;
      }
    }
    function wt(s) {
      try {
        return qe(s), !1;
      } catch {
        return !0;
      }
    }
    function qe(s) {
      return "" + s;
    }
    function $e(s) {
      if (wt(s))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(s)), qe(s);
    }
    var fe = x.ReactCurrentOwner, Dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, Ve, De;
    De = {};
    function Tt(s) {
      if (ye.call(s, "ref")) {
        var g = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Mt(s) {
      if (ye.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function It(s, g) {
      if (typeof s.ref == "string" && fe.current && g && fe.current.stateNode !== g) {
        var b = G(fe.current.type);
        De[b] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(fe.current.type), s.ref), De[b] = !0);
      }
    }
    function kt(s, g) {
      {
        var b = function() {
          Be || (Be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function jt(s, g) {
      {
        var b = function() {
          Ve || (Ve = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Wt = function(s, g, b, I, F, B, L) {
      var H = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: g,
        ref: b,
        props: L,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(H, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(H, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    };
    function _t(s, g, b, I, F) {
      {
        var B, L = {}, H = null, Z = null;
        b !== void 0 && ($e(b), H = "" + b), Mt(g) && ($e(g.key), H = "" + g.key), Tt(g) && (Z = g.ref, It(g, F));
        for (B in g)
          ye.call(g, B) && !Dt.hasOwnProperty(B) && (L[B] = g[B]);
        if (s && s.defaultProps) {
          var X = s.defaultProps;
          for (B in X)
            L[B] === void 0 && (L[B] = X[B]);
        }
        if (H || Z) {
          var J = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          H && kt(L, J), Z && jt(L, J);
        }
        return Wt(s, H, Z, F, I, fe.current, L);
      }
    }
    var Te = x.ReactCurrentOwner, Ge = x.ReactDebugCurrentFrame;
    function de(s) {
      if (s) {
        var g = s._owner, b = be(s.type, s._source, g ? g.type : null);
        Ge.setExtraStackFrame(b);
      } else
        Ge.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Ie(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function Ue() {
      {
        if (Te.current) {
          var s = G(Te.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Ht(s) {
      {
        if (s !== void 0) {
          var g = s.fileName.replace(/^.*[\\\/]/, ""), b = s.lineNumber;
          return `

Check your code at ` + g + ":" + b + ".";
        }
        return "";
      }
    }
    var Xe = {};
    function Ot(s) {
      {
        var g = Ue();
        if (!g) {
          var b = typeof s == "string" ? s : s.displayName || s.name;
          b && (g = `

Check the top-level render call using <` + b + ">.");
        }
        return g;
      }
    }
    function Qe(s, g) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var b = Ot(g);
        if (Xe[b])
          return;
        Xe[b] = !0;
        var I = "";
        s && s._owner && s._owner !== Te.current && (I = " It was passed a child from " + G(s._owner.type) + "."), de(s), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, I), de(null);
      }
    }
    function Je(s, g) {
      {
        if (typeof s != "object")
          return;
        if (we(s))
          for (var b = 0; b < s.length; b++) {
            var I = s[b];
            Ie(I) && Qe(I, g);
          }
        else if (Ie(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var F = C(s);
          if (typeof F == "function" && F !== s.entries)
            for (var B = F.call(s), L; !(L = B.next()).done; )
              Ie(L.value) && Qe(L.value, g);
        }
      }
    }
    function Nt(s) {
      {
        var g = s.type;
        if (g == null || typeof g == "string")
          return;
        var b;
        if (typeof g == "function")
          b = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === p))
          b = g.propTypes;
        else
          return;
        if (b) {
          var I = G(g);
          Ct(b, s.props, "prop", I, s);
        } else if (g.PropTypes !== void 0 && !Me) {
          Me = !0;
          var F = G(g);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lt(s) {
      {
        for (var g = Object.keys(s.props), b = 0; b < g.length; b++) {
          var I = g[b];
          if (I !== "children" && I !== "key") {
            de(s), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), de(null);
            break;
          }
        }
        s.ref !== null && (de(s), v("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    function Ke(s, g, b, I, F, B) {
      {
        var L = _(s);
        if (!L) {
          var H = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (H += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Ht(F);
          Z ? H += Z : H += Ue();
          var X;
          s === null ? X = "null" : we(s) ? X = "array" : s !== void 0 && s.$$typeof === t ? (X = "<" + (G(s.type) || "Unknown") + " />", H = " Did you accidentally export a JSX literal instead of a component?") : X = typeof s, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, H);
        }
        var J = _t(s, g, b, F, B);
        if (J == null)
          return J;
        if (L) {
          var te = g.children;
          if (te !== void 0)
            if (I)
              if (we(te)) {
                for (var ce = 0; ce < te.length; ce++)
                  Je(te[ce], s);
                Object.freeze && Object.freeze(te);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(te, s);
        }
        return s === r ? Lt(J) : Nt(J), J;
      }
    }
    function Pt(s, g, b) {
      return Ke(s, g, b, !0);
    }
    function At(s, g, b) {
      return Ke(s, g, b, !1);
    }
    var zt = At, Ft = Pt;
    ge.Fragment = r, ge.jsx = zt, ge.jsxs = Ft;
  }()), ge;
}
process.env.NODE_ENV === "production" ? We.exports = er() : We.exports = tr();
var l = We.exports;
function Oe({
  schedulerData: y,
  eventItem: t,
  title: e,
  startTime: r,
  endTime: n,
  statusColor: i,
  subtitleGetter: o,
  viewEventClick: a,
  viewEventText: d,
  viewEvent2Click: c,
  viewEvent2Text: h,
  eventItemPopoverTemplateResolver: p
}) {
  const { localeMoment: f, config: m } = y, E = f(r), R = f(n);
  if (p != null)
    return p(y, t, e, E, R, i);
  let C = /* @__PURE__ */ l.jsx("div", {});
  if (o !== void 0) {
    let D = o(y, t);
    D != null && (C = /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", {}) }),
      /* @__PURE__ */ l.jsx(ee, { span: 22, className: "overflow-text", children: /* @__PURE__ */ l.jsx("span", { className: "header2-text", title: D, children: D }) })
    ] }));
  }
  let x = /* @__PURE__ */ l.jsx("div", {});
  if (d !== void 0 && a !== void 0 && (t.clickable1 == null || t.clickable1)) {
    let D = /* @__PURE__ */ l.jsx(ee, { span: 22, children: /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer" }, onClick: () => a(y, t), children: d }) });
    h !== void 0 && c !== void 0 && (t.clickable2 == null || t.clickable2) && (D = /* @__PURE__ */ l.jsxs(ee, { span: 22, children: [
      /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer" }, onClick: () => a(y, t), children: d }),
      /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer", marginLeft: "16px" }, onClick: () => c(y, t), children: h })
    ] })), x = /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", {}) }),
      D
    ] });
  } else if (h !== void 0 && c !== void 0 && (t.clickable2 == null || t.clickable2)) {
    let D = /* @__PURE__ */ l.jsx(ee, { span: 22, children: /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer" }, onClick: () => c(y, t), children: h }) });
    x = /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", {}) }),
      D
    ] });
  }
  let v = m.eventItemPopoverDateFormat;
  return /* @__PURE__ */ l.jsxs("div", { style: { width: "300px" }, children: [
    /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", { className: "status-dot", style: { backgroundColor: i } }) }),
      /* @__PURE__ */ l.jsx(ee, { span: 22, className: "overflow-text", children: /* @__PURE__ */ l.jsx("span", { className: "header2-text", title: e, children: e }) })
    ] }),
    C,
    /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", {}) }),
      /* @__PURE__ */ l.jsxs(ee, { span: 22, children: [
        /* @__PURE__ */ l.jsx("span", { className: "header1-text", children: E.format("HH:mm") }),
        /* @__PURE__ */ l.jsx("span", { className: "help-text", style: { marginLeft: "8px" }, children: E.format(v) }),
        /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { marginLeft: "8px" }, children: "-" }),
        /* @__PURE__ */ l.jsx("span", { className: "header1-text", style: { marginLeft: "8px" }, children: R.format("HH:mm") }),
        /* @__PURE__ */ l.jsx("span", { className: "help-text", style: { marginLeft: "8px" }, children: R.format(v) })
      ] })
    ] }),
    x
  ] });
}
Oe.propTypes = {
  schedulerData: u.object.isRequired,
  eventItem: u.object.isRequired,
  title: u.string.isRequired,
  startTime: u.string.isRequired,
  endTime: u.string.isRequired,
  statusColor: u.string.isRequired,
  subtitleGetter: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  eventItemPopoverTemplateResolver: u.func
};
const W = "YYYY-MM-DD", P = "YYYY-MM-DD HH:mm:ss", w = { Day: 0, Week: 1, Month: 2, Quarter: 3, Year: 4, Custom: 5, Custom1: 6, Custom2: 7 }, O = { Day: 0, Hour: 1, Week: 2, Month: 3, Year: 4 }, ae = { Top: 0, TopRight: 1, TopLeft: 2, Bottom: 3, BottomRight: 4, BottomLeft: 5 }, ie = { EVENT: "event" }, re = "ontouchstart" in window;
class Ne extends _e {
  constructor(e) {
    super(e);
    M(this, "initStartDrag", (e) => {
      const { schedulerData: r, eventItem: n } = this.props;
      let i = r._getEventSlotId(n), o = r.getSlotById(i);
      if (o && o.groupOnly || r._isResizing())
        return;
      e.stopPropagation();
      let a = 0;
      if (re) {
        if (e.changedTouches.length == 0)
          return;
        a = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        a = e.clientX;
      }
      this.setState({
        startX: a
      }), r._startResizing(), re ? (this.startResizer.addEventListener("touchmove", this.doStartDrag, !1), this.startResizer.addEventListener("touchend", this.stopStartDrag, !1), this.startResizer.addEventListener("touchcancel", this.cancelStartDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doStartDrag, !1), document.documentElement.addEventListener("mouseup", this.stopStartDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    M(this, "doStartDrag", (e) => {
      e.stopPropagation();
      let r = 0;
      if (re) {
        if (e.changedTouches.length == 0)
          return;
        r = e.changedTouches[0].pageX;
      } else
        r = e.clientX;
      const { left: n, width: i, leftIndex: o, rightIndex: a, schedulerData: d } = this.props;
      let c = d.getContentCellWidth(), h = o > 0 ? 5 : 6, p = c - h, f = a * c - h;
      const { startX: m } = this.state;
      let E = n + r - m, R = i + m - r;
      R < p ? (R = p, E = (a - 1) * c + (a - 1 > 0 ? 2 : 3)) : R > f && (R = f, E = 3), this.setState({ left: E, width: R });
    });
    M(this, "stopStartDrag", (e) => {
      e.stopPropagation(), re ? (this.startResizer.removeEventListener("touchmove", this.doStartDrag, !1), this.startResizer.removeEventListener("touchend", this.stopStartDrag, !1), this.startResizer.removeEventListener("touchcancel", this.cancelStartDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doStartDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopStartDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      const { width: r, left: n, top: i, leftIndex: o, rightIndex: a, schedulerData: d, eventItem: c, updateEventStart: h, conflictOccurred: p } = this.props;
      if (d._stopResizing(), this.state.width === r)
        return;
      let f = 0;
      if (re) {
        if (e.changedTouches.length == 0) {
          this.setState({
            left: n,
            top: i,
            width: r
          });
          return;
        }
        f = e.changedTouches[0].pageX;
      } else
        f = e.clientX;
      const { cellUnit: m, events: E, config: R, localeMoment: C } = d;
      let x = d.getContentCellWidth(), v = o > 0 ? 5 : 6, D = x - v, T = a * x - v;
      const { startX: k } = this.state;
      let j = r + k - f, N = f - k, A = N < 0 ? -1 : N === 0 ? 0 : 1, S = (A > 0 ? Math.floor(Math.abs(N) / x) : Math.ceil(Math.abs(N) / x)) * A;
      j < D ? S = a - o - 1 : j > T && (S = -o);
      let _ = C(c.start).add(m === O.Hour ? S * R.minuteStep : S, m === O.Hour ? "minutes" : "days").format(P);
      if (S !== 0 && m !== O.Hour && R.displayWeekend === !1)
        if (S > 0) {
          let U = 0, z = 0;
          for (; ; ) {
            z++;
            let Y = C(c.start).add(z, "days"), $ = Y.weekday();
            if ($ !== 0 && $ !== 6 && (U++, U === S)) {
              _ = Y.format(P);
              break;
            }
          }
        } else {
          let U = 0, z = 0;
          for (; ; ) {
            z--;
            let Y = C(c.start).add(z, "days"), $ = Y.weekday();
            if ($ !== 0 && $ !== 6 && (U--, U === S)) {
              _ = Y.format(P);
              break;
            }
          }
        }
      let q = !1, Q = d._getEventSlotId(c), G, K = d.getSlotById(Q);
      if (K && (G = K.name), R.checkConflict) {
        let U = C(_), z = C(c.end);
        E.forEach((Y) => {
          if (d._getEventSlotId(Y) === Q && Y.id !== c.id) {
            let $ = C(Y.start), V = C(Y.end);
            (U >= $ && U < V || z > $ && z <= V || $ >= U && $ < z || V > U && V <= z) && (q = !0);
          }
        });
      }
      q ? (this.setState({
        left: n,
        top: i,
        width: r
      }), p != null ? p(d, "StartResize", c, ie.EVENT, Q, G, _, c.end) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it"), this.subscribeResizeEvent(this.props)) : h != null && h(d, c, _);
    });
    M(this, "cancelStartDrag", (e) => {
      e.stopPropagation(), this.startResizer.removeEventListener("touchmove", this.doStartDrag, !1), this.startResizer.removeEventListener("touchend", this.stopStartDrag, !1), this.startResizer.removeEventListener("touchcancel", this.cancelStartDrag, !1), document.onselectstart = null, document.ondragstart = null;
      const { schedulerData: r, left: n, top: i, width: o } = this.props;
      r._stopResizing(), this.setState({
        left: n,
        top: i,
        width: o
      });
    });
    M(this, "initEndDrag", (e) => {
      const { schedulerData: r, eventItem: n } = this.props;
      let i = r._getEventSlotId(n), o = r.getSlotById(i);
      if (o && o.groupOnly || r._isResizing())
        return;
      e.stopPropagation();
      let a = 0;
      if (re) {
        if (e.changedTouches.length == 0)
          return;
        a = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        a = e.clientX;
      }
      this.setState({
        endX: a
      }), r._startResizing(), re ? (this.endResizer.addEventListener("touchmove", this.doEndDrag, !1), this.endResizer.addEventListener("touchend", this.stopEndDrag, !1), this.endResizer.addEventListener("touchcancel", this.cancelEndDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doEndDrag, !1), document.documentElement.addEventListener("mouseup", this.stopEndDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    M(this, "doEndDrag", (e) => {
      e.stopPropagation();
      let r = 0;
      if (re) {
        if (e.changedTouches.length == 0)
          return;
        r = e.changedTouches[0].pageX;
      } else
        r = e.clientX;
      const { width: n, leftIndex: i, schedulerData: o } = this.props, { headers: a } = o;
      let d = o.getContentCellWidth(), c = i > 0 ? 5 : 6, h = d - c, p = (a.length - i) * d - c;
      const { endX: f } = this.state;
      let m = n + r - f;
      m < h ? m = h : m > p && (m = p), this.setState({ width: m });
    });
    M(this, "stopEndDrag", (e) => {
      e.stopPropagation(), re ? (this.endResizer.removeEventListener("touchmove", this.doEndDrag, !1), this.endResizer.removeEventListener("touchend", this.stopEndDrag, !1), this.endResizer.removeEventListener("touchcancel", this.cancelEndDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doEndDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopEndDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      const { width: r, left: n, top: i, leftIndex: o, rightIndex: a, schedulerData: d, eventItem: c, updateEventEnd: h, conflictOccurred: p } = this.props;
      if (d._stopResizing(), this.state.width === r)
        return;
      let f = 0;
      if (re) {
        if (e.changedTouches.length == 0) {
          this.setState({
            left: n,
            top: i,
            width: r
          });
          return;
        }
        f = e.changedTouches[0].pageX;
      } else
        f = e.clientX;
      const { headers: m, cellUnit: E, events: R, config: C, localeMoment: x } = d;
      let v = d.getContentCellWidth(), D = o > 0 ? 5 : 6, T = v - D, k = (m.length - o) * v - D;
      const { endX: j } = this.state;
      let N = r + f - j, A = N - r, S = A < 0 ? -1 : A === 0 ? 0 : 1, _ = (S < 0 ? Math.floor(Math.abs(A) / v) : Math.ceil(Math.abs(A) / v)) * S;
      N < T ? _ = o - a + 1 : N > k && (_ = m.length - a);
      let q = x(c.end).add(E === O.Hour ? _ * C.minuteStep : _, E === O.Hour ? "minutes" : "days").format(P);
      if (_ !== 0 && E !== O.Hour && C.displayWeekend === !1)
        if (_ > 0) {
          let z = 0, Y = 0;
          for (; ; ) {
            Y++;
            let $ = x(c.end).add(Y, "days"), V = $.weekday();
            if (V !== 0 && V !== 6 && (z++, z === _)) {
              q = $.format(P);
              break;
            }
          }
        } else {
          let z = 0, Y = 0;
          for (; ; ) {
            Y--;
            let $ = x(c.end).add(Y, "days"), V = $.weekday();
            if (V !== 0 && V !== 6 && (z--, z === _)) {
              q = $.format(P);
              break;
            }
          }
        }
      let Q = !1, G = d._getEventSlotId(c), K, U = d.getSlotById(G);
      if (U && (K = U.name), C.checkConflict) {
        let z = x(c.start), Y = x(q);
        R.forEach(($) => {
          if (d._getEventSlotId($) === G && $.id !== c.id) {
            let V = x($.start), ne = x($.end);
            (z >= V && z < ne || Y > V && Y <= ne || V >= z && V < Y || ne > z && ne <= Y) && (Q = !0);
          }
        });
      }
      Q ? (this.setState({
        left: n,
        top: i,
        width: r
      }), p != null ? p(d, "EndResize", c, ie.EVENT, G, K, c.start, q) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it"), this.subscribeResizeEvent(this.props)) : h != null && h(d, c, q);
    });
    M(this, "cancelEndDrag", (e) => {
      e.stopPropagation(), this.endResizer.removeEventListener("touchmove", this.doEndDrag, !1), this.endResizer.removeEventListener("touchend", this.stopEndDrag, !1), this.endResizer.removeEventListener("touchcancel", this.cancelEndDrag, !1), document.onselectstart = null, document.ondragstart = null;
      const { schedulerData: r, left: n, top: i, width: o } = this.props;
      r._stopResizing(), this.setState({
        left: n,
        top: i,
        width: o
      });
    });
    M(this, "startResizable", (e) => {
      const { eventItem: r, isInPopover: n, schedulerData: i } = e, { config: o } = i;
      return o.startResizable === !0 && n === !1 && (r.resizable == null || r.resizable !== !1) && (r.startResizable == null || r.startResizable !== !1);
    });
    M(this, "endResizable", (e) => {
      const { eventItem: r, isInPopover: n, schedulerData: i } = e, { config: o } = i;
      return o.endResizable === !0 && n === !1 && (r.resizable == null || r.resizable !== !1) && (r.endResizable == null || r.endResizable !== !1);
    });
    M(this, "subscribeResizeEvent", (e) => {
      this.startResizer != null && (re || (this.startResizer.removeEventListener("mousedown", this.initStartDrag, !1), this.startResizable(e) && this.startResizer.addEventListener("mousedown", this.initStartDrag, !1))), this.endResizer != null && (re || (this.endResizer.removeEventListener("mousedown", this.initEndDrag, !1), this.endResizable(e) && this.endResizer.addEventListener("mousedown", this.initEndDrag, !1)));
    });
    const { left: r, top: n, width: i } = e;
    this.state = {
      left: r,
      top: n,
      width: i
    }, this.startResizer = null, this.endResizer = null;
  }
  UNSAFE_componentWillReceiveProps(e) {
    const { left: r, top: n, width: i } = e;
    this.setState({
      left: r,
      top: n,
      width: i
    }), this.subscribeResizeEvent(e);
  }
  componentDidMount() {
    this.subscribeResizeEvent(this.props);
  }
  render() {
    const { eventItem: e, isStart: r, isEnd: n, isInPopover: i, eventItemClick: o, schedulerData: a, isDragging: d, connectDragSource: c, connectDragPreview: h, eventItemTemplateResolver: p } = this.props, { config: f, localeMoment: m } = a, { left: E, width: R, top: C } = this.state;
    let x = r ? n ? "round-all" : "round-head" : n ? "round-tail" : "round-none", v = f.defaultEventBgColor;
    e.bgColor && (v = e.bgColor);
    let D = a.behaviors.getEventTextFunc(a, e), T = /* @__PURE__ */ l.jsx(Oe, { ...this.props, eventItem: e, title: e.title, startTime: e.start, endTime: e.end, statusColor: v }), k = m(e.start), j = i ? `${k.format("HH:mm")} ${D}` : D, N = /* @__PURE__ */ l.jsx("div", {});
    this.startResizable(this.props) && (N = /* @__PURE__ */ l.jsx("div", { className: "event-resizer event-start-resizer", ref: (q) => this.startResizer = q }));
    let A = /* @__PURE__ */ l.jsx("div", {});
    this.endResizable(this.props) && (A = /* @__PURE__ */ l.jsx("div", { className: "event-resizer event-end-resizer", ref: (q) => this.endResizer = q }));
    let S = /* @__PURE__ */ l.jsx("div", { className: x + " event-item", style: { height: f.eventItemHeight, backgroundColor: v }, children: /* @__PURE__ */ l.jsx("span", { style: { marginLeft: "10px", lineHeight: `${f.eventItemHeight}px` }, children: j }) }, e.id);
    p != null && (S = p(a, e, v, r, n, "event-item", f.eventItemHeight, void 0));
    let _ = /* @__PURE__ */ l.jsxs(
      "a",
      {
        className: "timeline-event",
        style: { left: E, width: R, top: C },
        onClick: () => {
          o && o(a, e);
        },
        children: [
          S,
          N,
          A
        ]
      }
    );
    return d ? null : a._isResizing() || f.eventItemPopoverEnabled == !1 || e.showPopover == !1 ? /* @__PURE__ */ l.jsx("div", { children: h(c(_)) }) : /* @__PURE__ */ l.jsx(He, { placement: "bottomLeft", content: T, trigger: "hover", children: h(c(_)) });
  }
}
M(Ne, "propTypes", {
  schedulerData: u.object.isRequired,
  eventItem: u.object.isRequired,
  isStart: u.bool.isRequired,
  isEnd: u.bool.isRequired,
  left: u.number.isRequired,
  width: u.number.isRequired,
  top: u.number.isRequired,
  isInPopover: u.bool.isRequired,
  leftIndex: u.number.isRequired,
  rightIndex: u.number.isRequired,
  isDragging: u.bool.isRequired,
  connectDragSource: u.func.isRequired,
  connectDragPreview: u.func.isRequired,
  updateEventStart: u.func,
  updateEventEnd: u.func,
  moveEvent: u.func,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  conflictOccurred: u.func,
  eventItemTemplateResolver: u.func
});
class ot {
  constructor(t, e, r = ie.EVENT) {
    M(this, "getDragSpec", () => ({
      beginDrag: (t, e, r) => this.resolveDragObjFunc(t),
      endDrag: (t, e, r) => {
        if (!e.didDrop())
          return;
        const { moveEvent: n, newEvent: i, schedulerData: o } = t, { events: a, config: d, viewType: c, localeMoment: h } = o, p = e.getItem(), f = e.getItemType(), m = e.getDropResult();
        let E = m.slotId, R = m.slotName, C = m.start, x = m.end, v = m.initialStart;
        m.initialEnd;
        let D = "New", T = f === ie.EVENT;
        if (T) {
          const j = p;
          if (d.relativeMove)
            C = h(j.start).add(h(C).diff(h(v)), "ms").format(P);
          else if (c !== w.Day) {
            let N = h(C);
            C = h(j.start).year(N.year()).month(N.month()).date(N.date()).format(P);
          }
          if (x = h(C).add(h(j.end).diff(h(j.start)), "ms").format(P), d.crossResourceMove === !1) {
            E = o._getEventSlotId(p), R = void 0;
            let N = o.getSlotById(E);
            N && (R = N.name);
          }
          D = "Move";
        }
        let k = !1;
        if (d.checkConflict) {
          let j = h(C), N = h(x);
          a.forEach((A) => {
            if (o._getEventSlotId(A) === E && (!T || A.id !== p.id)) {
              let S = h(A.start), _ = h(A.end);
              (j >= S && j < _ || N > S && N <= _ || S >= j && S < N || _ > j && _ <= N) && (k = !0);
            }
          });
        }
        if (k) {
          const { conflictOccurred: j } = t;
          j != null ? j(o, D, p, f, E, R, C, x) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it");
        } else
          T ? n !== void 0 && n(o, p, E, R, C, x) : i !== void 0 && i(o, E, R, C, x, f, p);
      },
      canDrag: (t) => {
        const { schedulerData: e, resourceEvents: r } = t, n = this.resolveDragObjFunc(t);
        if (e._isResizing())
          return !1;
        const { config: i } = e;
        return i.movable && (r == null || !r.groupOnly) && (n.movable == null || n.movable !== !1);
      }
    }));
    M(this, "getDragCollect", (t, e) => ({
      connectDragSource: t.dragSource(),
      isDragging: e.isDragging(),
      connectDragPreview: t.dragPreview()
    }));
    M(this, "getDragSource", () => this.dragSource);
    this.resolveDragObjFunc = t, this.DecoratedComponent = e, this.dndType = r, this.dragSource = Jt(this.dndType, this.getDragSpec(), this.getDragCollect)(this.DecoratedComponent);
  }
}
function pe(y) {
  let t = 0, e = 0, r = y;
  for (; r; )
    t += r.offsetLeft - r.scrollLeft, e += r.offsetTop - r.scrollTop, r = r.offsetParent;
  return { x: t, y: e };
}
class rr {
  constructor(t, e) {
    M(this, "getDropSpec", () => ({
      drop: (t, e, r) => {
        const { schedulerData: n, resourceEvents: i } = t, { cellUnit: o, localeMoment: a } = n, d = e.getItemType(), c = pe(r.eventContainer);
        let h = n.getContentCellWidth(), p = null, f = null;
        if (d === ie.EVENT) {
          const x = e.getInitialClientOffset();
          let v = Math.floor((x.x - c.x) / h);
          p = i.headerItems[v].start, f = i.headerItems[v].end, o !== O.Hour && (f = a(i.headerItems[v].start).hour(23).minute(59).second(59).format(P));
        }
        const m = e.getClientOffset();
        let E = Math.floor((m.x - c.x) / h);
        if (!i.headerItems[E])
          return;
        let R = i.headerItems[E].start, C = i.headerItems[E].end;
        return o !== O.Hour && (C = a(i.headerItems[E].start).hour(23).minute(59).second(59).format(P)), {
          slotId: i.slotId,
          slotName: i.slotName,
          start: R,
          end: C,
          initialStart: p,
          initialEnd: f
        };
      },
      hover: (t, e, r) => {
        const { schedulerData: n, resourceEvents: i, movingEvent: o } = t, { cellUnit: a, config: d, viewType: c, localeMoment: h } = n, p = e.getItem(), f = e.getItemType(), m = pe(r.eventContainer);
        let E = n.getContentCellWidth(), R = null;
        if (f === ie.EVENT) {
          const A = e.getInitialClientOffset();
          let S = Math.floor((A.x - m.x) / E);
          R = i.headerItems[S].start, i.headerItems[S].end, a !== O.Hour && h(i.headerItems[S].start).hour(23).minute(59).second(59).format(P);
        }
        const C = e.getClientOffset();
        let x = Math.floor((C.x - m.x) / E);
        if (!i.headerItems[x])
          return;
        let v = i.headerItems[x].start, D = i.headerItems[x].end;
        a !== O.Hour && (D = h(i.headerItems[x].start).hour(23).minute(59).second(59).format(P));
        let T = i.slotId, k = i.slotName, j = "New";
        if (f === ie.EVENT) {
          const A = p;
          if (d.relativeMove)
            v = h(A.start).add(h(v).diff(h(R)), "ms").format(P);
          else if (c !== w.Day) {
            let S = h(v);
            v = h(A.start).year(S.year()).month(S.month()).date(S.date()).format(P);
          }
          if (D = h(v).add(h(A.end).diff(h(A.start)), "ms").format(P), d.crossResourceMove === !1) {
            T = n._getEventSlotId(p), k = void 0;
            let S = n.getSlotById(T);
            S && (k = S.name);
          }
          j = "Move";
        }
        o && o(n, T, k, v, D, j, f, p);
      },
      canDrop: (t, e) => {
        const { schedulerData: r, resourceEvents: n } = t, i = e.getItem();
        if (r._isResizing())
          return !1;
        const { config: o } = r;
        return o.movable && !n.groupOnly && (i.movable == null || i.movable !== !1);
      }
    }));
    M(this, "getDropCollect", (t, e) => ({
      connectDropTarget: t.dropTarget(),
      isOver: e.isOver()
    }));
    M(this, "getDropTarget", () => Kt([...this.sourceMap.keys()], this.getDropSpec(), this.getDropCollect)(this.DecoratedComponent));
    M(this, "getDndSource", (t = ie.EVENT) => this.sourceMap.get(t));
    this.sourceMap = /* @__PURE__ */ new Map(), t.forEach((r) => {
      this.sourceMap.set(r.dndType, r);
    }), this.DecoratedComponent = e;
  }
}
function at({ schedulerData: y, contentScrollbarHeight: t, slotClickedFunc: e, slotItemTemplateResolver: r, toggleExpandFunc: n }) {
  const { renderData: i } = y, o = y.getResourceTableWidth() - 2, a = t, d = i.filter((m) => m.render), c = (m) => {
    n && n(y, m.slotId);
  }, h = (m) => {
    e && e(y, m);
  }, p = (m) => {
    const E = Array.from({ length: m.indent }, (D, T) => /* @__PURE__ */ l.jsx("span", { className: "expander-space" }, `es${T}`)), R = m.hasChildren ? m.expanded ? /* @__PURE__ */ l.jsx(Bt, { onClick: () => c(m) }, `es${m.indent}`) : /* @__PURE__ */ l.jsx(Vt, { onClick: () => c(m) }, `es${m.indent}`) : /* @__PURE__ */ l.jsx("span", { className: "expander-space" }, `es${m.indent}`);
    E.push(R);
    const C = e ? /* @__PURE__ */ l.jsx("a", { className: "slot-text", onClick: () => h(m), children: m.slotName }) : /* @__PURE__ */ l.jsx("span", { className: "slot-text", children: m.slotName });
    let x = /* @__PURE__ */ l.jsx("div", { title: m.slotName, className: "overflow-text header2-text", style: { textAlign: "left" }, children: /* @__PURE__ */ l.jsxs("span", { className: "slot-cell", children: [
      E,
      C
    ] }) });
    if (r) {
      const D = r(y, m, e, o, "overflow-text header2-text");
      D && (x = D);
    }
    const v = {
      height: m.rowHeight,
      backgroundColor: m.groupOnly ? y.config.groupOnlySlotColor : void 0
    };
    return /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { "data-resource-id": m.slotId, style: v, children: x }) }, m.slotId);
  }, f = d.map(p);
  return /* @__PURE__ */ l.jsx("div", { style: { paddingBottom: a }, children: /* @__PURE__ */ l.jsx("table", { className: "resource-table", children: /* @__PURE__ */ l.jsx("tbody", { children: f }) }) });
}
at.propTypes = {
  schedulerData: u.object.isRequired,
  contentScrollbarHeight: u.number.isRequired,
  slotClickedFunc: u.func,
  slotItemTemplateResolver: u.func,
  toggleExpandFunc: u.func
};
function lt({ schedulerData: y, nonAgendaCellHeaderTemplateResolver: t }) {
  const { headers: e, cellUnit: r, config: n, localeMoment: i } = y, o = y.getTableHeaderHeight(), a = y.getContentCellWidth(), d = y.getMinuteStepsInHour(), c = typeof t == "function" ? t : null, h = e.map((p, f) => {
    if (r === O.Hour && f % d !== 0)
      return /* @__PURE__ */ l.jsx(l.Fragment, {});
    const { time: m, nonWorkingTime: E } = p, R = i(m);
    let C = {};
    r === O.Hour ? (C = E ? { width: a * d, color: n.nonWorkingTimeHeadColor, backgroundColor: n.nonWorkingTimeHeadBgColor } : { width: a * d }, f === e.length - d && (C = E ? { color: n.nonWorkingTimeHeadColor, backgroundColor: n.nonWorkingTimeHeadColor } : {})) : (C = E ? { width: a, color: n.nonWorkingTimeHeadColor, backgroundColor: n.nonWorkingTimeHeadBgColor } : { width: a }, f === e.length - 1 && (C = p.nonWorkingTime ? { color: n.nonWorkingTimeHeadColor, backgroundColor: n.nonWorkingTimeHeadBgColor } : {}));
    let x;
    switch (r) {
      case O.Hour:
        x = n.nonAgendaDayCellHeaderFormat;
        break;
      case O.Week:
        x = n.nonAgendaWeekCellHeaderFormat;
        break;
      case O.Month:
        x = n.nonAgendaMonthCellHeaderFormat;
        break;
      case O.Year:
        x = n.nonAgendaYearCellHeaderFormat;
        break;
      default:
        x = n.nonAgendaOtherCellHeaderFormat;
        break;
    }
    const v = x.split("|").map((k) => R.format(k)), D = v.map((k, j) => /* @__PURE__ */ l.jsx("div", { children: k }, j));
    return c ? c(y, p, v, C) : /* @__PURE__ */ l.jsx("th", { className: "header3-text", style: C, children: /* @__PURE__ */ l.jsx("div", { children: D }) }, m);
  });
  return /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsx("tr", { style: { height: o }, children: h }) });
}
lt.propTypes = {
  schedulerData: u.object.isRequired,
  nonAgendaCellHeaderTemplateResolver: u.func
};
function dt({ schedulerData: y }) {
  const { renderData: t, headers: e, config: r, behaviors: n } = y;
  let i = y.getContentCellWidth();
  const o = t.filter((a) => a.render).map(({ slotId: a, groupOnly: d, rowHeight: c }) => {
    let h = e.map((p, f) => {
      const m = `${a}_${p.time}`, E = f === e.length - 1 ? {} : { width: i };
      if (p.nonWorkingTime && (E.backgroundColor = r.nonWorkingTimeBodyBgColor), d && (E.backgroundColor = r.groupOnlySlotColor), n.getNonAgendaViewBodyCellBgColorFunc) {
        let R = n.getNonAgendaViewBodyCellBgColorFunc(y, a, p);
        R && (E.backgroundColor = R);
      }
      return /* @__PURE__ */ l.jsx("td", { style: E, children: /* @__PURE__ */ l.jsx("div", {}) }, m);
    });
    return /* @__PURE__ */ l.jsx("tr", { style: { height: c }, children: h }, a);
  });
  return /* @__PURE__ */ l.jsx("tbody", { children: o });
}
dt.propTypes = {
  schedulerData: u.object.isRequired
};
function ct({ number: y, left: t, width: e, top: r, clickAction: n, headerItem: i, schedulerData: o }) {
  const { config: a } = o;
  let d = "+" + y + "more";
  return /* @__PURE__ */ l.jsx("a", { className: "timeline-event", style: { left: t, width: e, top: r }, onClick: () => n(i), children: /* @__PURE__ */ l.jsx("div", { style: { height: a.eventItemHeight, color: "#999", textAlign: "center" }, children: d }) });
}
ct.propTypes = {
  schedulerData: u.object.isRequired,
  number: u.number.isRequired,
  left: u.number.isRequired,
  width: u.number.isRequired,
  top: u.number.isRequired,
  clickAction: u.func.isRequired,
  headerItem: u.object.isRequired
};
function ut({ summary: y, left: t, width: e, top: r, schedulerData: n }) {
  const { config: i } = n, o = y.color || i.summaryColor;
  let a = "center";
  i.summaryPos === ae.TopRight || i.summaryPos === ae.BottomRight ? a = "right" : (i.summaryPos === ae.TopLeft || i.summaryPos === ae.BottomLeft) && (a = "left");
  const d = {
    height: i.eventItemHeight,
    color: o,
    textAlign: a,
    margin: "0 6px",
    fontSize: y.fontSize
  };
  return /* @__PURE__ */ l.jsx("a", { className: "timeline-event header2-text", style: { left: t, width: e, top: r, cursor: "default" }, children: /* @__PURE__ */ l.jsx("div", { style: d, children: y.text }) });
}
ut.propTypes = {
  schedulerData: u.object.isRequired,
  summary: u.object.isRequired,
  left: u.number.isRequired,
  width: u.number.isRequired,
  top: u.number.isRequired
};
function ht({ left: y, width: t, schedulerData: e }) {
  const { config: r } = e, n = {
    left: y,
    width: t,
    top: 0,
    bottom: 0,
    backgroundColor: r.selectedAreaColor
  };
  return /* @__PURE__ */ l.jsx("div", { className: "selected-area", style: n });
}
ht.propTypes = {
  schedulerData: u.object.isRequired,
  left: u.number.isRequired,
  width: u.number.isRequired
};
const le = "ontouchstart" in window;
class ft extends _e {
  constructor(e) {
    super(e);
    M(this, "initDrag", (e) => {
      const { isSelecting: r } = this.state;
      if (r || (e.srcElement || e.target) !== this.eventContainer)
        return;
      e.stopPropagation();
      const { resourceEvents: n } = this.props;
      if (n.groupOnly)
        return;
      let i = 0;
      if (le) {
        if (e.changedTouches.length == 0)
          return;
        i = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        i = e.clientX;
      }
      const { schedulerData: o } = this.props;
      let a = o.getContentCellWidth(), d = pe(this.eventContainer), c = i - d.x, h = Math.floor(c / a), p = h * a, f = Math.ceil(c / a), m = (f - h) * a;
      this.setState({
        startX: c,
        left: p,
        leftIndex: h,
        width: m,
        rightIndex: f,
        isSelecting: !0
      }), le ? (document.documentElement.addEventListener("touchmove", this.doDrag, !1), document.documentElement.addEventListener("touchend", this.stopDrag, !1), document.documentElement.addEventListener("touchcancel", this.cancelDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doDrag, !1), document.documentElement.addEventListener("mouseup", this.stopDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    M(this, "doDrag", (e) => {
      e.stopPropagation();
      let r = 0;
      if (le) {
        if (e.changedTouches.length == 0)
          return;
        r = e.changedTouches[0].pageX;
      } else
        r = e.clientX;
      const { startX: n } = this.state, { schedulerData: i } = this.props, { headers: o } = i;
      let a = i.getContentCellWidth(), d = pe(this.eventContainer), c = r - d.x, h = Math.floor(Math.min(n, c) / a);
      h = h < 0 ? 0 : h;
      let p = h * a, f = Math.ceil(Math.max(n, c) / a);
      f = f > o.length ? o.length : f;
      let m = (f - h) * a;
      this.setState({
        leftIndex: h,
        left: p,
        rightIndex: f,
        width: m,
        isSelecting: !0
      });
    });
    M(this, "stopDrag", (e) => {
      e.stopPropagation();
      const { schedulerData: r, newEvent: n, resourceEvents: i } = this.props, { headers: o, events: a, config: d, cellUnit: c, localeMoment: h } = r, { leftIndex: p, rightIndex: f } = this.state;
      le ? (document.documentElement.removeEventListener("touchmove", this.doDrag, !1), document.documentElement.removeEventListener("touchend", this.stopDrag, !1), document.documentElement.removeEventListener("touchcancel", this.cancelDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      let m = o[p].time, E = i.headerItems[f - 1].end;
      c !== O.Hour && (E = h(i.headerItems[f - 1].start).hour(23).minute(59).second(59).format(P));
      let R = i.slotId, C = i.slotName;
      this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: !1
      });
      let x = !1;
      if (d.checkConflict) {
        let v = h(m), D = h(E);
        a.forEach((T) => {
          if (r._getEventSlotId(T) === R) {
            let k = h(T.start), j = h(T.end);
            (v >= k && v < j || D > k && D <= j || k >= v && k < D || j > v && j <= D) && (x = !0);
          }
        });
      }
      if (x) {
        const { conflictOccurred: v } = this.props;
        v != null ? v(
          r,
          "New",
          {
            id: void 0,
            start: m,
            end: E,
            slotId: R,
            slotName: C,
            title: void 0
          },
          ie.EVENT,
          R,
          C,
          m,
          E
        ) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it");
      } else
        n != null && n(r, R, C, m, E);
    });
    M(this, "cancelDrag", (e) => {
      e.stopPropagation();
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
    M(this, "onAddMoreClick", (e) => {
      const { onSetAddMoreState: r, resourceEvents: n, schedulerData: i } = this.props;
      if (r) {
        const { config: o } = i;
        let a = i.getContentCellWidth(), d = n.headerItems.indexOf(e);
        if (d !== -1) {
          let c = d * (a - 1), h = pe(this.eventContainer);
          c = c + h.x;
          let p = h.y, f = (e.count + 1) * o.eventItemLineHeight + 20;
          r({
            headerItem: e,
            left: c,
            top: p,
            height: f
          });
        }
      }
    });
    M(this, "eventContainerRef", (e) => {
      this.eventContainer = e;
    });
    this.state = {
      isSelecting: !1,
      left: 0,
      width: 0
    };
  }
  componentDidMount() {
    const { schedulerData: e } = this.props, { config: r } = e;
    r.creatable === !0 && (le || this.eventContainer.addEventListener("mousedown", this.initDrag, !1));
  }
  UNSAFE_componentWillReceiveProps(e) {
    le || this.eventContainer.removeEventListener("mousedown", this.initDrag, !1), e.schedulerData.config.creatable && (le || this.eventContainer.addEventListener("mousedown", this.initDrag, !1));
  }
  render() {
    const { resourceEvents: e, schedulerData: r, connectDropTarget: n, dndSource: i } = this.props, { cellUnit: o, startDate: a, endDate: d, config: c, localeMoment: h } = r, { isSelecting: p, left: f, width: m } = this.state;
    let E = r.getContentCellWidth(), R = r.getCellMaxEvents(), C = r.getContentTableWidth(), x = i.getDragSource(), v = p ? /* @__PURE__ */ l.jsx(ht, { ...this.props, left: f, width: m }) : /* @__PURE__ */ l.jsx("div", {}), D = [];
    return e.headerItems.forEach((T, k) => {
      if (T.count > 0 || T.summary != null) {
        let j = c.summaryPos === ae.TopRight || c.summaryPos === ae.Top || c.summaryPos === ae.TopLeft, N = e.hasSummary && j ? 1 + c.eventItemLineHeight : 1, A = T.addMore === 0 ? R : T.addMoreIndex;
        if (T.events.forEach((S, _) => {
          if (_ < A && S !== void 0 && S.render) {
            let q = h(a), Q = h(d).add(1, "days");
            o === O.Hour && (q = h(a).add(c.dayStartFrom, "hours"), Q = h(d).add(c.dayStopTo + 1, "hours"));
            let G = h(S.eventItem.start), K = h(S.eventItem.end), U = G >= q, z = K <= Q, Y = k * E + (k > 0 ? 2 : 3), $ = S.span * E - (k > 0 ? 5 : 6) > 0 ? S.span * E - (k > 0 ? 5 : 6) : 0, V = N + _ * c.eventItemLineHeight, ne = /* @__PURE__ */ he(
              x,
              {
                ...this.props,
                key: S.eventItem.id,
                eventItem: S.eventItem,
                isStart: U,
                isEnd: z,
                isInPopover: !1,
                left: Y,
                width: $,
                top: V,
                leftIndex: k,
                rightIndex: k + S.span
              }
            );
            D.push(ne);
          }
        }), T.addMore > 0) {
          let S = k * E + (k > 0 ? 2 : 3), _ = E - (k > 0 ? 5 : 6), q = N + T.addMoreIndex * c.eventItemLineHeight, Q = /* @__PURE__ */ he(ct, { ...this.props, key: T.time, headerItem: T, number: T.addMore, left: S, width: _, top: q, clickAction: this.onAddMoreClick });
          D.push(Q);
        }
        if (T.summary != null) {
          let S = j ? 1 : e.rowHeight - c.eventItemLineHeight + 1, _ = k * E + (k > 0 ? 2 : 3), q = E - (k > 0 ? 5 : 6), Q = `${e.slotId}_${T.time}`, G = /* @__PURE__ */ l.jsx(ut, { schedulerData: r, summary: T.summary, left: _, width: q, top: S }, Q);
          D.push(G);
        }
      }
    }), /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { style: { width: C }, children: n(
      /* @__PURE__ */ l.jsxs("div", { ref: this.eventContainerRef, className: "event-container", style: { height: e.rowHeight }, children: [
        v,
        D
      ] })
    ) }) });
  }
}
M(ft, "propTypes", {
  resourceEvents: u.object.isRequired,
  schedulerData: u.object.isRequired,
  dndSource: u.object.isRequired,
  onSetAddMoreState: u.func,
  updateEventStart: u.func,
  updateEventEnd: u.func,
  moveEvent: u.func,
  movingEvent: u.func,
  conflictOccurred: u.func,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  newEvent: u.func,
  eventItemTemplateResolver: u.func
});
function mt(y) {
  const { eventItem: t, isStart: e, isEnd: r, eventItemClick: n, schedulerData: i, eventItemTemplateResolver: o } = y, { config: a, behaviors: d } = i, c = e ? r ? "round-all" : "round-head" : r ? "round-tail" : "round-none", h = t.bgColor || a.defaultEventBgColor, p = d.getEventTextFunc(i, t);
  let f = /* @__PURE__ */ l.jsx("div", { className: `${c} event-item`, style: { height: a.eventItemHeight, maxWidth: a.agendaMaxEventWidth, backgroundColor: h }, children: /* @__PURE__ */ l.jsx("span", { style: { marginLeft: "10px", lineHeight: `${a.eventItemHeight}px` }, children: p }) }, t.id);
  o && (f = o(i, t, h, e, r, "event-item", a.eventItemHeight, a.agendaMaxEventWidth));
  const m = () => {
    n && n(i, t);
  }, E = /* @__PURE__ */ l.jsx("a", { className: "day-event", onClick: m, children: f });
  let R = /* @__PURE__ */ l.jsx(Oe, { ...y, title: t.title, startTime: t.start, endTime: t.end, statusColor: h });
  return a.eventItemPopoverEnabled ? /* @__PURE__ */ l.jsx(He, { placement: "bottomLeft", content: R, trigger: "hover", children: E }) : /* @__PURE__ */ l.jsx("span", { children: E });
}
mt.propTypes = {
  schedulerData: u.object.isRequired,
  eventItem: u.object.isRequired,
  isStart: u.bool.isRequired,
  isEnd: u.bool.isRequired,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  eventItemTemplateResolver: u.func
};
function gt(y) {
  const { schedulerData: t, resourceEvents: e, slotClickedFunc: r, slotItemTemplateResolver: n } = y, { startDate: i, endDate: o, config: a, localeMoment: d } = t, { slotId: c, slotName: h, headerItems: p } = e;
  let m = t.getResourceTableWidth() - 2;
  const E = d(i).format(W), R = d(o).add(1, "days").format(W);
  let C = [];
  p.forEach(({ start: D, end: T, events: k }) => {
    E === d(D).format(W) && R === d(T).format(W) && k.forEach(({ eventItem: j }) => {
      const { start: N, end: A, id: S } = j, _ = d(i), q = d(o).add(1, "days"), Q = d(N) >= _, G = d(A) < q, K = /* @__PURE__ */ he(mt, { ...y, key: S, eventItem: j, isStart: Q, isEnd: G });
      k.push(K);
    });
  });
  const x = r && /* @__PURE__ */ l.jsx("a", { onClick: () => r(t, e), children: h });
  let v = /* @__PURE__ */ l.jsx("div", { style: { width: m }, title: h, className: "overflow-text header2-text", children: x || /* @__PURE__ */ l.jsx("span", { children: h }) });
  if (n) {
    const D = n(t, e, r, m, "overflow-text header2-text");
    D && (v = D);
  }
  return /* @__PURE__ */ l.jsxs("tr", { style: { minHeight: a.eventItemLineHeight + 2 }, children: [
    /* @__PURE__ */ l.jsx("td", { "data-resource-id": c, children: v }),
    /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("div", { className: "day-event-container", children: C }) })
  ] });
}
gt.propTypes = {
  schedulerData: u.object.isRequired,
  resourceEvents: u.object.isRequired,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  slotClickedFunc: u.func,
  slotItemTemplateResolver: u.func
};
function pt(y) {
  const { schedulerData: t } = y, { config: e, renderData: r, getResourceTableWidth: n, getTableHeaderHeight: i, isEventPerspective: o } = t, a = n(), d = i(), c = r.map((f) => /* @__PURE__ */ he(gt, { ...y, resourceEvents: f, key: f.slotId })), h = o ? e.taskName : e.resourceName, p = e.agendaViewHeader;
  return /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsxs("table", { className: "scheduler-table", children: [
    /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { style: { height: d }, children: [
      /* @__PURE__ */ l.jsx("th", { style: { width: a }, className: "header3-text", children: h }),
      /* @__PURE__ */ l.jsx("th", { className: "header3-text", children: p })
    ] }) }),
    /* @__PURE__ */ l.jsx("tbody", { children: c })
  ] }) }) });
}
pt.propTypes = {
  schedulerData: oe.object.isRequired,
  subtitleGetter: oe.func,
  eventItemClick: oe.func,
  viewEventClick: oe.func,
  viewEventText: oe.string,
  viewEvent2Click: oe.func,
  viewEvent2Text: oe.string,
  slotClickedFunc: oe.func
};
function nr(y) {
  const [t] = $t(new ot((T) => T.eventItem, Ne)), { headerItem: e, left: r, top: n, height: i, closeAction: o, schedulerData: a } = y, { config: d, localeMoment: c } = a, { time: h, start: p, end: f, events: m } = e;
  let E = c(h).format(d.addMorePopoverHeaderFormat), R = c(p), C = c(f), x = 0, v = t.getDragSource();
  const D = m.map((T) => {
    if (T !== void 0) {
      x++;
      let k = c(T.eventItem.start), j = c(T.eventItem.end), N = k >= R, A = j < C, S = 10, _ = 138, q = 12 + x * d.eventItemLineHeight;
      return /* @__PURE__ */ he(
        v,
        {
          ...y,
          key: T.eventItem.id,
          eventItem: T.eventItem,
          leftIndex: 0,
          isInPopover: !0,
          isStart: N,
          isEnd: A,
          rightIndex: 1,
          left: S,
          width: _,
          top: q
        }
      );
    }
    return null;
  });
  return /* @__PURE__ */ l.jsxs("div", { className: "add-more-popover-overlay", style: { left: r, top: n, height: i, width: "170px" }, children: [
    /* @__PURE__ */ l.jsxs(ue, { justify: "space-between", align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: "22", children: /* @__PURE__ */ l.jsx("span", { className: "base-text", children: E }) }),
      /* @__PURE__ */ l.jsx(ee, { span: "2", children: /* @__PURE__ */ l.jsx("span", { onClick: () => o(void 0), children: /* @__PURE__ */ l.jsx(Gt, {}) }) })
    ] }),
    D
  ] });
}
nr.propTypes = {
  schedulerData: u.object.isRequired,
  headerItem: u.object.isRequired,
  left: u.number.isRequired,
  top: u.number.isRequired,
  height: u.number.isRequired,
  closeAction: u.func.isRequired,
  subtitleGetter: u.func,
  moveEvent: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  eventItemTemplateResolver: u.func
};
const rt = {
  schedulerWidth: "100%",
  besidesWidth: 20,
  schedulerMaxHeight: 0,
  tableHeaderHeight: 40,
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
  summaryPos: ae.TopRight,
  groupOnlySlotColor: "#F8F8F8",
  startResizable: !0,
  endResizable: !0,
  movable: !0,
  creatable: !0,
  crossResourceMove: !0,
  checkConflict: !1,
  scrollToSpecialMomentEnabled: !0,
  eventItemPopoverEnabled: !0,
  calendarPopoverEnabled: !0,
  recurringEventsEnabled: !0,
  headerEnabled: !0,
  displayWeekend: !0,
  relativeMove: !0,
  defaultExpanded: !0,
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
    { viewName: "Day", viewType: w.Day, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Week", viewType: w.Week, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Month", viewType: w.Month, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Quarter", viewType: w.Quarter, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Year", viewType: w.Year, showAgenda: !1, isEventPerspective: !1 }
  ]
}, sr = (y, t, e, r) => {
  const n = y.localeMoment(e), i = y.localeMoment(r);
  let o;
  switch (t) {
    case w.Week:
    case w.Custom:
    case w.Custom1:
    case w.Custom2:
      n !== i && (o = `${n.format("MMM D")}-${i.format("D, YYYY")}`, n.month() !== i.month() && (o = `${n.format("MMM D")}-${i.format("MMM D, YYYY")}`), n.year() !== i.year() && (o = `${n.format("MMM D, YYYY")}-${i.format("MMM D, YYYY")}`));
      break;
    case w.Month:
      o = n.format("MMMM YYYY");
      break;
    case w.Quarter:
      o = `${n.format("MMM D")}-${i.format("MMM D, YYYY")}`;
      break;
    case w.Year:
      o = n.format("YYYY");
      break;
    default:
      o = n.format("MMM D, YYYY");
  }
  return o;
}, ir = (y, t) => {
  if (!y.isEventPerspective)
    return t.title;
  const e = y.resources.find((r) => r.id === t.resourceId);
  return e ? e.name : t.title;
}, or = (y, t, e) => y.localeMoment(), ar = (y, t) => {
  const { localeMoment: e, cellUnit: r } = y;
  if (r === O.Hour) {
    const i = e(t).hour();
    return i < 9 || i > 18;
  }
  const n = e(t).weekday();
  return n === 0 || n === 6;
}, nt = {
  getSummaryFunc: void 0,
  getCustomDateFunc: void 0,
  getNonAgendaViewBodyCellBgColorFunc: void 0,
  getScrollSpecialMomentFunc: or,
  getDateLabelFunc: sr,
  getEventTextFunc: ir,
  isNonWorkingTimeFunc: ar
  // getNonAgendaViewBodyCellBgColorFunc: getNonAgendaViewBodyCellBgColor,
  //getCustomDateFunc: getCustomDate,
  //getSummaryFunc: getSummary,
};
class br {
  constructor(t = ke().format(W), e = w.Week, r = !1, n = !1, i = void 0, o = void 0, a = void 0) {
    this.resources = [], this.events = [], this.eventGroups = [], this.eventGroupsAutoGenerated = !0, this.viewType = e, this.cellUnit = e === w.Day ? O.Hour : O.Day, this.showAgenda = r, this.isEventPerspective = n, this.resizing = !1, this.scrollToSpecialMoment = !1, this.documentWidth = 0, this.localeMoment = ke, a && (this.localeMoment = a), this.config = i == null ? rt : { ...rt, ...i }, this._validateMinuteStep(this.config.minuteStep), this.behaviors = o == null ? nt : { ...nt, ...o }, this._resolveDate(0, t), this._createHeaders(), this._createRenderData();
  }
  setLocaleMoment(t) {
    t && (this.localeMoment = t, this._createHeaders(), this._createRenderData());
  }
  setResources(t) {
    this._validateResource(t), this.resources = Array.from(new Set(t)), this._createRenderData(), this.setScrollToSpecialMoment(!0);
  }
  setEventGroupsAutoGenerated(t) {
    this.eventGroupsAutoGenerated = t;
  }
  //optional
  setEventGroups(t) {
    this._validateEventGroups(t), this.eventGroups = Array.from(new Set(t)), this.eventGroupsAutoGenerated = !1, this._createRenderData(), this.setScrollToSpecialMoment(!0);
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
    this.resources.filter((r) => r.id === t.id).length === 0 && (this.resources.push(t), this._createRenderData());
  }
  addEventGroup(t) {
    this.eventGroups.filter((r) => r.id === t.id).length === 0 && (this.eventGroups.push(t), this._createRenderData());
  }
  removeEventGroupById(t) {
    let e = -1;
    this.eventGroups.forEach((r, n) => {
      r.id === t && (e = n);
    }), e !== -1 && this.eventGroups.splice(e, 1);
  }
  containsEventGroupId(t) {
    let e = -1;
    return this.eventGroups.forEach((r, n) => {
      r.id === t && (e = n);
    }), e !== -1;
  }
  setEvents(t) {
    this._validateEvents(t), this.events = Array.from(t), this.eventGroupsAutoGenerated && this._generateEventGroups(), this.config.recurringEventsEnabled && this._handleRecurringEvents(), this._createRenderData();
  }
  setScrollToSpecialMoment(t) {
    this.config.scrollToSpecialMomentEnabled && (this.scrollToSpecialMoment = t);
  }
  prev() {
    this._resolveDate(-1), this.events = [], this._createHeaders(), this._createRenderData();
  }
  next() {
    this._resolveDate(1), this.events = [], this._createHeaders(), this._createRenderData();
  }
  setDate(t = ke().format(W)) {
    this._resolveDate(0, t), this.events = [], this._createHeaders(), this._createRenderData();
  }
  setViewType(t = w.Week, e = !1, r = !1) {
    if (this.showAgenda = e, this.isEventPerspective = r, this.cellUnit = O.Day, this.viewType !== t) {
      let n = this.startDate;
      if (t === w.Custom || t === w.Custom1 || t === w.Custom2)
        this.viewType = t, this._resolveDate(0, n);
      else {
        if (this.viewType < t)
          t === w.Week ? (this.startDate = this.localeMoment(n).startOf("week").format(W), this.endDate = this.localeMoment(this.startDate).endOf("week").format(W)) : t === w.Month ? (this.startDate = this.localeMoment(n).startOf("month").format(W), this.endDate = this.localeMoment(this.startDate).endOf("month").format(W)) : t === w.Quarter ? (this.startDate = this.localeMoment(n).startOf("quarter").format(W), this.endDate = this.localeMoment(this.startDate).endOf("quarter").format(W)) : t === w.Year && (this.startDate = this.localeMoment(n).startOf("year").format(W), this.endDate = this.localeMoment(this.startDate).endOf("year").format(W));
        else {
          let i = this.localeMoment(this.startDate), o = this.localeMoment(this.endDate).add(1, "days");
          if (this.selectDate !== void 0) {
            let d = this.localeMoment(this.selectDate);
            d >= i && d < o && (n = this.selectDate);
          }
          let a = this.localeMoment();
          a >= i && a < o && (n = a.format(W)), t === w.Day ? (this.startDate = n, this.endDate = this.startDate, this.cellUnit = O.Hour) : t === w.Week ? (this.startDate = this.localeMoment(n).startOf("week").format(W), this.endDate = this.localeMoment(this.startDate).endOf("week").format(W)) : t === w.Month ? (this.startDate = this.localeMoment(n).startOf("month").format(W), this.endDate = this.localeMoment(this.startDate).endOf("month").format(W)) : t === w.Quarter && (this.startDate = this.localeMoment(n).startOf("quarter").format(W), this.endDate = this.localeMoment(this.startDate).endOf("quarter").format(W));
        }
        this.viewType = t;
      }
      this.events = [], this._createHeaders(), this._createRenderData(), this.setScrollToSpecialMoment(!0);
    }
  }
  setSchedulerMaxHeight(t) {
    this.config.schedulerMaxHeight = t;
  }
  isSchedulerResponsive() {
    return !!this.config.schedulerWidth.endsWith && this.config.schedulerWidth.endsWith("%");
  }
  toggleExpandStatus(t) {
    let e = !1, r = -1, n = !1, i = /* @__PURE__ */ new Map();
    this.renderData.forEach((o) => {
      if (e === !1)
        o.slotId === t && o.hasChildren && (e = !0, n = !o.expanded, o.expanded = n, r = o.indent, i.set(o.indent, {
          expanded: o.expanded,
          render: o.render
        }));
      else if (o.indent > r) {
        let a = i.get(o.indent - 1);
        o.render = a.expanded && a.render, o.hasChildren && i.set(o.indent, {
          expanded: o.expanded,
          render: o.render
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
    let t = this.getResourceTableConfigWidth(), e = this.getSchedulerWidth(), r = this.isResourceViewResponsive() ? parseInt(e * Number(t.slice(0, -1)) / 100) : t;
    return this.isSchedulerResponsive() && this.getContentTableWidth() + r < e && (r = e - this.getContentTableWidth()), r;
  }
  getContentCellWidth() {
    let t = this.getContentCellConfigWidth(), e = this.getSchedulerWidth();
    return this.isContentViewResponsive() ? parseInt(e * Number(t.slice(0, -1)) / 100) : t;
  }
  getContentTableWidth() {
    return this.headers.length * this.getContentCellWidth();
  }
  getScrollToSpecialMoment() {
    return this.config.scrollToSpecialMomentEnabled ? this.scrollToSpecialMoment : !1;
  }
  getSlots() {
    return this.isEventPerspective ? this.eventGroups : this.resources;
  }
  getSlotById(t) {
    let e = this.getSlots(), r;
    return e.forEach((n) => {
      n.id === t && (r = n);
    }), r;
  }
  getResourceById(t) {
    let e;
    return this.resources.forEach((r) => {
      r.id === t && (e = r);
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
    return this.viewType === w.Week ? this.config.weekMaxEvents : this.viewType === w.Day ? this.config.dayMaxEvents : this.viewType === w.Month ? this.config.monthMaxEvents : this.viewType === w.Year ? this.config.yearMaxEvents : this.viewType === w.Quarter ? this.config.quarterMaxEvents : this.config.customMaxEvents;
  }
  getDateLabel() {
    let t = this.localeMoment(this.startDate), e = this.localeMoment(this.endDate), r = t.format("LL");
    return t != e && (r = `${t.format("LL")}-${e.format("LL")}`), this.behaviors.getDateLabelFunc && (r = this.behaviors.getDateLabelFunc(this, this.viewType, this.startDate, this.endDate)), r;
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
    var r = Object.assign({}, t), n = Object.assign({}, e);
    this._detachEvent(t), this._detachEvent(e), this.isEventPerspective ? (r.groupId = e.groupId, r.groupName = e.groupName, n.groupId = t.groupId, n.groupName = t.groupName) : (r.resourceId = e.resourceId, n.resourceId = t.resourceId), r.end = e.end, r.start = e.start, n.end = t.end, n.start = t.start, this._attachEvent(r), this._attachEvent(n), this._createRenderData();
  }
  moveEvent(t, e, r, n, i) {
    this._detachEvent(t), this.isEventPerspective ? (t.groupId = e, t.groupName = r) : t.resourceId = e, t.end = i, t.start = n, this._attachEvent(t), this._createRenderData();
  }
  isEventInTimeWindow(t, e, r, n) {
    return t < n && e > r;
  }
  removeEvent(t) {
    let e = this.events.indexOf(t);
    e !== -1 && (this.events.splice(e, 1), this._createRenderData());
  }
  removeEventById(t) {
    let e = -1;
    this.events.forEach((r, n) => {
      r.id === t && (e = n);
    }), e !== -1 && (this.events.splice(e, 1), this._createRenderData());
  }
  getResourceTableConfigWidth() {
    return this.showAgenda ? this.config.agendaResourceTableWidth : this.viewType === w.Week ? this.config.weekResourceTableWidth : this.viewType === w.Day ? this.config.dayResourceTableWidth : this.viewType === w.Month ? this.config.monthResourceTableWidth : this.viewType === w.Year ? this.config.yearResourceTableWidth : this.viewType === w.Quarter ? this.config.quarterResourceTableWidth : this.config.customResourceTableWidth;
  }
  getContentCellConfigWidth() {
    return this.viewType === w.Week ? this.config.weekCellWidth : this.viewType === w.Day ? this.config.dayCellWidth : this.viewType === w.Month ? this.config.monthCellWidth : this.viewType === w.Year ? this.config.yearCellWidth : this.viewType === w.Quarter ? this.config.quarterCellWidth : this.config.customCellWidth;
  }
  _setDocumentWidth(t) {
    t >= 0 && (this.documentWidth = t);
  }
  _detachEvent(t) {
    let e = this.events.indexOf(t);
    e !== -1 && this.events.splice(e, 1);
  }
  _attachEvent(t) {
    let e = 0, r = this.localeMoment(t.start);
    this.events.forEach((n, i) => {
      let o = this.localeMoment(n.start);
      r >= o && (e = i + 1);
    }), this.events.splice(e, 0, t);
  }
  _handleRecurringEvents() {
    let t = this.events.filter((e) => !!e.rrule);
    t.forEach((e) => {
      this._detachEvent(e);
    }), t.forEach((e) => {
      let r = this.localeMoment(this.startDate), n = this.localeMoment(this.endDate).add(1, "days"), i = this.localeMoment(e.start), o = this.localeMoment(e.end), a = je(e.rrule), d, c = a.origOptions.until || n.toDate();
      if (a.origOptions.dtstart && (d = this.localeMoment(a.origOptions.dtstart)), n < c && (a.origOptions.until = n.toDate()), a = je(a.toString()), e.exdates || e.exrule) {
        const f = new Zt();
        f.rrule(a), e.exrule && f.exrule(je(e.exrule)), e.exdates && e.exdates.forEach((m) => {
          f.exdate(this.localeMoment(m).toDate());
        }), a = f;
      }
      a.all().map((f, m) => ({
        ...e,
        recurringEventId: e.id,
        recurringEventStart: e.start,
        recurringEventEnd: e.end,
        id: `${e.id}-${m}`,
        start: a.origOptions.tzid ? this.localeMoment.utc(f).utcOffset(this.localeMoment().utcOffset(), !0).format(P) : this.localeMoment(f).format(P),
        end: a.origOptions.tzid ? this.localeMoment.utc(f).utcOffset(this.localeMoment().utcOffset(), !0).add(o.diff(i), "ms").add(this.localeMoment(c).utcOffset() - this.localeMoment(e.start).utcOffset(), "m").format(P) : this.localeMoment(f).add(o.diff(i), "ms").format(P)
      })).forEach((f) => {
        let m = this.localeMoment(f.start), E = this.localeMoment(f.end);
        this.isEventInTimeWindow(m, E, r, n) && (!d || m >= d) && this._attachEvent(f);
      });
    });
  }
  _resolveDate(t, e = void 0) {
    if (e != null && (this.selectDate = this.localeMoment(e).format(W)), this.viewType === w.Week)
      this.startDate = e != null ? this.localeMoment(e).startOf("week").format(W) : this.localeMoment(this.startDate).add(t, "weeks").format(W), this.endDate = this.localeMoment(this.startDate).endOf("week").format(W);
    else if (this.viewType === w.Day)
      this.startDate = e != null ? this.selectDate : this.localeMoment(this.startDate).add(t, "days").format(W), this.endDate = this.startDate;
    else if (this.viewType === w.Month)
      this.startDate = e != null ? this.localeMoment(e).startOf("month").format(W) : this.localeMoment(this.startDate).add(t, "months").format(W), this.endDate = this.localeMoment(this.startDate).endOf("month").format(W);
    else if (this.viewType === w.Quarter)
      this.startDate = e != null ? this.localeMoment(e).startOf("quarter").format(W) : this.localeMoment(this.startDate).add(t, "quarters").format(W), this.endDate = this.localeMoment(this.startDate).endOf("quarter").format(W);
    else if (this.viewType === w.Year)
      this.startDate = e != null ? this.localeMoment(e).startOf("year").format(W) : this.localeMoment(this.startDate).add(t, "years").format(W), this.endDate = this.localeMoment(this.startDate).endOf("year").format(W);
    else if (this.viewType === w.Custom || this.viewType === w.Custom1 || this.viewType === w.Custom2)
      if (this.behaviors.getCustomDateFunc != null) {
        let r = this.behaviors.getCustomDateFunc(this, t, e);
        this.startDate = r.startDate, this.endDate = r.endDate, r.cellUnit && (this.cellUnit = r.cellUnit);
      } else
        throw new Error("This is custom view type, set behaviors.getCustomDateFunc func to resolve the time window(startDate and endDate) yourself");
  }
  _createHeaders() {
    let t = [], e = this.localeMoment(this.startDate), r = this.localeMoment(this.endDate), n = e;
    if (this.showAgenda)
      t.push({ time: n.format(P), nonWorkingTime: !1 });
    else if (this.cellUnit === O.Hour) {
      e = e.add(this.config.dayStartFrom, "hours"), r = r.add(this.config.dayStopTo, "hours"), e.hour() == 0 && (e = e.add(this.config.dayStartFrom, "hours")), r.hour() == 0 && (r = r.add(this.config.dayStopTo, "hours")), n = e;
      let i = -1;
      for (; n >= e && n <= r; ) {
        if (n.hour() == i) {
          n = n.add(1, "hours");
          continue;
        }
        i = n.hour();
        let o = this.getMinuteStepsInHour();
        for (let a = 0; a < o; a++) {
          let d = n.hour();
          if (d >= this.config.dayStartFrom && d <= this.config.dayStopTo) {
            let c = n.format(P), h = this.behaviors.isNonWorkingTimeFunc(this, c);
            t.push({ time: c, nonWorkingTime: h });
          }
          n = n.add(this.config.minuteStep, "minutes");
        }
      }
    } else if (this.cellUnit === O.Day)
      for (; n >= e && n <= r; ) {
        let i = n.format(P), o = n.weekday();
        if (this.config.displayWeekend || o !== 0 && o !== 6) {
          let a = this.behaviors.isNonWorkingTimeFunc(this, i);
          t.push({ time: i, nonWorkingTime: a });
        }
        n = n.add(1, "days");
      }
    else if (this.cellUnit === O.Week)
      for (; n >= e && n <= r; ) {
        let i = n.format(W);
        t.push({ time: i }), n = n.add(1, "weeks").startOf("week");
      }
    else if (this.cellUnit === O.Month)
      for (; n >= e && n <= r; ) {
        let i = n.format(W);
        t.push({ time: i }), n = n.add(1, "months").startOf("month");
      }
    else if (this.cellUnit === O.Year)
      for (; n >= e && n <= r; ) {
        let i = n.format(W);
        t.push({ time: i }), n = n.add(1, "years").startOf("year");
      }
    this.headers = t;
  }
  _createInitHeaderEvents(t) {
    let e = this.localeMoment(t.time), r = e.format(P), n = this.showAgenda ? this.viewType === w.Week ? e.add(1, "weeks").format(P) : this.viewType === w.Day ? e.add(1, "days").format(P) : this.viewType === w.Month ? e.add(1, "months").format(P) : this.viewType === w.Year ? e.add(1, "years").format(P) : this.viewType === w.Quarter ? e.add(1, "quarters").format(P) : this.localeMoment(this.endDate).add(1, "days").format(P) : this.cellUnit === O.Hour ? e.add(this.config.minuteStep, "minutes").format(P) : this.cellUnit === O.Year ? e.add(1, "years").format(W) : this.cellUnit === O.Month ? e.add(1, "months").format(W) : this.cellUnit === O.Week ? e.add(1, "weeks").format(W) : e.add(1, "days").format(P);
    return {
      time: t.time,
      nonWorkingTime: t.nonWorkingTime,
      start: r,
      end: n,
      count: 0,
      addMore: 0,
      addMoreIndex: 0,
      events: [, , ,]
    };
  }
  _createHeaderEvent(t, e, r) {
    return {
      render: t,
      span: e,
      eventItem: r
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
    this.events.forEach((r) => {
      let n = this._getEventGroupId(r), i = this._getEventGroupName(r);
      e.has(n) || (t.push({
        id: n,
        name: i,
        state: r
      }), e.add(n));
    }), this.eventGroups = t;
  }
  _createInitRenderData(t, e, r, n) {
    let i = t ? e : r, o = [], a = /* @__PURE__ */ new Map();
    i.forEach((f) => {
      let m = n.map((v) => this._createInitHeaderEvents(v)), E = {
        slotId: f.id,
        slotName: f.name,
        parentId: f.parentId,
        groupOnly: f.groupOnly,
        hasSummary: !1,
        rowMaxCount: 0,
        rowHeight: this.config.nonAgendaSlotMinHeight !== 0 ? this.config.nonAgendaSlotMinHeight : this.config.eventItemLineHeight + 2,
        headerItems: m,
        indent: 0,
        hasChildren: !1,
        expanded: !0,
        render: !0
      }, R = f.id, C;
      a.has(R) ? (C = a.get(R), C.data = E) : (C = {
        data: E,
        children: []
      }, a.set(R, C));
      let x = f.parentId;
      if (!x || x === R)
        o.push(C);
      else {
        let v;
        a.has(x) ? v = a.get(x) : (v = {
          data: void 0,
          children: []
        }, a.set(x, v)), v.children.push(C);
      }
    });
    let d = [], c;
    for (c = o.length - 1; c >= 0; c--)
      d.push(o[c]);
    let h = [], p;
    for (; d.length > 0; )
      for (p = d.pop(), p.data.indent > 0 && (p.data.render = this.config.defaultExpanded), p.children.length > 0 && (p.data.hasChildren = !0, p.data.expanded = this.config.defaultExpanded), h.push(p.data), c = p.children.length - 1; c >= 0; c--)
        p.children[c].data.indent = p.data.indent + 1, d.push(p.children[c]);
    return h;
  }
  _getSpan(t, e, r) {
    if (this.showAgenda)
      return 1;
    let n = this.localeMoment(t), i = this.localeMoment(e), o = 0;
    for (let a of r) {
      let d = this.localeMoment(a.time), c = this.cellUnit === O.Hour ? this.localeMoment(a.time).add(this.config.minuteStep, "minutes") : this.cellUnit === O.Week ? this.localeMoment(a.time).add(1, "weeks") : this.cellUnit === O.Month ? this.localeMoment(a.time).add(1, "months") : this.cellUnit === O.Year ? this.localeMoment(a.time).add(1, "year") : this.localeMoment(a.time).add(1, "days");
      d < i && c > n && o++;
    }
    return o;
  }
  _validateResource(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Resources should be Array object");
    t.forEach((e, r) => {
      if (e == null)
        throw console.error(`Resource undefined: ${r}`), new Error(`Resource undefined: ${r}`);
      if (e.id == null || e.name == null)
        throw console.error("Resource property missed", r, e), new Error(`Resource property undefined: ${r}`);
    });
  }
  _validateEventGroups(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Event groups should be Array object");
    t.forEach((e, r) => {
      if (e == null)
        throw console.error(`Event group undefined: ${r}`), new Error(`Event group undefined: ${r}`);
      if (e.id == null || e.name == null)
        throw console.error("Event group property missed", r, e), new Error(`Event group property undefined: ${r}`);
    });
  }
  _validateEvents(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Events should be Array object");
    t.forEach((e, r) => {
      if (e == null)
        throw console.error(`Event undefined: ${r}`), new Error(`Event undefined: ${r}`);
      if (e.id == null || e.resourceId == null || e.title == null || e.start == null || e.end == null)
        throw console.error("Event property missed", r, e), new Error(`Event property undefined: ${r}`);
    });
  }
  _validateMinuteStep(t) {
    if (60 % t !== 0)
      throw console.error("Minute step is not set properly - 60 minutes must be divisible without remainder by this number"), new Error("Minute step is not set properly - 60 minutes must be divisible without remainder by this number");
  }
  _compare(t, e) {
    let r = this.localeMoment(t.start), n = this.localeMoment(e.start);
    if (r !== n)
      return r < n ? -1 : 1;
    let i = this.localeMoment(t.end), o = this.localeMoment(e.end);
    return i !== o ? i < o ? -1 : 1 : t.id < e.id ? -1 : 1;
  }
  _createRenderData() {
    let t = this._createInitRenderData(this.isEventPerspective, this.eventGroups, this.resources, this.headers), e = this.getCellMaxEvents();
    const r = 30;
    this.events.forEach((n) => {
      let i = t.filter((o) => o.slotId === this._getEventSlotId(n));
      if (i.length > 0) {
        let o = i[0], a = this._getSpan(n.start, n.end, this.headers), d = this.localeMoment(n.start), c = this.localeMoment(n.end), h = -1;
        o.headerItems.forEach((p, f) => {
          let m = this.localeMoment(p.start);
          if (this.localeMoment(p.end) > d && m < c) {
            if (p.count = p.count + 1, p.count > o.rowMaxCount) {
              o.rowMaxCount = p.count;
              let x = (e <= r && o.rowMaxCount > e ? e : o.rowMaxCount) * this.config.eventItemLineHeight + (this.config.creatable && this.config.checkConflict === !1 ? 20 : 2);
              x > o.rowHeight && (o.rowHeight = x);
            }
            if (h === -1) {
              let C = 0;
              for (; p.events[C] !== void 0; )
                C++;
              h = C;
            }
            let R = m <= d || f === 0;
            if (R === !1) {
              let C = o.headerItems[f - 1], x = this.localeMoment(C.start);
              (this.localeMoment(C.end) <= d || x >= c) && (R = !0);
            }
            p.events[h] = this._createHeaderEvent(R, a, n);
          }
        });
      }
    }), (e <= r || this.behaviors.getSummaryFunc !== void 0) && t.forEach((n) => {
      let i = !1;
      if (n.headerItems.forEach((o) => {
        if (e <= r) {
          let a = 0, d = 0, c = 0;
          for (; c < e - 1; )
            o.events[c] !== void 0 && (a++, d = c + 1), c++;
          o.events[c] !== void 0 ? a + 1 < o.count && (o.addMore = o.count - a, o.addMoreIndex = d) : a < o.count && (o.addMore = o.count - a, o.addMoreIndex = d);
        }
        if (this.behaviors.getSummaryFunc !== void 0) {
          let a = [];
          o.events.forEach((d) => {
            d && d.eventItem && a.push(d.eventItem);
          }), o.summary = this.behaviors.getSummaryFunc(this, a, n.slotId, n.slotName, o.start, o.end), o.summary && o.summary.text != null && (i = !0);
        }
      }), n.hasSummary = i, i) {
        let a = ((e <= r && n.rowMaxCount > e ? e : n.rowMaxCount) + 1) * this.config.eventItemLineHeight + (this.config.creatable && this.config.checkConflict === !1 ? 20 : 2);
        a > n.rowHeight && (n.rowHeight = a);
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
const yr = {
  resources: [
    {
      id: "r0",
      name: "Resource0",
      groupOnly: !0
    },
    {
      id: "r1",
      name: "Resource1",
      parentId: "r0"
    },
    {
      id: "r2",
      name: "Resource2",
      parentId: "r3"
    },
    {
      id: "r3",
      name: "Resource3",
      parentId: "r1"
    },
    {
      id: "r4",
      name: "Resource4"
    },
    {
      id: "r5",
      name: "Resource5"
    },
    {
      id: "r6",
      name: "Resource6"
    },
    {
      id: "r7",
      name: "Resource7"
    }
  ],
  events: [
    {
      id: 1,
      start: "2022-12-18 09:30:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "I am finished",
      bgColor: "#D9D9D9",
      showPopover: !1
    },
    {
      id: 2,
      start: "2022-12-18 12:30:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r2",
      title: "I am not resizable",
      resizable: !1
    },
    {
      id: 3,
      start: "2022-12-19 12:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r3",
      title: "I am not movable",
      movable: !1
    },
    {
      id: 4,
      start: "2022-12-19 14:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r4",
      title: "I am not start-resizable",
      startResizable: !1
    },
    {
      id: 5,
      start: "2022-12-19 15:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r5",
      title: "I am not end-resizable",
      endResizable: !1
    },
    {
      id: 6,
      start: "2022-12-19 15:35:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r6",
      title: "I am normal"
    },
    {
      id: 7,
      start: "2022-12-19 15:40:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r7",
      title: "I am exceptional",
      bgColor: "#FA9E95"
    },
    {
      id: 8,
      start: "2022-12-19 15:50:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "I am locked",
      movable: !1,
      resizable: !1,
      bgColor: "red"
    },
    {
      id: 9,
      start: "2022-12-19 16:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 1"
    },
    {
      id: 10,
      start: "2022-12-19 17:30:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "R1 has recurring tasks every week on Tuesday, Friday",
      bgColor: "#f759ab"
    },
    {
      id: 11,
      start: "2022-12-19 18:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 3"
    },
    {
      id: 12,
      start: "2022-12-20 18:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 4"
    },
    {
      id: 13,
      start: "2022-12-21 18:30:00",
      end: "2022-12-24 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 5"
    },
    {
      id: 14,
      start: "2022-12-23 18:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 6"
    }
  ],
  eventsForTaskView: [
    {
      id: 1,
      start: "2022-12-18 09:30:00",
      end: "2022-12-18 23:30:00",
      resourceId: "r1",
      title: "I am finished",
      bgColor: "#D9D9D9",
      groupId: 1,
      groupName: "Task1"
    },
    {
      id: 2,
      start: "2022-12-18 12:30:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r2",
      title: "I am not resizable",
      resizable: !1,
      groupId: 2,
      groupName: "Task2"
    },
    {
      id: 3,
      start: "2022-12-19 12:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r3",
      title: "I am not movable",
      movable: !1,
      groupId: 3,
      groupName: "Task3"
    },
    {
      id: 7,
      start: "2022-12-19 15:40:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r7",
      title: "I am exceptional",
      bgColor: "#FA9E95",
      groupId: 4,
      groupName: "Task4"
    },
    {
      id: 4,
      start: "2022-12-20 14:30:00",
      end: "2022-12-21 23:30:00",
      resourceId: "r4",
      title: "I am not start-resizable",
      startResizable: !1,
      groupId: 1,
      groupName: "Task1"
    },
    {
      id: 5,
      start: "2022-12-21 15:30:00",
      end: "2022-12-22 23:30:00",
      resourceId: "r5",
      title: "I am not end-resizable",
      endResizable: !1,
      groupId: 3,
      groupName: "Task3"
    },
    {
      id: 9,
      start: "2022-12-21 16:30:00",
      end: "2022-12-21 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks",
      groupId: 4,
      groupName: "Task4"
    },
    {
      id: 6,
      start: "2022-12-22 15:35:00",
      end: "2022-12-23 23:30:00",
      resourceId: "r6",
      title: "I am normal",
      groupId: 1,
      groupName: "Task1"
    },
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
    {
      id: 10,
      start: "2022-12-26 18:30:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r2",
      title: "R2 has many tasks",
      groupId: 4,
      groupName: "Task4"
    },
    {
      id: 11,
      start: "2022-12-27 18:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r14",
      title: "R4 has many tasks",
      groupId: 4,
      groupName: "Task4"
    },
    {
      id: 12,
      start: "2022-12-28 18:30:00",
      end: "2022-12-28 23:30:00",
      resourceId: "r6",
      title: "R6 has many tasks",
      groupId: 3,
      groupName: "Task3"
    }
  ],
  eventsForCustomEventStyle: [
    {
      id: 1,
      start: "2022-12-18 09:30:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "I am finished",
      bgColor: "#D9D9D9",
      type: 1
    },
    {
      id: 2,
      start: "2022-12-18 12:30:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r2",
      title: "I am not resizable",
      resizable: !1,
      type: 2
    },
    {
      id: 3,
      start: "2022-12-19 12:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r3",
      title: "I am not movable",
      movable: !1,
      type: 3
    },
    {
      id: 4,
      start: "2022-12-19 14:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r4",
      title: "I am not start-resizable",
      startResizable: !1,
      type: 1
    },
    {
      id: 5,
      start: "2022-12-19 15:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r5",
      title: "I am not end-resizable",
      endResizable: !1,
      type: 2
    },
    {
      id: 6,
      start: "2022-12-19 15:35:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r6",
      title: "I am normal",
      type: 3
    },
    {
      id: 7,
      start: "2022-12-19 15:40:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r7",
      title: "I am exceptional",
      bgColor: "#FA9E95",
      type: 1
    },
    {
      id: 8,
      start: "2022-12-19 15:50:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "I am locked",
      movable: !1,
      resizable: !1,
      bgColor: "red",
      type: 2
    },
    {
      id: 9,
      start: "2022-12-19 16:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 1",
      type: 3
    },
    {
      id: 10,
      start: "2022-12-20 18:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 2",
      type: 1
    },
    {
      id: 11,
      start: "2022-12-21 18:30:00",
      end: "2022-12-22 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 3",
      type: 2
    },
    {
      id: 12,
      start: "2022-12-23 18:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 4",
      type: 3
    }
  ]
};
const lr = it.Button, dr = it.Group;
class cr extends _e {
  constructor(e) {
    super(e);
    M(this, "onWindowResize", (e) => {
      const { schedulerData: r } = this.props;
      r._setDocumentWidth(document.documentElement.clientWidth), this.setState({
        documentWidth: document.documentElement.clientWidth,
        documentHeight: document.documentElement.clientHeight
      });
    });
    M(this, "resolveScrollbarSize", () => {
      const { schedulerData: e } = this.props;
      let r = 17, n = 17, i = 17, o = 17, a = e.getSchedulerContentDesiredHeight();
      this.schedulerContent && (r = this.schedulerContent.offsetHeight - this.schedulerContent.clientHeight, n = this.schedulerContent.offsetWidth - this.schedulerContent.clientWidth), this.schedulerResource && (i = this.schedulerResource.offsetHeight - this.schedulerResource.clientHeight, o = this.schedulerResource.offsetWidth - this.schedulerResource.clientWidth), this.schedulerContentBgTable && this.schedulerContentBgTable.offsetHeight && (a = this.schedulerContentBgTable.offsetHeight);
      let d = {}, c = !1;
      r != this.state.contentScrollbarHeight && (d = {
        ...d,
        contentScrollbarHeight: r
      }, c = !0), n != this.state.contentScrollbarWidth && (d = { ...d, contentScrollbarWidth: n }, c = !0), a != this.state.contentHeight && (d = { ...d, contentHeight: a }, c = !0), i != this.state.resourceScrollbarHeight && (d = {
        ...d,
        resourceScrollbarHeight: i
      }, c = !0), o != this.state.resourceScrollbarWidth && (d = {
        ...d,
        resourceScrollbarWidth: o
      }, c = !0), c && this.setState(d);
    });
    M(this, "schedulerHeadRef", (e) => {
      this.schedulerHead = e;
    });
    M(this, "onSchedulerHeadMouseOver", () => {
      this.currentArea = 2;
    });
    M(this, "onSchedulerHeadMouseOut", () => {
      this.currentArea = -1;
    });
    M(this, "onSchedulerHeadScroll", (e, r) => {
      (this.currentArea === 2 || this.currentArea === -1) && this.schedulerContent.scrollLeft != this.schedulerHead.scrollLeft && (this.schedulerContent.scrollLeft = this.schedulerHead.scrollLeft);
    });
    M(this, "schedulerResourceRef", (e) => {
      this.schedulerResource = e;
    });
    M(this, "onSchedulerResourceMouseOver", () => {
      this.currentArea = 1;
    });
    M(this, "onSchedulerResourceMouseOut", () => {
      this.currentArea = -1;
    });
    M(this, "onSchedulerResourceScroll", (e, r) => {
      (this.currentArea === 1 || this.currentArea === -1) && this.schedulerContent.scrollTop != this.schedulerResource.scrollTop && (this.schedulerContent.scrollTop = this.schedulerResource.scrollTop);
    });
    M(this, "schedulerContentRef", (e) => {
      this.schedulerContent = e;
    });
    M(this, "schedulerContentBgTableRef", (e) => {
      this.schedulerContentBgTable = e;
    });
    M(this, "onSchedulerContentMouseOver", () => {
      this.currentArea = 0;
    });
    M(this, "onSchedulerContentMouseOut", () => {
      this.currentArea = -1;
    });
    M(this, "onSchedulerContentScroll", (e, r) => {
      (this.currentArea === 0 || this.currentArea === -1) && (this.schedulerHead.scrollLeft != this.schedulerContent.scrollLeft && (this.schedulerHead.scrollLeft = this.schedulerContent.scrollLeft), this.schedulerResource.scrollTop != this.schedulerContent.scrollTop && (this.schedulerResource.scrollTop = this.schedulerContent.scrollTop));
      const { schedulerData: n, onScrollLeft: i, onScrollRight: o, onScrollTop: a, onScrollBottom: d } = this.props, { scrollLeft: c, scrollTop: h } = this.state;
      this.schedulerContent.scrollLeft !== c ? (this.schedulerContent.scrollLeft === 0 && i != null && i(n, this.schedulerContent, this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth), this.schedulerContent.scrollLeft === this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth && o != null && o(n, this.schedulerContent, this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth)) : this.schedulerContent.scrollTop !== h && (this.schedulerContent.scrollTop === 0 && a != null && a(n, this.schedulerContent, this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight), this.schedulerContent.scrollTop === this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight && d != null && d(n, this.schedulerContent, this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight)), this.setState({
        scrollLeft: this.schedulerContent.scrollLeft,
        scrollTop: this.schedulerContent.scrollTop
      });
    });
    M(this, "onViewChange", (e) => {
      const { onViewChange: r, schedulerData: n } = this.props;
      let i = parseInt(e.target.value.charAt(0)), o = e.target.value.charAt(1) === "1", a = e.target.value.charAt(2) === "1";
      r(n, {
        viewType: i,
        showAgenda: o,
        isEventPerspective: a
      });
    });
    M(this, "goNext", () => {
      const { nextClick: e, schedulerData: r } = this.props;
      e(r);
    });
    M(this, "goBack", () => {
      const { prevClick: e, schedulerData: r } = this.props;
      e(r);
    });
    M(this, "handleVisibleChange", (e) => {
      this.setState({ visible: e });
    });
    M(this, "onSelect", (e) => {
      this.setState({
        visible: !1
      });
      const { onSelectDate: r, schedulerData: n } = this.props;
      r(n, e);
    });
    const { schedulerData: r, dndSources: n } = e;
    let i = [];
    i.push(new ot((a) => a.eventItem, Ne)), n != null && n.length > 0 && (i = [...i, ...n]);
    let o = new rr(i, ft);
    this.currentArea = -1, r._setDocumentWidth(document.documentElement.clientWidth), this.state = {
      visible: !1,
      dndContext: o,
      contentHeight: r.getSchedulerContentDesiredHeight(),
      contentScrollbarHeight: 17,
      contentScrollbarWidth: 17,
      resourceScrollbarHeight: 17,
      resourceScrollbarWidth: 17,
      scrollLeft: 0,
      scrollTop: 0,
      documentWidth: document.documentElement.clientWidth,
      documentHeight: document.documentElement.clientHeight
    }, r.isSchedulerResponsive() && (window.onresize = this.onWindowResize);
  }
  componentDidMount(e, r) {
    this.resolveScrollbarSize();
  }
  componentDidUpdate(e, r) {
    this.resolveScrollbarSize();
    const { schedulerData: n } = this.props, { localeMoment: i, behaviors: o } = n;
    if (n.getScrollToSpecialMoment() && o.getScrollSpecialMomentFunc && this.schedulerContent && this.schedulerContent.scrollWidth > this.schedulerContent.clientWidth) {
      let a = i(n.startDate).startOf("day"), d = i(n.endDate).endOf("day"), c = o.getScrollSpecialMomentFunc(n, a, d);
      if (c >= a && c <= d) {
        let h = 0;
        n.headers.forEach((p) => {
          let f = i(p.time);
          c >= f && h++;
        }), this.schedulerContent.scrollLeft = (h - 1) * n.getContentCellWidth(), n.setScrollToSpecialMoment(!1);
      }
    }
  }
  render() {
    const { schedulerData: e, leftCustomHeader: r, rightCustomHeader: n } = this.props, { renderData: i, viewType: o, showAgenda: a, isEventPerspective: d, config: c } = e, h = e.getSchedulerWidth(), p = c.calendarPopoverEnabled;
    let f = e.getDateLabel(), m = `${o}${a ? 1 : 0}${d ? 1 : 0}`, E = c.views.map((v) => /* @__PURE__ */ l.jsx(lr, { value: `${v.viewType}${v.showAgenda ? 1 : 0}${v.isEventPerspective ? 1 : 0}`, children: /* @__PURE__ */ l.jsx("span", { style: { margin: "0px 8px" }, children: v.viewName }) }, `${v.viewType}${v.showAgenda ? 1 : 0}${v.isEventPerspective ? 1 : 0}`)), R = /* @__PURE__ */ l.jsx("tr", {});
    if (a)
      R = /* @__PURE__ */ l.jsx(pt, { ...this.props });
    else {
      let v = e.getResourceTableWidth(), D = h - v + 1, T = e.getContentTableWidth() - 1, k = this.state.dndContext.getDropTarget(), j = this.state.dndContext.getDndSource(), A = i.filter((V) => V.render).map((V) => /* @__PURE__ */ he(k, { ...this.props, key: V.slotId, resourceEvents: V, dndSource: j })), S = this.state.contentScrollbarHeight, _ = this.state.contentScrollbarWidth, q = this.state.resourceScrollbarHeight, Q = this.state.resourceScrollbarWidth, G = this.state.contentHeight, K = q === 0 ? S : 0, z = {
        overflow: "auto",
        margin: "0px",
        position: "relative",
        paddingBottom: S === 0 ? q : 0
      }, Y = {
        overflowX: "auto",
        overflowY: "auto",
        width: v + Q - 2,
        margin: `0px -${_}px 0px 0px`
      };
      c.schedulerMaxHeight > 0 && (z = {
        ...z,
        maxHeight: c.schedulerMaxHeight - c.tableHeaderHeight
      }, Y = {
        ...Y,
        maxHeight: c.schedulerMaxHeight - c.tableHeaderHeight
      });
      let $ = e.isEventPerspective ? c.taskName : c.resourceName;
      R = /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { style: { width: v, verticalAlign: "top" }, children: /* @__PURE__ */ l.jsxs("div", { className: "resource-view", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              style: {
                overflow: "hidden",
                borderBottom: "1px solid #e9e9e9",
                height: c.tableHeaderHeight
              },
              children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    overflowX: "scroll",
                    overflowY: "hidden",
                    margin: `0px 0px -${S}px`
                  },
                  children: /* @__PURE__ */ l.jsx("table", { className: "resource-table", children: /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsx("tr", { style: { height: c.tableHeaderHeight }, children: /* @__PURE__ */ l.jsx("th", { className: "header3-text", children: $ }) }) }) })
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              style: Y,
              ref: this.schedulerResourceRef,
              onMouseOver: this.onSchedulerResourceMouseOver,
              onMouseOut: this.onSchedulerResourceMouseOut,
              onScroll: this.onSchedulerResourceScroll,
              children: /* @__PURE__ */ l.jsx(at, { ...this.props, contentScrollbarHeight: K })
            }
          )
        ] }) }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsxs("div", { className: "scheduler-view", style: { width: D, verticalAlign: "top" }, children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              style: {
                overflow: "hidden",
                borderBottom: "1px solid #e9e9e9",
                height: c.tableHeaderHeight
              },
              children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    overflowX: "scroll",
                    overflowY: "hidden",
                    margin: `0px 0px -${S}px`
                  },
                  ref: this.schedulerHeadRef,
                  onMouseOver: this.onSchedulerHeadMouseOver,
                  onMouseOut: this.onSchedulerHeadMouseOut,
                  onScroll: this.onSchedulerHeadScroll,
                  children: /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      style: {
                        paddingRight: `${_}px`,
                        width: T + _
                      },
                      children: /* @__PURE__ */ l.jsx("table", { className: "scheduler-bg-table", children: /* @__PURE__ */ l.jsx(lt, { ...this.props }) })
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              style: z,
              ref: this.schedulerContentRef,
              onMouseOver: this.onSchedulerContentMouseOver,
              onMouseOut: this.onSchedulerContentMouseOut,
              onScroll: this.onSchedulerContentScroll,
              children: /* @__PURE__ */ l.jsxs("div", { style: { width: T, height: G }, children: [
                /* @__PURE__ */ l.jsx("div", { className: "scheduler-content", children: /* @__PURE__ */ l.jsx("table", { className: "scheduler-content-table", children: /* @__PURE__ */ l.jsx("tbody", { children: A }) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "scheduler-bg", children: /* @__PURE__ */ l.jsx("table", { className: "scheduler-bg-table", style: { width: T }, ref: this.schedulerContentBgTableRef, children: /* @__PURE__ */ l.jsx(dt, { ...this.props }) }) })
              ] })
            }
          )
        ] }) })
      ] });
    }
    let C = /* @__PURE__ */ l.jsx("div", { className: "popover-calendar", children: /* @__PURE__ */ l.jsx(Qt, { fullscreen: !1, onSelect: this.onSelect }) }), x = /* @__PURE__ */ l.jsx("div", {});
    return c.headerEnabled && (x = /* @__PURE__ */ l.jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px"
        },
        children: [
          r,
          /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs("div", { className: "header2-text", children: [
            /* @__PURE__ */ l.jsx(Ut, { style: { marginRight: "8px" }, className: "icon-nav", onClick: this.goBack }),
            p ? /* @__PURE__ */ l.jsx(He, { content: C, placement: "bottom", trigger: "click", open: this.state.visible, onOpenChange: this.handleVisibleChange, children: /* @__PURE__ */ l.jsx("span", { className: "header2-text-label", style: { cursor: "pointer" }, children: f }) }) : /* @__PURE__ */ l.jsx("span", { className: "header2-text-label", children: f }),
            /* @__PURE__ */ l.jsx(Xt, { style: { marginLeft: "8px" }, className: "icon-nav", onClick: this.goNext })
          ] }) }),
          /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs(dr, { defaultValue: m, size: "default", onChange: this.onViewChange, children: [
            E,
            "xx"
          ] }) }),
          n
        ]
      }
    )), /* @__PURE__ */ l.jsx("div", { className: "scheduler-component-module", children: /* @__PURE__ */ l.jsxs("table", { id: "RBS-Scheduler-root", className: "scheduler", style: { width: `${h}px` }, children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { colSpan: "2", children: x }) }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: R })
    ] }) });
  }
}
M(cr, "propTypes", {
  schedulerData: u.object.isRequired,
  prevClick: u.func.isRequired,
  nextClick: u.func.isRequired,
  onViewChange: u.func.isRequired,
  onSelectDate: u.func.isRequired,
  onSetAddMoreState: u.func,
  updateEventStart: u.func,
  updateEventEnd: u.func,
  moveEvent: u.func,
  movingEvent: u.func,
  leftCustomHeader: u.object,
  rightCustomHeader: u.object,
  newEvent: u.func,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  conflictOccurred: u.func,
  eventItemTemplateResolver: u.func,
  dndSources: u.array,
  slotClickedFunc: u.func,
  toggleExpandFunc: u.func,
  slotItemTemplateResolver: u.func,
  nonAgendaCellHeaderTemplateResolver: u.func,
  onScrollLeft: u.func,
  onScrollRight: u.func,
  onScrollTop: u.func,
  onScrollBottom: u.func
});
export {
  nr as AddMorePopover,
  O as CellUnits,
  P as DATETIME_FORMAT,
  W as DATE_FORMAT,
  rr as DnDContext,
  ot as DnDSource,
  yr as SampleData,
  cr as Scheduler,
  br as SchedulerData,
  ae as SummaryPos,
  w as ViewTypes
};
