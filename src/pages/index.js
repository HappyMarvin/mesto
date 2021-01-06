import './index.css';
import Card from '../components/Card.js';
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { validConfig, profileButtonEdit, profileButtonAdd, addAvatarButton } from "../utils/contains.js";
import Api from "../components/Api";
import PopupDeleteCard from "../components/PopupDeleteCard";

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
const popupDeleteCard = new PopupDeleteCard('.popup_delete', (card) => {
  api.deleteCard(card)
    .then(() => {
      card.deleteCard();
    })
});

const popupProfile = new PopupWithForm('.popup_profile', (data) => {
  api.setUserData({ name: data['popup-name'], about: data['popup-description'] })
    .then(data => {
      userInfo.setUserInfo({ name: data.name, description: data.about});
      userInfo.setUserAvatar(data.avatar);
    })
});

const popupAddAvatar = new PopupWithForm('.popup_add-avatar', (data) => {
  api.addAvatar(data['avatar-link'])
    .then((data) => {
      userInfo.setUserAvatar(data.avatar);
    })
});

api.getUserData()
  .then(info => {
    userInfo.setUserInfo({ name: info.name, description: info.about});
    userInfo.setUserAvatar(info.avatar);
    return info;
  })
  .then(userData => {
    const cardSection = new Section({ renderer: (data) => {
        const card = new Card(data,
          '#card-template',
          userData._id,
          () => {
          popupWithImage.open(card.card);
        },
          () => {
          popupDeleteCard.open(card)
        },
          () => {
          const method = card.liked ? 'DELETE' : 'PUT';
           return api.switchLike(card, method)
          });
        cardSection.addItem(card.createCard());
      } }, '.gallery__list');

    api.getInitialCards()
      .then(data => {
        cardSection.renderItems(data);
      })

    const popupPlace = new PopupWithForm('.popup_new-place', (data) => {
      api.addCard({ name: data['popup-name'], link: data['popup-description']})
        .then(data => {
          cardSection.renderer(data);
        })
    });

    profileButtonAdd.addEventListener('click', () => popupPlace.open());
    const newPlacePopupValid = new FormValidator(validConfig, popupPlace.form);
    newPlacePopupValid.enableValidation();
  })

profileButtonEdit.addEventListener('click', () => popupProfile.open(userInfo.getUserInfo()));
addAvatarButton.addEventListener('click', () => popupAddAvatar.open());

const addAvatarValid = new FormValidator(validConfig, popupAddAvatar.form);
const profilePopupValid = new FormValidator(validConfig, popupProfile.form);


profilePopupValid.enableValidation();
addAvatarValid.enableValidation();







