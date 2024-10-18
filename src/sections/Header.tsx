import { Link } from "@tanstack/react-location";
import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="px-8 py-2 g1">
      <Link to="/">
        <div className="flex items-center font-inter ">
          <span className="text-7xl text-p1 ">P</span>
          <div className="flex flex-col relative top-2">
            <span>rithvi's</span>
            <span className="relative -left-5">BookShelf</span>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
