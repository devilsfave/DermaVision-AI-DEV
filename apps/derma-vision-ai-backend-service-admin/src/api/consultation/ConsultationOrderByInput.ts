import { SortOrder } from "../../util/SortOrder";

export type ConsultationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTimeField?: SortOrder;
  consultationStatusField?: SortOrder;
  notesField?: SortOrder;
  patientRefField?: SortOrder;
  doctorRefField?: SortOrder;
};
