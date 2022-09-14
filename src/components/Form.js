import React from 'react'

// function Form() {
//     return(

//     )
// }
// its same function or const Form

const Form = ({  inputText, setInputText,todos, setTodos,setStatus }) => {
    // it is using props as i have written inside {} so i dont need to write props.setinputtext 
    // Here i can write javascript code and function

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    ;}

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000 }
            // ...todos if i have alerady todos in list just pass it

        ]);
        setInputText(""); 
    };
    const statusHandler = (e) => {
          setStatus(e.target.value)  
    }
    return(
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}  / >
            <button className='todo-button' type='submit' onClick={submitTodoHandler}>
                    <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select name='todos' className='filter-todo' onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">UnCompleted</option>


                </select>

            </div>

        </form>


    );
}
export default Form;