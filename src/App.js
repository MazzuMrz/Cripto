import Bar from "./comp/navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./comp/carrousel";
import Today from "./comp/today";

function App() {
  return (
    <div className="App">
     <Bar/>
     <Inicio />
     <hr/>
     <Today/>
    </div>
  );
}

export default App;
