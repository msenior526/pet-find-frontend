import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { checkAuth } from '../actions/auth';
import { logoutUser } from '../actions/auth';
import {LogoutButton} from '../components/LogoutButton';

class Navbar extends Component {
    componentDidMount() {
        this.props.checkAuth();
    }

     renderLoggedInLinks = () => {
        if (this.props.authChecked) {
            return this.props.loggedIn ? (
                <>
                <NavLink to='/profile'
                exact>
                    Profile
                </NavLink>
                <LogoutButton logout={this.props.logoutUser}/>
                </>
            ) : (
                <>
                <NavLink to='/signup'
                exact>
                    Signup
                </NavLink>
                
                <NavLink to='/login'
                exact>
                    Login
                </NavLink>
                </>
            )
        }
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
                {this.renderLoggedInLinks()}
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
        checkAuth: () => dispatch(checkAuth()),
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);