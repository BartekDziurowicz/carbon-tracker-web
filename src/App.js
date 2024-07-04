import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import Metrics from "./components/Main/Metrics/Metrics.jsx";
import Selector from "./components/Main/Selector/Selector.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Metrics /> },
      { path: '/selector', element: <Selector />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
