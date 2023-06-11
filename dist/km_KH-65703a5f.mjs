import { g as b } from "./index-43e0371a.mjs";
import { i as f } from "./interopRequireDefault-40f894e3.mjs";
function v(u, p) {
  for (var c = 0; c < p.length; c++) {
    const a = p[c];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in u)) {
          const s = Object.getOwnPropertyDescriptor(a, t);
          s && Object.defineProperty(u, t, s.get ? s : {
            enumerable: !0,
            get: () => a[t]
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
var g = {
  // Options.jsx
  items_per_page: "/ ទំព័រ",
  jump_to: "លោត​ទៅ",
  jump_to_confirm: "បញ្ជាក់",
  page: "ទំព័រ",
  // Pagination.jsx
  prev_page: "ទំព័រ​មុន",
  next_page: "ទំព័រ​​បន្ទាប់",
  prev_5: "៥ ទំព័រថយក្រោយ",
  next_5: "៥ ទំព័រទៅមុខ",
  prev_3: "៣ ទំព័រថយក្រោយ",
  next_3: "៣ ទំព័រទៅមុខ",
  page_size: "Page Size"
};
n.default = g;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var h = {
  locale: "km",
  today: "ថ្ងៃនេះ",
  now: "ឥឡូវ​នេះ",
  backToToday: "ត្រលប់ទៅថ្ងៃនេះ",
  ok: "កំណត់",
  timeSelect: "រយៈពេលជ្រើសរើស",
  dateSelect: "ជ្រើសរើសកាលបរិច្ឆេទ",
  weekSelect: "ជ្រើសរើសសប្តាហ៍",
  clear: "ច្បាស់",
  month: "ខែ",
  year: "ឆ្នាំ",
  previousMonth: "ខែមុន (ឡើងទំព័រ)",
  nextMonth: "ខែបន្ទាប់ (ប៊ូតុងចុះទំព័រ)",
  monthSelect: "ជ្រើសរើសខែ",
  yearSelect: "ជ្រើសរើសឆ្នាំ",
  decadeSelect: "ជ្រើសរើសអាយុ",
  yearFormat: "YYYY",
  dayFormat: "D",
  dateFormat: "YYYY-M-D",
  dateTimeFormat: "YYYY-M-D HH:mm:ss",
  previousYear: "ឆ្នាំមុន (Controlគ្រាប់ចុចបូកព្រួញខាងឆ្វេង)",
  nextYear: "ឆ្នាំក្រោយ (Control គ្រាប់ចុចបូកព្រួញស្ដាំ)",
  previousDecade: "ជំនាន់ចុងក្រោយ",
  nextDecade: "ជំនាន់​ក្រោយ",
  previousCentury: "សតវត្សចុងក្រោយ",
  nextCentury: "សតវត្សរ៍បន្ទាប់"
}, k = h;
d.default = k;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const x = {
  placeholder: "រើសម៉ោង",
  rangePlaceholder: ["ម៉ោងចប់ផ្ដើម", "ម៉ោងបញ្ចប់"]
};
var y = x;
r.default = y;
var _ = f.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var P = _(d), H = _(r);
const T = {
  lang: Object.assign({
    placeholder: "រើសថ្ងៃ",
    yearPlaceholder: "រើសឆ្នាំ",
    quarterPlaceholder: "រើសត្រីមាស",
    monthPlaceholder: "រើសខែ",
    weekPlaceholder: "រើសសប្តាហ៍",
    rangePlaceholder: ["ថ្ងៃចាប់ផ្ដើម", "ថ្ងៃបញ្ចប់"],
    rangeYearPlaceholder: ["ឆ្នាំចាប់ផ្ដើម", "ឆ្នាំបញ្ចប់"],
    rangeMonthPlaceholder: ["ខែចាប់ផ្ដើម", "ខែបញ្ចប់"],
    rangeWeekPlaceholder: ["សប្ដាហ៍ចាប់ផ្ដើម", "សប្ដាហ៍បញ្ចប់"]
  }, P.default),
  timePickerLocale: Object.assign({}, H.default)
};
var j = T;
l.default = j;
var K = f.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var M = K(l), Y = M.default;
i.default = Y;
var m = f.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var O = m(n), D = m(i), w = m(l), F = m(r);
const e = "${label} is not a valid ${type}", S = {
  locale: "km",
  Pagination: O.default,
  DatePicker: w.default,
  TimePicker: F.default,
  Calendar: D.default,
  Table: {
    filterTitle: "បញ្ចីតម្រៀប",
    filterConfirm: "យល់ព្រម",
    filterReset: "ត្រឡប់ដើម",
    filterEmptyText: "គ្មានបញ្ចីតម្រៀប",
    emptyText: "គ្មានទិន្នន័យ",
    selectAll: "រើសក្នុងទំព័រនេះ",
    selectInvert: "បញ្ច្រាសក្នុងទំព័រនេះ",
    selectNone: "លុបចេញទាំងអស់",
    selectionAll: "រើសយកទាំងអស់",
    sortTitle: "តម្រៀប",
    expand: "ពន្លាត",
    collapse: "បិតបាំង",
    triggerDesc: "ចុចដើម្បីរៀបតាមលំដាប់ធំ",
    triggerAsc: "ចុចដើម្បីរៀបតាមលំដាប់តូច​",
    cancelSort: "ចុចដើម្បីបោះបង់"
  },
  Modal: {
    okText: "យល់ព្រម",
    cancelText: "បោះបង់",
    justOkText: "យល់ព្រម"
  },
  Popconfirm: {
    okText: "យល់ព្រម",
    cancelText: "បោះបង់"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ស្វែងរកនៅទីនេះ",
    itemUnit: "",
    itemsUnit: "items"
  },
  Upload: {
    uploading: "កំពុងបញ្ចូលឡើង...",
    removeFile: "លុបឯកសារ",
    uploadError: "បញ្ចូលមិនជោកជ័យ",
    previewFile: "មើលឯកសារ",
    downloadFile: "ទាញយកឯកសារ"
  },
  Empty: {
    description: "គ្មានទិន្នន័យ"
  },
  Form: {
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
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
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  }
};
var q = S;
o.default = q;
var $ = o;
const A = /* @__PURE__ */ b($), R = /* @__PURE__ */ v({
  __proto__: null,
  default: A
}, [$]);
export {
  R as k
};
