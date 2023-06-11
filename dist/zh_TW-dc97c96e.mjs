import { i as o } from "./interopRequireDefault-40f894e3.mjs";
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var _ = {
  // Options.jsx
  items_per_page: "條/頁",
  jump_to: "跳至",
  jump_to_confirm: "確定",
  page: "頁",
  // Pagination.jsx
  prev_page: "上一頁",
  next_page: "下一頁",
  prev_5: "向前 5 頁",
  next_5: "向後 5 頁",
  prev_3: "向前 3 頁",
  next_3: "向後 3 頁",
  page_size: "頁碼"
};
t.default = _;
var l = {}, e = {}, a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var c = {
  locale: "zh_TW",
  today: "今天",
  now: "此刻",
  backToToday: "返回今天",
  ok: "確定",
  timeSelect: "選擇時間",
  dateSelect: "選擇日期",
  weekSelect: "選擇周",
  clear: "清除",
  month: "月",
  year: "年",
  previousMonth: "上個月 (翻頁上鍵)",
  nextMonth: "下個月 (翻頁下鍵)",
  monthSelect: "選擇月份",
  yearSelect: "選擇年份",
  decadeSelect: "選擇年代",
  yearFormat: "YYYY年",
  dayFormat: "D日",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
  previousYear: "上一年 (Control鍵加左方向鍵)",
  nextYear: "下一年 (Control鍵加右方向鍵)",
  previousDecade: "上一年代",
  nextDecade: "下一年代",
  previousCentury: "上一世紀",
  nextCentury: "下一世紀"
}, n = c;
a.default = n;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const v = {
  placeholder: "請選擇時間"
};
var i = v;
r.default = i;
var d = o.default;
Object.defineProperty(e, "__esModule", {
  value: !0
});
e.default = void 0;
var f = d(a), p = d(r);
const u = {
  lang: Object.assign({
    placeholder: "請選擇日期",
    yearPlaceholder: "請選擇年份",
    quarterPlaceholder: "請選擇季度",
    monthPlaceholder: "請選擇月份",
    weekPlaceholder: "請選擇周",
    rangePlaceholder: ["開始日期", "結束日期"],
    rangeYearPlaceholder: ["開始年份", "結束年份"],
    rangeMonthPlaceholder: ["開始月份", "結束月份"],
    rangeQuarterPlaceholder: ["開始季度", "結束季度"],
    rangeWeekPlaceholder: ["開始周", "結束周"]
  }, f.default),
  timePickerLocale: Object.assign({}, p.default)
};
u.lang.ok = "確 定";
var h = u;
e.default = h;
var s = o.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var m = s(e), P = m.default;
l.default = P;
export {
  l as a,
  e as b,
  r as c,
  t as z
};
