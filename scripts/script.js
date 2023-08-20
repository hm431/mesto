const popupProfil = document.querySelector('.popup_profil');
const popupPlace = document.querySelector('.popup_place');
const popupElement = document.querySelector('.popup_element');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const buttonClosePopupProfile = document.querySelector('.popup__close_profil');
const buttonClosePopupPlace =  document.querySelector('.popup__close_place');
const buttonClosePopupElement = document.querySelector('.popup__close_element');
const nameInput = document.querySelector('.popup__input_name_text');
const jobInput = document.querySelector('.popup__input_status_text');
const profileName = document.querySelector('.profile__name');
const profileStatusProfession = document.querySelector('.profile__status');


const popupFormProfil = document.querySelector('.popup__form_profil');
const popupFormPlace = document.querySelector('.popup__form_place');

const elementsContainer = document.querySelector('.elements');
//let elementsContainer = document.querySelector('.elements__container');
const buttonOpenPopupAddCard = document.querySelector('.popup__save_place');
//let likeButton = document.querySelector('.element__like');

const nameCardInput = document.querySelector('.popup__input_place_text');
const ImgCardInput = document.querySelector('.popup__input_place_link');




initialCards.forEach(function (element){
  renderCard(addElement(element.name,element.link));
  })


//Функция, которая 
function handleFormProfilSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileStatusProfession.textContent = jobInput.value;
    closePopup(popupProfil); 
}

function handleFormPlaceSubmit (evt) {
  evt.preventDefault(); 
  renderCard(addElement(nameCardInput.value, ImgCardInput.value));
  closePopup(popupPlace);
  nameCardInput.value = "";
  ImgCardInput.value = "";
}

 
buttonOpenPopupAddCard.addEventListener('submit', function () {


  renderCard(addElement(nameCardInput.value, ImgCardInput.value));
  
  closePopup(popupPlace);

  nameCardInput.value = "";
  ImgCardInput.value = "";
});


//Функция добавления карточки 
function addElement(nameValue , imgValue){
  const elementsTemplate = document.querySelector('#element-template').content;
  const elementsElement = elementsTemplate.querySelector('.element').cloneNode(true);
  //console.log(elementsElement.querySelector('.element__img').getAttribute('src'));
  elementsElement.querySelector('.element__img').src = imgValue;
  
  elementsElement.querySelector('.element__header').textContent = nameValue;

  elementsElement.querySelector('.element__like').addEventListener('click', function (evt) {
  
    evt.target.classList.toggle('element__like_active');
  });
  elementsElement.querySelector('.element__delite').addEventListener('click', function (evt) {
    elementsElement.remove('.element__none'); 
  });

  elementsElement.querySelector('.element__img').addEventListener('click', function (evt){
    openPopup(popupElement);
    popupElement.querySelector('.popup__img_element').src = elementsElement.querySelector('.element__img').src;
    popupElement.querySelector('.popup__text_element').textContent = elementsElement.querySelector('.element__header').textContent; 
   // elementsElement.querySelector('.element__popup_img').src = imgValue;
   // elementsElement.querySelector('.element__popup_text').textContent = nameValue;
   // elementsElement.querySelector('.element__popup').classList.add("element__popup_opened");
  });
/*
  elementsElement.querySelector('.element__popup_close').addEventListener('click', function (evt){
    function AnimationCloseImg(){
      elementsElement.querySelector('.element__popup').classList.add("animation_close");
      setTimeout(closeImg, 1000);
    }
    function closeImg(){
      elementsElement.querySelector('.element__popup').classList.remove("animation_close");
      elementsElement.querySelector('.element__popup').classList.remove("element__popup_opened");
    }
    AnimationCloseImg();
    
  }); */
  //elementsContainer.prepend(elementsElement);

  return(elementsElement);

}



function renderCard(createCard){
  elementsContainer.prepend(createCard);
}

//Функция добавления класса popup__open, который делает видимым popup
function ouenFormProfil() { 
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatusProfession.textContent;   
    openPopup(popupProfil);
    
}

function closePopup(popup) {
  popup.style.animation = 'fade-out 1s';
  popup.classList.remove("popup_opened");
// popup.style.removeProperty('fade-out 1s');
  
}

function openPopup(popup) {
  popup.style.animation = "";
  popup.classList.add("popup_opened");
}

/*
function closeFormProfil() { 
  popupProfil.classList.remove("popup_opened");
  popupProfil.classList.remove("animation_close");
}
function closeAnimationProfil(){
  popupProfil.classList.add("animation_close");
  setTimeout(closeFormProfil, 1000);

}


function openFormPlace (){   
    popupPlace.classList.add("popup_opened");
}

function closeFormPlace() {
    popupPlace.classList.remove("popup_opened");
    popupPlace.classList.remove("animation_close"); 
}

function closeAnimationPlace(){
  popupPlace.classList.add("animation_close");
  setTimeout(closeFormPlace, 1000);

}

function closeElement(){
  popupElement.classList.remove("popup_opened");
}
*/



console.log(buttonClosePopupProfile);

editButton.addEventListener('click', ouenFormProfil);
buttonClosePopupProfile.addEventListener('click', () => closePopup(popupProfil));
addButton.addEventListener('click', () => openPopup(popupPlace));
buttonClosePopupPlace.addEventListener('click', () => closePopup(popupPlace));
popupFormProfil.addEventListener('submit', handleFormProfilSubmit);
popupFormPlace.addEventListener('submit', handleFormPlaceSubmit);
buttonClosePopupElement.addEventListener('click', () => closePopup(popupElement));



