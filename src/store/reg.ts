import { makeAutoObservable } from "mobx"
import { UserList, UserType } from "../types"


class Register {
 users =[
    {
        id: "",
    }
 ]
    constructor() {
        makeAutoObservable(this)
    }
    
  
}
export default new Register()