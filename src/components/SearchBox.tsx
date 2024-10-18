import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../redux/store";
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
      <div className="relative group p-2">
        <div className="absolute mx-auto w-[400px] inset-0 group-focus-within:block hidden rounded-lg blur-md g1 group-focus-within:transition group-focus-within:duration-1000"></div>
        <input
          type="text"
          placeholder="Search Books... "
          value={search}
          className="relative border-2 w-[400px] p-4 outline-none mx-auto block rounded-lg"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          ref={inputRef}
        />
      </div>
    </>
  );
};

export default SearchBox;
