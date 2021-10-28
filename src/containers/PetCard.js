import React, { Component } from "react";
import {connect} from 'react-redux';


class PetCard extends Component {
    confirmUser = this.props.currentUser.user.username === this.props.owner.username;

    handleClick = e => {

    }

    render() {
        return (
            <li>
                <h5>{this.props.name}</h5>
                <p>{this.props.age}</p>
                <p>{this.props.species}</p>
                <p>{this.props.gender}</p>
                {this.confirmUser ? <button onClick={this.handleClick}>delete pet</button> : null}
            </li>)}
}
export default connect()(PetCard);