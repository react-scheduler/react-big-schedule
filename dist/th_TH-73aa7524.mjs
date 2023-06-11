import { g as v } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
function h(c, p) {
  for (var f = 0; f < p.length; f++) {
    const t = p[f];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in c)) {
          const s = Object.getOwnPropertyDescriptor(t, a);
          s && Object.defineProperty(c, a, s.get ? s : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var o = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ หน้า",
  jump_to: "ไปยัง",
  jump_to_confirm: "ยืนยัน",
  page: "หน้า",
  // Pagination.jsx
  prev_page: "หน้าก่อนหน้า",
  next_page: "หน้าถัดไป",
  prev_5: "ย้อนกลับ 5 หน้า",
  next_5: "ถัดไป 5 หน้า",
  prev_3: "ย้อนกลับ 3 หน้า",
  next_3: "ถัดไป 3 หน้า",
  page_size: "ขนาดหน้า"
};
n.default = b;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var g = {
  locale: "th_TH",
  today: "วันนี้",
  now: "ตอนนี้",
  backToToday: "กลับไปยังวันนี้",
  ok: "ตกลง",
  clear: "ลบล้าง",
  month: "เดือน",
  year: "ปี",
  timeSelect: "เลือกเวลา",
  dateSelect: "เลือกวัน",
  monthSelect: "เลือกเดือน",
  yearSelect: "เลือกปี",
  decadeSelect: "เลือกทศวรรษ",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "เดือนก่อนหน้า (PageUp)",
  nextMonth: "เดือนถัดไป (PageDown)",
  previousYear: "ปีก่อนหน้า (Control + left)",
  nextYear: "ปีถัดไป (Control + right)",
  previousDecade: "ทศวรรษก่อนหน้า",
  nextDecade: "ทศวรรษถัดไป",
  previousCentury: "ศตวรรษก่อนหน้า",
  nextCentury: "ศตวรรษถัดไป"
}, T = g;
d.default = T;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const x = {
  placeholder: "เลือกเวลา"
};
var y = x;
r.default = y;
var _ = m.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var P = _(d), H = _(r);
const j = {
  lang: Object.assign({
    placeholder: "เลือกวันที่",
    yearPlaceholder: "เลือกปี",
    quarterPlaceholder: "เลือกไตรมาส",
    monthPlaceholder: "เลือกเดือน",
    weekPlaceholder: "เลือกสัปดาห์",
    rangePlaceholder: ["วันเริ่มต้น", "วันสิ้นสุด"],
    rangeYearPlaceholder: ["ปีเริ่มต้น", "ปีสิ้นสุด"],
    rangeMonthPlaceholder: ["เดือนเริ่มต้น", "เดือนสิ้นสุด"],
    rangeWeekPlaceholder: ["สัปดาห์เริ่มต้น", "สัปดาห์สิ้นสุด"]
  }, P.default),
  timePickerLocale: Object.assign({}, H.default)
};
var Y = j;
l.default = Y;
var D = m.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var M = D(l), O = M.default;
i.default = O;
var u = m.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var k = u(n), C = u(i), F = u(l), S = u(r);
const e = "${label} ไม่ใช่ ${type} ที่ถูกต้อง", w = {
  locale: "th",
  Pagination: k.default,
  DatePicker: F.default,
  TimePicker: S.default,
  Calendar: C.default,
  global: {
    placeholder: "กรุณาเลือก"
  },
  Table: {
    filterTitle: "ตัวกรอง",
    filterConfirm: "ยืนยัน",
    filterReset: "รีเซ็ต",
    filterEmptyText: "ไม่มีตัวกรอง",
    filterCheckall: "เลือกรายการทั้งหมด",
    filterSearchPlaceholder: "ค้นหาตัวกรอง",
    emptyText: "ไม่มีข้อมูล",
    selectAll: "เลือกทั้งหมดในหน้านี้",
    selectInvert: "กลับสถานะการเลือกในหน้านี้",
    selectNone: "ไม่เลือกข้อมูลทั้งหมด",
    selectionAll: "เลือกข้อมูลทั้งหมด",
    sortTitle: "เรียง",
    expand: "แสดงแถวข้อมูล",
    collapse: "ย่อแถวข้อมูล",
    triggerDesc: "คลิกเรียงจากมากไปน้อย",
    triggerAsc: "คลิกเรียงจากน้อยไปมาก",
    cancelSort: "คลิกเพื่อยกเลิกการเรียง"
  },
  Tour: {
    Next: "ถัดไป",
    Previous: "ย้อนกลับ",
    Finish: "เสร็จสิ้น"
  },
  Modal: {
    okText: "ตกลง",
    cancelText: "ยกเลิก",
    justOkText: "ตกลง"
  },
  Popconfirm: {
    okText: "ตกลง",
    cancelText: "ยกเลิก"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ค้นหา",
    itemUnit: "ชิ้น",
    itemsUnit: "ชิ้น",
    remove: "นำออก",
    selectCurrent: "เลือกทั้งหมดในหน้านี้",
    removeCurrent: "นำออกทั้งหมดในหน้านี้",
    selectAll: "เลือกข้อมูลทั้งหมด",
    removeAll: "นำข้อมูลออกทั้งหมด",
    selectInvert: "กลับสถานะการเลือกในหน้านี้"
  },
  Upload: {
    uploading: "กำลังอัปโหลด...",
    removeFile: "ลบไฟล์",
    uploadError: "เกิดข้อผิดพลาดในการอัปโหลด",
    previewFile: "ดูตัวอย่างไฟล์",
    downloadFile: "ดาวน์โหลดไฟล์"
  },
  Empty: {
    description: "ไม่มีข้อมูล"
  },
  Icon: {
    icon: "ไอคอน"
  },
  Text: {
    edit: "แก้ไข",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว",
    expand: "ขยาย"
  },
  PageHeader: {
    back: "ย้อนกลับ"
  },
  Form: {
    optional: "(ไม่จำเป็น)",
    defaultValidateMessages: {
      default: "ฟิลด์ ${label} ไม่ผ่านเงื่อนไขการตรวจสอบ",
      required: "กรุณากรอก ${label}",
      enum: "${label} ต้องเป็นค่าใดค่าหนึ่งใน [${enum}]",
      whitespace: "${label} ไม่สามารถเป็นช่องว่างได้",
      date: {
        format: "รูปแบบวันที่ ${label} ไม่ถูกต้อง",
        parse: "${label} ไม่สามารถแปลงเป็นวันที่ได้",
        invalid: "${label} เป็นวันที่ที่ไม่ถูกต้อง"
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
        len: "${label} ต้องมี ${len} ตัวอักษร",
        min: "${label} ต้องมีอย่างน้อย ${min} ตัวอักษร",
        max: "${label} มีได้สูงสุด ${max} ตัวอักษร",
        range: "${label} ต้องมี ${min}-${max} ตัวอักษร"
      },
      number: {
        len: "${label} ต้องมี ${len} ตัว",
        min: "ค่าต่ำสุด ${label} คือ ${min}",
        max: "ค่าสูงสุด ${label} คือ ${max}",
        range: "${label} ต้องมีค่า ${min}-${max}"
      },
      array: {
        len: "ต้องมี ${len} ${label}",
        min: "ต้องมีอย่างน้อย ${min} ${label}",
        max: "มีได้สูงสุด ${max} ${label}",
        range: "จำนวน ${label} ต้องอยู่ในช่วง ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} ไม่ตรงกับรูปแบบ ${pattern}"
      }
    }
  },
  Image: {
    preview: "ดูตัวอย่าง"
  },
  QRCode: {
    expired: "คิวอาร์โค้ดหมดอายุ",
    refresh: "รีเฟรช"
  }
};
var A = w;
o.default = A;
var $ = o;
const q = /* @__PURE__ */ v($), I = /* @__PURE__ */ h({
  __proto__: null,
  default: q
}, [$]);
export {
  I as t
};
