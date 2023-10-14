import "../index.css";
import Footer from "./Footer";

import img2 from "../images/img4.jpg";
import img3 from "../images/img12.jpg";
import img4 from "../images/img7.jpg";
import img5 from "../images/img6.jpg";
import img6 from "../images/img5.jpg";
import img7 from "../images/img11.jpg";
import img8 from "../images/img15.jpg";
import img9 from "../images/img14.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img1.jpg";
import img12 from "../images/img9.jpg";
import img13 from "../images/img13.jpg";
import img14 from "../images/img2.jpg";
import img15 from "../images/img8.jpg";

export default function About() {
  return (
    <div className="about--us   pt-5 ">
      <div className="container justify-content-center text-center d-md-flex flex-md-row mb-5">
        <div className=" shadow crd m-2 m-lg-5 p-3 j text-center border">
          <div className="feature-icon   align-items-center  fs-2 bg-gradient mb-3">
            <i className="fa-sharp fa-solid fa-star fa-2xl p-3"></i>
          </div>
          <h4 className="fs-5 p-3">LEADING RECIPE WEBSITE</h4>
        </div>
        <div className="crd shadow m-2 m-lg-5 p-3 border text-center ">
          <div className="feature-icon align-items-center fs-2  bg-gradient mb-3">
            <i className="fa-sharp fa-solid fa-bread-slice fa-2xl p-3"></i>
          </div>
          <h4 className="fs-5  p-3  ">EASY TO FOLLOW RECIPES</h4>
        </div>
        <div className="crd shadow m-2 m-lg-5 p-3 border text-center">
          <div className="feature-icon align-items-center bg-gradient fs-2 mb-3">
            <i className="fa-sharp fa-solid fa-face-grin-hearts fa-2xl p-3"></i>
          </div>
          <h4 className=" fs-5  p-3  ">FROM THE MOST TRUSTED CHEFS</h4>
        </div>
      </div>

      <div className="container border p-5 mb-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <h4 className="mb-5"></h4>

            <p className=" display-6 justify-content-center align-items-center p-5 mt-5 ">
              <span className="about--sweet">SWEET</span>
              <span className="about--tooth">•TOOTH </span>
              connects home cooks with their greatest sources of inspiration —
              other home cooks. We're the world's leading digital food brand,
              and that inspires us to do everything possible to keep our
              community connected. Sixty-million home cooks deserve no less!
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 grid align-items-center d-flex">
            <div className="flex-column">
              {/* <img className="img-fluid " src={img1} /> */}
            </div>

            <div className="flex-column">
              <img className="img-fluid m-2" src={img2} />
              <img className="img-fluid m-2" src={img3} />
            </div>

            <div className="flex-column">
              <img className="img-fluid m-3" src={img4} />
              <img className="img-fluid m-3" src={img5} />
              <img className="img-fluid m-3" src={img7} />
            </div>

            <div className="flex-column">
              <img className="img-fluid mb-3" src={img6} />
              <img className="img-fluid mb-3" src={img8} />
              <img className="img-fluid mb-3" src={img9} />
              <img className="img-fluid mb-3" src={img10} />
            </div>

            <div className="flex-column">
              <img className="img-fluid m-2" src={img11} />
              <img className="img-fluid m-2" src={img12} />
              <img className="img-fluid m-2" src={img13} />
              <img className="img-fluid m-2" src={img14} />
              <img className="img-fluid m-2" src={img15} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
