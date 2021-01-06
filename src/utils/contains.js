const validConfig = {
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__text-input_type_error',
  errorClass: 'popup__error_show',
  errorIdPostfix: '-error'
}

const profileButtonEdit = document.querySelector('.profile__edit');
const profileButtonAdd = document.querySelector('.profile__add');
const addAvatarButton = document.querySelector('.profile__edit-avatar');


export { validConfig, profileButtonAdd, profileButtonEdit, addAvatarButton}