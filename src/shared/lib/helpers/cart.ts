import { CardItem } from "pages";
import { Product } from "shared/products";

export  const addToCart = (product: Product) => {
    const cart: { [key: string]: CardItem } =
      (JSON.parse(localStorage.getItem("cart")!) as {}) || {};

    if (product.id in cart) {
      cart[product.id] = { ...product, count: cart[product.id].count + 1 };
    } else {
      cart[product.id] = { ...product, count: 1 };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  export  const removeFromCart = (productId: Product["id"]) => {
    const products = (JSON.parse(localStorage.getItem("cart")!) as {[key: string]: CardItem});
    delete products[productId];

    localStorage.setItem("cart", JSON.stringify(products));
  };

  export   const changeProductCount = (productId: Product["id"], count: 'plus' | 'minus') => {
    const products = JSON.parse(localStorage.getItem("cart")!) as {
      [key: string]: CardItem;
    };
    products[productId] = {
      ...products[productId],
      count: count === 'plus'
        ? products[productId].count + 1
        : products[productId].count - 1,
    };

    localStorage.setItem("cart", JSON.stringify(products));

  };