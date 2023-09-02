
// включение валидации вызовом enableValidation
// все настройки передаются при вызове



const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  };
  
  const hideInputError = (formElement, inputElement,  settings) => {
    const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
  };
  
  
  
  const hasInvalidInput = (inputList) => {
     return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  };
  
  const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage,  settings);
    } else {
      hideInputError(formElement, inputElement, settings);
    }
  };
  
  
  const toggleButtonState = (inputList, buttonElement,  settings) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
  };
  

  const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement,  settings);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, settings);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  };


  const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
  /*    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
     const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
  
     fieldsetList.forEach((fieldSet) => {
       setEventListeners(fieldSet, settings);
     }); */
     setEventListeners(formElement, settings);
    });
  };
  

  const  parameters =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
  }

  enableValidation(parameters); 

