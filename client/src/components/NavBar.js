import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { toggleIsLogged } from "../actions/isLoggedActions";

const NavBar = (props) => {

    const dispatch = useDispatch()

    const isLogged = useSelector((state)=> {
        return state.isLogged
    })

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(toggleIsLogged())
        props.history.push('/')
    }

    return (
        <div>
            <h1>Users Portal</h1>
            {isLogged ? (
                    <div>
                        <span>Welcome user</span>
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