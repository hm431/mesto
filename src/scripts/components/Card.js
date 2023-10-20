//import { openPopup } from "../pages/index.js";

//const imagePopup = document.querySelector('.popup_element');
//const popupImage = imagePopup.querySelector('.popup__img_element');
//const popupText = imagePopup.querySelector('.popup__text_element');



export  class Card {
  constructor(nameValue, imgValue, elementsTemplate, cardLikes, idCard, idUser, {handleCardClick, handleCardDelite, handleCardLike}) {
    this._imgValue = imgValue;
    this._nameValue = nameValue;
    this._cardNumberLikes = cardLikes.length;
    this._cardLikes = cardLikes;
    this._elementsTemplate = elementsTemplate;
    this._cardElement = this._elementsTemplate.querySelector('.element').cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.element__img');
    this._cardElementLike = this._cardElement.querySelector('.element__like_number');
    this._elementDelite =  this._cardElement.querySelector('.element__delite');
    this._cardLikeButton = this._cardElement.querySelector('.element__like_button')
    this._handleCardClick = handleCardClick;
    this._handleCardDelite = handleCardDelite;
    this.handleCardLike = handleCardLike;
    this._idUser = idUser;
    this._isMyCard = (idCard === idUser);
  //  this._popupImage = popupElement.querySelector('.popup__img_element');
  }

  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
    }
 
  //Функция добавления карточки 
  addElement() {
    if (!this._isMyCard){
      this._elementDelite.remove();
    }
    this._cardImage.src = this._imgValue;
    this._cardImage.alt = this._nameValue;
    this._cardElementLike.textContent = this._cardNumberLikes;

    this._cardLikes.forEach(element => {
      if (element._id === this._idUser){
        this._cardLikeButton.classList.add('element__like_button_active');
      }
    }); 

    this._cardElement.querySelector('.element__header').textContent = this._nameValue;
    this._setEventListeners();
    return (this._cardElement);

  }

  isLiked() {
    
    return this._cardLikes.some((like) => like._id === this._idUser)
}


  _updateLikesView() {
    this._cardElementLike.textContent = this._cardLikes.length;
    this._cardLikeButton.classList.toggle('element__like_button_active', this.isLiked());
  } 

  updateLikes(likes) {
    this._cardLikes = likes;
    this._updateLikesView()
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click',  (evt) => {
      this.handleCardLike(this.isLiked());
    });
    if (this._isMyCard){
    this._cardElement.querySelector('.element__delite').addEventListener('click', (evt) => {
        this._handleCardDelite(this);
     //  this._handleCardDelite(this);

    });
  }
    //will dell later
    
    this._cardImage.addEventListener('click',  (evt) => {
      this._handleCardClick();
    });
     /* openPopup(imagePopup);
      popupImage.src = this._imgValue;
      popupImage.alt = this._nameValue;
      popupText.textContent = this._nameValue;

    });
    */

    // This is for test 

  }


  



}

