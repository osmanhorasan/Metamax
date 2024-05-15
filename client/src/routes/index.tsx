import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../providers/auth.provider";
import { ProtectedRoute } from "./ProtectedRoute";
import { ListContainer } from "../pages/list/ListContainer";
import Auth from "../pages/auth/Auth";

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
            element: <div>Our team Page</div>,
        },
        {
            path: "/about-us",
            element: <div>About Us Page</div>,
        },
        {
            path: "/help",
            element: <div>Help Page</div>,
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
                    element: <div>Home Page</div>,
                },
                {
                    path: "/list",
                    element: <ListContainer />,
                },
                {
                    path: "/profile",
                    element: <div>User Profile</div>,
                },
                {
                    path: "/logout",
                    element: <div>Logout</div>,
                },
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <div>Home Page</div>,
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