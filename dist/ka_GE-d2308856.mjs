import { g as v } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function g(c, s) {
  for (var f = 0; f < s.length; f++) {
    const a = s[f];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in c)) {
          const m = Object.getOwnPropertyDescriptor(a, l);
          m && Object.defineProperty(c, l, m.get ? m : {
            enumerable: !0,
            get: () => a[l]
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
  items_per_page: "/ გვერდი.",
  jump_to: "გადასვლა",
  jump_to_confirm: "დადასტურება",
  page: "",
  // Pagination.jsx
  prev_page: "წინა გვერდი",
  next_page: "შემდეგი გვერდი",
  prev_5: "წინა 5 გვერდი",
  next_5: "შემდეგი 5 გვერდი",
  prev_3: "წინა 3 გვერდი",
  next_3: "შემდეგი 3 გვერდი",
  page_size: "Page Size"
};
n.default = b;
var i = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var k = {
  locale: "ka_GE",
  today: "დღეს",
  now: "ახლა",
  backToToday: "მიმდინარე თარიღი",
  ok: "OK",
  clear: "გასუფთავება",
  month: "თვე",
  year: "წელი",
  timeSelect: "დროის არჩევა",
  dateSelect: "თარიღის არჩევა",
  weekSelect: "კვირის არჩევა",
  monthSelect: "თვის არჩევა",
  yearSelect: "წლის არჩევა",
  decadeSelect: "ათწლეულის არჩევა",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "წინა თვე (PageUp)",
  nextMonth: "მომდევნო თვე (PageDown)",
  previousYear: "წინა წელი (Control + left)",
  nextYear: "მომდევნო წელი (Control + right)",
  previousDecade: "წინა ათწლეული",
  nextDecade: "მომდევნო ათწლეული",
  previousCentury: "გასული საუკუნე",
  nextCentury: "მომდევნო საუკუნე"
}, x = k;
d.default = x;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const y = {
  placeholder: "აირჩიეთ დრო",
  rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"]
};
var P = y;
r.default = P;
var _ = p.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var h = _(d), E = _(r);
const T = {
  lang: Object.assign({
    placeholder: "აირჩიეთ თარიღი",
    yearPlaceholder: "აირჩიეთ წელი",
    quarterPlaceholder: "აირჩიეთ მეოთხედი",
    monthPlaceholder: "აირჩიეთ თვე",
    weekPlaceholder: "აირჩიეთ კვირა",
    rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"],
    rangeYearPlaceholder: ["საწყისი წელი", "საბოლოო წელი"],
    rangeMonthPlaceholder: ["საწყისი თვე", "საბოლოო თვე"],
    rangeWeekPlaceholder: ["საწყისი კვირა", "საბოლოო კვირა"]
  }, h.default),
  timePickerLocale: Object.assign({}, E.default)
};
var j = T;
t.default = j;
var G = p.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var Y = G(t), O = Y.default;
i.default = O;
var u = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var D = u(n), M = u(i), S = u(t), w = u(r);
const e = "${label} არ არის სწორი ${type}", C = {
  locale: "ka",
  Pagination: D.default,
  DatePicker: S.default,
  TimePicker: w.default,
  Calendar: M.default,
  global: {
    placeholder: "გთხოვთ აირჩიოთ"
  },
  Table: {
    filterTitle: "ფილტრის მენიუ",
    filterConfirm: "კარგი",
    filterReset: "გასუფთავება",
    filterEmptyText: "ფილტრები არაა",
    emptyText: "ინფორმაცია არაა",
    selectAll: "აირჩიეთ მიმდინარე გვერდი",
    selectInvert: "შეაბრუნეთ მიმდინარე გვერდი",
    selectNone: "მონაცემების გასუფთავება",
    selectionAll: "ყველას მონიშვნა",
    sortTitle: "დალაგება",
    expand: "სტრიქონის გაშლა",
    collapse: "სტრიქონის შეკუმშვა",
    triggerDesc: "დაღმავალი დალაგება",
    triggerAsc: "აღმავალი დალაგება",
    cancelSort: "დალაგების გაუქმება"
  },
  Modal: {
    okText: "კარგი",
    cancelText: "გაუქმება",
    justOkText: "ოკ"
  },
  Popconfirm: {
    okText: "კარგი",
    cancelText: "გაუქმება"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "მოძებნე აქ",
    itemUnit: "ერთეული",
    itemsUnit: "ერთეულები",
    remove: "ამოშლა",
    selectCurrent: "მიმდინარე გვერდის არჩევა",
    removeCurrent: "მიმდინარე გვერდის ამოშლა",
    selectAll: "ყველას მონიშვნა",
    removeAll: "ყველას წაშლა",
    selectInvert: "მიმდინარე გვერდის შებრუნება"
  },
  Upload: {
    uploading: "იტვირთება...",
    removeFile: "ფაილის ამოშლა",
    uploadError: "ატვირთვის შეცდომა",
    previewFile: "ფაილის გადახედვა",
    downloadFile: "ფაილის ჩამოტვირთვა"
  },
  Empty: {
    description: "ინფორმაცია არაა"
  },
  Icon: {
    icon: "ხატულა"
  },
  Text: {
    edit: "რედაქტირება",
    copy: "ასლი",
    copied: "ასლი აღებულია",
    expand: "გაშლა"
  },
  PageHeader: {
    back: "უკან"
  },
  Form: {
    optional: "(არასავალდებულო)",
    defaultValidateMessages: {
      default: "ველის შემოწმების შეცდომა ${label}-ისთვის",
      required: "გთხოვთ შეიყვანეთ ${label}",
      enum: "${label} უნდა იყოს ერთ-ერთი [${enum}]-დან",
      whitespace: "${label} არ შეიძლება იყოს ცარიელი სიმბოლო",
      date: {
        format: "${label} თარიღის ფორმატი არასწორია",
        parse: "${label} თარიღში კონვერტირება არ არის შესაძლებელი",
        invalid: "${label} არასწორი თარიღია"
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
        len: "${label} უნდა იყოს ${len} სიმბოლო",
        min: "${label} უნდა იყოს სულ მცირე ${min} სიმბოლო",
        max: "${label} უნდა იყოს მაქსიმუმ ${max} სიმბოლო",
        range: "${label} უნდა იყოს ${min}-${max} სიმბოლოს შორის"
      },
      number: {
        len: "${label} უნდა იყოს ${len} ტოლი",
        min: "${label} უნდა იყოს მინუმიმ ${min}",
        max: "${label} უნდა იყოს მაქსიმუმ ${max}",
        range: "${label} უნდა იყოს ${min}-${max} შორის"
      },
      array: {
        len: "უნდა იყოს ${len} ${label}",
        min: "სულ მცირე ${min} ${label}",
        max: "არაუმეტეს ${max} ${label}",
        range: "${label}-ის რაოდენობა უნდა იყოს ${min}-${max} შორის"
      },
      pattern: {
        mismatch: "${label} არ ერგება შაბლონს ${pattern}"
      }
    }
  },
  Image: {
    preview: "გადახედვა"
  }
};
var F = C;
o.default = F;
var $ = o;
const A = /* @__PURE__ */ v($), I = /* @__PURE__ */ g({
  __proto__: null,
  default: A
}, [$]);
export {
  I as k
};
