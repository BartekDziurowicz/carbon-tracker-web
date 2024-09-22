import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import Metrics, { thresholdsLoader } from "./components/Main/Metrics/Metrics.jsx";
import Company from "./components/Main/Company/Company.jsx";
import Selector, { filtersLoader } from "./components/Main/Selector/Selector.jsx";
import Reports from "./components/Main/Reports/Reports.jsx";
import SelectorContextProvider from "./store/selector-context.jsx";
import CompanyContextProvider from "./store/company-context.jsx";
import ReportsContextProvider from "./store/reports-context.jsx";
import RouteError from "./components/RouteError/RouteError.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteError root={true}/>,
    children: [
      { index: true, element: <Metrics />, errorElement: <RouteError />, loader: thresholdsLoader},
      { path: '/selector', element: <SelectorContextProvider><Selector /></SelectorContextProvider>, errorElement: <RouteError />, loader: filtersLoader},
      { path: '/company', element: <CompanyContextProvider><Company /></CompanyContextProvider>},
      { path: '/reports', element: <ReportsContextProvider><Reports /></ReportsContextProvider>, errorElement: <RouteError />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
