import "../index.css";

import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navb">
      <nav class="navbar shadow-lg navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <NavLink to="/" className="logo navbar-brand text-decoration-none">
            <span className="sweet">SWEET</span>
            <span className="tooth">•TOOTH</span>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon "></span> */}
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item p-2">
                <NavLink to="/" className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li class="nav-item p-2">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li class="nav-item p-2">
                <NavLink to="/recipes" className="nav-link">
                  Recipes
                </NavLink>
              </li>
              <li class="nav-item p-2">
                <NavLink to="/contact" className="nav-link">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
