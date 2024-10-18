import clsx from "clsx";
import { FaDownload, FaGlobe, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import FavoriteButton from "./buttons/FavoriteButton";

interface ModalProps {
  imageDetailsOpen: boolean;
  setImageDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalInfo: any;
}

export const Modal = ({
  imageDetailsOpen,
  setImageDetailsOpen,
  modalInfo,
}: ModalProps) => {

  const download = () => {
    let element = document.createElement("a");
    let file = new Blob([modalInfo.download_url], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className={clsx(
        "w-full h-full bg-black bg-opacity-30 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 flex justify-center items-center",
        {
          fixed: imageDetailsOpen === true,
          hidden: imageDetailsOpen === false,
        }
      )}
      onClick={(e) => {
        e.stopPropagation();
        setImageDetailsOpen(!imageDetailsOpen);
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="h-fit overflow-y-hidden bg-white border border-gray-200 rounded-lg shadow"
      >
        <div className="flex items-center justify-between p-4 border-b text-[1.2rem] sm:text-[1.6rem]">
          <h3 className="font-semibold text-gray-900 ">Detalhes</h3>
          <button
            onClick={() => setImageDetailsOpen(!imageDetailsOpen)}
            type="button"
            className="text-gray-800 bg-transparent hover:bg-gray-200 w-8 h-8 ms-auto flex justify-center items-center rounded-md"
            data-modal-hide="default-modal"
          >
            <FaXmark />
          </button>
        </div>
        <div className="flex flex-col w-[90vw] sm:w-[50vw]">
          <div className="w-[100%] max-h-[40vh] overflow-hidden flex items-center">
            <img
              className="object-contain"
              src={modalInfo.download_url}
              alt=""
            />
          </div>
          <div className="relative p-4 sm:text-[1.3rem]">
            <div>
              <p className="text-gray-400">#{modalInfo.id}</p>
              <h2 className="font-bold  sm:text-[1.8rem]">
                Autor(a): {modalInfo.author}
              </h2>
              <p>
                Dimensões: {modalInfo.width}x{modalInfo.height}
              </p>
            </div>
            <div className="flex justify-between items-center gap-4 mt-6">
              <FavoriteButton image={modalInfo} />
              <div className="flex justify-end items-center gap-4 md:text-[1.2rem]">
                <a
                  target="_blank"
                  href={modalInfo.url}
                  className="underline text-blue-400 flex items-center gap-[4px]"
                >
                  <FaGlobe />
                  Origem
                </a>
                <a
                  download
                  target="_blank"
                  href={modalInfo.download_url}
                  onClick={() => download()}
                  className="flex items-center gap-[4px] cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-600 rounded-lg px-5 py-2 text-center"
                >
                  <FaDownload />
                  Baixar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
