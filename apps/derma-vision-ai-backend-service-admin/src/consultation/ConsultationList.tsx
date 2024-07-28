import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConsultationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Consultations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dateTime_field" source="dateTimeField" />
        <TextField
          label="consultationStatus_field"
          source="consultationStatusField"
        />
        <TextField label="notes_field" source="notesField" />
        <TextField label="PatientRef_field" source="patientRefField" />
        <TextField label="DoctorRef_field" source="doctorRefField" />
      </Datagrid>
    </List>
  );
};
