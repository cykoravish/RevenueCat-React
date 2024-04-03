import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SectionD() {
  const cardsData = [
    {
      id: 1,
      img: "https://source.unsplash.com/900x500/?buildings",
      btnName: "Growth",
      btnColor: "blue",
      title: "Early Stage Subscription App Growth Stack",
      description:
        "A scaled-down 'MVP' of the Mobile Growth Stack to help mobile developers get started",
      avatar: "https://api.multiavatar.com/Binx cyko.svg",

      name: "Thomas Petit",
      Date: "April 02, 2022",
    },
    {
      id: 2,
      img: "https://source.unsplash.com/900x500/?modern",
      btnName: "Growth",
      btnColor: "green",
      title:
        "How AllTraits Leveraged Product-Channel Fit To Scale Its Subscription...",
      description: "Growth and investment takeaways from a profitable app",
      avatar: "https://api.multiavatar.com/Binx pooja.svg",

      name: "David Barnard",
      Date: "March 15, 2022",
    },
    {
      id: 3,
      img: "https://source.unsplash.com/900x500/?ai",
      btnName: "Engineering",
      btnColor: "blue",
      title: "Hybrid SDK Architecture at RevenueCat",
      description: "Adding a layer to reduce complexity",
      avatar: "https://api.multiavatar.com/Binx anant.svg",

      name: "Maddie Beyl",
      Date: "March 15, 2022",
    },
  ];
  return (
    <div>
      <Card cardsData={cardsData} />
      <div className="flex px-8 py-8 justify-center items-center gap-2 md:gap-4 font-semibold relative">
        <h2 className="hover:bg-yellow-200 rounded-full flex justify-center items-center h-10 w-10">
          1
        </h2>
        <h2 className="hover:bg-yellow-200 rounded-full flex justify-center items-center h-10 w-10">
          2
        </h2>
        <h2 className="hover:bg-yellow-200 rounded-full flex justify-center items-center h-10 w-10">
          ...
        </h2>
        <h2 className="hover:bg-yellow-200 rounded-full flex justify-center items-center h-10 w-10">
          8
        </h2>
        <div className="absolute right-8">
          Next <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
}
