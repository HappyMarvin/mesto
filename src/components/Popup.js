export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');
  }

  open () {
    this.setEventListeners();
    this._popup.classList.add('popup_show');
  }

  close () {
    this._popup.classList.remove('popup_show');
    this._removeEventListeners();
  }

  _handleEscClose (evt) {
    if (evt.key == 'Escape') {
      this.close();
    }
  }

  _handleClickClose (evt) {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  _removeEventListeners () {
    this._popup.removeEventListener('mousedown', this._handleClickClose);
    document.removeEventListener('keydown', this._handleEscClose);
    this._closeButton.removeEventListener('click', this.close);
  }

  setEventListeners () {
    this.close = this.close.bind(this);
    this._handleClickClose = this._handleClickClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popup.addEventListener('mousedown', this._handleClickClose);
    document.addEventListener('keydown', this._handleEscClose);
    this._closeButton.addEventListener('click', this.close);
  }
}