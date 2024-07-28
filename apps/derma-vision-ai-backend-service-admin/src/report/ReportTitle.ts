import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "patientRefField";

export const ReportTitle = (record: TReport): string => {
  return record.patientRefField?.toString() || String(record.id);
};
