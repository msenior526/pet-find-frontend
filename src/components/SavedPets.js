import React, {Component} from "react";
import PetCard from "../containers/PetCard";
import {connect} from 'react-redux';

class SavedPets extends Component {
    componentDidMount = () => {
        this.props.fetchSavedPets();
    }

    render() {
        return (
            <div>
                <PetCard />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPets);