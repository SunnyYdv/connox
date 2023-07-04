import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { addToFavorites, Product, products } from "~shared";


interface IProductPage {
  handleAddToFavorites(product: Product): void;
  favorites: { [key: string]: Product } | undefined
  product: Product | null
}

export const useProductPage = (): IProductPage => {
  const [favorites, setFavorites] = useState<{ [key: string]: Product }>();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")!) as { [key: string]: Product }
    if(!favorites) return

    setFavorites(favorites)
  }, []);

  const { id } = useParams();

  const product = products?.find((product) => product?.id === id) || null;


  const handleAddToFavorites = (product: Product)=>{
    addToFavorites(product)
    setFavorites({...favorites, [product.id]: product})
  }


  return {
    favorites,
    handleAddToFavorites,
    product
  };
};
