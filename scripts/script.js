let popup = document.querySelector('.popup');
let windowElement = document.querySelector('.popup__container');
let editButton = document.querySelector('.profile__edit-button');
let formClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_status');
let startName = document.querySelector('.profile__name');
let startStatus = document.querySelector('.profile__status');




//Функция, которая 
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    startName.textContent = nameInput.value;
    startStatus.textContent = jobInput.value;  
    closeForm(); 
}


//Функция добавления класса popup__open, который делает видимым popup
function oupenForm (){ 
    nameInput.value = startName.textContent;
    jobInput.value = startStatus.textContent;   
    popup.classList.add("popup_opened");
}

function closeForm() {
    popup.classList.remove("popup_opened"); 
}

editButton.addEventListener('click', oupenForm);
formClose.addEventListener('click', closeForm);
formPopup.addEventListener('submit', handleFormSubmit);






