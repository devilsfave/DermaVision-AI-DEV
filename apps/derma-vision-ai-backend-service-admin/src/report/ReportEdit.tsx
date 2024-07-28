import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
