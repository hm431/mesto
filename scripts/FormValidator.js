
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

export class FormValidator {
  constructor(settings) {
    this.settings = settings;
  }

  _showInputError(formElement, inputElement, errorMessage, settings) {
    const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  }

  _hideInputError(formElement, inputElement, settings) {
    const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
  }



  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(formElement, inputElement, settings) {
    if (!inputElement.validity.valid)   {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else   {
      this._hideInputError(formElement, inputElement, settings);
    }
  }


  _toggleButtonState(inputList, buttonElement, settings) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }


  _setEventListeners(formElement, settings) {
    const inputList = Array.from(formElement.querySelectorAll(this.settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    // чтобы проверить состояние кнопки в самом начале
    this._toggleButtonState(inputList, buttonElement, settings);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',  () => {
        this._checkInputValidity(formElement, inputElement, settings);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }


  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this.settings.formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement, this.settings);
    });
  }

}



