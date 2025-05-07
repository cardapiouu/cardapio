import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLoading } from "../layout/AppLoading";
import { Layout } from "../layout/Layout";

const Cardapio = lazy(() =>
  import("../pages/Cardapio").then((module) => ({ default: module.Cardapio }))
);
const SplashScreen = lazy(() =>
  import("../layout/SplashScreen").then((module) => ({
    default: module.SplashScreen,
  }))
);
const NoContent404 = lazy(() =>
  import("../pages/NoContent404").then((module) => ({
    default: module.NoContent404,
  }))
);

export const layoutRoutes = [
  {
    title: "Cardapio",
    path: "/cardapio",
    element: <Cardapio />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "*",
    element: <NoContent404 />,
  },
  {
    path: "/",
    element: <Layout />,
    children: layoutRoutes.map((item) => ({
      path: item.path,
      element: <>{item.element}</>,
    })),
  },
]);

export function Routes() {
  return (
    <Suspense fallback={<AppLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
