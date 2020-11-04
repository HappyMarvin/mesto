let profile = document.querySelector('.profile')
let profilePopup = document.querySelector('.popup_profile');
let profileButtonEdit = profile.querySelector('.profile__edit');
let profilePopupClose = document.querySelector('.popup__close_profile');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
let inputProfileName = profilePopup.querySelector('.popup__text-input_name');
let inputProfileDescription = profilePopup.querySelector('.popup__text-input_description');
let profilePopupForm = profilePopup.querySelector('.popup__form');

function openProfilePopup () {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
  profilePopup.classList.add('popup_show');
}

function closePopup () {
  this.classList.remove('popup_show');
}

function submitProfilePopup (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;
  closePopup.bind(profilePopup)();
}

profileButtonEdit.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', closePopup.bind(profilePopup));
profilePopupForm.addEventListener('submit', submitProfilePopup);