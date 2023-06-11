import { g as c } from "./index-43e0371a.mjs";
import { i as $ } from "./interopRequireDefault-40f894e3.mjs";
import { z as p, a as u, b as d, c as f } from "./zh_TW-dc97c96e.mjs";
function b(o, s) {
  for (var n = 0; n < s.length; n++) {
    const l = s[n];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const a in l)
        if (a !== "default" && !(a in o)) {
          const i = Object.getOwnPropertyDescriptor(l, a);
          i && Object.defineProperty(o, a, i.get ? i : {
            enumerable: !0,
            get: () => l[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var t = {}, r = $.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var g = r(p), T = r(u), _ = r(d), x = r(f);
const e = "${label}不是一個有效的${type}", h = {
  locale: "zh-tw",
  Pagination: g.default,
  DatePicker: _.default,
  TimePicker: x.default,
  Calendar: T.default,
  global: {
    placeholder: "請選擇"
  },
  Table: {
    filterTitle: "篩選器",
    filterConfirm: "確定",
    filterReset: "重置",
    filterEmptyText: "無篩選項",
    selectAll: "全部選取",
    selectInvert: "反向選取",
    selectNone: "清空所有",
    selectionAll: "全選所有",
    sortTitle: "排序",
    expand: "展開行",
    collapse: "關閉行",
    triggerDesc: "點擊降序",
    triggerAsc: "點擊升序",
    cancelSort: "取消排序"
  },
  Modal: {
    okText: "確定",
    cancelText: "取消",
    justOkText: "知道了"
  },
  Tour: {
    Next: "下一步",
    Previous: "上一步",
    Finish: "結束導覽"
  },
  Popconfirm: {
    okText: "確定",
    cancelText: "取消"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "搜尋資料",
    itemUnit: "項目",
    itemsUnit: "項目",
    remove: "删除",
    selectCurrent: "全選當頁",
    removeCurrent: "删除當頁",
    selectAll: "全選所有",
    removeAll: "删除全部",
    selectInvert: "反選當頁"
  },
  Upload: {
    uploading: "正在上傳...",
    removeFile: "刪除檔案",
    uploadError: "上傳失敗",
    previewFile: "檔案預覽",
    downloadFile: "下载文件"
  },
  Empty: {
    description: "無此資料"
  },
  Icon: {
    icon: "圖標"
  },
  Text: {
    edit: "編輯",
    copy: "複製",
    copied: "複製成功",
    expand: "展開"
  },
  PageHeader: {
    back: "返回"
  },
  Form: {
    optional: "（可選）",
    defaultValidateMessages: {
      default: "字段驗證錯誤${label}",
      required: "請輸入${label}",
      enum: "${label}必須是其中一個[${enum}]",
      whitespace: "${label}不能為空字符",
      date: {
        format: "${label}日期格式無效",
        parse: "${label}不能轉換為日期",
        invalid: "${label}是一個無效日期"
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
        len: "${label}須為${len}個字符",
        min: "${label}最少${min}個字符",
        max: "${label}最多${max}個字符",
        range: "${label}須在${min}-${max}字符之間"
      },
      number: {
        len: "${label}必須等於${len}",
        min: "${label}最小值為${min}",
        max: "${label}最大值為${max}",
        range: "${label}須在${min}-${max}之間"
      },
      array: {
        len: "須為${len}個${label}",
        min: "最少${min}個${label}",
        max: "最多${max}個${label}",
        range: "${label}數量須在${min}-${max}之間"
      },
      pattern: {
        mismatch: "${label}與模式不匹配${pattern}"
      }
    }
  },
  Image: {
    preview: "預覽"
  }
};
var v = h;
t.default = v;
var m = t;
const y = /* @__PURE__ */ c(m), j = /* @__PURE__ */ b({
  __proto__: null,
  default: y
}, [m]);
export {
  j as z
};
