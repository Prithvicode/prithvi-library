import { Link, useMatch } from "@tanstack/react-location";
import * as React from "react";
import { useSelector } from "react-redux";
import { selectBookData } from "../redux/store";

interface IBookDetailProps {}

const BookDetail: React.FunctionComponent<IBookDetailProps> = (props) => {
  const { id } = useMatch().params;
  const book = useSelector(selectBookData);
  const bookDetail = book.find((b) => b.id === parseInt(id, 10));

  if (!bookDetail) {
    return <div>No Book found</div>;
  }

  return (
    <div className="text-black min-w-[400px] md:w-[700px] h-full p-4 sm:p-1">
      <Link to="/">
        <h1 className="text-lg font-medium hover:text-xl">&larr; Home</h1>
      </Link>
      <div className="relative grid sm:grid-cols-2 border-2 border-s1 p-2 rounded-lg grid-cols-1 m-3">
        <img
          src={bookDetail.image}
          className="rounded-lg h-[400px] object-cover mx-auto sm:mx-0 max-sm:h-[300px]" // Center the image on small devices
          alt={bookDetail.title}
        />

        <div className="md:border-l relative  md:border-s1 max-sm:pt-3 px-5 my-2 pt-3 max-sm:border-t max-sm:border-s1">
          <h2 className="text-2xl font-bold">{bookDetail.title}</h2>
          <span className="bg-s1 px-2 rounded-xl text-sm text-gray-700">
            {bookDetail.categories}
          </span>
          <p className="mt-3">
            Review: <br />
            {bookDetail.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
