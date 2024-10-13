import { useContext, useState } from "react";
import { ImagesContext } from "./contexts/ImagesContext";

function App() {
  const { images } = useContext(ImagesContext);
  const [imageList, setImageList] = useState<object[]>(images);

  return (
    <main>
      {imageList.map((image: any) => (
        <img key={image.id} src={image.download_url} alt={image.author} />
      ))}
    </main>
  );
}

export default App;
