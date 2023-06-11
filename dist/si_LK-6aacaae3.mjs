import { g as v } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
function b(u, p) {
  for (var s = 0; s < p.length; s++) {
    const a = p[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in u)) {
          const f = Object.getOwnPropertyDescriptor(a, l);
          f && Object.defineProperty(u, l, f.get ? f : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var o = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var g = {
  // Options.jsx
  items_per_page: "/ පිටුව",
  jump_to: "වෙත යන්න",
  jump_to_confirm: "තහවුරු",
  page: "පිටුව",
  // Pagination.jsx
  prev_page: "කලින් පිටුව",
  next_page: "ඊළඟ පිටුව",
  prev_5: "කලින් පිටු 5",
  next_5: "ඊළඟ පිටු 5",
  prev_3: "කලින් පිටු 3",
  next_3: "ඊළඟ පිටු 3",
  page_size: "පිටුවේ ප්‍රමාණය"
};
i.default = g;
var t = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var x = {
  locale: "si_LK",
  today: "අද",
  now: "දැන්",
  backToToday: "අදට ආපසු",
  ok: "හරි",
  clear: "හිස් කරන්න",
  month: "මාසය",
  year: "අවුරුද්ද",
  timeSelect: "වේලාවක් තෝරන්න",
  dateSelect: "දිනයක් තෝරන්න",
  weekSelect: "සතියක් තෝරන්න",
  monthSelect: "මාසයක් තෝරන්න",
  yearSelect: "අවුරුද්දක් තෝරන්න",
  decadeSelect: "දශකයක් තෝරන්න",
  yearFormat: "YYYY",
  dateFormat: "YYYY/M/D",
  dayFormat: "D",
  dateTimeFormat: "YYYY/M/D HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "කලින් මාසය (පිටුව ඉහළට)",
  nextMonth: "ඊළඟ මාසය (පිටුව පහළට)",
  previousYear: "පසුගිය අවුරුද්ද (Control + වම)",
  nextYear: "ඊළඟ අවුරුද්ද (Control + දකුණ)",
  previousDecade: "පසුගිය දශකය",
  nextDecade: "ඊළඟ දශකය",
  previousCentury: "පසුගිය සියවස",
  nextCentury: "ඊළඟ සියවස"
}, y = x;
n.default = y;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const h = {
  placeholder: "වේලාව තෝරන්න",
  rangePlaceholder: ["ආරම්භක වේලාව", "නිමවන වේලාව"]
};
var P = h;
r.default = P;
var _ = m.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var L = _(n), T = _(r);
const j = {
  lang: Object.assign({
    placeholder: "දිනය තෝරන්න",
    yearPlaceholder: "අවුරුද්ද තෝරන්න",
    quarterPlaceholder: "කාර්තුව තෝරන්න",
    monthPlaceholder: "මාසය තෝරන්න",
    weekPlaceholder: "සතිය තෝරන්න",
    rangePlaceholder: ["ආරම්භක දිනය", "නිමවන දිනය"],
    rangeYearPlaceholder: ["ආර්ම්භක අවුරුද්ද", "නිමවන අවුරුද්ද"],
    rangeQuarterPlaceholder: ["ආරම්භක කාර්තුව", "නිමවන කාර්තුව"],
    rangeMonthPlaceholder: ["ආරම්භක මාසය", "නිමවන මාසය"],
    rangeWeekPlaceholder: ["ආරම්භක සතිය", "නිමවන සතිය"]
  }, L.default),
  timePickerLocale: Object.assign({}, T.default)
};
var K = j;
t.default = K;
var d = {}, Y = m.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var k = Y(t), M = k.default;
d.default = M;
var c = m.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var O = c(i), D = c(t), C = c(r), S = c(d);
const e = "${label} වලංගු ${type} ක් නොවේ", F = {
  locale: "si",
  Pagination: O.default,
  DatePicker: D.default,
  TimePicker: C.default,
  Calendar: S.default,
  global: {
    placeholder: "කරුණාකර තෝරන්න"
  },
  Table: {
    filterTitle: "පෙරහන්",
    filterConfirm: "හරි",
    filterReset: "යළි සකසන්න",
    filterEmptyText: "පෙරහන් නැත",
    filterCheckall: "සියළු අථක තෝරන්න",
    filterSearchPlaceholder: "පෙරහන් තුළ සොයන්න",
    emptyText: "දත්ත නැත",
    selectAll: "වත්මන් පිටුව තෝරන්න",
    selectInvert: "වත්මන් පිටුව යටියනය",
    selectNone: "සියළු දත්ත ඉවතලන්න",
    selectionAll: "සියළු දත්ත තෝරන්න",
    sortTitle: "පෙළගැසීම",
    expand: "පේළිය දිගහරින්න",
    collapse: "පේළිය හකුළන්න",
    triggerDesc: "අවරෝහණව පෙළගැසීමට ඔබන්න",
    triggerAsc: "ආරෝහණව පෙළගැසීමට ඔබන්න",
    cancelSort: "පෙළගැසීම අවලංගු කිරීමට ඔබන්න"
  },
  Modal: {
    okText: "හරි",
    cancelText: "අවලංගු කරන්න",
    justOkText: "හරි"
  },
  Popconfirm: {
    okText: "හරි",
    cancelText: "අවලංගු කරන්න"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "මෙතැන සොයන්න",
    itemUnit: "අථකය",
    itemsUnit: "අථක",
    remove: "ඉවත් කරන්න",
    selectCurrent: "වත්මන් පිටුව තෝරන්න",
    removeCurrent: "වත්මන් පිටුව ඉවත් කරන්න",
    selectAll: "සියළු දත්ත තෝරන්න",
    removeAll: "සියළු දත්ත ඉවතලන්න",
    selectInvert: "වත්මන් පිටුව යටියනය"
  },
  Upload: {
    uploading: "උඩුගත වෙමින්...",
    removeFile: "ගොනුව ඉවතලන්න",
    uploadError: "උඩුගත වීමේ දෝෂයකි",
    previewFile: "ගොනුවේ පෙරදසුන",
    downloadFile: "ගොනුව බාගන්න"
  },
  Empty: {
    description: "දත්ත නැත"
  },
  Icon: {
    icon: "නිරූපකය"
  },
  Text: {
    edit: "සංස්කරණය",
    copy: "පිටපත්",
    copied: "පිටපත් විය",
    expand: "විහිදුවන්න"
  },
  PageHeader: {
    back: "ආපසු"
  },
  Form: {
    optional: "(විකල්පයකි)",
    defaultValidateMessages: {
      default: "${label} සඳහා ක්‍ෂේත්‍රය වලංගුකරණයේ දෝෂයකි",
      required: "${label} ඇතුල් කරන්න",
      enum: "[${enum}] වලින් එකක් ${label} විය යුතුය",
      whitespace: "${label} හිස් අකුරක් නොවිය යුතුය",
      date: {
        format: "${label} දිනයේ ආකෘතිය වැරදිය",
        parse: "${label} දිනයකට පරිවර්තනය කළ නොහැකිය",
        invalid: "${label} වලංගු නොවන දිනයකි"
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
        len: "${label} අකුරු ${len}ක් විය යුතුය",
        min: "${label} අවමය අකුරු ${min}ක් විය යුතුය",
        max: "${label} අකුරු ${max}ක් දක්වා විය යුතුය",
        range: "${label} අකුරු ${min}-${max}ක් අතර විය යුතුය"
      },
      number: {
        len: "${label} නිසැකව ${len} සමාන විය යුතුය",
        min: "${label} අවමය ${min} විය යුතුය",
        max: "${label} උපරිමය ${max} විය යුතුය",
        range: "${label} නිසැකව ${min}-${max} අතර විය යුතුය"
      },
      array: {
        len: "${len} ${label} විය යුතුය",
        min: "අවම වශයෙන් ${min} ${label}",
        max: "උපරිම වශයෙන් ${max} ${label}",
        range: "${label} ගණන ${min}-${max} අතර විය යුතුය"
      },
      pattern: {
        mismatch: "${pattern} රටාවට ${label} නොගැළපේ"
      }
    }
  },
  Image: {
    preview: "පෙරදසුන"
  }
};
var w = F;
o.default = w;
var $ = o;
const A = /* @__PURE__ */ v($), R = /* @__PURE__ */ b({
  __proto__: null,
  default: A
}, [$]);
export {
  R as s
};
