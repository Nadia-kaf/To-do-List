import React from "react";

function TodoList(){
    //let todos =[];

    const [todos,setTodos]= React.useState([]);

    function getTodos() {
        //Get all todos from local storage and store them.
        let todos = JSON.parse(localStorage.getItem("TODO_KEY"))|| [];
        //update React State
        setTodos(todos);
    }

  React.useEffect(getTodos,[]);
    return(
        <ul>
           {todos.map(function(todo, index){
            return <li key={index}>{todo}</li>
            })} 
        </ul>
    );
}

export default TodoList;