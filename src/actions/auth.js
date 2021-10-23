export const setToken = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
}

export const getToken = () => {
    localStorage.getItem("token")
}

export const loginUser = (userCredentials) => {
    return dispatch => {
        return fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: userCredentials })
        })
        .then((resp) => {
            if (resp.ok) {
                setToken(resp.headers.get("Authorization"));
                return resp
                    .json()
                    .then((userJson) =>
                        dispatch({ type: 'AUTHENTICATED', payload: userJson })
                    );
            } else {
                return resp.json().then((errors) => {
                    dispatch({ type: 'NOT_AUTHENTICATED' });
                    return Promise.reject(errors);
                });
            }
        });
    }
}

export const signupUser = (userCredentials) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user: userCredentials})
        })
        .then(resp => {
            if (resp.ok) {
                setToken(resp.headers.get("Authorization"));
                return resp.json().then((userJson) => {
                            dispatch({ type: 'AUTHENTICATED', payload: userJson })
                        }
                    );
            } else {
                return resp.json().then((errors) => {
                    dispatch({ type: 'NOT_AUTHENTICATED' });
                    return Promise.reject(errors);
                });
            }
        })
    };
}
