import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/login"
import Imoveis from "../pages/imoveis";
import Simulacao from "../pages/simulacaoDePagamento";
import Resumo from "../pages/resumo";

const navigate = useNavigate();

function Rotas () {
    
    return (
        <Routes>
            <Route path='/' element={navigate('/login')} />
            <Route path='/login' element={<Login/>} />
            <Route path='/imoveis' element={<Imoveis/>} />
            <Route path='/simulacao' element={<Simulacao/>} />
            <Route path='/resumo' element={<Resumo/>} />
        </Routes>
    );

}

export default Rotas;