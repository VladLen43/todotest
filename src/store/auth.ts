import { makeObservable, observable } from "mobx"
import { UserType } from "../types"



class Auth {

    users : UserType[] = []

    user?: UserType = undefined

 
    constructor() {
        makeObservable(this, {
            user: observable,
        });
        }

    getUsers(users: UserType[]) {
        this.users = users
    }

    getUser (user: UserType) {
        this.user = user;
    }

    loginUser(userData : { username: string; password: string}) {
      
        if(this.users.find((user : UserType) => user.username === userData.username)) {
            const localUser = this.users.find((user : UserType) => user.username === userData.username)
            localStorage.setItem("user", JSON.stringify(localUser));
        }
            else {
            alert("User not found")
        }
   
    }
    logoutUser() {
        this.user = undefined
        localStorage.removeItem("user")
    }

    addUser(userData: UserType) {
        if(this.users.find((user : UserType) => user.username === userData.username)){
            alert("User with this nickname already exists")
        }
        this.users.push(userData)
        localStorage.setItem("users", JSON.stringify(this.users))
    }

}
export default new Auth()