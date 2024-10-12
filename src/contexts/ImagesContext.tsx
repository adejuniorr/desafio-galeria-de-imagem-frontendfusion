import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface ImageContextProps {
  images: object[];
}

export const ImagesContext = createContext<ImageContextProps>({ images: [] });

export const ImagesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [images, setImages] = useState<object[]>([]);

  useEffect(() => {
    fetchImages();
  }, [images]);

  const fetchImages = async () => {
    await axios
      .get("https://picsum.photos/v2/list")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ImagesContext.Provider value={{ images }}>
      {children}
    </ImagesContext.Provider>
  );
};
