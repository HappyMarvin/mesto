import {openImagePopup} from "./index.js";

class Card {
  constructor(name, sourceImage, templateSelector) {
    this._name = name;
    this._sourceImage = sourceImage;
    this._templateSelector = templateSelector;
  }

  _addContent () {
    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._sourceImage;
    this._cardImage.alt = this._name;
  }

  _deleteCard () {
    this._card.remove();
  }

  _switchLike() {
    this._likeButton.classList.toggle('card__like_active');
  }

  _addListeners () {
    this._deleteButton.addEventListener('click', () => {
        this._deleteCard();
      })
    this._likeButton.addEventListener('click', () => {
      this._switchLike();
    })
    this._cardImage.addEventListener('click', () => {
      openImagePopup(this._card);
    })
  }

  createCard () {
    this._cardTemplate = document.querySelector(this._templateSelector).content;
    this._card = this._cardTemplate.querySelector('.card').cloneNode(true);
    this._cardImage = this._card.querySelector('.card__image');
    this._likeButton = this._card.querySelector('.card__like');
    this._deleteButton = this._card.querySelector('.card__delete');

    this._addContent();
    this._addListeners();

    return this._card
  }
}

export {Card}