import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import cardImg from "../assets/images/card.png";
import React from "react";

export default function SectionA() {
  const cardsData = [
    {
      id: 1,
      img: "https://source.unsplash.com/900x500/?code",
      btnName: "Company",
      btnColor: "blue",
      title: "Here at RevenueCat, Employees are Customers Too",
      description: "Sharing app building ideas in our Employee App Club",
      avatar: "https://api.multiavatar.com/Binx cyko.svg",

      name: "Will Taylor",
      Date: "May 31, 2022",
    },
    {
      id: 2,
      img: "https://source.unsplash.com/900x500/?technology",
      btnName: "Growth",
      btnColor: "green",
      title: "App Store Optimization Guide for Subscriptions Apps",
      description: "Learn how to boost your app's visibility and more",
      avatar: "https://api.multiavatar.com/Binx pooja.svg",

      name: "Thomas Kriebernegg",
      Date: "May 30, 2022",
    },
    {
      id: 3,
      img: "https://source.unsplash.com/900x500/?programming",
      btnName: "Engineering",
      btnColor: "blue",
      title: "Account deletion rules on the App Store",
      description: "Everything you need to know about new rule ",
      avatar: "https://api.multiavatar.com/Binx anant.svg",

      name: "Core Rabazinski",
      Date: "May 26, 2022",
    },
    {
      id: 4,
      img: "https://source.unsplash.com/900x500/?tools",
      btnName: "Company",
      btnColor: "green",
      title: "How We Work Remotely at RevenueCat",
      description: "We're little diffrent than your average 9-5 job",
      avatar: "https://api.multiavatar.com/Binx pia.svg",

      name: "Rachel Wright",
      Date: "May 26, 2022",
    },
    {
      id: 5,
      img: "https://source.unsplash.com/900x500/?tech",
      btnName: "Engineering",
      btnColor: "blue",
      title: "Google l/O 2022 Announcements",
      description:
        "How the new features and updates Play Console will help grow your app business",
      avatar: "https://api.multiavatar.com/Binx ravish.svg",
      name: "Maddie Beyl",
      Date: "May 17, 2022",
    },
  ];
  return (
    <>
      <div className="py-8 px-8">
        <header className="flex justify-between flex-col md:flex-row">
          <ul className="sm:flex justify-between items-center hidden text-lg">
            <li className="font-sans font-semibold hover:bg-yellow-200 rounded-full px-3 py-2">
              All articles
            </li>
            <li className="font-sans font-semibold hover:bg-yellow-200 rounded-full px-3 py-2">
              Company
            </li>
            <li className="font-sans font-semibold hover:bg-yellow-200 rounded-full px-3 py-2">
              Engineering
            </li>
            <li className="font-sans font-semibold hover:bg-yellow-200 rounded-full px-3 py-2">
              Growth
            </li>
          </ul>
          <div className="text-gray-400 text-sm">
            <p className="hidden md:flex justify-end items-center gap-2">
              Follow for updates:
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWifi} />
            </p>
          </div>
        </header>
      </div>
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
        <div className="lastCard">
            <img src={cardImg} className="rounded-lg overflow-hidden border-2 border-gray-300 h-full w-full" />
        </div>
      </div>
    </>
  );
}
