import { BrowserRouter } from "react-router-dom";
import Rotas from '../rotas/routes';
import './App.scss';

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
