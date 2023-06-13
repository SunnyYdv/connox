import React, { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router";
import { Icons } from "shared/icons";

export const Header: React.FC = (props) => {
  const navigate = useNavigate();

  const toCart = useCallback(() => {
    navigate("/cart");
  }, []);

  const toMain = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <header
      className={
        "flex items-center p-20 px-40 w-full justify-between shadow-interactive-2 "
      }
    >
      <span onClick={toMain} className='cursor-pointer'> Connox</span>
      <>
        <Icons.Favorites className="ml-auto mr-10 cursor-pointer" />
        <span onClick={toCart} className='cursor-pointer'>Cart</span>
      </>
    </header>
  );
};
