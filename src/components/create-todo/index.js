import styles from "./index.module.css";
import {useState} from "react";

function CreateTodo() {
    
    const [todo, setTodo] =useState("");

    const saveTodos =async () =>{
       //Post todo to the todo-api
        const response = await fetch('http://localhost:4000/todos',{
            method: 'POST',
            body: JSON.stringify({
                title: todo
            }), 
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        //wipe the input box
        setTodo("");
    }
    
    return(
        // <p>Create Todo</p>
        //allowing the textfield to accept values
        <section className={styles.createTodosection}>
            <input
            value={todo}
            onKeyDown={event=> event.key == "Enter" && 
             saveTodos()}
             onChange= {event => setTodo(event.target.value)}
             className={styles.createTodoinput1} 
              placeholder ="Start typing..."/>

 
            <button 
            onClick={()=>saveTodos()}
            className={`btn ${styles.btn} `}
            > 
            Create </button>
        </section>
    );
}

export default CreateTodo;