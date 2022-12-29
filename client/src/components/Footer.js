import React from "react";

const Footer = (props) => {
    return (
        <div 
            className="d-flex justify-content-center align-items-center fixed-bottom"
            style={{backgroundColor : 'black', color : 'white', height : '10vh', minHeight : '20px'}}
        >
            <p>Users Portal © 2022</p>
        </div>
    )
}

export default Footer