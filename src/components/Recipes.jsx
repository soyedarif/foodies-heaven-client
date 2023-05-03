import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Recipe from "./Recipe";

const Recipes = () => {
  const { resId } = useParams();
  const [chefData, setChefData] = useState({});
  const { id, likes, chefPhoto, bio, chefName, yearsOfExperience } = chefData;
  const recipeData = useLoaderData();
  console.log(recipeData);
  useEffect(() => {
    fetch(`https://foodies-heaven-server-soyedarif.vercel.app/chefs`)
      .then(res => res.json())
      .then(data => {
        const chef = data.find(c => c.id == resId);
        setChefData(chef);
      });
  }, []);
  return (
    <div className="rest">
      <NavigationBar></NavigationBar>
      <div className="container mx-auto lg:grid gap-6 grid-cols-3">
        <div className="glass rounded-xl col-span-1 flex flex-col items-center text-white p-8">
          <h2 className="chef-title ">Chef Info</h2>
          <figure className="w-full  mb-8">
            <img className="h-80  mx-auto" src={chefPhoto} alt="Movie" />
          </figure>
          <h3 className="text-2xl mb-4 font-semibold">{chefName}</h3>
          <p>{bio}</p>
        </div>
        <div className="lg:col-span-2">
            {
                recipeData.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
      </div>
    </div>
  );
};

export default Recipes;
