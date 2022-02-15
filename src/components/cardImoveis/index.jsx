import './style.scss';
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom"


function CardImoveis({ tipo, endereco, valorDaVenda, foto, id }) {
    const { setImovel } = useUser();
    const navigate = useNavigate();
    

    const comissao = ((valorDaVenda.split(" ")[1].split(".").join("").split(",")[0]) * 0.05).toLocaleString('pt-br' ,{style: 'currency', currency:'BRL'});
    

    
    function handleImoveis() {
        
        setImovel({
            tipo,
            endereco,
            valorDaVenda,
            valorDaComissao: comissao,
            id
        })

        navigate("/simulacao");

    }

    return (
        <div onClick={handleImoveis} className='card-imoveis'>
            <img src={foto} alt="foto do imovel" />
            <h2>{tipo}</h2>
            <h2>Endereço: {endereco}</h2>
            <h2>Valor da venda:{valorDaVenda}</h2>
            <h2>Valor da comissão:{comissao}</h2>

        </div>
    )
}

export default CardImoveis;