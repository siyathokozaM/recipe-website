import "../index.css";
import Footer from "./Footer";
import cake from "../images/img9.jpg";
import tart from "../images/c8.jpg";
import bananaLoaf from "../images/img2.jpg";
import pie from "../images/c2.jpg";

export default function Content() {
  return (
    <>
      <div className="content container-fluid justify-content-center text-center  p-5 mb-5 ">
        <h1 className="mb-5 text-white">OUR MOST FAVOURITE RECIPES</h1>

        <button className="explore-button">EXPLORE NOW</button>
      </div>

      <Footer />
    </>
  );
}
