import { g as s } from "./index-43e0371a.mjs";
import { i as _ } from "./interopRequireDefault-40f894e3.mjs";
function M(n, p) {
  for (var c = 0; c < p.length; c++) {
    const e = p[c];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const f = Object.getOwnPropertyDescriptor(e, t);
          f && Object.defineProperty(n, t, f.get ? f : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var k = {
  // Options.jsx
  items_per_page: "/ стр",
  jump_to: "Оди на",
  jump_to_confirm: "потврди",
  page: "",
  // Pagination.jsx
  prev_page: "Претходна страница",
  next_page: "Наредна страница",
  prev_5: "Претходни 5 страници",
  next_5: "Наредни 5 страници",
  prev_3: "Претходни 3 страници",
  next_3: "Наредни 3 страници",
  page_size: "Page Size"
};
o.default = k;
var d = {}, a = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var g = {
  locale: "mk_MK",
  today: "Денес",
  now: "Сега",
  backToToday: "Назад до денес",
  ok: "ОК",
  clear: "Избриши",
  month: "Месец",
  year: "Година",
  timeSelect: "Избери време",
  dateSelect: "Избери датум",
  monthSelect: "Избери месец",
  yearSelect: "Избери година",
  decadeSelect: "Избери деценија",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Претходен месец (PageUp)",
  nextMonth: "Нареден месец (PageDown)",
  previousYear: "Претходна година (Control + left)",
  nextYear: "Наредна година (Control + right)",
  previousDecade: "Претходна деценија",
  nextDecade: "Наредна деценија",
  previousCentury: "Претходен век",
  nextCentury: "Нареден век"
}, y = g;
u.default = y;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const P = {
  placeholder: "Избери време"
};
var $ = P;
r.default = $;
var m = _.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var b = m(u), x = m(r);
const K = {
  lang: Object.assign({
    placeholder: "Избери датум",
    rangePlaceholder: ["Од датум", "До датум"]
  }, b.default),
  timePickerLocale: Object.assign({}, x.default)
};
var j = K;
a.default = j;
var Y = _.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var O = Y(a), T = O.default;
d.default = T;
var i = _.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var h = i(o), D = i(d), F = i(a), S = i(r);
const C = {
  locale: "mk",
  Pagination: h.default,
  DatePicker: F.default,
  TimePicker: S.default,
  Calendar: D.default,
  global: {
    placeholder: "Ве молиме означете"
  },
  Table: {
    filterTitle: "Мени за филтрирање",
    filterConfirm: "ОК",
    filterReset: "Избриши",
    selectAll: "Одбери страница",
    selectInvert: "Инвертирај страница"
  },
  Modal: {
    okText: "ОК",
    cancelText: "Откажи",
    justOkText: "ОК"
  },
  Popconfirm: {
    okText: "ОК",
    cancelText: "Откажи"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Пребарај тука",
    itemUnit: "предмет",
    itemsUnit: "предмети"
  },
  Upload: {
    uploading: "Се прикачува...",
    removeFile: "Избриши фајл",
    uploadError: "Грешка при прикачување",
    previewFile: "Прикажи фајл",
    downloadFile: "Преземи фајл"
  },
  Empty: {
    description: "Нема податоци"
  },
  Icon: {
    icon: "Икона"
  },
  Text: {
    edit: "Уреди",
    copy: "Копирај",
    copied: "Копирано",
    expand: "Зголеми"
  },
  PageHeader: {
    back: "Назад"
  }
};
var w = C;
l.default = w;
var v = l;
const R = /* @__PURE__ */ s(v), U = /* @__PURE__ */ M({
  __proto__: null,
  default: R
}, [v]);
export {
  U as m
};
