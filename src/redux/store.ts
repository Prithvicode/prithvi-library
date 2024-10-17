import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"; // Correctly import fetchBaseQuery
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { createSelector } from "reselect";

// Create a Supabase client
const supabase: SupabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

// Define the Book interface
interface Book {
  id: number;
  title: string;
  image: string;
  viewcount: number;
  likecount: number;
  description: string;
  categories: string[];
  status: string;
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SUPABASE_URL }),

  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      queryFn: async () => {
        const { data, error } = await supabase.from("prithviBooks").select("*");
        if (error) throw error;
        return { data }; // expects {data: data}
      },
    }),
  }),
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    bookApi: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

// Selectors
export const selectSearch = (state: RootState) => state.search.search;

export const selectBookData = createSelector(
  (state: RootState) =>
    bookApi.endpoints.getBooks.select(undefined)(state)?.data,
  (state: RootState) => state.search.search,
  (books, search) =>
    (books || [])
      .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.title.localeCompare(b.title))
);

store.dispatch(bookApi.endpoints.getBooks.initiate());

export default store;
