export const setToken = (token) => {
    localStorage.setItem('jwt', token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
    // debugger
}

export const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < thirtyMinutes) {
      return localStorage.getItem("jwt");
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
                // console.log(resp.headers.set('Authorization'))
                // setToken(resp.headers.set("Authorization"));
                return resp
                .json()
                .then((userJson) => {
                    console.log(userJson)
                    setToken(userJson.jwt)
                        dispatch({ type: 'AUTHENTICATED', payload: userJson })
                    });
            } else {
                return resp.json().then((errors) => {
                    dispatch({ type: 'NOT_AUTHENTICATED' });
                    return Promise.reject(errors);
                });
            }
        })
        .catch(err => console.log(err));
    }
}

export const checkAuth = () => {
    return (dispatch) => {
      return fetch("http://localhost:3000/api/v1/profile", {
        headers: {
            "Access-Control-Allow-Headers": 'Authorization',
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
          'Accept': "application/json",
          "Content-Type": "application/json"
        }
      }).then((resp) => {
        //   debugger
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

export const logoutUser = () => {
    return dispatch => {
        return fetch('http://localhost:3000/logout', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Authorization',
                'Authorization': `Bearer ${getToken()}`
            }
        }).then(resp => {
            if (resp.ok) {
                resp.json()
                .then(json => console.log(json))
            }
        })
    }
}