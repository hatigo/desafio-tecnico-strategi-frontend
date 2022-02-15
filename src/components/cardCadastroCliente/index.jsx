import "./style.scss";
import Input from "../inputs";
import { useState } from "react";
import closeicon from "../../assets/closeIcon.svg"
import ToastErro from "../toastErro";
import ToastSuccess from "../toastSuccess";
import useUser from "../../hooks/useUser";


function CardCadastroCliente({ setOpenModal }) {
    const { setSuccess, setSuccessMessage, error, setError, errorMessage, setErrorMessage, token } = useUser();
    const [inputName, setInputName] = useState();
    const [inputCpf, setInputCpf] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputTelefone, setInputTelefone] = useState();

    const handleCadastro = async (e) => {
        e.preventDefault()

        const newCliente = {
            nome: inputName,
            cpf: inputCpf,
            email: inputEmail,
            telefone: inputTelefone
        }

        const response = await fetch('http://localhost:3000/cliente-cadastro', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newCliente)

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
        }, 3000);
        setOpenModal(false);

    }



    return (
        <div onClick={() => setOpenModal(false)} className="cardCadastro-container">
            <div onClick={e => e.stopPropagation()} className="cardCadastroCliente">
                {error && <ToastErro message={errorMessage} />}

                <div className="header-cadastro">
                    <img onClick={() => setOpenModal(false)} src={closeicon} alt="close-icon" />
                    <h1>Cadastro de Clientes</h1>
                </div>

                <form>
                    <Input
                        placeholder="Nome do Cliente"
                        htmlFor="nome-cliente"
                        inputState={inputName}
                        setInputState={setInputName}
                        type="text"
                        text="Nome"
                    />

                    <Input
                        placeholder="CPF do cliente"
                        htmlFor="cpf-cliente"
                        inputState={inputCpf}
                        setInputState={setInputCpf}
                        type="text"
                        text="CPF"
                    />

                    <Input
                        placeholder="Email@clientes.com"
                        htmlFor="email-cliente"
                        inputState={inputEmail}
                        setInputState={setInputEmail}
                        type="email"
                        text="E-mail"
                    />

                    <Input
                        placeholder="Telefone"
                        htmlFor="telefone-cliente"
                        inputState={inputTelefone}
                        setInputState={setInputTelefone}
                        type="text"
                        text="Telefone"
                    />

                    <button onClick={e => handleCadastro(e)} >Cadastrar</button>
                </form>

            </div>
        </div>


    )
}

export default CardCadastroCliente;