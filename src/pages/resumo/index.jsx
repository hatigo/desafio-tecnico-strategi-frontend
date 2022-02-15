import "./style.scss";
import Header from '../../components/header';
import useUser from "../../hooks/useUser";
import ToastSuccess from "../../components/toastSuccess";
import ToastErro from "../../components/toastErro";
import { useNavigate } from "react-router-dom";

function Resumo() {
    const navigate = useNavigate();
    const { imovel,
        pagamento,
        cliente,
        corretor,
        setErrorMessage,
        errorMessage,
        setError,
        error,
        successMessage,
        setSuccessMessage,
        setSuccess,
        success,
        token

    } = useUser();

    const comissaoNumber = ((imovel.valorDaVenda.split(" ")[1].split(".").join("").split(",")[0]) * 0.05);

    async function cadastrarVendas() {
        const newVenda = {
            id_imovel: imovel.id,
            valor: imovel.valorDaVenda,
            condicaoDePagamento: pagamento.formaDePagamento,
            comissao: comissaoNumber,
            id_cliente: cliente.id,
            email: cliente.email

        }

        const response = await fetch('http://localhost:3000/vendas-cadastro', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newVenda)
        })

        const data = await response.json();

        console.log(data);

        if (!data.success) {
            setErrorMessage(data.error);
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000);

            return;
        }

        setSuccessMessage(data.success);
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false)
            navigate('/imoveis')
        }, 3000);

    }




    return (
        <div className="resumo-page">
            <Header />
            <h1>Resumo</h1>
            {error && <ToastErro message={errorMessage} />}
            {success && <ToastSuccess message={successMessage} />}
            <div className="card-resumo">
                <span>Vendedor</span>
                <span>{corretor.nome}</span>
            </div>
            <div className="card-resumo">
                <span>Imovel</span>
                <div className="info">
                    <span>Tipo: {imovel.tipo}</span>
                    <span>Endereço: {imovel.endereco}</span>
                    <span>Valor da Venda: {imovel.valorDaVenda}</span>
                    <span>Valor da Comissão: {imovel.valorDaComissao}</span>
                </div>
            </div>
            <div className="card-resumo">
                <span>Cliente</span>
                <div className="info">
                    <span>Nome: {cliente && cliente.nome}</span>
                    <span>Email: {cliente && cliente.email}</span>
                </div>
            </div>
            <div className="card-resumo">
                <span>Forma de Pagamento</span>
                <span>{pagamento.formaDePagamento}</span>
            </div>
            <div className="card-resumo">
                <span>Total</span>
                <span>{
                    pagamento.formaDePagamento === "à vista" ?
                        "1 parcela de " :
                        "180 parcelas de "
                }{pagamento.valorDaParcela}

                </span>
            </div>
            <div className="card-resumo button">
                <button onClick={cadastrarVendas}>Finalizar Venda</button>
            </div>



        </div>

    );

}

export default Resumo;