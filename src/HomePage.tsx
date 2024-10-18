import * as React from "react";
import Header from "./sections/Header";
import SearchBox from "./components/SearchBox";
import BookList from "./components/BookList";
import Slider from "./components/Slider";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <>
      <div className="mx-auto max-w-3xl">
        <SearchBox />
        <BookList />
      </div>
    </>
  );
};

export default HomePage;
