import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const ConsultationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateTime_field" source="dateTimeField" />
        <SelectInput
          source="consultationStatusField"
          label="consultationStatus_field"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="notes_field" multiline source="notesField" />
        <TextInput label="PatientRef_field" source="patientRefField" />
        <TextInput label="DoctorRef_field" source="doctorRefField" />
      </SimpleForm>
    </Edit>
  );
};