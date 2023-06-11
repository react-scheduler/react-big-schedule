import { g as h } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function b(u, m) {
  for (var s = 0; s < m.length; s++) {
    const a = m[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in u)) {
          const f = Object.getOwnPropertyDescriptor(a, l);
          f && Object.defineProperty(u, l, f.get ? f : {
            enumerable: !0,
            get: () => a[l]
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
var g = {
  // Options.jsx
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination.jsx
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页",
  page_size: "页码"
};
n.default = g;
var i = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var x = {
  locale: "zh_CN",
  today: "今天",
  now: "此刻",
  backToToday: "返回今天",
  ok: "确定",
  timeSelect: "选择时间",
  dateSelect: "选择日期",
  weekSelect: "选择周",
  clear: "清除",
  month: "月",
  year: "年",
  previousMonth: "上个月 (翻页上键)",
  nextMonth: "下个月 (翻页下键)",
  monthSelect: "选择月份",
  yearSelect: "选择年份",
  decadeSelect: "选择年代",
  yearFormat: "YYYY年",
  dayFormat: "D日",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH时mm分ss秒",
  previousYear: "上一年 (Control键加左方向键)",
  nextYear: "下一年 (Control键加右方向键)",
  previousDecade: "上一年代",
  nextDecade: "下一年代",
  previousCentury: "上一世纪",
  nextCentury: "下一世纪"
}, y = x;
d.default = y;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const C = {
  placeholder: "请选择时间",
  rangePlaceholder: ["开始时间", "结束时间"]
};
var P = C;
r.default = P;
var _ = p.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var z = _(d), N = _(r);
const $ = {
  lang: Object.assign({
    placeholder: "请选择日期",
    yearPlaceholder: "请选择年份",
    quarterPlaceholder: "请选择季度",
    monthPlaceholder: "请选择月份",
    weekPlaceholder: "请选择周",
    rangePlaceholder: ["开始日期", "结束日期"],
    rangeYearPlaceholder: ["开始年份", "结束年份"],
    rangeMonthPlaceholder: ["开始月份", "结束月份"],
    rangeQuarterPlaceholder: ["开始季度", "结束季度"],
    rangeWeekPlaceholder: ["开始周", "结束周"]
  }, z.default),
  timePickerLocale: Object.assign({}, N.default)
};
$.lang.ok = "确定";
var T = $;
t.default = T;
var j = p.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var k = j(t), Y = k.default;
i.default = Y;
var c = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = c(n), O = c(i), D = c(t), F = c(r);
const e = "${label}不是一个有效的${type}", S = {
  locale: "zh-cn",
  Pagination: M.default,
  DatePicker: D.default,
  TimePicker: F.default,
  Calendar: O.default,
  // locales for all components
  global: {
    placeholder: "请选择"
  },
  Table: {
    filterTitle: "筛选",
    filterConfirm: "确定",
    filterReset: "重置",
    filterEmptyText: "无筛选项",
    filterCheckall: "全选",
    filterSearchPlaceholder: "在筛选项中搜索",
    selectAll: "全选当页",
    selectInvert: "反选当页",
    selectNone: "清空所有",
    selectionAll: "全选所有",
    sortTitle: "排序",
    expand: "展开行",
    collapse: "关闭行",
    triggerDesc: "点击降序",
    triggerAsc: "点击升序",
    cancelSort: "取消排序"
  },
  Modal: {
    okText: "确定",
    cancelText: "取消",
    justOkText: "知道了"
  },
  Tour: {
    Next: "下一步",
    Previous: "上一步",
    Finish: "结束导览"
  },
  Popconfirm: {
    cancelText: "取消",
    okText: "确定"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "请输入搜索内容",
    itemUnit: "项",
    itemsUnit: "项",
    remove: "删除",
    selectCurrent: "全选当页",
    removeCurrent: "删除当页",
    selectAll: "全选所有",
    removeAll: "删除全部",
    selectInvert: "反选当页"
  },
  Upload: {
    uploading: "文件上传中",
    removeFile: "删除文件",
    uploadError: "上传错误",
    previewFile: "预览文件",
    downloadFile: "下载文件"
  },
  Empty: {
    description: "暂无数据"
  },
  Icon: {
    icon: "图标"
  },
  Text: {
    edit: "编辑",
    copy: "复制",
    copied: "复制成功",
    expand: "展开"
  },
  PageHeader: {
    back: "返回"
  },
  Form: {
    optional: "（可选）",
    defaultValidateMessages: {
      default: "字段验证错误${label}",
      required: "请输入${label}",
      enum: "${label}必须是其中一个[${enum}]",
      whitespace: "${label}不能为空字符",
      date: {
        format: "${label}日期格式无效",
        parse: "${label}不能转换为日期",
        invalid: "${label}是一个无效日期"
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
        len: "${label}须为${len}个字符",
        min: "${label}最少${min}个字符",
        max: "${label}最多${max}个字符",
        range: "${label}须在${min}-${max}字符之间"
      },
      number: {
        len: "${label}必须等于${len}",
        min: "${label}最小值为${min}",
        max: "${label}最大值为${max}",
        range: "${label}须在${min}-${max}之间"
      },
      array: {
        len: "须为${len}个${label}",
        min: "最少${min}个${label}",
        max: "最多${max}个${label}",
        range: "${label}数量须在${min}-${max}之间"
      },
      pattern: {
        mismatch: "${label}与模式不匹配${pattern}"
      }
    }
  },
  Image: {
    preview: "预览"
  },
  QRCode: {
    expired: "二维码过期",
    refresh: "点击刷新"
  },
  ColorPicker: {
    presetEmpty: "暂无"
  }
};
var w = S;
o.default = w;
var v = o;
const A = /* @__PURE__ */ h(v), R = /* @__PURE__ */ b({
  __proto__: null,
  default: A
}, [v]);
export {
  R as z
};
