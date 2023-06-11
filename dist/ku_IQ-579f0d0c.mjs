import { g as m } from "./index-43e0371a.mjs";
import { i as f } from "./interopRequireDefault-40f894e3.mjs";
import { k as s, a as c, b as d, c as k } from "./kmr_IQ-bac5b8e4.mjs";
function p(i, n) {
  for (var l = 0; l < n.length; l++) {
    const e = n[l];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in i)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(i, r, o.get ? o : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var t = {}, a = f.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var _ = a(s), b = a(c), v = a(d), g = a(k);
const T = {
  locale: "ku-iq",
  Pagination: _.default,
  DatePicker: v.default,
  TimePicker: g.default,
  Calendar: b.default,
  Table: {
    filterTitle: "Menuê peldanka",
    filterConfirm: "Temam",
    filterReset: "Jê bibe",
    selectAll: "Hemî hilbijêre",
    selectInvert: "Hilbijartinan veguhere"
  },
  Modal: {
    okText: "Temam",
    cancelText: "Betal ke",
    justOkText: "Temam"
  },
  Popconfirm: {
    okText: "Temam",
    cancelText: "Betal ke"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Lêgerîn",
    itemUnit: "tişt",
    itemsUnit: "tişt"
  },
  Upload: {
    uploading: "Bardike...",
    removeFile: "Pelê rabike",
    uploadError: "Xeta barkirine",
    previewFile: "Pelê pêşbibîne",
    downloadFile: "Pelê dakêşin"
  },
  Empty: {
    description: "Agahî tune"
  }
};
var I = T;
t.default = I;
var u = t;
const P = /* @__PURE__ */ m(u), x = /* @__PURE__ */ p({
  __proto__: null,
  default: P
}, [u]);
export {
  x as k
};
