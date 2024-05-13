import { makeAutoObservable } from "mobx"
import { UserType } from "../types"


class Auth {

    users = JSON.parse(localStorage.getItem("users") || "[]")

    user = localStorage.getItem("user")

    access = this.user ? true : false

    constructor() {
        makeAutoObservable(this)
    }


    loginUser(userData: UserType) {
        
        if(this.users.find((user : UserType) => user.id === userData.id)) {
            this.access = true;
            localStorage.setItem("user", JSON.stringify(userData));
    
        }
            else {
            alert("User not found")
        }
   
    }
    logoutUser() {
        this.access = false;
        localStorage.removeItem("user")
    }

    addUser(userData: UserType) {
        if(this.users.find((user : UserType) => user.id !== userData.id)){
            this.users.push(userData)
            localStorage.setItem("users", JSON.stringify(userData))
        }
    }

}
export default new Auth()