import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import Company from "./components/Main/Company/Company.jsx";
import Metrics from "./components/Main/Metrics/Metrics.jsx";
import Selector from "./components/Main/Selector/Selector.jsx";
import User from "./components/Main/User/User.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Metrics /> },
      { path: '/selector', element: <Selector />},
      { path: '/company', element: <Company />},
      { path: '/user', element: <User />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
