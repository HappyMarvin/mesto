import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._inputList = this._popup.querySelectorAll('.popup__text-input');
    this.form = this._popup.querySelector('.popup__form');
    this._handleSubmit = handleSubmit;
    this._eventClosePopup = new CustomEvent('closePopup');
  }

  _getInputValues () {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues (data) {
    Object.keys(data).forEach(name => {
      const input = this.form.querySelector(`input[name=popup-${name}]`)
      input.value = data[name];
    })
  }

  open(data) {
    super.open();
    if (data) {
      this.setInputValues(data);
    }
  }

  close() {
    super.close();
    this.form.reset();
    this.form.dispatchEvent(this._eventClosePopup);
  }

  setEventListeners() {
    super.setEventListeners();
    this._listener = ((evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.close();
    });
    this.form.addEventListener('submit', this._listener);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this.form.removeEventListener('submit', this._listener)
  }
}