import logo from 'C:\Users\PC\Desktop\firebasewithvuiton\vite-project\src\logo.svg';//better not to risk using the vite svg
import './App.css';
import { NavBar } from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
    </div>
 );
}
export default App;
