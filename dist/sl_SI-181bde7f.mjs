import { g as p } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function v(d, f) {
  for (var s = 0; s < f.length; s++) {
    const e = f[s];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in d)) {
          const u = Object.getOwnPropertyDescriptor(e, t);
          u && Object.defineProperty(d, t, u.get ? u : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var j = {
  // Options.jsx
  items_per_page: "/ strani",
  jump_to: "Pojdi na",
  jump_to_confirm: "potrdi",
  page: "",
  // Pagination.jsx
  prev_page: "Prejšnja stran",
  next_page: "Naslednja stran",
  prev_5: "Prejšnjih 5 strani",
  next_5: "Naslednjih 5 strani",
  prev_3: "Prejšnje 3 strani",
  next_3: "Naslednje 3 strani",
  page_size: "Page Size"
};
o.default = j;
var i = {}, a = {}, r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const m = {
  placeholder: "Izberite čas"
};
var P = m;
r.default = P;
var b = c.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var g = b(r);
const I = {
  lang: {
    locale: "sl",
    placeholder: "Izberite datum",
    rangePlaceholder: ["Začetni datum", "Končni datum"],
    today: "Danes",
    now: "Trenutno",
    backToToday: "Nazaj na trenutni datum",
    ok: "OK",
    clear: "Počisti",
    month: "Mesec",
    year: "Leto",
    timeSelect: "Izberi čas",
    dateSelect: "Izberi datum",
    monthSelect: "Izberite mesec",
    yearSelect: "Izberite leto",
    decadeSelect: "Izberite desetletje",
    yearFormat: "YYYY",
    dateFormat: "D.M.YYYY",
    dayFormat: "D",
    dateTimeFormat: "D.M.YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: !0,
    previousMonth: "Prejšnji mesec (PageUp)",
    nextMonth: "Naslednji mesec (PageDown)",
    previousYear: "Lansko leto (Control + left)",
    nextYear: "Naslednje leto (Control + right)",
    previousDecade: "Prejšnje desetletje",
    nextDecade: "Naslednje desetletje",
    previousCentury: "Zadnje stoletje",
    nextCentury: "Naslednje stoletje"
  },
  timePickerLocale: Object.assign({}, g.default)
};
var S = I;
a.default = S;
var y = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var k = y(a), O = k.default;
i.default = O;
var n = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var M = n(o), $ = n(i), h = n(a), x = n(r);
const Y = {
  locale: "sl",
  Pagination: M.default,
  DatePicker: h.default,
  TimePicker: x.default,
  Calendar: $.default,
  Table: {
    filterTitle: "Filter",
    filterConfirm: "Filtriraj",
    filterReset: "Pobriši filter",
    selectAll: "Izberi vse na trenutni strani",
    selectInvert: "Obrni izbor na trenutni strani"
  },
  Modal: {
    okText: "V redu",
    cancelText: "Prekliči",
    justOkText: "V redu"
  },
  Popconfirm: {
    okText: "v redu",
    cancelText: "Prekliči"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Išči tukaj",
    itemUnit: "Objekt",
    itemsUnit: "Objektov"
  },
  Upload: {
    uploading: "Nalaganje...",
    removeFile: "Odstrani datoteko",
    uploadError: "Napaka pri nalaganju",
    previewFile: "Predogled datoteke",
    downloadFile: "Prenos datoteke"
  },
  Empty: {
    description: "Ni podatkov"
  }
};
var D = Y;
l.default = D;
var _ = l;
const T = /* @__PURE__ */ p(_), F = /* @__PURE__ */ v({
  __proto__: null,
  default: T
}, [_]);
export {
  F as s
};
