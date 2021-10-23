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
        dispatch({type: 'LOADING_DATA'});
        fetch("http://localhost:3000/pets")
        .then(resp => resp.json())
        .then(json => dispatch({type: 'ADD_PETS', payload: json}))
    }
}