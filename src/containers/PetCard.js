import React, { Component } from "react";
import {connect} from 'react-redux';
import {deletePet} from "../actions/PetActions";
import {addFavorite} from "../actions/PetActions";
import {deleteFavorite} from "../actions/PetActions";


class PetCard extends Component {

    confirmUser = () => {
        if (this.props.loggedIn) {
            // debugger
            return this.props.currentUser.id === this.props.user_id;
        } else { return null }
    }

    handleDelete = e => {
        this.props.deletePet(this.props.id)
    }
    
    handleFavorite = e => {
        if (e.target.textContent === 'remove from favorites') {
            const fav = this.props.currentUser.saved_pets.find(pet => pet.pet_id === this.props.id)
            this.props.deleteFavorite(fav.id)
            return e.target.textContent = "add to favorites"
        } else if (e.target.textContent === 'add to favorites') {
            this.props.addFavorite(this.props.id);
            return e.target.textContent = 'remove from favorites'
        }
    }

    favoriteButtonText = () => {
        if (this.props.loggedIn) {
            // debugger
            const ids = this.props.currentUser.pets_saved.map(pet => {
                return pet.id
            })
            return ids.includes(this.props.id) ? 
            ("remove from favorites") : ("add to favorites")
        } else {return "add to favorites"}
    }

    render() {
        // debugger
        return (
            <li>
                <h5>{this.props.name}</h5>
                <p>{this.props.age}</p>
                <p>{this.props.species}</p>
                <p>{this.props.gender}</p>
                <button onClick={this.handleFavorite}>{this.favoriteButtonText()}</button>
                {this.confirmUser() ? <button onClick={this.handleDelete}>delete pet</button> : null}
            </li>)}
}

const mapDispatchToProps = dispatch => {
    return {
        deletePet: pet => dispatch(deletePet(pet)),
        deleteFavorite: pet => dispatch(deleteFavorite(pet)),
        addFavorite: pet => dispatch(addFavorite(pet))
    }
}

export default connect(null, mapDispatchToProps)(PetCard);