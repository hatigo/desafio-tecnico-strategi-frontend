import "./style.scss";
import Header from "../../components/header";
import CardClientes from "../../components/cardClientes";
import { useState } from "react";
import lupa from "../../assets/lupa.svg"
import soma from "../../assets/soma.png";
import arrowDown from "../../assets/arrowDown.png"

function Clientes() {

    const [inputClientes, setInputClientes] = useState();
    const [inputFiltro, setInputFiltro] = useState("recentes");

    return (

        <div className="clientes-page">
            <Header />
            <div className="clientes-header">
                <h1>Gerenciar Clientes</h1>
                <div className="input-clientes">
                    <img src={lupa} alt="lupa" />
                    <label htmlFor={"pesquisa-clientes"} />
                    <input
                        onChange={e => setInputClientes(e.target.value)}
                        value={inputClientes}
                        placeholder="Pesquisar"
                        id={"pesquisa-clientes"}
                        type="search"

                    />

                </div>
                <div className="select">
                    <select name="filtro" id="filtro">
                        <option onSelect={() => setInputFiltro("recentes")} value="recentes">Filtrar por: mais recentes </option>
                        <option onSelect={() => setInputFiltro("antigos")} value="antigos">Filtrar por: mais antigos</option>
                    </select>
                    <img src={arrowDown} alt="seta para baixo" />
                </div>
                <button>
                    Cadastrar Cliente
                    <img src={soma} alt="soma" />
                </button>
            </div>
            <div className="spans">
                <span>Cliente</span>
                <span>Contato</span>
                <span>Data que iniciou no app</span>
            </div>

            <CardClientes nome="Thiago Lucas" email="tllucasferreira15@gmail.com" dataCadastro="15 jan 2022"/>
            <CardClientes />
            <CardClientes />
        </div>
    )
}

export default Clientes;