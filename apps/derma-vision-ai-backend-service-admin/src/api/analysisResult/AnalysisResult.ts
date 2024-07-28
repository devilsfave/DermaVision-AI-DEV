import { JsonValue } from "type-fest";

export type AnalysisResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  resultJsonField: JsonValue;
  createdAtField: Date | null;
  imageRefField: string | null;
};
