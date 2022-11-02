import {BASE_AUTH_URL} from "../utils/constants";

export const registerUser = (email, password) => {
  return fetch(`${BASE_AUTH_URL}/signup`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};

export const authorizeUser = (email, password) => {
  return fetch(`${BASE_AUTH_URL}/signin`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
    .then(res => {
      if(res.user) {
        localStorage.setItem('token', res.token);
        return res;
      }
    })
    .catch(e => console.log(e));
}

export const checkUserToken = (token) => {
  return fetch(`${BASE_AUTH_URL}/users/me`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
}