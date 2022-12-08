import React, {useState,useEffect} from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {

  // USE STATE
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //USE EFFECT
  useEffect(() => {
    const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  }

    filterHandler();
  }, [todos,status])

  

  
  return (
    <div className="App">
      <h1>Monk's Taskify</h1>
      <Input 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText} 
      setStatus={setStatus}
      />
      <TodoList 
      filteredTodos={filteredTodos}
      todos={todos} 
      setTodos={setTodos} 
      />
    </div>
  );
}

export default App;
