import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import './style.scss';

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink style={{textDecoration: 'none'}} to="/imoveis">
                            <h2>Imoveis</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none'}} to="/simulacao">
                           <h2>Simulação</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none'}} to="/clientes">
                            <h2>Clientes</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none'}} to="/resumo">
                            <h2>Resumo da Venda</h2>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;