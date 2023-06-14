import { CardItem } from "pages/ProductsListPage";
import { useEffect, useState } from "react";
import { Product } from "~shared";

interface ICart {
    cart: CardItem[],
    totalPrice: number,
    changeProductCount(productId: Product["id"], increase?: boolean): void,
    removeFromCart(productId: Product["id"]): void
}

export const useCart = (): ICart => {
    const [cart, setCart] = useState<CardItem[]>([]);
    const totalPrice = cart.reduce((acc, product)=>{ return acc + product.count * product.price },0)
  
    const removeFromCart = (productId: Product["id"]) => {
      const products = (JSON.parse(localStorage.getItem("cart")!) as {[key: string]: CardItem});
      delete products[productId];
  
      localStorage.setItem("cart", JSON.stringify(products));
  
      setCart(cart.filter((product) => product.id !== productId));
    };
  
    const changeProductCount = (productId: Product["id"], increase?: boolean) => {
      const products = (JSON.parse(localStorage.getItem("cart")!) as {[key: string]: CardItem});
      products[productId] = {
        ...products[productId],
        count: increase ? products[productId].count + 1 : products[productId].count - 1 ,
      };
  
      localStorage.setItem("cart", JSON.stringify(products));
  
      setCart(
        cart.map((product) => {
          if (product.id === productId) {
            return { ...product, count: increase ? product.count + 1 : product.count - 1 };
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
  

  return {cart, totalPrice, changeProductCount, removeFromCart }
}
