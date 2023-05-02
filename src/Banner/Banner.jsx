/* eslint-disable */ import React from "react";
import "./Banner.css";
import NavigationBar from "../components/NavigationBar";

const Banner = () => {
  return (
    <div className="banner mb-20">
      <NavigationBar></NavigationBar>
      <div className="container lg:w-1/2 lg:ml-4 text-white p-8 mt-12 mx-auto">
        <h1 className="text-5xl mb-6 font-bold leading-snug">Dive down for Authentic<br />  healthy Meal from Indian Cuisine</h1>
        <p className="mb-8">
Indulge in the rich and diverse flavors of Indian cuisine at Foodies Heaven. Our menu offers a wide range of authentic dishes, from fiery curries to aromatic biryanis. We cater to all dietary preferences, with vegetarian, meat, gluten-free, and vegan options available. Our passionate chefs create healthy and flavorful dishes that transport you to the vibrant streets of India. Join us for a culinary journey like never before.</p>
      </div>
    </div>
  );
};

export default Banner;
