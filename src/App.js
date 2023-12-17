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
      <>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <RightBar />
        </div>
      </>
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
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path:"/profile",
      element: 
      <ProtectedLayout>
        <Layout />
      </ProtectedLayout>,
      children: [
        {
          path: "/profile",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
