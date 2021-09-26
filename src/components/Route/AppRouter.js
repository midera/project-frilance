import React,{useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Context} from "../../index";
import {HOME_ROUTE} from "../../utils/consts";
import {authRoutes, publicRoutes} from "../../routes";


const AppRouter = () => {
    const {user} = useContext(Context);
    return (
        <Switch>
            {user.isAuth ===false && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
