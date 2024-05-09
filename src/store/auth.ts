import { makeAutoObservable } from "mobx"
import {  UserType } from "../types"




class Auth {

    user = localStorage.getItem("user")

    access = this.user ? true : false

    constructor() {
        makeAutoObservable(this)
    }
    loginUser(users: UserType) {
        // Временное решения (TODO: добавить базу юзеров)
        if(users.username === "vlad" && users.password === "1234") {

        this.access = true;
    }
   
    }
    removeUser() {
        this.access = false;
    }

  
}
export default new Auth()