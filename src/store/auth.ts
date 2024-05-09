import { makeAutoObservable } from "mobx"
import { UserType } from "../types"


const user = localStorage.getItem("user") ? true : false;

class Auth {

    users = JSON.parse(localStorage.getItem("users") || "[]")

    access = user ? true : false

    constructor() {
        makeAutoObservable(this)
    }
    loginUser(userData: UserType) {

        if(this.users.find((user : UserType) => user.username === userData.username)) {
            this.access = true;
            localStorage.setItem("user", JSON.stringify(userData));
    
    }
    else {
        alert("User not found")
    }
   
    }
    removeUser() {
        this.access = false;
        console.log(this.access)
        localStorage.removeItem("user")
    }

    addUser(userData: UserType) {
        if(this.users.find((user : UserType) => user.username !== userData.username))
        this.users.push(userData)
    }
    

}
export default new Auth()