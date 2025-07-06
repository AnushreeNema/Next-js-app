import React from "react";

export default function StudentList({ params }) {
  const { student } = React.use(params); // unwrap the params promise

  return (
    <div>
      <h1>Student Details</h1>
      <h4>Name: {student}</h4>
    </div>
  );
}
