import { g as v } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function h(d, p) {
  for (var s = 0; s < p.length; s++) {
    const e = p[s];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in d)) {
          const m = Object.getOwnPropertyDescriptor(e, a);
          m && Object.defineProperty(d, a, m.get ? m : {
            enumerable: !0,
            get: () => e[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var r = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var g = {
  // Options.jsx
  items_per_page: "/ halaman",
  jump_to: "Lompat ke",
  jump_to_confirm: "Sahkan",
  page: "",
  // Pagination.jsx
  prev_page: "Halaman sebelumnya",
  next_page: "Halam seterusnya",
  prev_5: "5 halaman sebelum",
  next_5: "5 halaman seterusnya",
  prev_3: "3 halaman sebelumnya",
  next_3: "3 halaman seterusnya",
  page_size: "Page Size"
};
i.default = g;
var n = {}, t = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var k = {
  locale: "ms_MY",
  today: "Hari ini",
  now: "Sekarang",
  backToToday: "Kembali ke hari ini",
  ok: "OK",
  timeSelect: "Pilih masa",
  dateSelect: "Pilih tarikh",
  weekSelect: "Pilih minggu",
  clear: "Padam",
  month: "Bulan",
  year: "Tahun",
  previousMonth: "Bulan lepas",
  nextMonth: "Bulan depan",
  monthSelect: "Pilih bulan",
  yearSelect: "Pilih tahun",
  decadeSelect: "Pilih dekad",
  yearFormat: "YYYY",
  dayFormat: "D",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousYear: "Tahun lepas (Ctrl+left)",
  nextYear: "Tahun depan (Ctrl+right)",
  previousDecade: "Dekad lepas",
  nextDecade: "Dekad depan",
  previousCentury: "Abad lepas",
  nextCentury: "Abad depan"
}, y = k;
o.default = y;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const M = {
  placeholder: "Sila pilih masa"
};
var Y = M;
l.default = Y;
var f = c.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var b = f(o), P = f(l);
const T = {
  lang: Object.assign({
    placeholder: "Pilih tarikh",
    rangePlaceholder: ["Tarikh mula", "Tarikh akhir"]
  }, b.default),
  timePickerLocale: Object.assign({}, P.default)
};
var j = T;
t.default = j;
var $ = c.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var O = $(t), x = O.default;
n.default = x;
var u = c.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var S = u(i), D = u(n), C = u(t), F = u(l);
const K = {
  locale: "ms-my",
  Pagination: S.default,
  DatePicker: C.default,
  TimePicker: F.default,
  Calendar: D.default,
  global: {
    placeholder: "Sila pilih"
  },
  PageHeader: {
    back: "Kembali"
  },
  Text: {
    edit: "Sunting",
    copy: "Salin",
    copied: "Berjaya menyalin",
    expand: "Kembang"
  },
  Empty: {
    description: "Tiada data"
  },
  Table: {
    filterTitle: "Cari dengan tajuk",
    filterConfirm: "OK",
    filterReset: "Menetapkan semula",
    emptyText: "Tiada data",
    selectAll: "Pilih semua",
    selectInvert: "Terbalikkan"
  },
  Modal: {
    okText: "OK",
    cancelText: "Batal",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Batal"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "Tidak dijumpai",
    searchPlaceholder: "Carian di sini",
    itemUnit: "item",
    itemsUnit: "item"
  },
  Icon: {
    icon: "ikon"
  },
  Select: {
    notFoundContent: "Tidak Dijumpai"
  },
  Upload: {
    uploading: "Sedang memuat naik...",
    removeFile: "Buang fail",
    uploadError: "Masalah muat naik",
    previewFile: "Tengok fail",
    downloadFile: "Muat turun fail"
  }
};
var B = K;
r.default = B;
var _ = r;
const H = /* @__PURE__ */ v(_), R = /* @__PURE__ */ h({
  __proto__: null,
  default: H
}, [_]);
export {
  R as m
};
