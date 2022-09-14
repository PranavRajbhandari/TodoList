import React, {useState, useEffect} from 'react'
import './App.css';

// Importing components
import Form from "./components/Form"
import TodoList from './components/TodoList';

function App() {
  // State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  // this status is for all completed , and uncompleted
  const [filteredTodos,setFilteredTodos] = useState([]); 
  
  // Run once when app start
  useEffect(() =>{
    getLocalTodos();
  }, []);
  // useEffect
  useEffect(() => {
    filterHandler(); 
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
            setFilteredTodos(todos);
            break;  
    }
  };

  // Save to local
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
// to save even we refresh website
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
    }
  };

    return (
    <div className="App">
     <header>
      <h1> Todo List</h1>
     </header>
     <Form inputText={inputText}
                  todos={todos}
                  setTodos={setTodos}
                 setInputText={setInputText}
                 setStatus={setStatus}
                
                  />
     {/* it is using props as i have written inside {} so i dont need to write props.setinputtext */}

     <TodoList
      setTodos={setTodos}
       todos={todos}
       filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
