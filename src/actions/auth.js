export const setToken = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
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
