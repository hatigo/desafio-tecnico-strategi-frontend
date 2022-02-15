import './style.scss';
import CardImoveis from '../../components/cardImoveis';
import Header from '../../components/header';
import useUser from '../../hooks/useUser';
import { useEffect, useState } from 'react';

function Imoveis() {

    const { token } = useUser();
    const [imoveis, setImoveis] = useState([]);


    useEffect(() => {

        async function getImoveis() {

            const response = await fetch('http://localhost:3000/imoveis', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await response.json();

            setImoveis(data.success);
        }

        getImoveis();
    }, [])



    return (
        <div className='imoveis-page'>
            <Header />
            <h1>Imoveis</h1>
            <div className='imoveis-container' >
                {imoveis && imoveis.map(imovel => {
                    return (
                        <CardImoveis
                            key={imovel.id}
                            id={imovel.id}
                            tipo={imovel.tipo}
                            endereco={imovel.endereco}
                            valorDaVenda={imovel.valor_de_venda}
                            foto={imovel.url_da_foto}
                        />
                    )
                })}
            </div>
        </div>

    );

}

export default Imoveis;