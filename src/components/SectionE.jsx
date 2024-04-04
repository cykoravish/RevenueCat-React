import React from "react";

export default function SectionE() {
  return (
    <div className="flex flex-col bg-black py-16 md:flex-row justify-between md:px-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold">Ready to get started?</h1>
        <div>
          <button className="text-white bg-blue-500 font-semibold rounded-full px-4 py-1 mt-6">
            SIGN UP FOR FREE
          </button>
          <button className="text-white font-bold border-b-2 border-red-500 ml-5">
            Talk To Sales
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border-gray-400 border mx-4 rounded-xl mt-4 pb-4 md:px-4">
        <h1 className="text-white text-2xl pt-4 text-center">
          "At any of scale, RevenueCat just works"
        </h1>
        <div className="flex justify-center items-center gap-4 pt-4">
          <img
            src="https://api.multiavatar.com/Binx ravish.svg"
            alt="avatar"
            className="w-12"
          />
          <h2 className="text-white font-semibold">David Smith, Widgetsmith</h2>
        </div>
        <button className="text-white border-b-2 border-red-500">
          READ CASE STUDY
        </button>
      </div>
    </div>
  );
}
