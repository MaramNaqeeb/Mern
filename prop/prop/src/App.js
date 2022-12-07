import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header firstName={"Doe,"} lastName={"Jane"} age={45} color={"Black"}></Header>

     <Header firstName={"Smith,"} lastName={"Jone"} age={88} color={"Brown"}></Header>

     <Header firstName={"Fillmore,"} lastName={"Millar"} age={50} color={"Brown"}></Header>
     <Header firstName={"Smith,"} lastName={"Maria"} age={62} color={"Brown"}></Header>
    </div>
  );
}

export default App;
