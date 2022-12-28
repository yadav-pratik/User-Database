import React from "react";
import { useSelector } from "react-redux";

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
                        Register
                    </div>
                )
            }
        </div>
    )
}

export default NavBar