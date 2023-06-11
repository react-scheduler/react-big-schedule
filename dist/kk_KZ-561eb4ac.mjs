import { g as v } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function k(c, s) {
  for (var f = 0; f < s.length; f++) {
    const a = s[f];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in c)) {
          const m = Object.getOwnPropertyDescriptor(a, t);
          m && Object.defineProperty(c, t, m.get ? m : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var o = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ бет",
  jump_to: "Секіру",
  jump_to_confirm: "Растау",
  page: "",
  // Pagination.jsx
  prev_page: "Артқа",
  next_page: "Алға",
  prev_5: "Алдыңғы 5",
  next_5: "Келесі 5",
  prev_3: "Алдыңғы 3",
  next_3: "Келесі 3",
  page_size: "Page Size"
};
n.default = b;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var g = {
  locale: "kk_KZ",
  today: "Бүгін",
  now: "Қазір",
  backToToday: "Ағымдағы күн",
  ok: "Таңдау",
  clear: "Таза",
  month: "Ай",
  year: "Жыл",
  timeSelect: "Уақытты таңдау",
  dateSelect: "Күнді таңдау",
  monthSelect: "Айды таңдаңыз",
  yearSelect: "Жылды таңдаңыз",
  decadeSelect: "Онжылды таңдаңыз",
  yearFormat: "YYYY",
  dateFormat: "D-M-YYYY",
  dayFormat: "D",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Алдыңғы ай (PageUp)",
  nextMonth: "Келесі ай (PageDown)",
  previousYear: "Алдыңғы жыл (Control + left)",
  nextYear: "Келесі жыл (Control + right)",
  previousDecade: "Алдыңғы онжылдық",
  nextDecade: "Келесі онжылдық",
  previousCentury: "Алдыңғы ғасыр",
  nextCentury: "Келесі ғасыр"
}, y = g;
d.default = y;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const x = {
  placeholder: "Уақытты таңдаңыз",
  rangePlaceholder: ["Бастау уақыты", "Аяқталу уақыты"]
};
var P = x;
r.default = P;
var _ = p.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var h = _(d), K = _(r);
const T = {
  lang: Object.assign({
    placeholder: "Күнді таңдаңыз",
    yearPlaceholder: "Жылды таңдаңыз",
    quarterPlaceholder: "Тоқсанды таңдаңыз",
    monthPlaceholder: "Айды таңдаңыз",
    weekPlaceholder: "Аптаны таңдаңыз",
    rangePlaceholder: ["Бастау күні", "Аяқталу күні"],
    rangeYearPlaceholder: ["Бастау жылы", "Аяқталу жылы"],
    rangeMonthPlaceholder: ["Бастау айы", "Аяқталу айы"],
    rangeWeekPlaceholder: ["Бастау апта", "Аяқталу апта"]
  }, h.default),
  timePickerLocale: Object.assign({}, K.default)
};
var j = T;
l.default = j;
var Z = p.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var Y = Z(l), O = Y.default;
i.default = O;
var u = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var D = u(n), M = u(i), C = u(l), F = u(r);
const e = "${label} ${type} типі емес", S = {
  locale: "kk",
  Pagination: D.default,
  DatePicker: C.default,
  TimePicker: F.default,
  Calendar: M.default,
  global: {
    placeholder: "Таңдаңыз"
  },
  Table: {
    filterTitle: "Фильтр",
    filterConfirm: "OK",
    filterReset: "Тазарту",
    filterEmptyText: "Фильтр жоқ",
    emptyText: "Деректер жоқ",
    selectAll: "Барлығын таңдау",
    selectInvert: "Таңдауды төңкеру",
    selectionAll: "Барлық деректерді таңдаңыз",
    sortTitle: "Сұрыптау",
    expand: "Жолды жазу",
    collapse: "Жолды бүктеу",
    triggerDesc: "Төмендеуді сұрыптау үшін басыңыз",
    triggerAsc: "Өсу ретімен сұрыптау үшін басыңыз",
    cancelSort: "Сұрыптаудан бас тарту үшін басыңыз"
  },
  Modal: {
    okText: "Жарайды",
    cancelText: "Болдырмау",
    justOkText: "Жарайды"
  },
  Popconfirm: {
    okText: "Жарайды",
    cancelText: "Болдырмау"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Іздеу",
    itemUnit: "элемент.",
    itemsUnit: "элемент.",
    remove: "Жою",
    selectAll: "Барлық деректерді таңдау",
    selectCurrent: "Ағымдағы бетті таңдау",
    selectInvert: "Кері тәртіпте көрсету",
    removeAll: "Барлық деректерді жою",
    removeCurrent: "Ағымдағы парақты өшіру"
  },
  Upload: {
    uploading: "Жүктеу...",
    removeFile: "Файлды жою",
    uploadError: "Жүктеу кезінде қате пайда болды",
    previewFile: "Файлды алдын ала қарау",
    downloadFile: "Файлды жүктеу"
  },
  Empty: {
    description: "Деректер жоқ"
  },
  Icon: {
    icon: "белгішесі"
  },
  Text: {
    edit: "Өңдеу",
    copy: "Көшіру",
    copied: "Көшірілді",
    expand: "Жазу"
  },
  PageHeader: {
    back: "Артқа"
  },
  Form: {
    defaultValidateMessages: {
      default: "${label} өрісін тексеру қателігі",
      required: "${label} енгізіңіз",
      enum: "${label} [${enum}] қатарынан болуы керек",
      whitespace: "${label} бос болмауы керек",
      date: {
        format: "${label} жарамды күн форматы емес",
        parse: "${label} күнге түрлендірілмейді",
        invalid: "${label} жарамды күн емес"
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
        len: "${label} ${len} таңбадан тұруы керек",
        min: "${label} ${min} таңбадан үлкен немесе оған тең болуы керек",
        max: "${label} ${max} таңбадан кем немесе оған тең болуы керек",
        range: "${label} ұзындығы ${min}-${max} таңба аралығында болуы керек"
      },
      number: {
        len: "${label} ${len} тең болуы керек",
        min: "${label} ${min} мәнінен үлкен немесе оған тең болуы керек",
        max: "${label} ${max} мәнінен аз немесе оған тең болуы керек"
      },
      array: {
        len: "${label} элементтерінің саны ${len} тең болуы керек",
        min: "${label} элементтерінің саны ${min} көп немесе оған тең болуы керек",
        max: "${label} элементтерінің саны ${max} аз немесе оған тең болуы керек",
        range: "${label} элементтерінің саны ${min} - ${max} аралығында болуы керек"
      },
      pattern: {
        mismatch: "${label} ${pattern} мен сәйкес келмейді"
      }
    }
  }
};
var w = S;
o.default = w;
var $ = o;
const A = /* @__PURE__ */ v($), R = /* @__PURE__ */ k({
  __proto__: null,
  default: A
}, [$]);
export {
  R as k
};
