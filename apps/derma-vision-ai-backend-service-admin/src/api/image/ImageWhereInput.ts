import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ImageWhereInput = {
  id?: StringFilter;
  imageUrlField?: StringNullableFilter;
  uploadedAtField?: DateTimeNullableFilter;
  imageStatusField?: "Option1";
  userRefField?: StringNullableFilter;
};
