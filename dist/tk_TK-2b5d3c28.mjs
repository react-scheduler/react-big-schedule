import { g as b } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function k(m, c) {
  for (var s = 0; s < c.length; s++) {
    const a = c[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in m)) {
          const u = Object.getOwnPropertyDescriptor(a, l);
          u && Object.defineProperty(m, l, u.get ? u : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }));
}
var n = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var _ = {
  // Options.jsx
  items_per_page: "/ sahypa",
  jump_to: "Git",
  jump_to_confirm: "tassykla",
  page: "Sahypa",
  // Pagination.jsx
  prev_page: "Öňki sahypa",
  next_page: "Soňky sahypa",
  prev_5: "Öňki 5 sahypa",
  next_5: "Soňky 5 sahypa",
  prev_3: "Öňki 3 sahypa",
  next_3: "Soňky 3 sahypa",
  page_size: "Sahypa sany"
};
o.default = _;
var i = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var $ = {
  locale: "tk_TK",
  today: "Şugün",
  now: "Şuwagt",
  backToToday: "Şugüne gaýt",
  ok: "Bolýar",
  clear: "Arassala",
  month: "Aý",
  year: "Ýyl",
  timeSelect: "Wagt saýla",
  dateSelect: "Gün saýla",
  monthSelect: "Aý saýla",
  yearSelect: "Ýyl saýla",
  decadeSelect: "On ýyllygy saýla",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Öňki aý (PageUp)",
  nextMonth: "Soňky aý (PageDown)",
  previousYear: "Öňki ýyl (Control + çep)",
  nextYear: "Soňky ýyl (Control + sag)",
  previousDecade: "Öňki on ýyl",
  nextDecade: "Soňky on ýyl",
  previousCentury: "Öňki asyr",
  nextCentury: "Soňky asyr"
}, v = $;
d.default = v;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const h = {
  placeholder: "Wagty saýlaň",
  rangePlaceholder: ["Başlanýan wagty", "Gutarýan wagty"]
};
var T = h;
r.default = T;
var g = p.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var x = g(d), P = g(r);
const w = {
  lang: Object.assign({
    placeholder: "Wagt saýlaň",
    rangePlaceholder: ["Başlanýan wagty", "Gutarýan wagty"],
    yearPlaceholder: "Ýyl saýlaň",
    quarterPlaceholder: "Çärýek saýlaň",
    monthPlaceholder: "Aý saýlaň",
    weekPlaceholder: "Hepde saýlaň",
    rangeYearPlaceholder: ["Başlanýan ýyly", "Gutarýan ýyly"],
    rangeQuarterPlaceholder: ["Başlanýan çärýegi", "Gutarýan çärýegi"],
    rangeMonthPlaceholder: ["Başlanýan aýy", "Gutarýan aýy"],
    rangeWeekPlaceholder: ["Başlanýan hepdesi", "Gutarýan hepdesi"]
  }, x.default),
  timePickerLocale: Object.assign({}, P.default)
};
var S = w;
t.default = S;
var K = p.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var j = K(t), Y = j.default;
i.default = Y;
var y = p.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var z = y(o), M = y(i), O = y(t), D = y(r);
const e = "${label} ${type} görnüşinde däl", F = {
  locale: "tk",
  Pagination: z.default,
  DatePicker: O.default,
  TimePicker: D.default,
  Calendar: M.default,
  global: {
    placeholder: "Saýlaň"
  },
  Table: {
    filterTitle: "Filter",
    filterConfirm: "Bolýar",
    filterReset: "Arassala",
    filterEmptyText: "Filtersiz",
    emptyText: "Maglumat ýok",
    selectAll: "Ählisini saýla",
    selectInvert: "Tersini saýlaň",
    selectNone: "Ähli maglumatlary arassala",
    selectionAll: "Ähli maglumatlary saýla",
    sortTitle: "Tertiple",
    expand: "Setirleri aç",
    collapse: "Setirleri ýygna",
    triggerDesc: "Kemelýän tertipde tertiple",
    triggerAsc: "Artýan tertipde tertiple",
    cancelSort: "Tertipleri arassala"
  },
  Modal: {
    okText: "Bolýar",
    cancelText: "Ýatyr",
    justOkText: "Bolýar"
  },
  Popconfirm: {
    okText: "Bolýar",
    cancelText: "Ýatyr"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Gözle",
    itemUnit: "elem.",
    itemsUnit: "elem.",
    remove: "Poz",
    selectAll: "Ähli maglumatlary saýla",
    selectCurrent: "Şu sahypany saýlaň",
    selectInvert: "Ters tertipde görkez",
    removeAll: "Ähli maglumatlary poz",
    removeCurrent: "Şu sahypany poz"
  },
  Upload: {
    uploading: "Ugradylýar...",
    removeFile: "Faýly poz",
    uploadError: "Ugratmakda näsazlyk ýüze çykdy",
    previewFile: "Faýly görmek",
    downloadFile: "Faýly ýükle"
  },
  Empty: {
    description: "Maglumat ýok"
  },
  Icon: {
    icon: "nyşan"
  },
  Text: {
    edit: "Üýtgetmek",
    copy: "Göçürmek",
    copied: "Göçürildi",
    expand: "Ýygnamak"
  },
  PageHeader: {
    back: "Yza"
  },
  Form: {
    defaultValidateMessages: {
      default: "${label} meýdany barlanmady",
      required: "${label} meýdany giriziň",
      enum: "${label} meýdan şulardan biri bolmaly: [${enum}]",
      whitespace: "${label} meýdany boş bolup bilmeýär",
      date: {
        format: "${label} ýalňyş wagt formaty",
        parse: "${label} meýdany wagta çalşyp bolmady",
        invalid: "${label} meýdany nädogry wagt"
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
        len: "${label} meýdany ${len} simwol bolmaly",
        min: "${label} meýdany ${min} simwoldan az bolmaly däl",
        max: "${label} meýdany ${max} simwoldan köp bolmaly däl",
        range: "${label} meýdany ${min}-${max} simwol aralygynda bolmaly"
      },
      number: {
        len: "${label} meýdan ${len} simwol bolmaly",
        min: "${label} meýdany ${min} simwoldan az bolmaly däl",
        max: "${label} meýdany ${max} simwoldan köp bolmaly däl"
      },
      array: {
        len: "${label} meýdanynyň elementleriniň sany ${len} deň bolmaly",
        min: "${label} meýdanynyň elementleriniň sany ${min} az bolmaly däl",
        max: "${label} meýdanynyň elementleriniň sany ${max} köp bolmaly däl",
        range: "${label} meýdanynyň elementleriniň sany ${min} we ${max} aralykda bolmaly"
      },
      pattern: {
        mismatch: "${label} meýdany ${pattern} şablony bilen gabat gelmeýär"
      }
    }
  },
  Image: {
    preview: "Öňünden görmek"
  }
};
var A = F;
n.default = A;
var f = n;
const B = /* @__PURE__ */ b(f), q = /* @__PURE__ */ k({
  __proto__: null,
  default: B
}, [f]);
export {
  q as t
};
