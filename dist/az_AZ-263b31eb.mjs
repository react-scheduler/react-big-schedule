import { g as $ } from "./index-43e0371a.mjs";
import { i as v } from "./interopRequireDefault-40f894e3.mjs";
function b(m, c) {
  for (var f = 0; f < c.length; f++) {
    const a = c[f];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in m)) {
          const s = Object.getOwnPropertyDescriptor(a, l);
          s && Object.defineProperty(m, l, s.get ? s : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }));
}
var i = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var x = {
  // Options.jsx
  items_per_page: "/ səhifə",
  jump_to: "Get",
  jump_to_confirm: "təsdiqlə",
  page: "",
  // Pagination.jsx
  prev_page: "Əvvəlki Səhifə",
  next_page: "Növbəti Səhifə",
  prev_5: "Əvvəlki 5 Səhifə",
  next_5: "Növbəti 5 Səhifə",
  prev_3: "Əvvəlki 3 Səhifə",
  next_3: "Növbəti 3 Səhifə",
  page_size: "Page Size"
};
n.default = x;
var o = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var y = {
  locale: "az_AZ",
  today: "Bugün",
  now: "İndi",
  backToToday: "Bugünə qayıt",
  ok: "Təsdiq",
  clear: "Təmizlə",
  month: "Ay",
  year: "İl",
  timeSelect: "vaxtı seç",
  dateSelect: "tarixi seç",
  weekSelect: "Həftə seç",
  monthSelect: "Ay seç",
  yearSelect: "il seç",
  decadeSelect: "Onillik seçin",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Əvvəlki ay (PageUp)",
  nextMonth: "Növbəti ay (PageDown)",
  previousYear: "Sonuncu il (Control + left)",
  nextYear: "Növbəti il (Control + right)",
  previousDecade: "Sonuncu onillik",
  nextDecade: "Növbəti onillik",
  previousCentury: "Sonuncu əsr",
  nextCentury: "Növbəti əsr"
}, g = y;
d.default = g;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const h = {
  placeholder: "Vaxtı seç"
};
var k = h;
r.default = k;
var p = v.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var z = p(d), A = p(r);
const S = {
  lang: Object.assign({
    placeholder: "Tarix seçin",
    rangePlaceholder: ["Başlama tarixi", "Bitmə tarixi"]
  }, z.default),
  timePickerLocale: Object.assign({}, A.default)
};
var T = S;
t.default = T;
var O = v.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = O(t), j = P.default;
o.default = j;
var u = v.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var Y = u(n), Z = u(o), M = u(t), D = u(r);
const e = "${label}Hökmlü deyil${type}", F = {
  locale: "az",
  Pagination: Y.default,
  DatePicker: M.default,
  TimePicker: D.default,
  Calendar: Z.default,
  Table: {
    filterTitle: "Filter menyu",
    filterConfirm: "Axtar",
    filterReset: "Sıfırla",
    emptyText: "Məlumat yoxdur",
    selectAll: "Cari səhifəni seç",
    selectInvert: "Invert current page"
  },
  Modal: {
    okText: "Bəli",
    cancelText: "Ləğv et",
    justOkText: "Bəli"
  },
  Popconfirm: {
    okText: "Bəli",
    cancelText: "Ləğv et"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "Tapılmadı",
    searchPlaceholder: "Burada axtar",
    itemUnit: "item",
    itemsUnit: "items"
  },
  Select: {
    notFoundContent: "Tapılmadı"
  },
  Upload: {
    uploading: "Yüklənir...",
    removeFile: "Faylı sil",
    uploadError: "Yükləmə xətası",
    previewFile: "Fayla önbaxış"
  },
  Form: {
    optional: "（Seçimli）",
    defaultValidateMessages: {
      default: "Sahə təsdiq xətası${label}",
      required: "Xahiş edirik daxil olun${label}",
      enum: "${label}Onlardan biri olmalıdır[${enum}]",
      whitespace: "${label}Null xarakter ola bilməz",
      date: {
        format: "${label}Tarix formatı hökmlü deyil",
        parse: "${label}Tarixi döndərmək mümkün deyil",
        invalid: "${label}səhv tarixdir"
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
        len: "${label}Olmalıdır${len}işarələr",
        min: "${label}ən az${min}işarələr",
        max: "${label}ən çox${max}işarələr",
        range: "${label}Olmalıdır${min}-${max}hərflər arasında"
      },
      number: {
        len: "${label}Bərabər olmalıdır${len}",
        min: "${label}Minimal dəyəri${min}",
        max: "${label}Maksimal qiymət:${max}",
        range: "${label}Olmalıdır${min}-${max}aralarında"
      },
      array: {
        len: "Olmalıdır${len}parça${label}",
        min: "ən az${min}parça${label}",
        max: "ən çox${max}parça${label}",
        range: "${label}miqdarıOlmalıdır${min}-${max}aralarında"
      },
      pattern: {
        mismatch: "${label}Şablona uyğun gəlmir${pattern}"
      }
    }
  }
};
var q = F;
i.default = q;
var _ = i;
const B = /* @__PURE__ */ $(_), w = /* @__PURE__ */ b({
  __proto__: null,
  default: B
}, [_]);
export {
  w as a
};
