import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registerUSer } from '../../service/register';



  const RegisterForm = () => {
    const [formData, setFormData] = useState({
      username: '',
      name: '',
      lastname: '',
      email: '',
      number: '',
      password: '',
      roleRequest: {
        roleListName: ['USER'], // Puedes cambiar el rol predeterminado aquí
      },
    });
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
 
  
    const handleChange = (e) => {
      const { name, value } = e.target;

      if (name.includes('roleRequest')) {
        setFormData({
          ...formData,
          roleRequest: {
            roleListName: [value], // Solo un rol por ahora
          },
        });

      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(registerUSer(formData));
      navigate('/')
    };
  
        
  return (
    <form onSubmit={handleSubmit} className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Registro de Usuario</h4>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <select name="roleRequest" onChange={handleChange} className="form-select">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="INVITED">Invited</option>
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
  )
}

export default RegisterForm
