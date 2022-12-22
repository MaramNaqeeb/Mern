import './App.css';
import Main from './views/Main'

import React from 'react'

import Update from './views/Update'
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
<Update path="/edit/:id/"/>
<New path="/new"/>
</Router>

    </div>
  );
}

export default App;
