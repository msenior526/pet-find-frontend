export function addPet(pet) {
    return {
        type: 'ADD_PET',
        pet: {
            name: pet.name,
            age: pet.age,
            species: pet.species,
            gender: pet.gender
        }
    }
}

export function fetchPets() {
    return dispatch => {
        dispatch({type: 'START_ADDING_PETS'});
    }
}