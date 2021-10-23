import React, {Component} from "react";
import { PetCard }from '../containers/PetCard';

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

export default Pets;