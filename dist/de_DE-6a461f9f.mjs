import { g as _ } from "./index-43e0371a.mjs";
import { i as h } from "./interopRequireDefault-40f894e3.mjs";
function v(d, f) {
  for (var c = 0; c < f.length; c++) {
    const t = f[c];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in d)) {
          const m = Object.getOwnPropertyDescriptor(t, a);
          m && Object.defineProperty(d, a, m.get ? m : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ Seite",
  jump_to: "Gehe zu",
  jump_to_confirm: "bestätigen",
  page: "Seite",
  // Pagination.jsx
  prev_page: "Vorherige Seite",
  next_page: "Nächste Seite",
  prev_5: "5 Seiten zurück",
  next_5: "5 Seiten vor",
  prev_3: "3 Seiten zurück",
  next_3: "3 Seiten vor",
  page_size: "Page Size"
};
i.default = $;
var u = {}, r = {}, s = {};
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var b = {
  locale: "de_DE",
  today: "Heute",
  now: "Jetzt",
  backToToday: "Zurück zu Heute",
  ok: "OK",
  clear: "Zurücksetzen",
  month: "Monat",
  year: "Jahr",
  timeSelect: "Zeit wählen",
  dateSelect: "Datum wählen",
  monthSelect: "Wähle einen Monat",
  yearSelect: "Wähle ein Jahr",
  decadeSelect: "Wähle ein Jahrzehnt",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Vorheriger Monat (PageUp)",
  nextMonth: "Nächster Monat (PageDown)",
  previousYear: "Vorheriges Jahr (Ctrl + left)",
  nextYear: "Nächstes Jahr (Ctrl + right)",
  previousDecade: "Vorheriges Jahrzehnt",
  nextDecade: "Nächstes Jahrzehnt",
  previousCentury: "Vorheriges Jahrhundert",
  nextCentury: "Nächstes Jahrhundert"
}, D = b;
s.default = D;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const x = {
  placeholder: "Zeit auswählen",
  rangePlaceholder: ["Anfangszeit", "Endzeit"]
};
var E = x;
l.default = E;
var g = h.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var S = g(s), y = g(l);
const k = {
  lang: Object.assign({
    placeholder: "Datum auswählen",
    rangePlaceholder: ["Startdatum", "Enddatum"]
  }, S.default),
  timePickerLocale: Object.assign({}, y.default)
};
var w = k;
r.default = w;
var z = h.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var P = z(r), A = P.default;
u.default = A;
var o = h.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var M = o(i), O = o(u), T = o(r), j = o(l);
const e = "${label} ist nicht gültig. ${type} erwartet", F = {
  locale: "de",
  Pagination: M.default,
  DatePicker: T.default,
  TimePicker: j.default,
  Calendar: O.default,
  global: {
    placeholder: "Bitte auswählen"
  },
  Table: {
    filterTitle: "Filter-Menü",
    filterConfirm: "OK",
    filterReset: "Zurücksetzen",
    filterEmptyText: "Keine Filter",
    filterSearchPlaceholder: "Suche in Filtern",
    filterCheckall: "Alle auswählen",
    selectAll: "Selektiere Alle",
    selectInvert: "Selektion Invertieren",
    selectionAll: "Wählen Sie alle Daten aus",
    sortTitle: "Sortieren",
    emptyText: "Keine Daten",
    expand: "Zeile erweitern",
    collapse: "Zeile reduzieren",
    triggerDesc: "Klicken zur absteigenden  Sortierung",
    triggerAsc: "Klicken zur aufsteigenden Sortierung",
    cancelSort: "Klicken zum Abbrechen der Sortierung"
  },
  Tour: {
    Next: "Weiter",
    Previous: "Zurück",
    Finish: "Fertig"
  },
  Modal: {
    okText: "OK",
    cancelText: "Abbrechen",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Abbrechen"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Suchen",
    itemUnit: "Eintrag",
    itemsUnit: "Einträge",
    remove: "Entfernen",
    selectCurrent: "Alle auf aktueller Seite auswählen",
    removeCurrent: "Auswahl auf aktueller Seite aufheben",
    selectAll: "Alle auswählen",
    removeAll: "Auswahl aufheben",
    selectInvert: "Auswahl umkehren"
  },
  Upload: {
    uploading: "Hochladen...",
    removeFile: "Datei entfernen",
    uploadError: "Fehler beim Hochladen",
    previewFile: "Dateivorschau",
    downloadFile: "Download-Datei"
  },
  Empty: {
    description: "Keine Daten"
  },
  Text: {
    edit: "Bearbeiten",
    copy: "Kopieren",
    copied: "Kopiert",
    expand: "Erweitern"
  },
  PageHeader: {
    back: "Zurück"
  },
  Form: {
    defaultValidateMessages: {
      default: "Feld-Validierungsfehler: ${label}",
      required: "Bitte geben Sie ${label} an",
      enum: "${label} muss eines der folgenden sein [${enum}]",
      whitespace: "${label} darf kein Leerzeichen sein",
      date: {
        format: "${label} ist ein ungültiges Datumsformat",
        parse: "${label} kann nicht in ein Datum umgewandelt werden",
        invalid: "${label} ist ein ungültiges Datum"
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
        len: "${label} muss genau ${len} Zeichen lang sein",
        min: "${label} muss mindestens ${min} Zeichen lang sein",
        max: "${label} darf höchstens ${max} Zeichen lang sein",
        range: "${label} muss zwischen ${min} und ${max} Zeichen lang sein"
      },
      number: {
        len: "${label} muss gleich ${len} sein",
        min: "${label} muss mindestens ${min} sein",
        max: "${label} darf maximal ${max} sein",
        range: "${label} muss zwischen ${min} und ${max} liegen"
      },
      array: {
        len: "Es müssen ${len} ${label} sein",
        min: "Es müssen mindestens ${min} ${label} sein",
        max: "Es dürfen maximal ${max} ${label} sein",
        range: "Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen"
      },
      pattern: {
        mismatch: "${label} entspricht nicht dem ${pattern} Muster"
      }
    }
  },
  Image: {
    preview: "Vorschau"
  },
  QRCode: {
    expired: "QR-Code abgelaufen",
    refresh: "Aktualisieren"
  }
};
var Y = F;
n.default = Y;
var p = n;
const K = /* @__PURE__ */ _(p), J = /* @__PURE__ */ v({
  __proto__: null,
  default: K
}, [p]);
export {
  J as d
};
