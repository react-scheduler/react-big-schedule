import { g as _ } from "./index-43e0371a.mjs";
import { i as s } from "./interopRequireDefault-40f894e3.mjs";
function $(m, p) {
  for (var g = 0; g < p.length; g++) {
    const a = p[g];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in m)) {
          const c = Object.getOwnPropertyDescriptor(a, l);
          c && Object.defineProperty(m, l, c.get ? c : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ pagina",
  jump_to: "Ga naar",
  jump_to_confirm: "bevestigen",
  page: "Pagina",
  // Pagination.jsx
  prev_page: "Vorige pagina",
  next_page: "Volgende pagina",
  prev_5: "Vorige 5 pagina's",
  next_5: "Volgende 5 pagina's",
  prev_3: "Vorige 3 pagina's",
  next_3: "Volgende 3 pagina's",
  page_size: "pagina grootte"
};
i.default = b;
var o = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var j = {
  locale: "nl_NL",
  today: "Vandaag",
  now: "Nu",
  backToToday: "Terug naar vandaag",
  ok: "OK",
  clear: "Reset",
  month: "Maand",
  year: "Jaar",
  timeSelect: "Selecteer tijd",
  dateSelect: "Selecteer datum",
  monthSelect: "Kies een maand",
  yearSelect: "Kies een jaar",
  decadeSelect: "Kies een decennium",
  yearFormat: "YYYY",
  dateFormat: "D-M-YYYY",
  dayFormat: "D",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Vorige maand (PageUp)",
  nextMonth: "Volgende maand (PageDown)",
  previousYear: "Vorig jaar (Control + left)",
  nextYear: "Volgend jaar (Control + right)",
  previousDecade: "Vorig decennium",
  nextDecade: "Volgend decennium",
  previousCentury: "Vorige eeuw",
  nextCentury: "Volgende eeuw"
}, k = j;
d.default = k;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const x = {
  placeholder: "Selecteer tijd",
  rangePlaceholder: ["Start tijd", "Eind tijd"]
};
var h = x;
r.default = h;
var f = s.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var y = f(d), P = f(r);
const V = {
  lang: Object.assign({
    monthPlaceholder: "Selecteer maand",
    placeholder: "Selecteer datum",
    quarterPlaceholder: "Selecteer kwartaal",
    rangeMonthPlaceholder: ["Begin maand", "Eind maand"],
    rangePlaceholder: ["Begin datum", "Eind datum"],
    rangeWeekPlaceholder: ["Begin week", "Eind week"],
    rangeYearPlaceholder: ["Begin jaar", "Eind jaar"],
    weekPlaceholder: "Selecteer week",
    yearPlaceholder: "Selecteer jaar"
  }, y.default),
  timePickerLocale: Object.assign({}, P.default)
};
var w = V;
t.default = w;
var S = s.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var N = S(t), T = N.default;
o.default = T;
var u = s.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var M = u(i), O = u(o), L = u(t), Y = u(r);
const e = "${label} is geen geldige ${type}", D = {
  locale: "nl",
  Pagination: M.default,
  DatePicker: L.default,
  TimePicker: Y.default,
  Calendar: O.default,
  global: {
    placeholder: "Maak een selectie"
  },
  Table: {
    cancelSort: "Klik om sortering te annuleren",
    collapse: "Rij inklappen",
    emptyText: "Geen data",
    expand: "Rij uitklappen",
    filterConfirm: "OK",
    filterEmptyText: "Geen filters",
    filterReset: "Reset",
    filterTitle: "Filteren",
    selectAll: "Selecteer huidige pagina",
    selectInvert: "Keer volgorde om",
    selectNone: "Maak selectie leeg",
    selectionAll: "Selecteer alle data",
    sortTitle: "Sorteren",
    triggerAsc: "Klik om oplopend te sorteren",
    triggerDesc: "Klik om aflopend te sorteren"
  },
  Modal: {
    okText: "OK",
    cancelText: "Annuleer",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Annuleer"
  },
  Transfer: {
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Verwijder",
    removeAll: "Verwijder alles",
    removeCurrent: "Verwijder huidige pagina",
    searchPlaceholder: "Zoek hier",
    selectAll: "Selecteer alles",
    selectCurrent: "Selecteer huidige pagina",
    selectInvert: "Huidige pagina omkeren",
    titles: ["", ""]
  },
  Upload: {
    downloadFile: "Bestand downloaden",
    previewFile: "Preview file",
    removeFile: "Verwijder bestand",
    uploadError: "Fout tijdens uploaden",
    uploading: "Uploaden..."
  },
  Empty: {
    description: "Geen gegevens"
  },
  Icon: {
    icon: "icoon"
  },
  Text: {
    edit: "Bewerken",
    copy: "kopiëren",
    copied: "Gekopieerd",
    expand: "Uitklappen"
  },
  PageHeader: {
    back: "Terug"
  },
  Form: {
    optional: "(optioneel)",
    defaultValidateMessages: {
      default: "Validatiefout voor ${label}",
      required: "Gelieve ${label} in te vullen",
      enum: "${label} moet één van [${enum}] zijn",
      whitespace: "${label} mag geen blanco teken zijn",
      date: {
        format: "${label} heeft een ongeldig formaat",
        parse: "${label} kan niet naar een datum omgezet worden",
        invalid: "${label} is een ongeldige datum"
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
        len: "${label} moet ${len} karakters lang zijn",
        min: "${label} moet minimaal ${min} karakters lang zijn",
        max: "${label} mag maximaal ${max} karakters lang zijn",
        range: "${label} moet tussen ${min}-${max} karakters lang zijn"
      },
      number: {
        len: "${label} moet gelijk zijn aan ${len}",
        min: "${label} moet minimaal ${min} zijn",
        max: "${label} mag maximaal ${max} zijn",
        range: "${label} moet tussen ${min}-${max} liggen"
      },
      array: {
        len: "Moeten ${len} ${label} zijn",
        min: "Minimaal ${min} ${label}",
        max: "maximaal ${max} ${label}",
        range: "Het aantal ${label} moet tussen ${min}-${max} liggen"
      },
      pattern: {
        mismatch: "${label} komt niet overeen met het patroon ${pattern}"
      }
    }
  },
  Image: {
    preview: "Voorbeeld"
  }
};
var z = D;
n.default = z;
var v = n;
const K = /* @__PURE__ */ _(v), A = /* @__PURE__ */ $({
  __proto__: null,
  default: K
}, [v]);
export {
  A as n
};
