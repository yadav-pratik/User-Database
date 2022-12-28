import React from "react";
import { Route } from "react-router-dom";

import Login from "./authentication/Login";
import Register from "./authentication/Register";

const Body = (props) => {
    return (
        <div>
            <Route path="/" component={Login} exact/>
            <Route path="/register" component={Register} exact/>
        </div>
    )
}

export default Body