import './style.css';
import NavBar from '../../components/navbar';
import Pedido from '../../components/pedido';

function Pedidos(){
    return <div className="container-fluid mt-page ">
        <NavBar />

        <div className="row col-lg-8 offset-lg-2">
            <div className="col-12 mt-4">
                <h2 className="mt-2">Meus Pedidos</h2>
            </div>

            <div className="row mt-5">
                {[1, 2, 3, 4].map(pedido => {
                    return <Pedido url_imagem="https://static-images.ifood.com.br/image/upload/t_high/logosgde/201804191757_2b988c51-d3c3-4a8d-b39d-2f35153a6a0c.jpg" />
                })}
            </div>
        </div>
    </div>
}

export default Pedidos;