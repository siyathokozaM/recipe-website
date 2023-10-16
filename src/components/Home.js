import "../index.css";
import React from "react";
import Footer from "./Footer";
import img1 from "../images/c7.jpg";
import img2 from "../images/img12.jpg";
import img3 from "../images/img10.jpg";
import img4 from "../images/c8.jpg";

export default function Hero() {
  return (
    <>
      <div className="hero ">
        <div class="container col-xxl-12 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <div className="row">
                <div className="col">
                  <img
                    src={img1}
                    class="d-block mx-lg-auto img-fluid rounded"
                    alt="cake"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <img
                    src={img2}
                    class="d-block mx-lg-auto img-fluid rounded"
                    alt="cake"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <img
                    src={img3}
                    class="d-block mx-lg-auto img-fluid rounded"
                    alt="cake"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <img
                    src={img4}
                    class="d-block mx-lg-auto img-fluid rounded"
                    alt="cake"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6  ">
              <h1 class="display-5 fw-bold lh-1 mb-3 ">
                GET RECIPES TO THE MOST DELICIOUS DELICATES FOR YOUR SWEET TOOTH
              </h1>
              <p class="lead">
                Get access to over a hundred baked good recipes to satisfy your
                sweet tooth. We have everything for Everyone!
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2 explore-button"
                >
                  EXPLORE NOW
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid justify-content-center text-center  p-5 mb-5 ">
        <h1 className="mb-5 mt-2 text-white">
          {" "}
          <strong>OUR MOST FAVOURITE RECIPES </strong>{" "}
        </h1>

        <button className="explore-button">EXPLORE NOW</button>
      </div>
      <Footer />
    </>
  );
}
