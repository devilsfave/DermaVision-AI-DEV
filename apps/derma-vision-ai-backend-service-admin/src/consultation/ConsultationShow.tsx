import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ConsultationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dateTime_field" source="dateTimeField" />
        <TextField
          label="consultationStatus_field"
          source="consultationStatusField"
        />
        <TextField label="notes_field" source="notesField" />
        <TextField label="PatientRef_field" source="patientRefField" />
        <TextField label="DoctorRef_field" source="doctorRefField" />
      </SimpleShowLayout>
    </Show>
  );
};
