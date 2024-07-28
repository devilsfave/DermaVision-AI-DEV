import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  messageField?: StringNullableFilter;
  createdAtField?: DateTimeNullableFilter;
  readStatusField?: BooleanNullableFilter;
  userRefField?: StringNullableFilter;
};
