import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label for='email'>email</label>
                <input 
                type='text' 
                name='email' 
                value={this.state.email}
                onChange={this.handleChange}
                ></input>
                <label for='password'>PASSWORD</label>
                <input type='password' 
                name='password' 
                value={this.state.password}
                onChange={this.handleChange}
                ></input>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: userInfo => dispatch(loginUser(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(Login);