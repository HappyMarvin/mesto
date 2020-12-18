export default class FormValidator {
  constructor(validConfig, formElement) {
    this._validConfig = validConfig;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(validConfig.inputSelector));
    this._buttonElement = formElement.querySelector(validConfig.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector('#' + inputElement.id + this._validConfig.errorIdPostfix);
    inputElement.classList.add(this._validConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validConfig.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector('#' + inputElement.id + this._validConfig.errorIdPostfix);
    inputElement.classList.remove(this._validConfig.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._validConfig.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._validConfig.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._validConfig.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
    this._formElement.addEventListener('closePopup', () => {
      this._resetValidationState();
    })
  }

  _resetValidationState() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    })
    this._toggleButtonState();
  }

  enableValidation () {
    this._setEventListeners();
  }
}