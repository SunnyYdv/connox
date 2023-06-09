import * as Icons from './svg'
import React, { HTMLAttributes } from 'react'

export type AllIconTypes = typeof Icons
export type AllIconNames = keyof AllIconTypes

export type IconProps = {
  className?: string
  onClick?(e: React.MouseEvent<HTMLOrSVGElement>): void
} & Partial<HTMLAttributes<SVGElement>>

export { Icons }