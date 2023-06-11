import { g as v } from "./index-43e0371a.mjs";
import { i as s } from "./interopRequireDefault-40f894e3.mjs";
function b(c, p) {
  for (var m = 0; m < p.length; m++) {
    const a = p[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in c)) {
          const f = Object.getOwnPropertyDescriptor(a, t);
          f && Object.defineProperty(c, t, f.get ? f : {
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
  items_per_page: "/ الصفحة",
  jump_to: "الذهاب إلى",
  jump_to_confirm: "تأكيد",
  page: "الصفحة",
  // Pagination.jsx
  prev_page: "الصفحة السابقة",
  next_page: "الصفحة التالية",
  prev_5: "خمس صفحات سابقة",
  next_5: "خمس صفحات تالية",
  prev_3: "ثلاث صفحات سابقة",
  next_3: "ثلاث صفحات تالية",
  page_size: "مقاس الصفحه"
};
n.default = g;
var i = {}, r = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var Y = {
  locale: "ar_EG",
  today: "اليوم",
  now: "الأن",
  backToToday: "العودة إلى اليوم",
  ok: "تأكيد",
  clear: "مسح",
  month: "الشهر",
  year: "السنة",
  timeSelect: "اختيار الوقت",
  dateSelect: "اختيار التاريخ",
  monthSelect: "اختيار الشهر",
  yearSelect: "اختيار السنة",
  decadeSelect: "اختيار العقد",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "الشهر السابق (PageUp)",
  nextMonth: "الشهر التالى(PageDown)",
  previousYear: "العام السابق (Control + left)",
  nextYear: "العام التالى (Control + right)",
  previousDecade: "العقد السابق",
  nextDecade: "العقد التالى",
  previousCentury: "القرن السابق",
  nextCentury: "القرن التالى"
}, x = Y;
d.default = x;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const y = {
  placeholder: "اختيار الوقت"
};
var E = y;
l.default = E;
var _ = s.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var M = _(d), P = _(l);
const h = {
  lang: Object.assign({
    placeholder: "اختيار التاريخ",
    rangePlaceholder: ["البداية", "النهاية"]
  }, M.default),
  timePickerLocale: Object.assign({}, P.default),
  dateFormat: "DD-MM-YYYY",
  monthFormat: "MM-YYYY",
  dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
  weekFormat: "wo-YYYY"
};
var D = h;
r.default = D;
var j = s.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var G = j(r), T = G.default;
i.default = T;
var u = s.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var O = u(n), F = u(i), k = u(r), w = u(l);
const e = "ليس ${label} من نوع ${type} صالحًا", S = {
  locale: "ar",
  Pagination: O.default,
  DatePicker: k.default,
  TimePicker: w.default,
  Calendar: F.default,
  global: {
    placeholder: "يرجى التحديد"
  },
  Table: {
    filterTitle: "الفلاتر",
    filterConfirm: "تأكيد",
    filterReset: "إعادة ضبط",
    selectAll: "اختيار الكل",
    selectInvert: "إلغاء الاختيار",
    selectionAll: "حدد جميع البيانات",
    sortTitle: "رتب",
    expand: "توسيع الصف",
    collapse: "طي الصف",
    triggerDesc: "ترتيب تنازلي",
    triggerAsc: "ترتيب تصاعدي",
    cancelSort: "إلغاء الترتيب"
  },
  Modal: {
    okText: "تأكيد",
    cancelText: "إلغاء",
    justOkText: "تأكيد"
  },
  Popconfirm: {
    okText: "تأكيد",
    cancelText: "إلغاء"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ابحث هنا",
    itemUnit: "عنصر",
    itemsUnit: "عناصر"
  },
  Upload: {
    uploading: "جاري الرفع...",
    removeFile: "احذف الملف",
    uploadError: "مشكلة فى الرفع",
    previewFile: "استعرض الملف",
    downloadFile: "تحميل الملف"
  },
  Empty: {
    description: "لا توجد بيانات"
  },
  Icon: {
    icon: "أيقونة"
  },
  Text: {
    edit: "تعديل",
    copy: "نسخ",
    copied: "نقل",
    expand: "وسع"
  },
  PageHeader: {
    back: "عودة"
  },
  Form: {
    defaultValidateMessages: {
      default: "خطأ في حقل الإدخال ${label}",
      required: "يرجى إدخال ${label}",
      enum: "${label} يجب أن يكون واحدا من [${enum}]",
      whitespace: "${label} لا يمكن أن يكون حرفًا فارغًا",
      date: {
        format: "${label} تنسيق التاريخ غير صحيح",
        parse: "${label} لا يمكن تحويلها إلى تاريخ",
        invalid: "تاريخ ${label} غير صحيح"
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
        len: "يجب ${label} ان يكون ${len} أحرف",
        min: "${label} على الأقل ${min} أحرف",
        max: "${label} يصل إلى ${max} أحرف",
        range: "يجب ${label} ان يكون مابين ${min}-${max} أحرف"
      },
      number: {
        len: "${len} ان يساوي ${label} يجب",
        min: "${min} الأدنى هو ${label} حد",
        max: "${max} الأقصى هو ${label} حد",
        range: "${max}-${min} ان يكون مابين ${label} يجب"
      },
      array: {
        len: "يجب أن يكون ${label} طوله ${len}",
        min: "يجب أن يكون ${label} طوله الأدنى ${min}",
        max: "يجب أن يكون ${label} طوله الأقصى ${max}",
        range: "يجب أن يكون ${label} طوله مابين ${min}-${max}"
      },
      pattern: {
        mismatch: "لا يتطابق ${label} مع ${pattern}"
      }
    }
  }
};
var C = S;
o.default = C;
var $ = o;
const q = /* @__PURE__ */ v($), R = /* @__PURE__ */ b({
  __proto__: null,
  default: q
}, [$]);
export {
  R as a
};
