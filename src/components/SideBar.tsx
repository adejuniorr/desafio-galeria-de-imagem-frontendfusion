import { useContext, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";
import { FaGithub, FaGlobe, FaImage, FaRegHeart } from "react-icons/fa";
import { ImagesContext } from "../contexts/ImagesContext";
import { ImagesFilter } from "./ImagesFilter";

export const SideBarNav = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const { images, updateCurrentImages } = useContext(ImagesContext);

  const footerClass =
    "underline w-full h-16 flex items-center justify-center px-6 cursor-pointer text-slate-900";

  return (
    <>
      <button
        title="Abrir menu"
        type="button"
        onClick={() => setMenuVisibility(!menuVisibility)}
        className="lg:hidden text-slate-900 text-[2rem] bg-gray-50 absolute z-40 lg:bottom-0 sm:top-0 right-0 mx-3 my-4 p-2 border-2 rounded-md"
      >
        <IoMenu />
      </button>
      <aside
        className={clsx(
          "fixed right-0 lg:left-0 z-50 w-[250px] lg:w-[25vw] h-full bg-gray-50 lg:self-center lg:translate-x-0 transition-all duration-500 flex flex-col justify-between border-l-[1px] lg:border-l-0 lg:border-r-[1px] border-gray-3000",
          { "translate-x-full": menuVisibility === false }
        )}
      >
        <nav>
          <ul>
            <li className="p-6 flex items-center  justify-between">
              <Link
                to="/"
                className="text-2xl font-bold flex gap-2 items-center"
              >
                <FaImage /> Galeria
              </Link>
              <button
                title="Fechar menu"
                type="button"
                onClick={() => setMenuVisibility(!menuVisibility)}
                className="lg:hidden text-slate-900 text-[2.4rem]"
              >
                <HiOutlineXMark />
              </button>
            </li>
            <li className="px-6 mb-4">
              <ImagesFilter
                images={images}
                setImageList={updateCurrentImages}
                setMenuVisibility={setMenuVisibility}
              />
            </li>
            <li className="px-6 mb-4">
              <Link
                className="flex items-center hover:underline"
                to="favoritos"
              >
                <FaRegHeart className="text-[1.4rem] mr-2" /> Favoritos
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-center mt-[95%]">
            <Link
              className={footerClass}
              to="https://github.com/adejuniorr/desafio-galeria-de-imagem-frontendfusion"
              target="_blank"
            >
              <FaGithub className="text-[1.6rem] mr-2" /> Repositório
            </Link>
            <Link
              className={footerClass}
              to="https://github.com/adejuniorr/desafio-galeria-de-imagem-frontendfusion"
              target="_blank"
            >
              <FaGlobe className="mr-2" /> dev-ade.vercel.app
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};
