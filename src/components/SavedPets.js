import React, {Component} from "react";
import PetCard from "../containers/PetCard";

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

export default SavedPets;