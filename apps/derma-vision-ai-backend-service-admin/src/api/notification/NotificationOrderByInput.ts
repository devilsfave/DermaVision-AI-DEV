import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  messageField?: SortOrder;
  createdAtField?: SortOrder;
  readStatusField?: SortOrder;
  userRefField?: SortOrder;
};
