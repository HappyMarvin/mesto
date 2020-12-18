import {Card} from './Card.js';
import {FormValidator} from "./FormValidator.js";
import {initialCards} from './initial-cards.js';
import {validConfig} from "./valid-config.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

const galleryList = document.querySelector('.gallery__list');
//profile
const profile = document.querySelector('.profile')
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const profileButtonEdit = profile.querySelector('.profile__edit');
const profileButtonAdd = profile.querySelector('.profile__add');
// profile-popup
const profilePopup = document.querySelector('.popup_profile');
const inputProfileName = profilePopup.querySelector('.popup__text-input_name');
const inputProfileDescription = profilePopup.querySelector('.popup__text-input_description');
const profilePopupForm = profilePopup.querySelector('.popup__form_profile');
const profilePopupClose = profilePopup.querySelector('.popup__close_profile');
// place-popup
// const newPlacePopup = document.querySelector('.popup_new-place');
// const placePopupForm = newPlacePopup.querySelector('.popup__form_place');
// const placePopupClose = newPlacePopup.querySelector('.popup__close_new-place');
// const inputPlaceLink = newPlacePopup.querySelector('.popup__text-input_place-link');
// const inputPlaceName = newPlacePopup.querySelector('.popup__text-input_place-name');

// function closeClickListener (evt) {
//   if (evt.target.classList.contains('popup')) {
//     cleanInputs(evt.target);
//     closePopup(evt.target);
//   }
// }

// function closeEscListener (evt) {
//   const popup = document.querySelector('.popup_show');
//   if (evt.key == 'Escape') {
//     cleanInputs(popup);
//     closePopup(popup);
//   }
// }

// function openImagePopup (card) {
//   const cardTitle = card.querySelector('.card__title').textContent;
//   imagePopupTitle.textContent = cardTitle;
//   imagePopupImage.src = card.querySelector('.card__image').src;
//   imagePopupImage.alt = `${cardTitle} - полный размер`;
//   openPopup(imagePopup);
// }

// function closePopup (popup) {
//   popup.removeEventListener('mousedown', closeClickListener);
//   document.removeEventListener('keydown', closeEscListener);
//   popup.classList.remove('popup_show');
//   const popupForm = popup.querySelector('.popup__form');
//   if (popupForm) {
//     popupForm.dispatchEvent(eventClosePopup);
//   }
// }

// function submitPlacePopup (evt) {
//   evt.preventDefault();
//   createCard(inputPlaceName.value, inputPlaceLink.value);
//   cleanInputs(newPlacePopup);
//   closePopup(newPlacePopup);
// }

// placePopupClose.addEventListener('click', () => {
//   cleanInputs(newPlacePopup);
//   closePopup(newPlacePopup);
// });
// placePopupForm.addEventListener('submit', submitPlacePopup)

const eventClosePopup = new CustomEvent('closePopup');

const popupWithImage = new PopupWithImage('.popup_image');
const popupPlace = new PopupWithForm('.popup_new-place', (data) => {
  createCard(data['popup-name'], data['popup-description']);
});
const popupProfile = new PopupWithForm('.popup_profile', (data) => {
  profileName.textContent = data['popup-name'];
  profileDescription.textContent = data['popup-name'];
});


// function openPopup(popup) {
//   popup.addEventListener('mousedown', closeClickListener);
//   document.addEventListener('keydown', closeEscListener);
//   popup.classList.add('popup_show');
//   popup.classList.add('popup_show');
// }

// function openProfilePopup () {
//   inputProfileName.value = profileName.textContent;
//   inputProfileDescription.value = profileDescription.textContent;
//   openPopup(profilePopup);
// }
//
// function cleanInputs (popup) {
//   popup.querySelectorAll('input').forEach(input => input.value = '');
// }

function addCard(card) {
  galleryList.prepend(card);
}

function addArrayCards(arrayCards) {
  arrayCards.reverse().forEach(item => {
    createCard(item.name, item.link);
  });
}

// function submitProfilePopup (evt) {
//   evt.preventDefault();
//   profileName.textContent = inputProfileName.value;
//   profileDescription.textContent = inputProfileDescription.value;
//   cleanInputs(profilePopup);
//   closePopup(profilePopup);
// }
function createCard(name, value) {
  const card = new Card(name, value, '#card-template', () => {
    popupWithImage.open(card.card);
  });
  addCard(card.createCard());
}

addArrayCards(initialCards);

profileButtonEdit.addEventListener('click', () => popupProfile.open());
// profilePopupClose.addEventListener('click', () => {
//   cleanInputs(profilePopup);
//   closePopup(profilePopup);
// });
// profilePopupForm.addEventListener('submit', submitProfilePopup);

profileButtonAdd.addEventListener('click', () => popupPlace.open());;

const newPlacePopupValid = new FormValidator(validConfig, popupPlace.form);
const profilePopupValid = new FormValidator(validConfig, popupProfile.form);

newPlacePopupValid.enableValidation();
profilePopupValid.enableValidation();




