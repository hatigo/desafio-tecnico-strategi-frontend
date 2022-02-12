import './style.scss';


function CardImoveis ({tipo, endereco, valorDaVenda}) {

    const comissao = valorDaVenda * 0.05;
    const foto = 'https://picsum.photos/300/200';

    return (
        <div className='card-imoveis'>
            <img src={foto} alt="foto do imovel"/>
            <h2>{tipo}</h2>
            <h2>Endereço: {endereco}</h2>
            <h2>Valor da venda: R${valorDaVenda}</h2>
            <h2>Valor da comissão: R${comissao}</h2>

        </div>
    )
}

export default CardImoveis;