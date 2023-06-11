import { g as _ } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function $(s, v) {
  for (var m = 0; m < v.length; m++) {
    const a = v[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in s)) {
          const c = Object.getOwnPropertyDescriptor(a, r);
          c && Object.defineProperty(s, r, c.get ? c : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var i = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var k = {
  // Options.jsx
  items_per_page: "/ strani",
  jump_to: "Idi na",
  page: "",
  // Pagination.jsx
  prev_page: "Prethodna strana",
  next_page: "Sledeća strana",
  prev_5: "Prethodnih 5 Strana",
  next_5: "Sledećih 5 Strana",
  prev_3: "Prethodnih 3 Strane",
  next_3: "Sledećih 3 Strane",
  page_size: "Page Size"
};
o.default = k;
var n = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var g = {
  locale: "sr_RS",
  today: "Danas",
  now: "Sada",
  backToToday: "Vrati se na danas",
  ok: "U redu",
  clear: "Obriši",
  month: "Mesec",
  year: "Godina",
  timeSelect: "Izaberi vreme",
  dateSelect: "Izaberi datum",
  monthSelect: "Izaberi mesec",
  yearSelect: "Izaberi godinu",
  decadeSelect: "Izaberi deceniju",
  yearFormat: "YYYY",
  dateFormat: "DD.MM.YYYY",
  dayFormat: "D",
  dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Prethodni mesec (PageUp)",
  nextMonth: "Sledeći mesec (PageDown)",
  previousYear: "Prethodna godina (Control + left)",
  nextYear: "Sledeća godina (Control + right)",
  previousDecade: "Prethodna decenija",
  nextDecade: "Sledeća decenija",
  previousCentury: "Prethodni vek",
  nextCentury: "Sledeći vek"
}, P = g;
d.default = P;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const S = {
  placeholder: "Izaberi vreme",
  rangePlaceholder: ["Vreme početka", "Vreme završetka"]
};
var z = S;
l.default = z;
var b = p.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var h = b(d), j = b(l);
const x = {
  lang: Object.assign({
    placeholder: "Izaberi datum",
    yearPlaceholder: "Izaberi godinu",
    quarterPlaceholder: "Izaberi tromesečje",
    monthPlaceholder: "Izaberi mesec",
    weekPlaceholder: "Izaberi sedmicu",
    rangePlaceholder: ["Datum početka", "Datum završetka"],
    rangeYearPlaceholder: ["Godina početka", "Godina završetka"],
    rangeMonthPlaceholder: ["Mesec početka", "Mesec završetka"],
    rangeWeekPlaceholder: ["Sedmica početka", "Sedmica završetka"]
  }, h.default),
  timePickerLocale: Object.assign({}, j.default)
};
var y = x;
t.default = y;
var I = p.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var R = I(t), M = R.default;
n.default = M;
var u = p.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var O = u(o), D = u(n), T = u(t), Y = u(l);
const e = "${label} nije važeći ${type}", U = {
  locale: "sr",
  Pagination: O.default,
  DatePicker: T.default,
  TimePicker: Y.default,
  Calendar: D.default,
  global: {
    placeholder: "Izaberi"
  },
  Table: {
    filterTitle: "Meni filtera",
    filterConfirm: "U redu",
    filterReset: "Poništi",
    filterEmptyText: "Nema filtera",
    emptyText: "Nema podataka",
    selectAll: "Izaberi trenutnu stranicu",
    selectInvert: "Obrni izbor trenutne stranice",
    selectNone: "Obriši sve podatke",
    selectionAll: "Izaberi sve podatke",
    sortTitle: "Sortiraj",
    expand: "Proširi red",
    collapse: "Skupi red",
    triggerDesc: "Klikni da sortiraš po padajućem redosledu",
    triggerAsc: "Klikni da sortiraš po rastućem redosledu",
    cancelSort: "Klikni da otkažeš sortiranje"
  },
  Modal: {
    okText: "U redu",
    cancelText: "Otkaži",
    justOkText: "U redu"
  },
  Popconfirm: {
    okText: "U redu",
    cancelText: "Otkaži"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Pretraži ovde",
    itemUnit: "stavka",
    itemsUnit: "stavki",
    remove: "Ukloni",
    selectCurrent: "Izaberi trenutnu stranicu",
    removeCurrent: "Ukloni trenutnu stranicu",
    selectAll: "Izaberi sve podatke",
    removeAll: "Ukloni sve podatke",
    selectInvert: "Obrni izbor trenutne stranice"
  },
  Upload: {
    uploading: "Otpremanje...",
    removeFile: "Ukloni datoteku",
    uploadError: "Greška pri otpremanju",
    previewFile: "Pregledaj datoteku",
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
    copied: "Kopirano",
    expand: "Proširi"
  },
  PageHeader: {
    back: "Nazad"
  },
  Form: {
    optional: "(opcionalno)",
    defaultValidateMessages: {
      default: "Greška pri proveri valjanosti za ${label}",
      required: "Unesi ${label}",
      enum: "${label} mora da bude nešto od [${enum}]",
      whitespace: "${label} ne može biti prazan znak",
      date: {
        format: "${label} format datuma je nevažeći",
        parse: "${label} se ne može konvertovati u datum",
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
        len: "${label} mora da sadrži ${len} znakova",
        min: "${label} mora da sadrži bar ${min} znakova",
        max: "${label} mora da sadrži do ${max} znakova",
        range: "${label} mora da sadrži između ${min} i ${max} znakova"
      },
      number: {
        len: "${label} mora biti jednak ${len}",
        min: "${label} mora biti najmanje ${min}",
        max: "${label} mora biti najviše ${max}",
        range: "${label} mora biti između ${min} i ${max}"
      },
      array: {
        len: "Mora biti ${len} ${label}",
        min: "Najmanje ${min} ${label}",
        max: "najviše ${max} ${label}",
        range: "Iznos ${label} mora biti između ${min} i ${max}"
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
var C = U;
i.default = C;
var f = i;
const F = /* @__PURE__ */ _(f), N = /* @__PURE__ */ $({
  __proto__: null,
  default: F
}, [f]);
export {
  N as s
};
