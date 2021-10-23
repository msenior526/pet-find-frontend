import React, {Component} from "react";
import PetCard from './containers/PetCard';

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
        this.state.pets.map((pet, idx) => {
            debugger
            return <li><PetCard /></li>
        })
    }
    render() {
        return <div>{this.renderPets()}</div>
    }
}

export default Pets;