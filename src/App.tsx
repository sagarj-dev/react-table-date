import React, { ReactNode } from "react";
import MaterialReactTable from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";
import mockData from "./MOCK_DATA.json";

import "./App.css";

interface MokDataType {
  id: number;
  company_name: string;
  date: string;
  applications: number;
  users: number;
}

const formatDate = (date: ReactNode): string => {
  let tempDate = new Date(date as string);
  return `${tempDate.getDate()}-${tempDate.getMonth()}-${tempDate.getFullYear()}`;
};
function App() {
  const columns = React.useMemo<MRT_ColumnDef<MokDataType>[]>(
    () => [
      {
        accessorKey: "company_name", //simple recommended way to define a column
        header: "Company Name",
      },
      {
        accessorKey: "date", //simple recommended way to define a column
        Cell: ({ renderedCellValue }) => formatDate(renderedCellValue),

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
