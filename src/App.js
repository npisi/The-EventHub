import "./App.css";
import Home from "./screens/Home";
import Header from "./components/Header";
import Venue from "./screens/Venue";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { NetworkProvider } from "./context/networkConnection";
import { useState } from "react";
import VenueDetails from "./screens/VenueDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const AppLayout = () => {

    const [filterText , setFilterText] = useState("")

    const onSearchClick = (val) => {
      setFilterText(val)
    }

    return (
      <>
        <Header onSearchClick={onSearchClick} />
        <Outlet context={filterText}/>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/venue",
          element: <Venue />,
        },
        {
          path: "/restaurant-details/:venueId",
          element: <VenueDetails />
        }
      ],
    },
  ]);

  root.render(
    <NetworkProvider>
      <RouterProvider router={router} />
    </NetworkProvider>
  );
}

export default App;
