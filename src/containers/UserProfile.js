import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../actions/auth';
import NewPet from './NewPet';
import SavedPets from '../components/SavedPets';

class UserProfile extends Component {

    componentDidMount() {
        this.props.checkAuth();
    }

    renderProfile = () => {
        if (this.props.authChecked) {
            return (this.props.loggedIn) ? (
                <>
                <div>
                    <h2>{this.props.currentUser.name}</h2>
                    <SavedPets loggedIn={this.props.loggedIn} currentUser={this.props.currentUser}/>
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
        checkAuth: () => dispatch(checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);