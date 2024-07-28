import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="imageUrl_field" source="imageUrlField" />
        <DateTimeInput label="uploadedAt_field" source="uploadedAtField" />
        <SelectInput
          source="imageStatusField"
          label="imageStatus_field"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="userRef_field" source="userRefField" />
      </SimpleForm>
    </Create>
  );
};
