import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './css/mystyle.css';
import { NavLink, Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Abilities from "./pages/Abilities";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {

  const navLinkClass = 'nav-link text-white'

  return (
    <>
      <Router>
        <header className="bg-success text-white p-2">
          <nav className="container navbar navbar-expand-md">
            <div className="container-fluid">
              <span className="fs-3 navbar-brand text-white">Anna Raichlová</span>
              <button className="navbar-toggler bg-light text-white" type="button" data-bs-toggle="collapse" data-bs-target="#nav-main" aria-controls="nav-main" aria-expanded="false" aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="nav-main">
                <ul className="navbar text-uppercase text-end fw-bold list-unstyled flex-column flex-md-row justify-content-end mb-0">
                <li className="nav-item">
                <NavLink to={"/"} className={navLinkClass} activeClassName="active" name="home" >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/abilities"} className={navLinkClass} activeClassName="active" name="abilities">
                  Dovednosti
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={navLinkClass} activeClassName="active" name="contact">
                  Kontakt
                </NavLink>
              </li>
              </ul>
              </div>
            </div>
          </nav>
        </header>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/abilities" element={<Abilities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>

      <Footer />
    </>
  );
}

export default App;
