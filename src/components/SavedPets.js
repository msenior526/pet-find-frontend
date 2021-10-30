import React, {Component} from "react";
import PetCard from "../containers/PetCard";
import {connect} from 'react-redux';
import { fetchSavedPets } from "../actions/PetActions";

class SavedPets extends Component {
    componentDidMount = () => {
        // this.props.fetchSavedPets();
    }

    render() {
        return (
            <div>
                <PetCard />
            </div>
        )
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
    return {
        fetchSavedPets: () => dispatch(fetchSavedPets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPets);