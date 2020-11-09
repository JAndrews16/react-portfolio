import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
//import About from "./pages/About";
//import Portfolio from "./pages/Portfolio";
//import Contact from "./pages/Contact";

const Navbar = () => {
    return ( <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="./index.html">Juliana Andrews</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                    </Link>
                </li>
              </ul>
            </div>
          </nav>
    </>    
    )
}

export default Navbar;