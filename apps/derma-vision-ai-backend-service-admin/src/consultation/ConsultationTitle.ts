import { Consultation as TConsultation } from "../api/consultation/Consultation";

export const CONSULTATION_TITLE_FIELD = "patientRefField";

export const ConsultationTitle = (record: TConsultation): string => {
  return record.patientRefField?.toString() || String(record.id);
};
