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
//image-popup
const imagePopup = document.querySelector('.popup_image');
const closeImagePopup = imagePopup.querySelector('.popup__close_image');
const imagePopupTitle = imagePopup.querySelector('.popup__image-title');
const imagePopupImage = imagePopup.querySelector('.popup__image');

const initialCards = [
  {
    name: 'Ямал',
    link: 'https://i.ibb.co/4pbMPYn/gal-1.jpg'
  },
  {
    name: 'Ямальская тундра',
    link: 'https://i.ibb.co/cCNzL1d/gal-2.jpg'
  },
  {
    name: 'Башня Врангеля',
    link: 'https://i.ibb.co/BBJ43ps/gal-3.jpg'
  },
  {
    name: 'Великий Новгород',
    link: 'https://i.ibb.co/WW7FRXj/gal-4.jpg'
  },
  {
    name: 'Волга',
    link: 'https://i.ibb.co/1R2cCRP/gal-5.jpg'
  },
  {
    name: 'Уральские горы',
    link: 'https://i.ibb.co/frRCtJ3/gal-6.jpg'
  }
];

function createCard(name, source) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  card.querySelector('.card__title').textContent = name;
  cardImage.src = source;
  cardImage.alt = name;
  card.querySelector('.card__delete')
    .addEventListener('click', function () {
      deleteCard(this.closest('.card'));
    })
  card.querySelector('.card__like')
    .addEventListener('click', function () {
      switchLike(this);
    })
  cardImage.addEventListener('click', function () {
      openImagePopup(this.closest('.card'));
    })
  return card;
}

function openPopup(popup) {
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
  const inputPlaceLink = document.querySelector('.popup__text-input_place-link');
  const inputPlaceName = document.querySelector('.popup__text-input_place-name');
  if (!inputPlaceName.value || inputPlaceName.value === 'Введите имя!') {
    return inputPlaceName.value = 'Введите имя!';
  } else if (!inputPlaceLink.value || inputPlaceLink.value === 'Введите ссылку!') {
    return inputPlaceLink.value = 'Введите ссылку!';
  }
  addCard(createCard(inputPlaceName.value, inputPlaceLink.value));
  closePopup(newPlacePopup);
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