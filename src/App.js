import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import Company from "./components/Main/Company/Company.jsx";
import Metrics, { thresholdsLoader } from "./components/Main/Metrics/Metrics.jsx";
import Selector, { filtersLoader } from "./components/Main/Selector/Selector.jsx";
import SelectorContextProvider from "./store/selector-context.jsx";
import CompanyContextProvider from "./store/company-context.jsx";
import User from "./components/Main/User/User.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Metrics />, loader: thresholdsLoader },
      { path: '/selector', element: <SelectorContextProvider><Selector /></SelectorContextProvider>, loader: filtersLoader},
      { path: '/company', element: <CompanyContextProvider><Company /></CompanyContextProvider>},
      { path: '/user', element: <User />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
