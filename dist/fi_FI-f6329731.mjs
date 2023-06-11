import { g as m } from "./index-43e0371a.mjs";
import { i as v } from "./interopRequireDefault-40f894e3.mjs";
function k(n, c) {
  for (var d = 0; d < c.length; d++) {
    const e = c[d];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const f = Object.getOwnPropertyDescriptor(e, t);
          f && Object.defineProperty(n, t, f.get ? f : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var r = {}, l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var y = {
  // Options.jsx
  items_per_page: "/ sivu",
  jump_to: "Mene",
  jump_to_confirm: "Potvrdite",
  page: "Sivu",
  // Pagination.jsx
  prev_page: "Edellinen sivu",
  next_page: "Seuraava sivu",
  prev_5: "Edelliset 5 sivua",
  next_5: "Seuraavat 5 sivua",
  prev_3: "Edelliset 3 sivua",
  next_3: "Seuraavat 3 sivua",
  page_size: "Page Size"
};
l.default = y;
var o = {}, a = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var g = {
  locale: "fi_FI",
  today: "Tänään",
  now: "Nyt",
  backToToday: "Tämä päivä",
  ok: "OK",
  clear: "Tyhjennä",
  month: "Kuukausi",
  year: "Vuosi",
  timeSelect: "Valise aika",
  dateSelect: "Valitse päivä",
  monthSelect: "Valitse kuukausi",
  yearSelect: "Valitse vuosi",
  decadeSelect: "Valitse vuosikymmen",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Edellinen kuukausi (PageUp)",
  nextMonth: "Seuraava kuukausi (PageDown)",
  previousYear: "Edellinen vuosi (Control + left)",
  nextYear: "Seuraava vuosi (Control + right)",
  previousDecade: "Edellinen vuosikymmen",
  nextDecade: "Seuraava vuosikymmen",
  previousCentury: "Edellinen vuosisata",
  nextCentury: "Seuraava vuosisata"
}, F = g;
u.default = F;
var i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
const P = {
  placeholder: "Valitse aika"
};
var j = P;
i.default = j;
var _ = v.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var h = _(u), $ = _(i);
const O = {
  lang: Object.assign({
    placeholder: "Valitse päivä",
    rangePlaceholder: ["Alkamispäivä", "Päättymispäivä"]
  }, h.default),
  timePickerLocale: Object.assign({}, $.default)
};
var T = O;
a.default = T;
var I = v.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var S = I(a), x = S.default;
o.default = x;
var s = v.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var b = s(l), Y = s(o), D = s(a), E = s(i);
const M = {
  locale: "fi",
  Pagination: b.default,
  DatePicker: D.default,
  TimePicker: E.default,
  Calendar: Y.default,
  Table: {
    filterTitle: "Suodatus valikko",
    filterConfirm: "OK",
    filterReset: "Tyhjennä",
    selectAll: "Valitse kaikki",
    selectInvert: "Valitse päinvastoin",
    sortTitle: "Lajittele",
    triggerDesc: "Lajittele laskevasti",
    triggerAsc: "Lajittele nousevasti",
    cancelSort: "Peruuta lajittelu"
  },
  Modal: {
    okText: "OK",
    cancelText: "Peruuta",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Peruuta"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Etsi täältä",
    itemUnit: "kohde",
    itemsUnit: "kohdetta"
  },
  Upload: {
    uploading: "Lähetetään...",
    removeFile: "Poista tiedosto",
    uploadError: "Virhe lähetyksessä",
    previewFile: "Esikatsele tiedostoa",
    downloadFile: "Lataa tiedosto"
  },
  Empty: {
    description: "Ei kohteita"
  },
  Text: {
    edit: "Muokkaa",
    copy: "Kopioi",
    copied: "Kopioitu",
    expand: "Näytä lisää"
  }
};
var V = M;
r.default = V;
var p = r;
const K = /* @__PURE__ */ m(p), w = /* @__PURE__ */ k({
  __proto__: null,
  default: K
}, [p]);
export {
  w as f
};
