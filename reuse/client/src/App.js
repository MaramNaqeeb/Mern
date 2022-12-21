import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'

import React from 'react'

import Update from './views/Update'
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
<Update path="/products/:id/edit"/>
<Detail path="/:id/"/>
</Router>

    </div>
  );
}

export default App;
