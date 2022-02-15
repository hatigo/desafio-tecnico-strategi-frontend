import useUser from "../../hooks/useUser";
import "./style.scss";


function ModalEditDelete({setOpenModalEditDelete}) {
    const { cliente,
        error,
        setError,
        errorMessage,
        setErrorMessage,
        success,
        setSuccess,
        successMessage,
        setSuccessMessage,
        setOpenEditmodal,
        token
    } = useUser();

    


    async function excluirCliente() {

        try {
            const response = await fetch(`http://localhost:3000/clientes/${cliente.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await response.json();

            console.log(data);
            if (!data.success) {
                setOpenModalEditDelete(false)
                setErrorMessage(data.error);
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
                return
            }

            setOpenModalEditDelete(false)
            setSuccessMessage(data.success);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);




        } catch (error) {
            console.log(error.message);
        }

    }

    const handleEditDelete = () => {
        setOpenEditmodal(true);
        setOpenModalEditDelete(false);
    }


    return (
        <div className="modal-edit-delete">
            <h2 onClick={excluirCliente}>Excluir</h2>
            <h2 onClick={handleEditDelete}>Editar</h2>
            
        </div>
    )
}

export default ModalEditDelete;