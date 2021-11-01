import React, {Component} from "react";
import PetCard from "../containers/PetCard";
import {connect} from 'react-redux';
import { fetchSavedPets } from "../actions/PetActions";

class SavedPets extends Component {
    componentDidMount = () => {
        this.props.fetchSavedPets();
    }

    renderPets = () => {
        return this.props.savedPets.map((pet, idx) => {
            return <PetCard key={idx} {...pet}/>
        })
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
        savedPets: state.savedPetReducer.savedPets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSavedPets: () => dispatch(fetchSavedPets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPets);