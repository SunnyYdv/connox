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

  const toFavorites = useCallback(() => {
    navigate("/favorites");
  }, []);

  const toCatalogue = useCallback(() => {
    navigate("/products");
  }, []);

  return (
    <header
      className={
        "flex items-center p-20 px-40 mobile:px-20 w-full justify-between shadow-interactive-2 "
      }
    >
      <span onClick={toMain} className="cursor-pointer font-bold text-18 ">
        {" "}
        Connox
      </span>
      <>
        <span
          onClick={toCatalogue}
          className=" ml-auto cursor-pointer hover:scale-110 hover:text-red-10 font-medium  transition"
        >
          Catalogue
        </span>
        <span
          onClick={toFavorites}
          className=" mx-30 cursor-pointer hover:scale-110 hover:text-red-10 font-medium transition mobile:mx-15"
        >
          Favorites
        </span>
        <span
          onClick={toCart}
          className="cursor-pointer hover:scale-110 hover:text-red-10 font-medium  transition"
        >
          Cart
        </span>
      </>
    </header>
  );
};
