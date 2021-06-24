import Bar from "./comp/navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Today from "./comp/today";
import Coins from "./comp/borrador";
import Billetera from "./comp/Billetera";

function App() {
  return (
    <div className="App">
      
     <Bar/>
     <Coins />
     <hr/>
     <Today/>
     <hr/>
     <Billetera />
    </div>
  );
}

export default App;
