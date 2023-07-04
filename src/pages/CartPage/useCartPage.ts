
import { CardItem } from "pages";
import { useEffect, useState } from "react";
import { changeProductCount, Product, removeFromCart } from "~shared";

interface ICartPage {
  cart: CardItem[];
  totalPrice: number;
  changeProductCount(productId: Product["id"], count: "plus" | "minus"): void;
  removeFromCart(productId: Product["id"]): void;
}

export const useCartPage = (): ICartPage => {
  const [cart, setCart] = useState<CardItem[]>([]);
  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.count * product.price;
  }, 0);

  const handleRemoveFromCart = (productId: Product["id"]) => {
    removeFromCart(productId);
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handleChangeProductCount = (
    productId: Product["id"],
    count: "plus" | "minus"
  ) => {
    changeProductCount(productId, count);

    setCart(
      cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: count === "plus" ? product.count + 1 : product.count - 1,
          };
        } else return product;
      })
    );
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cart")!) as {};

    if (products) {
      setCart(Object.values(products) as CardItem[]);
    }
  }, []);

  return {
    cart,
    totalPrice,
    changeProductCount: handleChangeProductCount,
    removeFromCart: handleRemoveFromCart,
  };
};
