import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-20 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div>
          <h1>
            <span>Rent</span>Your Dream House With Us.
          </h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups. Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
