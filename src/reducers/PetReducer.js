export function PetReducer(state = {
    pets: [],
    loading: false
}, action) {
    switch(action.type) {
        
        case 'LOADING_DATA': 
        return {...state, loading: true};
        case 'ADD_PETS':
            return {
                pets: action.payload,
                loading: false
            }
        case 'ADD_PET':
            return {...state, pets: [...state.pets, action.payload]};
        case 'DELETE_PET':
            const newPets = state.pets.filter(pet => pet.id !== action.payload)
            return {...state, pets: newPets}
        default:
            return state
    }
}