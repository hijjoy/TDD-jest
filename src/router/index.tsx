import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import MyPage from "../pages/my";
import LpsPage from "@/pages/lps";
import LpDetailPage from "@/pages/lp-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/my",
    element: <MyPage />,
  },
  {
    path: "/lps",
    element: <LpsPage />,
  },
  {
    path: `/lps/:id`,
    element: <LpDetailPage />,
  },
]);

export default router;
