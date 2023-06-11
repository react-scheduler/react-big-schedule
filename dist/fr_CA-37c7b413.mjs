import { g as h } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
function _(c, f) {
  for (var s = 0; s < f.length; s++) {
    const a = f[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in c)) {
          const p = Object.getOwnPropertyDescriptor(a, r);
          p && Object.defineProperty(c, r, p.get ? p : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Aller à",
  jump_to_confirm: "confirmer",
  page: "Page",
  // Pagination.jsx
  prev_page: "Page précédente",
  next_page: "Page suivante",
  prev_5: "5 Pages précédentes",
  next_5: "5 Pages suivantes",
  prev_3: "3 Pages précédentes",
  next_3: "3 Pages suivantes",
  page_size: "taille de la page"
};
i.default = $;
var o = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var b = {
  locale: "fr_CA",
  today: "Aujourd'hui",
  now: "Maintenant",
  backToToday: "Aujourd'hui",
  ok: "OK",
  clear: "Rétablir",
  month: "Mois",
  year: "Année",
  timeSelect: "Sélectionner l'heure",
  dateSelect: "Sélectionner la date",
  monthSelect: "Choisissez un mois",
  yearSelect: "Choisissez une année",
  decadeSelect: "Choisissez une décennie",
  yearFormat: "YYYY",
  dateFormat: "DD/MM/YYYY",
  dayFormat: "DD",
  dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Mois précédent (PageUp)",
  nextMonth: "Mois suivant (PageDown)",
  previousYear: "Année précédente (Ctrl + gauche)",
  nextYear: "Année prochaine (Ctrl + droite)",
  previousDecade: "Décennie précédente",
  nextDecade: "Décennie suivante",
  previousCentury: "Siècle précédent",
  nextCentury: "Siècle suivant"
}, A = b;
u.default = A;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const P = {
  placeholder: "Sélectionner l'heure",
  rangePlaceholder: ["Heure de début", "Heure de fin"]
};
var x = P;
l.default = x;
var v = m.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var C = v(u), y = v(l);
const D = {
  lang: Object.assign({
    placeholder: "Sélectionner une date",
    yearPlaceholder: "Sélectionner une année",
    quarterPlaceholder: "Sélectionner un trimestre",
    monthPlaceholder: "Sélectionner un mois",
    weekPlaceholder: "Sélectionner une semaine",
    rangePlaceholder: ["Date de début", "Date de fin"],
    rangeYearPlaceholder: ["Année de début", "Année de fin"],
    rangeMonthPlaceholder: ["Mois de début", "Mois de fin"],
    rangeWeekPlaceholder: ["Semaine de début", "Semaine de fin"]
  }, C.default),
  timePickerLocale: Object.assign({}, y.default)
};
var S = D;
t.default = S;
var T = m.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = T(t), L = M.default;
o.default = L;
var d = m.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var j = d(i), O = d(o), Y = d(t), k = d(l);
const e = "La valeur du champ ${label} n'est pas valide pour le type ${type}", F = {
  locale: "fr",
  Pagination: j.default,
  DatePicker: Y.default,
  TimePicker: k.default,
  Calendar: O.default,
  Table: {
    filterTitle: "Filtrer",
    filterConfirm: "OK",
    filterReset: "Réinitialiser",
    filterEmptyText: "Aucun filtre",
    filterCheckall: "Tout sélectionner",
    filterSearchPlaceholder: "Chercher dans les filtres",
    emptyText: "Aucune donnée",
    selectAll: "Sélectionner la page actuelle",
    selectInvert: "Inverser la sélection de la page actuelle",
    selectNone: "Désélectionner toutes les données",
    selectionAll: "Sélectionner toutes les données",
    sortTitle: "Trier",
    expand: "Développer la ligne",
    collapse: "Réduire la ligne",
    triggerDesc: "Trier par ordre décroissant",
    triggerAsc: "Trier par ordre croissant",
    cancelSort: "Annuler le tri"
  },
  Modal: {
    okText: "OK",
    cancelText: "Annuler",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Annuler"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Rechercher",
    itemUnit: "élément",
    itemsUnit: "éléments",
    remove: "Désélectionner",
    selectCurrent: "Sélectionner la page actuelle",
    removeCurrent: "Désélectionner la page actuelle",
    selectAll: "Sélectionner toutes les données",
    removeAll: "Désélectionner toutes les données",
    selectInvert: "Inverser la sélection de la page actuelle"
  },
  Upload: {
    uploading: "Téléchargement...",
    removeFile: "Effacer le fichier",
    uploadError: "Erreur de téléchargement",
    previewFile: "Fichier de prévisualisation",
    downloadFile: "Télécharger un fichier"
  },
  Empty: {
    description: "Aucune donnée"
  },
  Icon: {
    icon: "icône"
  },
  Text: {
    edit: "Éditer",
    copy: "Copier",
    copied: "Copie effectuée",
    expand: "Développer"
  },
  PageHeader: {
    back: "Retour"
  },
  Form: {
    optional: "(optionnel)",
    defaultValidateMessages: {
      default: "Erreur de validation pour le champ ${label}",
      required: "Le champ ${label} est obligatoire",
      enum: "La valeur du champ ${label} doit être parmi [${enum}]",
      whitespace: "La valeur du champ ${label} ne peut pas être vide",
      date: {
        format: "La valeur du champ ${label} n'est pas au format date",
        parse: "La valeur du champ ${label} ne peut pas être convertie vers une date",
        invalid: "La valeur du champ ${label} n'est pas une date valide"
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
        len: "La taille du champ ${label} doit être de ${len} caractères",
        min: "La taille du champ ${label} doit être au minimum de ${min} caractères",
        max: "La taille du champ ${label} doit être au maximum de ${max} caractères",
        range: "La taille du champ ${label} doit être entre ${min} et ${max} caractères"
      },
      number: {
        len: "La valeur du champ ${label} doit être égale à ${len}",
        min: "La valeur du champ ${label} doit être plus grande que ${min}",
        max: "La valeur du champ ${label} doit être plus petit que ${max}",
        range: "La valeur du champ ${label} doit être entre ${min} et ${max}"
      },
      array: {
        len: "La taille du tableau ${label} doit être de ${len}",
        min: "La taille du tableau ${label} doit être au minimum de ${min}",
        max: "La taille du tableau ${label} doit être au maximum de ${max}",
        range: "La taille du tableau ${label} doit être entre ${min}-${max}"
      },
      pattern: {
        mismatch: "La valeur du champ ${label} ne correspond pas au modèle ${pattern}"
      }
    }
  },
  Image: {
    preview: "Aperçu"
  }
};
var R = F;
n.default = R;
var g = n;
const q = /* @__PURE__ */ h(g), I = /* @__PURE__ */ _({
  __proto__: null,
  default: q
}, [g]);
export {
  I as f
};
