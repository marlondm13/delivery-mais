import "./style.css";

function Produto(){
    return <div className="col-sm-6 mb-3 p-4 produto-lista">
        <a href="#">
            <div className="row p-3 ps-0 border-bottom">
                <div className="col-3">
                    <img className="img-fluid rounded" 
                        alt="Produto"
                        src="https://static-images.ifood.com.br/image/upload/t_low/pratos/c1e8bd8b-38a2-47b0-b79f-c33f7cbbf7b1/202111101802_46CJ_i.jpg"/>
                </div>

                <div className="col-9">
                    <small className="d-block"><b>Pizza 4 Queijos</b></small>
                    <small className="d-block">Molho de tomate, catupiry, abobrinha assada na lenha, parmesão vegano e orégano.</small>
                    <small className="d-inline-block mt-3 text-success">R$45,00</small>
                    <small className="d-inline-block ms-4 mt-3 preco-antigo">R$60,00</small>
                </div>
            </div>
        </a>        
    </div>
}

export default Produto;