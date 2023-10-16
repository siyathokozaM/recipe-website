import "../index.css";
import Footer from "./Footer";
import { useState } from "react";
import RecipeCards from "./RecipeCards";

export default function Content() {
  let [cards, setCards] = useState(RecipeCards);
  return (
    <>
      <div className="content container-fluid justify-content-center text-center  p-5  ">
        <h1 className="mb-5">OUR MOST FAVOURITE RECIPES</h1>

        <div className="cards pb-5">
          {cards.map((card) => (
            <ul className="m-2">
              <li id={card.id}>
                <img
                  className="img-fluid rounded"
                  src={card.imgUrl}
                  alt={card.title}
                  loading="lazy"
                />
                <p className="ratings">
                  <span className="pt-3 pb-3" id="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>({card.rating})
                  </span>
                  <span className="p-3" id="users">
                    <i class="fa fa-user" aria-hidden="true"></i>({card.users})
                  </span>
                </p>
              </li>
              <p className="pt-1 pb-3 title">{card.title}</p>
              {/* <p>{card.button}</p> */}
              <button id={card.id}>GO TO RECIPE</button>
            </ul>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
