import { InputJsonValue } from "../../types";

export type AnalysisResultCreateInput = {
  resultJsonField?: InputJsonValue;
  createdAtField?: Date | null;
  imageRefField?: string | null;
};
