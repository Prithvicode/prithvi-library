import * as React from "react";

const Skeleton: React.FunctionComponent = () => {
  const skeletonBooks = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <>
      {/* Skeleton Book List */}
      <ul className="relative grid gap-6 max-sm:grid-cols-2 md:grid-cols-6 mt-3 p-3 bg-s1 w-full rounded-lg shadow-md animate-pulse">
        {skeletonBooks.slice(0, 12).map((b) => (
          <li
            key={b}
            className="group flex flex-col text-center rounded-lg hover:scale-105 transition duration-500 overflow-hidden "
          >
            <div className="w-30 h-40 bg-slate-500"></div>
          </li>
        ))}
      </ul>
      {/* Skeleton Slider */}
      <div className="w-[850px]  py-3 h-[170px]  g3 mt-2 mb-3 justify-center overflow-hidden mx-auto [mask-image:linear-gradient(90deg,_transparent,_white_5%,_white_95%,_transparent)] ">
        <ul className="w-max flex  flex-nowrap gap-4  animate-infinite-scroll  ">
          {skeletonBooks.map((b) => (
            <li
              key={b}
              className="list-none shadow-shadow-og group w-[120px] gap-2 flex flex-col text-center rounded-lg hover:scale-105 transition duration-500 overflow-hidden animate-pulse"
            >
              <div className="w-[120px] h-[160px] bg-slate-500"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skeleton;
