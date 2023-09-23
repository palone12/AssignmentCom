import React from "react";
import two from "../images/two.png";
import climb from "../images/climb.png";
import mountainone from "../images/MOUNTAIN 1.png";
import mountainTwo from "../images/MOUNTAIN 2.png";

const Team = () => {
  return (
    <div id="section2">
      <div className="flex gap-2 px-10 py-10  md:px-64 md:py-20">
        <img className="h-10 md:h-full" src={two} />
        <img className="h-5  md:h-full mt-5 md:mt-24" src={climb} />
        <p className="mt-10 -ml-28 -px-1 py-2 md:mt-0 md:ml-0 md:py-1 md:px-6">
          Cras scelerisque id quan sed dugnussim Pellentesque urn nunc , gravida
          quis henderit ac, tristique
        </p>
      </div>

      <div className="bg-gray-700 h-10 flex justify-between md:justify-start md:gap-4 md:px-64 items-center px-10">
        <div className=" bg-white bg-opacity-90 h-full">
          <img className="mt-[7px] p-1" src={mountainone} />
        </div>
        <img src={mountainTwo} />
      </div>
      <div className="team h-[25vh] md:h-[70vh] "></div>
    </div>
  );
};

export default Team;
