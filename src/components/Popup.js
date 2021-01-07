export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this.close = this.close.bind(this);
    this._handleClickClose = this._handleClickClose.bind(this);
  }

  open () {
    this._popup.classList.add('popup_show');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close () {
    this._popup.classList.remove('popup_show');
    document.removeEventListener('keydown', this._handleEscClose);
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

  setEventListeners () {
    this._popup.addEventListener('mousedown', this._handleClickClose);
    this._closeButton.addEventListener('click', this.close);
  }
}