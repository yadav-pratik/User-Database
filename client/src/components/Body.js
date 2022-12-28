import React from "react";
import { Route } from "react-router-dom";

import Login from "./authentication/Login";
import Register from "./authentication/Register";
import UserPage from "./UserPage";

const Body = (props) => {
    return (
        <div>
            <Route path="/" component={Login} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path="/user-page" component={UserPage} exact/>
        </div>
    )
}

export default Body