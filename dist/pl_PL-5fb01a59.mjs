import { g as b } from "./index-43e0371a.mjs";
import { i as c } from "./interopRequireDefault-40f894e3.mjs";
function $(p, y) {
  for (var u = 0; u < y.length; u++) {
    const a = y[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in p)) {
          const m = Object.getOwnPropertyDescriptor(a, t);
          m && Object.defineProperty(p, t, m.get ? m : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }));
}
var i = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var z = {
  // Options.jsx
  items_per_page: "na stronę",
  jump_to: "Idź do",
  jump_to_confirm: "potwierdź",
  page: "",
  // Pagination.jsx
  prev_page: "Poprzednia strona",
  next_page: "Następna strona",
  prev_5: "Poprzednie 5 stron",
  next_5: "Następne 5 stron",
  prev_3: "Poprzednie 3 strony",
  next_3: "Następne 3 strony",
  page_size: "rozmiar strony"
};
o.default = z;
var n = {}, r = {}, s = {};
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var w = {
  locale: "pl_PL",
  today: "Dzisiaj",
  now: "Teraz",
  backToToday: "Ustaw dzisiaj",
  ok: "OK",
  clear: "Wyczyść",
  month: "Miesiąc",
  year: "Rok",
  timeSelect: "Ustaw czas",
  dateSelect: "Ustaw datę",
  monthSelect: "Wybierz miesiąc",
  yearSelect: "Wybierz rok",
  decadeSelect: "Wybierz dekadę",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Poprzedni miesiąc (PageUp)",
  nextMonth: "Następny miesiąc (PageDown)",
  previousYear: "Ostatni rok (Ctrl + left)",
  nextYear: "Następny rok (Ctrl + right)",
  previousDecade: "Ostatnia dekada",
  nextDecade: "Następna dekada",
  previousCentury: "Ostatni wiek",
  nextCentury: "Następny wiek"
}, v = w;
s.default = v;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const k = {
  placeholder: "Wybierz godzinę"
};
var P = k;
l.default = P;
var f = c.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var g = f(s), j = f(l);
const x = {
  lang: Object.assign({
    placeholder: "Wybierz datę",
    rangePlaceholder: ["Data początkowa", "Data końcowa"]
  }, g.default),
  timePickerLocale: Object.assign({}, j.default)
};
var O = x;
r.default = O;
var h = c.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var T = h(r), L = T.default;
n.default = L;
var d = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var D = d(o), M = d(n), S = d(r), Y = d(l);
const e = "${label} nie posiada poprawnej wartości dla typu ${type}", W = {
  locale: "pl",
  Pagination: D.default,
  DatePicker: S.default,
  TimePicker: Y.default,
  Calendar: M.default,
  global: {
    placeholder: "Wybierz"
  },
  Table: {
    filterTitle: "Menu filtra",
    filterConfirm: "OK",
    filterReset: "Usuń filtry",
    filterEmptyText: "Brak filtrów",
    filterCheckall: "Wybierz wszystkie elementy",
    filterSearchPlaceholder: "Szukaj w filtrach",
    emptyText: "Brak danych",
    selectAll: "Zaznacz bieżącą stronę",
    selectInvert: "Odwróć zaznaczenie",
    selectNone: "Wyczyść",
    selectionAll: "Wybierz wszystkie",
    sortTitle: "Sortowanie",
    expand: "Rozwiń wiersz",
    collapse: "Zwiń wiersz",
    triggerDesc: "Sortuj malejąco",
    triggerAsc: "Sortuj rosnąco",
    cancelSort: "Usuń sortowanie"
  },
  Modal: {
    okText: "OK",
    cancelText: "Anuluj",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Anuluj"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Szukaj",
    itemUnit: "obiekt",
    itemsUnit: "obiekty",
    remove: "Usuń",
    selectCurrent: "Wybierz aktualną stronę",
    removeCurrent: "Usuń aktualną stronę",
    selectAll: "Wybierz wszystkie",
    removeAll: "Usuń wszystkie",
    selectInvert: "Odwróć wybór"
  },
  Upload: {
    uploading: "Wysyłanie...",
    removeFile: "Usuń plik",
    uploadError: "Błąd wysyłania",
    previewFile: "Podejrzyj plik",
    downloadFile: "Pobieranie pliku"
  },
  Empty: {
    description: "Brak danych"
  },
  Icon: {
    icon: "Ikona"
  },
  Text: {
    edit: "Edytuj",
    copy: "Kopiuj",
    copied: "Skopiowany",
    expand: "Rozwiń"
  },
  PageHeader: {
    back: "Wstecz"
  },
  Form: {
    optional: "(opcjonalne)",
    defaultValidateMessages: {
      default: "Błąd walidacji dla pola ${label}",
      required: "Pole ${label} jest wymagane",
      enum: "Pole ${label} musi posiadać wartość z listy: [${enum}]",
      whitespace: "Pole ${label} nie może być puste",
      date: {
        format: "${label} posiada zły format daty",
        parse: "${label} nie może zostać zinterpretowane jako data",
        invalid: "${label} jest niepoprawną datą"
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
        len: "${label} musi posiadać ${len} znaków",
        min: "${label} musi posiadać co namniej ${min} znaków",
        max: "${label} musi posiadać maksymalnie ${max} znaków",
        range: "${label} musi posiadać między ${min} a ${max} znaków"
      },
      number: {
        len: "${label} musi mieć wartość o długości ${len}",
        min: "${label} musi mieć wartość większą lub równą ${min}",
        max: "${label} musi mieć wartość mniejszą lub równą ${max}",
        range: "${label} musi mieć wartość pomiędzy ${min} a ${max}"
      },
      array: {
        len: "${label} musi posiadać ${len} elementów",
        min: "${label} musi posiadać co najmniej ${min} elementów",
        max: "${label} musi posiadać maksymalnie ${max} elementów",
        range: "${label} musi posiadać między ${min} a ${max} elementów"
      },
      pattern: {
        mismatch: "${label} nie posiada wartości zgodnej ze wzorem ${pattern}"
      }
    }
  },
  Image: {
    preview: "Podgląd"
  }
};
var U = W;
i.default = U;
var _ = i;
const C = /* @__PURE__ */ b(_), N = /* @__PURE__ */ $({
  __proto__: null,
  default: C
}, [_]);
export {
  N as p
};
