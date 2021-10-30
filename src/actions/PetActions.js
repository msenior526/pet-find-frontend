import { getToken } from "./auth";

export function addPet(pet) {
    return dispatch => {
        dispatch({type: 'LOADING_DATA'});
        fetch('http://localhost:3000/pets', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Headers": 'Authorization',
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${getToken()}`
            },
            body: JSON.stringify({ pet: pet })
        }).then(resp => {
            if (resp.ok) {
                return resp.json()
                .then(json => {
                    dispatch({type: 'ADD_PET', payload: json.pet
                })})
            } else {
                return resp.json()
                .then((errors) => {
                    dispatch({type: 'ERROR', payload: errors})
                    return Promise.reject(errors);
                });
            }
        });
    }
}

export function deletePet(petId) {
    return dispatch => {
        dispatch({type: 'LOADING_DATA'});
        fetch(`http://localhost:3000/pets/${petId}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                "Access-Control-Allow-Headers": 'Authorization',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${getToken()}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json()
                .then(json => {
                    dispatch({type: 'DELETE_PET', payload: petId})
                })
            }
        })
    }
}

export function fetchPets() {
    return dispatch => {
        dispatch({type: 'LOADING_DATA'});
        fetch("http://localhost:3000/pets")
        .then(resp => resp.json())
        .then(json => dispatch({type: 'ADD_PETS', payload: json} ))
    }
}

export function fetchSavedPets() {
    return dispatch => {
        dispatch({type: 'LOADING_DATA'});
            fetch('http://localhost:3000/saved_pets', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    "Access-Control-Allow-Headers": 'Authorization',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${getToken()}`
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json()
                    .then(json => {
                        console.log(json)
                        // dispatch({type: 'ALL_SAVED_PETS', payload: json})
                    })
                }
            })
    }
}