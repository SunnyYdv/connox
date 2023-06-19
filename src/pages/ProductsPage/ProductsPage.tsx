import { Button } from "elements";
import React from "react";
import { addToCart, Product, Image, Icons } from "shared";
import Select from 'react-select';
import { useProductsPage } from "./useProductsPage";

export type CardItem = Product & { count: number };

export const ProductsPage: React.FC = (props) => {
  const {setFilter, selectStyles, filterOptions, products, toProductPage, favorites, handleAddToFavorites} = useProductsPage()

  return (
    <div className={"mt-40 mx-auto max-w-1200 px-20"}>
      <div className={"flex items-center gap-x-10"}>
        <div className={"text-18 text-gray-dark"}>Show by cost:</div>
        <Select
          onChange={setFilter}
          className="my-react-select-container w-150"
          classNamePrefix="my-react-select"
          placeholder="Select filter"
          options={filterOptions}
          hideSelectedOptions={false}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
          })}
          isSearchable={false}
          styles={selectStyles}
        />
      </div>

      <div className={"grid grid-cols-3 mobile:grid-cols-2 gap-20 mobile:gap-10 my-30 "}>
        {products?.map((product) => {
          return (
            <div className={"mb-20"}>
              <div
                onClick={() => toProductPage(product.id)}
                className="cursor-pointer flex items-center justify-center h-400 mobile:h-220  bg-[#F1EDE6] transition rounded-20 hover:bg-red-5 relative"
              >
                <Image src={product.photo} className="h-350 mobile:h-180" />
                {favorites && product.id in favorites ? <Icons.Favorites className="absolute top-10 right-10"/> : ''}
              </div>

              <div className={"pt-10"}>{product.name}</div>
              <div className={"mb-10 text-gray-50"}>{product.manufacturer}</div>
              <div> &#8364; {product.price}</div>
              <div className="mt-15 mobile:space-y-10">
                <Button
                  className={"mr-10 "}
                  variant={"red"}
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </Button>
                <Button
                  variant={"transparent"}
                  onClick={() => handleAddToFavorites(product)}
                  disabled={favorites && product.id in favorites}
                >
                  Add to favorite
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
