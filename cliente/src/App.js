import './App.css';
import Mostrar from './componentes/Mostrar/Mostrar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Crear from './componentes/Crear/Crear';
import Modificar from './componentes/Modificar/Modificar'
//import Portada from './componentes/portada/Portada';
import Footer from './componentes/Footer/Footer'
import Detalles from './componentes/Mostrar/VerDetalles/Modal'

function App() {

  /*function ponerPortada(){
    if(window.location.pathname === '/'){
        return(
          <Portada></Portada>
        )
    }
    console.log('direccion',window.location.pathname);
  }*/

  return (
    <div className="App">
  
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand  titulo" href="/">Pokemon</a>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active option" aria-current="page" href="/">Inicio <i className="bi bi-house"></i> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active option" aria-current="page" href="/crear">Crear <i className="bi bi-plus-circle"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*{ponerPortada()}*/}


      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Mostrar></Mostrar>}></Route>
              <Route exact path='/crear' element={<Crear></Crear>}></Route>
              <Route exact path='/editar/:id' element={<Modificar></Modificar>}></Route>
              <Route exact path='/detalles/:id' element={<Detalles></Detalles>} ></Route>
              <Route element={<Mostrar></Mostrar>} ></Route>
          </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}
export default App;
