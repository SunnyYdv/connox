import { Button } from "elements";
import React, { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router";
import { Icons } from "shared/icons";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { Product } from "~shared";
import { useFavorites } from "./useFavorites";

export const Favorites: React.FC = (props) => {
const {favorites, removeFromFavorites} = useFavorites()  
  return (
    <div className={"flex flex-col grow min-h-screen"}>
      <Header />
      <div className="max-w-900 w-full mx-auto py-40">
        <h2 className="text-32 mb-20">Your favorites</h2>
        {favorites?.map((product) => {
          return (
            <div className="flex mb-30 ">
              <div className="bg-gray-10 rounded-20 mr-20 p-20 w-300">
                <img src={product.photo} />
              </div>
              <div className="flex flex-col w-full relative">
                <Icons.Cross
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => removeFromFavorites(product.id)}
                />
                <p>{product.name}</p>
                <p className="text-gray-50"> {product.manufacturer}</p>
     
              </div>
            </div>
          );
        })}

      </div>
      <Footer />
    </div>
  );
};
