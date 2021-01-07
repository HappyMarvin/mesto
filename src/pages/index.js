//Арина, огромное спасибо за ревью! Ваши советы очень полезны. Не знал про Promise.all.
import './index.css';
import Card from '../components/Card';
import FormValidator from "../components/FormValidator";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import PopupDeleteCard from "../components/PopupDeleteCard";
import UserInfo from "../components/UserInfo";
import Section from "../components/Section";
import {validConfig, profileButtonEdit, profileButtonAdd, addAvatarButton} from "../utils/contains";
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
const popupDeleteCard = new PopupDeleteCard('.popup_delete', (card) => {
  return api.deleteCard(card)
    .then(() => {
      card.deleteCard();
      popupDeleteCard.close();
    })
    .catch(e => console.error(e.message))
});

const popupProfile = new PopupWithForm('.popup_profile', (data) => {
  return api.setUserData({name: data['popup-name'], about: data['popup-description']})
    .then(data => {
      userInfo.setUserInfo({name: data.name, description: data.about});
      popupProfile.close();
    })
    .catch(e => console.error(e.message));
});

const popupAddAvatar = new PopupWithForm('.popup_add-avatar', (data) => {
  return api.addAvatar(data['avatar-link'])
    .then((data) => {
      userInfo.setUserAvatar(data.avatar);
      popupAddAvatar.close();
    })
    .catch(e => console.error(e.message));
});

Promise.all([
  api.getUserData(),
  api.getInitialCards()
])
  .then(values => {
    const [userData, initialCards] = values;

    userInfo.setUserInfo({name: userData.name, description: userData.about});
    userInfo.setUserAvatar(userData.avatar);

    const cardSection = new Section({
      renderer: (data) => {
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
      }
    }, '.gallery__list');

    cardSection.renderItems(initialCards);

    const popupPlace = new PopupWithForm('.popup_new-place', (data) => {
      return api.addCard({name: data['popup-name'], link: data['popup-description']})
        .then(data => {
          cardSection.renderer(data);
          popupPlace.close();
        })
        .catch(e => console.error(e.message));
    });

    profileButtonAdd.addEventListener('click', () => popupPlace.open());
    const newPlacePopupValid = new FormValidator(validConfig, popupPlace.form);
    newPlacePopupValid.enableValidation();
    popupPlace.setEventListeners();
  })

profileButtonEdit.addEventListener('click', () => popupProfile.open(userInfo.getUserInfo()));
addAvatarButton.addEventListener('click', () => popupAddAvatar.open());

const addAvatarValid = new FormValidator(validConfig, popupAddAvatar.form);
const profilePopupValid = new FormValidator(validConfig, popupProfile.form);

profilePopupValid.enableValidation();
addAvatarValid.enableValidation();

popupProfile.setEventListeners();
popupAddAvatar.setEventListeners();
popupWithImage.setEventListeners();
popupDeleteCard.setEventListeners();







