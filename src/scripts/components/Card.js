//import { openPopup } from "../pages/index.js";

//const imagePopup = document.querySelector('.popup_element');
//const popupImage = imagePopup.querySelector('.popup__img_element');
//const popupText = imagePopup.querySelector('.popup__text_element');



export  class Card {
  constructor(nameValue, imgValue, elementsTemplate, {handleCardClick}) {
    this._imgValue = imgValue;
    this._nameValue = nameValue;
    this._elementsTemplate = elementsTemplate;
    this._cardElement = this._elementsTemplate.querySelector('.element').cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.element__img');
    this._handleCardClick = handleCardClick;
  //  this._popupImage = popupElement.querySelector('.popup__img_element');
  }


 
  //Функция добавления карточки 
  addElement() {
    
   // const _elementsElement = this._elementsTemplate.querySelector('.element').cloneNode(true);
    //console.log(elementsElement.querySelector('.element__img').getAttribute('src'));
    this._cardImage.src = this._imgValue;
    this._cardImage.alt = this._nameValue;
    this._cardElement.querySelector('.element__header').textContent = this._nameValue;
    this._setEventListeners();



    return (this._cardElement);

  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like').addEventListener('click',  (evt) => {

      evt.target.classList.toggle('element__like_active');
    });
    this._cardElement.querySelector('.element__delite').addEventListener('click', (evt) => {
      this._cardElement.remove('.element__none');
    });
    
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
