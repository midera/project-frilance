import React from 'react';
import AppRouter from "./components/Route/AppRouter";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./pages/Auth";



const App = () => {
    return (
        <BrowserRouter>

            <NavBar/>
            <Auth/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
