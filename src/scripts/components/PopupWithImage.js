import Popup from "./Popup.js";

const imagePopup = document.querySelector('.popup_element');
const popupImage = imagePopup.querySelector('.popup__img_element');
const popupText = imagePopup.querySelector('.popup__text_element');

export default class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
        
    }

    open(imgValue, nameValue) {
        //console.log(this._popup);
        this.setEventListeners();
        this._popup.classList.remove("animation_close");
        this._popup.classList.add("popup_opened");
        //  console.log(popupImage);
        popupImage.src = imgValue;
        popupImage.alt = nameValue;
        popupText.textContent = nameValue;
        
    }


}