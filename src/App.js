import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/pages/home/home";
import SolarEnergy from "./components/pages/solarEnergy/solarEnergyPage";
import WindEnergy from "./components/pages/windEnergy/windEnergyPage";
import Statistics from "./components/pages/statistics/statisticsPage";
import ErrorElement from "./components/general/errorElement/errorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorElement/>
  },
  {
    path: "/solar-energy",
    element: <SolarEnergy/>,
  },
  {
    path: "/wind-energy",
    element: <WindEnergy/>,
  },
  {
    path: "/statistics",
    element: <Statistics/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
