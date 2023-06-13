import { Button } from "elements";
import React from "react";
import { Product, products } from "shared";
import { Header } from "widgets/Header";

export const ProductsListPage: React.FC = (props) => {
  
  const addToCart = (product: Product) => {
    const cart: Product[] | [] = JSON.parse(localStorage.getItem("cart")!) as Product[] || [];
    const newCart = JSON.stringify([...cart, product])
    localStorage.setItem("cart", newCart);
  };

  const productsJSX = products.map((product) => {
    return (
      <div className={"w-1/3"}>
        <img
          className={
            "mt-30 cursor-pointer bg-[#F1EDE6] rounded-20 hover:bg-[#f3dabc]"
          }
          src={product.photo}
        />
        <div className={"pt-20"}>{product.name}</div>
        <div className={"py-10"}>{product.manufacturer}</div>
        <div>€ {product.price}</div>
        <Button
          className={"mr-10 mt-10"}
          variant={"red"}
          onClick={() => addToCart(product)}
        >
          {" "}
          Add to cart
        </Button>
        <Button variant={"transparent"}> Add to favorite</Button>
      </div>
    );
  });

  return (
    <main className={""}>
      <Header />
      <div className={"mt-40 mb-100 mx-20"}>
        <div className={""}>
          <div className={"flex justify-between"}>
            <div className={"flex items-center gap-x-10"}>
              <div className={"text-18 text-gray-dark"}>Filters:</div>
              <Button variant={"red"}> up to €500.00</Button>
            </div>
            <div className={"flex items-center gap-x-10"}>
              <div className={"text-18 text-gray-dark"}>Show by cost:</div>
              <select className={"cursor-pointer"}>
                <option>ascending</option>
                <option>descending</option>
              </select>
            </div>
          </div>
        </div>
        {/* <div className={'grid grid-cols-3 auto-rows-max'}>*/}
        <div className={"flex items-stretch flex-wrap mx-auto max-w-1200"}>
          {productsJSX}
        </div>
      </div>
    </main>
  );
};
