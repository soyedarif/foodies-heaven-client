/* eslint-disable */ import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../components/Chefs";
import Footer from "../components/Footer";
import { useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import BestRecipes from "../components/BestRecipes/BestRecipes";
import Feedback from "../components/BestRecipes/Feedback";

const Home = () => {
  const navigation=useNavigation()
  if(navigation.state==='loading'){
    return <Loading></Loading>
  }
  return (
    <>
      <Banner></Banner>
      <Chefs></Chefs>
      <div className="sm:hidden lg:block">
        <BestRecipes></BestRecipes>
      </div>
      <Feedback></Feedback>
      <Footer></Footer>
    </>
  );
};

export default Home;
