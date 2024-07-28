export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reportContentField: string | null;
  createdAtField: Date | null;
  patientRefField: string | null;
  doctorRefField: string | null;
};
