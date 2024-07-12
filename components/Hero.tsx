"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const Hero = (props: Props) => {
  const handleSroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil minima
          velit, quam doloremque eos autem facere optio dicta expedita incidunt
          odio consequatur libero nemo dolore voluptatibus molestiae earum
          possimus facilis.
        </p>
        <CustomButton
          title="Explore Cars"
          handleClick={handleSroll}
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image ">
          <Image
            src={"/hero.png"}
            fill
            alt="bg-hero"
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
