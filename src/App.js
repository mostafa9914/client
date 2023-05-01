import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import SingIn from "./pages/singin";
import SingUp from "./pages/singup";
import Sport from "./pages/sport";
import Cultural from "./pages/cultural";
import Politician from "./pages/politician";


// LEVEL2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/sport",
    element: <Sport />,
  },

  {
    path: "/cultural",
    element: <Cultural />,
  },
  {
    path: "/politician",
    element: <Politician />,
  },
  {
    path: "/singin",
    element: <SingIn />,
  },
  {
    path: "/singup",
    element: <SingUp />,
  },

]);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
