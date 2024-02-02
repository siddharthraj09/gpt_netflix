import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-8 max-w-sm">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 ">{overview}</p>
      <div className="">
        <button className="p-2 px-8  bg-white text-black border border-black rounded-lg hover:bg-slate-100 bg-opacity-50 font-semibold">
          Play
        </button>
        <button className="p-2 px-8 mx-4 bg-white text-black rounded-lg  border border-black  hover:bg-slate-100 font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
