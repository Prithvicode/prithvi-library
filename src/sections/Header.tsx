import { Link } from "@tanstack/react-location";
import * as React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/store";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(setSearch(""));
  };
  return (
    <header className="px-8 py-2 g1">
      <Link
        to="/"
        className="flex items-center font-inter w-max"
        onClick={handleHomeClick}
      >
        <span className="text-7xl text-p1 ">P</span>
        <div className="flex flex-col relative top-2 ">
          <span>rithvi's</span>
          <span className="relative -left-5">BookShelf</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
