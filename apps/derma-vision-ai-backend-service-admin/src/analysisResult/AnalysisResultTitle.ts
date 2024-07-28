import { AnalysisResult as TAnalysisResult } from "../api/analysisResult/AnalysisResult";

export const ANALYSISRESULT_TITLE_FIELD = "imageRefField";

export const AnalysisResultTitle = (record: TAnalysisResult): string => {
  return record.imageRefField?.toString() || String(record.id);
};
