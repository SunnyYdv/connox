import { MainPage } from "pages";
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
    <Route element={<PageLayout />}>
      <Route path={"/"} element={<MainPage />} />

      <Route path={""} element={<Navigate replace to={"/"} />} />
      <Route path={"*"} element={<Navigate replace to={"/"} />} />
    </Route>
  )
);
const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default memo(Router);
