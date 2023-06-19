import React, { FC } from 'react'

export interface IImageProps extends Partial<HTMLImageElement>{}

export const  Image: FC<IImageProps> = (props)=> {
    const { src, className, alt='image' } = props
  return (
    <img src={src} alt={alt} className={className}/>
  )
}
