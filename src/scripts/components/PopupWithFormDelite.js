import Popup from "./Popup"; 
 
export default class PopupWithFormDelite extends Popup{ 
    constructor(selectorPopup, {deliteFromApi}){ 
        super(selectorPopup); 
        this._formElement = this._popup.querySelector('form'); 
        this._deliteFromApi = deliteFromApi;  
    } 
 
    open(element, elementId){ 
        super.open(); 
        this._cardElement = element; 
        this._cardElementId = elementId; 
    } 
 
    submitForm(){ 
        this._deliteFromApi(this._cardElementId); 
     //   this._cardElement.remove('.element__none'); 
     
    } 

    deliteCardForm(){
        this._cardElement.remove('.element__none');
    }
 
    setEventListeners() { 
        super.setEventListeners(); 
        this._formElement.addEventListener("submit", (evt) => { 
            evt.preventDefault(); 
            this.submitForm(); 
        }); 
 
 
    } 
} 