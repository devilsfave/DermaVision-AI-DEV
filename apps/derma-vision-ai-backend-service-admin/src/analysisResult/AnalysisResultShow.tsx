import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AnalysisResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="resultJSON_field" source="resultJsonField" />
        <TextField label="createdAt_field" source="createdAtField" />
        <TextField label="imageRef_field" source="imageRefField" />
      </SimpleShowLayout>
    </Show>
  );
};
