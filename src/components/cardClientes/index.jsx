import { useState } from "react";
import { useNavigate } from "react-router-dom";
import foto from "../../assets/foto.svg";
import tresPontos from "../../assets/tres-pontos.svg";
import useUser from "../../hooks/useUser";
import ModalEditDelete from "../modalEditDelete";
import "./style.scss";


function CardClientes({ nome, email, dataCadastro, id , cpf, telefone, urlDaFoto}) {
    const { setCliente} = useUser();
    const navigate = useNavigate();
    const [openModalEditDelete, setOpenModalEditDelete] = useState(false);

    const correctDate = new Date(dataCadastro);
    const dataDeCadastro = correctDate.getDate() + "/" + (correctDate.getMonth() + 1) + "/" + correctDate.getFullYear();

    function handleClientes() {

        setCliente({
            nome,
            email,
            dataDeCadastro,
            id,
            cpf,
            telefone
        })

        navigate("/resumo");

    }

    function handleModalEditDelete() {

        if (!openModalEditDelete) {

            setCliente({
                nome,
                email,
                dataDeCadastro,
                id, 
                cpf,
                telefone
            })

            setOpenModalEditDelete(true)
            return;
        }

        setOpenModalEditDelete(false)
        setCliente();

    }





    return (
        <div onClick={handleClientes} className="card-clientes">
            <span><img className="clientPicture" src={ urlDaFoto ? urlDaFoto: foto} alt="imagem do cliente" />{nome}</span>
            <span>{email}</span>
            <span>{dataDeCadastro}</span>
            <div onClick={e => e.stopPropagation()}>
                <img onClick={handleModalEditDelete} src={tresPontos} alt="reticências" />
                {openModalEditDelete && <ModalEditDelete setOpenModalEditDelete={setOpenModalEditDelete} />}
            </div>
        </div>
    )
}


export default CardClientes;