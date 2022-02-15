import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header';
import useUser from "../../hooks/useUser";
import "./style.scss";

function Simulacao() {

    const { imovel, setPagamento } = useUser();
    const navigate = useNavigate();
    const [aPrazoChecked, setAPrazoChecked] = useState(false);
    const [aVistaChecked, setAVistaChecked] = useState(true);

    const parcela = imovel.valorDaVenda && ((imovel.valorDaVenda.split(" ")[1].split(".").join("").split(",")[0]) / 180).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    function handleAVistaChecked() {
        if (aVistaChecked) {
            return;
        };

        setAVistaChecked(true);
        setAPrazoChecked(false);
    };

    function handleAPrazoChecked() {
        if (aPrazoChecked) {
            return;
        };

        setAPrazoChecked(true);
        setAVistaChecked(false);

    };

    function handlePagamento() {
        if (aVistaChecked) {
            setPagamento({
                formaDePagamento: "à vista",
                valorDaParcela: imovel.valorDaVenda
            });
            navigate("/clientes")
            return;
        }

        if (aPrazoChecked) {
            setPagamento({
                formaDePagamento: "à prazo",
                valorDaParcela: parcela
            });
            navigate("/clientes")
            return;
        }



    }

    return (
        <div className="simulacao-page">
            <Header />
            <h1>Opções de Pagamento</h1>
            <div onClick={handleAVistaChecked} className="card-pagamento">
                <label htmlFor="avista">À vista: {imovel.valorDaVenda}</label>
                <input value="avista" name="pagamento" id="avista" type="radio" checked={aVistaChecked} />
            </div>
            <div onClick={handleAPrazoChecked} className="card-pagamento">
                <label htmlFor="prazo">À prazo: 180 Parcelas de  {parcela}</label>
                <input value="prazo" name="pagamento" id="prazo" type="radio" checked={aPrazoChecked} />
            </div>
            <button onClick={handlePagamento}>Proximo</button>
        </div>
    );

};

export default Simulacao;