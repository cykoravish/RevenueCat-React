import React from "react";
import latestPost from "../assets/images/latestPost.png";
import avatar from "../assets/images/avatar.png";

export default function LatestPost() {
  return (
    <div className="bg-gray-50 h-auto flex flex-wrap flex-col md:flex-row justify-center gap-10 p-8 pt-32">
      <div className="flex-1">
        <img
          src={latestPost}
          width={400}
          alt="img"
          className="rounded-lg m-auto md:h-full md:w-full"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        <button className="border-green-500 border-2 px-3 py-1 rounded-full font-semibold text-green-500 w-32 md:mx-0 mx-auto hover:text-white hover:bg-green-500">
          Latest Post
        </button>
        <h1 className="font-semibold text-2xl">
          A Practical Guide to Apple Search Ads
        </h1>
        <p className="font-normal flex-1">
          Why it's a channel worth exploring to grow your app
        </p>
        <div className="flex gap-4 items-center">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full object-cover w-24 h-24"
          />
          <div>
            <h2 className="font-semibold">Thomas Petit</h2>
            <p className="font-medium">june 07. 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
