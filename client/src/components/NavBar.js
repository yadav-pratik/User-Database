import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const NavBar = (props) => {
    const isLogged = useSelector((state)=> {
        return state.isLogged
    })

    return (
        <div>
            <h1>Users Portal</h1>
            {isLogged ? (
                    <div>
                        <span>Welcome user</span>
                        <span>Logout</span>
                    </div>
                ) : (
                    <div>
                        {props.location.pathname === '/' ? (
                                <span>New here? <Link to="/register">Register</Link></span>
                            ) : (
                                props.location.pathname === '/register' && <span>Already a User? <Link to="/">Login</Link></span>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default withRouter(NavBar)