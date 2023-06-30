import React, { forwardRef, memo, ReactNode } from 'react'
import cls from "classnames";

export type ButtonVariantType = 'transparent' | 'black'

const buttonBlackVariant='border-2 border-black bg-black text-[#f2d49e] hover:bg-transparent hover:text-black  active:scale-90 transition rounded-30 py-5 px-15'
const buttonTransparentVariant='active:bg-opacity-60 active:scale-90 transition text-black bg-transparent rounded-30 py-5 px-10 border-2 border-black'
const buttonDisabled='opacity-50 pointer-events-none'

export type ButtonProps = {
    variant: ButtonVariantType
    children?: JSX.Element | ReactNode
    className?:string
} & Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>

const getButtonVariantClass = (variant: ButtonVariantType, className?:string, disabled = false ) => {
    return cls( className,
        {
            [`${buttonTransparentVariant}`]: variant === 'transparent',
            [`${buttonBlackVariant}`]: variant === 'black',
            [`${buttonDisabled}`]: disabled
        }
    )
}

export const Button = memo(
    forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
      const { variant = 'black', children, className, disabled, ...rest } = props
  
      return (
        <button ref={ref} className={getButtonVariantClass(variant, className, disabled )} {...rest}>
          {children}
        </button>
      )
    })
  )

