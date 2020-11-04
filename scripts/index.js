const profile = document.querySelector('.profile')
const profilePopup = document.querySelector('.profile-popup');
const profileButtonEdit = profile.querySelector('.profile__edit');
const profilePopupClose = profilePopup.querySelector('.profile-popup__close');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const inputProfileName = profilePopup.querySelector('.profile-popup__text-input_name');
const inputProfileDescription = profilePopup.querySelector('.profile-popup__text-input_description');
const profilePopupForm = profilePopup.querySelector('.profile-popup__form');
const cardTemplate = document.querySelector('#card-template').content;
const galleryList = document.querySelector('.gallery__list');


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

function openProfilePopup () {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
  profilePopup.classList.add('profile-popup_show');
}

function closeProfilePopup () {
  profilePopup.classList.remove('profile-popup_show');
}

function submitProfilePopup (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;
  closeProfilePopup ();
}

addArrayCards(initialCards);

profileButtonEdit.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', closeProfilePopup);
profilePopupForm.addEventListener('submit', submitProfilePopup);