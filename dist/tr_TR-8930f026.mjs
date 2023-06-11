import { g as $ } from "./index-43e0371a.mjs";
import { i as f } from "./interopRequireDefault-40f894e3.mjs";
function g(s, y) {
  for (var u = 0; u < y.length; u++) {
    const a = y[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in s)) {
          const c = Object.getOwnPropertyDescriptor(a, l);
          c && Object.defineProperty(s, l, c.get ? c : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var o = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var v = {
  // Options.jsx
  items_per_page: "/ sayfa",
  jump_to: "Git",
  jump_to_confirm: "onayla",
  page: "Sayfa",
  // Pagination.jsx
  prev_page: "Önceki Sayfa",
  next_page: "Sonraki Sayfa",
  prev_5: "Önceki 5 Sayfa",
  next_5: "Sonraki 5 Sayfa",
  prev_3: "Önceki 3 Sayfa",
  next_3: "Sonraki 3 Sayfa",
  page_size: "sayfa boyutu"
};
n.default = v;
var i = {}, r = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var b = {
  locale: "tr_TR",
  today: "Bugün",
  now: "Şimdi",
  backToToday: "Bugüne Geri Dön",
  ok: "tamam",
  clear: "Temizle",
  month: "Ay",
  year: "Yıl",
  timeSelect: "Zaman Seç",
  dateSelect: "Tarih Seç",
  monthSelect: "Ay Seç",
  yearSelect: "Yıl Seç",
  decadeSelect: "On Yıl Seç",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Önceki Ay (PageUp)",
  nextMonth: "Sonraki Ay (PageDown)",
  previousYear: "Önceki Yıl (Control + Sol)",
  nextYear: "Sonraki Yıl (Control + Sağ)",
  previousDecade: "Önceki On Yıl",
  nextDecade: "Sonraki On Yıl",
  previousCentury: "Önceki Yüzyıl",
  nextCentury: "Sonraki Yüzyıl"
}, k = b;
d.default = k;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const T = {
  placeholder: "Zaman seç",
  rangePlaceholder: ["Başlangıç zamanı", "Bitiş zamanı"]
};
var h = T;
t.default = h;
var p = f.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var S = p(d), x = p(t);
const Y = {
  lang: Object.assign({
    placeholder: "Tarih seç",
    yearPlaceholder: "Yıl seç",
    quarterPlaceholder: "Çeyrek seç",
    monthPlaceholder: "Ay seç",
    weekPlaceholder: "Hafta seç",
    rangePlaceholder: ["Başlangıç tarihi", "Bitiş tarihi"],
    rangeYearPlaceholder: ["Başlangıç yılı", "Bitiş yılı"],
    rangeMonthPlaceholder: ["Başlangıç ayı", "Bitiş ayı"],
    rangeWeekPlaceholder: ["Başlangıç haftası", "Bitiş haftası"]
  }, S.default),
  timePickerLocale: Object.assign({}, x.default)
};
var P = Y;
r.default = P;
var R = f.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var z = R(r), D = z.default;
i.default = D;
var m = f.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var j = m(n), O = m(i), A = m(r), M = m(t);
const e = "${label} geçerli bir ${type} değil", B = {
  locale: "tr",
  Pagination: j.default,
  DatePicker: A.default,
  TimePicker: M.default,
  Calendar: O.default,
  global: {
    placeholder: "Lütfen seçiniz"
  },
  Table: {
    filterTitle: "Filtre menüsü",
    filterConfirm: "Tamam",
    filterReset: "Sıfırla",
    filterEmptyText: "Filtre yok",
    selectAll: "Tüm sayfayı seç",
    selectInvert: "Tersini seç",
    selectionAll: "Tümünü seç",
    sortTitle: "Sırala",
    expand: "Satırı genişlet",
    collapse: "Satırı daralt",
    triggerDesc: "Azalan düzende sırala",
    triggerAsc: "Artan düzende sırala",
    cancelSort: "Sıralamayı kaldır"
  },
  Modal: {
    okText: "Tamam",
    cancelText: "İptal",
    justOkText: "Tamam"
  },
  Popconfirm: {
    okText: "Tamam",
    cancelText: "İptal"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Arama",
    itemUnit: "Öğe",
    itemsUnit: "Öğeler",
    remove: "Kaldır",
    selectCurrent: "Tüm sayfayı seç",
    removeCurrent: "Sayfayı kaldır",
    selectAll: "Tümünü seç",
    removeAll: "Tümünü kaldır",
    selectInvert: "Tersini seç"
  },
  Upload: {
    uploading: "Yükleniyor...",
    removeFile: "Dosyayı kaldır",
    uploadError: "Yükleme hatası",
    previewFile: "Dosyayı önizle",
    downloadFile: "Dosyayı indir"
  },
  Empty: {
    description: "Veri Yok"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Düzenle",
    copy: "Kopyala",
    copied: "Kopyalandı",
    expand: "Genişlet"
  },
  PageHeader: {
    back: "Geri"
  },
  Form: {
    optional: "(opsiyonel)",
    defaultValidateMessages: {
      default: "Alan doğrulama hatası ${label}",
      required: "${label} gerekli bir alan",
      enum: "${label} şunlardan biri olmalı: [${enum}]",
      whitespace: "${label} sadece boşluk olamaz",
      date: {
        format: "${label} tarih biçimi geçersiz",
        parse: "${label} bir tarihe dönüştürülemedi",
        invalid: "${label} geçersiz bir tarih"
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
        len: "${label} ${len} karakter olmalı",
        min: "${label} en az ${min} karakter olmalı",
        max: "${label} en çok ${max} karakter olmalı",
        range: "${label} ${min}-${max} karakter arası olmalı"
      },
      number: {
        len: "${label} ${len} olmalı",
        min: "${label} en az ${min} olmalı",
        max: "${label} en çok ${max} olmalı",
        range: "${label} ${min}-${max} arası olmalı"
      },
      array: {
        len: "${label} sayısı ${len} olmalı",
        min: "${label} sayısı en az ${min} olmalı",
        max: "${label} sayısı en çok ${max} olmalı",
        range: "${label} sayısı ${min}-${max} arası olmalı"
      },
      pattern: {
        mismatch: "${label} şu kalıpla eşleşmeli: ${pattern}"
      }
    }
  },
  Image: {
    preview: "Önizleme"
  }
};
var F = B;
o.default = F;
var _ = o;
const C = /* @__PURE__ */ $(_), E = /* @__PURE__ */ g({
  __proto__: null,
  default: C
}, [_]);
export {
  E as t
};
