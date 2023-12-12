import App from './App';
import Weather from "./components/Weather";
import About from "./components/About";
import Locations from "./components/SavedLocations";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
              path: "/",
              element: <Weather />,
            }, 
            {
              path: "/weather",
              element: <Weather />,
            }, 
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/locations",
              element: <Locations />,
            }
        ]
    }

]

export default routes;
