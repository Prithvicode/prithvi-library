import * as React from "react";
import { useSelector } from "react-redux";
import { selectBookData } from "../redux/store";
import { Link } from "@tanstack/react-location";

interface IBookListProps {}

const BookList: React.FunctionComponent<IBookListProps> = (props) => {
  const books = useSelector(selectBookData); // Fetching book data

  return (
    <section className="relative">
      {books.length === 0 ? (
        <div className="text-center p-4 text-black bg-s1/30  h-[200px] rounded-lg max-sm:mx-5">
          Not Found
        </div>
      ) : (
        <ul className="relative grid gap-6 max-sm:grid-cols-2 md:grid-cols-6 mt-3 p-3 bg-s1/30 w-full rounded-lg shadow-md">
          {books.slice(0, 12).map((b) => (
            <Link key={b.id} to={`/book/${b.id}`}>
              <li
                key={b.title}
                className="group flex flex-col text-center rounded-lg hover:scale-105 transition duration-500 overflow-hidden"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-30 h-40 object-cover"
                  style={{ aspectRatio: "2 / 3" }}
                />
                <div className="absolute inset-0 h-full group-hover:flex items-end justify-center bg-gradient-to-b from-transparent to-a1 text-white text-sm font-medium p-3 hidden">
                  <span className="text-left overflow-hidden text-ellipsis whitespace-nowrap">
                    {b.title}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BookList;
