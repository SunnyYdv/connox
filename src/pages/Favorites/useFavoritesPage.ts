
import { useEffect, useState } from "react";
import { addToCart, Product, removeFromFavorites } from "~shared";

interface IFavoritesPage {
  favorites: Product[];
  addToCart(productId: Product): void;
  removeFromFavorites(productId: Product["id"]): void;
}

export const useFavoritesPage = (): IFavoritesPage => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const handleRemoveFromFavorites = (productId: Product["id"]) => {
    removeFromFavorites(productId);
    setFavorites(favorites.filter((favorite) => favorite.id !== productId));
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")!) as {
      [key: string]: Product;
    };

    if (favorites) {
      setFavorites(Object.values(favorites));
    }
  }, []);

  return { favorites, removeFromFavorites: handleRemoveFromFavorites, addToCart };
};
