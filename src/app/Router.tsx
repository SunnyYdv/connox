import {CartPage, MainPage, FavoritesPage, ProductsListPage, ProductPage} from 'pages'
import { FC, memo } from 'react'
import { createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { PageLayout } from './layouts'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >

      {/* <Route element={<CurrentUserProvider />}>


      </Route> */}

      {/* <Route element={<NotFoundPage />} path={'404'} /> */}
      <Route element={<PageLayout />}>

      <Route path={'/'} element={<MainPage/>} />
      <Route path={'/cart'} element={<CartPage/>} />
      <Route path={'/favorites'} element={<FavoritesPage/>} />
      <Route path={'/products'} element={<ProductsListPage/>} />
        <Route path={`/products/:id`} element={<ProductPage/>} />
        <Route path={''} element={<Navigate replace to={'/'} />} />
      <Route path={'*'} element={<Navigate replace to={'/'} />} />
      </Route>
      {/* <Route path={'*'} element={<Navigate replace to={'404'} />} /> */}

    </Route>
  )
)
const Router: FC = () => {
  return <RouterProvider router={router} />
}

export default memo(Router)