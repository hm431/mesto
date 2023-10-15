//import { openPopup } from "../pages/index.js";

//const imagePopup = document.querySelector('.popup_element');
//const popupImage = imagePopup.querySelector('.popup__img_element');
//const popupText = imagePopup.querySelector('.popup__text_element');



export  class Card {
  constructor(nameValue, imgValue, elementsTemplate, cardLikes, isMyCard, {handleCardClick, handleCardDelite, handleCardLike}) {
    this._imgValue = imgValue;
    this._nameValue = nameValue;
    this._cardLikes = cardLikes;
    this._elementsTemplate = elementsTemplate;
    this._cardElement = this._elementsTemplate.querySelector('.element').cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.element__img');
    this._cardElementLike = this._cardElement.querySelector('.element__like_number');
    this._elementDelite =  this._cardElement.querySelector('.element__delite');
    this._handleCardClick = handleCardClick;
    this._handleCardDelite = handleCardDelite;
    this._handleCardLike = handleCardLike;
    this._isMyCard = isMyCard;
  //  this._popupImage = popupElement.querySelector('.popup__img_element');
  }


 
  //Функция добавления карточки 
  addElement() {
    if (!this._isMyCard){
      this._elementDelite.remove();
    }
   // const _elementsElement = this._elementsTemplate.querySelector('.element').cloneNode(true);
    //console.log(elementsElement.querySelector('.element__img').getAttribute('src'));
    this._cardImage.src = this._imgValue;
    this._cardImage.alt = this._nameValue;
    this._cardElementLike.textContent = this._cardLikes;
    this._cardElement.querySelector('.element__header').textContent = this._nameValue;
    this._setEventListeners();



    return (this._cardElement);

  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like_button').addEventListener('click',  (evt) => {

      evt.target.classList.toggle('element__like_button_active');
      if (evt.target.classList.contains('element__like_button_active')) {
      this._cardElementLike.textContent  = Number(this._cardElementLike.textContent) + 1;
      
      }
      else{
        this._cardElementLike.textContent  = Number(this._cardElementLike.textContent) - 1;
        
      }
      this._handleCardLike(evt.target.classList.contains('element__like_button_active'));
    });
    if (this._isMyCard){
    this._cardElement.querySelector('.element__delite').addEventListener('click', (evt) => {
   //   this._cardElement.remove(/*'.element__none'*/);
        this._handleCardDelite(this._cardElement);
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
  }


  



}

