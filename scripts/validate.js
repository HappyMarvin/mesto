const validConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__text-input_type_error',
  errorClass: 'popup__error_show',
  errorIdPostfix: '-error'
}

function showInputError(validConfig, formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector('#' + inputElement.id + validConfig.errorIdPostfix);
  inputElement.classList.add(validConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validConfig.errorClass);
}

function hideInputError(validConfig, formElement, inputElement) {
  const errorElement = formElement.querySelector('#' + inputElement.id + validConfig.errorIdPostfix);
  inputElement.classList.remove(validConfig.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(validConfig.errorClass);
}

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

function checkInputValidity(validConfig, formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(validConfig, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(validConfig, formElement, inputElement);
  }
}

function toggleButtonState(validConfig, inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validConfig.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validConfig.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function setEventListeners(validConfig, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(validConfig.inputSelector));
  const buttonElement = formElement.querySelector(validConfig.submitButtonSelector);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(validConfig, formElement, inputElement);
      toggleButtonState(validConfig, inputList, buttonElement);
    })
  })
}

function enableValidation(validConfig) {
  const formList = Array.from(document.querySelectorAll(validConfig.formSelector)) ;
  
  formList.forEach(formElement => setEventListeners(validConfig, formElement));
}

function resetValidationState (validConfig, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(validConfig.inputSelector));
  const buttonElement = formElement.querySelector(validConfig.submitButtonSelector);
  inputList.forEach(inputElement => {
    hideInputError(validConfig, formElement, inputElement);
  })
  toggleButtonState(validConfig, inputList, buttonElement);
}

enableValidation(validConfig);