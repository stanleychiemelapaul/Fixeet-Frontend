import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const Error = lazy(() => import("../components/error-page"));
const ForgotPassword = lazy(() => import("../pages/forgot-password"));
const ResetPassword = lazy(() => import("../pages/reset-password"));
const AllReports = lazy(() => import("../pages/all-reports"));
const Reports = lazy(() => import("../pages/report"));
const NewReport = lazy(() => import("../pages/new-report"));
const About = lazy(() => import("../pages/about"));

export {
  Home,
  Error,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  AllReports,
  Reports,
  NewReport,
  About,
};
