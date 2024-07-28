export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrlField: string | null;
  uploadedAtField: Date | null;
  imageStatusField?: "Option1" | null;
  userRefField: string | null;
};
