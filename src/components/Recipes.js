import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipes from "./RecipeDetails"; // Import your recipe data

export default function Recipes() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching 'id'
    const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

    if (selectedRecipe) {
      setDetail(selectedRecipe);
    }
  }, [id]);

  return (
    <div className="bg pt-5 pb-5">
      <div className="recipe container justify-content-center pt-5">
        {detail && (
          <div id={detail.id} className="row">
            <div className="col">
              <img src={detail.imgUrl} alt={detail.name} />
            </div>
            <div className="col">
              <h1>{detail.name}</h1>
              <p className="ratings">
                <span className="pt-3 pb-3" id="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>(
                  {detail.rating})
                </span>
                <span className="p-3" id="users">
                  <i className="fa fa-user" aria-hidden="true"></i>(
                  {detail.users})
                </span>
              </p>
              <h6>{detail.description}</h6>
              <h4 className="pt-4">
                <strong>INGREDIENTS</strong>
              </h4>
              <ul className="pt-3 ingred">
                {detail.ingredients.map((ingred, index) => (
                  <li key={index}>
                    <img
                      className="list-icon p-1"
                      src="../images/chef-hat.png"
                      alt="icon"
                    />
                    {ingred}
                  </li>
                ))}
              </ul>
            </div>
            <div className="row instr pb-5">
              <div className="col-sm-12 col-md-6 pb-5">
                <h4 className="pt-4">
                  <strong>INSTRUCTIONS</strong>
                </h4>
                <ul className="pt-3">
                  {detail.instructions.map((instru, index) => (
                    <div key={index}>
                      <li className="p-2">
                        <strong>Step {index + 1}:</strong> {instru}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
