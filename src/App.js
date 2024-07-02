import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import AddItem from './AddItem';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/additem' Component={AddItem}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
