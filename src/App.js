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
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link data-bs-toggle="modal" data-bs-target="#ModaleProfil">John Doe</Link>
              <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/services">Services</Link>
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                  <Link className="nav-link" to="/mentions">Mentions Légales</Link>
                </div>
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
      </div>
    )
  }
}

export default App;