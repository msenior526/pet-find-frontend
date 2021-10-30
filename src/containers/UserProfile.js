import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../actions/auth';
import NewPet from './NewPet';
import { fetchSavedPets }  from '../actions/PetActions';
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
                    <SavedPets pets={this.props.fetchSavedPets()}/>
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
        fetchSavedPets: () => dispatch(fetchSavedPets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);