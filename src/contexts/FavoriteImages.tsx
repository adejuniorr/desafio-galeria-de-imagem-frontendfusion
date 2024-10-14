import { createContext, ReactNode, useEffect, useState } from "react";

interface ImageContextProps {
  favImages: object[];
  setFavImages: React.Dispatch<React.SetStateAction<object[]>>;
}

export const FavoriteImagesContext = createContext<ImageContextProps>({
  favImages: [],
  setFavImages: () => {},
});

export const FavoriteImagesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favImages, setFavImages] = useState<object[]>([]);

  const setFavoriteImages = () => {
    localStorage.setItem("favoriteImages", JSON.stringify(favImages));
    ...
  };

  return (
    <FavoriteImagesContext.Provider value={{ favImages, setFavImages }}>
      {children}
    </FavoriteImagesContext.Provider>
  );
};
