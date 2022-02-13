import './style.scss';
import CardImoveis from '../../components/cardImoveis';
import Header from '../../components/header';

function Imoveis() {
    

    return (
        <div className='imoveis-page'>
            <Header/>
            <h1>Imoveis</h1>
            <CardImoveis 
            tipo="Apartamento"
            endereco="rua estrela do mar, 222"
            valorDaVenda="25000000"
        
            />
        </div>

    );

}

export default Imoveis;