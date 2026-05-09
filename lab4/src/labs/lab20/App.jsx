import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => res.data)
      .then((data) => setStudents(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                {student.department ? student.department.name : "No Department"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
