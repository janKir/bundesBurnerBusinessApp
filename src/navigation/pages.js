import Welcome from "../components/welcome";
import Register from "../components/register";

const pages = [
  {
    path: "/",
    title: "Welcome",
    component: Welcome
  },
  {
    path: "/register",
    title: "Registrieren",
    component: Register
  }
];

export default pages;
