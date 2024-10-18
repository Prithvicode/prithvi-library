import { Link, useMatch } from "@tanstack/react-location";
import * as React from "react";
import { useSelector } from "react-redux";
import { selectBookData } from "../redux/store";

interface IBookDetailProps {}

const BookDetail: React.FunctionComponent<IBookDetailProps> = (props) => {
  const { id } = useMatch().params;
  // const { book } = useBook();
  const book = useSelector(selectBookData);
  const bookDetail = book.find((b) => b.id === parseInt(id, 10));

  if (!bookDetail) {
    return <div>No Book found</div>;
  }
  return (
    <div className="mt-5 text-white">
      <Link to="/">
        <h1 className="text-lg font-medium hover:text-xl">&larr; Home</h1>
      </Link>
      <div className="grid grid-cols-2 bg-white/10 h-[500px]">
        <img
          src={bookDetail.image}
          className="rounded-lg h-[400px] object-cover"
          alt={bookDetail.title}
        />
        <div>
          <h2 className="text-2xl font-bold">{bookDetail.title}</h2>
          <p>{bookDetail.categories}</p>
          <p>My Review: {bookDetail.description}</p>
          <p>Likes: {bookDetail.likecount}</p>
          <p>Views: {bookDetail.viewcount}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
