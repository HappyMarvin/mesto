import Popup from "./Popup";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this.form = this._popup.querySelector('.popup__form');
    this._handleSubmit = handleSubmit;
  }

  open(card) {
    super.open();
    this.card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._listener = ((evt) => {
      evt.preventDefault();
      this._handleSubmit(this.card);
      this.close();
    });
    this.form.addEventListener('submit', this._listener);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this.form.removeEventListener('submit', this._listener)
  }
}