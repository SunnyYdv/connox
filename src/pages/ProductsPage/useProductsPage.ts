import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { addToFavorites, Product, products } from "~shared";
import { StylesConfig } from "react-select";

interface IProductsPage {
  setFilter(option?: Option): void;
  filterOptions: Option[];
  products: Product[];
  toProductPage(productId: Product["id"]): void;
  handleAddToFavorites(product: Product): void;
  selectStyles: StylesConfig;
  favorites: { [key: string]: Product } | undefined
}

export type Option = {
  label: string;
  value: string;
};
export const useProductsPage = (): IProductsPage => {
  const [filter, setFilter] = useState<Option>();
  const [favorites, setFavorites] = useState<{ [key: string]: Product }>();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")!) as { [key: string]: Product }
    if(!favorites) return

    setFavorites(favorites)
  }, []);

  let renderProducts: Product[];

  switch (filter?.value) {
    case "ascending":
      renderProducts = products.sort((a, b) => a.price - b.price);
      break;

    case "descending":
      renderProducts = products.sort((a, b) => a.price - b.price).reverse();

    default:
      renderProducts = products;
  }

  const navigate = useNavigate();

  const toProductPage = useCallback((productId: Product["id"]) => {
    navigate(`/product/${productId}`);
  }, []);

  const handleAddToFavorites = (product: Product)=>{
    addToFavorites(product)
    setFavorites({...favorites, [product.id]: product})
  }

  const filterOptions: Option[] = [
    { value: "ascending", label: "ascending" },
    { value: "descending", label: "descending" },
  ];

  const selectStyles: StylesConfig = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "red-10",
        color: "red-10",

        ":active": {
          ...styles[":active"],
          backgroundColor: "none",
        },
      };
    },
  };

  return {
    setFilter,
    selectStyles,
    filterOptions,
    products: renderProducts,
    toProductPage,
    favorites,
    handleAddToFavorites
  };
};
