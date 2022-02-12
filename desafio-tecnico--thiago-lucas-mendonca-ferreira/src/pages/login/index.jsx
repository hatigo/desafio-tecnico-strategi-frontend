import CardLogin from "../../components/cardLogin";
import './style.scss';
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/imoveis");
  }
    
    return (
      <div className="login-page">
          <CardLogin handleLogin={handleLogin}/>
          
      </div>
           
   
      
    );

}

export default Login;