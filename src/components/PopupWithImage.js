import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popup.querySelector('.popup__image-title');
    this._image = this._popup.querySelector('.popup__image');
  }

  open (card) {
    const cardTitle = card.querySelector('.card__title').textContent;
    this._title.textContent = cardTitle;
    this._image.src = card.querySelector('.card__image').src;
    this._image.alt = `${cardTitle} - полный размер`;
    super.open();
  }
}