import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice'; 
import projectReducer from '../store/projectSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer
  },
});

export default store;