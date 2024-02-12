const VideoTitle = ({ title, overview }) => {
  return (
    <div className="hover:opacity-100 opacity-0 md:opacity-100 pt-[24%] md:pt-[22%] w-screen aspect-video px-16 absolute  text-white bg-gradient-to-r from-black m-auto h-full">
      <h1 className="md:text-2xl text-base font-bold">{title}</h1>
      <p className="py-6 text-xs md:text-sm max-w-sm">{overview}</p>
      <div className="">
        <button className="py-2 px-4 bg-white text-black border border-black rounded-lg hover:bg-black hover:text-white  font-semibold hover:bg-opacity-50">
          Play
        </button>
        <button className="py-2 px-4 mx-4  bg-gray-600 text-white rounded-lg  border border-black  hover:bg-black hover:text-white font-semibold bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="pt-[34%] md:pt-[22%] w-screen aspect-video px-16 absolute text-white bg-gradient-to-r from-black m-auto sm:opacity-0 sm:hover:opacity-100 tmd:opacity-100">
//       <h1 className="text-base md:text-2xl font-bold">{title}</h1>
//       <p className="py-6 text-xs md:text-sm max-w-sm">{overview}</p>
//       <div>
//         <button className="py-2 px-4 bg-white text-black border border-black rounded-lg hover:bg-black hover:text-white font-semibold hover:bg-opacity-50">
//           Play
//         </button>
//         <button className="py-2 px-4 mx-4 bg-gray-600 text-white rounded-lg border border-black hover:bg-black hover:text-white font-semibold bg-opacity-60">
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// };
export default VideoTitle;
