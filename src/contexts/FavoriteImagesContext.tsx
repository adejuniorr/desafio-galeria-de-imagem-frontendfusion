import { createContext, ReactNode, useEffect, useState } from "react";

interface ImageContextProps {
  favImages: object[];
  addFav: (image: object) => void;
  removeFav: (imageId: string) => void;
}

export const FavoriteImagesContext = createContext<ImageContextProps>({
  favImages: [],
  addFav: () => {},
  removeFav: () => {},
});

export const FavoriteImagesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favImages, setFavImages] = useState<object[]>([]);

  useEffect(() => {
    const favImages = localStorage.getItem("favorites");
    if (favImages) {
      setFavImages(JSON.parse(favImages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favImages));
  }, [favImages]);

  const addFav = (image: object) => {
    setFavImages((prevFavorites) => [...prevFavorites, image]);
  };

  const removeFav = (imageId: string) => {
    setFavImages((prevFavorites) =>
      prevFavorites.filter((image: any) => image.id !== imageId)
    );
  };

  return (
    <FavoriteImagesContext.Provider value={{ favImages, addFav, removeFav }}>
      {children}
    </FavoriteImagesContext.Provider>
  );
};
