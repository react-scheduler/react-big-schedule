import { i as l } from "./interopRequireDefault-40f894e3.mjs";
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var n = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
r.default = n;
var o = {}, e = {}, a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var u = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, c = u;
a.default = c;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const i = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
var s = i;
t.default = s;
var d = l.default;
Object.defineProperty(e, "__esModule", {
  value: !0
});
e.default = void 0;
var _ = d(a), v = d(t);
const f = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, _.default),
  timePickerLocale: Object.assign({}, v.default)
};
var h = f;
e.default = h;
var m = l.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var p = m(e), P = p.default;
o.default = P;
export {
  o as a,
  e as b,
  t as c,
  r as e
};
