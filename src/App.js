import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import RouteError from "./components/RouteError/RouteError.jsx";
import Login from "./components/Login/Login.jsx";
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
    element: <Root />,
    errorElement: <RouteError root={true}/>,
    children: [
      { index: true, element: <Suspense><Metrics /></Suspense>, errorElement: <RouteError />, loader: () => import('./components/Main/Metrics/Metrics.jsx').then(module => module.thresholdsLoader())},
      { path: '/selector', element: <Suspense><SelectorContextProvider><Selector /></SelectorContextProvider></Suspense>, errorElement: <RouteError />, loader: () => import('./components/Main/Selector/Selector.jsx').then(module => module.filtersLoader())},
      { path: '/company', element: <Suspense><CompanyContextProvider><Company /></CompanyContextProvider></Suspense>},
      { path: '/reports', element: <Suspense><ReportsContextProvider><Reports /></ReportsContextProvider></Suspense>, errorElement: <RouteError />, loader: () => import('./components/Main/Reports/Reports.jsx').then(module => module.reportsLoader())},
      { path: '/metrics', element: <Login />, errorElement: <RouteError />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
