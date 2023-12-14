import App from './App';
import Activity from "./components/Activity";
import About from "./components/About";
import SavedActivities from "./components/SavedActivities";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
          {
            path: "/",
            element: <Activity />
          },   
          {
              path: "/bored",
              element: <Activity />,
            }, 
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/activities",
              element: <SavedActivities />,
            }
        ]
    }

]

export default routes;
