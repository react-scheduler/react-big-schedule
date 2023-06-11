import { g as _ } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
function $(d, f) {
  for (var u = 0; u < f.length; u++) {
    const a = f[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in d)) {
          const p = Object.getOwnPropertyDescriptor(a, r);
          p && Object.defineProperty(d, r, p.get ? p : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var o = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ página",
  jump_to: "Ir a",
  jump_to_confirm: "confirmar",
  page: "Página",
  // Pagination.jsx
  prev_page: "Página anterior",
  next_page: "Página siguiente",
  prev_5: "5 páginas previas",
  next_5: "5 páginas siguientes",
  prev_3: "3 páginas previas",
  next_3: "3 páginas siguientes",
  page_size: "tamaño de página"
};
n.default = b;
var i = {}, t = {}, c = {};
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var S = {
  locale: "es_ES",
  today: "Hoy",
  now: "Ahora",
  backToToday: "Volver a hoy",
  ok: "Aceptar",
  clear: "Limpiar",
  month: "Mes",
  year: "Año",
  timeSelect: "Seleccionar hora",
  dateSelect: "Seleccionar fecha",
  monthSelect: "Elegir un mes",
  yearSelect: "Elegir un año",
  decadeSelect: "Elegir una década",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Mes anterior (PageUp)",
  nextMonth: "Mes siguiente (PageDown)",
  previousYear: "Año anterior (Control + left)",
  nextYear: "Año siguiente (Control + right)",
  previousDecade: "Década anterior",
  nextDecade: "Década siguiente",
  previousCentury: "Siglo anterior",
  nextCentury: "Siglo siguiente"
}, h = S;
c.default = h;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const E = {
  placeholder: "Seleccionar hora"
};
var x = E;
l.default = x;
var v = m.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var y = v(c), P = v(l);
const A = {
  lang: Object.assign({
    placeholder: "Seleccionar fecha",
    rangePlaceholder: ["Fecha inicial", "Fecha final"]
  }, y.default),
  timePickerLocale: Object.assign({}, P.default)
};
var C = A;
t.default = C;
var D = m.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var T = D(t), j = T.default;
i.default = j;
var s = m.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = s(n), O = s(i), Y = s(t), k = s(l);
const e = "${label} no es un ${type} válido", F = {
  locale: "es",
  Pagination: M.default,
  DatePicker: Y.default,
  TimePicker: k.default,
  Calendar: O.default,
  global: {
    placeholder: "Seleccione"
  },
  Table: {
    filterTitle: "Filtrar menú",
    filterConfirm: "Aceptar",
    filterReset: "Reiniciar",
    filterEmptyText: "Sin filtros",
    filterCheckall: "Seleccionar todo",
    filterSearchPlaceholder: "Buscar en filtros",
    emptyText: "Sin datos",
    selectAll: "Seleccionar todo",
    selectInvert: "Invertir selección",
    selectNone: "Vacíe todo",
    selectionAll: "Seleccionar todos los datos",
    sortTitle: "Ordenar",
    expand: "Expandir fila",
    collapse: "Colapsar fila",
    triggerDesc: "Click para ordenar en orden descendente",
    triggerAsc: "Click para ordenar en orden ascendente",
    cancelSort: "Click para cancelar ordenamiento"
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
    itemsUnit: "elementos",
    remove: "Eliminar",
    selectCurrent: "Seleccionar página actual",
    removeCurrent: "Remover página actual",
    selectAll: "Seleccionar todos los datos",
    removeAll: "Eliminar todos los datos",
    selectInvert: "Invertir página actual"
  },
  Upload: {
    uploading: "Subiendo...",
    removeFile: "Eliminar archivo",
    uploadError: "Error al subir el archivo",
    previewFile: "Vista previa",
    downloadFile: "Descargar archivo"
  },
  Empty: {
    description: "No hay datos"
  },
  Icon: {
    icon: "ícono"
  },
  Text: {
    edit: "Editar",
    copy: "Copiar",
    copied: "Copiado",
    expand: "Expandir"
  },
  PageHeader: {
    back: "Volver"
  },
  Form: {
    optional: "(opcional)",
    defaultValidateMessages: {
      default: "Error de validación del campo ${label}",
      required: "Por favor ingresar ${label}",
      enum: "${label} debe ser uno de [${enum}]",
      whitespace: "${label} no puede ser un carácter en blanco",
      date: {
        format: "El formato de fecha de ${label} es inválido",
        parse: "${label} no se puede convertir a una fecha",
        invalid: "${label} es una fecha inválida"
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
        len: "${label} debe tener ${len} caracteres",
        min: "${label} debe tener al menos ${min} caracteres",
        max: "${label} debe tener hasta ${max} caracteres",
        range: "${label} debe tener entre ${min}-${max} caracteres"
      },
      number: {
        len: "${label} debe ser igual a ${len}",
        min: "${label} valor mínimo es ${min}",
        max: "${label} valor máximo es ${max}",
        range: "${label} debe estar entre ${min}-${max}"
      },
      array: {
        len: "Debe ser ${len} ${label}",
        min: "Al menos ${min} ${label}",
        max: "A lo mucho ${max} ${label}",
        range: "El monto de ${label} debe estar entre ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} no coincide con el patrón ${pattern}"
      }
    }
  },
  Image: {
    preview: "Previsualización"
  }
};
var w = F;
o.default = w;
var g = o;
const I = /* @__PURE__ */ _(g), V = /* @__PURE__ */ $({
  __proto__: null,
  default: I
}, [g]);
export {
  V as e
};
