import axios from "axios";
import { API_BASE_URL } from "../config/config";
import { registerFailure, registerSucces } from "../store/authSlice";

export const registerUSer = (userData) => async (dispatch) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/user/register`, userData);
        const user = response.data;

        if (user.jwt){
            localStorage.setItem("jwt", user.jwt);
            localStorage.setItem("username", user.username)
            console.log("jwt guardado e el local storage");
        }

        dispatch(registerSucces(user));

    }catch(error){
        dispatch(registerFailure(error.message));

    }
}