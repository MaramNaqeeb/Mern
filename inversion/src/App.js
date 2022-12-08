import logo from './logo.svg';
import './App.css';
import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <div className="App">
    <PersonalCard firstName={"Doe,"} lastName={"Jane"} age={45} color={"Black"}></PersonalCard>

    <PersonalCard firstName={"Smith,"} lastName={"Jone"} age={88} color={"Brown"}></PersonalCard>

    <PersonalCard firstName={"Fillmore,"} lastName={"Millar"} age={50} color={"Brown"}></PersonalCard>
    <PersonalCard firstName={"Smith,"} lastName={"Maria"} age={62} color={"Brown"}></PersonalCard>
   </div>
  
  );
}

export default App;
