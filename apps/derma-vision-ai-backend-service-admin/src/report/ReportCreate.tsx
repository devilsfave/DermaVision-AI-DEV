import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="reportContent_field"
          multiline
          source="reportContentField"
        />
        <DateTimeInput label="createdAt_field" source="createdAtField" />
        <TextInput label="PatientRef_field" source="patientRefField" />
        <TextInput label="DoctorRef_field" source="doctorRefField" />
      </SimpleForm>
    </Create>
  );
};
