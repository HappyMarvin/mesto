export default class UserInfo {
  constructor(selectorUserName, selectorUserDescription, selectorAvatar) {
    this._name = document.querySelector(selectorUserName);
    this._description = document.querySelector(selectorUserDescription);
    this._avatar = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    }
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.description;
    this._avatar.src = data.avatar;
  }

  setUserAvatar(src) {
    this._avatar.src = src;
  }
}