import React, { ReactNode } from "react";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

export const MainPage: React.FC = (props) => {
  return (
    <div className={""}>
      <Header />
      <div className="bg-red text-white text-100 p-40 h-710  flex flex-col mb-10">
        <h1>New Arrival: spring/summer</h1>
        <h1 className="text-right">23/24</h1>
        <p className="text-16 max-w-300 mt-auto leading-medium">
          These ideas, trends and products are brand-new! Be inspired by the
          latest in interior design right here!
        </p>
        <img
          className="absolute-bottom h-500 w-500 "
          src="./static/images/main.png"
        />
      </div>
      <div className="flex space-x-10 w-full px-20 pb-10">
        <div className="bg-[#E1DED9] rounded-20 p-40 w-full flex flex-col justify-center items-center">
          <img className="-mt-40 h-350 w-350" src="./static/images/lamps.png" />
          <div className="text-center">
            <div className="text-gray-50"> FlowerPot Pendant light</div>
            <div className="text-32 mb-10"> &amp; Tradition</div>
            <button>More item</button>
          </div>
        </div>
        <div className="bg-main-chair bg-no-repeat object-cover rounded-20 p-40 w-full">
          <div className="text-white">
            <div className="text-32 mb-15"> New at Connox</div>
            <div className="max-w-400 mb-20">
              {" "}
              All of the new products at a glance: Find the new additions to our
              assortment and magazine here.
            </div>
            <button>Go to the catalogue</button>
          </div>
        </div>
      </div>
      <div className="bg-main-footer bg-no-repeat object-cover p-70 text-20 text-white">
        <div className="max-w-75% mb-50 border-r space-y-30 pr-40 leading-medium">
          <p>
            Whether you're looking for a comfortable office chair, a stylish
            dining chair, or a cozy armchair for your living room, we've got you
            covered. Our chairs are made from high-quality materials and
            designed with both style and comfort in mind. We believe that a good
            chair should not only look great, but also provide support and
            comfort for your body.
          </p>
          <p>
            We also offer a range of customization options, so you can choose
            the perfect color, fabric, and design to match your personal style.
            And with our affordable prices, you won't have to break the bank to
            find the perfect chair for your home or office.
          </p>
        </div>

        <button>Go to the catalogue</button>
      </div>
      <Footer/>
    </div>
  );
};
