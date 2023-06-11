import { g } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
function $(c, v) {
  for (var u = 0; u < v.length; u++) {
    const a = v[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in c)) {
          const p = Object.getOwnPropertyDescriptor(a, r);
          p && Object.defineProperty(c, r, p.get ? p : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var x = {
  // Options.jsx
  items_per_page: "/ página",
  jump_to: "Vá até",
  jump_to_confirm: "confirme",
  page: "Página",
  // Pagination.jsx
  prev_page: "Página anterior",
  next_page: "Próxima página",
  prev_5: "5 páginas anteriores",
  next_5: "5 próximas páginas",
  prev_3: "3 páginas anteriores",
  next_3: "3 próximas páginas",
  page_size: "tamanho da página"
};
i.default = x;
var n = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var b = {
  locale: "pt_BR",
  today: "Hoje",
  now: "Agora",
  backToToday: "Voltar para hoje",
  ok: "OK",
  clear: "Limpar",
  month: "Mês",
  year: "Ano",
  timeSelect: "Selecionar hora",
  dateSelect: "Selecionar data",
  monthSelect: "Escolher mês",
  yearSelect: "Escolher ano",
  decadeSelect: "Escolher década",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "Mês anterior (PageUp)",
  nextMonth: "Próximo mês (PageDown)",
  previousYear: "Ano anterior (Control + esquerda)",
  nextYear: "Próximo ano (Control + direita)",
  previousDecade: "Década anterior",
  nextDecade: "Próxima década",
  previousCentury: "Século anterior",
  nextCentury: "Próximo século",
  shortWeekDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
}, P = b;
d.default = P;
var o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
const h = {
  placeholder: "Hora"
};
var y = h;
o.default = y;
var f = m.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var R = f(d), O = f(o);
const S = {
  lang: Object.assign({
    placeholder: "Selecionar data",
    rangePlaceholder: ["Data inicial", "Data final"]
  }, R.default),
  timePickerLocale: Object.assign({}, O.default)
};
var D = S;
t.default = D;
var T = m.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var j = T(t), B = j.default;
n.default = B;
var s = m.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var M = s(i), C = s(n), A = s(t), Y = s(o);
const e = "${label} não é um ${type} válido", q = {
  locale: "pt-br",
  Pagination: M.default,
  DatePicker: A.default,
  TimePicker: Y.default,
  Calendar: C.default,
  global: {
    placeholder: "Por favor escolha"
  },
  Table: {
    filterTitle: "Menu de Filtro",
    filterConfirm: "OK",
    filterReset: "Resetar",
    filterEmptyText: "Sem filtros",
    filterCheckall: "Selecionar todos os itens",
    filterSearchPlaceholder: "Pesquisar nos filtros",
    emptyText: "Sem conteúdo",
    selectAll: "Selecionar página atual",
    selectInvert: "Inverter seleção",
    selectNone: "Apagar todo o conteúdo",
    selectionAll: "Selecionar todo o conteúdo",
    sortTitle: "Ordenar título",
    expand: "Expandir linha",
    collapse: "Colapsar linha",
    triggerDesc: "Clique organiza por descendente",
    triggerAsc: "Clique organiza por ascendente",
    cancelSort: "Clique para cancelar organização"
  },
  Tour: {
    Next: "Próximo",
    Previous: "Anterior",
    Finish: "Finalizar"
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
    searchPlaceholder: "Procurar",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remover",
    selectCurrent: "Selecionar página atual",
    removeCurrent: "Remover página atual",
    selectAll: "Selecionar todos",
    removeAll: "Remover todos",
    selectInvert: "Inverter seleção atual"
  },
  Upload: {
    uploading: "Enviando...",
    removeFile: "Remover arquivo",
    uploadError: "Erro no envio",
    previewFile: "Visualizar arquivo",
    downloadFile: "Baixar arquivo"
  },
  Empty: {
    description: "Não há dados"
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
    back: "Retornar"
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
        mismatch: "${label} não se encaixa no padrão ${pattern}"
      }
    }
  },
  Image: {
    preview: "Pré-visualização"
  }
};
var F = q;
l.default = F;
var _ = l;
const k = /* @__PURE__ */ g(_), w = /* @__PURE__ */ $({
  __proto__: null,
  default: k
}, [_]);
export {
  w as p
};
