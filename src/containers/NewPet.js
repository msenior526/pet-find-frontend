import React, {Component} from "react";
import {connect} from 'react-redux';

class NewPet extends Component {
    render() {
        return <div></div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPet: pet => dispatch(addPet(pet))
    }
}

export default connect(null, mapDispatchToProps)(NewPet);