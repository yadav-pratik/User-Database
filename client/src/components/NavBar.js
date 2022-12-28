import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { toggleIsLogged } from "../actions/isLoggedActions";
import { logoutUser } from "../actions/userActions";

const NavBar = (props) => {

    const dispatch = useDispatch()

    const isLogged = useSelector((state)=> {
        return state.isLogged
    })

    const user = useSelector((state)=>{
        return state.user
    })

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(logoutUser())
        dispatch(toggleIsLogged())
        props.history.push('/')
    }

    return (
        <div>
            <h1>Users Portal</h1>
            {isLogged ? (
                    <div>
                        <span>Welcome {user.name}</span>
                        <button onClick={handleLogout}>Logout</button>
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