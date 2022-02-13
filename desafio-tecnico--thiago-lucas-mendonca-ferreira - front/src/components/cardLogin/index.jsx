import { useState } from "react";
import Input from "../inputs/"
import './style.scss';

function CardLogin ({handleLogin}) {
    const [inputName, setInputName] = useState();
    const [inputPassword, setInputPassword] = useState();
    return (
        <div className="card-login">
            <h1>Login</h1>
            
            <Input 
            htmlFor="username"
            text="Nome de Usuário"
            placeholder="Nome de Usuário"
            type="text"
            inputState={inputName}
            setInputState={setInputName}


            />
            <Input
             htmlFor="password"
             text="Senha"
             placeholder="Senha"
             type="password"
             inputState={inputPassword}
             setInputState={setInputPassword}

            />
            <button onClick={handleLogin}>Entrar</button>
            
        </div>
    )
}

export default CardLogin;