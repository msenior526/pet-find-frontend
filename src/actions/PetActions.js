import { getToken } from "./auth";

export function addPet(pet) {
    return dispatch => {
        dispatch({type: 'LOADIMG_DATA'});
        fetch('http://localhost:3000/pets', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: getToken()
            },
            body: pet
        }).then(resp => {
            if (resp.ok) {
                return resp.json()
                .then(json => console.log(json))
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

export function fetchPets() {
    return dispatch => {
        dispatch({type: 'LOADING_DATA'});
        fetch("http://localhost:3000/pets")
        .then(resp => resp.json())
        .then(json => dispatch({type: 'ADD_PETS', payload: json} ))
    }
}