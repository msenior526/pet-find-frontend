import React, {Component} from "react";
import { PetCard }from '../containers/PetCard';
import {connect} from 'react-redux';
import { fetchPets } from "../actions/PetActions";

class Pets extends Component {

    componentDidMount() {
        return this.props.fetchPets()
    }

    renderPets = () => {
        return this.props.pets.map((pet, idx) => {
            return <PetCard key={idx} {...pet}/>
        })
    }

    render() {
        return <ol>{this.renderPets()}</ol>
    }
}

const mapStateToProps = state => {
    return {
        pets: state.PetReducer.pets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPets: () => dispatch(fetchPets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pets);