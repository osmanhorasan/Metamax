import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../providers/auth.provider";
import { ProtectedRoute } from "./ProtectedRoute";
import { ListContainer } from "../pages/list/ListContainer";
import Auth from "../pages/auth/Auth";
import { OurTeam } from "../pages/ourteam/OurTeam";
import { About } from "../pages/about/About";
import { Help } from "../pages/help/Help";
import { Profile } from "../pages/profile/Profile";
import { Home } from "../pages/home/Home";
import { Logout } from "../pages/logout/Logout";

const Routes = () => {
    const { token } = useAuth();

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/list",
            element: <ListContainer />,
        },
        {
            path: "/our-team",
            element: <OurTeam />,
        },
        {
            path: "/about-us",
            element: <About />,
        },
        {
            path: "/help",
            element: <Help />,
        },
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/list",
                    element: <ListContainer />,
                },
                {
                    path: "/profile",
                    element: <Profile />,
                },
                {
                    path: "/logout",
                    element: <Logout />,
                },
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "auth/login",
            element: <Auth />,
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes;