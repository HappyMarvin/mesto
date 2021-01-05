import './index.css';
import Card from '../components/Card.js';
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { validConfig, profileButtonEdit, profileButtonAdd } from "../utils/contains.js";
import Api from "../components/Api";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19/',
  headers: {
    authorization: '7a0583fa-0284-4573-a326-4d7fa2ed6e73',
    'Content-Type': 'application/json'
  }
})

const userInfo = new UserInfo(
  '.profile__name',
  '.profile__description',
  '.profile__avatar');

const popupWithImage = new PopupWithImage('.popup_image');


const popupProfile = new PopupWithForm('.popup_profile', (data) => {
  api.setUserData({ name: data['popup-name'], about: data['popup-description'] })
    .then(data => {
      userInfo.setUserInfo({ name: data.name, description: data.about});
      userInfo.setUserAvatar(data.avatar);
    })
    .catch(e => console.error(e.message))
});

api.getUserData()
  .then(info => {
    userInfo.setUserInfo({ name: info.name, description: info.about});
    userInfo.setUserAvatar(info.avatar);
    return info;
  })
  .catch(e => console.error(e.message))
  .then(userInfo => {
    const cardSection = new Section({ renderer: (data) => {
        const owner = data.owner._id === userInfo._id;
        const card = new Card(data, '#card-template', owner, () => {
          popupWithImage.open(card.card);
        });
        cardSection.addItem(card.createCard());
      } }, '.gallery__list');

    api.getInitialCards()
      .then(data => {
        cardSection.renderItems(data);
      })
      .catch(e => console.error(e.message));

    const popupPlace = new PopupWithForm('.popup_new-place', (data) => {
      api.addCard({ name: data['popup-name'], link: data['popup-description']})
        .then(data => {
          cardSection.renderer(data);
        })
        .catch(e => console.error(e.message));
    });

    profileButtonEdit.addEventListener('click', () => popupProfile.open(userInfo.getUserInfo()));
    profileButtonAdd.addEventListener('click', () => popupPlace.open());

    const newPlacePopupValid = new FormValidator(validConfig, popupPlace.form);
    const profilePopupValid = new FormValidator(validConfig, popupProfile.form);

    newPlacePopupValid.enableValidation();
    profilePopupValid.enableValidation();
  })








