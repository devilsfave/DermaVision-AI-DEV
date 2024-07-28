import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const NotificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="message_field" source="messageField" />
        <TextField label="createdAt_field" source="createdAtField" />
        <BooleanField label="readStatus_field" source="readStatusField" />
        <TextField label="userRef_field" source="userRefField" />
      </SimpleShowLayout>
    </Show>
  );
};
