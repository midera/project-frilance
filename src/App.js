import React from 'react';
import AppRouter from "./components/Route/AppRouter";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";




const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
