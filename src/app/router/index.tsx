import { createBrowserRouter } from "react-router-dom";

import LpsPage from "@/pages/lps";
import LpDetailPage from "@/pages/lp-detail";
import MyPage from "@/pages/my";
import LoginPage from "@/pages/login";

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
