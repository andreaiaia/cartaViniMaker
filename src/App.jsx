import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Main from './Components/MainChoice';
import Builder from './Components/Builder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            exact path='/' 
            element={<Main />}
          />
          <Route 
            exact path='/rossi'
            element={<Builder choice={'rossi'} />}
          />
          <Route 
            exact path='/bianchi'
            element={<Builder choice={'bianchi'} />}
          />
          <Route 
            exact path='/rosati'
            element={<Builder choice={'rosati'} />}
          />
          <Route 
            exact path='/bollicine'
            element={<Builder choice={'bollicine'} />}
          />
          <Route 
            exact path='/birre'
            element={<Builder choice={'birre'} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
