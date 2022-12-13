import logo from './logo.svg';
import './App.css';
import Componentone from './component/Componentone';
import Componenttwo from './component/Componenttwo';
import {Router} from '@reach/router';
import Componentthree from './component/Componentthree';


function App() {

  return (
    <div className="App">
    <Router>
<Componentone path="/home"></Componentone>
<Componenttwo path="/:greet"></Componenttwo>
<Componentthree path="/:greet/:color/:background"></Componentthree>
</Router>
    </div>
  );
}

export default App;
