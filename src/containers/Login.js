import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <form>
                <input type='text' value={this.state.username}></input>
                <input type='password' value={this.state.password}></input>
            </form>
        )
    }
}

export default Login;