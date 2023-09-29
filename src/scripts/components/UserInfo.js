export default class UserInfo {
    constructor(userName, userStatus) {
        this._userName = userName;
        this._userStatus = userStatus;

        this._profileName = document.querySelector('.profile__name');
        this._profileStatusProfession = document.querySelector('.profile__status');
    }

    getUserInfo() {
        return ({
            name: this._userName,
            status: this._userStatus,
        });
    }

    setUserInfo() {
        this._profileName.textContent = this._userName;
        this._profileStatusProfession.textContent = this._userStatus;
    }




}