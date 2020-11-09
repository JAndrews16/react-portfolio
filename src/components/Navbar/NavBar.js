import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const navTabBtns = {
  paddingTop: "0%",
  paddingBottom: "0%",
  marginTop: "10%",
  fontSize: "18px"
};

const Navbar = () => {
    return ( <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/about">Juliana Andrews</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link style={navTabBtns} to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={navTabBtns} to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={navTabBtns} to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
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