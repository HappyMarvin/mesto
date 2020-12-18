const initialCards = [
  {
    name: 'Ямал',
    link: '../images/gal-1.jpg'
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

export { initialCards, validConfig, profileButtonAdd, profileButtonEdit}