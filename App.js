import ShowName from "./components/ShowName";
import ShowName2 from './components/ShowName2';
import AddComponent from './components/AddComponent';
import Alert from './components/Alert';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <ShowName color="red" fontSize="20px" name="Bonnie" />
      <ShowName color="blue" fontSize="25px"/>

      <ShowName2 name="Binh" color='purple'/>
      <ShowName2 name="Bonnie" fontSize ="25px"/>

      <AddComponent firstNum={1} secondNum={2}/>

      <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />

      <Student />

    </div>
  );
}

export default App;