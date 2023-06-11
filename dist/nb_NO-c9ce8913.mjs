import { g as b } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function _(u, v) {
  for (var m = 0; m < v.length; m++) {
    const t = v[m];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in u)) {
          const g = Object.getOwnPropertyDescriptor(t, r);
          g && Object.defineProperty(u, r, g.get ? g : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ side",
  jump_to: "Gå til side",
  page: "Side",
  // Pagination.jsx
  prev_page: "Forrige side",
  next_page: "Neste side",
  prev_5: "5 forrige",
  next_5: "5 neste",
  prev_3: "3 forrige",
  next_3: "3 neste",
  page_size: "sidestørrelse"
};
i.default = $;
var o = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var k = {
  locale: "nb_NO",
  today: "I dag",
  now: "Nå",
  backToToday: "Gå til i dag",
  ok: "OK",
  clear: "Annuller",
  month: "Måned",
  year: "År",
  timeSelect: "Velg tidspunkt",
  dateSelect: "Velg dato",
  weekSelect: "Velg uke",
  monthSelect: "Velg måned",
  yearSelect: "Velg år",
  decadeSelect: "Velg tiår",
  yearFormat: "YYYY",
  dateFormat: "DD.MM.YYYY",
  dayFormat: "DD",
  dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Forrige måned (PageUp)",
  nextMonth: "Neste måned (PageDown)",
  previousYear: "Forrige år (Control + venstre)",
  nextYear: "Neste år (Control + høyre)",
  previousDecade: "Forrige tiår",
  nextDecade: "Neste tiår",
  previousCentury: "Forrige århundre",
  nextCentury: "Neste århundre"
}, y = k;
d.default = y;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const O = {
  placeholder: "Velg tid",
  rangePlaceholder: ["Starttid", "Sluttid"]
};
var h = O;
a.default = h;
var f = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var x = f(d), P = f(a);
const j = {
  lang: Object.assign({
    placeholder: "Velg dato",
    yearPlaceholder: "Velg år",
    quarterPlaceholder: "Velg kvartal",
    monthPlaceholder: "Velg måned",
    weekPlaceholder: "Velg uke",
    rangePlaceholder: ["Startdato", "Sluttdato"],
    rangeYearPlaceholder: ["Startår", "Sluttår"],
    rangeMonthPlaceholder: ["Startmåned", "Sluttmåned"],
    rangeWeekPlaceholder: ["Start uke", "Sluttuke"]
  }, x.default),
  timePickerLocale: Object.assign({}, P.default)
};
var N = j;
l.default = N;
var S = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var F = S(l), V = F.default;
o.default = V;
var s = c.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var M = s(i), T = s(o), D = s(l), Y = s(a);
const e = "${label} er ikke et gyldig ${type}", A = {
  locale: "nb",
  Pagination: M.default,
  DatePicker: D.default,
  TimePicker: Y.default,
  Calendar: T.default,
  global: {
    placeholder: "Vennligst velg"
  },
  Table: {
    filterTitle: "Filtermeny",
    filterConfirm: "OK",
    filterReset: "Nullstill",
    filterEmptyText: "Ingen filtre",
    selectAll: "Velg alle",
    selectInvert: "Inverter gjeldende side",
    selectionAll: "Velg all data",
    sortTitle: "Sorter",
    expand: "Utvid rad",
    collapse: "Skjul rad",
    triggerDesc: "Sorter data i synkende rekkefølge",
    triggerAsc: "Sorterer data i stigende rekkefølge",
    cancelSort: "Klikk for å avbryte sorteringen"
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
    searchPlaceholder: "Søk her",
    itemUnit: "element",
    itemsUnit: "elementer",
    remove: "Fjern",
    selectCurrent: "Velg gjeldende side",
    removeCurrent: "Fjern gjeldende side",
    selectAll: "Velg all data",
    removeAll: "Fjern all data",
    selectInvert: "Inverter gjeldende side"
  },
  Upload: {
    uploading: "Laster opp...",
    removeFile: "Fjern fil",
    uploadError: "Feil ved opplastning",
    previewFile: "Forhåndsvisning",
    downloadFile: "Last ned fil"
  },
  Empty: {
    description: "Ingen data"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Rediger",
    copy: "Kopier",
    copied: "Kopiert",
    expand: "Utvid"
  },
  PageHeader: {
    back: "Tilbake"
  },
  Form: {
    defaultValidateMessages: {
      default: "Feltvalideringsfeil ${label}",
      required: "Vennligst skriv inn ${label}",
      enum: "${label} må være en av [${enum}]",
      whitespace: "${label} kan ikke være et blankt tegn",
      date: {
        format: "${label} datoformatet er ugyldig",
        parse: "${label} kan ikke konverteres til en dato",
        invalid: "${label} er en ugyldig dato"
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
        len: "${label} må være ${len} tegn",
        min: "${label} må minst ha ${min} tegn",
        max: "${label} opp til ${max} tegn",
        range: "${label} må være mellom ${min}-${max} tegn"
      },
      number: {
        len: "${label} må være lik ${len}",
        min: "${label} minimumsverdien er ${min}",
        max: "${label} maksimumsverdien er ${max}",
        range: "${label} må være mellom ${min}-${max}"
      },
      array: {
        len: "Må være ${len} ${label}",
        min: "Må være minst ${min} ${label}",
        max: "På det meste ${max} ${label}",
        range: "Totalt av ${label} må være mellom ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} stemmer ikke overens med mønsteret ${pattern}"
      }
    }
  }
};
var C = A;
n.default = C;
var p = n;
const w = /* @__PURE__ */ b(p), q = /* @__PURE__ */ _({
  __proto__: null,
  default: w
}, [p]);
export {
  q as n
};
