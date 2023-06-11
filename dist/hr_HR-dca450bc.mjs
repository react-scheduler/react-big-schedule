import { g as f } from "./index-43e0371a.mjs";
import { i as v } from "./interopRequireDefault-40f894e3.mjs";
function _(m, p) {
  for (var s = 0; s < p.length; s++) {
    const a = p[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in m)) {
          const c = Object.getOwnPropertyDescriptor(a, t);
          c && Object.defineProperty(m, t, c.get ? c : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }));
}
var i = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ str",
  jump_to: "Idi na",
  jump_to_confirm: "potvrdi",
  page: "",
  // Pagination.jsx
  prev_page: "Prijašnja stranica",
  next_page: "Sljedeća stranica",
  prev_5: "Prijašnjih 5 stranica",
  next_5: "Sljedećih 5 stranica",
  prev_3: "Prijašnje 3 stranice",
  next_3: "Sljedeće 3 stranice",
  page_size: "Page Size"
};
o.default = $;
var n = {}, r = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var g = {
  locale: "hr_HR",
  today: "Danas",
  now: "Sad",
  backToToday: "Natrag na danas",
  ok: "OK",
  clear: "Očisti",
  month: "Mjesec",
  year: "Godina",
  timeSelect: "odaberite vrijeme",
  dateSelect: "odaberite datum",
  weekSelect: "Odaberite tjedan",
  monthSelect: "Odaberite mjesec",
  yearSelect: "Odaberite godinu",
  decadeSelect: "Odaberite desetljeće",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Prošli mjesec (PageUp)",
  nextMonth: "Sljedeći mjesec (PageDown)",
  previousYear: "Prošla godina (Control + left)",
  nextYear: "Sljedeća godina (Control + right)",
  previousDecade: "Prošlo desetljeće",
  nextDecade: "Sljedeće desetljeće",
  previousCentury: "Prošlo stoljeće",
  nextCentury: "Sljedeće stoljeće"
}, h = g;
d.default = h;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const P = {
  placeholder: "Odaberite vrijeme",
  rangePlaceholder: ["Vrijeme početka", "Vrijeme završetka"]
};
var k = P;
l.default = k;
var j = v.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var O = j(d), x = j(l);
const y = {
  lang: Object.assign({
    placeholder: "Odaberite datum",
    yearPlaceholder: "Odaberite godinu",
    quarterPlaceholder: "Odaberite četvrtinu",
    monthPlaceholder: "Odaberite mjesec",
    weekPlaceholder: "Odaberite tjedan",
    rangePlaceholder: ["Početni datum", "Završni datum"],
    rangeYearPlaceholder: ["Početna godina", "Završna godina"],
    rangeMonthPlaceholder: ["Početni mjesec", "Završni mjesec"],
    rangeWeekPlaceholder: ["Početni tjedan", "Završni tjedan"]
  }, O.default),
  timePickerLocale: Object.assign({}, x.default)
};
var R = y;
r.default = R;
var z = v.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var H = z(r), S = H.default;
n.default = S;
var u = v.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var M = u(o), T = u(n), Y = u(r), D = u(l);
const e = "${label} nije valjan ${type}", K = {
  locale: "hr",
  Pagination: M.default,
  DatePicker: Y.default,
  TimePicker: D.default,
  Calendar: T.default,
  global: {
    placeholder: "Molimo označite"
  },
  Table: {
    filterTitle: "Filter meni",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "Nema filtera",
    emptyText: "Nema podataka",
    selectAll: "Označi trenutnu stranicu",
    selectInvert: "Invertiraj trenutnu stranicu",
    selectionAll: "Odaberite sve podatke",
    sortTitle: "Sortiraj",
    expand: "Proširi redak",
    collapse: "Sažmi redak",
    triggerDesc: "Kliknite za sortiranje silazno",
    triggerAsc: "Kliknite za sortiranje uzlazno",
    cancelSort: "Kliknite da biste otkazali sortiranje"
  },
  Modal: {
    okText: "OK",
    cancelText: "Odustani",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Odustani"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Pretraži ovdje",
    itemUnit: "stavka",
    itemsUnit: "stavke",
    remove: "Ukloniti",
    selectCurrent: "Odaberite trenutnu stranicu",
    removeCurrent: "Ukloni trenutnu stranicu",
    selectAll: "Odaberite sve podatke",
    removeAll: "Uklonite sve podatke",
    selectInvert: "Obrni trenutnu stranicu"
  },
  Upload: {
    uploading: "Upload u tijeku...",
    removeFile: "Makni datoteku",
    uploadError: "Greška kod uploada",
    previewFile: "Pogledaj datoteku",
    downloadFile: "Preuzmi datoteku"
  },
  Empty: {
    description: "Nema podataka"
  },
  Icon: {
    icon: "ikona"
  },
  Text: {
    edit: "Uredi",
    copy: "Kopiraj",
    copied: "Kopiranje uspješno",
    expand: "Proširi"
  },
  PageHeader: {
    back: "Natrag"
  },
  Form: {
    optional: "(neobavezno)",
    defaultValidateMessages: {
      default: "Pogreška provjere valjanosti polja za ${label}",
      required: "Molimo unesite ${label}",
      enum: "${label} mora biti jedan od [${enum}]",
      whitespace: "${label} ne može biti prazan znak",
      date: {
        format: "${label} format datuma je nevažeći",
        parse: "${label} ne može se pretvoriti u datum",
        invalid: "${label} je nevažeći datum"
      },
      types: {
        string: e,
        method: e,
        array: e,
        object: e,
        number: e,
        date: e,
        boolean: e,
        integer: e,
        float: e,
        regexp: e,
        email: e,
        url: e,
        hex: e
      },
      string: {
        len: "${label} mora biti ${len} slova",
        min: "${label} mora biti najmanje ${min} slova",
        max: "${label} mora biti do ${max} slova",
        range: "${label} mora biti između ${min}-${max} slova"
      },
      number: {
        len: "${label} mora biti jednak ${len}",
        min: "${label} mora biti minimalano ${min}",
        max: "${label} mora biti maksimalano ${max}",
        range: "${label} mora biti između ${min}-${max}"
      },
      array: {
        len: "Mora biti ${len} ${label}",
        min: "Najmanje ${min} ${label}",
        max: "Najviše ${max} ${label}",
        range: "Količina ${label} mora biti između ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} ne odgovara obrascu ${pattern}"
      }
    }
  },
  Image: {
    preview: "Pregled"
  }
};
var F = K;
i.default = F;
var b = i;
const w = /* @__PURE__ */ f(b), N = /* @__PURE__ */ _({
  __proto__: null,
  default: w
}, [b]);
export {
  N as h
};
