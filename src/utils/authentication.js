import {BASE_AUTH_URL} from "./constants";

const request = (url, options) => {
  return fetch(url, options).then(getResponseData)
}

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const registerUser = (email, password) => {
  return request(`${BASE_AUTH_URL}/signup`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
};

export const authorizeUser = (email, password) => {
  return request(`${BASE_AUTH_URL}/signin`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
}

export const checkUserToken = (token) => {
  return request(`${BASE_AUTH_URL}/users/me`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    });
}