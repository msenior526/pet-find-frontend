import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewPet from './NewPet';

class UserProfile extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.currentUser.name}</h2>
                <NewPet />
            </div>
        )
}}

const mapStateToProps = (state) => {
 return {
     currentUser: state.authReducer.currentUser.user
 }
}

export default connect(mapStateToProps)(UserProfile);