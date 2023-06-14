import {
  CartPage,
  MainPage,
  FavoritesPage,
  ProductsPage,
  ProductPage,
} from "pages";
import { FC, memo } from "react";
import {
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "./layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route element={<PageLayout />}>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/favorites"} element={<FavoritesPage />} />
        <Route path={"/products"} element={<ProductsPage />}>
        </Route>
          <Route path={'/product/:id'} element={<ProductPage />} />

        <Route path={""} element={<Navigate replace to={"/"} />} />
        <Route path={"*"} element={<Navigate replace to={"/"} />} />
      </Route>

    </Route>
  )
);
const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default memo(Router);
