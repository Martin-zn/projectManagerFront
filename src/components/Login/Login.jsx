import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/login';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state)=>state.auth.error);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(login({username, password}))
        navigate('/project');
    };
        
  return (
    <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

        </div>
  )
}

export default Login
