import "../index.css";

import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="">
      <div className="container-fluid shadow navBar  ">
        <header className="d-flex flex-wrap justify-content-md-center py-3  ">
          <NavLink
            to="/"
            className="logo fs-4 d-flex mb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <span className="sweet">SWEET</span>
            <span className="tooth">•TOOTH</span>
          </NavLink>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link " aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/recipes" className="nav-link">
                Recipes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact us
              </NavLink>
            </li>
          </ul>

          <div className="button--box">
            <button className="menu--bar">
              <i className="fa fa-bars menu--bar" aria-hidden="true"></i>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}
