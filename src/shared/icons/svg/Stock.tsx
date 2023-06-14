
import React, { FC } from 'react'
import { IconProps } from '..';
import cls from "classnames";

export const Stock: FC<IconProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
    className={cls("fill-current", className)}
    width="27" height="26" viewBox="0 0 27 26" fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >


        <path d="M9.9 25H17.1C23.1 25 25.5 22.6 25.5 16.6V9.4C25.5 3.4 23.1 1 17.1 1H9.9C3.9 1 1.5 3.4 1.5 9.4V16.6C1.5 22.6 3.9 25 9.9 25Z" stroke="#292D32" stroke-width="1.9894" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.90018 17.0561H15.8042C17.8442 17.0561 19.5002 15.4001 19.5002 13.3601C19.5002 11.3201 17.8442 9.66406 15.8042 9.66406H7.68018" stroke="#292D32" stroke-width="1.9894" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.384 11.5253L7.5 9.6293L9.384 7.7453" stroke="#292D32" strokeWidth="1.9894" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}


