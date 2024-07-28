import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="reportContent_field" source="reportContentField" />
        <TextField label="createdAt_field" source="createdAtField" />
        <TextField label="PatientRef_field" source="patientRefField" />
        <TextField label="DoctorRef_field" source="doctorRefField" />
      </Datagrid>
    </List>
  );
};
