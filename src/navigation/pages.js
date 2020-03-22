import Welcome from "../components/welcome";
import Register from "../components/register";
import Dashboard from "../components/dashboard";
import Receive from "../components/receive";

const pages = [
  {
    path: "/register",
    title: "Registrieren",
    component: Register
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard
  },
  {
    path: "/receive",
    title: "Empfangen",
    component: Receive
  },
  {
    path: "/",
    title: "Welcome",
    component: Welcome
  }
];

export default pages;
