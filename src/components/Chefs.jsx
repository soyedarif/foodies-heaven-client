/* eslint-disable */import React, { useEffect, useState } from 'react';
import Chef from './Chef';





const Chefs = () => {

    

    const [chefs,setChefs]=useState([])
    useEffect(()=>{
        fetch(`https://foodies-heaven-server-soyedarif.vercel.app/chefs`)
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    
    return (
        <div className='container mx-auto text-center mb-28'>
            <h2 className='section-title'>Perfect Chefs for Your Appetite</h2>
            <p className='section-description'>Elevate your dining experience with authentic Indian cuisine by choosing your perfect Indian chef. Our expert chefs offer <br /> a diverse range of traditional and regional specialties. Discover your ideal chef today!</p>
            <div className='grid lg:grid-cols-2 gap-6'>
                {
                    chefs.map(chef=> <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;