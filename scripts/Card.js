
export  class Card {
  constructor(nameValue, imgValue, elementsTemplate) {
    this._imgValue = imgValue;
    this._nameValue = nameValue;
    this._elementsTemplate = elementsTemplate;
  }

  //Функция добавления карточки 
  addElement() {
    const popupElement = document.querySelector('.popup_element');
    const _elementsElement = this._elementsTemplate.querySelector('.element').cloneNode(true);
    //console.log(elementsElement.querySelector('.element__img').getAttribute('src'));
    _elementsElement.querySelector('.element__img').src = this._imgValue;
    _elementsElement.querySelector('.element__img').alt = this._nameValue;
    _elementsElement.querySelector('.element__header').textContent = this._nameValue;

    _elementsElement.querySelector('.element__like').addEventListener('click', function (evt) {

      evt.target.classList.toggle('element__like_active');
    });
    _elementsElement.querySelector('.element__delite').addEventListener('click', function (evt) {
      _elementsElement.remove('.element__none');
    });

    _elementsElement.querySelector('.element__img').addEventListener('click',  (evt) => {
      this._openPopup(popupElement);
      popupElement.querySelector('.popup__img_element').src = this._imgValue;
     // popupElement.querySelector('.popup__img_element').alt = this._nameValue;
      popupElement.querySelector('.popup__text_element').textContent = this._nameValue;

    });


    return (_elementsElement);

  }

  _openPopup(popup) {
    //  enableValidation(popup);
    //  popup.style.animation = "";
    document.addEventListener('keydown', this._closeByEsc);
    popup.classList.remove("animation_close");
    popup.classList.add("popup_opened");
  }  

  _closeByEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }


}

