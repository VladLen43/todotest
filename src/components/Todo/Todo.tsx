import { useState, useEffect } from "react";
import todos from "../../store/todo";
import styles from "./Todo.module.scss";
import { AcceptSvg } from "./AcceptSvg";
import { TrashCanSvg } from "./TrashCanSvg";
import { todoType } from "../../types";

interface ITodo{
  td: todoType
}

export const Todo = ({td}: ITodo): JSX.Element => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const changeTodoTitle = (id: string) => {
    if(newTitle.length !== 0){
      todos.editTodo(id, 'title', newTitle) 
    }
 
  };

  const changeTodoStatus = (id: string) => {
    todos.editTodo(id, 'completed', td.completed)
  }
  const back = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", back, true);

    return () => {
      document.removeEventListener("keydown", back, false);
    };
  }, []);

  return (
    <div className={styles.todo_container} key={td.id}>
      <div onDoubleClick={() => setIsEditing(!isEditing)}>
        {isEditing ? (
          <div  className={styles.edit_todo}>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={() => changeTodoTitle(td.id)}>ok</button>
          </div>
        ) : (
            <span style={td.completed ? {color: '#78CFB0'} : {color: '##9E78CF'}}>{td.title}</span>
          
        )}
      </div>
    <div className={styles.buttons}>
      <div
        className={styles.todo_complete}
        onClick={() => changeTodoStatus(td.id)}    
      >
           <AcceptSvg />  
        
      </div>
      
      <div
        className={styles.delete_button}
        onClick={() => todos.removeTodo(td.id)}
      >
       <TrashCanSvg />
      </div>
    </div>
</div>
  );
};
