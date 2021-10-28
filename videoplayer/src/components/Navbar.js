import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div>
                <nav>
                    <div className="nav-wrapper" style={{background:"#6200EE"}}>
                    <NavLink to ="/" className="brand-logo">Logo</NavLink>
                    <ul id="nav-mobile" className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                       
                    </ul>
                    </div>
                </nav>

        </div>

    )


}

export default Navbar
