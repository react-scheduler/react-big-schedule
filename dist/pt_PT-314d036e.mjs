import { g as _ } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
function $(s, v) {
  for (var u = 0; u < v.length; u++) {
    const a = v[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in s)) {
          const p = Object.getOwnPropertyDescriptor(a, r);
          p && Object.defineProperty(s, r, p.get ? p : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var P = {
  // Options.jsx
  items_per_page: "/ página",
  jump_to: "Saltar",
  jump_to_confirm: "confirmar",
  page: "Página",
  // Pagination.jsx
  prev_page: "Página Anterior",
  next_page: "Página Seguinte",
  prev_5: "Recuar 5 Páginas",
  next_5: "Avançar 5 Páginas",
  prev_3: "Recuar 3 Páginas",
  next_3: "Avançar 3 Páginas",
  page_size: "mărimea paginii"
};
n.default = P;
var i = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var b = {
  locale: "pt_PT",
  today: "Hoje",
  now: "Agora",
  backToToday: "Hoje",
  ok: "OK",
  clear: "Limpar",
  month: "Mês",
  year: "Ano",
  timeSelect: "Selecionar hora",
  dateSelect: "Selecionar data",
  monthSelect: "Selecionar mês",
  yearSelect: "Selecionar ano",
  decadeSelect: "Selecionar década",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Mês anterior (PageUp)",
  nextMonth: "Mês seguinte (PageDown)",
  previousYear: "Ano anterior (Control + left)",
  nextYear: "Ano seguinte (Control + right)",
  previousDecade: "Década anterior",
  nextDecade: "Década seguinte",
  previousCentury: "Século anterior",
  nextCentury: "Século seguinte",
  shortWeekDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
}, x = b;
d.default = x;
var o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
const y = {
  placeholder: "Hora"
};
var S = y;
o.default = S;
var f = m.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var T = f(d), h = f(o);
const M = {
  lang: Object.assign(Object.assign({}, T.default), {
    placeholder: "Data",
    rangePlaceholder: ["Data inicial", "Data final"],
    today: "Hoje",
    now: "Agora",
    backToToday: "Hoje",
    ok: "OK",
    clear: "Limpar",
    month: "Mês",
    year: "Ano",
    timeSelect: "Hora",
    dateSelect: "Selecionar data",
    monthSelect: "Selecionar mês",
    yearSelect: "Selecionar ano",
    decadeSelect: "Selecionar década",
    yearFormat: "YYYY",
    dateFormat: "D/M/YYYY",
    dayFormat: "D",
    dateTimeFormat: "D/M/YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: !1,
    previousMonth: "Mês anterior (PageUp)",
    nextMonth: "Mês seguinte (PageDown)",
    previousYear: "Ano anterior (Control + left)",
    nextYear: "Ano seguinte (Control + right)",
    previousDecade: "Última década",
    nextDecade: "Próxima década",
    previousCentury: "Último século",
    nextCentury: "Próximo século"
  }),
  timePickerLocale: Object.assign(Object.assign({}, h.default), {
    placeholder: "Hora"
  })
};
var Y = M;
t.default = Y;
var D = m.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var O = D(t), A = O.default;
i.default = A;
var c = m.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var j = c(n), C = c(i), F = c(t), k = c(o);
const e = "${label} não é um ${type} válido", H = {
  locale: "pt",
  Pagination: j.default,
  DatePicker: F.default,
  TimePicker: k.default,
  Calendar: C.default,
  global: {
    placeholder: "Por favor escolha"
  },
  Table: {
    filterTitle: "Filtro",
    filterConfirm: "Aplicar",
    filterReset: "Reiniciar",
    filterEmptyText: "Sem filtros",
    filterCheckall: "Selecionar todos os itens",
    filterSearchPlaceholder: "Pesquisar nos filtros",
    emptyText: "Sem conteúdo",
    selectAll: "Selecionar página atual",
    selectInvert: "Inverter seleção",
    sortTitle: "Ordenação",
    selectNone: "Apagar todo o conteúdo",
    selectionAll: "Selecionar todo o conteúdo",
    expand: "Expandir linha",
    collapse: "Colapsar linha",
    triggerDesc: "Clique organiza por descendente",
    triggerAsc: "Clique organiza por ascendente",
    cancelSort: "Clique para cancelar organização"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancelar",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancelar"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Procurar...",
    itemUnit: "item",
    itemsUnit: "itens",
    remove: "Remover",
    selectCurrent: "Selecionar página atual",
    removeCurrent: "Remover página atual",
    selectAll: "Selecionar tudo",
    removeAll: "Remover tudo",
    selectInvert: "Inverter a página actual"
  },
  Upload: {
    uploading: "A carregar...",
    removeFile: "Remover",
    uploadError: "Erro ao carregar",
    previewFile: "Pré-visualizar",
    downloadFile: "Baixar"
  },
  Empty: {
    description: "Sem resultados"
  },
  Icon: {
    icon: "ícone"
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
    optional: "(opcional)",
    defaultValidateMessages: {
      default: "Erro ${label} na validação de campo",
      required: "Por favor, insira ${label}",
      enum: "${label} deve ser um dos seguinte: [${enum}]",
      whitespace: "${label} não pode ser um carácter vazio",
      date: {
        format: " O formato de data ${label} é inválido",
        parse: "${label} não pode ser convertido para uma data",
        invalid: "${label} é uma data inválida"
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
        len: "${label} deve possuir ${len} caracteres",
        min: "${label} deve possuir ao menos ${min} caracteres",
        max: "${label} deve possuir no máximo ${max} caracteres",
        range: "${label} deve possuir entre ${min} e ${max} caracteres"
      },
      number: {
        len: "${label} deve ser igual à ${len}",
        min: "O valor mínimo de ${label} é ${min}",
        max: "O valor máximo de ${label} é ${max}",
        range: "${label} deve estar entre ${min} e ${max}"
      },
      array: {
        len: "Deve ser ${len} ${label}",
        min: "No mínimo ${min} ${label}",
        max: "No máximo ${max} ${label}",
        range: "A quantidade de ${label} deve estar entre ${min} e ${max}"
      },
      pattern: {
        mismatch: "${label} não se enquadra no padrão ${pattern}"
      }
    }
  },
  Image: {
    preview: "Pré-visualização"
  }
};
var R = H;
l.default = R;
var g = l;
const q = /* @__PURE__ */ _(g), E = /* @__PURE__ */ $({
  __proto__: null,
  default: q
}, [g]);
export {
  E as p
};
