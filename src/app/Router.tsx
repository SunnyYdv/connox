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
  Routes,
} from "react-router";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import { PageLayout } from "./layouts";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <BrowserRouter>
//       <Routes>
//         <Route element={<PageLayout />}>
//           <Route path={"/"} element={<MainPage />} />
//           <Route path={"/cart"} element={<CartPage />} />
//           <Route path={"/favorites"} element={<FavoritesPage />} />
//           <Route path={"/products"} element={<ProductsPage />} />

//           <Route path={"/product/:id"} element={<ProductPage />} />

//           <Route path={""} element={<Navigate replace to={"/"} />} />
//           <Route path={"*"} element={<Navigate replace to={"/"} />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// );
const Router: FC = () => {
  return (<BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/favorites"} element={<FavoritesPage />} />
        <Route path={"/products"} element={<ProductsPage />} />

        <Route path={"/product/:id"} element={<ProductPage />} />

        <Route path={""} element={<Navigate replace to={"/"} />} />
        <Route path={"*"} element={<Navigate replace to={"/"} />} />
      </Route>
    </Routes>
  </BrowserRouter>);
};

export default memo(Router);
