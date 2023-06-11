import { g as m } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function g(s, f) {
  for (var v = 0; v < f.length; v++) {
    const e = f[v];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in s)) {
          const n = Object.getOwnPropertyDescriptor(e, a);
          n && Object.defineProperty(s, a, n.get ? n : {
            enumerable: !0,
            get: () => e[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var r = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var k = {
  // Options.jsx
  items_per_page: "/ lappuse",
  jump_to: "iet uz",
  jump_to_confirm: "apstiprināt",
  page: "",
  // Pagination.jsx
  prev_page: "Iepriekšējā lapa",
  next_page: "Nākamā lapaspuse",
  prev_5: "Iepriekšējās 5 lapas",
  next_5: "Nākamās 5 lapas",
  prev_3: "Iepriekšējās 3 lapas",
  next_3: "Nākamās 3 lapas",
  page_size: "Page Size"
};
i.default = k;
var o = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var j = {
  locale: "lv_LV",
  today: "Šodien",
  now: "Tagad",
  backToToday: "Atpakaļ pie šodienas",
  ok: "OK",
  clear: "Skaidrs",
  month: "Mēnesis",
  year: "Gads",
  timeSelect: "Izvēlieties laiku",
  dateSelect: "Izvēlieties datumu",
  monthSelect: "Izvēlieties mēnesi",
  yearSelect: "Izvēlieties gadu",
  decadeSelect: "Izvēlieties desmit gadus",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Iepriekšējais mēnesis (PageUp)",
  nextMonth: "Nākammēnes (PageDown)",
  previousYear: "Pagājušais gads (Control + left)",
  nextYear: "Nākamgad (Control + right)",
  previousDecade: "Pēdējā desmitgadē",
  nextDecade: "Nākamā desmitgade",
  previousCentury: "Pagājušajā gadsimtā",
  nextCentury: "Nākamajā gadsimtā"
}, P = j;
u.default = P;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const y = {
  placeholder: "Izvēlieties laiku"
};
var $ = y;
l.default = $;
var _ = p.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var L = _(u), O = _(l);
const V = {
  lang: Object.assign({
    placeholder: "Izvēlieties datumu",
    rangePlaceholder: ["Sākuma datums", "Beigu datums"]
  }, L.default),
  timePickerLocale: Object.assign({}, O.default)
};
var b = V;
t.default = b;
var x = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var Y = x(t), z = Y.default;
o.default = z;
var d = p.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var M = d(i), T = d(o), D = d(t), h = d(l);
const I = {
  locale: "lv",
  Pagination: M.default,
  DatePicker: D.default,
  TimePicker: h.default,
  Calendar: T.default,
  Table: {
    filterTitle: "Filtrēšanas izvēlne",
    filterConfirm: "OK",
    filterReset: "Atiestatīt",
    selectAll: "Atlasiet pašreizējo lapu",
    selectInvert: "Pārvērst pašreizējo lapu"
  },
  Modal: {
    okText: "OK",
    cancelText: "Atcelt",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Atcelt"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Meklēt šeit",
    itemUnit: "vienumu",
    itemsUnit: "vienumus"
  },
  Upload: {
    uploading: "Augšupielāde...",
    removeFile: "Noņemt failu",
    uploadError: "Augšupielādes kļūda",
    previewFile: "Priekšskatiet failu",
    downloadFile: "Lejupielādēt failu"
  },
  Empty: {
    description: "Nav datu"
  }
};
var A = I;
r.default = A;
var c = r;
const N = /* @__PURE__ */ m(c), C = /* @__PURE__ */ g({
  __proto__: null,
  default: N
}, [c]);
export {
  C as l
};
