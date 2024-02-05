import React from "react";

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="pt-[20%] w-full px-14 absolute  text-white bg-gradient-to-t from-black  ">
//       <h1 className="text-2xl font-bold mb-2">{title}</h1>
//       <p className="text-sm mb-4 max-w-sm">{overview}</p>
//       <div className="flex justify-start space-x-2">
//         <button className="p-2 px-5 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out font-semibold">
//           Play
//         </button>
//         <button className="p-2 px-5 text-white rounded border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out font-semibold">
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// };
// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="pt-[20%] w-screen px-24  absolute text-white bg-gradient-to-r from-black  ">
//       <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
//       <p className="py-4 sm:py-6 sm:max-w-sm">{overview}</p>
//       <div className="">
//         <button className="p-2 px-4 sm:px-8 bg-white text-black border border-black rounded-lg hover:bg-slate-100 bg-opacity-50 font-semibold text-sm sm:text-base">
//           Play
//         </button>
//         <button className="p-2 px-4 sm:px-8 mx-2 sm:mx-4 bg-white text-black rounded-lg border border-black hover:bg-slate-100 font-semibold text-sm sm:text-base">
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// };

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[22%] md:pt-[22%] w-screen aspect-video px-16 absolute  text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-sm max-w-sm">{overview}</p>
      <div className="">
        <button className="p-2 px-8  bg-white text-black border border-black rounded-lg hover:bg-black hover:text-white  font-semibold hover:bg-opacity-50">
          Play
        </button>
        <button className="p-2 px-8 mx-4 bg-gray-600 text-white rounded-lg  border border-black  hover:bg-black hover:text-white font-semibold bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
