import Popup from "./Popup.js";




export default class PopupWithForm extends Popup{
    constructor(selectorPopup, {formSunbit}){
        super(selectorPopup);
        this._popup = selectorPopup;
        this.formSunbit = formSunbit;
        this._sumbitForm = this._popup.querySelector('form');
        this._dataSumbit = {};


    }
    _getInputValues(evt){
        evt.preventDefault(); 
        const data = new FormData(this._sumbitForm);
        
        for (let [key, value] of data) {
            this._dataSumbit[`${key}`] = (value);
        } 
        console.log(this._dataSumbit);
        if (this._dataSumbit.popupStatus != ""){
            
            this.formSunbit(this._dataSumbit);
        }
       evt.target.reset();

    }



    setEventListeners(){
       
        this._closeButton.addEventListener('click', () => this.close());
        this._sumbitForm.addEventListener('submit',  (evt) => this._getInputValues(evt));
        document.addEventListener('keydown',  (evt) => this._handleEscClose(evt));
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

    close(evt){
        this.document.removeEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('animation_close');
        this._popup.classList.remove("popup_opened");
    }
}