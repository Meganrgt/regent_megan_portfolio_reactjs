import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Contact from './pages/contact';
import Mentions from "./pages/mentions";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-md bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid row">
              <Link className="col-md-4" data-bs-toggle="modal" data-bs-target="#ModaleProfil">JOHN DOE</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse col-md-8" id="navbarNav">
                <ul className="navbar-nav justify-content-end">
                  <Link className="nav-link" to="/">HOME</Link>
                  <Link className="nav-link" to="/services">SERVICES</Link>
                  <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
                  <Link className="nav-link" to="/contact">CONTACT</Link>
                  <Link className="nav-link" to="/mentions">MENTIONS LÉGALES</Link>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="modal fade" id="ModaleProfil" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/mentions" element={<Mentions />}></Route>
        </Routes>
        <footer className="mt-5">
          <nav className="navbar navbar-expand-lg bg-body-tertiary row align-items-start" data-bs-theme="dark">
            <div className="col-md-4 ps-5">
              <h4>John Doe</h4>
              <address>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p><Link to="tel:1020304050">10 20 30 40 50</Link></p>
                <p><Link to="mailto:john.doe@gmail.com">john.doe@gmail.com</Link></p>
                <Link data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" to="#!" role="button" data-mdb-ripple-color="dark"><i className="bi bi-github"></i></Link>
                <Link data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" to="#!!" role="button" data-mdb-ripple-color="dark"><i className="bi bi-twitter"></i></Link>
                <Link data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" to="#!!!" role="button" data-mdb-ripple-color="dark"><i className="bi bi-linkedin"></i></Link>
              </address>
            </div>
            <div className="col-md-4 ps-5">
              <h4>Liens utiles</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/mentions">Mentions Légales</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 ps-5">
              <h4>Mes dernières réalisations</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="#">Fresh Food</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="#">Restaurant Akira</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="#">Espace bien-être</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="#">SEO</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="#">Création d'une API</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="#">Maquette d'une site</Link>
                </li>
              </ul>
            </div>
          </nav>
        </footer>
      </div>
    )
  }
}

export default App;