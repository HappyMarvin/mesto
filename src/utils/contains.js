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

const validConfig = {
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__text-input_type_error',
  errorClass: 'popup__error_show',
  errorIdPostfix: '-error'
}

const profileButtonEdit = document.querySelector('.profile__edit');
const profileButtonAdd = document.querySelector('.profile__add');

export {initialCards, validConfig, profileButtonAdd, profileButtonEdit}

let test = [{
  "likes": [],
  "_id": "5ff36ffbf2f5cc019822fe65",
  "name": "Башня Врангеля",
  "link": "https://i.ibb.co/BBJ43ps/gal-3.jpg",
  "owner": {
    "name": "Jacques Couste",
    "about": "Sailor, research",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "ac8c3f0749bb38f30b9ef669",
    "cohort": "cohort-19"
  },
  "createdAt": "2021-01-04T19:43:55.236Z"
}, {
  "likes": [],
  "_id": "5ff36d3af2f5cc019822fe64",
  "name": "Ямальская тундра",
  "link": "https://i.ibb.co/cCNzL1d/gal-2.jpg",
  "owner": {
    "name": "Jacques Couste",
    "about": "Sailor, research",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "ac8c3f0749bb38f30b9ef669",
    "cohort": "cohort-19"
  },
  "createdAt": "2021-01-04T19:32:10.719Z"
}, {
  "likes": [],
  "_id": "5ff36bb7220845018de755e0",
  "name": "Ямал",
  "link": "https://i.ibb.co/4pbMPYn/gal-1.jpg",
  "owner": {
    "name": "Jacques Couste",
    "about": "Sailor, research",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "ac8c3f0749bb38f30b9ef669",
    "cohort": "cohort-19"
  },
  "createdAt": "2021-01-04T19:25:43.036Z"
}, {
  "likes": [{
    "name": "Жак-Ив Кусто",
    "about": "Исследователь дна",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "b4513229bd49630ad19a19cd",
    "cohort": "cohort-19"
  }],
  "_id": "5ff23390ab3d0e014b7e5807",
  "name": "Камчатка",
  "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  "owner": {
    "name": "Жак-Ив Кусто",
    "about": "Исследователь дна",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "b4513229bd49630ad19a19cd",
    "cohort": "cohort-19"
  },
  "createdAt": "2021-01-03T21:13:52.332Z"
}, {
  "likes": [{
    "name": "Жак-Ив Кусто",
    "about": "Исследователь дна",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "b4513229bd49630ad19a19cd",
    "cohort": "cohort-19"
  }],
  "_id": "5ff2335aab3d0e014b7e5806",
  "name": "Архыз",
  "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  "owner": {
    "name": "Жак-Ив Кусто",
    "about": "Исследователь дна",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "b4513229bd49630ad19a19cd",
    "cohort": "cohort-19"
  },
  "createdAt": "2021-01-03T21:12:58.962Z"
}, {
  "likes": [{
    "name": "Жак-Ив Кусто",
    "about": "Исследователь дна",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "b4513229bd49630ad19a19cd",
    "cohort": "cohort-19"
  }],
  "_id": "5ff2322dab3d0e014b7e5804",
  "name": "Иваново",
  "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  "owner": {
    "name": "Жак-Ив Кусто",
    "about": "Исследователь дна",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
    "_id": "b4513229bd49630ad19a19cd",
    "cohort": "cohort-19"
  },
  "createdAt": "2021-01-03T21:07:57.475Z"
}]