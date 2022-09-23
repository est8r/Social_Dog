import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCriar from './LoginCriar';
import LoginRedefinir from './LoginRedefinir';
import LoginEsqueceu from './LoginEsqueceu';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCriar />} />
        <Route path="/redefinir" element={<LoginRedefinir />} />
        <Route path="/esqueceu" element={<LoginEsqueceu />} />
      </Routes>
    </div>
  );
};
export default Login;
