import LeftBar from "./Components/LeftBar/LeftBar";
import NavBar from "./Components/NavBar/NavBar";
import RightBar from "./Components/RightBar/RightBar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedLayout = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <ProtectedLayout>
        <Layout />
      </ProtectedLayout>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
