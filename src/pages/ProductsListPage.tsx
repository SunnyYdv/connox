import React from "react";
import { Header } from "widgets/Header";
import Button from "../elements/Button/Button";
import {products} from "~shared";


const productsJSX= products.map((product)=>{
    return (
        <div className={'w-1/3'}>
                <img className={'mt-30 cursor-pointer bg-[#F1EDE6] rounded-20 hover:bg-[#f3dabc]'}
                     src={product.photo}/>
                <div className={'pt-20'}>{product.name}</div>
                <div className={'py-10'}>{product.manufacturer}</div>
                <div>€ {product.price}</div>
            <Button className={'mr-10 mt-10'} title={'Add to cart'} variant={'red'}/>
            <Button title={'Add to favorite'} variant={'transparent'}/>
        </div>

    )
})

export const ProductsListPage: React.FC = (props) => {
  return (
    <main className={''}>
        <Header/>
        <div className={'mt-40 mb-100 mx-20'}>
            <div className={''}>
                <div className={'flex justify-between'}>
                    <div className={'flex items-center gap-x-10'}>
                        <div className={'text-18 text-gray-dark'}>Filters:</div>
                        <Button title={'up to €500.00'} variant={'red'}/>
                    </div>
                    <div className={'flex items-center gap-x-10'}>
                        <div className={'text-18 text-gray-dark'}>Show by cost:</div>
                        <select className={'cursor-pointer'}>
                            <option>ascending</option>
                            <option>descending</option>
                        </select>
                    </div>
                </div>
            </div>
           {/* <div className={'grid grid-cols-3 auto-rows-max'}>*/}
            <div className={'flex items-stretch flex-wrap mx-auto max-w-1200'}>
                {productsJSX}
            </div>
        </div>


    </main>
  );
};
