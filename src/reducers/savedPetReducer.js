export function savedPetReducer(state = {
    savedPets: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'GET_PETS': 
            return {savedPets: [...state.savedPets, action.payload]}
        default: 
            return state;
    }
}