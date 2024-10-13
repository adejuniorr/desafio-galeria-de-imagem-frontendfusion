import React, { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface ImagesFilterProps {
  images: any[];
  setImageList: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ImagesFilter = ({ images, setImageList }: ImagesFilterProps) => {
  const [openFilter, setOpenFilter] = useState(true);
  /**
   * Filtra as imagens pelo autor selecionado no `select`.
   *
   * Se o valor do `select` for "Todos",
   * retorna a lista de imagens completa.
   *
   * Caso contrário, filtra a lista de imagens pelo autor
   * selecionado e atualiza o estado de `imageList` no
   * elemento pai.
   */
  const filterImagesByAuthor = (arr: any[], author: string) => {
    if (author === "Todos") {
      return setImageList(images);
    }

    setImageList(arr.filter((image) => image.author === author));
  };

  /**
   * Mapeia a lista de images retornando um array apenas com os
   * nomes dos autores (mesmo repetidos);
   *
   * Filtra o array de autores usando o método indexOf (que
   * retorna sempre a primeira ocorrência de um elemento) e
   * compara com o índice atual na iteração.
   *
   * Usa o hook useMemo para evitar re-renderização caso `images`
   * não mude, aumentando a performance.
   */
  const authorsList = useMemo(() => {
    return images
      .map((image: any) => image.author)
      .filter(
        (author: string, index: number, originalArr: string[]) =>
          originalArr.indexOf(author) === index
      );
  }, [images]);

  return (
    <>
      {openFilter ? (
        <button
          onClick={() => setOpenFilter(!openFilter)}
          title="Filtrar"
          type="button"
          className="text-xl flex flex-col fixed z-10 bottom-0 right-0 bg-white mb-16 mr-4 rounded-md p-2 shadow-md shadow-slate-500"
        >
          <FaFilter />
        </button>
      ) : (
        <div className="flex flex-col fixed z-20 bottom-0 right-0 m-4 rounded-md p-2 shadow-md shadow-slate-500 bg-white">
          <div className="flex items-center justify-between">
            <label
              htmlFor="Authors"
              className="block text-lg font-medium text-gray-800"
            >
              Filtrar por autor(a)
            </label>
            <button
              onClick={() => setOpenFilter(!openFilter)}
              title="Fechar seletor"
              type="button"
            >
              <FaXmark />
            </button>
          </div>
          <select
            name="Authors"
            title="authors-select"
            id=""
            onChange={(e) => filterImagesByAuthor(images, e.target.value)}
            className="w-[200px] mt-2 py-2 rounded-md cursor-pointer border-gray-300 border-[2px] text-gray-700 sm:text-sm outline-none"
          >
            <option value="Todos">Todos</option>
            {authorsList.map((author: string, index: number) => (
              <option value={author} key={index}>
                {author}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};
