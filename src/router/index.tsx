import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import MyPage from "../pages/my";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/my",
    element: <MyPage />,
  },
]);

export default router;
