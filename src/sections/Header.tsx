import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="px-8 py-2">
      <div className="flex items-center font-inter ">
        <span className="text-7xl">P</span>
        <div className="flex flex-col relative top-2">
          <span>rithvi's</span>
          <span className="relative -left-5">BookShelf</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
