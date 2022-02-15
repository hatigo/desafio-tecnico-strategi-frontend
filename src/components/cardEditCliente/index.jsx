import { useEffect, useState } from "react";
import closeicon from "../../assets/closeIcon.svg";
import useUser from "../../hooks/useUser";
import Input from "../inputs";
import ToastErro from "../toastErro";
import "./style.scss";


function CardEditCliente({ setOpenEditmodal, getClientes }) {
    const { setSuccess,
        setSuccessMessage,
        error,
        setError,
        errorMessage,
        setErrorMessage,
        cliente,
        token
    } = useUser();
    const [inputName, setInputName] = useState();
    const [inputCpf, setInputCpf] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputTelefone, setInputTelefone] = useState();


    useEffect(() => {
        setInputName(cliente.nome);
        setInputCpf(cliente.cpf);
        setInputEmail(cliente.email);
        setInputTelefone(cliente.telefone)
    }, [cliente])

    async function handleEdicao(e) {
        e.preventDefault()

        const newClienteData = {
            id: cliente.id,
            nome: inputName,
            cpf: inputCpf,
            email: inputEmail,
            telefone: inputTelefone
        }

        try {
            const response = await fetch('http://localhost:3000/cliente-edicao', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(newClienteData)

            })

            const data = await response.json();
            
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
            getClientes();
            setOpenEditmodal(false);

        } catch (error) {
            console.log(error.message)
        }

    };

    return (
        <div onClick={() => setOpenEditmodal(false)} className="cardEdit-container">
            <div onClick={e => e.stopPropagation()} className="cardEditCliente">
                {error && <ToastErro message={errorMessage} />}

                <div className="header-edicao">
                    <img onClick={() => setOpenEditmodal(false)} src={closeicon} alt="close-icon" />
                    <h1>Edição de Clientes</h1>
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

                    <button onClick={e => handleEdicao(e)} >confirmar edição</button>
                </form>

            </div>
        </div>


    )
}

export default CardEditCliente;