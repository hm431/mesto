let popupProfil = document.querySelector('.popup_profil');
let popupPlace = document.querySelector('.popup_place');
let windowElement = document.querySelector('.popup__container');
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let profilFormClose = document.querySelector('.popup__close_profil');
let placeFormClose =  document.querySelector('.popup__close_place');
let nameInput = document.querySelector('.popup__input_name_text');
let jobInput = document.querySelector('.popup__input_status_text');
let startName = document.querySelector('.profile__name');
let startStatus = document.querySelector('.profile__status');
let popupForm = document.querySelector('.popup__form');
let elementsContainer = document.querySelector('.elements');
//let elementsContainer = document.querySelector('.elements__container');
let addCard = document.querySelector('.popup__save_place');
//let likeButton = document.querySelector('.element__like');
let elementName = document.querySelector('.popup__input_place_text');
let elementImg = document.querySelector('.popup__input_place_link');


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  

initialCards.forEach(function (element){
     addElement(element.name,element.link);
  })


//Функция, которая 
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    startName.textContent = nameInput.value;
    startStatus.textContent = jobInput.value;

    closeFormProfil(); 
}


addCard.addEventListener('click', function () {


  addElement(elementName.value, elementImg.value);
  
  closeFormPlace();
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
    elementsElement.querySelector('.element__popup_img').src = imgValue;
    elementsElement.querySelector('.element__popup_text').textContent = nameValue;
    elementsElement.querySelector('.element__popup').classList.add("element__popup_opened");
  });

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
    
  });
  elementsContainer.prepend(elementsElement);


}




//Функция добавления класса popup__open, который делает видимым popup
function oupenFormProfil (){ 
    nameInput.value = startName.textContent;
    jobInput.value = startStatus.textContent;   
    popupProfil.classList.add("popup_opened");
    
}



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




editButton.addEventListener('click', oupenFormProfil);
profilFormClose.addEventListener('click', closeAnimationProfil);
addButton.addEventListener('click', openFormPlace);
placeFormClose.addEventListener('click', closeAnimationPlace);
popupProfil.addEventListener('submit', handleFormSubmit);
popupPlace.addEventListener('submit', handleFormSubmit);




