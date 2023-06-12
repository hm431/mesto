let container = document.querySelector('.main');
let editButton = container.querySelector('.Profile__editButton');
let Profile = container.querySelector('.Profile')




function editProfil(){
    let name = document.querySelector('.Profile__name');
    let status = document.querySelector('.Profile__status');

    container.insertAdjacentHTML('beforebegin', `
        <section class="popup">
        <div class="popup__container">
            <img src="/images/Close Icon.svg" alt="Закрыть окно" class="popup__close">
            <h2 class="popup__header">Редактировать профиль</h2>
            <input type="text" placeholder="${name.textContent}" class="popup__input popup_input_name">
            <input type="text" placeholder="${status.textContent}" class="popup__input popup_input_ststus">
            <div class="popup__save">Сохранить</div>
        </div>
    </section>
`);


    let popup = document.querySelector('.popup');
    let closeEdit = document.querySelector('.popup__close');
    let popupSave = document.querySelector('.popup__save');
    

    function handleFormSubmit () {
        let nameInput = document.querySelector('.popup_input_name');
        let statusInput = document.querySelector('.popup_input_ststus')


        document.querySelector('.Profile__name').textContent = nameInput.value;
        document.querySelector('.Profile__status').textContent = statusInput.value;
    }
    popupSave.addEventListener('click', handleFormSubmit);
    // Прикрепляем обработчик к форме:
    // он будет следить за событием “submit” - «отправка»
    //formElement.addEventListener('submit', handleFormSubmit);



    function closePopup(){
        popup.remove();
    }

    closeEdit.addEventListener('click', closePopup);




}

editButton.addEventListener('click', editProfil);








