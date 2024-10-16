import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface ImageContextProps {
  images: object[];
  currentImageList: object[];
  updateCurrentImages: (images: any) => void;
}

export const ImagesContext = createContext<ImageContextProps>({
  images: [],
  currentImageList: [],
  updateCurrentImages: () => {},
});

export const ImagesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [images, setImages] = useState<object[]>([]);
  const [currentImageList, setCurrentImageList] = useState<object[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

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

  const updateCurrentImages = (images: any) => {
    setCurrentImageList(images);
  };

  return (
    <ImagesContext.Provider
      value={{ images, currentImageList, updateCurrentImages }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
