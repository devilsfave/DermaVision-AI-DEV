import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reportContentField?: SortOrder;
  createdAtField?: SortOrder;
  patientRefField?: SortOrder;
  doctorRefField?: SortOrder;
};
