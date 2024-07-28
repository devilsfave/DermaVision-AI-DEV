import { SortOrder } from "../../util/SortOrder";

export type AnalysisResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  resultJsonField?: SortOrder;
  createdAtField?: SortOrder;
  imageRefField?: SortOrder;
};
