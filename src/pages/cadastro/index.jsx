import './style.css';
import Logo from '../../assets/logo-pb.png';
import Fundo from '../../assets/fundo-login.jpg';
import { Link } from 'react-router-dom';


function Cadastro(){
    return <div className="row">
        <div className="col-sm-6 d-flex justify-content-center align-items-center text-center">
            <form className="form-cadastro mt-5">
                <h3 className="mb-4">Crie sua conta e faça seu pedido.</h3>  
                <h6 className="mb-3">Informe os dados abaixo</h6>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Nome Completo"></input>
                    <label for="floatingInput">Nome Completo</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="E-mail"></input>
                    <label for="floatingInput">E-mail</label>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingInput" placeholder="Senha"></input>
                            <label for="floatingInput">Senha</label>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingInput" placeholder="Confirme a Senha"></input>
                            <label for="floatingInput">Confirme a Senha</label>
                        </div>
                    </div>
                </div>    

                <div className="row">
                    <div className="col-lg-8">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Endereço"></input>
                            <label for="floatingInput">Endereço</label>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Complemento"></input>
                            <label for="floatingInput">Complemento</label>
                        </div>
                    </div>
                </div>   

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Bairro"></input>
                            <label for="floatingInput">Bairro</label>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-control mb-2">
                            <select name="cidades" id="cidades">
                                <option value="0000000">Cidade</option>
                                <option value="2304400">Fortaleza - CE</option>
                                <option value="2307650">Maracanaú - CE</option>
                                <option value="2302107">Baturité - CE</option>
                            </select>
                        </div>
                    </div>
                </div>   

                <div className="form-floating mb-3">
                    <input type="text" className="form-control mb-2" id="floatingInput" placeholder="CEP"></input>
                    <label for="floatingInput">CEP</label>
                </div>       

                <button className="w-100 btn btn-lg btn-danger">Criar Conta</button>

                <div className="mt-5">
                    <Link to="/login" className="link-primary">Já tenho uma conta. Fazer login.</Link>
                </div>

                <img src={Logo} alt="Delivery Mais" className="mt-5"/>
            </form>
        </div>

        <div className="col-sm-6 px-0 d-none d-sm-block">
            <img className="background-cadastro" src={Fundo} alt="Delivery Mais"/>
        </div>
    </div>
}

export default Cadastro;