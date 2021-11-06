import React, {Component} from "react";
import PetCard from "../containers/PetCard";
import {connect} from 'react-redux';
import { fetchSavedPets } from "../actions/PetActions";

class SavedPets extends Component {
    componentDidMount = () => {
        this.props.fetchSavedPets();
    }

    renderPets = () => {
        if (this.props.loggedIn === true) {
            // debugger
            return this.props.currentUser.pets_saved.map((pet, idx) => {
                return <PetCard key={idx} {...pet} currentUser={this.props.currentUser}
                    loggedIn={this.props.loggedIn}/>
            })
        } else {return null}
    }

    render() {
        return (
            <div>
                {this.renderPets()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authReducer.currentUser.user,
        savedPets: state.savedPetReducer.savedPets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSavedPets: () => dispatch(fetchSavedPets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPets);