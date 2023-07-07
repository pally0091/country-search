import "./App.css";

import AllCountry from "./Component/AllCountry";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Component/Main";

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
