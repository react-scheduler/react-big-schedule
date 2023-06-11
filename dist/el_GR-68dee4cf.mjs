import { g as m } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function g(n, v) {
  for (var _ = 0; _ < v.length; _++) {
    const e = v[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const f = Object.getOwnPropertyDescriptor(e, t);
          f && Object.defineProperty(n, t, f.get ? f : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var y = {
  // Options.jsx
  items_per_page: "/ σελίδα",
  jump_to: "Μετάβαση",
  jump_to_confirm: "επιβεβαιώνω",
  page: "",
  // Pagination.jsx
  prev_page: "Προηγούμενη Σελίδα",
  next_page: "Επόμενη Σελίδα",
  prev_5: "Προηγούμενες 5 Σελίδες",
  next_5: "Επόμενες 5 σελίδες",
  prev_3: "Προηγούμενες 3 Σελίδες",
  next_3: "Επόμενες 3 Σελίδες",
  page_size: "Μέγεθος σελίδας"
};
o.default = y;
var u = {}, a = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var R = {
  locale: "el_GR",
  today: "Σήμερα",
  now: "Τώρα",
  backToToday: "Πίσω στη σημερινή μέρα",
  ok: "OK",
  clear: "Καθαρισμός",
  month: "Μήνας",
  year: "Έτος",
  timeSelect: "Επιλογή ώρας",
  dateSelect: "Επιλογή ημερομηνίας",
  monthSelect: "Επιλογή μήνα",
  yearSelect: "Επιλογή έτους",
  decadeSelect: "Επιλογή δεκαετίας",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Προηγούμενος μήνας (PageUp)",
  nextMonth: "Επόμενος μήνας (PageDown)",
  previousYear: "Προηγούμενο έτος (Control + αριστερά)",
  nextYear: "Επόμενο έτος (Control + δεξιά)",
  previousDecade: "Προηγούμενη δεκαετία",
  nextDecade: "Επόμενη δεκαετία",
  previousCentury: "Προηγούμενος αιώνας",
  nextCentury: "Επόμενος αιώνας"
}, $ = R;
d.default = $;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const P = {
  placeholder: "Επιλέξτε ώρα"
};
var G = P;
r.default = G;
var p = c.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var b = p(d), j = p(r);
const x = {
  lang: Object.assign({
    placeholder: "Επιλέξτε ημερομηνία",
    rangePlaceholder: ["Αρχική ημερομηνία", "Τελική ημερομηνία"]
  }, b.default),
  timePickerLocale: Object.assign({}, j.default)
};
var O = x;
a.default = O;
var Y = c.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var D = Y(a), T = D.default;
u.default = T;
var i = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var M = i(o), h = i(u), k = i(a), F = i(r);
const C = {
  locale: "el",
  Pagination: M.default,
  DatePicker: k.default,
  TimePicker: F.default,
  Calendar: h.default,
  Table: {
    filterTitle: "Μενού φίλτρων",
    filterConfirm: "ΟΚ",
    filterReset: "Επαναφορά",
    selectAll: "Επιλογή τρέχουσας σελίδας",
    selectInvert: "Αντιστροφή τρέχουσας σελίδας"
  },
  Modal: {
    okText: "ΟΚ",
    cancelText: "Άκυρο",
    justOkText: "ΟΚ"
  },
  Popconfirm: {
    okText: "ΟΚ",
    cancelText: "Άκυρο"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Αναζήτηση",
    itemUnit: "αντικείμενο",
    itemsUnit: "αντικείμενα"
  },
  Upload: {
    uploading: "Μεταφόρτωση...",
    removeFile: "Αφαίρεση αρχείου",
    uploadError: "Σφάλμα μεταφόρτωσης",
    previewFile: "Προεπισκόπηση αρχείου",
    downloadFile: "Λήψη αρχείου"
  },
  Empty: {
    description: "Δεν υπάρχουν δεδομένα"
  }
};
var S = C;
l.default = S;
var s = l;
const w = /* @__PURE__ */ m(s), U = /* @__PURE__ */ g({
  __proto__: null,
  default: w
}, [s]);
export {
  U as e
};
