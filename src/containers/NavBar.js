import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { checkAuth } from '../actions/auth';

class Navbar extends Component {
    componentDidMount() {
        this.props.checkAuth();
    }

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
                <NavLink to='/login'>
                    Login
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        authChecked: state.authReducer.authChecked,
        loggedIn: state.authReducer.loggedIn,
        currentUser: state.authReducer.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkAuth: () => dispatch(checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);