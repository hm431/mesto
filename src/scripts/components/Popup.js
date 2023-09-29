import {
    nameInput,
    jobInput,
    profileName,
    profileStatusProfession,
} from '../utils/constants.js';

export default class Popup {
    constructor(selectorPopup) {
        this._popup = selectorPopup;
        this._closeButton = this._popup.querySelector('.popup__close');
        this.document = document;

    }



    _handleEscClose(evt) {
        if (evt.key === "Escape") {

            this.close();
        }
    }

    open() {
        this.setEventListeners();
        nameInput.value = profileName.textContent;
        jobInput.value = profileStatusProfession.textContent;
        this._popup.classList.remove("animation_close");
        this._popup.classList.add("popup_opened");
    }

    close() {
        this.document.removeEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('animation_close');
        this._popup.classList.remove("popup_opened");
    }


    setEventListeners() {

        this.document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._closeButton.addEventListener('click', () => this.close());
        const popupList = document.querySelectorAll('.popup');
        popupList.forEach(popup => {
            popup.addEventListener('mousedown', (evt) => {
                if (evt.target.classList.contains('popup')) {
                    this.close()
                }
            })
        });
    }
}