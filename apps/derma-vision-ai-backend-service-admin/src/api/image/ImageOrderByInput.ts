import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  imageUrlField?: SortOrder;
  uploadedAtField?: SortOrder;
  imageStatusField?: SortOrder;
  userRefField?: SortOrder;
};
