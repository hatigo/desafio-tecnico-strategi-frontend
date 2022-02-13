import './style.scss';
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom"


function CardImoveis({ tipo, endereco, valorDaVenda }) {
    const { setImovel } = useUser();
    const navigate = useNavigate();
    const venda = (valorDaVenda / 100).toFixed(2);

    const comissao = ((valorDaVenda * 0.05) / 100).toFixed(2) ;
    const foto = 'https://picsum.photos/300/200';

    function handleImoveis() {
        
        setImovel({
            tipo,
            endereco,
            valorDaVenda: venda,
            valorDaComissao: comissao
        })

        navigate("/simulacao");

    }

    return (
        <div onClick={handleImoveis} className='card-imoveis'>
            <img src={foto} alt="foto do imovel" />
            <h2>{tipo}</h2>
            <h2>Endereço: {endereco}</h2>
            <h2>Valor da venda: R${venda}</h2>
            <h2>Valor da comissão: R${comissao}</h2>

        </div>
    )
}

export default CardImoveis;