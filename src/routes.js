import LoginPage from "./pages/LoginPage/LoginPage";
import NewPassword from "./pages/NewPassword/NewPassword";
import PasswordPage from "./pages/PasswordPage/PasswordPage";
import { LOGIN_ROUTE, PRIVATE_ROUTE_1, PRIVATE_ROUTE_2 } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />,
  },
];

export const privateRoutes = [
  {
    path: PRIVATE_ROUTE_1,
    element: <PasswordPage />,
  },
  {
    path: PRIVATE_ROUTE_2,
    element: <NewPassword />,
  },
];
