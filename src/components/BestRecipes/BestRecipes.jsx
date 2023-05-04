import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../../index.css"



const BestRecipes = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  return (
    
    <>
    <div className='text-center'>
      <h2 className='section-title'>Today's Special for Your Appetite</h2>
              <p className='section-description'>Elevate your dining experience with authentic Indian cuisine by choosing your perfect Indian Recipe. Our expert chefs offer <br /> a diverse range of traditional and regional specialties. Discover your ideal chef today!</p>
    </div>
    <div className='container mx-auto mb-28'>
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1"></div>
      <div className="keen-slider__slide number-slide2"></div>
      <div className="keen-slider__slide number-slide3"></div>
      <div className="keen-slider__slide number-slide4"></div>
      <div className="keen-slider__slide number-slide5"></div>
      <div className="keen-slider__slide number-slide6"></div>
    </div>
    </div>
   </>
  
  );
};

export default BestRecipes;