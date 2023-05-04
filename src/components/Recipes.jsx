import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Recipe from "./Recipe";
import { FaCalendarAlt, FaHamburger, FaThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Recipes = () => {
  const { resId } = useParams();
  const [chefData, setChefData] = useState({});
  const { id, likes, chefPhoto, bio, chefName, yearsOfExperience } = chefData;
  const [fav, setFav] = useState([]);

  const handleFav = (id) => {
    setFav([...fav, id]);
    toast.success('Added To Favourite!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  
  console.log(fav);
  
  const recipeData = useLoaderData();
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
          <p className="mb-6">{bio}</p>
          <div>
          <p className="flex gap-2 mb-4 items-center">
          <FaCalendarAlt /> Years Of Experience: {yearsOfExperience}
        </p>
        <p className="flex gap-2 mb-4 items-center">
          <FaHamburger /> Numbers of recipes: 3
        </p>
        <p className="flex gap-2 items-center">
          <FaThumbsUp /> Likes: {likes}
        </p>
          </div>
        </div>
        <div className="lg:col-span-2">
            {
                recipeData.map(recipe=><Recipe key={recipe.id} fav={fav} handleFav={handleFav} recipe={recipe}></Recipe>)
            }
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Recipes;
