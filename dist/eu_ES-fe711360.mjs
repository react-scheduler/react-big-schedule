import { g } from "./index-43e0371a.mjs";
import { i as k } from "./interopRequireDefault-40f894e3.mjs";
function _(b, s) {
  for (var m = 0; m < s.length; m++) {
    const a = s[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in b)) {
          const c = Object.getOwnPropertyDescriptor(a, r);
          c && Object.defineProperty(b, r, c.get ? c : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(b, Symbol.toStringTag, { value: "Module" }));
}
var u = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ orrialde",
  jump_to: "-ra joan",
  jump_to_confirm: "baieztatu",
  page: "Orrialde",
  // Pagination.jsx
  prev_page: "Aurreko orrialdea",
  next_page: "Hurrengo orrialdea",
  prev_5: "aurreko 5 orrialde",
  next_5: "hurrengo 5 orrialde",
  prev_3: "aurreko 3 orrialde",
  next_3: "hurrengo 3 orrialde",
  page_size: "orrien tamaina"
};
o.default = $;
var i = {}, t = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var v = {
  locale: "eu_ES",
  today: "Gaur",
  now: "Orain",
  backToToday: "Gaur itzuli",
  ok: "OK",
  clear: "Garbitu",
  month: "Hilabete",
  year: "Urte",
  timeSelect: "Ordua aukeratu",
  dateSelect: "Eguna aukeratu",
  weekSelect: "Astea aukeratu",
  monthSelect: "Hilabetea aukeratu",
  yearSelect: "Urtea aukeratu",
  decadeSelect: "Hamarkada aukeratu",
  yearFormat: "YYYY",
  dateFormat: "YYYY/M/D",
  dayFormat: "D",
  dateTimeFormat: "YYYY/M/D HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "Aurreko hilabetea (RePag)",
  nextMonth: "Urrengo hilabetea (AvPag)",
  previousYear: "Aurreko urtea (Control + ezkerra)",
  nextYear: "Urrento urtea (Control + eskuina)",
  previousDecade: "Aurreko hamarkada",
  nextDecade: "Urrengo hamarkada",
  previousCentury: "Aurreko mendea",
  nextCentury: "Urrengo mendea"
}, z = v;
n.default = z;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const h = {
  placeholder: "Aukeratu ordua"
};
var x = h;
l.default = x;
var f = k.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var E = f(n), y = f(l);
const S = {
  lang: Object.assign({
    placeholder: "Hautatu data",
    rangePlaceholder: ["Hasierako data", "Amaiera data"]
  }, E.default),
  timePickerLocale: Object.assign({}, y.default)
};
var A = S;
t.default = A;
var O = k.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var P = O(t), j = P.default;
i.default = j;
var d = k.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var T = d(o), D = d(i), Y = d(t), M = d(l);
const e = "${label} ez da ${type} balioduna", F = {
  locale: "eu",
  Pagination: T.default,
  DatePicker: Y.default,
  TimePicker: M.default,
  Calendar: D.default,
  global: {
    placeholder: "Aukeratu"
  },
  Table: {
    filterTitle: "Iragazi menua",
    filterConfirm: "Onartu",
    filterReset: "Berrasi",
    filterEmptyText: "Iragazkirik gabe",
    filterCheckall: "Autatu dena",
    filterSearchPlaceholder: "Bilatu iragazkietan",
    emptyText: "Daturik gabe",
    selectAll: "Autatu dena",
    selectInvert: "Alderantzikatu hautaketa",
    selectNone: "Hustu dena",
    selectionAll: "Autatu datu guztiak",
    sortTitle: "Ordenatu",
    expand: "Zabaldu ilera",
    collapse: "Ilera kolapsatu",
    triggerDesc: "Klik beheranzko ordenan ordenatzeko",
    triggerAsc: "Klik goranzko ordenan ordenatzeko",
    cancelSort: "Egin klik ordenamendua ezeztatzeko"
  },
  Modal: {
    okText: "Onartu",
    cancelText: "Ezeztatu",
    justOkText: "Onartu"
  },
  Popconfirm: {
    okText: "Onartu",
    cancelText: "Ezeztatu"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Bilatu hemen",
    itemUnit: "Elementu",
    itemsUnit: "Elementuak",
    remove: "Ezabatu",
    selectCurrent: "Hautatu uneko orria",
    removeCurrent: "Uneko orria ezabatu",
    selectAll: "Datu guztiak hautatu",
    removeAll: "Ezabatu datu guztiak",
    selectInvert: "Uneko orrialdea alderantzikatu"
  },
  Upload: {
    uploading: "Eguneratzen...",
    removeFile: "Fitxategi ezabatu",
    uploadError: "Errore bat gertate da fitxategia igotzerakoan",
    previewFile: "Aurrebista",
    downloadFile: "Fitxategia deskargatu"
  },
  Empty: {
    description: "Ez dago daturik"
  },
  Icon: {
    icon: "ikono"
  },
  Text: {
    edit: "Editatu",
    copy: "Kopiatu",
    copied: "Kopiatuta",
    expand: "Zabaldu"
  },
  PageHeader: {
    back: "Itzuli"
  },
  Form: {
    optional: "(aukerakoa)",
    defaultValidateMessages: {
      default: "${label} eremuaren balidazio errore",
      required: "Mesedez, sartu ${label}",
      enum: "${label} [${enum}] -tako bat izan behar da",
      whitespace: "${label} ezin da izan karaktere zuri bat",
      date: {
        format: "${label} dataren formatua baliogabea da",
        parse: "${label} ezin da data batera deitu",
        invalid: "${label} data baliogabea da"
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
        len: "${label} ${len} karaktere izan dehar ditu",
        min: "${label} gutxienez ${min} karaktere izan behar ditu",
        max: "${label} gehienez ${max} karaktere izan behar ditu",
        range: "${label} ${min}-${max} karaktere artean izan behar ditu"
      },
      number: {
        len: "${label} -ren balioa ${len} izan behar da",
        min: "${label} -ren balio minimoa ${min} da",
        max: "${label} -ren balio maximoa ${max} da",
        range: "${label} -ren balioa ${min}-${max} -ren artean izan behar da"
      },
      array: {
        len: "${len} ${label} izan behar du",
        min: "Gutxienez ${min} ${label}",
        max: "Gehienez ${max} ${label}",
        range: "${label} kopuruak ${min}-${max} -ra bitartekoa izan behar du"
      },
      pattern: {
        mismatch: "${label} ez dator bat ${pattern} patroiarekin"
      }
    }
  },
  Image: {
    preview: "Arruebista"
  }
};
var H = F;
u.default = H;
var p = u;
const U = /* @__PURE__ */ g(p), w = /* @__PURE__ */ _({
  __proto__: null,
  default: U
}, [p]);
export {
  w as e
};
