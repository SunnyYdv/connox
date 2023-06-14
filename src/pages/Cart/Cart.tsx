import React from "react";
import { Icons } from "shared/icons";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { useCart } from "./useCart";


export const Cart: React.FC = () => {
  const { cart, removeFromCart, changeProductCount, totalPrice} = useCart()

  return (
    <div className={"flex flex-col grow min-h-screen"}>
      <Header />

      <div className="max-w-900 w-full mx-auto py-40">
        <h2 className="text-32 mb-20">Your cart</h2>
        {cart?.map((product) => {
          return (
            <div className="flex mb-30 ">
              <div className="bg-gray-10 rounded-20 mr-20 p-20 w-300">
                <img src={product.photo} />
              </div>
              <div className="flex flex-col w-full relative">
                <Icons.Cross
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => removeFromCart(product.id)}
                />
                <p>{product.name}</p>
                <p className="text-gray-50"> {product.manufacturer}</p>
                <div className="flex space-x-10 mt-10">
                  Count
                  <span
                    className="bg-gray-10 rounded-l-full px-10 ml-15 cursor-pointer"
                    onClick={() => product.count > 1 && changeProductCount(product.id, 'minus')}
                  >
                    -
                  </span>
                  <span className="">{product.count}</span>
                  <span
                    className="bg-gray-10 rounded-r-full px-10 cursor-pointer"
                    onClick={() => changeProductCount(product.id, 'plus')}
                  >
                    +
                  </span>
                </div>
                <p className="mt-auto "> &#8364; {product.price * product.count}</p>
              </div>
            </div>
          );
        })}

        <div className="border-t w-full">
          <div className="max-w-400 w-full mx-auto py-40">
            <div className="uppercase flex">
              Subtotal <span className=" inline-block ml-auto">&#8364; {totalPrice}</span>
            </div>
            <div className="uppercase flex">
              Delivery <span className=" inline-block ml-auto">Free!</span>
            </div>
          </div>
        </div>
        <div className="border-t w-full">
          <div className="max-w-400 w-full mx-auto py-40">
            <div className="uppercase flex">Total <span className=" inline-block ml-auto">&#8364; {totalPrice}</span></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
