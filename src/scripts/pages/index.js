import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import '../../pages/index.css';
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
  //  nameInput,
  //  jobInput,
  //  profileName,
  //  profileStatusProfession,
  elementsTemplate,
  // popupFormProfil,
  // popupFormPlace,
  // savePlaсe,
  elementsContainer,
  // nameCardInput,
  //imgCardInput,
  parameters,
  initialCards
} from '../utils/constants.js';


export const popupProfilValid = new FormValidator(parameters, popupProfil);
export const popupPlaceValid = new FormValidator(parameters, popupPlace);

popupProfilValid.enableValidation();
popupPlaceValid.enableValidation();



const imagePopup = new PopupWithImage(
  selectorImagePopup);


// Make class Section for first cards
const baseCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(
      item.name,
      item.link,
      elementsTemplate,
      {
        handleCardClick: (evt) => {
          imagePopup.open(item.link, item.name);
        }
      },)

    const cardElement = card.addElement();
    baseCards.addItem(cardElement);
  }
},
  elementsContainer,
);


const popupFormPlace = new PopupWithForm(
  popupPlace,
  {
    formSunbit: (data) => {
      const forRender = [];
      forRender.push(data);
      console.log(forRender);
      const newCards = new Section({
        items: forRender,
        renderer: (item) => {
          const car = new Card(
            item.popupName,
            item.popupStatus,
            elementsTemplate,
            {
              handleCardClick: (evt) => {
                imagePopup.open(item.popupStatus, item.popupName);
              }
            },)

          const cardElement = car.addElement();
          newCards.addItem(cardElement);
        }
      },
        elementsContainer,
      );
      popupFormPlace.close();

      newCards.renderItems();

    }

  }
);



const popupFormProfil = new PopupWithForm(
  popupProfil,
  {
    formSunbit: (data) => {
      const changeUserInfo = new UserInfo(
        data.popupName,
        data.popupStatus
      );

      changeUserInfo.setUserInfo();
      popupFormProfil.close();

      console.log(data);

    }

  }
);


editButton.addEventListener('click', () => popupFormProfil.open());
addButton.addEventListener('click', () => popupFormPlace.open());

baseCards.renderItems();




