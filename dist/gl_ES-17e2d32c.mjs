import { g as _ } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function $(u, f) {
  for (var s = 0; s < f.length; s++) {
    const a = f[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in u)) {
          const m = Object.getOwnPropertyDescriptor(a, r);
          m && Object.defineProperty(u, r, m.get ? m : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var o = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ páxina",
  jump_to: "Ir a",
  jump_to_confirm: "confirmar",
  page: "",
  // Pagination.jsx
  prev_page: "Páxina anterior",
  next_page: "Páxina seguinte",
  prev_5: "5 páxinas previas",
  next_5: "5 páxinas seguintes",
  prev_3: "3 páxinas previas",
  next_3: "3 páxinas seguintes",
  page_size: "Page Size"
};
n.default = b;
var i = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var x = {
  locale: "gl_ES",
  today: "Hoxe",
  now: "Agora",
  backToToday: "Voltar a hoxe",
  ok: "Aceptar",
  clear: "Limpar",
  month: "Mes",
  year: "Ano",
  timeSelect: "Seleccionar hora",
  dateSelect: "Seleccionar data",
  monthSelect: "Elexir un mes",
  yearSelect: "Elexir un año",
  decadeSelect: "Elexir unha década",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Mes anterior (PageUp)",
  nextMonth: "Mes seguinte (PageDown)",
  previousYear: "Ano anterior (Control + left)",
  nextYear: "Ano seguinte (Control + right)",
  previousDecade: "Década anterior",
  nextDecade: "Década seguinte",
  previousCentury: "Século anterior",
  nextCentury: "Século seguinte"
}, S = x;
d.default = S;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const E = {
  placeholder: "Escolla hora"
};
var y = E;
l.default = y;
var v = p.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var h = v(d), P = v(l);
const D = {
  lang: Object.assign({
    placeholder: "Escolla data",
    rangePlaceholder: ["Data inicial", "Data final"]
  }, h.default),
  timePickerLocale: Object.assign({}, P.default)
};
var j = D;
t.default = j;
var O = p.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var M = O(t), T = M.default;
i.default = T;
var c = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var Y = c(n), A = c(i), C = c(t), k = c(l);
const e = "${label} non é un ${type} válido", q = {
  locale: "gl",
  Pagination: Y.default,
  DatePicker: C.default,
  TimePicker: k.default,
  Calendar: A.default,
  global: {
    placeholder: "Escolla"
  },
  Table: {
    filterTitle: "Filtrar menú",
    filterConfirm: "Aceptar",
    filterReset: "Reiniciar",
    selectAll: "Seleccionar todo",
    selectInvert: "Invertir selección",
    sortTitle: "Ordenar"
  },
  Modal: {
    okText: "Aceptar",
    cancelText: "Cancelar",
    justOkText: "Aceptar"
  },
  Popconfirm: {
    okText: "Aceptar",
    cancelText: "Cancelar"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Buscar aquí",
    itemUnit: "elemento",
    itemsUnit: "elementos"
  },
  Upload: {
    uploading: "Subindo...",
    removeFile: "Eliminar arquivo",
    uploadError: "Error ao subir o arquivo",
    previewFile: "Vista previa",
    downloadFile: "Descargar arquivo"
  },
  Empty: {
    description: "Non hai datos"
  },
  Icon: {
    icon: "icona"
  },
  Text: {
    edit: "editar",
    copy: "copiar",
    copied: "copiado",
    expand: "expandir"
  },
  PageHeader: {
    back: "voltar"
  },
  Form: {
    defaultValidateMessages: {
      default: "Error de validación do campo ${label}",
      required: "Por favor complete ${label}",
      enum: "${label} ten que ser un de [${enum}]",
      whitespace: "${label} non pode ter ningún caracter en branco",
      date: {
        format: "O formato de data ${label} non é válido",
        parse: "${label} non se pode convertir a unha data",
        invalid: "${label} é unha data inválida"
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
        len: "${label} debe ter ${len} caracteres",
        min: "${label} debe ter como mínimo ${min} caracteres",
        max: "${label} debe ter ata ${max} caracteres",
        range: "${label} debe ter entre ${min}-${max} caracteres"
      },
      number: {
        len: "${label} debe ser igual a ${len}",
        min: "${label} valor mínimo é ${min}",
        max: "${label} valor máximo é ${max}",
        range: "${label} debe estar entre ${min}-${max}"
      },
      array: {
        len: "Debe ser ${len} ${label}",
        min: "Como mínimo ${min} ${label}",
        max: "Como máximo ${max} ${label}",
        range: "O valor de ${label} debe estar entre ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} non coincide co patrón ${pattern}"
      }
    }
  }
};
var F = q;
o.default = F;
var g = o;
const w = /* @__PURE__ */ _(g), I = /* @__PURE__ */ $({
  __proto__: null,
  default: w
}, [g]);
export {
  I as g
};
