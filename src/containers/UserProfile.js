import React from 'react';
import { connect } from 'react-redux';

const UserProfile = props => (
    <div>{props.currentUser.name}</div>
)

const mapStateToProps = (state) => {
 return {
     currentUser: state.authReducer.currentUser.user
 }
}

export default connect(mapStateToProps)(UserProfile);