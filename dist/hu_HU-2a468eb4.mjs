import { g as m } from "./index-43e0371a.mjs";
import { i as f } from "./interopRequireDefault-40f894e3.mjs";
function z(s, _) {
  for (var n = 0; n < _.length; n++) {
    const e = _[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const v = Object.getOwnPropertyDescriptor(e, t);
          v && Object.defineProperty(s, t, v.get ? v : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var r = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var h = {
  // Options.jsx
  items_per_page: "/ oldal",
  jump_to: "Ugrás",
  jump_to_confirm: "megerősít",
  page: "",
  // Pagination.jsx
  prev_page: "Előző oldal",
  next_page: "Következő oldal",
  prev_5: "Előző 5 oldal",
  next_5: "Következő 5 oldal",
  prev_3: "Előző 3 oldal",
  next_3: "Következő 3 oldal",
  page_size: "Page Size"
};
o.default = h;
var u = {}, a = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var g = {
  locale: "hu_HU",
  today: "Ma",
  // 'Today',
  now: "Most",
  // 'Now',
  backToToday: "Vissza a mai napra",
  // 'Back to today',
  ok: "OK",
  clear: "Törlés",
  // 'Clear',
  month: "Hónap",
  // 'Month',
  year: "Év",
  // 'Year',
  timeSelect: "Időpont kiválasztása",
  // 'Select time',
  dateSelect: "Dátum kiválasztása",
  // 'Select date',
  monthSelect: "Hónap kiválasztása",
  // 'Choose a month',
  yearSelect: "Év kiválasztása",
  // 'Choose a year',
  decadeSelect: "Évtized kiválasztása",
  // 'Choose a decade',
  yearFormat: "YYYY",
  dateFormat: "YYYY/MM/DD",
  // 'M/D/YYYY',
  dayFormat: "DD",
  // 'D',
  dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
  // 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: !0,
  previousMonth: "Előző hónap (PageUp)",
  // 'Previous month (PageUp)',
  nextMonth: "Következő hónap (PageDown)",
  // 'Next month (PageDown)',
  previousYear: "Múlt év (Control + left)",
  // 'Last year (Control + left)',
  nextYear: "Jövő év (Control + right)",
  // 'Next year (Control + right)',
  previousDecade: "Előző évtized",
  // 'Last decade',
  nextDecade: "Következő évtized",
  // 'Next decade',
  previousCentury: "Múlt évszázad",
  // 'Last century',
  nextCentury: "Jövő évszázad"
  // 'Next century',
}, k = g;
d.default = k;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const y = {
  placeholder: "Válasszon időt"
};
var U = y;
l.default = U;
var c = f.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var H = c(d), j = c(l);
const $ = {
  lang: Object.assign({
    placeholder: "Válasszon dátumot",
    rangePlaceholder: ["Kezdő dátum", "Befejezés dátuma"]
  }, H.default),
  timePickerLocale: Object.assign({}, j.default)
};
var P = $;
a.default = P;
var M = f.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var b = M(a), D = b.default;
u.default = D;
var i = f.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var x = i(o), O = i(u), T = i(a), Y = i(l);
const F = {
  locale: "hu",
  Pagination: x.default,
  DatePicker: T.default,
  TimePicker: Y.default,
  Calendar: O.default,
  Table: {
    filterTitle: "Szűrők",
    filterConfirm: "Alkalmazás",
    filterReset: "Visszaállítás",
    selectAll: "Jelenlegi oldal kiválasztása",
    selectInvert: "Jelenlegi oldal inverze",
    sortTitle: "Rendezés"
  },
  Modal: {
    okText: "Alkalmazás",
    cancelText: "Visszavonás",
    justOkText: "Alkalmazás"
  },
  Popconfirm: {
    okText: "Alkalmazás",
    cancelText: "Visszavonás"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Keresés",
    itemUnit: "elem",
    itemsUnit: "elemek"
  },
  Upload: {
    uploading: "Feltöltés...",
    removeFile: "Fájl eltávolítása",
    uploadError: "Feltöltési hiba",
    previewFile: "Fájl előnézet",
    downloadFile: "Fájl letöltése"
  },
  Empty: {
    description: "Nincs adat"
  }
};
var E = F;
r.default = E;
var p = r;
const S = /* @__PURE__ */ m(p), C = /* @__PURE__ */ z({
  __proto__: null,
  default: S
}, [p]);
export {
  C as h
};
