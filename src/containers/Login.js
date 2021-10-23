import React, {Component} from 'react';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form>
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

export default Login;