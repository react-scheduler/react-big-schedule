import { g as v } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
function b(c, p) {
  for (var f = 0; f < p.length; f++) {
    const a = p[f];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in c)) {
          const s = Object.getOwnPropertyDescriptor(a, r);
          s && Object.defineProperty(c, r, s.get ? s : {
            enumerable: !0,
            get: () => a[r]
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
  items_per_page: "/ стр.",
  jump_to: "Перейти",
  jump_to_confirm: "подтвердить",
  page: "Страница",
  // Pagination.jsx
  prev_page: "Назад",
  next_page: "Вперед",
  prev_5: "Предыдущие 5",
  next_5: "Следующие 5",
  prev_3: "Предыдущие 3",
  next_3: "Следующие 3",
  page_size: "размер страницы"
};
n.default = g;
var u = {}, l = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var x = {
  locale: "ru_RU",
  today: "Сегодня",
  now: "Сейчас",
  backToToday: "Текущая дата",
  ok: "ОК",
  clear: "Очистить",
  month: "Месяц",
  year: "Год",
  timeSelect: "Выбрать время",
  dateSelect: "Выбрать дату",
  monthSelect: "Выбрать месяц",
  yearSelect: "Выбрать год",
  decadeSelect: "Выбрать десятилетие",
  yearFormat: "YYYY",
  dateFormat: "D-M-YYYY",
  dayFormat: "D",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Предыдущий месяц (PageUp)",
  nextMonth: "Следующий месяц (PageDown)",
  previousYear: "Предыдущий год (Control + left)",
  nextYear: "Следующий год (Control + right)",
  previousDecade: "Предыдущее десятилетие",
  nextDecade: "Следущее десятилетие",
  previousCentury: "Предыдущий век",
  nextCentury: "Следующий век"
}, h = x;
i.default = h;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const y = {
  placeholder: "Выберите время",
  rangePlaceholder: ["Время начала", "Время окончания"]
};
var P = y;
t.default = P;
var _ = m.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var R = _(i), U = _(t);
const T = {
  lang: Object.assign({
    placeholder: "Выберите дату",
    yearPlaceholder: "Выберите год",
    quarterPlaceholder: "Выберите квартал",
    monthPlaceholder: "Выберите месяц",
    weekPlaceholder: "Выберите неделю",
    rangePlaceholder: ["Начальная дата", "Конечная дата"],
    rangeYearPlaceholder: ["Начальный год", "Год окончания"],
    rangeMonthPlaceholder: ["Начальный месяц", "Конечный месяц"],
    rangeWeekPlaceholder: ["Начальная неделя", "Конечная неделя"]
  }, R.default),
  timePickerLocale: Object.assign({}, U.default)
};
var O = T;
l.default = O;
var j = m.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var Y = j(l), D = Y.default;
u.default = D;
var d = m.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = d(n), k = d(u), C = d(l), F = d(t);
const e = "${label} не является типом ${type}", S = {
  locale: "ru",
  Pagination: M.default,
  DatePicker: C.default,
  TimePicker: F.default,
  Calendar: k.default,
  global: {
    placeholder: "Пожалуйста выберите"
  },
  Table: {
    filterTitle: "Фильтр",
    filterConfirm: "OK",
    filterReset: "Сбросить",
    filterEmptyText: "Без фильтров",
    filterCheckall: "Выбрать все элементы",
    filterSearchPlaceholder: "Поиск в фильтрах",
    emptyText: "Нет данных",
    selectAll: "Выбрать всё",
    selectInvert: "Инвертировать выбор",
    selectNone: "Очистить все данные",
    selectionAll: "Выбрать все данные",
    sortTitle: "Сортировка",
    expand: "Развернуть строку",
    collapse: "Свернуть строку",
    triggerDesc: "Нажмите для сортировки по убыванию",
    triggerAsc: "Нажмите для сортировки по возрастанию",
    cancelSort: "Нажмите, чтобы отменить сортировку"
  },
  Tour: {
    Next: "Далее",
    Previous: "Назад",
    Finish: "Завершить"
  },
  Modal: {
    okText: "OK",
    cancelText: "Отмена",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Отмена"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Поиск",
    itemUnit: "элем.",
    itemsUnit: "элем.",
    remove: "Удалить",
    selectAll: "Выбрать все данные",
    selectCurrent: "Выбрать текущую страницу",
    selectInvert: "Инвертировать выбор",
    removeAll: "Удалить все данные",
    removeCurrent: "Удалить текущую страницу"
  },
  Upload: {
    uploading: "Загрузка...",
    removeFile: "Удалить файл",
    uploadError: "При загрузке произошла ошибка",
    previewFile: "Предпросмотр файла",
    downloadFile: "Загрузить файл"
  },
  Empty: {
    description: "Нет данных"
  },
  Icon: {
    icon: "иконка"
  },
  Text: {
    edit: "Редактировать",
    copy: "Копировать",
    copied: "Скопировано",
    expand: "Раскрыть"
  },
  PageHeader: {
    back: "Назад"
  },
  Form: {
    optional: "(необязательно)",
    defaultValidateMessages: {
      default: "Ошибка проверки поля ${label}",
      required: "Пожалуйста, введите ${label}",
      enum: "${label} должен быть одним из [${enum}]",
      whitespace: "${label} не может быть пустым",
      date: {
        format: "${label} не правильный формат даты",
        parse: "${label} не может быть преобразовано в дату",
        invalid: "${label} не является корректной датой"
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
        len: "${label} должна быть ${len} символов",
        min: "${label} должна быть больше или равна ${min} символов",
        max: "${label} должна быть меньше или равна ${max} символов",
        range: "Длина ${label} должна быть между ${min}-${max} символами"
      },
      number: {
        len: "${label} должна быть равна ${len}",
        min: "${label} должна быть больше или равна ${min}",
        max: "${label} должна быть меньше или равна ${max}",
        range: "${label} должна быть между ${min}-${max}"
      },
      array: {
        len: "Количество элементов ${label} должно быть равно ${len}",
        min: "Количество элементов ${label} должно быть больше или равно ${min}",
        max: "Количество элементов ${label} должно быть меньше или равно ${max}",
        range: "Количество элементов ${label} должно быть между ${min} и ${max}"
      },
      pattern: {
        mismatch: "${label} не соответствует шаблону ${pattern}"
      }
    }
  },
  Image: {
    preview: "Предпросмотр"
  },
  QRCode: {
    expired: "QR-код устарел",
    refresh: "Обновить"
  }
};
var w = S;
o.default = w;
var $ = o;
const A = /* @__PURE__ */ v($), I = /* @__PURE__ */ b({
  __proto__: null,
  default: A
}, [$]);
export {
  I as r
};
