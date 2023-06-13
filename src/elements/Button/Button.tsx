import React, { forwardRef, memo, ReactNode } from 'react'
import cls from "classnames";

export type ButtonVariantType = 'red' | 'transparent' | 'black' | 'white'

const buttonRedVariant='text-gray-90 bg-red rounded-20 py-5 px-10'
const buttonWhiteVariant='text-red bg-white rounded-20 py-5 px-15'
const buttonTransparentVariant='text-red bg-transparent rounded-20 py-5 px-10 border-2 border-red'
const buttonBlackVariant='text-white bg-black rounded-20 py-10 px-40 '

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

