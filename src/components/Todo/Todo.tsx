import React, { useState, useEffect } from "react";
import todo from "../../store/todo";
import styles from "./Todo.module.scss";
import { AcceptSvg } from "./AcceptSvg";
import { TrashCanSvg } from "./TrashCanSvg";
import { Link } from "react-router-dom";

type TodoProps = {
  id: string;
  title: string;
  completed: boolean;
};

export const Todo: React.FC<TodoProps> = ({ id, title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [changedTitle, setChangedTitle] = useState("");

  const changeTodos = (id: string, title: string) => {
    todo.changeTodo(id, title);
    setIsEditing(!isEditing);
  };
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
    <div className={styles.todo_container} key={id}>
      <div onDoubleClick={() => setIsEditing(!isEditing)}>
        {isEditing ? (
          <div  className={styles.edit_todo}>
            <input
              type="text"
              value={changedTitle}
              onChange={(e) => setChangedTitle(e.target.value)}
            />
            <button onClick={() => changeTodos(id, changedTitle)}>ok</button>
          </div>
        ) : (
            <span style={completed ? {color: '#78CFB0'} : {color: '##9E78CF'}}>{title}</span>
          
        )}
      </div>
    <div className={styles.buttons}>
      <div
        className={styles.todo_complete}
        onClick={() => todo.completeTodo(id)}    
      >
           <AcceptSvg />  
        
      </div>
      
      <div
        className={styles.delete_button}
        onClick={() => todo.removeTodo(id)}
      >
       <TrashCanSvg />
      </div>
    </div>
</div>
  );
};
