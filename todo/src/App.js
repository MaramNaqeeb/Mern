import "./App.css";
import Form from "./component/Form";
import Todo from "./component/Todo";
import { useState } from "react";
import Display from "./component/Display";

function App() {
  const [todos, setTodos] = useState([]);
  // const [list,setList]=useState([]);
  // const [complete, setComplete] = useState(false);

  // function deleteItem(x){
  // setList([ ...list.slice(0, x), ...list.slice(x+1) ]);

  const fun1 = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTask = (id) => {
    console.log("hi") 
    setTodos(todos.filter((todo, i) => id != i));
  };

  const updateTask = (id) => {
    const tasktoupdate = todos.filter((todo, i) => i == id);
    tasktoupdate[0].completed = !tasktoupdate[0].completed;
    setTodos([...todos]);
  };
  //   }
  //   const findList=list.filter((value,id)=>{
  //  return id!=deleteId
  //   })
  //   setList(findList)
  return (
    <div className="App">
      <Form todos={todos} myfun={fun1}></Form>
      <Display todos={todos} deleteTask={deleteTask} updateTask={updateTask}>
      </Display>
    </div>
  );
}

export default App;
