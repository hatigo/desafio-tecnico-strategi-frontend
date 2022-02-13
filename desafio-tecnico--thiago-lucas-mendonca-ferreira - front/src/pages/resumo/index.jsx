import "./style.scss";
import Header from '../../components/header';
import useUser from "../../hooks/useUser";

function Resumo() {
    const { imovel, pagamento, cliente } = useUser();



    return (
        <div className="resumo-page">
            <Header />
            <h1>Resumo</h1>
            <div className="card-resumo">
                <span>Vendedor</span>
                <span>Nome do Vendedor</span>
            </div>
            <div className="card-resumo">
                <span>Imovel</span>
                <div className="info">
                    <span>Tipo: {imovel.tipo}</span>
                    <span>Endereço: {imovel.endereco}</span>
                    <span>Valor da Venda: R$ {imovel.valorDaVenda}</span>
                    <span>Valor da Comissão: R$ {imovel.valorDaComissao}</span>
                </div>
            </div>
            <div className="card-resumo">
                <span>Cliente</span>
                <div className="info">
                    <span>Nome: {cliente.nome}</span>
                    <span>Email: {cliente.email}</span>
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
                        "1 parcela de R$ " :
                        "180 parcelas de R$ "
                }{pagamento.valorDaParcela}

                </span>
            </div>

        </div>

    );

}

export default Resumo;