
import Settings from '@mui/icons-material/Settings';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import AddExpenses from './components/AddExpenses';
import Chart from './components/Chart';
import Setting from './components/Settings';
import Assistants from './components/Assistant'

function App() {
  return (
    <div className='d-flex '>
      <NavBar></NavBar>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/AddExpenses" element={<AddExpenses />} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path='/Assistant' element={<Assistants/>}/>
      </Routes>
    </div>
  );
}

export default App;
