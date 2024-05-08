import { makeAutoObservable } from "mobx"
import { UserType } from "../types"
import axios from "axios"



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
        // Через localstorage
        // if(this.users.find((user : UserType) => user.username === userData.username)) {
        //     this.user.access = true;
        //      localStorage.setItem("user", JSON.stringify(userData));
        //
        // }
        //     else {
        //     alert("User not found")
        // }

        // backend
        const  { data }  = await axios.post('http://localhost:4444/auth/login', userData)    

        localStorage.setItem("token", JSON.stringify(data.token))
        this.user.access = true
       
    
    }

        logoutUser() {
            localStorage.removeItem("token")
            this.user.access = false;
        }

     
    async addUser (params :any)  {
         
        const { data } = await axios.post('http://localhost:4444/auth/register', params)

        localStorage.setItem("token", JSON.stringify(data.token))
        this.user.access = true;
        this.user.fullName = data.fullName;

        return data
           
        }
    
    removeUser(username : string) {
        
    }
  
}
export default new Auth()