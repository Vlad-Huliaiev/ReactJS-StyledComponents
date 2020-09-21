import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import SignIn from "./Form/Login/Login.js";
import SignUp from "./Form/Register/Register.js";

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/register" component={SignUp} />
                </div>
            </Router>
        );
    }
}

export default App;