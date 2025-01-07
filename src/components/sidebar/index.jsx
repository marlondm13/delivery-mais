import "./style.css";
import {Dock} from "react-dock";
import Produto from "../produto/sacola";
import { useEffect, useState } from "react";

function Sidebar() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('openSidebar', () => {
      setShow(true);
    });
  }, []);

  return (
    <Dock position="right"
          isVisible={show}
          onVisibleChange={(visible) => {
            setShow(visible);
          }}>
          
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola</h5>

        <div className="row produtos">
          {[1, 2, 3, 4, 5].map((produto) => {
            return <Produto nome="Pizza 4 Queijos" 
                            total="80,00"
                            quantidade="2"
                            preco="40,00"/>
          })}
        </div>

        <div className="row align-items-end footer">

          <div className="col-12 d-flex justify-content-between align-items-center">
            <span>SubTotal</span>
            <span>R$45,00</span>
          </div>

          <div className="col-12 d-flex justify-content-between align-items-center mt-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Cupom" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-success" type="button" id="button-addon2"> 
                Aplicar 
              </button>
            </div>

            <div className="input-group justify-content-end">
              <span className="d-inline-block text-success">- R$0,00</span>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-between align-items-center mt-2">
            <span>Taxa de Entrega</span>
            <span>R$5,00</span>
          </div>

          <div className="col-12 d-flex justify-content-between align-items-center mt-3">
            <b>Total</b>
            <h3>R$50,00</h3>
          </div>

          <button className="btn btn-lg btn-danger rounded-0 align-items-center btn-pedido">
            Finalizar Pedido
          </button>

        </div> 
      </div>
    </Dock>
  );
}

export default Sidebar;
