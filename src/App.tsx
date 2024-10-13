import { useContext, useEffect, useMemo, useState } from "react";
import { ImagesContext } from "./contexts/ImagesContext";

function App() {
  const { images } = useContext(ImagesContext);
  const [imageList, setImageList] = useState<any[]>([]);

  useEffect(() => {
    setImageList(images);
  }, [images]);

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
    <main>
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
      {imageList.map((image: any) => (
        <img key={image.id} src={image.download_url} alt={image.author} />
      ))}
    </main>
  );
}

export default App;
