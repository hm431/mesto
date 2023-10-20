import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js";
//import Popup from "../components/Popup.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithFormDelite from "../scripts/components/PopupWithFormDelite.js";
import './index.css';

import {
  popupProfil,
  popupPlace,
  popupAvatar,
  selectorImagePopup,
  //  backgraundPlace,
  //  backgraundProfil,
  editButton,
  addButton,
  avatarChange,
  //  buttonClosePopupProfile,
  //  buttonClosePopupPlace,
  //  buttonClosePopupElement,
  nameInput,
  jobInput,
  profileName,
  profileAvatar,
  profileStatusProfession,
  elementsTemplate,
  // popupFormProfil,
  // popupFormPlace,
  // savePlaсe,
  elementsContainer,
  // nameCardInput,
  //imgCardInput,
  parameters,
 // initialCards
  
} from '../scripts//utils/constants.js';

   




avatarChange.addEventListener('click', ()=> {
  popupAvatarValid.disableButton();
  popupFormAvatar.open();
});










const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-77",
  headers: {
    authorization:'f8a7d69d-f431-4bab-b92e-a7dc9553106e',
    "Content-type": 'application/json'
  },
}

const api = new Api(apiConfig);
let userID = 0;

Promise.all([    
  
//в Promise.all передаем массив промисов которые нужно выполнить 
  api.getUserInfo(),

  api.getCards() 
]) 
.then(([info, initialCards])=>{

  // Обрабатываем данные пользователя

  console.log('real end here', info);
  //apiConfig.myID = info._id;
  userID = info._id;
  changeUserInfo.setUserInfo(info.name, info.about);
  changeUserInfo.changeUserAvatar(info.avatar);
  

  //Обрабатываем данные каточек 
  console.log('real end here', initialCards);
  baseCards.renderItems(initialCards.reverse()); 
  
}) 
.catch((err)=>{             //попадаем сюда если один из промисов завершится ошибкой 
console.log(err);
 })


const baseCards = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    baseCards.addItem(cardElement);
  }
},
  '.elements',
);



export const popupProfilValid = new FormValidator(parameters, popupProfil);
export const popupPlaceValid = new FormValidator(parameters, popupPlace);
export const popupAvatarValid = new FormValidator(parameters, popupAvatar);


popupProfilValid.enableValidation();
popupPlaceValid.enableValidation();
popupAvatarValid.enableValidation();



function createCard(item) {
  
  const cardElement = new Card(
    item.name,
    item.link,
    elementsTemplate,
    item.likes,
    item.owner._id,
    userID,
    {
      handleCardClick: (evt) => {
        imagePopup.open(item.link, item.name);
      },
      handleCardDelite: (element) =>{
        popupFormDelite.open(cardElement, item._id);
      },
      handleCardLike: (isLike) =>{
        api.changeLike(isLike, item._id)
          .then((info) =>{
              cardElement.updateLikes(info.likes);
          })

        .catch((error) => console.log(`Ошибка при лайке: ${error}`));
      }
    },
    )
  return cardElement.addElement();
}


const imagePopup = new PopupWithImage(
  '.popup_element');
imagePopup.setEventListeners();


function rendererLoading(isLoading, selectorPopup, textButtonSave, textButtonLoading){
  if(isLoading){
    document.querySelector(selectorPopup).querySelector('.popup__save').textContent = textButtonLoading;
  }
  else{
    document.querySelector(selectorPopup).querySelector('.popup__save').textContent = textButtonSave;
  }
}





const popupFormDelite = new PopupWithFormDelite( 
  '.popup_delite', 
  { 
    deliteFromApi: (cardIp, cardObject) => { 
      const textButtonSave = document.querySelector('.popup_delite').querySelector('.popup__save ').textContent;
      rendererLoading(true, '.popup_delite', textButtonSave, 'Удаление...'); 
    api.deliteCards(cardIp) 
    .then(() => { 
        cardObject.deleteCard()
        popupFormDelite.close(); 
    })
    .catch((error) => console.log(`Ошибка при удалении карточки: ${error}`)) 
    .finally(() =>{ 
      
      rendererLoading(false, '.popup_delite', textButtonSave); 
    }); 
    
  }  
}
  );
popupFormDelite.setEventListeners();


// Make class Section for first cards
/*
const baseCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    baseCards.addItem(cardElement);
  }
},
  '.elements',
);
*/



//TODO fix render for api 

const popupFormPlace = new PopupWithForm(
  '.popup_place',
  {
    submitForm: (data) => {
      const textButtonSave = document.querySelector('.popup_place').querySelector('.popup__save ').textContent;
      rendererLoading(true, '.popup_place', textButtonSave, 'Сохранение...');
      const forRender = {
        link: data.popupStatus,
        name: data.popupName,
      };

      api.addCards(forRender)
      .then((forRender) => {
        const cardElement = createCard(forRender);
        baseCards.addItem(cardElement);
        popupFormPlace.close();
      })
      .catch((error) => console.log(`Ошибка при добавлении карточки: ${error}`))
      .finally(() =>{
        rendererLoading(false, '.popup_place', textButtonSave);
      });
  }

    });







popupFormPlace.setEventListeners();

const changeUserInfo = new UserInfo(
  profileName,
  profileStatusProfession,
  profileAvatar
);


const popupFormAvatar = new PopupWithForm(
  '.popup_avatar',
  {
    submitForm: (data) => {
      const textButtonSave = document.querySelector('.popup_avatar').querySelector('.popup__save ').textContent;
      rendererLoading(true, '.popup_avatar', textButtonSave, 'Сохранение...');
      api.editAvatar(data.popupStatus)
      .then((data) =>{
        changeUserInfo.changeUserAvatar(data.avatar);
        popupFormAvatar.close();
      })
      .catch((error) => console.log(`Ошибка при изменении аватара: ${error}`))
      .finally(() =>{
        rendererLoading(false, '.popup_avatar', textButtonSave);
      });
    }
    }

  
);
popupFormAvatar.setEventListeners();

const popupFormProfil = new PopupWithForm(
  '.popup_profil',
  {
    submitForm: (data) => {
      const textButtonSave = document.querySelector('.popup_profil').querySelector('.popup__save ').textContent;
      rendererLoading(true, '.popup_profil',textButtonSave, 'Сохранение...');
      api.editProfil(data)
      .then((data) =>{
        changeUserInfo.setUserInfo(data.name, data.about);
        popupFormProfil.close();
      })
      .catch((error) => console.log(`Ошибка при изменении профиля: ${error}`))
      .finally(() =>{
        rendererLoading(false, '.popup_profil', textButtonSave);
      });;
    }

  }
);
popupFormProfil.setEventListeners();

editButton.addEventListener('click', () => {
  nameInput.value = changeUserInfo.getUserInfo().name;
  jobInput.value = changeUserInfo.getUserInfo().status;
  popupFormProfil.open();
});





addButton.addEventListener('click', () => {
  popupPlaceValid.disableButton();
  popupFormPlace.open();
});






