import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="imageUrl_field" source="imageUrlField" />
        <TextField label="uploadedAt_field" source="uploadedAtField" />
        <TextField label="imageStatus_field" source="imageStatusField" />
        <TextField label="userRef_field" source="userRefField" />
      </SimpleShowLayout>
    </Show>
  );
};
