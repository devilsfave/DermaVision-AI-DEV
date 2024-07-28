import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message_field" multiline source="messageField" />
        <DateTimeInput label="createdAt_field" source="createdAtField" />
        <BooleanInput label="readStatus_field" source="readStatusField" />
        <TextInput label="userRef_field" source="userRefField" />
      </SimpleForm>
    </Create>
  );
};
