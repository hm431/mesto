import Popup from "./Popup.js";

/*
const imagePopup = document.querySelector('.popup_element');
const popupImage = imagePopup.querySelector('.popup__img_element');
const popupText = imagePopup.querySelector('.popup__text_element'); */

export default class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
        this.imagePopup = document.querySelector('.popup_element');
        this.popupImage = this.imagePopup.querySelector('.popup__img_element');
        this.popupText = this.imagePopup.querySelector('.popup__text_element');
    }

    open(imgValue, nameValue) {
        super.open();
        this.popupImage.src = imgValue;
        this.popupImage.alt = nameValue;
        this.popupText.textContent = nameValue;
        
    }


}