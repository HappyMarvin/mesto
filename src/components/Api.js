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
      .catch(e => console.error(e.message))
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
      .catch(e => console.error(e.message))
  }

  getInitialCards () {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
      .catch(e => console.error(e.message))
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
      .catch(e => console.error(e.message))
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
      .catch(e => console.error(e.message))
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
      .catch(e => console.error(e.message))
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
        if (res.ok) return res.json()
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
      })
      .catch(e => console.error(e.message))
  }
}