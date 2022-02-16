import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import './style.scss';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className='header'>
            <img onClick={() => navigate("/imoveis")} src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink style={{textDecoration: 'none'}} to="/imoveis">
                            <h2 style={{color: location.pathname === "/imoveis" && '#00BFFF'}}>Imoveis</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none'}} to="/simulacao">
                           <h2 style={{color: location.pathname === "/simulacao" && '#00BFFF'}}>Simulação</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none'}} to="/clientes">
                            <h2 style={{color: location.pathname === "/clientes" && '#00BFFF'}} >Clientes</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none'}} to="/resumo">
                            <h2 style={{color: location.pathname === "/resumo" && '#00BFFF'}} >Resumo da Venda</h2>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;