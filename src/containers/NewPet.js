import React, {Component} from "react";
import {connect} from 'react-redux';
import {addPet} from '../actions/PetActions';

class NewPet extends Component {
    state = {
        name: '',
        age: '',
        species: '',
        gender: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addPet(this.state)
        this.setState({
            name: '',
            age: '',
            species: '',
            gender: ''
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state))
    }

    renderGender = () => {
        const genders = ['Female', 'Male'];
        return (
            <select name='gender' value={this.state.gender} onChange={this.handleChange}>
                {genders.map((gender, idx) => {
                    return <option key ={idx} value={gender} >{gender}</option>
                })}
            </select>
        )
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
                <input type='number' name='age' value={this.state.age} onChange={this.handleChange}></input>
                <input type='text' name='species' value={this.state.species} onChange={this.handleChange}></input>
                {this.renderGender()}
                <input type='submit'></input>
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