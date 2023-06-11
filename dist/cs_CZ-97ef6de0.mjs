import { g as _ } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function y(u, v) {
  for (var c = 0; c < v.length; c++) {
    const t = v[c];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in u)) {
          const m = Object.getOwnPropertyDescriptor(t, a);
          m && Object.defineProperty(u, a, m.get ? m : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var o = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ strana",
  jump_to: "Přejít",
  jump_to_confirm: "potvrdit",
  page: "",
  // Pagination.jsx
  prev_page: "Předchozí strana",
  next_page: "Následující strana",
  prev_5: "Předchozích 5 stran",
  next_5: "Následujících 5 stran",
  prev_3: "Předchozí 3 strany",
  next_3: "Následující 3 strany",
  page_size: "velikost stránky"
};
n.default = $;
var d = {}, r = {}, s = {};
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var k = {
  locale: "cs_CZ",
  today: "Dnes",
  now: "Nyní",
  backToToday: "Zpět na dnešek",
  ok: "OK",
  clear: "Vymazat",
  month: "Měsíc",
  year: "Rok",
  timeSelect: "Vybrat čas",
  dateSelect: "Vybrat datum",
  monthSelect: "Vyberte měsíc",
  yearSelect: "Vyberte rok",
  decadeSelect: "Vyberte dekádu",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Předchozí měsíc (PageUp)",
  nextMonth: "Následující (PageDown)",
  previousYear: "Předchozí rok (Control + left)",
  nextYear: "Následující rok (Control + right)",
  previousDecade: "Předchozí dekáda",
  nextDecade: "Následující dekáda",
  previousCentury: "Předchozí století",
  nextCentury: "Následující století"
}, h = k;
s.default = h;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const g = {
  placeholder: "Vybrat čas"
};
var x = g;
l.default = x;
var b = p.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var z = b(s), P = b(l);
const j = {
  lang: Object.assign({
    placeholder: "Vybrat datum",
    rangePlaceholder: ["Od", "Do"]
  }, z.default),
  timePickerLocale: Object.assign({}, P.default)
};
var C = j;
r.default = C;
var O = p.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var Z = O(r), T = Z.default;
d.default = T;
var i = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var V = i(n), D = i(d), M = i(r), Y = i(l);
const e = "${label} není platný ${type}", N = {
  locale: "cs",
  Pagination: V.default,
  DatePicker: M.default,
  TimePicker: Y.default,
  Calendar: D.default,
  global: {
    placeholder: "Prosím vyber"
  },
  Table: {
    filterTitle: "Filtr",
    filterConfirm: "Potvrdit",
    filterReset: "Obnovit",
    filterEmptyText: "Žádné filtry",
    filterCheckall: "Vybrat všechny položky",
    filterSearchPlaceholder: "Vyhledat ve filtrech",
    emptyText: "Žádná data",
    selectAll: "Vybrat všechny řádky na současné stránce",
    selectInvert: "Invertovat výběr na současné stránce",
    selectNone: "Odznačit vše",
    selectionAll: "Vybrat všechny řádky",
    sortTitle: "Řadit",
    expand: "Rozbalit řádek",
    collapse: "Zabalit řádek",
    triggerDesc: "Klikni pro sestupné řazení",
    triggerAsc: "Klikni pro vzestupné řazení",
    cancelSort: "Klikni pro zrušení řazení"
  },
  Modal: {
    okText: "OK",
    cancelText: "Zrušit",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Zrušit"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Vyhledávání",
    itemUnit: "položka",
    itemsUnit: "položek",
    remove: "Odstranit",
    selectCurrent: "Vybrat aktuální stranu",
    removeCurrent: "Smazat aktuální stranu",
    selectAll: "Označit vše",
    removeAll: "Odznačit vše",
    selectInvert: "Opačný výběr"
  },
  Upload: {
    uploading: "Nahrávání...",
    removeFile: "Odstranit soubor",
    uploadError: "Chyba při nahrávání",
    previewFile: "Zobrazit soubor",
    downloadFile: "Stáhnout soubor"
  },
  Empty: {
    description: "Žádná data"
  },
  Icon: {
    icon: "ikona"
  },
  Text: {
    edit: "Upravit",
    copy: "Kopírovat",
    copied: "Zkopírované",
    expand: "Zvětšit"
  },
  PageHeader: {
    back: "Zpět"
  },
  Form: {
    optional: "(nepovinné)",
    defaultValidateMessages: {
      default: "Validační chyba pole pro ${label}",
      required: "Prosím vložte ${label}",
      enum: "${label} musí být jeden z [${enum}]",
      whitespace: "${label} nemůže být prázdný znak",
      date: {
        format: "${label} formát datumu je neplatný",
        parse: "${label} není možné konvertovat na datum",
        invalid: "${label} je neplatné datum"
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
        len: "${label} musí být ${len} znaků",
        min: "${label} musí být alespoň ${min} znaků",
        max: "${label} musí být do ${max} znaků",
        range: "${label} musí být mezi ${min}-${max} znaky"
      },
      number: {
        len: "${label} musí být stejný jako ${len}",
        min: "${label} musí být minimálně ${min}",
        max: "${label} musí být maximálně ${max}",
        range: "${label} musí být mezi ${min}-${max}"
      },
      array: {
        len: "Musí být ${len} ${label}",
        min: "Alespoň ${min} ${label}",
        max: "Nejvíc ${max} ${label}",
        range: "Počet ${label} musí být mezi ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} neodpovídá vzoru ${pattern}"
      }
    }
  },
  Image: {
    preview: "Náhled"
  }
};
var S = N;
o.default = S;
var f = o;
const F = /* @__PURE__ */ _(f), w = /* @__PURE__ */ y({
  __proto__: null,
  default: F
}, [f]);
export {
  w as c
};
