import './App.scss';
import Rotas from '../rotas/routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Rotas/>
      </BrowserRouter>
   </div>
  );
}

export default App;
