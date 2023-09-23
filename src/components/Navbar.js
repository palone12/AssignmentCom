import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [color, setColor] = useState(true);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.addEventListener("scroll", changeColor);
    };
  }, []);
  return (
    <div
      className={`flex px-14 z-50 justify-between py-5 md:px-64 items-center md:py-3 fixed top-0 w-full ${
        color ? " bg-white" : "bg-transparent"
      }`}
    >
      <div>
        <img src="/Images/Logo.png" alt="mountains" />
      </div>
      <div className="flex  justify-between gap-4">
        <Link
          to="section1"
          smooth={true}
          duration={500}
          className={`${
            color ? "text-black" : "text-white"
          } underline underline-offset-8 cursor-pointer`}
        >
          01 . History
        </Link>
        <Link
          to="section2"
          smooth={true}
          duration={500}
          className={`${
            color ? "text-black" : "text-white"
          } underline underline-offset-8 cursor-pointer`}
        >
          02 . Team
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
