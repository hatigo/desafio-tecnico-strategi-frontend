import "./style.scss";
import Header from '../../components/header';
import Input from "../../components/inputs"
import { useState } from "react";

function Simulacao () {
    const [inputPagamento, setInputPagamento] = useState();
    
    return (
       <div className="simulacao-page"> 
           <Header/>
           <h1>Opções de Pagamento</h1>

            <label htmlFor="avista">À vista</label>
            <input id="avista" type="radio" placeholder="À vista"/>

            <label htmlFor="prazo">À prazo: 180 Parcelas</label>
            <input id="prazo" type="radio" placeholder="À prazo"/>
            
           
       </div>
    );

}

export default Simulacao;