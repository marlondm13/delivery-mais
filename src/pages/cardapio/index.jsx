import './style.css';
import NavBar from '../../components/navbar';
import Star from '../../assets/star.png';
import Produto from '../../components/produto/lista';
import Footer from '../../components/footer';

function Cardapio(){
    return <div className="cardapio container-fluid mt-page">
        <NavBar />

        <div className="row col-lg-8 offset-lg-2">
            <div className="col-12">
                <img className="img-fluid rounded img-estabelecimento-cardapio"
                    src="https://static-images.ifood.com.br/image/upload//capa/735d4872-309f-4d69-b5ad-1b0e5d223618/202010302335_ZRHP_i@2x.jpg"
                    alt="Estabelecimento" />
            </div>

            <div className="col-12 mt-4 ">
                <h2>Black Dog Paulista</h2>
                <span>R. Coelho Lisboa, 363 - Cidade Mae do Ceu - Sao - SP</span>

                <div className="classificacao">
                    <img src={Star} alt="Avaliação"/>
                    <span className="ms-1">4.0</span>
                    <span className="ms-3">18 avaliações</span>
                </div>

                <div className="classificacao mt-3">
                    <span><b>Taxa de Entrega: </b>R$5,00</span>
                    <span className="ms-5"><b>Pedido mínimo: </b>R$5,00</span>
                </div>
            </div>

            {[1, 2, 3, 4].map(categoria => {
            return <div className="row mt-5">
                <div className="mb-3">
                    <h5>Destaques</h5>
                </div>

                {[1, 2, 3, 4, 5].map(produto => {
                    return <Produto/>
                })}
            </div>
            })}
        </div>     

        <Footer />   
    </div>
}

export default Cardapio;