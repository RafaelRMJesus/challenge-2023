'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState("/images/blob.svg");

  const handleBackgroundToggle = () => {
    setBackgroundImage(backgroundImage === "/images/blob.svg" ? "/images/blob-blue.svg" : "/images/blob.svg");
  };

  return (
    <div className="
    flex
    min-h-full
    justify-center
    bg-gray-100
    background-cover
    "
    style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <div className="ml-80 mt-60 mr-[-15%]">
        <h1 
          className="mb-4 text-8xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white " 
        >
          Schneider EcoConnect
        </h1>
        <p 
          className="text-lg font-normal dark:text-gray-400 mb-4"
        >
          Em um mundo em constante evolução, a Schneider Electric torna possível o impossível, garantindo que 'Life Is On' em cada dispositivo, lugar e momento.
        </p>
        <Button onClick={handleBackgroundToggle}>Alguma coisa Aqui ----&gt;</Button>
      </div>
      <img src={"images/blob.svg"} className="z-index-10 ml-[-26.5%]" draggable="false" alt=""/>
    </div>
  );
}
 
export default Hero;
