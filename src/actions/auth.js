export const setToken = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
}

export const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < thirtyMinutes) {
      return localStorage.getItem("token");
    }
}

export const loginUser = (userCredentials) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
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

export const checkAuth = () => {
    return (dispatch) => {
      return fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: getToken()
        }
      }).then((resp) => {
        if (resp.ok) {
          return resp
            .json()
            .then((user) => dispatch({ type: 'AUTHENTICATED', payload: user }));
        } else {
            return resp.json()
            .then((errors) => {
                dispatch({ type: 'NOT_AUTHENTICATED' });
                return Promise.reject(errors);
            })
        }
      });
    };
  };

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
