import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 md:flex justify-between items-center md:px-64">
      <div className="px-10 flex justify-between py-4 md:py-10 md:gap-4">
        <img className="h-10 w-10" src="/Images/Logo.png" alt="mountains" />
        <img className="h-10 w-20" src="/Images/foottext.png" alt="mountains" />
      </div>
      <div>
        <h3 className="text-white px-10  py-4 text-center">
          COPYRIGHT 2016 ALL RIGHTS RESERVED
        </h3>
      </div>
    </div>
  );
};

export default Footer;
