import { makeAutoObservable } from "mobx"
import { UserList, UserType } from "../types"




class Auth {
 user: UserType = {
            id: "",
            username: "vlad",
            password: "1234",
            access: false,
    
        }

    constructor() {
        makeAutoObservable(this)
    }
    loginUser(users: UserType) {

        if(users.username === "vlad" && users.password === "1234") {

        this.user.access = true;
        console.log(this.user.access)
    }
   
    }
    removeUser() {
        this.user.access = false;
        console.log(this.user.access)
    }
    
    // loginUser(id: string) {
    //     this.user = this.user.map(user => user.id === id ? {...user, access : !user.access} : user)
    // }
  
}
export default new Auth()