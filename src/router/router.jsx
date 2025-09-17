import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DashboardPage from "../pages/DashboardPage/DashboardPage";




const router = createBrowserRouter([
//   {
//     path: "/sign-in",
//     element: <Signin />,
//   },
//   {
//     path: "/verify",
//     element: <Verify />,
//   },
//   {
//     path: "/passReset",
//     element: <PassReset />,
//   },
//   {
//     path: "/forget-password",
//     element: <ForgotPass />,
//   },
//   {
//     path: "/setPass",
//     element: <SetPass />,
//   },
  {
    path: "/",
    // element: <PrivetRoutes><Main></Main></PrivetRoutes>,
    element:<Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <DashboardPage/>,
      },
    //   {
    //     path: "/userManagement",
    //     element: <UserManagement />,
    //   },
     
    ],
  },
]);
export default router;
