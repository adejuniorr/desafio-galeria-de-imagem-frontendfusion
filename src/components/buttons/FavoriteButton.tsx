import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoriteImagesContext } from "../../contexts/FavoriteImagesContext";

interface FavoriteButtonProps {
  image: any;
}

export default function FavoriteButton({ image }: FavoriteButtonProps) {
  const { favImages, addFav, removeFav } = useContext(FavoriteImagesContext);

  const isFavorite = (imageId: string) => {    
    return favImages.find((img: any) => img.id === imageId);
  };

  const handleFavoriteButton = (image: any) => {
    if (isFavorite(image.id)) {
      removeFav(image.id);
    } else {
      addFav(image);
    }
  };

  return (
    <button
      onClick={() => handleFavoriteButton(image)}
      type="button"
      title="Clique para favoritar a imagem"
      className="rounded-full border border-gray-300 p-3"
    >
      {isFavorite(image.id) ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="text-red-500" />
      )}
    </button>
  );
}
