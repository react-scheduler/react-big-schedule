import { g as m } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function k(i, v) {
  for (var _ = 0; _ < v.length; _++) {
    const e = v[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const f = Object.getOwnPropertyDescriptor(e, t);
          f && Object.defineProperty(i, t, f.get ? f : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var g = {
  // Options.jsx
  items_per_page: "/ ಪುಟ",
  jump_to: "ಜಿಗಿತವನ್ನು",
  jump_to_confirm: "ಖಚಿತಪಡಿಸಲು ಜಿಗಿತವನ್ನು",
  page: "",
  // Pagination.jsx
  prev_page: "ಹಿಂದಿನ ಪುಟ",
  next_page: "ಮುಂದಿನ ಪುಟ",
  prev_5: "ಹಿಂದಿನ 5 ಪುಟಗಳು",
  next_5: "ಮುಂದಿನ 5 ಪುಟಗಳು",
  prev_3: "ಹಿಂದಿನ 3 ಪುಟಗಳು",
  next_3: "ಮುಂದಿನ 3 ಪುಟಗಳು",
  page_size: "Page Size"
};
o.default = g;
var n = {}, a = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var y = {
  locale: "kn_IN",
  today: "ಇಂದು",
  now: "ಈಗ",
  backToToday: "ಇಂದು ಹಿಂದಿರುಗಿ",
  ok: "ಸರಿ",
  clear: "ಸ್ಪಷ್ಟ",
  month: "ತಿಂಗಳು",
  year: "ವರ್ಷ",
  timeSelect: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ",
  dateSelect: "ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
  weekSelect: "ಒಂದು ವಾರದ ಆರಿಸಿ",
  monthSelect: "ಒಂದು ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ",
  yearSelect: "ಒಂದು ವರ್ಷ ಆರಿಸಿ",
  decadeSelect: "ಒಂದು ದಶಕದ ಆಯ್ಕೆಮಾಡಿ",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "ಹಿಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಅಪ್)",
  nextMonth: "ಮುಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಡೌನ್)",
  previousYear: "ಕಳೆದ ವರ್ಷ (Ctrl + ಎಡ)",
  nextYear: "ಮುಂದಿನ ವರ್ಷ (Ctrl + ಬಲ)",
  previousDecade: "ಕಳೆದ ದಶಕ",
  nextDecade: "ಮುಂದಿನ ದಶಕ",
  previousCentury: "ಕಳೆದ ಶತಮಾನ",
  nextCentury: "ಮುಂದಿನ ಶತಮಾನ"
}, $ = y;
u.default = $;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const I = {
  placeholder: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ"
};
var N = I;
r.default = N;
var p = c.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var b = p(u), P = p(r);
const j = {
  lang: Object.assign({
    placeholder: "ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
    rangePlaceholder: ["ಪ್ರಾರಂಭ ದಿನಾಂಕ", "ಅಂತಿಮ ದಿನಾಂಕ"]
  }, b.default),
  timePickerLocale: Object.assign({}, P.default)
};
var x = j;
a.default = x;
var T = c.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var Y = T(a), O = Y.default;
n.default = O;
var d = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var h = d(o), D = d(n), M = d(a), F = d(r);
const S = {
  locale: "kn",
  Pagination: h.default,
  DatePicker: M.default,
  TimePicker: F.default,
  Calendar: D.default,
  // locales for all comoponents
  global: {
    placeholder: "ದಯವಿಟ್ಟು ಆರಿಸಿ"
  },
  Table: {
    filterTitle: "ಪಟ್ಟಿ ಸೋಸಿ",
    filterConfirm: "ಸರಿ",
    filterReset: "ಮರುಹೊಂದಿಸಿ",
    emptyText: "ಮಾಹಿತಿ ಇಲ್ಲ",
    selectAll: "ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    selectInvert: "ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ತಿರುಗಿಸಿ",
    sortTitle: "ವಿಂಗಡಿಸಿ"
  },
  Modal: {
    okText: "ಸರಿ",
    cancelText: "ರದ್ದು",
    justOkText: "ಸರಿ"
  },
  Popconfirm: {
    okText: "ಸರಿ",
    cancelText: "ರದ್ದು"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "ದೊರೆತಿಲ್ಲ",
    searchPlaceholder: "ಇಲ್ಲಿ ಹುಡುಕಿ",
    itemUnit: "ವಿಷಯ",
    itemsUnit: "ವಿಷಯಗಳು"
  },
  Select: {
    notFoundContent: "ದೊರೆತಿಲ್ಲ"
  },
  Upload: {
    uploading: "ಏರಿಸಿ...",
    removeFile: "ಫೈಲ್ ತೆಗೆದುಹಾಕಿ",
    uploadError: "ಏರಿಸುವ ದೋಷ",
    previewFile: "ಫೈಲ್ ಮುನ್ನೋಟ",
    downloadFile: "ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
  }
};
var C = S;
l.default = C;
var s = l;
const w = /* @__PURE__ */ m(s), z = /* @__PURE__ */ k({
  __proto__: null,
  default: w
}, [s]);
export {
  z as k
};
