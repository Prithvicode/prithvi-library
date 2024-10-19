// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import BookDetail from "./components/BookDetail";
import HomePage from "./HomePage";
import Header from "./sections/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

// const queryClient = new QueryClient();
const location = new ReactLocation();
const routes = [
  {
    path: "/",
    element: (
      <>
        <HomePage />
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
    <Provider store={store}>
      <Router location={location} routes={routes}>
        <Header />
        <Outlet />
      </Router>
    </Provider>
  );
}

export default App;
