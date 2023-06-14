import React, { ReactNode } from "react";
import { Icons } from "shared/icons";

export const Footer: React.FC = (props) => {
  return (
    <footer
      className={
        "flex items-center p-20 px-40 mobile:px-20 w-full justify-between shadow-interactive-2 mt-auto "
      }
    >
      <div className="flex items-center space-x-10">
      <span className="mr-40">Connox</span>
        <Icons.Youtube className="h-20 w-30"  />
        <Icons.LinkedIn className="h-20 w-20"/>
        <Icons.Instagram className="h-20 w-20 block "/>
      </div>
        <div className="uppercase ml-40 ">Privacy policies</div>
    </footer>
  );
};
