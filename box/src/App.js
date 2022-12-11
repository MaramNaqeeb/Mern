import logo from './logo.svg';
import './App.css';
import Color from './component/Color';
import Form from './component/Form';
import { useState } from 'react';


function App() {
  const [text,setText]=useState("");
  const [box,setBox]=useState([]);
  return (
    <div className="App">
      <Form fun={setText} fun2={setBox}></Form>
      <Color data={text} data2={box}></Color>
    </div>
  );
}

export default App;
