import React, { memo } from 'react'
import cls from "classnames";

export type ButtonVariantType = 'red' | 'transparent' | 'black'

const buttonRedVariant='text-gray-90 bg-red rounded-20 py-5 px-10'
const buttonTransparentVariant='text-red bg-transparent rounded-20 py-5 px-10 border-2 border-red'
const buttonBlackVariant='text-white bg-black rounded-20 py-10 px-40 '

export interface ButtonProps {
    variant: ButtonVariantType
    title: string,
    className?:string
}

const getButtonVariantClass = (variant: ButtonVariantType, className?:string) => {
    return cls( className,
        {
            [`${buttonRedVariant}`]: variant === 'red',
            [`${buttonTransparentVariant}`]: variant === 'transparent',
            [`${buttonBlackVariant}`]: variant === 'black',
        }
    )
}

const Button: React.FC<ButtonProps> = props => {
    const {title, variant, className} = props
    return (
        <button className={getButtonVariantClass(variant, className)}>
            {title}
        </button>
    )}


export default memo (Button)

