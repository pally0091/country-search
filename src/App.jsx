import "./App.css";

import AllCountry from "./Component/AllCountry";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Component/Main";
import CountryDetail from "./Component/CountryDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <AllCountry></AllCountry>,
        },
        {
          path: "/search/:name",
          element: <CountryDetail></CountryDetail>,
          loader: ({ params }) =>
            fetch(`https://restcountries.com/v3.1/name/${params.name}`),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
