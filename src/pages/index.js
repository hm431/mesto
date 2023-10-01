import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
//import Popup from "../components/Popup.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import './index.css';
import {
  popupProfil,
  popupPlace,
  selectorImagePopup,
  //  backgraundPlace,
  //  backgraundProfil,
  editButton,
  addButton,
  //  buttonClosePopupProfile,
  //  buttonClosePopupPlace,
  //  buttonClosePopupElement,
  nameInput,
  jobInput,
  profileName,
  profileStatusProfession,
  elementsTemplate,
  // popupFormProfil,
  // popupFormPlace,
  // savePlaсe,
  elementsContainer,
  // nameCardInput,
  //imgCardInput,
  parameters,
  initialCards
} from '../scripts//utils/constants.js';


export const popupProfilValid = new FormValidator(parameters, popupProfil);
export const popupPlaceValid = new FormValidator(parameters, popupPlace);

popupProfilValid.enableValidation();
popupPlaceValid.enableValidation();


function createCard(item) {
  // тут создаете карточку и возвращаете ее
  const cardElement = new Card(
    item.name,
    item.link,
    elementsTemplate,
    {
      handleCardClick: (evt) => {
        imagePopup.open(item.link, item.name);
      }
    },)
  return cardElement.addElement();
}


const imagePopup = new PopupWithImage(
  '.popup_element');
imagePopup.setEventListeners();






// Make class Section for first cards
const baseCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    baseCards.addItem(cardElement);
  }
},
  '.elements',
);


const popupFormPlace = new PopupWithForm(
  '.popup_place',
  {
    submitForm: (data) => {
      const forRender = {
        link: data.popupStatus,
        name: data.popupName
      };

      const cardElement = createCard(forRender);
      baseCards.addItem(cardElement);
      popupFormPlace.close();
    }

  }
);


popupFormPlace.setEventListeners();

const changeUserInfo = new UserInfo(
  profileName,
  profileStatusProfession
);

const popupFormProfil = new PopupWithForm(
  '.popup_profil',
  {
    submitForm: (data) => {
      //   evt.preventDefault(); 
      changeUserInfo.setUserInfo(
        data.popupName,
        data.popupStatus
      );

      popupFormProfil.close();
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




