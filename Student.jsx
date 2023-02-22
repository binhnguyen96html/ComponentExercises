import { Component } from "react";
import "./Student.css";

class Student extends Component {
  render() {
    return (
      <div>
        <table>         
          <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.age}</td>
            <td>{this.props.address}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Student;
