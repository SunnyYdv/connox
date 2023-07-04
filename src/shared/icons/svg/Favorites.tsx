import cls from "classnames";
import React, { FC } from "react";
import { IconProps } from "shared/icons";

export const Favorites: FC<IconProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="30"
      height="30"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z" />
    </svg>
  );
};
