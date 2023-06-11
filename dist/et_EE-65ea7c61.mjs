import { g } from "./index-43e0371a.mjs";
import { i as v } from "./interopRequireDefault-40f894e3.mjs";
function _(s, c) {
  for (var m = 0; m < c.length; m++) {
    const a = c[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in s)) {
          const p = Object.getOwnPropertyDescriptor(a, l);
          p && Object.defineProperty(s, l, p.get ? p : {
            enumerable: !0,
            get: () => a[l]
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
var $ = {
  // Options.jsx
  items_per_page: "/ leheküljel",
  jump_to: "Hüppa",
  jump_to_confirm: "Kinnitage",
  page: "",
  // Pagination.jsx
  prev_page: "Eelmine leht",
  next_page: "Järgmine leht",
  prev_5: "Eelmised 5 lehekülge",
  next_5: "Järgmised 5 lehekülge",
  prev_3: "Eelmised 3 lehekülge",
  next_3: "Järgmised 3 lehekülge",
  page_size: "lehe suurus"
};
o.default = $;
var n = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var b = {
  locale: "et_EE",
  today: "Täna",
  now: "Praegu",
  backToToday: "Tagasi tänase juurde",
  ok: "OK",
  clear: "Tühista",
  month: "Kuu",
  year: "Aasta",
  timeSelect: "Vali aeg",
  dateSelect: "Vali kuupäev",
  monthSelect: "Vali kuu",
  yearSelect: "Vali aasta",
  decadeSelect: "Vali dekaad",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Eelmine kuu (PageUp)",
  nextMonth: "Järgmine kuu (PageDown)",
  previousYear: "Eelmine aasta (Control + left)",
  nextYear: "Järgmine aasta (Control + right)",
  previousDecade: "Eelmine dekaad",
  nextDecade: "Järgmine dekaad",
  previousCentury: "Eelmine sajand",
  nextCentury: "Järgmine sajand"
}, E = b;
u.default = E;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const h = {
  placeholder: "Vali aeg"
};
var x = h;
r.default = x;
var f = v.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var y = f(u), P = f(r);
const T = {
  lang: Object.assign({
    placeholder: "Vali kuupäev",
    rangePlaceholder: ["Algus kuupäev", "Lõpu kuupäev"]
  }, y.default),
  timePickerLocale: Object.assign({}, P.default)
};
var j = T;
t.default = j;
var O = v.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var M = O(t), V = M.default;
n.default = V;
var d = v.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var Y = d(o), D = d(n), K = d(t), A = d(r);
const e = "${label} ei ole kehtiv ${type}", F = {
  locale: "et",
  Pagination: Y.default,
  DatePicker: K.default,
  TimePicker: A.default,
  Calendar: D.default,
  global: {
    placeholder: "Palun vali"
  },
  Table: {
    filterTitle: "Filtri menüü",
    filterConfirm: "OK",
    filterReset: "Nulli",
    filterEmptyText: "Filtreid pole",
    filterCheckall: "Vali kõik",
    filterSearchPlaceholder: "Otsi filtritest",
    emptyText: "Andmed puuduvad",
    selectAll: "Vali kõik",
    selectInvert: "Inverteeri valik",
    selectNone: "Kustuta kõik andmed",
    selectionAll: "Vali kõik andmed",
    sortTitle: "Sorteeri",
    expand: "Laienda rida",
    collapse: "Ahenda rida",
    triggerDesc: "Klõpsa kahanevalt sortimiseks",
    triggerAsc: "Klõpsa kasvavalt sortimiseks",
    cancelSort: "Klõpsa sortimise tühistamiseks"
  },
  Modal: {
    okText: "OK",
    cancelText: "Tühista",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Tühista"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Otsi siit",
    itemUnit: "kogus",
    itemsUnit: "kogused",
    remove: "Eemalda",
    selectCurrent: "Vali praegune leht",
    removeCurrent: "Eemalda praegune leht",
    selectAll: "Vali kõik",
    removeAll: "Eemalda kõik andmed",
    selectInvert: "Inverteeri valik"
  },
  Upload: {
    uploading: "Üleslaadimine...",
    removeFile: "Eemalda fail",
    uploadError: "Üleslaadimise tõrge",
    previewFile: "Faili eelvaade",
    downloadFile: "Lae fail alla"
  },
  Empty: {
    description: "Andmed puuduvad"
  },
  Icon: {
    icon: "ikoon"
  },
  Text: {
    edit: "Muuda",
    copy: "Kopeeri",
    copied: "Kopeeritud",
    expand: "Laienda"
  },
  PageHeader: {
    back: "Tagasi"
  },
  Form: {
    optional: "(valikuline)",
    defaultValidateMessages: {
      default: "${label} välja valideerimise viga",
      required: "Palun sisesta ${label}",
      enum: "${label} peab olema üks järgmistest: [${enum}]",
      whitespace: "${label} ei saa olla tühi märk",
      date: {
        format: "${label} kuupäevavorming on kehtetu",
        parse: "${label} ei saa kuupäevaks teisendada",
        invalid: "${label} on vale kuupäev"
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
        len: "${label} peab koosnema ${len} tähemärgist",
        min: "${label} peab olema vähemalt ${min} tähemärki",
        max: "${label} peab olema kuni ${max} tähemärki",
        range: "${label} peab olema vahemikus ${min}–${max} tähemärki"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} peab olema vähemalt ${min}",
        max: "${label} peab olema maksimaalne ${max}",
        range: "${label} peab olema vahemikus ${min}–${max}"
      },
      array: {
        len: "Peab olema ${len} ${label}",
        min: "Vähemalt ${min} ${label}",
        max: "Maksimaalselt ${max} ${label}",
        range: "${label} summa peab olema vahemikus ${min}–${max}"
      },
      pattern: {
        mismatch: "${label} ei vasta mustrile ${pattern}"
      }
    }
  },
  Image: {
    preview: "Eelvaade"
  }
};
var C = F;
i.default = C;
var k = i;
const S = /* @__PURE__ */ g(k), q = /* @__PURE__ */ _({
  __proto__: null,
  default: S
}, [k]);
export {
  q as e
};
