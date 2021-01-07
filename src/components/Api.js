export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
      if (res.ok) return res.json()
      return Promise.reject(new Error(`Ошибка: ${res.status}`))
  }

  getUserData() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res)
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
        return this._getResponseData(res)
      })
  }

  getInitialCards () {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res)
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
        return this._getResponseData(res)
      })
  }

  deleteCard(data) {
    return fetch(`${this._baseUrl}cards/${data.id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  switchLike(data, method) {
    return fetch(`${this._baseUrl}cards/likes/${data.id}`, {
      method: method,
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  addAvatar(link) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        "avatar": link
      })
    })
      .then(res => {
        return this._getResponseData(res)
      })
      .catch(e => console.error(e.message))
  }
}