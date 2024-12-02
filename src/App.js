import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import RouteError from "./components/RouteError/RouteError.jsx";
import Logout from "./components/Main/Logout/Logout.jsx";
import Home from "./components/Main/Home/Home.jsx";
import EmployeeContextProvider from "./store/employee-context.jsx";
import "./App.css";

const Metrics = lazy(() => import('./components/Main/Metrics/Metrics.jsx'));
const SelectorContextProvider = lazy(() => import('./store/selector-context.jsx'));
const Selector = lazy(() => import('./components/Main/Selector/Selector.jsx'));
const CompanyContextProvider = lazy(() => import('./store/company-context.jsx'));
const Company = lazy(() => import('./components/Main/Company/Company.jsx'));
const ReportsContextProvider = lazy(() => import('./store/reports-context.jsx'));
const Reports = lazy(() => import('./components/Main/Reports/Reports.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <EmployeeContextProvider><Root /></EmployeeContextProvider>,
    errorElement: <RouteError root={true}/>,
    children: [
      { index: true, element: <Navigate to={'/home'} replace/>},
      { path: '/home', element: <Home />, errorElement: <RouteError />},
      { path: '/metrics', element: <Suspense><Metrics /></Suspense>, errorElement: <RouteError />, loader: () => import('./components/Main/Metrics/Metrics.jsx').then(module => module.thresholdsLoader())},
      { path: '/selector', element: <Suspense><SelectorContextProvider><Selector /></SelectorContextProvider></Suspense>, errorElement: <RouteError />, loader: () => import('./components/Main/Selector/Selector.jsx').then(module => module.filtersLoader())},
      { path: '/company', element: <Suspense><CompanyContextProvider><Company /></CompanyContextProvider></Suspense>},
      { path: '/reports', element: <Suspense><ReportsContextProvider><Reports /></ReportsContextProvider></Suspense>, errorElement: <RouteError />, loader: () => import('./components/Main/Reports/Reports.jsx').then(module => module.reportsLoader())},
      { path: '/logout', element: <Logout />, errorElement: <RouteError />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
