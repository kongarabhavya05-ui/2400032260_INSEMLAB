import React, { useState } from "react";

export default function SortableTable() {
  const data = [
    { name: "Alice", dept: "Engineering", salary: 90000 },
    { name: "Bob", dept: "Marketing", salary: 75000 },
    { name: "Charlie", dept: "Finance", salary: 82000 },
  ];

  const [employees, setEmployees] = useState(data);
  const [sort, setSort] = useState({ key: null, dir: "asc" });

  const sortBy = (key) => {
    const dir =
      sort.key === key && sort.dir === "asc" ? "desc" : "asc";

    const sorted = [...employees].sort((a, b) =>
      a[key] > b[key]
        ? dir === "asc"? 1 : -1 : dir === "asc" ? -1 : 1
    );

    setEmployees(sorted);
    setSort({ key, dir });
  };

  return (
    <table
      border="1"
      cellPadding="8"
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        <tr>
          <th onClick={() => sortBy("name")}>Name</th>
          <th onClick={() => sortBy("dept")}>Department</th>
          <th onClick={() => sortBy("salary")}>Salary</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((e, i) => (
          <tr
            key={i}
            style={{ background: i % 2 ? "#f9f9f9" : "#fff" }}
          >
            <td>{e.name}</td>
            <td>{e.dept}</td>
            <td>${e.salary.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}