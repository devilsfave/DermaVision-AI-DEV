import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ReportWhereInput = {
  id?: StringFilter;
  reportContentField?: StringNullableFilter;
  createdAtField?: DateTimeNullableFilter;
  patientRefField?: StringNullableFilter;
  doctorRefField?: StringNullableFilter;
};
