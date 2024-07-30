import axios from 'axios';
import { api, API_BASE_URL } from '../config/config'
import { useState } from 'react';

export const findAll = async() => {
    try {
        const response = await api.get("/project");
        console.log(api)
        return response;
    } catch (error) {
        console.log(error, 'Error en fin all service js')
    }
    return null;
}


