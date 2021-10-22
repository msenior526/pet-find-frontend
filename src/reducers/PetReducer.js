export function PetReducer(state = {
    pets: []
}, action) {
    switch(action.type) {
        case 'ADD_PET':
            return {...state, pets: [...state.pets, action.pet]};
        default:
            return state
    }
}