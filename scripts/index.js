let profile = document.querySelector('.profile')
let profilePopup = document.querySelector('.profile-popup');
let profileButtonEdit = profile.querySelector('.profile__edit');
let profilePopupClose = profilePopup.querySelector('.profile-popup__close');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
let inputProfileName = profilePopup.querySelector('.profile-popup__text-input_name');
let inputProfileDescription = profilePopup.querySelector('.profile-popup__text-input_description');
let profilePopupForm = profilePopup.querySelector('.profile-popup__form');

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

profileButtonEdit.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', closeProfilePopup);
profilePopupForm.addEventListener('submit', submitProfilePopup);