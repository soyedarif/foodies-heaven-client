import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Recipe = ({ recipe }) => {
  const { cookingMethod, ingredients, photoUrl, recipeName, rating } = recipe;
  return (
    <div className="glass mb-9 rounded-lg flex gap-5 text-white p-6">
      <figure className="w-1/3">
        <img className="w-96" src={photoUrl} alt="Movie" />
      </figure>
      <div className="w-2/3">
        <h1 className="font-bold mb-2 text-4xl">{recipeName}</h1>
        <p className="mb-4">{cookingMethod}</p>
        <ol className="list-decimal mb-6 ml-6">
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ol>
        <div className="flex items-center">
          <span>
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          </span>
          <p className="ml-auto cursor-pointer hover:text-primary flex items-center gap-2" title="add to favorite"><span>Add to Favourite</span>
            <FaRegStar className="text-3xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
