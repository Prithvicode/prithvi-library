import * as React from "react";
import { useSelector } from "react-redux";
import { selectBookData, selectSearch } from "../redux/store";
import { Link } from "@tanstack/react-location";

const Slider: React.FunctionComponent = () => {
  const { books } = useSelector(selectBookData);
  var duplicateBooks = [...books, ...books];

  const search = useSelector(selectSearch);
  if (search) {
    duplicateBooks = [...books];
  }
  // console.log(books.length);
  return (
    <div className="w-[850px]  py-3 h-[170px]  g3 mt-2 mb-3 justify-center overflow-hidden mx-auto [mask-image:linear-gradient(90deg,_transparent,_white_5%,_white_95%,_transparent)] ">
      <ul className="w-max flex  flex-nowrap gap-4  animate-infinite-scroll ">
        {duplicateBooks.map((b, idx) => (
          <li
            key={b.id + Math.random() - idx}
            className="list-none shadow-shadow-og group w-[120px] gap-2 flex flex-col text-center rounded-lg hover:scale-105 transition duration-500 overflow-hidden"
          >
            <Link to={`/book/${b.id}`}>
              <img
                src={b.image}
                alt={b.title}
                className="w-[120px] h-[160px] object-cover"
                style={{ aspectRatio: "2 / 3" }}
              />
              <div className="absolute inset-0 h-full group-hover:flex items-end justify-center bg-gradient-to-b from-transparent to-a1 text-white text-sm font-medium p-3 hidden">
                <span className="text-left overflow-hidden text-ellipsis whitespace-nowrap">
                  {b.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
