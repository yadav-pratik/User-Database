import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import Login from "./authentication/Login";
import Register from "./authentication/Register";
import UserPage from "./user/UserPage";

const Body = (props) => {
    const isLogged = useSelector((state)=>{
        return state.isLogged
    })
    return (
        <div>
            <Route path="/" component={isLogged ? UserPage : Login} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path="/user-page" component={UserPage} exact/>
        </div>
    )
}

export default Body