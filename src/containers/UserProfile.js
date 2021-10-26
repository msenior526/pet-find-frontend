import React from 'react';
import { connect } from 'react-redux';
import NewPet from './NewPet';

const UserProfile = props => {
    return (
    <div>
        <h2>{props.currentUser.name}</h2>
        <NewPet />
    </div>
)}

const mapStateToProps = (state) => {
 return {
     currentUser: state.authReducer.currentUser.user
 }
}

export default connect(mapStateToProps)(UserProfile);