import './index.css';
import Card from '../components/Card.js';
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { validConfig, initialCards, profileButtonEdit, profileButtonAdd } from "../utils/contains.js";

const userInfo = new UserInfo('.profile__name','.profile__description');
const cardSection = new Section({ items: initialCards, renderer: (name, value) => {
    const card = new Card(name, value, '#card-template', () => {
      popupWithImage.open(card.card);
    });
    cardSection.addItem(card.createCard());
  } }, '.gallery__list')

const popupWithImage = new PopupWithImage('.popup_image');
const popupPlace = new PopupWithForm('.popup_new-place', (data) => {
  cardSection.renderer(data['popup-name'], data['popup-description']);
});
const popupProfile = new PopupWithForm('.popup_profile', (data) => {
  userInfo.setUserInfo({ name: data['popup-name'], description: data['popup-description'] })
});

profileButtonEdit.addEventListener('click', () => popupProfile.open(userInfo.getUserInfo()));
profileButtonAdd.addEventListener('click', () => popupPlace.open());

const newPlacePopupValid = new FormValidator(validConfig, popupPlace.form);
const profilePopupValid = new FormValidator(validConfig, popupProfile.form);

newPlacePopupValid.enableValidation();
profilePopupValid.enableValidation();
cardSection.renderItems();




