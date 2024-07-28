import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message_field" multiline source="messageField" />
        <DateTimeInput label="createdAt_field" source="createdAtField" />
        <BooleanInput label="readStatus_field" source="readStatusField" />
        <TextInput label="userRef_field" source="userRefField" />
      </SimpleForm>
    </Edit>
  );
};
