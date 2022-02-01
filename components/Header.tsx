import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

type Props = {
  name?: string;
};

const Header = ({ name }: Props) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <header className=" flex md:flex-row flex-col justify-center  lg:justify-between items-center">
        <div className="w-full flex flex-col items-start justify-center md:container md:mx-auto p-5">
          <p className="text-primary mb-2">MARKETING AGENCY</p>
          <h1 className="lg:text-5xl text-4xl font-bold">
            A marketing agency <br /> to grow your startup
          </h1>
          <p className="text-secondary mt-4 text-lg w-12/12">
            Lorem ipsum consectetur amet dolor sit comener ilrs dolce issilm
            acalrm leoinsion duycoqun cons. Get in touch
          </p>
          <div className="flex lg:flex-row md:flex-col flex-row gap-5 mt-10 w-full">
            <button className="bg-primary text-white font-bold p-4 px-7 py-5 rounded-lg ">
              Get in touch
            </button>
            <button className="bg-white border-2 border-primary p-4 px-8 text-primary hover:bg-primary hover:text-white rounded-lg font-bold">
              Browse Services
            </button>
          </div>
        </div>
        <div className="h-[70vh] w-full overflow-hidden -z-50">
          <img
            className=" h-full w-full object-cover"
            src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6168760f575291a74847c63e_image-hero-v3-marketing-template.jpg"
            alt=""
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
