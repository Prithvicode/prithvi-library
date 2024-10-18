import * as React from "react";
import Header from "./sections/Header";
import SearchBox from "./components/SearchBox";
import BookList from "./components/BookList";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <>
      <SearchBox />
      <BookList />
    </>
  );
};

export default HomePage;
