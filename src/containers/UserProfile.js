import React from 'react';
import { connect } from 'react-redux';

const UserProfile = props => (
    <div>
        <h2>{props.currentUser.name}</h2>
        <h4>Click to add new pet</h4>
    </div>
)

const mapStateToProps = (state) => {
 return {
     currentUser: state.authReducer.currentUser.user
 }
}

export default connect(mapStateToProps)(UserProfile);