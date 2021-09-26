import Working from "./pages/Working/Working";
import {
    ADMIN_ROUTE, ADVERTISEMENT_ROUTE,
    CUSTOMER_ROUTE, HOME_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    WORKING_ROUTE
} from "./utils/consts";
import Customer from "./pages/Customer/Customer";
import Auth from "./pages/Auth";
import HomePage from "./pages/Home/HomePage";
import Admin from "./pages/Admin";
import Advertisement from "./components/advertisement/Advertisement";
import Profile from "./components/Profile/Profile";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: WORKING_ROUTE,
        Component: Working,
    },
    {
        path: CUSTOMER_ROUTE,
        Component: Customer,
    },
    {
        path: PROFILE_ROUTE + '/:id',
        Component: Profile
    }
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: ADVERTISEMENT_ROUTE ,
        Component: Advertisement
    }

]
