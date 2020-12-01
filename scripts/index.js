import {Card} from './Card.js';
import {FormValidator} from "./FormValidator.js";
import {initialCards} from './initial-cards.js'
import {validConfig} from "./valid-config.js";

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
const newPlacePopup = document.querySelector('.popup_new-place');
const placePopupForm = newPlacePopup.querySelector('.popup__form_place');
const placePopupClose = newPlacePopup.querySelector('.popup__close_new-place');
const inputPlaceLink = newPlacePopup.querySelector('.popup__text-input_place-link');
const inputPlaceName = newPlacePopup.querySelector('.popup__text-input_place-name');
//image-popup
const imagePopup = document.querySelector('.popup_image');
const closeImagePopup = imagePopup.querySelector('.popup__close_image');
const imagePopupTitle = imagePopup.querySelector('.popup__image-title');
const imagePopupImage = imagePopup.querySelector('.popup__image');

const eventClosePopup = new CustomEvent('closePopup');

function closeClickListener (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
    cleanInputs(evt.target);
  }
}

function closeEscListener (evt) {
  const popup = document.querySelector('.popup_show');
  if (evt.key == 'Escape') {
    closePopup(popup);
    cleanInputs(popup);
  }
}

function openPopup(popup) {
  popup.addEventListener('mousedown', closeClickListener);
  document.addEventListener('keydown', closeEscListener);
  popup.classList.add('popup_show');
  popup.classList.add('popup_show');
}

function openProfilePopup () {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
  openPopup(profilePopup);
}

function openImagePopup (card) {
  const cardTitle = card.querySelector('.card__title').textContent;
  imagePopupTitle.textContent = cardTitle;
  imagePopupImage.src = card.querySelector('.card__image').src;
  imagePopupImage.alt = `${cardTitle} - полный размер`;
  openPopup(imagePopup);
}

function cleanInputs (popup) {
  popup.querySelectorAll('input').forEach(input => input.value = '');
}

function closePopup (popup) {
  popup.removeEventListener('mousedown', closeClickListener);
  document.removeEventListener('keydown', closeEscListener);
  popup.classList.remove('popup_show');
  const popupForm = popup.querySelector('.popup__form');
  if (popupForm) {
    popupForm.dispatchEvent(eventClosePopup);
  }
}

function addCard(card) {
  galleryList.prepend(card);
}

function addArrayCards(arrayCards) {
  arrayCards.reverse().forEach(item => {
    const card = new Card(item.name, item.link, '#card-template');
    addCard(card.createCard());
  });
}

function submitProfilePopup (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;
  closePopup(profilePopup);
}

function submitPlacePopup (evt) {
  evt.preventDefault();
  const card = new Card(inputPlaceName.value, inputPlaceLink.value, '#card-template');
  addCard(card.createCard());
  closePopup(newPlacePopup);
  cleanInputs(newPlacePopup);
}

addArrayCards(initialCards);

profileButtonEdit.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', () => {
  closePopup(profilePopup)
});
profilePopupForm.addEventListener('submit', submitProfilePopup);

profileButtonAdd.addEventListener('click', () => openPopup(newPlacePopup));
placePopupClose.addEventListener('click', () => {
  closePopup(newPlacePopup);
  cleanInputs(newPlacePopup);
});
placePopupForm.addEventListener('submit', submitPlacePopup);

closeImagePopup.addEventListener('click', () => closePopup(imagePopup));

const newPlacePopupValid = new FormValidator(validConfig, placePopupForm);
const profilePopupValid = new FormValidator(validConfig, profilePopupForm);

newPlacePopupValid.enableValidation();
profilePopupValid.enableValidation();

export {openImagePopup}
