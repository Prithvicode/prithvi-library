import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../redux/store";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
// import { useBook } from "../store";

interface ISearchBoxProps {}

const SearchBox: React.FunctionComponent<ISearchBoxProps> = (props) => {
  // const { search, setSearch } = useBook();
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <>
      <div className="relative group m-3 mb-5">
        {/* <div className="absolute mx-auto w-[400px] inset-0 group-focus-within:block hidden rounded-lg blur-md g1 group-focus-within:transition group-focus-within:duration-1000"></div> */}
        <div className="flex rounded-lg w-[430px] mx-auto px-3 border-2 border-p1 group-focus-within:border-a1 bg-white justify-center items-center">
          <MagnifyingGlassIcon className="size-7 text-p1  group-focus-within:text-a1" />
          <input
            type="text"
            placeholder="Search Books... "
            value={search}
            className="relative h-full  w-[400px] p-4 outline-none block rounded-lg"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            ref={inputRef}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
