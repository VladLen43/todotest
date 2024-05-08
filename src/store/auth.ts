import { makeAutoObservable } from "mobx"
import { UserList, UserType } from "../types"
import axios from 'axios'
import { useEffect, useState } from "react";
import { access } from "fs";


const user = localStorage.getItem("user") ? true : false;


class Auth {


    users = JSON.parse(localStorage.getItem('users')||'[]')

    user: UserType = {
            "id": "",
            "username": "",
            "password":   "",
            "access": user,
        }

    constructor() {
        makeAutoObservable(this)
    }


    loginUser(userData: UserType) {
        
        if(this.users.id === userData.id) {
            this.user.access = true;
            localStorage.setItem("user", JSON.stringify(userData));
    
        }
            else {
            alert("User not found")
        }
   
    }
    logoutUser() {
        this.user.access = false;
        console.log(this.user.access)
        localStorage.removeItem("user")
    }

    addUser(userData: UserType) {
        this.users.push(userData);
        localStorage.setItem("users", JSON.stringify(this.users));
 
    }
    removeUser() {
        localStorage.removeItem('users')
        this.user.access = false;
    }

    
    
    // loginUser(id: string) {
    //     this.user = this.user.map(user => user.id === id ? {...user, access : !user.access} : user)
    // }
  
}
export default new Auth()