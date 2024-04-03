import React from "react";

export default function SectionC() {
  const cardsData = [
    {
      id: 1,
      img: "https://source.unsplash.com/900x500/?electronics",
      btnName: "Company",
      btnColor: "blue",
      title: "Meet the New RevenueCat SDK",
      description: "Our biggest release to date!",
      avatar: "https://api.multiavatar.com/Binx cyko.svg",

      name: "Andy Boedo",
      Date: "April 22, 2022",
    },
    {
      id: 2,
      img: "https://source.unsplash.com/900x500/?laptops",
      btnName: "Engineering",
      btnColor: "green",
      title: "Using RevenueCat with Expo's Managed Workflow",
      description: "The getting started guide",
      avatar: "https://api.multiavatar.com/Binx pooja.svg",

      name: "Josh Holtz",
      Date: "April 18, 2022",
    },
    {
      id: 3,
      img: "https://source.unsplash.com/900x500/?water",
      btnName: "Engineering",
      btnColor: "blue",
      title: "How we test SDKs at RevenueCat",
      description: "All about testing and updatingout iOS SDK",
      avatar: "https://api.multiavatar.com/Binx anant.svg",

      name: "Andy Boedo",
      Date: "April 12, 2022",
    },
  ];
  return (
    <div className="w-full px-8 cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
      {cardsData.map((elem) => (
        <div
          key={elem.id}
          className="card rounded-lg overflow-hidden border-2 border-gray-300"
        >
          <img src={elem.img} className="w-full object-cover" />
          <button
            className={`border-2 border-${elem.btnColor}-500 rounded-full px-4 my-3 text-${elem.btnColor}-500 font-semibold hover:bg-${elem.btnColor}-500 hover:text-white ml-3`}
          >
            {elem.btnName}
          </button>
          <h1 className="ml-3 font-bold text-xl">{elem.title}</h1>
          <p className="ml-3 text-lg">{elem.description}</p>
          <div className="ml-3 flex gap-4 items-center h-24">
            <img src={elem.avatar} className="w-8" />
            <div>
              <h2 className="font-semibold">{elem.name}</h2>
              <p className="text-sm">{elem.Date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
