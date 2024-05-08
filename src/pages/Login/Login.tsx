import React, { useEffect, useState } from "react";
import { Login } from "../../components/LoginComp/Login";
import users from '../../store/auth'
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  return (
    
        <Login />
         
  );
}
