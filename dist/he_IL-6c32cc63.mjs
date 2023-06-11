import { g as v } from "./index-43e0371a.mjs";
import { i as _ } from "./interopRequireDefault-40f894e3.mjs";
function b(c, s) {
  for (var f = 0; f < s.length; f++) {
    const a = s[f];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in c)) {
          const p = Object.getOwnPropertyDescriptor(a, t);
          p && Object.defineProperty(c, t, p.get ? p : {
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
  items_per_page: "/ עמוד",
  jump_to: "עבור אל",
  jump_to_confirm: "אישור",
  page: "",
  // Pagination.jsx
  prev_page: "העמוד הקודם",
  next_page: "העמוד הבא",
  prev_5: "5 עמודים קודמים",
  next_5: "5 עמודים הבאים",
  prev_3: "3 עמודים קודמים",
  next_3: "3 עמודים הבאים",
  page_size: "Page Size"
};
n.default = g;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var h = {
  locale: "he_IL",
  today: "היום",
  now: "עכשיו",
  backToToday: "חזור להיום",
  ok: "אישור",
  clear: "איפוס",
  month: "חודש",
  year: "שנה",
  timeSelect: "בחר שעה",
  dateSelect: "בחר תאריך",
  weekSelect: "בחר שבוע",
  monthSelect: "בחר חודש",
  yearSelect: "בחר שנה",
  decadeSelect: "בחר עשור",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "חודש קודם (PageUp)",
  nextMonth: "חודש הבא (PageDown)",
  previousYear: "שנה שעברה (Control + left)",
  nextYear: "שנה הבאה (Control + right)",
  previousDecade: "העשור הקודם",
  nextDecade: "העשור הבא",
  previousCentury: "המאה הקודמת",
  nextCentury: "המאה הבאה"
}, x = h;
d.default = x;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const y = {
  placeholder: "בחר שעה"
};
var P = y;
r.default = P;
var m = _.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var I = m(d), L = m(r);
const j = {
  lang: Object.assign({
    placeholder: "בחר תאריך",
    rangePlaceholder: ["תאריך התחלה", "תאריך סיום"]
  }, I.default),
  timePickerLocale: Object.assign({}, L.default)
};
var T = j;
l.default = T;
var Y = _.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var D = Y(l), O = D.default;
i.default = O;
var u = _.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = u(n), k = u(i), S = u(l), F = u(r);
const e = "${label} הוא לא ${type} תקין", w = {
  locale: "he",
  Pagination: M.default,
  DatePicker: S.default,
  TimePicker: F.default,
  Calendar: k.default,
  global: {
    placeholder: "אנא בחר"
  },
  Table: {
    filterTitle: "תפריט סינון",
    filterConfirm: "אישור",
    filterReset: "איפוס",
    selectAll: "בחר הכל",
    selectInvert: "הפוך בחירה",
    selectionAll: "בחר את כל הנתונים",
    sortTitle: "מיון",
    expand: "הרחב שורה",
    collapse: "צמצם שורה",
    triggerDesc: "לחץ למיון לפי סדר יורד",
    triggerAsc: "לחץ למיון לפי סדר עולה",
    cancelSort: "לחץ כדי לבטל את המיון"
  },
  Modal: {
    okText: "אישור",
    cancelText: "ביטול",
    justOkText: "אישור"
  },
  Popconfirm: {
    okText: "אישור",
    cancelText: "ביטול"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "חפש כאן",
    itemUnit: "פריט",
    itemsUnit: "פריטים"
  },
  Upload: {
    uploading: "מעלה...",
    removeFile: "הסר קובץ",
    uploadError: "שגיאת העלאה",
    previewFile: "הצג קובץ",
    downloadFile: "הורד קובץ"
  },
  Empty: {
    description: "אין מידע"
  },
  Icon: {
    icon: "סמל"
  },
  Text: {
    edit: "ערוך",
    copy: "העתק",
    copied: "הועתק",
    expand: "הרחב"
  },
  PageHeader: {
    back: "חזרה"
  },
  Form: {
    defaultValidateMessages: {
      default: "ערך השדה שגוי ${label}",
      required: "בבקשה הזן ${label}",
      enum: "${label} חייב להיות אחד מערכים אלו [${enum}]",
      whitespace: "${label} לא יכול להיות ריק",
      date: {
        format: "${label} תאריך לא תקין",
        parse: "${label} לא ניתן להמיר לתאריך",
        invalid: "${label} הוא לא תאריך תקין"
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
        len: "${label} חייב להיות ${len} תווים",
        min: "${label} חייב להיות ${min} תווים",
        max: "${label} מקסימום ${max} תווים",
        range: "${label} חייב להיות בין ${min}-${max} תווים"
      },
      number: {
        len: "${label} חייב להיות שווה ל ${len}",
        min: "${label} ערך מינימלי הוא ${min}",
        max: "${label} ערך מקסימלי הוא ${max}",
        range: "${label} חייב להיות בין ${min}-${max}"
      },
      array: {
        len: "חייב להיות ${len} ${label}",
        min: "מינימום ${min} ${label}",
        max: "מקסימום ${max} ${label}",
        range: "הסכום של ${label} חייב להיות בין ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} לא תואם לתבנית ${pattern}"
      }
    }
  }
};
var C = w;
o.default = C;
var $ = o;
const q = /* @__PURE__ */ v($), E = /* @__PURE__ */ b({
  __proto__: null,
  default: q
}, [$]);
export {
  E as h
};
