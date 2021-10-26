import React, {Component} from "react";
import {connect} from 'react-redux';
import {addPet} from '../reducers/PetReducer';

class NewPet extends Component {
    state = {
        name: '',
        age: '',
        species: '',
        gender: ''
    }
    
    render() {
        return (
            <form>

            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPet: pet => dispatch(addPet(pet))
    }
}

export default connect(null, mapDispatchToProps)(NewPet);