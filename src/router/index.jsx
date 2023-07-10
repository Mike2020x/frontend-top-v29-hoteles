import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Checkout from "../pages/checkoutPage/Checkout"
import HotelList from "../pages/HotelList/HotelList"
import HotelSingle from "../pages/HotelSingle/HotelSingle"
import SignUp from "../pages/SignUp"
import BookingSuccess from "../pages/BookingSuccess"
import UserDashboard from "../pages/UserDashboard"
import BookingSummary from "../pages/bookinSummaryPage/BookingSummaryPage";
import NotFound from "../pages/NotFound/NotFound"
import VerifyAccount from "../pages/VerifyAccount/VerifyAccount";
import VerifyMessage from "../pages/VerifyAccount/VerifyMessage";
import ForgotPassword from "../pages/VerifyAccount/ForgotPassword";
import HotelMap from "../components/hotelMap/HotelMap";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: loaderProducts,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "hotel-list",
        element: <HotelList />,
        // loader: loaderProduct,
      },
      {
        path: "hotel-single",
        element: <HotelSingle />,
        // loader: loaderProduct,
      },
      {
        path: "hotel-map",
        element: <HotelMap />,
        // loader: loaderProduct,
      },
      {
        path: "signup",
        element: <SignUp />,
        // loader: loaderProduct,
      },
      {
        path: "verify-account/:email",
        element: <VerifyMessage />,
        // loader: loaderProduct,
      },
      {
        path: "verify-account/token/:id",
        element: <VerifyAccount />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "booking-success",
        element: <BookingSuccess />
        // loader: loaderProduct,
      },
      {
        path: "user-dashboard",
        element: <UserDashboard />,
        // loader: loaderProduct,
      },
      {
        path: "summary",
        element: <BookingSummary />,
        // loader: loaderProduct,
      },
    ],
  },
]);

export default router;
