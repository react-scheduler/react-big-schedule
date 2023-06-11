import { g as v } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function b(c, m) {
  for (var f = 0; f < m.length; f++) {
    const a = m[f];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in c)) {
          const s = Object.getOwnPropertyDescriptor(a, t);
          s && Object.defineProperty(c, t, s.get ? s : {
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
var g = {
  // Options.jsx
  items_per_page: "/ сторінці",
  jump_to: "Перейти",
  jump_to_confirm: "підтвердити",
  page: "",
  // Pagination.jsx
  prev_page: "Попередня сторінка",
  next_page: "Наступна сторінка",
  prev_5: "Попередні 5 сторінок",
  next_5: "Наступні 5 сторінок",
  prev_3: "Попередні 3 сторінки",
  next_3: "Наступні 3 сторінки",
  page_size: "Page Size"
};
n.default = g;
var u = {}, l = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var x = {
  locale: "uk_UA",
  today: "Сьогодні",
  now: "Зараз",
  backToToday: "Поточна дата",
  ok: "OK",
  clear: "Очистити",
  month: "Місяць",
  year: "Рік",
  timeSelect: "Обрати час",
  dateSelect: "Обрати дату",
  monthSelect: "Обрати місяць",
  yearSelect: "Обрати рік",
  decadeSelect: "Обрати десятиріччя",
  yearFormat: "YYYY",
  dateFormat: "D-M-YYYY",
  dayFormat: "D",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Попередній місяць (PageUp)",
  nextMonth: "Наступний місяць (PageDown)",
  previousYear: "Попередній рік (Control + left)",
  nextYear: "Наступний рік (Control + right)",
  previousDecade: "Попереднє десятиріччя",
  nextDecade: "Наступне десятиріччя",
  previousCentury: "Попереднє століття",
  nextCentury: "Наступне століття"
}, y = x;
i.default = y;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const k = {
  placeholder: "Оберіть час"
};
var A = k;
r.default = A;
var _ = p.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var h = _(i), P = _(r);
const U = {
  lang: Object.assign({
    placeholder: "Оберіть дату",
    rangePlaceholder: ["Початкова дата", "Кінцева дата"]
  }, h.default),
  timePickerLocale: Object.assign({}, P.default)
};
var T = U;
l.default = T;
var j = p.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var O = j(l), Y = O.default;
u.default = Y;
var d = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var D = d(n), M = d(u), C = d(l), F = d(r);
const e = "${label} не є типом ${type}", S = {
  locale: "uk",
  Pagination: D.default,
  DatePicker: C.default,
  TimePicker: F.default,
  Calendar: M.default,
  global: {
    placeholder: "Будь ласка, оберіть"
  },
  Table: {
    filterTitle: "Фільтрувати",
    filterConfirm: "OK",
    filterReset: "Скинути",
    filterEmptyText: "Фільтри відсутні",
    filterCheckall: "Обрати всі",
    filterSearchPlaceholder: "Пошук у фільтрах",
    emptyText: "Даних немає",
    selectAll: "Обрати всі на сторінці",
    selectInvert: "Інвертувати вибір",
    selectNone: "Очистити вибір",
    selectionAll: "Обрати всі",
    sortTitle: "Сортувати",
    expand: "Розгорнути рядок",
    collapse: "Згорнути рядок",
    triggerDesc: "Сортувати за спаданням",
    triggerAsc: "Сортувати за зростанням",
    cancelSort: "Відмінити сортування"
  },
  Tour: {
    Next: "Далі",
    Previous: "Назад",
    Finish: "Завершити"
  },
  Modal: {
    okText: "Гаразд",
    cancelText: "Скасувати",
    justOkText: "Гаразд"
  },
  Popconfirm: {
    okText: "Гаразд",
    cancelText: "Скасувати"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Введіть текст для пошуку",
    itemUnit: "елем.",
    itemsUnit: "елем.",
    remove: "Видалити",
    selectCurrent: "Вибрати поточну сторінку",
    removeCurrent: "Скасувати вибір на сторінці",
    selectAll: "Вибрати всі дані",
    removeAll: "Скасувати вибір",
    selectInvert: "Інвертувати поточну сторінку"
  },
  Upload: {
    uploading: "Завантаження ...",
    removeFile: "Видалити файл",
    uploadError: "Помилка завантаження",
    previewFile: "Попередній перегляд файлу",
    downloadFile: "Завантажити файл"
  },
  Empty: {
    description: "Даних немає"
  },
  Icon: {
    icon: "іконка"
  },
  Text: {
    edit: "Редагувати",
    copy: "Скопіювати",
    copied: "Скопійовано",
    expand: "Розширити"
  },
  PageHeader: {
    back: "Назад"
  },
  Form: {
    optional: "(опціонально)",
    defaultValidateMessages: {
      default: "Помилка валідації для поля ${label}",
      required: "Будь ласка, заповніть ${label}",
      enum: "Лише одне зі значень [${enum}] доступне для ${label}",
      whitespace: "Значення у полі ${label} не може бути пробілом",
      date: {
        format: "Не валідний формат дати у ${label}",
        parse: "Значення ${label} не може бути приведене до дати",
        invalid: "Не валідна дата у ${label}"
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
        len: "${label} має містити ${len} символів",
        min: "${label} має містити не менш, ніж ${min} символів",
        max: "${label} має містити не більш, ніж ${max} символів",
        range: "${label} має містити ${min}-${max} символів"
      },
      number: {
        len: "${label} має дорівнювати ${len}",
        min: "${label} має бути не менш, ніж ${min}",
        max: "${label} має бути не більш, ніж ${max}",
        range: "${label} має бути в межах ${min}-${max}"
      },
      array: {
        len: "${label} має містити ${len} елементи",
        min: "${label} має містити не менш, ніж ${min} елементи",
        max: "${label} має містити не більш, ніж ${max} елементи",
        range: "Кількість елементів в ${label} має бути в межах ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} не відповідає шаблону ${pattern}"
      }
    }
  },
  Image: {
    preview: "Попередній перегляд"
  },
  QRCode: {
    expired: "QR-код закінчився",
    refresh: "Оновити"
  }
};
var w = S;
o.default = w;
var $ = o;
const R = /* @__PURE__ */ v($), I = /* @__PURE__ */ b({
  __proto__: null,
  default: R
}, [$]);
export {
  I as u
};
