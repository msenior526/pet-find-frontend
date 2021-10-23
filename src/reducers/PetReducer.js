export function PetReducer(state = {
    pets: [],
    loading: false
}, action) {
    switch(action.type) {

        case 'LOADING_DATA': 
            return {...state, loading: true}
        case 'ADD_PET':
            return {...state, pets: [...state.pets, action.pet]};
        default:
            return state
    }
}