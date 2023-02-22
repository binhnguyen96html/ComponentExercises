import { Component } from "react";
import "./Student.css";

class Student extends Component {
  render() {
    const students = [
      {
        id: "1",
        name: "Binh",
        age: "26",
        address: "Ho Chi Minh",
      },
      {
        id: "1",
        name: "Thanh",
        age: "30",
        address: "Ha Noi",
      },
    ];

    const table = () => {
      return students.map((student) => (
        <table>
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
          </tr>
        </table>
      ));
    };

    return( 
    <div>
        <h1>Danh hoc hoc vien</h1>
        {table()}
    </div>
    )
  }
}

export default Student;
