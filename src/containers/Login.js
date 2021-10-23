import React, {Component} from 'react';

class Login extends Component {
    state = {
        username: ''
    }

    handleChange = e => {
    
    }

    render() {
        return (
            <form>
                <label for='username'>USERNAME</label>
                <input 
                type='text' 
                name='username' 
                value={this.state.username}
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