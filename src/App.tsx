import { useEffect, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useBook, BookProvider } from "./store";

const BookList = () => {
  const { book } = useBook();
  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 mt-3">
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
    <BookProvider>
      <BookList />
    </BookProvider>
  );
}

export default App;
