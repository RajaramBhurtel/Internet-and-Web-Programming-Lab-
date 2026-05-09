import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Student Management Dashboard</h1>

      {loading ? (
        <p className="loading">Loading students...</p>
      ) : (
        <div className="card-container">
          {students.map((student) => (
            <div className="student-card" key={student._id}>
              <h2>{student.name}</h2>

              <p>
                <strong>Age:</strong> {student.age}
              </p>

              <p>
                <strong>Department:</strong>{" "}
                {student.department ? student.department.name : "No Department"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
