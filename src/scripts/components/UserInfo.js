export default class UserInfo {
    constructor(userName, userStatus, userAvatar) {
        this._userName = userName;
        this._userStatus = userStatus;
        this._userAvatar = userAvatar;
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

    changeUserAvatar(avatarUrl){ 
        this._userAvatar.style.backgroundImage =  `url('${avatarUrl}')`;
    }


}