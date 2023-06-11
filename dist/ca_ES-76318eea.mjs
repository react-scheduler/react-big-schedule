import { g as _ } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function $(s, f) {
  for (var u = 0; u < f.length; u++) {
    const a = f[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in s)) {
          const m = Object.getOwnPropertyDescriptor(a, r);
          m && Object.defineProperty(s, r, m.get ? m : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ pàgina",
  jump_to: "Anar a",
  jump_to_confirm: "Confirma",
  page: "",
  // Pagination.jsx
  prev_page: "Pàgina prèvia",
  next_page: "Pàgina següent",
  prev_5: "5 pàgines prèvies",
  next_5: "5 pàgines següents",
  prev_3: "3 pàgines prèvies",
  next_3: "3 pàgines següents",
  page_size: "mida de la pàgina"
};
i.default = b;
var o = {}, t = {}, c = {};
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var x = {
  locale: "ca_ES",
  today: "Avui",
  now: "Ara",
  backToToday: "Tornar a avui",
  ok: "Acceptar",
  clear: "Netejar",
  month: "Mes",
  year: "Any",
  timeSelect: "Seleccionar hora",
  dateSelect: "Seleccionar data",
  monthSelect: "Escollir un mes",
  yearSelect: "Escollir un any",
  decadeSelect: "Escollir una dècada",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Mes anterior (PageUp)",
  nextMonth: "Mes següent (PageDown)",
  previousYear: "Any anterior (Control + left)",
  nextYear: "Mes següent (Control + right)",
  previousDecade: "Dècada anterior",
  nextDecade: "Dècada següent",
  previousCentury: "Segle anterior",
  nextCentury: "Segle següent"
}, S = x;
c.default = S;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const h = {
  placeholder: "Seleccionar hora"
};
var E = h;
l.default = E;
var v = p.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var y = v(c), D = v(l);
const P = {
  lang: Object.assign({
    placeholder: "Seleccionar data",
    rangePlaceholder: ["Data inicial", "Data final"]
  }, y.default),
  timePickerLocale: Object.assign({}, D.default)
};
var j = P;
t.default = j;
var T = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = T(t), O = M.default;
o.default = O;
var d = p.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var C = d(i), A = d(o), Y = d(t), k = d(l);
const e = "${label} no és un ${type} vàlid", F = {
  locale: "ca",
  Pagination: C.default,
  DatePicker: Y.default,
  TimePicker: k.default,
  Calendar: A.default,
  global: {
    placeholder: "Seleccionar"
  },
  Table: {
    filterTitle: "Filtrar el menú",
    filterConfirm: "D’acord",
    filterReset: "Reiniciar",
    filterEmptyText: "Sense filtres",
    selectAll: "Seleccionar la pàgina actual",
    selectInvert: "Invertir la selecció",
    selectionAll: "Seleccionar-ho tot",
    sortTitle: "Ordenar",
    expand: "Ampliar la fila",
    collapse: "Plegar la fila",
    triggerDesc: "Ordre descendent",
    triggerAsc: "Ordre ascendent",
    cancelSort: "Desactivar l’ordre"
  },
  Modal: {
    okText: "D’acord",
    cancelText: "Cancel·lar",
    justOkText: "D’acord"
  },
  Popconfirm: {
    okText: "D’acord",
    cancelText: "Cancel·lar"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Cercar",
    itemUnit: "ítem",
    itemsUnit: "ítems",
    remove: "Eliminar",
    selectCurrent: "Seleccionar la pàgina actual",
    removeCurrent: "Eliminar la selecció",
    selectAll: "Seleccionar-ho tot",
    removeAll: "Eliminar-ho tot",
    selectInvert: "Invertir la selecció"
  },
  Upload: {
    uploading: "Carregant…",
    removeFile: "Eliminar el fitxer",
    uploadError: "Error de càrrega",
    previewFile: "Vista prèvia del fitxer",
    downloadFile: "Baixar el fitxer"
  },
  Empty: {
    description: "Sense dades"
  },
  Icon: {
    icon: "icona"
  },
  Text: {
    edit: "Editar",
    copy: "Copiar",
    copied: "Copiat",
    expand: "Ampliar"
  },
  PageHeader: {
    back: "Enrere"
  },
  Form: {
    optional: "(opcional)",
    defaultValidateMessages: {
      default: "Error de validació del camp ${label}",
      required: "Introdueix ${label}",
      enum: "${label} ha de ser un de [${enum}]",
      whitespace: "${label} no pot ser un caràcter en blanc",
      date: {
        format: "El format de la data de ${label} és invàlid",
        parse: "${label} no es pot convertir a cap data",
        invalid: "${label} és una data invàlida"
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
        len: "${label} ha de ser de ${len} caràcters",
        min: "${label} ha de tenir com a mínim ${min} caràcters",
        max: "${label} ha de tenir com a màxim ${max} caràcters",
        range: "${label} ha d’estar entre ${min} i ${max} caràcters"
      },
      number: {
        len: "${label} ha de ser igual a ${len}",
        min: "${label} ha de tenir un valor mínim de ${min}",
        max: "${label} ha de tenir un valor màxim de ${max}",
        range: "${label} ha de tenir un valor entre ${min} i ${max}"
      },
      array: {
        len: "La llargada de ${label} ha de ser de ${len}",
        min: "La llargada de ${label} ha de ser com a mínim de ${min}",
        max: "La llargada de ${label} ha de ser com a màxim de ${max}",
        range: "La llargada de ${label} ha d’estar entre ${min} i ${max}"
      },
      pattern: {
        mismatch: "${label} no coincideix amb el patró ${pattern}"
      }
    }
  }
};
var w = F;
n.default = w;
var g = n;
const I = /* @__PURE__ */ _(g), L = /* @__PURE__ */ $({
  __proto__: null,
  default: I
}, [g]);
export {
  L as c
};
