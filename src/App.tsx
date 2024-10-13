import { useEffect, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

interface Book {
  title: string;
  image: string;
  viewcount: number;
  likecount: number;
  description: string;
  categories: string[];
  status: string;
}

const supabase: SupabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const { data: prithviBooks, error } = await supabase
      .from<Book>("prithviBooks")
      .select("*");

    if (error) {
      console.error("Error fetching books:", error);
      return;
    }

    setBooks(prithviBooks || []);
  }

  return (
    <ul className="flex flex-wrap list-none p-0 m-0">
      {books.map((book) => {
        const image: string = book.image;
        console.log(image);
        return (
          <li
            key={book.title}
            className="m-2 w-64 border border-gray-300 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h1 className="text-lg font-semibold mb-2">{book.title}</h1>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
