import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
         Authentication 
      </h1>
      <AuthContextProvider>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account'element={  <ProtectedRoute>
                <Account />
              </ProtectedRoute>} />
      </Routes></BrowserRouter>
      </AuthContextProvider>
      
      
      </div>
  );
}

export default App;