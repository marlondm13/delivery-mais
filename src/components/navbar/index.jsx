import Logo from "../../assets/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar(){

    function openSideBar(){
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    };

    return <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ps-3 pe-3">
        <div className="container-fluid">

            <Link className="navbar-brand" to="/"><img className="mt-1" src={Logo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <div className="ms-auto me-auto mt-1">
                    <div className="input-group mb-3">
                        <input type="search" className="form-control" placeholder="Pesquisar" aria-label="Search" aria-describedby="button-addon2"/>
                        <button className="btn btn-danger" type="button" id="button-addon2"> <i className="fa-solid fa-magnifying-glass"></i> Buscar</button>
                    </div>
                </div> 

                <div className="mt-1">
                    <button className="btn btn-outline-danger me-3"> <i className="fas fa-map-marker-alt"></i> Entrega: Fortaleza</button>
                    {
                    //<button className="btn btn-outline-danger me-3"> <i className="fas fa-sign-in-alt"></i> Acessar</button>
                    } 

                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-danger me-3 dropdown toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-user"></i>
                        </button>    
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/pedidos">Pedidos</Link></li>
                            <li><Link className="dropdown-item" to="/favoritos">Favoritos</Link></li>
                            <li><Link className="dropdown-item" to="/perfil">Perfil</Link></li>
                            <li><Link className="dropdown-item" to="/enderecos">Meus Endereços</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/">Sair</Link></li>
                        </ul>
                    </div>

                    <button onClick={openSideBar} className="btn btn-outline-danger me-3"> <i className="fas fa-shopping-bag"></i> Sacola </button>
                </div>
            </div>
        </div>
    </nav> 
}

export default Navbar;