let container = document.querySelector('.main');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let editButton = document.querySelector('.profile__edit-button');
let formClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup_input_name');
let jobInput = document.querySelector('.popup_input_status');
let startName = document.querySelector('.profile__name');
let startStatus = document.querySelector('.profile__status');
let popupSave = document.querySelector('.popup__save');
document.querySelector('.popup_input_name').placeholder = startName.textContent;
document.querySelector('.popup_input_status').placeholder = startStatus.textContent;


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__status').textContent = jobInput.value;   
  
}



function oupenForm (){ 
    popup.style.display = "flex"; 
    container.style.background = "rgba(0, 0, 0, 0.15)";
}

function closeForm() {
    popup.style.display = "none"; 
}

editButton.addEventListener('click', oupenForm);
formClose.addEventListener('click', closeForm);
popupSave.addEventListener('click', handleFormSubmit);


formElement.addEventListener('submit', handleFormSubmit);






