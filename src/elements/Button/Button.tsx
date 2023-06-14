import React, { forwardRef, memo, ReactNode } from 'react'
import cls from "classnames";

export type ButtonVariantType = 'red' | 'transparent' | 'black' | 'white'

const buttonRedVariant='text-gray-10 bg-red-10 hover:bg-red-20 active:bg-red-30 transition rounded-20 active:scale-90 py-5 px-10'
const buttonWhiteVariant='text-red-10 bg-white  hover:bg-red-20 hover:text-white active:bg-red-30 active:scale-90 transition rounded-20 py-5 px-15'
const buttonTransparentVariant='hover:bg-red-10 hover:bg-opacity-40 active:bg-opacity-60 active:scale-90 transition   text-red-10 bg-transparent rounded-20 py-5 px-10 border-2 border-red-10'
const buttonBlackVariant='text-white bg-black hover:bg-gray-90 transition active:scale-90 active:bg-black rounded-20 py-10 px-40 '

export type ButtonProps = {
    variant: ButtonVariantType
    children?: JSX.Element | ReactNode
    className?:string
} & Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>

const getButtonVariantClass = (variant: ButtonVariantType, className?:string) => {
    return cls( className,
        {
            [`${buttonRedVariant}`]: variant === 'red',
            [`${buttonTransparentVariant}`]: variant === 'transparent',
            [`${buttonBlackVariant}`]: variant === 'black',
            [`${buttonWhiteVariant}`]: variant === 'white'
        }
    )
}

export const Button = memo(
    forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
      const { variant = 'red', children, className, ...rest } = props
  
      return (
        <button ref={ref} className={getButtonVariantClass(variant, className)} {...rest}>
          {children}
        </button>
      )
    })
  )

