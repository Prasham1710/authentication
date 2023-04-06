import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Firebase authentication
      </h1>
      <AuthContextProvider>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account'element={<Account/>} />
      </Routes></BrowserRouter>
      </AuthContextProvider>
      
      
      </div>
  );
}

export default App;