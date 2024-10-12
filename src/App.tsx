import { useContext, useState } from "react";
import { ImagesContext } from "./contexts/ImagesContext";

function App() {
  const { images } = useContext(ImagesContext);
  const [imageList, setImageList] = useState<object[]>(images);

  const filterImagesByAuthor = (arr: any[], author: string) => {
    setImageList(arr.filter((image) => image.author === author));
  }

  return (
    <main>
      <select name="authors" title="authors-select" id=""></select>
      {imageList.map((image: any) => (
        <img key={image.id} src={image.download_url} alt={image.author} />
      ))}
    </main>
  );
}

export default App;
