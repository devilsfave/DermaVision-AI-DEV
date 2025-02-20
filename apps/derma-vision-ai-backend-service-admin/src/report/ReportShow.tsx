import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="reportContent_field" source="reportContentField" />
        <TextField label="createdAt_field" source="createdAtField" />
        <TextField label="PatientRef_field" source="patientRefField" />
        <TextField label="DoctorRef_field" source="doctorRefField" />
      </SimpleShowLayout>
    </Show>
  );
};
