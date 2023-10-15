const onError = (response) => {
  if (response.ok) {

    return response.json();
  } else {
    return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
  }
}


export default class Api {
  constructor({ url, headers, myID}) {
    this._url = url; //https://mesto.nomoreparties.co/v1/cohort-77
    this._headers = headers; //'f8a7d69d-f431-4bab-b92e-a7dc9553106e'
    this._myID = myID;
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'GET',
    })
      .then((response) => onError(response))
  }


  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'GET',
    })
      .then((response) => onError(response))
  }


  changeLike(isLike, cardId){
    if (isLike){
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT'
    })
      .then((response) => onError(response))
  }
  else{
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((response) => onError(response))
  }
  }
  

  addCards(cardInfo) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name: cardInfo.name,
        link: cardInfo.link
      })
    })
      .then((response) => onError(response))
  }


  editAvatar(avatarLink){
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then((response) => onError(response))
  }


  editProfil(profilData) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: profilData.popupName,
        about: profilData.popupStatus
      })
    })
      .then((response) => onError(response))

  }

  deliteCards(cardId) {

    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
      .then((response) => onError(response))
  }
  

}


