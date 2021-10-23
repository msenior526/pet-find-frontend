import React, {Component} from "react";
import { PetCard }from '../containers/PetCard';
import {connect} from 'react-redux';
import { fetchPets } from "../actions/PetActions";

class Pets extends Component {
    state = {
        pets: []
    }

    componentDidMount() {
        return fetch('http://localhost:3000/pets')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                pets: json
            }, () => console.log(this.state))
        })   
    }

    renderPets = () => {
        return this.state.pets.map((pet, idx) => {
            return <PetCard key={idx} {...pet}/>
        })
    }

    render() {
        return <ol>{this.renderPets()}</ol>
    }
}

const mapStateToProps = state => {
    return {
        pets: state.pets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPets: () => dispatch(fetchPets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pets);