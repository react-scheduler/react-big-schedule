import { g as s } from "./index-43e0371a.mjs";
import { i as b } from "./interopRequireDefault-40f894e3.mjs";
function g(f, m) {
  for (var _ = 0; _ < m.length; _++) {
    const a = m[_];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in f)) {
          const c = Object.getOwnPropertyDescriptor(a, t);
          c && Object.defineProperty(f, t, c.get ? c : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
var o = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var v = {
  // Options.jsx
  items_per_page: "/ страница",
  jump_to: "Към",
  jump_to_confirm: "потвърждавам",
  page: "",
  // Pagination.jsx
  prev_page: "Предишна страница",
  next_page: "Следваща страница",
  prev_5: "Предишни 5 страници",
  next_5: "Следващи 5 страници",
  prev_3: "Предишни 3 страници",
  next_3: "Следващи 3 страници",
  page_size: "Page Size"
};
n.default = v;
var i = {}, l = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var y = {
  locale: "bg_BG",
  today: "Днес",
  now: "Сега",
  backToToday: "Към днес",
  ok: "Добре",
  clear: "Изчистване",
  month: "Месец",
  year: "Година",
  timeSelect: "Избор на час",
  dateSelect: "Избор на дата",
  monthSelect: "Избор на месец",
  yearSelect: "Избор на година",
  decadeSelect: "Десетилетие",
  yearFormat: "YYYY",
  dateFormat: "D M YYYY",
  dayFormat: "D",
  dateTimeFormat: "D M YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Предишен месец (PageUp)",
  nextMonth: "Следващ месец (PageDown)",
  previousYear: "Последна година (Control + left)",
  nextYear: "Следваща година (Control + right)",
  previousDecade: "Предишно десетилетие",
  nextDecade: "Следващо десетилетие",
  previousCentury: "Последен век",
  nextCentury: "Следващ век"
}, x = y;
u.default = x;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const P = {
  placeholder: "Избор на час"
};
var B = P;
r.default = B;
var $ = b.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var j = $(u), G = $(r);
const h = {
  lang: Object.assign({
    placeholder: "Избор на дата",
    rangePlaceholder: ["Начална", "Крайна"]
  }, j.default),
  timePickerLocale: Object.assign({}, G.default)
};
var Y = h;
l.default = Y;
var O = b.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var T = O(l), D = T.default;
i.default = D;
var d = b.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = d(n), k = d(i), F = d(l), S = d(r);
const e = "${label} не е валиден ${type}", C = {
  locale: "bg",
  Pagination: M.default,
  DatePicker: F.default,
  TimePicker: S.default,
  Calendar: k.default,
  Table: {
    filterTitle: "Филтриране",
    filterConfirm: "Добре",
    filterReset: "Нулриане",
    selectAll: "Избор на текуща страница",
    selectInvert: "Обръщане"
  },
  Modal: {
    okText: "Добре",
    cancelText: "Отказ",
    justOkText: "Добре"
  },
  Popconfirm: {
    okText: "Добре",
    cancelText: "Отказ"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Търсене",
    itemUnit: "избор",
    itemsUnit: "избори"
  },
  Upload: {
    uploading: "Качване...",
    removeFile: "Премахване",
    uploadError: "Грешка при качването",
    previewFile: "Преглед",
    downloadFile: "Свали файл"
  },
  Empty: {
    description: "Няма данни"
  },
  Form: {
    optional: "（по желание）",
    defaultValidateMessages: {
      default: "грешка при проверка на полето ${label}",
      required: "Моля, въведете ${label}",
      enum: "${label} трябва да е един от [${enum}]",
      whitespace: "${label} Не може да бъде нулев знак",
      date: {
        format: "${label} невалиден формат на датата",
        parse: "${label} не може да се преобразува в дата",
        invalid: "${label} е невалидна дата"
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
        len: "${label} ще бъде ${len} знака",
        min: "${label} най-малко ${min} герои",
        max: "${label} повечето ${max} герои",
        range: "${label} Трябва да е вътре ${min}-${max} между знаци"
      },
      number: {
        len: "${label} трябва да е равно на ${len}",
        min: "${label} Минималната стойност е ${min}",
        max: "${label} Максималната стойност е ${max}",
        range: "${label} Трябва да е вътре ${min}-${max} между"
      },
      array: {
        len: "ще бъде ${len} индивидуален ${label}",
        min: "най-малко ${min} индивидуален ${label}",
        max: "повечето ${max} индивидуален ${label}",
        range: "${label} Количеството трябва да е вътре ${min}-${max} между"
      },
      pattern: {
        mismatch: "${label} не отговаря на модела ${pattern}"
      }
    }
  }
};
var w = C;
o.default = w;
var p = o;
const q = /* @__PURE__ */ s(p), U = /* @__PURE__ */ g({
  __proto__: null,
  default: q
}, [p]);
export {
  U as b
};
