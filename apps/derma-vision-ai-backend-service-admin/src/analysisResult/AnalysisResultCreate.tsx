import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AnalysisResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="createdAt_field" source="createdAtField" />
        <TextInput label="imageRef_field" source="imageRefField" />
      </SimpleForm>
    </Create>
  );
};
