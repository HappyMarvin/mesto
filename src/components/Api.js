export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserData() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
      .then((result) => {
        return result;
      });
  }

  setUserData(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
      .then((result) => {
        return result;
      });
  }

  getInitialCards () {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
      .then((result) => {
        return result;
      });
  }

  addCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
      .then((result) => {
        return result;
      });
  }
}