import React from "react";
import { FaThumbsUp, FaCalendarAlt, FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, likes, chefPhoto, bio, chefName, yearsOfExperience } = chef;
  return (
    <div className="card card-side h-96 bg-base-100 shadow-xl">
      <figure className="w-1/2">
        <img className="" src={chefPhoto} alt="Movie" />
      </figure>
      <div className="flex flex-col justify-end p-8 text-left flex-grow">
        <h2 className="card-title text-Shade mb-5">{chefName}</h2>
        <p className="flex gap-2 mb-4 items-center">
          <FaCalendarAlt /> Years Of Experience: {yearsOfExperience}
        </p>
        <p className="flex gap-2 mb-4 items-center">
          <FaHamburger /> Numbers of recipes: 3
        </p>
        <p className="flex gap-2 items-center">
          <FaThumbsUp /> Likes: {likes}
        </p>
        <div className="mt-auto">
          <Link to={`/recipes/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
