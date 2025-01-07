import Logo from "../../assets/logo.png";
import "./style.css";

function Navbar(){

    function openSideBar(){
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    };

    return <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ps-3 pe-3">
        <div className="container-fluid">

            <a className="navbar-brand" href="#"><img className="mt-1" src={Logo}/></a>
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
                            <li><a className="dropdown-item" href="/pedidos">Pedidos</a></li>
                            <li><a className="dropdown-item" href="/favoritos">Favoritos</a></li>
                            <li><a className="dropdown-item" href="/perfil">Perfil</a></li>
                            <li><a className="dropdown-item" href="/enderecos">Meus Endereços</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/">Sair</a></li>
                        </ul>
                    </div>

                    <button onClick={openSideBar} className="btn btn-outline-danger me-3"> <i className="fas fa-shopping-bag"></i> Sacola </button>
                </div>
            </div>
        </div>
    </nav> 
}

export default Navbar;