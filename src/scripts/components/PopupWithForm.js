import Popup from "./Popup.js";




export default class PopupWithForm extends Popup {
    constructor(selectorPopup, { submitForm }) {
        super(selectorPopup);
        //       this._popup = selectorPopup;
        //    this.formSunbit = formSunbit;

        this.submitForm = submitForm;
        this._formElement = this._popup.querySelector('form');

        this._dataSumbit = {};


    }
    _getInputValues() {

        const data = new FormData(this._formElement);

        for (let [key, value] of data) {
            this._dataSumbit[`${key}`] = (value);
        }
        return (this._dataSumbit);
    }



    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.submitForm(this._getInputValues());
        });


    }

    close(evt) {
        super.close();
        this._formElement.reset();

    }
}