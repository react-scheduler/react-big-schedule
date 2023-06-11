import { g } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function $(s, f) {
  for (var u = 0; u < f.length; u++) {
    const a = f[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in s)) {
          const m = Object.getOwnPropertyDescriptor(a, t);
          m && Object.defineProperty(s, t, m.get ? m : {
            enumerable: !0,
            get: () => a[t]
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
var b = {
  // Options.jsx
  items_per_page: "/ pagina",
  jump_to: "vai a",
  jump_to_confirm: "Conferma",
  page: "Pagina",
  // Pagination.jsx
  prev_page: "Pagina precedente",
  next_page: "Pagina successiva",
  prev_5: "Precedente 5 pagine",
  next_5: "Prossime 5 pagine",
  prev_3: "Precedente 3 pagine",
  next_3: "Prossime 3 pagine",
  page_size: "dimensioni della pagina"
};
o.default = b;
var n = {}, r = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var T = {
  locale: "it_IT",
  today: "Oggi",
  now: "Adesso",
  backToToday: "Torna ad oggi",
  ok: "OK",
  clear: "Cancella",
  month: "Mese",
  year: "Anno",
  timeSelect: "Seleziona l'ora",
  dateSelect: "Seleziona la data",
  monthSelect: "Seleziona il mese",
  yearSelect: "Seleziona l'anno",
  decadeSelect: "Seleziona il decennio",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Il mese scorso (PageUp)",
  nextMonth: "Il prossimo mese (PageDown)",
  previousYear: "L'anno scorso (Control + sinistra)",
  nextYear: "L'anno prossimo (Control + destra)",
  previousDecade: "Ultimo decennio",
  nextDecade: "Prossimo decennio",
  previousCentury: "Secolo precedente",
  nextCentury: "Prossimo secolo"
}, x = T;
d.default = x;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const y = {
  placeholder: "Selezionare l'orario"
};
var P = y;
l.default = P;
var v = p.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var I = v(d), S = v(l);
const z = {
  lang: Object.assign({
    placeholder: "Selezionare la data",
    rangePlaceholder: ["Data d'inizio", "Data di fine"]
  }, I.default),
  timePickerLocale: Object.assign({}, S.default)
};
var O = z;
r.default = O;
var h = p.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var C = h(r), D = C.default;
n.default = D;
var c = p.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var j = c(o), M = c(n), Y = c(r), A = c(l);
const e = " ${label} non è un ${type} valido", k = {
  locale: "it",
  Pagination: j.default,
  DatePicker: Y.default,
  TimePicker: A.default,
  Calendar: M.default,
  global: {
    placeholder: "Selezionare"
  },
  Table: {
    filterTitle: "Menù Filtro",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "Senza filtri",
    filterCheckall: "Seleziona tutti",
    filterSearchPlaceholder: "Cerca nei filtri",
    emptyText: "Senza dati",
    selectAll: "Seleziona pagina corrente",
    selectInvert: "Inverti selezione nella pagina corrente",
    selectNone: "Deseleziona tutto",
    selectionAll: "Seleziona tutto",
    sortTitle: "Ordina",
    expand: "Espandi riga",
    collapse: "Comprimi riga ",
    triggerDesc: "Clicca per ordinare in modo discendente",
    triggerAsc: "Clicca per ordinare in modo ascendente",
    cancelSort: "Clicca per eliminare l'ordinamento"
  },
  Modal: {
    okText: "OK",
    cancelText: "Annulla",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Annulla"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Cerca qui",
    itemUnit: "elemento",
    itemsUnit: "elementi",
    remove: "Elimina",
    selectCurrent: "Seleziona la pagina corrente",
    removeCurrent: "Rimuovi la pagina corrente",
    selectAll: "Seleziona tutti i dati",
    removeAll: "Rimuovi tutti i dati",
    selectInvert: "Inverti la pagina corrente"
  },
  Upload: {
    uploading: "Caricamento...",
    removeFile: "Rimuovi il file",
    uploadError: "Errore di caricamento",
    previewFile: "Anteprima file",
    downloadFile: "Scarica file"
  },
  Empty: {
    description: "Nessun dato"
  },
  Icon: {
    icon: "icona"
  },
  Text: {
    edit: "modifica",
    copy: "copia",
    copied: "copia effettuata",
    expand: "espandi"
  },
  PageHeader: {
    back: "Torna"
  },
  Form: {
    optional: "(opzionale)",
    defaultValidateMessages: {
      default: "Errore di convalida del campo ${label}",
      required: "Si prega di inserire ${label}",
      enum: "${label} deve essere uno di [${enum}]",
      whitespace: "${label} non può essere un carattere vuoto",
      date: {
        format: "Il formato della data ${label} non è valido",
        parse: "${label} non può essere convertito in una data",
        invalid: "${label} non è una data valida"
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
        len: "${label} deve avere ${len} caratteri",
        min: "${label} deve contenere almeno ${min} caratteri",
        max: "${label} deve contenere fino a ${max} caratteri",
        range: "${label} deve contenere tra ${min}-${max} caratteri"
      },
      number: {
        len: "${label} deve essere uguale a ${len}",
        min: "${label} valore minimo è ${min}",
        max: "${label} valor e massimo è ${max}",
        range: "${label} deve essere compreso tra ${min}-${max}"
      },
      array: {
        len: "Deve essere ${len} ${label}",
        min: "Almeno ${min} ${label}",
        max: "Massimo ${max} ${label}",
        range: "Il totale di ${label} deve essere compreso tra ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} non corrisponde al modello ${pattern}"
      }
    }
  },
  Image: {
    preview: "Anteprima"
  }
};
var F = k;
i.default = F;
var _ = i;
const E = /* @__PURE__ */ g(_), q = /* @__PURE__ */ $({
  __proto__: null,
  default: E
}, [_]);
export {
  q as i
};
