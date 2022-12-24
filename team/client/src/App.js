import './App.css';
import Main from './views/Main'

import React from 'react'

import New from './views/New'

// import {  
//   BrowserRouter as Router,  

// }   
// from 'react-router-dom';
import { Router } from '@reach/router';

function App() {
  
  return (
    <div className="App">
      
<Router>
<Main path="/"/>
<New path="/players/addplayer"/>
</Router>

    </div>
  );
}

export default App;
