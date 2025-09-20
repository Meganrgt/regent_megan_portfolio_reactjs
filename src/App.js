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
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/mentions">Mentions Légales</Link>
        </nav>
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