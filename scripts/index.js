let profile = document.querySelector('.profile')
let profilePopup = document.querySelector('.popup_profile');
const newPlacePopup = document.querySelector('.popup_new-place');
let profileButtonEdit = profile.querySelector('.profile__edit');
const profileButtonAdd = profile.querySelector('.profile__add');
let profilePopupClose = document.querySelector('.popup__close_profile');
let placePopupClose = document.querySelector('.popup__close_new-place');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
let inputProfileName = profilePopup.querySelector('.popup__text-input_name');
let inputProfileDescription = profilePopup.querySelector('.popup__text-input_description');
let profilePopupForm = profilePopup.querySelector('.popup__form');

function openPopup(popup) {
  popup.classList.add('popup_show');
}

function openProfilePopup () {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
  openPopup(profilePopup);
}

function closePopup (popup) {
  popup.classList.remove('popup_show');
}

function submitProfilePopup (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;
  closePopup(profilePopup);
}

profileButtonEdit.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', () => closePopup(profilePopup));
profilePopupForm.addEventListener('submit', submitProfilePopup);
profileButtonAdd.addEventListener('click', () => openPopup(newPlacePopup));
placePopupClose.addEventListener('click', () => closePopup(newPlacePopup));
