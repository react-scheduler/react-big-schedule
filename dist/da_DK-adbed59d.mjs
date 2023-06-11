import { g as v } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function m(u, _) {
  for (var s = 0; s < _.length; s++) {
    const e = _[s];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in u)) {
          const f = Object.getOwnPropertyDescriptor(e, t);
          f && Object.defineProperty(u, t, f.get ? f : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var D = {
  // Options.jsx
  items_per_page: "/ side",
  jump_to: "Gå til",
  jump_to_confirm: "bekræft",
  page: "Side",
  // Pagination.jsx
  prev_page: "Forrige Side",
  next_page: "Næste Side",
  prev_5: "Forrige 5 Sider",
  next_5: "Næste 5 Sider",
  prev_3: "Forrige 3 Sider",
  next_3: "Næste 3 Sider",
  page_size: "sidestørrelse"
};
d.default = D;
var o = {}, r = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = {
  locale: "da_DK",
  today: "I dag",
  now: "Nu",
  backToToday: "Gå til i dag",
  ok: "OK",
  clear: "Ryd",
  month: "Måned",
  year: "År",
  timeSelect: "Vælg tidspunkt",
  dateSelect: "Vælg dato",
  monthSelect: "Vælg måned",
  yearSelect: "Vælg år",
  decadeSelect: "Vælg årti",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Forrige måned (Page Up)",
  nextMonth: "Næste måned (Page Down)",
  previousYear: "Forrige år (Ctrl-venstre pil)",
  nextYear: "Næste år (Ctrl-højre pil)",
  previousDecade: "Forrige årti",
  nextDecade: "Næste årti",
  previousCentury: "Forrige århundrede",
  nextCentury: "Næste århundrede"
}, K = y;
i.default = K;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const S = {
  placeholder: "Vælg tid",
  rangePlaceholder: ["Starttidspunkt", "Sluttidspunkt"]
};
var k = S;
a.default = k;
var p = c.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var F = p(i), $ = p(a);
const b = {
  lang: Object.assign({
    placeholder: "Vælg dato",
    rangePlaceholder: ["Startdato", "Slutdato"]
  }, F.default),
  timePickerLocale: Object.assign({}, $.default)
};
var j = b;
r.default = j;
var O = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = O(r), x = P.default;
o.default = x;
var n = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var h = n(d), T = n(o), Y = n(r), M = n(a);
const N = {
  locale: "da",
  DatePicker: Y.default,
  TimePicker: M.default,
  Calendar: T.default,
  Pagination: h.default,
  Table: {
    filterTitle: "Filtermenu",
    filterConfirm: "OK",
    filterReset: "Nulstil",
    filterEmptyText: "Ingen filtre",
    emptyText: "Ingen data",
    selectAll: "Vælg alle",
    selectNone: "Ryd alt data",
    selectInvert: "Invertér valg",
    selectionAll: "Vælg alt data",
    sortTitle: "Sortér",
    expand: "Udvid række",
    collapse: "Flet række",
    triggerDesc: "Klik for at sortere faldende",
    triggerAsc: "Klik for at sortere stigende",
    cancelSort: "Klik for at annullere sortering"
  },
  Modal: {
    okText: "OK",
    cancelText: "Afbryd",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Afbryd"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Søg her",
    itemUnit: "element",
    itemsUnit: "elementer"
  },
  Upload: {
    uploading: "Uploader...",
    removeFile: "Fjern fil",
    uploadError: "Fejl ved upload",
    previewFile: "Forhåndsvisning",
    downloadFile: "Download fil"
  },
  Empty: {
    description: "Ingen data"
  }
};
var V = N;
l.default = V;
var g = l;
const A = /* @__PURE__ */ v(g), w = /* @__PURE__ */ m({
  __proto__: null,
  default: A
}, [g]);
export {
  w as d
};
