
export default class Card {
  constructor(data, templateSelector, owner, handleCardClick, handleDeleteClick) {
    this._name = data.name;
    this.id = data._id;
    this._sourceImage = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._cardTemplate = document.querySelector(this._templateSelector).content;
    this.card = this._cardTemplate.querySelector('.card').cloneNode(true);
    this._cardImage = this.card.querySelector('.card__image');
    this._likeButton = this.card.querySelector('.card__like');
    this._deleteButton = this.card.querySelector('.card__delete');
    this._likeCount = this.card.querySelector('.card__like-count');
    this._owner = owner;
    this._likes = data.likes;
  }

  _addContent () {
    this.card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._sourceImage;
    this._cardImage.alt = this._name;
    if (this._owner ) this._deleteButton.style.display = 'block';
    this._likeCount.textContent = this._likes.length;
  }

  deleteCard () {
    this.card.remove();
    this.card = null;
  }

  _switchLike() {
    this._likeButton.classList.toggle('card__like_active');
  }

  _addListeners () {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
      })
    this._likeButton.addEventListener('click', () => {
      this._switchLike();
    })
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this.card);
    })
  }

  createCard () {
    this._addContent();
    this._addListeners();
    return this.card
  }
}