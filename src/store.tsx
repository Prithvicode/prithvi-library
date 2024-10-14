import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useReducer } from "react";

const supabase: SupabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

interface Book {
  title: string;
  image: string;
  viewcount: number;
  likecount: number;
  description: string;
  categories: string[];
  status: string;
}

function useBookSource(): {
  book: Book[];
} {
  type BookState = {
    book: Book[];
  };

  type BookAction = { type: "setBook"; payload: Book[] }; // setSearch actions

  const [{ book }, dispatch] = useReducer(
    // callback
    (state: BookState, action: BookAction) => {
      switch (action.type) {
        case "setBook":
          return { ...state, book: action.payload };
      }
    },
    // initial state
    { book: [] }
  );

  useEffect(() => {
    const fetchBooks = async () => {
      const { data, error } = await supabase.from("prithviBooks").select("*");

      if (error) {
        console.error("Error fetching books:", error);
        return;
      }

      if (data) {
        dispatch({ type: "setBook", payload: data });
      }
    };

    fetchBooks();
  }, []);

  return { book };
}

const BookContext = createContext<ReturnType<typeof useBookSource>>(
  {} as unknown as ReturnType<typeof useBookSource>
);

export function useBook() {
  return useContext(BookContext);
}

export function BookProvider({ children }: { children: React.ReactNode }) {
  return (
    <BookContext.Provider value={useBookSource()}>
      {children}
    </BookContext.Provider>
  );
}
