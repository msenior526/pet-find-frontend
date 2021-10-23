import React, {Component} from 'react';

class Login extends Component {
    state = {
        email: ''
    }

    handleChange = e => {
    
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