import React from "react";
import MaterialReactTable from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";
import mockData from "./MOCK_DATA.json";
import moment from "moment";
import "./App.css";

interface MokDataType {
  id: number;
  company_name: string;
  date: string;
  applications: number;
  users: number;
}

function App() {
  const columns = React.useMemo<MRT_ColumnDef<MokDataType>[]>(
    () => [
      {
        accessorKey: "company_name", //simple recommended way to define a column
        header: "Company Name",
      },
      {
        accessorKey: "date", //simple recommended way to define a column
        Cell: ({ renderedCellValue }) =>
          moment(renderedCellValue?.toString()).format("DD-MM-YYYY"),
        header: "Date",
      },
      {
        accessorKey: "applications", //simple recommended way to define a column
        header: "Applications",
      },
      {
        accessorKey: "users", //simple recommended way to define a column
        header: "Users",
      },
    ],
    []
  );
  return (
    <div className="App">
      <MaterialReactTable
        columns={columns}
        data={mockData}
        // enableColumnActions={false}

        enableTopToolbar={false}
      />
    </div>
  );
}

export default App;
