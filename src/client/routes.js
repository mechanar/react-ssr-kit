import MainPage from "./pages/MainPage";
import Application from "./Application";

export default [
  {
    ...Application,
    routes: [
      {
        ...MainPage,
        path: "/",
        exact: true
      }
    ]
  }
];
