import "./style.scss";
import tresPontos from "../../assets/tres-pontos.svg"
import foto from "../../assets/foto.svg";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";


function CardClientes({ nome, email, dataCadastro}) {
    const { setCliente } = useUser();
    const navigate = useNavigate();

    function handleClientes () {

        setCliente({
            nome,
            email,
            dataCadastro
        })

        navigate("/resumo");
        
    }

    return (
        <div onClick={handleClientes} className="card-clientes">
            <span><img className="clientPicture" src={foto} alt="imagem do cliente" />{nome}</span>
            <span>{email}</span>
            <span>{dataCadastro}</span>
            <img src={tresPontos} alt="reticências" />
        </div>
    )
}


export default CardClientes;