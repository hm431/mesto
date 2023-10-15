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

   



//TODO Сделать анимацию подругзки в попапе 

//TODO Сделать Подгрузку Лайков


//TODO Сделать удаление карточки с сервера

//TODO Починить попап аватара 









avatarChange.addEventListener('click', ()=> {
  popupAvatarValid.disableButton();
  popupFormAvatar.open();
});






const ipOfUser = "652bcb85c314911103f0f0c3";



const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-77",
  headers: {
    authorization:'f8a7d69d-f431-4bab-b92e-a7dc9553106e',
    "Content-type": 'application/json'
  },
  myID: '4cf7de22ee0db0377c56b935'
}

const api = new Api(apiConfig);


const baseCards = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    baseCards.addItem(cardElement);
  }
},
  '.elements',
);

api.getCards()
  .then((item) => {
    console.log('real end here', item);
    baseCards.renderItems(item.reverse()); 
    
    
  })
 // .catch((error)=>console.log(error));


api.getUserInfo()
  .then((item) => {
    console.log('real end here', item);
    changeUserInfo.setUserInfo(item.name, item.about);
    changeUserInfo.changeUserAvatar(item.avatar);
  })
  .catch((error)=>console.log(error));



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
    item.likes.length,
    item.owner._id === apiConfig.myID,
    {
      handleCardClick: (evt) => {
        imagePopup.open(item.link, item.name);
      },
      handleCardDelite: (element) =>{
        popupFormDelite.open(element, item._id);
      },
      handleCardLike: (isLike) =>{
        api.changeLike(isLike, item._id)
        .then((
          console.log('работаем)))) ')
        ))
        .catch((error) => console.log(`Ошибка при добавлении карточки: ${error}`));
      }
    },
    )
  return cardElement.addElement();
}


const imagePopup = new PopupWithImage(
  '.popup_element');
imagePopup.setEventListeners();



const popupFormDelite = new PopupWithFormDelite(
  '.popup__delite',
  {
    deliteFromApi: (cardIp) => {
      rendererLoading(true, '.popup__delite');
    api.deliteCards(cardIp)
    .catch((error) => console.log(`Ошибка при добавлении карточки: ${error}`))
    .finally(() =>{
      rendererLoading(false, '.popup__delite');
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
      rendererLoading(true, '.popup_place');
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
        rendererLoading(false, '.popup_place');
      });
  }

    });


function rendererLoading(isLoading, selectorPopup){
  if(isLoading){
    document.querySelector(selectorPopup).querySelector('.popup__save ').textContent = 'Сохранение...';
  }
  else{
    document.querySelector(selectorPopup).querySelector('.popup__save ').textContent = 'Создать';
  }
}




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
      rendererLoading(true, '.popup_avatar');
      api.editAvatar(data.popupStatus)
      .then((data) =>{
        console.log(data);
        changeUserInfo.changeUserAvatar(data.avatar);
        popupFormAvatar.close();
      })
      .catch((error) => console.log(`Ошибка при изменении аватара: ${error}`))
      .finally(() =>{
        rendererLoading(false, '.popup_avatar');
      });
    }
    }

  
);
popupFormAvatar.setEventListeners();

const popupFormProfil = new PopupWithForm(
  '.popup_profil',
  {
    submitForm: (data) => {
      rendererLoading(true, '.popup_profil');
      api.editProfil(data)
      .then((data) =>{
        console.log(data);
        changeUserInfo.setUserInfo(data.name, data.about);
        popupFormProfil.close();
        console.log('sssj');
      })
      .catch((error) => console.log(`Ошибка при изменении профиля: ${error}`))
      .finally(() =>{
        rendererLoading(false, '.popup_profil');
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

baseCards.renderItems();




