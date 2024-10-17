// import { createClient, SupabaseClient } from "@supabase/supabase-js";
// import {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useReducer,
// } from "react";

// import { useQuery } from "@tanstack/react-query";

// const supabase: SupabaseClient = createClient(
//   import.meta.env.VITE_SUPABASE_URL as string,
//   import.meta.env.VITE_SUPABASE_ANON_KEY as string
// );

// interface Book {
//   id: number;
//   title: string;
//   image: string;
//   viewcount: number;
//   likecount: number;
//   description: string;
//   categories: string[];
//   status: string;
// }

// // useQuery to setup the global state of books
// // provide books from that global state.
// // provide the searched book
// // prodive func to set searchinput.

// function useBookSource(): {
//   book: Book[];
//   search: string;
//   setSearch: (searchInput: string) => void;
// } {
//   const { data: book, error } = useQuery(
//     ["book"], // Query key
//     async () => {
//       const { data, error } = await supabase.from("prithviBooks").select("*");
//       if (error) {
//         throw new Error(error.message);
//       }
//       console.log(data);
//       return data;
//     },
//     {
//       initialData: [],
//     }
//   );

//   type BookState = {
//     // book: Book[];
//     search: string;
//   };

//   type BookAction = { type: "setSearch"; payload: string };

//   const [{ search }, dispatch] = useReducer(
//     // callback
//     (state: BookState, action: BookAction) => {
//       switch (action.type) {
//         // case "setBook":
//         //   return { ...state, book: action.payload };
//         // search action
//         case "setSearch":
//           return { ...state, search: action.payload };
//       }
//     },
//     // initial state
//     { search: "" }
//   );

//   useEffect(() => {
//     //   const fetchBooks = async () => {
//     //     const { data, error } = await supabase.from("prithviBooks").select("*");
//     //     if (error) {
//     //       console.error("Error fetching books:", error);
//     //       return;
//     //     }
//     //     if (data) {
//     //       dispatch({ type: "setBook", payload: data });
//     //     }
//     //   };
//     //   fetchBooks();
//   }, []);

//   const setSearch = useCallback((searchInput: string) => {
//     dispatch({ type: "setSearch", payload: searchInput });
//   }, []);

//   const filteredBook = useMemo(
//     () =>
//       book.filter((b) => b.title.toLowerCase().includes(search.toLowerCase())),
//     [book, search]
//   );

//   return { book: filteredBook, search, setSearch };
// }

// const BookContext = createContext<ReturnType<typeof useBookSource>>(
//   {} as unknown as ReturnType<typeof useBookSource>
// );

// export function useBook() {
//   return useContext(BookContext);
// }

// export function BookProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <BookContext.Provider value={useBookSource()}>
//       {children}
//     </BookContext.Provider>
//   );
// }
