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
  }

  getInitialCards () {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
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
  }

  deleteCard(data) {
    return fetch(`${this._baseUrl}cards/${data.id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
  }

  switchLike(data, method) {
    return fetch(`${this._baseUrl}cards/likes/${data.id}`, {
      method: method,
      headers: this._headers
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
  }
}