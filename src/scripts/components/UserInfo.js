export default class UserInfo {
    constructor(userName, userStatus) {
        this._userName = userName;
        this._userStatus = userStatus;

    //    this._profileName = document.querySelector('.profile__name');
    //    this._profileStatusProfession = document.querySelector('.profile__status');
    }

    getUserInfo() {
        return ({
            name: this._userName.textContent,
            status: this._userStatus.textContent,
        });
    }

    setUserInfo(profilName, profilStatus) {
        this._userName.textContent = profilName;
        this._userStatus.textContent = profilStatus;
    }




}