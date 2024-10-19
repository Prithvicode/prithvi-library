import * as React from "react";

const Skeleton: React.FunctionComponent = () => {
  const skeletonBooks = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <>
      {/* Skeleton Book List */}
      <ul className="relative grid gap-6 grid-cols-3 mt-3 p-3 bg-s1 w-full place-items-center rounded-lg shadow-md max-w-[400px] sm:max-w-[600px] md:max-w-[700px] md:grid-cols-6 mx-auto animate-pulse">
        {skeletonBooks.slice(0, 12).map((b) => (
          <li
            key={b}
            className="group flex max-w-[130px] sm:w-[90px] flex-col text-center rounded-lg hover:scale-105 transition duration-500 overflow-hidden "
          >
            <div className="w-[90px] h-[130px] bg-slate-500"></div>
          </li>
        ))}
      </ul>
      {/* Skeleton Slider */}
      <div className="w-full max-w-[850px] py-3 h-auto g3 mt-2 mb-3 justify-center overflow-hidden mx-auto [mask-image:linear-gradient(90deg,_transparent,_white_5%,_white_95%,_transparent)] animate-pulse">
        <ul className="w-max flex  flex-nowrap gap-4  animate-infinite-scroll  ">
          {skeletonBooks.map((b) => (
            <li
              key={b}
              className="group flex max-w-[130px] sm:w-[90px] flex-col text-center rounded-lg hover:scale-105 transition duration-500 overflow-hidden  "
            >
              <div className="w-[100px] h-[130px]  bg-slate-500"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skeleton;
