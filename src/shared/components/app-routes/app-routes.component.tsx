import { RouteName } from "@core/constants";
import { useRoutes } from "react-router-dom";
import { HomePage } from "@pages/home";
import { RegistrationPage } from "@pages/registration";
import { LoginPage } from "@pages/login";
import { ProductPage } from "@pages/product";
import { ProductsListPage } from "@pages/products-list";
import { NotFoundPage } from "@pages/not-found";
import { RouteObject } from "react-router-dom";

const routeConfig: RouteObject[] = [
  {
    path: RouteName.HOMEPAGE,
    element: <HomePage />,
  },
  {
    path: RouteName.REGISTRATION,
    element: <RegistrationPage />,
  },
  {
    path: RouteName.LOGIN,
    element: <LoginPage />,
  },

  {
    path: RouteName.PRODUCTS_LIST,
    element: <ProductsListPage />,
  },
  {
    path: RouteName.PRODUCT,
    element: <ProductPage />,
  },
  {
    path: RouteName.NOT_FOUND_PAGE,
    element: <NotFoundPage />,
  },
];

const AppRoutes = () => {
  const routes = useRoutes(routeConfig);
  return <div>{routes}</div>;
};

export default AppRoutes;
