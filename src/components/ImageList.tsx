import { useContext, useEffect, useState } from "react";
import { ImagesContext } from "../contexts/ImagesContext";
import { ImagesFilter } from "./ImagesFilter";
import { FaFilter, FaPlus } from "react-icons/fa";

export const ImageList = () => {
  const { images } = useContext(ImagesContext);
  const [imageList, setImageList] = useState<any[]>([]);

  useEffect(() => {
    setImageList(images);
  }, [images]);

  return (
    <>
      <ImagesFilter images={images} setImageList={setImageList} />
      <div className="pb-24 columns-3 gap-[8px] mt-8 w-[90vw]">
        {imageList
          .sort((a: any, b: any) => b.height - a.height)
          .map((image: any) => (
            <div className="relative h-fit mb-[8px]" key={image.id}>
              <div className="overflow-hidden max-w-[30vw] border border-gray-200">
                <img src={image.download_url} alt={image.author} />
                <button
                  title="Ver detalhes"
                  type="button"
                  className="hidden sm:block absolute bottom-[20px] right-[20px] px-3 py-2 text-sm font-medium text-gray-800 bg-slate-50 rounded-lg"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
