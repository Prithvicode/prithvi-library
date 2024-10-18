import * as React from "react";
import { useSelector } from "react-redux";
import { selectBookData } from "../redux/store";
import { Link } from "@tanstack/react-location";

interface IBookListProps {}

const BookList: React.FunctionComponent<IBookListProps> = (props) => {
  const book = useSelector(selectBookData);
  return (
    <ul className="grid  gap-6  max-sm: grid-cols-2 md:grid-cols-6 mt-3 bg-white/5 p-4 w-full rounded-lg">
      {book.slice(0, 12).map((b) => (
        <Link key={b.id} to={`/book/${b.id}`}>
          <li
            key={b.title}
            className="relative group flex flex-col text-center rounded-lg hover:scale-105 transition duration-500 overflow-hidden"
          >
            <img
              src={b.image}
              alt={b.title}
              className="w-30 h-40 object-cover" // Update here
              style={{ aspectRatio: "2 / 3" }} // Set the aspect ratio here if needed
            />
            <div className="absolute inset-0 h-full group-hover:flex items-end justify-center bg-gradient-to-b from-transparent to-gray-950 text-white text-sm font-medium p-3 hidden">
              <span className="text-left overflow-hidden text-ellipsis whitespace-nowrap ">
                {b.title}
              </span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default BookList;
