export default class UserInfo {
    constructor(userName, userStatus) {
        this._userName = userName;
        this._userStatus = userStatus;

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