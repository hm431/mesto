let container = document.querySelector('.main');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let editButton = document.querySelector('.profile__edit-button');
let formClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_status');
let startName = document.querySelector('.profile__name');
let startStatus = document.querySelector('.profile__status');
let popupSave = document.querySelector('.popup__save');

// Переводим данные о профиле со страницы в попап

document.querySelector('.popup__input_name').placeholder = startName.textContent;
document.querySelector('.popup__input_status').placeholder = startStatus.textContent;

//Функция, которая 
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__status').textContent = jobInput.value;   
  
}


//Функция добавления класса popup__open, который делает видимым popup
function oupenForm (){ 
    popup.classList.add("popup__open");
    //popup.style.display = "flex"; 
    //container.style.background = "rgba(0, 0, 0, 0.15)";
}

function closeForm() {
    popup.classList.remove("popup__open"); 
}

editButton.addEventListener('click', oupenForm);
formClose.addEventListener('click', closeForm);
popupSave.addEventListener('click', handleFormSubmit);
formElement.addEventListener('submit', handleFormSubmit);






