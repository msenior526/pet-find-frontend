import React, {Component} from 'react';

class Login extends Component {
    state = {
        username: ''
    }

    render() {
        return (
            <form>
                <label for='username'>USERNAME</label>
                <input type='text' name='username' value={this.state.username}></input>
                <label for='password'>PASSWORD</label>
                <input type='password' name='password' value={this.state.password}></input>
            </form>
        )
    }
}

export default Login;