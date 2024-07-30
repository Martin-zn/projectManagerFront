import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../service/logout';
import './Navbar.css'

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = localStorage.getItem("username")

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      console.log("El token existe", token)
      console.log("isAuthenticated: ", isAuthenticated)
    }
    // if(token || isAuthenticated){
    //   loged = true;
    // }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        {isAuthenticated ? (
          <>
            <Link to="/" className="navbar-brand mb-0 h1">GESTOR DE PROYECTOS</Link>
            <Link to="/project" className="navbar-brand me-2">PROYECTOS</Link>
          </>
        ) : (
          <div>
            <Link to="/" className="navbar-brand mb-0 h1">GESTOR DE PROYECTOS</Link>
          </div>
        )}
        <div className="ms-auto">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="btn btn-outline-light btn-circle p-1 m-1 " >{username.substring(0,1).toUpperCase()}</Link>
              <button onClick={handleLogout} className="btn btn-outline-light ">Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-success me-2">
                INICIAR SESION
              </Link>
              <Link to="/register" className="btn btn-success">
                REGISTRARSE
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;