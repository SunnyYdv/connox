import { Button } from "~elements";
import React from "react";
import { addToCart, addToFavorites, Product, products } from "~shared";
import { useParams } from "react-router";
import { Icons } from "shared/icons";

export type CardItem = Product & { count: number };

export const ProductPage: React.FC = (props) => {
  const { id } = useParams();

  const cardToShow = products?.find((product) => product?.id === id);
  if (!cardToShow) return <></>;

  return (
    <div className={"max-w-1200 mx-auto px-30 py-80 mobile:py-40"}>
      <div className={"flex mobile:flex-col gap-x-80 mb-30"}>
        <img
          src={cardToShow?.photo}
          alt=""
          className="bg-gray-10 rounded-20 flex items-center justify-center p-20 h-full w-800 mobile:mb-20"
        />

        <div className={""}>
          <div className={"flex gap-x-5 items-center"}>
            <Icons.Star className="text-red-10" />
            <Icons.Star className="text-red-10" />
            <Icons.Star className="text-red-10" />
            <Icons.Star className="text-red-10" />
            <Icons.Star className="text-red-10" />

            <div className={"text-gray-dark ml-10"}>5 reviews</div>
          </div>
          <div className={"text-30 text-gray-dark"}>{cardToShow?.name}</div>
          <div className={"text-18 text-[#B1B1B1]"}>Thonet</div>
          <div className={"text-24 text-gray-dark"}>€ {cardToShow?.price}</div>
          <div className={"text-gray-dark mt-10"}>
            {cardToShow?.description}
          </div>
          <div className={"flex items-center gap-x-10 my-20"}>
            <Button onClick={() => addToCart(cardToShow)} variant={"red"}>
              Add to cart
            </Button>
            <Button
              onClick={() => addToFavorites(cardToShow)}
              variant={"transparent"}
            >
              Add to favorite
            </Button>
          </div>

          <div className={" grid grid-cols-2 items-center gap-10"}>
            <div className={"flex gap-x-10  items-center"}>
              <Icons.Price className="text-white" />
              <div className={"text-gray-light"}>
                Price incl. VAT, plus shipping
              </div>
            </div>
            <div className={"flex gap-x-10  items-center"}>
              <Icons.Stock className="text-white" />
              <div className={"text-gray-light "}>30 days return policy</div>
            </div>

            <div className={"flex gap-x-10  items-center"}>
              <Icons.Return />
              <div className={"text-gray-light "}>Due in stock: 4-6 weeks</div>
            </div>
            <div className={"flex gap-x-10  items-center"}>
              <Icons.Discount />
              <div className={"text-gray-light"}>
                Discount when buying from 4 pcs.
              </div>
            </div>
          </div>
        </div>
      </div>

        <>
          <div
            className={
              "mb-10 text-24 border-b-red-10 border-b-4 pb-2 px-5 w-fit"
            }
          >
            About
          </div>
          <div className={"text-18 text-gray-dark"}>
            As part of the Thonet range, the high-quality processed chair
            inspires with different material combinations of steel tube with a
            covering of tubular mesh with transparent, stable plastic support
            fabric, mesh fabric or upholstered and covered with leather or
            fabric.
          </div>
          <div className={"mt-50 flex items-center space-x-50 text-18"}>
            <div className={"space-y-5"}>
              <div>Seat height</div>
              <div>Material</div>
              <div>Height</div>
              <div>Depth</div>
              <div>Length</div>
              <div>Weight</div>
            </div>
            <div className="font-thin space-y-5">
              <div>45 cm </div>
              <div>Stained beech wood / Chrome-plated steel tube </div>
              <div>82 cm</div>
              <div>60 cm</div>
              <div>46 cm</div>
              <div>5.8 kg (without packaging)</div>
            </div>
          </div>
        </>
    
    </div>
  );
};
