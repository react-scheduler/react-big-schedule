import { g as s } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
import { e as u, a as d, b as _, c as p } from "./en_US-4b7d1df0.mjs";
function m(o, i) {
  for (var l = 0; l < i.length; l++) {
    const e = i[l];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var r = {}, a = c.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var v = a(u), P = a(d), g = a(_), U = a(p);
const S = {
  locale: "ne-np",
  Pagination: v.default,
  DatePicker: g.default,
  TimePicker: U.default,
  Calendar: P.default,
  Table: {
    filterTitle: "फिल्टर मेनु",
    filterConfirm: "हो",
    filterReset: "रीसेट",
    selectAll: "सबै छान्नुुहोस्",
    selectInvert: "छनौट उल्टाउनुहोस"
  },
  Modal: {
    okText: "हो",
    cancelText: "होईन",
    justOkText: "हो"
  },
  Popconfirm: {
    okText: "हो",
    cancelText: "होईन"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "यहाँ खोज्नुहोस्",
    itemUnit: "वस्तु",
    itemsUnit: "वस्तुहरू"
  },
  Upload: {
    uploading: "अपलोड गर्दै...",
    removeFile: "फाइल हटाउनुहोस्",
    uploadError: "अप्लोडमा समस्या भयो",
    previewFile: "फाइल पूर्वावलोकन गर्नुहोस्",
    downloadFile: "डाउनलोड फाइल"
  },
  Empty: {
    description: "डाटा छैन"
  }
};
var T = S;
r.default = T;
var f = r;
const b = /* @__PURE__ */ s(f), O = /* @__PURE__ */ m({
  __proto__: null,
  default: b
}, [f]);
export {
  O as n
};
