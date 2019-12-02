import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
            <ul className='NavBar'>
                <li>
                    <NavLink
                        exact to="/"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            'border-radius': '50%',
                            'box-shadow': '3px 3px 3px #a4e8e0',
                        }}
                        >
                        Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/search"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            'border-radius': '50%',
                            'box-shadow': '3px 3px 3px #a4e8e0',
                        }}
                        >
                        Search
                    </NavLink>
                </li>
            </ul>
        )
}
export default Nav;