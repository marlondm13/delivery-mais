import './style.css';
import NavBar from '../../components/navbar';
import Estabelecimento from '../../components/estabelecimento';

function Favoritos(){
    return <div className="container-fluid mt-page">
        <NavBar />

            <div className="row col-lg-8 offset-lg-2">
                <div className="row m-2">
                    <h3>Meus Favoritos</h3>
                </div>

                <div className="row m-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((estabelecimento) => {
                        return (
                        <Estabelecimento
                            url_imagem="https://static-images.ifood.com.br/image/upload/t_high/logosgde/201804191757_2b988c51-d3c3-4a8d-b39d-2f35153a6a0c.jpg"
                            nome="McDonald's"
                            avaliacao="4.5"
                            categoria="Lanches"
                            btnRemoverFavorito
                        />
                        );
                    })}
                </div>
            </div>                       
    </div>
}

export default Favoritos;