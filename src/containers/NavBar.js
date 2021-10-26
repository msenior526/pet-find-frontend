import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/pets'>
                    All Pets
                </NavLink>
                <NavLink to='/signup'>
                    Signup
                </NavLink>
                <NavLink to='/profile'>
                    Profile
                </NavLink>
            </div>
        )
    }
}

export default Navbar;