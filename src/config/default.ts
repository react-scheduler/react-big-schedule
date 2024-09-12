export const DATE_FORMAT = "YYYY-MM-DD" as const;

export const DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss" as const;

export enum ViewType {
  Day = "DAY",
  Week = "WEEK",
  Month = "MONTH",
  Quarter = "QUARTER",
  Year = "YEAR",
  Custom = "CUSTOM",
  Custom1 = "CUSTOM1",
  Custom2 = "CUSTOM2",
}

export enum CellUnit {
  Day = "DAY",
  Hour = "HOUR",
  Week = "WEEK",
  Month = "MONTH",
  Year = "YEAR",
}

export enum SummaryPos {
  Top = "TOP",
  TopRight = "TOP_RIGHT",
  TopLeft = "TOP_LEFT",
  Bottom = "BOTTOM",
  BottomRight = "BOTTOM_RIGHT",
  BottomLeft = "BOTTOM_LEFT",
}

export enum DnDTypes {
  EVENT = "event",
}
