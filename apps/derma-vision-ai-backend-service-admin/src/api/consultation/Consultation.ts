export type Consultation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTimeField: Date | null;
  consultationStatusField?: "Option1" | null;
  notesField: string | null;
  patientRefField: string | null;
  doctorRefField: string | null;
};
