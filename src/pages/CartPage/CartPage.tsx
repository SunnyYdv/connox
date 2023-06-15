import React from "react";
import { Icons } from "shared/icons";
import { useCartPage } from "./useCartPage";


export const CartPage: React.FC = () => {
  const { cart, removeFromCart, changeProductCount, totalPrice} = useCartPage()

  return (
      <div className="max-w-900 w-full mx-auto py-40 px-20">
        <h2 className="text-32 mb-20">Your cart</h2>
        {!cart.length && <h2 className="text-32 my-40 font-thin">Cart is empty :&#40;</h2>}
        {cart?.map((product) => {
          return (
            <div className="flex mb-30 ">
              <div className="bg-gray-10 rounded-20 mr-20 p-20 w-300 max-h-160 flex items-center justify-center">
                <img src={product.photo} className='max-h-150' />
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
  );
};
