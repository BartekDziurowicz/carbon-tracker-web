import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import SelectorContextProvider from "./store/selector-context.jsx";
import CompanyContextProvider from "./store/company-context.jsx";
import ReportsContextProvider from "./store/reports-context.jsx";
import RouteError from "./components/RouteError/RouteError.jsx";
import "./App.css";

const Metrics = lazy(() => import('./components/Main/Metrics/Metrics.jsx'));
const Selector = lazy(() => import('./components/Main/Selector/Selector.jsx'));
const Company = lazy(() => import('./components/Main/Company/Company.jsx'));
const Reports = lazy(() => import('./components/Main/Reports/Reports.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteError root={true}/>,
    children: [
      { index: true, element: <Metrics />, errorElement: <RouteError />, loader: () => import('./components/Main/Metrics/Metrics.jsx').then(module => module.thresholdsLoader())},
      { path: '/selector', element: <SelectorContextProvider><Selector /></SelectorContextProvider>, errorElement: <RouteError />, loader: () => import('./components/Main/Selector/Selector.jsx').then(module => module.filtersLoader())},
      { path: '/company', element: <CompanyContextProvider><Company /></CompanyContextProvider>},
      { path: '/reports', element: <ReportsContextProvider><Reports /></ReportsContextProvider>, errorElement: <RouteError />, loader: () => import('./components/Main/Reports/Reports.jsx').then(module => module.reportsLoader())},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
