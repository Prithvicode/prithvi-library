import { useBook, BookProvider } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const SearchBox = () => {
  const { search, setSearch } = useBook();
  return (
    <input
      type="text"
      placeholder="Search Books... "
      value={search}
      className="w-[400px] p-4 "
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
const BookList = () => {
  const { book } = useBook();
  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 mt-3 bg-white/5 p-4 w-full rounded-lg ">
      {book.map((b) => (
        <li
          key={b.title}
          className=" flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 hover:scale-105 "
        >
          <img src={b.image} alt="" className="w-full h-40 object-cover " />
          <h3 className=" text-gray-900 text-sm font-medium">{b.title}</h3>
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BookProvider>
          <SearchBox />
          <div
            className="h-80 flex items-center justify-center p-6 bg-white/10"
            style={{
              background:
                "radial-gradient(ellipse 30% 50% at center , #4f4f4f, #333333, #000000)",
              boxShadow: "0 0 100px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            <BookList />
          </div>
        </BookProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
