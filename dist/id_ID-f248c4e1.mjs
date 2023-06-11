import { g as v } from "./index-43e0371a.mjs";
import { i as s } from "./interopRequireDefault-40f894e3.mjs";
function g(d, c) {
  for (var f = 0; f < c.length; f++) {
    const e = c[f];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in d)) {
          const _ = Object.getOwnPropertyDescriptor(e, a);
          _ && Object.defineProperty(d, a, _.get ? _ : {
            enumerable: !0,
            get: () => e[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var h = {
  // Options.jsx
  items_per_page: "/ halaman",
  jump_to: "Menuju",
  jump_to_confirm: "konfirmasi",
  page: "Halaman",
  // Pagination.jsx
  prev_page: "Halaman Sebelumnya",
  next_page: "Halaman Berikutnya",
  prev_5: "5 Halaman Sebelumnya",
  next_5: "5 Halaman Berikutnya",
  prev_3: "3 Halaman Sebelumnya",
  next_3: "3 Halaman Berikutnya",
  page_size: "ukuran halaman"
};
i.default = h;
var n = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var k = {
  locale: "id_ID",
  today: "Hari ini",
  now: "Sekarang",
  backToToday: "Kembali ke hari ini",
  ok: "Baik",
  clear: "Bersih",
  month: "Bulan",
  year: "Tahun",
  timeSelect: "pilih waktu",
  dateSelect: "pilih tanggal",
  weekSelect: "Pilih satu minggu",
  monthSelect: "Pilih satu bulan",
  yearSelect: "Pilih satu tahun",
  decadeSelect: "Pilih satu dekade",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Bulan sebelumnya (PageUp)",
  nextMonth: "Bulan selanjutnya (PageDown)",
  previousYear: "Tahun lalu (Control + kiri)",
  nextYear: "Tahun selanjutnya (Kontrol + kanan)",
  previousDecade: "Dekade terakhir",
  nextDecade: "Dekade berikutnya",
  previousCentury: "Abad terakhir",
  nextCentury: "Abad berikutnya"
}, y = k;
u.default = y;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const D = {
  placeholder: "Pilih waktu"
};
var b = D;
r.default = b;
var p = s.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var P = p(u), j = p(r);
const $ = {
  lang: Object.assign({
    placeholder: "Pilih tanggal",
    rangePlaceholder: ["Mulai tanggal", "Tanggal akhir"]
  }, P.default),
  timePickerLocale: Object.assign({}, j.default)
};
var T = $;
t.default = T;
var I = s.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var O = I(t), x = O.default;
n.default = x;
var o = s.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var M = o(i), Y = o(n), S = o(t), B = o(r);
const H = {
  locale: "id",
  Pagination: M.default,
  DatePicker: S.default,
  TimePicker: B.default,
  Calendar: Y.default,
  Table: {
    filterTitle: "Saring",
    filterConfirm: "OK",
    filterReset: "Hapus",
    selectAll: "Pilih semua di halaman ini",
    selectInvert: "Balikkan pilihan di halaman ini",
    sortTitle: "Urutkan"
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
    searchPlaceholder: "Cari",
    itemUnit: "item",
    itemsUnit: "item"
  },
  Upload: {
    uploading: "Mengunggah...",
    removeFile: "Hapus file",
    uploadError: "Kesalahan pengunggahan",
    previewFile: "File pratinjau",
    downloadFile: "Unduh berkas"
  },
  Empty: {
    description: "Tidak ada data"
  }
};
var F = H;
l.default = F;
var m = l;
const w = /* @__PURE__ */ v(m), U = /* @__PURE__ */ g({
  __proto__: null,
  default: w
}, [m]);
export {
  U as i
};
