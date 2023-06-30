import React from "react";
import { Button } from "~elements";

export const MainPage:React.FC=()=>{

  return (
          <div className="main-header content">
              <div className="behind" id="behind"/>
              <div id="glasses" className="glasses"/>
              <div className={'absolute top-0 mt-40 flex w-full justify-between z-50'}>
                  <div className={' ml-50'}>
                      <div className={'text-20 cursor-pointer'}>Megan Bauer</div>
                      <div className={'mt-160 text-80 max-w-300'}>Digital Designer</div>
                      <div className={'mt-50 text-30 max-w-300 font-light'}>Professional service with a creative approach </div>
                      <div className={'mt-50 flex gap-x-20'}>
                          <Button variant={'transparent'} children={'More'}/>
                          <Button variant={'black'} children={'Hire me'}/>
                      </div>
                  </div>

                  <div className={'mr-50'}>
                      <div className={'flex gap-x-20 cursor-pointer font-light'}>
                          <div className={'border-b-2 border-b-transparent hover:border-b-2 hover:border-b-black'}>Home</div>
                          <div className={'border-b-2 border-b-transparent hover:border-b-2 hover:border-b-black'}>About</div>
                          <div className={'border-b-2 border-b-transparent hover:border-b-2 hover:border-b-black'}>Cases</div>
                          <div className={'border-b-2 border-b-transparent hover:border-b-2 hover:border-b-black'}>Contacts</div>
                      </div>
                      <div className={'mb-20 text-20 max-w-300 mt-150 font-light'}>We focus on dialectical principles which
                          allow the visual side of the design to carry the message
                          of the business to a customer...
                      </div>
                      <Button variant={'transparent'} children={'Continue reading'}/>

                  </div>
              </div>
          </div>
  );
};




