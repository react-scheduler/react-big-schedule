import { g as s } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function M(i, m) {
  for (var f = 0; f < m.length; f++) {
    const e = m[f];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const _ = Object.getOwnPropertyDescriptor(e, t);
          _ && Object.defineProperty(i, t, _.get ? _ : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var g = {
  // Options.jsx
  items_per_page: "/ хуудас",
  jump_to: "Шилжих",
  jump_to_confirm: "сонгох",
  page: "",
  // Pagination.jsx
  prev_page: "Өмнөх хуудас",
  next_page: "Дараагийн хуудас",
  prev_5: "Дараагийн 5 хуудас",
  next_5: "Дараагийн 5 хуудас",
  prev_3: "Дараагийн 3 хуудас",
  next_3: "Дараагийн 3 хуудас",
  page_size: "Page Size"
};
o.default = g;
var n = {}, a = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var y = {
  locale: "mn_MN",
  today: "Өнөөдөр",
  now: "Одоо",
  backToToday: "Өнөөдөрлүү буцах",
  ok: "OK",
  clear: "Цэвэрлэх",
  month: "Сар",
  year: "Жил",
  timeSelect: "Цаг сонгох",
  dateSelect: "Огноо сонгох",
  weekSelect: "7 хоног сонгох",
  monthSelect: "Сар сонгох",
  yearSelect: "Жил сонгох",
  decadeSelect: "Арван сонгох",
  yearFormat: "YYYY",
  dateFormat: "YYYY/MM/DD",
  dayFormat: "DD",
  dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Өмнөх сар (PageUp)",
  nextMonth: "Дараа сар (PageDown)",
  previousYear: "Өмнөх жил (Control + left)",
  nextYear: "Дараа жил (Control + right)",
  previousDecade: "Өмнөх арван",
  nextDecade: "Дараа арван",
  previousCentury: "Өмнөх зуун",
  nextCentury: "Дараа зуун"
}, $ = y;
u.default = $;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const P = {
  placeholder: "Цаг сонгох"
};
var N = P;
r.default = N;
var v = c.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var b = v(u), j = v(r);
const D = {
  lang: Object.assign({
    placeholder: "Огноо сонгох",
    rangePlaceholder: ["Эхлэх огноо", "Дуусах огноо"]
  }, b.default),
  timePickerLocale: Object.assign({}, j.default)
};
var x = D;
a.default = x;
var O = c.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var Y = O(a), T = Y.default;
n.default = T;
var d = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var h = d(o), k = d(n), S = d(a), F = d(r);
const C = {
  locale: "mn-mn",
  Pagination: h.default,
  DatePicker: S.default,
  TimePicker: F.default,
  Calendar: k.default,
  Table: {
    filterTitle: "Хайх цэс",
    filterConfirm: "Тийм",
    filterReset: "Цэвэрлэх",
    selectAll: "Бүгдийг сонгох",
    selectInvert: "Бусдыг сонгох"
  },
  Modal: {
    okText: "Тийм",
    cancelText: "Цуцлах",
    justOkText: "Тийм"
  },
  Popconfirm: {
    okText: "Тийм",
    cancelText: "Цуцлах"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Хайх",
    itemUnit: "Зүйл",
    itemsUnit: "Зүйлүүд"
  },
  Upload: {
    uploading: "Хуулж байна...",
    removeFile: "Файл устгах",
    uploadError: "Хуулахад алдаа гарлаа",
    previewFile: "Файлыг түргэн үзэх",
    downloadFile: "Файлыг татах"
  },
  Empty: {
    description: "Мэдээлэл байхгүй байна"
  }
};
var w = C;
l.default = w;
var p = l;
const R = /* @__PURE__ */ s(p), U = /* @__PURE__ */ M({
  __proto__: null,
  default: R
}, [p]);
export {
  U as m
};
