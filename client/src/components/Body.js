import React from "react";
import { Route } from "react-router-dom";

import Register from "./authentication/Register";

const Body = (props) => {
    return (
        <div>
            <Route path="/" component={Register} exact/>
        </div>
    )
}

export default Body