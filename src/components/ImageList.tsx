import { useContext, useEffect, useState } from "react";
import { ImagesContext } from "../contexts/ImagesContext";
import { ImagesFilter } from "./ImagesFilter";

export const ImageList = () => {
  const { images } = useContext(ImagesContext);
  const [imageList, setImageList] = useState<any[]>([]);

  useEffect(() => {
    setImageList(images);
  }, [images]);

  return (
    <>
      <ImagesFilter images={images} setImageList={setImageList} />
      {imageList.map((image: any) => (
        <img key={image.id} src={image.download_url} alt={image.author} />
      ))}
    </>
  );
};
