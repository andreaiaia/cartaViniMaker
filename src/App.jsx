import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Aside from './Components/Aside';
import Builder from './Components/Builder';

function App() {
  const [menu, setMenu] = useState('');

  const choiceHandler = (choice) => {
    setMenu(choice)
  }

  return (
    <div className="App">
        <Header />
        {(menu === '') && <Main choiceHandler={choiceHandler} />}
        {
          (menu !== '') &&
          (
            <>
              <Builder choice={menu} />
              <Aside />
            </>
          )
        }
    </div>
  );
}

export default App;
