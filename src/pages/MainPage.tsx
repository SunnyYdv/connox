import { Button } from "elements";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";


export const MainPage: React.FC = (props) => {
  
  const navigate = useNavigate();

  const toProductsPage = useCallback(() => {
    navigate("/products");
  }, []);


  return (
    <div className={""}>
      <div className="bg-red-10 bg-main  bg-[length:400px_400px] mobile:bg-[length:230px_200px] bg-no-repeat  bg-bottom text-white relative p-40 pb-20 py-100 mobile:p-20 mobile:pb-30 flex flex-col mb-10">
        <h1 className="text-100 mobile:text-40">New Arrival: spring/summer</h1>
        <h1 className="text-right text-80 mobile:text-36 mb-70">23/24</h1>
        <p className="text-16 max-w-300 mt-auto leading-medium mobile:leading-normal">
          These ideas, trends and products are brand-new! Be inspired by the
          latest in interior design right here!
        </p>
      </div>
      <div className="flex mobile:flex-col mobile:space-y-10 mobile:space-x-0 space-x-10 w-full px-20 pb-10">
        <div className="bg-[#E1DED9] rounded-20 p-40 w-full flex flex-col justify-center items-center">
          <img className="-mt-40 h-350 w-350" src="/images/lamps.png" />
          <div className="text-center">
            <div className="text-gray-50"> FlowerPot Pendant light</div>
            <div className="text-32 mb-10"> &amp; Tradition</div>
            <Button variant={'black'} onClick={toProductsPage} >More item</Button>
          </div>
        </div>
        <div className="bg-main-chair bg-no-repeat bg-cover rounded-20 p-40 w-full">
          <div className="text-white">
            <div className="text-32 mb-15"> New at Connox</div>
            <div className="max-w-400 mb-20">
              All of the new products at a glance: Find the new additions to our
              assortment and magazine here.
            </div>
            <Button variant='white' onClick={toProductsPage}>Go to the catalogue</Button>
          </div>
        </div>
      </div>
      <div className="bg-main-footer bg-no-repeat bg-cover p-70 mobile:p-20 text-20 mobile:text-16 text-white">
        <div className="max-w-75% mobile:max-w-full mb-50 border-r space-y-30 pr-40 mobile:border-none mobile:pr-10 leading-medium mobile:leading-normal">
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

        <Button variant='black' onClick={toProductsPage}>Go to the catalogue</Button>
      </div>
    </div>
  );
};
