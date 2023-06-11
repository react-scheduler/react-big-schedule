import { g } from "./index-43e0371a.mjs";
import { i as _ } from "./interopRequireDefault-40f894e3.mjs";
function m(d, c) {
  for (var n = 0; n < c.length; n++) {
    const e = c[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in d)) {
          const f = Object.getOwnPropertyDescriptor(e, a);
          f && Object.defineProperty(d, a, f.get ? f : {
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
var y = {
  // Options.jsx
  items_per_page: "/ síðu",
  jump_to: "Síða",
  jump_to_confirm: "staðfest",
  page: "",
  // Pagination.jsx
  prev_page: "Fyrri síða",
  next_page: "Næsta síða",
  prev_5: "Til baka 5 síður",
  next_5: "Áfram 5 síður",
  prev_3: "Til baka 3 síður",
  next_3: "Áfram 3 síður",
  page_size: "Page Size"
};
i.default = y;
var o = {}, r = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var S = {
  locale: "is_IS",
  today: "Í dag",
  now: "Núna",
  backToToday: "Til baka til dagsins í dag",
  ok: "Í lagi",
  clear: "Hreinsa",
  month: "Mánuður",
  year: "Ár",
  timeSelect: "Velja tíma",
  dateSelect: "Velja dag",
  monthSelect: "Velja mánuð",
  yearSelect: "Velja ár",
  decadeSelect: "Velja áratug",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Fyrri mánuður (PageUp)",
  nextMonth: "Næsti mánuður (PageDown)",
  previousYear: "Fyrra ár (Control + left)",
  nextYear: "Næsta ár (Control + right)",
  previousDecade: "Fyrri áratugur",
  nextDecade: "Næsti áratugur",
  previousCentury: "Fyrri öld",
  nextCentury: "Næsta öld"
}, j = S;
u.default = j;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const $ = {
  placeholder: "Velja tíma"
};
var b = $;
t.default = b;
var p = _.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var P = p(u), k = p(t);
const I = {
  lang: Object.assign({
    placeholder: "Veldu dag",
    rangePlaceholder: ["Upphafsdagur", "Lokadagur"]
  }, P.default),
  timePickerLocale: Object.assign({}, k.default)
};
var T = I;
r.default = T;
var h = _.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var x = h(r), F = x.default;
o.default = F;
var s = _.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var Y = s(i), O = s(o), D = s(r), M = s(t);
const V = {
  locale: "is",
  Pagination: Y.default,
  DatePicker: D.default,
  TimePicker: M.default,
  Calendar: O.default,
  Table: {
    filterTitle: "Afmarkanir",
    filterConfirm: "Staðfesta",
    filterReset: "Núllstilla",
    selectAll: "Velja allt",
    selectInvert: "Viðsnúa vali"
  },
  Modal: {
    okText: "Áfram",
    cancelText: "Hætta við",
    justOkText: "Í lagi"
  },
  Popconfirm: {
    okText: "Áfram",
    cancelText: "Hætta við"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Leita hér",
    itemUnit: "færsla",
    itemsUnit: "færslur"
  },
  Upload: {
    uploading: "Hleð upp...",
    removeFile: "Fjarlægja skrá",
    uploadError: "Villa við að hlaða upp",
    previewFile: "Forskoða skrá",
    downloadFile: "Hlaða niður skrá"
  },
  Empty: {
    description: "Engin gögn"
  }
};
var N = V;
l.default = N;
var v = l;
const C = /* @__PURE__ */ g(v), E = /* @__PURE__ */ m({
  __proto__: null,
  default: C
}, [v]);
export {
  E as i
};
