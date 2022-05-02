import './App.css';
import DataTable from "react-data-table-component";
import Records from './jsonformatter.json';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const columnsList = [
    {
      name: "Session id",
      cell: (row) => row.session_id,
      sortable: true,
    },
    {
      name: "Session Name",
      selector: (row) => row.session_name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Faculty Name",
      selector: (row) => row.faculty_name,
      sortable: true,
    },
    {
      name: "Organization Id",
      selector: (row) => row.organization_id,
      sortable: true,
    },
    {
      name: "Recipient Type",
      selector: (row) => row.recipient_type,
      sortable: true,
    },
    {
      name: "Session Status",
      selector: (row) => row.session_status,
      sortable: true,
    },
    {
      name: "Subject Id",
      selector: (row) => row.subject_id,
      sortable: true,
    },
    {
      name: "Section",
      selector: (row) => row.section,
      sortable: true,
    },
    {
      name: "Discipline Id",
      selector: (row) => row.discipline_id,
      sortable: true,
    },
    {
      name: "Class Type",
      selector: (row) => row.class_type,
      sortable: true,
    },
    {
      name: "Period",
      selector: (row) => row.period,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Faculty Id",
      selector: (row) => row.faculty_id,
      sortable: true,
    },
    {
      name: "User Id",
      selector: (row) => row.user_id,
      sortable: true,
    },
    {
      name: "Course Name",
      selector: (row) => row.course_name,
      sortable: true,
    },

  ];

  const selection = (d) => {
    setSearchTerm(d);
  }
  return (
    <div className="App">
      <div className="btn-group mt-5 mb-5" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={() => selection("ALL")}>ALL</button>
        <button type="button" className="btn btn-primary" onClick={() => selection("Available")}>Available</button>
        <button type="button" className="btn btn-primary" onClick={() => selection("Completed")}>Completed</button>
      </div>
      <DataTable
        striped
        responsive
        pagination
        paginationRowsPerPageOptions={[10, 15, 20]}
        paginationPerPage={10}
        highlightOnHover
        dense
        columns={columnsList}
        data={Records.filter((item) => {
          if (searchTerm === "" || searchTerm === "ALL") {
            return item
          } else if (item.session_status.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item
          }
        })}

      />
    </div>
  );
}

export default App;
