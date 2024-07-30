import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    username: '',
    token:'',
    isAuthenticated: false,
    error: null,
};

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSucces:(state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.jwt ;
            state.isAuthenticated = true;
            state.error = null;
        },
        loginFailure:(state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.username = '';
            state.token = '' ;
            state.isAuthenticated = false;
            state.error = null;
            localStorage.removeItem('jwt');
            localStorage.removeItem('username');

        },
        checkAuth:(state) => {
            const token = localStorage.getItem('jwt');
            if(token){
                state.token = token;
                state.isAuthenticated = true;
            }
        },
        registerSucces: (state, action) =>{
            state.username = action.payload.username;
            state.isAuthenticated = true;
            state.error = null;
        },
        registerFailure: (state, action) =>{
            state.error = action.payload;
        }
    },
});

export const { loginSucces, loginFailure, logout, checkAuth, registerSucces, registerFailure } = authSlice.actions;

export default authSlice.reducer;







