import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Signin from './components/SignIn/Signin';
import Home from './components/Home/Home';
import Course from './components/Courses/Courses';
import UniAbout from './components/UniAbout/UniAbout';
import UniFaq from './components/UniFaq/UniFaq';
import UniComments from './components/UniComments/UniComments';
import AboutUniSearch from './components/AboutUniSearch/AboutUniSearch';
import { Provider } from 'react-redux';
import store from './redux/store'
import Main from './components/main';
import Singup from './components/signup';
import Login from './components/login';
import EmailVerify from './components/EmailVerify';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/signIn" element={< Signin />} />
          <Route path="/home" element={< Home />} />
          <Route path="/aboutUniSearch" element={< AboutUniSearch />} />
          <Route path="/courses" element={< Course />} />
          <Route path="/about_uni/:uniId" element={< UniAbout />} />
          <Route path="/university_faq" element={< UniFaq />} />
          <Route path="/feedback" element={< UniComments />} />
          {/* <Route path="/main" exact element={<Main />} /> */}
          <Route path="/signup" exact element={<Singup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
      <App />
    </React.StrictMode>
  </Provider>
);