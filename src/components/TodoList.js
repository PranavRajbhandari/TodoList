import React from 'react';
// in this TodoList here we display the list

// importing components
import Todo from './Todo';


const TodoList = ({todos ,setTodos, filteredTodos})=> {
    // from app.js
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
            {filteredTodos.map(todo => (
                <Todo 
                setTodos={setTodos}
                 todos={todos}
                 key={todo.id }
                 todo={todo}
                 text={todo.text} />
                // this is Todo.js
            ))}
            </ul>
               
        </div>
    );
};
export default TodoList;