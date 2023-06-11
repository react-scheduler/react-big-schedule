import { g as f } from "./index-43e0371a.mjs";
import { i as p } from "./interopRequireDefault-40f894e3.mjs";
function _(g, m) {
  for (var u = 0; u < m.length; u++) {
    const t = m[u];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in g)) {
          const d = Object.getOwnPropertyDescriptor(t, a);
          d && Object.defineProperty(g, a, d.get ? d : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(g, Symbol.toStringTag, { value: "Module" }));
}
var l = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ trang",
  jump_to: "Đến",
  jump_to_confirm: "xác nhận",
  page: "Trang",
  // Pagination.jsx
  prev_page: "Trang Trước",
  next_page: "Trang Kế",
  prev_5: "Về 5 Trang Trước",
  next_5: "Đến 5 Trang Kế",
  prev_3: "Về 3 Trang Trước",
  next_3: "Đến 3 Trang Kế",
  page_size: "kích thước trang"
};
i.default = $;
var o = {}, n = {}, h = {};
Object.defineProperty(h, "__esModule", {
  value: !0
});
h.default = void 0;
var b = {
  locale: "vi_VN",
  today: "Hôm nay",
  now: "Bây giờ",
  backToToday: "Trở về hôm nay",
  ok: "OK",
  clear: "Xóa",
  month: "Tháng",
  year: "Năm",
  timeSelect: "Chọn thời gian",
  dateSelect: "Chọn ngày",
  weekSelect: "Chọn tuần",
  monthSelect: "Chọn tháng",
  yearSelect: "Chọn năm",
  decadeSelect: "Chọn thập kỷ",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Tháng trước (PageUp)",
  nextMonth: "Tháng sau (PageDown)",
  previousYear: "Năm trước (Control + left)",
  nextYear: "Năm sau (Control + right)",
  previousDecade: "Thập kỷ trước",
  nextDecade: "Thập kỷ sau",
  previousCentury: "Thế kỷ trước",
  nextCentury: "Thế kỷ sau"
}, T = b;
h.default = T;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const y = {
  placeholder: "Chọn thời gian",
  rangePlaceholder: ["Bắt đầu", "Kết thúc"]
};
var k = y;
r.default = k;
var s = p.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var x = s(h), N = s(r);
const C = {
  lang: Object.assign({
    placeholder: "Chọn thời điểm",
    yearPlaceholder: "Chọn năm",
    quarterPlaceholder: "Chọn quý",
    monthPlaceholder: "Chọn tháng",
    weekPlaceholder: "Chọn tuần",
    rangePlaceholder: ["Ngày bắt đầu", "Ngày kết thúc"],
    rangeYearPlaceholder: ["Năm bắt đầu", "Năm kết thúc"],
    rangeQuarterPlaceholder: ["Quý bắt đầu", "Quý kết thúc"],
    rangeMonthPlaceholder: ["Tháng bắt đầu", "Tháng kết thúc"],
    rangeWeekPlaceholder: ["Tuần bắt đầu", "Tuần kết thúc"]
  }, x.default),
  timePickerLocale: Object.assign({}, N.default)
};
var P = C;
n.default = P;
var V = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = V(n), j = M.default;
o.default = j;
var c = p.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var O = c(i), Y = c(o), D = c(n), S = c(r);
const e = "${label} không phải kiểu ${type} hợp lệ", F = {
  locale: "vi",
  Pagination: O.default,
  DatePicker: D.default,
  TimePicker: S.default,
  Calendar: Y.default,
  global: {
    placeholder: "Vui lòng chọn"
  },
  Table: {
    filterTitle: "Bộ lọc",
    filterConfirm: "Đồng ý",
    filterReset: "Bỏ lọc",
    filterEmptyText: "Không có bộ lọc",
    filterCheckall: "Chọn tất cả",
    filterSearchPlaceholder: "Tìm kiếm bộ lọc",
    emptyText: "Trống",
    selectAll: "Chọn tất cả",
    selectInvert: "Chọn ngược lại",
    selectNone: "Bỏ chọn tất cả",
    selectionAll: "Chọn tất cả",
    sortTitle: "Sắp xếp",
    expand: "Mở rộng dòng",
    collapse: "Thu gọn dòng",
    triggerDesc: "Nhấp để sắp xếp giảm dần",
    triggerAsc: "Nhấp để sắp xếp tăng dần",
    cancelSort: "Nhấp để hủy sắp xếp"
  },
  Tour: {
    Next: "Tiếp",
    Previous: "Trước",
    Finish: "Hoàn thành"
  },
  Modal: {
    okText: "Đồng ý",
    cancelText: "Hủy",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "Đồng ý",
    cancelText: "Hủy"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Tìm ở đây",
    itemUnit: "mục",
    itemsUnit: "mục",
    remove: "Gỡ bỏ",
    selectCurrent: "Chọn trang hiện tại",
    removeCurrent: "Gỡ bỏ trang hiện tại",
    selectAll: "Chọn tất cả",
    removeAll: "Gỡ bỏ tất cả",
    selectInvert: "Đảo ngược trang hiện tại"
  },
  Upload: {
    uploading: "Đang tải lên...",
    removeFile: "Gỡ bỏ tập tin",
    uploadError: "Lỗi tải lên",
    previewFile: "Xem trước tập tin",
    downloadFile: "Tải tập tin"
  },
  Empty: {
    description: "Trống"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Chỉnh sửa",
    copy: "Sao chép",
    copied: "Đã sao chép",
    expand: "Mở rộng"
  },
  PageHeader: {
    back: "Quay lại"
  },
  Form: {
    optional: "(Tùy chọn)",
    defaultValidateMessages: {
      default: "${label} không đáp ứng điều kiện quy định",
      required: "Hãy nhập thông tin cho trường ${label}",
      enum: "${label} phải có giá trị nằm trong tập [${enum}]",
      whitespace: "${label} không được chứa khoảng trắng",
      date: {
        format: "${label} sai định dạng ngày tháng",
        parse: "Không thể chuyển ${label} sang kiểu Ngày tháng",
        invalid: "${label} không phải giá trị Ngày tháng hợp lệ"
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
        len: "${label} phải dài đúng ${len} ký tự",
        min: "Độ dài tối thiểu trường ${label} là ${min} ký tự",
        max: "Độ dài tối đa trường ${label} là ${max} ký tự",
        range: "Độ dài trường ${label} phải từ ${min} đến ${max} ký tự"
      },
      number: {
        len: "${label} phải bằng ${len}",
        min: "${label} phải lớn hơn hoặc bằng ${min}",
        max: "${label} phải nhỏ hơn hoặc bằng ${max}",
        range: "${label} phải nằm trong khoảng ${min}-${max}"
      },
      array: {
        len: "Mảng ${label} phải có ${len} phần tử ",
        min: "Mảng ${label} phải chứa tối thiểu ${min} phần tử ",
        max: "Mảng ${label} phải chứa tối đa ${max} phần tử ",
        range: "Mảng ${label} phải chứa từ ${min}-${max} phần tử"
      },
      pattern: {
        mismatch: "${label} không thỏa mãn mẫu kiểm tra ${pattern}"
      }
    }
  },
  Image: {
    preview: "Xem trước"
  },
  QRCode: {
    expired: "Mã QR hết hạn",
    refresh: "Làm mới"
  }
};
var w = F;
l.default = w;
var v = l;
const q = /* @__PURE__ */ f(v), A = /* @__PURE__ */ _({
  __proto__: null,
  default: q
}, [v]);
export {
  A as v
};
