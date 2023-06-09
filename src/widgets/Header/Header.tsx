import React, { ReactNode } from "react";
import { Icons } from "shared/icons";

export const Header: React.FC = (props) => {
  return (
    <header
      className={
        "flex items-center p-20 px-40 w-full mb-18 justify-between shadow-basic-1"
      }
    >
      <span>Connox</span>
      <>
        <Icons.Favorites  className="ml-auto mr-10"/>
        <span>Cart</span>
      </>
    </header>
  );
};
