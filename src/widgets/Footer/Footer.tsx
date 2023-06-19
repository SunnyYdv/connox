import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import { Icons } from "shared/icons";

export const Footer: React.FC = (props) => {
  const navigate = useNavigate();

  const toMain = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <footer
      className={
        "flex items-center p-20 px-40 mobile:px-20 w-full justify-between shadow-interactive-2 mt-auto "
      }
    >
      <div className="flex items-center space-x-10">
      <span className="mr-40 cursor-pointer" onClick={toMain}>Connox</span>
        <Icons.Youtube className="h-20 w-30 cursor-pointer"  />
        <Icons.LinkedIn className="h-20 w-20 cursor-pointer"/>
        <Icons.Instagram className="h-20 w-20 block cursor-pointer"/>
      </div>
        <div className="uppercase ml-5 cursor-pointer">Privacy policies</div>
    </footer>
  );
};
