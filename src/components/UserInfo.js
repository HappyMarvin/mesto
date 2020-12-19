class UserInfo {
  constructor(selectorUserName, selectorUserDescription) {
    this._name = document.querySelector(selectorUserName);
    this._description = document.querySelector(selectorUserDescription);
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
  }
}

export {UserInfo}