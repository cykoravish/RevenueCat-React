import React from "react";
import Card from "./Card";

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
    <div>
      <Card cardsData={cardsData} />
    </div>
  );
}
