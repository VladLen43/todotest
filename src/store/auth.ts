import { makeAutoObservable } from "mobx"
import { UserList, UserType } from "../types"


const user = localStorage.getItem("user") ? true : false;

class Auth {

    users = JSON.parse(localStorage.getItem("users") || "[]")

    user: UserType = {
            id: "",
            username: "",
            password: "",
            access: user,
    
        }

    constructor() {
        makeAutoObservable(this)
    }
    loginUser(userData: UserType) {

        if(this.users.find((user : UserType) => user.username === userData.username)) {
            this.user.access = true;
            localStorage.setItem("user", JSON.stringify(userData));
    
    }
    else {
        alert("User not found")
    }
   
    }
    removeUser() {
        this.user.access = false;
        console.log(this.user.access)
        localStorage.removeItem("user")
    }

    addUser(userData: UserType) {
        if(this.users.find((user : UserType) => user.username !== userData.username))
        this.users.push(userData)
    }
    

}
export default new Auth()