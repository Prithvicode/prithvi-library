// import { useBook, BookProvider } from "./store";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  Router,
  useMatch,
  Outlet,
  ReactLocation,
} from "@tanstack/react-location";
import { useDispatch, useSelector, Provider } from "react-redux";
import store, { selectBookData, selectSearch, setSearch } from "./redux/store";

// const queryClient = new QueryClient();
const location = new ReactLocation();

const SearchBox = () => {
  // const { search, setSearch } = useBook();
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      placeholder="Search Books... "
      value={search}
      className="w-[400px] p-4 "
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  );
};

const BookList = () => {
  // const { book } = useBook();
  const book = useSelector(selectBookData);
  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 mt-3 bg-white/5 p-4 w-full rounded-lg ">
      {book.map((b) => (
        <Link key={b.id} to={`/book/${b.id}`}>
          <li
            key={b.title}
            className=" flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 hover:scale-105 "
          >
            <img src={b.image} alt="" className="w-full h-40 object-cover " />
            <h3 className=" text-gray-900 text-sm font-medium">{b.title}</h3>
          </li>
        </Link>
      ))}
    </ul>
  );
};
const BookDetail = () => {
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
const routes = [
  {
    path: "/",
    element: (
      <>
        <SearchBox />
        <BookList />
      </>
    ),
  },
  {
    path: "/book/:id",
    element: (
      <>
        <BookDetail />
      </>
    ),
  },
];
function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <BookProvider> */}
      <Provider store={store}>
        <Router location={location} routes={routes}>
          <div className="mx-auto max-w-3xl">
            <Outlet />
          </div>
        </Router>
      </Provider>
      {/* </BookProvider> */}
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
