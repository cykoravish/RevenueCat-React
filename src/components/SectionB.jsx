import React from "react";
import card1 from "../assets/images/card1.png";

export default function SectionB() {
  return (
    <div className="">
      <div className="h-auto flex flex-wrap flex-col md:flex-row justify-center gap-10 p-8">
        <div className="flex-1">
          <img
            src={card1}
            alt="img"
            className="rounded-lg m-auto md:h-full md:w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center items-center sm:items-start">
          <button className="border-blue-500 border-2 px-3 py-1 rounded-full font-semibold text-blue-500 w-32 md:mx-0 mx-auto hover:text-white hover:bg-blue-500">
            Engineering
          </button>
          <h1 className="font-semibold text-2xl">
            Introducing our Firebase Extension
          </h1>
          <p className="font-normal flex-1">
            Firebase developers get plug and play in-app purchase infrastructure
          </p>
          <div className="flex gap-4 items-center">
            <img
              src="https://api.multiavatar.com/Binx cykoravish.svg"
              alt="avatar"
              className="rounded-full object-cover w-24 h-24"
            />
            <div>
              <h2 className="font-semibold">Francie Fernandes</h2>
              <p className="font-medium">May 11, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
