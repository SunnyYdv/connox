import React, { ReactNode } from "react";
import { products } from "shared";
import { Icons } from "shared/icons";
import { Header } from "widgets/Header";

export const Cart: React.FC = (props) => {
  return (
    <div className={""}>
      <Header />

      <div className="max-w-900 w-full mx-auto py-40">
        <h2 className="text-32 mb-20">Your cart</h2>
        {products.map((el) => {
          return (
            <div className="flex mb-30 ">
              <div className="bg-gray-10 rounded-20 mr-20 p-20 w-300">
                <img src={el.photo} />
              </div>
              <div className="flex flex-col w-full relative">
                <Icons.Cross className="absolute top-0 right-0 cursor-pointer" />
                <p>{el.name}</p>
                <p className="text-gray-50"> {el.manufacturer}</p>
                <div className="flex space-x-10 mt-10">
                  Count
                  <span className="bg-gray-10 rounded-l-full px-10 ml-15">
                    -
                  </span>
                  <span className="">2</span>
                  <span className="bg-gray-10 rounded-r-full px-10">+</span>
                </div>
                <p className="mt-auto "> &#8364; {el.price}</p>
              </div>
            </div>
          );
        })}

        <div className="border-t w-full">
          <div className="max-w-400 w-full mx-auto py-40">
            <div className="uppercase flex">
              Subtotal <span>&#8364;</span>
            </div>
            <div className="uppercase flex">
              Delivery <span className=" inline-block ml-auto">Free!</span>
            </div>
          </div>
        </div>
        <div className="border-t w-full">
          <div className="max-w-400 w-full mx-auto py-40">
            <div className="uppercase">Total </div>
          </div>
        </div>
      </div>
    </div>
  );
};
