
import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Picture from './components/Picture';


function App() {
  return (
    <div className="App">
        <Form></Form>
     <Router>
    
      <People path="/people/:id"></People>
      <Planets path="/planets/:id"></Planets>
      <Picture path="/error"></Picture>
     </Router>
    </div>
  );
}







export default App;
