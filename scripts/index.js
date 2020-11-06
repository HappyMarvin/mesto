const profile = document.querySelector('.profile')
const profilePopup = document.querySelector('.popup_profile');
const profileButtonEdit = profile.querySelector('.profile__edit');
const profilePopupClose = profilePopup.querySelector('.popup__close_profile');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const inputProfileName = profilePopup.querySelector('.popup__text-input_name');
const inputProfileDescription = profilePopup.querySelector('.popup__text-input_description');
const profilePopupForm = profilePopup.querySelector('.popup__form_profile');
const cardTemplate = document.querySelector('#card-template').content;
const galleryList = document.querySelector('.gallery__list');
const profileButtonAdd = profile.querySelector('.profile__add');
const placePopupClose = document.querySelector('.popup__close_new-place');
const newPlacePopup = document.querySelector('.popup_new-place');


const initialCards = [
  {
    name: 'Ямал',
    link: 'http://sikhirtya.ru/mesto/img/gal-1.jpg'
  },
  {
    name: 'Ямальская тундра',
    link: 'http://sikhirtya.ru/mesto/img/gal-2.jpg'
  },
  {
    name: 'Башня Врангеля',
    link: 'http://sikhirtya.ru/mesto/img/gal-3.jpg'
  },
  {
    name: 'Великий Новгород',
    link: 'http://sikhirtya.ru/mesto/img/gal-4.jpg'
  },
  {
    name: 'Волга',
    link: 'http://sikhirtya.ru/mesto/img/gal-5.jpg'
  },
  {
    name: 'Уральские горы',
    link: 'http://sikhirtya.ru/mesto/img/gal-6.jpg'
  }
];

function createCard(name, source) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__image').src = source;
  card.querySelector('.card__image').alt = name;
  return card;
}

function addArrayCards(arrayCards) {
  arrayCards.forEach(item => galleryList.append(createCard(item.name, item.link)));
}

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

addArrayCards(initialCards);

profileButtonEdit.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', () => closePopup(profilePopup));
profilePopupForm.addEventListener('submit', submitProfilePopup);
profileButtonAdd.addEventListener('click', () => openPopup(newPlacePopup));
placePopupClose.addEventListener('click', () => closePopup(newPlacePopup));
