import {
    nameInput,
    jobInput,
    profileName,
    profileStatusProfession,
} from '../utils/constants.js';

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this)
        this._closeButton = this._popup.querySelector('.popup__close');
        this.document = document;

    }



    _handleEscClose(evt) {
        if (evt.key === "Escape") {

            this.close();
        }
    }

    open() {

        //  this.setEventListeners();
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.remove("animation_close");
        this._popup.classList.add("popup_opened");
    }

    close() {
        this.document.removeEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('animation_close');
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }


    setEventListeners() {
        this._closeButton.addEventListener('click', () => this.close());

        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close()
            }
        })
    }
}