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
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth";
import HomePage from "./pages/Home/HomePage";
import Admin from "./pages/Admin";
import Advertisement from "./pages/advertisement/Advertisement";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin,
    },
    {
        path: WORKING_ROUTE,
        component: Working,
    },
    {
        path: CUSTOMER_ROUTE,
        component: Customer,
    },
    {
        path: PROFILE_ROUTE + '/:id',
        component: Profile
    }
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path: HOME_ROUTE,
        component: HomePage
    },
    {
        path: ADVERTISEMENT_ROUTE ,
        component: Advertisement
    }

]
