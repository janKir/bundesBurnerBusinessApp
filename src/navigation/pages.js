import Welcome from "../components/welcome";
import Register from "../components/register";

const pages = [
  {
    path: "/register",
    title: "Registrieren",
    component: Register
  },
  {
    path: "/",
    title: "Welcome",
    component: Welcome
  }
];

export default pages;
