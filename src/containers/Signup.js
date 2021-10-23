import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signupUser} from '../actions/auth';

class Signup extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        location: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            name: '',
            username: '',
            email: '',
            location: ''
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>NAME</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>

                    <label for='email'>EMAIL</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange}></input>
                    
                    <label for='username'>USERNAME</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange}></input>
                    
                    <label for='location'>LOCATION</label>
                    <input type='text' name='location' value={this.state.location} onChange={this.handleChange}></input>
                    
                    <label for='password'>PASSWORD</label>
                    <input type='password' name='password' onChange={this.handleChange}></input>

                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signupUser: userCreds => dispatch(signupUser(userCreds))
    }
}

export default connect(null, mapDispatchToProps)(Signup);