import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ImagesContextProvider } from "./contexts/ImagesContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { RootLayout } from "./routes/RootLayout";
import { ImageList } from "./components/ImageList";
import { FavoriteImagesContextProvider } from "./contexts/FavoriteImagesContext";
import { Favorites } from "./components/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ImageList />,
      },
      {
        path: "/favoritos",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FavoriteImagesContextProvider>
      <ImagesContextProvider>
        <RouterProvider router={router} />
      </ImagesContextProvider>
    </FavoriteImagesContextProvider>
  </React.StrictMode>
);
