import React, { useEffect, useState } from "react";
import Swiper from "../components/Swiper";
import one from "../images/one.png";
import history from "../images/HISTORY.png";

const History = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const setWindowDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
  }, []);
  return (
    <div className="history py-10" id="section1">
      <div className="flex gap-2 px-10 py-10  md:px-64">
        <img className="h-10 md:h-full" src={one} />
        <img className="h-5  md:h-full mt-5 md:mt-24" src={history} />
      </div>
      <div>
        <p className="px-10 sm:px-30  md:px-64  md:ml-[150px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="bg-gray-800 bg-opacity-70 p-4 md:mt-4 mt-3 md:p-0">
        {width < 400 ? (
          <Swiper />
        ) : width > 768 ? (
          <div className="mt-56 pt-4">
            <Swiper slidesPerView={4} spaceBetween={40} />
          </div>
        ) : (
          <div className="mt-12 pt-4">
            <Swiper slidesPerView={3} spaceBetween={60} />
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
