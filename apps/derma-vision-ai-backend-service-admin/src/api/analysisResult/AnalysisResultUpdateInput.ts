import { InputJsonValue } from "../../types";

export type AnalysisResultUpdateInput = {
  resultJsonField?: InputJsonValue;
  createdAtField?: Date | null;
  imageRefField?: string | null;
};
