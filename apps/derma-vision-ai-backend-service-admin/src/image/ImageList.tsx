import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Images"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="imageUrl_field" source="imageUrlField" />
        <TextField label="uploadedAt_field" source="uploadedAtField" />
        <TextField label="imageStatus_field" source="imageStatusField" />
        <TextField label="userRef_field" source="userRefField" />
      </Datagrid>
    </List>
  );
};
