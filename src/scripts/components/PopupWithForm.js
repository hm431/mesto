import Popup from "./Popup.js";


// TODO Fix 17 string in reveu in  PopupWithForm

export default class PopupWithForm extends Popup{
    constructor(selectorPopup, {sumbitForm}){
        super(selectorPopup);
 //       this._popup = selectorPopup;
    //    this.formSunbit = formSunbit;

        this._sumbitForm = this._popup.querySelector('form');


        this.sumbitForm = sumbitForm;
        this._formSunbit = this._popup.querySelector('form');

        this._dataSumbit = {};


    }
    _getInputValues(){
        
        const data = new FormData(this._formSunbit);
        
        for (let [key, value] of data) {
            this._dataSumbit[`${key}`] = (value);
        } 
        if (this._dataSumbit.popupStatus != ""){
            
            //this.sumbitForm(this._dataSumbit);
             return(this._dataSumbit);
        }
       
        
    }



    setEventListeners(data){
        super.setEventListeners();
        this._sumbitForm.addEventListener('submit',  ((evt) => {
                                                                evt.preventDefault();
                                                                this.sumbitForm(this._getInputValues());
                                                                evt.target.reset(); 
                                                            }));
    //    this._inputList.forEach((input) => {
            // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
    //        input.value = data[input.name];
    //    });
    }

    close(evt){
       super.close();
      // evt.target.reset();
    }
}