import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import SignIn from "./Form/Login/Login.js";
import SignUp from "./Form/Register/Register.js";

export const MENU = [{
    title: "Login",
    path: "/login",
    component: SignIn,
    exact: true
}, {
    title: "Register",
    path: "/register",
    component: SignUp,
    exact: true
}
];

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route path="/" exact render={() => <Redirect to="/login"/>} />
                    {MENU.map(({path, component: Component, exact = false}) => (
                        <Route  path={path}
                                exact={exact}
                                component={Component}/>
                    ))}
                </div>
            </Router>
        );
    }
}

export default App;
