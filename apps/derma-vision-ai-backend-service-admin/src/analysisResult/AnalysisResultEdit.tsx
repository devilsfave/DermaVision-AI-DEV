import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AnalysisResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="createdAt_field" source="createdAtField" />
        <TextInput label="imageRef_field" source="imageRefField" />
      </SimpleForm>
    </Edit>
  );
};
