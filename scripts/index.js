const cardTemplate = document.querySelector('#card-template').content;
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

function createCard(name, source) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');

  card.querySelector('.card__title').textContent = name;
  cardImage.src = source;
  cardImage.alt = name;

  card.querySelector('.card__delete')
    .addEventListener('click', evt => {
      deleteCard(card);
    })
  card.querySelector('.card__like')
    .addEventListener('click', evt => {
      switchLike(evt.target);
    })
  cardImage.addEventListener('click', evt => {
      openImagePopup(card);
    })
  return card;
}

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
}

function switchLike(card) {
  card.classList.toggle('card__like_active');
}

function deleteCard(card) {
  card.remove();
}

function addCard(card) {
  galleryList.prepend(card);
}

function addArrayCards(arrayCards) {
  arrayCards.reverse().forEach(item => addCard(createCard(item.name, item.link)));
}

function submitProfilePopup (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;
  closePopup(profilePopup);
}

function submitPlacePopup (evt) {
  evt.preventDefault();
  addCard(createCard(inputPlaceName.value, inputPlaceLink.value));
  closePopup(newPlacePopup);
  cleanInputs(newPlacePopup);
  resetValidationState (validConfig, evt.target);
}

addArrayCards(initialCards);

profileButtonEdit.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', () => closePopup(profilePopup));
profilePopupForm.addEventListener('submit', submitProfilePopup);

profileButtonAdd.addEventListener('click', () => openPopup(newPlacePopup));
placePopupClose.addEventListener('click', () => {
  closePopup(newPlacePopup);
  cleanInputs(newPlacePopup);
});
placePopupForm.addEventListener('submit', submitPlacePopup);

closeImagePopup.addEventListener('click', () => closePopup(imagePopup));