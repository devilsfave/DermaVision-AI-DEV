import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnalysisResultWhereInput = {
  id?: StringFilter;
  resultJsonField?: JsonFilter;
  createdAtField?: DateTimeNullableFilter;
  imageRefField?: StringNullableFilter;
};
