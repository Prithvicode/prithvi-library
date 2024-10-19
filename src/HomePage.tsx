import * as React from "react";
// import Header from "./sections/Header";
import SearchBox from "./components/SearchBox";
import BookList from "./components/BookList";
import Slider from "./components/Slider";
import Skeleton from "./components/Skeleton";
import { useSelector } from "react-redux";
import { selectBookData } from "./redux/store";

const HomePage: React.FunctionComponent = () => {
  const { isLoading } = useSelector(selectBookData);

  return (
    <>
      <div className="mx-auto md:max-w-3xl max-sm:w-full">
        <SearchBox />

        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <BookList />
            <Slider />
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
