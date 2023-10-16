import recipe from "./RecipeDetails";
import { useState } from "react";

export default function Recipes() {
  const [detail, setDetail] = useState(recipe);

  return (
    <div div className="container-fluid recipe pt-5 pb-5">
      <div className="container pt-5 ">
        {detail.map((item) => (
          <>
            <div className="row">
              <div className=" col">
                <img src={item.imgUrl} />
                <div className="row instr pb-5">
                  <div className="col pb-5">
                    <h4 className="pt-4">
                      <strong>INSTRUCTIONS</strong>
                    </h4>
                    <ul className="pt-3">
                      {item.instructions.map((instru, index) => (
                        <div key={index}>
                          <li className="p-2">
                            <strong>Step {index + 1} :</strong> {instru}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <h1>{item.name}</h1>
                <p className="ratings">
                  <span className="pt-3 pb-3" id="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>({item.rating})
                  </span>
                  <span className="p-3" id="users">
                    <i class="fa fa-user" aria-hidden="true"></i>({item.users})
                  </span>
                </p>
                <h6>{item.description}</h6>
                <h4 className="pt-4">
                  <strong>INGREDIANTS</strong>
                </h4>
                <ul className="pt-3 ingred">
                  {item.ingredients.map((ingred, index) => (
                    <li key={index}>
                      <img
                        className="list-icon p-1"
                        src="../images/chef-hat.png"
                      />
                      {ingred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
