import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Sidebar from './components/sidebar';
import Pesquisa from './pages/pesquisa';
import Favoritos from './pages/favoritos';
import Perfil from './pages/perfil';
import Enderecos from './pages/enderecos';
import Pedidos from './pages/pedidos';
import Cardapio from './pages/cardapio';

function Rotas(){
    return <>
        <Sidebar />
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                
                <Route exact path="/pedidos" element={<Pedidos/>} />
                <Route exact path="/favoritos" element={<Favoritos/>} />
                <Route exact path="/perfil" element={<Perfil/>} />
                <Route exact path="/enderecos" element={<Enderecos/>} /> 

                <Route exact path="/pesquisa" element={<Pesquisa/>} />
                <Route exact path="/cardapio" element={<Cardapio/>} />                                            
            </Routes>
        </BrowserRouter>
    </>
}

export default Rotas;