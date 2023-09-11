import  {Card}  from "./Card.js"; 
import  {FormValidator}  from "./FormValidator.js"; 


const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};


const popupProfil = document.querySelector('.popup_profil');
const popupProfilValid = new FormValidator(parameters, popupProfil);
const popupPlace = document.querySelector('.popup_place');
const popupPlaceValid = new FormValidator(parameters, popupPlace);

const imagePopup = document.querySelector('.popup_element');
const backgraundPlace = document.querySelector('.popup__backgraund_place');
const backgraundProfil = document.querySelector('.popup__backgraund_profil');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const buttonClosePopupProfile = document.querySelector('.popup__close_profil');
const buttonClosePopupPlace = document.querySelector('.popup__close_place');
const buttonClosePopupElement = document.querySelector('.popup__close_element');
const nameInput = document.querySelector('.popup__input_name_text');
const jobInput = document.querySelector('.popup__input_status_text');
const profileName = document.querySelector('.profile__name');
const profileStatusProfession = document.querySelector('.profile__status');
const elementsTemplate = document.querySelector('#element-template').content;

const popupFormProfil = document.forms["profile-form"];
const popupFormPlace = document.forms["card-form"];

const savePlaсe = popupFormPlace.querySelector('.popup__save_place');
const elementsContainer = document.querySelector('.elements');


const nameCardInput = document.querySelector('.popup__input_place_text');
const imgCardInput = document.querySelector('.popup__input_place_link');


popupProfilValid.enableValidation(); 
popupPlaceValid.enableValidation();

initialCards.forEach(function (element) {
  const card = createCard(element);
  renderCard(card);
});

/*
initialCards.forEach(function (element) {
  const card = new Card(element.name, element.link, elementsTemplate);
  renderCard(card.addElement());
})
*/

function createCard(item) {
  // тут создаете карточку и возвращаете ее
  const cardElement = new Card(item.name, item.link, elementsTemplate);
  return cardElement.addElement();
}






function handleFormProfilSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatusProfession.textContent = jobInput.value;
  closePopup(popupProfil);
}



function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const card = createCard({name: nameCardInput.value, link: imgCardInput.value});
  renderCard(card); 
  closePopup(popupPlace);
  evt.target.reset();
 /* nameCardInput.value = "";
  imgCardInput.value = ""; */
  popupPlaceValid.enableValidation(); 
  
}


function renderCard(createCard) {
  elementsContainer.prepend(createCard);
}

//Функция добавления класса popup__open, который делает видимым popup
function openFormProfil() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatusProfession.textContent;
  openPopup(popupProfil);

}

function closePopup(popup) {
  //  popup.style.animation = 'fade-out 1s';
  document.removeEventListener('keydown', closeByEsc);
  popup.classList.add('animation_close');
  popup.classList.remove("popup_opened");
  // popup.style.removeProperty('fade-out 1s');

}

export function openPopup(popup) {
  //  enableValidation(popup);
  //  popup.style.animation = "";

  document.addEventListener('keydown', closeByEsc);
  popup.classList.remove("animation_close");
  popup.classList.add("popup_opened");
}  

// 
const popupList = document.querySelectorAll('.popup');
popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup)
    }
  })
});





editButton.addEventListener('click', openFormProfil);
buttonClosePopupProfile.addEventListener('click', () => closePopup(popupProfil));
addButton.addEventListener('click', () => openPopup(popupPlace));
buttonClosePopupPlace.addEventListener('click', () => closePopup(popupPlace));





function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


popupFormProfil.addEventListener('submit', handleFormProfilSubmit);
popupFormPlace.addEventListener('submit', handleFormPlaceSubmit);
buttonClosePopupElement.addEventListener('click', () => closePopup(imagePopup));





/*
const valid = new FormValidator(parameters);
valid.enableValidation(); 
*/
