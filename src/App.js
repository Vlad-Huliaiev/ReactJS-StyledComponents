import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import SignIn from "./Form/Login/Login.js";
import SignUp from "./Form/Register/Register.js";


export const form = [
{
    title: "Login",
    path: "/login",
    component: SignIn,
}, {
    title: "Register",
    path: "/register",
    component: SignUp,
}
];

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        {form.map(({path, component, exact = false}) => (
                            <Route path={path} exact={exact} component={Component}/>
                            ))}
                        <Route path="/" exact render={() => <Redirect to="/login"/>} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
