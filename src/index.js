import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import FormSignin from './components/FormSignin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<h1>404</h1>} />
      {/* <Route path="connect" element={<Connect />} */}
      <Route path="signin" element={<FormSignin />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
