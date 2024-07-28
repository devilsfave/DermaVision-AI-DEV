export type ConsultationCreateInput = {
  dateTimeField?: Date | null;
  consultationStatusField?: "Option1" | null;
  notesField?: string | null;
  patientRefField?: string | null;
  doctorRefField?: string | null;
};
