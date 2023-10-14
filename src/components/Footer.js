import "../index.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid footer p-5 ">
      <div class="container  ">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-6 mb-3">
              <p>
                <strong>QUICK LINKS</strong>
              </p>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <NavLink to="/" class="nav-link p-0 text-body-secondary  ">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink
                    to="/about"
                    class="nav-link p-0 text-body-secondary "
                  >
                    About us
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink
                    to="/recipes"
                    class="nav-link p-0 text-body-secondary "
                  >
                    Recipes
                  </NavLink>
                </li>

                <li class="nav-item mb-2">
                  <NavLink
                    to="/contact"
                    class="nav-link p-0 text-body-secondary "
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-dark" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2023 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <i class="fa-brands fa-facebook fa-xl"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <i class="fa-brands fa-instagram fa-xl"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <i class="fa-brands fa-square-x-twitter fa-xl "></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
