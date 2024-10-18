import { useContext, useState } from "react";
import { FavoriteImagesContext } from "../contexts/FavoriteImagesContext";
import { FaPlus } from "react-icons/fa";
import { Modal } from "./ImageList/Modal";

interface FavoritesProps {}

export const Favorites = ({}: FavoritesProps) => {
  const { favImages, removeFav } = useContext(FavoriteImagesContext);
  const [imageDetailsOpen, setImageDetailsOpen] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<{}>({});

  const handleOpenModal = (imageInfo: {}) => {
    setImageDetailsOpen(!imageDetailsOpen);
    setModalInfo(imageInfo);
  };

  return (
    <>
      <div className="pb-24 columns-2 sm:columns-3 gap-0 sm:gap-[8px] px-3 lg:px-[8vw]">
        {favImages
          .sort((a: any, b: any) => b.height - a.height)
          .map((image: any) => (
            <div className="relative h-fit sm:mb-[8px]" key={image.id}>
              <div className="relative overflow-hidden max-w-[46vw] sm:max-w-[35vw] border border-gray-200">
                <div
                  className="sm:hidden w-[100%] h-[100%] bg-transparent absolute"
                  onClick={() => handleOpenModal(image)}
                ></div>
                <img src={image.download_url} alt={image.author} />
                <button
                  onClick={() => handleOpenModal(image)}
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
      <Modal
        imageDetailsOpen={imageDetailsOpen}
        setImageDetailsOpen={setImageDetailsOpen}
        modalInfo={modalInfo}
      />
    </>
  );
};
