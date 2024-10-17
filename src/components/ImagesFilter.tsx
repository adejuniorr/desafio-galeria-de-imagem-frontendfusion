import { useMemo } from "react";

interface ImagesFilterProps {
  images: any[];
  setImageList: React.Dispatch<React.SetStateAction<any[]>>;
  setMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImagesFilter = ({
  images,
  setImageList,
  setMenuVisibility,
}: ImagesFilterProps) => {
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
      <div className="">
        <div className="flex flex-col rounded-md">
          <label
            htmlFor="Authors"
            className="block text-[1.4rem] font-medium text-gray-800"
          >
            Filtrar por autor(a)
          </label>
          <select
            name="Authors"
            title="Filtrar imagens por autor(a)"
            id=""
            onChange={(e) => {
              filterImagesByAuthor(images, e.target.value);
              setMenuVisibility(false);
            }}
            className="mt-2 py-2 rounded-md cursor-pointer border-gray-300 border-[2px] text-gray-700 sm:text-[1rem] outline-none"
          >
            <option value="Todos">Todos</option>
            {authorsList.map((author: string, index: number) => (
              <option value={author} key={index}>
                {author}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
