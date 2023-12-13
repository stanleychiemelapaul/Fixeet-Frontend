import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Home, Error, Login, Register } from "./route";
import LoadingSpinner from "../components/loading";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/reset-password";
import NewReports from "../pages/new-report";
import AllReports from "../pages/all-reports";
import Report from "../pages/report";
import About from "../pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Login />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Register />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/all-reports",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <AllReports />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/report",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Report />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ForgotPassword />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ResetPassword />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/new-report",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <NewReports />
      </Suspense>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
    ),
    errorElement: <Error />,
  },
]);

export default router;
