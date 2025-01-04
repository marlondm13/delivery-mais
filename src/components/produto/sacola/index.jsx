import "./style.css";

function Produto(props){
    return <div className="col-12">

        <div className="row p-3 ps-0 border-bottom">

            <div className="col-3">
                <img className="img-fluid rounded" 
                    src="https://static-images.ifood.com.br/image/upload/t_low/pratos/c1e8bd8b-38a2-47b0-b79f-c33f7cbbf7b1/202111101802_46CJ_i.jpg" 
                    alt="Produto"/>
            </div>

            <div className="col-9">

                <div className="d-flex justify-content-between align-items-center">
                    <small>
                        <b>{props.nome}</b>
                    </small>

                    <small>
                        <b>{props.total}</b>
                    </small>
                </div>

                <small className="d-block">
                    {props.quantidade} x {props.preco}
                </small>

                <button className="btn btn-sm btn-outline-danger mt-2">
                    Remover
                </button>
            </div>
        </div>
    </div>
}

export default Produto;