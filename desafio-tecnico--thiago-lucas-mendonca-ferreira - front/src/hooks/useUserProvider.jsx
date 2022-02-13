import { useState } from "react";

function useUserProvider() {
    const [ imovel, setImovel ] = useState({
        tipo: "",
        endereco: "",
        valorDaVenda: "",
        valorDaComissao: ""
    });

    const [ pagamento, setPagamento ] = useState({
        formaDePagamento: "",
        valorDaParcela: ""
    });

    const [ cliente, setCliente ] = useState({
        nome:"",
        email:"",
        dataCadastro:"",
    });

    return {
        imovel,
        setImovel,
        pagamento,
        setPagamento,
        cliente,
        setCliente
    }
}



export default useUserProvider;
