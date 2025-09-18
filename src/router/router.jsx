import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import UserManagement from "../pages/UserManagement/UserManagement";
import AllOwner from "../pages/AllOwner/AllOwner";
import AllProvider from "../pages/AllProviders/AllProviders";
import Request from "../pages/Request/Request";
import TransactionHistory from "../pages/TransactionHistory/TransactionHistory";
import AllCategory from "../pages/AllCategory/AllCategory";




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
      {
        path: "/userManagement",
        element: <UserManagement />,
      },
      {
        path: "/allOwner",
        element: <AllOwner/>,
      },
      {
        path: "/allProviders",
        element: <AllProvider/>,
      },
      {
        path: "/requestOverview",
        element: <Request/>,
      },
      {
        path: "/transactionHistory",
        element: <TransactionHistory/>,
      },
      {
        path: "/allCategory",
        element: <AllCategory/>,
      },
     
    ],
  },
]);
export default router;
