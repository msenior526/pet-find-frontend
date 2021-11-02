import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../actions/auth';
import NewPet from './NewPet';
import SavedPets from '../components/SavedPets';
import { logoutUser } from '../actions/auth';

class UserProfile extends Component {

    componentDidMount() {
        this.props.checkAuth();
    }

    handleLogout = () => {
        this.props.logoutUser();
    }
 
    renderProfile = () => {
        if (this.props.authChecked) {
            return (this.props.loggedIn) ? (
                <>
                <div>
                    <h2>{this.props.currentUser.name}</h2>
                    <button onClick={this.handleLogout}>LOGOUT</button>
                    <SavedPets/>
                    <NewPet />
                </div>
                </>
            ) : 
               (<h4>You must be logged in to view </h4> )
        } else {
            return null
        }
    }

    render(){
        return this.renderProfile()
    }
}

const mapStateToProps = (state) => {
 return {
     currentUser: state.authReducer.currentUser.user,
     loggedIn: state.authReducer.loggedIn,
     authChecked: state.authReducer.authChecked
 }
}

const mapDispatchToProps = dispatch => {
    return {
        checkAuth: () => dispatch(checkAuth()),
        logoutUser: userId => dispatch(logoutUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);