import { API_BASE_URL } from '../config/config'
import axios from "axios";
import { loginFailure, loginSucces } from '../store/authSlice';


export const login = (userData) => async (dispatch) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/user/log`, userData)
        const user = response.data;

        if (user.jwt){
            localStorage.setItem("jwt", user.jwt);
            localStorage.setItem("username", user.username)
            console.log("jwt guardado e el local storage");
            dispatch(loginSucces({username: user.username, token:user.jwt}));
        }else {
            console.log("No se recibió JWT del servidor");
            dispatch(loginFailure('No se recibio JWT'));
        }
    }catch(error){
        console.log("Problema en el logeo dle ususario", error)
        dispatch(loginFailure(error.message));
    }

}