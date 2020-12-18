
class Card {
  constructor(name, sourceImage, templateSelector, handleCardClick) {
    this._name = name;
    this._sourceImage = sourceImage;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._cardTemplate = document.querySelector(this._templateSelector).content;
    this.card = this._cardTemplate.querySelector('.card').cloneNode(true);
    this._cardImage = this.card.querySelector('.card__image');
    this._likeButton = this.card.querySelector('.card__like');
    this._deleteButton = this.card.querySelector('.card__delete');
  }

  _addContent () {
    this.card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._sourceImage;
    this._cardImage.alt = this._name;
  }

  _deleteCard () {
    this.card.remove();
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
      this._handleCardClick(this.card);
    })
  }

  createCard () {
    this._addContent();
    this._addListeners();
    return this.card
  }
}

export {Card}