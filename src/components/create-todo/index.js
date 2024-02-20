import styles from "./index.module.css";
import {useLocalStorage} from "usehooks-ts";
import {useState} from "react";

function CreateTodo() {
    
    const [todos, setTodos] = useLocalStorage
    ("TODO_KEY",[]);

    
    //let todo;
    const[todo, setTodo]=useState("");
   //define the function at the top give it a name 
    function collectInput(event)

        {// the variable where the input will be stored
            setTodo(event.target.value);
        }

        function saveTodo(){
            // pseudocode- 
            // get existing list of todos from local storage (old list)
            // the or operator "||"  an if statement  can also be used
            
            // // deserialize
            // let todos = JSON.parse(localStorage.getItem("TODO_KEY"))|| [];
            // // add new todo to existing list of todos
            // todos.push(todo);
            // Set all todos in local storage
            // serialize
            // localStorage.setItem("TODO_KEY", JSON.stringify(todos)); (...) -> spread operator
           

            setTodos([...todos,todo]);
        }
    return(
        // <p>Create Todo</p>
        //allowing the textfield to accept values
        <section className={styles.createTodosection}>
            <input
             onChange= {event => setTodo(event.target.value)}
             className={styles.createTodoinput1} 
              placeholder ="Start typing..."/>

 
            <button 
            onClick={()=>setTodos([...todos,todo])}
            className={`btn ${styles.btn} `}
            > 
            Create </button>
        </section>
    );
}

export default CreateTodo;