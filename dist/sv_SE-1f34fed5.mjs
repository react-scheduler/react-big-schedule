import { g as _ } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function $(u, f) {
  for (var v = 0; v < f.length; v++) {
    const a = f[v];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in u)) {
          const m = Object.getOwnPropertyDescriptor(a, t);
          m && Object.defineProperty(u, t, m.get ? m : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var n = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ sida",
  jump_to: "Gå till",
  jump_to_confirm: "bekräfta",
  page: "Sida",
  // Pagination.jsx
  prev_page: "Föreg sida",
  next_page: "Nästa sida",
  prev_5: "Föreg 5 sidor",
  next_5: "Nästa 5 sidor",
  prev_3: "Föreg 3 sidor",
  next_3: "Nästa 3 sidor",
  page_size: "sidstorlek"
};
d.default = b;
var o = {}, r = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var k = {
  locale: "sv_SE",
  today: "I dag",
  now: "Nu",
  backToToday: "Till idag",
  ok: "OK",
  clear: "Avbryt",
  month: "Månad",
  year: "År",
  timeSelect: "Välj tidpunkt",
  dateSelect: "Välj datum",
  monthSelect: "Välj månad",
  yearSelect: "Välj år",
  decadeSelect: "Välj årtionde",
  yearFormat: "YYYY",
  dateFormat: "YYYY-MM-DD",
  dayFormat: "D",
  dateTimeFormat: "YYYY-MM-DD H:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Förra månaden (PageUp)",
  nextMonth: "Nästa månad (PageDown)",
  previousYear: "Föreg år (Control + left)",
  nextYear: "Nästa år (Control + right)",
  previousDecade: "Föreg årtionde",
  nextDecade: "Nästa årtionde",
  previousCentury: "Föreg århundrade",
  nextCentury: "Nästa århundrade"
}, h = k;
i.default = h;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const S = {
  placeholder: "Välj tid"
};
var y = S;
l.default = y;
var p = c.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var x = p(i), j = p(l);
const P = {
  lang: Object.assign({
    placeholder: "Välj datum",
    yearPlaceholder: "Välj år",
    quarterPlaceholder: "Välj kvartal",
    monthPlaceholder: "Välj månad",
    weekPlaceholder: "Välj vecka",
    rangePlaceholder: ["Startdatum", "Slutdatum"],
    rangeYearPlaceholder: ["Startår", "Slutår"],
    rangeMonthPlaceholder: ["Startmånad", "Slutmånad"],
    rangeWeekPlaceholder: ["Startvecka", "Slutvecka"]
  }, x.default),
  timePickerLocale: Object.assign({}, j.default)
};
var T = P;
r.default = T;
var E = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = E(r), F = M.default;
o.default = F;
var s = c.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var O = s(d), D = s(o), Y = s(r), V = s(l);
const e = "${label} är inte en giltig ${type}", A = {
  locale: "sv",
  Pagination: O.default,
  DatePicker: Y.default,
  TimePicker: V.default,
  Calendar: D.default,
  global: {
    placeholder: "Vänligen välj"
  },
  Table: {
    filterTitle: "Filtermeny",
    filterConfirm: "OK",
    filterReset: "Återställ",
    filterEmptyText: "Inga filter",
    filterCheckall: "Markera alla objekt",
    filterSearchPlaceholder: "Sök i filter",
    emptyText: "Ingen data",
    selectAll: "Markera nuvarande sida",
    selectInvert: "Invertera nuvarande sida",
    selectNone: "Avmarkera all data",
    selectionAll: "Markera all data",
    sortTitle: "Sortera",
    expand: "Expandera rad",
    collapse: "Komprimera rad",
    triggerDesc: "Klicka för att sortera i fallande ordning",
    triggerAsc: "Klicka för att sortera i stigande ordning",
    cancelSort: "Klicka för att avbryta sortering"
  },
  Tour: {
    Next: "Nästa",
    Previous: "Föregående",
    Finish: "Avsluta"
  },
  Modal: {
    okText: "OK",
    cancelText: "Avbryt",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Avbryt"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Sök här",
    itemUnit: "objekt",
    itemsUnit: "objekt",
    remove: "Ta bort",
    selectCurrent: "Markera nuvarande sida",
    removeCurrent: "Ta bort nuvarande sida",
    selectAll: "Markera all data",
    removeAll: "Ta bort all data",
    selectInvert: "Invertera nuvarande sida"
  },
  Upload: {
    uploading: "Laddar upp...",
    removeFile: "Ta bort fil",
    uploadError: "Uppladdningsfel",
    previewFile: "Förhandsgranska fil",
    downloadFile: "Ladda ned fil"
  },
  Empty: {
    description: "Ingen data"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Redigera",
    copy: "Kopiera",
    copied: "Kopierad",
    expand: "Expandera"
  },
  PageHeader: {
    back: "Tillbaka"
  },
  Form: {
    optional: "(valfritt)",
    defaultValidateMessages: {
      default: "Fältvalideringsfel för ${label}",
      required: "Vänligen fyll i ${label}",
      enum: "${label} måste vara en av [${enum}]",
      whitespace: "${label} kan inte vara ett tomt tecken",
      date: {
        format: "${label} datumformatet är ogiltigt",
        parse: "${label} kan inte konverteras till ett datum",
        invalid: "${label} är ett ogiltigt datum"
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
        len: "${label} måste vara ${len} tecken",
        min: "${label} måste vara minst ${min} tecken",
        max: "${label} måste vara högst ${max} tecken",
        range: "${label} måste vara mellan ${min}-${max} tecken"
      },
      number: {
        len: "${label} måste vara lika med ${len}",
        min: "${label} måste vara minst ${min}",
        max: "${label} måste vara högst ${max}",
        range: "${label} måste vara mellan ${min}-${max}"
      },
      array: {
        len: "Måste vara ${len} ${label}",
        min: "Minst ${min} ${label}",
        max: "Högst ${max} ${label}",
        range: "Antal ${label} måste vara mellan ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} stämmer inte överens med mönstret ${pattern}"
      }
    }
  },
  Image: {
    preview: "Förhandsgranska"
  },
  QRCode: {
    expired: "QR-koden har upphört att gälla",
    refresh: "Uppdatera"
  }
};
var N = A;
n.default = N;
var g = n;
const C = /* @__PURE__ */ _(g), w = /* @__PURE__ */ $({
  __proto__: null,
  default: C
}, [g]);
export {
  w as s
};
