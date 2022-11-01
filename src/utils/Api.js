class Api {
  constructor({ url, headers }) {
    this.url = url;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData)
  }

  getUsersInfo() {
   return this._request(this.url + '/users/me', {
          headers: this._headers,
        });
  }

  getInitCards() {
    return this._request(this.url + '/cards', {
      headers: this._headers,
    });
  }

  getInitialAppState() {
    return Promise.all([this.getUsersInfo(), this.getInitCards()])
  }

  patchProfile(name, about) {
    return this._request(this.url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      }),
    });
  }

  postNewCard(name, link) {
    return this._request(this.url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      }),
    });
  }

  deleteCard(id) {
    return this._request(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  toggleLikeCard(id, method) {
    return this._request(`${this.url}/cards/${id}/likes`, {
      method: `${method ? 'PUT' : 'DELETE'}`,
      headers: this._headers,
    });
  }

  patchAvatar(avatar) {
    return this._request(this.url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      }),
    });
  }

}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: 'aaaf8a01-66a7-402b-b4c7-63b2ef616c45',
    'Content-Type': 'application/json'
  }
});