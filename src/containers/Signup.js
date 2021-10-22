import React, {Component} from 'react';

class Signup extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        location: ''
    }

    render() {
        return (
            <div>
                <form>
                    <label for='name'>NAME</label>
                    <input type='text' value={this.state.name}></input>
                    <label for='email'>EMAIL</label>
                    <input type='email' value={this.state.email}></input>
                    <label for='username'>USERNAME</label>
                    <input type='text' value={this.state.username}></input>
                    <label for='location'>LOCATION</label>
                    <input type='text' value={this.state.location}></input>
                    <label for='password'>PASSWORD</label>
                    <input type='password'></input>
                </form>
            </div>
        )
    }
}

export default Signup;