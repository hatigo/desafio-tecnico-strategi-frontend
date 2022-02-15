import { useNavigate } from "react-router-dom";
import CardLogin from "../../components/cardLogin";
import ToastErro from "../../components/toastErro";
import useUser from "../../hooks/useUser";
import './style.scss';

function Login() {
  const navigate = useNavigate();
  const { setToken, setcorretor, setIsAuthenticated, setError, setErrorMessage, error, errorMessage } = useUser();

  async function handleLogin(nome, senha) {

    const loginData = {
      nome,
      senha
    }

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
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

      setToken(data.token);
      setcorretor({
        nome: data.dadosDoUsuario.nome,
        id: data.dadosDoUsuario.id
      });
      setIsAuthenticated(true);
      navigate("/imoveis");


    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="login-page">
      {error && <ToastErro message={errorMessage} />}
      <CardLogin handleLogin={handleLogin} />
    </div>
  );
};

export default Login;