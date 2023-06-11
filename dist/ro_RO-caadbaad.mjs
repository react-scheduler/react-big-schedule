import { g as _ } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
function $(d, f) {
  for (var s = 0; s < f.length; s++) {
    const a = f[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in d)) {
          const p = Object.getOwnPropertyDescriptor(a, t);
          p && Object.defineProperty(d, t, p.get ? p : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var n = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ pagină",
  jump_to: "Mergi la",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Pagina Anterioară",
  next_page: "Pagina Următoare",
  prev_5: "5 Pagini Anterioare",
  next_5: "5 Pagini Următoare",
  prev_3: "3 Pagini Anterioare",
  next_3: "3 Pagini Următoare",
  page_size: "Page Size"
};
o.default = b;
var i = {}, r = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var O = {
  locale: "ro_RO",
  today: "Azi",
  now: "Acum",
  backToToday: "Înapoi la azi",
  ok: "OK",
  clear: "Șterge",
  month: "Lună",
  year: "An",
  timeSelect: "selectează timpul",
  dateSelect: "selectează data",
  weekSelect: "Alege o săptămână",
  monthSelect: "Alege o lună",
  yearSelect: "Alege un an",
  decadeSelect: "Alege un deceniu",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Luna anterioară (PageUp)",
  nextMonth: "Luna următoare (PageDown)",
  previousYear: "Anul anterior (Control + stânga)",
  nextYear: "Anul următor (Control + dreapta)",
  previousDecade: "Deceniul anterior",
  nextDecade: "Deceniul următor",
  previousCentury: "Secolul anterior",
  nextCentury: "Secolul următor"
}, x = O;
u.default = x;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const y = {
  placeholder: "Selectează ora"
};
var P = y;
l.default = P;
var g = m.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var z = g(u), A = g(l);
const R = {
  lang: Object.assign({
    placeholder: "Selectează data",
    rangePlaceholder: ["Data start", "Data sfârșit"]
  }, z.default),
  timePickerLocale: Object.assign({}, A.default)
};
var S = R;
r.default = S;
var D = m.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var T = D(r), j = T.default;
i.default = j;
var c = m.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var h = c(o), M = c(i), Y = c(r), F = c(l);
const e = "${label} nu conține tipul corect (${type})", k = {
  locale: "ro",
  Pagination: h.default,
  DatePicker: Y.default,
  TimePicker: F.default,
  Calendar: M.default,
  global: {
    placeholder: "Selectează"
  },
  Table: {
    filterTitle: "Filtrează",
    filterConfirm: "OK",
    filterReset: "Resetează",
    filterEmptyText: "Fără filtre",
    emptyText: "Nu există date",
    selectAll: "Selectează pagina curentă",
    selectInvert: "Inversează pagina curentă",
    selectNone: "Șterge selecția",
    selectionAll: "Selectează toate datele",
    sortTitle: "Ordonează",
    expand: "Extinde rândul",
    collapse: "Micșorează rândul",
    triggerDesc: "Apasă pentru ordonare descrescătoare",
    triggerAsc: "Apasă pentru ordonare crescătoare",
    cancelSort: "Apasă pentru a anula ordonarea"
  },
  Modal: {
    okText: "OK",
    cancelText: "Anulare",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Anulare"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Căutare",
    itemUnit: "element",
    itemsUnit: "elemente",
    remove: "Șterge",
    selectCurrent: "Selectează pagina curentă",
    removeCurrent: "Șterge pagina curentă",
    selectAll: "Selectează toate datele",
    removeAll: "Șterge toate datele",
    selectInvert: "Inversează pagina curentă"
  },
  Upload: {
    uploading: "Se transferă...",
    removeFile: "Înlătură fișierul",
    uploadError: "Eroare la upload",
    previewFile: "Previzualizare fișier",
    downloadFile: "Descărcare fișier"
  },
  Empty: {
    description: "Fără date"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "editează",
    copy: "copiază",
    copied: "copiat",
    expand: "extinde"
  },
  PageHeader: {
    back: "înapoi"
  },
  Form: {
    optional: "(opțional)",
    defaultValidateMessages: {
      default: "Eroare la validarea câmpului ${label}",
      required: "Vă rugăm introduceți ${label}",
      enum: "${label} trebuie să fie una din valorile [${enum}]",
      whitespace: "${label} nu poate fi gol",
      date: {
        format: "${label} - data nu este în formatul corect",
        parse: "${label} nu poate fi convertit la o dată",
        invalid: "${label} este o dată invalidă"
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
        len: "${label} trebuie să conțină ${len} caractere",
        min: "${label} trebuie să conțină cel puțin ${min} caractere",
        max: "${label} trebuie să conțină cel mult ${max} caractere",
        range: "${label} trebuie să conțină între ${min}-${max} caractere"
      },
      number: {
        len: "${label} trebuie să conțină ${len} cifre",
        min: "${label} trebuie să fie minim ${min}",
        max: "${label} trebuie să fie maxim ${max}",
        range: "${label} trebuie să fie între ${min}-${max}"
      },
      array: {
        len: "${label} trebuie să conțină ${len} elemente",
        min: "${label} trebuie să conțină cel puțin ${min} elemente",
        max: "${label} trebuie să conțină cel mult ${max} elemente",
        range: "${label} trebuie să conțină între ${min}-${max} elemente"
      },
      pattern: {
        mismatch: "${label} nu respectă șablonul ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
var C = k;
n.default = C;
var v = n;
const w = /* @__PURE__ */ _(v), I = /* @__PURE__ */ $({
  __proto__: null,
  default: w
}, [v]);
export {
  I as r
};
