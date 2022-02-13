import { Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import Imoveis from "../pages/imoveis";
import Simulacao from "../pages/simulacaoDePagamento";
import Resumo from "../pages/resumo";
import Redirecting from "../components/redirectComponent";
import Clientes from "../pages/clientes";
import  UserProvider  from "../contexts/UserProvider";


function Rotas() {

    return (
        <UserProvider>
            <Routes>
                <Route path='/' element={<Redirecting />} />
                <Route path='/login' element={<Login />} />
                <Route path='/imoveis' element={<Imoveis />} />
                <Route path='/simulacao' element={<Simulacao />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path='/resumo' element={<Resumo />} />
            </Routes>
        </UserProvider>
    );

}

export default Rotas;