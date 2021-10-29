import React, { Component } from "react";
import {connect} from 'react-redux';
import {deletePet} from "../actions/PetActions";


class PetCard extends Component {

    confirmUser = () => {
        if (this.props.loggedIn) {
            return this.props.currentUser.user.username === this.props.owner.username;
        } else { return null }
    }
    
    handleClick = e => {
        this.props.deletePet(this.props.pet.id)
    }

    render() {
        return (
            <li>
                <h5>{this.props.name}</h5>
                <p>{this.props.age}</p>
                <p>{this.props.species}</p>
                <p>{this.props.gender}</p>
                {this.confirmUser() ? <button onClick={this.handleClick}>delete pet</button> : null}
            </li>)}
}

const mapDispatchToProps = dispatch => {
    return {
        deletePet: pet => dispatch(deletePet(pet)) 
    }
}

export default connect(null, mapDispatchToProps)(PetCard);