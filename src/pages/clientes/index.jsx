import { useEffect, useState } from "react";
import arrowDown from "../../assets/arrowDown.png";
import lupa from "../../assets/lupa.svg";
import soma from "../../assets/soma.png";
import CardCadastroCliente from "../../components/cardCadastroCliente";
import CardClientes from "../../components/cardClientes";
import Header from "../../components/header";
import ToastErro from "../../components/toastErro";
import ToastSuccess from "../../components/toastSuccess";
import useUser from "../../hooks/useUser";
import "./style.scss";
import CardEditCliente from "../../components/cardEditCliente";


function Clientes() {

    const { success,
        successMessage,
        error,
        errorMessage,
        openEditModal,
        setOpenEditmodal,
        token
    } = useUser();
    const [inputClientes, setInputClientes] = useState();
    const [inputFiltro, setInputFiltro] = useState("recentes");
    const [openModal, setOpenModal] = useState(false);
    const [clientes, setClientes] = useState([]);



    useEffect(() => {
        async function getClientes() {

            try {
                const response = await fetch('http://localhost:3000/clientes', {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const data = await response.json();

                setClientes(data.success);


            } catch (error) {
                console.log(error);
            }

        }

        getClientes();
    }, [clientes]);


    return (

        <div className="clientes-page">
            <Header />
            <div className="clientes-header">
                {openModal && <CardCadastroCliente setOpenModal={setOpenModal} />}
                {success && <ToastSuccess message={successMessage} />}
                {error && <ToastErro message={errorMessage} />}
                {openEditModal && <CardEditCliente setOpenEditmodal={setOpenEditmodal} />}
                <h1>Gerenciar Clientes</h1>
                <div className="input-clientes">
                    <img src={lupa} alt="lupa" />
                    <label htmlFor={"pesquisa-clientes"} />
                    <input
                        onChange={e => setInputClientes(e.target.value)}
                        value={inputClientes}
                        placeholder="Pesquisar"
                        id={"pesquisa-clientes"}
                        type="search"

                    />

                </div>
                <div className="select">
                    <select name="filtro" id="filtro">
                        <option onSelect={() => setInputFiltro("recentes")} value="recentes">Filtrar por: mais recentes </option>
                        <option onSelect={() => setInputFiltro("antigos")} value="antigos">Filtrar por: mais antigos</option>
                    </select>
                    <img src={arrowDown} alt="seta para baixo" />
                </div>
                <button onClick={() => setOpenModal(true)}>
                    Cadastrar Cliente
                    <img src={soma} alt="soma" />
                </button>
            </div>
            <div className="spans">
                <span>Cliente</span>
                <span>Contato</span>
                <span>Data que iniciou no app</span>
            </div>

            {clientes && clientes.map(cliente => {
                return (

                    <CardClientes
                        key={cliente.id}
                        id={cliente.id}
                        nome={cliente.nome}
                        email={cliente.email}
                        dataCadastro={cliente.data_de_cadastro}
                        cpf={cliente.cpf}
                        telefone={cliente.telefone}
                        urlDaFoto={cliente.url_da_foto}

                    />
                )
            })}

        </div>
    )
}

export default Clientes;