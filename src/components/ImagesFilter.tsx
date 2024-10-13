import React, { useMemo } from "react";

interface ImagesFilterProps {
  images: any[];
  setImageList: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ImagesFilter = ({ images, setImageList }: ImagesFilterProps) => {
  /**
   * Filtra as imagens pelo autor selecionado no `select`.
   *
   * Se o valor do `select` for "Filtrar por autor", 
   * retorna a lista de imagens completa.
   *
   * Caso contrário, filtra a lista de imagens pelo autor
   * selecionado e atualiza o estado de `imageList` no 
   * elemento pai.
   */
  const filterImagesByAuthor = (arr: any[], author: string) => {
    if (author === "Filtrar por autor") {
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
    <select
      name="authors"
      title="authors-select"
      id=""
      onChange={(e) => filterImagesByAuthor(images, e.target.value)}
    >
      <option value="Filtrar por autor">Filtrar por autor</option>
      {authorsList.map((author: string, index: number) => (
        <option value={author} key={index}>
          {author}
        </option>
      ))}
    </select>
  );
};
