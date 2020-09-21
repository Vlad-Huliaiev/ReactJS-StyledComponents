import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import SignIn from "./Form/Login/Login.js";
import SignUp from "./Form/Register/Register.js";



class App extends Component {
    render(){
        return (
            <div>
                <Router basename='/ReactJS-StyledComponents'>
                    <Switch>
                        <Route exact path='/' exact render={() => <Redirect to='/login'/>} />
                        <Route path='/login' component={SignIn} />
                        <Route path='/register' component={SignUp} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
