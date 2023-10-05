import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const Homeroutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "/user_management",
    exact: true,
    children: <UserManagement />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
