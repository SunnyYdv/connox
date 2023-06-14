import { Product } from "shared/products";

export  const addToFavorites = (product: Product) => {
    const favorite: {[key: string]: Product} =
      (JSON.parse(localStorage.getItem("favorites")!) as {}) || {};

      if (product.id in favorite) {
       return
      } else {
        favorite[product.id] = product
      }

    localStorage.setItem("favorites", JSON.stringify(favorite));
  };

  export  const removeFromFavorites = (productId: Product["id"]) => {
    const products = JSON.parse(
      localStorage.getItem("favorites")!
    ) as {[key: string]: Product};

    delete products[productId];
  
    localStorage.setItem("favorites", JSON.stringify(products));
  };