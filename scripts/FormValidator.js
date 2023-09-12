
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

export class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
    this.inputList = Array.from(this.formElement.querySelectorAll(this.settings.inputSelector));
    this.buttonElement = formElement.querySelector(this.settings.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.classList.remove(this.settings.errorClass);
    errorElement.textContent = '';
  }



  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid)   {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else   {
      this._hideInputError(inputElement);
    }
  }


  

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton() 
    } else {
      this.buttonElement.classList.remove(this.settings.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  }


  _setEventListeners() {
  //  const inputList = Array.from(this.formElement.querySelectorAll(this.settings.inputSelector));
  //  const buttonElement = formElement.querySelector(this.settings.submitButtonSelector);

    // чтобы проверить состояние кнопки в самом начале
    this._toggleButtonState();

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',  () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState();
      });
    });
  }


  enableValidation() {
      this._setEventListeners();
  }



  disableButton () {
    this.buttonElement.classList.add(this.settings.inactiveButtonClass);
    this.buttonElement.disabled = true;
  }


  
}



