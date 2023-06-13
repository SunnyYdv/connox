import { Cart } from 'pages/Cart'
import { MainPage } from 'pages/MainPage'
import { FC, memo } from 'react'
import { createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >

      {/* <Route element={<CurrentUserProvider />}>


      </Route> */}
      <Route path={'/'} element={<MainPage/>} />
      <Route path={'/cart'} element={<Cart/>} />
      <Route path={''} element={<Navigate replace to={'/'} />} />
      <Route path={'*'} element={<Navigate replace to={'/'} />} />
      {/* <Route path={'*'} element={<Navigate replace to={'404'} />} /> */}

    </Route>
  )
)
const Router: FC = () => {
  return <RouterProvider router={router} />
}

export default memo(Router)