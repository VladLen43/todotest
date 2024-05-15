import { makeAutoObservable } from "mobx"
import { UserType } from "../types"
import axios from '../axios'



const token = localStorage.getItem("token") ? true : false;


class Auth {


    user: UserType = {
            fullName: "",
            password:   "",
            avatarUrl: "",
            email: "", 
            access: token, 
        }

    constructor() {
        makeAutoObservable(this)
    }


    async loginUser(userData: UserType) {
     
        
        const  { data }  = await axios.post('/auth/login', userData)    

        localStorage.setItem("token",data.token)
        localStorage.setItem("user", JSON.stringify(data))
        this.user.access = true  
    
    }

        logoutUser() {
            localStorage.removeItem("token")
            this.user.access = false;
        }

     
    async addUser (params :any)  {
         
        const { data } = await axios.post('/auth/register', params)


        return data
           
        }
  
}
export default new Auth()