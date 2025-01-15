import './style.css';
import Navbar from '../../components/navbar';

function Perfil(){
    return <div className="container-fluid mt-page">
        <Navbar/>

        <div className="row col-lg-6 offset-lg-3">
            <div className="row m-2">
                <h3>Meu Perfil</h3>
            </div>

            <div className="row col-lg-12">           

                <div className="row m-2">
                    <form>
                        <div className="mb-3">
                            <label for="InputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="InputNome" aria-describedby="nome"/>
                        </div>

                        <div className="mb-5">
                            <label for="InputNome" className="form-label">Email</label>
                            <input type="text" className="form-control" id="InputNome" aria-describedby="email"/>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-lg btn-danger">Salvar Dados</button>
                        </div> 
                    </form>
                </div>
            </div>      
        </div> 
    </div>
}

export default Perfil;