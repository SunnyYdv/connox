import React from "react";
import { Icons } from "shared/icons";
import { Button } from "~elements";
import { addToCart } from "~shared";
import { useFavoritesPage } from "./useFavoritesPage";

export const FavoritesPage: React.FC = (props) => {
  const { favorites, removeFromFavorites } = useFavoritesPage();

  return (
    <div className="max-w-900 w-full mx-auto py-40 px-20">
      <h2 className="text-32 mb-20">Your favorites</h2>
     {!favorites.length && <h2 className="text-32 my-40 font-thin">Favorites is empty :&#40;</h2>}
      {favorites?.map((product) => {
        return (
          <div className="flex mb-30 max-h-160">
            <div className="bg-gray-10 rounded-20 mr-20 p-20 w-300 flex items-center justify-center">
              <img src={product.photo} className={"max-h-150"} />
            </div>
            <div className="flex flex-col w-full relative">
              <Icons.Cross
                className="absolute top-0 right-0 cursor-pointer"
                onClick={() => removeFromFavorites(product.id)}
              />
              <p>{product.name}</p>
              <p className="text-gray-50"> {product.manufacturer}</p>
              <p className=""> &#8364; {product.price}</p>
              <Button
                className="mt-auto px-20 w-fit"
                variant="red"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
