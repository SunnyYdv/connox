import cls from "classnames";
import React, { FC } from "react";
import { IconProps } from "shared/icons";

export const Youtube: FC<IconProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="40" height="28" viewBox="0 0 40 28" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >

<path d="M39.1641 4.37229C38.7041 2.65119 37.3489 1.2959 35.6277 0.835933C32.5084 -2.89227e-06 20 -3.32296e-06 20 -3.32296e-06C20 -3.32296e-06 7.49166 -2.89227e-06 4.37225 0.835933C2.65127 1.2959 1.29581 2.65119 0.835848 4.37229C0 7.49165 0 14 0 14C0 14 0 20.5083 0.835848 23.6279C1.29581 25.3488 2.65127 26.7041 4.37225 27.1643C7.49166 28 20 28 20 28C20 28 32.5084 28 35.6277 27.1643C37.3489 26.7041 38.7041 25.3488 39.1641 23.6279C40 20.5083 40 14 40 14C40 14 40 7.49165 39.1641 4.37229Z" fill=""/>
<path d="M15.9089 19.9092L26.3635 14.0004L15.9089 8.09103V19.9092Z" fill="white"/>
</svg>

  );
};
