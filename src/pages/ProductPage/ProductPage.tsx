import { Button } from "~elements";
import React, {useState} from "react";
import { Product, products} from "~shared";
import {useParams} from "react-router";
import { Icons } from "shared/icons";

export type CardItem = Product & { count: number };

export const ProductPage: React.FC = (props) => {

    const [countProduct, setCountProduct ]=useState(1)

    const countProducts =(brush:string)=>{
       switch (brush){
           case 'minus':
                   return setCountProduct(countProduct-1)
           case 'plus':
               return setCountProduct(countProduct+1)
       }
    }


    const { id } = useParams();

    const cardToShow = products?.find((product)=> product?.id === id)

    return (
      <div className={'ml-20 mt-50 mb-90'}>
          <div className={'flex gap-x-140'}>
              <div className={'max-w-600'}>
                  <img src={cardToShow?.photo} alt=""/>
                  <div className={'mt-50 text-24 border-b-red-10 border-b-4 w-65'}>About</div>
                  <div className={'text-18 text-gray-dark'}>As part of the Thonet range, the high-quality processed chair inspires with different material combinations of steel tube with a covering of tubular mesh with transparent, stable plastic support fabric, mesh fabric or upholstered and covered with leather or fabric.</div>
                  <div className={'mt-50 flex items-center gap-x-20 text-18'}>
                      <div className={''}>
                          <div>Seat height</div>
                          <div>Material</div>
                          <div>Height</div>
                          <div>Depth</div>
                          <div>Length</div>
                          <div>Weight</div>
                      </div>
                      <div>
                          <div>45 cm </div>
                          <div>Stained beech wood / Chrome-plated steel tube </div>
                          <div>82 cm</div>
                          <div>60 cm</div>
                          <div>46 cm</div>
                          <div>5.8 kg (without packaging)</div>
                      </div>
                  </div>
              </div>

              <div className={'max-w-450'}>
                  <div className={'flex gap-x-5'}>
                      <img src="/images/stars.png" alt="stars"/>
                      <div className={'text-18 text-gray-dark'}>5 reviews</div>
                  </div>
                  <div className={'mt-30 text-40 text-gray-dark'}>{cardToShow?.name}</div>
                  <div className={'mt-5 text-18 text-[#B1B1B1]'}>Thonet</div>
                  <div className={'mt-15 text-24 text-gray-dark'}>€ {cardToShow?.price}</div>
                  <div className={'mt-50 text-18 text-gray-dark mt-10'}>{cardToShow?.description}</div>
                  <div className={'flex items-center gap-x-10 mt-50'}>
                      <div className={'flex items-center gap-x-25 bg-red-10 py-7 px-50 text-white rounded-20'}>
                          <button disabled={countProduct==1} className={'cursor-pointer'} onClick={()=>countProducts('minus')}>-</button>
                          <div>{countProduct}</div>
                          <button className={'cursor-pointer'} onClick={()=>countProducts('plus')}>+</button>
                      </div>
                      <Button children={'Add to favorite'} variant={'transparent'}/>
                  </div>

                  <div className={'mt-60 flex items-center gap-x-20'}>
                      <div>
                          <div className={'flex gap-x-10  items-center'}>
                             <Icons.Price className="text-white" />
                              <div className={'text-gray-light text-18 max-w-175'}>Price incl. VAT, plus shipping</div>
                          </div>
                          <div className={'flex gap-x-10 mt-25 items-center'}>
                              <Icons.Stock className="text-white"/>
                              <div className={'text-gray-light text-18  max-w-175'}>30 days return policy</div>
                          </div>
                      </div>
                      <div>
                          <div className={'flex gap-x-10  items-center'}>
                            <Icons.Return />
                              <div className={'text-gray-light text-18 max-w-175'}>Due in stock: 4-6 weeks</div>
                          </div>
                          <div className={'flex gap-x-10 mt-25 items-center'}>
                              <Icons.Discount/>
                              <div className={'text-gray-light text-18  max-w-175'}>Discount when buying from 4 pcs.</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};
