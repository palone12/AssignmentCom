import React from "react";
import mountLetter from "../images/letter.png";
const Hero = () => {
  return (
    <div>
      <img
        className="pt-1 md:-mt-14"
        src={mountLetter}
        height="100px"
        alt="letter"
      />
    </div>
  );
};

export default Hero;
