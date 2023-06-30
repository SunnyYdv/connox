import { FC, memo } from 'react'
import { Outlet } from 'react-router'

export const PageLayout: FC = memo(() => {
  return (
    <div className={'flex flex-col min-h-screen w-full children:flex-grow'}>
      <Outlet />
    </div>
  )
})
