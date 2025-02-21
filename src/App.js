import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Venue from "./screens/Venue";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./screens/Error";
import VenueDetails from "./screens/VenueDetails";
import { NetworkProvider } from "./contexts/noInternetConn";
import Login from "./screens/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const AppLayout = () => {
    const [filterText , setFilterText] = useState("")
 
    
    const onSearchClick = (val)=> {
      setFilterText(val)
    }
    

    return (
      <>
        <Header onSearchClick = {onSearchClick}/>
        <Outlet context={{filterText}}/>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
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
          element: <VenueDetails />,
        },
        {
          path: "/login",
          element: <Login />,
        },
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
