import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConsultationWhereInput = {
  id?: StringFilter;
  dateTimeField?: DateTimeNullableFilter;
  consultationStatusField?: "Option1";
  notesField?: StringNullableFilter;
  patientRefField?: StringNullableFilter;
  doctorRefField?: StringNullableFilter;
};
